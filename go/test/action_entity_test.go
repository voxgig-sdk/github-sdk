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

func TestActionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Action(nil)
		if ent == nil {
			t.Fatal("expected non-nil ActionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"action": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Action(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Action(nil).Stream("list", nil, nil) {
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
		setup := actionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "action." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ACTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		actionRef01Ent := client.Action(nil)
		actionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "action"}), "action_ref01"))
		actionRef01Data["artifact_id"] = setup.idmap["artifact01"]
		actionRef01Data["attempt_number"] = setup.idmap["attempt_number01"]
		actionRef01Data["environment_id"] = setup.idmap["environment01"]
		actionRef01Data["environment_name"] = setup.idmap["environment_name01"]
		actionRef01Data["name"] = setup.idmap["name01"]
		actionRef01Data["org_id"] = setup.idmap["org01"]
		actionRef01Data["owner"] = setup.idmap["owner01"]
		actionRef01Data["repo"] = setup.idmap["repo01"]
		actionRef01Data["run_id"] = setup.idmap["run01"]
		actionRef01Data["runner_group_id"] = setup.idmap["runner_group01"]
		actionRef01Data["runner_id"] = setup.idmap["runner01"]
		actionRef01Data["secret_id"] = setup.idmap["secret01"]
		actionRef01Data["secret_name"] = setup.idmap["secret_name01"]
		actionRef01Data["variable_id"] = setup.idmap["variable01"]
		actionRef01Data["workflow_id"] = setup.idmap["workflow01"]

		actionRef01DataResult, err := actionRef01Ent.Create(actionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		actionRef01Data = core.ToMapAny(entityData(actionRef01DataResult))
		if actionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if actionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		actionRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		actionRef01ListResult, err := actionRef01Ent.List(actionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		actionRef01List, actionRef01ListOk := actionRef01ListResult.([]any)
		if !actionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", actionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(actionRef01List), map[string]any{"id": actionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		actionRef01DataUp0Up := map[string]any{
			"id": actionRef01Data["id"],
		}

		actionRef01MarkdefUp0Name := "access_level"
		actionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-action_ref01_%d", setup.now)
		actionRef01DataUp0Up[actionRef01MarkdefUp0Name] = actionRef01MarkdefUp0Value

		actionRef01ResdataUp0Result, err := actionRef01Ent.Update(actionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		actionRef01ResdataUp0 := core.ToMapAny(entityData(actionRef01ResdataUp0Result))
		if actionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if actionRef01ResdataUp0["id"] != actionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if actionRef01ResdataUp0[actionRef01MarkdefUp0Name] != actionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", actionRef01MarkdefUp0Name, actionRef01ResdataUp0[actionRef01MarkdefUp0Name])
		}

		// LOAD
		actionRef01MatchDt0 := map[string]any{
			"id": actionRef01Data["id"],
		}
		actionRef01DataDt0Loaded, err := actionRef01Ent.Load(actionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		actionRef01DataDt0LoadResult := core.ToMapAny(entityData(actionRef01DataDt0Loaded))
		if actionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if actionRef01DataDt0LoadResult["id"] != actionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		actionRef01MatchRm0 := map[string]any{
			"id": actionRef01Data["id"],
		}
		_, err = actionRef01Ent.Remove(actionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		actionRef01MatchRt0 := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		actionRef01ListRt0Result, err := actionRef01Ent.List(actionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		actionRef01ListRt0, actionRef01ListRt0Ok := actionRef01ListRt0Result.([]any)
		if !actionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", actionRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(actionRef01ListRt0), map[string]any{"id": actionRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func actionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "action", "ActionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read action test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse action test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"action01", "action02", "action03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "user01", "user02", "user03", "hosted_runner01", "hosted_runner02", "hosted_runner03", "repository01", "repository02", "repository03", "runner_group01", "runner_group02", "runner_group03", "runner01", "runner02", "runner03", "secret01", "secret02", "secret03", "variable01", "variable02", "variable03", "artifact01", "artifact02", "artifact03", "cache01", "cache02", "cache03", "job01", "job02", "job03", "run01", "run02", "run03", "workflow01", "workflow02", "workflow03", "environment01", "environment02", "environment03", "label01", "label02", "label03", "attempt01", "attempt02", "attempt03", "attempt_number01", "environment_name01", "name01", "owner01", "secret_name01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_ACTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_ACTION_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_ACTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
