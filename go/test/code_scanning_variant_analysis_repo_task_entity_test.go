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

func TestCodeScanningVariantAnalysisRepoTaskEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CodeScanningVariantAnalysisRepoTask(nil)
		if ent == nil {
			t.Fatal("expected non-nil CodeScanningVariantAnalysisRepoTaskEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := code_scanning_variant_analysis_repo_taskBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "code_scanning_variant_analysis_repo_task." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSIS_REPO_TASK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		codeScanningVariantAnalysisRepoTaskRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.code_scanning_variant_analysis_repo_task")))
		var codeScanningVariantAnalysisRepoTaskRef01Data map[string]any
		if len(codeScanningVariantAnalysisRepoTaskRef01DataRaw) > 0 {
			codeScanningVariantAnalysisRepoTaskRef01Data = core.ToMapAny(codeScanningVariantAnalysisRepoTaskRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = codeScanningVariantAnalysisRepoTaskRef01Data

		// LOAD
		codeScanningVariantAnalysisRepoTaskRef01Ent := client.CodeScanningVariantAnalysisRepoTask(nil)
		codeScanningVariantAnalysisRepoTaskRef01MatchDt0 := map[string]any{
			"id": codeScanningVariantAnalysisRepoTaskRef01Data["id"],
		}
		codeScanningVariantAnalysisRepoTaskRef01DataDt0Loaded, err := codeScanningVariantAnalysisRepoTaskRef01Ent.Load(codeScanningVariantAnalysisRepoTaskRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		codeScanningVariantAnalysisRepoTaskRef01DataDt0LoadResult := core.ToMapAny(entityData(codeScanningVariantAnalysisRepoTaskRef01DataDt0Loaded))
		if codeScanningVariantAnalysisRepoTaskRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if codeScanningVariantAnalysisRepoTaskRef01DataDt0LoadResult["id"] != codeScanningVariantAnalysisRepoTaskRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func code_scanning_variant_analysis_repo_taskBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "code_scanning_variant_analysis_repo_task", "CodeScanningVariantAnalysisRepoTaskTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read code_scanning_variant_analysis_repo_task test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse code_scanning_variant_analysis_repo_task test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"code_scanning_variant_analysis_repo_task01", "code_scanning_variant_analysis_repo_task02", "code_scanning_variant_analysis_repo_task03", "repo01", "repo02", "repo03", "variant_analysis01", "variant_analysis02", "variant_analysis03", "codeql_variant_analysis01", "owner01", "repo_owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSIS_REPO_TASK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSIS_REPO_TASK_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CODE_SCANNING_VARIANT_ANALYSIS_REPO_TASK_ENTID"])
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
