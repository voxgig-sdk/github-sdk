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

func TestProtectedBranchAdminEnforcedEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProtectedBranchAdminEnforced(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProtectedBranchAdminEnforcedEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := protected_branch_admin_enforcedBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "protected_branch_admin_enforced." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		protectedBranchAdminEnforcedRef01Ent := client.ProtectedBranchAdminEnforced(nil)
		protectedBranchAdminEnforcedRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "protected_branch_admin_enforced"}), "protected_branch_admin_enforced_ref01"))
		protectedBranchAdminEnforcedRef01Data["branch_id"] = setup.idmap["branch01"]
		protectedBranchAdminEnforcedRef01Data["owner"] = setup.idmap["owner01"]
		protectedBranchAdminEnforcedRef01Data["repo"] = setup.idmap["repo01"]

		protectedBranchAdminEnforcedRef01DataResult, err := protectedBranchAdminEnforcedRef01Ent.Create(protectedBranchAdminEnforcedRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		protectedBranchAdminEnforcedRef01Data = core.ToMapAny(entityData(protectedBranchAdminEnforcedRef01DataResult))
		if protectedBranchAdminEnforcedRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		protectedBranchAdminEnforcedRef01MatchDt0 := map[string]any{}
		protectedBranchAdminEnforcedRef01DataDt0Loaded, err := protectedBranchAdminEnforcedRef01Ent.Load(protectedBranchAdminEnforcedRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if protectedBranchAdminEnforcedRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func protected_branch_admin_enforcedBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "protected_branch_admin_enforced", "ProtectedBranchAdminEnforcedTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read protected_branch_admin_enforced test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse protected_branch_admin_enforced test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"protected_branch_admin_enforced01", "protected_branch_admin_enforced02", "protected_branch_admin_enforced03", "repo01", "repo02", "repo03", "branch01", "branch02", "branch03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_PROTECTED_BRANCH_ADMIN_ENFORCED_ENTID"])
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
