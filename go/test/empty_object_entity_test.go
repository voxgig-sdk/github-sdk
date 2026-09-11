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

func TestEmptyObjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EmptyObject(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmptyObjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := empty_objectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "empty_object." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_EMPTY_OBJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		emptyObjectRef01Ent := client.EmptyObject(nil)
		emptyObjectRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "empty_object"}), "empty_object_ref01"))
		emptyObjectRef01Data["environment_id"] = setup.idmap["environment01"]
		emptyObjectRef01Data["org_id"] = setup.idmap["org01"]
		emptyObjectRef01Data["owner"] = setup.idmap["owner01"]
		emptyObjectRef01Data["repo"] = setup.idmap["repo01"]
		emptyObjectRef01Data["username"] = setup.idmap["username01"]

		emptyObjectRef01DataResult, err := emptyObjectRef01Ent.Create(emptyObjectRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		emptyObjectRef01Data = core.ToMapAny(entityData(emptyObjectRef01DataResult))
		if emptyObjectRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		emptyObjectRef01DataUp0Up := map[string]any{
		}

		emptyObjectRef01MarkdefUp0Name := "encrypted_value"
		emptyObjectRef01MarkdefUp0Value := fmt.Sprintf("Mark01-empty_object_ref01_%d", setup.now)
		emptyObjectRef01DataUp0Up[emptyObjectRef01MarkdefUp0Name] = emptyObjectRef01MarkdefUp0Value

		emptyObjectRef01ResdataUp0Result, err := emptyObjectRef01Ent.Update(emptyObjectRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		emptyObjectRef01ResdataUp0 := core.ToMapAny(entityData(emptyObjectRef01ResdataUp0Result))
		if emptyObjectRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if emptyObjectRef01ResdataUp0[emptyObjectRef01MarkdefUp0Name] != emptyObjectRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", emptyObjectRef01MarkdefUp0Name, emptyObjectRef01ResdataUp0[emptyObjectRef01MarkdefUp0Name])
		}

		// LOAD
		emptyObjectRef01MatchDt0 := map[string]any{}
		emptyObjectRef01DataDt0Loaded, err := emptyObjectRef01Ent.Load(emptyObjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if emptyObjectRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func empty_objectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "empty_object", "EmptyObjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read empty_object test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse empty_object test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"empty_object01", "empty_object02", "empty_object03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "job01", "job02", "job03", "run01", "run02", "run03", "check_run01", "check_run02", "check_run03", "check_suite01", "check_suite02", "check_suite03", "environment01", "environment02", "environment03", "user01", "user02", "user03", "attestation01", "attestation02", "attestation03", "owner01", "username01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_EMPTY_OBJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_EMPTY_OBJECT_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_EMPTY_OBJECT_ENTID"])
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
