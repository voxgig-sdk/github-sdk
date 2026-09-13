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

func TestAuthorizationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Authorization(nil)
		if ent == nil {
			t.Fatal("expected non-nil AuthorizationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := authorizationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "authorization." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_AUTHORIZATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		authorizationRef01Ent := client.Authorization(nil)
		authorizationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "authorization"}), "authorization_ref01"))
		authorizationRef01Data["application_id"] = setup.idmap["application01"]

		authorizationRef01DataResult, err := authorizationRef01Ent.Create(authorizationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		authorizationRef01Data = core.ToMapAny(entityData(authorizationRef01DataResult))
		if authorizationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if authorizationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		authorizationRef01DataUp0Up := map[string]any{
			"id": authorizationRef01Data["id"],
		}

		authorizationRef01MarkdefUp0Name := "access_token"
		authorizationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-authorization_ref01_%d", setup.now)
		authorizationRef01DataUp0Up[authorizationRef01MarkdefUp0Name] = authorizationRef01MarkdefUp0Value

		authorizationRef01ResdataUp0Result, err := authorizationRef01Ent.Update(authorizationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		authorizationRef01ResdataUp0 := core.ToMapAny(entityData(authorizationRef01ResdataUp0Result))
		if authorizationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if authorizationRef01ResdataUp0["id"] != authorizationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if authorizationRef01ResdataUp0[authorizationRef01MarkdefUp0Name] != authorizationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", authorizationRef01MarkdefUp0Name, authorizationRef01ResdataUp0[authorizationRef01MarkdefUp0Name])
		}

	})
}

func authorizationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "authorization", "AuthorizationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read authorization test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse authorization test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"authorization01", "authorization02", "authorization03", "application01", "application02", "application03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_AUTHORIZATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_AUTHORIZATION_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_AUTHORIZATION_ENTID"])
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
