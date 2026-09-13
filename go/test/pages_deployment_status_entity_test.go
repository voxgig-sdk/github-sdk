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

func TestPagesDeploymentStatusEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PagesDeploymentStatus(nil)
		if ent == nil {
			t.Fatal("expected non-nil PagesDeploymentStatusEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := pages_deployment_statusBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "pages_deployment_status." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PAGES_DEPLOYMENT_STATUS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pagesDeploymentStatusRef01Ent := client.PagesDeploymentStatus(nil)
		pagesDeploymentStatusRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "pages_deployment_status"}), "pages_deployment_status_ref01"))
		pagesDeploymentStatusRef01Data["deployment_id"] = setup.idmap["deployment01"]
		pagesDeploymentStatusRef01Data["owner"] = setup.idmap["owner01"]
		pagesDeploymentStatusRef01Data["repo"] = setup.idmap["repo01"]

		pagesDeploymentStatusRef01DataResult, err := pagesDeploymentStatusRef01Ent.Create(pagesDeploymentStatusRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pagesDeploymentStatusRef01Data = core.ToMapAny(entityData(pagesDeploymentStatusRef01DataResult))
		if pagesDeploymentStatusRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		pagesDeploymentStatusRef01MatchDt0 := map[string]any{}
		pagesDeploymentStatusRef01DataDt0Loaded, err := pagesDeploymentStatusRef01Ent.Load(pagesDeploymentStatusRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if pagesDeploymentStatusRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func pages_deployment_statusBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "pages_deployment_status", "PagesDeploymentStatusTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read pages_deployment_status test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse pages_deployment_status test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"pages_deployment_status01", "pages_deployment_status02", "pages_deployment_status03", "repo01", "repo02", "repo03", "deployment01", "deployment02", "deployment03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_PAGES_DEPLOYMENT_STATUS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_PAGES_DEPLOYMENT_STATUS_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_PAGES_DEPLOYMENT_STATUS_ENTID"])
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
