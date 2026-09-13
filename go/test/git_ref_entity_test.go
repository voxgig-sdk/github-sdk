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

func TestGitRefEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GitRef(nil)
		if ent == nil {
			t.Fatal("expected non-nil GitRefEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := git_refBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "git_ref." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_GIT_REF_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		gitRefRef01Ent := client.GitRef(nil)
		gitRefRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "git_ref"}), "git_ref_ref01"))
		gitRefRef01Data["owner"] = setup.idmap["owner01"]
		gitRefRef01Data["repo"] = setup.idmap["repo01"]

		gitRefRef01DataResult, err := gitRefRef01Ent.Create(gitRefRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		gitRefRef01Data = core.ToMapAny(entityData(gitRefRef01DataResult))
		if gitRefRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if gitRefRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		gitRefRef01DataUp0Up := map[string]any{
			"id": gitRefRef01Data["id"],
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		gitRefRef01MarkdefUp0Name := "node_id"
		gitRefRef01MarkdefUp0Value := fmt.Sprintf("Mark01-git_ref_ref01_%d", setup.now)
		gitRefRef01DataUp0Up[gitRefRef01MarkdefUp0Name] = gitRefRef01MarkdefUp0Value

		gitRefRef01ResdataUp0Result, err := gitRefRef01Ent.Update(gitRefRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		gitRefRef01ResdataUp0 := core.ToMapAny(entityData(gitRefRef01ResdataUp0Result))
		if gitRefRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if gitRefRef01ResdataUp0["id"] != gitRefRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if gitRefRef01ResdataUp0[gitRefRef01MarkdefUp0Name] != gitRefRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", gitRefRef01MarkdefUp0Name, gitRefRef01ResdataUp0[gitRefRef01MarkdefUp0Name])
		}

		// LOAD
		gitRefRef01MatchDt0 := map[string]any{
			"id": gitRefRef01Data["id"],
		}
		gitRefRef01DataDt0Loaded, err := gitRefRef01Ent.Load(gitRefRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		gitRefRef01DataDt0LoadResult := core.ToMapAny(entityData(gitRefRef01DataDt0Loaded))
		if gitRefRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if gitRefRef01DataDt0LoadResult["id"] != gitRefRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func git_refBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "git_ref", "GitRefTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read git_ref test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse git_ref test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"git_ref01", "git_ref02", "git_ref03", "repo01", "repo02", "repo03", "matching_ref01", "matching_ref02", "matching_ref03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_GIT_REF_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_GIT_REF_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_GIT_REF_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
	}
	// Add repo alias for update test.
	if idmapResolved["repo"] == nil {
		idmapResolved["repo"] = idmapResolved["repo01"]
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
