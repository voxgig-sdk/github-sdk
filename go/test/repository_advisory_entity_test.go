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

func TestRepositoryAdvisoryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryAdvisory(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryAdvisoryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"repository_advisory": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RepositoryAdvisory(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.RepositoryAdvisory(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := repository_advisoryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_advisory." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_REPOSITORY_ADVISORY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repositoryAdvisoryRef01Ent := client.RepositoryAdvisory(nil)
		repositoryAdvisoryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "repository_advisory"}), "repository_advisory_ref01"))
		repositoryAdvisoryRef01Data["org_id"] = setup.idmap["org01"]
		repositoryAdvisoryRef01Data["owner"] = setup.idmap["owner01"]
		repositoryAdvisoryRef01Data["repo"] = setup.idmap["repo01"]

		repositoryAdvisoryRef01DataResult, err := repositoryAdvisoryRef01Ent.Create(repositoryAdvisoryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repositoryAdvisoryRef01Data = core.ToMapAny(entityData(repositoryAdvisoryRef01DataResult))
		if repositoryAdvisoryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		repositoryAdvisoryRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		repositoryAdvisoryRef01ListResult, err := repositoryAdvisoryRef01Ent.List(repositoryAdvisoryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, repositoryAdvisoryRef01ListOk := repositoryAdvisoryRef01ListResult.([]any)
		if !repositoryAdvisoryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repositoryAdvisoryRef01ListResult)
		}

		// UPDATE
		repositoryAdvisoryRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		repositoryAdvisoryRef01MarkdefUp0Name := "closed_at"
		repositoryAdvisoryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_advisory_ref01_%d", setup.now)
		repositoryAdvisoryRef01DataUp0Up[repositoryAdvisoryRef01MarkdefUp0Name] = repositoryAdvisoryRef01MarkdefUp0Value

		repositoryAdvisoryRef01ResdataUp0Result, err := repositoryAdvisoryRef01Ent.Update(repositoryAdvisoryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryAdvisoryRef01ResdataUp0 := core.ToMapAny(entityData(repositoryAdvisoryRef01ResdataUp0Result))
		if repositoryAdvisoryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryAdvisoryRef01ResdataUp0[repositoryAdvisoryRef01MarkdefUp0Name] != repositoryAdvisoryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryAdvisoryRef01MarkdefUp0Name, repositoryAdvisoryRef01ResdataUp0[repositoryAdvisoryRef01MarkdefUp0Name])
		}

		// LOAD
		repositoryAdvisoryRef01MatchDt0 := map[string]any{}
		repositoryAdvisoryRef01DataDt0Loaded, err := repositoryAdvisoryRef01Ent.Load(repositoryAdvisoryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if repositoryAdvisoryRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func repository_advisoryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_advisory", "RepositoryAdvisoryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_advisory test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_advisory test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"repository_advisory01", "repository_advisory02", "repository_advisory03", "org01", "org02", "org03", "repo01", "repo02", "repo03", "security_advisory01", "security_advisory02", "security_advisory03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_REPOSITORY_ADVISORY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_REPOSITORY_ADVISORY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_REPOSITORY_ADVISORY_ENTID"])
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
