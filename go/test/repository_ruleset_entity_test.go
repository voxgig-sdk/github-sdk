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

func TestRepositoryRulesetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryRuleset(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryRulesetEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"repository_ruleset": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RepositoryRuleset(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.RepositoryRuleset(nil).Stream("list", nil, nil) {
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
		setup := repository_rulesetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_ruleset." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REPOSITORY_RULESET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repositoryRulesetRef01Ent := client.RepositoryRuleset(nil)
		repositoryRulesetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "repository_ruleset"}), "repository_ruleset_ref01"))
		repositoryRulesetRef01Data["org_id"] = setup.idmap["org01"]
		repositoryRulesetRef01Data["owner"] = setup.idmap["owner01"]
		repositoryRulesetRef01Data["repo"] = setup.idmap["repo01"]

		repositoryRulesetRef01DataResult, err := repositoryRulesetRef01Ent.Create(repositoryRulesetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repositoryRulesetRef01Data = core.ToMapAny(entityData(repositoryRulesetRef01DataResult))
		if repositoryRulesetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if repositoryRulesetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		repositoryRulesetRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		repositoryRulesetRef01ListResult, err := repositoryRulesetRef01Ent.List(repositoryRulesetRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repositoryRulesetRef01List, repositoryRulesetRef01ListOk := repositoryRulesetRef01ListResult.([]any)
		if !repositoryRulesetRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repositoryRulesetRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(repositoryRulesetRef01List), map[string]any{"id": repositoryRulesetRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		repositoryRulesetRef01DataUp0Up := map[string]any{
			"id": repositoryRulesetRef01Data["id"],
			"org_id": setup.idmap["org_id"],
		}

		repositoryRulesetRef01MarkdefUp0Name := "created_at"
		repositoryRulesetRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_ruleset_ref01_%d", setup.now)
		repositoryRulesetRef01DataUp0Up[repositoryRulesetRef01MarkdefUp0Name] = repositoryRulesetRef01MarkdefUp0Value

		repositoryRulesetRef01ResdataUp0Result, err := repositoryRulesetRef01Ent.Update(repositoryRulesetRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryRulesetRef01ResdataUp0 := core.ToMapAny(entityData(repositoryRulesetRef01ResdataUp0Result))
		if repositoryRulesetRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryRulesetRef01ResdataUp0["id"] != repositoryRulesetRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if repositoryRulesetRef01ResdataUp0[repositoryRulesetRef01MarkdefUp0Name] != repositoryRulesetRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryRulesetRef01MarkdefUp0Name, repositoryRulesetRef01ResdataUp0[repositoryRulesetRef01MarkdefUp0Name])
		}

		// LOAD
		repositoryRulesetRef01MatchDt0 := map[string]any{
			"id": repositoryRulesetRef01Data["id"],
		}
		repositoryRulesetRef01DataDt0Loaded, err := repositoryRulesetRef01Ent.Load(repositoryRulesetRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		repositoryRulesetRef01DataDt0LoadResult := core.ToMapAny(entityData(repositoryRulesetRef01DataDt0Loaded))
		if repositoryRulesetRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if repositoryRulesetRef01DataDt0LoadResult["id"] != repositoryRulesetRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func repository_rulesetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_ruleset", "RepositoryRulesetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_ruleset test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_ruleset test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"repository_ruleset01", "repository_ruleset02", "repository_ruleset03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_REPOSITORY_RULESET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_REPOSITORY_RULESET_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_REPOSITORY_RULESET_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add org_id alias for update test.
	if idmapResolved["org_id"] == nil {
		idmapResolved["org_id"] = idmapResolved["org01"]
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
