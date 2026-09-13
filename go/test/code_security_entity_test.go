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

func TestCodeSecurityEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CodeSecurity(nil)
		if ent == nil {
			t.Fatal("expected non-nil CodeSecurityEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := code_securityBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "code_security." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_CODE_SECURITY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		codeSecurityRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.code_security")))
		var codeSecurityRef01Data map[string]any
		if len(codeSecurityRef01DataRaw) > 0 {
			codeSecurityRef01Data = core.ToMapAny(codeSecurityRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = codeSecurityRef01Data

		// UPDATE
		codeSecurityRef01Ent := client.CodeSecurity(nil)
		codeSecurityRef01DataUp0Up := map[string]any{
			"id": codeSecurityRef01Data["id"],
			"org_id": setup.idmap["org_id"],
		}

		codeSecurityRef01MarkdefUp0Name := "advanced_security"
		codeSecurityRef01MarkdefUp0Value := fmt.Sprintf("Mark01-code_security_ref01_%d", setup.now)
		codeSecurityRef01DataUp0Up[codeSecurityRef01MarkdefUp0Name] = codeSecurityRef01MarkdefUp0Value

		codeSecurityRef01ResdataUp0Result, err := codeSecurityRef01Ent.Update(codeSecurityRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		codeSecurityRef01ResdataUp0 := core.ToMapAny(entityData(codeSecurityRef01ResdataUp0Result))
		if codeSecurityRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if codeSecurityRef01ResdataUp0["id"] != codeSecurityRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if codeSecurityRef01ResdataUp0[codeSecurityRef01MarkdefUp0Name] != codeSecurityRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", codeSecurityRef01MarkdefUp0Name, codeSecurityRef01ResdataUp0[codeSecurityRef01MarkdefUp0Name])
		}

	})
}

func code_securityBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "code_security", "CodeSecurityTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read code_security test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse code_security test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"code_security01", "code_security02", "code_security03", "org01", "org02", "org03", "enterpris01", "enterpris02", "enterpris03", "configuration01", "configuration02", "configuration03"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_CODE_SECURITY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_CODE_SECURITY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_CODE_SECURITY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add org_id alias for update test.
	if idmapResolved["org_id"] == nil {
		idmapResolved["org_id"] = idmapResolved["org01"]
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
