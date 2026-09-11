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

func TestOrgPrivateRegistryConfigurationWithSelectedRepositoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrgPrivateRegistryConfigurationWithSelectedRepository(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := org_private_registry_configuration_with_selected_repositoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "org_private_registry_configuration_with_selected_repository." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_ORG_PRIVATE_REGISTRY_CONFIGURATION_WITH_SELECTED_REPOSITORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Ent := client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil)
		orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "org_private_registry_configuration_with_selected_repository"}), "org_private_registry_configuration_with_selected_repository_ref01"))
		orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data["org"] = setup.idmap["org01"]

		orgPrivateRegistryConfigurationWithSelectedRepositoryRef01DataResult, err := orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Ent.Create(orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data = core.ToMapAny(entityData(orgPrivateRegistryConfigurationWithSelectedRepositoryRef01DataResult))
		if orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if orgPrivateRegistryConfigurationWithSelectedRepositoryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func org_private_registry_configuration_with_selected_repositoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "org_private_registry_configuration_with_selected_repository", "OrgPrivateRegistryConfigurationWithSelectedRepositoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read org_private_registry_configuration_with_selected_repository test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse org_private_registry_configuration_with_selected_repository test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"org_private_registry_configuration_with_selected_repository01", "org_private_registry_configuration_with_selected_repository02", "org_private_registry_configuration_with_selected_repository03", "org01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_ORG_PRIVATE_REGISTRY_CONFIGURATION_WITH_SELECTED_REPOSITORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_ORG_PRIVATE_REGISTRY_CONFIGURATION_WITH_SELECTED_REPOSITORY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_ORG_PRIVATE_REGISTRY_CONFIGURATION_WITH_SELECTED_REPOSITORY_ENTID"])
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
