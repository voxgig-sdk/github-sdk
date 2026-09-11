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

func TestGistCommentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GistComment(nil)
		if ent == nil {
			t.Fatal("expected non-nil GistCommentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"gist_comment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.GistComment(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.GistComment(nil).Stream("list", nil, nil) {
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
		setup := gist_commentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "gist_comment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_GIST_COMMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		gistCommentRef01Ent := client.GistComment(nil)
		gistCommentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "gist_comment"}), "gist_comment_ref01"))
		gistCommentRef01Data["gist_id"] = setup.idmap["gist01"]

		gistCommentRef01DataResult, err := gistCommentRef01Ent.Create(gistCommentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		gistCommentRef01Data = core.ToMapAny(entityData(gistCommentRef01DataResult))
		if gistCommentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if gistCommentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		gistCommentRef01Match := map[string]any{
			"gist_id": setup.idmap["gist01"],
		}

		gistCommentRef01ListResult, err := gistCommentRef01Ent.List(gistCommentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		gistCommentRef01List, gistCommentRef01ListOk := gistCommentRef01ListResult.([]any)
		if !gistCommentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", gistCommentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(gistCommentRef01List), map[string]any{"id": gistCommentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		gistCommentRef01DataUp0Up := map[string]any{
			"id": gistCommentRef01Data["id"],
			"gist_id": setup.idmap["gist_id"],
		}

		gistCommentRef01MarkdefUp0Name := "author_association"
		gistCommentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-gist_comment_ref01_%d", setup.now)
		gistCommentRef01DataUp0Up[gistCommentRef01MarkdefUp0Name] = gistCommentRef01MarkdefUp0Value

		gistCommentRef01ResdataUp0Result, err := gistCommentRef01Ent.Update(gistCommentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		gistCommentRef01ResdataUp0 := core.ToMapAny(entityData(gistCommentRef01ResdataUp0Result))
		if gistCommentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if gistCommentRef01ResdataUp0["id"] != gistCommentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if gistCommentRef01ResdataUp0[gistCommentRef01MarkdefUp0Name] != gistCommentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", gistCommentRef01MarkdefUp0Name, gistCommentRef01ResdataUp0[gistCommentRef01MarkdefUp0Name])
		}

		// LOAD
		gistCommentRef01MatchDt0 := map[string]any{
			"id": gistCommentRef01Data["id"],
		}
		gistCommentRef01DataDt0Loaded, err := gistCommentRef01Ent.Load(gistCommentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		gistCommentRef01DataDt0LoadResult := core.ToMapAny(entityData(gistCommentRef01DataDt0Loaded))
		if gistCommentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if gistCommentRef01DataDt0LoadResult["id"] != gistCommentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func gist_commentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "gist_comment", "GistCommentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read gist_comment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse gist_comment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"gist_comment01", "gist_comment02", "gist_comment03", "gist01", "gist02", "gist03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_GIST_COMMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_GIST_COMMENT_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_GIST_COMMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add gist_id alias for update test.
	if idmapResolved["gist_id"] == nil {
		idmapResolved["gist_id"] = idmapResolved["gist01"]
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
