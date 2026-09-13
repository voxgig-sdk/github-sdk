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

func TestEnterpriseTeamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EnterpriseTeam(nil)
		if ent == nil {
			t.Fatal("expected non-nil EnterpriseTeamEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"enterprise_team": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.EnterpriseTeam(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.EnterpriseTeam(nil).Stream("list", nil, nil) {
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
		setup := enterprise_teamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "enterprise_team." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ENTERPRISE_TEAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		enterpriseTeamRef01Ent := client.EnterpriseTeam(nil)
		enterpriseTeamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "enterprise_team"}), "enterprise_team_ref01"))
		enterpriseTeamRef01Data["enterprise"] = setup.idmap["enterprise01"]

		enterpriseTeamRef01DataResult, err := enterpriseTeamRef01Ent.Create(enterpriseTeamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		enterpriseTeamRef01Data = core.ToMapAny(entityData(enterpriseTeamRef01DataResult))
		if enterpriseTeamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if enterpriseTeamRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		enterpriseTeamRef01Match := map[string]any{
			"enterprise": setup.idmap["enterprise01"],
		}

		enterpriseTeamRef01ListResult, err := enterpriseTeamRef01Ent.List(enterpriseTeamRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		enterpriseTeamRef01List, enterpriseTeamRef01ListOk := enterpriseTeamRef01ListResult.([]any)
		if !enterpriseTeamRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", enterpriseTeamRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(enterpriseTeamRef01List), map[string]any{"id": enterpriseTeamRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		enterpriseTeamRef01DataUp0Up := map[string]any{
			"id": enterpriseTeamRef01Data["id"],
			"enterprise": setup.idmap["enterprise"],
		}

		enterpriseTeamRef01MarkdefUp0Name := "created_at"
		enterpriseTeamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-enterprise_team_ref01_%d", setup.now)
		enterpriseTeamRef01DataUp0Up[enterpriseTeamRef01MarkdefUp0Name] = enterpriseTeamRef01MarkdefUp0Value

		enterpriseTeamRef01ResdataUp0Result, err := enterpriseTeamRef01Ent.Update(enterpriseTeamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		enterpriseTeamRef01ResdataUp0 := core.ToMapAny(entityData(enterpriseTeamRef01ResdataUp0Result))
		if enterpriseTeamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if enterpriseTeamRef01ResdataUp0["id"] != enterpriseTeamRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if enterpriseTeamRef01ResdataUp0[enterpriseTeamRef01MarkdefUp0Name] != enterpriseTeamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", enterpriseTeamRef01MarkdefUp0Name, enterpriseTeamRef01ResdataUp0[enterpriseTeamRef01MarkdefUp0Name])
		}

		// LOAD
		enterpriseTeamRef01MatchDt0 := map[string]any{
			"id": enterpriseTeamRef01Data["id"],
		}
		enterpriseTeamRef01DataDt0Loaded, err := enterpriseTeamRef01Ent.Load(enterpriseTeamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		enterpriseTeamRef01DataDt0LoadResult := core.ToMapAny(entityData(enterpriseTeamRef01DataDt0Loaded))
		if enterpriseTeamRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if enterpriseTeamRef01DataDt0LoadResult["id"] != enterpriseTeamRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		enterpriseTeamRef01MatchRm0 := map[string]any{
			"id": enterpriseTeamRef01Data["id"],
		}
		_, err = enterpriseTeamRef01Ent.Remove(enterpriseTeamRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		enterpriseTeamRef01MatchRt0 := map[string]any{
			"enterprise": setup.idmap["enterprise01"],
		}

		enterpriseTeamRef01ListRt0Result, err := enterpriseTeamRef01Ent.List(enterpriseTeamRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		enterpriseTeamRef01ListRt0, enterpriseTeamRef01ListRt0Ok := enterpriseTeamRef01ListRt0Result.([]any)
		if !enterpriseTeamRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", enterpriseTeamRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(enterpriseTeamRef01ListRt0), map[string]any{"id": enterpriseTeamRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func enterprise_teamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "enterprise_team", "EnterpriseTeamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read enterprise_team test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse enterprise_team test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"enterprise_team01", "enterprise_team02", "enterprise_team03", "enterpris01", "enterpris02", "enterpris03", "enterprise01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_ENTERPRISE_TEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_ENTERPRISE_TEAM_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_ENTERPRISE_TEAM_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add enterprise alias for update test.
	if idmapResolved["enterprise"] == nil {
		idmapResolved["enterprise"] = idmapResolved["enterprise01"]
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
