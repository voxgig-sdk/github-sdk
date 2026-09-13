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

func TestProtectedBranchPullRequestReviewEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProtectedBranchPullRequestReview(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProtectedBranchPullRequestReviewEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := protected_branch_pull_request_reviewBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "protected_branch_pull_request_review." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set GITHUB_TEST_PROTECTED_BRANCH_PULL_REQUEST_REVIEW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		protectedBranchPullRequestReviewRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.protected_branch_pull_request_review")))
		var protectedBranchPullRequestReviewRef01Data map[string]any
		if len(protectedBranchPullRequestReviewRef01DataRaw) > 0 {
			protectedBranchPullRequestReviewRef01Data = core.ToMapAny(protectedBranchPullRequestReviewRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = protectedBranchPullRequestReviewRef01Data

		// UPDATE
		protectedBranchPullRequestReviewRef01Ent := client.ProtectedBranchPullRequestReview(nil)
		protectedBranchPullRequestReviewRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		protectedBranchPullRequestReviewRef01MarkdefUp0Name := "url"
		protectedBranchPullRequestReviewRef01MarkdefUp0Value := fmt.Sprintf("Mark01-protected_branch_pull_request_review_ref01_%d", setup.now)
		protectedBranchPullRequestReviewRef01DataUp0Up[protectedBranchPullRequestReviewRef01MarkdefUp0Name] = protectedBranchPullRequestReviewRef01MarkdefUp0Value

		protectedBranchPullRequestReviewRef01ResdataUp0Result, err := protectedBranchPullRequestReviewRef01Ent.Update(protectedBranchPullRequestReviewRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		protectedBranchPullRequestReviewRef01ResdataUp0 := core.ToMapAny(entityData(protectedBranchPullRequestReviewRef01ResdataUp0Result))
		if protectedBranchPullRequestReviewRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if protectedBranchPullRequestReviewRef01ResdataUp0[protectedBranchPullRequestReviewRef01MarkdefUp0Name] != protectedBranchPullRequestReviewRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", protectedBranchPullRequestReviewRef01MarkdefUp0Name, protectedBranchPullRequestReviewRef01ResdataUp0[protectedBranchPullRequestReviewRef01MarkdefUp0Name])
		}

		// LOAD
		protectedBranchPullRequestReviewRef01MatchDt0 := map[string]any{}
		protectedBranchPullRequestReviewRef01DataDt0Loaded, err := protectedBranchPullRequestReviewRef01Ent.Load(protectedBranchPullRequestReviewRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if protectedBranchPullRequestReviewRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func protected_branch_pull_request_reviewBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "protected_branch_pull_request_review", "ProtectedBranchPullRequestReviewTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read protected_branch_pull_request_review test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse protected_branch_pull_request_review test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"protected_branch_pull_request_review01", "protected_branch_pull_request_review02", "protected_branch_pull_request_review03", "repo01", "repo02", "repo03", "branch01", "branch02", "branch03", "owner01"},
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
	entidEnvRaw := os.Getenv("GITHUB_TEST_PROTECTED_BRANCH_PULL_REQUEST_REVIEW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GITHUB_TEST_PROTECTED_BRANCH_PULL_REQUEST_REVIEW_ENTID": idmap,
		"GITHUB_TEST_LIVE":      "FALSE",
		"GITHUB_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GITHUB_TEST_PROTECTED_BRANCH_PULL_REQUEST_REVIEW_ENTID"])
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
