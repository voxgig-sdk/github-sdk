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

func TestPullRequestReviewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PullRequestReview(nil)
		if ent == nil {
			t.Fatal("expected non-nil PullRequestReviewEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"pull_request_review": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PullRequestReview(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PullRequestReview(nil).Stream("list", nil, nil) {
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
		setup := pull_request_reviewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "pull_request_review." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PULL_REQUEST_REVIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pullRequestReviewRef01Ent := client.PullRequestReview(nil)
		pullRequestReviewRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "pull_request_review"}), "pull_request_review_ref01"))
		pullRequestReviewRef01Data["owner"] = setup.idmap["owner01"]
		pullRequestReviewRef01Data["pull_id"] = setup.idmap["pull01"]
		pullRequestReviewRef01Data["pull_number"] = setup.idmap["pull_number01"]
		pullRequestReviewRef01Data["repo"] = setup.idmap["repo01"]

		pullRequestReviewRef01DataResult, err := pullRequestReviewRef01Ent.Create(pullRequestReviewRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pullRequestReviewRef01Data = core.ToMapAny(entityData(pullRequestReviewRef01DataResult))
		if pullRequestReviewRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if pullRequestReviewRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		pullRequestReviewRef01Match := map[string]any{
			"owner": setup.idmap["owner01"],
			"pull_number": setup.idmap["pull_number01"],
			"repo": setup.idmap["repo01"],
		}

		pullRequestReviewRef01ListResult, err := pullRequestReviewRef01Ent.List(pullRequestReviewRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		pullRequestReviewRef01List, pullRequestReviewRef01ListOk := pullRequestReviewRef01ListResult.([]any)
		if !pullRequestReviewRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", pullRequestReviewRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(pullRequestReviewRef01List), map[string]any{"id": pullRequestReviewRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		pullRequestReviewRef01DataUp0Up := map[string]any{
			"id": pullRequestReviewRef01Data["id"],
			"owner": setup.idmap["owner"],
			"pull_id": setup.idmap["pull_id"],
			"repo": setup.idmap["repo"],
		}

		pullRequestReviewRef01MarkdefUp0Name := "author_association"
		pullRequestReviewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-pull_request_review_ref01_%d", setup.now)
		pullRequestReviewRef01DataUp0Up[pullRequestReviewRef01MarkdefUp0Name] = pullRequestReviewRef01MarkdefUp0Value

		pullRequestReviewRef01ResdataUp0Result, err := pullRequestReviewRef01Ent.Update(pullRequestReviewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		pullRequestReviewRef01ResdataUp0 := core.ToMapAny(entityData(pullRequestReviewRef01ResdataUp0Result))
		if pullRequestReviewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if pullRequestReviewRef01ResdataUp0["id"] != pullRequestReviewRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if pullRequestReviewRef01ResdataUp0[pullRequestReviewRef01MarkdefUp0Name] != pullRequestReviewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", pullRequestReviewRef01MarkdefUp0Name, pullRequestReviewRef01ResdataUp0[pullRequestReviewRef01MarkdefUp0Name])
		}

		// LOAD
		pullRequestReviewRef01MatchDt0 := map[string]any{
			"id": pullRequestReviewRef01Data["id"],
		}
		pullRequestReviewRef01DataDt0Loaded, err := pullRequestReviewRef01Ent.Load(pullRequestReviewRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		pullRequestReviewRef01DataDt0LoadResult := core.ToMapAny(entityData(pullRequestReviewRef01DataDt0Loaded))
		if pullRequestReviewRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if pullRequestReviewRef01DataDt0LoadResult["id"] != pullRequestReviewRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		pullRequestReviewRef01MatchRm0 := map[string]any{
			"id": pullRequestReviewRef01Data["id"],
		}
		_, err = pullRequestReviewRef01Ent.Remove(pullRequestReviewRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		pullRequestReviewRef01MatchRt0 := map[string]any{
			"owner": setup.idmap["owner01"],
			"pull_number": setup.idmap["pull_number01"],
			"repo": setup.idmap["repo01"],
		}

		pullRequestReviewRef01ListRt0Result, err := pullRequestReviewRef01Ent.List(pullRequestReviewRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		pullRequestReviewRef01ListRt0, pullRequestReviewRef01ListRt0Ok := pullRequestReviewRef01ListRt0Result.([]any)
		if !pullRequestReviewRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", pullRequestReviewRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(pullRequestReviewRef01ListRt0), map[string]any{"id": pullRequestReviewRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func pull_request_reviewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "pull_request_review", "PullRequestReviewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read pull_request_review test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse pull_request_review test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"pull_request_review01", "pull_request_review02", "pull_request_review03", "repo01", "repo02", "repo03", "pull01", "pull02", "pull03", "review01", "review02", "review03", "owner01", "pull_number01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_PULL_REQUEST_REVIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_PULL_REQUEST_REVIEW_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_PULL_REQUEST_REVIEW_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
	}
	// Add pull_id alias for update test.
	if idmapResolved["pull_id"] == nil {
		idmapResolved["pull_id"] = idmapResolved["pull01"]
	}
	// Add repo alias for update test.
	if idmapResolved["repo"] == nil {
		idmapResolved["repo"] = idmapResolved["repo01"]
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
