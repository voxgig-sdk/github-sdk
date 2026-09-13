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

func TestMembershipEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Membership(nil)
		if ent == nil {
			t.Fatal("expected non-nil MembershipEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"membership": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Membership(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Membership(nil).Stream("list", nil, nil) {
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
		setup := membershipBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "membership." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_MEMBERSHIP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		membershipRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.membership")))
		var membershipRef01Data map[string]any
		if len(membershipRef01DataRaw) > 0 {
			membershipRef01Data = core.ToMapAny(membershipRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = membershipRef01Data

		// LIST
		membershipRef01Ent := client.Membership(nil)
		membershipRef01Match := map[string]any{
			"enterprise": setup.idmap["enterprise01"],
			"enterprise_team": setup.idmap["enterprise_team01"],
		}

		membershipRef01ListResult, err := membershipRef01Ent.List(membershipRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, membershipRef01ListOk := membershipRef01ListResult.([]any)
		if !membershipRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", membershipRef01ListResult)
		}

		// UPDATE
		membershipRef01DataUp0Up := map[string]any{
			"id": membershipRef01Data["id"],
			"enterprise": setup.idmap["enterprise"],
			"team_id": setup.idmap["team_id"],
		}

		membershipRef01MarkdefUp0Name := "avatar_url"
		membershipRef01MarkdefUp0Value := fmt.Sprintf("Mark01-membership_ref01_%d", setup.now)
		membershipRef01DataUp0Up[membershipRef01MarkdefUp0Name] = membershipRef01MarkdefUp0Value

		membershipRef01ResdataUp0Result, err := membershipRef01Ent.Update(membershipRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		membershipRef01ResdataUp0 := core.ToMapAny(entityData(membershipRef01ResdataUp0Result))
		if membershipRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if membershipRef01ResdataUp0["id"] != membershipRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if membershipRef01ResdataUp0[membershipRef01MarkdefUp0Name] != membershipRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", membershipRef01MarkdefUp0Name, membershipRef01ResdataUp0[membershipRef01MarkdefUp0Name])
		}

		// LOAD
		membershipRef01MatchDt0 := map[string]any{
			"id": membershipRef01Data["id"],
		}
		membershipRef01DataDt0Loaded, err := membershipRef01Ent.Load(membershipRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		membershipRef01DataDt0LoadResult := core.ToMapAny(entityData(membershipRef01DataDt0Loaded))
		if membershipRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if membershipRef01DataDt0LoadResult["id"] != membershipRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func membershipBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "membership", "MembershipTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read membership test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse membership test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"membership01", "membership02", "membership03", "enterpris01", "enterpris02", "enterpris03", "team01", "team02", "team03", "enterprise01", "enterprise_team01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_MEMBERSHIP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_MEMBERSHIP_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_MEMBERSHIP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add enterprise alias for update test.
	if idmapResolved["enterprise"] == nil {
		idmapResolved["enterprise"] = idmapResolved["enterprise01"]
	}
	// Add team_id alias for update test.
	if idmapResolved["team_id"] == nil {
		idmapResolved["team_id"] = idmapResolved["team01"]
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
