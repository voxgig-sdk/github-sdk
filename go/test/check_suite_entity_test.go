package sdktest

import (
	"encoding/json"
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

func TestCheckSuiteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CheckSuite(nil)
		if ent == nil {
			t.Fatal("expected non-nil CheckSuiteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := check_suiteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "check_suite." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CHECK_SUITE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		checkSuiteRef01Ent := client.CheckSuite(nil)
		checkSuiteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "check_suite"}), "check_suite_ref01"))
		checkSuiteRef01Data["owner"] = setup.idmap["owner01"]
		checkSuiteRef01Data["repo"] = setup.idmap["repo01"]

		checkSuiteRef01DataResult, err := checkSuiteRef01Ent.Create(checkSuiteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		checkSuiteRef01Data = core.ToMapAny(entityData(checkSuiteRef01DataResult))
		if checkSuiteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if checkSuiteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		checkSuiteRef01MatchDt0 := map[string]any{
			"id": checkSuiteRef01Data["id"],
		}
		checkSuiteRef01DataDt0Loaded, err := checkSuiteRef01Ent.Load(checkSuiteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		checkSuiteRef01DataDt0LoadResult := core.ToMapAny(entityData(checkSuiteRef01DataDt0Loaded))
		if checkSuiteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if checkSuiteRef01DataDt0LoadResult["id"] != checkSuiteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func check_suiteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "check_suite", "CheckSuiteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read check_suite test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse check_suite test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"check_suite01", "check_suite02", "check_suite03", "repo01", "repo02", "repo03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CHECK_SUITE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CHECK_SUITE_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CHECK_SUITE_ENTID"])
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
