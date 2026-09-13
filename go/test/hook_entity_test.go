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

func TestHookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Hook(nil)
		if ent == nil {
			t.Fatal("expected non-nil HookEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"hook": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Hook(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Hook(nil).Stream("list", nil, nil) {
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
		setup := hookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "hook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_HOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		hookRef01Ent := client.Hook(nil)
		hookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "hook"}), "hook_ref01"))
		hookRef01Data["owner"] = setup.idmap["owner01"]
		hookRef01Data["repo"] = setup.idmap["repo01"]

		hookRef01DataResult, err := hookRef01Ent.Create(hookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		hookRef01Data = core.ToMapAny(entityData(hookRef01DataResult))
		if hookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if hookRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		hookRef01Match := map[string]any{
			"owner": setup.idmap["owner01"],
			"repo": setup.idmap["repo01"],
		}

		hookRef01ListResult, err := hookRef01Ent.List(hookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		hookRef01List, hookRef01ListOk := hookRef01ListResult.([]any)
		if !hookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", hookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(hookRef01List), map[string]any{"id": hookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		hookRef01DataUp0Up := map[string]any{
			"id": hookRef01Data["id"],
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		hookRef01MarkdefUp0Name := "created_at"
		hookRef01MarkdefUp0Value := fmt.Sprintf("Mark01-hook_ref01_%d", setup.now)
		hookRef01DataUp0Up[hookRef01MarkdefUp0Name] = hookRef01MarkdefUp0Value

		hookRef01ResdataUp0Result, err := hookRef01Ent.Update(hookRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		hookRef01ResdataUp0 := core.ToMapAny(entityData(hookRef01ResdataUp0Result))
		if hookRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if hookRef01ResdataUp0["id"] != hookRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if hookRef01ResdataUp0[hookRef01MarkdefUp0Name] != hookRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", hookRef01MarkdefUp0Name, hookRef01ResdataUp0[hookRef01MarkdefUp0Name])
		}

		// LOAD
		hookRef01MatchDt0 := map[string]any{
			"id": hookRef01Data["id"],
		}
		hookRef01DataDt0Loaded, err := hookRef01Ent.Load(hookRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		hookRef01DataDt0LoadResult := core.ToMapAny(entityData(hookRef01DataDt0Loaded))
		if hookRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if hookRef01DataDt0LoadResult["id"] != hookRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func hookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "hook", "HookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read hook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse hook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"hook01", "hook02", "hook03", "repo01", "repo02", "repo03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_HOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_HOOK_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_HOOK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
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
