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

func TestCustomPropertyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomProperty(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomPropertyEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_property": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomProperty(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomProperty(nil).Stream("list", nil, nil) {
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
		setup := custom_propertyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_property." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CUSTOM_PROPERTY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		customPropertyRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.custom_property")))
		var customPropertyRef01Data map[string]any
		if len(customPropertyRef01DataRaw) > 0 {
			customPropertyRef01Data = core.ToMapAny(customPropertyRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = customPropertyRef01Data

		// LIST
		customPropertyRef01Ent := client.CustomProperty(nil)
		customPropertyRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		customPropertyRef01ListResult, err := customPropertyRef01Ent.List(customPropertyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, customPropertyRef01ListOk := customPropertyRef01ListResult.([]any)
		if !customPropertyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customPropertyRef01ListResult)
		}

		// UPDATE
		customPropertyRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		customPropertyRef01MarkdefUp0Name := "description"
		customPropertyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_property_ref01_%d", setup.now)
		customPropertyRef01DataUp0Up[customPropertyRef01MarkdefUp0Name] = customPropertyRef01MarkdefUp0Value

		customPropertyRef01ResdataUp0Result, err := customPropertyRef01Ent.Update(customPropertyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customPropertyRef01ResdataUp0 := core.ToMapAny(entityData(customPropertyRef01ResdataUp0Result))
		if customPropertyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customPropertyRef01ResdataUp0[customPropertyRef01MarkdefUp0Name] != customPropertyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customPropertyRef01MarkdefUp0Name, customPropertyRef01ResdataUp0[customPropertyRef01MarkdefUp0Name])
		}

		// LOAD
		customPropertyRef01MatchDt0 := map[string]any{}
		customPropertyRef01DataDt0Loaded, err := customPropertyRef01Ent.Load(customPropertyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if customPropertyRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func custom_propertyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_property", "CustomPropertyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_property test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_property test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_property01", "custom_property02", "custom_property03", "org01", "org02", "org03", "schema01", "schema02", "schema03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CUSTOM_PROPERTY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CUSTOM_PROPERTY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CUSTOM_PROPERTY_ENTID"])
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
