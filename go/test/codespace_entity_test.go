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

func TestCodespaceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Codespace(nil)
		if ent == nil {
			t.Fatal("expected non-nil CodespaceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"codespace": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Codespace(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Codespace(nil).Stream("list", nil, nil) {
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
		setup := codespaceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "codespace." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODESPACE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		codespaceRef01Ent := client.Codespace(nil)
		codespaceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "codespace"}), "codespace_ref01"))
		codespaceRef01Data["codespace_id"] = setup.idmap["codespace01"]
		codespaceRef01Data["codespace_name"] = setup.idmap["codespace_name01"]
		codespaceRef01Data["member_id"] = setup.idmap["member01"]
		codespaceRef01Data["org_id"] = setup.idmap["org01"]
		codespaceRef01Data["owner"] = setup.idmap["owner01"]
		codespaceRef01Data["repo"] = setup.idmap["repo01"]
		codespaceRef01Data["secret_id"] = setup.idmap["secret01"]
		codespaceRef01Data["secret_name"] = setup.idmap["secret_name01"]
		codespaceRef01Data["username"] = setup.idmap["username01"]

		codespaceRef01DataResult, err := codespaceRef01Ent.Create(codespaceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		codespaceRef01Data = core.ToMapAny(entityData(codespaceRef01DataResult))
		if codespaceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if codespaceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		codespaceRef01Match := map[string]any{
			"secret_name": setup.idmap["secret_name01"],
		}

		codespaceRef01ListResult, err := codespaceRef01Ent.List(codespaceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		codespaceRef01List, codespaceRef01ListOk := codespaceRef01ListResult.([]any)
		if !codespaceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", codespaceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(codespaceRef01List), map[string]any{"id": codespaceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		codespaceRef01DataUp0Up := map[string]any{
			"id": codespaceRef01Data["id"],
		}

		codespaceRef01MarkdefUp0Name := "archive_url"
		codespaceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-codespace_ref01_%d", setup.now)
		codespaceRef01DataUp0Up[codespaceRef01MarkdefUp0Name] = codespaceRef01MarkdefUp0Value

		codespaceRef01ResdataUp0Result, err := codespaceRef01Ent.Update(codespaceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		codespaceRef01ResdataUp0 := core.ToMapAny(entityData(codespaceRef01ResdataUp0Result))
		if codespaceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if codespaceRef01ResdataUp0["id"] != codespaceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if codespaceRef01ResdataUp0[codespaceRef01MarkdefUp0Name] != codespaceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", codespaceRef01MarkdefUp0Name, codespaceRef01ResdataUp0[codespaceRef01MarkdefUp0Name])
		}

		// LOAD
		codespaceRef01MatchDt0 := map[string]any{
			"id": codespaceRef01Data["id"],
		}
		codespaceRef01DataDt0Loaded, err := codespaceRef01Ent.Load(codespaceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		codespaceRef01DataDt0LoadResult := core.ToMapAny(entityData(codespaceRef01DataDt0Loaded))
		if codespaceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if codespaceRef01DataDt0LoadResult["id"] != codespaceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		codespaceRef01MatchRm0 := map[string]any{
			"id": codespaceRef01Data["id"],
		}
		_, err = codespaceRef01Ent.Remove(codespaceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		codespaceRef01MatchRt0 := map[string]any{
			"secret_name": setup.idmap["secret_name01"],
		}

		codespaceRef01ListRt0Result, err := codespaceRef01Ent.List(codespaceRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		codespaceRef01ListRt0, codespaceRef01ListRt0Ok := codespaceRef01ListRt0Result.([]any)
		if !codespaceRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", codespaceRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(codespaceRef01ListRt0), map[string]any{"id": codespaceRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func codespaceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "codespace", "CodespaceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read codespace test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse codespace test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"codespace01", "codespace02", "codespace03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "secret01", "secret02", "secret03", "member01", "member02", "member03", "pull01", "pull02", "pull03", "export01", "export02", "export03", "repository01", "repository02", "repository03", "codespace_name01", "owner01", "secret_name01", "username01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CODESPACE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CODESPACE_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CODESPACE_ENTID"])
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
