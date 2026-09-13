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

func TestDeploymentBranchPolicyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DeploymentBranchPolicy(nil)
		if ent == nil {
			t.Fatal("expected non-nil DeploymentBranchPolicyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := deployment_branch_policyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "deployment_branch_policy." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		deploymentBranchPolicyRef01Ent := client.DeploymentBranchPolicy(nil)
		deploymentBranchPolicyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "deployment_branch_policy"}), "deployment_branch_policy_ref01"))
		deploymentBranchPolicyRef01Data["environment_id"] = setup.idmap["environment01"]
		deploymentBranchPolicyRef01Data["environment_name"] = setup.idmap["environment_name01"]
		deploymentBranchPolicyRef01Data["owner"] = setup.idmap["owner01"]
		deploymentBranchPolicyRef01Data["repo"] = setup.idmap["repo01"]

		deploymentBranchPolicyRef01DataResult, err := deploymentBranchPolicyRef01Ent.Create(deploymentBranchPolicyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		deploymentBranchPolicyRef01Data = core.ToMapAny(entityData(deploymentBranchPolicyRef01DataResult))
		if deploymentBranchPolicyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if deploymentBranchPolicyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		deploymentBranchPolicyRef01DataUp0Up := map[string]any{
			"id": deploymentBranchPolicyRef01Data["id"],
			"environment_id": setup.idmap["environment_id"],
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		deploymentBranchPolicyRef01MarkdefUp0Name := "name"
		deploymentBranchPolicyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-deployment_branch_policy_ref01_%d", setup.now)
		deploymentBranchPolicyRef01DataUp0Up[deploymentBranchPolicyRef01MarkdefUp0Name] = deploymentBranchPolicyRef01MarkdefUp0Value

		deploymentBranchPolicyRef01ResdataUp0Result, err := deploymentBranchPolicyRef01Ent.Update(deploymentBranchPolicyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		deploymentBranchPolicyRef01ResdataUp0 := core.ToMapAny(entityData(deploymentBranchPolicyRef01ResdataUp0Result))
		if deploymentBranchPolicyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if deploymentBranchPolicyRef01ResdataUp0["id"] != deploymentBranchPolicyRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if deploymentBranchPolicyRef01ResdataUp0[deploymentBranchPolicyRef01MarkdefUp0Name] != deploymentBranchPolicyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", deploymentBranchPolicyRef01MarkdefUp0Name, deploymentBranchPolicyRef01ResdataUp0[deploymentBranchPolicyRef01MarkdefUp0Name])
		}

		// LOAD
		deploymentBranchPolicyRef01MatchDt0 := map[string]any{
			"id": deploymentBranchPolicyRef01Data["id"],
		}
		deploymentBranchPolicyRef01DataDt0Loaded, err := deploymentBranchPolicyRef01Ent.Load(deploymentBranchPolicyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		deploymentBranchPolicyRef01DataDt0LoadResult := core.ToMapAny(entityData(deploymentBranchPolicyRef01DataDt0Loaded))
		if deploymentBranchPolicyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if deploymentBranchPolicyRef01DataDt0LoadResult["id"] != deploymentBranchPolicyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func deployment_branch_policyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "deployment_branch_policy", "DeploymentBranchPolicyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read deployment_branch_policy test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse deployment_branch_policy test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"deployment_branch_policy01", "deployment_branch_policy02", "deployment_branch_policy03", "repo01", "repo02", "repo03", "environment01", "environment02", "environment03", "environment_name01", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_DEPLOYMENT_BRANCH_POLICY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add environment_id alias for update test.
	if idmapResolved["environment_id"] == nil {
		idmapResolved["environment_id"] = idmapResolved["environment01"]
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
