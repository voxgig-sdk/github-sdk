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

func TestSshSigningKeyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SshSigningKey(nil)
		if ent == nil {
			t.Fatal("expected non-nil SshSigningKeyEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"ssh_signing_key": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SshSigningKey(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SshSigningKey(nil).Stream("list", nil, nil) {
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
		setup := ssh_signing_keyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ssh_signing_key." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_SSH_SIGNING_KEY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		sshSigningKeyRef01Ent := client.SshSigningKey(nil)
		sshSigningKeyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "ssh_signing_key"}), "ssh_signing_key_ref01"))
		sshSigningKeyRef01Data["username"] = setup.idmap["username01"]

		sshSigningKeyRef01DataResult, err := sshSigningKeyRef01Ent.Create(sshSigningKeyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		sshSigningKeyRef01Data = core.ToMapAny(entityData(sshSigningKeyRef01DataResult))
		if sshSigningKeyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if sshSigningKeyRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		sshSigningKeyRef01Match := map[string]any{}

		sshSigningKeyRef01ListResult, err := sshSigningKeyRef01Ent.List(sshSigningKeyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		sshSigningKeyRef01List, sshSigningKeyRef01ListOk := sshSigningKeyRef01ListResult.([]any)
		if !sshSigningKeyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", sshSigningKeyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(sshSigningKeyRef01List), map[string]any{"id": sshSigningKeyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		sshSigningKeyRef01MatchDt0 := map[string]any{
			"id": sshSigningKeyRef01Data["id"],
		}
		sshSigningKeyRef01DataDt0Loaded, err := sshSigningKeyRef01Ent.Load(sshSigningKeyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		sshSigningKeyRef01DataDt0LoadResult := core.ToMapAny(entityData(sshSigningKeyRef01DataDt0Loaded))
		if sshSigningKeyRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if sshSigningKeyRef01DataDt0LoadResult["id"] != sshSigningKeyRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ssh_signing_keyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ssh_signing_key", "SshSigningKeyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ssh_signing_key test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ssh_signing_key test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ssh_signing_key01", "ssh_signing_key02", "ssh_signing_key03", "user01", "user02", "user03", "username01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_SSH_SIGNING_KEY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_SSH_SIGNING_KEY_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
		"GITHUB_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_SSH_SIGNING_KEY_ENTID"])
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
