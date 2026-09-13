# Github Golang SDK



The Golang SDK for the Github API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Action(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/github-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/github-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/github-sdk/go=../github-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/github-sdk/go"
)

func main() {
    client := sdk.New()

    // List action records — the value is the array of records itself.
    actions, err := client.Action(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range actions.([]any) {
        fmt.Println(item)
    }

    // Load a single action — the value is the loaded record.
    action, err := client.Action(nil).Load(map[string]any{"archive_format": "example_archive_format", "artifact_id": 1, "owner": "example_owner", "repo": "example_repo"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(action)

    // Create a action.
    created, err := client.Action(nil).Create(map[string]any{"org_id": "example_org_id", "access_level": "example_access_level", "active_caches_count": 1, "active_caches_size_in_bytes": 1, "actor": map[string]any{}, "allows_public_repositories": true, "approval_policy": "example_approval_policy", "archive_download_url": "example_archive_download_url", "archive_url": "example_archive_url", "artifacts_url": "example_artifacts_url", "assignees_url": "example_assignees_url", "badge_url": "example_badge_url", "blobs_url": "example_blobs_url", "branches_url": "example_branches_url", "busy": true, "cancel_url": "example_cancel_url", "check_run_url": "example_check_run_url", "check_suite_url": "example_check_suite_url", "code_of_conduct": map[string]any{}, "collaborators_url": "example_collaborators_url", "comments_url": "example_comments_url", "commits_url": "example_commits_url", "compare_url": "example_compare_url", "completed_at": "example_completed_at", "conclusion": "example_conclusion", "contents_url": "example_contents_url", "contributors_url": "example_contributors_url", "cpu_cores": 1, "created_at": "example_created_at", "days": 1, "default": true, "deployments_url": "example_deployments_url", "description": "example_description", "display_name": "example_display_name", "display_title": "example_display_title", "downloads_url": "example_downloads_url", "enabled": true, "enabled_repositories": "example_enabled_repositories", "event": "example_event", "events_url": "example_events_url", "expired": true, "expires_at": "example_expires_at", "fork": true, "forks_url": "example_forks_url", "full_name": "example_full_name", "git_commits_url": "example_git_commits_url", "git_refs_url": "example_git_refs_url", "git_tags_url": "example_git_tags_url", "head_branch": "example_head_branch", "head_commit": map[string]any{}, "head_repository": map[string]any{}, "head_sha": "example_head_sha", "hooks_url": "example_hooks_url", "html_url": "example_html_url", "id": 1, "image_details": map[string]any{}, "inherited": true, "issue_comment_url": "example_issue_comment_url", "issue_events_url": "example_issue_events_url", "issues_url": "example_issues_url", "jobs_url": "example_jobs_url", "keys_url": "example_keys_url", "labels": []any{}, "labels_url": "example_labels_url", "languages_url": "example_languages_url", "logs_url": "example_logs_url", "machine_size_details": map[string]any{}, "memory_gb": 1, "merges_url": "example_merges_url", "milestones_url": "example_milestones_url", "name": "example_name", "node_id": "example_node_id", "notifications_url": "example_notifications_url", "os": "example_os", "owner": map[string]any{}, "path": "example_path", "platform": "example_platform", "platforms": []any{}, "private": true, "public_ip_enabled": true, "pull_requests": []any{}, "pulls_url": "example_pulls_url", "ref": "example_ref", "releases_url": "example_releases_url", "repository": map[string]any{}, "rerun_url": "example_rerun_url", "run_id": 1, "run_number": 1, "run_url": "example_run_url", "run_workflows_from_fork_pull_requests": true, "runner_group_id": 1, "runner_group_name": "example_runner_group_name", "runner_id": 1, "runner_name": "example_runner_name", "runners": []any{}, "runners_url": "example_runners_url", "selected_repository_ids": []any{}, "size_gb": 1, "size_in_bytes": 1, "source": "example_source", "stargazers_url": "example_stargazers_url", "started_at": "example_started_at", "state": "example_state", "status": "example_status", "statuses_url": "example_statuses_url", "storage_gb": 1, "subscribers_url": "example_subscribers_url", "subscription_url": "example_subscription_url", "tags_url": "example_tags_url", "teams_url": "example_teams_url", "total_count": 1, "trees_url": "example_trees_url", "triggering_actor": map[string]any{}, "updated_at": "example_updated_at", "url": "example_url", "workflow_id": 1, "workflow_name": "example_workflow_name", "workflow_url": "example_workflow_url"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a action.
    updated, err := client.Action(nil).Update(map[string]any{"org_id": "example_org_id", "repository_id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a action.
    removed, err := client.Action(nil).Remove(map[string]any{"hosted_runner_id": 1, "org_id": "example_org_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
custompropertys, err := client.CustomProperty(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = custompropertys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

customProperty, err := client.CustomProperty(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(customProperty) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewGithubSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewGithubSDK

```go
func NewGithubSDK(options map[string]any) *GithubSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *GithubSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Action` | `(data map[string]any) GithubEntity` | Create an Action entity instance. |
| `ActionsArtifactAndLogRetention` | `(data map[string]any) GithubEntity` | Create an ActionsArtifactAndLogRetention entity instance. |
| `ActionsCacheList` | `(data map[string]any) GithubEntity` | Create an ActionsCacheList entity instance. |
| `ActionsCacheUsageByRepository` | `(data map[string]any) GithubEntity` | Create an ActionsCacheUsageByRepository entity instance. |
| `ActionsCacheUsageOrgEnterprise` | `(data map[string]any) GithubEntity` | Create an ActionsCacheUsageOrgEnterprise entity instance. |
| `ActionsForkPrContributorApproval` | `(data map[string]any) GithubEntity` | Create an ActionsForkPrContributorApproval entity instance. |
| `ActionsForkPrWorkflowsPrivateRepo` | `(data map[string]any) GithubEntity` | Create an ActionsForkPrWorkflowsPrivateRepo entity instance. |
| `ActionsGetDefaultWorkflowPermission` | `(data map[string]any) GithubEntity` | Create an ActionsGetDefaultWorkflowPermission entity instance. |
| `ActionsHostedRunner` | `(data map[string]any) GithubEntity` | Create an ActionsHostedRunner entity instance. |
| `ActionsHostedRunnerLimit` | `(data map[string]any) GithubEntity` | Create an ActionsHostedRunnerLimit entity instance. |
| `ActionsOrganizationPermission` | `(data map[string]any) GithubEntity` | Create an ActionsOrganizationPermission entity instance. |
| `ActionsPublicKey` | `(data map[string]any) GithubEntity` | Create an ActionsPublicKey entity instance. |
| `ActionsRepositoryPermission` | `(data map[string]any) GithubEntity` | Create an ActionsRepositoryPermission entity instance. |
| `ActionsSecret` | `(data map[string]any) GithubEntity` | Create an ActionsSecret entity instance. |
| `ActionsVariable` | `(data map[string]any) GithubEntity` | Create an ActionsVariable entity instance. |
| `ActionsWorkflowAccessToRepository` | `(data map[string]any) GithubEntity` | Create an ActionsWorkflowAccessToRepository entity instance. |
| `Activity` | `(data map[string]any) GithubEntity` | Create an Activity entity instance. |
| `Add` | `(data map[string]any) GithubEntity` | Create an Add entity instance. |
| `ApiInsightsRouteStat` | `(data map[string]any) GithubEntity` | Create an ApiInsightsRouteStat entity instance. |
| `ApiInsightsSubjectStat` | `(data map[string]any) GithubEntity` | Create an ApiInsightsSubjectStat entity instance. |
| `ApiInsightsSummaryStat` | `(data map[string]any) GithubEntity` | Create an ApiInsightsSummaryStat entity instance. |
| `ApiInsightsTimeStat` | `(data map[string]any) GithubEntity` | Create an ApiInsightsTimeStat entity instance. |
| `ApiInsightsUserStat` | `(data map[string]any) GithubEntity` | Create an ApiInsightsUserStat entity instance. |
| `ApiOverview` | `(data map[string]any) GithubEntity` | Create an ApiOverview entity instance. |
| `App` | `(data map[string]any) GithubEntity` | Create an App entity instance. |
| `Artifact` | `(data map[string]any) GithubEntity` | Create an Artifact entity instance. |
| `Assignee` | `(data map[string]any) GithubEntity` | Create an Assignee entity instance. |
| `AuthenticationToken` | `(data map[string]any) GithubEntity` | Create an AuthenticationToken entity instance. |
| `Authorization` | `(data map[string]any) GithubEntity` | Create an Authorization entity instance. |
| `Autolink` | `(data map[string]any) GithubEntity` | Create an Autolink entity instance. |
| `BaseGist` | `(data map[string]any) GithubEntity` | Create a BaseGist entity instance. |
| `BillingUsageReport` | `(data map[string]any) GithubEntity` | Create a BillingUsageReport entity instance. |
| `BillingUsageReportUser` | `(data map[string]any) GithubEntity` | Create a BillingUsageReportUser entity instance. |
| `Blob` | `(data map[string]any) GithubEntity` | Create a Blob entity instance. |
| `Block` | `(data map[string]any) GithubEntity` | Create a Block entity instance. |
| `Branch` | `(data map[string]any) GithubEntity` | Create a Branch entity instance. |
| `BranchProtection` | `(data map[string]any) GithubEntity` | Create a BranchProtection entity instance. |
| `BranchRestrictionPolicy` | `(data map[string]any) GithubEntity` | Create a BranchRestrictionPolicy entity instance. |
| `BranchShort` | `(data map[string]any) GithubEntity` | Create a BranchShort entity instance. |
| `BranchWithProtection` | `(data map[string]any) GithubEntity` | Create a BranchWithProtection entity instance. |
| `Campaign` | `(data map[string]any) GithubEntity` | Create a Campaign entity instance. |
| `Check` | `(data map[string]any) GithubEntity` | Create a Check entity instance. |
| `CheckAnnotation` | `(data map[string]any) GithubEntity` | Create a CheckAnnotation entity instance. |
| `CheckAutomatedSecurityFix` | `(data map[string]any) GithubEntity` | Create a CheckAutomatedSecurityFix entity instance. |
| `CheckRun` | `(data map[string]any) GithubEntity` | Create a CheckRun entity instance. |
| `CheckSuite` | `(data map[string]any) GithubEntity` | Create a CheckSuite entity instance. |
| `CheckSuitePreference` | `(data map[string]any) GithubEntity` | Create a CheckSuitePreference entity instance. |
| `Classroom` | `(data map[string]any) GithubEntity` | Create a Classroom entity instance. |
| `ClassroomAcceptedAssignment` | `(data map[string]any) GithubEntity` | Create a ClassroomAcceptedAssignment entity instance. |
| `ClassroomAssignment` | `(data map[string]any) GithubEntity` | Create a ClassroomAssignment entity instance. |
| `ClassroomAssignmentGrade` | `(data map[string]any) GithubEntity` | Create a ClassroomAssignmentGrade entity instance. |
| `Clone` | `(data map[string]any) GithubEntity` | Create a Clone entity instance. |
| `CodeFrequency` | `(data map[string]any) GithubEntity` | Create a CodeFrequency entity instance. |
| `CodeFrequencyStat` | `(data map[string]any) GithubEntity` | Create a CodeFrequencyStat entity instance. |
| `CodeOfConduct` | `(data map[string]any) GithubEntity` | Create a CodeOfConduct entity instance. |
| `CodeScanning` | `(data map[string]any) GithubEntity` | Create a CodeScanning entity instance. |
| `CodeScanningAlert` | `(data map[string]any) GithubEntity` | Create a CodeScanningAlert entity instance. |
| `CodeScanningAlertInstance` | `(data map[string]any) GithubEntity` | Create a CodeScanningAlertInstance entity instance. |
| `CodeScanningAlertItem` | `(data map[string]any) GithubEntity` | Create a CodeScanningAlertItem entity instance. |
| `CodeScanningAnalysi` | `(data map[string]any) GithubEntity` | Create a CodeScanningAnalysi entity instance. |
| `CodeScanningAnalysisDeletion` | `(data map[string]any) GithubEntity` | Create a CodeScanningAnalysisDeletion entity instance. |
| `CodeScanningAutofix` | `(data map[string]any) GithubEntity` | Create a CodeScanningAutofix entity instance. |
| `CodeScanningAutofixCommit` | `(data map[string]any) GithubEntity` | Create a CodeScanningAutofixCommit entity instance. |
| `CodeScanningCodeqlDatabase` | `(data map[string]any) GithubEntity` | Create a CodeScanningCodeqlDatabase entity instance. |
| `CodeScanningDefaultSetup` | `(data map[string]any) GithubEntity` | Create a CodeScanningDefaultSetup entity instance. |
| `CodeScanningOrganizationAlertItem` | `(data map[string]any) GithubEntity` | Create a CodeScanningOrganizationAlertItem entity instance. |
| `CodeScanningSarifsStatus` | `(data map[string]any) GithubEntity` | Create a CodeScanningSarifsStatus entity instance. |
| `CodeScanningVariantAnalysi` | `(data map[string]any) GithubEntity` | Create a CodeScanningVariantAnalysi entity instance. |
| `CodeScanningVariantAnalysisRepoTask` | `(data map[string]any) GithubEntity` | Create a CodeScanningVariantAnalysisRepoTask entity instance. |
| `CodeSecurity` | `(data map[string]any) GithubEntity` | Create a CodeSecurity entity instance. |
| `CodeSecurityConfiguration` | `(data map[string]any) GithubEntity` | Create a CodeSecurityConfiguration entity instance. |
| `CodeSecurityConfigurationRepository` | `(data map[string]any) GithubEntity` | Create a CodeSecurityConfigurationRepository entity instance. |
| `CodeSecurityDefaultConfiguration` | `(data map[string]any) GithubEntity` | Create a CodeSecurityDefaultConfiguration entity instance. |
| `CodeownersError` | `(data map[string]any) GithubEntity` | Create a CodeownersError entity instance. |
| `Codespace` | `(data map[string]any) GithubEntity` | Create a Codespace entity instance. |
| `Collaborator` | `(data map[string]any) GithubEntity` | Create a Collaborator entity instance. |
| `CombinedBillingUsage` | `(data map[string]any) GithubEntity` | Create a CombinedBillingUsage entity instance. |
| `CombinedCommitStatus` | `(data map[string]any) GithubEntity` | Create a CombinedCommitStatus entity instance. |
| `Commit` | `(data map[string]any) GithubEntity` | Create a Commit entity instance. |
| `CommitActivity` | `(data map[string]any) GithubEntity` | Create a CommitActivity entity instance. |
| `CommitComment` | `(data map[string]any) GithubEntity` | Create a CommitComment entity instance. |
| `CommitComparison` | `(data map[string]any) GithubEntity` | Create a CommitComparison entity instance. |
| `CommunityProfile` | `(data map[string]any) GithubEntity` | Create a CommunityProfile entity instance. |
| `ContentFile` | `(data map[string]any) GithubEntity` | Create a ContentFile entity instance. |
| `ContentTraffic` | `(data map[string]any) GithubEntity` | Create a ContentTraffic entity instance. |
| `Contributor` | `(data map[string]any) GithubEntity` | Create a Contributor entity instance. |
| `Copilot` | `(data map[string]any) GithubEntity` | Create a Copilot entity instance. |
| `CopilotOrganizationDetail` | `(data map[string]any) GithubEntity` | Create a CopilotOrganizationDetail entity instance. |
| `CopilotUsageMetricsDay` | `(data map[string]any) GithubEntity` | Create a CopilotUsageMetricsDay entity instance. |
| `Credential` | `(data map[string]any) GithubEntity` | Create a Credential entity instance. |
| `CustomProperty` | `(data map[string]any) GithubEntity` | Create a CustomProperty entity instance. |
| `CustomPropertyValue` | `(data map[string]any) GithubEntity` | Create a CustomPropertyValue entity instance. |
| `Dependabot` | `(data map[string]any) GithubEntity` | Create a Dependabot entity instance. |
| `DependabotAlert` | `(data map[string]any) GithubEntity` | Create a DependabotAlert entity instance. |
| `DependabotAlertWithRepository` | `(data map[string]any) GithubEntity` | Create a DependabotAlertWithRepository entity instance. |
| `DependabotPublicKey` | `(data map[string]any) GithubEntity` | Create a DependabotPublicKey entity instance. |
| `DependabotRepositoryAccessDetail` | `(data map[string]any) GithubEntity` | Create a DependabotRepositoryAccessDetail entity instance. |
| `DependabotSecret` | `(data map[string]any) GithubEntity` | Create a DependabotSecret entity instance. |
| `DependencyGraph` | `(data map[string]any) GithubEntity` | Create a DependencyGraph entity instance. |
| `DependencyGraphDiff` | `(data map[string]any) GithubEntity` | Create a DependencyGraphDiff entity instance. |
| `DependencyGraphSpdxSbom` | `(data map[string]any) GithubEntity` | Create a DependencyGraphSpdxSbom entity instance. |
| `DeployKey` | `(data map[string]any) GithubEntity` | Create a DeployKey entity instance. |
| `Deployment` | `(data map[string]any) GithubEntity` | Create a Deployment entity instance. |
| `DeploymentBranchPolicy` | `(data map[string]any) GithubEntity` | Create a DeploymentBranchPolicy entity instance. |
| `DeploymentProtectionRule` | `(data map[string]any) GithubEntity` | Create a DeploymentProtectionRule entity instance. |
| `DeploymentStatus` | `(data map[string]any) GithubEntity` | Create a DeploymentStatus entity instance. |
| `DiffEntry` | `(data map[string]any) GithubEntity` | Create a DiffEntry entity instance. |
| `Email` | `(data map[string]any) GithubEntity` | Create an Email entity instance. |
| `Emoji` | `(data map[string]any) GithubEntity` | Create an Emoji entity instance. |
| `EmptyObject` | `(data map[string]any) GithubEntity` | Create an EmptyObject entity instance. |
| `EnterpriseTeam` | `(data map[string]any) GithubEntity` | Create an EnterpriseTeam entity instance. |
| `EnterpriseTeamMembership` | `(data map[string]any) GithubEntity` | Create an EnterpriseTeamMembership entity instance. |
| `Environment` | `(data map[string]any) GithubEntity` | Create an Environment entity instance. |
| `EnvironmentApproval` | `(data map[string]any) GithubEntity` | Create an EnvironmentApproval entity instance. |
| `Event` | `(data map[string]any) GithubEntity` | Create an Event entity instance. |
| `Feed` | `(data map[string]any) GithubEntity` | Create a Feed entity instance. |
| `FileCommit` | `(data map[string]any) GithubEntity` | Create a FileCommit entity instance. |
| `Follower` | `(data map[string]any) GithubEntity` | Create a Follower entity instance. |
| `Following` | `(data map[string]any) GithubEntity` | Create a Following entity instance. |
| `FullRepository` | `(data map[string]any) GithubEntity` | Create a FullRepository entity instance. |
| `Gist` | `(data map[string]any) GithubEntity` | Create a Gist entity instance. |
| `GistComment` | `(data map[string]any) GithubEntity` | Create a GistComment entity instance. |
| `GistCommit` | `(data map[string]any) GithubEntity` | Create a GistCommit entity instance. |
| `GistSimple` | `(data map[string]any) GithubEntity` | Create a GistSimple entity instance. |
| `Git` | `(data map[string]any) GithubEntity` | Create a Git entity instance. |
| `GitCommit` | `(data map[string]any) GithubEntity` | Create a GitCommit entity instance. |
| `GitRef` | `(data map[string]any) GithubEntity` | Create a GitRef entity instance. |
| `GitTag` | `(data map[string]any) GithubEntity` | Create a GitTag entity instance. |
| `GitTree` | `(data map[string]any) GithubEntity` | Create a GitTree entity instance. |
| `Gitignore` | `(data map[string]any) GithubEntity` | Create a Gitignore entity instance. |
| `GitignoreTemplate` | `(data map[string]any) GithubEntity` | Create a GitignoreTemplate entity instance. |
| `GlobalAdvisory` | `(data map[string]any) GithubEntity` | Create a GlobalAdvisory entity instance. |
| `GpgKey` | `(data map[string]any) GithubEntity` | Create a GpgKey entity instance. |
| `Hook` | `(data map[string]any) GithubEntity` | Create a Hook entity instance. |
| `HookDelivery` | `(data map[string]any) GithubEntity` | Create a HookDelivery entity instance. |
| `HookDeliveryItem` | `(data map[string]any) GithubEntity` | Create a HookDeliveryItem entity instance. |
| `HostedCompute` | `(data map[string]any) GithubEntity` | Create a HostedCompute entity instance. |
| `Hovercard` | `(data map[string]any) GithubEntity` | Create a Hovercard entity instance. |
| `Import` | `(data map[string]any) GithubEntity` | Create an Import entity instance. |
| `Installation` | `(data map[string]any) GithubEntity` | Create an Installation entity instance. |
| `InstallationToken` | `(data map[string]any) GithubEntity` | Create an InstallationToken entity instance. |
| `Integration` | `(data map[string]any) GithubEntity` | Create an Integration entity instance. |
| `IntegrationInstallation` | `(data map[string]any) GithubEntity` | Create an IntegrationInstallation entity instance. |
| `Interaction` | `(data map[string]any) GithubEntity` | Create an Interaction entity instance. |
| `InteractionLimit` | `(data map[string]any) GithubEntity` | Create an InteractionLimit entity instance. |
| `Issue` | `(data map[string]any) GithubEntity` | Create an Issue entity instance. |
| `IssueType` | `(data map[string]any) GithubEntity` | Create an IssueType entity instance. |
| `Job` | `(data map[string]any) GithubEntity` | Create a Job entity instance. |
| `Key` | `(data map[string]any) GithubEntity` | Create a Key entity instance. |
| `Label` | `(data map[string]any) GithubEntity` | Create a Label entity instance. |
| `Language` | `(data map[string]any) GithubEntity` | Create a Language entity instance. |
| `License` | `(data map[string]any) GithubEntity` | Create a License entity instance. |
| `Markdown` | `(data map[string]any) GithubEntity` | Create a Markdown entity instance. |
| `MarketplaceListingPlan` | `(data map[string]any) GithubEntity` | Create a MarketplaceListingPlan entity instance. |
| `MarketplacePurchase` | `(data map[string]any) GithubEntity` | Create a MarketplacePurchase entity instance. |
| `Member` | `(data map[string]any) GithubEntity` | Create a Member entity instance. |
| `Membership` | `(data map[string]any) GithubEntity` | Create a Membership entity instance. |
| `MergedUpstream` | `(data map[string]any) GithubEntity` | Create a MergedUpstream entity instance. |
| `Meta` | `(data map[string]any) GithubEntity` | Create a Meta entity instance. |
| `Metaroot` | `(data map[string]any) GithubEntity` | Create a Metaroot entity instance. |
| `Migration` | `(data map[string]any) GithubEntity` | Create a Migration entity instance. |
| `Milestone` | `(data map[string]any) GithubEntity` | Create a Milestone entity instance. |
| `MinimalRepository` | `(data map[string]any) GithubEntity` | Create a MinimalRepository entity instance. |
| `NetworkConfiguration` | `(data map[string]any) GithubEntity` | Create a NetworkConfiguration entity instance. |
| `NetworkSetting` | `(data map[string]any) GithubEntity` | Create a NetworkSetting entity instance. |
| `OidcCustomSub` | `(data map[string]any) GithubEntity` | Create an OidcCustomSub entity instance. |
| `OidcCustomSubRepo` | `(data map[string]any) GithubEntity` | Create an OidcCustomSubRepo entity instance. |
| `Org` | `(data map[string]any) GithubEntity` | Create an Org entity instance. |
| `OrgHook` | `(data map[string]any) GithubEntity` | Create an OrgHook entity instance. |
| `OrgMembership` | `(data map[string]any) GithubEntity` | Create an OrgMembership entity instance. |
| `OrgPrivateRegistryConfiguration` | `(data map[string]any) GithubEntity` | Create an OrgPrivateRegistryConfiguration entity instance. |
| `OrgPrivateRegistryConfigurationWithSelectedRepository` | `(data map[string]any) GithubEntity` | Create an OrgPrivateRegistryConfigurationWithSelectedRepository entity instance. |
| `OrgRepoCustomPropertyValue` | `(data map[string]any) GithubEntity` | Create an OrgRepoCustomPropertyValue entity instance. |
| `Organization` | `(data map[string]any) GithubEntity` | Create an Organization entity instance. |
| `OrganizationActionsSecret` | `(data map[string]any) GithubEntity` | Create an OrganizationActionsSecret entity instance. |
| `OrganizationActionsVariable` | `(data map[string]any) GithubEntity` | Create an OrganizationActionsVariable entity instance. |
| `OrganizationDependabotSecret` | `(data map[string]any) GithubEntity` | Create an OrganizationDependabotSecret entity instance. |
| `OrganizationInvitation` | `(data map[string]any) GithubEntity` | Create an OrganizationInvitation entity instance. |
| `OrganizationProgrammaticAccessGrant` | `(data map[string]any) GithubEntity` | Create an OrganizationProgrammaticAccessGrant entity instance. |
| `OrganizationRole` | `(data map[string]any) GithubEntity` | Create an OrganizationRole entity instance. |
| `OrganizationSecretScanningAlert` | `(data map[string]any) GithubEntity` | Create an OrganizationSecretScanningAlert entity instance. |
| `OutsideCollaborator` | `(data map[string]any) GithubEntity` | Create an OutsideCollaborator entity instance. |
| `Package` | `(data map[string]any) GithubEntity` | Create a Package entity instance. |
| `Page` | `(data map[string]any) GithubEntity` | Create a Page entity instance. |
| `PageBuild` | `(data map[string]any) GithubEntity` | Create a PageBuild entity instance. |
| `PageBuildStatus` | `(data map[string]any) GithubEntity` | Create a PageBuildStatus entity instance. |
| `PageDeployment` | `(data map[string]any) GithubEntity` | Create a PageDeployment entity instance. |
| `PagesDeploymentStatus` | `(data map[string]any) GithubEntity` | Create a PagesDeploymentStatus entity instance. |
| `PagesHealthCheck` | `(data map[string]any) GithubEntity` | Create a PagesHealthCheck entity instance. |
| `Participation` | `(data map[string]any) GithubEntity` | Create a Participation entity instance. |
| `PendingDeployment` | `(data map[string]any) GithubEntity` | Create a PendingDeployment entity instance. |
| `PorterAuthor` | `(data map[string]any) GithubEntity` | Create a PorterAuthor entity instance. |
| `PorterLargeFile` | `(data map[string]any) GithubEntity` | Create a PorterLargeFile entity instance. |
| `PrivateRegistry` | `(data map[string]any) GithubEntity` | Create a PrivateRegistry entity instance. |
| `PrivateUser` | `(data map[string]any) GithubEntity` | Create a PrivateUser entity instance. |
| `Project` | `(data map[string]any) GithubEntity` | Create a Project entity instance. |
| `ProjectCollaboratorPermission` | `(data map[string]any) GithubEntity` | Create a ProjectCollaboratorPermission entity instance. |
| `ProjectColumn` | `(data map[string]any) GithubEntity` | Create a ProjectColumn entity instance. |
| `ProjectsClassic` | `(data map[string]any) GithubEntity` | Create a ProjectsClassic entity instance. |
| `ProjectsV2` | `(data map[string]any) GithubEntity` | Create a ProjectsV2 entity instance. |
| `ProjectsV2Field` | `(data map[string]any) GithubEntity` | Create a ProjectsV2Field entity instance. |
| `ProjectsV2ItemSimple` | `(data map[string]any) GithubEntity` | Create a ProjectsV2ItemSimple entity instance. |
| `ProjectsV2ItemWithContent` | `(data map[string]any) GithubEntity` | Create a ProjectsV2ItemWithContent entity instance. |
| `ProtectedBranch` | `(data map[string]any) GithubEntity` | Create a ProtectedBranch entity instance. |
| `ProtectedBranchAdminEnforced` | `(data map[string]any) GithubEntity` | Create a ProtectedBranchAdminEnforced entity instance. |
| `ProtectedBranchPullRequestReview` | `(data map[string]any) GithubEntity` | Create a ProtectedBranchPullRequestReview entity instance. |
| `PublicMember` | `(data map[string]any) GithubEntity` | Create a PublicMember entity instance. |
| `Pull` | `(data map[string]any) GithubEntity` | Create a Pull entity instance. |
| `PullRequestReview` | `(data map[string]any) GithubEntity` | Create a PullRequestReview entity instance. |
| `PullRequestReviewComment` | `(data map[string]any) GithubEntity` | Create a PullRequestReviewComment entity instance. |
| `PullRequestSimple` | `(data map[string]any) GithubEntity` | Create a PullRequestSimple entity instance. |
| `RateLimit` | `(data map[string]any) GithubEntity` | Create a RateLimit entity instance. |
| `Reaction` | `(data map[string]any) GithubEntity` | Create a Reaction entity instance. |
| `Referrer` | `(data map[string]any) GithubEntity` | Create a Referrer entity instance. |
| `Release` | `(data map[string]any) GithubEntity` | Create a Release entity instance. |
| `ReleaseAsset` | `(data map[string]any) GithubEntity` | Create a ReleaseAsset entity instance. |
| `ReleaseNotesContent` | `(data map[string]any) GithubEntity` | Create a ReleaseNotesContent entity instance. |
| `Remove` | `(data map[string]any) GithubEntity` | Create a Remove entity instance. |
| `Repo` | `(data map[string]any) GithubEntity` | Create a Repo entity instance. |
| `Repository` | `(data map[string]any) GithubEntity` | Create a Repository entity instance. |
| `RepositoryAdvisory` | `(data map[string]any) GithubEntity` | Create a RepositoryAdvisory entity instance. |
| `RepositoryCollaboratorPermission` | `(data map[string]any) GithubEntity` | Create a RepositoryCollaboratorPermission entity instance. |
| `RepositoryInvitation` | `(data map[string]any) GithubEntity` | Create a RepositoryInvitation entity instance. |
| `RepositoryRuleDetailed` | `(data map[string]any) GithubEntity` | Create a RepositoryRuleDetailed entity instance. |
| `RepositoryRuleset` | `(data map[string]any) GithubEntity` | Create a RepositoryRuleset entity instance. |
| `RepositorySubscription` | `(data map[string]any) GithubEntity` | Create a RepositorySubscription entity instance. |
| `ReviewComment` | `(data map[string]any) GithubEntity` | Create a ReviewComment entity instance. |
| `RuleSuite` | `(data map[string]any) GithubEntity` | Create a RuleSuite entity instance. |
| `RulesetVersion` | `(data map[string]any) GithubEntity` | Create a RulesetVersion entity instance. |
| `RulesetVersionWithState` | `(data map[string]any) GithubEntity` | Create a RulesetVersionWithState entity instance. |
| `Runner` | `(data map[string]any) GithubEntity` | Create a Runner entity instance. |
| `RunnerApplication` | `(data map[string]any) GithubEntity` | Create a RunnerApplication entity instance. |
| `RunnerGroup` | `(data map[string]any) GithubEntity` | Create a RunnerGroup entity instance. |
| `Search` | `(data map[string]any) GithubEntity` | Create a Search entity instance. |
| `SecretScanning` | `(data map[string]any) GithubEntity` | Create a SecretScanning entity instance. |
| `SecretScanningAlert` | `(data map[string]any) GithubEntity` | Create a SecretScanningAlert entity instance. |
| `SecretScanningLocation` | `(data map[string]any) GithubEntity` | Create a SecretScanningLocation entity instance. |
| `SecretScanningPatternConfiguration` | `(data map[string]any) GithubEntity` | Create a SecretScanningPatternConfiguration entity instance. |
| `SecretScanningPushProtectionBypass` | `(data map[string]any) GithubEntity` | Create a SecretScanningPushProtectionBypass entity instance. |
| `SecretScanningScanHistory` | `(data map[string]any) GithubEntity` | Create a SecretScanningScanHistory entity instance. |
| `SecurityAdvisory` | `(data map[string]any) GithubEntity` | Create a SecurityAdvisory entity instance. |
| `SelectedAction` | `(data map[string]any) GithubEntity` | Create a SelectedAction entity instance. |
| `SelfHostedRunner` | `(data map[string]any) GithubEntity` | Create a SelfHostedRunner entity instance. |
| `ShortBlob` | `(data map[string]any) GithubEntity` | Create a ShortBlob entity instance. |
| `ShortBranch` | `(data map[string]any) GithubEntity` | Create a ShortBranch entity instance. |
| `SimpleClassroom` | `(data map[string]any) GithubEntity` | Create a SimpleClassroom entity instance. |
| `SimpleClassroomAssignment` | `(data map[string]any) GithubEntity` | Create a SimpleClassroomAssignment entity instance. |
| `SocialAccount` | `(data map[string]any) GithubEntity` | Create a SocialAccount entity instance. |
| `SshSigningKey` | `(data map[string]any) GithubEntity` | Create a SshSigningKey entity instance. |
| `Status` | `(data map[string]any) GithubEntity` | Create a Status entity instance. |
| `StatusCheckPolicy` | `(data map[string]any) GithubEntity` | Create a StatusCheckPolicy entity instance. |
| `Subscriber` | `(data map[string]any) GithubEntity` | Create a Subscriber entity instance. |
| `Tag` | `(data map[string]any) GithubEntity` | Create a Tag entity instance. |
| `TagProtection` | `(data map[string]any) GithubEntity` | Create a TagProtection entity instance. |
| `Team` | `(data map[string]any) GithubEntity` | Create a Team entity instance. |
| `TeamSimple` | `(data map[string]any) GithubEntity` | Create a TeamSimple entity instance. |
| `Thread` | `(data map[string]any) GithubEntity` | Create a Thread entity instance. |
| `ThreadSubscription` | `(data map[string]any) GithubEntity` | Create a ThreadSubscription entity instance. |
| `Topic` | `(data map[string]any) GithubEntity` | Create a Topic entity instance. |
| `User` | `(data map[string]any) GithubEntity` | Create an User entity instance. |
| `UserMarketplacePurchase` | `(data map[string]any) GithubEntity` | Create an UserMarketplacePurchase entity instance. |
| `View` | `(data map[string]any) GithubEntity` | Create a View entity instance. |
| `WebhookConfig` | `(data map[string]any) GithubEntity` | Create a WebhookConfig entity instance. |
| `Workflow` | `(data map[string]any) GithubEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data map[string]any) GithubEntity` | Create a WorkflowRun entity instance. |
| `WorkflowRunUsage` | `(data map[string]any) GithubEntity` | Create a WorkflowRunUsage entity instance. |
| `WorkflowUsage` | `(data map[string]any) GithubEntity` | Create a WorkflowUsage entity instance. |

### Entity interface (GithubEntity)

All entities implement the `GithubEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    action, err := client.Action(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // action is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `"MACOS"` | Total minutes used on macOS runner machines. |
| `"UBUNTU"` | Total minutes used on Ubuntu runner machines. |
| `"WINDOWS"` | Total minutes used on Windows runner machines. |
| `"access_level"` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `"active_caches_count"` | The number of active caches in the repository. |
| `"active_caches_size_in_bytes"` | The sum of the size in bytes of all the active cache items in the repository. |
| `"actor"` | A GitHub user. |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Whether to allow forking this repo |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"allow_update_branch"` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `"allowed_actions"` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `"allows_public_repositories"` |  |
| `"anonymous_access_enabled"` | Whether anonymous git access is enabled for this repository |
| `"approval_policy"` | The policy that controls when fork PR workflows require approval from a maintainer. |
| `"archive_download_url"` |  |
| `"archive_url"` |  |
| `"archived"` | Whether the repository is archived. |
| `"artifacts_url"` | The URL to the artifacts for the workflow run. |
| `"assignees_url"` |  |
| `"badge_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"busy"` |  |
| `"can_approve_pull_request_reviews"` | Whether GitHub Actions can approve pull requests. |
| `"cancel_url"` | The URL to cancel the workflow run. |
| `"check_run_url"` |  |
| `"check_suite_id"` | The ID of the associated check suite. |
| `"check_suite_node_id"` | The node ID of the associated check suite. |
| `"check_suite_url"` | The URL to the associated check suite. |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"code_search_index_status"` | The status of the code search index for this repository |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"completed_at"` | The time that the job finished, in ISO 8601 format. |
| `"conclusion"` | The outcome of the job. |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"cpu_cores"` | The number of cores. |
| `"created_at"` | The time that the job created, in ISO 8601 format. |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"days"` | The number of days to retain artifacts and logs |
| `"default"` |  |
| `"default_branch"` | The default branch of the repository. |
| `"default_workflow_permissions"` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deleted_at"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"digest"` | The SHA256 digest of the artifact. |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"display_name"` | Display name for this image. |
| `"display_title"` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `"downloads_url"` |  |
| `"enabled"` | Whether GitHub Actions is enabled on the repository. |
| `"enabled_repositories"` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `"ephemeral"` |  |
| `"event"` |  |
| `"events_url"` |  |
| `"expired"` | Whether or not the artifact has expired. |
| `"expires_at"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` | The repository owner and name for the cache usage being shown. |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"github_owned_allowed"` | Whether GitHub-owned actions are allowed. |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"head_branch"` | The name of the current branch. |
| `"head_commit"` | A commit. |
| `"head_repository"` | Minimal Repository |
| `"head_repository_id"` |  |
| `"head_sha"` | The SHA of the head commit that points to the version of the workflow being run. |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"hosted_runners_url"` |  |
| `"html_url"` |  |
| `"id"` | The ID of the workflow run. |
| `"image_details"` | Provides details of a hosted runner image |
| `"inherited"` |  |
| `"inherited_allows_public_repositories"` |  |
| `"inputs"` | Input keys and values configured in the workflow file. |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"jobs_url"` | The URL to the jobs for the workflow run. |
| `"keys_url"` |  |
| `"labels"` | The names of the custom labels to add to the runner. |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"last_active_on"` | The time at which the runner was last used, in ISO 8601 format. |
| `"license"` | License Simple |
| `"logs_url"` | The URL to download the logs for the workflow run. |
| `"machine_size_details"` | Provides details of a particular machine spec. |
| `"macos_12_core"` | Total minutes used on macOS 12 core runner machines. |
| `"master_branch"` |  |
| `"maximum_runners"` | The maximum amount of hosted runners. |
| `"memory_gb"` | The available RAM for the machine spec. |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the new runner. |
| `"network_configuration_id"` | The identifier of a hosted compute network configuration. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"os"` | The Operating System of the runner. |
| `"owner"` | A GitHub user. |
| `"path"` | The full path of the workflow |
| `"patterns_allowed"` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `"permissions"` |  |
| `"platform"` | The operating system of the image. |
| `"platforms"` |  |
| `"previous_attempt_url"` | The URL to the previous attempted run of this workflow, if one exists. |
| `"private"` | Whether the repository is private or public. |
| `"public_ip_enabled"` | Whether public IP is enabled for the hosted runners. |
| `"public_ips"` | The public IP ranges when public IP is enabled for the hosted runners. |
| `"pull_requests"` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"ref"` | The git reference for the workflow. |
| `"referenced_workflows"` |  |
| `"releases_url"` |  |
| `"repository"` | Minimal Repository |
| `"require_approval_for_fork_pr_workflows"` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `"rerun_url"` | The URL to rerun the workflow run. |
| `"restricted_to_workflows"` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `"role_name"` |  |
| `"run_attempt"` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `"run_id"` | The id of the associated workflow run. |
| `"run_number"` | The auto incrementing run number for the workflow run. |
| `"run_started_at"` | The start time of the latest run. |
| `"run_url"` |  |
| `"run_workflows_from_fork_pull_requests"` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `"runner_group_id"` | The ID of the runner group to register the runner to. |
| `"runner_group_name"` | The name of the runner group to which this job has been assigned. |
| `"runner_id"` | The ID of the runner to which this job has been assigned. |
| `"runner_name"` | The name of the runner to which this job has been assigned. |
| `"runners"` | List of runner IDs to add to the runner group. |
| `"runners_url"` |  |
| `"security_and_analysis"` |  |
| `"selected_repositories_url"` | Link to the selected repositories resource for this runner group. |
| `"selected_repository_ids"` | The IDs of the repositories that can access the organization variable. |
| `"selected_workflows"` | List of workflows the runner group should be allowed to run. |
| `"send_secrets_and_variables"` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `"send_write_tokens_to_workflows"` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `"sha_pinning_required"` | Whether actions must be pinned to a full-length commit SHA. |
| `"size"` | The size of the repository, in kilobytes. |
| `"size_gb"` | Image size in GB. |
| `"size_in_bytes"` | The size in bytes of the artifact. |
| `"source"` | The image provider. |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"started_at"` | The time that the job started, in ISO 8601 format. |
| `"state"` |  |
| `"status"` | The phase of the lifecycle that the job is currently in. |
| `"statuses_url"` |  |
| `"steps"` | Steps in this job. |
| `"storage_gb"` | The available SSD storage for the machine spec. |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"total"` | Total minutes used on all runner machines. |
| `"total_count"` |  |
| `"trees_url"` |  |
| `"triggering_actor"` | A GitHub user. |
| `"type"` | The type of label. |
| `"ubuntu_16_core"` | Total minutes used on Ubuntu 16 core runner machines. |
| `"ubuntu_32_core"` | Total minutes used on Ubuntu 32 core runner machines. |
| `"ubuntu_4_core"` | Total minutes used on Ubuntu 4 core runner machines. |
| `"ubuntu_64_core"` | Total minutes used on Ubuntu 64 core runner machines. |
| `"ubuntu_8_core"` | Total minutes used on Ubuntu 8 core runner machines. |
| `"updated_at"` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"url"` | The URL to the workflow run. |
| `"use_squash_pr_title_as_default"` | Whether a squash merge commit can use the pull request title as default. |
| `"value"` | The value of the variable. |
| `"verified_allowed"` | Whether actions from GitHub Marketplace verified creators are allowed. |
| `"visibility"` | The type of repositories in the organization that can access the variable. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Whether to require contributors to sign off on web-based commits |
| `"windows_16_core"` | Total minutes used on Windows 16 core runner machines. |
| `"windows_32_core"` | Total minutes used on Windows 32 core runner machines. |
| `"windows_4_core"` | Total minutes used on Windows 4 core runner machines. |
| `"windows_64_core"` | Total minutes used on Windows 64 core runner machines. |
| `"windows_8_core"` | Total minutes used on Windows 8 core runner machines. |
| `"work_folder"` | The working directory to be used for job execution, relative to the runner install directory. |
| `"workflow_id"` | The ID of the parent workflow. |
| `"workflow_name"` | The name of the workflow. |
| `"workflow_restrictions_read_only"` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `"workflow_run"` |  |
| `"workflow_url"` | The URL to the workflow. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`

#### ActionsArtifactAndLogRetention

| Field | Description |
| --- | --- |
| `"days"` | The number of days artifacts and logs are retained |
| `"maximum_allowed_days"` | The maximum number of days that can be configured |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention`

#### ActionsCacheList

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"key"` |  |
| `"last_accessed_at"` |  |
| `"ref"` |  |
| `"size_in_bytes"` |  |
| `"version"` |  |

Operations: List, Remove.

API path: `/repos/{owner}/{repo}/actions/caches`

#### ActionsCacheUsageByRepository

| Field | Description |
| --- | --- |
| `"active_caches_count"` | The number of active caches in the repository. |
| `"active_caches_size_in_bytes"` | The sum of the size in bytes of all the active cache items in the repository. |
| `"full_name"` | The repository owner and name for the cache usage being shown. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/cache/usage`

#### ActionsCacheUsageOrgEnterprise

| Field | Description |
| --- | --- |
| `"total_active_caches_count"` | The count of active caches across all repositories of an enterprise or an organization. |
| `"total_active_caches_size_in_bytes"` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

Operations: Load.

API path: `/orgs/{org}/actions/cache/usage`

#### ActionsForkPrContributorApproval

| Field | Description |
| --- | --- |
| `"approval_policy"` | The policy that controls when fork PR workflows require approval from a maintainer. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval`

#### ActionsForkPrWorkflowsPrivateRepo

| Field | Description |
| --- | --- |
| `"require_approval_for_fork_pr_workflows"` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `"run_workflows_from_fork_pull_requests"` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `"send_secrets_and_variables"` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `"send_write_tokens_to_workflows"` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos`

#### ActionsGetDefaultWorkflowPermission

| Field | Description |
| --- | --- |
| `"can_approve_pull_request_reviews"` | Whether GitHub Actions can approve pull requests. |
| `"default_workflow_permissions"` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/workflow`

#### ActionsHostedRunner

| Field | Description |
| --- | --- |
| `"enable_static_ip"` | Whether this runner should be created with a static public IP. |
| `"id"` | The unique identifier of the hosted runner. |
| `"image"` | The image of runner. |
| `"image_details"` | Provides details of a hosted runner image |
| `"last_active_on"` | The time at which the runner was last used, in ISO 8601 format. |
| `"machine_size_details"` | Provides details of a particular machine spec. |
| `"maximum_runners"` | The maximum amount of hosted runners. |
| `"name"` | The name of the hosted runner. |
| `"platform"` | The operating system of the image. |
| `"public_ip_enabled"` | Whether public IP is enabled for the hosted runners. |
| `"public_ips"` | The public IP ranges when public IP is enabled for the hosted runners. |
| `"runner_group_id"` | The unique identifier of the group that the hosted runner belongs to. |
| `"size"` | The machine size of the runner. |
| `"status"` | The status of the runner. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/actions/hosted-runners`

#### ActionsHostedRunnerLimit

| Field | Description |
| --- | --- |
| `"current_usage"` | The current number of static public IP addresses in use by Hosted Runners. |
| `"maximum"` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

Operations: Load.

API path: `/orgs/{org}/actions/hosted-runners/limits`

#### ActionsOrganizationPermission

| Field | Description |
| --- | --- |
| `"allowed_actions"` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `"enabled_repositories"` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `"selected_actions_url"` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `"selected_repositories_url"` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `"sha_pinning_required"` | Whether actions must be pinned to a full-length commit SHA. |

Operations: Load.

API path: `/orgs/{org}/actions/permissions`

#### ActionsPublicKey

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"key"` | The Base64 encoded public key. |
| `"key_id"` | The identifier for the key. |
| `"title"` |  |
| `"url"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key`

#### ActionsRepositoryPermission

| Field | Description |
| --- | --- |
| `"allowed_actions"` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `"enabled"` | Whether GitHub Actions is enabled on the repository. |
| `"selected_actions_url"` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `"sha_pinning_required"` | Whether actions must be pinned to a full-length commit SHA. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions`

#### ActionsSecret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"name"` | The name of the secret. |
| `"updated_at"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`

#### ActionsVariable

| Field | Description |
| --- | --- |
| `"created_at"` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"id"` |  |
| `"name"` | The name of the variable. |
| `"updated_at"` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"value"` | The value of the variable. |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`

#### ActionsWorkflowAccessToRepository

| Field | Description |
| --- | --- |
| `"access_level"` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/access`

#### Activity

| Field | Description |
| --- | --- |
| `"activity_type"` | The type of the activity that was performed. |
| `"actor"` | A GitHub user. |
| `"after"` | The SHA of the commit after the activity. |
| `"archive_url"` |  |
| `"assignees_url"` |  |
| `"avatar_url"` |  |
| `"before"` | The SHA of the commit before the activity. |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"fork"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"gists_url"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"github_id"` |  |
| `"gravatar_id"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"last_read_at"` | Describes the last point that notifications were checked. |
| `"login"` |  |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"organizations_url"` |  |
| `"owner"` |  |
| `"private"` |  |
| `"pulls_url"` |  |
| `"read"` | Whether the notification has been read. |
| `"received_events_url"` |  |
| `"ref"` | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `"releases_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"ssh_url"` |  |
| `"stargazers_url"` |  |
| `"starred_url"` |  |
| `"statuses_url"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"subscriptions_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"timestamp"` | The time when the activity occurred. |
| `"trees_url"` |  |
| `"type"` |  |
| `"url"` |  |

Operations: List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/activity`

#### Add

| Field | Description |
| --- | --- |
| `"usernames"` | The GitHub user handles to add to the team. |

Operations: Create.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/add`

#### ApiInsightsRouteStat

| Field | Description |
| --- | --- |
| `"api_route"` | The API path's route template |
| `"http_method"` | The HTTP method |
| `"last_rate_limited_timestamp"` |  |
| `"last_request_timestamp"` |  |
| `"rate_limited_request_count"` | The total number of requests that were rate limited within the queried time period |
| `"total_request_count"` | The total number of requests within the queried time period |

Operations: List.

API path: `/orgs/{org}/insights/api/route-stats/{actor_type}/{actor_id}`

#### ApiInsightsSubjectStat

| Field | Description |
| --- | --- |
| `"last_rate_limited_timestamp"` |  |
| `"last_request_timestamp"` |  |
| `"rate_limited_request_count"` |  |
| `"subject_id"` |  |
| `"subject_name"` |  |
| `"subject_type"` |  |
| `"total_request_count"` |  |

Operations: List.

API path: `/orgs/{org}/insights/api/subject-stats`

#### ApiInsightsSummaryStat

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"rate_limited_request_count"` | The total number of requests that were rate limited within the queried time period |
| `"total_request_count"` | The total number of requests within the queried time period |

Operations: Load.

API path: `/orgs/{org}/insights/api/summary-stats/{actor_type}/{actor_id}`

#### ApiInsightsTimeStat

| Field | Description |
| --- | --- |
| `"rate_limited_request_count"` |  |
| `"timestamp"` |  |
| `"total_request_count"` |  |

Operations: List, Load.

API path: `/orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}`

#### ApiInsightsUserStat

| Field | Description |
| --- | --- |
| `"actor_id"` |  |
| `"actor_name"` |  |
| `"actor_type"` |  |
| `"id"` |  |
| `"integration_id"` |  |
| `"last_rate_limited_timestamp"` |  |
| `"last_request_timestamp"` |  |
| `"oauth_application_id"` |  |
| `"rate_limited_request_count"` |  |
| `"total_request_count"` |  |

Operations: Load.

API path: `/orgs/{org}/insights/api/user-stats/{user_id}`

#### ApiOverview

| Field | Description |
| --- | --- |
| `"actions"` |  |
| `"actions_macos"` |  |
| `"api"` |  |
| `"codespaces"` |  |
| `"copilot"` |  |
| `"dependabot"` |  |
| `"domains"` |  |
| `"git"` |  |
| `"github_enterprise_importer"` |  |
| `"hooks"` |  |
| `"importer"` |  |
| `"packages"` |  |
| `"pages"` |  |
| `"ssh_key_fingerprints"` |  |
| `"ssh_keys"` |  |
| `"verifiable_password_authentication"` |  |
| `"web"` |  |

Operations: List.

API path: `/meta`

#### App

| Field | Description |
| --- | --- |
| `"access_tokens_url"` |  |
| `"account"` |  |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Whether to allow forking this repo |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"allow_update_branch"` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `"anonymous_access_enabled"` | Whether anonymous git access is enabled for this repository |
| `"app_id"` |  |
| `"app_slug"` |  |
| `"archive_url"` |  |
| `"archived"` | Whether the repository is archived. |
| `"assignees_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"client_id"` |  |
| `"client_secret"` |  |
| `"clone_url"` |  |
| `"code_search_index_status"` | The status of the code search index for this repository |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contact_email"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"default_branch"` | The default branch of the repository. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"downloads_url"` |  |
| `"events"` |  |
| `"events_url"` |  |
| `"external_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_multiple_single_files"` |  |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the repository |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` | License Simple |
| `"master_branch"` |  |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the repository. |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"owner"` | A GitHub user. |
| `"pem"` |  |
| `"permissions"` | The permissions granted to the user access token. |
| `"private"` | Whether the repository is private or public. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"repositories_url"` |  |
| `"repository_selection"` | Describe whether all repositories have been selected or there's a selection involved |
| `"single_file_name"` |  |
| `"single_file_paths"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"slug"` |  |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"statuses_url"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"suspended_at"` |  |
| `"suspended_by"` | A GitHub user. |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"target_id"` | The ID of the user or organization this token is being scoped to. |
| `"target_type"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"use_squash_pr_title_as_default"` | Whether a squash merge commit can use the pull request title as default. |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Whether to require contributors to sign off on web-based commits |
| `"webhook_secret"` |  |

Operations: Create, List, Remove, Update.

API path: `/app-manifests/{code}/conversions`

#### Artifact

| Field | Description |
| --- | --- |
| `"head_branch"` |  |
| `"head_repository_id"` |  |
| `"head_sha"` |  |
| `"id"` |  |
| `"repository_id"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/artifacts/{artifact_id}`

#### Assignee

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/assignees`

#### AuthenticationToken

| Field | Description |
| --- | --- |
| `"expires_at"` |  |
| `"token"` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/actions/runners/registration-token`

#### Authorization

| Field | Description |
| --- | --- |
| `"access_token"` | The access_token of the OAuth or GitHub application. |
| `"app"` |  |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"fingerprint"` |  |
| `"hashed_token"` |  |
| `"id"` |  |
| `"installation"` |  |
| `"note"` |  |
| `"note_url"` |  |
| `"permissions"` | The permissions granted to the user access token. |
| `"repositories"` | The list of repository names to scope the user access token to. |
| `"repository_ids"` | The list of repository IDs to scope the user access token to. |
| `"scopes"` | A list of scopes that this authorization is in. |
| `"target"` | The name of the user or organization to scope the user access token to. |
| `"target_id"` | The ID of the user or organization to scope the user access token to. |
| `"token"` |  |
| `"token_last_eight"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Create, Update.

API path: `/applications/{client_id}/token`

#### Autolink

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"is_alphanumeric"` | Whether this autolink reference matches alphanumeric characters. |
| `"key_prefix"` | The prefix of a key that is linkified. |
| `"updated_at"` |  |
| `"url_template"` | A template for the target URL that is generated if a key was found. |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/autolinks`

#### BaseGist

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"comments_enabled"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"files"` |  |
| `"forks"` |  |
| `"forks_url"` |  |
| `"git_pull_url"` |  |
| `"git_push_url"` |  |
| `"history"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"owner"` | A GitHub user. |
| `"public"` |  |
| `"truncated"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Create, List.

API path: `/gists/{gist_id}/forks`

#### BillingUsageReport

| Field | Description |
| --- | --- |
| `"date"` | Date of the usage line item. |
| `"discountAmount"` | Discount amount of the usage line item. |
| `"grossAmount"` | Gross amount of the usage line item. |
| `"netAmount"` | Net amount of the usage line item. |
| `"organizationName"` | Name of the organization. |
| `"pricePerUnit"` | Price per unit of the usage line item. |
| `"product"` | Product name. |
| `"quantity"` | Quantity of the usage line item. |
| `"repositoryName"` | Name of the repository. |
| `"sku"` | SKU name. |
| `"unitType"` | Unit type of the usage line item. |

Operations: List.

API path: `/organizations/{org}/settings/billing/usage`

#### BillingUsageReportUser

| Field | Description |
| --- | --- |
| `"date"` | Date of the usage line item. |
| `"discountAmount"` | Discount amount of the usage line item. |
| `"grossAmount"` | Gross amount of the usage line item. |
| `"netAmount"` | Net amount of the usage line item. |
| `"pricePerUnit"` | Price per unit of the usage line item. |
| `"product"` | Product name. |
| `"quantity"` | Quantity of the usage line item. |
| `"repositoryName"` | Name of the repository. |
| `"sku"` | SKU name. |
| `"unitType"` | Unit type of the usage line item. |

Operations: List.

API path: `/users/{username}/settings/billing/usage`

#### Blob

| Field | Description |
| --- | --- |
| `"content"` |  |
| `"encoding"` |  |
| `"highlighted_content"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"sha"` |  |
| `"size"` |  |
| `"url"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/git/blobs/{file_sha}`

#### Block

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/orgs/{org}/blocks`

#### Branch

| Field | Description |
| --- | --- |
| `"commit"` | Commit |
| `"id"` |  |
| `"links"` |  |
| `"name"` |  |
| `"pattern"` |  |
| `"protected"` |  |
| `"protection"` | Branch Protection |
| `"protection_url"` |  |
| `"required_approving_review_count"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/branches/{branch}`

#### BranchProtection

| Field | Description |
| --- | --- |
| `"allow_deletions"` |  |
| `"allow_force_pushes"` |  |
| `"allow_fork_syncing"` | Whether users can pull changes from upstream when the branch is locked. |
| `"block_creations"` |  |
| `"enabled"` |  |
| `"enforce_admins"` | Protected Branch Admin Enforced |
| `"id"` |  |
| `"lock_branch"` | Whether to set the branch as read-only. |
| `"name"` |  |
| `"protection_url"` |  |
| `"required_conversation_resolution"` |  |
| `"required_linear_history"` |  |
| `"required_pull_request_reviews"` | Protected Branch Pull Request Review |
| `"required_signatures"` |  |
| `"required_status_checks"` | Protected Branch Required Status Check |
| `"restrictions"` | Branch Restriction Policy |
| `"url"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection`

#### BranchRestrictionPolicy

| Field | Description |
| --- | --- |
| `"apps"` |  |
| `"apps_url"` |  |
| `"teams"` |  |
| `"teams_url"` |  |
| `"url"` |  |
| `"users"` |  |
| `"users_url"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions`

#### BranchShort

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"name"` |  |
| `"protected"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`

#### BranchWithProtection

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"new_name"` | The new name of the branch. |

Operations: Create.

API path: `/repos/{owner}/{repo}/branches/{branch}/rename`

#### Campaign

| Field | Description |
| --- | --- |
| `"alert_stats"` |  |
| `"closed_at"` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"code_scanning_alerts"` | The code scanning alerts to include in this campaign |
| `"contact_link"` | The contact link of the campaign. |
| `"created_at"` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"description"` | The campaign description |
| `"ends_at"` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"generate_issues"` | If true, will automatically generate issues for the campaign. |
| `"id"` |  |
| `"managers"` | The campaign managers |
| `"name"` | The campaign name |
| `"number"` | The number of the newly created campaign |
| `"published_at"` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"state"` | Indicates whether a campaign is open or closed |
| `"team_managers"` | The campaign team managers |
| `"updated_at"` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

Operations: Create, List, Load, Remove, Update.

API path: `/orgs/{org}/campaigns`

#### Check

| Field | Description |
| --- | --- |
| `"after"` |  |
| `"app"` | GitHub apps are a new way to extend GitHub. |
| `"before"` |  |
| `"check_runs_url"` |  |
| `"check_suite"` |  |
| `"completed_at"` |  |
| `"conclusion"` |  |
| `"created_at"` |  |
| `"deployment"` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `"details_url"` |  |
| `"external_id"` |  |
| `"head_branch"` |  |
| `"head_commit"` | A commit. |
| `"head_sha"` | The SHA of the commit that is being checked. |
| `"html_url"` |  |
| `"id"` | The id of the check. |
| `"latest_check_runs_count"` |  |
| `"name"` | The name of the check. |
| `"node_id"` |  |
| `"output"` |  |
| `"pull_requests"` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `"repository"` | Minimal Repository |
| `"rerequestable"` |  |
| `"runs_rerequestable"` |  |
| `"started_at"` |  |
| `"status"` | The phase of the lifecycle that the check is currently in. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{ref}/check-runs`

#### CheckAnnotation

| Field | Description |
| --- | --- |
| `"annotation_level"` |  |
| `"blob_href"` |  |
| `"end_column"` |  |
| `"end_line"` |  |
| `"message"` |  |
| `"path"` |  |
| `"raw_details"` |  |
| `"start_column"` |  |
| `"start_line"` |  |
| `"title"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`

#### CheckAutomatedSecurityFix

| Field | Description |
| --- | --- |
| `"enabled"` | Whether Dependabot security updates are enabled for the repository. |
| `"paused"` | Whether Dependabot security updates are paused for the repository. |

Operations: Load.

API path: `/repos/{owner}/{repo}/automated-security-fixes`

#### CheckRun

| Field | Description |
| --- | --- |
| `"actions"` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `"app"` | GitHub apps are a new way to extend GitHub. |
| `"check_suite"` |  |
| `"completed_at"` | The time the check completed. |
| `"conclusion"` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `"deployment"` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `"details_url"` | The URL of the integrator's site that has the full details of the check. |
| `"external_id"` | A reference for the run on the integrator's system. |
| `"head_sha"` | The SHA of the commit that is being checked. |
| `"html_url"` |  |
| `"id"` | The id of the check. |
| `"name"` | The name of the check. |
| `"node_id"` |  |
| `"output"` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `"pull_requests"` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `"started_at"` | The time that the check run began. |
| `"status"` | The phase of the lifecycle that the check is currently in. |
| `"url"` |  |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/check-runs`

#### CheckSuite

| Field | Description |
| --- | --- |
| `"after"` |  |
| `"app"` | GitHub apps are a new way to extend GitHub. |
| `"before"` |  |
| `"check_runs_url"` |  |
| `"conclusion"` |  |
| `"created_at"` |  |
| `"head_branch"` |  |
| `"head_commit"` | A commit. |
| `"head_sha"` | The SHA of the head commit that is being checked. |
| `"id"` |  |
| `"latest_check_runs_count"` |  |
| `"node_id"` |  |
| `"pull_requests"` |  |
| `"repository"` | Minimal Repository |
| `"rerequestable"` |  |
| `"runs_rerequestable"` |  |
| `"status"` | The phase of the lifecycle that the check suite is currently in. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/check-suites`

#### CheckSuitePreference

| Field | Description |
| --- | --- |
| `"auto_trigger_checks"` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `"preferences"` |  |
| `"repository"` | Minimal Repository |

Operations: Update.

API path: `/repos/{owner}/{repo}/check-suites/preferences`

#### Classroom

| Field | Description |
| --- | --- |
| `"archived"` | Returns whether classroom is archived or not. |
| `"avatar_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the classroom. |
| `"login"` |  |
| `"name"` | The name of the classroom. |
| `"node_id"` |  |
| `"url"` | The url of the classroom on GitHub Classroom. |

Operations: List, Load.

API path: `/classrooms`

#### ClassroomAcceptedAssignment

| Field | Description |
| --- | --- |
| `"assignment"` | A GitHub Classroom assignment |
| `"commit_count"` | Count of student commits. |
| `"grade"` | Most recent grade. |
| `"id"` | Unique identifier of the repository. |
| `"passing"` | Whether a submission passed. |
| `"repository"` | A GitHub repository view for Classroom |
| `"students"` |  |
| `"submitted"` | Whether an accepted assignment has been submitted. |

Operations: List.

API path: `/assignments/{assignment_id}/accepted_assignments`

#### ClassroomAssignment

| Field | Description |
| --- | --- |
| `"accepted"` | The number of students that have accepted the assignment. |
| `"classroom"` | A GitHub Classroom classroom |
| `"deadline"` | The time at which the assignment is due. |
| `"editor"` | The selected editor for the assignment. |
| `"feedback_pull_requests_enabled"` | Whether feedback pull request will be created when a student accepts the assignment. |
| `"id"` | Unique identifier of the repository. |
| `"invitations_enabled"` | Whether the invitation link is enabled. |
| `"invite_link"` | The link that a student can use to accept the assignment. |
| `"language"` | The programming language used in the assignment. |
| `"max_members"` | The maximum allowable members per team. |
| `"max_teams"` | The maximum allowable teams for the assignment. |
| `"passing"` | The number of students that have passed the assignment. |
| `"public_repo"` | Whether an accepted assignment creates a public repository. |
| `"slug"` | Sluggified name of the assignment. |
| `"starter_code_repository"` | A GitHub repository view for Classroom |
| `"students_are_repo_admins"` | Whether students are admins on created repository when a student accepts the assignment. |
| `"submitted"` | The number of students that have submitted the assignment. |
| `"title"` | Assignment title. |
| `"type"` | Whether it's a group assignment or individual assignment. |

Operations: Load.

API path: `/assignments/{assignment_id}`

#### ClassroomAssignmentGrade

| Field | Description |
| --- | --- |
| `"assignment_name"` | Name of the assignment |
| `"assignment_url"` | URL of the assignment |
| `"github_username"` | GitHub username of the student |
| `"group_name"` | If a group assignment, name of the group the student is in |
| `"points_available"` | Number of points available for the assignment |
| `"points_awarded"` | Number of points awarded to the student |
| `"roster_identifier"` | Roster identifier of the student |
| `"starter_code_url"` | URL of the starter code for the assignment |
| `"student_repository_name"` | Name of the student's assignment repository |
| `"student_repository_url"` | URL of the student's assignment repository |
| `"submission_timestamp"` | Timestamp of the student's assignment submission |

Operations: List.

API path: `/assignments/{assignment_id}/grades`

#### Clone

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"timestamp"` |  |
| `"uniques"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/clones`

#### CodeFrequency

| Field | Description |
| --- | --- |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/code_frequency`

#### CodeFrequencyStat

| Field | Description |
| --- | --- |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/punch_card`

#### CodeOfConduct

| Field | Description |
| --- | --- |
| `"body"` |  |
| `"html_url"` |  |
| `"key"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/codes_of_conduct`

#### CodeScanning

| Field | Description |
| --- | --- |
| `"checkout_uri"` | The base directory used in the analysis, as it appears in the SARIF file. |
| `"commit_sha"` | The SHA of the commit to which the analysis you are uploading relates. |
| `"ref"` | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `"sarif"` | A Base64 string representing the SARIF file to upload. |
| `"started_at"` | The time that the analysis run began. |
| `"tool_name"` | The name of the tool used to generate the code scanning analysis. |
| `"validate"` | Whether the SARIF file will be validated according to the code scanning specifications. |

Operations: Create, Remove.

API path: `/repos/{owner}/{repo}/code-scanning/sarifs`

#### CodeScanningAlert

| Field | Description |
| --- | --- |
| `"create_request"` | If `true`, attempt to create an alert dismissal request. |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissal_approved_by"` | A GitHub user. |
| `"dismissed_at"` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissed_by"` | A GitHub user. |
| `"dismissed_comment"` | The dismissal comment associated with the dismissal of the alert. |
| `"dismissed_reason"` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `"fixed_at"` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"id"` |  |
| `"instances_url"` | The REST API URL for fetching the list of instances for an alert. |
| `"most_recent_instance"` |  |
| `"number"` | The security alert number. |
| `"rule"` |  |
| `"state"` | State of a code scanning alert. |
| `"tool"` |  |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`

#### CodeScanningAlertInstance

| Field | Description |
| --- | --- |
| `"analysis_key"` | Identifies the configuration under which the analysis was executed. |
| `"category"` | Identifies the configuration under which the analysis was executed. |
| `"classifications"` | Classifications that have been applied to the file that triggered the alert. |
| `"commit_sha"` |  |
| `"environment"` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `"html_url"` |  |
| `"location"` | Describe a region within a file for the alert. |
| `"message"` |  |
| `"ref"` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `"state"` | State of a code scanning alert. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`

#### CodeScanningAlertItem

| Field | Description |
| --- | --- |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissal_approved_by"` | A GitHub user. |
| `"dismissed_at"` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissed_by"` | A GitHub user. |
| `"dismissed_comment"` | The dismissal comment associated with the dismissal of the alert. |
| `"dismissed_reason"` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `"fixed_at"` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"instances_url"` | The REST API URL for fetching the list of instances for an alert. |
| `"most_recent_instance"` |  |
| `"number"` | The security alert number. |
| `"rule"` |  |
| `"state"` | State of a code scanning alert. |
| `"tool"` |  |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/alerts`

#### CodeScanningAnalysi

| Field | Description |
| --- | --- |
| `"analysis_key"` | Identifies the configuration under which the analysis was executed. |
| `"category"` | Identifies the configuration under which the analysis was executed. |
| `"commit_sha"` | The SHA of the commit to which the analysis you are uploading relates. |
| `"created_at"` | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"deletable"` |  |
| `"environment"` | Identifies the variable values associated with the environment in which this analysis was performed. |
| `"error"` |  |
| `"guid"` | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `"id"` | Unique identifier for this analysis. |
| `"name"` | The name of the tool used to generate the code scanning analysis. |
| `"ref"` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `"results_count"` | The total number of results in the analysis. |
| `"rules_count"` | The total number of rules used in the analysis. |
| `"sarif_id"` | An identifier for the upload. |
| `"tool"` |  |
| `"url"` | The REST API URL of the analysis resource. |
| `"version"` | The version of the tool used to generate the code scanning analysis. |
| `"warning"` | Warning generated when processing the analysis |

Operations: List, Load.

API path: `/repos/{owner}/{repo}/code-scanning/analyses`

#### CodeScanningAnalysisDeletion

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`

#### CodeScanningAutofix

| Field | Description |
| --- | --- |
| `"description"` | The description of an autofix. |
| `"started_at"` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"status"` | The status of an autofix. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`

#### CodeScanningAutofixCommit

| Field | Description |
| --- | --- |
| `"message"` | Commit message to be used. |
| `"target_ref"` | The Git reference of target branch for the commit. |

Operations: Create.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits`

#### CodeScanningCodeqlDatabase

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"commit_oid"` | The commit SHA of the repository at the time the CodeQL database was created. |
| `"content_type"` | The MIME type of the CodeQL database file. |
| `"created_at"` | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` | The ID of the CodeQL database. |
| `"language"` | The language of the CodeQL database. |
| `"login"` |  |
| `"name"` | The name of the CodeQL database. |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"size"` | The size of the CodeQL database file in bytes. |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"updated_at"` | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"uploader"` | A GitHub user. |
| `"url"` | The URL at which to download the CodeQL database. |
| `"user_view_type"` |  |

Operations: List, Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/databases`

#### CodeScanningDefaultSetup

| Field | Description |
| --- | --- |
| `"languages"` | Languages to be analyzed. |
| `"query_suite"` | CodeQL query suite to be used. |
| `"runner_label"` | Runner label to be used if the runner type is labeled. |
| `"runner_type"` | Runner type to be used. |
| `"schedule"` | The frequency of the periodic analysis. |
| `"state"` | Code scanning default setup has been configured or not. |
| `"threat_model"` | Threat model to be used for code scanning analysis. |
| `"updated_at"` | Timestamp of latest configuration update. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/default-setup`

#### CodeScanningOrganizationAlertItem

| Field | Description |
| --- | --- |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissal_approved_by"` | A GitHub user. |
| `"dismissed_at"` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissed_by"` | A GitHub user. |
| `"dismissed_comment"` | The dismissal comment associated with the dismissal of the alert. |
| `"dismissed_reason"` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `"fixed_at"` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"instances_url"` | The REST API URL for fetching the list of instances for an alert. |
| `"most_recent_instance"` |  |
| `"number"` | The security alert number. |
| `"repository"` | A GitHub repository. |
| `"rule"` |  |
| `"state"` | State of a code scanning alert. |
| `"tool"` |  |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |

Operations: List.

API path: `/orgs/{org}/code-scanning/alerts`

#### CodeScanningSarifsStatus

| Field | Description |
| --- | --- |
| `"analyses_url"` | The REST API URL for getting the analyses associated with the upload. |
| `"errors"` | Any errors that ocurred during processing of the delivery. |
| `"processing_status"` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

Operations: Load.

API path: `/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`

#### CodeScanningVariantAnalysi

| Field | Description |
| --- | --- |
| `"actions_workflow_run_id"` | The GitHub Actions workflow run used to execute this variant analysis. |
| `"actor"` | A GitHub user. |
| `"completed_at"` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"controller_repo"` | A GitHub repository. |
| `"created_at"` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"failure_reason"` | The reason for a failure of the variant analysis. |
| `"id"` | The ID of the variant analysis. |
| `"language"` | The language targeted by the CodeQL query |
| `"query_language"` | The language targeted by the CodeQL query |
| `"query_pack"` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `"query_pack_url"` | The download url for the query pack. |
| `"repositories"` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `"repository_lists"` | List of repository lists to run the query against. |
| `"repository_owners"` | List of organization or user names whose repositories the query should be run against. |
| `"scanned_repositories"` |  |
| `"skipped_repositories"` | Information about repositories that were skipped from processing. |
| `"status"` |  |
| `"updated_at"` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses`

#### CodeScanningVariantAnalysisRepoTask

| Field | Description |
| --- | --- |
| `"archive_url"` | A template for the API URL to download the repository as an archive. |
| `"assignees_url"` | A template for the API URL to list the available assignees for issues in the repository. |
| `"blobs_url"` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `"branches_url"` | A template for the API URL to get information about branches in the repository. |
| `"collaborators_url"` | A template for the API URL to get information about collaborators of the repository. |
| `"comments_url"` | A template for the API URL to get information about comments on the repository. |
| `"commits_url"` | A template for the API URL to get information about commits on the repository. |
| `"compare_url"` | A template for the API URL to compare two commits or refs. |
| `"contents_url"` | A template for the API URL to get the contents of the repository. |
| `"contributors_url"` | A template for the API URL to list the contributors to the repository. |
| `"deployments_url"` | The API URL to list the deployments of the repository. |
| `"description"` | The repository description. |
| `"downloads_url"` | The API URL to list the downloads on the repository. |
| `"events_url"` | The API URL to list the events of the repository. |
| `"fork"` | Whether the repository is a fork. |
| `"forks_url"` | The API URL to list the forks of the repository. |
| `"full_name"` | The full, globally unique, name of the repository. |
| `"git_commits_url"` | A template for the API URL to get information about Git commits of the repository. |
| `"git_refs_url"` | A template for the API URL to get information about Git refs of the repository. |
| `"git_tags_url"` | A template for the API URL to get information about Git tags of the repository. |
| `"github_id"` | A unique identifier of the repository. |
| `"hooks_url"` | The API URL to list the hooks on the repository. |
| `"html_url"` | The URL to view the repository on GitHub.com. |
| `"id"` | A unique identifier of the repository. |
| `"issue_comment_url"` | A template for the API URL to get information about issue comments on the repository. |
| `"issue_events_url"` | A template for the API URL to get information about issue events on the repository. |
| `"issues_url"` | A template for the API URL to get information about issues on the repository. |
| `"keys_url"` | A template for the API URL to get information about deploy keys on the repository. |
| `"labels_url"` | A template for the API URL to get information about labels of the repository. |
| `"languages_url"` | The API URL to get information about the languages of the repository. |
| `"merges_url"` | The API URL to merge branches in the repository. |
| `"milestones_url"` | A template for the API URL to get information about milestones of the repository. |
| `"name"` | The name of the repository. |
| `"node_id"` | The GraphQL identifier of the repository. |
| `"notifications_url"` | A template for the API URL to get information about notifications on the repository. |
| `"owner"` | A GitHub user. |
| `"private"` | Whether the repository is private. |
| `"pulls_url"` | A template for the API URL to get information about pull requests on the repository. |
| `"releases_url"` | A template for the API URL to get information about releases on the repository. |
| `"stargazers_url"` | The API URL to list the stargazers on the repository. |
| `"statuses_url"` | A template for the API URL to get information about statuses of a commit. |
| `"subscribers_url"` | The API URL to list the subscribers on the repository. |
| `"subscription_url"` | The API URL to subscribe to notifications for this repository. |
| `"tags_url"` | The API URL to get information about tags on the repository. |
| `"teams_url"` | The API URL to list the teams on the repository. |
| `"trees_url"` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `"url"` | The URL to get more information about the repository from the GitHub API. |

Operations: Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}`

#### CodeSecurity

| Field | Description |
| --- | --- |
| `"advanced_security"` | The enablement status of GitHub Advanced Security |
| `"code_scanning_default_setup"` | The enablement status of code scanning default setup |
| `"code_scanning_default_setup_options"` | Feature options for code scanning default setup |
| `"code_scanning_delegated_alert_dismissal"` | The enablement status of code scanning delegated alert dismissal |
| `"code_scanning_options"` | Feature options for code scanning |
| `"created_at"` |  |
| `"default_for_new_repos"` | Specify which types of repository this security configuration should be applied to by default. |
| `"dependabot_alerts"` | The enablement status of Dependabot alerts |
| `"dependabot_security_updates"` | The enablement status of Dependabot security updates |
| `"dependency_graph"` | The enablement status of Dependency Graph |
| `"dependency_graph_autosubmit_action"` | The enablement status of Automatic dependency submission |
| `"dependency_graph_autosubmit_action_options"` | Feature options for Automatic dependency submission |
| `"description"` | A description of the code security configuration |
| `"enforcement"` | The enforcement status for a security configuration |
| `"html_url"` | The URL of the configuration |
| `"id"` | The ID of the code security configuration |
| `"name"` | The name of the code security configuration. |
| `"private_vulnerability_reporting"` | The enablement status of private vulnerability reporting |
| `"secret_scanning"` | The enablement status of secret scanning |
| `"secret_scanning_delegated_alert_dismissal"` | The enablement status of secret scanning delegated alert dismissal |
| `"secret_scanning_delegated_bypass"` | The enablement status of secret scanning delegated bypass |
| `"secret_scanning_delegated_bypass_options"` | Feature options for secret scanning delegated bypass |
| `"secret_scanning_generic_secrets"` | The enablement status of Copilot secret scanning |
| `"secret_scanning_non_provider_patterns"` | The enablement status of secret scanning non-provider patterns |
| `"secret_scanning_push_protection"` | The enablement status of secret scanning push protection |
| `"secret_scanning_validity_checks"` | The enablement status of secret scanning validity checks |
| `"target_type"` | The type of the code security configuration. |
| `"updated_at"` |  |
| `"url"` | The URL of the configuration |

Operations: Remove, Update.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}`

#### CodeSecurityConfiguration

| Field | Description |
| --- | --- |
| `"advanced_security"` | The enablement status of GitHub Advanced Security |
| `"code_scanning_default_setup"` | The enablement status of code scanning default setup |
| `"code_scanning_default_setup_options"` | Feature options for code scanning default setup |
| `"code_scanning_delegated_alert_dismissal"` | The enablement status of code scanning delegated alert dismissal |
| `"code_scanning_options"` | Feature options for code scanning |
| `"code_security"` | The enablement status of GitHub Code Security features. |
| `"created_at"` |  |
| `"dependabot_alerts"` | The enablement status of Dependabot alerts |
| `"dependabot_security_updates"` | The enablement status of Dependabot security updates |
| `"dependency_graph"` | The enablement status of Dependency Graph |
| `"dependency_graph_autosubmit_action"` | The enablement status of Automatic dependency submission |
| `"dependency_graph_autosubmit_action_options"` | Feature options for Automatic dependency submission |
| `"description"` | A description of the code security configuration |
| `"enforcement"` | The enforcement status for a security configuration |
| `"html_url"` | The URL of the configuration |
| `"id"` | The ID of the code security configuration |
| `"name"` | The name of the code security configuration. |
| `"private_vulnerability_reporting"` | The enablement status of private vulnerability reporting |
| `"scope"` | The type of repositories to attach the configuration to. |
| `"secret_protection"` | The enablement status of GitHub Secret Protection features. |
| `"secret_scanning"` | The enablement status of secret scanning |
| `"secret_scanning_delegated_alert_dismissal"` | The enablement status of secret scanning delegated alert dismissal |
| `"secret_scanning_delegated_bypass"` | The enablement status of secret scanning delegated bypass |
| `"secret_scanning_delegated_bypass_options"` | Feature options for secret scanning delegated bypass |
| `"secret_scanning_generic_secrets"` | The enablement status of Copilot secret scanning |
| `"secret_scanning_non_provider_patterns"` | The enablement status of secret scanning non-provider patterns |
| `"secret_scanning_push_protection"` | The enablement status of secret scanning push protection |
| `"secret_scanning_validity_checks"` | The enablement status of secret scanning validity checks |
| `"selected_repository_ids"` | An array of repository IDs to attach the configuration to. |
| `"target_type"` | The type of the code security configuration. |
| `"updated_at"` |  |
| `"url"` | The URL of the configuration |

Operations: Create, List, Load, Update.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach`

#### CodeSecurityConfigurationRepository

| Field | Description |
| --- | --- |
| `"repository"` | A GitHub repository. |
| `"status"` | The attachment status of the code security configuration on the repository. |

Operations: List.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories`

#### CodeSecurityDefaultConfiguration

| Field | Description |
| --- | --- |
| `"configuration"` | A code security configuration |
| `"default_for_new_repos"` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

Operations: List.

API path: `/enterprises/{enterprise}/code-security/configurations/defaults`

#### CodeownersError

| Field | Description |
| --- | --- |
| `"column"` | The column number where this errors occurs. |
| `"kind"` | The type of error. |
| `"line"` | The line number where this errors occurs. |
| `"message"` | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `"path"` | The path of the file where the error occured. |
| `"source"` | The contents of the line where the error occurs. |
| `"suggestion"` | Suggested action to fix the error. |

Operations: List.

API path: `/repos/{owner}/{repo}/codeowners/errors`

#### Codespace

| Field | Description |
| --- | --- |
| `"accepted"` | Whether the user has accepted the permissions defined by the devcontainer config |
| `"allow_forking"` |  |
| `"archive_url"` |  |
| `"archived"` |  |
| `"assignees_url"` |  |
| `"billable_owner"` | A GitHub user. |
| `"blobs_url"` |  |
| `"branch"` | Name of the exported branch |
| `"branches_url"` |  |
| `"client_ip"` | IP for location auto-detection when proxying a request |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"completed_at"` | Completion time of the last export operation |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"cpus"` | How many cores are available to the codespace. |
| `"created_at"` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` |  |
| `"defaults"` |  |
| `"delete_branch_on_merge"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"devcontainer_path"` | Path to devcontainer.json from repo root used to create Codespace. |
| `"disabled"` |  |
| `"display_name"` | Display name for this codespace. |
| `"downloads_url"` |  |
| `"encrypted_value"` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `"environment_id"` | UUID identifying this codespace's environment. |
| `"events_url"` |  |
| `"export_url"` | Url for fetching export details |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"geo"` | The geographic area for this codespace. |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_status"` | Details about the codespace's git repository. |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` |  |
| `"has_issues"` |  |
| `"has_pages"` |  |
| `"has_projects"` |  |
| `"has_wiki"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` | Web url for the exported branch |
| `"id"` | Id for the export details |
| `"idle_timeout_minutes"` | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `"idle_timeout_notice"` | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `"is_template"` |  |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"key"` | The Base64 encoded public key. |
| `"key_id"` | The identifier for the key. |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"last_known_stop_notice"` | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `"last_used_at"` | Last known time this codespace was started. |
| `"license"` |  |
| `"location"` | The initally assigned location of a new codespace. |
| `"machine"` | A description of the machine powering a codespace. |
| `"machines_url"` | API URL to access available alternate machine types for this codespace. |
| `"memory_in_bytes"` | How much memory is available to the codespace. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"multi_repo_permissions_opt_out"` | Whether to authorize requested permissions from devcontainer.json |
| `"name"` | The name of the secret. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"operating_system"` | The operating system of the machine. |
| `"owner"` | A GitHub user. |
| `"path"` |  |
| `"pending_operation"` | Whether or not a codespace has a pending async operation. |
| `"pending_operation_disabled_reason"` | Text to show user when codespace is disabled by a pending operation |
| `"permissions"` |  |
| `"prebuild"` | Whether the codespace was created from a prebuild. |
| `"prebuild_availability"` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `"private"` | Whether the new repository should be private. |
| `"publish_url"` | API URL to publish this codespace to a new repository. |
| `"pulls_url"` | API URL for the Pull Request associated with this codespace, if any. |
| `"pushed_at"` |  |
| `"recent_folders"` | Recently opened folders inside the codespace. |
| `"ref"` | Git ref (typically a branch name) for this codespace |
| `"releases_url"` |  |
| `"repository"` | Minimal Repository |
| `"retention_expires_at"` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `"retention_period_minutes"` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `"role_name"` |  |
| `"runtime_constraints"` |  |
| `"security_and_analysis"` |  |
| `"selected_repositories_url"` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `"selected_repository_ids"` | An array of repository IDs that can access the organization secret. |
| `"selected_usernames"` | The usernames of the organization members whose codespaces be billed to the organization. |
| `"sha"` | Git commit SHA of the exported branch |
| `"size"` | The size of the repository, in kilobytes. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"start_url"` | API URL to start this codespace. |
| `"state"` | State of the latest export |
| `"statuses_url"` |  |
| `"stop_url"` | API URL to stop this codespace. |
| `"storage_in_bytes"` | How much storage is available to the codespace. |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"template"` |  |
| `"title"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"url"` | API URL for this codespace. |
| `"visibility"` | The type of repositories in the organization that the secret is visible to |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` |  |
| `"web_url"` | URL to access this codespace on the web. |
| `"working_directory"` | Working directory for this codespace |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`

#### Collaborator

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"permissions"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"role_name"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/collaborators`

#### CombinedBillingUsage

| Field | Description |
| --- | --- |
| `"days_left_in_billing_cycle"` | Numbers of days left in billing cycle. |
| `"estimated_paid_storage_for_month"` | Estimated storage space (GB) used in billing cycle. |
| `"estimated_storage_for_month"` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

Operations: Load.

API path: `/orgs/{org}/settings/billing/shared-storage`

#### CombinedCommitStatus

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"context"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"required"` |  |
| `"state"` |  |
| `"target_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{ref}/status`

#### Commit

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"base"` | The name of the base branch that the head will be merged into. |
| `"comments_url"` |  |
| `"commit"` |  |
| `"commit_message"` | Commit message to use for the merge commit. |
| `"committer"` |  |
| `"files"` |  |
| `"head"` | The head to merge. |
| `"html_url"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"parents"` |  |
| `"sha"` |  |
| `"stats"` |  |
| `"url"` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/merges`

#### CommitActivity

| Field | Description |
| --- | --- |
| `"days"` |  |
| `"total"` |  |
| `"week"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/commit_activity`

#### CommitComment

| Field | Description |
| --- | --- |
| `"author_association"` | How the author is associated with the repository. |
| `"body"` | The contents of the comment. |
| `"commit_id"` |  |
| `"created_at"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"line"` | **Closing down notice**. |
| `"node_id"` |  |
| `"path"` | Relative path of the file to comment on. |
| `"position"` | Line index in the diff to comment on. |
| `"reactions"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/commits/{commit_sha}/comments`

#### CommitComparison

| Field | Description |
| --- | --- |
| `"ahead_by"` |  |
| `"base_commit"` | Commit |
| `"behind_by"` |  |
| `"commits"` |  |
| `"diff_url"` |  |
| `"files"` |  |
| `"html_url"` |  |
| `"merge_base_commit"` | Commit |
| `"patch_url"` |  |
| `"permalink_url"` |  |
| `"status"` |  |
| `"total_commits"` |  |
| `"url"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/compare/{basehead}`

#### CommunityProfile

| Field | Description |
| --- | --- |
| `"code_of_conduct"` | Code of Conduct Simple |
| `"code_of_conduct_file"` |  |
| `"contributing"` |  |
| `"issue_template"` |  |
| `"license"` | License Simple |
| `"pull_request_template"` |  |
| `"readme"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/community/profile`

#### ContentFile

| Field | Description |
| --- | --- |
| `"git"` |  |
| `"html"` |  |
| `"self"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/readme/{dir}`

#### ContentTraffic

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"path"` |  |
| `"title"` |  |
| `"uniques"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/popular/paths`

#### Contributor

| Field | Description |
| --- | --- |
| `"author"` | A GitHub user. |
| `"avatar_url"` |  |
| `"contributions"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"total"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |
| `"weeks"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/contributors`

#### Copilot

| Field | Description |
| --- | --- |
| `"assignee"` | A GitHub user. |
| `"assigning_team"` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `"created_at"` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `"last_activity_at"` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `"last_activity_editor"` | Last editor that was used by the user for a GitHub Copilot completion. |
| `"last_authenticated_at"` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `"organization"` | A GitHub organization. |
| `"pending_cancellation_date"` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `"plan_type"` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `"selected_teams"` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `"selected_usernames"` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `"updated_at"` | **Closing down notice:** This field is no longer relevant and is closing down. |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/copilot/billing/selected_teams`

#### CopilotOrganizationDetail

| Field | Description |
| --- | --- |
| `"active_this_cycle"` | The number of seats that have used Copilot during the current billing cycle. |
| `"added_this_cycle"` | Seats added during the current billing cycle. |
| `"inactive_this_cycle"` | The number of seats that have not used Copilot during the current billing cycle. |
| `"pending_cancellation"` | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `"pending_invitation"` | The number of users who have been invited to receive a Copilot seat through this organization. |
| `"total"` | The total number of seats being billed for the organization as of the current billing cycle. |

Operations: Load.

API path: `/orgs/{org}/copilot/billing`

#### CopilotUsageMetricsDay

| Field | Description |
| --- | --- |
| `"copilot_dotcom_chat"` | Usage metrics for Copilot Chat in GitHub.com |
| `"copilot_dotcom_pull_requests"` | Usage metrics for Copilot for pull requests. |
| `"copilot_ide_chat"` | Usage metrics for Copilot Chat in the IDE. |
| `"copilot_ide_code_completions"` | Usage metrics for Copilot editor code completions in the IDE. |
| `"date"` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `"total_active_users"` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `"total_engaged_users"` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

Operations: List.

API path: `/orgs/{org}/team/{team_slug}/copilot/metrics`

#### Credential

| Field | Description |
| --- | --- |
| `"credentials"` | A list of credentials to be revoked, up to 1000 per request. |

Operations: Create.

API path: `/credentials/revoke`

#### CustomProperty

| Field | Description |
| --- | --- |
| `"allowed_values"` | An ordered list of the allowed values of the property. |
| `"default_value"` | Default value of the property |
| `"description"` | Short description of the property |
| `"properties"` | The array of custom properties to create or update. |
| `"property_name"` | The name of the property |
| `"required"` | Whether the property is required. |
| `"source_type"` | The source type of the property |
| `"url"` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `"value_type"` | The type of the value for the property |
| `"values_editable_by"` | Who can edit the values of the property |

Operations: List, Load, Patch, Update.

API path: `/orgs/{org}/properties/schema`

#### CustomPropertyValue

| Field | Description |
| --- | --- |
| `"property_name"` | The name of the property |
| `"value"` | The value assigned to the property |

Operations: List.

API path: `/repos/{owner}/{repo}/properties/values`

#### Dependabot

| Field | Description |
| --- | --- |
| `"allow_forking"` |  |
| `"archive_url"` |  |
| `"archived"` |  |
| `"assignees_url"` |  |
| `"avatar_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` |  |
| `"default_level"` | The default repository access level for Dependabot updates. |
| `"delete_branch_on_merge"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` |  |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` |  |
| `"has_issues"` |  |
| `"has_pages"` |  |
| `"has_projects"` |  |
| `"has_wiki"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"is_template"` |  |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` |  |
| `"login"` |  |
| `"members_url"` |  |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the secret. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"owner"` | A GitHub user. |
| `"permissions"` |  |
| `"private"` |  |
| `"public_members_url"` |  |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"repos_url"` |  |
| `"repository_ids_to_add"` | List of repository IDs to add. |
| `"repository_ids_to_remove"` | List of repository IDs to remove. |
| `"role_name"` |  |
| `"security_and_analysis"` |  |
| `"selected_repositories_url"` |  |
| `"selected_repository_ids"` | An array of repository ids that can access the organization secret. |
| `"size"` | The size of the repository, in kilobytes. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"visibility"` | Visibility of a secret |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` |  |

Operations: List, Patch, Remove, Update.

API path: `/orgs/{org}/dependabot/secrets/{secret_name}/repositories`

#### DependabotAlert

| Field | Description |
| --- | --- |
| `"auto_dismissed_at"` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dependency"` | Details for the vulnerable dependency. |
| `"dismissed_at"` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissed_by"` | A GitHub user. |
| `"dismissed_comment"` | An optional comment associated with the alert's dismissal. |
| `"dismissed_reason"` | The reason that the alert was dismissed. |
| `"fixed_at"` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"id"` |  |
| `"number"` | The security alert number. |
| `"security_advisory"` | Details for the GitHub Security Advisory. |
| `"security_vulnerability"` | Details pertaining to one vulnerable version range for the advisory. |
| `"state"` | The state of the Dependabot alert. |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |

Operations: List, Load, Update.

API path: `/repos/{owner}/{repo}/dependabot/alerts`

#### DependabotAlertWithRepository

| Field | Description |
| --- | --- |
| `"auto_dismissed_at"` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dependency"` | Details for the vulnerable dependency. |
| `"dismissed_at"` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"dismissed_by"` | A GitHub user. |
| `"dismissed_comment"` | An optional comment associated with the alert's dismissal. |
| `"dismissed_reason"` | The reason that the alert was dismissed. |
| `"fixed_at"` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"number"` | The security alert number. |
| `"repository"` | A GitHub repository. |
| `"security_advisory"` | Details for the GitHub Security Advisory. |
| `"security_vulnerability"` | Details pertaining to one vulnerable version range for the advisory. |
| `"state"` | The state of the Dependabot alert. |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |

Operations: List.

API path: `/orgs/{org}/dependabot/alerts`

#### DependabotPublicKey

| Field | Description |
| --- | --- |
| `"key"` | The Base64 encoded public key. |
| `"key_id"` | The identifier for the key. |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependabot/secrets/public-key`

#### DependabotRepositoryAccessDetail

| Field | Description |
| --- | --- |
| `"archive_url"` | A template for the API URL to download the repository as an archive. |
| `"assignees_url"` | A template for the API URL to list the available assignees for issues in the repository. |
| `"blobs_url"` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `"branches_url"` | A template for the API URL to get information about branches in the repository. |
| `"collaborators_url"` | A template for the API URL to get information about collaborators of the repository. |
| `"comments_url"` | A template for the API URL to get information about comments on the repository. |
| `"commits_url"` | A template for the API URL to get information about commits on the repository. |
| `"compare_url"` | A template for the API URL to compare two commits or refs. |
| `"contents_url"` | A template for the API URL to get the contents of the repository. |
| `"contributors_url"` | A template for the API URL to list the contributors to the repository. |
| `"deployments_url"` | The API URL to list the deployments of the repository. |
| `"description"` | The repository description. |
| `"downloads_url"` | The API URL to list the downloads on the repository. |
| `"events_url"` | The API URL to list the events of the repository. |
| `"fork"` | Whether the repository is a fork. |
| `"forks_url"` | The API URL to list the forks of the repository. |
| `"full_name"` | The full, globally unique, name of the repository. |
| `"git_commits_url"` | A template for the API URL to get information about Git commits of the repository. |
| `"git_refs_url"` | A template for the API URL to get information about Git refs of the repository. |
| `"git_tags_url"` | A template for the API URL to get information about Git tags of the repository. |
| `"hooks_url"` | The API URL to list the hooks on the repository. |
| `"html_url"` | The URL to view the repository on GitHub.com. |
| `"id"` | A unique identifier of the repository. |
| `"issue_comment_url"` | A template for the API URL to get information about issue comments on the repository. |
| `"issue_events_url"` | A template for the API URL to get information about issue events on the repository. |
| `"issues_url"` | A template for the API URL to get information about issues on the repository. |
| `"keys_url"` | A template for the API URL to get information about deploy keys on the repository. |
| `"labels_url"` | A template for the API URL to get information about labels of the repository. |
| `"languages_url"` | The API URL to get information about the languages of the repository. |
| `"merges_url"` | The API URL to merge branches in the repository. |
| `"milestones_url"` | A template for the API URL to get information about milestones of the repository. |
| `"name"` | The name of the repository. |
| `"node_id"` | The GraphQL identifier of the repository. |
| `"notifications_url"` | A template for the API URL to get information about notifications on the repository. |
| `"owner"` | A GitHub user. |
| `"private"` | Whether the repository is private. |
| `"pulls_url"` | A template for the API URL to get information about pull requests on the repository. |
| `"releases_url"` | A template for the API URL to get information about releases on the repository. |
| `"stargazers_url"` | The API URL to list the stargazers on the repository. |
| `"statuses_url"` | A template for the API URL to get information about statuses of a commit. |
| `"subscribers_url"` | The API URL to list the subscribers on the repository. |
| `"subscription_url"` | The API URL to subscribe to notifications for this repository. |
| `"tags_url"` | The API URL to get information about tags on the repository. |
| `"teams_url"` | The API URL to list the teams on the repository. |
| `"trees_url"` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `"url"` | The URL to get more information about the repository from the GitHub API. |

Operations: List.

API path: `/organizations/{org}/dependabot/repository-access`

#### DependabotSecret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"name"` | The name of the secret. |
| `"updated_at"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependabot/secrets/{secret_name}`

#### DependencyGraph

| Field | Description |
| --- | --- |
| `"detector"` | A description of the detector used. |
| `"job"` |  |
| `"manifests"` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `"metadata"` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `"ref"` | The repository branch that triggered this snapshot. |
| `"scanned"` | The time at which the snapshot was scanned. |
| `"sha"` | The commit SHA associated with this dependency snapshot. |
| `"version"` | The version of the repository snapshot submission. |

Operations: Create.

API path: `/repos/{owner}/{repo}/dependency-graph/snapshots`

#### DependencyGraphDiff

| Field | Description |
| --- | --- |
| `"change_type"` |  |
| `"ecosystem"` |  |
| `"license"` |  |
| `"manifest"` |  |
| `"name"` |  |
| `"package_url"` |  |
| `"scope"` | Where the dependency is utilized. |
| `"source_repository_url"` |  |
| `"version"` |  |
| `"vulnerabilities"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependency-graph/compare/{basehead}`

#### DependencyGraphSpdxSbom

| Field | Description |
| --- | --- |
| `"SPDXID"` | The SPDX identifier for the SPDX document. |
| `"comment"` | An optional comment about the SPDX document. |
| `"creationInfo"` |  |
| `"dataLicense"` | The license under which the SPDX document is licensed. |
| `"documentNamespace"` | The namespace for the SPDX document. |
| `"name"` | The name of the SPDX document. |
| `"packages"` |  |
| `"relationships"` |  |
| `"spdxVersion"` | The version of the SPDX specification that this document conforms to. |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependency-graph/sbom`

#### DeployKey

| Field | Description |
| --- | --- |
| `"added_by"` |  |
| `"created_at"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"key"` | The contents of the key. |
| `"last_used"` |  |
| `"read_only"` | If `true`, the key will only be able to read repository contents. |
| `"title"` | A name for the key. |
| `"url"` |  |
| `"verified"` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/keys`

#### Deployment

| Field | Description |
| --- | --- |
| `"auto_merge"` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `"comment"` | A comment to accompany the deployment review |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"description"` | Short description of the deployment. |
| `"environment"` | Name for the target deployment environment. |
| `"environment_ids"` | The list of environment ids to approve or reject |
| `"id"` | Unique identifier of the deployment |
| `"node_id"` |  |
| `"original_environment"` |  |
| `"payload"` |  |
| `"performed_via_github_app"` | GitHub apps are a new way to extend GitHub. |
| `"production_environment"` | Specifies if the given environment is one that end-users directly interact with. |
| `"ref"` | The ref to deploy. |
| `"repository_url"` |  |
| `"required_contexts"` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `"sha"` |  |
| `"state"` | Whether to approve or reject deployment to the specified environments. |
| `"statuses_url"` |  |
| `"task"` | Parameter to specify a task to execute |
| `"transient_environment"` | Specifies if the given environment is will no longer exist at some point in the future. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`

#### DeploymentBranchPolicy

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier of the branch or tag policy. |
| `"name"` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `"node_id"` |  |
| `"type"` | Whether this rule targets a branch or tag. |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`

#### DeploymentProtectionRule

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier of the deployment protection rule integration. |
| `"integration_id"` | The ID of the custom app that will be enabled on the environment. |
| `"integration_url"` | The URL for the endpoint to get details about the app. |
| `"node_id"` | The node ID for the deployment protection rule integration. |
| `"slug"` | The slugified name of the deployment protection rule integration. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules`

#### DeploymentStatus

| Field | Description |
| --- | --- |
| `"auto_inactive"` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"deployment_url"` |  |
| `"description"` | A short description of the status. |
| `"environment"` | The environment of the deployment that the status is for. |
| `"environment_url"` | The URL for accessing your environment. |
| `"id"` |  |
| `"log_url"` | The URL to associate with this status. |
| `"node_id"` |  |
| `"performed_via_github_app"` | GitHub apps are a new way to extend GitHub. |
| `"repository_url"` |  |
| `"state"` | The state of the status. |
| `"target_url"` | Closing down notice: the URL to associate with this status. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/deployments/{deployment_id}/statuses`

#### DiffEntry

| Field | Description |
| --- | --- |
| `"additions"` |  |
| `"blob_url"` |  |
| `"changes"` |  |
| `"contents_url"` |  |
| `"deletions"` |  |
| `"filename"` |  |
| `"patch"` |  |
| `"previous_filename"` |  |
| `"raw_url"` |  |
| `"sha"` |  |
| `"status"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/files`

#### Email

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"primary"` |  |
| `"verified"` |  |
| `"visibility"` | Denotes whether an email is publicly visible. |

Operations: Create, List, Update.

API path: `/user/emails`

#### Emoji

| Field | Description |
| --- | --- |
| `"1"` |  |
| `"100"` |  |
| `"1234"` |  |
| `"1st_place_medal"` |  |
| `"2nd_place_medal"` |  |
| `"3rd_place_medal"` |  |
| `"8ball"` |  |
| `"a"` |  |
| `"ab"` |  |
| `"abacus"` |  |
| `"abc"` |  |
| `"abcd"` |  |
| `"accept"` |  |
| `"accessibility"` |  |
| `"accordion"` |  |
| `"adhesive_bandage"` |  |
| `"adult"` |  |
| `"aerial_tramway"` |  |
| `"afghanistan"` |  |
| `"airplane"` |  |
| `"aland_islands"` |  |
| `"alarm_clock"` |  |
| `"albania"` |  |
| `"alembic"` |  |
| `"algeria"` |  |
| `"alien"` |  |
| `"ambulance"` |  |
| `"american_samoa"` |  |
| `"amphora"` |  |
| `"anatomical_heart"` |  |
| `"anchor"` |  |
| `"andorra"` |  |
| `"angel"` |  |
| `"anger"` |  |
| `"angola"` |  |
| `"angry"` |  |
| `"anguilla"` |  |
| `"anguished"` |  |
| `"ant"` |  |
| `"antarctica"` |  |
| `"antigua_barbuda"` |  |
| `"apple"` |  |
| `"aquarius"` |  |
| `"argentina"` |  |
| `"aries"` |  |
| `"armenia"` |  |
| `"arrow_backward"` |  |
| `"arrow_double_down"` |  |
| `"arrow_double_up"` |  |
| `"arrow_down"` |  |
| `"arrow_down_small"` |  |
| `"arrow_forward"` |  |
| `"arrow_heading_down"` |  |
| `"arrow_heading_up"` |  |
| `"arrow_left"` |  |
| `"arrow_lower_left"` |  |
| `"arrow_lower_right"` |  |
| `"arrow_right"` |  |
| `"arrow_right_hook"` |  |
| `"arrow_up"` |  |
| `"arrow_up_down"` |  |
| `"arrow_up_small"` |  |
| `"arrow_upper_left"` |  |
| `"arrow_upper_right"` |  |
| `"arrows_clockwise"` |  |
| `"arrows_counterclockwise"` |  |
| `"art"` |  |
| `"articulated_lorry"` |  |
| `"artificial_satellite"` |  |
| `"artist"` |  |
| `"aruba"` |  |
| `"ascension_island"` |  |
| `"asterisk"` |  |
| `"astonished"` |  |
| `"astronaut"` |  |
| `"athletic_shoe"` |  |
| `"atm"` |  |
| `"atom"` |  |
| `"atom_symbol"` |  |
| `"australia"` |  |
| `"austria"` |  |
| `"auto_rickshaw"` |  |
| `"avocado"` |  |
| `"axe"` |  |
| `"azerbaijan"` |  |
| `"b"` |  |
| `"baby"` |  |
| `"baby_bottle"` |  |
| `"baby_chick"` |  |
| `"baby_symbol"` |  |
| `"back"` |  |
| `"bacon"` |  |
| `"badger"` |  |
| `"badminton"` |  |
| `"bagel"` |  |
| `"baggage_claim"` |  |
| `"baguette_bread"` |  |
| `"bahamas"` |  |
| `"bahrain"` |  |
| `"balance_scale"` |  |
| `"bald_man"` |  |
| `"bald_woman"` |  |
| `"ballet_shoes"` |  |
| `"balloon"` |  |
| `"ballot_box"` |  |
| `"ballot_box_with_check"` |  |
| `"bamboo"` |  |
| `"banana"` |  |
| `"bangbang"` |  |
| `"bangladesh"` |  |
| `"banjo"` |  |
| `"bank"` |  |
| `"bar_chart"` |  |
| `"barbados"` |  |
| `"barber"` |  |
| `"baseball"` |  |
| `"basecamp"` |  |
| `"basecampy"` |  |
| `"basket"` |  |
| `"basketball"` |  |
| `"basketball_man"` |  |
| `"basketball_woman"` |  |
| `"bat"` |  |
| `"bath"` |  |
| `"bathtub"` |  |
| `"battery"` |  |
| `"beach_umbrella"` |  |
| `"bear"` |  |
| `"bearded_person"` |  |
| `"beaver"` |  |
| `"bed"` |  |
| `"bee"` |  |
| `"beer"` |  |
| `"beers"` |  |
| `"beetle"` |  |
| `"beginner"` |  |
| `"belarus"` |  |
| `"belgium"` |  |
| `"belize"` |  |
| `"bell"` |  |
| `"bell_pepper"` |  |
| `"bellhop_bell"` |  |
| `"benin"` |  |
| `"bento"` |  |
| `"bermuda"` |  |
| `"beverage_box"` |  |
| `"bhutan"` |  |
| `"bicyclist"` |  |
| `"bike"` |  |
| `"biking_man"` |  |
| `"biking_woman"` |  |
| `"bikini"` |  |
| `"billed_cap"` |  |
| `"biohazard"` |  |
| `"bird"` |  |
| `"birthday"` |  |
| `"bison"` |  |
| `"black_cat"` |  |
| `"black_circle"` |  |
| `"black_flag"` |  |
| `"black_heart"` |  |
| `"black_joker"` |  |
| `"black_large_square"` |  |
| `"black_medium_small_square"` |  |
| `"black_medium_square"` |  |
| `"black_nib"` |  |
| `"black_small_square"` |  |
| `"black_square_button"` |  |
| `"blond_haired_man"` |  |
| `"blond_haired_person"` |  |
| `"blond_haired_woman"` |  |
| `"blonde_woman"` |  |
| `"blossom"` |  |
| `"blowfish"` |  |
| `"blue_book"` |  |
| `"blue_car"` |  |
| `"blue_heart"` |  |
| `"blue_square"` |  |
| `"blueberries"` |  |
| `"blush"` |  |
| `"boar"` |  |
| `"boat"` |  |
| `"bolivia"` |  |
| `"bomb"` |  |
| `"bone"` |  |
| `"book"` |  |
| `"bookmark"` |  |
| `"bookmark_tabs"` |  |
| `"books"` |  |
| `"boom"` |  |
| `"boomerang"` |  |
| `"boot"` |  |
| `"bosnia_herzegovina"` |  |
| `"botswana"` |  |
| `"bouncing_ball_man"` |  |
| `"bouncing_ball_person"` |  |
| `"bouncing_ball_woman"` |  |
| `"bouquet"` |  |
| `"bouvet_island"` |  |
| `"bow"` |  |
| `"bow_and_arrow"` |  |
| `"bowing_man"` |  |
| `"bowing_woman"` |  |
| `"bowl_with_spoon"` |  |
| `"bowling"` |  |
| `"bowtie"` |  |
| `"boxing_glove"` |  |
| `"boy"` |  |
| `"brain"` |  |
| `"brazil"` |  |
| `"bread"` |  |
| `"breast_feeding"` |  |
| `"bricks"` |  |
| `"bride_with_veil"` |  |
| `"bridge_at_night"` |  |
| `"briefcase"` |  |
| `"british_indian_ocean_territory"` |  |
| `"british_virgin_islands"` |  |
| `"broccoli"` |  |
| `"broken_heart"` |  |
| `"broom"` |  |
| `"brown_circle"` |  |
| `"brown_heart"` |  |
| `"brown_square"` |  |
| `"brunei"` |  |
| `"bubble_tea"` |  |
| `"bucket"` |  |
| `"bug"` |  |
| `"building_construction"` |  |
| `"bulb"` |  |
| `"bulgaria"` |  |
| `"bullettrain_front"` |  |
| `"bullettrain_side"` |  |
| `"burkina_faso"` |  |
| `"burrito"` |  |
| `"burundi"` |  |
| `"bus"` |  |
| `"business_suit_levitating"` |  |
| `"busstop"` |  |
| `"bust_in_silhouette"` |  |
| `"busts_in_silhouette"` |  |
| `"butter"` |  |
| `"butterfly"` |  |
| `"cactus"` |  |
| `"cake"` |  |
| `"calendar"` |  |
| `"call_me_hand"` |  |
| `"calling"` |  |
| `"cambodia"` |  |
| `"camel"` |  |
| `"camera"` |  |
| `"camera_flash"` |  |
| `"cameroon"` |  |
| `"camping"` |  |
| `"canada"` |  |
| `"canary_islands"` |  |
| `"cancer"` |  |
| `"candle"` |  |
| `"candy"` |  |
| `"canned_food"` |  |
| `"canoe"` |  |
| `"cape_verde"` |  |
| `"capital_abcd"` |  |
| `"capricorn"` |  |
| `"car"` |  |
| `"card_file_box"` |  |
| `"card_index"` |  |
| `"card_index_dividers"` |  |
| `"caribbean_netherlands"` |  |
| `"carousel_horse"` |  |
| `"carpentry_saw"` |  |
| `"carrot"` |  |
| `"cartwheeling"` |  |
| `"cat"` |  |
| `"cat2"` |  |
| `"cayman_islands"` |  |
| `"cd"` |  |
| `"central_african_republic"` |  |
| `"ceuta_melilla"` |  |
| `"chad"` |  |
| `"chains"` |  |
| `"chair"` |  |
| `"champagne"` |  |
| `"chart"` |  |
| `"chart_with_downwards_trend"` |  |
| `"chart_with_upwards_trend"` |  |
| `"checkered_flag"` |  |
| `"cheese"` |  |
| `"cherries"` |  |
| `"cherry_blossom"` |  |
| `"chess_pawn"` |  |
| `"chestnut"` |  |
| `"chicken"` |  |
| `"child"` |  |
| `"children_crossing"` |  |
| `"chile"` |  |
| `"chipmunk"` |  |
| `"chocolate_bar"` |  |
| `"chopsticks"` |  |
| `"christmas_island"` |  |
| `"christmas_tree"` |  |
| `"church"` |  |
| `"cinema"` |  |
| `"circus_tent"` |  |
| `"city_sunrise"` |  |
| `"city_sunset"` |  |
| `"cityscape"` |  |
| `"cl"` |  |
| `"clamp"` |  |
| `"clap"` |  |
| `"clapper"` |  |
| `"classical_building"` |  |
| `"climbing"` |  |
| `"climbing_man"` |  |
| `"climbing_woman"` |  |
| `"clinking_glasses"` |  |
| `"clipboard"` |  |
| `"clipperton_island"` |  |
| `"clock1"` |  |
| `"clock10"` |  |
| `"clock1030"` |  |
| `"clock11"` |  |
| `"clock1130"` |  |
| `"clock12"` |  |
| `"clock1230"` |  |
| `"clock130"` |  |
| `"clock2"` |  |
| `"clock230"` |  |
| `"clock3"` |  |
| `"clock330"` |  |
| `"clock4"` |  |
| `"clock430"` |  |
| `"clock5"` |  |
| `"clock530"` |  |
| `"clock6"` |  |
| `"clock630"` |  |
| `"clock7"` |  |
| `"clock730"` |  |
| `"clock8"` |  |
| `"clock830"` |  |
| `"clock9"` |  |
| `"clock930"` |  |
| `"closed_book"` |  |
| `"closed_lock_with_key"` |  |
| `"closed_umbrella"` |  |
| `"cloud"` |  |
| `"cloud_with_lightning"` |  |
| `"cloud_with_lightning_and_rain"` |  |
| `"cloud_with_rain"` |  |
| `"cloud_with_snow"` |  |
| `"clown_face"` |  |
| `"clubs"` |  |
| `"cn"` |  |
| `"coat"` |  |
| `"cockroach"` |  |
| `"cocktail"` |  |
| `"coconut"` |  |
| `"cocos_islands"` |  |
| `"coffee"` |  |
| `"coffin"` |  |
| `"coin"` |  |
| `"cold_face"` |  |
| `"cold_sweat"` |  |
| `"collision"` |  |
| `"colombia"` |  |
| `"comet"` |  |
| `"comoros"` |  |
| `"compass"` |  |
| `"computer"` |  |
| `"computer_mouse"` |  |
| `"confetti_ball"` |  |
| `"confounded"` |  |
| `"confused"` |  |
| `"congo_brazzaville"` |  |
| `"congo_kinshasa"` |  |
| `"congratulations"` |  |
| `"construction"` |  |
| `"construction_worker"` |  |
| `"construction_worker_man"` |  |
| `"construction_worker_woman"` |  |
| `"control_knobs"` |  |
| `"convenience_store"` |  |
| `"cook"` |  |
| `"cook_islands"` |  |
| `"cookie"` |  |
| `"cool"` |  |
| `"cop"` |  |
| `"copilot"` |  |
| `"copyright"` |  |
| `"corn"` |  |
| `"costa_rica"` |  |
| `"cote_divoire"` |  |
| `"couch_and_lamp"` |  |
| `"couple"` |  |
| `"couple_with_heart"` |  |
| `"couple_with_heart_man_man"` |  |
| `"couple_with_heart_woman_man"` |  |
| `"couple_with_heart_woman_woman"` |  |
| `"couplekiss"` |  |
| `"couplekiss_man_man"` |  |
| `"couplekiss_man_woman"` |  |
| `"couplekiss_woman_woman"` |  |
| `"cow"` |  |
| `"cow2"` |  |
| `"cowboy_hat_face"` |  |
| `"crab"` |  |
| `"crayon"` |  |
| `"credit_card"` |  |
| `"crescent_moon"` |  |
| `"cricket"` |  |
| `"cricket_game"` |  |
| `"croatia"` |  |
| `"crocodile"` |  |
| `"croissant"` |  |
| `"crossed_fingers"` |  |
| `"crossed_flags"` |  |
| `"crossed_swords"` |  |
| `"crown"` |  |
| `"cry"` |  |
| `"crying_cat_face"` |  |
| `"crystal_ball"` |  |
| `"cuba"` |  |
| `"cucumber"` |  |
| `"cup_with_straw"` |  |
| `"cupcake"` |  |
| `"cupid"` |  |
| `"curacao"` |  |
| `"curling_stone"` |  |
| `"curly_haired_man"` |  |
| `"curly_haired_woman"` |  |
| `"curly_loop"` |  |
| `"currency_exchange"` |  |
| `"curry"` |  |
| `"cursing_face"` |  |
| `"custard"` |  |
| `"customs"` |  |
| `"cut_of_meat"` |  |
| `"cyclone"` |  |
| `"cyprus"` |  |
| `"czech_republic"` |  |
| `"dagger"` |  |
| `"dancer"` |  |
| `"dancers"` |  |
| `"dancing_men"` |  |
| `"dancing_women"` |  |
| `"dango"` |  |
| `"dark_sunglasses"` |  |
| `"dart"` |  |
| `"dash"` |  |
| `"date"` |  |
| `"de"` |  |
| `"deaf_man"` |  |
| `"deaf_person"` |  |
| `"deaf_woman"` |  |
| `"deciduous_tree"` |  |
| `"deer"` |  |
| `"denmark"` |  |
| `"department_store"` |  |
| `"dependabot"` |  |
| `"derelict_house"` |  |
| `"desert"` |  |
| `"desert_island"` |  |
| `"desktop_computer"` |  |
| `"detective"` |  |
| `"diamond_shape_with_a_dot_inside"` |  |
| `"diamonds"` |  |
| `"diego_garcia"` |  |
| `"disappointed"` |  |
| `"disappointed_relieved"` |  |
| `"disguised_face"` |  |
| `"diving_mask"` |  |
| `"diya_lamp"` |  |
| `"dizzy"` |  |
| `"dizzy_face"` |  |
| `"djibouti"` |  |
| `"dna"` |  |
| `"do_not_litter"` |  |
| `"dodo"` |  |
| `"dog"` |  |
| `"dog2"` |  |
| `"dollar"` |  |
| `"dolls"` |  |
| `"dolphin"` |  |
| `"dominica"` |  |
| `"dominican_republic"` |  |
| `"door"` |  |
| `"doughnut"` |  |
| `"dove"` |  |
| `"dragon"` |  |
| `"dragon_face"` |  |
| `"dress"` |  |
| `"dromedary_camel"` |  |
| `"drooling_face"` |  |
| `"drop_of_blood"` |  |
| `"droplet"` |  |
| `"drum"` |  |
| `"duck"` |  |
| `"dumpling"` |  |
| `"dvd"` |  |
| `"eagle"` |  |
| `"ear"` |  |
| `"ear_of_rice"` |  |
| `"ear_with_hearing_aid"` |  |
| `"earth_africa"` |  |
| `"earth_americas"` |  |
| `"earth_asia"` |  |
| `"ecuador"` |  |
| `"egg"` |  |
| `"eggplant"` |  |
| `"egypt"` |  |
| `"eight"` |  |
| `"eight_pointed_black_star"` |  |
| `"eight_spoked_asterisk"` |  |
| `"eject_button"` |  |
| `"el_salvador"` |  |
| `"electric_plug"` |  |
| `"electron"` |  |
| `"elephant"` |  |
| `"elevator"` |  |
| `"elf"` |  |
| `"elf_man"` |  |
| `"elf_woman"` |  |
| `"email"` |  |
| `"end"` |  |
| `"england"` |  |
| `"envelope"` |  |
| `"envelope_with_arrow"` |  |
| `"equatorial_guinea"` |  |
| `"eritrea"` |  |
| `"es"` |  |
| `"estonia"` |  |
| `"ethiopia"` |  |
| `"eu"` |  |
| `"euro"` |  |
| `"european_castle"` |  |
| `"european_post_office"` |  |
| `"european_union"` |  |
| `"evergreen_tree"` |  |
| `"exclamation"` |  |
| `"exploding_head"` |  |
| `"expressionless"` |  |
| `"eye"` |  |
| `"eye_speech_bubble"` |  |
| `"eyeglasses"` |  |
| `"eyes"` |  |
| `"face_exhaling"` |  |
| `"face_in_clouds"` |  |
| `"face_with_head_bandage"` |  |
| `"face_with_spiral_eyes"` |  |
| `"face_with_thermometer"` |  |
| `"facepalm"` |  |
| `"facepunch"` |  |
| `"factory"` |  |
| `"factory_worker"` |  |
| `"fairy"` |  |
| `"fairy_man"` |  |
| `"fairy_woman"` |  |
| `"falafel"` |  |
| `"falkland_islands"` |  |
| `"fallen_leaf"` |  |
| `"family"` |  |
| `"family_man_boy"` |  |
| `"family_man_boy_boy"` |  |
| `"family_man_girl"` |  |
| `"family_man_girl_boy"` |  |
| `"family_man_girl_girl"` |  |
| `"family_man_man_boy"` |  |
| `"family_man_man_boy_boy"` |  |
| `"family_man_man_girl"` |  |
| `"family_man_man_girl_boy"` |  |
| `"family_man_man_girl_girl"` |  |
| `"family_man_woman_boy"` |  |
| `"family_man_woman_boy_boy"` |  |
| `"family_man_woman_girl"` |  |
| `"family_man_woman_girl_boy"` |  |
| `"family_man_woman_girl_girl"` |  |
| `"family_woman_boy"` |  |
| `"family_woman_boy_boy"` |  |
| `"family_woman_girl"` |  |
| `"family_woman_girl_boy"` |  |
| `"family_woman_girl_girl"` |  |
| `"family_woman_woman_boy"` |  |
| `"family_woman_woman_boy_boy"` |  |
| `"family_woman_woman_girl"` |  |
| `"family_woman_woman_girl_boy"` |  |
| `"family_woman_woman_girl_girl"` |  |
| `"farmer"` |  |
| `"faroe_islands"` |  |
| `"fast_forward"` |  |
| `"fax"` |  |
| `"fearful"` |  |
| `"feather"` |  |
| `"feelsgood"` |  |
| `"feet"` |  |
| `"female_detective"` |  |
| `"female_sign"` |  |
| `"ferris_wheel"` |  |
| `"ferry"` |  |
| `"field_hockey"` |  |
| `"fiji"` |  |
| `"file_cabinet"` |  |
| `"file_folder"` |  |
| `"film_projector"` |  |
| `"film_strip"` |  |
| `"finland"` |  |
| `"finnadie"` |  |
| `"fire"` |  |
| `"fire_engine"` |  |
| `"fire_extinguisher"` |  |
| `"firecracker"` |  |
| `"firefighter"` |  |
| `"fireworks"` |  |
| `"first_quarter_moon"` |  |
| `"first_quarter_moon_with_face"` |  |
| `"fish"` |  |
| `"fish_cake"` |  |
| `"fishing_pole_and_fish"` |  |
| `"fishsticks"` |  |
| `"fist"` |  |
| `"fist_left"` |  |
| `"fist_oncoming"` |  |
| `"fist_raised"` |  |
| `"fist_right"` |  |
| `"five"` |  |
| `"flags"` |  |
| `"flamingo"` |  |
| `"flashlight"` |  |
| `"flat_shoe"` |  |
| `"flatbread"` |  |
| `"fleur_de_lis"` |  |
| `"flight_arrival"` |  |
| `"flight_departure"` |  |
| `"flipper"` |  |
| `"floppy_disk"` |  |
| `"flower_playing_cards"` |  |
| `"flushed"` |  |
| `"fly"` |  |
| `"flying_disc"` |  |
| `"flying_saucer"` |  |
| `"fog"` |  |
| `"foggy"` |  |
| `"fondue"` |  |
| `"foot"` |  |
| `"football"` |  |
| `"footprints"` |  |
| `"fork_and_knife"` |  |
| `"fortune_cookie"` |  |
| `"fountain"` |  |
| `"fountain_pen"` |  |
| `"four"` |  |
| `"four_leaf_clover"` |  |
| `"fox_face"` |  |
| `"fr"` |  |
| `"framed_picture"` |  |
| `"free"` |  |
| `"french_guiana"` |  |
| `"french_polynesia"` |  |
| `"french_southern_territories"` |  |
| `"fried_egg"` |  |
| `"fried_shrimp"` |  |
| `"fries"` |  |
| `"frog"` |  |
| `"frowning"` |  |
| `"frowning_face"` |  |
| `"frowning_man"` |  |
| `"frowning_person"` |  |
| `"frowning_woman"` |  |
| `"fu"` |  |
| `"fuelpump"` |  |
| `"full_moon"` |  |
| `"full_moon_with_face"` |  |
| `"funeral_urn"` |  |
| `"gabon"` |  |
| `"gambia"` |  |
| `"game_die"` |  |
| `"garlic"` |  |
| `"gb"` |  |
| `"gear"` |  |
| `"gem"` |  |
| `"gemini"` |  |
| `"genie"` |  |
| `"genie_man"` |  |
| `"genie_woman"` |  |
| `"georgia"` |  |
| `"ghana"` |  |
| `"ghost"` |  |
| `"gibraltar"` |  |
| `"gift"` |  |
| `"gift_heart"` |  |
| `"giraffe"` |  |
| `"girl"` |  |
| `"globe_with_meridians"` |  |
| `"gloves"` |  |
| `"goal_net"` |  |
| `"goat"` |  |
| `"goberserk"` |  |
| `"godmode"` |  |
| `"goggles"` |  |
| `"golf"` |  |
| `"golfing"` |  |
| `"golfing_man"` |  |
| `"golfing_woman"` |  |
| `"gorilla"` |  |
| `"grapes"` |  |
| `"greece"` |  |
| `"green_apple"` |  |
| `"green_book"` |  |
| `"green_circle"` |  |
| `"green_heart"` |  |
| `"green_salad"` |  |
| `"green_square"` |  |
| `"greenland"` |  |
| `"grenada"` |  |
| `"grey_exclamation"` |  |
| `"grey_question"` |  |
| `"grimacing"` |  |
| `"grin"` |  |
| `"grinning"` |  |
| `"guadeloupe"` |  |
| `"guam"` |  |
| `"guard"` |  |
| `"guardsman"` |  |
| `"guardswoman"` |  |
| `"guatemala"` |  |
| `"guernsey"` |  |
| `"guide_dog"` |  |
| `"guinea"` |  |
| `"guinea_bissau"` |  |
| `"guitar"` |  |
| `"gun"` |  |
| `"guyana"` |  |
| `"haircut"` |  |
| `"haircut_man"` |  |
| `"haircut_woman"` |  |
| `"haiti"` |  |
| `"hamburger"` |  |
| `"hammer"` |  |
| `"hammer_and_pick"` |  |
| `"hammer_and_wrench"` |  |
| `"hamster"` |  |
| `"hand"` |  |
| `"hand_over_mouth"` |  |
| `"handbag"` |  |
| `"handball_person"` |  |
| `"handshake"` |  |
| `"hankey"` |  |
| `"hash"` |  |
| `"hatched_chick"` |  |
| `"hatching_chick"` |  |
| `"headphones"` |  |
| `"headstone"` |  |
| `"health_worker"` |  |
| `"hear_no_evil"` |  |
| `"heard_mcdonald_islands"` |  |
| `"heart"` |  |
| `"heart_decoration"` |  |
| `"heart_eyes"` |  |
| `"heart_eyes_cat"` |  |
| `"heart_on_fire"` |  |
| `"heartbeat"` |  |
| `"heartpulse"` |  |
| `"hearts"` |  |
| `"heavy_check_mark"` |  |
| `"heavy_division_sign"` |  |
| `"heavy_dollar_sign"` |  |
| `"heavy_exclamation_mark"` |  |
| `"heavy_heart_exclamation"` |  |
| `"heavy_minus_sign"` |  |
| `"heavy_multiplication_x"` |  |
| `"heavy_plus_sign"` |  |
| `"hedgehog"` |  |
| `"helicopter"` |  |
| `"herb"` |  |
| `"hibiscus"` |  |
| `"high_brightness"` |  |
| `"high_heel"` |  |
| `"hiking_boot"` |  |
| `"hindu_temple"` |  |
| `"hippopotamus"` |  |
| `"hocho"` |  |
| `"hole"` |  |
| `"honduras"` |  |
| `"honey_pot"` |  |
| `"honeybee"` |  |
| `"hong_kong"` |  |
| `"hook"` |  |
| `"horse"` |  |
| `"horse_racing"` |  |
| `"hospital"` |  |
| `"hot_face"` |  |
| `"hot_pepper"` |  |
| `"hotdog"` |  |
| `"hotel"` |  |
| `"hotsprings"` |  |
| `"hourglass"` |  |
| `"hourglass_flowing_sand"` |  |
| `"house"` |  |
| `"house_with_garden"` |  |
| `"houses"` |  |
| `"hugs"` |  |
| `"hungary"` |  |
| `"hurtrealbad"` |  |
| `"hushed"` |  |
| `"hut"` |  |
| `"ice_cream"` |  |
| `"ice_cube"` |  |
| `"ice_hockey"` |  |
| `"ice_skate"` |  |
| `"icecream"` |  |
| `"iceland"` |  |
| `"id"` |  |
| `"ideograph_advantage"` |  |
| `"imp"` |  |
| `"inbox_tray"` |  |
| `"incoming_envelope"` |  |
| `"india"` |  |
| `"indonesia"` |  |
| `"infinity"` |  |
| `"information_desk_person"` |  |
| `"information_source"` |  |
| `"innocent"` |  |
| `"interrobang"` |  |
| `"iphone"` |  |
| `"iran"` |  |
| `"iraq"` |  |
| `"ireland"` |  |
| `"isle_of_man"` |  |
| `"israel"` |  |
| `"it"` |  |
| `"izakaya_lantern"` |  |
| `"jack_o_lantern"` |  |
| `"jamaica"` |  |
| `"japan"` |  |
| `"japanese_castle"` |  |
| `"japanese_goblin"` |  |
| `"japanese_ogre"` |  |
| `"jeans"` |  |
| `"jersey"` |  |
| `"jigsaw"` |  |
| `"jordan"` |  |
| `"joy"` |  |
| `"joy_cat"` |  |
| `"joystick"` |  |
| `"jp"` |  |
| `"judge"` |  |
| `"juggling_person"` |  |
| `"kangaroo"` |  |
| `"kazakhstan"` |  |
| `"kenya"` |  |
| `"key"` |  |
| `"keyboard"` |  |
| `"keycap_ten"` |  |
| `"kick_scooter"` |  |
| `"kimono"` |  |
| `"kiribati"` |  |
| `"kiss"` |  |
| `"kissing"` |  |
| `"kissing_cat"` |  |
| `"kissing_closed_eyes"` |  |
| `"kissing_heart"` |  |
| `"kissing_smiling_eyes"` |  |
| `"kite"` |  |
| `"kiwi_fruit"` |  |
| `"kneeling_man"` |  |
| `"kneeling_person"` |  |
| `"kneeling_woman"` |  |
| `"knife"` |  |
| `"knot"` |  |
| `"koala"` |  |
| `"koko"` |  |
| `"kosovo"` |  |
| `"kr"` |  |
| `"kuwait"` |  |
| `"kyrgyzstan"` |  |
| `"lab_coat"` |  |
| `"label"` |  |
| `"lacrosse"` |  |
| `"ladder"` |  |
| `"lady_beetle"` |  |
| `"lantern"` |  |
| `"laos"` |  |
| `"large_blue_circle"` |  |
| `"large_blue_diamond"` |  |
| `"large_orange_diamond"` |  |
| `"last_quarter_moon"` |  |
| `"last_quarter_moon_with_face"` |  |
| `"latin_cross"` |  |
| `"latvia"` |  |
| `"laughing"` |  |
| `"leafy_green"` |  |
| `"leaves"` |  |
| `"lebanon"` |  |
| `"ledger"` |  |
| `"left_luggage"` |  |
| `"left_right_arrow"` |  |
| `"left_speech_bubble"` |  |
| `"leftwards_arrow_with_hook"` |  |
| `"leg"` |  |
| `"lemon"` |  |
| `"leo"` |  |
| `"leopard"` |  |
| `"lesotho"` |  |
| `"level_slider"` |  |
| `"liberia"` |  |
| `"libra"` |  |
| `"libya"` |  |
| `"liechtenstein"` |  |
| `"light_rail"` |  |
| `"link"` |  |
| `"lion"` |  |
| `"lips"` |  |
| `"lipstick"` |  |
| `"lithuania"` |  |
| `"lizard"` |  |
| `"llama"` |  |
| `"lobster"` |  |
| `"lock"` |  |
| `"lock_with_ink_pen"` |  |
| `"lollipop"` |  |
| `"long_drum"` |  |
| `"loop"` |  |
| `"lotion_bottle"` |  |
| `"lotus_position"` |  |
| `"lotus_position_man"` |  |
| `"lotus_position_woman"` |  |
| `"loud_sound"` |  |
| `"loudspeaker"` |  |
| `"love_hotel"` |  |
| `"love_letter"` |  |
| `"love_you_gesture"` |  |
| `"low_brightness"` |  |
| `"luggage"` |  |
| `"lungs"` |  |
| `"luxembourg"` |  |
| `"lying_face"` |  |
| `"m"` |  |
| `"macau"` |  |
| `"macedonia"` |  |
| `"madagascar"` |  |
| `"mag"` |  |
| `"mag_right"` |  |
| `"mage"` |  |
| `"mage_man"` |  |
| `"mage_woman"` |  |
| `"magic_wand"` |  |
| `"magnet"` |  |
| `"mahjong"` |  |
| `"mailbox"` |  |
| `"mailbox_closed"` |  |
| `"mailbox_with_mail"` |  |
| `"mailbox_with_no_mail"` |  |
| `"malawi"` |  |
| `"malaysia"` |  |
| `"maldives"` |  |
| `"male_detective"` |  |
| `"male_sign"` |  |
| `"mali"` |  |
| `"malta"` |  |
| `"mammoth"` |  |
| `"man"` |  |
| `"man_artist"` |  |
| `"man_astronaut"` |  |
| `"man_beard"` |  |
| `"man_cartwheeling"` |  |
| `"man_cook"` |  |
| `"man_dancing"` |  |
| `"man_facepalming"` |  |
| `"man_factory_worker"` |  |
| `"man_farmer"` |  |
| `"man_feeding_baby"` |  |
| `"man_firefighter"` |  |
| `"man_health_worker"` |  |
| `"man_in_manual_wheelchair"` |  |
| `"man_in_motorized_wheelchair"` |  |
| `"man_in_tuxedo"` |  |
| `"man_judge"` |  |
| `"man_juggling"` |  |
| `"man_mechanic"` |  |
| `"man_office_worker"` |  |
| `"man_pilot"` |  |
| `"man_playing_handball"` |  |
| `"man_playing_water_polo"` |  |
| `"man_scientist"` |  |
| `"man_shrugging"` |  |
| `"man_singer"` |  |
| `"man_student"` |  |
| `"man_teacher"` |  |
| `"man_technologist"` |  |
| `"man_with_gua_pi_mao"` |  |
| `"man_with_probing_cane"` |  |
| `"man_with_turban"` |  |
| `"man_with_veil"` |  |
| `"mandarin"` |  |
| `"mango"` |  |
| `"mans_shoe"` |  |
| `"mantelpiece_clock"` |  |
| `"manual_wheelchair"` |  |
| `"maple_leaf"` |  |
| `"marshall_islands"` |  |
| `"martial_arts_uniform"` |  |
| `"martinique"` |  |
| `"mask"` |  |
| `"massage"` |  |
| `"massage_man"` |  |
| `"massage_woman"` |  |
| `"mate"` |  |
| `"mauritania"` |  |
| `"mauritius"` |  |
| `"mayotte"` |  |
| `"meat_on_bone"` |  |
| `"mechanic"` |  |
| `"mechanical_arm"` |  |
| `"mechanical_leg"` |  |
| `"medal_military"` |  |
| `"medal_sports"` |  |
| `"medical_symbol"` |  |
| `"mega"` |  |
| `"melon"` |  |
| `"memo"` |  |
| `"men_wrestling"` |  |
| `"mending_heart"` |  |
| `"menorah"` |  |
| `"mens"` |  |
| `"mermaid"` |  |
| `"merman"` |  |
| `"merperson"` |  |
| `"metal"` |  |
| `"metro"` |  |
| `"mexico"` |  |
| `"microbe"` |  |
| `"micronesia"` |  |
| `"microphone"` |  |
| `"microscope"` |  |
| `"middle_finger"` |  |
| `"military_helmet"` |  |
| `"milk_glass"` |  |
| `"milky_way"` |  |
| `"minibus"` |  |
| `"minidisc"` |  |
| `"mirror"` |  |
| `"mobile_phone_off"` |  |
| `"moldova"` |  |
| `"monaco"` |  |
| `"money_mouth_face"` |  |
| `"money_with_wings"` |  |
| `"moneybag"` |  |
| `"mongolia"` |  |
| `"monkey"` |  |
| `"monkey_face"` |  |
| `"monocle_face"` |  |
| `"monorail"` |  |
| `"montenegro"` |  |
| `"montserrat"` |  |
| `"moon"` |  |
| `"moon_cake"` |  |
| `"morocco"` |  |
| `"mortar_board"` |  |
| `"mosque"` |  |
| `"mosquito"` |  |
| `"motor_boat"` |  |
| `"motor_scooter"` |  |
| `"motorcycle"` |  |
| `"motorized_wheelchair"` |  |
| `"motorway"` |  |
| `"mount_fuji"` |  |
| `"mountain"` |  |
| `"mountain_bicyclist"` |  |
| `"mountain_biking_man"` |  |
| `"mountain_biking_woman"` |  |
| `"mountain_cableway"` |  |
| `"mountain_railway"` |  |
| `"mountain_snow"` |  |
| `"mouse"` |  |
| `"mouse2"` |  |
| `"mouse_trap"` |  |
| `"movie_camera"` |  |
| `"moyai"` |  |
| `"mozambique"` |  |
| `"mrs_claus"` |  |
| `"muscle"` |  |
| `"mushroom"` |  |
| `"musical_keyboard"` |  |
| `"musical_note"` |  |
| `"musical_score"` |  |
| `"mute"` |  |
| `"mx_claus"` |  |
| `"myanmar"` |  |
| `"nail_care"` |  |
| `"name_badge"` |  |
| `"namibia"` |  |
| `"national_park"` |  |
| `"nauru"` |  |
| `"nauseated_face"` |  |
| `"nazar_amulet"` |  |
| `"neckbeard"` |  |
| `"necktie"` |  |
| `"negative_squared_cross_mark"` |  |
| `"nepal"` |  |
| `"nerd_face"` |  |
| `"nesting_dolls"` |  |
| `"netherlands"` |  |
| `"neutral_face"` |  |
| `"new"` |  |
| `"new_caledonia"` |  |
| `"new_moon"` |  |
| `"new_moon_with_face"` |  |
| `"new_zealand"` |  |
| `"newspaper"` |  |
| `"newspaper_roll"` |  |
| `"next_track_button"` |  |
| `"ng"` |  |
| `"ng_man"` |  |
| `"ng_woman"` |  |
| `"nicaragua"` |  |
| `"niger"` |  |
| `"nigeria"` |  |
| `"night_with_stars"` |  |
| `"nine"` |  |
| `"ninja"` |  |
| `"niue"` |  |
| `"no_bell"` |  |
| `"no_bicycles"` |  |
| `"no_entry"` |  |
| `"no_entry_sign"` |  |
| `"no_good"` |  |
| `"no_good_man"` |  |
| `"no_good_woman"` |  |
| `"no_mobile_phones"` |  |
| `"no_mouth"` |  |
| `"no_pedestrians"` |  |
| `"no_smoking"` |  |
| `"nonpotable_water"` |  |
| `"norfolk_island"` |  |
| `"north_korea"` |  |
| `"northern_mariana_islands"` |  |
| `"norway"` |  |
| `"nose"` |  |
| `"notebook"` |  |
| `"notebook_with_decorative_cover"` |  |
| `"notes"` |  |
| `"nut_and_bolt"` |  |
| `"o"` |  |
| `"o2"` |  |
| `"ocean"` |  |
| `"octocat"` |  |
| `"octopus"` |  |
| `"oden"` |  |
| `"office"` |  |
| `"office_worker"` |  |
| `"oil_drum"` |  |
| `"ok"` |  |
| `"ok_hand"` |  |
| `"ok_man"` |  |
| `"ok_person"` |  |
| `"ok_woman"` |  |
| `"old_key"` |  |
| `"older_adult"` |  |
| `"older_man"` |  |
| `"older_woman"` |  |
| `"olive"` |  |
| `"om"` |  |
| `"oman"` |  |
| `"on"` |  |
| `"oncoming_automobile"` |  |
| `"oncoming_bus"` |  |
| `"oncoming_police_car"` |  |
| `"oncoming_taxi"` |  |
| `"one"` |  |
| `"one_piece_swimsuit"` |  |
| `"onion"` |  |
| `"open_book"` |  |
| `"open_file_folder"` |  |
| `"open_hands"` |  |
| `"open_mouth"` |  |
| `"open_umbrella"` |  |
| `"ophiuchus"` |  |
| `"orange"` |  |
| `"orange_book"` |  |
| `"orange_circle"` |  |
| `"orange_heart"` |  |
| `"orange_square"` |  |
| `"orangutan"` |  |
| `"orthodox_cross"` |  |
| `"otter"` |  |
| `"outbox_tray"` |  |
| `"owl"` |  |
| `"ox"` |  |
| `"oyster"` |  |
| `"package"` |  |
| `"page_facing_up"` |  |
| `"page_with_curl"` |  |
| `"pager"` |  |
| `"paintbrush"` |  |
| `"pakistan"` |  |
| `"palau"` |  |
| `"palestinian_territories"` |  |
| `"palm_tree"` |  |
| `"palms_up_together"` |  |
| `"panama"` |  |
| `"pancakes"` |  |
| `"panda_face"` |  |
| `"paperclip"` |  |
| `"paperclips"` |  |
| `"papua_new_guinea"` |  |
| `"parachute"` |  |
| `"paraguay"` |  |
| `"parasol_on_ground"` |  |
| `"parking"` |  |
| `"parrot"` |  |
| `"part_alternation_mark"` |  |
| `"partly_sunny"` |  |
| `"partying_face"` |  |
| `"passenger_ship"` |  |
| `"passport_control"` |  |
| `"pause_button"` |  |
| `"paw_prints"` |  |
| `"peace_symbol"` |  |
| `"peach"` |  |
| `"peacock"` |  |
| `"peanuts"` |  |
| `"pear"` |  |
| `"pen"` |  |
| `"pencil"` |  |
| `"pencil2"` |  |
| `"penguin"` |  |
| `"pensive"` |  |
| `"people_holding_hands"` |  |
| `"people_hugging"` |  |
| `"performing_arts"` |  |
| `"persevere"` |  |
| `"person_bald"` |  |
| `"person_curly_hair"` |  |
| `"person_feeding_baby"` |  |
| `"person_fencing"` |  |
| `"person_in_manual_wheelchair"` |  |
| `"person_in_motorized_wheelchair"` |  |
| `"person_in_tuxedo"` |  |
| `"person_red_hair"` |  |
| `"person_white_hair"` |  |
| `"person_with_probing_cane"` |  |
| `"person_with_turban"` |  |
| `"person_with_veil"` |  |
| `"peru"` |  |
| `"petri_dish"` |  |
| `"philippines"` |  |
| `"phone"` |  |
| `"pick"` |  |
| `"pickup_truck"` |  |
| `"pie"` |  |
| `"pig"` |  |
| `"pig2"` |  |
| `"pig_nose"` |  |
| `"pill"` |  |
| `"pilot"` |  |
| `"pinata"` |  |
| `"pinched_fingers"` |  |
| `"pinching_hand"` |  |
| `"pineapple"` |  |
| `"ping_pong"` |  |
| `"pirate_flag"` |  |
| `"pisces"` |  |
| `"pitcairn_islands"` |  |
| `"pizza"` |  |
| `"placard"` |  |
| `"place_of_worship"` |  |
| `"plate_with_cutlery"` |  |
| `"play_or_pause_button"` |  |
| `"pleading_face"` |  |
| `"plunger"` |  |
| `"point_down"` |  |
| `"point_left"` |  |
| `"point_right"` |  |
| `"point_up"` |  |
| `"point_up_2"` |  |
| `"poland"` |  |
| `"polar_bear"` |  |
| `"police_car"` |  |
| `"police_officer"` |  |
| `"policeman"` |  |
| `"policewoman"` |  |
| `"poodle"` |  |
| `"poop"` |  |
| `"popcorn"` |  |
| `"portugal"` |  |
| `"post_office"` |  |
| `"postal_horn"` |  |
| `"postbox"` |  |
| `"potable_water"` |  |
| `"potato"` |  |
| `"potted_plant"` |  |
| `"pouch"` |  |
| `"poultry_leg"` |  |
| `"pound"` |  |
| `"pout"` |  |
| `"pouting_cat"` |  |
| `"pouting_face"` |  |
| `"pouting_man"` |  |
| `"pouting_woman"` |  |
| `"pray"` |  |
| `"prayer_beads"` |  |
| `"pregnant_woman"` |  |
| `"pretzel"` |  |
| `"previous_track_button"` |  |
| `"prince"` |  |
| `"princess"` |  |
| `"printer"` |  |
| `"probing_cane"` |  |
| `"puerto_rico"` |  |
| `"punch"` |  |
| `"purple_circle"` |  |
| `"purple_heart"` |  |
| `"purple_square"` |  |
| `"purse"` |  |
| `"pushpin"` |  |
| `"put_litter_in_its_place"` |  |
| `"qatar"` |  |
| `"question"` |  |
| `"rabbit"` |  |
| `"rabbit2"` |  |
| `"raccoon"` |  |
| `"racehorse"` |  |
| `"racing_car"` |  |
| `"radio"` |  |
| `"radio_button"` |  |
| `"radioactive"` |  |
| `"rage"` |  |
| `"rage1"` |  |
| `"rage2"` |  |
| `"rage3"` |  |
| `"rage4"` |  |
| `"railway_car"` |  |
| `"railway_track"` |  |
| `"rainbow"` |  |
| `"rainbow_flag"` |  |
| `"raised_back_of_hand"` |  |
| `"raised_eyebrow"` |  |
| `"raised_hand"` |  |
| `"raised_hand_with_fingers_splayed"` |  |
| `"raised_hands"` |  |
| `"raising_hand"` |  |
| `"raising_hand_man"` |  |
| `"raising_hand_woman"` |  |
| `"ram"` |  |
| `"ramen"` |  |
| `"rat"` |  |
| `"razor"` |  |
| `"receipt"` |  |
| `"record_button"` |  |
| `"recycle"` |  |
| `"red_car"` |  |
| `"red_circle"` |  |
| `"red_envelope"` |  |
| `"red_haired_man"` |  |
| `"red_haired_woman"` |  |
| `"red_square"` |  |
| `"registered"` |  |
| `"relaxed"` |  |
| `"relieved"` |  |
| `"reminder_ribbon"` |  |
| `"repeat"` |  |
| `"repeat_one"` |  |
| `"rescue_worker_helmet"` |  |
| `"restroom"` |  |
| `"reunion"` |  |
| `"revolving_hearts"` |  |
| `"rewind"` |  |
| `"rhinoceros"` |  |
| `"ribbon"` |  |
| `"rice"` |  |
| `"rice_ball"` |  |
| `"rice_cracker"` |  |
| `"rice_scene"` |  |
| `"right_anger_bubble"` |  |
| `"ring"` |  |
| `"ringed_planet"` |  |
| `"robot"` |  |
| `"rock"` |  |
| `"rocket"` |  |
| `"rofl"` |  |
| `"roll_eyes"` |  |
| `"roll_of_paper"` |  |
| `"roller_coaster"` |  |
| `"roller_skate"` |  |
| `"romania"` |  |
| `"rooster"` |  |
| `"rose"` |  |
| `"rosette"` |  |
| `"rotating_light"` |  |
| `"round_pushpin"` |  |
| `"rowboat"` |  |
| `"rowing_man"` |  |
| `"rowing_woman"` |  |
| `"ru"` |  |
| `"rugby_football"` |  |
| `"runner"` |  |
| `"running"` |  |
| `"running_man"` |  |
| `"running_shirt_with_sash"` |  |
| `"running_woman"` |  |
| `"rwanda"` |  |
| `"sa"` |  |
| `"safety_pin"` |  |
| `"safety_vest"` |  |
| `"sagittarius"` |  |
| `"sailboat"` |  |
| `"sake"` |  |
| `"salt"` |  |
| `"samoa"` |  |
| `"san_marino"` |  |
| `"sandal"` |  |
| `"sandwich"` |  |
| `"santa"` |  |
| `"sao_tome_principe"` |  |
| `"sari"` |  |
| `"sassy_man"` |  |
| `"sassy_woman"` |  |
| `"satellite"` |  |
| `"satisfied"` |  |
| `"saudi_arabia"` |  |
| `"sauna_man"` |  |
| `"sauna_person"` |  |
| `"sauna_woman"` |  |
| `"sauropod"` |  |
| `"saxophone"` |  |
| `"scarf"` |  |
| `"school"` |  |
| `"school_satchel"` |  |
| `"scientist"` |  |
| `"scissors"` |  |
| `"scorpion"` |  |
| `"scorpius"` |  |
| `"scotland"` |  |
| `"scream"` |  |
| `"scream_cat"` |  |
| `"screwdriver"` |  |
| `"scroll"` |  |
| `"seal"` |  |
| `"seat"` |  |
| `"secret"` |  |
| `"see_no_evil"` |  |
| `"seedling"` |  |
| `"selfie"` |  |
| `"senegal"` |  |
| `"serbia"` |  |
| `"service_dog"` |  |
| `"seven"` |  |
| `"sewing_needle"` |  |
| `"seychelles"` |  |
| `"shallow_pan_of_food"` |  |
| `"shamrock"` |  |
| `"shark"` |  |
| `"shaved_ice"` |  |
| `"sheep"` |  |
| `"shell"` |  |
| `"shield"` |  |
| `"shinto_shrine"` |  |
| `"ship"` |  |
| `"shipit"` |  |
| `"shirt"` |  |
| `"shoe"` |  |
| `"shopping"` |  |
| `"shopping_cart"` |  |
| `"shorts"` |  |
| `"shower"` |  |
| `"shrimp"` |  |
| `"shrug"` |  |
| `"shushing_face"` |  |
| `"sierra_leone"` |  |
| `"signal_strength"` |  |
| `"singapore"` |  |
| `"singer"` |  |
| `"sint_maarten"` |  |
| `"six"` |  |
| `"six_pointed_star"` |  |
| `"skateboard"` |  |
| `"ski"` |  |
| `"skier"` |  |
| `"skull"` |  |
| `"skull_and_crossbones"` |  |
| `"skunk"` |  |
| `"sled"` |  |
| `"sleeping"` |  |
| `"sleeping_bed"` |  |
| `"sleepy"` |  |
| `"slightly_frowning_face"` |  |
| `"slightly_smiling_face"` |  |
| `"slot_machine"` |  |
| `"sloth"` |  |
| `"slovakia"` |  |
| `"slovenia"` |  |
| `"small_airplane"` |  |
| `"small_blue_diamond"` |  |
| `"small_orange_diamond"` |  |
| `"small_red_triangle"` |  |
| `"small_red_triangle_down"` |  |
| `"smile"` |  |
| `"smile_cat"` |  |
| `"smiley"` |  |
| `"smiley_cat"` |  |
| `"smiling_face_with_tear"` |  |
| `"smiling_face_with_three_hearts"` |  |
| `"smiling_imp"` |  |
| `"smirk"` |  |
| `"smirk_cat"` |  |
| `"smoking"` |  |
| `"snail"` |  |
| `"snake"` |  |
| `"sneezing_face"` |  |
| `"snowboarder"` |  |
| `"snowflake"` |  |
| `"snowman"` |  |
| `"snowman_with_snow"` |  |
| `"soap"` |  |
| `"sob"` |  |
| `"soccer"` |  |
| `"socks"` |  |
| `"softball"` |  |
| `"solomon_islands"` |  |
| `"somalia"` |  |
| `"soon"` |  |
| `"sos"` |  |
| `"sound"` |  |
| `"south_africa"` |  |
| `"south_georgia_south_sandwich_islands"` |  |
| `"south_sudan"` |  |
| `"space_invader"` |  |
| `"spades"` |  |
| `"spaghetti"` |  |
| `"sparkle"` |  |
| `"sparkler"` |  |
| `"sparkles"` |  |
| `"sparkling_heart"` |  |
| `"speak_no_evil"` |  |
| `"speaker"` |  |
| `"speaking_head"` |  |
| `"speech_balloon"` |  |
| `"speedboat"` |  |
| `"spider"` |  |
| `"spider_web"` |  |
| `"spiral_calendar"` |  |
| `"spiral_notepad"` |  |
| `"sponge"` |  |
| `"spoon"` |  |
| `"squid"` |  |
| `"sri_lanka"` |  |
| `"st_barthelemy"` |  |
| `"st_helena"` |  |
| `"st_kitts_nevis"` |  |
| `"st_lucia"` |  |
| `"st_martin"` |  |
| `"st_pierre_miquelon"` |  |
| `"st_vincent_grenadines"` |  |
| `"stadium"` |  |
| `"standing_man"` |  |
| `"standing_person"` |  |
| `"standing_woman"` |  |
| `"star"` |  |
| `"star2"` |  |
| `"star_and_crescent"` |  |
| `"star_of_david"` |  |
| `"star_struck"` |  |
| `"stars"` |  |
| `"station"` |  |
| `"statue_of_liberty"` |  |
| `"steam_locomotive"` |  |
| `"stethoscope"` |  |
| `"stew"` |  |
| `"stop_button"` |  |
| `"stop_sign"` |  |
| `"stopwatch"` |  |
| `"straight_ruler"` |  |
| `"strawberry"` |  |
| `"stuck_out_tongue"` |  |
| `"stuck_out_tongue_closed_eyes"` |  |
| `"stuck_out_tongue_winking_eye"` |  |
| `"student"` |  |
| `"studio_microphone"` |  |
| `"stuffed_flatbread"` |  |
| `"sudan"` |  |
| `"sun_behind_large_cloud"` |  |
| `"sun_behind_rain_cloud"` |  |
| `"sun_behind_small_cloud"` |  |
| `"sun_with_face"` |  |
| `"sunflower"` |  |
| `"sunglasses"` |  |
| `"sunny"` |  |
| `"sunrise"` |  |
| `"sunrise_over_mountains"` |  |
| `"superhero"` |  |
| `"superhero_man"` |  |
| `"superhero_woman"` |  |
| `"supervillain"` |  |
| `"supervillain_man"` |  |
| `"supervillain_woman"` |  |
| `"surfer"` |  |
| `"surfing_man"` |  |
| `"surfing_woman"` |  |
| `"suriname"` |  |
| `"sushi"` |  |
| `"suspect"` |  |
| `"suspension_railway"` |  |
| `"svalbard_jan_mayen"` |  |
| `"swan"` |  |
| `"swaziland"` |  |
| `"sweat"` |  |
| `"sweat_drops"` |  |
| `"sweat_smile"` |  |
| `"sweden"` |  |
| `"sweet_potato"` |  |
| `"swim_brief"` |  |
| `"swimmer"` |  |
| `"swimming_man"` |  |
| `"swimming_woman"` |  |
| `"switzerland"` |  |
| `"symbols"` |  |
| `"synagogue"` |  |
| `"syria"` |  |
| `"syringe"` |  |
| `"taco"` |  |
| `"tada"` |  |
| `"taiwan"` |  |
| `"tajikistan"` |  |
| `"takeout_box"` |  |
| `"tamale"` |  |
| `"tanabata_tree"` |  |
| `"tangerine"` |  |
| `"tanzania"` |  |
| `"taurus"` |  |
| `"taxi"` |  |
| `"tea"` |  |
| `"teacher"` |  |
| `"teapot"` |  |
| `"technologist"` |  |
| `"teddy_bear"` |  |
| `"telephone"` |  |
| `"telephone_receiver"` |  |
| `"telescope"` |  |
| `"tennis"` |  |
| `"tent"` |  |
| `"test_tube"` |  |
| `"thailand"` |  |
| `"thermometer"` |  |
| `"thinking"` |  |
| `"thong_sandal"` |  |
| `"thought_balloon"` |  |
| `"thread"` |  |
| `"three"` |  |
| `"thumbsdown"` |  |
| `"thumbsup"` |  |
| `"ticket"` |  |
| `"tickets"` |  |
| `"tiger"` |  |
| `"tiger2"` |  |
| `"timer_clock"` |  |
| `"timor_leste"` |  |
| `"tipping_hand_man"` |  |
| `"tipping_hand_person"` |  |
| `"tipping_hand_woman"` |  |
| `"tired_face"` |  |
| `"tm"` |  |
| `"togo"` |  |
| `"toilet"` |  |
| `"tokelau"` |  |
| `"tokyo_tower"` |  |
| `"tomato"` |  |
| `"tonga"` |  |
| `"tongue"` |  |
| `"toolbox"` |  |
| `"tooth"` |  |
| `"toothbrush"` |  |
| `"top"` |  |
| `"tophat"` |  |
| `"tornado"` |  |
| `"tr"` |  |
| `"trackball"` |  |
| `"tractor"` |  |
| `"traffic_light"` |  |
| `"train"` |  |
| `"train2"` |  |
| `"tram"` |  |
| `"transgender_flag"` |  |
| `"transgender_symbol"` |  |
| `"trex"` |  |
| `"triangular_flag_on_post"` |  |
| `"triangular_ruler"` |  |
| `"trident"` |  |
| `"trinidad_tobago"` |  |
| `"tristan_da_cunha"` |  |
| `"triumph"` |  |
| `"trolleybus"` |  |
| `"trollface"` |  |
| `"trophy"` |  |
| `"tropical_drink"` |  |
| `"tropical_fish"` |  |
| `"truck"` |  |
| `"trumpet"` |  |
| `"tshirt"` |  |
| `"tulip"` |  |
| `"tumbler_glass"` |  |
| `"tunisia"` |  |
| `"turkey"` |  |
| `"turkmenistan"` |  |
| `"turks_caicos_islands"` |  |
| `"turtle"` |  |
| `"tuvalu"` |  |
| `"tv"` |  |
| `"twisted_rightwards_arrows"` |  |
| `"two"` |  |
| `"two_hearts"` |  |
| `"two_men_holding_hands"` |  |
| `"two_women_holding_hands"` |  |
| `"u5272"` |  |
| `"u5408"` |  |
| `"u55b6"` |  |
| `"u6307"` |  |
| `"u6708"` |  |
| `"u6709"` |  |
| `"u6e80"` |  |
| `"u7121"` |  |
| `"u7533"` |  |
| `"u7981"` |  |
| `"u7a7a"` |  |
| `"uganda"` |  |
| `"uk"` |  |
| `"ukraine"` |  |
| `"umbrella"` |  |
| `"unamused"` |  |
| `"underage"` |  |
| `"unicorn"` |  |
| `"united_arab_emirates"` |  |
| `"united_nations"` |  |
| `"unlock"` |  |
| `"up"` |  |
| `"upside_down_face"` |  |
| `"uruguay"` |  |
| `"us"` |  |
| `"us_outlying_islands"` |  |
| `"us_virgin_islands"` |  |
| `"uzbekistan"` |  |
| `"v"` |  |
| `"vampire"` |  |
| `"vampire_man"` |  |
| `"vampire_woman"` |  |
| `"vanuatu"` |  |
| `"vatican_city"` |  |
| `"venezuela"` |  |
| `"vertical_traffic_light"` |  |
| `"vhs"` |  |
| `"vibration_mode"` |  |
| `"video_camera"` |  |
| `"video_game"` |  |
| `"vietnam"` |  |
| `"violin"` |  |
| `"virgo"` |  |
| `"volcano"` |  |
| `"volleyball"` |  |
| `"vomiting_face"` |  |
| `"vs"` |  |
| `"vulcan_salute"` |  |
| `"waffle"` |  |
| `"wales"` |  |
| `"walking"` |  |
| `"walking_man"` |  |
| `"walking_woman"` |  |
| `"wallis_futuna"` |  |
| `"waning_crescent_moon"` |  |
| `"waning_gibbous_moon"` |  |
| `"warning"` |  |
| `"wastebasket"` |  |
| `"watch"` |  |
| `"water_buffalo"` |  |
| `"water_polo"` |  |
| `"watermelon"` |  |
| `"wave"` |  |
| `"wavy_dash"` |  |
| `"waxing_crescent_moon"` |  |
| `"waxing_gibbous_moon"` |  |
| `"wc"` |  |
| `"weary"` |  |
| `"wedding"` |  |
| `"weight_lifting"` |  |
| `"weight_lifting_man"` |  |
| `"weight_lifting_woman"` |  |
| `"western_sahara"` |  |
| `"whale"` |  |
| `"whale2"` |  |
| `"wheel_of_dharma"` |  |
| `"wheelchair"` |  |
| `"white_check_mark"` |  |
| `"white_circle"` |  |
| `"white_flag"` |  |
| `"white_flower"` |  |
| `"white_haired_man"` |  |
| `"white_haired_woman"` |  |
| `"white_heart"` |  |
| `"white_large_square"` |  |
| `"white_medium_small_square"` |  |
| `"white_medium_square"` |  |
| `"white_small_square"` |  |
| `"white_square_button"` |  |
| `"wilted_flower"` |  |
| `"wind_chime"` |  |
| `"wind_face"` |  |
| `"window"` |  |
| `"wine_glass"` |  |
| `"wink"` |  |
| `"wolf"` |  |
| `"woman"` |  |
| `"woman_artist"` |  |
| `"woman_astronaut"` |  |
| `"woman_beard"` |  |
| `"woman_cartwheeling"` |  |
| `"woman_cook"` |  |
| `"woman_dancing"` |  |
| `"woman_facepalming"` |  |
| `"woman_factory_worker"` |  |
| `"woman_farmer"` |  |
| `"woman_feeding_baby"` |  |
| `"woman_firefighter"` |  |
| `"woman_health_worker"` |  |
| `"woman_in_manual_wheelchair"` |  |
| `"woman_in_motorized_wheelchair"` |  |
| `"woman_in_tuxedo"` |  |
| `"woman_judge"` |  |
| `"woman_juggling"` |  |
| `"woman_mechanic"` |  |
| `"woman_office_worker"` |  |
| `"woman_pilot"` |  |
| `"woman_playing_handball"` |  |
| `"woman_playing_water_polo"` |  |
| `"woman_scientist"` |  |
| `"woman_shrugging"` |  |
| `"woman_singer"` |  |
| `"woman_student"` |  |
| `"woman_teacher"` |  |
| `"woman_technologist"` |  |
| `"woman_with_headscarf"` |  |
| `"woman_with_probing_cane"` |  |
| `"woman_with_turban"` |  |
| `"woman_with_veil"` |  |
| `"womans_clothes"` |  |
| `"womans_hat"` |  |
| `"women_wrestling"` |  |
| `"womens"` |  |
| `"wood"` |  |
| `"woozy_face"` |  |
| `"world_map"` |  |
| `"worm"` |  |
| `"worried"` |  |
| `"wrench"` |  |
| `"wrestling"` |  |
| `"writing_hand"` |  |
| `"x"` |  |
| `"yarn"` |  |
| `"yawning_face"` |  |
| `"yellow_circle"` |  |
| `"yellow_heart"` |  |
| `"yellow_square"` |  |
| `"yemen"` |  |
| `"yen"` |  |
| `"yin_yang"` |  |
| `"yo_yo"` |  |
| `"yum"` |  |
| `"zambia"` |  |
| `"zany_face"` |  |
| `"zap"` |  |
| `"zebra"` |  |
| `"zero"` |  |
| `"zimbabwe"` |  |
| `"zipper_mouth_face"` |  |
| `"zombie"` |  |
| `"zombie_man"` |  |
| `"zombie_woman"` |  |
| `"zzz"` |  |

Operations: Load.

API path: `/emojis`

#### EmptyObject

| Field | Description |
| --- | --- |
| `"attestations"` |  |
| `"enable_debug_logging"` | Whether to enable debug logging for the re-run. |
| `"encrypted_value"` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `"include_claim_keys"` | Array of unique strings. |
| `"key_id"` | ID of the key you used to encrypt the secret. |
| `"languages"` | CodeQL languages to be analyzed. |
| `"name"` | The name of the variable. |
| `"query_suite"` | CodeQL query suite to be used. |
| `"runner_label"` | Runner label to be used if the runner type is labeled. |
| `"runner_type"` | Runner type to be used. |
| `"selected_repository_ids"` | An array of repository ids that can access the organization variable. |
| `"state"` | The desired state of code scanning default setup. |
| `"threat_model"` | Threat model to be used for code scanning analysis. |
| `"use_default"` | Whether to use the default template or not. |
| `"value"` | The value of the variable. |
| `"visibility"` | The type of repositories in the organization that can access the variable. |

Operations: Create, Load, Patch, Update.

API path: `/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`

#### EnterpriseTeam

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` | A description of the team. |
| `"group_id"` | The ID of the IdP group to assign team membership with. |
| `"group_name"` | Retired: this field will not be returned with GHEC enterprise teams. |
| `"html_url"` |  |
| `"id"` |  |
| `"members_url"` |  |
| `"name"` | The name of the team. |
| `"organization_selection_type"` |  |
| `"slug"` |  |
| `"sync_to_organizations"` | Retired: this field will not be returned with GHEC enterprise teams. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/enterprises/{enterprise}/teams`

#### EnterpriseTeamMembership

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}`

#### Environment

| Field | Description |
| --- | --- |
| `"created_at"` | The time that the environment was created, in ISO 8601 format. |
| `"deployment_branch_policy"` | The type of deployment branch policy for this environment. |
| `"html_url"` |  |
| `"id"` | The id of the environment. |
| `"name"` | The name of the environment. |
| `"node_id"` |  |
| `"prevent_self_review"` | Whether or not a user who created the job is prevented from approving their own job. |
| `"protection_rules"` | Built-in deployment protection rules for the environment. |
| `"reviewers"` | The people or teams that may review jobs that reference the environment. |
| `"updated_at"` | The time that the environment was last updated, in ISO 8601 format. |
| `"url"` |  |
| `"wait_timer"` | The amount of time to delay a job after the job is initially triggered. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}`

#### EnvironmentApproval

| Field | Description |
| --- | --- |
| `"comment"` | The comment submitted with the deployment review |
| `"environments"` | The list of environments that were approved or rejected |
| `"state"` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `"user"` | A GitHub user. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/approvals`

#### Event

| Field | Description |
| --- | --- |
| `"actor"` | Actor |
| `"created_at"` |  |
| `"id"` |  |
| `"org"` | Actor |
| `"payload"` |  |
| `"public"` |  |
| `"repo"` |  |
| `"type"` |  |

Operations: List, Load.

API path: `/networks/{owner}/{repo}/events`

#### Feed

| Field | Description |
| --- | --- |
| `"current_user_actor_url"` |  |
| `"current_user_organization_url"` |  |
| `"current_user_organization_urls"` |  |
| `"current_user_public_url"` |  |
| `"current_user_url"` |  |
| `"links"` |  |
| `"repository_discussions_category_url"` | A feed of discussions for a given repository and category. |
| `"repository_discussions_url"` | A feed of discussions for a given repository. |
| `"security_advisories_url"` |  |
| `"timeline_url"` |  |
| `"user_url"` |  |

Operations: List.

API path: `/feeds`

#### FileCommit

| Field | Description |
| --- | --- |
| `"author"` | The author of the file. |
| `"branch"` | The branch name. |
| `"commit"` |  |
| `"committer"` | The person that committed the file. |
| `"content"` | The new file content, using Base64 encoding. |
| `"message"` | The commit message. |
| `"sha"` | **Required if you are updating a file**. |

Operations: Remove, Update.

API path: `/repos/{owner}/{repo}/contents/{path}`

#### Follower

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/users/{username}/followers`

#### Following

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/users/{username}/following`

#### FullRepository

| Field | Description |
| --- | --- |
| `"allow_auto_merge"` | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `"allow_forking"` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `"allow_merge_commit"` | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `"allow_rebase_merge"` | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `"allow_squash_merge"` | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `"allow_update_branch"` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `"anonymous_access_enabled"` | Whether anonymous git access is allowed. |
| `"archive_url"` |  |
| `"archived"` | Whether to archive this repository. |
| `"assignees_url"` |  |
| `"auto_init"` | Pass `true` to create an initial commit with empty README. |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code of Conduct Simple |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` | Updates the default branch for this repository. |
| `"delete_branch_on_merge"` | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `"deployments_url"` |  |
| `"description"` | A short description of the new repository. |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"github_id"` |  |
| `"gitignore_template"` | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Either `true` to enable issues for this repository or `false` to disable them. |
| `"has_pages"` |  |
| `"has_projects"` | Either `true` to enable projects for this repository or `false` to disable them. |
| `"has_wiki"` | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `"homepage"` | A URL with more information about the repository. |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"include_all_branches"` | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `"is_template"` | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` | License Simple |
| `"license_template"` | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `"master_branch"` |  |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the new repository. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"organization"` | A GitHub user. |
| `"owner"` | A GitHub user. |
| `"parent"` | A repository on GitHub. |
| `"permissions"` |  |
| `"private"` | Either `true` to create a new private repository or `false` to create a new public one. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"security_and_analysis"` | Specify which security and analysis features to enable or disable for the repository. |
| `"size"` | The size of the repository, in kilobytes. |
| `"source"` | A repository on GitHub. |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"team_id"` | The id of the team that will be granted access to this repository. |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"template_repository"` | A repository on GitHub. |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"use_squash_pr_title_as_default"` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

Operations: Create, Load, Update.

API path: `/repos/{template_owner}/{template_repo}/generate`

#### Gist

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"comments_enabled"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"created_at"` |  |
| `"description"` | Description of the gist |
| `"files"` | Names and content for the files that make up the gist |
| `"fork_of"` | Gist |
| `"forks"` |  |
| `"forks_url"` |  |
| `"git_pull_url"` |  |
| `"git_push_url"` |  |
| `"history"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"owner"` | A GitHub user. |
| `"public"` |  |
| `"truncated"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/gists`

#### GistComment

| Field | Description |
| --- | --- |
| `"author_association"` | How the author is associated with the repository. |
| `"avatar_url"` |  |
| `"body"` | The comment text. |
| `"created_at"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |
| `"user_view_type"` |  |

Operations: Create, List, Load, Update.

API path: `/gists/{gist_id}/comments`

#### GistCommit

| Field | Description |
| --- | --- |
| `"change_status"` |  |
| `"committed_at"` |  |
| `"id"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |
| `"version"` |  |

Operations: List.

API path: `/gists/{gist_id}/commits`

#### GistSimple

| Field | Description |
| --- | --- |
| `"comments"` |  |
| `"comments_enabled"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"files"` |  |
| `"fork_of"` | Gist |
| `"forks"` |  |
| `"forks_url"` |  |
| `"git_pull_url"` |  |
| `"git_push_url"` |  |
| `"history"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"node_id"` |  |
| `"owner"` | A GitHub user. |
| `"public"` |  |
| `"truncated"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` |  |

Operations: List.

API path: `/gists/{gist_id}/forks`

#### Git

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/repos/{owner}/{repo}/git/refs/{ref}`

#### GitCommit

| Field | Description |
| --- | --- |
| `"author"` | Identifying information for the git-user |
| `"committer"` | Identifying information for the git-user |
| `"html_url"` |  |
| `"id"` |  |
| `"message"` | Message describing the purpose of the commit |
| `"node_id"` |  |
| `"parents"` | The full SHAs of the commits that were the parents of this commit. |
| `"sha"` | SHA for the commit |
| `"signature"` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `"tree"` | The SHA of the tree object this commit points to |
| `"url"` |  |
| `"verification"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/git/commits`

#### GitRef

| Field | Description |
| --- | --- |
| `"force"` | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `"id"` |  |
| `"node_id"` |  |
| `"object"` |  |
| `"ref"` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `"sha"` | SHA for the reference |
| `"type"` |  |
| `"url"` |  |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/git/refs`

#### GitTag

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"message"` | Message describing the purpose of the tag |
| `"node_id"` |  |
| `"object"` | The SHA of the git object this is tagging. |
| `"sha"` |  |
| `"tag"` | Name of the tag |
| `"tagger"` | An object with information about the individual creating the tag. |
| `"type"` | The type of the object we're tagging. |
| `"url"` | URL for the tag |
| `"verification"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/git/tags`

#### GitTree

| Field | Description |
| --- | --- |
| `"base_tree"` | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `"id"` |  |
| `"sha"` |  |
| `"tree"` | Objects specifying a tree structure |
| `"truncated"` |  |
| `"url"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/git/trees`

#### Gitignore

| Field | Description |
| --- | --- |

Operations: List.

API path: `/gitignore/templates`

#### GitignoreTemplate

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` |  |
| `"source"` |  |

Operations: Load.

API path: `/gitignore/templates/{name}`

#### GlobalAdvisory

| Field | Description |
| --- | --- |
| `"credits"` | The users who contributed to the advisory. |
| `"cve_id"` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `"cvss"` |  |
| `"cvss_severities"` |  |
| `"cwes"` |  |
| `"description"` | A detailed description of what the advisory entails. |
| `"epss"` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `"ghsa_id"` | The GitHub Security Advisory ID. |
| `"github_reviewed_at"` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `"html_url"` | The URL for the advisory. |
| `"id"` |  |
| `"identifiers"` |  |
| `"nvd_published_at"` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `"published_at"` | The date and time of when the advisory was published, in ISO 8601 format. |
| `"references"` |  |
| `"repository_advisory_url"` | The API URL for the repository advisory. |
| `"severity"` | The severity of the advisory. |
| `"source_code_location"` | The URL of the advisory's source code. |
| `"summary"` | A short summary of the advisory. |
| `"type"` | The type of advisory. |
| `"updated_at"` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `"url"` | The API URL for the advisory. |
| `"vulnerabilities"` | The products and respective version ranges affected by the advisory. |
| `"withdrawn_at"` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

Operations: List, Load.

API path: `/advisories`

#### GpgKey

| Field | Description |
| --- | --- |
| `"armored_public_key"` | A GPG key in ASCII-armored format. |
| `"can_certify"` |  |
| `"can_encrypt_comms"` |  |
| `"can_encrypt_storage"` |  |
| `"can_sign"` |  |
| `"created_at"` |  |
| `"emails"` |  |
| `"expires_at"` |  |
| `"id"` |  |
| `"key_id"` |  |
| `"name"` | A descriptive name for the new key. |
| `"primary_key_id"` |  |
| `"public_key"` |  |
| `"raw_key"` |  |
| `"revoked"` |  |
| `"subkeys"` |  |

Operations: Create, List, Load.

API path: `/user/gpg_keys`

#### Hook

| Field | Description |
| --- | --- |
| `"active"` | Determines whether the hook is actually triggered on pushes. |
| `"add_events"` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `"config"` | Configuration object of the webhook |
| `"created_at"` |  |
| `"deliveries_url"` |  |
| `"events"` | Determines what events the hook is triggered for. |
| `"id"` | Unique identifier of the webhook. |
| `"last_response"` |  |
| `"name"` | The name of a valid service, use 'web' for a webhook. |
| `"ping_url"` |  |
| `"remove_events"` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `"test_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/hooks`

#### HookDelivery

| Field | Description |
| --- | --- |
| `"action"` | The type of activity for the event that triggered the delivery. |
| `"delivered_at"` | Time when the delivery was delivered. |
| `"duration"` | Time spent delivering. |
| `"event"` | The event that triggered the delivery. |
| `"guid"` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `"id"` | Unique identifier of the delivery. |
| `"installation_id"` | The id of the GitHub App installation associated with this event. |
| `"redelivery"` | Whether the delivery is a redelivery. |
| `"repository_id"` | The id of the repository associated with this event. |
| `"request"` |  |
| `"response"` |  |
| `"status"` | Description of the status of the attempted delivery |
| `"status_code"` | Status code received when delivery was made. |
| `"throttled_at"` | Time when the webhook delivery was throttled. |
| `"url"` | The URL target of the delivery. |

Operations: Load.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`

#### HookDeliveryItem

| Field | Description |
| --- | --- |
| `"action"` | The type of activity for the event that triggered the delivery. |
| `"delivered_at"` | Time when the webhook delivery occurred. |
| `"duration"` | Time spent delivering. |
| `"event"` | The event that triggered the delivery. |
| `"guid"` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `"id"` | Unique identifier of the webhook delivery. |
| `"installation_id"` | The id of the GitHub App installation associated with this event. |
| `"redelivery"` | Whether the webhook delivery is a redelivery. |
| `"repository_id"` | The id of the repository associated with this event. |
| `"status"` | Describes the response returned after attempting the delivery. |
| `"status_code"` | Status code received when delivery was made. |
| `"throttled_at"` | Time when the webhook delivery was throttled. |

Operations: List.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries`

#### HostedCompute

| Field | Description |
| --- | --- |
| `"compute_service"` | The hosted compute service the network configuration supports. |
| `"created_on"` | The time at which the network configuration was created, in ISO 8601 format. |
| `"id"` | The unique identifier of the network configuration. |
| `"name"` | The name of the network configuration. |
| `"network_settings_ids"` | The unique identifier of each network settings in the configuration. |

Operations: List, Remove.

API path: `/orgs/{org}/settings/network-configurations`

#### Hovercard

| Field | Description |
| --- | --- |
| `"message"` |  |
| `"octicon"` |  |

Operations: List.

API path: `/users/{username}/hovercard`

#### Import

| Field | Description |
| --- | --- |
| `"authors_count"` |  |
| `"authors_url"` |  |
| `"commit_count"` |  |
| `"error_message"` |  |
| `"failed_step"` |  |
| `"has_large_files"` |  |
| `"html_url"` |  |
| `"human_name"` |  |
| `"import_percent"` |  |
| `"large_files_count"` |  |
| `"large_files_size"` |  |
| `"message"` |  |
| `"project_choices"` |  |
| `"push_percent"` |  |
| `"repository_url"` |  |
| `"status"` |  |
| `"status_text"` |  |
| `"svc_root"` |  |
| `"svn_root"` |  |
| `"tfvc_project"` | For a tfvc import, the name of the project that is being imported. |
| `"url"` |  |
| `"use_lfs"` | Whether to store large files during the import. |
| `"vcs"` | The originating VCS type. |
| `"vcs_password"` | If authentication is required, the password to provide to `vcs_url`. |
| `"vcs_url"` | The URL of the originating repository. |
| `"vcs_username"` | If authentication is required, the username to provide to `vcs_url`. |

Operations: List, Patch, Update.

API path: `/repos/{owner}/{repo}/import`

#### Installation

| Field | Description |
| --- | --- |
| `"access_tokens_url"` |  |
| `"account"` |  |
| `"app_id"` |  |
| `"app_slug"` |  |
| `"client_id"` |  |
| `"contact_email"` |  |
| `"created_at"` |  |
| `"events"` |  |
| `"has_multiple_single_files"` |  |
| `"html_url"` |  |
| `"id"` | The ID of the installation. |
| `"permissions"` | The permissions granted to the user access token. |
| `"repositories_url"` |  |
| `"repository_selection"` | Describe whether all repositories have been selected or there's a selection involved |
| `"single_file_name"` |  |
| `"single_file_paths"` |  |
| `"suspended_at"` |  |
| `"suspended_by"` | A GitHub user. |
| `"target_id"` | The ID of the user or organization this token is being scoped to. |
| `"target_type"` |  |
| `"updated_at"` |  |

Operations: List, Load, Remove, Update.

API path: `/app/installations`

#### InstallationToken

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"permissions"` | The permissions granted to the user access token. |
| `"repositories"` | List of repository names that the token should have access to |
| `"repository_ids"` | List of repository IDs that the token should have access to |

Operations: Create.

API path: `/app/installations/{installation_id}/access_tokens`

#### Integration

| Field | Description |
| --- | --- |
| `"apps"` | The GitHub Apps that have push access to this branch. |
| `"client_id"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"events"` | The list of events for the GitHub app. |
| `"external_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the GitHub app |
| `"installations_count"` | The number of installations associated with the GitHub app. |
| `"name"` | The name of the GitHub app |
| `"node_id"` |  |
| `"owner"` |  |
| `"permissions"` | The set of permissions for the GitHub app |
| `"slug"` | The slug name of the GitHub app |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`

#### IntegrationInstallation

| Field | Description |
| --- | --- |
| `"account"` |  |
| `"created_at"` |  |
| `"id"` | Unique identifier of the request installation. |
| `"node_id"` |  |
| `"requester"` | A GitHub user. |

Operations: List.

API path: `/app/installation-requests`

#### Interaction

| Field | Description |
| --- | --- |
| `"expires_at"` |  |
| `"limit"` |  |
| `"origin"` |  |

Operations: Load, Remove.

API path: `/repos/{owner}/{repo}/interaction-limits`

#### InteractionLimit

| Field | Description |
| --- | --- |
| `"expires_at"` |  |
| `"expiry"` | The duration of the interaction restriction. |
| `"limit"` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `"origin"` |  |

Operations: Update.

API path: `/repos/{owner}/{repo}/interaction-limits`

#### Issue

| Field | Description |
| --- | --- |
| `"active_lock_reason"` |  |
| `"actor"` | A GitHub user. |
| `"after_id"` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `"assignee"` | A GitHub user. |
| `"assignees"` | Usernames of people to assign this issue to. |
| `"assigner"` | A GitHub user. |
| `"author_association"` | How the author is associated with the repository. |
| `"before_id"` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `"body"` | Contents of the issue comment |
| `"body_html"` |  |
| `"body_text"` |  |
| `"closed_at"` |  |
| `"closed_by"` | A GitHub user. |
| `"color"` | 6-character hex code, without the leading #, identifying the color |
| `"comments"` |  |
| `"comments_url"` |  |
| `"commit_id"` |  |
| `"commit_url"` |  |
| `"created_at"` |  |
| `"default"` | Whether this label comes by default in a new repository. |
| `"description"` | Optional description of the label, such as its purpose. |
| `"dismissed_review"` |  |
| `"draft"` |  |
| `"event"` |  |
| `"events_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the issue comment |
| `"issue"` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `"issue_dependencies_summary"` |  |
| `"issue_field_values"` |  |
| `"issue_id"` | The id of the issue that blocks the current issue |
| `"issue_url"` |  |
| `"label"` | Issue Event Label |
| `"labels"` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `"labels_url"` |  |
| `"lock_reason"` | The reason for locking the issue or pull request conversation. |
| `"locked"` |  |
| `"milestone"` | Issue Event Milestone |
| `"name"` | The name of the label. |
| `"node_id"` |  |
| `"number"` | Number uniquely identifying the issue within its repository |
| `"parent_issue_url"` | URL to get the parent issue of this issue, if it is a sub-issue |
| `"performed_via_github_app"` | GitHub apps are a new way to extend GitHub. |
| `"project_card"` | Issue Event Project Card |
| `"pull_request"` |  |
| `"reactions"` |  |
| `"rename"` | Issue Event Rename |
| `"replace_parent"` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `"repository"` | A repository on GitHub. |
| `"repository_url"` |  |
| `"requested_reviewer"` | A GitHub user. |
| `"requested_team"` | Groups of organization members that gives permissions on specified repositories. |
| `"review_requester"` | A GitHub user. |
| `"state"` | State of the issue; either 'open' or 'closed' |
| `"state_reason"` | The reason for the current state |
| `"sub_issue_id"` | The id of the sub-issue to add. |
| `"sub_issues_summary"` |  |
| `"timeline_url"` |  |
| `"title"` | Title of the issue |
| `"type"` | The type of issue. |
| `"updated_at"` |  |
| `"url"` | URL for the issue comment |
| `"user"` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/issues/{issue_number}/assignees`

#### IssueType

| Field | Description |
| --- | --- |
| `"color"` | The color of the issue type. |
| `"created_at"` | The time the issue type created. |
| `"description"` | The description of the issue type. |
| `"id"` | The unique identifier of the issue type. |
| `"is_enabled"` | The enabled state of the issue type. |
| `"name"` | The name of the issue type. |
| `"node_id"` | The node identifier of the issue type. |
| `"updated_at"` | The time the issue type last updated. |

Operations: Create, List, Update.

API path: `/orgs/{org}/issue-types`

#### Job

| Field | Description |
| --- | --- |
| `"check_run_url"` |  |
| `"completed_at"` | The time that the job finished, in ISO 8601 format. |
| `"conclusion"` | The outcome of the job. |
| `"created_at"` | The time that the job created, in ISO 8601 format. |
| `"head_branch"` | The name of the current branch. |
| `"head_sha"` | The SHA of the commit that is being run. |
| `"html_url"` |  |
| `"id"` | The id of the job. |
| `"labels"` | Labels for the workflow job. |
| `"name"` | The name of the job. |
| `"node_id"` |  |
| `"run_attempt"` | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `"run_id"` | The id of the associated workflow run. |
| `"run_url"` |  |
| `"runner_group_id"` | The ID of the runner group to which this job has been assigned. |
| `"runner_group_name"` | The name of the runner group to which this job has been assigned. |
| `"runner_id"` | The ID of the runner to which this job has been assigned. |
| `"runner_name"` | The name of the runner to which this job has been assigned. |
| `"started_at"` | The time that the job started, in ISO 8601 format. |
| `"status"` | The phase of the lifecycle that the job is currently in. |
| `"steps"` | Steps in this job. |
| `"url"` |  |
| `"workflow_name"` | The name of the workflow. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/jobs/{job_id}`

#### Key

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"key"` | The public SSH key to add to your GitHub account. |
| `"last_used"` |  |
| `"read_only"` |  |
| `"title"` | A descriptive name for the new key. |
| `"url"` |  |
| `"verified"` |  |

Operations: Create, List, Load.

API path: `/user/keys`

#### Label

| Field | Description |
| --- | --- |
| `"color"` | 6-character hex code, without the leading #, identifying the color |
| `"default"` | Whether this label comes by default in a new repository. |
| `"description"` | Optional description of the label, such as its purpose. |
| `"id"` | Unique identifier for the label. |
| `"name"` | The name of the label. |
| `"new_name"` | The new name of the label. |
| `"node_id"` |  |
| `"url"` | URL for the label |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/labels`

#### Language

| Field | Description |
| --- | --- |
| `"C"` |  |
| `"Python"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/languages`

#### License

| Field | Description |
| --- | --- |
| `"body"` |  |
| `"conditions"` |  |
| `"content"` |  |
| `"description"` |  |
| `"download_url"` |  |
| `"encoding"` |  |
| `"featured"` |  |
| `"git_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"implementation"` |  |
| `"key"` |  |
| `"license"` | License Simple |
| `"limitations"` |  |
| `"links"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"path"` |  |
| `"permissions"` |  |
| `"sha"` |  |
| `"size"` |  |
| `"spdx_id"` |  |
| `"type"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/licenses`

#### Markdown

| Field | Description |
| --- | --- |
| `"context"` | The repository context to use when creating references in `gfm` mode. |
| `"mode"` | The rendering mode. |
| `"text"` | The Markdown text to render in HTML. |

Operations: Create.

API path: `/markdown`

#### MarketplaceListingPlan

| Field | Description |
| --- | --- |
| `"accounts_url"` |  |
| `"bullets"` |  |
| `"description"` |  |
| `"has_free_trial"` |  |
| `"id"` |  |
| `"monthly_price_in_cents"` |  |
| `"name"` |  |
| `"number"` |  |
| `"price_model"` |  |
| `"state"` |  |
| `"unit_name"` |  |
| `"url"` |  |
| `"yearly_price_in_cents"` |  |

Operations: List.

API path: `/marketplace_listing/plans`

#### MarketplacePurchase

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"id"` |  |
| `"login"` |  |
| `"marketplace_pending_change"` |  |
| `"marketplace_purchase"` |  |
| `"organization_billing_email"` |  |
| `"type"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/marketplace_listing/plans/{plan_id}/accounts`

#### Member

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/orgs/{org}/members`

#### Membership

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List, Load, Update.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships`

#### MergedUpstream

| Field | Description |
| --- | --- |
| `"base_branch"` |  |
| `"branch"` | The name of the branch which should be updated to match upstream. |
| `"merge_type"` |  |
| `"message"` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/merge-upstream`

#### Meta

| Field | Description |
| --- | --- |

Operations: List, Load.

API path: `/versions`

#### Metaroot

| Field | Description |
| --- | --- |
| `"authorizations_url"` |  |
| `"code_search_url"` |  |
| `"commit_search_url"` |  |
| `"current_user_authorizations_html_url"` |  |
| `"current_user_repositories_url"` |  |
| `"current_user_url"` |  |
| `"emails_url"` |  |
| `"emojis_url"` |  |
| `"events_url"` |  |
| `"feeds_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"hub_url"` |  |
| `"issue_search_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"label_search_url"` |  |
| `"notifications_url"` |  |
| `"organization_repositories_url"` |  |
| `"organization_teams_url"` |  |
| `"organization_url"` |  |
| `"public_gists_url"` |  |
| `"rate_limit_url"` |  |
| `"repository_search_url"` |  |
| `"repository_url"` |  |
| `"starred_gists_url"` |  |
| `"starred_url"` |  |
| `"topic_search_url"` |  |
| `"user_organizations_url"` |  |
| `"user_repositories_url"` |  |
| `"user_search_url"` |  |
| `"user_url"` |  |

Operations: Load.

API path: `/`

#### Migration

| Field | Description |
| --- | --- |
| `"allow_forking"` |  |
| `"archive_url"` |  |
| `"archived"` |  |
| `"assignees_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` |  |
| `"delete_branch_on_merge"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` |  |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"exclude"` | Exclude related items from being returned in the response in order to improve performance of the request. |
| `"exclude_attachments"` | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `"exclude_git_data"` | Indicates whether the repository git data should be excluded from the migration. |
| `"exclude_metadata"` | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `"exclude_owner_projects"` | Indicates whether projects owned by the organization or users should be excluded. |
| `"exclude_releases"` | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"guid"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` |  |
| `"has_issues"` |  |
| `"has_pages"` |  |
| `"has_projects"` |  |
| `"has_wiki"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"is_template"` |  |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` |  |
| `"lock_repositories"` | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` |  |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"org_metadata_only"` | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `"owner"` | A GitHub user. |
| `"permissions"` |  |
| `"private"` |  |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"repositories"` | The repositories included in the migration. |
| `"role_name"` |  |
| `"security_and_analysis"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"state"` |  |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"visibility"` |  |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` |  |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/migrations`

#### Milestone

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"closed_at"` |  |
| `"closed_issues"` |  |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"description"` | A description of the milestone. |
| `"due_on"` | The milestone due date. |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"labels_url"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"number"` | The number of the milestone. |
| `"open_issues"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"state"` | The state of the milestone. |
| `"subscriptions_url"` |  |
| `"title"` | The title of the milestone. |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/milestones`

#### MinimalRepository

| Field | Description |
| --- | --- |
| `"allow_forking"` |  |
| `"archive_url"` |  |
| `"archived"` |  |
| `"assignees_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` |  |
| `"delete_branch_on_merge"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` |  |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` |  |
| `"has_issues"` |  |
| `"has_pages"` |  |
| `"has_projects"` |  |
| `"has_wiki"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"is_template"` |  |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` |  |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` |  |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"owner"` | A GitHub user. |
| `"permissions"` |  |
| `"private"` |  |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"role_name"` |  |
| `"security_and_analysis"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"visibility"` |  |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` |  |

Operations: List.

API path: `/orgs/{org}/repos`

#### NetworkConfiguration

| Field | Description |
| --- | --- |
| `"compute_service"` | The hosted compute service the network configuration supports. |
| `"created_on"` | The time at which the network configuration was created, in ISO 8601 format. |
| `"id"` | The unique identifier of the network configuration. |
| `"name"` | The name of the network configuration. |
| `"network_settings_ids"` | The unique identifier of each network settings in the configuration. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/settings/network-configurations`

#### NetworkSetting

| Field | Description |
| --- | --- |
| `"id"` | The unique identifier of the network settings resource. |
| `"name"` | The name of the network settings resource. |
| `"network_configuration_id"` | The identifier of the network configuration that is using this settings resource. |
| `"region"` | The location of the subnet this network settings resource is configured for. |
| `"subnet_id"` | The subnet this network settings resource is configured for. |

Operations: Load.

API path: `/orgs/{org}/settings/network-settings/{network_settings_id}`

#### OidcCustomSub

| Field | Description |
| --- | --- |
| `"include_claim_keys"` | Array of unique strings. |

Operations: List.

API path: `/orgs/{org}/actions/oidc/customization/sub`

#### OidcCustomSubRepo

| Field | Description |
| --- | --- |
| `"include_claim_keys"` | Array of unique strings. |
| `"use_default"` | Whether to use the default template or not. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/oidc/customization/sub`

#### Org

| Field | Description |
| --- | --- |
| `"access_tokens_url"` |  |
| `"account"` |  |
| `"action"` | Action to apply to the fine-grained personal access token. |
| `"advanced_security_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"app_id"` |  |
| `"app_slug"` |  |
| `"artifact_url"` | The URL where the artifact is stored. |
| `"async"` | When set to `true`, the request will be performed asynchronously. |
| `"attestations"` |  |
| `"attestations_subject_digests"` | Mapping of subject digest to bundles. |
| `"avatar_url"` |  |
| `"base_role"` | The system role from which this role inherits permissions. |
| `"billing_email"` | Billing email address. |
| `"blog"` |  |
| `"client_id"` |  |
| `"company"` | The company name. |
| `"contact_email"` |  |
| `"created_at"` | The date and time the role was created. |
| `"default_repository_permission"` | Default permission level members have for organization repositories. |
| `"dependabot_alerts_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"dependabot_security_updates_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"dependency_graph_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"deploy_keys_enabled_for_repositories"` | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `"description"` | The description of the company. |
| `"digest"` | The digest of the artifact (algorithm:hex-encoded-digest). |
| `"direct_membership"` | Whether the user has direct membership in the organization. |
| `"email"` | The publicly visible email address. |
| `"enterprise_teams_providing_indirect_membership"` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `"events"` |  |
| `"events_url"` |  |
| `"filled_seats"` |  |
| `"has_multiple_single_files"` |  |
| `"has_organization_projects"` | Whether an organization can use organization projects. |
| `"has_repository_projects"` | Whether repositories that belong to the organization can use repository projects. |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` | The ID of the installation. |
| `"issues_url"` |  |
| `"location"` | The location. |
| `"login"` |  |
| `"members_allowed_repository_creation_type"` | Specifies which types of repositories non-admin organization members can create. |
| `"members_can_create_internal_repositories"` | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `"members_can_create_pages"` | Whether organization members can create GitHub Pages sites. |
| `"members_can_create_private_pages"` | Whether organization members can create private GitHub Pages sites. |
| `"members_can_create_private_repositories"` | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `"members_can_create_public_pages"` | Whether organization members can create public GitHub Pages sites. |
| `"members_can_create_public_repositories"` | Whether organization members can create public repositories, which are visible to anyone. |
| `"members_can_create_repositories"` | Whether of non-admin organization members can create repositories. |
| `"members_can_fork_private_repositories"` | Whether organization members can fork private organization repositories. |
| `"members_url"` |  |
| `"name"` | The name of the artifact. |
| `"node_id"` |  |
| `"organization"` | A GitHub organization. |
| `"organization_url"` |  |
| `"page_info"` | Information about the current page. |
| `"pat_ids"` | The IDs of the fine-grained personal access tokens. |
| `"pat_request_ids"` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `"path"` | The path of the artifact. |
| `"permissions"` | The permissions granted to the user access token. |
| `"predicate_type"` | Optional filter for fetching attestations with a given predicate type. |
| `"private_repos"` |  |
| `"properties"` | List of custom property names and associated values to apply to the repositories. |
| `"public_members_url"` |  |
| `"query_suite"` | CodeQL query suite to be used. |
| `"reason"` | Reason for approving or denying the request. |
| `"registry_url"` | The base URL of the artifact registry. |
| `"repos_url"` |  |
| `"repositories_url"` |  |
| `"repository"` | The repository name within the registry. |
| `"repository_names"` | The names of repositories that the custom property values will be applied to. |
| `"repository_selection"` | Describe whether all repositories have been selected or there's a selection involved |
| `"role"` | The user's membership type in the organization. |
| `"seats"` |  |
| `"secret_scanning_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"secret_scanning_push_protection_custom_link"` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `"secret_scanning_push_protection_custom_link_enabled"` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `"secret_scanning_push_protection_enabled_for_new_repositories"` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `"single_file_name"` |  |
| `"single_file_paths"` |  |
| `"source"` | Source answers the question, "where did this role come from?" |
| `"space"` |  |
| `"state"` | The state of the member in the organization. |
| `"status"` | The status of the artifact (e.g., active, inactive). |
| `"storage_records"` |  |
| `"subject_digests"` | List of subject digests to fetch attestations for. |
| `"suspended_at"` |  |
| `"suspended_by"` | A GitHub user. |
| `"target_id"` | The ID of the user or organization this token is being scoped to. |
| `"target_type"` |  |
| `"total_count"` |  |
| `"twitter_username"` | The Twitter username of the company. |
| `"updated_at"` | The date and time the role was last updated. |
| `"url"` |  |
| `"user"` | A GitHub user. |
| `"web_commit_signoff_required"` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/orgs/{org}/attestations/bulk-list`

#### OrgHook

| Field | Description |
| --- | --- |
| `"active"` | Determines if notifications are sent when the webhook is triggered. |
| `"config"` | Key/value pairs to provide settings for this webhook. |
| `"created_at"` |  |
| `"deliveries_url"` |  |
| `"events"` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `"id"` |  |
| `"name"` | Must be passed as "web". |
| `"ping_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/hooks`

#### OrgMembership

| Field | Description |
| --- | --- |
| `"direct_membership"` | Whether the user has direct membership in the organization. |
| `"enterprise_teams_providing_indirect_membership"` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `"id"` |  |
| `"organization"` | A GitHub organization. |
| `"organization_url"` |  |
| `"permissions"` |  |
| `"role"` | The user's membership type in the organization. |
| `"state"` | The state of the member in the organization. |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Load, Update.

API path: `/orgs/{org}/memberships/{username}`

#### OrgPrivateRegistryConfiguration

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"name"` | The name of the private registry configuration. |
| `"registry_type"` | The registry type. |
| `"updated_at"` |  |
| `"username"` | The username to use when authenticating with the private registry. |
| `"visibility"` | Which type of organization repositories have access to the private registry. |

Operations: Load.

API path: `/orgs/{org}/private-registries/{secret_name}`

#### OrgPrivateRegistryConfigurationWithSelectedRepository

| Field | Description |
| --- | --- |
| `"encrypted_value"` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `"id"` |  |
| `"key_id"` | The ID of the key you used to encrypt the secret. |
| `"registry_type"` | The registry type. |
| `"selected_repository_ids"` | An array of repository IDs that can access the organization private registry. |
| `"url"` | The URL of the private registry. |
| `"username"` | The username to use when authenticating with the private registry. |
| `"visibility"` | Which type of organization repositories have access to the private registry. |

Operations: Create.

API path: `/orgs/{org}/private-registries`

#### OrgRepoCustomPropertyValue

| Field | Description |
| --- | --- |
| `"properties"` | List of custom property names and associated values |
| `"repository_full_name"` |  |
| `"repository_id"` |  |
| `"repository_name"` |  |

Operations: List.

API path: `/orgs/{org}/properties/values`

#### Organization

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### OrganizationActionsSecret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"name"` | The name of the secret. |
| `"selected_repositories_url"` |  |
| `"updated_at"` |  |
| `"visibility"` | Visibility of a secret |

Operations: Load.

API path: `/orgs/{org}/actions/secrets/{secret_name}`

#### OrganizationActionsVariable

| Field | Description |
| --- | --- |
| `"created_at"` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"id"` |  |
| `"name"` | The name of the variable. |
| `"selected_repositories_url"` |  |
| `"updated_at"` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `"value"` | The value of the variable. |
| `"visibility"` | Visibility of a variable |

Operations: Load.

API path: `/orgs/{org}/actions/variables/{name}`

#### OrganizationDependabotSecret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"name"` | The name of the secret. |
| `"selected_repositories_url"` |  |
| `"updated_at"` |  |
| `"visibility"` | Visibility of a secret |

Operations: Load.

API path: `/orgs/{org}/dependabot/secrets/{secret_name}`

#### OrganizationInvitation

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"email"` | **Required unless you provide `invitee_id`**. |
| `"failed_at"` |  |
| `"failed_reason"` |  |
| `"id"` |  |
| `"invitation_source"` |  |
| `"invitation_teams_url"` |  |
| `"invitee_id"` | **Required unless you provide `email`**. |
| `"inviter"` | A GitHub user. |
| `"login"` |  |
| `"node_id"` |  |
| `"role"` | The role for the new member. |
| `"team_count"` |  |
| `"team_ids"` | Specify IDs for the teams you want to invite new members to. |

Operations: Create, List.

API path: `/orgs/{org}/invitations`

#### OrganizationProgrammaticAccessGrant

| Field | Description |
| --- | --- |
| `"access_granted_at"` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `"created_at"` | Date and time when the request for access was created. |
| `"id"` | Unique identifier of the request for access via fine-grained personal access token. |
| `"owner"` | A GitHub user. |
| `"permissions"` | Permissions requested, categorized by type of permission. |
| `"reason"` | Reason for requesting access. |
| `"repositories_url"` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `"repository_selection"` | Type of repository selection requested. |
| `"token_expired"` | Whether the associated fine-grained personal access token has expired. |
| `"token_expires_at"` | Date and time when the associated fine-grained personal access token expires. |
| `"token_id"` | Unique identifier of the user's token. |
| `"token_last_used_at"` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `"token_name"` | The name given to the user's token. |

Operations: List.

API path: `/orgs/{org}/personal-access-token-requests`

#### OrganizationRole

| Field | Description |
| --- | --- |
| `"base_role"` | The system role from which this role inherits permissions. |
| `"created_at"` | The date and time the role was created. |
| `"description"` | A short description about who this role is for or what permissions it grants. |
| `"id"` | The unique identifier of the role. |
| `"name"` | The name of the role. |
| `"organization"` | A GitHub user. |
| `"permissions"` | A list of permissions included in this role. |
| `"source"` | Source answers the question, "where did this role come from?" |
| `"updated_at"` | The date and time the role was last updated. |

Operations: Load.

API path: `/orgs/{org}/organization-roles/{role_id}`

#### OrganizationSecretScanningAlert

| Field | Description |
| --- | --- |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"first_location_detected"` | Details on the location where the token was initially detected. |
| `"has_more_locations"` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"is_base64_encoded"` | A boolean value representing whether or not alert is base64 encoded |
| `"locations_url"` | The REST API URL of the code locations for this alert. |
| `"multi_repo"` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `"number"` | The security alert number. |
| `"publicly_leaked"` | Whether the secret was publicly leaked. |
| `"push_protection_bypass_request_comment"` | An optional comment when requesting a push protection bypass. |
| `"push_protection_bypass_request_html_url"` | The URL to a push protection bypass request. |
| `"push_protection_bypass_request_reviewer"` | A GitHub user. |
| `"push_protection_bypass_request_reviewer_comment"` | An optional comment when reviewing a push protection bypass. |
| `"push_protection_bypassed"` | Whether push protection was bypassed for the detected secret. |
| `"push_protection_bypassed_at"` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"push_protection_bypassed_by"` | A GitHub user. |
| `"repository"` | A GitHub repository. |
| `"resolution"` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `"resolution_comment"` | The comment that was optionally added when this alert was closed |
| `"resolved_at"` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"resolved_by"` | A GitHub user. |
| `"secret"` | The secret that was detected. |
| `"secret_type"` | The type of secret that secret scanning detected. |
| `"secret_type_display_name"` | User-friendly name for the detected secret, matching the `secret_type`. |
| `"state"` | Sets the state of the secret scanning alert. |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |
| `"validity"` | The token status as of the latest validity check. |

Operations: List.

API path: `/orgs/{org}/secret-scanning/alerts`

#### OutsideCollaborator

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/orgs/{org}/outside_collaborators`

#### Package

| Field | Description |
| --- | --- |
| `"container"` |  |
| `"created_at"` |  |
| `"deleted_at"` |  |
| `"description"` |  |
| `"docker"` |  |
| `"github_id"` | Unique identifier of the package. |
| `"html_url"` |  |
| `"id"` | Unique identifier of the package. |
| `"included_gigabytes_bandwidth"` | Free storage space (GB) for GitHub Packages. |
| `"license"` |  |
| `"metadata"` |  |
| `"name"` | The name of the package. |
| `"owner"` | A GitHub user. |
| `"package_html_url"` |  |
| `"package_type"` |  |
| `"repository"` | Minimal Repository |
| `"total_gigabytes_bandwidth_used"` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `"total_paid_gigabytes_bandwidth_used"` | Total paid storage space (GB) for GitHuub Packages. |
| `"updated_at"` |  |
| `"url"` |  |
| `"version_count"` | The number of versions of the package. |
| `"visibility"` |  |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/packages/{package_type}/{package_name}/restore`

#### Page

| Field | Description |
| --- | --- |
| `"build_type"` | The process in which the Page will be built. |
| `"cname"` | The Pages site's custom domain |
| `"custom_404"` | Whether the Page has a custom 404 page. |
| `"html_url"` | The web address the Page can be accessed from. |
| `"https_certificate"` |  |
| `"https_enforced"` | Whether https is enabled on the domain |
| `"pending_domain_unverified_at"` | The timestamp when a pending domain becomes unverified. |
| `"protected_domain_state"` | The state if the domain is verified |
| `"public"` | Whether the GitHub Pages site is publicly visible. |
| `"source"` | The source branch and directory used to publish your Pages site. |
| `"status"` | The status of the most recent build of the Page. |
| `"url"` | The API address for accessing this Page resource. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/pages`

#### PageBuild

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"created_at"` |  |
| `"duration"` |  |
| `"error"` |  |
| `"id"` |  |
| `"pusher"` | A GitHub user. |
| `"status"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageBuildStatus

| Field | Description |
| --- | --- |
| `"status"` |  |
| `"url"` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageDeployment

| Field | Description |
| --- | --- |
| `"artifact_id"` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `"artifact_url"` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `"environment"` | The target environment for this GitHub Pages deployment. |
| `"oidc_token"` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `"pages_build_version"` | A unique string that represents the version of the build for this deployment. |

Operations: Create.

API path: `/repos/{owner}/{repo}/pages/deployments`

#### PagesDeploymentStatus

| Field | Description |
| --- | --- |
| `"status"` | The current status of the deployment. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel`

#### PagesHealthCheck

| Field | Description |
| --- | --- |
| `"alt_domain"` |  |
| `"domain"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/pages/health`

#### Participation

| Field | Description |
| --- | --- |
| `"all"` |  |
| `"owner"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/participation`

#### PendingDeployment

| Field | Description |
| --- | --- |
| `"current_user_can_approve"` | Whether the currently authenticated user can approve the deployment |
| `"environment"` |  |
| `"reviewers"` | The people or teams that may approve jobs that reference the environment. |
| `"wait_timer"` | The set duration of the wait timer |
| `"wait_timer_started_at"` | The time that the wait timer began. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`

#### PorterAuthor

| Field | Description |
| --- | --- |
| `"email"` | The new Git author email. |
| `"id"` |  |
| `"import_url"` |  |
| `"name"` | The new Git author name. |
| `"remote_id"` |  |
| `"remote_name"` |  |
| `"url"` |  |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/import/authors`

#### PorterLargeFile

| Field | Description |
| --- | --- |
| `"oid"` |  |
| `"path"` |  |
| `"ref_name"` |  |
| `"size"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/import/large_files`

#### PrivateRegistry

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"encrypted_value"` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `"id"` |  |
| `"key"` | The Base64 encoded public key. |
| `"key_id"` | The identifier for the key. |
| `"name"` | The name of the private registry configuration. |
| `"registry_type"` | The registry type. |
| `"selected_repository_ids"` | An array of repository IDs that can access the organization private registry. |
| `"updated_at"` |  |
| `"url"` | The URL of the private registry. |
| `"username"` | The username to use when authenticating with the private registry. |
| `"visibility"` | Which type of organization repositories have access to the private registry. |

Operations: List, Load, Remove, Update.

API path: `/orgs/{org}/private-registries`

#### PrivateUser

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Project

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"body"` | The description of the project. |
| `"columns_url"` |  |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` | The name of the project. |
| `"node_id"` |  |
| `"number"` |  |
| `"organization_permission"` | The baseline permission that all organization members have on this project |
| `"organizations_url"` |  |
| `"owner_url"` |  |
| `"private"` | Whether or not this project can be seen by everyone. |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"state"` | State of the project; either 'open' or 'closed' |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/projects`

#### ProjectCollaboratorPermission

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: Load.

API path: `/projects/{project_id}/collaborators/{username}/permission`

#### ProjectColumn

| Field | Description |
| --- | --- |
| `"cards_url"` |  |
| `"created_at"` |  |
| `"id"` | The unique identifier of the project column |
| `"name"` | Name of the project column |
| `"node_id"` |  |
| `"project_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List, Load, Update.

API path: `/projects/{project_id}/columns`

#### ProjectsClassic

| Field | Description |
| --- | --- |
| `"permission"` | The permission to grant the collaborator. |
| `"position"` | The position of the column in a project. |

Operations: Create, Remove, Update.

API path: `/projects/columns/{column_id}/moves`

#### ProjectsV2

| Field | Description |
| --- | --- |
| `"closed_at"` | The time when the project was closed. |
| `"created_at"` | The time when the project was created. |
| `"creator"` | A GitHub user. |
| `"deleted_at"` | The time when the project was deleted. |
| `"deleted_by"` | A GitHub user. |
| `"description"` | A short description of the project. |
| `"id"` | The unique identifier of the project. |
| `"is_template"` | Whether this project is a template |
| `"latest_status_update"` | An status update belonging to a project |
| `"node_id"` | The node ID of the project. |
| `"number"` | The project number. |
| `"owner"` | A GitHub user. |
| `"public"` | Whether the project is visible to anyone with access to the owner. |
| `"short_description"` | A concise summary of the project. |
| `"state"` | The current state of the project. |
| `"title"` | The project title. |
| `"updated_at"` | The time when the project was last updated. |

Operations: List, Load.

API path: `/orgs/{org}/projectsV2`

#### ProjectsV2Field

| Field | Description |
| --- | --- |
| `"configuration"` | Configuration for iteration fields. |
| `"created_at"` | The time when the field was created. |
| `"data_type"` | The field's data type. |
| `"id"` | The unique identifier of the field. |
| `"name"` | The name of the field. |
| `"node_id"` | The node ID of the field. |
| `"options"` | The options available for single select fields. |
| `"project_url"` | The API URL of the project that contains the field. |
| `"updated_at"` | The time when the field was last updated. |

Operations: List, Load.

API path: `/orgs/{org}/projectsV2/{project_number}/fields`

#### ProjectsV2ItemSimple

| Field | Description |
| --- | --- |
| `"id"` | The numeric ID of the issue or pull request to add to the project. |
| `"type"` | The type of item to add to the project. |

Operations: Create.

API path: `/orgs/{org}/projectsV2/{project_number}/items`

#### ProjectsV2ItemWithContent

| Field | Description |
| --- | --- |
| `"archived_at"` | The time when the item was archived. |
| `"content"` | The content of the item, which varies by content type. |
| `"content_type"` | The type of content tracked in a project item |
| `"created_at"` | The time when the item was created. |
| `"creator"` | A GitHub user. |
| `"fields"` | The fields and values associated with this item. |
| `"id"` | The unique identifier of the project item. |
| `"item_url"` | The API URL of this item. |
| `"node_id"` | The node ID of the project item. |
| `"project_url"` | The API URL of the project that contains this item. |
| `"updated_at"` | The time when the item was last updated. |

Operations: List, Load, Update.

API path: `/orgs/{org}/projectsV2/{project_number}/items`

#### ProtectedBranch

| Field | Description |
| --- | --- |
| `"allow_deletions"` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `"allow_force_pushes"` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `"allow_fork_syncing"` | Whether users can pull changes from upstream when the branch is locked. |
| `"block_creations"` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `"enforce_admins"` | Enforce all configured restrictions for administrators. |
| `"lock_branch"` | Whether to set the branch as read-only. |
| `"required_conversation_resolution"` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `"required_linear_history"` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `"required_pull_request_reviews"` | Require at least one approving review on a pull request, before merging. |
| `"required_signatures"` |  |
| `"required_status_checks"` | Status Check Policy |
| `"restrictions"` | Branch Restriction Policy |
| `"url"` |  |

Operations: Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection`

#### ProtectedBranchAdminEnforced

| Field | Description |
| --- | --- |
| `"enabled"` |  |
| `"url"` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`

#### ProtectedBranchPullRequestReview

| Field | Description |
| --- | --- |
| `"bypass_pull_request_allowances"` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `"dismiss_stale_reviews"` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `"dismissal_restrictions"` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `"require_code_owner_reviews"` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `"require_last_push_approval"` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `"required_approving_review_count"` | Specifies the number of reviewers required to approve pull requests. |
| `"url"` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`

#### PublicMember

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/orgs/{org}/public_members`

#### Pull

| Field | Description |
| --- | --- |
| `"active_lock_reason"` |  |
| `"additions"` |  |
| `"assignee"` | A GitHub user. |
| `"assignees"` |  |
| `"author_association"` | How the author is associated with the repository. |
| `"auto_merge"` | The status of auto merging a pull request. |
| `"base"` | The name of the branch you want the changes pulled into. |
| `"body"` | The contents of the pull request. |
| `"changed_files"` |  |
| `"closed_at"` |  |
| `"comments"` |  |
| `"comments_url"` |  |
| `"commit_message"` | Extra detail to append to automatic commit message. |
| `"commit_title"` | Title for the automatic commit message. |
| `"commits"` |  |
| `"commits_url"` |  |
| `"created_at"` |  |
| `"deletions"` |  |
| `"diff_url"` |  |
| `"draft"` | Indicates whether or not the pull request is a draft. |
| `"expected_head_sha"` | The expected SHA of the pull request's HEAD ref. |
| `"head"` | The name of the branch where your changes are implemented. |
| `"head_repo"` | The name of the repository where the changes in the pull request were made. |
| `"html_url"` |  |
| `"id"` |  |
| `"issue"` | An issue in the repository to convert to a pull request. |
| `"issue_url"` |  |
| `"labels"` |  |
| `"links"` |  |
| `"locked"` |  |
| `"maintainer_can_modify"` | Indicates whether maintainers can modify the pull request. |
| `"merge_commit_sha"` |  |
| `"merge_method"` | The merge method to use. |
| `"mergeable"` |  |
| `"mergeable_state"` |  |
| `"merged"` |  |
| `"merged_at"` |  |
| `"merged_by"` | A GitHub user. |
| `"message"` |  |
| `"milestone"` | A collection of related issues and pull requests. |
| `"node_id"` |  |
| `"number"` | Number uniquely identifying the pull request within its repository. |
| `"patch_url"` |  |
| `"rebaseable"` |  |
| `"requested_reviewers"` |  |
| `"requested_teams"` |  |
| `"review_comment_url"` |  |
| `"review_comments"` |  |
| `"review_comments_url"` |  |
| `"sha"` | SHA that pull request head must match to allow merge. |
| `"state"` | State of this Pull Request. |
| `"statuses_url"` |  |
| `"title"` | The title of the pull request. |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/pulls`

#### PullRequestReview

| Field | Description |
| --- | --- |
| `"author_association"` | How the author is associated with the repository. |
| `"body"` | The text of the review. |
| `"body_html"` |  |
| `"body_text"` |  |
| `"comments"` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `"commit_id"` | A commit SHA for the review. |
| `"event"` | The review action you want to perform. |
| `"html_url"` |  |
| `"id"` | Unique identifier of the review |
| `"links"` |  |
| `"message"` | The message for the pull request review dismissal |
| `"node_id"` |  |
| `"pull_request_url"` |  |
| `"state"` |  |
| `"submitted_at"` |  |
| `"teams"` |  |
| `"user"` | A GitHub user. |
| `"users"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`

#### PullRequestReviewComment

| Field | Description |
| --- | --- |
| `"author_association"` | How the author is associated with the repository. |
| `"body"` | The text of the comment. |
| `"body_html"` |  |
| `"body_text"` |  |
| `"commit_id"` | The SHA of the commit to which the comment applies. |
| `"created_at"` |  |
| `"diff_hunk"` | The diff of the line that the comment refers to. |
| `"html_url"` | HTML URL for the pull request review comment. |
| `"id"` | The ID of the pull request review comment. |
| `"in_reply_to"` | The ID of the review comment to reply to. |
| `"in_reply_to_id"` | The comment ID to reply to. |
| `"line"` | The line of the blob to which the comment applies. |
| `"links"` |  |
| `"node_id"` | The node ID of the pull request review comment. |
| `"original_commit_id"` | The SHA of the original commit to which the comment applies. |
| `"original_line"` | The line of the blob to which the comment applies. |
| `"original_position"` | The index of the original line in the diff to which the comment applies. |
| `"original_start_line"` | The first line of the range for a multi-line comment. |
| `"path"` | The relative path of the file to which the comment applies. |
| `"position"` | The line index in the diff to which the comment applies. |
| `"pull_request_review_id"` | The ID of the pull request review to which the comment belongs. |
| `"pull_request_url"` | URL for the pull request that the review comment belongs to. |
| `"reactions"` |  |
| `"side"` | The side of the diff to which the comment applies. |
| `"start_line"` | The first line of the range for a multi-line comment. |
| `"start_side"` | The side of the first line of the range for a multi-line comment. |
| `"subject_type"` | The level at which the comment is targeted, can be a diff line or a file. |
| `"updated_at"` |  |
| `"url"` | URL for the pull request review comment |
| `"user"` | A GitHub user. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`

#### PullRequestSimple

| Field | Description |
| --- | --- |
| `"reviewers"` | An array of user `login`s that will be requested. |
| `"team_reviewers"` | An array of team `slug`s that will be requested. |

Operations: Create, Remove.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`

#### RateLimit

| Field | Description |
| --- | --- |
| `"rate"` |  |
| `"resources"` |  |

Operations: Load.

API path: `/rate_limit`

#### Reaction

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"content"` | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `"created_at"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |
| `"user_view_type"` |  |

Operations: Create, List, Remove.

API path: `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`

#### Referrer

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"referrer"` |  |
| `"uniques"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/popular/referrers`

#### Release

| Field | Description |
| --- | --- |
| `"assets"` |  |
| `"assets_url"` |  |
| `"author"` | A GitHub user. |
| `"body"` | Text describing the contents of the tag. |
| `"body_html"` |  |
| `"body_text"` |  |
| `"browser_download_url"` |  |
| `"content_type"` |  |
| `"created_at"` |  |
| `"digest"` |  |
| `"discussion_category_name"` | If specified, a discussion of the specified category is created and linked to the release. |
| `"discussion_url"` | The URL of the release discussion. |
| `"download_count"` |  |
| `"draft"` | true to create a draft (unpublished) release, false to create a published one. |
| `"generate_release_notes"` | Whether to automatically generate the name and body for this release. |
| `"html_url"` |  |
| `"id"` |  |
| `"immutable"` | Whether or not the release is immutable. |
| `"label"` |  |
| `"make_latest"` | Specifies whether this release should be set as the latest release for the repository. |
| `"mentions_count"` |  |
| `"name"` | The name of the release. |
| `"node_id"` |  |
| `"prerelease"` | Whether to identify the release as a prerelease or a full release. |
| `"published_at"` |  |
| `"reactions"` |  |
| `"size"` |  |
| `"state"` | State of the release asset. |
| `"tag_name"` | The name of the tag. |
| `"tarball_url"` |  |
| `"target_commitish"` | Specifies the commitish value that determines where the Git tag is created from. |
| `"updated_at"` |  |
| `"upload_url"` |  |
| `"uploader"` | A GitHub user. |
| `"url"` |  |
| `"zipball_url"` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/releases`

#### ReleaseAsset

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"browser_download_url"` |  |
| `"content_type"` |  |
| `"created_at"` |  |
| `"digest"` |  |
| `"download_count"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"label"` | An alternate short description of the asset. |
| `"login"` |  |
| `"name"` | The file name of the asset. |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"size"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"state"` | State of the release asset. |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"uploader"` | A GitHub user. |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/releases/{release_id}/assets`

#### ReleaseNotesContent

| Field | Description |
| --- | --- |
| `"body"` | The generated body describing the contents of the release supporting markdown formatting |
| `"configuration_file_path"` | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `"name"` | The generated name of the release |
| `"previous_tag_name"` | The name of the previous tag to use as the starting point for the release notes. |
| `"tag_name"` | The tag name for the release. |
| `"target_commitish"` | Specifies the commitish value that will be the target for the release's tag. |

Operations: Create.

API path: `/repos/{owner}/{repo}/releases/generate-notes`

#### Remove

| Field | Description |
| --- | --- |
| `"usernames"` | The GitHub user handles to be removed from the team. |

Operations: Create.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove`

#### Repo

| Field | Description |
| --- | --- |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Whether to allow forking this repo |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"allow_update_branch"` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `"anonymous_access_enabled"` | Whether anonymous git access is enabled for this repository |
| `"app"` | A GitHub App that is providing a custom deployment protection rule. |
| `"archive_url"` |  |
| `"archived"` | Whether the repository is archived. |
| `"assignees_url"` |  |
| `"attestations"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"build_type"` | The process by which the GitHub Pages site will be built. |
| `"bundle"` | The attestation's Sigstore Bundle. |
| `"client_payload"` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `"clone_url"` |  |
| `"cname"` | Specify a custom domain for the repository. |
| `"code_search_index_status"` | The status of the code search index for this repository |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"content"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` | The time that the environment was created, in ISO 8601 format. |
| `"default_branch"` | The default branch of the repository. |
| `"default_branch_only"` | When forking from an existing repository, fork with only the default branch. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deployment_branch_policy"` | The type of deployment branch policy for this environment. |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"download_url"` |  |
| `"downloads_url"` |  |
| `"enabled"` | Whether or not private vulnerability reporting is enabled for the repository. |
| `"encoding"` |  |
| `"event_type"` | A custom webhook event name. |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"github_id"` | Unique identifier of the repository |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"https_enforced"` | Specify whether HTTPS should be enforced for the repository. |
| `"id"` | Unique identifier of the repository |
| `"integration_url"` | The URL for the endpoint to get details about the app. |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` | License Simple |
| `"links"` |  |
| `"master_branch"` |  |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | When forking from an existing repository, a new name for the fork. |
| `"new_name"` | The new name to be given to the repository. |
| `"new_owner"` | The username or organization name the repository will be transferred to. |
| `"node_id"` | The node ID for the deployment protection rule integration. |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"organization"` | Optional parameter to specify the organization name if forking into an organization. |
| `"owner"` | A GitHub user. |
| `"path"` |  |
| `"permissions"` |  |
| `"private"` | Whether the repository is private or public. |
| `"properties"` | A list of custom property names and associated values to apply to the repositories. |
| `"protection_rules"` | Built-in deployment protection rules for the environment. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"sha"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"slug"` | The slugified name of the deployment protection rule integration. |
| `"source"` |  |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"statuses_url"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"team_ids"` | ID of the team or teams to add to the repository. |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"type"` | Whether this rule targets a branch or tag. |
| `"updated_at"` | The time that the environment was last updated, in ISO 8601 format. |
| `"url"` |  |
| `"use_squash_pr_title_as_default"` | Whether a squash merge commit can use the pull request title as default. |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Whether to require contributors to sign off on web-based commits |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`

#### Repository

| Field | Description |
| --- | --- |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Whether to allow forking this repo |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"allow_update_branch"` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `"anonymous_access_enabled"` | Whether anonymous git access is enabled for this repository |
| `"archive_url"` |  |
| `"archived"` | Whether the repository is archived. |
| `"assignees_url"` |  |
| `"blobs_url"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_search_index_status"` | The status of the code search index for this repository |
| `"collaborators_url"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"default_branch"` | The default branch of the repository. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"downloads_url"` |  |
| `"events_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"has_discussions"` | Whether discussions are enabled. |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the repository |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"license"` | License Simple |
| `"master_branch"` |  |
| `"merge_commit_message"` | The default value for a merge commit message. |
| `"merge_commit_title"` | The default value for a merge commit title. |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the repository. |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"owner"` | A GitHub user. |
| `"permissions"` |  |
| `"private"` | Whether the repository is private or public. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"releases_url"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"squash_merge_commit_message"` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `"squash_merge_commit_title"` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"statuses_url"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"use_squash_pr_title_as_default"` | Whether a squash merge commit can use the pull request title as default. |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Whether to require contributors to sign off on web-based commits |

Operations: List.

API path: `/user/starred`

#### RepositoryAdvisory

| Field | Description |
| --- | --- |
| `"author"` | The author of the advisory. |
| `"closed_at"` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `"collaborating_teams"` | A list of teams that collaborate on the advisory. |
| `"collaborating_users"` | A list of users that collaborate on the advisory. |
| `"created_at"` | The date and time of when the advisory was created, in ISO 8601 format. |
| `"credits"` | A list of users receiving credit for their participation in the security advisory. |
| `"credits_detailed"` |  |
| `"cve_id"` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `"cvss"` |  |
| `"cvss_severities"` |  |
| `"cvss_vector_string"` | The CVSS vector that calculates the severity of the advisory. |
| `"cwe_ids"` | A list of only the CWE IDs. |
| `"cwes"` |  |
| `"description"` | A detailed description of what the advisory entails. |
| `"ghsa_id"` | The GitHub Security Advisory ID. |
| `"html_url"` | The URL for the advisory. |
| `"identifiers"` |  |
| `"private_fork"` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `"published_at"` | The date and time of when the advisory was published, in ISO 8601 format. |
| `"publisher"` | The publisher of the advisory. |
| `"severity"` | The severity of the advisory. |
| `"start_private_fork"` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `"state"` | The state of the advisory. |
| `"submission"` |  |
| `"summary"` | A short summary of the advisory. |
| `"updated_at"` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `"url"` | The API URL for the advisory. |
| `"vulnerabilities"` | A product affected by the vulnerability detailed in a repository security advisory. |
| `"withdrawn_at"` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve`

#### RepositoryCollaboratorPermission

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"permissions"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"role_name"` |  |
| `"site_admin"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/collaborators/{username}/permission`

#### RepositoryInvitation

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"expired"` | Whether or not the invitation has expired |
| `"html_url"` |  |
| `"id"` | Unique identifier of the repository invitation. |
| `"invitee"` | A GitHub user. |
| `"inviter"` | A GitHub user. |
| `"node_id"` |  |
| `"permission"` | The permission to grant the collaborator. |
| `"permissions"` | The permission associated with the invitation. |
| `"repository"` | Minimal Repository |
| `"url"` | URL for the repository invitation |

Operations: List, Patch, Update.

API path: `/repos/{owner}/{repo}/invitations`

#### RepositoryRuleDetailed

| Field | Description |
| --- | --- |
| `"parameters"` |  |
| `"ruleset_id"` |  |
| `"ruleset_source"` |  |
| `"ruleset_source_type"` |  |
| `"type"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/rules/branches/{branch}`

#### RepositoryRuleset

| Field | Description |
| --- | --- |
| `"bypass_actors"` | The actors that can bypass the rules in this ruleset |
| `"conditions"` | Parameters for a repository ruleset ref name condition |
| `"created_at"` |  |
| `"current_user_can_bypass"` | The bypass type of the user making the API request for this ruleset. |
| `"enforcement"` | The enforcement level of the ruleset. |
| `"id"` | The ID of the ruleset |
| `"links"` |  |
| `"name"` | The name of the ruleset |
| `"node_id"` |  |
| `"rules"` | An array of rules within the ruleset. |
| `"source"` | The name of the source |
| `"source_type"` | The type of the source of the ruleset |
| `"target"` | The target of the ruleset |
| `"updated_at"` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/rulesets`

#### RepositorySubscription

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"ignored"` | Determines if all notifications should be blocked from this repository. |
| `"reason"` |  |
| `"repository_url"` |  |
| `"subscribed"` | Determines if notifications should be received from this repository. |
| `"url"` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/subscription`

#### ReviewComment

| Field | Description |
| --- | --- |
| `"author_association"` | How the author is associated with the repository. |
| `"body"` |  |
| `"body_html"` |  |
| `"body_text"` |  |
| `"commit_id"` |  |
| `"created_at"` |  |
| `"diff_hunk"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"in_reply_to_id"` |  |
| `"line"` | The line of the blob to which the comment applies. |
| `"links"` |  |
| `"node_id"` |  |
| `"original_commit_id"` |  |
| `"original_line"` | The original line of the blob to which the comment applies. |
| `"original_position"` |  |
| `"original_start_line"` | The original first line of the range for a multi-line comment. |
| `"path"` |  |
| `"position"` |  |
| `"pull_request_review_id"` |  |
| `"pull_request_url"` |  |
| `"reactions"` |  |
| `"side"` | The side of the first line of the range for a multi-line comment. |
| `"start_line"` | The first line of the range for a multi-line comment. |
| `"start_side"` | The side of the first line of the range for a multi-line comment. |
| `"subject_type"` | The level at which the comment is targeted, can be a diff line or a file. |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |

Operations: List.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`

#### RuleSuite

| Field | Description |
| --- | --- |
| `"actor_id"` | The number that identifies the user. |
| `"actor_name"` | The handle for the GitHub user account. |
| `"after_sha"` | The new commit SHA of the ref. |
| `"before_sha"` | The previous commit SHA of the ref. |
| `"evaluation_result"` | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `"id"` | The unique identifier of the rule insight. |
| `"pushed_at"` |  |
| `"ref"` | The ref name that the evaluation ran on. |
| `"repository_id"` | The ID of the repository associated with the rule evaluation. |
| `"repository_name"` | The name of the repository without the `.git` extension. |
| `"result"` | The result of the rule evaluations for rules with the `active` enforcement status. |
| `"rule_evaluations"` | Details on the evaluated rules. |

Operations: List, Load.

API path: `/orgs/{org}/rulesets/rule-suites`

#### RulesetVersion

| Field | Description |
| --- | --- |
| `"actor"` | The actor who updated the ruleset |
| `"id"` |  |
| `"updated_at"` |  |
| `"version_id"` | The ID of the previous version of the ruleset |

Operations: List.

API path: `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history`

#### RulesetVersionWithState

| Field | Description |
| --- | --- |
| `"actor"` | The actor who updated the ruleset |
| `"state"` | The state of the ruleset version |
| `"updated_at"` |  |
| `"version_id"` | The ID of the previous version of the ruleset |

Operations: Load.

API path: `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}`

#### Runner

| Field | Description |
| --- | --- |
| `"busy"` |  |
| `"ephemeral"` |  |
| `"id"` | The ID of the runner. |
| `"labels"` |  |
| `"name"` | The name of the runner. |
| `"os"` | The Operating System of the runner. |
| `"runner_group_id"` | The ID of the runner group. |
| `"status"` | The status of the runner. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/runners/{runner_id}`

#### RunnerApplication

| Field | Description |
| --- | --- |
| `"architecture"` |  |
| `"download_url"` |  |
| `"filename"` |  |
| `"os"` |  |
| `"sha256_checksum"` |  |
| `"temp_download_token"` | A short lived bearer token used to download the runner, if needed. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runners/downloads`

#### RunnerGroup

| Field | Description |
| --- | --- |
| `"allows_public_repositories"` | Whether the runner group can be used by `public` repositories. |
| `"default"` |  |
| `"hosted_runners_url"` |  |
| `"id"` |  |
| `"inherited"` |  |
| `"inherited_allows_public_repositories"` |  |
| `"name"` | Name of the runner group. |
| `"network_configuration_id"` | The identifier of a hosted compute network configuration. |
| `"restricted_to_workflows"` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `"runners"` | List of runner IDs to add to the runner group. |
| `"runners_url"` |  |
| `"selected_repositories_url"` | Link to the selected repositories resource for this runner group. |
| `"selected_repository_ids"` | List of repository IDs that can access the runner group. |
| `"selected_workflows"` | List of workflows the runner group should be allowed to run. |
| `"visibility"` | Visibility of a runner group. |
| `"workflow_restrictions_read_only"` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/actions/runner-groups`

#### Search

| Field | Description |
| --- | --- |
| `"active_lock_reason"` |  |
| `"aliases"` |  |
| `"allow_auto_merge"` |  |
| `"allow_forking"` |  |
| `"allow_merge_commit"` |  |
| `"allow_rebase_merge"` |  |
| `"allow_squash_merge"` |  |
| `"archive_url"` |  |
| `"archived"` |  |
| `"assignee"` | A GitHub user. |
| `"assignees"` |  |
| `"assignees_url"` |  |
| `"author"` | A GitHub user. |
| `"author_association"` | How the author is associated with the repository. |
| `"avatar_url"` |  |
| `"bio"` |  |
| `"blobs_url"` |  |
| `"blog"` |  |
| `"body"` |  |
| `"body_html"` |  |
| `"body_text"` |  |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"closed_at"` |  |
| `"collaborators_url"` |  |
| `"color"` |  |
| `"comments"` |  |
| `"comments_url"` |  |
| `"commit"` |  |
| `"commits_url"` |  |
| `"committer"` | Metaproperties for Git author/committer information. |
| `"company"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"created_by"` |  |
| `"curated"` |  |
| `"default"` |  |
| `"default_branch"` |  |
| `"delete_branch_on_merge"` |  |
| `"deployments_url"` |  |
| `"description"` |  |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"display_name"` |  |
| `"downloads_url"` |  |
| `"draft"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"featured"` |  |
| `"file_size"` |  |
| `"followers"` |  |
| `"followers_url"` |  |
| `"following"` |  |
| `"following_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"gists_url"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"gravatar_id"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` |  |
| `"has_issues"` |  |
| `"has_pages"` |  |
| `"has_projects"` |  |
| `"has_wiki"` |  |
| `"hireable"` |  |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"is_template"` |  |
| `"issue_comment_url"` |  |
| `"issue_dependencies_summary"` |  |
| `"issue_events_url"` |  |
| `"issue_field_values"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"last_modified_at"` |  |
| `"license"` | License Simple |
| `"line_numbers"` |  |
| `"location"` |  |
| `"locked"` |  |
| `"login"` |  |
| `"logo_url"` |  |
| `"master_branch"` |  |
| `"merges_url"` |  |
| `"milestone"` | A collection of related issues and pull requests. |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"notifications_url"` |  |
| `"number"` |  |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"organizations_url"` |  |
| `"owner"` | A GitHub user. |
| `"parents"` |  |
| `"path"` |  |
| `"performed_via_github_app"` | GitHub apps are a new way to extend GitHub. |
| `"permissions"` |  |
| `"private"` |  |
| `"public_gists"` |  |
| `"public_repos"` |  |
| `"pull_request"` |  |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"reactions"` |  |
| `"received_events_url"` |  |
| `"related"` |  |
| `"released"` |  |
| `"releases_url"` |  |
| `"repos_url"` |  |
| `"repository"` | A repository on GitHub. |
| `"repository_count"` |  |
| `"repository_url"` |  |
| `"score"` |  |
| `"sha"` |  |
| `"short_description"` |  |
| `"site_admin"` |  |
| `"size"` |  |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_url"` |  |
| `"state"` |  |
| `"state_reason"` |  |
| `"statuses_url"` |  |
| `"sub_issues_summary"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"subscriptions_url"` |  |
| `"suspended_at"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"text_matches"` |  |
| `"timeline_url"` |  |
| `"title"` |  |
| `"topics"` |  |
| `"trees_url"` |  |
| `"type"` | The type of issue. |
| `"updated_at"` |  |
| `"url"` |  |
| `"user"` | A GitHub user. |
| `"user_view_type"` |  |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` |  |

Operations: List.

API path: `/search/issues`

#### SecretScanning

| Field | Description |
| --- | --- |
| `"custom_pattern_settings"` | Pattern settings for custom patterns. |
| `"pattern_config_version"` | The updated pattern configuration version. |
| `"provider_pattern_settings"` | Pattern settings for provider patterns. |

Operations: Update.

API path: `/orgs/{org}/secret-scanning/pattern-configurations`

#### SecretScanningAlert

| Field | Description |
| --- | --- |
| `"created_at"` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"first_location_detected"` | Details on the location where the token was initially detected. |
| `"has_more_locations"` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `"html_url"` | The GitHub URL of the alert resource. |
| `"id"` |  |
| `"is_base64_encoded"` | A boolean value representing whether or not alert is base64 encoded |
| `"locations_url"` | The REST API URL of the code locations for this alert. |
| `"multi_repo"` | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `"number"` | The security alert number. |
| `"publicly_leaked"` | Whether the detected secret was publicly leaked. |
| `"push_protection_bypass_request_comment"` | An optional comment when requesting a push protection bypass. |
| `"push_protection_bypass_request_html_url"` | The URL to a push protection bypass request. |
| `"push_protection_bypass_request_reviewer"` | A GitHub user. |
| `"push_protection_bypass_request_reviewer_comment"` | An optional comment when reviewing a push protection bypass. |
| `"push_protection_bypassed"` | Whether push protection was bypassed for the detected secret. |
| `"push_protection_bypassed_at"` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"push_protection_bypassed_by"` | A GitHub user. |
| `"resolution"` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `"resolution_comment"` | An optional comment to resolve an alert. |
| `"resolved_at"` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"resolved_by"` | A GitHub user. |
| `"secret"` | The secret that was detected. |
| `"secret_type"` | The type of secret that secret scanning detected. |
| `"secret_type_display_name"` | User-friendly name for the detected secret, matching the `secret_type`. |
| `"state"` | Sets the state of the secret scanning alert. |
| `"updated_at"` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"url"` | The REST API URL of the alert resource. |
| `"validity"` | The token status as of the latest validity check. |

Operations: List, Load, Update.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts`

#### SecretScanningLocation

| Field | Description |
| --- | --- |
| `"details"` |  |
| `"type"` | The location type. |

Operations: List.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`

#### SecretScanningPatternConfiguration

| Field | Description |
| --- | --- |
| `"custom_pattern_overrides"` | Overrides for custom patterns defined by the organization. |
| `"pattern_config_version"` | The version of the entity. |
| `"provider_pattern_overrides"` | Overrides for partner patterns. |

Operations: List.

API path: `/orgs/{org}/secret-scanning/pattern-configurations`

#### SecretScanningPushProtectionBypass

| Field | Description |
| --- | --- |
| `"expire_at"` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `"placeholder_id"` | The ID of the push protection bypass placeholder. |
| `"reason"` | The reason for bypassing push protection. |
| `"token_type"` | The token type this bypass is for. |

Operations: Create.

API path: `/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses`

#### SecretScanningScanHistory

| Field | Description |
| --- | --- |
| `"backfill_scans"` |  |
| `"custom_pattern_backfill_scans"` |  |
| `"incremental_scans"` |  |
| `"pattern_update_scans"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/secret-scanning/scan-history`

#### SecurityAdvisory

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`

#### SelectedAction

| Field | Description |
| --- | --- |
| `"github_owned_allowed"` | Whether GitHub-owned actions are allowed. |
| `"patterns_allowed"` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `"verified_allowed"` | Whether actions from GitHub Marketplace verified creators are allowed. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/permissions/selected-actions`

#### SelfHostedRunner

| Field | Description |
| --- | --- |
| `"enabled_repositories"` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `"selected_repositories_url"` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

Operations: Load.

API path: `/orgs/{org}/actions/permissions/self-hosted-runners`

#### ShortBlob

| Field | Description |
| --- | --- |
| `"content"` | The new blob's content. |
| `"encoding"` | The encoding used for `content`. |

Operations: Create.

API path: `/repos/{owner}/{repo}/git/blobs`

#### ShortBranch

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"name"` |  |
| `"protected"` |  |
| `"protection"` | Branch Protection |
| `"protection_url"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/branches`

#### SimpleClassroom

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### SimpleClassroomAssignment

| Field | Description |
| --- | --- |
| `"accepted"` | The number of students that have accepted the assignment. |
| `"classroom"` | A GitHub Classroom classroom |
| `"deadline"` | The time at which the assignment is due. |
| `"editor"` | The selected editor for the assignment. |
| `"feedback_pull_requests_enabled"` | Whether feedback pull request will be created on assignment acceptance. |
| `"id"` | Unique identifier of the repository. |
| `"invitations_enabled"` | Whether the invitation link is enabled. |
| `"invite_link"` | The link that a student can use to accept the assignment. |
| `"language"` | The programming language used in the assignment. |
| `"max_members"` | The maximum allowable members per team. |
| `"max_teams"` | The maximum allowable teams for the assignment. |
| `"passing"` | The number of students that have passed the assignment. |
| `"public_repo"` | Whether an accepted assignment creates a public repository. |
| `"slug"` | Sluggified name of the assignment. |
| `"students_are_repo_admins"` | Whether students are admins on created repository on accepted assignment. |
| `"submitted"` | The number of students that have submitted the assignment. |
| `"title"` | Assignment title. |
| `"type"` | Whether it's a Group Assignment or Individual Assignment. |

Operations: List.

API path: `/classrooms/{classroom_id}/assignments`

#### SocialAccount

| Field | Description |
| --- | --- |
| `"account_urls"` | Full URLs for the social media profiles to add. |
| `"provider"` |  |
| `"url"` |  |

Operations: Create, List.

API path: `/user/social_accounts`

#### SshSigningKey

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"key"` | The public SSH key to add to your GitHub account. |
| `"title"` | A descriptive name for the new key. |

Operations: Create, List, Load.

API path: `/user/ssh_signing_keys`

#### Status

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"context"` | A string label to differentiate this status from the status of other systems. |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"description"` | A short description of the status. |
| `"id"` |  |
| `"node_id"` |  |
| `"state"` | The state of the status. |
| `"target_url"` | The target URL to associate with this status. |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Create, List.

API path: `/repos/{owner}/{repo}/statuses/{sha}`

#### StatusCheckPolicy

| Field | Description |
| --- | --- |
| `"app_id"` |  |
| `"checks"` | The list of status checks to require in order to merge into this branch. |
| `"context"` |  |
| `"contexts"` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `"contexts_url"` |  |
| `"strict"` | Require branches to be up to date before merging. |
| `"url"` |  |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`

#### Subscriber

| Field | Description |
| --- | --- |
| `"avatar_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"login"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subscriptions_url"` |  |
| `"type"` |  |
| `"url"` |  |
| `"user_view_type"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/subscribers`

#### Tag

| Field | Description |
| --- | --- |
| `"commit"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"tarball_url"` |  |
| `"zipball_url"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/tags`

#### TagProtection

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"enabled"` |  |
| `"id"` |  |
| `"pattern"` | An optional glob pattern to match against when enforcing tag protection. |
| `"updated_at"` |  |

Operations: Create, List.

API path: `/repos/{owner}/{repo}/tags/protection`

#### Team

| Field | Description |
| --- | --- |
| `"allow_auto_merge"` | Whether to allow Auto-merge to be used on pull requests. |
| `"allow_forking"` | Whether to allow forking this repo |
| `"allow_merge_commit"` | Whether to allow merge commits for pull requests. |
| `"allow_rebase_merge"` | Whether to allow rebase merges for pull requests. |
| `"allow_squash_merge"` | Whether to allow squash merges for pull requests. |
| `"archive_url"` |  |
| `"archived"` | Whether the repository is archived. |
| `"assignees_url"` |  |
| `"assignment"` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `"author"` | A GitHub user. |
| `"avatar_url"` |  |
| `"blobs_url"` |  |
| `"body"` | The main text of the comment. |
| `"body_html"` |  |
| `"body_version"` | The current version of the body content. |
| `"branches_url"` |  |
| `"clone_url"` |  |
| `"code_of_conduct"` | Code Of Conduct |
| `"collaborators_url"` |  |
| `"columns_url"` |  |
| `"comments_count"` |  |
| `"comments_url"` |  |
| `"commits_url"` |  |
| `"compare_url"` |  |
| `"contents_url"` |  |
| `"contributors_url"` |  |
| `"created_at"` |  |
| `"creator"` | A GitHub user. |
| `"custom_properties"` | The custom properties that were defined for the repository. |
| `"default_branch"` | The default branch of the repository. |
| `"delete_branch_on_merge"` | Whether to delete head branches when pull requests are merged |
| `"deployments_url"` |  |
| `"description"` | The description of the team. |
| `"disabled"` | Returns whether or not this repository disabled. |
| `"discussion_url"` |  |
| `"downloads_url"` |  |
| `"email"` |  |
| `"events_url"` |  |
| `"failed_at"` |  |
| `"failed_reason"` |  |
| `"followers_url"` |  |
| `"following_url"` |  |
| `"fork"` |  |
| `"forks"` |  |
| `"forks_count"` |  |
| `"forks_url"` |  |
| `"full_name"` |  |
| `"gists_url"` |  |
| `"git_commits_url"` |  |
| `"git_refs_url"` |  |
| `"git_tags_url"` |  |
| `"git_url"` |  |
| `"gravatar_id"` |  |
| `"has_discussions"` |  |
| `"has_downloads"` | Whether downloads are enabled. |
| `"has_issues"` | Whether issues are enabled. |
| `"has_pages"` |  |
| `"has_projects"` | Whether projects are enabled. |
| `"has_wiki"` | Whether the wiki is enabled. |
| `"homepage"` |  |
| `"hooks_url"` |  |
| `"html_url"` |  |
| `"id"` | Unique identifier of the repository |
| `"invitation_source"` |  |
| `"invitation_teams_url"` |  |
| `"inviter"` | A GitHub user. |
| `"is_template"` | Whether this repository acts as a template that can be used to generate new repositories. |
| `"issue_comment_url"` |  |
| `"issue_events_url"` |  |
| `"issues_url"` |  |
| `"keys_url"` |  |
| `"labels_url"` |  |
| `"language"` |  |
| `"languages_url"` |  |
| `"last_edited_at"` |  |
| `"ldap_dn"` | Distinguished Name (DN) that team maps to within LDAP environment |
| `"license"` | License Simple |
| `"login"` |  |
| `"maintainers"` | List GitHub usernames for organization members who will become team maintainers. |
| `"master_branch"` |  |
| `"members_count"` |  |
| `"members_url"` |  |
| `"merges_url"` |  |
| `"milestones_url"` |  |
| `"mirror_url"` |  |
| `"name"` | The name of the repository. |
| `"network_count"` |  |
| `"node_id"` |  |
| `"notification_setting"` | The notification setting the team has set |
| `"notifications_url"` |  |
| `"number"` | The unique sequence number of a team discussion comment. |
| `"open_issues"` |  |
| `"open_issues_count"` |  |
| `"organization"` | Team Organization |
| `"organization_permission"` | The organization permission for this project. |
| `"organizations_url"` |  |
| `"owner"` | A GitHub user. |
| `"owner_url"` |  |
| `"parent"` | Groups of organization members that gives permissions on specified repositories. |
| `"parent_team_id"` | The ID of a team to set as the parent team. |
| `"permission"` | Permission that the team will have for its repositories |
| `"permissions"` |  |
| `"pinned"` | Whether or not this discussion should be pinned for easy retrieval. |
| `"privacy"` | The level of privacy this team should have |
| `"private"` | Whether the repository is private or public. |
| `"pulls_url"` |  |
| `"pushed_at"` |  |
| `"reactions"` |  |
| `"received_events_url"` |  |
| `"releases_url"` |  |
| `"repo_names"` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `"repos_count"` |  |
| `"repos_url"` |  |
| `"repositories_url"` |  |
| `"role"` | The role of the user in the team. |
| `"role_name"` |  |
| `"security_and_analysis"` |  |
| `"site_admin"` |  |
| `"size"` | The size of the repository, in kilobytes. |
| `"slug"` |  |
| `"ssh_url"` |  |
| `"stargazers_count"` |  |
| `"stargazers_url"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"state"` | The state of the user's membership in the team. |
| `"statuses_url"` |  |
| `"subscribers_count"` |  |
| `"subscribers_url"` |  |
| `"subscription_url"` |  |
| `"subscriptions_url"` |  |
| `"svn_url"` |  |
| `"tags_url"` |  |
| `"team_count"` |  |
| `"team_url"` |  |
| `"teams_url"` |  |
| `"temp_clone_token"` |  |
| `"title"` | The title of the discussion. |
| `"topics"` |  |
| `"trees_url"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` | URL for the team |
| `"user_view_type"` |  |
| `"visibility"` | The repository visibility: public, private, or internal. |
| `"watchers"` |  |
| `"watchers_count"` |  |
| `"web_commit_signoff_required"` | Whether to require contributors to sign off on web-based commits |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`

#### TeamSimple

| Field | Description |
| --- | --- |
| `"description"` | Description of the team |
| `"html_url"` |  |
| `"id"` | Unique identifier of the team |
| `"ldap_dn"` | Distinguished Name (DN) that team maps to within LDAP environment |
| `"members_url"` |  |
| `"name"` | Name of the team |
| `"node_id"` |  |
| `"notification_setting"` | The notification setting the team has set |
| `"permission"` | Permission that the team will have for its repositories |
| `"privacy"` | The level of privacy this team should have |
| `"repositories_url"` |  |
| `"slug"` |  |
| `"url"` | URL for the team |

Operations: List.

API path: `/orgs/{org}/security-managers`

#### Thread

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"last_read_at"` |  |
| `"reason"` |  |
| `"repository"` | Minimal Repository |
| `"subject"` |  |
| `"subscription_url"` |  |
| `"unread"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: List, Load, Remove.

API path: `/repos/{owner}/{repo}/notifications`

#### ThreadSubscription

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"ignored"` | Whether to block all notifications from a thread. |
| `"reason"` |  |
| `"repository_url"` |  |
| `"subscribed"` |  |
| `"thread_url"` |  |
| `"url"` |  |

Operations: Load, Update.

API path: `/notifications/threads/{thread_id}/subscription`

#### Topic

| Field | Description |
| --- | --- |
| `"names"` | An array of topics to add to the repository. |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/topics`

#### User

| Field | Description |
| --- | --- |
| `"assignment"` | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `"attestations_subject_digests"` | Mapping of subject digest to bundles. |
| `"avatar_url"` |  |
| `"bio"` | The new short biography of the user. |
| `"blog"` | The new blog URL of the user. |
| `"collaborators"` |  |
| `"company"` | The new company of the user. |
| `"created_at"` |  |
| `"disk_usage"` |  |
| `"email"` | The publicly visible email address of the user. |
| `"events_url"` |  |
| `"followers"` |  |
| `"followers_url"` |  |
| `"following"` |  |
| `"following_url"` |  |
| `"gists_url"` |  |
| `"gravatar_id"` |  |
| `"hireable"` | The new hiring availability of the user. |
| `"html_url"` |  |
| `"id"` |  |
| `"inherited_from"` | Team the user has gotten the role through |
| `"location"` | The new location of the user. |
| `"login"` |  |
| `"name"` | The new name of the user. |
| `"node_id"` |  |
| `"organizations_url"` |  |
| `"owned_private_repos"` |  |
| `"page_info"` | Information about the current page. |
| `"plan"` |  |
| `"predicate_type"` | Optional filter for fetching attestations with a given predicate type. |
| `"private_gists"` |  |
| `"private_repos"` |  |
| `"public_gists"` |  |
| `"public_repos"` |  |
| `"received_events_url"` |  |
| `"repos_url"` |  |
| `"site_admin"` |  |
| `"space"` |  |
| `"starred_at"` |  |
| `"starred_url"` |  |
| `"subject_digests"` | List of subject digests to fetch attestations for. |
| `"subscriptions_url"` |  |
| `"total_private_repos"` |  |
| `"twitter_username"` | The new Twitter username of the user. |
| `"two_factor_authentication"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"url"` |  |
| `"user_view_type"` |  |
| `"users"` | The username for users |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/users/{username}/attestations/bulk-list`

#### UserMarketplacePurchase

| Field | Description |
| --- | --- |
| `"account"` |  |
| `"billing_cycle"` |  |
| `"free_trial_ends_on"` |  |
| `"next_billing_date"` |  |
| `"on_free_trial"` |  |
| `"plan"` | Marketplace Listing Plan |
| `"unit_count"` |  |
| `"updated_at"` |  |

Operations: List.

API path: `/user/marketplace_purchases`

#### View

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"timestamp"` |  |
| `"uniques"` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/views`

#### WebhookConfig

| Field | Description |
| --- | --- |
| `"content_type"` | The media type used to serialize the payloads. |
| `"insecure_ssl"` |  |
| `"secret"` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `"url"` | The URL to which the payloads will be delivered. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/config`

#### Workflow

| Field | Description |
| --- | --- |
| `"badge_url"` |  |
| `"created_at"` |  |
| `"deleted_at"` |  |
| `"html_url"` |  |
| `"id"` |  |
| `"name"` |  |
| `"node_id"` |  |
| `"path"` |  |
| `"state"` |  |
| `"updated_at"` |  |
| `"url"` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/actions/workflows/{workflow_id}`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `"actor"` | A GitHub user. |
| `"artifacts_url"` | The URL to the artifacts for the workflow run. |
| `"cancel_url"` | The URL to cancel the workflow run. |
| `"check_suite_id"` | The ID of the associated check suite. |
| `"check_suite_node_id"` | The node ID of the associated check suite. |
| `"check_suite_url"` | The URL to the associated check suite. |
| `"conclusion"` |  |
| `"created_at"` |  |
| `"display_title"` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `"event"` |  |
| `"head_branch"` |  |
| `"head_commit"` | A commit. |
| `"head_repository"` | Minimal Repository |
| `"head_repository_id"` |  |
| `"head_sha"` | The SHA of the head commit that points to the version of the workflow being run. |
| `"html_url"` |  |
| `"id"` | The ID of the workflow run. |
| `"jobs_url"` | The URL to the jobs for the workflow run. |
| `"logs_url"` | The URL to download the logs for the workflow run. |
| `"name"` | The name of the workflow run. |
| `"node_id"` |  |
| `"path"` | The full path of the workflow |
| `"previous_attempt_url"` | The URL to the previous attempted run of this workflow, if one exists. |
| `"pull_requests"` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `"referenced_workflows"` |  |
| `"repository"` | Minimal Repository |
| `"rerun_url"` | The URL to rerun the workflow run. |
| `"run_attempt"` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `"run_number"` | The auto incrementing run number for the workflow run. |
| `"run_started_at"` | The start time of the latest run. |
| `"status"` |  |
| `"triggering_actor"` | A GitHub user. |
| `"updated_at"` |  |
| `"url"` | The URL to the workflow run. |
| `"workflow_id"` | The ID of the parent workflow. |
| `"workflow_url"` | The URL to the workflow. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/cancel`

#### WorkflowRunUsage

| Field | Description |
| --- | --- |
| `"MACOS"` |  |
| `"UBUNTU"` |  |
| `"WINDOWS"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/timing`

#### WorkflowUsage

| Field | Description |
| --- | --- |
| `"MACOS"` |  |
| `"UBUNTU"` |  |
| `"WINDOWS"` |  |
| `"id"` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`



## Entities


### Action

Create an instance: `action := client.Action(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `int` | Total minutes used on macOS runner machines. |
| `UBUNTU` | `int` | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `int` | Total minutes used on Windows runner machines. |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `map[string]any` | A GitHub user. |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `bool` |  |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `string` | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `string` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `artifacts_url` | `string` | The URL to the artifacts for the workflow run. |
| `assignees_url` | `string` |  |
| `badge_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `busy` | `bool` |  |
| `can_approve_pull_request_reviews` | `bool` | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `string` | The URL to cancel the workflow run. |
| `check_run_url` | `string` |  |
| `check_suite_id` | `int` | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | The node ID of the associated check suite. |
| `check_suite_url` | `string` | The URL to the associated check suite. |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `code_search_index_status` | `map[string]any` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `completed_at` | `string` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | The outcome of the job. |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `cpu_cores` | `int` | The number of cores. |
| `created_at` | `string` | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `days` | `int` | The number of days to retain artifacts and logs |
| `default` | `bool` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `default_workflow_permissions` | `string` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `string` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `digest` | `string` | The SHA256 digest of the artifact. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `display_name` | `string` | Display name for this image. |
| `display_title` | `string` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `string` |  |
| `enabled` | `bool` | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `string` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `bool` |  |
| `event` | `string` |  |
| `events_url` | `string` |  |
| `expired` | `bool` | Whether or not the artifact has expired. |
| `expires_at` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_owned_allowed` | `bool` | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `head_branch` | `string` | The name of the current branch. |
| `head_commit` | `map[string]any` | A commit. |
| `head_repository` | `map[string]any` | Minimal Repository |
| `head_repository_id` | `int` |  |
| `head_sha` | `string` | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `hosted_runners_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the workflow run. |
| `image_details` | `map[string]any` | Provides details of a hosted runner image |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `inputs` | `map[string]any` | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `jobs_url` | `string` | The URL to the jobs for the workflow run. |
| `keys_url` | `string` |  |
| `labels` | `[]any` | The names of the custom labels to add to the runner. |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `map[string]any` | License Simple |
| `logs_url` | `string` | The URL to download the logs for the workflow run. |
| `machine_size_details` | `map[string]any` | Provides details of a particular machine spec. |
| `macos_12_core` | `int` | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `string` |  |
| `maximum_runners` | `int` | The maximum amount of hosted runners. |
| `memory_gb` | `int` | The available RAM for the machine spec. |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the new runner. |
| `network_configuration_id` | `string` | The identifier of a hosted compute network configuration. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `os` | `string` | The Operating System of the runner. |
| `owner` | `map[string]any` | A GitHub user. |
| `path` | `string` | The full path of the workflow |
| `patterns_allowed` | `[]any` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `map[string]any` |  |
| `platform` | `string` | The operating system of the image. |
| `platforms` | `[]any` |  |
| `previous_attempt_url` | `string` | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `[]any` | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `[]any` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `ref` | `string` | The git reference for the workflow. |
| `referenced_workflows` | `[]any` |  |
| `releases_url` | `string` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `bool` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `string` | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `bool` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `string` |  |
| `run_attempt` | `int` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | The id of the associated workflow run. |
| `run_number` | `int` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | The start time of the latest run. |
| `run_url` | `string` |  |
| `run_workflows_from_fork_pull_requests` | `bool` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `int` | The ID of the runner group to register the runner to. |
| `runner_group_name` | `string` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | The name of the runner to which this job has been assigned. |
| `runners` | `[]any` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `security_and_analysis` | `map[string]any` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `[]any` | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `[]any` | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `bool` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `size_gb` | `int` | Image size in GB. |
| `size_in_bytes` | `int` | The size in bytes of the artifact. |
| `source` | `string` | The image provider. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `started_at` | `string` | The time that the job started, in ISO 8601 format. |
| `state` | `string` |  |
| `status` | `string` | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `string` |  |
| `steps` | `[]any` | Steps in this job. |
| `storage_gb` | `int` | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `total` | `int` | Total minutes used on all runner machines. |
| `total_count` | `int` |  |
| `trees_url` | `string` |  |
| `triggering_actor` | `map[string]any` | A GitHub user. |
| `type` | `string` | The type of label. |
| `ubuntu_16_core` | `int` | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `int` | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `int` | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `int` | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `int` | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `string` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `value` | `string` | The value of the variable. |
| `verified_allowed` | `bool` | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `string` | The type of repositories in the organization that can access the variable. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `int` | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `int` | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `int` | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `int` | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `int` | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `string` | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `int` | The ID of the parent workflow. |
| `workflow_name` | `string` | The name of the workflow. |
| `workflow_restrictions_read_only` | `bool` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `map[string]any` |  |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```go
action, err := client.Action(nil).Load(map[string]any{"archive_format": "archive_format", "artifact_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(action) // the loaded record
```

#### Example: List

```go
actions, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actions) // the array of records
```

#### Example: Create

```go
result, err := client.Action(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "access_level": "example_access_level",
    "active_caches_count": 1,
    "active_caches_size_in_bytes": 1,
    "actor": map[string]any{},
    "allows_public_repositories": true,
    "approval_policy": "example_approval_policy",
    "archive_download_url": "example_archive_download_url",
    "archive_url": "example_archive_url",
    "artifacts_url": "example_artifacts_url",
    "assignees_url": "example_assignees_url",
    "badge_url": "example_badge_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "busy": true,
    "cancel_url": "example_cancel_url",
    "check_run_url": "example_check_run_url",
    "check_suite_url": "example_check_suite_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "completed_at": "example_completed_at",
    "conclusion": "example_conclusion",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "cpu_cores": 1,
    "created_at": "example_created_at",
    "days": 1,
    "default": true,
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "display_name": "example_display_name",
    "display_title": "example_display_title",
    "downloads_url": "example_downloads_url",
    "enabled": true,
    "enabled_repositories": "example_enabled_repositories",
    "event": "example_event",
    "events_url": "example_events_url",
    "expired": true,
    "expires_at": "example_expires_at",
    "fork": true,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "head_branch": "example_head_branch",
    "head_commit": map[string]any{},
    "head_repository": map[string]any{},
    "head_sha": "example_head_sha",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": 1,
    "image_details": map[string]any{},
    "inherited": true,
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "jobs_url": "example_jobs_url",
    "keys_url": "example_keys_url",
    "labels": []any{},
    "labels_url": "example_labels_url",
    "languages_url": "example_languages_url",
    "logs_url": "example_logs_url",
    "machine_size_details": map[string]any{},
    "memory_gb": 1,
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "name": "example_name",
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "os": "example_os",
    "owner": map[string]any{},
    "path": "example_path",
    "platform": "example_platform",
    "platforms": []any{},
    "private": true,
    "public_ip_enabled": true,
    "pull_requests": []any{},
    "pulls_url": "example_pulls_url",
    "ref": "example_ref",
    "releases_url": "example_releases_url",
    "repository": map[string]any{},
    "rerun_url": "example_rerun_url",
    "run_id": 1,
    "run_number": 1,
    "run_url": "example_run_url",
    "run_workflows_from_fork_pull_requests": true,
    "runner_group_id": 1,
    "runner_group_name": "example_runner_group_name",
    "runner_id": 1,
    "runner_name": "example_runner_name",
    "runners": []any{},
    "runners_url": "example_runners_url",
    "selected_repository_ids": []any{},
    "size_gb": 1,
    "size_in_bytes": 1,
    "source": "example_source",
    "stargazers_url": "example_stargazers_url",
    "started_at": "example_started_at",
    "state": "example_state",
    "status": "example_status",
    "statuses_url": "example_statuses_url",
    "storage_gb": 1,
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "total_count": 1,
    "trees_url": "example_trees_url",
    "triggering_actor": map[string]any{},
    "updated_at": "example_updated_at",
    "url": "example_url",
    "workflow_id": 1,
    "workflow_name": "example_workflow_name",
    "workflow_url": "example_workflow_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ActionsArtifactAndLogRetention

Create an instance: `actionsArtifactAndLogRetention := client.ActionsArtifactAndLogRetention(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `int` | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `int` | The maximum number of days that can be configured |

#### Example: Load

```go
actionsArtifactAndLogRetention, err := client.ActionsArtifactAndLogRetention(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsArtifactAndLogRetention) // the loaded record
```


### ActionsCacheList

Create an instance: `actionsCacheList := client.ActionsCacheList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `last_accessed_at` | `string` |  |
| `ref` | `string` |  |
| `size_in_bytes` | `int` |  |
| `version` | `string` |  |

#### Example: List

```go
actionsCacheLists, err := client.ActionsCacheList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsCacheLists) // the array of records
```


### ActionsCacheUsageByRepository

Create an instance: `actionsCacheUsageByRepository := client.ActionsCacheUsageByRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | The repository owner and name for the cache usage being shown. |

#### Example: Load

```go
actionsCacheUsageByRepository, err := client.ActionsCacheUsageByRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsCacheUsageByRepository) // the loaded record
```


### ActionsCacheUsageOrgEnterprise

Create an instance: `actionsCacheUsageOrgEnterprise := client.ActionsCacheUsageOrgEnterprise(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_active_caches_count` | `int` | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `int` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

#### Example: Load

```go
actionsCacheUsageOrgEnterprise, err := client.ActionsCacheUsageOrgEnterprise(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsCacheUsageOrgEnterprise) // the loaded record
```


### ActionsForkPrContributorApproval

Create an instance: `actionsForkPrContributorApproval := client.ActionsForkPrContributorApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval_policy` | `string` | The policy that controls when fork PR workflows require approval from a maintainer. |

#### Example: Load

```go
actionsForkPrContributorApproval, err := client.ActionsForkPrContributorApproval(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsForkPrContributorApproval) // the loaded record
```


### ActionsForkPrWorkflowsPrivateRepo

Create an instance: `actionsForkPrWorkflowsPrivateRepo := client.ActionsForkPrWorkflowsPrivateRepo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `bool` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `bool` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `bool` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

#### Example: Load

```go
actionsForkPrWorkflowsPrivateRepo, err := client.ActionsForkPrWorkflowsPrivateRepo(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsForkPrWorkflowsPrivateRepo) // the loaded record
```


### ActionsGetDefaultWorkflowPermission

Create an instance: `actionsGetDefaultWorkflowPermission := client.ActionsGetDefaultWorkflowPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

#### Example: Load

```go
actionsGetDefaultWorkflowPermission, err := client.ActionsGetDefaultWorkflowPermission(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsGetDefaultWorkflowPermission) // the loaded record
```


### ActionsHostedRunner

Create an instance: `actionsHostedRunner := client.ActionsHostedRunner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enable_static_ip` | `bool` | Whether this runner should be created with a static public IP. |
| `id` | `int` | The unique identifier of the hosted runner. |
| `image` | `map[string]any` | The image of runner. |
| `image_details` | `map[string]any` | Provides details of a hosted runner image |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `map[string]any` | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | The maximum amount of hosted runners. |
| `name` | `string` | The name of the hosted runner. |
| `platform` | `string` | The operating system of the image. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `[]any` | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `int` | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `string` | The machine size of the runner. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```go
actionsHostedRunner, err := client.ActionsHostedRunner(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsHostedRunner) // the loaded record
```

#### Example: Create

```go
result, err := client.ActionsHostedRunner(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "id": 1,
    "image": map[string]any{},
    "image_details": map[string]any{},
    "machine_size_details": map[string]any{},
    "name": "example_name",
    "platform": "example_platform",
    "public_ip_enabled": true,
    "size": "example_size",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ActionsHostedRunnerLimit

Create an instance: `actionsHostedRunnerLimit := client.ActionsHostedRunnerLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_usage` | `int` | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `int` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

#### Example: Load

```go
actionsHostedRunnerLimit, err := client.ActionsHostedRunnerLimit(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsHostedRunnerLimit) // the loaded record
```


### ActionsOrganizationPermission

Create an instance: `actionsOrganizationPermission := client.ActionsOrganizationPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `string` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `string` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `string` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```go
actionsOrganizationPermission, err := client.ActionsOrganizationPermission(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsOrganizationPermission) // the loaded record
```


### ActionsPublicKey

Create an instance: `actionsPublicKey := client.ActionsPublicKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |
| `title` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
actionsPublicKey, err := client.ActionsPublicKey(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsPublicKey) // the loaded record
```


### ActionsRepositoryPermission

Create an instance: `actionsRepositoryPermission := client.ActionsRepositoryPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```go
actionsRepositoryPermission, err := client.ActionsRepositoryPermission(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsRepositoryPermission) // the loaded record
```


### ActionsSecret

Create an instance: `actionsSecret := client.ActionsSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `updated_at` | `string` |  |

#### Example: Load

```go
actionsSecret, err := client.ActionsSecret(nil).Load(map[string]any{"id": "actions_secret_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsSecret) // the loaded record
```


### ActionsVariable

Create an instance: `actionsVariable := client.ActionsVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `string` |  |
| `name` | `string` | The name of the variable. |
| `updated_at` | `string` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `string` | The value of the variable. |

#### Example: Load

```go
actionsVariable, err := client.ActionsVariable(nil).Load(map[string]any{"id": "actions_variable_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsVariable) // the loaded record
```


### ActionsWorkflowAccessToRepository

Create an instance: `actionsWorkflowAccessToRepository := client.ActionsWorkflowAccessToRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

#### Example: Load

```go
actionsWorkflowAccessToRepository, err := client.ActionsWorkflowAccessToRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsWorkflowAccessToRepository) // the loaded record
```


### Activity

Create an instance: `activity := client.Activity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_type` | `string` | The type of the activity that was performed. |
| `actor` | `map[string]any` | A GitHub user. |
| `after` | `string` | The SHA of the commit after the activity. |
| `archive_url` | `string` |  |
| `assignees_url` | `string` |  |
| `avatar_url` | `string` |  |
| `before` | `string` | The SHA of the commit before the activity. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `fork` | `bool` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `int` |  |
| `gravatar_id` | `string` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `map[string]any` |  |
| `languages_url` | `string` |  |
| `last_read_at` | `string` | Describes the last point that notifications were checked. |
| `login` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `organizations_url` | `string` |  |
| `owner` | `map[string]any` |  |
| `private` | `bool` |  |
| `pulls_url` | `string` |  |
| `read` | `bool` | Whether the notification has been read. |
| `received_events_url` | `string` |  |
| `ref` | `string` | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `ssh_url` | `string` |  |
| `stargazers_url` | `string` |  |
| `starred_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `timestamp` | `string` | The time when the activity occurred. |
| `trees_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
activity, err := client.Activity(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(activity) // the loaded record
```

#### Example: List

```go
activitys, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activitys) // the array of records
```


### Add

Create an instance: `add := client.Add(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `[]any` | The GitHub user handles to add to the team. |

#### Example: Create

```go
result, err := client.Add(nil).Create(map[string]any{
    "enterprise": "example_enterprise",
    "team_id": "example_team_id",
    "usernames": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ApiInsightsRouteStat

Create an instance: `apiInsightsRouteStat := client.ApiInsightsRouteStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_route` | `string` | The API path's route template |
| `http_method` | `string` | The HTTP method |
| `last_rate_limited_timestamp` | `string` |  |
| `last_request_timestamp` | `string` |  |
| `rate_limited_request_count` | `int` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | The total number of requests within the queried time period |

#### Example: List

```go
apiInsightsRouteStats, err := client.ApiInsightsRouteStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsRouteStats) // the array of records
```


### ApiInsightsSubjectStat

Create an instance: `apiInsightsSubjectStat := client.ApiInsightsSubjectStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `last_rate_limited_timestamp` | `string` |  |
| `last_request_timestamp` | `string` |  |
| `rate_limited_request_count` | `int` |  |
| `subject_id` | `int` |  |
| `subject_name` | `string` |  |
| `subject_type` | `string` |  |
| `total_request_count` | `int` |  |

#### Example: List

```go
apiInsightsSubjectStats, err := client.ApiInsightsSubjectStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsSubjectStats) // the array of records
```


### ApiInsightsSummaryStat

Create an instance: `apiInsightsSummaryStat := client.ApiInsightsSummaryStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `rate_limited_request_count` | `int` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | The total number of requests within the queried time period |

#### Example: Load

```go
apiInsightsSummaryStat, err := client.ApiInsightsSummaryStat(nil).Load(map[string]any{"min_timestamp": "min_timestamp"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsSummaryStat) // the loaded record
```


### ApiInsightsTimeStat

Create an instance: `apiInsightsTimeStat := client.ApiInsightsTimeStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate_limited_request_count` | `int` |  |
| `timestamp` | `string` |  |
| `total_request_count` | `int` |  |

#### Example: Load

```go
apiInsightsTimeStat, err := client.ApiInsightsTimeStat(nil).Load(map[string]any{"org_id": "org_id", "user_id": "user_id", "min_timestamp": "min_timestamp", "timestamp_increment": "timestamp_increment"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsTimeStat) // the loaded record
```

#### Example: List

```go
apiInsightsTimeStats, err := client.ApiInsightsTimeStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsTimeStats) // the array of records
```


### ApiInsightsUserStat

Create an instance: `apiInsightsUserStat := client.ApiInsightsUserStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `int` |  |
| `actor_name` | `string` |  |
| `actor_type` | `string` |  |
| `id` | `string` |  |
| `integration_id` | `int` |  |
| `last_rate_limited_timestamp` | `string` |  |
| `last_request_timestamp` | `string` |  |
| `oauth_application_id` | `int` |  |
| `rate_limited_request_count` | `int` |  |
| `total_request_count` | `int` |  |

#### Example: Load

```go
apiInsightsUserStat, err := client.ApiInsightsUserStat(nil).Load(map[string]any{"id": "api_insights_user_stat_id", "org_id": "org_id", "min_timestamp": "min_timestamp"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiInsightsUserStat) // the loaded record
```


### ApiOverview

Create an instance: `apiOverview := client.ApiOverview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` |  |
| `actions_macos` | `[]any` |  |
| `api` | `[]any` |  |
| `codespaces` | `[]any` |  |
| `copilot` | `[]any` |  |
| `dependabot` | `[]any` |  |
| `domains` | `map[string]any` |  |
| `git` | `[]any` |  |
| `github_enterprise_importer` | `[]any` |  |
| `hooks` | `[]any` |  |
| `importer` | `[]any` |  |
| `packages` | `[]any` |  |
| `pages` | `[]any` |  |
| `ssh_key_fingerprints` | `map[string]any` |  |
| `ssh_keys` | `[]any` |  |
| `verifiable_password_authentication` | `bool` |  |
| `web` | `[]any` |  |

#### Example: List

```go
apiOverviews, err := client.ApiOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiOverviews) // the array of records
```


### App

Create an instance: `app := client.App(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `any` |  |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `app_id` | `int` |  |
| `app_slug` | `string` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `clone_url` | `string` |  |
| `code_search_index_status` | `map[string]any` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contact_email` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events` | `[]any` |  |
| `events_url` | `string` |  |
| `external_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_multiple_single_files` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `pem` | `string` |  |
| `permissions` | `map[string]any` | The permissions granted to the user access token. |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `[]any` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `string` |  |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `suspended_at` | `string` |  |
| `suspended_by` | `map[string]any` | A GitHub user. |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` | `string` |  |

#### Example: List

```go
apps, err := client.App(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apps) // the array of records
```

#### Example: Create

```go
result, err := client.App(nil).Create(map[string]any{
    "code": "example_code",
    "access_tokens_url": "example_access_tokens_url",
    "account": "example_account",
    "app_id": 1,
    "app_slug": "example_app_slug",
    "archive_url": "example_archive_url",
    "archived": true,
    "assignees_url": "example_assignees_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "clone_url": "example_clone_url",
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "default_branch": "example_default_branch",
    "deployments_url": "example_deployments_url",
    "disabled": true,
    "downloads_url": "example_downloads_url",
    "events_url": "example_events_url",
    "fork": true,
    "forks": 1,
    "forks_count": 1,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "git_url": "example_git_url",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": true,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "example_homepage",
    "hooks_url": "example_hooks_url",
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "language": "example_language",
    "languages_url": "example_languages_url",
    "license": map[string]any{},
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "mirror_url": "example_mirror_url",
    "notifications_url": "example_notifications_url",
    "open_issues": 1,
    "open_issues_count": 1,
    "private": true,
    "pulls_url": "example_pulls_url",
    "pushed_at": "example_pushed_at",
    "releases_url": "example_releases_url",
    "repositories_url": "example_repositories_url",
    "repository_selection": "example_repository_selection",
    "single_file_name": "example_single_file_name",
    "size": 1,
    "ssh_url": "example_ssh_url",
    "stargazers_count": 1,
    "stargazers_url": "example_stargazers_url",
    "statuses_url": "example_statuses_url",
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "suspended_at": "example_suspended_at",
    "suspended_by": map[string]any{},
    "svn_url": "example_svn_url",
    "tags_url": "example_tags_url",
    "target_id": 1,
    "target_type": "example_target_type",
    "teams_url": "example_teams_url",
    "trees_url": "example_trees_url",
    "url": "example_url",
    "watchers": 1,
    "watchers_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Artifact

Create an instance: `artifact := client.Artifact(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `head_branch` | `string` |  |
| `head_repository_id` | `int` |  |
| `head_sha` | `string` |  |
| `id` | `int` |  |
| `repository_id` | `int` |  |

#### Example: Load

```go
artifact, err := client.Artifact(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(artifact) // the loaded record
```


### Assignee

Create an instance: `assignee := client.Assignee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
assignees, err := client.Assignee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(assignees) // the array of records
```


### AuthenticationToken

Create an instance: `authenticationToken := client.AuthenticationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `token` | `string` |  |

#### Example: Create

```go
result, err := client.AuthenticationToken(nil).Create(map[string]any{
    "org_id": "example_org_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Authorization

Create an instance: `authorization := client.Authorization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` | The access_token of the OAuth or GitHub application. |
| `app` | `map[string]any` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `hashed_token` | `string` |  |
| `id` | `int` |  |
| `installation` | `map[string]any` |  |
| `note` | `string` |  |
| `note_url` | `string` |  |
| `permissions` | `map[string]any` | The permissions granted to the user access token. |
| `repositories` | `[]any` | The list of repository names to scope the user access token to. |
| `repository_ids` | `[]any` | The list of repository IDs to scope the user access token to. |
| `scopes` | `[]any` | A list of scopes that this authorization is in. |
| `target` | `string` | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | The ID of the user or organization to scope the user access token to. |
| `token` | `string` |  |
| `token_last_eight` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Create

```go
result, err := client.Authorization(nil).Create(map[string]any{
    "application_id": "example_application_id",
    "access_token": "example_access_token",
    "app": map[string]any{},
    "created_at": "example_created_at",
    "expires_at": "example_expires_at",
    "fingerprint": "example_fingerprint",
    "hashed_token": "example_hashed_token",
    "id": 1,
    "installation": map[string]any{},
    "note": "example_note",
    "note_url": "example_note_url",
    "scopes": []any{},
    "token": "example_token",
    "token_last_eight": "example_token_last_eight",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Autolink

Create an instance: `autolink := client.Autolink(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `is_alphanumeric` | `bool` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `string` | The prefix of a key that is linkified. |
| `updated_at` | `string` |  |
| `url_template` | `string` | A template for the target URL that is generated if a key was found. |

#### Example: Load

```go
autolink, err := client.Autolink(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(autolink) // the loaded record
```

#### Example: List

```go
autolinks, err := client.Autolink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(autolinks) // the array of records
```

#### Example: Create

```go
result, err := client.Autolink(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "id": 1,
    "is_alphanumeric": true,
    "key_prefix": "example_key_prefix",
    "url_template": "example_url_template",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BaseGist

Create an instance: `baseGist := client.BaseGist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `map[string]any` |  |
| `forks` | `[]any` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `[]any` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: List

```go
baseGists, err := client.BaseGist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(baseGists) // the array of records
```

#### Example: Create

```go
result, err := client.BaseGist(nil).Create(map[string]any{
    "gist_id": "example_gist_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillingUsageReport

Create an instance: `billingUsageReport := client.BillingUsageReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `float64` | Discount amount of the usage line item. |
| `grossAmount` | `float64` | Gross amount of the usage line item. |
| `netAmount` | `float64` | Net amount of the usage line item. |
| `organizationName` | `string` | Name of the organization. |
| `pricePerUnit` | `float64` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```go
billingUsageReports, err := client.BillingUsageReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billingUsageReports) // the array of records
```


### BillingUsageReportUser

Create an instance: `billingUsageReportUser := client.BillingUsageReportUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `float64` | Discount amount of the usage line item. |
| `grossAmount` | `float64` | Gross amount of the usage line item. |
| `netAmount` | `float64` | Net amount of the usage line item. |
| `pricePerUnit` | `float64` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```go
billingUsageReportUsers, err := client.BillingUsageReportUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billingUsageReportUsers) // the array of records
```


### Blob

Create an instance: `blob := client.Blob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` |  |
| `encoding` | `string` |  |
| `highlighted_content` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `sha` | `string` |  |
| `size` | `int` |  |
| `url` | `string` |  |

#### Example: Load

```go
blob, err := client.Blob(nil).Load(map[string]any{"id": "blob_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(blob) // the loaded record
```


### Block

Create an instance: `block := client.Block(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
blocks, err := client.Block(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(blocks) // the array of records
```


### Branch

Create an instance: `branch := client.Branch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` | Commit |
| `id` | `string` |  |
| `links` | `map[string]any` |  |
| `name` | `string` |  |
| `pattern` | `string` |  |
| `protected` | `bool` |  |
| `protection` | `map[string]any` | Branch Protection |
| `protection_url` | `string` |  |
| `required_approving_review_count` | `int` |  |

#### Example: Load

```go
branch, err := client.Branch(nil).Load(map[string]any{"id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branch) // the loaded record
```


### BranchProtection

Create an instance: `branchProtection := client.BranchProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `map[string]any` |  |
| `allow_force_pushes` | `map[string]any` |  |
| `allow_fork_syncing` | `map[string]any` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `map[string]any` |  |
| `enabled` | `bool` |  |
| `enforce_admins` | `map[string]any` | Protected Branch Admin Enforced |
| `id` | `string` |  |
| `lock_branch` | `map[string]any` | Whether to set the branch as read-only. |
| `name` | `string` |  |
| `protection_url` | `string` |  |
| `required_conversation_resolution` | `map[string]any` |  |
| `required_linear_history` | `map[string]any` |  |
| `required_pull_request_reviews` | `map[string]any` | Protected Branch Pull Request Review |
| `required_signatures` | `map[string]any` |  |
| `required_status_checks` | `map[string]any` | Protected Branch Required Status Check |
| `restrictions` | `map[string]any` | Branch Restriction Policy |
| `url` | `string` |  |

#### Example: Load

```go
branchProtection, err := client.BranchProtection(nil).Load(map[string]any{"id": "branch_protection_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchProtection) // the loaded record
```


### BranchRestrictionPolicy

Create an instance: `branchRestrictionPolicy := client.BranchRestrictionPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `[]any` |  |
| `apps_url` | `string` |  |
| `teams` | `[]any` |  |
| `teams_url` | `string` |  |
| `url` | `string` |  |
| `users` | `[]any` |  |
| `users_url` | `string` |  |

#### Example: List

```go
branchRestrictionPolicys, err := client.BranchRestrictionPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchRestrictionPolicys) // the array of records
```


### BranchShort

Create an instance: `branchShort := client.BranchShort(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |

#### Example: List

```go
branchShorts, err := client.BranchShort(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchShorts) // the array of records
```


### BranchWithProtection

Create an instance: `branchWithProtection := client.BranchWithProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `new_name` | `string` | The new name of the branch. |

#### Example: Create

```go
result, err := client.BranchWithProtection(nil).Create(map[string]any{
    "id": "example_id",
    "owner": "example_owner",
    "repo": "example_repo",
    "new_name": "example_new_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Campaign

Create an instance: `campaign := client.Campaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_stats` | `map[string]any` |  |
| `closed_at` | `string` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `[]any` | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | The contact link of the campaign. |
| `created_at` | `string` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | The campaign description |
| `ends_at` | `string` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | If true, will automatically generate issues for the campaign. |
| `id` | `string` |  |
| `managers` | `[]any` | The campaign managers |
| `name` | `string` | The campaign name |
| `number` | `int` | The number of the newly created campaign |
| `published_at` | `string` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Indicates whether a campaign is open or closed |
| `team_managers` | `[]any` | The campaign team managers |
| `updated_at` | `string` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```go
campaign, err := client.Campaign(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(campaign) // the loaded record
```

#### Example: List

```go
campaigns, err := client.Campaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(campaigns) // the array of records
```

#### Example: Create

```go
result, err := client.Campaign(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "alert_stats": map[string]any{},
    "code_scanning_alerts": []any{},
    "contact_link": "example_contact_link",
    "created_at": "example_created_at",
    "description": "example_description",
    "ends_at": "example_ends_at",
    "managers": []any{},
    "number": 1,
    "state": "example_state",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Check

Create an instance: `check := client.Check(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `check_suite` | `map[string]any` |  |
| `completed_at` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `deployment` | `map[string]any` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` |  |
| `external_id` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `map[string]any` | A commit. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the check. |
| `latest_check_runs_count` | `int` |  |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `map[string]any` |  |
| `pull_requests` | `[]any` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `map[string]any` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `started_at` | `string` |  |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
checks, err := client.Check(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(checks) // the array of records
```


### CheckAnnotation

Create an instance: `checkAnnotation := client.CheckAnnotation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation_level` | `string` |  |
| `blob_href` | `string` |  |
| `end_column` | `int` |  |
| `end_line` | `int` |  |
| `message` | `string` |  |
| `path` | `string` |  |
| `raw_details` | `string` |  |
| `start_column` | `int` |  |
| `start_line` | `int` |  |
| `title` | `string` |  |

#### Example: List

```go
checkAnnotations, err := client.CheckAnnotation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(checkAnnotations) // the array of records
```


### CheckAutomatedSecurityFix

Create an instance: `checkAutomatedSecurityFix := client.CheckAutomatedSecurityFix(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `bool` | Whether Dependabot security updates are paused for the repository. |

#### Example: Load

```go
checkAutomatedSecurityFix, err := client.CheckAutomatedSecurityFix(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checkAutomatedSecurityFix) // the loaded record
```


### CheckRun

Create an instance: `checkRun := client.CheckRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `map[string]any` |  |
| `completed_at` | `string` | The time the check completed. |
| `conclusion` | `string` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `map[string]any` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | A reference for the run on the integrator's system. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the check. |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `map[string]any` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `[]any` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `string` | The time that the check run began. |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `url` | `string` |  |

#### Example: Load

```go
checkRun, err := client.CheckRun(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checkRun) // the loaded record
```

#### Example: Create

```go
result, err := client.CheckRun(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "app": map[string]any{},
    "check_suite": map[string]any{},
    "completed_at": "example_completed_at",
    "conclusion": "example_conclusion",
    "deployment": map[string]any{},
    "details_url": "example_details_url",
    "external_id": "example_external_id",
    "head_sha": "example_head_sha",
    "html_url": "example_html_url",
    "id": 1,
    "name": "example_name",
    "node_id": "example_node_id",
    "output": map[string]any{},
    "pull_requests": []any{},
    "started_at": "example_started_at",
    "status": "example_status",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CheckSuite

Create an instance: `checkSuite := client.CheckSuite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `map[string]any` | A commit. |
| `head_sha` | `string` | The SHA of the head commit that is being checked. |
| `id` | `int` |  |
| `latest_check_runs_count` | `int` |  |
| `node_id` | `string` |  |
| `pull_requests` | `[]any` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `status` | `string` | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
checkSuite, err := client.CheckSuite(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checkSuite) // the loaded record
```

#### Example: Create

```go
result, err := client.CheckSuite(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "after": "example_after",
    "app": map[string]any{},
    "before": "example_before",
    "check_runs_url": "example_check_runs_url",
    "conclusion": "example_conclusion",
    "created_at": "example_created_at",
    "head_branch": "example_head_branch",
    "head_commit": map[string]any{},
    "head_sha": "example_head_sha",
    "id": 1,
    "latest_check_runs_count": 1,
    "node_id": "example_node_id",
    "pull_requests": []any{},
    "repository": map[string]any{},
    "status": "example_status",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CheckSuitePreference

Create an instance: `checkSuitePreference := client.CheckSuitePreference(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_trigger_checks` | `[]any` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `map[string]any` |  |
| `repository` | `map[string]any` | Minimal Repository |


### Classroom

Create an instance: `classroom := client.Classroom(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Returns whether classroom is archived or not. |
| `avatar_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the classroom. |
| `login` | `string` |  |
| `name` | `string` | The name of the classroom. |
| `node_id` | `string` |  |
| `url` | `string` | The url of the classroom on GitHub Classroom. |

#### Example: Load

```go
classroom, err := client.Classroom(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(classroom) // the loaded record
```

#### Example: List

```go
classrooms, err := client.Classroom(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(classrooms) // the array of records
```


### ClassroomAcceptedAssignment

Create an instance: `classroomAcceptedAssignment := client.ClassroomAcceptedAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `map[string]any` | A GitHub Classroom assignment |
| `commit_count` | `int` | Count of student commits. |
| `grade` | `string` | Most recent grade. |
| `id` | `int` | Unique identifier of the repository. |
| `passing` | `bool` | Whether a submission passed. |
| `repository` | `map[string]any` | A GitHub repository view for Classroom |
| `students` | `[]any` |  |
| `submitted` | `bool` | Whether an accepted assignment has been submitted. |

#### Example: List

```go
classroomAcceptedAssignments, err := client.ClassroomAcceptedAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(classroomAcceptedAssignments) // the array of records
```


### ClassroomAssignment

Create an instance: `classroomAssignment := client.ClassroomAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `map[string]any` | A GitHub Classroom classroom |
| `deadline` | `string` | The time at which the assignment is due. |
| `editor` | `string` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `int` | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Whether the invitation link is enabled. |
| `invite_link` | `string` | The link that a student can use to accept the assignment. |
| `language` | `string` | The programming language used in the assignment. |
| `max_members` | `int` | The maximum allowable members per team. |
| `max_teams` | `int` | The maximum allowable teams for the assignment. |
| `passing` | `int` | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Sluggified name of the assignment. |
| `starter_code_repository` | `map[string]any` | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | The number of students that have submitted the assignment. |
| `title` | `string` | Assignment title. |
| `type` | `string` | Whether it's a group assignment or individual assignment. |

#### Example: Load

```go
classroomAssignment, err := client.ClassroomAssignment(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(classroomAssignment) // the loaded record
```


### ClassroomAssignmentGrade

Create an instance: `classroomAssignmentGrade := client.ClassroomAssignmentGrade(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment_name` | `string` | Name of the assignment |
| `assignment_url` | `string` | URL of the assignment |
| `github_username` | `string` | GitHub username of the student |
| `group_name` | `string` | If a group assignment, name of the group the student is in |
| `points_available` | `int` | Number of points available for the assignment |
| `points_awarded` | `int` | Number of points awarded to the student |
| `roster_identifier` | `string` | Roster identifier of the student |
| `starter_code_url` | `string` | URL of the starter code for the assignment |
| `student_repository_name` | `string` | Name of the student's assignment repository |
| `student_repository_url` | `string` | URL of the student's assignment repository |
| `submission_timestamp` | `string` | Timestamp of the student's assignment submission |

#### Example: List

```go
classroomAssignmentGrades, err := client.ClassroomAssignmentGrade(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(classroomAssignmentGrades) // the array of records
```


### Clone

Create an instance: `clone := client.Clone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```go
clones, err := client.Clone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(clones) // the array of records
```


### CodeFrequency

Create an instance: `codeFrequency := client.CodeFrequency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
codeFrequencys, err := client.CodeFrequency(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeFrequencys) // the array of records
```


### CodeFrequencyStat

Create an instance: `codeFrequencyStat := client.CodeFrequencyStat(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
codeFrequencyStats, err := client.CodeFrequencyStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeFrequencyStats) // the array of records
```


### CodeOfConduct

Create an instance: `codeOfConduct := client.CodeOfConduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `html_url` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
codeOfConduct, err := client.CodeOfConduct(nil).Load(map[string]any{"key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeOfConduct) // the loaded record
```

#### Example: List

```go
codeOfConducts, err := client.CodeOfConduct(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeOfConducts) // the array of records
```


### CodeScanning

Create an instance: `codeScanning := client.CodeScanning(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkout_uri` | `string` | The base directory used in the analysis, as it appears in the SARIF file. |
| `commit_sha` | `string` | The SHA of the commit to which the analysis you are uploading relates. |
| `ref` | `string` | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `sarif` | `string` | A Base64 string representing the SARIF file to upload. |
| `started_at` | `string` | The time that the analysis run began. |
| `tool_name` | `string` | The name of the tool used to generate the code scanning analysis. |
| `validate` | `bool` | Whether the SARIF file will be validated according to the code scanning specifications. |

#### Example: Create

```go
result, err := client.CodeScanning(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "commit_sha": "example_commit_sha",
    "ref": "example_ref",
    "sarif": "example_sarif",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CodeScanningAlert

Create an instance: `codeScanningAlert := client.CodeScanningAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_request` | `bool` | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` |  |
| `number` | `int` | The security alert number. |
| `rule` | `map[string]any` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `map[string]any` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```go
codeScanningAlert, err := client.CodeScanningAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAlert) // the loaded record
```


### CodeScanningAlertInstance

Create an instance: `codeScanningAlertInstance := client.CodeScanningAlertInstance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `string` | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | Identifies the configuration under which the analysis was executed. |
| `classifications` | `[]any` | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` |  |
| `environment` | `string` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` |  |
| `location` | `map[string]any` | Describe a region within a file for the alert. |
| `message` | `map[string]any` |  |
| `ref` | `string` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | State of a code scanning alert. |

#### Example: List

```go
codeScanningAlertInstances, err := client.CodeScanningAlertInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAlertInstances) // the array of records
```


### CodeScanningAlertItem

Create an instance: `codeScanningAlertItem := client.CodeScanningAlertItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` |  |
| `number` | `int` | The security alert number. |
| `rule` | `map[string]any` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `map[string]any` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```go
codeScanningAlertItems, err := client.CodeScanningAlertItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAlertItems) // the array of records
```


### CodeScanningAnalysi

Create an instance: `codeScanningAnalysi := client.CodeScanningAnalysi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `string` | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | `string` | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | `string` | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` | `bool` |  |
| `environment` | `string` | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `string` |  |
| `guid` | `string` | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `int` | Unique identifier for this analysis. |
| `name` | `string` | The name of the tool used to generate the code scanning analysis. |
| `ref` | `string` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `int` | The total number of results in the analysis. |
| `rules_count` | `int` | The total number of rules used in the analysis. |
| `sarif_id` | `string` | An identifier for the upload. |
| `tool` | `map[string]any` |  |
| `url` | `string` | The REST API URL of the analysis resource. |
| `version` | `string` | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Warning generated when processing the analysis |

#### Example: Load

```go
codeScanningAnalysi, err := client.CodeScanningAnalysi(nil).Load(map[string]any{"analysis_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAnalysi) // the loaded record
```

#### Example: List

```go
codeScanningAnalysis, err := client.CodeScanningAnalysi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAnalysis) // the array of records
```


### CodeScanningAnalysisDeletion

Create an instance: `codeScanningAnalysisDeletion := client.CodeScanningAnalysisDeletion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CodeScanningAutofix

Create an instance: `codeScanningAutofix := client.CodeScanningAutofix(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of an autofix. |
| `started_at` | `string` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | The status of an autofix. |

#### Example: Load

```go
codeScanningAutofix, err := client.CodeScanningAutofix(nil).Load(map[string]any{"alert_number": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningAutofix) // the loaded record
```

#### Example: Create

```go
result, err := client.CodeScanningAutofix(nil).Create(map[string]any{
    "alert_number": 1,
    "owner": "example_owner",
    "repo": "example_repo",
    "description": "example_description",
    "started_at": "example_started_at",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CodeScanningAutofixCommit

Create an instance: `codeScanningAutofixCommit := client.CodeScanningAutofixCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` | Commit message to be used. |
| `target_ref` | `string` | The Git reference of target branch for the commit. |

#### Example: Create

```go
result, err := client.CodeScanningAutofixCommit(nil).Create(map[string]any{
    "alert_id": 1,
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CodeScanningCodeqlDatabase

Create an instance: `codeScanningCodeqlDatabase := client.CodeScanningCodeqlDatabase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `commit_oid` | `string` | The commit SHA of the repository at the time the CodeQL database was created. |
| `content_type` | `string` | The MIME type of the CodeQL database file. |
| `created_at` | `string` | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the CodeQL database. |
| `language` | `string` | The language of the CodeQL database. |
| `login` | `string` |  |
| `name` | `string` | The name of the CodeQL database. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `size` | `int` | The size of the CodeQL database file in bytes. |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `map[string]any` | A GitHub user. |
| `url` | `string` | The URL at which to download the CodeQL database. |
| `user_view_type` | `string` |  |

#### Example: Load

```go
codeScanningCodeqlDatabase, err := client.CodeScanningCodeqlDatabase(nil).Load(map[string]any{"language": "language", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningCodeqlDatabase) // the loaded record
```

#### Example: List

```go
codeScanningCodeqlDatabases, err := client.CodeScanningCodeqlDatabase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningCodeqlDatabases) // the array of records
```


### CodeScanningDefaultSetup

Create an instance: `codeScanningDefaultSetup := client.CodeScanningDefaultSetup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `languages` | `[]any` | Languages to be analyzed. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `schedule` | `string` | The frequency of the periodic analysis. |
| `state` | `string` | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | Timestamp of latest configuration update. |

#### Example: List

```go
codeScanningDefaultSetups, err := client.CodeScanningDefaultSetup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningDefaultSetups) // the array of records
```


### CodeScanningOrganizationAlertItem

Create an instance: `codeScanningOrganizationAlertItem := client.CodeScanningOrganizationAlertItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` |  |
| `number` | `int` | The security alert number. |
| `repository` | `map[string]any` | A GitHub repository. |
| `rule` | `map[string]any` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `map[string]any` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```go
codeScanningOrganizationAlertItems, err := client.CodeScanningOrganizationAlertItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningOrganizationAlertItems) // the array of records
```


### CodeScanningSarifsStatus

Create an instance: `codeScanningSarifsStatus := client.CodeScanningSarifsStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analyses_url` | `string` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `[]any` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

#### Example: Load

```go
codeScanningSarifsStatus, err := client.CodeScanningSarifsStatus(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "sarif_id": "sarif_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningSarifsStatus) // the loaded record
```


### CodeScanningVariantAnalysi

Create an instance: `codeScanningVariantAnalysi := client.CodeScanningVariantAnalysi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions_workflow_run_id` | `int` | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `map[string]any` | A GitHub user. |
| `completed_at` | `string` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `map[string]any` | A GitHub repository. |
| `created_at` | `string` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | The reason for a failure of the variant analysis. |
| `id` | `int` | The ID of the variant analysis. |
| `language` | `string` | The language targeted by the CodeQL query |
| `query_language` | `string` | The language targeted by the CodeQL query |
| `query_pack` | `string` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | The download url for the query pack. |
| `repositories` | `[]any` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `[]any` | List of repository lists to run the query against. |
| `repository_owners` | `[]any` | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `[]any` |  |
| `skipped_repositories` | `map[string]any` | Information about repositories that were skipped from processing. |
| `status` | `string` |  |
| `updated_at` | `string` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```go
codeScanningVariantAnalysi, err := client.CodeScanningVariantAnalysi(nil).Load(map[string]any{"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningVariantAnalysi) // the loaded record
```

#### Example: Create

```go
result, err := client.CodeScanningVariantAnalysi(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "actor": map[string]any{},
    "controller_repo": map[string]any{},
    "id": 1,
    "language": "example_language",
    "query_language": "example_query_language",
    "query_pack": "example_query_pack",
    "query_pack_url": "example_query_pack_url",
    "skipped_repositories": map[string]any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CodeScanningVariantAnalysisRepoTask

Create an instance: `codeScanningVariantAnalysisRepoTask := client.CodeScanningVariantAnalysisRepoTask(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archive_url` | `string` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `string` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `string` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `string` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `string` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `string` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `string` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `string` | A template for the API URL to compare two commits or refs. |
| `contents_url` | `string` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `string` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `string` | The API URL to list the deployments of the repository. |
| `description` | `string` | The repository description. |
| `downloads_url` | `string` | The API URL to list the downloads on the repository. |
| `events_url` | `string` | The API URL to list the events of the repository. |
| `fork` | `bool` | Whether the repository is a fork. |
| `forks_url` | `string` | The API URL to list the forks of the repository. |
| `full_name` | `string` | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `int` | A unique identifier of the repository. |
| `hooks_url` | `string` | The API URL to list the hooks on the repository. |
| `html_url` | `string` | The URL to view the repository on GitHub.com. |
| `id` | `string` | A unique identifier of the repository. |
| `issue_comment_url` | `string` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `string` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `string` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `string` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `string` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `string` | The API URL to get information about the languages of the repository. |
| `merges_url` | `string` | The API URL to merge branches in the repository. |
| `milestones_url` | `string` | A template for the API URL to get information about milestones of the repository. |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` | The GraphQL identifier of the repository. |
| `notifications_url` | `string` | A template for the API URL to get information about notifications on the repository. |
| `owner` | `map[string]any` | A GitHub user. |
| `private` | `bool` | Whether the repository is private. |
| `pulls_url` | `string` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `string` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `string` | The API URL to list the stargazers on the repository. |
| `statuses_url` | `string` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `string` | The API URL to list the subscribers on the repository. |
| `subscription_url` | `string` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `string` | The API URL to get information about tags on the repository. |
| `teams_url` | `string` | The API URL to list the teams on the repository. |
| `trees_url` | `string` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `string` | The URL to get more information about the repository from the GitHub API. |

#### Example: Load

```go
codeScanningVariantAnalysisRepoTask, err := client.CodeScanningVariantAnalysisRepoTask(nil).Load(map[string]any{"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo", "repo_name": "repo_name", "repo_owner": "repo_owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeScanningVariantAnalysisRepoTask) // the loaded record
```


### CodeSecurity

Create an instance: `codeSecurity := client.CodeSecurity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `string` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `map[string]any` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `map[string]any` | Feature options for code scanning |
| `created_at` | `string` |  |
| `default_for_new_repos` | `string` | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `map[string]any` | Feature options for Automatic dependency submission |
| `description` | `string` | A description of the code security configuration |
| `enforcement` | `string` | The enforcement status for a security configuration |
| `html_url` | `string` | The URL of the configuration |
| `id` | `int` | The ID of the code security configuration |
| `name` | `string` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `map[string]any` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |


### CodeSecurityConfiguration

Create an instance: `codeSecurityConfiguration := client.CodeSecurityConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `string` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `map[string]any` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `map[string]any` | Feature options for code scanning |
| `code_security` | `string` | The enablement status of GitHub Code Security features. |
| `created_at` | `string` |  |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `map[string]any` | Feature options for Automatic dependency submission |
| `description` | `string` | A description of the code security configuration |
| `enforcement` | `string` | The enforcement status for a security configuration |
| `html_url` | `string` | The URL of the configuration |
| `id` | `int` | The ID of the code security configuration |
| `name` | `string` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | The enablement status of private vulnerability reporting |
| `scope` | `string` | The type of repositories to attach the configuration to. |
| `secret_protection` | `string` | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `string` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `map[string]any` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `[]any` | An array of repository IDs to attach the configuration to. |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |

#### Example: Load

```go
codeSecurityConfiguration, err := client.CodeSecurityConfiguration(nil).Load(map[string]any{"id": 1, "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeSecurityConfiguration) // the loaded record
```

#### Example: List

```go
codeSecurityConfigurations, err := client.CodeSecurityConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeSecurityConfigurations) // the array of records
```

#### Example: Create

```go
result, err := client.CodeSecurityConfiguration(nil).Create(map[string]any{
    "enterprise": "example_enterprise",
    "scope": "example_scope",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CodeSecurityConfigurationRepository

Create an instance: `codeSecurityConfigurationRepository := client.CodeSecurityConfigurationRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `repository` | `map[string]any` | A GitHub repository. |
| `status` | `string` | The attachment status of the code security configuration on the repository. |

#### Example: List

```go
codeSecurityConfigurationRepositorys, err := client.CodeSecurityConfigurationRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeSecurityConfigurationRepositorys) // the array of records
```


### CodeSecurityDefaultConfiguration

Create an instance: `codeSecurityDefaultConfiguration := client.CodeSecurityDefaultConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | A code security configuration |
| `default_for_new_repos` | `any` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

#### Example: List

```go
codeSecurityDefaultConfigurations, err := client.CodeSecurityDefaultConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeSecurityDefaultConfigurations) // the array of records
```


### CodeownersError

Create an instance: `codeownersError := client.CodeownersError(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column` | `int` | The column number where this errors occurs. |
| `kind` | `string` | The type of error. |
| `line` | `int` | The line number where this errors occurs. |
| `message` | `string` | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `string` | The path of the file where the error occured. |
| `source` | `string` | The contents of the line where the error occurs. |
| `suggestion` | `string` | Suggested action to fix the error. |

#### Example: List

```go
codeownersErrors, err := client.CodeownersError(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codeownersErrors) // the array of records
```


### Codespace

Create an instance: `codespace := client.Codespace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `bool` | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignees_url` | `string` |  |
| `billable_owner` | `map[string]any` | A GitHub user. |
| `blobs_url` | `string` |  |
| `branch` | `string` | Name of the exported branch |
| `branches_url` | `string` |  |
| `client_ip` | `string` | IP for location auto-detection when proxying a request |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `completed_at` | `string` | Completion time of the last export operation |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `cpus` | `int` | How many cores are available to the codespace. |
| `created_at` | `string` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `defaults` | `map[string]any` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `devcontainer_path` | `string` | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `bool` |  |
| `display_name` | `string` | Display name for this codespace. |
| `downloads_url` | `string` |  |
| `encrypted_value` | `string` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `string` | UUID identifying this codespace's environment. |
| `events_url` | `string` |  |
| `export_url` | `string` | Url for fetching export details |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `geo` | `string` | The geographic area for this codespace. |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_status` | `map[string]any` | Details about the codespace's git repository. |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` | Web url for the exported branch |
| `id` | `string` | Id for the export details |
| `idle_timeout_minutes` | `int` | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `string` | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `bool` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_known_stop_notice` | `string` | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `last_used_at` | `string` | Last known time this codespace was started. |
| `license` | `map[string]any` |  |
| `location` | `string` | The initally assigned location of a new codespace. |
| `machine` | `map[string]any` | A description of the machine powering a codespace. |
| `machines_url` | `string` | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `int` | How much memory is available to the codespace. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `multi_repo_permissions_opt_out` | `bool` | Whether to authorize requested permissions from devcontainer.json |
| `name` | `string` | The name of the secret. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `operating_system` | `string` | The operating system of the machine. |
| `owner` | `map[string]any` | A GitHub user. |
| `path` | `string` |  |
| `pending_operation` | `bool` | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `map[string]any` |  |
| `prebuild` | `bool` | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | Whether the new repository should be private. |
| `publish_url` | `string` | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` |  |
| `recent_folders` | `[]any` | Recently opened folders inside the codespace. |
| `ref` | `string` | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `retention_expires_at` | `string` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` |  |
| `runtime_constraints` | `map[string]any` |  |
| `security_and_analysis` | `map[string]any` |  |
| `selected_repositories_url` | `string` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `[]any` | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `[]any` | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `string` | Git commit SHA of the exported branch |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `start_url` | `string` | API URL to start this codespace. |
| `state` | `string` | State of the latest export |
| `statuses_url` | `string` |  |
| `stop_url` | `string` | API URL to stop this codespace. |
| `storage_in_bytes` | `int` | How much storage is available to the codespace. |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template` | `string` |  |
| `title` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | API URL for this codespace. |
| `visibility` | `string` | The type of repositories in the organization that the secret is visible to |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |
| `web_url` | `string` | URL to access this codespace on the web. |
| `working_directory` | `string` | Working directory for this codespace |

#### Example: Load

```go
codespace, err := client.Codespace(nil).Load(map[string]any{"id": "codespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(codespace) // the loaded record
```

#### Example: List

```go
codespaces, err := client.Codespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(codespaces) // the array of records
```

#### Example: Create

```go
result, err := client.Codespace(nil).Create(map[string]any{
    "accepted": true,
    "archive_url": "example_archive_url",
    "assignees_url": "example_assignees_url",
    "billable_owner": map[string]any{},
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "cpus": 1,
    "created_at": "example_created_at",
    "defaults": map[string]any{},
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "downloads_url": "example_downloads_url",
    "environment_id": "example_environment_id",
    "events_url": "example_events_url",
    "fork": true,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_status": map[string]any{},
    "git_tags_url": "example_git_tags_url",
    "hooks_url": "example_hooks_url",
    "idle_timeout_minutes": 1,
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "key": "example_key",
    "key_id": "example_key_id",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "languages_url": "example_languages_url",
    "last_used_at": "example_last_used_at",
    "location": "example_location",
    "machine": map[string]any{},
    "machines_url": "example_machines_url",
    "memory_in_bytes": 1,
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "name": "example_name",
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "operating_system": "example_operating_system",
    "owner": map[string]any{},
    "path": "example_path",
    "prebuild": true,
    "prebuild_availability": "example_prebuild_availability",
    "pulls_url": "example_pulls_url",
    "recent_folders": []any{},
    "releases_url": "example_releases_url",
    "repository": map[string]any{},
    "selected_usernames": []any{},
    "stargazers_url": "example_stargazers_url",
    "start_url": "example_start_url",
    "statuses_url": "example_statuses_url",
    "stop_url": "example_stop_url",
    "storage_in_bytes": 1,
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "trees_url": "example_trees_url",
    "updated_at": "example_updated_at",
    "visibility": "example_visibility",
    "web_url": "example_web_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Collaborator

Create an instance: `collaborator := client.Collaborator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `permissions` | `map[string]any` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `role_name` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
collaborators, err := client.Collaborator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(collaborators) // the array of records
```


### CombinedBillingUsage

Create an instance: `combinedBillingUsage := client.CombinedBillingUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_left_in_billing_cycle` | `int` | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `int` | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `int` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

#### Example: Load

```go
combinedBillingUsage, err := client.CombinedBillingUsage(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(combinedBillingUsage) // the loaded record
```


### CombinedCommitStatus

Create an instance: `combinedCommitStatus := client.CombinedCommitStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `context` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `node_id` | `string` |  |
| `required` | `bool` |  |
| `state` | `string` |  |
| `target_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
combinedCommitStatuss, err := client.CombinedCommitStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(combinedCommitStatuss) // the array of records
```


### Commit

Create an instance: `commit := client.Commit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `base` | `string` | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` |  |
| `commit` | `map[string]any` |  |
| `commit_message` | `string` | Commit message to use for the merge commit. |
| `committer` | `any` |  |
| `files` | `[]any` |  |
| `head` | `string` | The head to merge. |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `parents` | `[]any` |  |
| `sha` | `string` |  |
| `stats` | `map[string]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
commit, err := client.Commit(nil).Load(map[string]any{"id": "commit_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(commit) // the loaded record
```

#### Example: List

```go
commits, err := client.Commit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(commits) // the array of records
```

#### Example: Create

```go
result, err := client.Commit(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "author": "example_author",
    "base": "example_base",
    "comments_url": "example_comments_url",
    "commit": map[string]any{},
    "committer": "example_committer",
    "head": "example_head",
    "html_url": "example_html_url",
    "node_id": "example_node_id",
    "parents": []any{},
    "sha": "example_sha",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CommitActivity

Create an instance: `commitActivity := client.CommitActivity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `[]any` |  |
| `total` | `int` |  |
| `week` | `int` |  |

#### Example: List

```go
commitActivitys, err := client.CommitActivity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(commitActivitys) // the array of records
```


### CommitComment

Create an instance: `commitComment := client.CommitComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `body` | `string` | The contents of the comment. |
| `commit_id` | `string` |  |
| `created_at` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `line` | `int` | **Closing down notice**. |
| `node_id` | `string` |  |
| `path` | `string` | Relative path of the file to comment on. |
| `position` | `int` | Line index in the diff to comment on. |
| `reactions` | `map[string]any` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Load

```go
commitComment, err := client.CommitComment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(commitComment) // the loaded record
```

#### Example: List

```go
commitComments, err := client.CommitComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(commitComments) // the array of records
```

#### Example: Create

```go
result, err := client.CommitComment(nil).Create(map[string]any{
    "commit_sha": "example_commit_sha",
    "owner": "example_owner",
    "repo": "example_repo",
    "author_association": "example_author_association",
    "body": "example_body",
    "commit_id": "example_commit_id",
    "created_at": "example_created_at",
    "html_url": "example_html_url",
    "id": 1,
    "line": 1,
    "node_id": "example_node_id",
    "path": "example_path",
    "position": 1,
    "reactions": map[string]any{},
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CommitComparison

Create an instance: `commitComparison := client.CommitComparison(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ahead_by` | `int` |  |
| `base_commit` | `map[string]any` | Commit |
| `behind_by` | `int` |  |
| `commits` | `[]any` |  |
| `diff_url` | `string` |  |
| `files` | `[]any` |  |
| `html_url` | `string` |  |
| `merge_base_commit` | `map[string]any` | Commit |
| `patch_url` | `string` |  |
| `permalink_url` | `string` |  |
| `status` | `string` |  |
| `total_commits` | `int` |  |
| `url` | `string` |  |

#### Example: Load

```go
commitComparison, err := client.CommitComparison(nil).Load(map[string]any{"basehead": "basehead", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(commitComparison) // the loaded record
```


### CommunityProfile

Create an instance: `communityProfile := client.CommunityProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code_of_conduct` | `map[string]any` | Code of Conduct Simple |
| `code_of_conduct_file` | `map[string]any` |  |
| `contributing` | `map[string]any` |  |
| `issue_template` | `map[string]any` |  |
| `license` | `map[string]any` | License Simple |
| `pull_request_template` | `map[string]any` |  |
| `readme` | `map[string]any` |  |

#### Example: Load

```go
communityProfile, err := client.CommunityProfile(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(communityProfile) // the loaded record
```


### ContentFile

Create an instance: `contentFile := client.ContentFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `git` | `string` |  |
| `html` | `string` |  |
| `self` | `string` |  |

#### Example: Load

```go
contentFile, err := client.ContentFile(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentFile) // the loaded record
```


### ContentTraffic

Create an instance: `contentTraffic := client.ContentTraffic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `path` | `string` |  |
| `title` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```go
contentTraffics, err := client.ContentTraffic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contentTraffics) // the array of records
```


### Contributor

Create an instance: `contributor := client.Contributor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` | A GitHub user. |
| `avatar_url` | `string` |  |
| `contributions` | `int` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `total` | `int` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |
| `weeks` | `[]any` |  |

#### Example: List

```go
contributors, err := client.Contributor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributors) // the array of records
```


### Copilot

Create an instance: `copilot := client.Copilot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` | A GitHub user. |
| `assigning_team` | `any` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `map[string]any` | A GitHub organization. |
| `pending_cancellation_date` | `string` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `[]any` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `[]any` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | **Closing down notice:** This field is no longer relevant and is closing down. |

#### Example: Load

```go
copilot, err := client.Copilot(nil).Load(map[string]any{"org_id": "org_id", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(copilot) // the loaded record
```

#### Example: List

```go
copilots, err := client.Copilot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(copilots) // the array of records
```

#### Example: Create

```go
result, err := client.Copilot(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "assignee": map[string]any{},
    "created_at": "example_created_at",
    "organization": map[string]any{},
    "selected_teams": []any{},
    "selected_usernames": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CopilotOrganizationDetail

Create an instance: `copilotOrganizationDetail := client.CopilotOrganizationDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_this_cycle` | `int` | The number of seats that have used Copilot during the current billing cycle. |
| `added_this_cycle` | `int` | Seats added during the current billing cycle. |
| `inactive_this_cycle` | `int` | The number of seats that have not used Copilot during the current billing cycle. |
| `pending_cancellation` | `int` | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `pending_invitation` | `int` | The number of users who have been invited to receive a Copilot seat through this organization. |
| `total` | `int` | The total number of seats being billed for the organization as of the current billing cycle. |

#### Example: Load

```go
copilotOrganizationDetail, err := client.CopilotOrganizationDetail(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(copilotOrganizationDetail) // the loaded record
```


### CopilotUsageMetricsDay

Create an instance: `copilotUsageMetricsDay := client.CopilotUsageMetricsDay(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copilot_dotcom_chat` | `map[string]any` | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `map[string]any` | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `map[string]any` | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `map[string]any` | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

#### Example: List

```go
copilotUsageMetricsDays, err := client.CopilotUsageMetricsDay(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(copilotUsageMetricsDays) // the array of records
```


### Credential

Create an instance: `credential := client.Credential(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `[]any` | A list of credentials to be revoked, up to 1000 per request. |

#### Example: Create

```go
result, err := client.Credential(nil).Create(map[string]any{
    "credentials": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomProperty

Create an instance: `customProperty := client.CustomProperty(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_values` | `[]any` | An ordered list of the allowed values of the property. |
| `default_value` | `any` | Default value of the property |
| `description` | `string` | Short description of the property |
| `properties` | `[]any` | The array of custom properties to create or update. |
| `property_name` | `string` | The name of the property |
| `required` | `bool` | Whether the property is required. |
| `source_type` | `string` | The source type of the property |
| `url` | `string` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | The type of the value for the property |
| `values_editable_by` | `string` | Who can edit the values of the property |

#### Example: Load

```go
customProperty, err := client.CustomProperty(nil).Load(map[string]any{"custom_property_name": "custom_property_name", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customProperty) // the loaded record
```

#### Example: List

```go
customPropertys, err := client.CustomProperty(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPropertys) // the array of records
```


### CustomPropertyValue

Create an instance: `customPropertyValue := client.CustomPropertyValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `property_name` | `string` | The name of the property |
| `value` | `any` | The value assigned to the property |

#### Example: List

```go
customPropertyValues, err := client.CustomPropertyValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPropertyValues) // the array of records
```


### Dependabot

Create an instance: `dependabot := client.Dependabot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignees_url` | `string` |  |
| `avatar_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `default_level` | `string` | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` |  |
| `login` | `string` |  |
| `members_url` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the secret. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` |  |
| `public_members_url` | `string` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository_ids_to_add` | `[]any` | List of repository IDs to add. |
| `repository_ids_to_remove` | `[]any` | List of repository IDs to remove. |
| `role_name` | `string` |  |
| `security_and_analysis` | `map[string]any` |  |
| `selected_repositories_url` | `string` |  |
| `selected_repository_ids` | `[]any` | An array of repository ids that can access the organization secret. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` | Visibility of a secret |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```go
dependabots, err := client.Dependabot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabots) // the array of records
```


### DependabotAlert

Create an instance: `dependabotAlert := client.DependabotAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `string` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `map[string]any` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `number` | `int` | The security alert number. |
| `security_advisory` | `map[string]any` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `map[string]any` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```go
dependabotAlert, err := client.DependabotAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotAlert) // the loaded record
```

#### Example: List

```go
dependabotAlerts, err := client.DependabotAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotAlerts) // the array of records
```


### DependabotAlertWithRepository

Create an instance: `dependabotAlertWithRepository := client.DependabotAlertWithRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `string` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `map[string]any` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `number` | `int` | The security alert number. |
| `repository` | `map[string]any` | A GitHub repository. |
| `security_advisory` | `map[string]any` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `map[string]any` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```go
dependabotAlertWithRepositorys, err := client.DependabotAlertWithRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotAlertWithRepositorys) // the array of records
```


### DependabotPublicKey

Create an instance: `dependabotPublicKey := client.DependabotPublicKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |

#### Example: Load

```go
dependabotPublicKey, err := client.DependabotPublicKey(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotPublicKey) // the loaded record
```


### DependabotRepositoryAccessDetail

Create an instance: `dependabotRepositoryAccessDetail := client.DependabotRepositoryAccessDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archive_url` | `string` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `string` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `string` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `string` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `string` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `string` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `string` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `string` | A template for the API URL to compare two commits or refs. |
| `contents_url` | `string` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `string` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `string` | The API URL to list the deployments of the repository. |
| `description` | `string` | The repository description. |
| `downloads_url` | `string` | The API URL to list the downloads on the repository. |
| `events_url` | `string` | The API URL to list the events of the repository. |
| `fork` | `bool` | Whether the repository is a fork. |
| `forks_url` | `string` | The API URL to list the forks of the repository. |
| `full_name` | `string` | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `string` | The API URL to list the hooks on the repository. |
| `html_url` | `string` | The URL to view the repository on GitHub.com. |
| `id` | `int` | A unique identifier of the repository. |
| `issue_comment_url` | `string` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `string` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `string` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `string` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `string` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `string` | The API URL to get information about the languages of the repository. |
| `merges_url` | `string` | The API URL to merge branches in the repository. |
| `milestones_url` | `string` | A template for the API URL to get information about milestones of the repository. |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` | The GraphQL identifier of the repository. |
| `notifications_url` | `string` | A template for the API URL to get information about notifications on the repository. |
| `owner` | `map[string]any` | A GitHub user. |
| `private` | `bool` | Whether the repository is private. |
| `pulls_url` | `string` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `string` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `string` | The API URL to list the stargazers on the repository. |
| `statuses_url` | `string` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `string` | The API URL to list the subscribers on the repository. |
| `subscription_url` | `string` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `string` | The API URL to get information about tags on the repository. |
| `teams_url` | `string` | The API URL to list the teams on the repository. |
| `trees_url` | `string` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `string` | The URL to get more information about the repository from the GitHub API. |

#### Example: List

```go
dependabotRepositoryAccessDetails, err := client.DependabotRepositoryAccessDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotRepositoryAccessDetails) // the array of records
```


### DependabotSecret

Create an instance: `dependabotSecret := client.DependabotSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `updated_at` | `string` |  |

#### Example: Load

```go
dependabotSecret, err := client.DependabotSecret(nil).Load(map[string]any{"id": "dependabot_secret_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependabotSecret) // the loaded record
```


### DependencyGraph

Create an instance: `dependencyGraph := client.DependencyGraph(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detector` | `map[string]any` | A description of the detector used. |
| `job` | `map[string]any` |  |
| `manifests` | `map[string]any` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `map[string]any` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | The repository branch that triggered this snapshot. |
| `scanned` | `string` | The time at which the snapshot was scanned. |
| `sha` | `string` | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | The version of the repository snapshot submission. |

#### Example: Create

```go
result, err := client.DependencyGraph(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "detector": map[string]any{},
    "job": map[string]any{},
    "ref": "example_ref",
    "scanned": "example_scanned",
    "sha": "example_sha",
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DependencyGraphDiff

Create an instance: `dependencyGraphDiff := client.DependencyGraphDiff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_type` | `string` |  |
| `ecosystem` | `string` |  |
| `license` | `string` |  |
| `manifest` | `string` |  |
| `name` | `string` |  |
| `package_url` | `string` |  |
| `scope` | `string` | Where the dependency is utilized. |
| `source_repository_url` | `string` |  |
| `version` | `string` |  |
| `vulnerabilities` | `[]any` |  |

#### Example: Load

```go
dependencyGraphDiff, err := client.DependencyGraphDiff(nil).Load(map[string]any{"basehead": "basehead", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependencyGraphDiff) // the loaded record
```


### DependencyGraphSpdxSbom

Create an instance: `dependencyGraphSpdxSbom := client.DependencyGraphSpdxSbom(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `SPDXID` | `string` | The SPDX identifier for the SPDX document. |
| `comment` | `string` | An optional comment about the SPDX document. |
| `creationInfo` | `map[string]any` |  |
| `dataLicense` | `string` | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | The namespace for the SPDX document. |
| `name` | `string` | The name of the SPDX document. |
| `packages` | `[]any` |  |
| `relationships` | `[]any` |  |
| `spdxVersion` | `string` | The version of the SPDX specification that this document conforms to. |

#### Example: Load

```go
dependencyGraphSpdxSbom, err := client.DependencyGraphSpdxSbom(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependencyGraphSpdxSbom) // the loaded record
```


### DeployKey

Create an instance: `deployKey := client.DeployKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_by` | `string` |  |
| `created_at` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `int` |  |
| `key` | `string` | The contents of the key. |
| `last_used` | `string` |  |
| `read_only` | `bool` | If `true`, the key will only be able to read repository contents. |
| `title` | `string` | A name for the key. |
| `url` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```go
deployKey, err := client.DeployKey(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployKey) // the loaded record
```

#### Example: List

```go
deployKeys, err := client.DeployKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployKeys) // the array of records
```

#### Example: Create

```go
result, err := client.DeployKey(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "created_at": "example_created_at",
    "id": 1,
    "key": "example_key",
    "read_only": true,
    "title": "example_title",
    "url": "example_url",
    "verified": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Deployment

Create an instance: `deployment := client.Deployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_merge` | `bool` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | A comment to accompany the deployment review |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `description` | `string` | Short description of the deployment. |
| `environment` | `string` | Name for the target deployment environment. |
| `environment_ids` | `[]any` | The list of environment ids to approve or reject |
| `id` | `int` | Unique identifier of the deployment |
| `node_id` | `string` |  |
| `original_environment` | `string` |  |
| `payload` | `any` |  |
| `performed_via_github_app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | The ref to deploy. |
| `repository_url` | `string` |  |
| `required_contexts` | `[]any` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `string` |  |
| `state` | `string` | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `string` |  |
| `task` | `string` | Parameter to specify a task to execute |
| `transient_environment` | `bool` | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
deployment, err := client.Deployment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployment) // the loaded record
```

#### Example: List

```go
deployments, err := client.Deployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deployments) // the array of records
```

#### Example: Create

```go
result, err := client.Deployment(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "comment": "example_comment",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "description": "example_description",
    "environment": "example_environment",
    "environment_ids": []any{},
    "id": 1,
    "node_id": "example_node_id",
    "payload": "example_payload",
    "performed_via_github_app": map[string]any{},
    "ref": "example_ref",
    "repository_url": "example_repository_url",
    "sha": "example_sha",
    "state": "example_state",
    "statuses_url": "example_statuses_url",
    "task": "example_task",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DeploymentBranchPolicy

Create an instance: `deploymentBranchPolicy := client.DeploymentBranchPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The unique identifier of the branch or tag policy. |
| `name` | `string` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `string` |  |
| `type` | `string` | Whether this rule targets a branch or tag. |

#### Example: Load

```go
deploymentBranchPolicy, err := client.DeploymentBranchPolicy(nil).Load(map[string]any{"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentBranchPolicy) // the loaded record
```

#### Example: Create

```go
result, err := client.DeploymentBranchPolicy(nil).Create(map[string]any{
    "environment_name": "example_environment_name",
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DeploymentProtectionRule

Create an instance: `deploymentProtectionRule := client.DeploymentProtectionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `int` | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `string` | The URL for the endpoint to get details about the app. |
| `node_id` | `string` | The node ID for the deployment protection rule integration. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |

#### Example: Load

```go
deploymentProtectionRule, err := client.DeploymentProtectionRule(nil).Load(map[string]any{"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentProtectionRule) // the loaded record
```

#### Example: Create

```go
result, err := client.DeploymentProtectionRule(nil).Create(map[string]any{
    "environment_name": "example_environment_name",
    "owner": "example_owner",
    "repo": "example_repo",
    "id": 1,
    "integration_url": "example_integration_url",
    "node_id": "example_node_id",
    "slug": "example_slug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DeploymentStatus

Create an instance: `deploymentStatus := client.DeploymentStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_inactive` | `bool` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `deployment_url` | `string` |  |
| `description` | `string` | A short description of the status. |
| `environment` | `string` | The environment of the deployment that the status is for. |
| `environment_url` | `string` | The URL for accessing your environment. |
| `id` | `int` |  |
| `log_url` | `string` | The URL to associate with this status. |
| `node_id` | `string` |  |
| `performed_via_github_app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | Closing down notice: the URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
deploymentStatus, err := client.DeploymentStatus(nil).Load(map[string]any{"id": 1, "deployment_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentStatus) // the loaded record
```

#### Example: List

```go
deploymentStatuss, err := client.DeploymentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(deploymentStatuss) // the array of records
```

#### Example: Create

```go
result, err := client.DeploymentStatus(nil).Create(map[string]any{
    "id": 1,
    "owner": "example_owner",
    "repo": "example_repo",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "deployment_url": "example_deployment_url",
    "description": "example_description",
    "node_id": "example_node_id",
    "performed_via_github_app": map[string]any{},
    "repository_url": "example_repository_url",
    "state": "example_state",
    "target_url": "example_target_url",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DiffEntry

Create an instance: `diffEntry := client.DiffEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `int` |  |
| `blob_url` | `string` |  |
| `changes` | `int` |  |
| `contents_url` | `string` |  |
| `deletions` | `int` |  |
| `filename` | `string` |  |
| `patch` | `string` |  |
| `previous_filename` | `string` |  |
| `raw_url` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |

#### Example: List

```go
diffEntrys, err := client.DiffEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(diffEntrys) // the array of records
```


### Email

Create an instance: `email := client.Email(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `primary` | `bool` |  |
| `verified` | `bool` |  |
| `visibility` | `string` | Denotes whether an email is publicly visible. |

#### Example: List

```go
emails, err := client.Email(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emails) // the array of records
```

#### Example: Create

```go
result, err := client.Email(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Emoji

Create an instance: `emoji := client.Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `1` | `string` |  |
| `100` | `string` |  |
| `1234` | `string` |  |
| `1st_place_medal` | `string` |  |
| `2nd_place_medal` | `string` |  |
| `3rd_place_medal` | `string` |  |
| `8ball` | `string` |  |
| `a` | `string` |  |
| `ab` | `string` |  |
| `abacus` | `string` |  |
| `abc` | `string` |  |
| `abcd` | `string` |  |
| `accept` | `string` |  |
| `accessibility` | `string` |  |
| `accordion` | `string` |  |
| `adhesive_bandage` | `string` |  |
| `adult` | `string` |  |
| `aerial_tramway` | `string` |  |
| `afghanistan` | `string` |  |
| `airplane` | `string` |  |
| `aland_islands` | `string` |  |
| `alarm_clock` | `string` |  |
| `albania` | `string` |  |
| `alembic` | `string` |  |
| `algeria` | `string` |  |
| `alien` | `string` |  |
| `ambulance` | `string` |  |
| `american_samoa` | `string` |  |
| `amphora` | `string` |  |
| `anatomical_heart` | `string` |  |
| `anchor` | `string` |  |
| `andorra` | `string` |  |
| `angel` | `string` |  |
| `anger` | `string` |  |
| `angola` | `string` |  |
| `angry` | `string` |  |
| `anguilla` | `string` |  |
| `anguished` | `string` |  |
| `ant` | `string` |  |
| `antarctica` | `string` |  |
| `antigua_barbuda` | `string` |  |
| `apple` | `string` |  |
| `aquarius` | `string` |  |
| `argentina` | `string` |  |
| `aries` | `string` |  |
| `armenia` | `string` |  |
| `arrow_backward` | `string` |  |
| `arrow_double_down` | `string` |  |
| `arrow_double_up` | `string` |  |
| `arrow_down` | `string` |  |
| `arrow_down_small` | `string` |  |
| `arrow_forward` | `string` |  |
| `arrow_heading_down` | `string` |  |
| `arrow_heading_up` | `string` |  |
| `arrow_left` | `string` |  |
| `arrow_lower_left` | `string` |  |
| `arrow_lower_right` | `string` |  |
| `arrow_right` | `string` |  |
| `arrow_right_hook` | `string` |  |
| `arrow_up` | `string` |  |
| `arrow_up_down` | `string` |  |
| `arrow_up_small` | `string` |  |
| `arrow_upper_left` | `string` |  |
| `arrow_upper_right` | `string` |  |
| `arrows_clockwise` | `string` |  |
| `arrows_counterclockwise` | `string` |  |
| `art` | `string` |  |
| `articulated_lorry` | `string` |  |
| `artificial_satellite` | `string` |  |
| `artist` | `string` |  |
| `aruba` | `string` |  |
| `ascension_island` | `string` |  |
| `asterisk` | `string` |  |
| `astonished` | `string` |  |
| `astronaut` | `string` |  |
| `athletic_shoe` | `string` |  |
| `atm` | `string` |  |
| `atom` | `string` |  |
| `atom_symbol` | `string` |  |
| `australia` | `string` |  |
| `austria` | `string` |  |
| `auto_rickshaw` | `string` |  |
| `avocado` | `string` |  |
| `axe` | `string` |  |
| `azerbaijan` | `string` |  |
| `b` | `string` |  |
| `baby` | `string` |  |
| `baby_bottle` | `string` |  |
| `baby_chick` | `string` |  |
| `baby_symbol` | `string` |  |
| `back` | `string` |  |
| `bacon` | `string` |  |
| `badger` | `string` |  |
| `badminton` | `string` |  |
| `bagel` | `string` |  |
| `baggage_claim` | `string` |  |
| `baguette_bread` | `string` |  |
| `bahamas` | `string` |  |
| `bahrain` | `string` |  |
| `balance_scale` | `string` |  |
| `bald_man` | `string` |  |
| `bald_woman` | `string` |  |
| `ballet_shoes` | `string` |  |
| `balloon` | `string` |  |
| `ballot_box` | `string` |  |
| `ballot_box_with_check` | `string` |  |
| `bamboo` | `string` |  |
| `banana` | `string` |  |
| `bangbang` | `string` |  |
| `bangladesh` | `string` |  |
| `banjo` | `string` |  |
| `bank` | `string` |  |
| `bar_chart` | `string` |  |
| `barbados` | `string` |  |
| `barber` | `string` |  |
| `baseball` | `string` |  |
| `basecamp` | `string` |  |
| `basecampy` | `string` |  |
| `basket` | `string` |  |
| `basketball` | `string` |  |
| `basketball_man` | `string` |  |
| `basketball_woman` | `string` |  |
| `bat` | `string` |  |
| `bath` | `string` |  |
| `bathtub` | `string` |  |
| `battery` | `string` |  |
| `beach_umbrella` | `string` |  |
| `bear` | `string` |  |
| `bearded_person` | `string` |  |
| `beaver` | `string` |  |
| `bed` | `string` |  |
| `bee` | `string` |  |
| `beer` | `string` |  |
| `beers` | `string` |  |
| `beetle` | `string` |  |
| `beginner` | `string` |  |
| `belarus` | `string` |  |
| `belgium` | `string` |  |
| `belize` | `string` |  |
| `bell` | `string` |  |
| `bell_pepper` | `string` |  |
| `bellhop_bell` | `string` |  |
| `benin` | `string` |  |
| `bento` | `string` |  |
| `bermuda` | `string` |  |
| `beverage_box` | `string` |  |
| `bhutan` | `string` |  |
| `bicyclist` | `string` |  |
| `bike` | `string` |  |
| `biking_man` | `string` |  |
| `biking_woman` | `string` |  |
| `bikini` | `string` |  |
| `billed_cap` | `string` |  |
| `biohazard` | `string` |  |
| `bird` | `string` |  |
| `birthday` | `string` |  |
| `bison` | `string` |  |
| `black_cat` | `string` |  |
| `black_circle` | `string` |  |
| `black_flag` | `string` |  |
| `black_heart` | `string` |  |
| `black_joker` | `string` |  |
| `black_large_square` | `string` |  |
| `black_medium_small_square` | `string` |  |
| `black_medium_square` | `string` |  |
| `black_nib` | `string` |  |
| `black_small_square` | `string` |  |
| `black_square_button` | `string` |  |
| `blond_haired_man` | `string` |  |
| `blond_haired_person` | `string` |  |
| `blond_haired_woman` | `string` |  |
| `blonde_woman` | `string` |  |
| `blossom` | `string` |  |
| `blowfish` | `string` |  |
| `blue_book` | `string` |  |
| `blue_car` | `string` |  |
| `blue_heart` | `string` |  |
| `blue_square` | `string` |  |
| `blueberries` | `string` |  |
| `blush` | `string` |  |
| `boar` | `string` |  |
| `boat` | `string` |  |
| `bolivia` | `string` |  |
| `bomb` | `string` |  |
| `bone` | `string` |  |
| `book` | `string` |  |
| `bookmark` | `string` |  |
| `bookmark_tabs` | `string` |  |
| `books` | `string` |  |
| `boom` | `string` |  |
| `boomerang` | `string` |  |
| `boot` | `string` |  |
| `bosnia_herzegovina` | `string` |  |
| `botswana` | `string` |  |
| `bouncing_ball_man` | `string` |  |
| `bouncing_ball_person` | `string` |  |
| `bouncing_ball_woman` | `string` |  |
| `bouquet` | `string` |  |
| `bouvet_island` | `string` |  |
| `bow` | `string` |  |
| `bow_and_arrow` | `string` |  |
| `bowing_man` | `string` |  |
| `bowing_woman` | `string` |  |
| `bowl_with_spoon` | `string` |  |
| `bowling` | `string` |  |
| `bowtie` | `string` |  |
| `boxing_glove` | `string` |  |
| `boy` | `string` |  |
| `brain` | `string` |  |
| `brazil` | `string` |  |
| `bread` | `string` |  |
| `breast_feeding` | `string` |  |
| `bricks` | `string` |  |
| `bride_with_veil` | `string` |  |
| `bridge_at_night` | `string` |  |
| `briefcase` | `string` |  |
| `british_indian_ocean_territory` | `string` |  |
| `british_virgin_islands` | `string` |  |
| `broccoli` | `string` |  |
| `broken_heart` | `string` |  |
| `broom` | `string` |  |
| `brown_circle` | `string` |  |
| `brown_heart` | `string` |  |
| `brown_square` | `string` |  |
| `brunei` | `string` |  |
| `bubble_tea` | `string` |  |
| `bucket` | `string` |  |
| `bug` | `string` |  |
| `building_construction` | `string` |  |
| `bulb` | `string` |  |
| `bulgaria` | `string` |  |
| `bullettrain_front` | `string` |  |
| `bullettrain_side` | `string` |  |
| `burkina_faso` | `string` |  |
| `burrito` | `string` |  |
| `burundi` | `string` |  |
| `bus` | `string` |  |
| `business_suit_levitating` | `string` |  |
| `busstop` | `string` |  |
| `bust_in_silhouette` | `string` |  |
| `busts_in_silhouette` | `string` |  |
| `butter` | `string` |  |
| `butterfly` | `string` |  |
| `cactus` | `string` |  |
| `cake` | `string` |  |
| `calendar` | `string` |  |
| `call_me_hand` | `string` |  |
| `calling` | `string` |  |
| `cambodia` | `string` |  |
| `camel` | `string` |  |
| `camera` | `string` |  |
| `camera_flash` | `string` |  |
| `cameroon` | `string` |  |
| `camping` | `string` |  |
| `canada` | `string` |  |
| `canary_islands` | `string` |  |
| `cancer` | `string` |  |
| `candle` | `string` |  |
| `candy` | `string` |  |
| `canned_food` | `string` |  |
| `canoe` | `string` |  |
| `cape_verde` | `string` |  |
| `capital_abcd` | `string` |  |
| `capricorn` | `string` |  |
| `car` | `string` |  |
| `card_file_box` | `string` |  |
| `card_index` | `string` |  |
| `card_index_dividers` | `string` |  |
| `caribbean_netherlands` | `string` |  |
| `carousel_horse` | `string` |  |
| `carpentry_saw` | `string` |  |
| `carrot` | `string` |  |
| `cartwheeling` | `string` |  |
| `cat` | `string` |  |
| `cat2` | `string` |  |
| `cayman_islands` | `string` |  |
| `cd` | `string` |  |
| `central_african_republic` | `string` |  |
| `ceuta_melilla` | `string` |  |
| `chad` | `string` |  |
| `chains` | `string` |  |
| `chair` | `string` |  |
| `champagne` | `string` |  |
| `chart` | `string` |  |
| `chart_with_downwards_trend` | `string` |  |
| `chart_with_upwards_trend` | `string` |  |
| `checkered_flag` | `string` |  |
| `cheese` | `string` |  |
| `cherries` | `string` |  |
| `cherry_blossom` | `string` |  |
| `chess_pawn` | `string` |  |
| `chestnut` | `string` |  |
| `chicken` | `string` |  |
| `child` | `string` |  |
| `children_crossing` | `string` |  |
| `chile` | `string` |  |
| `chipmunk` | `string` |  |
| `chocolate_bar` | `string` |  |
| `chopsticks` | `string` |  |
| `christmas_island` | `string` |  |
| `christmas_tree` | `string` |  |
| `church` | `string` |  |
| `cinema` | `string` |  |
| `circus_tent` | `string` |  |
| `city_sunrise` | `string` |  |
| `city_sunset` | `string` |  |
| `cityscape` | `string` |  |
| `cl` | `string` |  |
| `clamp` | `string` |  |
| `clap` | `string` |  |
| `clapper` | `string` |  |
| `classical_building` | `string` |  |
| `climbing` | `string` |  |
| `climbing_man` | `string` |  |
| `climbing_woman` | `string` |  |
| `clinking_glasses` | `string` |  |
| `clipboard` | `string` |  |
| `clipperton_island` | `string` |  |
| `clock1` | `string` |  |
| `clock10` | `string` |  |
| `clock1030` | `string` |  |
| `clock11` | `string` |  |
| `clock1130` | `string` |  |
| `clock12` | `string` |  |
| `clock1230` | `string` |  |
| `clock130` | `string` |  |
| `clock2` | `string` |  |
| `clock230` | `string` |  |
| `clock3` | `string` |  |
| `clock330` | `string` |  |
| `clock4` | `string` |  |
| `clock430` | `string` |  |
| `clock5` | `string` |  |
| `clock530` | `string` |  |
| `clock6` | `string` |  |
| `clock630` | `string` |  |
| `clock7` | `string` |  |
| `clock730` | `string` |  |
| `clock8` | `string` |  |
| `clock830` | `string` |  |
| `clock9` | `string` |  |
| `clock930` | `string` |  |
| `closed_book` | `string` |  |
| `closed_lock_with_key` | `string` |  |
| `closed_umbrella` | `string` |  |
| `cloud` | `string` |  |
| `cloud_with_lightning` | `string` |  |
| `cloud_with_lightning_and_rain` | `string` |  |
| `cloud_with_rain` | `string` |  |
| `cloud_with_snow` | `string` |  |
| `clown_face` | `string` |  |
| `clubs` | `string` |  |
| `cn` | `string` |  |
| `coat` | `string` |  |
| `cockroach` | `string` |  |
| `cocktail` | `string` |  |
| `coconut` | `string` |  |
| `cocos_islands` | `string` |  |
| `coffee` | `string` |  |
| `coffin` | `string` |  |
| `coin` | `string` |  |
| `cold_face` | `string` |  |
| `cold_sweat` | `string` |  |
| `collision` | `string` |  |
| `colombia` | `string` |  |
| `comet` | `string` |  |
| `comoros` | `string` |  |
| `compass` | `string` |  |
| `computer` | `string` |  |
| `computer_mouse` | `string` |  |
| `confetti_ball` | `string` |  |
| `confounded` | `string` |  |
| `confused` | `string` |  |
| `congo_brazzaville` | `string` |  |
| `congo_kinshasa` | `string` |  |
| `congratulations` | `string` |  |
| `construction` | `string` |  |
| `construction_worker` | `string` |  |
| `construction_worker_man` | `string` |  |
| `construction_worker_woman` | `string` |  |
| `control_knobs` | `string` |  |
| `convenience_store` | `string` |  |
| `cook` | `string` |  |
| `cook_islands` | `string` |  |
| `cookie` | `string` |  |
| `cool` | `string` |  |
| `cop` | `string` |  |
| `copilot` | `string` |  |
| `copyright` | `string` |  |
| `corn` | `string` |  |
| `costa_rica` | `string` |  |
| `cote_divoire` | `string` |  |
| `couch_and_lamp` | `string` |  |
| `couple` | `string` |  |
| `couple_with_heart` | `string` |  |
| `couple_with_heart_man_man` | `string` |  |
| `couple_with_heart_woman_man` | `string` |  |
| `couple_with_heart_woman_woman` | `string` |  |
| `couplekiss` | `string` |  |
| `couplekiss_man_man` | `string` |  |
| `couplekiss_man_woman` | `string` |  |
| `couplekiss_woman_woman` | `string` |  |
| `cow` | `string` |  |
| `cow2` | `string` |  |
| `cowboy_hat_face` | `string` |  |
| `crab` | `string` |  |
| `crayon` | `string` |  |
| `credit_card` | `string` |  |
| `crescent_moon` | `string` |  |
| `cricket` | `string` |  |
| `cricket_game` | `string` |  |
| `croatia` | `string` |  |
| `crocodile` | `string` |  |
| `croissant` | `string` |  |
| `crossed_fingers` | `string` |  |
| `crossed_flags` | `string` |  |
| `crossed_swords` | `string` |  |
| `crown` | `string` |  |
| `cry` | `string` |  |
| `crying_cat_face` | `string` |  |
| `crystal_ball` | `string` |  |
| `cuba` | `string` |  |
| `cucumber` | `string` |  |
| `cup_with_straw` | `string` |  |
| `cupcake` | `string` |  |
| `cupid` | `string` |  |
| `curacao` | `string` |  |
| `curling_stone` | `string` |  |
| `curly_haired_man` | `string` |  |
| `curly_haired_woman` | `string` |  |
| `curly_loop` | `string` |  |
| `currency_exchange` | `string` |  |
| `curry` | `string` |  |
| `cursing_face` | `string` |  |
| `custard` | `string` |  |
| `customs` | `string` |  |
| `cut_of_meat` | `string` |  |
| `cyclone` | `string` |  |
| `cyprus` | `string` |  |
| `czech_republic` | `string` |  |
| `dagger` | `string` |  |
| `dancer` | `string` |  |
| `dancers` | `string` |  |
| `dancing_men` | `string` |  |
| `dancing_women` | `string` |  |
| `dango` | `string` |  |
| `dark_sunglasses` | `string` |  |
| `dart` | `string` |  |
| `dash` | `string` |  |
| `date` | `string` |  |
| `de` | `string` |  |
| `deaf_man` | `string` |  |
| `deaf_person` | `string` |  |
| `deaf_woman` | `string` |  |
| `deciduous_tree` | `string` |  |
| `deer` | `string` |  |
| `denmark` | `string` |  |
| `department_store` | `string` |  |
| `dependabot` | `string` |  |
| `derelict_house` | `string` |  |
| `desert` | `string` |  |
| `desert_island` | `string` |  |
| `desktop_computer` | `string` |  |
| `detective` | `string` |  |
| `diamond_shape_with_a_dot_inside` | `string` |  |
| `diamonds` | `string` |  |
| `diego_garcia` | `string` |  |
| `disappointed` | `string` |  |
| `disappointed_relieved` | `string` |  |
| `disguised_face` | `string` |  |
| `diving_mask` | `string` |  |
| `diya_lamp` | `string` |  |
| `dizzy` | `string` |  |
| `dizzy_face` | `string` |  |
| `djibouti` | `string` |  |
| `dna` | `string` |  |
| `do_not_litter` | `string` |  |
| `dodo` | `string` |  |
| `dog` | `string` |  |
| `dog2` | `string` |  |
| `dollar` | `string` |  |
| `dolls` | `string` |  |
| `dolphin` | `string` |  |
| `dominica` | `string` |  |
| `dominican_republic` | `string` |  |
| `door` | `string` |  |
| `doughnut` | `string` |  |
| `dove` | `string` |  |
| `dragon` | `string` |  |
| `dragon_face` | `string` |  |
| `dress` | `string` |  |
| `dromedary_camel` | `string` |  |
| `drooling_face` | `string` |  |
| `drop_of_blood` | `string` |  |
| `droplet` | `string` |  |
| `drum` | `string` |  |
| `duck` | `string` |  |
| `dumpling` | `string` |  |
| `dvd` | `string` |  |
| `eagle` | `string` |  |
| `ear` | `string` |  |
| `ear_of_rice` | `string` |  |
| `ear_with_hearing_aid` | `string` |  |
| `earth_africa` | `string` |  |
| `earth_americas` | `string` |  |
| `earth_asia` | `string` |  |
| `ecuador` | `string` |  |
| `egg` | `string` |  |
| `eggplant` | `string` |  |
| `egypt` | `string` |  |
| `eight` | `string` |  |
| `eight_pointed_black_star` | `string` |  |
| `eight_spoked_asterisk` | `string` |  |
| `eject_button` | `string` |  |
| `el_salvador` | `string` |  |
| `electric_plug` | `string` |  |
| `electron` | `string` |  |
| `elephant` | `string` |  |
| `elevator` | `string` |  |
| `elf` | `string` |  |
| `elf_man` | `string` |  |
| `elf_woman` | `string` |  |
| `email` | `string` |  |
| `end` | `string` |  |
| `england` | `string` |  |
| `envelope` | `string` |  |
| `envelope_with_arrow` | `string` |  |
| `equatorial_guinea` | `string` |  |
| `eritrea` | `string` |  |
| `es` | `string` |  |
| `estonia` | `string` |  |
| `ethiopia` | `string` |  |
| `eu` | `string` |  |
| `euro` | `string` |  |
| `european_castle` | `string` |  |
| `european_post_office` | `string` |  |
| `european_union` | `string` |  |
| `evergreen_tree` | `string` |  |
| `exclamation` | `string` |  |
| `exploding_head` | `string` |  |
| `expressionless` | `string` |  |
| `eye` | `string` |  |
| `eye_speech_bubble` | `string` |  |
| `eyeglasses` | `string` |  |
| `eyes` | `string` |  |
| `face_exhaling` | `string` |  |
| `face_in_clouds` | `string` |  |
| `face_with_head_bandage` | `string` |  |
| `face_with_spiral_eyes` | `string` |  |
| `face_with_thermometer` | `string` |  |
| `facepalm` | `string` |  |
| `facepunch` | `string` |  |
| `factory` | `string` |  |
| `factory_worker` | `string` |  |
| `fairy` | `string` |  |
| `fairy_man` | `string` |  |
| `fairy_woman` | `string` |  |
| `falafel` | `string` |  |
| `falkland_islands` | `string` |  |
| `fallen_leaf` | `string` |  |
| `family` | `string` |  |
| `family_man_boy` | `string` |  |
| `family_man_boy_boy` | `string` |  |
| `family_man_girl` | `string` |  |
| `family_man_girl_boy` | `string` |  |
| `family_man_girl_girl` | `string` |  |
| `family_man_man_boy` | `string` |  |
| `family_man_man_boy_boy` | `string` |  |
| `family_man_man_girl` | `string` |  |
| `family_man_man_girl_boy` | `string` |  |
| `family_man_man_girl_girl` | `string` |  |
| `family_man_woman_boy` | `string` |  |
| `family_man_woman_boy_boy` | `string` |  |
| `family_man_woman_girl` | `string` |  |
| `family_man_woman_girl_boy` | `string` |  |
| `family_man_woman_girl_girl` | `string` |  |
| `family_woman_boy` | `string` |  |
| `family_woman_boy_boy` | `string` |  |
| `family_woman_girl` | `string` |  |
| `family_woman_girl_boy` | `string` |  |
| `family_woman_girl_girl` | `string` |  |
| `family_woman_woman_boy` | `string` |  |
| `family_woman_woman_boy_boy` | `string` |  |
| `family_woman_woman_girl` | `string` |  |
| `family_woman_woman_girl_boy` | `string` |  |
| `family_woman_woman_girl_girl` | `string` |  |
| `farmer` | `string` |  |
| `faroe_islands` | `string` |  |
| `fast_forward` | `string` |  |
| `fax` | `string` |  |
| `fearful` | `string` |  |
| `feather` | `string` |  |
| `feelsgood` | `string` |  |
| `feet` | `string` |  |
| `female_detective` | `string` |  |
| `female_sign` | `string` |  |
| `ferris_wheel` | `string` |  |
| `ferry` | `string` |  |
| `field_hockey` | `string` |  |
| `fiji` | `string` |  |
| `file_cabinet` | `string` |  |
| `file_folder` | `string` |  |
| `film_projector` | `string` |  |
| `film_strip` | `string` |  |
| `finland` | `string` |  |
| `finnadie` | `string` |  |
| `fire` | `string` |  |
| `fire_engine` | `string` |  |
| `fire_extinguisher` | `string` |  |
| `firecracker` | `string` |  |
| `firefighter` | `string` |  |
| `fireworks` | `string` |  |
| `first_quarter_moon` | `string` |  |
| `first_quarter_moon_with_face` | `string` |  |
| `fish` | `string` |  |
| `fish_cake` | `string` |  |
| `fishing_pole_and_fish` | `string` |  |
| `fishsticks` | `string` |  |
| `fist` | `string` |  |
| `fist_left` | `string` |  |
| `fist_oncoming` | `string` |  |
| `fist_raised` | `string` |  |
| `fist_right` | `string` |  |
| `five` | `string` |  |
| `flags` | `string` |  |
| `flamingo` | `string` |  |
| `flashlight` | `string` |  |
| `flat_shoe` | `string` |  |
| `flatbread` | `string` |  |
| `fleur_de_lis` | `string` |  |
| `flight_arrival` | `string` |  |
| `flight_departure` | `string` |  |
| `flipper` | `string` |  |
| `floppy_disk` | `string` |  |
| `flower_playing_cards` | `string` |  |
| `flushed` | `string` |  |
| `fly` | `string` |  |
| `flying_disc` | `string` |  |
| `flying_saucer` | `string` |  |
| `fog` | `string` |  |
| `foggy` | `string` |  |
| `fondue` | `string` |  |
| `foot` | `string` |  |
| `football` | `string` |  |
| `footprints` | `string` |  |
| `fork_and_knife` | `string` |  |
| `fortune_cookie` | `string` |  |
| `fountain` | `string` |  |
| `fountain_pen` | `string` |  |
| `four` | `string` |  |
| `four_leaf_clover` | `string` |  |
| `fox_face` | `string` |  |
| `fr` | `string` |  |
| `framed_picture` | `string` |  |
| `free` | `string` |  |
| `french_guiana` | `string` |  |
| `french_polynesia` | `string` |  |
| `french_southern_territories` | `string` |  |
| `fried_egg` | `string` |  |
| `fried_shrimp` | `string` |  |
| `fries` | `string` |  |
| `frog` | `string` |  |
| `frowning` | `string` |  |
| `frowning_face` | `string` |  |
| `frowning_man` | `string` |  |
| `frowning_person` | `string` |  |
| `frowning_woman` | `string` |  |
| `fu` | `string` |  |
| `fuelpump` | `string` |  |
| `full_moon` | `string` |  |
| `full_moon_with_face` | `string` |  |
| `funeral_urn` | `string` |  |
| `gabon` | `string` |  |
| `gambia` | `string` |  |
| `game_die` | `string` |  |
| `garlic` | `string` |  |
| `gb` | `string` |  |
| `gear` | `string` |  |
| `gem` | `string` |  |
| `gemini` | `string` |  |
| `genie` | `string` |  |
| `genie_man` | `string` |  |
| `genie_woman` | `string` |  |
| `georgia` | `string` |  |
| `ghana` | `string` |  |
| `ghost` | `string` |  |
| `gibraltar` | `string` |  |
| `gift` | `string` |  |
| `gift_heart` | `string` |  |
| `giraffe` | `string` |  |
| `girl` | `string` |  |
| `globe_with_meridians` | `string` |  |
| `gloves` | `string` |  |
| `goal_net` | `string` |  |
| `goat` | `string` |  |
| `goberserk` | `string` |  |
| `godmode` | `string` |  |
| `goggles` | `string` |  |
| `golf` | `string` |  |
| `golfing` | `string` |  |
| `golfing_man` | `string` |  |
| `golfing_woman` | `string` |  |
| `gorilla` | `string` |  |
| `grapes` | `string` |  |
| `greece` | `string` |  |
| `green_apple` | `string` |  |
| `green_book` | `string` |  |
| `green_circle` | `string` |  |
| `green_heart` | `string` |  |
| `green_salad` | `string` |  |
| `green_square` | `string` |  |
| `greenland` | `string` |  |
| `grenada` | `string` |  |
| `grey_exclamation` | `string` |  |
| `grey_question` | `string` |  |
| `grimacing` | `string` |  |
| `grin` | `string` |  |
| `grinning` | `string` |  |
| `guadeloupe` | `string` |  |
| `guam` | `string` |  |
| `guard` | `string` |  |
| `guardsman` | `string` |  |
| `guardswoman` | `string` |  |
| `guatemala` | `string` |  |
| `guernsey` | `string` |  |
| `guide_dog` | `string` |  |
| `guinea` | `string` |  |
| `guinea_bissau` | `string` |  |
| `guitar` | `string` |  |
| `gun` | `string` |  |
| `guyana` | `string` |  |
| `haircut` | `string` |  |
| `haircut_man` | `string` |  |
| `haircut_woman` | `string` |  |
| `haiti` | `string` |  |
| `hamburger` | `string` |  |
| `hammer` | `string` |  |
| `hammer_and_pick` | `string` |  |
| `hammer_and_wrench` | `string` |  |
| `hamster` | `string` |  |
| `hand` | `string` |  |
| `hand_over_mouth` | `string` |  |
| `handbag` | `string` |  |
| `handball_person` | `string` |  |
| `handshake` | `string` |  |
| `hankey` | `string` |  |
| `hash` | `string` |  |
| `hatched_chick` | `string` |  |
| `hatching_chick` | `string` |  |
| `headphones` | `string` |  |
| `headstone` | `string` |  |
| `health_worker` | `string` |  |
| `hear_no_evil` | `string` |  |
| `heard_mcdonald_islands` | `string` |  |
| `heart` | `string` |  |
| `heart_decoration` | `string` |  |
| `heart_eyes` | `string` |  |
| `heart_eyes_cat` | `string` |  |
| `heart_on_fire` | `string` |  |
| `heartbeat` | `string` |  |
| `heartpulse` | `string` |  |
| `hearts` | `string` |  |
| `heavy_check_mark` | `string` |  |
| `heavy_division_sign` | `string` |  |
| `heavy_dollar_sign` | `string` |  |
| `heavy_exclamation_mark` | `string` |  |
| `heavy_heart_exclamation` | `string` |  |
| `heavy_minus_sign` | `string` |  |
| `heavy_multiplication_x` | `string` |  |
| `heavy_plus_sign` | `string` |  |
| `hedgehog` | `string` |  |
| `helicopter` | `string` |  |
| `herb` | `string` |  |
| `hibiscus` | `string` |  |
| `high_brightness` | `string` |  |
| `high_heel` | `string` |  |
| `hiking_boot` | `string` |  |
| `hindu_temple` | `string` |  |
| `hippopotamus` | `string` |  |
| `hocho` | `string` |  |
| `hole` | `string` |  |
| `honduras` | `string` |  |
| `honey_pot` | `string` |  |
| `honeybee` | `string` |  |
| `hong_kong` | `string` |  |
| `hook` | `string` |  |
| `horse` | `string` |  |
| `horse_racing` | `string` |  |
| `hospital` | `string` |  |
| `hot_face` | `string` |  |
| `hot_pepper` | `string` |  |
| `hotdog` | `string` |  |
| `hotel` | `string` |  |
| `hotsprings` | `string` |  |
| `hourglass` | `string` |  |
| `hourglass_flowing_sand` | `string` |  |
| `house` | `string` |  |
| `house_with_garden` | `string` |  |
| `houses` | `string` |  |
| `hugs` | `string` |  |
| `hungary` | `string` |  |
| `hurtrealbad` | `string` |  |
| `hushed` | `string` |  |
| `hut` | `string` |  |
| `ice_cream` | `string` |  |
| `ice_cube` | `string` |  |
| `ice_hockey` | `string` |  |
| `ice_skate` | `string` |  |
| `icecream` | `string` |  |
| `iceland` | `string` |  |
| `id` | `string` |  |
| `ideograph_advantage` | `string` |  |
| `imp` | `string` |  |
| `inbox_tray` | `string` |  |
| `incoming_envelope` | `string` |  |
| `india` | `string` |  |
| `indonesia` | `string` |  |
| `infinity` | `string` |  |
| `information_desk_person` | `string` |  |
| `information_source` | `string` |  |
| `innocent` | `string` |  |
| `interrobang` | `string` |  |
| `iphone` | `string` |  |
| `iran` | `string` |  |
| `iraq` | `string` |  |
| `ireland` | `string` |  |
| `isle_of_man` | `string` |  |
| `israel` | `string` |  |
| `it` | `string` |  |
| `izakaya_lantern` | `string` |  |
| `jack_o_lantern` | `string` |  |
| `jamaica` | `string` |  |
| `japan` | `string` |  |
| `japanese_castle` | `string` |  |
| `japanese_goblin` | `string` |  |
| `japanese_ogre` | `string` |  |
| `jeans` | `string` |  |
| `jersey` | `string` |  |
| `jigsaw` | `string` |  |
| `jordan` | `string` |  |
| `joy` | `string` |  |
| `joy_cat` | `string` |  |
| `joystick` | `string` |  |
| `jp` | `string` |  |
| `judge` | `string` |  |
| `juggling_person` | `string` |  |
| `kangaroo` | `string` |  |
| `kazakhstan` | `string` |  |
| `kenya` | `string` |  |
| `key` | `string` |  |
| `keyboard` | `string` |  |
| `keycap_ten` | `string` |  |
| `kick_scooter` | `string` |  |
| `kimono` | `string` |  |
| `kiribati` | `string` |  |
| `kiss` | `string` |  |
| `kissing` | `string` |  |
| `kissing_cat` | `string` |  |
| `kissing_closed_eyes` | `string` |  |
| `kissing_heart` | `string` |  |
| `kissing_smiling_eyes` | `string` |  |
| `kite` | `string` |  |
| `kiwi_fruit` | `string` |  |
| `kneeling_man` | `string` |  |
| `kneeling_person` | `string` |  |
| `kneeling_woman` | `string` |  |
| `knife` | `string` |  |
| `knot` | `string` |  |
| `koala` | `string` |  |
| `koko` | `string` |  |
| `kosovo` | `string` |  |
| `kr` | `string` |  |
| `kuwait` | `string` |  |
| `kyrgyzstan` | `string` |  |
| `lab_coat` | `string` |  |
| `label` | `string` |  |
| `lacrosse` | `string` |  |
| `ladder` | `string` |  |
| `lady_beetle` | `string` |  |
| `lantern` | `string` |  |
| `laos` | `string` |  |
| `large_blue_circle` | `string` |  |
| `large_blue_diamond` | `string` |  |
| `large_orange_diamond` | `string` |  |
| `last_quarter_moon` | `string` |  |
| `last_quarter_moon_with_face` | `string` |  |
| `latin_cross` | `string` |  |
| `latvia` | `string` |  |
| `laughing` | `string` |  |
| `leafy_green` | `string` |  |
| `leaves` | `string` |  |
| `lebanon` | `string` |  |
| `ledger` | `string` |  |
| `left_luggage` | `string` |  |
| `left_right_arrow` | `string` |  |
| `left_speech_bubble` | `string` |  |
| `leftwards_arrow_with_hook` | `string` |  |
| `leg` | `string` |  |
| `lemon` | `string` |  |
| `leo` | `string` |  |
| `leopard` | `string` |  |
| `lesotho` | `string` |  |
| `level_slider` | `string` |  |
| `liberia` | `string` |  |
| `libra` | `string` |  |
| `libya` | `string` |  |
| `liechtenstein` | `string` |  |
| `light_rail` | `string` |  |
| `link` | `string` |  |
| `lion` | `string` |  |
| `lips` | `string` |  |
| `lipstick` | `string` |  |
| `lithuania` | `string` |  |
| `lizard` | `string` |  |
| `llama` | `string` |  |
| `lobster` | `string` |  |
| `lock` | `string` |  |
| `lock_with_ink_pen` | `string` |  |
| `lollipop` | `string` |  |
| `long_drum` | `string` |  |
| `loop` | `string` |  |
| `lotion_bottle` | `string` |  |
| `lotus_position` | `string` |  |
| `lotus_position_man` | `string` |  |
| `lotus_position_woman` | `string` |  |
| `loud_sound` | `string` |  |
| `loudspeaker` | `string` |  |
| `love_hotel` | `string` |  |
| `love_letter` | `string` |  |
| `love_you_gesture` | `string` |  |
| `low_brightness` | `string` |  |
| `luggage` | `string` |  |
| `lungs` | `string` |  |
| `luxembourg` | `string` |  |
| `lying_face` | `string` |  |
| `m` | `string` |  |
| `macau` | `string` |  |
| `macedonia` | `string` |  |
| `madagascar` | `string` |  |
| `mag` | `string` |  |
| `mag_right` | `string` |  |
| `mage` | `string` |  |
| `mage_man` | `string` |  |
| `mage_woman` | `string` |  |
| `magic_wand` | `string` |  |
| `magnet` | `string` |  |
| `mahjong` | `string` |  |
| `mailbox` | `string` |  |
| `mailbox_closed` | `string` |  |
| `mailbox_with_mail` | `string` |  |
| `mailbox_with_no_mail` | `string` |  |
| `malawi` | `string` |  |
| `malaysia` | `string` |  |
| `maldives` | `string` |  |
| `male_detective` | `string` |  |
| `male_sign` | `string` |  |
| `mali` | `string` |  |
| `malta` | `string` |  |
| `mammoth` | `string` |  |
| `man` | `string` |  |
| `man_artist` | `string` |  |
| `man_astronaut` | `string` |  |
| `man_beard` | `string` |  |
| `man_cartwheeling` | `string` |  |
| `man_cook` | `string` |  |
| `man_dancing` | `string` |  |
| `man_facepalming` | `string` |  |
| `man_factory_worker` | `string` |  |
| `man_farmer` | `string` |  |
| `man_feeding_baby` | `string` |  |
| `man_firefighter` | `string` |  |
| `man_health_worker` | `string` |  |
| `man_in_manual_wheelchair` | `string` |  |
| `man_in_motorized_wheelchair` | `string` |  |
| `man_in_tuxedo` | `string` |  |
| `man_judge` | `string` |  |
| `man_juggling` | `string` |  |
| `man_mechanic` | `string` |  |
| `man_office_worker` | `string` |  |
| `man_pilot` | `string` |  |
| `man_playing_handball` | `string` |  |
| `man_playing_water_polo` | `string` |  |
| `man_scientist` | `string` |  |
| `man_shrugging` | `string` |  |
| `man_singer` | `string` |  |
| `man_student` | `string` |  |
| `man_teacher` | `string` |  |
| `man_technologist` | `string` |  |
| `man_with_gua_pi_mao` | `string` |  |
| `man_with_probing_cane` | `string` |  |
| `man_with_turban` | `string` |  |
| `man_with_veil` | `string` |  |
| `mandarin` | `string` |  |
| `mango` | `string` |  |
| `mans_shoe` | `string` |  |
| `mantelpiece_clock` | `string` |  |
| `manual_wheelchair` | `string` |  |
| `maple_leaf` | `string` |  |
| `marshall_islands` | `string` |  |
| `martial_arts_uniform` | `string` |  |
| `martinique` | `string` |  |
| `mask` | `string` |  |
| `massage` | `string` |  |
| `massage_man` | `string` |  |
| `massage_woman` | `string` |  |
| `mate` | `string` |  |
| `mauritania` | `string` |  |
| `mauritius` | `string` |  |
| `mayotte` | `string` |  |
| `meat_on_bone` | `string` |  |
| `mechanic` | `string` |  |
| `mechanical_arm` | `string` |  |
| `mechanical_leg` | `string` |  |
| `medal_military` | `string` |  |
| `medal_sports` | `string` |  |
| `medical_symbol` | `string` |  |
| `mega` | `string` |  |
| `melon` | `string` |  |
| `memo` | `string` |  |
| `men_wrestling` | `string` |  |
| `mending_heart` | `string` |  |
| `menorah` | `string` |  |
| `mens` | `string` |  |
| `mermaid` | `string` |  |
| `merman` | `string` |  |
| `merperson` | `string` |  |
| `metal` | `string` |  |
| `metro` | `string` |  |
| `mexico` | `string` |  |
| `microbe` | `string` |  |
| `micronesia` | `string` |  |
| `microphone` | `string` |  |
| `microscope` | `string` |  |
| `middle_finger` | `string` |  |
| `military_helmet` | `string` |  |
| `milk_glass` | `string` |  |
| `milky_way` | `string` |  |
| `minibus` | `string` |  |
| `minidisc` | `string` |  |
| `mirror` | `string` |  |
| `mobile_phone_off` | `string` |  |
| `moldova` | `string` |  |
| `monaco` | `string` |  |
| `money_mouth_face` | `string` |  |
| `money_with_wings` | `string` |  |
| `moneybag` | `string` |  |
| `mongolia` | `string` |  |
| `monkey` | `string` |  |
| `monkey_face` | `string` |  |
| `monocle_face` | `string` |  |
| `monorail` | `string` |  |
| `montenegro` | `string` |  |
| `montserrat` | `string` |  |
| `moon` | `string` |  |
| `moon_cake` | `string` |  |
| `morocco` | `string` |  |
| `mortar_board` | `string` |  |
| `mosque` | `string` |  |
| `mosquito` | `string` |  |
| `motor_boat` | `string` |  |
| `motor_scooter` | `string` |  |
| `motorcycle` | `string` |  |
| `motorized_wheelchair` | `string` |  |
| `motorway` | `string` |  |
| `mount_fuji` | `string` |  |
| `mountain` | `string` |  |
| `mountain_bicyclist` | `string` |  |
| `mountain_biking_man` | `string` |  |
| `mountain_biking_woman` | `string` |  |
| `mountain_cableway` | `string` |  |
| `mountain_railway` | `string` |  |
| `mountain_snow` | `string` |  |
| `mouse` | `string` |  |
| `mouse2` | `string` |  |
| `mouse_trap` | `string` |  |
| `movie_camera` | `string` |  |
| `moyai` | `string` |  |
| `mozambique` | `string` |  |
| `mrs_claus` | `string` |  |
| `muscle` | `string` |  |
| `mushroom` | `string` |  |
| `musical_keyboard` | `string` |  |
| `musical_note` | `string` |  |
| `musical_score` | `string` |  |
| `mute` | `string` |  |
| `mx_claus` | `string` |  |
| `myanmar` | `string` |  |
| `nail_care` | `string` |  |
| `name_badge` | `string` |  |
| `namibia` | `string` |  |
| `national_park` | `string` |  |
| `nauru` | `string` |  |
| `nauseated_face` | `string` |  |
| `nazar_amulet` | `string` |  |
| `neckbeard` | `string` |  |
| `necktie` | `string` |  |
| `negative_squared_cross_mark` | `string` |  |
| `nepal` | `string` |  |
| `nerd_face` | `string` |  |
| `nesting_dolls` | `string` |  |
| `netherlands` | `string` |  |
| `neutral_face` | `string` |  |
| `new` | `string` |  |
| `new_caledonia` | `string` |  |
| `new_moon` | `string` |  |
| `new_moon_with_face` | `string` |  |
| `new_zealand` | `string` |  |
| `newspaper` | `string` |  |
| `newspaper_roll` | `string` |  |
| `next_track_button` | `string` |  |
| `ng` | `string` |  |
| `ng_man` | `string` |  |
| `ng_woman` | `string` |  |
| `nicaragua` | `string` |  |
| `niger` | `string` |  |
| `nigeria` | `string` |  |
| `night_with_stars` | `string` |  |
| `nine` | `string` |  |
| `ninja` | `string` |  |
| `niue` | `string` |  |
| `no_bell` | `string` |  |
| `no_bicycles` | `string` |  |
| `no_entry` | `string` |  |
| `no_entry_sign` | `string` |  |
| `no_good` | `string` |  |
| `no_good_man` | `string` |  |
| `no_good_woman` | `string` |  |
| `no_mobile_phones` | `string` |  |
| `no_mouth` | `string` |  |
| `no_pedestrians` | `string` |  |
| `no_smoking` | `string` |  |
| `nonpotable_water` | `string` |  |
| `norfolk_island` | `string` |  |
| `north_korea` | `string` |  |
| `northern_mariana_islands` | `string` |  |
| `norway` | `string` |  |
| `nose` | `string` |  |
| `notebook` | `string` |  |
| `notebook_with_decorative_cover` | `string` |  |
| `notes` | `string` |  |
| `nut_and_bolt` | `string` |  |
| `o` | `string` |  |
| `o2` | `string` |  |
| `ocean` | `string` |  |
| `octocat` | `string` |  |
| `octopus` | `string` |  |
| `oden` | `string` |  |
| `office` | `string` |  |
| `office_worker` | `string` |  |
| `oil_drum` | `string` |  |
| `ok` | `string` |  |
| `ok_hand` | `string` |  |
| `ok_man` | `string` |  |
| `ok_person` | `string` |  |
| `ok_woman` | `string` |  |
| `old_key` | `string` |  |
| `older_adult` | `string` |  |
| `older_man` | `string` |  |
| `older_woman` | `string` |  |
| `olive` | `string` |  |
| `om` | `string` |  |
| `oman` | `string` |  |
| `on` | `string` |  |
| `oncoming_automobile` | `string` |  |
| `oncoming_bus` | `string` |  |
| `oncoming_police_car` | `string` |  |
| `oncoming_taxi` | `string` |  |
| `one` | `string` |  |
| `one_piece_swimsuit` | `string` |  |
| `onion` | `string` |  |
| `open_book` | `string` |  |
| `open_file_folder` | `string` |  |
| `open_hands` | `string` |  |
| `open_mouth` | `string` |  |
| `open_umbrella` | `string` |  |
| `ophiuchus` | `string` |  |
| `orange` | `string` |  |
| `orange_book` | `string` |  |
| `orange_circle` | `string` |  |
| `orange_heart` | `string` |  |
| `orange_square` | `string` |  |
| `orangutan` | `string` |  |
| `orthodox_cross` | `string` |  |
| `otter` | `string` |  |
| `outbox_tray` | `string` |  |
| `owl` | `string` |  |
| `ox` | `string` |  |
| `oyster` | `string` |  |
| `package` | `string` |  |
| `page_facing_up` | `string` |  |
| `page_with_curl` | `string` |  |
| `pager` | `string` |  |
| `paintbrush` | `string` |  |
| `pakistan` | `string` |  |
| `palau` | `string` |  |
| `palestinian_territories` | `string` |  |
| `palm_tree` | `string` |  |
| `palms_up_together` | `string` |  |
| `panama` | `string` |  |
| `pancakes` | `string` |  |
| `panda_face` | `string` |  |
| `paperclip` | `string` |  |
| `paperclips` | `string` |  |
| `papua_new_guinea` | `string` |  |
| `parachute` | `string` |  |
| `paraguay` | `string` |  |
| `parasol_on_ground` | `string` |  |
| `parking` | `string` |  |
| `parrot` | `string` |  |
| `part_alternation_mark` | `string` |  |
| `partly_sunny` | `string` |  |
| `partying_face` | `string` |  |
| `passenger_ship` | `string` |  |
| `passport_control` | `string` |  |
| `pause_button` | `string` |  |
| `paw_prints` | `string` |  |
| `peace_symbol` | `string` |  |
| `peach` | `string` |  |
| `peacock` | `string` |  |
| `peanuts` | `string` |  |
| `pear` | `string` |  |
| `pen` | `string` |  |
| `pencil` | `string` |  |
| `pencil2` | `string` |  |
| `penguin` | `string` |  |
| `pensive` | `string` |  |
| `people_holding_hands` | `string` |  |
| `people_hugging` | `string` |  |
| `performing_arts` | `string` |  |
| `persevere` | `string` |  |
| `person_bald` | `string` |  |
| `person_curly_hair` | `string` |  |
| `person_feeding_baby` | `string` |  |
| `person_fencing` | `string` |  |
| `person_in_manual_wheelchair` | `string` |  |
| `person_in_motorized_wheelchair` | `string` |  |
| `person_in_tuxedo` | `string` |  |
| `person_red_hair` | `string` |  |
| `person_white_hair` | `string` |  |
| `person_with_probing_cane` | `string` |  |
| `person_with_turban` | `string` |  |
| `person_with_veil` | `string` |  |
| `peru` | `string` |  |
| `petri_dish` | `string` |  |
| `philippines` | `string` |  |
| `phone` | `string` |  |
| `pick` | `string` |  |
| `pickup_truck` | `string` |  |
| `pie` | `string` |  |
| `pig` | `string` |  |
| `pig2` | `string` |  |
| `pig_nose` | `string` |  |
| `pill` | `string` |  |
| `pilot` | `string` |  |
| `pinata` | `string` |  |
| `pinched_fingers` | `string` |  |
| `pinching_hand` | `string` |  |
| `pineapple` | `string` |  |
| `ping_pong` | `string` |  |
| `pirate_flag` | `string` |  |
| `pisces` | `string` |  |
| `pitcairn_islands` | `string` |  |
| `pizza` | `string` |  |
| `placard` | `string` |  |
| `place_of_worship` | `string` |  |
| `plate_with_cutlery` | `string` |  |
| `play_or_pause_button` | `string` |  |
| `pleading_face` | `string` |  |
| `plunger` | `string` |  |
| `point_down` | `string` |  |
| `point_left` | `string` |  |
| `point_right` | `string` |  |
| `point_up` | `string` |  |
| `point_up_2` | `string` |  |
| `poland` | `string` |  |
| `polar_bear` | `string` |  |
| `police_car` | `string` |  |
| `police_officer` | `string` |  |
| `policeman` | `string` |  |
| `policewoman` | `string` |  |
| `poodle` | `string` |  |
| `poop` | `string` |  |
| `popcorn` | `string` |  |
| `portugal` | `string` |  |
| `post_office` | `string` |  |
| `postal_horn` | `string` |  |
| `postbox` | `string` |  |
| `potable_water` | `string` |  |
| `potato` | `string` |  |
| `potted_plant` | `string` |  |
| `pouch` | `string` |  |
| `poultry_leg` | `string` |  |
| `pound` | `string` |  |
| `pout` | `string` |  |
| `pouting_cat` | `string` |  |
| `pouting_face` | `string` |  |
| `pouting_man` | `string` |  |
| `pouting_woman` | `string` |  |
| `pray` | `string` |  |
| `prayer_beads` | `string` |  |
| `pregnant_woman` | `string` |  |
| `pretzel` | `string` |  |
| `previous_track_button` | `string` |  |
| `prince` | `string` |  |
| `princess` | `string` |  |
| `printer` | `string` |  |
| `probing_cane` | `string` |  |
| `puerto_rico` | `string` |  |
| `punch` | `string` |  |
| `purple_circle` | `string` |  |
| `purple_heart` | `string` |  |
| `purple_square` | `string` |  |
| `purse` | `string` |  |
| `pushpin` | `string` |  |
| `put_litter_in_its_place` | `string` |  |
| `qatar` | `string` |  |
| `question` | `string` |  |
| `rabbit` | `string` |  |
| `rabbit2` | `string` |  |
| `raccoon` | `string` |  |
| `racehorse` | `string` |  |
| `racing_car` | `string` |  |
| `radio` | `string` |  |
| `radio_button` | `string` |  |
| `radioactive` | `string` |  |
| `rage` | `string` |  |
| `rage1` | `string` |  |
| `rage2` | `string` |  |
| `rage3` | `string` |  |
| `rage4` | `string` |  |
| `railway_car` | `string` |  |
| `railway_track` | `string` |  |
| `rainbow` | `string` |  |
| `rainbow_flag` | `string` |  |
| `raised_back_of_hand` | `string` |  |
| `raised_eyebrow` | `string` |  |
| `raised_hand` | `string` |  |
| `raised_hand_with_fingers_splayed` | `string` |  |
| `raised_hands` | `string` |  |
| `raising_hand` | `string` |  |
| `raising_hand_man` | `string` |  |
| `raising_hand_woman` | `string` |  |
| `ram` | `string` |  |
| `ramen` | `string` |  |
| `rat` | `string` |  |
| `razor` | `string` |  |
| `receipt` | `string` |  |
| `record_button` | `string` |  |
| `recycle` | `string` |  |
| `red_car` | `string` |  |
| `red_circle` | `string` |  |
| `red_envelope` | `string` |  |
| `red_haired_man` | `string` |  |
| `red_haired_woman` | `string` |  |
| `red_square` | `string` |  |
| `registered` | `string` |  |
| `relaxed` | `string` |  |
| `relieved` | `string` |  |
| `reminder_ribbon` | `string` |  |
| `repeat` | `string` |  |
| `repeat_one` | `string` |  |
| `rescue_worker_helmet` | `string` |  |
| `restroom` | `string` |  |
| `reunion` | `string` |  |
| `revolving_hearts` | `string` |  |
| `rewind` | `string` |  |
| `rhinoceros` | `string` |  |
| `ribbon` | `string` |  |
| `rice` | `string` |  |
| `rice_ball` | `string` |  |
| `rice_cracker` | `string` |  |
| `rice_scene` | `string` |  |
| `right_anger_bubble` | `string` |  |
| `ring` | `string` |  |
| `ringed_planet` | `string` |  |
| `robot` | `string` |  |
| `rock` | `string` |  |
| `rocket` | `string` |  |
| `rofl` | `string` |  |
| `roll_eyes` | `string` |  |
| `roll_of_paper` | `string` |  |
| `roller_coaster` | `string` |  |
| `roller_skate` | `string` |  |
| `romania` | `string` |  |
| `rooster` | `string` |  |
| `rose` | `string` |  |
| `rosette` | `string` |  |
| `rotating_light` | `string` |  |
| `round_pushpin` | `string` |  |
| `rowboat` | `string` |  |
| `rowing_man` | `string` |  |
| `rowing_woman` | `string` |  |
| `ru` | `string` |  |
| `rugby_football` | `string` |  |
| `runner` | `string` |  |
| `running` | `string` |  |
| `running_man` | `string` |  |
| `running_shirt_with_sash` | `string` |  |
| `running_woman` | `string` |  |
| `rwanda` | `string` |  |
| `sa` | `string` |  |
| `safety_pin` | `string` |  |
| `safety_vest` | `string` |  |
| `sagittarius` | `string` |  |
| `sailboat` | `string` |  |
| `sake` | `string` |  |
| `salt` | `string` |  |
| `samoa` | `string` |  |
| `san_marino` | `string` |  |
| `sandal` | `string` |  |
| `sandwich` | `string` |  |
| `santa` | `string` |  |
| `sao_tome_principe` | `string` |  |
| `sari` | `string` |  |
| `sassy_man` | `string` |  |
| `sassy_woman` | `string` |  |
| `satellite` | `string` |  |
| `satisfied` | `string` |  |
| `saudi_arabia` | `string` |  |
| `sauna_man` | `string` |  |
| `sauna_person` | `string` |  |
| `sauna_woman` | `string` |  |
| `sauropod` | `string` |  |
| `saxophone` | `string` |  |
| `scarf` | `string` |  |
| `school` | `string` |  |
| `school_satchel` | `string` |  |
| `scientist` | `string` |  |
| `scissors` | `string` |  |
| `scorpion` | `string` |  |
| `scorpius` | `string` |  |
| `scotland` | `string` |  |
| `scream` | `string` |  |
| `scream_cat` | `string` |  |
| `screwdriver` | `string` |  |
| `scroll` | `string` |  |
| `seal` | `string` |  |
| `seat` | `string` |  |
| `secret` | `string` |  |
| `see_no_evil` | `string` |  |
| `seedling` | `string` |  |
| `selfie` | `string` |  |
| `senegal` | `string` |  |
| `serbia` | `string` |  |
| `service_dog` | `string` |  |
| `seven` | `string` |  |
| `sewing_needle` | `string` |  |
| `seychelles` | `string` |  |
| `shallow_pan_of_food` | `string` |  |
| `shamrock` | `string` |  |
| `shark` | `string` |  |
| `shaved_ice` | `string` |  |
| `sheep` | `string` |  |
| `shell` | `string` |  |
| `shield` | `string` |  |
| `shinto_shrine` | `string` |  |
| `ship` | `string` |  |
| `shipit` | `string` |  |
| `shirt` | `string` |  |
| `shoe` | `string` |  |
| `shopping` | `string` |  |
| `shopping_cart` | `string` |  |
| `shorts` | `string` |  |
| `shower` | `string` |  |
| `shrimp` | `string` |  |
| `shrug` | `string` |  |
| `shushing_face` | `string` |  |
| `sierra_leone` | `string` |  |
| `signal_strength` | `string` |  |
| `singapore` | `string` |  |
| `singer` | `string` |  |
| `sint_maarten` | `string` |  |
| `six` | `string` |  |
| `six_pointed_star` | `string` |  |
| `skateboard` | `string` |  |
| `ski` | `string` |  |
| `skier` | `string` |  |
| `skull` | `string` |  |
| `skull_and_crossbones` | `string` |  |
| `skunk` | `string` |  |
| `sled` | `string` |  |
| `sleeping` | `string` |  |
| `sleeping_bed` | `string` |  |
| `sleepy` | `string` |  |
| `slightly_frowning_face` | `string` |  |
| `slightly_smiling_face` | `string` |  |
| `slot_machine` | `string` |  |
| `sloth` | `string` |  |
| `slovakia` | `string` |  |
| `slovenia` | `string` |  |
| `small_airplane` | `string` |  |
| `small_blue_diamond` | `string` |  |
| `small_orange_diamond` | `string` |  |
| `small_red_triangle` | `string` |  |
| `small_red_triangle_down` | `string` |  |
| `smile` | `string` |  |
| `smile_cat` | `string` |  |
| `smiley` | `string` |  |
| `smiley_cat` | `string` |  |
| `smiling_face_with_tear` | `string` |  |
| `smiling_face_with_three_hearts` | `string` |  |
| `smiling_imp` | `string` |  |
| `smirk` | `string` |  |
| `smirk_cat` | `string` |  |
| `smoking` | `string` |  |
| `snail` | `string` |  |
| `snake` | `string` |  |
| `sneezing_face` | `string` |  |
| `snowboarder` | `string` |  |
| `snowflake` | `string` |  |
| `snowman` | `string` |  |
| `snowman_with_snow` | `string` |  |
| `soap` | `string` |  |
| `sob` | `string` |  |
| `soccer` | `string` |  |
| `socks` | `string` |  |
| `softball` | `string` |  |
| `solomon_islands` | `string` |  |
| `somalia` | `string` |  |
| `soon` | `string` |  |
| `sos` | `string` |  |
| `sound` | `string` |  |
| `south_africa` | `string` |  |
| `south_georgia_south_sandwich_islands` | `string` |  |
| `south_sudan` | `string` |  |
| `space_invader` | `string` |  |
| `spades` | `string` |  |
| `spaghetti` | `string` |  |
| `sparkle` | `string` |  |
| `sparkler` | `string` |  |
| `sparkles` | `string` |  |
| `sparkling_heart` | `string` |  |
| `speak_no_evil` | `string` |  |
| `speaker` | `string` |  |
| `speaking_head` | `string` |  |
| `speech_balloon` | `string` |  |
| `speedboat` | `string` |  |
| `spider` | `string` |  |
| `spider_web` | `string` |  |
| `spiral_calendar` | `string` |  |
| `spiral_notepad` | `string` |  |
| `sponge` | `string` |  |
| `spoon` | `string` |  |
| `squid` | `string` |  |
| `sri_lanka` | `string` |  |
| `st_barthelemy` | `string` |  |
| `st_helena` | `string` |  |
| `st_kitts_nevis` | `string` |  |
| `st_lucia` | `string` |  |
| `st_martin` | `string` |  |
| `st_pierre_miquelon` | `string` |  |
| `st_vincent_grenadines` | `string` |  |
| `stadium` | `string` |  |
| `standing_man` | `string` |  |
| `standing_person` | `string` |  |
| `standing_woman` | `string` |  |
| `star` | `string` |  |
| `star2` | `string` |  |
| `star_and_crescent` | `string` |  |
| `star_of_david` | `string` |  |
| `star_struck` | `string` |  |
| `stars` | `string` |  |
| `station` | `string` |  |
| `statue_of_liberty` | `string` |  |
| `steam_locomotive` | `string` |  |
| `stethoscope` | `string` |  |
| `stew` | `string` |  |
| `stop_button` | `string` |  |
| `stop_sign` | `string` |  |
| `stopwatch` | `string` |  |
| `straight_ruler` | `string` |  |
| `strawberry` | `string` |  |
| `stuck_out_tongue` | `string` |  |
| `stuck_out_tongue_closed_eyes` | `string` |  |
| `stuck_out_tongue_winking_eye` | `string` |  |
| `student` | `string` |  |
| `studio_microphone` | `string` |  |
| `stuffed_flatbread` | `string` |  |
| `sudan` | `string` |  |
| `sun_behind_large_cloud` | `string` |  |
| `sun_behind_rain_cloud` | `string` |  |
| `sun_behind_small_cloud` | `string` |  |
| `sun_with_face` | `string` |  |
| `sunflower` | `string` |  |
| `sunglasses` | `string` |  |
| `sunny` | `string` |  |
| `sunrise` | `string` |  |
| `sunrise_over_mountains` | `string` |  |
| `superhero` | `string` |  |
| `superhero_man` | `string` |  |
| `superhero_woman` | `string` |  |
| `supervillain` | `string` |  |
| `supervillain_man` | `string` |  |
| `supervillain_woman` | `string` |  |
| `surfer` | `string` |  |
| `surfing_man` | `string` |  |
| `surfing_woman` | `string` |  |
| `suriname` | `string` |  |
| `sushi` | `string` |  |
| `suspect` | `string` |  |
| `suspension_railway` | `string` |  |
| `svalbard_jan_mayen` | `string` |  |
| `swan` | `string` |  |
| `swaziland` | `string` |  |
| `sweat` | `string` |  |
| `sweat_drops` | `string` |  |
| `sweat_smile` | `string` |  |
| `sweden` | `string` |  |
| `sweet_potato` | `string` |  |
| `swim_brief` | `string` |  |
| `swimmer` | `string` |  |
| `swimming_man` | `string` |  |
| `swimming_woman` | `string` |  |
| `switzerland` | `string` |  |
| `symbols` | `string` |  |
| `synagogue` | `string` |  |
| `syria` | `string` |  |
| `syringe` | `string` |  |
| `taco` | `string` |  |
| `tada` | `string` |  |
| `taiwan` | `string` |  |
| `tajikistan` | `string` |  |
| `takeout_box` | `string` |  |
| `tamale` | `string` |  |
| `tanabata_tree` | `string` |  |
| `tangerine` | `string` |  |
| `tanzania` | `string` |  |
| `taurus` | `string` |  |
| `taxi` | `string` |  |
| `tea` | `string` |  |
| `teacher` | `string` |  |
| `teapot` | `string` |  |
| `technologist` | `string` |  |
| `teddy_bear` | `string` |  |
| `telephone` | `string` |  |
| `telephone_receiver` | `string` |  |
| `telescope` | `string` |  |
| `tennis` | `string` |  |
| `tent` | `string` |  |
| `test_tube` | `string` |  |
| `thailand` | `string` |  |
| `thermometer` | `string` |  |
| `thinking` | `string` |  |
| `thong_sandal` | `string` |  |
| `thought_balloon` | `string` |  |
| `thread` | `string` |  |
| `three` | `string` |  |
| `thumbsdown` | `string` |  |
| `thumbsup` | `string` |  |
| `ticket` | `string` |  |
| `tickets` | `string` |  |
| `tiger` | `string` |  |
| `tiger2` | `string` |  |
| `timer_clock` | `string` |  |
| `timor_leste` | `string` |  |
| `tipping_hand_man` | `string` |  |
| `tipping_hand_person` | `string` |  |
| `tipping_hand_woman` | `string` |  |
| `tired_face` | `string` |  |
| `tm` | `string` |  |
| `togo` | `string` |  |
| `toilet` | `string` |  |
| `tokelau` | `string` |  |
| `tokyo_tower` | `string` |  |
| `tomato` | `string` |  |
| `tonga` | `string` |  |
| `tongue` | `string` |  |
| `toolbox` | `string` |  |
| `tooth` | `string` |  |
| `toothbrush` | `string` |  |
| `top` | `string` |  |
| `tophat` | `string` |  |
| `tornado` | `string` |  |
| `tr` | `string` |  |
| `trackball` | `string` |  |
| `tractor` | `string` |  |
| `traffic_light` | `string` |  |
| `train` | `string` |  |
| `train2` | `string` |  |
| `tram` | `string` |  |
| `transgender_flag` | `string` |  |
| `transgender_symbol` | `string` |  |
| `trex` | `string` |  |
| `triangular_flag_on_post` | `string` |  |
| `triangular_ruler` | `string` |  |
| `trident` | `string` |  |
| `trinidad_tobago` | `string` |  |
| `tristan_da_cunha` | `string` |  |
| `triumph` | `string` |  |
| `trolleybus` | `string` |  |
| `trollface` | `string` |  |
| `trophy` | `string` |  |
| `tropical_drink` | `string` |  |
| `tropical_fish` | `string` |  |
| `truck` | `string` |  |
| `trumpet` | `string` |  |
| `tshirt` | `string` |  |
| `tulip` | `string` |  |
| `tumbler_glass` | `string` |  |
| `tunisia` | `string` |  |
| `turkey` | `string` |  |
| `turkmenistan` | `string` |  |
| `turks_caicos_islands` | `string` |  |
| `turtle` | `string` |  |
| `tuvalu` | `string` |  |
| `tv` | `string` |  |
| `twisted_rightwards_arrows` | `string` |  |
| `two` | `string` |  |
| `two_hearts` | `string` |  |
| `two_men_holding_hands` | `string` |  |
| `two_women_holding_hands` | `string` |  |
| `u5272` | `string` |  |
| `u5408` | `string` |  |
| `u55b6` | `string` |  |
| `u6307` | `string` |  |
| `u6708` | `string` |  |
| `u6709` | `string` |  |
| `u6e80` | `string` |  |
| `u7121` | `string` |  |
| `u7533` | `string` |  |
| `u7981` | `string` |  |
| `u7a7a` | `string` |  |
| `uganda` | `string` |  |
| `uk` | `string` |  |
| `ukraine` | `string` |  |
| `umbrella` | `string` |  |
| `unamused` | `string` |  |
| `underage` | `string` |  |
| `unicorn` | `string` |  |
| `united_arab_emirates` | `string` |  |
| `united_nations` | `string` |  |
| `unlock` | `string` |  |
| `up` | `string` |  |
| `upside_down_face` | `string` |  |
| `uruguay` | `string` |  |
| `us` | `string` |  |
| `us_outlying_islands` | `string` |  |
| `us_virgin_islands` | `string` |  |
| `uzbekistan` | `string` |  |
| `v` | `string` |  |
| `vampire` | `string` |  |
| `vampire_man` | `string` |  |
| `vampire_woman` | `string` |  |
| `vanuatu` | `string` |  |
| `vatican_city` | `string` |  |
| `venezuela` | `string` |  |
| `vertical_traffic_light` | `string` |  |
| `vhs` | `string` |  |
| `vibration_mode` | `string` |  |
| `video_camera` | `string` |  |
| `video_game` | `string` |  |
| `vietnam` | `string` |  |
| `violin` | `string` |  |
| `virgo` | `string` |  |
| `volcano` | `string` |  |
| `volleyball` | `string` |  |
| `vomiting_face` | `string` |  |
| `vs` | `string` |  |
| `vulcan_salute` | `string` |  |
| `waffle` | `string` |  |
| `wales` | `string` |  |
| `walking` | `string` |  |
| `walking_man` | `string` |  |
| `walking_woman` | `string` |  |
| `wallis_futuna` | `string` |  |
| `waning_crescent_moon` | `string` |  |
| `waning_gibbous_moon` | `string` |  |
| `warning` | `string` |  |
| `wastebasket` | `string` |  |
| `watch` | `string` |  |
| `water_buffalo` | `string` |  |
| `water_polo` | `string` |  |
| `watermelon` | `string` |  |
| `wave` | `string` |  |
| `wavy_dash` | `string` |  |
| `waxing_crescent_moon` | `string` |  |
| `waxing_gibbous_moon` | `string` |  |
| `wc` | `string` |  |
| `weary` | `string` |  |
| `wedding` | `string` |  |
| `weight_lifting` | `string` |  |
| `weight_lifting_man` | `string` |  |
| `weight_lifting_woman` | `string` |  |
| `western_sahara` | `string` |  |
| `whale` | `string` |  |
| `whale2` | `string` |  |
| `wheel_of_dharma` | `string` |  |
| `wheelchair` | `string` |  |
| `white_check_mark` | `string` |  |
| `white_circle` | `string` |  |
| `white_flag` | `string` |  |
| `white_flower` | `string` |  |
| `white_haired_man` | `string` |  |
| `white_haired_woman` | `string` |  |
| `white_heart` | `string` |  |
| `white_large_square` | `string` |  |
| `white_medium_small_square` | `string` |  |
| `white_medium_square` | `string` |  |
| `white_small_square` | `string` |  |
| `white_square_button` | `string` |  |
| `wilted_flower` | `string` |  |
| `wind_chime` | `string` |  |
| `wind_face` | `string` |  |
| `window` | `string` |  |
| `wine_glass` | `string` |  |
| `wink` | `string` |  |
| `wolf` | `string` |  |
| `woman` | `string` |  |
| `woman_artist` | `string` |  |
| `woman_astronaut` | `string` |  |
| `woman_beard` | `string` |  |
| `woman_cartwheeling` | `string` |  |
| `woman_cook` | `string` |  |
| `woman_dancing` | `string` |  |
| `woman_facepalming` | `string` |  |
| `woman_factory_worker` | `string` |  |
| `woman_farmer` | `string` |  |
| `woman_feeding_baby` | `string` |  |
| `woman_firefighter` | `string` |  |
| `woman_health_worker` | `string` |  |
| `woman_in_manual_wheelchair` | `string` |  |
| `woman_in_motorized_wheelchair` | `string` |  |
| `woman_in_tuxedo` | `string` |  |
| `woman_judge` | `string` |  |
| `woman_juggling` | `string` |  |
| `woman_mechanic` | `string` |  |
| `woman_office_worker` | `string` |  |
| `woman_pilot` | `string` |  |
| `woman_playing_handball` | `string` |  |
| `woman_playing_water_polo` | `string` |  |
| `woman_scientist` | `string` |  |
| `woman_shrugging` | `string` |  |
| `woman_singer` | `string` |  |
| `woman_student` | `string` |  |
| `woman_teacher` | `string` |  |
| `woman_technologist` | `string` |  |
| `woman_with_headscarf` | `string` |  |
| `woman_with_probing_cane` | `string` |  |
| `woman_with_turban` | `string` |  |
| `woman_with_veil` | `string` |  |
| `womans_clothes` | `string` |  |
| `womans_hat` | `string` |  |
| `women_wrestling` | `string` |  |
| `womens` | `string` |  |
| `wood` | `string` |  |
| `woozy_face` | `string` |  |
| `world_map` | `string` |  |
| `worm` | `string` |  |
| `worried` | `string` |  |
| `wrench` | `string` |  |
| `wrestling` | `string` |  |
| `writing_hand` | `string` |  |
| `x` | `string` |  |
| `yarn` | `string` |  |
| `yawning_face` | `string` |  |
| `yellow_circle` | `string` |  |
| `yellow_heart` | `string` |  |
| `yellow_square` | `string` |  |
| `yemen` | `string` |  |
| `yen` | `string` |  |
| `yin_yang` | `string` |  |
| `yo_yo` | `string` |  |
| `yum` | `string` |  |
| `zambia` | `string` |  |
| `zany_face` | `string` |  |
| `zap` | `string` |  |
| `zebra` | `string` |  |
| `zero` | `string` |  |
| `zimbabwe` | `string` |  |
| `zipper_mouth_face` | `string` |  |
| `zombie` | `string` |  |
| `zombie_man` | `string` |  |
| `zombie_woman` | `string` |  |
| `zzz` | `string` |  |

#### Example: Load

```go
emoji, err := client.Emoji(nil).Load(map[string]any{"id": "emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emoji) // the loaded record
```


### EmptyObject

Create an instance: `emptyObject := client.EmptyObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attestations` | `[]any` |  |
| `enable_debug_logging` | `bool` | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `[]any` | Array of unique strings. |
| `key_id` | `string` | ID of the key you used to encrypt the secret. |
| `languages` | `[]any` | CodeQL languages to be analyzed. |
| `name` | `string` | The name of the variable. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `selected_repository_ids` | `[]any` | An array of repository ids that can access the organization variable. |
| `state` | `string` | The desired state of code scanning default setup. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `use_default` | `bool` | Whether to use the default template or not. |
| `value` | `string` | The value of the variable. |
| `visibility` | `string` | The type of repositories in the organization that can access the variable. |

#### Example: Load

```go
emptyObject, err := client.EmptyObject(nil).Load(map[string]any{"subject_digest": "subject_digest", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emptyObject) // the loaded record
```

#### Example: Create

```go
result, err := client.EmptyObject(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "encrypted_value": "example_encrypted_value",
    "key_id": "example_key_id",
    "name": "example_name",
    "use_default": true,
    "value": "example_value",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnterpriseTeam

Create an instance: `enterpriseTeam := client.EnterpriseTeam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` | A description of the team. |
| `group_id` | `string` | The ID of the IdP group to assign team membership with. |
| `group_name` | `string` | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `members_url` | `string` |  |
| `name` | `string` | The name of the team. |
| `organization_selection_type` | `string` |  |
| `slug` | `string` |  |
| `sync_to_organizations` | `string` | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
enterpriseTeam, err := client.EnterpriseTeam(nil).Load(map[string]any{"id": "enterprise_team_id", "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseTeam) // the loaded record
```

#### Example: List

```go
enterpriseTeams, err := client.EnterpriseTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseTeams) // the array of records
```

#### Example: Create

```go
result, err := client.EnterpriseTeam(nil).Create(map[string]any{
    "enterprise": "example_enterprise",
    "created_at": "example_created_at",
    "group_id": "example_group_id",
    "html_url": "example_html_url",
    "id": 1,
    "members_url": "example_members_url",
    "name": "example_name",
    "slug": "example_slug",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnterpriseTeamMembership

Create an instance: `enterpriseTeamMembership := client.EnterpriseTeamMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Environment

Create an instance: `environment := client.Environment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `map[string]any` | The type of deployment branch policy for this environment. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the environment. |
| `name` | `string` | The name of the environment. |
| `node_id` | `string` |  |
| `prevent_self_review` | `bool` | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `[]any` | Built-in deployment protection rules for the environment. |
| `reviewers` | `[]any` | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` |  |
| `wait_timer` | `int` | The amount of time to delay a job after the job is initially triggered. |

#### Example: Load

```go
environment, err := client.Environment(nil).Load(map[string]any{"id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(environment) // the loaded record
```


### EnvironmentApproval

Create an instance: `environmentApproval := client.EnvironmentApproval(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | The comment submitted with the deployment review |
| `environments` | `[]any` | The list of environments that were approved or rejected |
| `state` | `string` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `map[string]any` | A GitHub user. |

#### Example: List

```go
environmentApprovals, err := client.EnvironmentApproval(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(environmentApprovals) // the array of records
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | Actor |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `org` | `map[string]any` | Actor |
| `payload` | `map[string]any` |  |
| `public` | `bool` |  |
| `repo` | `map[string]any` |  |
| `type` | `string` |  |

#### Example: Load

```go
event, err := client.Event(nil).Load(map[string]any{"org": "org", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(event) // the loaded record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(events) // the array of records
```


### Feed

Create an instance: `feed := client.Feed(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_actor_url` | `string` |  |
| `current_user_organization_url` | `string` |  |
| `current_user_organization_urls` | `[]any` |  |
| `current_user_public_url` | `string` |  |
| `current_user_url` | `string` |  |
| `links` | `map[string]any` |  |
| `repository_discussions_category_url` | `string` | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` |  |
| `timeline_url` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```go
feeds, err := client.Feed(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(feeds) // the array of records
```


### FileCommit

Create an instance: `fileCommit := client.FileCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` | The author of the file. |
| `branch` | `string` | The branch name. |
| `commit` | `map[string]any` |  |
| `committer` | `map[string]any` | The person that committed the file. |
| `content` | `map[string]any` | The new file content, using Base64 encoding. |
| `message` | `string` | The commit message. |
| `sha` | `string` | **Required if you are updating a file**. |


### Follower

Create an instance: `follower := client.Follower(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
followers, err := client.Follower(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(followers) // the array of records
```


### Following

Create an instance: `following := client.Following(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
followings, err := client.Following(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(followings) // the array of records
```


### FullRepository

Create an instance: `fullRepository := client.FullRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `allow_forking` | `bool` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `bool` | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `allow_rebase_merge` | `bool` | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `allow_squash_merge` | `bool` | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `allow_update_branch` | `bool` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is allowed. |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether to archive this repository. |
| `assignees_url` | `string` |  |
| `auto_init` | `bool` | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code of Conduct Simple |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `string` |  |
| `description` | `string` | A short description of the new repository. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `int` |  |
| `gitignore_template` | `string` | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `bool` | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `string` | A URL with more information about the repository. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `include_all_branches` | `bool` | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `bool` | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `license_template` | `string` | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the new repository. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `map[string]any` | A GitHub user. |
| `owner` | `map[string]any` | A GitHub user. |
| `parent` | `map[string]any` | A repository on GitHub. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `map[string]any` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `map[string]any` | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_id` | `int` | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template_repository` | `map[string]any` | A repository on GitHub. |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```go
fullRepository, err := client.FullRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fullRepository) // the loaded record
```

#### Example: Create

```go
result, err := client.FullRepository(nil).Create(map[string]any{
    "archive_url": "example_archive_url",
    "archived": true,
    "assignees_url": "example_assignees_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "clone_url": "example_clone_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "created_at": "example_created_at",
    "default_branch": "example_default_branch",
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "disabled": true,
    "downloads_url": "example_downloads_url",
    "events_url": "example_events_url",
    "fork": true,
    "forks": 1,
    "forks_count": 1,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "git_url": "example_git_url",
    "github_id": 1,
    "has_discussions": true,
    "has_issues": true,
    "has_pages": true,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "example_homepage",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": "example_id",
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "language": "example_language",
    "languages_url": "example_languages_url",
    "license": map[string]any{},
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "mirror_url": "example_mirror_url",
    "name": "example_name",
    "network_count": 1,
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "open_issues": 1,
    "open_issues_count": 1,
    "organization": map[string]any{},
    "owner": map[string]any{},
    "parent": map[string]any{},
    "permissions": map[string]any{},
    "private": true,
    "pulls_url": "example_pulls_url",
    "pushed_at": "example_pushed_at",
    "releases_url": "example_releases_url",
    "size": 1,
    "source": map[string]any{},
    "ssh_url": "example_ssh_url",
    "stargazers_count": 1,
    "stargazers_url": "example_stargazers_url",
    "statuses_url": "example_statuses_url",
    "subscribers_count": 1,
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "svn_url": "example_svn_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "template_repository": map[string]any{},
    "trees_url": "example_trees_url",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "watchers": 1,
    "watchers_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Gist

Create an instance: `gist := client.Gist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` | Description of the gist |
| `files` | `map[string]any` | Names and content for the files that make up the gist |
| `fork_of` | `map[string]any` | Gist |
| `forks` | `[]any` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `[]any` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: Load

```go
gist, err := client.Gist(nil).Load(map[string]any{"id": "gist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gist) // the loaded record
```

#### Example: List

```go
gists, err := client.Gist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gists) // the array of records
```

#### Example: Create

```go
result, err := client.Gist(nil).Create(map[string]any{
    "fork_of": map[string]any{},
    "owner": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GistComment

Create an instance: `gistComment := client.GistComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `avatar_url` | `string` |  |
| `body` | `string` | The comment text. |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: Load

```go
gistComment, err := client.GistComment(nil).Load(map[string]any{"id": 1, "gist_id": "gist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gistComment) // the loaded record
```

#### Example: List

```go
gistComments, err := client.GistComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gistComments) // the array of records
```

#### Example: Create

```go
result, err := client.GistComment(nil).Create(map[string]any{
    "id": "example_id",
    "author_association": "example_author_association",
    "avatar_url": "example_avatar_url",
    "body": "example_body",
    "created_at": "example_created_at",
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "gists_url": "example_gists_url",
    "gravatar_id": "example_gravatar_id",
    "html_url": "example_html_url",
    "login": "example_login",
    "node_id": "example_node_id",
    "organizations_url": "example_organizations_url",
    "received_events_url": "example_received_events_url",
    "repos_url": "example_repos_url",
    "site_admin": true,
    "starred_url": "example_starred_url",
    "subscriptions_url": "example_subscriptions_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GistCommit

Create an instance: `gistCommit := client.GistCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_status` | `map[string]any` |  |
| `committed_at` | `string` |  |
| `id` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |
| `version` | `string` |  |

#### Example: List

```go
gistCommits, err := client.GistCommit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gistCommits) // the array of records
```


### GistSimple

Create an instance: `gistSimple := client.GistSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `map[string]any` |  |
| `fork_of` | `map[string]any` | Gist |
| `forks` | `[]any` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `[]any` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` |  |

#### Example: List

```go
gistSimples, err := client.GistSimple(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gistSimples) // the array of records
```


### Git

Create an instance: `git := client.Git(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### GitCommit

Create an instance: `gitCommit := client.GitCommit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `map[string]any` | Identifying information for the git-user |
| `committer` | `map[string]any` | Identifying information for the git-user |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `message` | `string` | Message describing the purpose of the commit |
| `node_id` | `string` |  |
| `parents` | `[]any` | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | SHA for the commit |
| `signature` | `string` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `map[string]any` | The SHA of the tree object this commit points to |
| `url` | `string` |  |
| `verification` | `map[string]any` |  |

#### Example: Load

```go
gitCommit, err := client.GitCommit(nil).Load(map[string]any{"id": "git_commit_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitCommit) // the loaded record
```

#### Example: Create

```go
result, err := client.GitCommit(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "author": map[string]any{},
    "committer": map[string]any{},
    "html_url": "example_html_url",
    "message": "example_message",
    "node_id": "example_node_id",
    "parents": []any{},
    "sha": "example_sha",
    "tree": map[string]any{},
    "url": "example_url",
    "verification": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GitRef

Create an instance: `gitRef := client.GitRef(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `force` | `bool` | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `object` | `map[string]any` |  |
| `ref` | `string` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | SHA for the reference |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
gitRef, err := client.GitRef(nil).Load(map[string]any{"id": "git_ref_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitRef) // the loaded record
```

#### Example: Create

```go
result, err := client.GitRef(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "node_id": "example_node_id",
    "object": map[string]any{},
    "ref": "example_ref",
    "sha": "example_sha",
    "type": "example_type",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GitTag

Create an instance: `gitTag := client.GitTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `message` | `string` | Message describing the purpose of the tag |
| `node_id` | `string` |  |
| `object` | `map[string]any` | The SHA of the git object this is tagging. |
| `sha` | `string` |  |
| `tag` | `string` | Name of the tag |
| `tagger` | `map[string]any` | An object with information about the individual creating the tag. |
| `type` | `string` | The type of the object we're tagging. |
| `url` | `string` | URL for the tag |
| `verification` | `map[string]any` |  |

#### Example: Load

```go
gitTag, err := client.GitTag(nil).Load(map[string]any{"id": "git_tag_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitTag) // the loaded record
```

#### Example: Create

```go
result, err := client.GitTag(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "message": "example_message",
    "node_id": "example_node_id",
    "object": map[string]any{},
    "sha": "example_sha",
    "tag": "example_tag",
    "tagger": map[string]any{},
    "type": "example_type",
    "url": "example_url",
    "verification": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GitTree

Create an instance: `gitTree := client.GitTree(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_tree` | `string` | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` |  |
| `sha` | `string` |  |
| `tree` | `[]any` | Objects specifying a tree structure |
| `truncated` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```go
gitTree, err := client.GitTree(nil).Load(map[string]any{"id": "git_tree_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitTree) // the loaded record
```

#### Example: Create

```go
result, err := client.GitTree(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "sha": "example_sha",
    "tree": []any{},
    "truncated": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Gitignore

Create an instance: `gitignore := client.Gitignore(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
gitignores, err := client.Gitignore(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitignores) // the array of records
```


### GitignoreTemplate

Create an instance: `gitignoreTemplate := client.GitignoreTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `source` | `string` |  |

#### Example: Load

```go
gitignoreTemplate, err := client.GitignoreTemplate(nil).Load(map[string]any{"id": "gitignore_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gitignoreTemplate) // the loaded record
```


### GlobalAdvisory

Create an instance: `globalAdvisory := client.GlobalAdvisory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credits` | `[]any` | The users who contributed to the advisory. |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `map[string]any` |  |
| `cvss_severities` | `map[string]any` |  |
| `cwes` | `[]any` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `epss` | `map[string]any` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | The URL for the advisory. |
| `id` | `string` |  |
| `identifiers` | `[]any` |  |
| `nvd_published_at` | `string` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `[]any` |  |
| `repository_advisory_url` | `string` | The API URL for the repository advisory. |
| `severity` | `string` | The severity of the advisory. |
| `source_code_location` | `string` | The URL of the advisory's source code. |
| `summary` | `string` | A short summary of the advisory. |
| `type` | `string` | The type of advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `[]any` | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```go
globalAdvisory, err := client.GlobalAdvisory(nil).Load(map[string]any{"id": "global_advisory_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalAdvisory) // the loaded record
```

#### Example: List

```go
globalAdvisorys, err := client.GlobalAdvisory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(globalAdvisorys) // the array of records
```


### GpgKey

Create an instance: `gpgKey := client.GpgKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `armored_public_key` | `string` | A GPG key in ASCII-armored format. |
| `can_certify` | `bool` |  |
| `can_encrypt_comms` | `bool` |  |
| `can_encrypt_storage` | `bool` |  |
| `can_sign` | `bool` |  |
| `created_at` | `string` |  |
| `emails` | `[]any` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `key_id` | `string` |  |
| `name` | `string` | A descriptive name for the new key. |
| `primary_key_id` | `int` |  |
| `public_key` | `string` |  |
| `raw_key` | `string` |  |
| `revoked` | `bool` |  |
| `subkeys` | `[]any` |  |

#### Example: Load

```go
gpgKey, err := client.GpgKey(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(gpgKey) // the loaded record
```

#### Example: List

```go
gpgKeys, err := client.GpgKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(gpgKeys) // the array of records
```

#### Example: Create

```go
result, err := client.GpgKey(nil).Create(map[string]any{
    "armored_public_key": "example_armored_public_key",
    "can_certify": true,
    "can_encrypt_comms": true,
    "can_encrypt_storage": true,
    "can_sign": true,
    "created_at": "example_created_at",
    "emails": []any{},
    "expires_at": "example_expires_at",
    "id": 1,
    "key_id": "example_key_id",
    "primary_key_id": 1,
    "public_key": "example_public_key",
    "raw_key": "example_raw_key",
    "revoked": true,
    "subkeys": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Hook

Create an instance: `hook := client.Hook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `[]any` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `map[string]any` | Configuration object of the webhook |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `[]any` | Determines what events the hook is triggered for. |
| `id` | `int` | Unique identifier of the webhook. |
| `last_response` | `map[string]any` |  |
| `name` | `string` | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` |  |
| `remove_events` | `[]any` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
hook, err := client.Hook(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(hook) // the loaded record
```

#### Example: List

```go
hooks, err := client.Hook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hooks) // the array of records
```

#### Example: Create

```go
result, err := client.Hook(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "active": true,
    "config": map[string]any{},
    "created_at": "example_created_at",
    "events": []any{},
    "id": 1,
    "last_response": map[string]any{},
    "name": "example_name",
    "ping_url": "example_ping_url",
    "test_url": "example_test_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### HookDelivery

Create an instance: `hookDelivery := client.HookDelivery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the delivery was delivered. |
| `duration` | `float64` | Time spent delivering. |
| `event` | `string` | The event that triggered the delivery. |
| `guid` | `string` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Unique identifier of the delivery. |
| `installation_id` | `int` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Whether the delivery is a redelivery. |
| `repository_id` | `int` | The id of the repository associated with this event. |
| `request` | `map[string]any` |  |
| `response` | `map[string]any` |  |
| `status` | `string` | Description of the status of the attempted delivery |
| `status_code` | `int` | Status code received when delivery was made. |
| `throttled_at` | `string` | Time when the webhook delivery was throttled. |
| `url` | `string` | The URL target of the delivery. |

#### Example: Load

```go
hookDelivery, err := client.HookDelivery(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(hookDelivery) // the loaded record
```


### HookDeliveryItem

Create an instance: `hookDeliveryItem := client.HookDeliveryItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the webhook delivery occurred. |
| `duration` | `float64` | Time spent delivering. |
| `event` | `string` | The event that triggered the delivery. |
| `guid` | `string` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Unique identifier of the webhook delivery. |
| `installation_id` | `int` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Whether the webhook delivery is a redelivery. |
| `repository_id` | `int` | The id of the repository associated with this event. |
| `status` | `string` | Describes the response returned after attempting the delivery. |
| `status_code` | `int` | Status code received when delivery was made. |
| `throttled_at` | `string` | Time when the webhook delivery was throttled. |

#### Example: List

```go
hookDeliveryItems, err := client.HookDeliveryItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hookDeliveryItems) // the array of records
```


### HostedCompute

Create an instance: `hostedCompute := client.HostedCompute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `string` | The hosted compute service the network configuration supports. |
| `created_on` | `string` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | The unique identifier of the network configuration. |
| `name` | `string` | The name of the network configuration. |
| `network_settings_ids` | `[]any` | The unique identifier of each network settings in the configuration. |

#### Example: List

```go
hostedComputes, err := client.HostedCompute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hostedComputes) // the array of records
```


### Hovercard

Create an instance: `hovercard := client.Hovercard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `octicon` | `string` |  |

#### Example: List

```go
hovercards, err := client.Hovercard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hovercards) // the array of records
```


### Import

Create an instance: `import_ := client.Import(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors_count` | `int` |  |
| `authors_url` | `string` |  |
| `commit_count` | `int` |  |
| `error_message` | `string` |  |
| `failed_step` | `string` |  |
| `has_large_files` | `bool` |  |
| `html_url` | `string` |  |
| `human_name` | `string` |  |
| `import_percent` | `int` |  |
| `large_files_count` | `int` |  |
| `large_files_size` | `int` |  |
| `message` | `string` |  |
| `project_choices` | `[]any` |  |
| `push_percent` | `int` |  |
| `repository_url` | `string` |  |
| `status` | `string` |  |
| `status_text` | `string` |  |
| `svc_root` | `string` |  |
| `svn_root` | `string` |  |
| `tfvc_project` | `string` | For a tfvc import, the name of the project that is being imported. |
| `url` | `string` |  |
| `use_lfs` | `bool` | Whether to store large files during the import. |
| `vcs` | `string` | The originating VCS type. |
| `vcs_password` | `string` | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | `string` | The URL of the originating repository. |
| `vcs_username` | `string` | If authentication is required, the username to provide to `vcs_url`. |

#### Example: List

```go
import_s, err := client.Import(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(import_s) // the array of records
```


### Installation

Create an instance: `installation := client.Installation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `any` |  |
| `app_id` | `int` |  |
| `app_slug` | `string` |  |
| `client_id` | `string` |  |
| `contact_email` | `string` |  |
| `created_at` | `string` |  |
| `events` | `[]any` |  |
| `has_multiple_single_files` | `bool` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the installation. |
| `permissions` | `map[string]any` | The permissions granted to the user access token. |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `[]any` |  |
| `suspended_at` | `string` |  |
| `suspended_by` | `map[string]any` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
installation, err := client.Installation(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(installation) // the loaded record
```

#### Example: List

```go
installations, err := client.Installation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(installations) // the array of records
```


### InstallationToken

Create an instance: `installationToken := client.InstallationToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `permissions` | `map[string]any` | The permissions granted to the user access token. |
| `repositories` | `[]any` | List of repository names that the token should have access to |
| `repository_ids` | `[]any` | List of repository IDs that the token should have access to |

#### Example: Create

```go
result, err := client.InstallationToken(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Integration

Create an instance: `integration := client.Integration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `[]any` | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `events` | `[]any` | The list of events for the GitHub app. |
| `external_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the GitHub app |
| `installations_count` | `int` | The number of installations associated with the GitHub app. |
| `name` | `string` | The name of the GitHub app |
| `node_id` | `string` |  |
| `owner` | `any` |  |
| `permissions` | `map[string]any` | The set of permissions for the GitHub app |
| `slug` | `string` | The slug name of the GitHub app |
| `updated_at` | `string` |  |

#### Example: Load

```go
integration, err := client.Integration(nil).Load(map[string]any{"app_slug": "app_slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(integration) // the loaded record
```

#### Example: List

```go
integrations, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrations) // the array of records
```

#### Example: Create

```go
result, err := client.Integration(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "owner": "example_owner",
    "repo": "example_repo",
    "apps": []any{},
    "created_at": "example_created_at",
    "description": "example_description",
    "events": []any{},
    "external_url": "example_external_url",
    "html_url": "example_html_url",
    "id": 1,
    "name": "example_name",
    "node_id": "example_node_id",
    "permissions": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IntegrationInstallation

Create an instance: `integrationInstallation := client.IntegrationInstallation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` |  |
| `created_at` | `string` |  |
| `id` | `int` | Unique identifier of the request installation. |
| `node_id` | `string` |  |
| `requester` | `map[string]any` | A GitHub user. |

#### Example: List

```go
integrationInstallations, err := client.IntegrationInstallation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(integrationInstallations) // the array of records
```


### Interaction

Create an instance: `interaction := client.Interaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `limit` | `string` |  |
| `origin` | `string` |  |

#### Example: Load

```go
interaction, err := client.Interaction(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(interaction) // the loaded record
```


### InteractionLimit

Create an instance: `interactionLimit := client.InteractionLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `expiry` | `string` | The duration of the interaction restriction. |
| `limit` | `string` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` |  |


### Issue

Create an instance: `issue := client.Issue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `actor` | `map[string]any` | A GitHub user. |
| `after_id` | `int` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `map[string]any` | A GitHub user. |
| `assignees` | `[]any` | Usernames of people to assign this issue to. |
| `assigner` | `map[string]any` | A GitHub user. |
| `author_association` | `string` | How the author is associated with the repository. |
| `before_id` | `int` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | Contents of the issue comment |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `map[string]any` | A GitHub user. |
| `color` | `string` | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` |  |
| `comments_url` | `string` |  |
| `commit_id` | `string` |  |
| `commit_url` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` | Whether this label comes by default in a new repository. |
| `description` | `string` | Optional description of the label, such as its purpose. |
| `dismissed_review` | `map[string]any` |  |
| `draft` | `bool` |  |
| `event` | `string` |  |
| `events_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the issue comment |
| `issue` | `map[string]any` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `map[string]any` |  |
| `issue_field_values` | `[]any` |  |
| `issue_id` | `int` | The id of the issue that blocks the current issue |
| `issue_url` | `string` |  |
| `label` | `map[string]any` | Issue Event Label |
| `labels` | `[]any` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` |  |
| `lock_reason` | `string` | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` |  |
| `milestone` | `map[string]any` | Issue Event Milestone |
| `name` | `string` | The name of the label. |
| `node_id` | `string` |  |
| `number` | `int` | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `project_card` | `map[string]any` | Issue Event Project Card |
| `pull_request` | `map[string]any` |  |
| `reactions` | `map[string]any` |  |
| `rename` | `map[string]any` | Issue Event Rename |
| `replace_parent` | `bool` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `map[string]any` | A repository on GitHub. |
| `repository_url` | `string` |  |
| `requested_reviewer` | `map[string]any` | A GitHub user. |
| `requested_team` | `map[string]any` | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `map[string]any` | A GitHub user. |
| `state` | `string` | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | The reason for the current state |
| `sub_issue_id` | `int` | The id of the sub-issue to add. |
| `sub_issues_summary` | `map[string]any` |  |
| `timeline_url` | `string` |  |
| `title` | `string` | Title of the issue |
| `type` | `map[string]any` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the issue comment |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Load

```go
issue, err := client.Issue(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(issue) // the loaded record
```

#### Example: List

```go
issues, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issues) // the array of records
```

#### Example: Create

```go
result, err := client.Issue(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "actor": map[string]any{},
    "assignee": map[string]any{},
    "assigner": map[string]any{},
    "author_association": "example_author_association",
    "closed_at": "example_closed_at",
    "closed_by": map[string]any{},
    "comments": 1,
    "comments_url": "example_comments_url",
    "commit_id": "example_commit_id",
    "commit_url": "example_commit_url",
    "created_at": "example_created_at",
    "dismissed_review": map[string]any{},
    "event": "example_event",
    "events_url": "example_events_url",
    "html_url": "example_html_url",
    "id": 1,
    "issue": map[string]any{},
    "issue_dependencies_summary": map[string]any{},
    "issue_id": 1,
    "issue_url": "example_issue_url",
    "label": map[string]any{},
    "labels": []any{},
    "labels_url": "example_labels_url",
    "locked": true,
    "milestone": map[string]any{},
    "node_id": "example_node_id",
    "number": 1,
    "performed_via_github_app": map[string]any{},
    "project_card": map[string]any{},
    "pull_request": map[string]any{},
    "reactions": map[string]any{},
    "rename": map[string]any{},
    "repository": map[string]any{},
    "repository_url": "example_repository_url",
    "requested_reviewer": map[string]any{},
    "requested_team": map[string]any{},
    "review_requester": map[string]any{},
    "state": "example_state",
    "sub_issue_id": 1,
    "sub_issues_summary": map[string]any{},
    "title": "example_title",
    "type": map[string]any{},
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IssueType

Create an instance: `issueType := client.IssueType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` | The color of the issue type. |
| `created_at` | `string` | The time the issue type created. |
| `description` | `string` | The description of the issue type. |
| `id` | `int` | The unique identifier of the issue type. |
| `is_enabled` | `bool` | The enabled state of the issue type. |
| `name` | `string` | The name of the issue type. |
| `node_id` | `string` | The node identifier of the issue type. |
| `updated_at` | `string` | The time the issue type last updated. |

#### Example: List

```go
issueTypes, err := client.IssueType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(issueTypes) // the array of records
```

#### Example: Create

```go
result, err := client.IssueType(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "description": "example_description",
    "id": 1,
    "name": "example_name",
    "node_id": "example_node_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Job

Create an instance: `job := client.Job(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_run_url` | `string` |  |
| `completed_at` | `string` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | The outcome of the job. |
| `created_at` | `string` | The time that the job created, in ISO 8601 format. |
| `head_branch` | `string` | The name of the current branch. |
| `head_sha` | `string` | The SHA of the commit that is being run. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the job. |
| `labels` | `[]any` | Labels for the workflow job. |
| `name` | `string` | The name of the job. |
| `node_id` | `string` |  |
| `run_attempt` | `int` | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | The id of the associated workflow run. |
| `run_url` | `string` |  |
| `runner_group_id` | `int` | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `string` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | The name of the runner to which this job has been assigned. |
| `started_at` | `string` | The time that the job started, in ISO 8601 format. |
| `status` | `string` | The phase of the lifecycle that the job is currently in. |
| `steps` | `[]any` | Steps in this job. |
| `url` | `string` |  |
| `workflow_name` | `string` | The name of the workflow. |

#### Example: Load

```go
job, err := client.Job(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(job) // the loaded record
```


### Key

Create an instance: `key := client.Key(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` | The public SSH key to add to your GitHub account. |
| `last_used` | `string` |  |
| `read_only` | `bool` |  |
| `title` | `string` | A descriptive name for the new key. |
| `url` | `string` |  |
| `verified` | `bool` |  |

#### Example: Load

```go
key, err := client.Key(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(key) // the loaded record
```

#### Example: List

```go
keys, err := client.Key(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(keys) // the array of records
```

#### Example: Create

```go
result, err := client.Key(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": 1,
    "key": "example_key",
    "read_only": true,
    "title": "example_title",
    "url": "example_url",
    "verified": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Label

Create an instance: `label := client.Label(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `string` | 6-character hex code, without the leading #, identifying the color |
| `default` | `bool` | Whether this label comes by default in a new repository. |
| `description` | `string` | Optional description of the label, such as its purpose. |
| `id` | `int` | Unique identifier for the label. |
| `name` | `string` | The name of the label. |
| `new_name` | `string` | The new name of the label. |
| `node_id` | `string` |  |
| `url` | `string` | URL for the label |

#### Example: Load

```go
label, err := client.Label(nil).Load(map[string]any{"id": "label_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(label) // the loaded record
```

#### Example: List

```go
labels, err := client.Label(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(labels) // the array of records
```

#### Example: Create

```go
result, err := client.Label(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "color": "example_color",
    "default": true,
    "description": "example_description",
    "id": 1,
    "name": "example_name",
    "node_id": "example_node_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Language

Create an instance: `language := client.Language(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `C` | `int` |  |
| `Python` | `int` |  |

#### Example: Load

```go
language, err := client.Language(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(language) // the loaded record
```


### License

Create an instance: `license := client.License(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `conditions` | `[]any` |  |
| `content` | `string` |  |
| `description` | `string` |  |
| `download_url` | `string` |  |
| `encoding` | `string` |  |
| `featured` | `bool` |  |
| `git_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `implementation` | `string` |  |
| `key` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `limitations` | `[]any` |  |
| `links` | `map[string]any` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `path` | `string` |  |
| `permissions` | `[]any` |  |
| `sha` | `string` |  |
| `size` | `int` |  |
| `spdx_id` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
license, err := client.License(nil).Load(map[string]any{"id": "license_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(license) // the loaded record
```

#### Example: List

```go
licenses, err := client.License(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(licenses) // the array of records
```


### Markdown

Create an instance: `markdown := client.Markdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `string` | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | The rendering mode. |
| `text` | `string` | The Markdown text to render in HTML. |

#### Example: Create

```go
result, err := client.Markdown(nil).Create(map[string]any{
    "text": "example_text",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MarketplaceListingPlan

Create an instance: `marketplaceListingPlan := client.MarketplaceListingPlan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts_url` | `string` |  |
| `bullets` | `[]any` |  |
| `description` | `string` |  |
| `has_free_trial` | `bool` |  |
| `id` | `int` |  |
| `monthly_price_in_cents` | `int` |  |
| `name` | `string` |  |
| `number` | `int` |  |
| `price_model` | `string` |  |
| `state` | `string` |  |
| `unit_name` | `string` |  |
| `url` | `string` |  |
| `yearly_price_in_cents` | `int` |  |

#### Example: List

```go
marketplaceListingPlans, err := client.MarketplaceListingPlan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(marketplaceListingPlans) // the array of records
```


### MarketplacePurchase

Create an instance: `marketplacePurchase := client.MarketplacePurchase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `marketplace_pending_change` | `map[string]any` |  |
| `marketplace_purchase` | `map[string]any` |  |
| `organization_billing_email` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
marketplacePurchase, err := client.MarketplacePurchase(nil).Load(map[string]any{"account_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(marketplacePurchase) // the loaded record
```

#### Example: List

```go
marketplacePurchases, err := client.MarketplacePurchase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(marketplacePurchases) // the array of records
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
members, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(members) // the array of records
```


### Membership

Create an instance: `membership := client.Membership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
membership, err := client.Membership(nil).Load(map[string]any{"id": "membership_id", "enterprise": "enterprise", "team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(membership) // the loaded record
```

#### Example: List

```go
memberships, err := client.Membership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(memberships) // the array of records
```


### MergedUpstream

Create an instance: `mergedUpstream := client.MergedUpstream(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_branch` | `string` |  |
| `branch` | `string` | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` |  |
| `message` | `string` |  |

#### Example: Create

```go
result, err := client.MergedUpstream(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "branch": "example_branch",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Meta

Create an instance: `meta := client.Meta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
meta, err := client.Meta(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(meta) // the loaded record
```

#### Example: List

```go
metas, err := client.Meta(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(metas) // the array of records
```


### Metaroot

Create an instance: `metaroot := client.Metaroot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorizations_url` | `string` |  |
| `code_search_url` | `string` |  |
| `commit_search_url` | `string` |  |
| `current_user_authorizations_html_url` | `string` |  |
| `current_user_repositories_url` | `string` |  |
| `current_user_url` | `string` |  |
| `emails_url` | `string` |  |
| `emojis_url` | `string` |  |
| `events_url` | `string` |  |
| `feeds_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `hub_url` | `string` |  |
| `issue_search_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `label_search_url` | `string` |  |
| `notifications_url` | `string` |  |
| `organization_repositories_url` | `string` |  |
| `organization_teams_url` | `string` |  |
| `organization_url` | `string` |  |
| `public_gists_url` | `string` |  |
| `rate_limit_url` | `string` |  |
| `repository_search_url` | `string` |  |
| `repository_url` | `string` |  |
| `starred_gists_url` | `string` |  |
| `starred_url` | `string` |  |
| `topic_search_url` | `string` |  |
| `user_organizations_url` | `string` |  |
| `user_repositories_url` | `string` |  |
| `user_search_url` | `string` |  |
| `user_url` | `string` |  |

#### Example: Load

```go
metaroot, err := client.Metaroot(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(metaroot) // the loaded record
```


### Migration

Create an instance: `migration := client.Migration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `exclude` | `[]any` | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `bool` | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `bool` | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `bool` | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `bool` | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `bool` | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `guid` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` |  |
| `lock_repositories` | `bool` | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `org_metadata_only` | `bool` | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `map[string]any` | A GitHub user. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories` | `[]any` | The repositories included in the migration. |
| `role_name` | `string` |  |
| `security_and_analysis` | `map[string]any` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `state` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: Load

```go
migration, err := client.Migration(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(migration) // the loaded record
```

#### Example: List

```go
migrations, err := client.Migration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(migrations) // the array of records
```

#### Example: Create

```go
result, err := client.Migration(nil).Create(map[string]any{
    "assignees_url": "example_assignees_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "created_at": "example_created_at",
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "downloads_url": "example_downloads_url",
    "events_url": "example_events_url",
    "exclude_attachments": true,
    "exclude_git_data": true,
    "exclude_metadata": true,
    "exclude_owner_projects": true,
    "exclude_releases": true,
    "fork": true,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "guid": "example_guid",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": 1,
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "languages_url": "example_languages_url",
    "lock_repositories": true,
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "name": "example_name",
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "org_metadata_only": true,
    "owner": map[string]any{},
    "private": true,
    "pulls_url": "example_pulls_url",
    "releases_url": "example_releases_url",
    "repositories": []any{},
    "stargazers_url": "example_stargazers_url",
    "state": "example_state",
    "statuses_url": "example_statuses_url",
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "trees_url": "example_trees_url",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Milestone

Create an instance: `milestone := client.Milestone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `closed_at` | `string` |  |
| `closed_issues` | `int` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `description` | `string` | A description of the milestone. |
| `due_on` | `string` | The milestone due date. |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `labels_url` | `string` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `number` | `int` | The number of the milestone. |
| `open_issues` | `int` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | The state of the milestone. |
| `subscriptions_url` | `string` |  |
| `title` | `string` | The title of the milestone. |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
milestone, err := client.Milestone(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(milestone) // the loaded record
```

#### Example: List

```go
milestones, err := client.Milestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(milestones) // the array of records
```

#### Example: Create

```go
result, err := client.Milestone(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "avatar_url": "example_avatar_url",
    "closed_at": "example_closed_at",
    "closed_issues": 1,
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "gists_url": "example_gists_url",
    "gravatar_id": "example_gravatar_id",
    "html_url": "example_html_url",
    "id": 1,
    "labels_url": "example_labels_url",
    "login": "example_login",
    "node_id": "example_node_id",
    "number": 1,
    "open_issues": 1,
    "organizations_url": "example_organizations_url",
    "received_events_url": "example_received_events_url",
    "repos_url": "example_repos_url",
    "site_admin": true,
    "starred_url": "example_starred_url",
    "subscriptions_url": "example_subscriptions_url",
    "title": "example_title",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MinimalRepository

Create an instance: `minimalRepository := client.MinimalRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `role_name` | `string` |  |
| `security_and_analysis` | `map[string]any` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```go
minimalRepositorys, err := client.MinimalRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(minimalRepositorys) // the array of records
```


### NetworkConfiguration

Create an instance: `networkConfiguration := client.NetworkConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `string` | The hosted compute service the network configuration supports. |
| `created_on` | `string` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | The unique identifier of the network configuration. |
| `name` | `string` | The name of the network configuration. |
| `network_settings_ids` | `[]any` | The unique identifier of each network settings in the configuration. |

#### Example: Load

```go
networkConfiguration, err := client.NetworkConfiguration(nil).Load(map[string]any{"id": "network_configuration_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(networkConfiguration) // the loaded record
```

#### Example: Create

```go
result, err := client.NetworkConfiguration(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "created_on": "example_created_on",
    "id": "example_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NetworkSetting

Create an instance: `networkSetting := client.NetworkSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the network settings resource. |
| `name` | `string` | The name of the network settings resource. |
| `network_configuration_id` | `string` | The identifier of the network configuration that is using this settings resource. |
| `region` | `string` | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | `string` | The subnet this network settings resource is configured for. |

#### Example: Load

```go
networkSetting, err := client.NetworkSetting(nil).Load(map[string]any{"id": "network_setting_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(networkSetting) // the loaded record
```


### OidcCustomSub

Create an instance: `oidcCustomSub := client.OidcCustomSub(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `[]any` | Array of unique strings. |

#### Example: List

```go
oidcCustomSubs, err := client.OidcCustomSub(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(oidcCustomSubs) // the array of records
```


### OidcCustomSubRepo

Create an instance: `oidcCustomSubRepo := client.OidcCustomSubRepo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `[]any` | Array of unique strings. |
| `use_default` | `bool` | Whether to use the default template or not. |

#### Example: List

```go
oidcCustomSubRepos, err := client.OidcCustomSubRepo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(oidcCustomSubRepos) // the array of records
```


### Org

Create an instance: `org := client.Org(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `any` |  |
| `action` | `string` | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` |  |
| `app_slug` | `string` |  |
| `artifact_url` | `string` | The URL where the artifact is stored. |
| `async` | `bool` | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `[]any` |  |
| `attestations_subject_digests` | `map[string]any` | Mapping of subject digest to bundles. |
| `avatar_url` | `string` |  |
| `base_role` | `string` | The system role from which this role inherits permissions. |
| `billing_email` | `string` | Billing email address. |
| `blog` | `string` |  |
| `client_id` | `string` |  |
| `company` | `string` | The company name. |
| `contact_email` | `string` |  |
| `created_at` | `string` | The date and time the role was created. |
| `default_repository_permission` | `string` | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `bool` | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `string` | The description of the company. |
| `digest` | `string` | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `bool` | Whether the user has direct membership in the organization. |
| `email` | `string` | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `[]any` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `[]any` |  |
| `events_url` | `string` |  |
| `filled_seats` | `int` |  |
| `has_multiple_single_files` | `bool` |  |
| `has_organization_projects` | `bool` | Whether an organization can use organization projects. |
| `has_repository_projects` | `bool` | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the installation. |
| `issues_url` | `string` |  |
| `location` | `string` | The location. |
| `login` | `string` |  |
| `members_allowed_repository_creation_type` | `string` | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `bool` | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `bool` | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `bool` | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `bool` | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `bool` | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `bool` | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `bool` | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `bool` | Whether organization members can fork private organization repositories. |
| `members_url` | `string` |  |
| `name` | `string` | The name of the artifact. |
| `node_id` | `string` |  |
| `organization` | `map[string]any` | A GitHub organization. |
| `organization_url` | `string` |  |
| `page_info` | `map[string]any` | Information about the current page. |
| `pat_ids` | `[]any` | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `[]any` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | The path of the artifact. |
| `permissions` | `map[string]any` | The permissions granted to the user access token. |
| `predicate_type` | `string` | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` |  |
| `properties` | `[]any` | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` |  |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `reason` | `string` | Reason for approving or denying the request. |
| `registry_url` | `string` | The base URL of the artifact registry. |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository` | `string` | The repository name within the registry. |
| `repository_names` | `[]any` | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | The user's membership type in the organization. |
| `seats` | `int` |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` |  |
| `single_file_paths` | `[]any` |  |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `space` | `int` |  |
| `state` | `string` | The state of the member in the organization. |
| `status` | `string` | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `[]any` |  |
| `subject_digests` | `[]any` | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` |  |
| `suspended_by` | `map[string]any` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `total_count` | `int` |  |
| `twitter_username` | `string` | The Twitter username of the company. |
| `updated_at` | `string` | The date and time the role was last updated. |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |
| `web_commit_signoff_required` | `bool` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

#### Example: Load

```go
org, err := client.Org(nil).Load(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(org) // the loaded record
```

#### Example: List

```go
orgs, err := client.Org(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgs) // the array of records
```

#### Example: Create

```go
result, err := client.Org(nil).Create(map[string]any{
    "enablement": "example_enablement",
    "org": "example_org",
    "security_product": "example_security_product",
    "access_tokens_url": "example_access_tokens_url",
    "account": "example_account",
    "action": "example_action",
    "app_id": 1,
    "app_slug": "example_app_slug",
    "avatar_url": "example_avatar_url",
    "created_at": "example_created_at",
    "digest": "example_digest",
    "events": []any{},
    "events_url": "example_events_url",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": 1,
    "issues_url": "example_issues_url",
    "login": "example_login",
    "members_url": "example_members_url",
    "name": "example_name",
    "node_id": "example_node_id",
    "organization": map[string]any{},
    "organization_url": "example_organization_url",
    "pat_ids": []any{},
    "permissions": map[string]any{},
    "private_repos": 1,
    "properties": []any{},
    "public_members_url": "example_public_members_url",
    "registry_url": "example_registry_url",
    "repos_url": "example_repos_url",
    "repositories_url": "example_repositories_url",
    "repository_names": []any{},
    "repository_selection": "example_repository_selection",
    "role": "example_role",
    "single_file_name": "example_single_file_name",
    "space": 1,
    "state": "example_state",
    "subject_digests": []any{},
    "suspended_at": "example_suspended_at",
    "suspended_by": map[string]any{},
    "target_id": 1,
    "target_type": "example_target_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrgHook

Create an instance: `orgHook := client.OrgHook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines if notifications are sent when the webhook is triggered. |
| `config` | `map[string]any` | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `[]any` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `int` |  |
| `name` | `string` | Must be passed as "web". |
| `ping_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
orgHook, err := client.OrgHook(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgHook) // the loaded record
```

#### Example: List

```go
orgHooks, err := client.OrgHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgHooks) // the array of records
```

#### Example: Create

```go
result, err := client.OrgHook(nil).Create(map[string]any{
    "id": "example_id",
    "active": true,
    "config": map[string]any{},
    "created_at": "example_created_at",
    "events": []any{},
    "name": "example_name",
    "ping_url": "example_ping_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrgMembership

Create an instance: `orgMembership := client.OrgMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_membership` | `bool` | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `[]any` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` |  |
| `organization` | `map[string]any` | A GitHub organization. |
| `organization_url` | `string` |  |
| `permissions` | `map[string]any` |  |
| `role` | `string` | The user's membership type in the organization. |
| `state` | `string` | The state of the member in the organization. |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Load

```go
orgMembership, err := client.OrgMembership(nil).Load(map[string]any{"id": "org_membership_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgMembership) // the loaded record
```


### OrgPrivateRegistryConfiguration

Create an instance: `orgPrivateRegistryConfiguration := client.OrgPrivateRegistryConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `name` | `string` | The name of the private registry configuration. |
| `registry_type` | `string` | The registry type. |
| `updated_at` | `string` |  |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```go
orgPrivateRegistryConfiguration, err := client.OrgPrivateRegistryConfiguration(nil).Load(map[string]any{"org_id": "org_id", "secret_name": "secret_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgPrivateRegistryConfiguration) // the loaded record
```


### OrgPrivateRegistryConfigurationWithSelectedRepository

Create an instance: `orgPrivateRegistryConfigurationWithSelectedRepository := client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `encrypted_value` | `string` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` |  |
| `key_id` | `string` | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | The registry type. |
| `selected_repository_ids` | `[]any` | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Create

```go
result, err := client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil).Create(map[string]any{
    "id": "example_id",
    "encrypted_value": "example_encrypted_value",
    "key_id": "example_key_id",
    "registry_type": "example_registry_type",
    "url": "example_url",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrgRepoCustomPropertyValue

Create an instance: `orgRepoCustomPropertyValue := client.OrgRepoCustomPropertyValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `properties` | `[]any` | List of custom property names and associated values |
| `repository_full_name` | `string` |  |
| `repository_id` | `int` |  |
| `repository_name` | `string` |  |

#### Example: List

```go
orgRepoCustomPropertyValues, err := client.OrgRepoCustomPropertyValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgRepoCustomPropertyValues) // the array of records
```


### Organization

Create an instance: `organization := client.Organization(nil)`


### OrganizationActionsSecret

Create an instance: `organizationActionsSecret := client.OrganizationActionsSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `selected_repositories_url` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` | Visibility of a secret |

#### Example: Load

```go
organizationActionsSecret, err := client.OrganizationActionsSecret(nil).Load(map[string]any{"id": "organization_actions_secret_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationActionsSecret) // the loaded record
```


### OrganizationActionsVariable

Create an instance: `organizationActionsVariable := client.OrganizationActionsVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `string` |  |
| `name` | `string` | The name of the variable. |
| `selected_repositories_url` | `string` |  |
| `updated_at` | `string` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `string` | The value of the variable. |
| `visibility` | `string` | Visibility of a variable |

#### Example: Load

```go
organizationActionsVariable, err := client.OrganizationActionsVariable(nil).Load(map[string]any{"id": "organization_actions_variable_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationActionsVariable) // the loaded record
```


### OrganizationDependabotSecret

Create an instance: `organizationDependabotSecret := client.OrganizationDependabotSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `selected_repositories_url` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` | Visibility of a secret |

#### Example: Load

```go
organizationDependabotSecret, err := client.OrganizationDependabotSecret(nil).Load(map[string]any{"id": "organization_dependabot_secret_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationDependabotSecret) // the loaded record
```


### OrganizationInvitation

Create an instance: `organizationInvitation := client.OrganizationInvitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `email` | `string` | **Required unless you provide `invitee_id`**. |
| `failed_at` | `string` |  |
| `failed_reason` | `string` |  |
| `id` | `int` |  |
| `invitation_source` | `string` |  |
| `invitation_teams_url` | `string` |  |
| `invitee_id` | `int` | **Required unless you provide `email`**. |
| `inviter` | `map[string]any` | A GitHub user. |
| `login` | `string` |  |
| `node_id` | `string` |  |
| `role` | `string` | The role for the new member. |
| `team_count` | `int` |  |
| `team_ids` | `[]any` | Specify IDs for the teams you want to invite new members to. |

#### Example: List

```go
organizationInvitations, err := client.OrganizationInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationInvitations) // the array of records
```

#### Example: Create

```go
result, err := client.OrganizationInvitation(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "created_at": "example_created_at",
    "id": 1,
    "invitation_teams_url": "example_invitation_teams_url",
    "inviter": map[string]any{},
    "login": "example_login",
    "node_id": "example_node_id",
    "team_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrganizationProgrammaticAccessGrant

Create an instance: `organizationProgrammaticAccessGrant := client.OrganizationProgrammaticAccessGrant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_granted_at` | `string` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Date and time when the request for access was created. |
| `id` | `int` | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `map[string]any` | A GitHub user. |
| `permissions` | `map[string]any` | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Reason for requesting access. |
| `repositories_url` | `string` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Type of repository selection requested. |
| `token_expired` | `bool` | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | The name given to the user's token. |

#### Example: List

```go
organizationProgrammaticAccessGrants, err := client.OrganizationProgrammaticAccessGrant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationProgrammaticAccessGrants) // the array of records
```


### OrganizationRole

Create an instance: `organizationRole := client.OrganizationRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `string` | The system role from which this role inherits permissions. |
| `created_at` | `string` | The date and time the role was created. |
| `description` | `string` | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | The unique identifier of the role. |
| `name` | `string` | The name of the role. |
| `organization` | `map[string]any` | A GitHub user. |
| `permissions` | `[]any` | A list of permissions included in this role. |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | The date and time the role was last updated. |

#### Example: Load

```go
organizationRole, err := client.OrganizationRole(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationRole) // the loaded record
```


### OrganizationSecretScanningAlert

Create an instance: `organizationSecretScanningAlert := client.OrganizationSecretScanningAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | The security alert number. |
| `publicly_leaked` | `bool` | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `map[string]any` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `map[string]any` | A GitHub user. |
| `repository` | `map[string]any` | A GitHub repository. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `map[string]any` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: List

```go
organizationSecretScanningAlerts, err := client.OrganizationSecretScanningAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationSecretScanningAlerts) // the array of records
```


### OutsideCollaborator

Create an instance: `outsideCollaborator := client.OutsideCollaborator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
outsideCollaborators, err := client.OutsideCollaborator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(outsideCollaborators) // the array of records
```


### Package

Create an instance: `package_ := client.Package(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `container` | `map[string]any` |  |
| `created_at` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `docker` | `map[string]any` |  |
| `github_id` | `int` | Unique identifier of the package. |
| `html_url` | `string` |  |
| `id` | `string` | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Free storage space (GB) for GitHub Packages. |
| `license` | `string` |  |
| `metadata` | `map[string]any` |  |
| `name` | `string` | The name of the package. |
| `owner` | `map[string]any` | A GitHub user. |
| `package_html_url` | `string` |  |
| `package_type` | `string` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `int` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `int` | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `version_count` | `int` | The number of versions of the package. |
| `visibility` | `string` |  |

#### Example: Load

```go
package_, err := client.Package(nil).Load(map[string]any{"package_name": "package_name", "package_type": "package_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(package_) // the loaded record
```

#### Example: List

```go
package_s, err := client.Package(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(package_s) // the array of records
```

#### Example: Create

```go
result, err := client.Package(nil).Create(map[string]any{
    "package_id": "example_package_id",
    "package_name": "example_package_name",
    "container": map[string]any{},
    "created_at": "example_created_at",
    "docker": map[string]any{},
    "github_id": 1,
    "html_url": "example_html_url",
    "id": "example_id",
    "included_gigabytes_bandwidth": 1,
    "metadata": map[string]any{},
    "name": "example_name",
    "owner": map[string]any{},
    "package_html_url": "example_package_html_url",
    "package_type": "example_package_type",
    "repository": map[string]any{},
    "total_gigabytes_bandwidth_used": 1,
    "total_paid_gigabytes_bandwidth_used": 1,
    "updated_at": "example_updated_at",
    "url": "example_url",
    "version_count": 1,
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Page

Create an instance: `page := client.Page(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_type` | `string` | The process in which the Page will be built. |
| `cname` | `string` | The Pages site's custom domain |
| `custom_404` | `bool` | Whether the Page has a custom 404 page. |
| `html_url` | `string` | The web address the Page can be accessed from. |
| `https_certificate` | `map[string]any` |  |
| `https_enforced` | `bool` | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | The state if the domain is verified |
| `public` | `bool` | Whether the GitHub Pages site is publicly visible. |
| `source` | `map[string]any` | The source branch and directory used to publish your Pages site. |
| `status` | `string` | The status of the most recent build of the Page. |
| `url` | `string` | The API address for accessing this Page resource. |

#### Example: Load

```go
page, err := client.Page(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(page) // the loaded record
```

#### Example: Create

```go
result, err := client.Page(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "cname": "example_cname",
    "custom_404": true,
    "https_certificate": map[string]any{},
    "public": true,
    "source": map[string]any{},
    "status": "example_status",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PageBuild

Create an instance: `pageBuild := client.PageBuild(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `string` |  |
| `created_at` | `string` |  |
| `duration` | `int` |  |
| `error` | `map[string]any` |  |
| `id` | `string` |  |
| `pusher` | `map[string]any` | A GitHub user. |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
pageBuild, err := client.PageBuild(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pageBuild) // the loaded record
```

#### Example: List

```go
pageBuilds, err := client.PageBuild(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pageBuilds) // the array of records
```


### PageBuildStatus

Create an instance: `pageBuildStatus := client.PageBuildStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.PageBuildStatus(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PageDeployment

Create an instance: `pageDeployment := client.PageDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact_id` | `float64` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | A unique string that represents the version of the build for this deployment. |

#### Example: Create

```go
result, err := client.PageDeployment(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "oidc_token": "example_oidc_token",
    "pages_build_version": "example_pages_build_version",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PagesDeploymentStatus

Create an instance: `pagesDeploymentStatus := client.PagesDeploymentStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` | The current status of the deployment. |

#### Example: Load

```go
pagesDeploymentStatus, err := client.PagesDeploymentStatus(nil).Load(map[string]any{"owner": "owner", "pages_deployment_id": "pages_deployment_id", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pagesDeploymentStatus) // the loaded record
```

#### Example: Create

```go
result, err := client.PagesDeploymentStatus(nil).Create(map[string]any{
    "deployment_id": "example_deployment_id",
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PagesHealthCheck

Create an instance: `pagesHealthCheck := client.PagesHealthCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_domain` | `map[string]any` |  |
| `domain` | `map[string]any` |  |

#### Example: Load

```go
pagesHealthCheck, err := client.PagesHealthCheck(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pagesHealthCheck) // the loaded record
```


### Participation

Create an instance: `participation := client.Participation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `all` | `[]any` |  |
| `owner` | `[]any` |  |

#### Example: List

```go
participations, err := client.Participation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(participations) // the array of records
```


### PendingDeployment

Create an instance: `pendingDeployment := client.PendingDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_can_approve` | `bool` | Whether the currently authenticated user can approve the deployment |
| `environment` | `map[string]any` |  |
| `reviewers` | `[]any` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | The time that the wait timer began. |

#### Example: List

```go
pendingDeployments, err := client.PendingDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pendingDeployments) // the array of records
```


### PorterAuthor

Create an instance: `porterAuthor := client.PorterAuthor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The new Git author email. |
| `id` | `int` |  |
| `import_url` | `string` |  |
| `name` | `string` | The new Git author name. |
| `remote_id` | `string` |  |
| `remote_name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
porterAuthors, err := client.PorterAuthor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(porterAuthors) // the array of records
```


### PorterLargeFile

Create an instance: `porterLargeFile := client.PorterLargeFile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `oid` | `string` |  |
| `path` | `string` |  |
| `ref_name` | `string` |  |
| `size` | `int` |  |

#### Example: List

```go
porterLargeFiles, err := client.PorterLargeFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(porterLargeFiles) // the array of records
```


### PrivateRegistry

Create an instance: `privateRegistry := client.PrivateRegistry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `encrypted_value` | `string` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` |  |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |
| `name` | `string` | The name of the private registry configuration. |
| `registry_type` | `string` | The registry type. |
| `selected_repository_ids` | `[]any` | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```go
privateRegistry, err := client.PrivateRegistry(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(privateRegistry) // the loaded record
```

#### Example: List

```go
privateRegistrys, err := client.PrivateRegistry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(privateRegistrys) // the array of records
```


### PrivateUser

Create an instance: `privateUser := client.PrivateUser(nil)`


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `body` | `string` | The description of the project. |
| `columns_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` | The name of the project. |
| `node_id` | `string` |  |
| `number` | `int` |  |
| `organization_permission` | `string` | The baseline permission that all organization members have on this project |
| `organizations_url` | `string` |  |
| `owner_url` | `string` |  |
| `private` | `bool` | Whether or not this project can be seen by everyone. |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | State of the project; either 'open' or 'closed' |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
    "avatar_url": "example_avatar_url",
    "columns_url": "example_columns_url",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "gists_url": "example_gists_url",
    "gravatar_id": "example_gravatar_id",
    "html_url": "example_html_url",
    "id": 1,
    "login": "example_login",
    "node_id": "example_node_id",
    "number": 1,
    "organizations_url": "example_organizations_url",
    "owner_url": "example_owner_url",
    "received_events_url": "example_received_events_url",
    "repos_url": "example_repos_url",
    "site_admin": true,
    "starred_url": "example_starred_url",
    "subscriptions_url": "example_subscriptions_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectCollaboratorPermission

Create an instance: `projectCollaboratorPermission := client.ProjectCollaboratorPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
projectCollaboratorPermission, err := client.ProjectCollaboratorPermission(nil).Load(map[string]any{"project_id": 1, "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectCollaboratorPermission) // the loaded record
```


### ProjectColumn

Create an instance: `projectColumn := client.ProjectColumn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cards_url` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` | The unique identifier of the project column |
| `name` | `string` | Name of the project column |
| `node_id` | `string` |  |
| `project_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
projectColumn, err := client.ProjectColumn(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectColumn) // the loaded record
```

#### Example: List

```go
projectColumns, err := client.ProjectColumn(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectColumns) // the array of records
```

#### Example: Create

```go
result, err := client.ProjectColumn(nil).Create(map[string]any{
    "id": 1,
    "cards_url": "example_cards_url",
    "created_at": "example_created_at",
    "name": "example_name",
    "node_id": "example_node_id",
    "project_url": "example_project_url",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectsClassic

Create an instance: `projectsClassic := client.ProjectsClassic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `permission` | `string` | The permission to grant the collaborator. |
| `position` | `string` | The position of the column in a project. |

#### Example: Create

```go
result, err := client.ProjectsClassic(nil).Create(map[string]any{
    "column_id": 1,
    "position": "example_position",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectsV2

Create an instance: `projectsV2 := client.ProjectsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `string` | The time when the project was closed. |
| `created_at` | `string` | The time when the project was created. |
| `creator` | `map[string]any` | A GitHub user. |
| `deleted_at` | `string` | The time when the project was deleted. |
| `deleted_by` | `map[string]any` | A GitHub user. |
| `description` | `string` | A short description of the project. |
| `id` | `float64` | The unique identifier of the project. |
| `is_template` | `bool` | Whether this project is a template |
| `latest_status_update` | `map[string]any` | An status update belonging to a project |
| `node_id` | `string` | The node ID of the project. |
| `number` | `int` | The project number. |
| `owner` | `map[string]any` | A GitHub user. |
| `public` | `bool` | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | A concise summary of the project. |
| `state` | `string` | The current state of the project. |
| `title` | `string` | The project title. |
| `updated_at` | `string` | The time when the project was last updated. |

#### Example: Load

```go
projectsV2, err := client.ProjectsV2(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2) // the loaded record
```

#### Example: List

```go
projectsV2s, err := client.ProjectsV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2s) // the array of records
```


### ProjectsV2Field

Create an instance: `projectsV2Field := client.ProjectsV2Field(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `map[string]any` | Configuration for iteration fields. |
| `created_at` | `string` | The time when the field was created. |
| `data_type` | `string` | The field's data type. |
| `id` | `int` | The unique identifier of the field. |
| `name` | `string` | The name of the field. |
| `node_id` | `string` | The node ID of the field. |
| `options` | `[]any` | The options available for single select fields. |
| `project_url` | `string` | The API URL of the project that contains the field. |
| `updated_at` | `string` | The time when the field was last updated. |

#### Example: Load

```go
projectsV2Field, err := client.ProjectsV2Field(nil).Load(map[string]any{"id": 1, "projects_v2_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2Field) // the loaded record
```

#### Example: List

```go
projectsV2Fields, err := client.ProjectsV2Field(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2Fields) // the array of records
```


### ProjectsV2ItemSimple

Create an instance: `projectsV2ItemSimple := client.ProjectsV2ItemSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | The type of item to add to the project. |

#### Example: Create

```go
result, err := client.ProjectsV2ItemSimple(nil).Create(map[string]any{
    "project_number": 1,
    "id": 1,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProjectsV2ItemWithContent

Create an instance: `projectsV2ItemWithContent := client.ProjectsV2ItemWithContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | The time when the item was archived. |
| `content` | `map[string]any` | The content of the item, which varies by content type. |
| `content_type` | `string` | The type of content tracked in a project item |
| `created_at` | `string` | The time when the item was created. |
| `creator` | `map[string]any` | A GitHub user. |
| `fields` | `[]any` | The fields and values associated with this item. |
| `id` | `float64` | The unique identifier of the project item. |
| `item_url` | `string` | The API URL of this item. |
| `node_id` | `string` | The node ID of the project item. |
| `project_url` | `string` | The API URL of the project that contains this item. |
| `updated_at` | `string` | The time when the item was last updated. |

#### Example: Load

```go
projectsV2ItemWithContent, err := client.ProjectsV2ItemWithContent(nil).Load(map[string]any{"item_id": 1, "projects_v2_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2ItemWithContent) // the loaded record
```

#### Example: List

```go
projectsV2ItemWithContents, err := client.ProjectsV2ItemWithContent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectsV2ItemWithContents) // the array of records
```


### ProtectedBranch

Create an instance: `protectedBranch := client.ProtectedBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `map[string]any` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `map[string]any` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `map[string]any` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `map[string]any` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `map[string]any` | Enforce all configured restrictions for administrators. |
| `lock_branch` | `map[string]any` | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `map[string]any` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `map[string]any` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `map[string]any` | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `map[string]any` |  |
| `required_status_checks` | `map[string]any` | Status Check Policy |
| `restrictions` | `map[string]any` | Branch Restriction Policy |
| `url` | `string` |  |


### ProtectedBranchAdminEnforced

Create an instance: `protectedBranchAdminEnforced := client.ProtectedBranchAdminEnforced(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```go
protectedBranchAdminEnforced, err := client.ProtectedBranchAdminEnforced(nil).Load(map[string]any{"branch_id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(protectedBranchAdminEnforced) // the loaded record
```

#### Example: Create

```go
result, err := client.ProtectedBranchAdminEnforced(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "owner": "example_owner",
    "repo": "example_repo",
    "enabled": true,
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProtectedBranchPullRequestReview

Create an instance: `protectedBranchPullRequestReview := client.ProtectedBranchPullRequestReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_pull_request_allowances` | `map[string]any` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `map[string]any` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `bool` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `bool` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `int` | Specifies the number of reviewers required to approve pull requests. |
| `url` | `string` |  |

#### Example: Load

```go
protectedBranchPullRequestReview, err := client.ProtectedBranchPullRequestReview(nil).Load(map[string]any{"branch_id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(protectedBranchPullRequestReview) // the loaded record
```


### PublicMember

Create an instance: `publicMember := client.PublicMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
publicMembers, err := client.PublicMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(publicMembers) // the array of records
```


### Pull

Create an instance: `pull := client.Pull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `additions` | `int` |  |
| `assignee` | `map[string]any` | A GitHub user. |
| `assignees` | `[]any` |  |
| `author_association` | `string` | How the author is associated with the repository. |
| `auto_merge` | `map[string]any` | The status of auto merging a pull request. |
| `base` | `map[string]any` | The name of the branch you want the changes pulled into. |
| `body` | `string` | The contents of the pull request. |
| `changed_files` | `int` |  |
| `closed_at` | `string` |  |
| `comments` | `int` |  |
| `comments_url` | `string` |  |
| `commit_message` | `string` | Extra detail to append to automatic commit message. |
| `commit_title` | `string` | Title for the automatic commit message. |
| `commits` | `int` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `deletions` | `int` |  |
| `diff_url` | `string` |  |
| `draft` | `bool` | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `string` | The expected SHA of the pull request's HEAD ref. |
| `head` | `map[string]any` | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `issue` | `int` | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` |  |
| `labels` | `[]any` |  |
| `links` | `map[string]any` |  |
| `locked` | `bool` |  |
| `maintainer_can_modify` | `bool` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` |  |
| `merge_method` | `string` | The merge method to use. |
| `mergeable` | `bool` |  |
| `mergeable_state` | `string` |  |
| `merged` | `bool` |  |
| `merged_at` | `string` |  |
| `merged_by` | `map[string]any` | A GitHub user. |
| `message` | `string` |  |
| `milestone` | `map[string]any` | A collection of related issues and pull requests. |
| `node_id` | `string` |  |
| `number` | `int` | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` |  |
| `rebaseable` | `bool` |  |
| `requested_reviewers` | `[]any` |  |
| `requested_teams` | `[]any` |  |
| `review_comment_url` | `string` |  |
| `review_comments` | `int` |  |
| `review_comments_url` | `string` |  |
| `sha` | `string` | SHA that pull request head must match to allow merge. |
| `state` | `string` | State of this Pull Request. |
| `statuses_url` | `string` |  |
| `title` | `string` | The title of the pull request. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Load

```go
pull, err := client.Pull(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pull) // the loaded record
```

#### Example: List

```go
pulls, err := client.Pull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pulls) // the array of records
```

#### Example: Create

```go
result, err := client.Pull(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "additions": 1,
    "assignee": map[string]any{},
    "author_association": "example_author_association",
    "auto_merge": map[string]any{},
    "base": map[string]any{},
    "body": "example_body",
    "changed_files": 1,
    "closed_at": "example_closed_at",
    "comments": 1,
    "comments_url": "example_comments_url",
    "commits": 1,
    "commits_url": "example_commits_url",
    "created_at": "example_created_at",
    "deletions": 1,
    "diff_url": "example_diff_url",
    "head": map[string]any{},
    "html_url": "example_html_url",
    "id": 1,
    "issue_url": "example_issue_url",
    "labels": []any{},
    "links": map[string]any{},
    "locked": true,
    "maintainer_can_modify": true,
    "merge_commit_sha": "example_merge_commit_sha",
    "mergeable": true,
    "mergeable_state": "example_mergeable_state",
    "merged": true,
    "merged_at": "example_merged_at",
    "merged_by": map[string]any{},
    "message": "example_message",
    "milestone": map[string]any{},
    "node_id": "example_node_id",
    "number": 1,
    "patch_url": "example_patch_url",
    "review_comment_url": "example_review_comment_url",
    "review_comments": 1,
    "review_comments_url": "example_review_comments_url",
    "sha": "example_sha",
    "state": "example_state",
    "statuses_url": "example_statuses_url",
    "title": "example_title",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PullRequestReview

Create an instance: `pullRequestReview := client.PullRequestReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `body` | `string` | The text of the review. |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `comments` | `[]any` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | A commit SHA for the review. |
| `event` | `string` | The review action you want to perform. |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the review |
| `links` | `map[string]any` |  |
| `message` | `string` | The message for the pull request review dismissal |
| `node_id` | `string` |  |
| `pull_request_url` | `string` |  |
| `state` | `string` |  |
| `submitted_at` | `string` |  |
| `teams` | `[]any` |  |
| `user` | `map[string]any` | A GitHub user. |
| `users` | `[]any` |  |

#### Example: Load

```go
pullRequestReview, err := client.PullRequestReview(nil).Load(map[string]any{"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullRequestReview) // the loaded record
```

#### Example: List

```go
pullRequestReviews, err := client.PullRequestReview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullRequestReviews) // the array of records
```

#### Example: Create

```go
result, err := client.PullRequestReview(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "author_association": "example_author_association",
    "body": "example_body",
    "commit_id": "example_commit_id",
    "event": "example_event",
    "html_url": "example_html_url",
    "id": 1,
    "links": map[string]any{},
    "message": "example_message",
    "node_id": "example_node_id",
    "pull_request_url": "example_pull_request_url",
    "state": "example_state",
    "teams": []any{},
    "user": map[string]any{},
    "users": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PullRequestReviewComment

Create an instance: `pullRequestReviewComment := client.PullRequestReviewComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `body` | `string` | The text of the comment. |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `commit_id` | `string` | The SHA of the commit to which the comment applies. |
| `created_at` | `string` |  |
| `diff_hunk` | `string` | The diff of the line that the comment refers to. |
| `html_url` | `string` | HTML URL for the pull request review comment. |
| `id` | `int` | The ID of the pull request review comment. |
| `in_reply_to` | `int` | The ID of the review comment to reply to. |
| `in_reply_to_id` | `int` | The comment ID to reply to. |
| `line` | `int` | The line of the blob to which the comment applies. |
| `links` | `map[string]any` |  |
| `node_id` | `string` | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | The line of the blob to which the comment applies. |
| `original_position` | `int` | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | The first line of the range for a multi-line comment. |
| `path` | `string` | The relative path of the file to which the comment applies. |
| `position` | `int` | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | URL for the pull request that the review comment belongs to. |
| `reactions` | `map[string]any` |  |
| `side` | `string` | The side of the diff to which the comment applies. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the pull request review comment |
| `user` | `map[string]any` | A GitHub user. |

#### Example: Load

```go
pullRequestReviewComment, err := client.PullRequestReviewComment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullRequestReviewComment) // the loaded record
```

#### Example: List

```go
pullRequestReviewComments, err := client.PullRequestReviewComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pullRequestReviewComments) // the array of records
```

#### Example: Create

```go
result, err := client.PullRequestReviewComment(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "author_association": "example_author_association",
    "body": "example_body",
    "commit_id": "example_commit_id",
    "created_at": "example_created_at",
    "diff_hunk": "example_diff_hunk",
    "html_url": "example_html_url",
    "id": 1,
    "links": map[string]any{},
    "node_id": "example_node_id",
    "original_commit_id": "example_original_commit_id",
    "path": "example_path",
    "pull_request_review_id": 1,
    "pull_request_url": "example_pull_request_url",
    "reactions": map[string]any{},
    "updated_at": "example_updated_at",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PullRequestSimple

Create an instance: `pullRequestSimple := client.PullRequestSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewers` | `[]any` | An array of user `login`s that will be requested. |
| `team_reviewers` | `[]any` | An array of team `slug`s that will be requested. |

#### Example: Create

```go
result, err := client.PullRequestSimple(nil).Create(map[string]any{
    "owner": "example_owner",
    "pull_number": 1,
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RateLimit

Create an instance: `rateLimit := client.RateLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate` | `map[string]any` |  |
| `resources` | `map[string]any` |  |

#### Example: Load

```go
rateLimit, err := client.RateLimit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rateLimit) // the loaded record
```


### Reaction

Create an instance: `reaction := client.Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `content` | `string` | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `created_at` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: List

```go
reactions, err := client.Reaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reactions) // the array of records
```

#### Example: Create

```go
result, err := client.Reaction(nil).Create(map[string]any{
    "discussion_number": 1,
    "team_id": 1,
    "avatar_url": "example_avatar_url",
    "content": "example_content",
    "created_at": "example_created_at",
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "gists_url": "example_gists_url",
    "gravatar_id": "example_gravatar_id",
    "html_url": "example_html_url",
    "id": 1,
    "login": "example_login",
    "node_id": "example_node_id",
    "organizations_url": "example_organizations_url",
    "received_events_url": "example_received_events_url",
    "repos_url": "example_repos_url",
    "site_admin": true,
    "starred_url": "example_starred_url",
    "subscriptions_url": "example_subscriptions_url",
    "type": "example_type",
    "url": "example_url",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Referrer

Create an instance: `referrer := client.Referrer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `referrer` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```go
referrers, err := client.Referrer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(referrers) // the array of records
```


### Release

Create an instance: `release := client.Release(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `[]any` |  |
| `assets_url` | `string` |  |
| `author` | `map[string]any` | A GitHub user. |
| `body` | `string` | Text describing the contents of the tag. |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `browser_download_url` | `string` |  |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `digest` | `string` |  |
| `discussion_category_name` | `string` | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `string` | The URL of the release discussion. |
| `download_count` | `int` |  |
| `draft` | `bool` | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `bool` | Whether to automatically generate the name and body for this release. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `immutable` | `bool` | Whether or not the release is immutable. |
| `label` | `string` |  |
| `make_latest` | `string` | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `int` |  |
| `name` | `string` | The name of the release. |
| `node_id` | `string` |  |
| `prerelease` | `bool` | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `string` |  |
| `reactions` | `map[string]any` |  |
| `size` | `int` |  |
| `state` | `string` | State of the release asset. |
| `tag_name` | `string` | The name of the tag. |
| `tarball_url` | `string` |  |
| `target_commitish` | `string` | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` |  |
| `upload_url` | `string` |  |
| `uploader` | `map[string]any` | A GitHub user. |
| `url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: Load

```go
release, err := client.Release(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(release) // the loaded record
```

#### Example: List

```go
releases, err := client.Release(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releases) // the array of records
```

#### Example: Create

```go
result, err := client.Release(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "assets": []any{},
    "assets_url": "example_assets_url",
    "author": map[string]any{},
    "browser_download_url": "example_browser_download_url",
    "content_type": "example_content_type",
    "created_at": "example_created_at",
    "digest": "example_digest",
    "download_count": 1,
    "draft": true,
    "html_url": "example_html_url",
    "id": 1,
    "label": "example_label",
    "name": "example_name",
    "node_id": "example_node_id",
    "prerelease": true,
    "published_at": "example_published_at",
    "reactions": map[string]any{},
    "size": 1,
    "state": "example_state",
    "tag_name": "example_tag_name",
    "tarball_url": "example_tarball_url",
    "target_commitish": "example_target_commitish",
    "upload_url": "example_upload_url",
    "uploader": map[string]any{},
    "url": "example_url",
    "zipball_url": "example_zipball_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReleaseAsset

Create an instance: `releaseAsset := client.ReleaseAsset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `browser_download_url` | `string` |  |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `digest` | `string` |  |
| `download_count` | `int` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `label` | `string` | An alternate short description of the asset. |
| `login` | `string` |  |
| `name` | `string` | The file name of the asset. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `size` | `int` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | State of the release asset. |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader` | `map[string]any` | A GitHub user. |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
releaseAsset, err := client.ReleaseAsset(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseAsset) // the loaded record
```

#### Example: List

```go
releaseAssets, err := client.ReleaseAsset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(releaseAssets) // the array of records
```

#### Example: Create

```go
result, err := client.ReleaseAsset(nil).Create(map[string]any{
    "id": 1,
    "owner": "example_owner",
    "repo": "example_repo",
    "name": "example_name",
    "avatar_url": "example_avatar_url",
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "gists_url": "example_gists_url",
    "gravatar_id": "example_gravatar_id",
    "html_url": "example_html_url",
    "login": "example_login",
    "node_id": "example_node_id",
    "organizations_url": "example_organizations_url",
    "received_events_url": "example_received_events_url",
    "repos_url": "example_repos_url",
    "site_admin": true,
    "starred_url": "example_starred_url",
    "subscriptions_url": "example_subscriptions_url",
    "type": "example_type",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReleaseNotesContent

Create an instance: `releaseNotesContent := client.ReleaseNotesContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | The generated body describing the contents of the release supporting markdown formatting |
| `configuration_file_path` | `string` | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `name` | `string` | The generated name of the release |
| `previous_tag_name` | `string` | The name of the previous tag to use as the starting point for the release notes. |
| `tag_name` | `string` | The tag name for the release. |
| `target_commitish` | `string` | Specifies the commitish value that will be the target for the release's tag. |

#### Example: Create

```go
result, err := client.ReleaseNotesContent(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "body": "example_body",
    "name": "example_name",
    "tag_name": "example_tag_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Remove

Create an instance: `remove := client.Remove(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `[]any` | The GitHub user handles to be removed from the team. |

#### Example: Create

```go
result, err := client.Remove(nil).Create(map[string]any{
    "enterprise": "example_enterprise",
    "team_id": "example_team_id",
    "usernames": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Repo

Create an instance: `repo := client.Repo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `app` | `map[string]any` | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `attestations` | `[]any` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `build_type` | `string` | The process by which the GitHub Pages site will be built. |
| `bundle` | `map[string]any` | The attestation's Sigstore Bundle. |
| `client_payload` | `map[string]any` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` |  |
| `cname` | `string` | Specify a custom domain for the repository. |
| `code_search_index_status` | `map[string]any` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `content` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `string` | The default branch of the repository. |
| `default_branch_only` | `bool` | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `map[string]any` | The type of deployment branch policy for this environment. |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `download_url` | `string` |  |
| `downloads_url` | `string` |  |
| `enabled` | `bool` | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `string` |  |
| `event_type` | `string` | A custom webhook event name. |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `int` | Unique identifier of the repository |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `https_enforced` | `bool` | Specify whether HTTPS should be enforced for the repository. |
| `id` | `string` | Unique identifier of the repository |
| `integration_url` | `string` | The URL for the endpoint to get details about the app. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `links` | `map[string]any` |  |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | When forking from an existing repository, a new name for the fork. |
| `new_name` | `string` | The new name to be given to the repository. |
| `new_owner` | `string` | The username or organization name the repository will be transferred to. |
| `node_id` | `string` | The node ID for the deployment protection rule integration. |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `string` | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `map[string]any` | A GitHub user. |
| `path` | `string` |  |
| `permissions` | `map[string]any` |  |
| `private` | `bool` | Whether the repository is private or public. |
| `properties` | `[]any` | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `[]any` | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `sha` | `string` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |
| `source` | `any` |  |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_ids` | `[]any` | ID of the team or teams to add to the repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `type` | `string` | Whether this rule targets a branch or tag. |
| `updated_at` | `string` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```go
repo, err := client.Repo(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repo) // the loaded record
```

#### Example: List

```go
repos, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repos) // the array of records
```

#### Example: Create

```go
result, err := client.Repo(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "app": map[string]any{},
    "archive_url": "example_archive_url",
    "archived": true,
    "assignees_url": "example_assignees_url",
    "blobs_url": "example_blobs_url",
    "branches_url": "example_branches_url",
    "bundle": map[string]any{},
    "clone_url": "example_clone_url",
    "collaborators_url": "example_collaborators_url",
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "created_at": "example_created_at",
    "default_branch": "example_default_branch",
    "deployment_branch_policy": map[string]any{},
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "disabled": true,
    "downloads_url": "example_downloads_url",
    "enabled": true,
    "event_type": "example_event_type",
    "events_url": "example_events_url",
    "fork": true,
    "forks": 1,
    "forks_count": 1,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "github_id": 1,
    "has_downloads": true,
    "has_issues": true,
    "has_pages": true,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "example_homepage",
    "hooks_url": "example_hooks_url",
    "id": "example_id",
    "integration_url": "example_integration_url",
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "language": "example_language",
    "languages_url": "example_languages_url",
    "license": map[string]any{},
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "mirror_url": "example_mirror_url",
    "new_owner": "example_new_owner",
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "open_issues": 1,
    "open_issues_count": 1,
    "permissions": map[string]any{},
    "private": true,
    "properties": []any{},
    "pulls_url": "example_pulls_url",
    "pushed_at": "example_pushed_at",
    "releases_url": "example_releases_url",
    "slug": "example_slug",
    "ssh_url": "example_ssh_url",
    "stargazers_count": 1,
    "stargazers_url": "example_stargazers_url",
    "statuses_url": "example_statuses_url",
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "svn_url": "example_svn_url",
    "tags_url": "example_tags_url",
    "teams_url": "example_teams_url",
    "trees_url": "example_trees_url",
    "updated_at": "example_updated_at",
    "watchers": 1,
    "watchers_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Repository

Create an instance: `repository := client.Repository(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_search_index_status` | `map[string]any` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: List

```go
repositorys, err := client.Repository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositorys) // the array of records
```


### RepositoryAdvisory

Create an instance: `repositoryAdvisory := client.RepositoryAdvisory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` | The author of the advisory. |
| `closed_at` | `string` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `[]any` | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `[]any` | A list of users that collaborate on the advisory. |
| `created_at` | `string` | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `[]any` | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `[]any` |  |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `map[string]any` |  |
| `cvss_severities` | `map[string]any` |  |
| `cvss_vector_string` | `string` | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `[]any` | A list of only the CWE IDs. |
| `cwes` | `[]any` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `html_url` | `string` | The URL for the advisory. |
| `identifiers` | `[]any` |  |
| `private_fork` | `any` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `any` | The publisher of the advisory. |
| `severity` | `string` | The severity of the advisory. |
| `start_private_fork` | `bool` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | The state of the advisory. |
| `submission` | `map[string]any` |  |
| `summary` | `string` | A short summary of the advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `[]any` | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```go
repositoryAdvisory, err := client.RepositoryAdvisory(nil).Load(map[string]any{"ghsa_id": "ghsa_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryAdvisory) // the loaded record
```

#### Example: List

```go
repositoryAdvisorys, err := client.RepositoryAdvisory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryAdvisorys) // the array of records
```

#### Example: Create

```go
result, err := client.RepositoryAdvisory(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "author": "example_author",
    "closed_at": "example_closed_at",
    "collaborating_teams": []any{},
    "collaborating_users": []any{},
    "created_at": "example_created_at",
    "credits": []any{},
    "credits_detailed": []any{},
    "cve_id": "example_cve_id",
    "cvss": map[string]any{},
    "cwe_ids": []any{},
    "cwes": []any{},
    "description": "example_description",
    "ghsa_id": "example_ghsa_id",
    "html_url": "example_html_url",
    "identifiers": []any{},
    "private_fork": "example_private_fork",
    "published_at": "example_published_at",
    "publisher": "example_publisher",
    "severity": "example_severity",
    "state": "example_state",
    "submission": map[string]any{},
    "summary": "example_summary",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "vulnerabilities": []any{},
    "withdrawn_at": "example_withdrawn_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositoryCollaboratorPermission

Create an instance: `repositoryCollaboratorPermission := client.RepositoryCollaboratorPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `permissions` | `map[string]any` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `role_name` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```go
repositoryCollaboratorPermission, err := client.RepositoryCollaboratorPermission(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryCollaboratorPermission) // the loaded record
```


### RepositoryInvitation

Create an instance: `repositoryInvitation := client.RepositoryInvitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expired` | `bool` | Whether or not the invitation has expired |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository invitation. |
| `invitee` | `map[string]any` | A GitHub user. |
| `inviter` | `map[string]any` | A GitHub user. |
| `node_id` | `string` |  |
| `permission` | `string` | The permission to grant the collaborator. |
| `permissions` | `string` | The permission associated with the invitation. |
| `repository` | `map[string]any` | Minimal Repository |
| `url` | `string` | URL for the repository invitation |

#### Example: List

```go
repositoryInvitations, err := client.RepositoryInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryInvitations) // the array of records
```


### RepositoryRuleDetailed

Create an instance: `repositoryRuleDetailed := client.RepositoryRuleDetailed(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `parameters` | `map[string]any` |  |
| `ruleset_id` | `int` |  |
| `ruleset_source` | `string` |  |
| `ruleset_source_type` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```go
repositoryRuleDetailed, err := client.RepositoryRuleDetailed(nil).Load(map[string]any{"branch": "branch", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryRuleDetailed) // the loaded record
```


### RepositoryRuleset

Create an instance: `repositoryRuleset := client.RepositoryRuleset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_actors` | `[]any` | The actors that can bypass the rules in this ruleset |
| `conditions` | `any` | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` |  |
| `current_user_can_bypass` | `string` | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | The enforcement level of the ruleset. |
| `id` | `int` | The ID of the ruleset |
| `links` | `map[string]any` |  |
| `name` | `string` | The name of the ruleset |
| `node_id` | `string` |  |
| `rules` | `[]any` | An array of rules within the ruleset. |
| `source` | `string` | The name of the source |
| `source_type` | `string` | The type of the source of the ruleset |
| `target` | `string` | The target of the ruleset |
| `updated_at` | `string` |  |

#### Example: Load

```go
repositoryRuleset, err := client.RepositoryRuleset(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryRuleset) // the loaded record
```

#### Example: List

```go
repositoryRulesets, err := client.RepositoryRuleset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositoryRulesets) // the array of records
```

#### Example: Create

```go
result, err := client.RepositoryRuleset(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "enforcement": "example_enforcement",
    "id": 1,
    "name": "example_name",
    "source": "example_source",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RepositorySubscription

Create an instance: `repositorySubscription := client.RepositorySubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `ignored` | `bool` | Determines if all notifications should be blocked from this repository. |
| `reason` | `string` |  |
| `repository_url` | `string` |  |
| `subscribed` | `bool` | Determines if notifications should be received from this repository. |
| `url` | `string` |  |

#### Example: Load

```go
repositorySubscription, err := client.RepositorySubscription(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(repositorySubscription) // the loaded record
```


### ReviewComment

Create an instance: `reviewComment := client.ReviewComment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `body` | `string` |  |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `commit_id` | `string` |  |
| `created_at` | `string` |  |
| `diff_hunk` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `in_reply_to_id` | `int` |  |
| `line` | `int` | The line of the blob to which the comment applies. |
| `links` | `map[string]any` |  |
| `node_id` | `string` |  |
| `original_commit_id` | `string` |  |
| `original_line` | `int` | The original line of the blob to which the comment applies. |
| `original_position` | `int` |  |
| `original_start_line` | `int` | The original first line of the range for a multi-line comment. |
| `path` | `string` |  |
| `position` | `int` |  |
| `pull_request_review_id` | `int` |  |
| `pull_request_url` | `string` |  |
| `reactions` | `map[string]any` |  |
| `side` | `string` | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |

#### Example: List

```go
reviewComments, err := client.ReviewComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reviewComments) // the array of records
```


### RuleSuite

Create an instance: `ruleSuite := client.RuleSuite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `int` | The number that identifies the user. |
| `actor_name` | `string` | The handle for the GitHub user account. |
| `after_sha` | `string` | The new commit SHA of the ref. |
| `before_sha` | `string` | The previous commit SHA of the ref. |
| `evaluation_result` | `string` | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `int` | The unique identifier of the rule insight. |
| `pushed_at` | `string` |  |
| `ref` | `string` | The ref name that the evaluation ran on. |
| `repository_id` | `int` | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `string` | The name of the repository without the `.git` extension. |
| `result` | `string` | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `[]any` | Details on the evaluated rules. |

#### Example: Load

```go
ruleSuite, err := client.RuleSuite(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ruleSuite) // the loaded record
```

#### Example: List

```go
ruleSuites, err := client.RuleSuite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ruleSuites) // the array of records
```


### RulesetVersion

Create an instance: `rulesetVersion := client.RulesetVersion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | The actor who updated the ruleset |
| `id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: List

```go
rulesetVersions, err := client.RulesetVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rulesetVersions) // the array of records
```


### RulesetVersionWithState

Create an instance: `rulesetVersionWithState := client.RulesetVersionWithState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | The actor who updated the ruleset |
| `state` | `map[string]any` | The state of the ruleset version |
| `updated_at` | `string` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: Load

```go
rulesetVersionWithState, err := client.RulesetVersionWithState(nil).Load(map[string]any{"ruleset_id": 1, "version_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rulesetVersionWithState) // the loaded record
```


### Runner

Create an instance: `runner := client.Runner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `busy` | `bool` |  |
| `ephemeral` | `bool` |  |
| `id` | `int` | The ID of the runner. |
| `labels` | `[]any` |  |
| `name` | `string` | The name of the runner. |
| `os` | `string` | The Operating System of the runner. |
| `runner_group_id` | `int` | The ID of the runner group. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```go
runner, err := client.Runner(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(runner) // the loaded record
```


### RunnerApplication

Create an instance: `runnerApplication := client.RunnerApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `string` |  |
| `download_url` | `string` |  |
| `filename` | `string` |  |
| `os` | `string` |  |
| `sha256_checksum` | `string` |  |
| `temp_download_token` | `string` | A short lived bearer token used to download the runner, if needed. |

#### Example: List

```go
runnerApplications, err := client.RunnerApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(runnerApplications) // the array of records
```


### RunnerGroup

Create an instance: `runnerGroup := client.RunnerGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_public_repositories` | `bool` | Whether the runner group can be used by `public` repositories. |
| `default` | `bool` |  |
| `hosted_runners_url` | `string` |  |
| `id` | `float64` |  |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `name` | `string` | Name of the runner group. |
| `network_configuration_id` | `string` | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `[]any` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `[]any` | List of repository IDs that can access the runner group. |
| `selected_workflows` | `[]any` | List of workflows the runner group should be allowed to run. |
| `visibility` | `string` | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `bool` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

#### Example: Load

```go
runnerGroup, err := client.RunnerGroup(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(runnerGroup) // the loaded record
```

#### Example: Create

```go
result, err := client.RunnerGroup(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "allows_public_repositories": true,
    "default": true,
    "id": 1,
    "inherited": true,
    "name": "example_name",
    "runners_url": "example_runners_url",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `aliases` | `[]any` |  |
| `allow_auto_merge` | `bool` |  |
| `allow_forking` | `bool` |  |
| `allow_merge_commit` | `bool` |  |
| `allow_rebase_merge` | `bool` |  |
| `allow_squash_merge` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignee` | `map[string]any` | A GitHub user. |
| `assignees` | `[]any` |  |
| `assignees_url` | `string` |  |
| `author` | `map[string]any` | A GitHub user. |
| `author_association` | `string` | How the author is associated with the repository. |
| `avatar_url` | `string` |  |
| `bio` | `string` |  |
| `blobs_url` | `string` |  |
| `blog` | `string` |  |
| `body` | `string` |  |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `closed_at` | `string` |  |
| `collaborators_url` | `string` |  |
| `color` | `string` |  |
| `comments` | `int` |  |
| `comments_url` | `string` |  |
| `commit` | `map[string]any` |  |
| `commits_url` | `string` |  |
| `committer` | `map[string]any` | Metaproperties for Git author/committer information. |
| `company` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `curated` | `bool` |  |
| `default` | `bool` |  |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `display_name` | `string` |  |
| `downloads_url` | `string` |  |
| `draft` | `bool` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `featured` | `bool` |  |
| `file_size` | `int` |  |
| `followers` | `int` |  |
| `followers_url` | `string` |  |
| `following` | `int` |  |
| `following_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `hireable` | `bool` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `string` |  |
| `issue_dependencies_summary` | `map[string]any` |  |
| `issue_events_url` | `string` |  |
| `issue_field_values` | `[]any` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels` | `[]any` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_modified_at` | `string` |  |
| `license` | `map[string]any` | License Simple |
| `line_numbers` | `[]any` |  |
| `location` | `string` |  |
| `locked` | `bool` |  |
| `login` | `string` |  |
| `logo_url` | `string` |  |
| `master_branch` | `string` |  |
| `merges_url` | `string` |  |
| `milestone` | `map[string]any` | A collection of related issues and pull requests. |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `number` | `int` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organizations_url` | `string` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `parents` | `[]any` |  |
| `path` | `string` |  |
| `performed_via_github_app` | `map[string]any` | GitHub apps are a new way to extend GitHub. |
| `permissions` | `map[string]any` |  |
| `private` | `bool` |  |
| `public_gists` | `int` |  |
| `public_repos` | `int` |  |
| `pull_request` | `map[string]any` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `map[string]any` |  |
| `received_events_url` | `string` |  |
| `related` | `[]any` |  |
| `released` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository` | `map[string]any` | A repository on GitHub. |
| `repository_count` | `int` |  |
| `repository_url` | `string` |  |
| `score` | `float64` |  |
| `sha` | `string` |  |
| `short_description` | `string` |  |
| `site_admin` | `bool` |  |
| `size` | `int` |  |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` |  |
| `state_reason` | `string` |  |
| `statuses_url` | `string` |  |
| `sub_issues_summary` | `map[string]any` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `suspended_at` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `text_matches` | `[]any` |  |
| `timeline_url` | `string` |  |
| `title` | `string` |  |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `type` | `map[string]any` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `map[string]any` | A GitHub user. |
| `user_view_type` | `string` |  |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(searchs) // the array of records
```


### SecretScanning

Create an instance: `secretScanning := client.SecretScanning(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_settings` | `[]any` | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | The updated pattern configuration version. |
| `provider_pattern_settings` | `[]any` | Pattern settings for provider patterns. |


### SecretScanningAlert

Create an instance: `secretScanningAlert := client.SecretScanningAlert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `is_base64_encoded` | `bool` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `int` | The security alert number. |
| `publicly_leaked` | `bool` | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `map[string]any` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `map[string]any` | A GitHub user. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | An optional comment to resolve an alert. |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `map[string]any` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: Load

```go
secretScanningAlert, err := client.SecretScanningAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretScanningAlert) // the loaded record
```

#### Example: List

```go
secretScanningAlerts, err := client.SecretScanningAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretScanningAlerts) // the array of records
```


### SecretScanningLocation

Create an instance: `secretScanningLocation := client.SecretScanningLocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `any` |  |
| `type` | `string` | The location type. |

#### Example: List

```go
secretScanningLocations, err := client.SecretScanningLocation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretScanningLocations) // the array of records
```


### SecretScanningPatternConfiguration

Create an instance: `secretScanningPatternConfiguration := client.SecretScanningPatternConfiguration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_overrides` | `[]any` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | The version of the entity. |
| `provider_pattern_overrides` | `[]any` | Overrides for partner patterns. |

#### Example: List

```go
secretScanningPatternConfigurations, err := client.SecretScanningPatternConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretScanningPatternConfigurations) // the array of records
```


### SecretScanningPushProtectionBypass

Create an instance: `secretScanningPushProtectionBypass := client.SecretScanningPushProtectionBypass(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expire_at` | `string` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | `string` | The ID of the push protection bypass placeholder. |
| `reason` | `string` | The reason for bypassing push protection. |
| `token_type` | `string` | The token type this bypass is for. |

#### Example: Create

```go
result, err := client.SecretScanningPushProtectionBypass(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "placeholder_id": "example_placeholder_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SecretScanningScanHistory

Create an instance: `secretScanningScanHistory := client.SecretScanningScanHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backfill_scans` | `[]any` |  |
| `custom_pattern_backfill_scans` | `[]any` |  |
| `incremental_scans` | `[]any` |  |
| `pattern_update_scans` | `[]any` |  |

#### Example: List

```go
secretScanningScanHistorys, err := client.SecretScanningScanHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secretScanningScanHistorys) // the array of records
```


### SecurityAdvisory

Create an instance: `securityAdvisory := client.SecurityAdvisory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.SecurityAdvisory(nil).Create(map[string]any{
    "id": "example_id",
    "owner": "example_owner",
    "repo": "example_repo",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SelectedAction

Create an instance: `selectedAction := client.SelectedAction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `github_owned_allowed` | `bool` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `[]any` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | Whether actions from GitHub Marketplace verified creators are allowed. |

#### Example: List

```go
selectedActions, err := client.SelectedAction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(selectedActions) // the array of records
```


### SelfHostedRunner

Create an instance: `selfHostedRunner := client.SelfHostedRunner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled_repositories` | `string` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

#### Example: Load

```go
selfHostedRunner, err := client.SelfHostedRunner(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(selfHostedRunner) // the loaded record
```


### ShortBlob

Create an instance: `shortBlob := client.ShortBlob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | The new blob's content. |
| `encoding` | `string` | The encoding used for `content`. |

#### Example: Create

```go
result, err := client.ShortBlob(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "content": "example_content",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ShortBranch

Create an instance: `shortBranch := client.ShortBranch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `protection` | `map[string]any` | Branch Protection |
| `protection_url` | `string` |  |

#### Example: List

```go
shortBranchs, err := client.ShortBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(shortBranchs) // the array of records
```


### SimpleClassroom

Create an instance: `simpleClassroom := client.SimpleClassroom(nil)`


### SimpleClassroomAssignment

Create an instance: `simpleClassroomAssignment := client.SimpleClassroomAssignment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `map[string]any` | A GitHub Classroom classroom |
| `deadline` | `string` | The time at which the assignment is due. |
| `editor` | `string` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `int` | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Whether the invitation link is enabled. |
| `invite_link` | `string` | The link that a student can use to accept the assignment. |
| `language` | `string` | The programming language used in the assignment. |
| `max_members` | `int` | The maximum allowable members per team. |
| `max_teams` | `int` | The maximum allowable teams for the assignment. |
| `passing` | `int` | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Sluggified name of the assignment. |
| `students_are_repo_admins` | `bool` | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `int` | The number of students that have submitted the assignment. |
| `title` | `string` | Assignment title. |
| `type` | `string` | Whether it's a Group Assignment or Individual Assignment. |

#### Example: List

```go
simpleClassroomAssignments, err := client.SimpleClassroomAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(simpleClassroomAssignments) // the array of records
```


### SocialAccount

Create an instance: `socialAccount := client.SocialAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_urls` | `[]any` | Full URLs for the social media profiles to add. |
| `provider` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
socialAccounts, err := client.SocialAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(socialAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.SocialAccount(nil).Create(map[string]any{
    "account_urls": []any{},
    "provider": "example_provider",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SshSigningKey

Create an instance: `sshSigningKey := client.SshSigningKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` | The public SSH key to add to your GitHub account. |
| `title` | `string` | A descriptive name for the new key. |

#### Example: Load

```go
sshSigningKey, err := client.SshSigningKey(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sshSigningKey) // the loaded record
```

#### Example: List

```go
sshSigningKeys, err := client.SshSigningKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sshSigningKeys) // the array of records
```

#### Example: Create

```go
result, err := client.SshSigningKey(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": 1,
    "key": "example_key",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Status

Create an instance: `status := client.Status(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `context` | `string` | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `description` | `string` | A short description of the status. |
| `id` | `int` |  |
| `node_id` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | The target URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
statuss, err := client.Status(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(statuss) // the array of records
```

#### Example: Create

```go
result, err := client.Status(nil).Create(map[string]any{
    "id": "example_id",
    "owner": "example_owner",
    "repo": "example_repo",
    "avatar_url": "example_avatar_url",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "node_id": "example_node_id",
    "state": "example_state",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### StatusCheckPolicy

Create an instance: `statusCheckPolicy := client.StatusCheckPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` |  |
| `checks` | `[]any` | The list of status checks to require in order to merge into this branch. |
| `context` | `string` |  |
| `contexts` | `[]any` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `string` |  |
| `strict` | `bool` | Require branches to be up to date before merging. |
| `url` | `string` |  |

#### Example: List

```go
statusCheckPolicys, err := client.StatusCheckPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusCheckPolicys) // the array of records
```


### Subscriber

Create an instance: `subscriber := client.Subscriber(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```go
subscribers, err := client.Subscriber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscribers) // the array of records
```


### Tag

Create an instance: `tag := client.Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `map[string]any` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `tarball_url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: List

```go
tags, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tags) // the array of records
```


### TagProtection

Create an instance: `tagProtection := client.TagProtection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `int` |  |
| `pattern` | `string` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `string` |  |

#### Example: List

```go
tagProtections, err := client.TagProtection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tagProtections) // the array of records
```

#### Example: Create

```go
result, err := client.TagProtection(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "pattern": "example_pattern",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `assignment` | `string` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `map[string]any` | A GitHub user. |
| `avatar_url` | `string` |  |
| `blobs_url` | `string` |  |
| `body` | `string` | The main text of the comment. |
| `body_html` | `string` |  |
| `body_version` | `string` | The current version of the body content. |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `map[string]any` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `columns_url` | `string` |  |
| `comments_count` | `int` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` | A GitHub user. |
| `custom_properties` | `map[string]any` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` | The description of the team. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `discussion_url` | `string` |  |
| `downloads_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `failed_at` | `string` |  |
| `failed_reason` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository |
| `invitation_source` | `string` |  |
| `invitation_teams_url` | `string` |  |
| `inviter` | `map[string]any` | A GitHub user. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_edited_at` | `string` |  |
| `ldap_dn` | `string` | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `map[string]any` | License Simple |
| `login` | `string` |  |
| `maintainers` | `[]any` | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `string` |  |
| `members_count` | `int` |  |
| `members_url` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notification_setting` | `string` | The notification setting the team has set |
| `notifications_url` | `string` |  |
| `number` | `int` | The unique sequence number of a team discussion comment. |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `map[string]any` | Team Organization |
| `organization_permission` | `string` | The organization permission for this project. |
| `organizations_url` | `string` |  |
| `owner` | `map[string]any` | A GitHub user. |
| `owner_url` | `string` |  |
| `parent` | `map[string]any` | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | The ID of a team to set as the parent team. |
| `permission` | `string` | Permission that the team will have for its repositories |
| `permissions` | `map[string]any` |  |
| `pinned` | `bool` | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | The level of privacy this team should have |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `map[string]any` |  |
| `received_events_url` | `string` |  |
| `releases_url` | `string` |  |
| `repo_names` | `[]any` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` |  |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `role` | `string` | The role of the user in the team. |
| `role_name` | `string` |  |
| `security_and_analysis` | `map[string]any` |  |
| `site_admin` | `bool` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `string` |  |
| `ssh_url` | `string` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | The state of the user's membership in the team. |
| `statuses_url` | `string` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_count` | `int` |  |
| `team_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `title` | `string` | The title of the discussion. |
| `topics` | `[]any` |  |
| `trees_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the team |
| `user_view_type` | `string` |  |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```

#### Example: Create

```go
result, err := client.Team(nil).Create(map[string]any{
    "org_id": "example_org_id",
    "archive_url": "example_archive_url",
    "archived": true,
    "assignees_url": "example_assignees_url",
    "author": map[string]any{},
    "avatar_url": "example_avatar_url",
    "blobs_url": "example_blobs_url",
    "body": "example_body",
    "body_html": "example_body_html",
    "body_version": "example_body_version",
    "branches_url": "example_branches_url",
    "clone_url": "example_clone_url",
    "code_of_conduct": map[string]any{},
    "collaborators_url": "example_collaborators_url",
    "columns_url": "example_columns_url",
    "comments_count": 1,
    "comments_url": "example_comments_url",
    "commits_url": "example_commits_url",
    "compare_url": "example_compare_url",
    "contents_url": "example_contents_url",
    "contributors_url": "example_contributors_url",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "default_branch": "example_default_branch",
    "deployments_url": "example_deployments_url",
    "description": "example_description",
    "disabled": true,
    "discussion_url": "example_discussion_url",
    "downloads_url": "example_downloads_url",
    "events_url": "example_events_url",
    "followers_url": "example_followers_url",
    "following_url": "example_following_url",
    "fork": true,
    "forks": 1,
    "forks_count": 1,
    "forks_url": "example_forks_url",
    "full_name": "example_full_name",
    "gists_url": "example_gists_url",
    "git_commits_url": "example_git_commits_url",
    "git_refs_url": "example_git_refs_url",
    "git_tags_url": "example_git_tags_url",
    "git_url": "example_git_url",
    "gravatar_id": "example_gravatar_id",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": true,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "example_homepage",
    "hooks_url": "example_hooks_url",
    "html_url": "example_html_url",
    "id": 1,
    "invitation_teams_url": "example_invitation_teams_url",
    "inviter": map[string]any{},
    "issue_comment_url": "example_issue_comment_url",
    "issue_events_url": "example_issue_events_url",
    "issues_url": "example_issues_url",
    "keys_url": "example_keys_url",
    "labels_url": "example_labels_url",
    "language": "example_language",
    "languages_url": "example_languages_url",
    "last_edited_at": "example_last_edited_at",
    "license": map[string]any{},
    "login": "example_login",
    "members_count": 1,
    "members_url": "example_members_url",
    "merges_url": "example_merges_url",
    "milestones_url": "example_milestones_url",
    "mirror_url": "example_mirror_url",
    "name": "example_name",
    "node_id": "example_node_id",
    "notifications_url": "example_notifications_url",
    "number": 1,
    "open_issues": 1,
    "open_issues_count": 1,
    "organization": map[string]any{},
    "organizations_url": "example_organizations_url",
    "owner": map[string]any{},
    "owner_url": "example_owner_url",
    "parent": map[string]any{},
    "permission": "example_permission",
    "permissions": map[string]any{},
    "pinned": true,
    "private": true,
    "pulls_url": "example_pulls_url",
    "pushed_at": "example_pushed_at",
    "reactions": map[string]any{},
    "received_events_url": "example_received_events_url",
    "releases_url": "example_releases_url",
    "repos_count": 1,
    "repos_url": "example_repos_url",
    "repositories_url": "example_repositories_url",
    "role": "example_role",
    "site_admin": true,
    "size": 1,
    "slug": "example_slug",
    "ssh_url": "example_ssh_url",
    "stargazers_count": 1,
    "stargazers_url": "example_stargazers_url",
    "starred_url": "example_starred_url",
    "state": "example_state",
    "statuses_url": "example_statuses_url",
    "subscribers_url": "example_subscribers_url",
    "subscription_url": "example_subscription_url",
    "subscriptions_url": "example_subscriptions_url",
    "svn_url": "example_svn_url",
    "tags_url": "example_tags_url",
    "team_count": 1,
    "team_url": "example_team_url",
    "teams_url": "example_teams_url",
    "title": "example_title",
    "trees_url": "example_trees_url",
    "type": "example_type",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "watchers": 1,
    "watchers_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TeamSimple

Create an instance: `teamSimple := client.TeamSimple(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the team |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the team |
| `ldap_dn` | `string` | Distinguished Name (DN) that team maps to within LDAP environment |
| `members_url` | `string` |  |
| `name` | `string` | Name of the team |
| `node_id` | `string` |  |
| `notification_setting` | `string` | The notification setting the team has set |
| `permission` | `string` | Permission that the team will have for its repositories |
| `privacy` | `string` | The level of privacy this team should have |
| `repositories_url` | `string` |  |
| `slug` | `string` |  |
| `url` | `string` | URL for the team |

#### Example: List

```go
teamSimples, err := client.TeamSimple(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teamSimples) // the array of records
```


### Thread

Create an instance: `thread := client.Thread(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `last_read_at` | `string` |  |
| `reason` | `string` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `subject` | `map[string]any` |  |
| `subscription_url` | `string` |  |
| `unread` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
thread, err := client.Thread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(thread) // the loaded record
```

#### Example: List

```go
threads, err := client.Thread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(threads) // the array of records
```


### ThreadSubscription

Create an instance: `threadSubscription := client.ThreadSubscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `ignored` | `bool` | Whether to block all notifications from a thread. |
| `reason` | `string` |  |
| `repository_url` | `string` |  |
| `subscribed` | `bool` |  |
| `thread_url` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
threadSubscription, err := client.ThreadSubscription(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(threadSubscription) // the loaded record
```


### Topic

Create an instance: `topic := client.Topic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `names` | `[]any` | An array of topics to add to the repository. |

#### Example: List

```go
topics, err := client.Topic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(topics) // the array of records
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `string` | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `map[string]any` | Mapping of subject digest to bundles. |
| `avatar_url` | `string` |  |
| `bio` | `string` | The new short biography of the user. |
| `blog` | `string` | The new blog URL of the user. |
| `collaborators` | `int` |  |
| `company` | `string` | The new company of the user. |
| `created_at` | `string` |  |
| `disk_usage` | `int` |  |
| `email` | `string` | The publicly visible email address of the user. |
| `events_url` | `string` |  |
| `followers` | `int` |  |
| `followers_url` | `string` |  |
| `following` | `int` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `hireable` | `bool` | The new hiring availability of the user. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `inherited_from` | `[]any` | Team the user has gotten the role through |
| `location` | `string` | The new location of the user. |
| `login` | `string` |  |
| `name` | `string` | The new name of the user. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `owned_private_repos` | `int` |  |
| `page_info` | `map[string]any` | Information about the current page. |
| `plan` | `map[string]any` |  |
| `predicate_type` | `string` | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `int` |  |
| `private_repos` | `int` |  |
| `public_gists` | `int` |  |
| `public_repos` | `int` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `bool` |  |
| `space` | `int` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subject_digests` | `[]any` | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` |  |
| `total_private_repos` | `int` |  |
| `twitter_username` | `string` | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |
| `users` | `[]any` | The username for users |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```

#### Example: Create

```go
result, err := client.User(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "owner": "example_owner",
    "repo": "example_repo",
    "private_repos": 1,
    "space": 1,
    "subject_digests": []any{},
    "users": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### UserMarketplacePurchase

Create an instance: `userMarketplacePurchase := client.UserMarketplacePurchase(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `map[string]any` |  |
| `billing_cycle` | `string` |  |
| `free_trial_ends_on` | `string` |  |
| `next_billing_date` | `string` |  |
| `on_free_trial` | `bool` |  |
| `plan` | `map[string]any` | Marketplace Listing Plan |
| `unit_count` | `int` |  |
| `updated_at` | `string` |  |

#### Example: List

```go
userMarketplacePurchases, err := client.UserMarketplacePurchase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userMarketplacePurchases) // the array of records
```


### View

Create an instance: `view := client.View(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```go
views, err := client.View(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(views) // the array of records
```


### WebhookConfig

Create an instance: `webhookConfig := client.WebhookConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` |  |
| `secret` | `string` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | The URL to which the payloads will be delivered. |

#### Example: Load

```go
webhookConfig, err := client.WebhookConfig(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookConfig) // the loaded record
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `badge_url` | `string` |  |
| `created_at` | `string` |  |
| `deleted_at` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `path` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
```


### WorkflowRun

Create an instance: `workflowRun := client.WorkflowRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `map[string]any` | A GitHub user. |
| `artifacts_url` | `string` | The URL to the artifacts for the workflow run. |
| `cancel_url` | `string` | The URL to cancel the workflow run. |
| `check_suite_id` | `int` | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | The node ID of the associated check suite. |
| `check_suite_url` | `string` | The URL to the associated check suite. |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `display_title` | `string` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `map[string]any` | A commit. |
| `head_repository` | `map[string]any` | Minimal Repository |
| `head_repository_id` | `int` |  |
| `head_sha` | `string` | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the workflow run. |
| `jobs_url` | `string` | The URL to the jobs for the workflow run. |
| `logs_url` | `string` | The URL to download the logs for the workflow run. |
| `name` | `string` | The name of the workflow run. |
| `node_id` | `string` |  |
| `path` | `string` | The full path of the workflow |
| `previous_attempt_url` | `string` | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `[]any` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `[]any` |  |
| `repository` | `map[string]any` | Minimal Repository |
| `rerun_url` | `string` | The URL to rerun the workflow run. |
| `run_attempt` | `int` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | The start time of the latest run. |
| `status` | `string` |  |
| `triggering_actor` | `map[string]any` | A GitHub user. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL to the workflow run. |
| `workflow_id` | `int` | The ID of the parent workflow. |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```go
workflowRun, err := client.WorkflowRun(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowRun) // the loaded record
```

#### Example: Create

```go
result, err := client.WorkflowRun(nil).Create(map[string]any{
    "owner": "example_owner",
    "repo": "example_repo",
    "run_id": 1,
    "actor": map[string]any{},
    "artifacts_url": "example_artifacts_url",
    "cancel_url": "example_cancel_url",
    "check_suite_url": "example_check_suite_url",
    "conclusion": "example_conclusion",
    "created_at": "example_created_at",
    "display_title": "example_display_title",
    "event": "example_event",
    "head_branch": "example_head_branch",
    "head_commit": map[string]any{},
    "head_repository": map[string]any{},
    "head_sha": "example_head_sha",
    "html_url": "example_html_url",
    "id": 1,
    "jobs_url": "example_jobs_url",
    "logs_url": "example_logs_url",
    "node_id": "example_node_id",
    "path": "example_path",
    "pull_requests": []any{},
    "repository": map[string]any{},
    "rerun_url": "example_rerun_url",
    "run_number": 1,
    "status": "example_status",
    "triggering_actor": map[string]any{},
    "updated_at": "example_updated_at",
    "url": "example_url",
    "workflow_id": 1,
    "workflow_url": "example_workflow_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WorkflowRunUsage

Create an instance: `workflowRunUsage := client.WorkflowRunUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `map[string]any` |  |
| `UBUNTU` | `map[string]any` |  |
| `WINDOWS` | `map[string]any` |  |

#### Example: Load

```go
workflowRunUsage, err := client.WorkflowRunUsage(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "run_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowRunUsage) // the loaded record
```


### WorkflowUsage

Create an instance: `workflowUsage := client.WorkflowUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `map[string]any` |  |
| `UBUNTU` | `map[string]any` |  |
| `WINDOWS` | `map[string]any` |  |
| `id` | `string` |  |

#### Example: Load

```go
workflowUsage, err := client.WorkflowUsage(nil).Load(map[string]any{"id": "workflow_usage_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowUsage) // the loaded record
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

13 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `repository_ruleset` | `rules` | 22 | 1 level |
| `organization_secret_scanning_alert` | `first_location_detected` | 13 | 0 levels |
| `secret_scanning_alert` | `first_location_detected` | 13 | 0 levels |
| `secret_scanning_location` | `details` | 13 | 0 levels |
| `dependency_graph` | `manifests` | 3 | 4 levels |
| `dependency_graph` | `metadata` | 3 | 1 level |
| `environment` | `protection_rules` | 3 | 8 levels |
| `event` | `payload` | 3 | 7 levels |
| `issue` | `issue` | 3 | 5 levels |
| `issue` | `issue_field_values` | 3 | 3 levels |
| `repo` | `protection_rules` | 3 | 8 levels |
| `repository_ruleset` | `conditions` | 3 | 2 levels |
| `search` | `issue_field_values` | 3 | 3 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/github-sdk/go/
├── github.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/github-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
customproperty := client.CustomProperty(nil)
customproperty.List(nil, nil)

// customproperty.Data() now returns the customproperty data from the last list
// customproperty.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
