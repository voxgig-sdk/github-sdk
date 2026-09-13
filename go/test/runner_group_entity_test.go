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

func TestRunnerGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RunnerGroup(nil)
		if ent == nil {
			t.Fatal("expected non-nil RunnerGroupEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := runner_groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "runner_group." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_RUNNER_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		runnerGroupRef01Ent := client.RunnerGroup(nil)
		runnerGroupRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "runner_group"}), "runner_group_ref01"))
		runnerGroupRef01Data["org_id"] = setup.idmap["org01"]

		runnerGroupRef01DataResult, err := runnerGroupRef01Ent.Create(runnerGroupRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		runnerGroupRef01Data = core.ToMapAny(entityData(runnerGroupRef01DataResult))
		if runnerGroupRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if runnerGroupRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		runnerGroupRef01DataUp0Up := map[string]any{
			"id": runnerGroupRef01Data["id"],
			"org_id": setup.idmap["org_id"],
		}

		runnerGroupRef01MarkdefUp0Name := "hosted_runners_url"
		runnerGroupRef01MarkdefUp0Value := fmt.Sprintf("Mark01-runner_group_ref01_%d", setup.now)
		runnerGroupRef01DataUp0Up[runnerGroupRef01MarkdefUp0Name] = runnerGroupRef01MarkdefUp0Value

		runnerGroupRef01ResdataUp0Result, err := runnerGroupRef01Ent.Update(runnerGroupRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		runnerGroupRef01ResdataUp0 := core.ToMapAny(entityData(runnerGroupRef01ResdataUp0Result))
		if runnerGroupRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if runnerGroupRef01ResdataUp0["id"] != runnerGroupRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if runnerGroupRef01ResdataUp0[runnerGroupRef01MarkdefUp0Name] != runnerGroupRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", runnerGroupRef01MarkdefUp0Name, runnerGroupRef01ResdataUp0[runnerGroupRef01MarkdefUp0Name])
		}

		// LOAD
		runnerGroupRef01MatchDt0 := map[string]any{
			"id": runnerGroupRef01Data["id"],
		}
		runnerGroupRef01DataDt0Loaded, err := runnerGroupRef01Ent.Load(runnerGroupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		runnerGroupRef01DataDt0LoadResult := core.ToMapAny(entityData(runnerGroupRef01DataDt0Loaded))
		if runnerGroupRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if runnerGroupRef01DataDt0LoadResult["id"] != runnerGroupRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func runner_groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "runner_group", "RunnerGroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read runner_group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse runner_group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"runner_group01", "runner_group02", "runner_group03", "org01", "org02", "org03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_RUNNER_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_RUNNER_GROUP_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_RUNNER_GROUP_ENTID"])
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
