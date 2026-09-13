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

func TestInstallationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Installation(nil)
		if ent == nil {
			t.Fatal("expected non-nil InstallationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"installation": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Installation(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Installation(nil).Stream("list", nil, nil) {
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
		setup := installationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "installation." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_INSTALLATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		installationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.installation")))
		var installationRef01Data map[string]any
		if len(installationRef01DataRaw) > 0 {
			installationRef01Data = core.ToMapAny(installationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = installationRef01Data

		// LIST
		installationRef01Ent := client.Installation(nil)
		installationRef01Match := map[string]any{
			"username": setup.idmap["username01"],
		}

		installationRef01ListResult, err := installationRef01Ent.List(installationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, installationRef01ListOk := installationRef01ListResult.([]any)
		if !installationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", installationRef01ListResult)
		}

		// UPDATE
		installationRef01DataUp0Up := map[string]any{
			"id": installationRef01Data["id"],
		}

		installationRef01MarkdefUp0Name := "access_tokens_url"
		installationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-installation_ref01_%d", setup.now)
		installationRef01DataUp0Up[installationRef01MarkdefUp0Name] = installationRef01MarkdefUp0Value

		installationRef01ResdataUp0Result, err := installationRef01Ent.Update(installationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		installationRef01ResdataUp0 := core.ToMapAny(entityData(installationRef01ResdataUp0Result))
		if installationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if installationRef01ResdataUp0["id"] != installationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if installationRef01ResdataUp0[installationRef01MarkdefUp0Name] != installationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", installationRef01MarkdefUp0Name, installationRef01ResdataUp0[installationRef01MarkdefUp0Name])
		}

		// LOAD
		installationRef01MatchDt0 := map[string]any{
			"id": installationRef01Data["id"],
		}
		installationRef01DataDt0Loaded, err := installationRef01Ent.Load(installationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		installationRef01DataDt0LoadResult := core.ToMapAny(entityData(installationRef01DataDt0Loaded))
		if installationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if installationRef01DataDt0LoadResult["id"] != installationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func installationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "installation", "InstallationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read installation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse installation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"installation01", "installation02", "installation03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "user01", "user02", "user03", "username01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_INSTALLATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_INSTALLATION_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_INSTALLATION_ENTID"])
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
