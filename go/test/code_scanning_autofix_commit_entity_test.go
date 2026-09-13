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

func TestCodeScanningAutofixCommitEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CodeScanningAutofixCommit(nil)
		if ent == nil {
			t.Fatal("expected non-nil CodeScanningAutofixCommitEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := code_scanning_autofix_commitBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "code_scanning_autofix_commit." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SCANNING_AUTOFIX_COMMIT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		codeScanningAutofixCommitRef01Ent := client.CodeScanningAutofixCommit(nil)
		codeScanningAutofixCommitRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "code_scanning_autofix_commit"}), "code_scanning_autofix_commit_ref01"))
		codeScanningAutofixCommitRef01Data["alert_id"] = setup.idmap["alert01"]
		codeScanningAutofixCommitRef01Data["owner"] = setup.idmap["owner01"]
		codeScanningAutofixCommitRef01Data["repo"] = setup.idmap["repo01"]

		codeScanningAutofixCommitRef01DataResult, err := codeScanningAutofixCommitRef01Ent.Create(codeScanningAutofixCommitRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		codeScanningAutofixCommitRef01Data = core.ToMapAny(entityData(codeScanningAutofixCommitRef01DataResult))
		if codeScanningAutofixCommitRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func code_scanning_autofix_commitBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "code_scanning_autofix_commit", "CodeScanningAutofixCommitTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read code_scanning_autofix_commit test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse code_scanning_autofix_commit test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"code_scanning_autofix_commit01", "code_scanning_autofix_commit02", "code_scanning_autofix_commit03", "repo01", "repo02", "repo03", "alert01", "alert02", "alert03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CODE_SCANNING_AUTOFIX_COMMIT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CODE_SCANNING_AUTOFIX_COMMIT_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CODE_SCANNING_AUTOFIX_COMMIT_ENTID"])
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
