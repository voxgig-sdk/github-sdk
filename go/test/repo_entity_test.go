package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/github-sdk/go"
	"github.com/voxgig-sdk/github-sdk/go/core"

	vs "github.com/voxgig-sdk/github-sdk/go/utility/struct"
)

func TestRepoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Repo(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepoEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"repo": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Repo(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Repo(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repo." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REPO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repoRef01Ent := client.Repo(nil)
		repoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "repo"}), "repo_ref01"))
		repoRef01Data["branch_id"] = setup.idmap["branch01"]
		repoRef01Data["environment_id"] = setup.idmap["environment01"]
		repoRef01Data["environment_name"] = setup.idmap["environment_name01"]
		repoRef01Data["org_id"] = setup.idmap["org01"]
		repoRef01Data["owner"] = setup.idmap["owner01"]
		repoRef01Data["repo"] = setup.idmap["repo01"]

		repoRef01DataResult, err := repoRef01Ent.Create(repoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repoRef01Data = core.ToMapAny(entityData(repoRef01DataResult))
		if repoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if repoRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		repoRef01Match := map[string]any{
			"environment_name": setup.idmap["environment_name01"],
			"owner": setup.idmap["owner01"],
			"repo": setup.idmap["repo01"],
		}

		repoRef01ListResult, err := repoRef01Ent.List(repoRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repoRef01List, repoRef01ListOk := repoRef01ListResult.([]any)
		if !repoRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repoRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(repoRef01List), map[string]any{"id": repoRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		repoRef01DataUp0Up := map[string]any{
			"id": repoRef01Data["id"],
			"owner": setup.idmap["owner"],
		}

		repoRef01MarkdefUp0Name := "archive_url"
		repoRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repo_ref01_%d", setup.now)
		repoRef01DataUp0Up[repoRef01MarkdefUp0Name] = repoRef01MarkdefUp0Value

		repoRef01ResdataUp0Result, err := repoRef01Ent.Update(repoRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repoRef01ResdataUp0 := core.ToMapAny(entityData(repoRef01ResdataUp0Result))
		if repoRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repoRef01ResdataUp0["id"] != repoRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if repoRef01ResdataUp0[repoRef01MarkdefUp0Name] != repoRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repoRef01MarkdefUp0Name, repoRef01ResdataUp0[repoRef01MarkdefUp0Name])
		}

		// LOAD
		repoRef01MatchDt0 := map[string]any{
			"id": repoRef01Data["id"],
		}
		repoRef01DataDt0Loaded, err := repoRef01Ent.Load(repoRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		repoRef01DataDt0LoadResult := core.ToMapAny(entityData(repoRef01DataDt0Loaded))
		if repoRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if repoRef01DataDt0LoadResult["id"] != repoRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		repoRef01MatchRm0 := map[string]any{
			"id": repoRef01Data["id"],
		}
		_, err = repoRef01Ent.Remove(repoRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		repoRef01MatchRt0 := map[string]any{
			"environment_name": setup.idmap["environment_name01"],
			"owner": setup.idmap["owner01"],
			"repo": setup.idmap["repo01"],
		}

		repoRef01ListRt0Result, err := repoRef01Ent.List(repoRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repoRef01ListRt0, repoRef01ListRt0Ok := repoRef01ListRt0Result.([]any)
		if !repoRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", repoRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(repoRef01ListRt0), map[string]any{"id": repoRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func repoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repo", "RepoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repo test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repo test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"repo01", "repo02", "repo03", "repository_invitation01", "repository_invitation02", "repository_invitation03", "org01", "org02", "org03", "ruleset01", "ruleset02", "ruleset03", "attestation01", "attestation02", "attestation03", "autolink01", "autolink02", "autolink03", "branch01", "branch02", "branch03", "collaborator01", "collaborator02", "collaborator03", "comment01", "comment02", "comment03", "content01", "content02", "content03", "deployment01", "deployment02", "deployment03", "environment01", "environment02", "environment03", "hook01", "hook02", "hook03", "invitation01", "invitation02", "invitation03", "key01", "key02", "key03", "asset01", "asset02", "asset03", "release01", "release02", "release03", "protection01", "protection02", "protection03", "tarball01", "tarball02", "tarball03", "zipball01", "zipball02", "zipball03", "deployment_branch_policy01", "deployment_branch_policy02", "deployment_branch_policy03", "deployment_protection_rule01", "deployment_protection_rule02", "deployment_protection_rule03", "delivery01", "delivery02", "delivery03", "environment_name01", "owner01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("GITHUB_TEST_REPO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_REPO_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_REPO_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
	}

	if env["GITHUB_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["GITHUB_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewGithubSDK(core.ToMapAny(mergedOpts))
	}

	live := env["GITHUB_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["GITHUB_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
