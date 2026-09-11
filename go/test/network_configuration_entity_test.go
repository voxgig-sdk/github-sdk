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

func TestNetworkConfigurationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NetworkConfiguration(nil)
		if ent == nil {
			t.Fatal("expected non-nil NetworkConfigurationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := network_configurationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "network_configuration." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_NETWORK_CONFIGURATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		networkConfigurationRef01Ent := client.NetworkConfiguration(nil)
		networkConfigurationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "network_configuration"}), "network_configuration_ref01"))
		networkConfigurationRef01Data["org_id"] = setup.idmap["org01"]

		networkConfigurationRef01DataResult, err := networkConfigurationRef01Ent.Create(networkConfigurationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		networkConfigurationRef01Data = core.ToMapAny(entityData(networkConfigurationRef01DataResult))
		if networkConfigurationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if networkConfigurationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		networkConfigurationRef01DataUp0Up := map[string]any{
			"id": networkConfigurationRef01Data["id"],
			"org_id": setup.idmap["org_id"],
		}

		networkConfigurationRef01MarkdefUp0Name := "compute_service"
		networkConfigurationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-network_configuration_ref01_%d", setup.now)
		networkConfigurationRef01DataUp0Up[networkConfigurationRef01MarkdefUp0Name] = networkConfigurationRef01MarkdefUp0Value

		networkConfigurationRef01ResdataUp0Result, err := networkConfigurationRef01Ent.Update(networkConfigurationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		networkConfigurationRef01ResdataUp0 := core.ToMapAny(entityData(networkConfigurationRef01ResdataUp0Result))
		if networkConfigurationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if networkConfigurationRef01ResdataUp0["id"] != networkConfigurationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if networkConfigurationRef01ResdataUp0[networkConfigurationRef01MarkdefUp0Name] != networkConfigurationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", networkConfigurationRef01MarkdefUp0Name, networkConfigurationRef01ResdataUp0[networkConfigurationRef01MarkdefUp0Name])
		}

		// LOAD
		networkConfigurationRef01MatchDt0 := map[string]any{
			"id": networkConfigurationRef01Data["id"],
		}
		networkConfigurationRef01DataDt0Loaded, err := networkConfigurationRef01Ent.Load(networkConfigurationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		networkConfigurationRef01DataDt0LoadResult := core.ToMapAny(entityData(networkConfigurationRef01DataDt0Loaded))
		if networkConfigurationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if networkConfigurationRef01DataDt0LoadResult["id"] != networkConfigurationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func network_configurationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "network_configuration", "NetworkConfigurationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read network_configuration test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse network_configuration test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"network_configuration01", "network_configuration02", "network_configuration03", "org01", "org02", "org03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_NETWORK_CONFIGURATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_NETWORK_CONFIGURATION_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_NETWORK_CONFIGURATION_ENTID"])
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
