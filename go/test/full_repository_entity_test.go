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

func TestFullRepositoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FullRepository(nil)
		if ent == nil {
			t.Fatal("expected non-nil FullRepositoryEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := full_repositoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "full_repository." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_FULL_REPOSITORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		fullRepositoryRef01Ent := client.FullRepository(nil)
		fullRepositoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "full_repository"}), "full_repository_ref01"))
		fullRepositoryRef01Data["owner"] = setup.idmap["owner01"]

		fullRepositoryRef01DataResult, err := fullRepositoryRef01Ent.Create(fullRepositoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		fullRepositoryRef01Data = core.ToMapAny(entityData(fullRepositoryRef01DataResult))
		if fullRepositoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if fullRepositoryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		fullRepositoryRef01DataUp0Up := map[string]any{
			"id": fullRepositoryRef01Data["id"],
			"owner": setup.idmap["owner"],
		}

		fullRepositoryRef01MarkdefUp0Name := "archive_url"
		fullRepositoryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-full_repository_ref01_%d", setup.now)
		fullRepositoryRef01DataUp0Up[fullRepositoryRef01MarkdefUp0Name] = fullRepositoryRef01MarkdefUp0Value

		fullRepositoryRef01ResdataUp0Result, err := fullRepositoryRef01Ent.Update(fullRepositoryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		fullRepositoryRef01ResdataUp0 := core.ToMapAny(entityData(fullRepositoryRef01ResdataUp0Result))
		if fullRepositoryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if fullRepositoryRef01ResdataUp0["id"] != fullRepositoryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if fullRepositoryRef01ResdataUp0[fullRepositoryRef01MarkdefUp0Name] != fullRepositoryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", fullRepositoryRef01MarkdefUp0Name, fullRepositoryRef01ResdataUp0[fullRepositoryRef01MarkdefUp0Name])
		}

		// LOAD
		fullRepositoryRef01MatchDt0 := map[string]any{
			"id": fullRepositoryRef01Data["id"],
		}
		fullRepositoryRef01DataDt0Loaded, err := fullRepositoryRef01Ent.Load(fullRepositoryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		fullRepositoryRef01DataDt0LoadResult := core.ToMapAny(entityData(fullRepositoryRef01DataDt0Loaded))
		if fullRepositoryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if fullRepositoryRef01DataDt0LoadResult["id"] != fullRepositoryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func full_repositoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "full_repository", "FullRepositoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read full_repository test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse full_repository test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"full_repository01", "full_repository02", "full_repository03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_FULL_REPOSITORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_FULL_REPOSITORY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_FULL_REPOSITORY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
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
