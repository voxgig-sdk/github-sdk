# Github Python SDK



The Python SDK for the Github API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Action()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/github-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from github_sdk import GithubSDK

client = GithubSDK({
    "apikey": os.environ.get("GITHUB_APIKEY"),
})
```

### 2. List action records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    actions = client.Action().list({"org_id": "example"})
    for action in actions:
        print(action)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an action

Action is nested under archive_format, so provide the `archive_format`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    action = client.Action().load({"archive_format": "example_archive_format", "artifact_id": 1, "owner": "example_owner", "repo": "example_repo"})
    print(action)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Action().create({"org_id": "example_org_id", "access_level": "example_access_level", "active_caches_count": 1, "active_caches_size_in_bytes": 1, "actor": {}, "allows_public_repositories": True, "approval_policy": "example_approval_policy", "archive_download_url": "example_archive_download_url", "archive_url": "example_archive_url", "artifacts_url": "example_artifacts_url", "assignees_url": "example_assignees_url", "badge_url": "example_badge_url", "blobs_url": "example_blobs_url", "branches_url": "example_branches_url", "busy": True, "cancel_url": "example_cancel_url", "check_run_url": "example_check_run_url", "check_suite_url": "example_check_suite_url", "code_of_conduct": {}, "collaborators_url": "example_collaborators_url", "comments_url": "example_comments_url", "commits_url": "example_commits_url", "compare_url": "example_compare_url", "completed_at": "example_completed_at", "conclusion": "example_conclusion", "contents_url": "example_contents_url", "contributors_url": "example_contributors_url", "cpu_cores": 1, "created_at": "example_created_at", "days": 1, "default": True, "deployments_url": "example_deployments_url", "description": "example_description", "display_name": "example_display_name", "display_title": "example_display_title", "downloads_url": "example_downloads_url", "enabled": True, "enabled_repositories": "example_enabled_repositories", "event": "example_event", "events_url": "example_events_url", "expired": True, "expires_at": "example_expires_at", "fork": True, "forks_url": "example_forks_url", "full_name": "example_full_name", "git_commits_url": "example_git_commits_url", "git_refs_url": "example_git_refs_url", "git_tags_url": "example_git_tags_url", "head_branch": "example_head_branch", "head_commit": {}, "head_repository": {}, "head_sha": "example_head_sha", "hooks_url": "example_hooks_url", "html_url": "example_html_url", "id": 1, "image_details": {}, "inherited": True, "issue_comment_url": "example_issue_comment_url", "issue_events_url": "example_issue_events_url", "issues_url": "example_issues_url", "jobs_url": "example_jobs_url", "keys_url": "example_keys_url", "labels": [], "labels_url": "example_labels_url", "languages_url": "example_languages_url", "logs_url": "example_logs_url", "machine_size_details": {}, "memory_gb": 1, "merges_url": "example_merges_url", "milestones_url": "example_milestones_url", "name": "example_name", "node_id": "example_node_id", "notifications_url": "example_notifications_url", "os": "example_os", "owner": {}, "path": "example_path", "platform": "example_platform", "platforms": [], "private": True, "public_ip_enabled": True, "pull_requests": [], "pulls_url": "example_pulls_url", "ref": "example_ref", "releases_url": "example_releases_url", "repository": {}, "rerun_url": "example_rerun_url", "run_id": 1, "run_number": 1, "run_url": "example_run_url", "run_workflows_from_fork_pull_requests": True, "runner_group_id": 1, "runner_group_name": "example_runner_group_name", "runner_id": 1, "runner_name": "example_runner_name", "runners": [], "runners_url": "example_runners_url", "selected_repository_ids": [], "size_gb": 1, "size_in_bytes": 1, "source": "example_source", "stargazers_url": "example_stargazers_url", "started_at": "example_started_at", "state": "example_state", "status": "example_status", "statuses_url": "example_statuses_url", "storage_gb": 1, "subscribers_url": "example_subscribers_url", "subscription_url": "example_subscription_url", "tags_url": "example_tags_url", "teams_url": "example_teams_url", "total_count": 1, "trees_url": "example_trees_url", "triggering_actor": {}, "updated_at": "example_updated_at", "url": "example_url", "workflow_id": 1, "workflow_name": "example_workflow_name", "workflow_url": "example_workflow_url"})

# Update — the created record's id is a plain dict key
client.Action().update({"org_id": "example_org_id", "repository_id": 1})

# Remove
client.Action().remove({"hosted_runner_id": 1, "org_id": "example_org_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    custompropertys = client.CustomProperty().list()
    print(custompropertys)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = GithubSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
customproperty = client.CustomProperty().list()
# customproperty contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = GithubSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
GITHUB_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### GithubSDK

```python
from github_sdk import GithubSDK

client = GithubSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = GithubSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Action` | `(data) -> ActionEntity` | Create an Action entity instance. |
| `ActionsArtifactAndLogRetention` | `(data) -> ActionsArtifactAndLogRetentionEntity` | Create an ActionsArtifactAndLogRetention entity instance. |
| `ActionsCacheList` | `(data) -> ActionsCacheListEntity` | Create an ActionsCacheList entity instance. |
| `ActionsCacheUsageByRepository` | `(data) -> ActionsCacheUsageByRepositoryEntity` | Create an ActionsCacheUsageByRepository entity instance. |
| `ActionsCacheUsageOrgEnterprise` | `(data) -> ActionsCacheUsageOrgEnterpriseEntity` | Create an ActionsCacheUsageOrgEnterprise entity instance. |
| `ActionsForkPrContributorApproval` | `(data) -> ActionsForkPrContributorApprovalEntity` | Create an ActionsForkPrContributorApproval entity instance. |
| `ActionsForkPrWorkflowsPrivateRepo` | `(data) -> ActionsForkPrWorkflowsPrivateRepoEntity` | Create an ActionsForkPrWorkflowsPrivateRepo entity instance. |
| `ActionsGetDefaultWorkflowPermission` | `(data) -> ActionsGetDefaultWorkflowPermissionEntity` | Create an ActionsGetDefaultWorkflowPermission entity instance. |
| `ActionsHostedRunner` | `(data) -> ActionsHostedRunnerEntity` | Create an ActionsHostedRunner entity instance. |
| `ActionsHostedRunnerLimit` | `(data) -> ActionsHostedRunnerLimitEntity` | Create an ActionsHostedRunnerLimit entity instance. |
| `ActionsOrganizationPermission` | `(data) -> ActionsOrganizationPermissionEntity` | Create an ActionsOrganizationPermission entity instance. |
| `ActionsPublicKey` | `(data) -> ActionsPublicKeyEntity` | Create an ActionsPublicKey entity instance. |
| `ActionsRepositoryPermission` | `(data) -> ActionsRepositoryPermissionEntity` | Create an ActionsRepositoryPermission entity instance. |
| `ActionsSecret` | `(data) -> ActionsSecretEntity` | Create an ActionsSecret entity instance. |
| `ActionsVariable` | `(data) -> ActionsVariableEntity` | Create an ActionsVariable entity instance. |
| `ActionsWorkflowAccessToRepository` | `(data) -> ActionsWorkflowAccessToRepositoryEntity` | Create an ActionsWorkflowAccessToRepository entity instance. |
| `Activity` | `(data) -> ActivityEntity` | Create an Activity entity instance. |
| `Add` | `(data) -> AddEntity` | Create an Add entity instance. |
| `ApiInsightsRouteStat` | `(data) -> ApiInsightsRouteStatEntity` | Create an ApiInsightsRouteStat entity instance. |
| `ApiInsightsSubjectStat` | `(data) -> ApiInsightsSubjectStatEntity` | Create an ApiInsightsSubjectStat entity instance. |
| `ApiInsightsSummaryStat` | `(data) -> ApiInsightsSummaryStatEntity` | Create an ApiInsightsSummaryStat entity instance. |
| `ApiInsightsTimeStat` | `(data) -> ApiInsightsTimeStatEntity` | Create an ApiInsightsTimeStat entity instance. |
| `ApiInsightsUserStat` | `(data) -> ApiInsightsUserStatEntity` | Create an ApiInsightsUserStat entity instance. |
| `ApiOverview` | `(data) -> ApiOverviewEntity` | Create an ApiOverview entity instance. |
| `App` | `(data) -> AppEntity` | Create an App entity instance. |
| `Artifact` | `(data) -> ArtifactEntity` | Create an Artifact entity instance. |
| `Assignee` | `(data) -> AssigneeEntity` | Create an Assignee entity instance. |
| `AuthenticationToken` | `(data) -> AuthenticationTokenEntity` | Create an AuthenticationToken entity instance. |
| `Authorization` | `(data) -> AuthorizationEntity` | Create an Authorization entity instance. |
| `Autolink` | `(data) -> AutolinkEntity` | Create an Autolink entity instance. |
| `BaseGist` | `(data) -> BaseGistEntity` | Create a BaseGist entity instance. |
| `BillingUsageReport` | `(data) -> BillingUsageReportEntity` | Create a BillingUsageReport entity instance. |
| `BillingUsageReportUser` | `(data) -> BillingUsageReportUserEntity` | Create a BillingUsageReportUser entity instance. |
| `Blob` | `(data) -> BlobEntity` | Create a Blob entity instance. |
| `Block` | `(data) -> BlockEntity` | Create a Block entity instance. |
| `Branch` | `(data) -> BranchEntity` | Create a Branch entity instance. |
| `BranchProtection` | `(data) -> BranchProtectionEntity` | Create a BranchProtection entity instance. |
| `BranchRestrictionPolicy` | `(data) -> BranchRestrictionPolicyEntity` | Create a BranchRestrictionPolicy entity instance. |
| `BranchShort` | `(data) -> BranchShortEntity` | Create a BranchShort entity instance. |
| `BranchWithProtection` | `(data) -> BranchWithProtectionEntity` | Create a BranchWithProtection entity instance. |
| `Campaign` | `(data) -> CampaignEntity` | Create a Campaign entity instance. |
| `Check` | `(data) -> CheckEntity` | Create a Check entity instance. |
| `CheckAnnotation` | `(data) -> CheckAnnotationEntity` | Create a CheckAnnotation entity instance. |
| `CheckAutomatedSecurityFix` | `(data) -> CheckAutomatedSecurityFixEntity` | Create a CheckAutomatedSecurityFix entity instance. |
| `CheckRun` | `(data) -> CheckRunEntity` | Create a CheckRun entity instance. |
| `CheckSuite` | `(data) -> CheckSuiteEntity` | Create a CheckSuite entity instance. |
| `CheckSuitePreference` | `(data) -> CheckSuitePreferenceEntity` | Create a CheckSuitePreference entity instance. |
| `Classroom` | `(data) -> ClassroomEntity` | Create a Classroom entity instance. |
| `ClassroomAcceptedAssignment` | `(data) -> ClassroomAcceptedAssignmentEntity` | Create a ClassroomAcceptedAssignment entity instance. |
| `ClassroomAssignment` | `(data) -> ClassroomAssignmentEntity` | Create a ClassroomAssignment entity instance. |
| `ClassroomAssignmentGrade` | `(data) -> ClassroomAssignmentGradeEntity` | Create a ClassroomAssignmentGrade entity instance. |
| `Clone` | `(data) -> CloneEntity` | Create a Clone entity instance. |
| `CodeFrequency` | `(data) -> CodeFrequencyEntity` | Create a CodeFrequency entity instance. |
| `CodeFrequencyStat` | `(data) -> CodeFrequencyStatEntity` | Create a CodeFrequencyStat entity instance. |
| `CodeOfConduct` | `(data) -> CodeOfConductEntity` | Create a CodeOfConduct entity instance. |
| `CodeScanning` | `(data) -> CodeScanningEntity` | Create a CodeScanning entity instance. |
| `CodeScanningAlert` | `(data) -> CodeScanningAlertEntity` | Create a CodeScanningAlert entity instance. |
| `CodeScanningAlertInstance` | `(data) -> CodeScanningAlertInstanceEntity` | Create a CodeScanningAlertInstance entity instance. |
| `CodeScanningAlertItem` | `(data) -> CodeScanningAlertItemEntity` | Create a CodeScanningAlertItem entity instance. |
| `CodeScanningAnalysi` | `(data) -> CodeScanningAnalysiEntity` | Create a CodeScanningAnalysi entity instance. |
| `CodeScanningAnalysisDeletion` | `(data) -> CodeScanningAnalysisDeletionEntity` | Create a CodeScanningAnalysisDeletion entity instance. |
| `CodeScanningAutofix` | `(data) -> CodeScanningAutofixEntity` | Create a CodeScanningAutofix entity instance. |
| `CodeScanningAutofixCommit` | `(data) -> CodeScanningAutofixCommitEntity` | Create a CodeScanningAutofixCommit entity instance. |
| `CodeScanningCodeqlDatabase` | `(data) -> CodeScanningCodeqlDatabaseEntity` | Create a CodeScanningCodeqlDatabase entity instance. |
| `CodeScanningDefaultSetup` | `(data) -> CodeScanningDefaultSetupEntity` | Create a CodeScanningDefaultSetup entity instance. |
| `CodeScanningOrganizationAlertItem` | `(data) -> CodeScanningOrganizationAlertItemEntity` | Create a CodeScanningOrganizationAlertItem entity instance. |
| `CodeScanningSarifsStatus` | `(data) -> CodeScanningSarifsStatusEntity` | Create a CodeScanningSarifsStatus entity instance. |
| `CodeScanningVariantAnalysi` | `(data) -> CodeScanningVariantAnalysiEntity` | Create a CodeScanningVariantAnalysi entity instance. |
| `CodeScanningVariantAnalysisRepoTask` | `(data) -> CodeScanningVariantAnalysisRepoTaskEntity` | Create a CodeScanningVariantAnalysisRepoTask entity instance. |
| `CodeSecurity` | `(data) -> CodeSecurityEntity` | Create a CodeSecurity entity instance. |
| `CodeSecurityConfiguration` | `(data) -> CodeSecurityConfigurationEntity` | Create a CodeSecurityConfiguration entity instance. |
| `CodeSecurityConfigurationRepository` | `(data) -> CodeSecurityConfigurationRepositoryEntity` | Create a CodeSecurityConfigurationRepository entity instance. |
| `CodeSecurityDefaultConfiguration` | `(data) -> CodeSecurityDefaultConfigurationEntity` | Create a CodeSecurityDefaultConfiguration entity instance. |
| `CodeownersError` | `(data) -> CodeownersErrorEntity` | Create a CodeownersError entity instance. |
| `Codespace` | `(data) -> CodespaceEntity` | Create a Codespace entity instance. |
| `Collaborator` | `(data) -> CollaboratorEntity` | Create a Collaborator entity instance. |
| `CombinedBillingUsage` | `(data) -> CombinedBillingUsageEntity` | Create a CombinedBillingUsage entity instance. |
| `CombinedCommitStatus` | `(data) -> CombinedCommitStatusEntity` | Create a CombinedCommitStatus entity instance. |
| `Commit` | `(data) -> CommitEntity` | Create a Commit entity instance. |
| `CommitActivity` | `(data) -> CommitActivityEntity` | Create a CommitActivity entity instance. |
| `CommitComment` | `(data) -> CommitCommentEntity` | Create a CommitComment entity instance. |
| `CommitComparison` | `(data) -> CommitComparisonEntity` | Create a CommitComparison entity instance. |
| `CommunityProfile` | `(data) -> CommunityProfileEntity` | Create a CommunityProfile entity instance. |
| `ContentFile` | `(data) -> ContentFileEntity` | Create a ContentFile entity instance. |
| `ContentTraffic` | `(data) -> ContentTrafficEntity` | Create a ContentTraffic entity instance. |
| `Contributor` | `(data) -> ContributorEntity` | Create a Contributor entity instance. |
| `Copilot` | `(data) -> CopilotEntity` | Create a Copilot entity instance. |
| `CopilotOrganizationDetail` | `(data) -> CopilotOrganizationDetailEntity` | Create a CopilotOrganizationDetail entity instance. |
| `CopilotUsageMetricsDay` | `(data) -> CopilotUsageMetricsDayEntity` | Create a CopilotUsageMetricsDay entity instance. |
| `Credential` | `(data) -> CredentialEntity` | Create a Credential entity instance. |
| `CustomProperty` | `(data) -> CustomPropertyEntity` | Create a CustomProperty entity instance. |
| `CustomPropertyValue` | `(data) -> CustomPropertyValueEntity` | Create a CustomPropertyValue entity instance. |
| `Dependabot` | `(data) -> DependabotEntity` | Create a Dependabot entity instance. |
| `DependabotAlert` | `(data) -> DependabotAlertEntity` | Create a DependabotAlert entity instance. |
| `DependabotAlertWithRepository` | `(data) -> DependabotAlertWithRepositoryEntity` | Create a DependabotAlertWithRepository entity instance. |
| `DependabotPublicKey` | `(data) -> DependabotPublicKeyEntity` | Create a DependabotPublicKey entity instance. |
| `DependabotRepositoryAccessDetail` | `(data) -> DependabotRepositoryAccessDetailEntity` | Create a DependabotRepositoryAccessDetail entity instance. |
| `DependabotSecret` | `(data) -> DependabotSecretEntity` | Create a DependabotSecret entity instance. |
| `DependencyGraph` | `(data) -> DependencyGraphEntity` | Create a DependencyGraph entity instance. |
| `DependencyGraphDiff` | `(data) -> DependencyGraphDiffEntity` | Create a DependencyGraphDiff entity instance. |
| `DependencyGraphSpdxSbom` | `(data) -> DependencyGraphSpdxSbomEntity` | Create a DependencyGraphSpdxSbom entity instance. |
| `DeployKey` | `(data) -> DeployKeyEntity` | Create a DeployKey entity instance. |
| `Deployment` | `(data) -> DeploymentEntity` | Create a Deployment entity instance. |
| `DeploymentBranchPolicy` | `(data) -> DeploymentBranchPolicyEntity` | Create a DeploymentBranchPolicy entity instance. |
| `DeploymentProtectionRule` | `(data) -> DeploymentProtectionRuleEntity` | Create a DeploymentProtectionRule entity instance. |
| `DeploymentStatus` | `(data) -> DeploymentStatusEntity` | Create a DeploymentStatus entity instance. |
| `DiffEntry` | `(data) -> DiffEntryEntity` | Create a DiffEntry entity instance. |
| `Email` | `(data) -> EmailEntity` | Create an Email entity instance. |
| `Emoji` | `(data) -> EmojiEntity` | Create an Emoji entity instance. |
| `EmptyObject` | `(data) -> EmptyObjectEntity` | Create an EmptyObject entity instance. |
| `EnterpriseTeam` | `(data) -> EnterpriseTeamEntity` | Create an EnterpriseTeam entity instance. |
| `EnterpriseTeamMembership` | `(data) -> EnterpriseTeamMembershipEntity` | Create an EnterpriseTeamMembership entity instance. |
| `Environment` | `(data) -> EnvironmentEntity` | Create an Environment entity instance. |
| `EnvironmentApproval` | `(data) -> EnvironmentApprovalEntity` | Create an EnvironmentApproval entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `Feed` | `(data) -> FeedEntity` | Create a Feed entity instance. |
| `FileCommit` | `(data) -> FileCommitEntity` | Create a FileCommit entity instance. |
| `Follower` | `(data) -> FollowerEntity` | Create a Follower entity instance. |
| `Following` | `(data) -> FollowingEntity` | Create a Following entity instance. |
| `FullRepository` | `(data) -> FullRepositoryEntity` | Create a FullRepository entity instance. |
| `Gist` | `(data) -> GistEntity` | Create a Gist entity instance. |
| `GistComment` | `(data) -> GistCommentEntity` | Create a GistComment entity instance. |
| `GistCommit` | `(data) -> GistCommitEntity` | Create a GistCommit entity instance. |
| `GistSimple` | `(data) -> GistSimpleEntity` | Create a GistSimple entity instance. |
| `Git` | `(data) -> GitEntity` | Create a Git entity instance. |
| `GitCommit` | `(data) -> GitCommitEntity` | Create a GitCommit entity instance. |
| `GitRef` | `(data) -> GitRefEntity` | Create a GitRef entity instance. |
| `GitTag` | `(data) -> GitTagEntity` | Create a GitTag entity instance. |
| `GitTree` | `(data) -> GitTreeEntity` | Create a GitTree entity instance. |
| `Gitignore` | `(data) -> GitignoreEntity` | Create a Gitignore entity instance. |
| `GitignoreTemplate` | `(data) -> GitignoreTemplateEntity` | Create a GitignoreTemplate entity instance. |
| `GlobalAdvisory` | `(data) -> GlobalAdvisoryEntity` | Create a GlobalAdvisory entity instance. |
| `GpgKey` | `(data) -> GpgKeyEntity` | Create a GpgKey entity instance. |
| `Hook` | `(data) -> HookEntity` | Create a Hook entity instance. |
| `HookDelivery` | `(data) -> HookDeliveryEntity` | Create a HookDelivery entity instance. |
| `HookDeliveryItem` | `(data) -> HookDeliveryItemEntity` | Create a HookDeliveryItem entity instance. |
| `HostedCompute` | `(data) -> HostedComputeEntity` | Create a HostedCompute entity instance. |
| `Hovercard` | `(data) -> HovercardEntity` | Create a Hovercard entity instance. |
| `Import` | `(data) -> ImportEntity` | Create an Import entity instance. |
| `Installation` | `(data) -> InstallationEntity` | Create an Installation entity instance. |
| `InstallationToken` | `(data) -> InstallationTokenEntity` | Create an InstallationToken entity instance. |
| `Integration` | `(data) -> IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationInstallation` | `(data) -> IntegrationInstallationEntity` | Create an IntegrationInstallation entity instance. |
| `Interaction` | `(data) -> InteractionEntity` | Create an Interaction entity instance. |
| `InteractionLimit` | `(data) -> InteractionLimitEntity` | Create an InteractionLimit entity instance. |
| `Issue` | `(data) -> IssueEntity` | Create an Issue entity instance. |
| `IssueType` | `(data) -> IssueTypeEntity` | Create an IssueType entity instance. |
| `Job` | `(data) -> JobEntity` | Create a Job entity instance. |
| `Key` | `(data) -> KeyEntity` | Create a Key entity instance. |
| `Label` | `(data) -> LabelEntity` | Create a Label entity instance. |
| `Language` | `(data) -> LanguageEntity` | Create a Language entity instance. |
| `License` | `(data) -> LicenseEntity` | Create a License entity instance. |
| `Markdown` | `(data) -> MarkdownEntity` | Create a Markdown entity instance. |
| `MarketplaceListingPlan` | `(data) -> MarketplaceListingPlanEntity` | Create a MarketplaceListingPlan entity instance. |
| `MarketplacePurchase` | `(data) -> MarketplacePurchaseEntity` | Create a MarketplacePurchase entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Membership` | `(data) -> MembershipEntity` | Create a Membership entity instance. |
| `MergedUpstream` | `(data) -> MergedUpstreamEntity` | Create a MergedUpstream entity instance. |
| `Meta` | `(data) -> MetaEntity` | Create a Meta entity instance. |
| `Metaroot` | `(data) -> MetarootEntity` | Create a Metaroot entity instance. |
| `Migration` | `(data) -> MigrationEntity` | Create a Migration entity instance. |
| `Milestone` | `(data) -> MilestoneEntity` | Create a Milestone entity instance. |
| `MinimalRepository` | `(data) -> MinimalRepositoryEntity` | Create a MinimalRepository entity instance. |
| `NetworkConfiguration` | `(data) -> NetworkConfigurationEntity` | Create a NetworkConfiguration entity instance. |
| `NetworkSetting` | `(data) -> NetworkSettingEntity` | Create a NetworkSetting entity instance. |
| `OidcCustomSub` | `(data) -> OidcCustomSubEntity` | Create an OidcCustomSub entity instance. |
| `OidcCustomSubRepo` | `(data) -> OidcCustomSubRepoEntity` | Create an OidcCustomSubRepo entity instance. |
| `Org` | `(data) -> OrgEntity` | Create an Org entity instance. |
| `OrgHook` | `(data) -> OrgHookEntity` | Create an OrgHook entity instance. |
| `OrgMembership` | `(data) -> OrgMembershipEntity` | Create an OrgMembership entity instance. |
| `OrgPrivateRegistryConfiguration` | `(data) -> OrgPrivateRegistryConfigurationEntity` | Create an OrgPrivateRegistryConfiguration entity instance. |
| `OrgPrivateRegistryConfigurationWithSelectedRepository` | `(data) -> OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` | Create an OrgPrivateRegistryConfigurationWithSelectedRepository entity instance. |
| `OrgRepoCustomPropertyValue` | `(data) -> OrgRepoCustomPropertyValueEntity` | Create an OrgRepoCustomPropertyValue entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationActionsSecret` | `(data) -> OrganizationActionsSecretEntity` | Create an OrganizationActionsSecret entity instance. |
| `OrganizationActionsVariable` | `(data) -> OrganizationActionsVariableEntity` | Create an OrganizationActionsVariable entity instance. |
| `OrganizationDependabotSecret` | `(data) -> OrganizationDependabotSecretEntity` | Create an OrganizationDependabotSecret entity instance. |
| `OrganizationInvitation` | `(data) -> OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `OrganizationProgrammaticAccessGrant` | `(data) -> OrganizationProgrammaticAccessGrantEntity` | Create an OrganizationProgrammaticAccessGrant entity instance. |
| `OrganizationRole` | `(data) -> OrganizationRoleEntity` | Create an OrganizationRole entity instance. |
| `OrganizationSecretScanningAlert` | `(data) -> OrganizationSecretScanningAlertEntity` | Create an OrganizationSecretScanningAlert entity instance. |
| `OutsideCollaborator` | `(data) -> OutsideCollaboratorEntity` | Create an OutsideCollaborator entity instance. |
| `Package` | `(data) -> PackageEntity` | Create a Package entity instance. |
| `Page` | `(data) -> PageEntity` | Create a Page entity instance. |
| `PageBuild` | `(data) -> PageBuildEntity` | Create a PageBuild entity instance. |
| `PageBuildStatus` | `(data) -> PageBuildStatusEntity` | Create a PageBuildStatus entity instance. |
| `PageDeployment` | `(data) -> PageDeploymentEntity` | Create a PageDeployment entity instance. |
| `PagesDeploymentStatus` | `(data) -> PagesDeploymentStatusEntity` | Create a PagesDeploymentStatus entity instance. |
| `PagesHealthCheck` | `(data) -> PagesHealthCheckEntity` | Create a PagesHealthCheck entity instance. |
| `Participation` | `(data) -> ParticipationEntity` | Create a Participation entity instance. |
| `PendingDeployment` | `(data) -> PendingDeploymentEntity` | Create a PendingDeployment entity instance. |
| `PorterAuthor` | `(data) -> PorterAuthorEntity` | Create a PorterAuthor entity instance. |
| `PorterLargeFile` | `(data) -> PorterLargeFileEntity` | Create a PorterLargeFile entity instance. |
| `PrivateRegistry` | `(data) -> PrivateRegistryEntity` | Create a PrivateRegistry entity instance. |
| `PrivateUser` | `(data) -> PrivateUserEntity` | Create a PrivateUser entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectCollaboratorPermission` | `(data) -> ProjectCollaboratorPermissionEntity` | Create a ProjectCollaboratorPermission entity instance. |
| `ProjectColumn` | `(data) -> ProjectColumnEntity` | Create a ProjectColumn entity instance. |
| `ProjectsClassic` | `(data) -> ProjectsClassicEntity` | Create a ProjectsClassic entity instance. |
| `ProjectsV2` | `(data) -> ProjectsV2Entity` | Create a ProjectsV2 entity instance. |
| `ProjectsV2Field` | `(data) -> ProjectsV2FieldEntity` | Create a ProjectsV2Field entity instance. |
| `ProjectsV2ItemSimple` | `(data) -> ProjectsV2ItemSimpleEntity` | Create a ProjectsV2ItemSimple entity instance. |
| `ProjectsV2ItemWithContent` | `(data) -> ProjectsV2ItemWithContentEntity` | Create a ProjectsV2ItemWithContent entity instance. |
| `ProtectedBranch` | `(data) -> ProtectedBranchEntity` | Create a ProtectedBranch entity instance. |
| `ProtectedBranchAdminEnforced` | `(data) -> ProtectedBranchAdminEnforcedEntity` | Create a ProtectedBranchAdminEnforced entity instance. |
| `ProtectedBranchPullRequestReview` | `(data) -> ProtectedBranchPullRequestReviewEntity` | Create a ProtectedBranchPullRequestReview entity instance. |
| `PublicMember` | `(data) -> PublicMemberEntity` | Create a PublicMember entity instance. |
| `Pull` | `(data) -> PullEntity` | Create a Pull entity instance. |
| `PullRequestReview` | `(data) -> PullRequestReviewEntity` | Create a PullRequestReview entity instance. |
| `PullRequestReviewComment` | `(data) -> PullRequestReviewCommentEntity` | Create a PullRequestReviewComment entity instance. |
| `PullRequestSimple` | `(data) -> PullRequestSimpleEntity` | Create a PullRequestSimple entity instance. |
| `RateLimit` | `(data) -> RateLimitEntity` | Create a RateLimit entity instance. |
| `Reaction` | `(data) -> ReactionEntity` | Create a Reaction entity instance. |
| `Referrer` | `(data) -> ReferrerEntity` | Create a Referrer entity instance. |
| `Release` | `(data) -> ReleaseEntity` | Create a Release entity instance. |
| `ReleaseAsset` | `(data) -> ReleaseAssetEntity` | Create a ReleaseAsset entity instance. |
| `ReleaseNotesContent` | `(data) -> ReleaseNotesContentEntity` | Create a ReleaseNotesContent entity instance. |
| `Remove` | `(data) -> RemoveEntity` | Create a Remove entity instance. |
| `Repo` | `(data) -> RepoEntity` | Create a Repo entity instance. |
| `Repository` | `(data) -> RepositoryEntity` | Create a Repository entity instance. |
| `RepositoryAdvisory` | `(data) -> RepositoryAdvisoryEntity` | Create a RepositoryAdvisory entity instance. |
| `RepositoryCollaboratorPermission` | `(data) -> RepositoryCollaboratorPermissionEntity` | Create a RepositoryCollaboratorPermission entity instance. |
| `RepositoryInvitation` | `(data) -> RepositoryInvitationEntity` | Create a RepositoryInvitation entity instance. |
| `RepositoryRuleDetailed` | `(data) -> RepositoryRuleDetailedEntity` | Create a RepositoryRuleDetailed entity instance. |
| `RepositoryRuleset` | `(data) -> RepositoryRulesetEntity` | Create a RepositoryRuleset entity instance. |
| `RepositorySubscription` | `(data) -> RepositorySubscriptionEntity` | Create a RepositorySubscription entity instance. |
| `ReviewComment` | `(data) -> ReviewCommentEntity` | Create a ReviewComment entity instance. |
| `RuleSuite` | `(data) -> RuleSuiteEntity` | Create a RuleSuite entity instance. |
| `RulesetVersion` | `(data) -> RulesetVersionEntity` | Create a RulesetVersion entity instance. |
| `RulesetVersionWithState` | `(data) -> RulesetVersionWithStateEntity` | Create a RulesetVersionWithState entity instance. |
| `Runner` | `(data) -> RunnerEntity` | Create a Runner entity instance. |
| `RunnerApplication` | `(data) -> RunnerApplicationEntity` | Create a RunnerApplication entity instance. |
| `RunnerGroup` | `(data) -> RunnerGroupEntity` | Create a RunnerGroup entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `SecretScanning` | `(data) -> SecretScanningEntity` | Create a SecretScanning entity instance. |
| `SecretScanningAlert` | `(data) -> SecretScanningAlertEntity` | Create a SecretScanningAlert entity instance. |
| `SecretScanningLocation` | `(data) -> SecretScanningLocationEntity` | Create a SecretScanningLocation entity instance. |
| `SecretScanningPatternConfiguration` | `(data) -> SecretScanningPatternConfigurationEntity` | Create a SecretScanningPatternConfiguration entity instance. |
| `SecretScanningPushProtectionBypass` | `(data) -> SecretScanningPushProtectionBypassEntity` | Create a SecretScanningPushProtectionBypass entity instance. |
| `SecretScanningScanHistory` | `(data) -> SecretScanningScanHistoryEntity` | Create a SecretScanningScanHistory entity instance. |
| `SecurityAdvisory` | `(data) -> SecurityAdvisoryEntity` | Create a SecurityAdvisory entity instance. |
| `SelectedAction` | `(data) -> SelectedActionEntity` | Create a SelectedAction entity instance. |
| `SelfHostedRunner` | `(data) -> SelfHostedRunnerEntity` | Create a SelfHostedRunner entity instance. |
| `ShortBlob` | `(data) -> ShortBlobEntity` | Create a ShortBlob entity instance. |
| `ShortBranch` | `(data) -> ShortBranchEntity` | Create a ShortBranch entity instance. |
| `SimpleClassroom` | `(data) -> SimpleClassroomEntity` | Create a SimpleClassroom entity instance. |
| `SimpleClassroomAssignment` | `(data) -> SimpleClassroomAssignmentEntity` | Create a SimpleClassroomAssignment entity instance. |
| `SocialAccount` | `(data) -> SocialAccountEntity` | Create a SocialAccount entity instance. |
| `SshSigningKey` | `(data) -> SshSigningKeyEntity` | Create a SshSigningKey entity instance. |
| `Status` | `(data) -> StatusEntity` | Create a Status entity instance. |
| `StatusCheckPolicy` | `(data) -> StatusCheckPolicyEntity` | Create a StatusCheckPolicy entity instance. |
| `Subscriber` | `(data) -> SubscriberEntity` | Create a Subscriber entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `TagProtection` | `(data) -> TagProtectionEntity` | Create a TagProtection entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TeamSimple` | `(data) -> TeamSimpleEntity` | Create a TeamSimple entity instance. |
| `Thread` | `(data) -> ThreadEntity` | Create a Thread entity instance. |
| `ThreadSubscription` | `(data) -> ThreadSubscriptionEntity` | Create a ThreadSubscription entity instance. |
| `Topic` | `(data) -> TopicEntity` | Create a Topic entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserMarketplacePurchase` | `(data) -> UserMarketplacePurchaseEntity` | Create an UserMarketplacePurchase entity instance. |
| `View` | `(data) -> ViewEntity` | Create a View entity instance. |
| `WebhookConfig` | `(data) -> WebhookConfigEntity` | Create a WebhookConfig entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data) -> WorkflowRunEntity` | Create a WorkflowRun entity instance. |
| `WorkflowRunUsage` | `(data) -> WorkflowRunUsageEntity` | Create a WorkflowRunUsage entity instance. |
| `WorkflowUsage` | `(data) -> WorkflowUsageEntity` | Create a WorkflowUsage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `MACOS` | Total minutes used on macOS runner machines. |
| `UBUNTU` | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | Total minutes used on Windows runner machines. |
| `access_level` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | A GitHub user. |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Whether to allow forking this repo |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` |  |
| `anonymous_access_enabled` | Whether anonymous git access is enabled for this repository |
| `approval_policy` | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` |  |
| `archive_url` |  |
| `archived` | Whether the repository is archived. |
| `artifacts_url` | The URL to the artifacts for the workflow run. |
| `assignees_url` |  |
| `badge_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `busy` |  |
| `can_approve_pull_request_reviews` | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | The URL to cancel the workflow run. |
| `check_run_url` |  |
| `check_suite_id` | The ID of the associated check suite. |
| `check_suite_node_id` | The node ID of the associated check suite. |
| `check_suite_url` | The URL to the associated check suite. |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `code_search_index_status` | The status of the code search index for this repository |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `completed_at` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | The outcome of the job. |
| `contents_url` |  |
| `contributors_url` |  |
| `cpu_cores` | The number of cores. |
| `created_at` | The time that the job created, in ISO 8601 format. |
| `custom_properties` | The custom properties that were defined for the repository. |
| `days` | The number of days to retain artifacts and logs |
| `default` |  |
| `default_branch` | The default branch of the repository. |
| `default_workflow_permissions` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deleted_at` |  |
| `deployments_url` |  |
| `description` |  |
| `digest` | The SHA256 digest of the artifact. |
| `disabled` | Returns whether or not this repository disabled. |
| `display_name` | Display name for this image. |
| `display_title` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` |  |
| `enabled` | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` |  |
| `event` |  |
| `events_url` |  |
| `expired` | Whether or not the artifact has expired. |
| `expires_at` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` | The repository owner and name for the cache usage being shown. |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `github_owned_allowed` | Whether GitHub-owned actions are allowed. |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_wiki` | Whether the wiki is enabled. |
| `head_branch` | The name of the current branch. |
| `head_commit` | A commit. |
| `head_repository` | Minimal Repository |
| `head_repository_id` |  |
| `head_sha` | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` |  |
| `hooks_url` |  |
| `hosted_runners_url` |  |
| `html_url` |  |
| `id` | The ID of the workflow run. |
| `image_details` | Provides details of a hosted runner image |
| `inherited` |  |
| `inherited_allows_public_repositories` |  |
| `inputs` | Input keys and values configured in the workflow file. |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `jobs_url` | The URL to the jobs for the workflow run. |
| `keys_url` |  |
| `labels` | The names of the custom labels to add to the runner. |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `last_active_on` | The time at which the runner was last used, in ISO 8601 format. |
| `license` | License Simple |
| `logs_url` | The URL to download the logs for the workflow run. |
| `machine_size_details` | Provides details of a particular machine spec. |
| `macos_12_core` | Total minutes used on macOS 12 core runner machines. |
| `master_branch` |  |
| `maximum_runners` | The maximum amount of hosted runners. |
| `memory_gb` | The available RAM for the machine spec. |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the new runner. |
| `network_configuration_id` | The identifier of a hosted compute network configuration. |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `os` | The Operating System of the runner. |
| `owner` | A GitHub user. |
| `path` | The full path of the workflow |
| `patterns_allowed` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` |  |
| `platform` | The operating system of the image. |
| `platforms` |  |
| `previous_attempt_url` | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | Whether the repository is private or public. |
| `public_ip_enabled` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` |  |
| `pushed_at` |  |
| `ref` | The git reference for the workflow. |
| `referenced_workflows` |  |
| `releases_url` |  |
| `repository` | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | The URL to rerun the workflow run. |
| `restricted_to_workflows` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` |  |
| `run_attempt` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | The id of the associated workflow run. |
| `run_number` | The auto incrementing run number for the workflow run. |
| `run_started_at` | The start time of the latest run. |
| `run_url` |  |
| `run_workflows_from_fork_pull_requests` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | The ID of the runner group to register the runner to. |
| `runner_group_name` | The name of the runner group to which this job has been assigned. |
| `runner_id` | The ID of the runner to which this job has been assigned. |
| `runner_name` | The name of the runner to which this job has been assigned. |
| `runners` | List of runner IDs to add to the runner group. |
| `runners_url` |  |
| `security_and_analysis` |  |
| `selected_repositories_url` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | Whether actions must be pinned to a full-length commit SHA. |
| `size` | The size of the repository, in kilobytes. |
| `size_gb` | Image size in GB. |
| `size_in_bytes` | The size in bytes of the artifact. |
| `source` | The image provider. |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `started_at` | The time that the job started, in ISO 8601 format. |
| `state` |  |
| `status` | The phase of the lifecycle that the job is currently in. |
| `statuses_url` |  |
| `steps` | Steps in this job. |
| `storage_gb` | The available SSD storage for the machine spec. |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `total` | Total minutes used on all runner machines. |
| `total_count` |  |
| `trees_url` |  |
| `triggering_actor` | A GitHub user. |
| `type` | The type of label. |
| `ubuntu_16_core` | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | Whether a squash merge commit can use the pull request title as default. |
| `value` | The value of the variable. |
| `verified_allowed` | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | The type of repositories in the organization that can access the variable. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | The ID of the parent workflow. |
| `workflow_name` | The name of the workflow. |
| `workflow_restrictions_read_only` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` |  |
| `workflow_url` | The URL to the workflow. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`

#### ActionsArtifactAndLogRetention

| Field | Description |
| --- | --- |
| `days` | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | The maximum number of days that can be configured |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/artifact-and-log-retention`

#### ActionsCacheList

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` |  |
| `last_accessed_at` |  |
| `ref` |  |
| `size_in_bytes` |  |
| `version` |  |

Operations: List, Remove.

API path: `/repos/{owner}/{repo}/actions/caches`

#### ActionsCacheUsageByRepository

| Field | Description |
| --- | --- |
| `active_caches_count` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | The repository owner and name for the cache usage being shown. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/cache/usage`

#### ActionsCacheUsageOrgEnterprise

| Field | Description |
| --- | --- |
| `total_active_caches_count` | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

Operations: Load.

API path: `/orgs/{org}/actions/cache/usage`

#### ActionsForkPrContributorApproval

| Field | Description |
| --- | --- |
| `approval_policy` | The policy that controls when fork PR workflows require approval from a maintainer. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval`

#### ActionsForkPrWorkflowsPrivateRepo

| Field | Description |
| --- | --- |
| `require_approval_for_fork_pr_workflows` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos`

#### ActionsGetDefaultWorkflowPermission

| Field | Description |
| --- | --- |
| `can_approve_pull_request_reviews` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/workflow`

#### ActionsHostedRunner

| Field | Description |
| --- | --- |
| `enable_static_ip` | Whether this runner should be created with a static public IP. |
| `id` | The unique identifier of the hosted runner. |
| `image` | The image of runner. |
| `image_details` | Provides details of a hosted runner image |
| `last_active_on` | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | Provides details of a particular machine spec. |
| `maximum_runners` | The maximum amount of hosted runners. |
| `name` | The name of the hosted runner. |
| `platform` | The operating system of the image. |
| `public_ip_enabled` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | The unique identifier of the group that the hosted runner belongs to. |
| `size` | The machine size of the runner. |
| `status` | The status of the runner. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/actions/hosted-runners`

#### ActionsHostedRunnerLimit

| Field | Description |
| --- | --- |
| `current_usage` | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

Operations: Load.

API path: `/orgs/{org}/actions/hosted-runners/limits`

#### ActionsOrganizationPermission

| Field | Description |
| --- | --- |
| `allowed_actions` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | Whether actions must be pinned to a full-length commit SHA. |

Operations: Load.

API path: `/orgs/{org}/actions/permissions`

#### ActionsPublicKey

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` | The Base64 encoded public key. |
| `key_id` | The identifier for the key. |
| `title` |  |
| `url` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key`

#### ActionsRepositoryPermission

| Field | Description |
| --- | --- |
| `allowed_actions` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | Whether actions must be pinned to a full-length commit SHA. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions`

#### ActionsSecret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `updated_at` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`

#### ActionsVariable

| Field | Description |
| --- | --- |
| `created_at` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` |  |
| `name` | The name of the variable. |
| `updated_at` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | The value of the variable. |

Operations: Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`

#### ActionsWorkflowAccessToRepository

| Field | Description |
| --- | --- |
| `access_level` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/permissions/access`

#### Activity

| Field | Description |
| --- | --- |
| `activity_type` | The type of the activity that was performed. |
| `actor` | A GitHub user. |
| `after` | The SHA of the commit after the activity. |
| `archive_url` |  |
| `assignees_url` |  |
| `avatar_url` |  |
| `before` | The SHA of the commit before the activity. |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `deployments_url` |  |
| `description` |  |
| `downloads_url` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `fork` |  |
| `forks_url` |  |
| `full_name` |  |
| `gists_url` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `github_id` |  |
| `gravatar_id` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `last_read_at` | Describes the last point that notifications were checked. |
| `login` |  |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` |  |
| `node_id` |  |
| `notifications_url` |  |
| `organizations_url` |  |
| `owner` |  |
| `private` |  |
| `pulls_url` |  |
| `read` | Whether the notification has been read. |
| `received_events_url` |  |
| `ref` | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `ssh_url` |  |
| `stargazers_url` |  |
| `starred_url` |  |
| `statuses_url` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `subscriptions_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `timestamp` | The time when the activity occurred. |
| `trees_url` |  |
| `type` |  |
| `url` |  |

Operations: List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/activity`

#### Add

| Field | Description |
| --- | --- |
| `usernames` | The GitHub user handles to add to the team. |

Operations: Create.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/add`

#### ApiInsightsRouteStat

| Field | Description |
| --- | --- |
| `api_route` | The API path's route template |
| `http_method` | The HTTP method |
| `last_rate_limited_timestamp` |  |
| `last_request_timestamp` |  |
| `rate_limited_request_count` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | The total number of requests within the queried time period |

Operations: List.

API path: `/orgs/{org}/insights/api/route-stats/{actor_type}/{actor_id}`

#### ApiInsightsSubjectStat

| Field | Description |
| --- | --- |
| `last_rate_limited_timestamp` |  |
| `last_request_timestamp` |  |
| `rate_limited_request_count` |  |
| `subject_id` |  |
| `subject_name` |  |
| `subject_type` |  |
| `total_request_count` |  |

Operations: List.

API path: `/orgs/{org}/insights/api/subject-stats`

#### ApiInsightsSummaryStat

| Field | Description |
| --- | --- |
| `id` |  |
| `rate_limited_request_count` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | The total number of requests within the queried time period |

Operations: Load.

API path: `/orgs/{org}/insights/api/summary-stats/{actor_type}/{actor_id}`

#### ApiInsightsTimeStat

| Field | Description |
| --- | --- |
| `rate_limited_request_count` |  |
| `timestamp` |  |
| `total_request_count` |  |

Operations: List, Load.

API path: `/orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}`

#### ApiInsightsUserStat

| Field | Description |
| --- | --- |
| `actor_id` |  |
| `actor_name` |  |
| `actor_type` |  |
| `id` |  |
| `integration_id` |  |
| `last_rate_limited_timestamp` |  |
| `last_request_timestamp` |  |
| `oauth_application_id` |  |
| `rate_limited_request_count` |  |
| `total_request_count` |  |

Operations: Load.

API path: `/orgs/{org}/insights/api/user-stats/{user_id}`

#### ApiOverview

| Field | Description |
| --- | --- |
| `actions` |  |
| `actions_macos` |  |
| `api` |  |
| `codespaces` |  |
| `copilot` |  |
| `dependabot` |  |
| `domains` |  |
| `git` |  |
| `github_enterprise_importer` |  |
| `hooks` |  |
| `importer` |  |
| `packages` |  |
| `pages` |  |
| `ssh_key_fingerprints` |  |
| `ssh_keys` |  |
| `verifiable_password_authentication` |  |
| `web` |  |

Operations: List.

API path: `/meta`

#### App

| Field | Description |
| --- | --- |
| `access_tokens_url` |  |
| `account` |  |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Whether to allow forking this repo |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | Whether anonymous git access is enabled for this repository |
| `app_id` |  |
| `app_slug` |  |
| `archive_url` |  |
| `archived` | Whether the repository is archived. |
| `assignees_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `client_id` |  |
| `client_secret` |  |
| `clone_url` |  |
| `code_search_index_status` | The status of the code search index for this repository |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contact_email` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `default_branch` | The default branch of the repository. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deployments_url` |  |
| `description` |  |
| `disabled` | Returns whether or not this repository disabled. |
| `downloads_url` |  |
| `events` |  |
| `events_url` |  |
| `external_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_multiple_single_files` |  |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_wiki` | Whether the wiki is enabled. |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the repository |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` | License Simple |
| `master_branch` |  |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the repository. |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `owner` | A GitHub user. |
| `pem` |  |
| `permissions` | The permissions granted to the user access token. |
| `private` | Whether the repository is private or public. |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `repositories_url` |  |
| `repository_selection` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` |  |
| `single_file_paths` |  |
| `size` | The size of the repository, in kilobytes. |
| `slug` |  |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `statuses_url` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `suspended_at` |  |
| `suspended_by` | A GitHub user. |
| `svn_url` |  |
| `tags_url` |  |
| `target_id` | The ID of the user or organization this token is being scoped to. |
| `target_type` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `use_squash_pr_title_as_default` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` |  |

Operations: Create, List, Remove, Update.

API path: `/app-manifests/{code}/conversions`

#### Artifact

| Field | Description |
| --- | --- |
| `head_branch` |  |
| `head_repository_id` |  |
| `head_sha` |  |
| `id` |  |
| `repository_id` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/artifacts/{artifact_id}`

#### Assignee

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/assignees`

#### AuthenticationToken

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `token` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/actions/runners/registration-token`

#### Authorization

| Field | Description |
| --- | --- |
| `access_token` | The access_token of the OAuth or GitHub application. |
| `app` |  |
| `created_at` |  |
| `expires_at` |  |
| `fingerprint` |  |
| `hashed_token` |  |
| `id` |  |
| `installation` |  |
| `note` |  |
| `note_url` |  |
| `permissions` | The permissions granted to the user access token. |
| `repositories` | The list of repository names to scope the user access token to. |
| `repository_ids` | The list of repository IDs to scope the user access token to. |
| `scopes` | A list of scopes that this authorization is in. |
| `target` | The name of the user or organization to scope the user access token to. |
| `target_id` | The ID of the user or organization to scope the user access token to. |
| `token` |  |
| `token_last_eight` |  |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, Update.

API path: `/applications/{client_id}/token`

#### Autolink

| Field | Description |
| --- | --- |
| `id` |  |
| `is_alphanumeric` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | The prefix of a key that is linkified. |
| `updated_at` |  |
| `url_template` | A template for the target URL that is generated if a key was found. |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/autolinks`

#### BaseGist

| Field | Description |
| --- | --- |
| `comments` |  |
| `comments_enabled` |  |
| `comments_url` |  |
| `commits_url` |  |
| `created_at` |  |
| `description` |  |
| `files` |  |
| `forks` |  |
| `forks_url` |  |
| `git_pull_url` |  |
| `git_push_url` |  |
| `history` |  |
| `html_url` |  |
| `id` |  |
| `node_id` |  |
| `owner` | A GitHub user. |
| `public` |  |
| `truncated` |  |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, List.

API path: `/gists/{gist_id}/forks`

#### BillingUsageReport

| Field | Description |
| --- | --- |
| `date` | Date of the usage line item. |
| `discountAmount` | Discount amount of the usage line item. |
| `grossAmount` | Gross amount of the usage line item. |
| `netAmount` | Net amount of the usage line item. |
| `organizationName` | Name of the organization. |
| `pricePerUnit` | Price per unit of the usage line item. |
| `product` | Product name. |
| `quantity` | Quantity of the usage line item. |
| `repositoryName` | Name of the repository. |
| `sku` | SKU name. |
| `unitType` | Unit type of the usage line item. |

Operations: List.

API path: `/organizations/{org}/settings/billing/usage`

#### BillingUsageReportUser

| Field | Description |
| --- | --- |
| `date` | Date of the usage line item. |
| `discountAmount` | Discount amount of the usage line item. |
| `grossAmount` | Gross amount of the usage line item. |
| `netAmount` | Net amount of the usage line item. |
| `pricePerUnit` | Price per unit of the usage line item. |
| `product` | Product name. |
| `quantity` | Quantity of the usage line item. |
| `repositoryName` | Name of the repository. |
| `sku` | SKU name. |
| `unitType` | Unit type of the usage line item. |

Operations: List.

API path: `/users/{username}/settings/billing/usage`

#### Blob

| Field | Description |
| --- | --- |
| `content` |  |
| `encoding` |  |
| `highlighted_content` |  |
| `id` |  |
| `node_id` |  |
| `sha` |  |
| `size` |  |
| `url` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/git/blobs/{file_sha}`

#### Block

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/orgs/{org}/blocks`

#### Branch

| Field | Description |
| --- | --- |
| `commit` | Commit |
| `id` |  |
| `links` |  |
| `name` |  |
| `pattern` |  |
| `protected` |  |
| `protection` | Branch Protection |
| `protection_url` |  |
| `required_approving_review_count` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/branches/{branch}`

#### BranchProtection

| Field | Description |
| --- | --- |
| `allow_deletions` |  |
| `allow_force_pushes` |  |
| `allow_fork_syncing` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` |  |
| `enabled` |  |
| `enforce_admins` | Protected Branch Admin Enforced |
| `id` |  |
| `lock_branch` | Whether to set the branch as read-only. |
| `name` |  |
| `protection_url` |  |
| `required_conversation_resolution` |  |
| `required_linear_history` |  |
| `required_pull_request_reviews` | Protected Branch Pull Request Review |
| `required_signatures` |  |
| `required_status_checks` | Protected Branch Required Status Check |
| `restrictions` | Branch Restriction Policy |
| `url` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection`

#### BranchRestrictionPolicy

| Field | Description |
| --- | --- |
| `apps` |  |
| `apps_url` |  |
| `teams` |  |
| `teams_url` |  |
| `url` |  |
| `users` |  |
| `users_url` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions`

#### BranchShort

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `protected` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`

#### BranchWithProtection

| Field | Description |
| --- | --- |
| `id` |  |
| `new_name` | The new name of the branch. |

Operations: Create.

API path: `/repos/{owner}/{repo}/branches/{branch}/rename`

#### Campaign

| Field | Description |
| --- | --- |
| `alert_stats` |  |
| `closed_at` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | The code scanning alerts to include in this campaign |
| `contact_link` | The contact link of the campaign. |
| `created_at` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | The campaign description |
| `ends_at` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | If true, will automatically generate issues for the campaign. |
| `id` |  |
| `managers` | The campaign managers |
| `name` | The campaign name |
| `number` | The number of the newly created campaign |
| `published_at` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | Indicates whether a campaign is open or closed |
| `team_managers` | The campaign team managers |
| `updated_at` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

Operations: Create, List, Load, Remove, Update.

API path: `/orgs/{org}/campaigns`

#### Check

| Field | Description |
| --- | --- |
| `after` |  |
| `app` | GitHub apps are a new way to extend GitHub. |
| `before` |  |
| `check_runs_url` |  |
| `check_suite` |  |
| `completed_at` |  |
| `conclusion` |  |
| `created_at` |  |
| `deployment` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` |  |
| `external_id` |  |
| `head_branch` |  |
| `head_commit` | A commit. |
| `head_sha` | The SHA of the commit that is being checked. |
| `html_url` |  |
| `id` | The id of the check. |
| `latest_check_runs_count` |  |
| `name` | The name of the check. |
| `node_id` |  |
| `output` |  |
| `pull_requests` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | Minimal Repository |
| `rerequestable` |  |
| `runs_rerequestable` |  |
| `started_at` |  |
| `status` | The phase of the lifecycle that the check is currently in. |
| `updated_at` |  |
| `url` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{ref}/check-runs`

#### CheckAnnotation

| Field | Description |
| --- | --- |
| `annotation_level` |  |
| `blob_href` |  |
| `end_column` |  |
| `end_line` |  |
| `message` |  |
| `path` |  |
| `raw_details` |  |
| `start_column` |  |
| `start_line` |  |
| `title` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`

#### CheckAutomatedSecurityFix

| Field | Description |
| --- | --- |
| `enabled` | Whether Dependabot security updates are enabled for the repository. |
| `paused` | Whether Dependabot security updates are paused for the repository. |

Operations: Load.

API path: `/repos/{owner}/{repo}/automated-security-fixes`

#### CheckRun

| Field | Description |
| --- | --- |
| `actions` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | GitHub apps are a new way to extend GitHub. |
| `check_suite` |  |
| `completed_at` | The time the check completed. |
| `conclusion` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | The URL of the integrator's site that has the full details of the check. |
| `external_id` | A reference for the run on the integrator's system. |
| `head_sha` | The SHA of the commit that is being checked. |
| `html_url` |  |
| `id` | The id of the check. |
| `name` | The name of the check. |
| `node_id` |  |
| `output` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | The time that the check run began. |
| `status` | The phase of the lifecycle that the check is currently in. |
| `url` |  |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/check-runs`

#### CheckSuite

| Field | Description |
| --- | --- |
| `after` |  |
| `app` | GitHub apps are a new way to extend GitHub. |
| `before` |  |
| `check_runs_url` |  |
| `conclusion` |  |
| `created_at` |  |
| `head_branch` |  |
| `head_commit` | A commit. |
| `head_sha` | The SHA of the head commit that is being checked. |
| `id` |  |
| `latest_check_runs_count` |  |
| `node_id` |  |
| `pull_requests` |  |
| `repository` | Minimal Repository |
| `rerequestable` |  |
| `runs_rerequestable` |  |
| `status` | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` |  |
| `url` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/check-suites`

#### CheckSuitePreference

| Field | Description |
| --- | --- |
| `auto_trigger_checks` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` |  |
| `repository` | Minimal Repository |

Operations: Update.

API path: `/repos/{owner}/{repo}/check-suites/preferences`

#### Classroom

| Field | Description |
| --- | --- |
| `archived` | Returns whether classroom is archived or not. |
| `avatar_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the classroom. |
| `login` |  |
| `name` | The name of the classroom. |
| `node_id` |  |
| `url` | The url of the classroom on GitHub Classroom. |

Operations: List, Load.

API path: `/classrooms`

#### ClassroomAcceptedAssignment

| Field | Description |
| --- | --- |
| `assignment` | A GitHub Classroom assignment |
| `commit_count` | Count of student commits. |
| `grade` | Most recent grade. |
| `id` | Unique identifier of the repository. |
| `passing` | Whether a submission passed. |
| `repository` | A GitHub repository view for Classroom |
| `students` |  |
| `submitted` | Whether an accepted assignment has been submitted. |

Operations: List.

API path: `/assignments/{assignment_id}/accepted_assignments`

#### ClassroomAssignment

| Field | Description |
| --- | --- |
| `accepted` | The number of students that have accepted the assignment. |
| `classroom` | A GitHub Classroom classroom |
| `deadline` | The time at which the assignment is due. |
| `editor` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | Unique identifier of the repository. |
| `invitations_enabled` | Whether the invitation link is enabled. |
| `invite_link` | The link that a student can use to accept the assignment. |
| `language` | The programming language used in the assignment. |
| `max_members` | The maximum allowable members per team. |
| `max_teams` | The maximum allowable teams for the assignment. |
| `passing` | The number of students that have passed the assignment. |
| `public_repo` | Whether an accepted assignment creates a public repository. |
| `slug` | Sluggified name of the assignment. |
| `starter_code_repository` | A GitHub repository view for Classroom |
| `students_are_repo_admins` | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | The number of students that have submitted the assignment. |
| `title` | Assignment title. |
| `type` | Whether it's a group assignment or individual assignment. |

Operations: Load.

API path: `/assignments/{assignment_id}`

#### ClassroomAssignmentGrade

| Field | Description |
| --- | --- |
| `assignment_name` | Name of the assignment |
| `assignment_url` | URL of the assignment |
| `github_username` | GitHub username of the student |
| `group_name` | If a group assignment, name of the group the student is in |
| `points_available` | Number of points available for the assignment |
| `points_awarded` | Number of points awarded to the student |
| `roster_identifier` | Roster identifier of the student |
| `starter_code_url` | URL of the starter code for the assignment |
| `student_repository_name` | Name of the student's assignment repository |
| `student_repository_url` | URL of the student's assignment repository |
| `submission_timestamp` | Timestamp of the student's assignment submission |

Operations: List.

API path: `/assignments/{assignment_id}/grades`

#### Clone

| Field | Description |
| --- | --- |
| `count` |  |
| `timestamp` |  |
| `uniques` |  |

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
| `body` |  |
| `html_url` |  |
| `key` |  |
| `name` |  |
| `url` |  |

Operations: List, Load.

API path: `/codes_of_conduct`

#### CodeScanning

| Field | Description |
| --- | --- |
| `checkout_uri` | The base directory used in the analysis, as it appears in the SARIF file. |
| `commit_sha` | The SHA of the commit to which the analysis you are uploading relates. |
| `ref` | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `sarif` | A Base64 string representing the SARIF file to upload. |
| `started_at` | The time that the analysis run began. |
| `tool_name` | The name of the tool used to generate the code scanning analysis. |
| `validate` | Whether the SARIF file will be validated according to the code scanning specifications. |

Operations: Create, Remove.

API path: `/repos/{owner}/{repo}/code-scanning/sarifs`

#### CodeScanningAlert

| Field | Description |
| --- | --- |
| `create_request` | If `true`, attempt to create an alert dismissal request. |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | A GitHub user. |
| `dismissed_at` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | A GitHub user. |
| `dismissed_comment` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | The GitHub URL of the alert resource. |
| `id` |  |
| `instances_url` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` |  |
| `number` | The security alert number. |
| `rule` |  |
| `state` | State of a code scanning alert. |
| `tool` |  |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`

#### CodeScanningAlertInstance

| Field | Description |
| --- | --- |
| `analysis_key` | Identifies the configuration under which the analysis was executed. |
| `category` | Identifies the configuration under which the analysis was executed. |
| `classifications` | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` |  |
| `environment` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` |  |
| `location` | Describe a region within a file for the alert. |
| `message` |  |
| `ref` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | State of a code scanning alert. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`

#### CodeScanningAlertItem

| Field | Description |
| --- | --- |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | A GitHub user. |
| `dismissed_at` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | A GitHub user. |
| `dismissed_comment` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | The GitHub URL of the alert resource. |
| `instances_url` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` |  |
| `number` | The security alert number. |
| `rule` |  |
| `state` | State of a code scanning alert. |
| `tool` |  |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/alerts`

#### CodeScanningAnalysi

| Field | Description |
| --- | --- |
| `analysis_key` | Identifies the configuration under which the analysis was executed. |
| `category` | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` |  |
| `environment` | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` |  |
| `guid` | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | Unique identifier for this analysis. |
| `name` | The name of the tool used to generate the code scanning analysis. |
| `ref` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | The total number of results in the analysis. |
| `rules_count` | The total number of rules used in the analysis. |
| `sarif_id` | An identifier for the upload. |
| `tool` |  |
| `url` | The REST API URL of the analysis resource. |
| `version` | The version of the tool used to generate the code scanning analysis. |
| `warning` | Warning generated when processing the analysis |

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
| `description` | The description of an autofix. |
| `started_at` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | The status of an autofix. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`

#### CodeScanningAutofixCommit

| Field | Description |
| --- | --- |
| `message` | Commit message to be used. |
| `target_ref` | The Git reference of target branch for the commit. |

Operations: Create.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits`

#### CodeScanningCodeqlDatabase

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `commit_oid` | The commit SHA of the repository at the time the CodeQL database was created. |
| `content_type` | The MIME type of the CodeQL database file. |
| `created_at` | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` | The ID of the CodeQL database. |
| `language` | The language of the CodeQL database. |
| `login` |  |
| `name` | The name of the CodeQL database. |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `size` | The size of the CodeQL database file in bytes. |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `updated_at` | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | A GitHub user. |
| `url` | The URL at which to download the CodeQL database. |
| `user_view_type` |  |

Operations: List, Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/databases`

#### CodeScanningDefaultSetup

| Field | Description |
| --- | --- |
| `languages` | Languages to be analyzed. |
| `query_suite` | CodeQL query suite to be used. |
| `runner_label` | Runner label to be used if the runner type is labeled. |
| `runner_type` | Runner type to be used. |
| `schedule` | The frequency of the periodic analysis. |
| `state` | Code scanning default setup has been configured or not. |
| `threat_model` | Threat model to be used for code scanning analysis. |
| `updated_at` | Timestamp of latest configuration update. |

Operations: List.

API path: `/repos/{owner}/{repo}/code-scanning/default-setup`

#### CodeScanningOrganizationAlertItem

| Field | Description |
| --- | --- |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | A GitHub user. |
| `dismissed_at` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | A GitHub user. |
| `dismissed_comment` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | The GitHub URL of the alert resource. |
| `instances_url` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` |  |
| `number` | The security alert number. |
| `repository` | A GitHub repository. |
| `rule` |  |
| `state` | State of a code scanning alert. |
| `tool` |  |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |

Operations: List.

API path: `/orgs/{org}/code-scanning/alerts`

#### CodeScanningSarifsStatus

| Field | Description |
| --- | --- |
| `analyses_url` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

Operations: Load.

API path: `/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`

#### CodeScanningVariantAnalysi

| Field | Description |
| --- | --- |
| `actions_workflow_run_id` | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | A GitHub user. |
| `completed_at` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | A GitHub repository. |
| `created_at` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | The reason for a failure of the variant analysis. |
| `id` | The ID of the variant analysis. |
| `language` | The language targeted by the CodeQL query |
| `query_language` | The language targeted by the CodeQL query |
| `query_pack` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | The download url for the query pack. |
| `repositories` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | List of repository lists to run the query against. |
| `repository_owners` | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` |  |
| `skipped_repositories` | Information about repositories that were skipped from processing. |
| `status` |  |
| `updated_at` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses`

#### CodeScanningVariantAnalysisRepoTask

| Field | Description |
| --- | --- |
| `archive_url` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | A template for the API URL to compare two commits or refs. |
| `contents_url` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | The API URL to list the deployments of the repository. |
| `description` | The repository description. |
| `downloads_url` | The API URL to list the downloads on the repository. |
| `events_url` | The API URL to list the events of the repository. |
| `fork` | Whether the repository is a fork. |
| `forks_url` | The API URL to list the forks of the repository. |
| `full_name` | The full, globally unique, name of the repository. |
| `git_commits_url` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | A unique identifier of the repository. |
| `hooks_url` | The API URL to list the hooks on the repository. |
| `html_url` | The URL to view the repository on GitHub.com. |
| `id` | A unique identifier of the repository. |
| `issue_comment_url` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | The API URL to get information about the languages of the repository. |
| `merges_url` | The API URL to merge branches in the repository. |
| `milestones_url` | A template for the API URL to get information about milestones of the repository. |
| `name` | The name of the repository. |
| `node_id` | The GraphQL identifier of the repository. |
| `notifications_url` | A template for the API URL to get information about notifications on the repository. |
| `owner` | A GitHub user. |
| `private` | Whether the repository is private. |
| `pulls_url` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | The API URL to list the stargazers on the repository. |
| `statuses_url` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | The API URL to list the subscribers on the repository. |
| `subscription_url` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | The API URL to get information about tags on the repository. |
| `teams_url` | The API URL to list the teams on the repository. |
| `trees_url` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | The URL to get more information about the repository from the GitHub API. |

Operations: Load.

API path: `/repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}`

#### CodeSecurity

| Field | Description |
| --- | --- |
| `advanced_security` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | Feature options for code scanning |
| `created_at` |  |
| `default_for_new_repos` | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | The enablement status of Dependabot security updates |
| `dependency_graph` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | Feature options for Automatic dependency submission |
| `description` | A description of the code security configuration |
| `enforcement` | The enforcement status for a security configuration |
| `html_url` | The URL of the configuration |
| `id` | The ID of the code security configuration |
| `name` | The name of the code security configuration. |
| `private_vulnerability_reporting` | The enablement status of private vulnerability reporting |
| `secret_scanning` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | The enablement status of secret scanning validity checks |
| `target_type` | The type of the code security configuration. |
| `updated_at` |  |
| `url` | The URL of the configuration |

Operations: Remove, Update.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}`

#### CodeSecurityConfiguration

| Field | Description |
| --- | --- |
| `advanced_security` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | Feature options for code scanning |
| `code_security` | The enablement status of GitHub Code Security features. |
| `created_at` |  |
| `dependabot_alerts` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | The enablement status of Dependabot security updates |
| `dependency_graph` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | Feature options for Automatic dependency submission |
| `description` | A description of the code security configuration |
| `enforcement` | The enforcement status for a security configuration |
| `html_url` | The URL of the configuration |
| `id` | The ID of the code security configuration |
| `name` | The name of the code security configuration. |
| `private_vulnerability_reporting` | The enablement status of private vulnerability reporting |
| `scope` | The type of repositories to attach the configuration to. |
| `secret_protection` | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | An array of repository IDs to attach the configuration to. |
| `target_type` | The type of the code security configuration. |
| `updated_at` |  |
| `url` | The URL of the configuration |

Operations: Create, List, Load, Update.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach`

#### CodeSecurityConfigurationRepository

| Field | Description |
| --- | --- |
| `repository` | A GitHub repository. |
| `status` | The attachment status of the code security configuration on the repository. |

Operations: List.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories`

#### CodeSecurityDefaultConfiguration

| Field | Description |
| --- | --- |
| `configuration` | A code security configuration |
| `default_for_new_repos` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

Operations: List.

API path: `/enterprises/{enterprise}/code-security/configurations/defaults`

#### CodeownersError

| Field | Description |
| --- | --- |
| `column` | The column number where this errors occurs. |
| `kind` | The type of error. |
| `line` | The line number where this errors occurs. |
| `message` | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | The path of the file where the error occured. |
| `source` | The contents of the line where the error occurs. |
| `suggestion` | Suggested action to fix the error. |

Operations: List.

API path: `/repos/{owner}/{repo}/codeowners/errors`

#### Codespace

| Field | Description |
| --- | --- |
| `accepted` | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` |  |
| `archive_url` |  |
| `archived` |  |
| `assignees_url` |  |
| `billable_owner` | A GitHub user. |
| `blobs_url` |  |
| `branch` | Name of the exported branch |
| `branches_url` |  |
| `client_ip` | IP for location auto-detection when proxying a request |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `completed_at` | Completion time of the last export operation |
| `contents_url` |  |
| `contributors_url` |  |
| `cpus` | How many cores are available to the codespace. |
| `created_at` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` |  |
| `defaults` |  |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `devcontainer_path` | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` |  |
| `display_name` | Display name for this codespace. |
| `downloads_url` |  |
| `encrypted_value` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | UUID identifying this codespace's environment. |
| `events_url` |  |
| `export_url` | Url for fetching export details |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `geo` | The geographic area for this codespace. |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_status` | Details about the codespace's git repository. |
| `git_tags_url` |  |
| `git_url` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_wiki` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` | Web url for the exported branch |
| `id` | Id for the export details |
| `idle_timeout_minutes` | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `key` | The Base64 encoded public key. |
| `key_id` | The identifier for the key. |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `last_known_stop_notice` | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `last_used_at` | Last known time this codespace was started. |
| `license` |  |
| `location` | The initally assigned location of a new codespace. |
| `machine` | A description of the machine powering a codespace. |
| `machines_url` | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | How much memory is available to the codespace. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `multi_repo_permissions_opt_out` | Whether to authorize requested permissions from devcontainer.json |
| `name` | The name of the secret. |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `operating_system` | The operating system of the machine. |
| `owner` | A GitHub user. |
| `path` |  |
| `pending_operation` | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | Text to show user when codespace is disabled by a pending operation |
| `permissions` |  |
| `prebuild` | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | Whether the new repository should be private. |
| `publish_url` | API URL to publish this codespace to a new repository. |
| `pulls_url` | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` |  |
| `recent_folders` | Recently opened folders inside the codespace. |
| `ref` | Git ref (typically a branch name) for this codespace |
| `releases_url` |  |
| `repository` | Minimal Repository |
| `retention_expires_at` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` |  |
| `runtime_constraints` |  |
| `security_and_analysis` |  |
| `selected_repositories_url` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | Git commit SHA of the exported branch |
| `size` | The size of the repository, in kilobytes. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `start_url` | API URL to start this codespace. |
| `state` | State of the latest export |
| `statuses_url` |  |
| `stop_url` | API URL to stop this codespace. |
| `storage_in_bytes` | How much storage is available to the codespace. |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `template` |  |
| `title` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | API URL for this codespace. |
| `visibility` | The type of repositories in the organization that the secret is visible to |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |
| `web_url` | URL to access this codespace on the web. |
| `working_directory` | Working directory for this codespace |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`

#### Collaborator

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `permissions` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `role_name` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/collaborators`

#### CombinedBillingUsage

| Field | Description |
| --- | --- |
| `days_left_in_billing_cycle` | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

Operations: Load.

API path: `/orgs/{org}/settings/billing/shared-storage`

#### CombinedCommitStatus

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `context` |  |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `node_id` |  |
| `required` |  |
| `state` |  |
| `target_url` |  |
| `updated_at` |  |
| `url` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/commits/{ref}/status`

#### Commit

| Field | Description |
| --- | --- |
| `author` |  |
| `base` | The name of the base branch that the head will be merged into. |
| `comments_url` |  |
| `commit` |  |
| `commit_message` | Commit message to use for the merge commit. |
| `committer` |  |
| `files` |  |
| `head` | The head to merge. |
| `html_url` |  |
| `id` |  |
| `node_id` |  |
| `parents` |  |
| `sha` |  |
| `stats` |  |
| `url` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/merges`

#### CommitActivity

| Field | Description |
| --- | --- |
| `days` |  |
| `total` |  |
| `week` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/commit_activity`

#### CommitComment

| Field | Description |
| --- | --- |
| `author_association` | How the author is associated with the repository. |
| `body` | The contents of the comment. |
| `commit_id` |  |
| `created_at` |  |
| `html_url` |  |
| `id` |  |
| `line` | **Closing down notice**. |
| `node_id` |  |
| `path` | Relative path of the file to comment on. |
| `position` | Line index in the diff to comment on. |
| `reactions` |  |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/commits/{commit_sha}/comments`

#### CommitComparison

| Field | Description |
| --- | --- |
| `ahead_by` |  |
| `base_commit` | Commit |
| `behind_by` |  |
| `commits` |  |
| `diff_url` |  |
| `files` |  |
| `html_url` |  |
| `merge_base_commit` | Commit |
| `patch_url` |  |
| `permalink_url` |  |
| `status` |  |
| `total_commits` |  |
| `url` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/compare/{basehead}`

#### CommunityProfile

| Field | Description |
| --- | --- |
| `code_of_conduct` | Code of Conduct Simple |
| `code_of_conduct_file` |  |
| `contributing` |  |
| `issue_template` |  |
| `license` | License Simple |
| `pull_request_template` |  |
| `readme` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/community/profile`

#### ContentFile

| Field | Description |
| --- | --- |
| `git` |  |
| `html` |  |
| `self` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/readme/{dir}`

#### ContentTraffic

| Field | Description |
| --- | --- |
| `count` |  |
| `path` |  |
| `title` |  |
| `uniques` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/popular/paths`

#### Contributor

| Field | Description |
| --- | --- |
| `author` | A GitHub user. |
| `avatar_url` |  |
| `contributions` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `total` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |
| `weeks` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/contributors`

#### Copilot

| Field | Description |
| --- | --- |
| `assignee` | A GitHub user. |
| `assigning_team` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | A GitHub organization. |
| `pending_cancellation_date` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | **Closing down notice:** This field is no longer relevant and is closing down. |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/copilot/billing/selected_teams`

#### CopilotOrganizationDetail

| Field | Description |
| --- | --- |
| `active_this_cycle` | The number of seats that have used Copilot during the current billing cycle. |
| `added_this_cycle` | Seats added during the current billing cycle. |
| `inactive_this_cycle` | The number of seats that have not used Copilot during the current billing cycle. |
| `pending_cancellation` | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `pending_invitation` | The number of users who have been invited to receive a Copilot seat through this organization. |
| `total` | The total number of seats being billed for the organization as of the current billing cycle. |

Operations: Load.

API path: `/orgs/{org}/copilot/billing`

#### CopilotUsageMetricsDay

| Field | Description |
| --- | --- |
| `copilot_dotcom_chat` | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

Operations: List.

API path: `/orgs/{org}/team/{team_slug}/copilot/metrics`

#### Credential

| Field | Description |
| --- | --- |
| `credentials` | A list of credentials to be revoked, up to 1000 per request. |

Operations: Create.

API path: `/credentials/revoke`

#### CustomProperty

| Field | Description |
| --- | --- |
| `allowed_values` | An ordered list of the allowed values of the property. |
| `default_value` | Default value of the property |
| `description` | Short description of the property |
| `properties` | The array of custom properties to create or update. |
| `property_name` | The name of the property |
| `required` | Whether the property is required. |
| `source_type` | The source type of the property |
| `url` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | The type of the value for the property |
| `values_editable_by` | Who can edit the values of the property |

Operations: List, Load, Patch, Update.

API path: `/orgs/{org}/properties/schema`

#### CustomPropertyValue

| Field | Description |
| --- | --- |
| `property_name` | The name of the property |
| `value` | The value assigned to the property |

Operations: List.

API path: `/repos/{owner}/{repo}/properties/values`

#### Dependabot

| Field | Description |
| --- | --- |
| `allow_forking` |  |
| `archive_url` |  |
| `archived` |  |
| `assignees_url` |  |
| `avatar_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` |  |
| `default_level` | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `disabled` |  |
| `downloads_url` |  |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_wiki` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` |  |
| `login` |  |
| `members_url` |  |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the secret. |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `owner` | A GitHub user. |
| `permissions` |  |
| `private` |  |
| `public_members_url` |  |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `repos_url` |  |
| `repository_ids_to_add` | List of repository IDs to add. |
| `repository_ids_to_remove` | List of repository IDs to remove. |
| `role_name` |  |
| `security_and_analysis` |  |
| `selected_repositories_url` |  |
| `selected_repository_ids` | An array of repository ids that can access the organization secret. |
| `size` | The size of the repository, in kilobytes. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `visibility` | Visibility of a secret |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |

Operations: List, Patch, Remove, Update.

API path: `/orgs/{org}/dependabot/secrets/{secret_name}/repositories`

#### DependabotAlert

| Field | Description |
| --- | --- |
| `auto_dismissed_at` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | Details for the vulnerable dependency. |
| `dismissed_at` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | A GitHub user. |
| `dismissed_comment` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | The reason that the alert was dismissed. |
| `fixed_at` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | The GitHub URL of the alert resource. |
| `id` |  |
| `number` | The security alert number. |
| `security_advisory` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | The state of the Dependabot alert. |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |

Operations: List, Load, Update.

API path: `/repos/{owner}/{repo}/dependabot/alerts`

#### DependabotAlertWithRepository

| Field | Description |
| --- | --- |
| `auto_dismissed_at` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | Details for the vulnerable dependency. |
| `dismissed_at` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | A GitHub user. |
| `dismissed_comment` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | The reason that the alert was dismissed. |
| `fixed_at` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | The GitHub URL of the alert resource. |
| `number` | The security alert number. |
| `repository` | A GitHub repository. |
| `security_advisory` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | The state of the Dependabot alert. |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |

Operations: List.

API path: `/orgs/{org}/dependabot/alerts`

#### DependabotPublicKey

| Field | Description |
| --- | --- |
| `key` | The Base64 encoded public key. |
| `key_id` | The identifier for the key. |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependabot/secrets/public-key`

#### DependabotRepositoryAccessDetail

| Field | Description |
| --- | --- |
| `archive_url` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | A template for the API URL to compare two commits or refs. |
| `contents_url` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | The API URL to list the deployments of the repository. |
| `description` | The repository description. |
| `downloads_url` | The API URL to list the downloads on the repository. |
| `events_url` | The API URL to list the events of the repository. |
| `fork` | Whether the repository is a fork. |
| `forks_url` | The API URL to list the forks of the repository. |
| `full_name` | The full, globally unique, name of the repository. |
| `git_commits_url` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | The API URL to list the hooks on the repository. |
| `html_url` | The URL to view the repository on GitHub.com. |
| `id` | A unique identifier of the repository. |
| `issue_comment_url` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | The API URL to get information about the languages of the repository. |
| `merges_url` | The API URL to merge branches in the repository. |
| `milestones_url` | A template for the API URL to get information about milestones of the repository. |
| `name` | The name of the repository. |
| `node_id` | The GraphQL identifier of the repository. |
| `notifications_url` | A template for the API URL to get information about notifications on the repository. |
| `owner` | A GitHub user. |
| `private` | Whether the repository is private. |
| `pulls_url` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | The API URL to list the stargazers on the repository. |
| `statuses_url` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | The API URL to list the subscribers on the repository. |
| `subscription_url` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | The API URL to get information about tags on the repository. |
| `teams_url` | The API URL to list the teams on the repository. |
| `trees_url` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | The URL to get more information about the repository from the GitHub API. |

Operations: List.

API path: `/organizations/{org}/dependabot/repository-access`

#### DependabotSecret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `updated_at` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependabot/secrets/{secret_name}`

#### DependencyGraph

| Field | Description |
| --- | --- |
| `detector` | A description of the detector used. |
| `job` |  |
| `manifests` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | The repository branch that triggered this snapshot. |
| `scanned` | The time at which the snapshot was scanned. |
| `sha` | The commit SHA associated with this dependency snapshot. |
| `version` | The version of the repository snapshot submission. |

Operations: Create.

API path: `/repos/{owner}/{repo}/dependency-graph/snapshots`

#### DependencyGraphDiff

| Field | Description |
| --- | --- |
| `change_type` |  |
| `ecosystem` |  |
| `license` |  |
| `manifest` |  |
| `name` |  |
| `package_url` |  |
| `scope` | Where the dependency is utilized. |
| `source_repository_url` |  |
| `version` |  |
| `vulnerabilities` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependency-graph/compare/{basehead}`

#### DependencyGraphSpdxSbom

| Field | Description |
| --- | --- |
| `SPDXID` | The SPDX identifier for the SPDX document. |
| `comment` | An optional comment about the SPDX document. |
| `creationInfo` |  |
| `dataLicense` | The license under which the SPDX document is licensed. |
| `documentNamespace` | The namespace for the SPDX document. |
| `name` | The name of the SPDX document. |
| `packages` |  |
| `relationships` |  |
| `spdxVersion` | The version of the SPDX specification that this document conforms to. |

Operations: Load.

API path: `/repos/{owner}/{repo}/dependency-graph/sbom`

#### DeployKey

| Field | Description |
| --- | --- |
| `added_by` |  |
| `created_at` |  |
| `enabled` |  |
| `id` |  |
| `key` | The contents of the key. |
| `last_used` |  |
| `read_only` | If `true`, the key will only be able to read repository contents. |
| `title` | A name for the key. |
| `url` |  |
| `verified` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/keys`

#### Deployment

| Field | Description |
| --- | --- |
| `auto_merge` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | A comment to accompany the deployment review |
| `created_at` |  |
| `creator` | A GitHub user. |
| `description` | Short description of the deployment. |
| `environment` | Name for the target deployment environment. |
| `environment_ids` | The list of environment ids to approve or reject |
| `id` | Unique identifier of the deployment |
| `node_id` |  |
| `original_environment` |  |
| `payload` |  |
| `performed_via_github_app` | GitHub apps are a new way to extend GitHub. |
| `production_environment` | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | The ref to deploy. |
| `repository_url` |  |
| `required_contexts` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` |  |
| `state` | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` |  |
| `task` | Parameter to specify a task to execute |
| `transient_environment` | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`

#### DeploymentBranchPolicy

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the branch or tag policy. |
| `name` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` |  |
| `type` | Whether this rule targets a branch or tag. |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`

#### DeploymentProtectionRule

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the deployment protection rule integration. |
| `integration_id` | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | The URL for the endpoint to get details about the app. |
| `node_id` | The node ID for the deployment protection rule integration. |
| `slug` | The slugified name of the deployment protection rule integration. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules`

#### DeploymentStatus

| Field | Description |
| --- | --- |
| `auto_inactive` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` |  |
| `creator` | A GitHub user. |
| `deployment_url` |  |
| `description` | A short description of the status. |
| `environment` | The environment of the deployment that the status is for. |
| `environment_url` | The URL for accessing your environment. |
| `id` |  |
| `log_url` | The URL to associate with this status. |
| `node_id` |  |
| `performed_via_github_app` | GitHub apps are a new way to extend GitHub. |
| `repository_url` |  |
| `state` | The state of the status. |
| `target_url` | Closing down notice: the URL to associate with this status. |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load.

API path: `/repos/{owner}/{repo}/deployments/{deployment_id}/statuses`

#### DiffEntry

| Field | Description |
| --- | --- |
| `additions` |  |
| `blob_url` |  |
| `changes` |  |
| `contents_url` |  |
| `deletions` |  |
| `filename` |  |
| `patch` |  |
| `previous_filename` |  |
| `raw_url` |  |
| `sha` |  |
| `status` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/files`

#### Email

| Field | Description |
| --- | --- |
| `email` |  |
| `primary` |  |
| `verified` |  |
| `visibility` | Denotes whether an email is publicly visible. |

Operations: Create, List, Update.

API path: `/user/emails`

#### Emoji

| Field | Description |
| --- | --- |
| `1` |  |
| `100` |  |
| `1234` |  |
| `1st_place_medal` |  |
| `2nd_place_medal` |  |
| `3rd_place_medal` |  |
| `8ball` |  |
| `a` |  |
| `ab` |  |
| `abacus` |  |
| `abc` |  |
| `abcd` |  |
| `accept` |  |
| `accessibility` |  |
| `accordion` |  |
| `adhesive_bandage` |  |
| `adult` |  |
| `aerial_tramway` |  |
| `afghanistan` |  |
| `airplane` |  |
| `aland_islands` |  |
| `alarm_clock` |  |
| `albania` |  |
| `alembic` |  |
| `algeria` |  |
| `alien` |  |
| `ambulance` |  |
| `american_samoa` |  |
| `amphora` |  |
| `anatomical_heart` |  |
| `anchor` |  |
| `andorra` |  |
| `angel` |  |
| `anger` |  |
| `angola` |  |
| `angry` |  |
| `anguilla` |  |
| `anguished` |  |
| `ant` |  |
| `antarctica` |  |
| `antigua_barbuda` |  |
| `apple` |  |
| `aquarius` |  |
| `argentina` |  |
| `aries` |  |
| `armenia` |  |
| `arrow_backward` |  |
| `arrow_double_down` |  |
| `arrow_double_up` |  |
| `arrow_down` |  |
| `arrow_down_small` |  |
| `arrow_forward` |  |
| `arrow_heading_down` |  |
| `arrow_heading_up` |  |
| `arrow_left` |  |
| `arrow_lower_left` |  |
| `arrow_lower_right` |  |
| `arrow_right` |  |
| `arrow_right_hook` |  |
| `arrow_up` |  |
| `arrow_up_down` |  |
| `arrow_up_small` |  |
| `arrow_upper_left` |  |
| `arrow_upper_right` |  |
| `arrows_clockwise` |  |
| `arrows_counterclockwise` |  |
| `art` |  |
| `articulated_lorry` |  |
| `artificial_satellite` |  |
| `artist` |  |
| `aruba` |  |
| `ascension_island` |  |
| `asterisk` |  |
| `astonished` |  |
| `astronaut` |  |
| `athletic_shoe` |  |
| `atm` |  |
| `atom` |  |
| `atom_symbol` |  |
| `australia` |  |
| `austria` |  |
| `auto_rickshaw` |  |
| `avocado` |  |
| `axe` |  |
| `azerbaijan` |  |
| `b` |  |
| `baby` |  |
| `baby_bottle` |  |
| `baby_chick` |  |
| `baby_symbol` |  |
| `back` |  |
| `bacon` |  |
| `badger` |  |
| `badminton` |  |
| `bagel` |  |
| `baggage_claim` |  |
| `baguette_bread` |  |
| `bahamas` |  |
| `bahrain` |  |
| `balance_scale` |  |
| `bald_man` |  |
| `bald_woman` |  |
| `ballet_shoes` |  |
| `balloon` |  |
| `ballot_box` |  |
| `ballot_box_with_check` |  |
| `bamboo` |  |
| `banana` |  |
| `bangbang` |  |
| `bangladesh` |  |
| `banjo` |  |
| `bank` |  |
| `bar_chart` |  |
| `barbados` |  |
| `barber` |  |
| `baseball` |  |
| `basecamp` |  |
| `basecampy` |  |
| `basket` |  |
| `basketball` |  |
| `basketball_man` |  |
| `basketball_woman` |  |
| `bat` |  |
| `bath` |  |
| `bathtub` |  |
| `battery` |  |
| `beach_umbrella` |  |
| `bear` |  |
| `bearded_person` |  |
| `beaver` |  |
| `bed` |  |
| `bee` |  |
| `beer` |  |
| `beers` |  |
| `beetle` |  |
| `beginner` |  |
| `belarus` |  |
| `belgium` |  |
| `belize` |  |
| `bell` |  |
| `bell_pepper` |  |
| `bellhop_bell` |  |
| `benin` |  |
| `bento` |  |
| `bermuda` |  |
| `beverage_box` |  |
| `bhutan` |  |
| `bicyclist` |  |
| `bike` |  |
| `biking_man` |  |
| `biking_woman` |  |
| `bikini` |  |
| `billed_cap` |  |
| `biohazard` |  |
| `bird` |  |
| `birthday` |  |
| `bison` |  |
| `black_cat` |  |
| `black_circle` |  |
| `black_flag` |  |
| `black_heart` |  |
| `black_joker` |  |
| `black_large_square` |  |
| `black_medium_small_square` |  |
| `black_medium_square` |  |
| `black_nib` |  |
| `black_small_square` |  |
| `black_square_button` |  |
| `blond_haired_man` |  |
| `blond_haired_person` |  |
| `blond_haired_woman` |  |
| `blonde_woman` |  |
| `blossom` |  |
| `blowfish` |  |
| `blue_book` |  |
| `blue_car` |  |
| `blue_heart` |  |
| `blue_square` |  |
| `blueberries` |  |
| `blush` |  |
| `boar` |  |
| `boat` |  |
| `bolivia` |  |
| `bomb` |  |
| `bone` |  |
| `book` |  |
| `bookmark` |  |
| `bookmark_tabs` |  |
| `books` |  |
| `boom` |  |
| `boomerang` |  |
| `boot` |  |
| `bosnia_herzegovina` |  |
| `botswana` |  |
| `bouncing_ball_man` |  |
| `bouncing_ball_person` |  |
| `bouncing_ball_woman` |  |
| `bouquet` |  |
| `bouvet_island` |  |
| `bow` |  |
| `bow_and_arrow` |  |
| `bowing_man` |  |
| `bowing_woman` |  |
| `bowl_with_spoon` |  |
| `bowling` |  |
| `bowtie` |  |
| `boxing_glove` |  |
| `boy` |  |
| `brain` |  |
| `brazil` |  |
| `bread` |  |
| `breast_feeding` |  |
| `bricks` |  |
| `bride_with_veil` |  |
| `bridge_at_night` |  |
| `briefcase` |  |
| `british_indian_ocean_territory` |  |
| `british_virgin_islands` |  |
| `broccoli` |  |
| `broken_heart` |  |
| `broom` |  |
| `brown_circle` |  |
| `brown_heart` |  |
| `brown_square` |  |
| `brunei` |  |
| `bubble_tea` |  |
| `bucket` |  |
| `bug` |  |
| `building_construction` |  |
| `bulb` |  |
| `bulgaria` |  |
| `bullettrain_front` |  |
| `bullettrain_side` |  |
| `burkina_faso` |  |
| `burrito` |  |
| `burundi` |  |
| `bus` |  |
| `business_suit_levitating` |  |
| `busstop` |  |
| `bust_in_silhouette` |  |
| `busts_in_silhouette` |  |
| `butter` |  |
| `butterfly` |  |
| `cactus` |  |
| `cake` |  |
| `calendar` |  |
| `call_me_hand` |  |
| `calling` |  |
| `cambodia` |  |
| `camel` |  |
| `camera` |  |
| `camera_flash` |  |
| `cameroon` |  |
| `camping` |  |
| `canada` |  |
| `canary_islands` |  |
| `cancer` |  |
| `candle` |  |
| `candy` |  |
| `canned_food` |  |
| `canoe` |  |
| `cape_verde` |  |
| `capital_abcd` |  |
| `capricorn` |  |
| `car` |  |
| `card_file_box` |  |
| `card_index` |  |
| `card_index_dividers` |  |
| `caribbean_netherlands` |  |
| `carousel_horse` |  |
| `carpentry_saw` |  |
| `carrot` |  |
| `cartwheeling` |  |
| `cat` |  |
| `cat2` |  |
| `cayman_islands` |  |
| `cd` |  |
| `central_african_republic` |  |
| `ceuta_melilla` |  |
| `chad` |  |
| `chains` |  |
| `chair` |  |
| `champagne` |  |
| `chart` |  |
| `chart_with_downwards_trend` |  |
| `chart_with_upwards_trend` |  |
| `checkered_flag` |  |
| `cheese` |  |
| `cherries` |  |
| `cherry_blossom` |  |
| `chess_pawn` |  |
| `chestnut` |  |
| `chicken` |  |
| `child` |  |
| `children_crossing` |  |
| `chile` |  |
| `chipmunk` |  |
| `chocolate_bar` |  |
| `chopsticks` |  |
| `christmas_island` |  |
| `christmas_tree` |  |
| `church` |  |
| `cinema` |  |
| `circus_tent` |  |
| `city_sunrise` |  |
| `city_sunset` |  |
| `cityscape` |  |
| `cl` |  |
| `clamp` |  |
| `clap` |  |
| `clapper` |  |
| `classical_building` |  |
| `climbing` |  |
| `climbing_man` |  |
| `climbing_woman` |  |
| `clinking_glasses` |  |
| `clipboard` |  |
| `clipperton_island` |  |
| `clock1` |  |
| `clock10` |  |
| `clock1030` |  |
| `clock11` |  |
| `clock1130` |  |
| `clock12` |  |
| `clock1230` |  |
| `clock130` |  |
| `clock2` |  |
| `clock230` |  |
| `clock3` |  |
| `clock330` |  |
| `clock4` |  |
| `clock430` |  |
| `clock5` |  |
| `clock530` |  |
| `clock6` |  |
| `clock630` |  |
| `clock7` |  |
| `clock730` |  |
| `clock8` |  |
| `clock830` |  |
| `clock9` |  |
| `clock930` |  |
| `closed_book` |  |
| `closed_lock_with_key` |  |
| `closed_umbrella` |  |
| `cloud` |  |
| `cloud_with_lightning` |  |
| `cloud_with_lightning_and_rain` |  |
| `cloud_with_rain` |  |
| `cloud_with_snow` |  |
| `clown_face` |  |
| `clubs` |  |
| `cn` |  |
| `coat` |  |
| `cockroach` |  |
| `cocktail` |  |
| `coconut` |  |
| `cocos_islands` |  |
| `coffee` |  |
| `coffin` |  |
| `coin` |  |
| `cold_face` |  |
| `cold_sweat` |  |
| `collision` |  |
| `colombia` |  |
| `comet` |  |
| `comoros` |  |
| `compass` |  |
| `computer` |  |
| `computer_mouse` |  |
| `confetti_ball` |  |
| `confounded` |  |
| `confused` |  |
| `congo_brazzaville` |  |
| `congo_kinshasa` |  |
| `congratulations` |  |
| `construction` |  |
| `construction_worker` |  |
| `construction_worker_man` |  |
| `construction_worker_woman` |  |
| `control_knobs` |  |
| `convenience_store` |  |
| `cook` |  |
| `cook_islands` |  |
| `cookie` |  |
| `cool` |  |
| `cop` |  |
| `copilot` |  |
| `copyright` |  |
| `corn` |  |
| `costa_rica` |  |
| `cote_divoire` |  |
| `couch_and_lamp` |  |
| `couple` |  |
| `couple_with_heart` |  |
| `couple_with_heart_man_man` |  |
| `couple_with_heart_woman_man` |  |
| `couple_with_heart_woman_woman` |  |
| `couplekiss` |  |
| `couplekiss_man_man` |  |
| `couplekiss_man_woman` |  |
| `couplekiss_woman_woman` |  |
| `cow` |  |
| `cow2` |  |
| `cowboy_hat_face` |  |
| `crab` |  |
| `crayon` |  |
| `credit_card` |  |
| `crescent_moon` |  |
| `cricket` |  |
| `cricket_game` |  |
| `croatia` |  |
| `crocodile` |  |
| `croissant` |  |
| `crossed_fingers` |  |
| `crossed_flags` |  |
| `crossed_swords` |  |
| `crown` |  |
| `cry` |  |
| `crying_cat_face` |  |
| `crystal_ball` |  |
| `cuba` |  |
| `cucumber` |  |
| `cup_with_straw` |  |
| `cupcake` |  |
| `cupid` |  |
| `curacao` |  |
| `curling_stone` |  |
| `curly_haired_man` |  |
| `curly_haired_woman` |  |
| `curly_loop` |  |
| `currency_exchange` |  |
| `curry` |  |
| `cursing_face` |  |
| `custard` |  |
| `customs` |  |
| `cut_of_meat` |  |
| `cyclone` |  |
| `cyprus` |  |
| `czech_republic` |  |
| `dagger` |  |
| `dancer` |  |
| `dancers` |  |
| `dancing_men` |  |
| `dancing_women` |  |
| `dango` |  |
| `dark_sunglasses` |  |
| `dart` |  |
| `dash` |  |
| `date` |  |
| `de` |  |
| `deaf_man` |  |
| `deaf_person` |  |
| `deaf_woman` |  |
| `deciduous_tree` |  |
| `deer` |  |
| `denmark` |  |
| `department_store` |  |
| `dependabot` |  |
| `derelict_house` |  |
| `desert` |  |
| `desert_island` |  |
| `desktop_computer` |  |
| `detective` |  |
| `diamond_shape_with_a_dot_inside` |  |
| `diamonds` |  |
| `diego_garcia` |  |
| `disappointed` |  |
| `disappointed_relieved` |  |
| `disguised_face` |  |
| `diving_mask` |  |
| `diya_lamp` |  |
| `dizzy` |  |
| `dizzy_face` |  |
| `djibouti` |  |
| `dna` |  |
| `do_not_litter` |  |
| `dodo` |  |
| `dog` |  |
| `dog2` |  |
| `dollar` |  |
| `dolls` |  |
| `dolphin` |  |
| `dominica` |  |
| `dominican_republic` |  |
| `door` |  |
| `doughnut` |  |
| `dove` |  |
| `dragon` |  |
| `dragon_face` |  |
| `dress` |  |
| `dromedary_camel` |  |
| `drooling_face` |  |
| `drop_of_blood` |  |
| `droplet` |  |
| `drum` |  |
| `duck` |  |
| `dumpling` |  |
| `dvd` |  |
| `eagle` |  |
| `ear` |  |
| `ear_of_rice` |  |
| `ear_with_hearing_aid` |  |
| `earth_africa` |  |
| `earth_americas` |  |
| `earth_asia` |  |
| `ecuador` |  |
| `egg` |  |
| `eggplant` |  |
| `egypt` |  |
| `eight` |  |
| `eight_pointed_black_star` |  |
| `eight_spoked_asterisk` |  |
| `eject_button` |  |
| `el_salvador` |  |
| `electric_plug` |  |
| `electron` |  |
| `elephant` |  |
| `elevator` |  |
| `elf` |  |
| `elf_man` |  |
| `elf_woman` |  |
| `email` |  |
| `end` |  |
| `england` |  |
| `envelope` |  |
| `envelope_with_arrow` |  |
| `equatorial_guinea` |  |
| `eritrea` |  |
| `es` |  |
| `estonia` |  |
| `ethiopia` |  |
| `eu` |  |
| `euro` |  |
| `european_castle` |  |
| `european_post_office` |  |
| `european_union` |  |
| `evergreen_tree` |  |
| `exclamation` |  |
| `exploding_head` |  |
| `expressionless` |  |
| `eye` |  |
| `eye_speech_bubble` |  |
| `eyeglasses` |  |
| `eyes` |  |
| `face_exhaling` |  |
| `face_in_clouds` |  |
| `face_with_head_bandage` |  |
| `face_with_spiral_eyes` |  |
| `face_with_thermometer` |  |
| `facepalm` |  |
| `facepunch` |  |
| `factory` |  |
| `factory_worker` |  |
| `fairy` |  |
| `fairy_man` |  |
| `fairy_woman` |  |
| `falafel` |  |
| `falkland_islands` |  |
| `fallen_leaf` |  |
| `family` |  |
| `family_man_boy` |  |
| `family_man_boy_boy` |  |
| `family_man_girl` |  |
| `family_man_girl_boy` |  |
| `family_man_girl_girl` |  |
| `family_man_man_boy` |  |
| `family_man_man_boy_boy` |  |
| `family_man_man_girl` |  |
| `family_man_man_girl_boy` |  |
| `family_man_man_girl_girl` |  |
| `family_man_woman_boy` |  |
| `family_man_woman_boy_boy` |  |
| `family_man_woman_girl` |  |
| `family_man_woman_girl_boy` |  |
| `family_man_woman_girl_girl` |  |
| `family_woman_boy` |  |
| `family_woman_boy_boy` |  |
| `family_woman_girl` |  |
| `family_woman_girl_boy` |  |
| `family_woman_girl_girl` |  |
| `family_woman_woman_boy` |  |
| `family_woman_woman_boy_boy` |  |
| `family_woman_woman_girl` |  |
| `family_woman_woman_girl_boy` |  |
| `family_woman_woman_girl_girl` |  |
| `farmer` |  |
| `faroe_islands` |  |
| `fast_forward` |  |
| `fax` |  |
| `fearful` |  |
| `feather` |  |
| `feelsgood` |  |
| `feet` |  |
| `female_detective` |  |
| `female_sign` |  |
| `ferris_wheel` |  |
| `ferry` |  |
| `field_hockey` |  |
| `fiji` |  |
| `file_cabinet` |  |
| `file_folder` |  |
| `film_projector` |  |
| `film_strip` |  |
| `finland` |  |
| `finnadie` |  |
| `fire` |  |
| `fire_engine` |  |
| `fire_extinguisher` |  |
| `firecracker` |  |
| `firefighter` |  |
| `fireworks` |  |
| `first_quarter_moon` |  |
| `first_quarter_moon_with_face` |  |
| `fish` |  |
| `fish_cake` |  |
| `fishing_pole_and_fish` |  |
| `fishsticks` |  |
| `fist` |  |
| `fist_left` |  |
| `fist_oncoming` |  |
| `fist_raised` |  |
| `fist_right` |  |
| `five` |  |
| `flags` |  |
| `flamingo` |  |
| `flashlight` |  |
| `flat_shoe` |  |
| `flatbread` |  |
| `fleur_de_lis` |  |
| `flight_arrival` |  |
| `flight_departure` |  |
| `flipper` |  |
| `floppy_disk` |  |
| `flower_playing_cards` |  |
| `flushed` |  |
| `fly` |  |
| `flying_disc` |  |
| `flying_saucer` |  |
| `fog` |  |
| `foggy` |  |
| `fondue` |  |
| `foot` |  |
| `football` |  |
| `footprints` |  |
| `fork_and_knife` |  |
| `fortune_cookie` |  |
| `fountain` |  |
| `fountain_pen` |  |
| `four` |  |
| `four_leaf_clover` |  |
| `fox_face` |  |
| `fr` |  |
| `framed_picture` |  |
| `free` |  |
| `french_guiana` |  |
| `french_polynesia` |  |
| `french_southern_territories` |  |
| `fried_egg` |  |
| `fried_shrimp` |  |
| `fries` |  |
| `frog` |  |
| `frowning` |  |
| `frowning_face` |  |
| `frowning_man` |  |
| `frowning_person` |  |
| `frowning_woman` |  |
| `fu` |  |
| `fuelpump` |  |
| `full_moon` |  |
| `full_moon_with_face` |  |
| `funeral_urn` |  |
| `gabon` |  |
| `gambia` |  |
| `game_die` |  |
| `garlic` |  |
| `gb` |  |
| `gear` |  |
| `gem` |  |
| `gemini` |  |
| `genie` |  |
| `genie_man` |  |
| `genie_woman` |  |
| `georgia` |  |
| `ghana` |  |
| `ghost` |  |
| `gibraltar` |  |
| `gift` |  |
| `gift_heart` |  |
| `giraffe` |  |
| `girl` |  |
| `globe_with_meridians` |  |
| `gloves` |  |
| `goal_net` |  |
| `goat` |  |
| `goberserk` |  |
| `godmode` |  |
| `goggles` |  |
| `golf` |  |
| `golfing` |  |
| `golfing_man` |  |
| `golfing_woman` |  |
| `gorilla` |  |
| `grapes` |  |
| `greece` |  |
| `green_apple` |  |
| `green_book` |  |
| `green_circle` |  |
| `green_heart` |  |
| `green_salad` |  |
| `green_square` |  |
| `greenland` |  |
| `grenada` |  |
| `grey_exclamation` |  |
| `grey_question` |  |
| `grimacing` |  |
| `grin` |  |
| `grinning` |  |
| `guadeloupe` |  |
| `guam` |  |
| `guard` |  |
| `guardsman` |  |
| `guardswoman` |  |
| `guatemala` |  |
| `guernsey` |  |
| `guide_dog` |  |
| `guinea` |  |
| `guinea_bissau` |  |
| `guitar` |  |
| `gun` |  |
| `guyana` |  |
| `haircut` |  |
| `haircut_man` |  |
| `haircut_woman` |  |
| `haiti` |  |
| `hamburger` |  |
| `hammer` |  |
| `hammer_and_pick` |  |
| `hammer_and_wrench` |  |
| `hamster` |  |
| `hand` |  |
| `hand_over_mouth` |  |
| `handbag` |  |
| `handball_person` |  |
| `handshake` |  |
| `hankey` |  |
| `hash` |  |
| `hatched_chick` |  |
| `hatching_chick` |  |
| `headphones` |  |
| `headstone` |  |
| `health_worker` |  |
| `hear_no_evil` |  |
| `heard_mcdonald_islands` |  |
| `heart` |  |
| `heart_decoration` |  |
| `heart_eyes` |  |
| `heart_eyes_cat` |  |
| `heart_on_fire` |  |
| `heartbeat` |  |
| `heartpulse` |  |
| `hearts` |  |
| `heavy_check_mark` |  |
| `heavy_division_sign` |  |
| `heavy_dollar_sign` |  |
| `heavy_exclamation_mark` |  |
| `heavy_heart_exclamation` |  |
| `heavy_minus_sign` |  |
| `heavy_multiplication_x` |  |
| `heavy_plus_sign` |  |
| `hedgehog` |  |
| `helicopter` |  |
| `herb` |  |
| `hibiscus` |  |
| `high_brightness` |  |
| `high_heel` |  |
| `hiking_boot` |  |
| `hindu_temple` |  |
| `hippopotamus` |  |
| `hocho` |  |
| `hole` |  |
| `honduras` |  |
| `honey_pot` |  |
| `honeybee` |  |
| `hong_kong` |  |
| `hook` |  |
| `horse` |  |
| `horse_racing` |  |
| `hospital` |  |
| `hot_face` |  |
| `hot_pepper` |  |
| `hotdog` |  |
| `hotel` |  |
| `hotsprings` |  |
| `hourglass` |  |
| `hourglass_flowing_sand` |  |
| `house` |  |
| `house_with_garden` |  |
| `houses` |  |
| `hugs` |  |
| `hungary` |  |
| `hurtrealbad` |  |
| `hushed` |  |
| `hut` |  |
| `ice_cream` |  |
| `ice_cube` |  |
| `ice_hockey` |  |
| `ice_skate` |  |
| `icecream` |  |
| `iceland` |  |
| `id` |  |
| `ideograph_advantage` |  |
| `imp` |  |
| `inbox_tray` |  |
| `incoming_envelope` |  |
| `india` |  |
| `indonesia` |  |
| `infinity` |  |
| `information_desk_person` |  |
| `information_source` |  |
| `innocent` |  |
| `interrobang` |  |
| `iphone` |  |
| `iran` |  |
| `iraq` |  |
| `ireland` |  |
| `isle_of_man` |  |
| `israel` |  |
| `it` |  |
| `izakaya_lantern` |  |
| `jack_o_lantern` |  |
| `jamaica` |  |
| `japan` |  |
| `japanese_castle` |  |
| `japanese_goblin` |  |
| `japanese_ogre` |  |
| `jeans` |  |
| `jersey` |  |
| `jigsaw` |  |
| `jordan` |  |
| `joy` |  |
| `joy_cat` |  |
| `joystick` |  |
| `jp` |  |
| `judge` |  |
| `juggling_person` |  |
| `kangaroo` |  |
| `kazakhstan` |  |
| `kenya` |  |
| `key` |  |
| `keyboard` |  |
| `keycap_ten` |  |
| `kick_scooter` |  |
| `kimono` |  |
| `kiribati` |  |
| `kiss` |  |
| `kissing` |  |
| `kissing_cat` |  |
| `kissing_closed_eyes` |  |
| `kissing_heart` |  |
| `kissing_smiling_eyes` |  |
| `kite` |  |
| `kiwi_fruit` |  |
| `kneeling_man` |  |
| `kneeling_person` |  |
| `kneeling_woman` |  |
| `knife` |  |
| `knot` |  |
| `koala` |  |
| `koko` |  |
| `kosovo` |  |
| `kr` |  |
| `kuwait` |  |
| `kyrgyzstan` |  |
| `lab_coat` |  |
| `label` |  |
| `lacrosse` |  |
| `ladder` |  |
| `lady_beetle` |  |
| `lantern` |  |
| `laos` |  |
| `large_blue_circle` |  |
| `large_blue_diamond` |  |
| `large_orange_diamond` |  |
| `last_quarter_moon` |  |
| `last_quarter_moon_with_face` |  |
| `latin_cross` |  |
| `latvia` |  |
| `laughing` |  |
| `leafy_green` |  |
| `leaves` |  |
| `lebanon` |  |
| `ledger` |  |
| `left_luggage` |  |
| `left_right_arrow` |  |
| `left_speech_bubble` |  |
| `leftwards_arrow_with_hook` |  |
| `leg` |  |
| `lemon` |  |
| `leo` |  |
| `leopard` |  |
| `lesotho` |  |
| `level_slider` |  |
| `liberia` |  |
| `libra` |  |
| `libya` |  |
| `liechtenstein` |  |
| `light_rail` |  |
| `link` |  |
| `lion` |  |
| `lips` |  |
| `lipstick` |  |
| `lithuania` |  |
| `lizard` |  |
| `llama` |  |
| `lobster` |  |
| `lock` |  |
| `lock_with_ink_pen` |  |
| `lollipop` |  |
| `long_drum` |  |
| `loop` |  |
| `lotion_bottle` |  |
| `lotus_position` |  |
| `lotus_position_man` |  |
| `lotus_position_woman` |  |
| `loud_sound` |  |
| `loudspeaker` |  |
| `love_hotel` |  |
| `love_letter` |  |
| `love_you_gesture` |  |
| `low_brightness` |  |
| `luggage` |  |
| `lungs` |  |
| `luxembourg` |  |
| `lying_face` |  |
| `m` |  |
| `macau` |  |
| `macedonia` |  |
| `madagascar` |  |
| `mag` |  |
| `mag_right` |  |
| `mage` |  |
| `mage_man` |  |
| `mage_woman` |  |
| `magic_wand` |  |
| `magnet` |  |
| `mahjong` |  |
| `mailbox` |  |
| `mailbox_closed` |  |
| `mailbox_with_mail` |  |
| `mailbox_with_no_mail` |  |
| `malawi` |  |
| `malaysia` |  |
| `maldives` |  |
| `male_detective` |  |
| `male_sign` |  |
| `mali` |  |
| `malta` |  |
| `mammoth` |  |
| `man` |  |
| `man_artist` |  |
| `man_astronaut` |  |
| `man_beard` |  |
| `man_cartwheeling` |  |
| `man_cook` |  |
| `man_dancing` |  |
| `man_facepalming` |  |
| `man_factory_worker` |  |
| `man_farmer` |  |
| `man_feeding_baby` |  |
| `man_firefighter` |  |
| `man_health_worker` |  |
| `man_in_manual_wheelchair` |  |
| `man_in_motorized_wheelchair` |  |
| `man_in_tuxedo` |  |
| `man_judge` |  |
| `man_juggling` |  |
| `man_mechanic` |  |
| `man_office_worker` |  |
| `man_pilot` |  |
| `man_playing_handball` |  |
| `man_playing_water_polo` |  |
| `man_scientist` |  |
| `man_shrugging` |  |
| `man_singer` |  |
| `man_student` |  |
| `man_teacher` |  |
| `man_technologist` |  |
| `man_with_gua_pi_mao` |  |
| `man_with_probing_cane` |  |
| `man_with_turban` |  |
| `man_with_veil` |  |
| `mandarin` |  |
| `mango` |  |
| `mans_shoe` |  |
| `mantelpiece_clock` |  |
| `manual_wheelchair` |  |
| `maple_leaf` |  |
| `marshall_islands` |  |
| `martial_arts_uniform` |  |
| `martinique` |  |
| `mask` |  |
| `massage` |  |
| `massage_man` |  |
| `massage_woman` |  |
| `mate` |  |
| `mauritania` |  |
| `mauritius` |  |
| `mayotte` |  |
| `meat_on_bone` |  |
| `mechanic` |  |
| `mechanical_arm` |  |
| `mechanical_leg` |  |
| `medal_military` |  |
| `medal_sports` |  |
| `medical_symbol` |  |
| `mega` |  |
| `melon` |  |
| `memo` |  |
| `men_wrestling` |  |
| `mending_heart` |  |
| `menorah` |  |
| `mens` |  |
| `mermaid` |  |
| `merman` |  |
| `merperson` |  |
| `metal` |  |
| `metro` |  |
| `mexico` |  |
| `microbe` |  |
| `micronesia` |  |
| `microphone` |  |
| `microscope` |  |
| `middle_finger` |  |
| `military_helmet` |  |
| `milk_glass` |  |
| `milky_way` |  |
| `minibus` |  |
| `minidisc` |  |
| `mirror` |  |
| `mobile_phone_off` |  |
| `moldova` |  |
| `monaco` |  |
| `money_mouth_face` |  |
| `money_with_wings` |  |
| `moneybag` |  |
| `mongolia` |  |
| `monkey` |  |
| `monkey_face` |  |
| `monocle_face` |  |
| `monorail` |  |
| `montenegro` |  |
| `montserrat` |  |
| `moon` |  |
| `moon_cake` |  |
| `morocco` |  |
| `mortar_board` |  |
| `mosque` |  |
| `mosquito` |  |
| `motor_boat` |  |
| `motor_scooter` |  |
| `motorcycle` |  |
| `motorized_wheelchair` |  |
| `motorway` |  |
| `mount_fuji` |  |
| `mountain` |  |
| `mountain_bicyclist` |  |
| `mountain_biking_man` |  |
| `mountain_biking_woman` |  |
| `mountain_cableway` |  |
| `mountain_railway` |  |
| `mountain_snow` |  |
| `mouse` |  |
| `mouse2` |  |
| `mouse_trap` |  |
| `movie_camera` |  |
| `moyai` |  |
| `mozambique` |  |
| `mrs_claus` |  |
| `muscle` |  |
| `mushroom` |  |
| `musical_keyboard` |  |
| `musical_note` |  |
| `musical_score` |  |
| `mute` |  |
| `mx_claus` |  |
| `myanmar` |  |
| `nail_care` |  |
| `name_badge` |  |
| `namibia` |  |
| `national_park` |  |
| `nauru` |  |
| `nauseated_face` |  |
| `nazar_amulet` |  |
| `neckbeard` |  |
| `necktie` |  |
| `negative_squared_cross_mark` |  |
| `nepal` |  |
| `nerd_face` |  |
| `nesting_dolls` |  |
| `netherlands` |  |
| `neutral_face` |  |
| `new` |  |
| `new_caledonia` |  |
| `new_moon` |  |
| `new_moon_with_face` |  |
| `new_zealand` |  |
| `newspaper` |  |
| `newspaper_roll` |  |
| `next_track_button` |  |
| `ng` |  |
| `ng_man` |  |
| `ng_woman` |  |
| `nicaragua` |  |
| `niger` |  |
| `nigeria` |  |
| `night_with_stars` |  |
| `nine` |  |
| `ninja` |  |
| `niue` |  |
| `no_bell` |  |
| `no_bicycles` |  |
| `no_entry` |  |
| `no_entry_sign` |  |
| `no_good` |  |
| `no_good_man` |  |
| `no_good_woman` |  |
| `no_mobile_phones` |  |
| `no_mouth` |  |
| `no_pedestrians` |  |
| `no_smoking` |  |
| `nonpotable_water` |  |
| `norfolk_island` |  |
| `north_korea` |  |
| `northern_mariana_islands` |  |
| `norway` |  |
| `nose` |  |
| `notebook` |  |
| `notebook_with_decorative_cover` |  |
| `notes` |  |
| `nut_and_bolt` |  |
| `o` |  |
| `o2` |  |
| `ocean` |  |
| `octocat` |  |
| `octopus` |  |
| `oden` |  |
| `office` |  |
| `office_worker` |  |
| `oil_drum` |  |
| `ok` |  |
| `ok_hand` |  |
| `ok_man` |  |
| `ok_person` |  |
| `ok_woman` |  |
| `old_key` |  |
| `older_adult` |  |
| `older_man` |  |
| `older_woman` |  |
| `olive` |  |
| `om` |  |
| `oman` |  |
| `on` |  |
| `oncoming_automobile` |  |
| `oncoming_bus` |  |
| `oncoming_police_car` |  |
| `oncoming_taxi` |  |
| `one` |  |
| `one_piece_swimsuit` |  |
| `onion` |  |
| `open_book` |  |
| `open_file_folder` |  |
| `open_hands` |  |
| `open_mouth` |  |
| `open_umbrella` |  |
| `ophiuchus` |  |
| `orange` |  |
| `orange_book` |  |
| `orange_circle` |  |
| `orange_heart` |  |
| `orange_square` |  |
| `orangutan` |  |
| `orthodox_cross` |  |
| `otter` |  |
| `outbox_tray` |  |
| `owl` |  |
| `ox` |  |
| `oyster` |  |
| `package` |  |
| `page_facing_up` |  |
| `page_with_curl` |  |
| `pager` |  |
| `paintbrush` |  |
| `pakistan` |  |
| `palau` |  |
| `palestinian_territories` |  |
| `palm_tree` |  |
| `palms_up_together` |  |
| `panama` |  |
| `pancakes` |  |
| `panda_face` |  |
| `paperclip` |  |
| `paperclips` |  |
| `papua_new_guinea` |  |
| `parachute` |  |
| `paraguay` |  |
| `parasol_on_ground` |  |
| `parking` |  |
| `parrot` |  |
| `part_alternation_mark` |  |
| `partly_sunny` |  |
| `partying_face` |  |
| `passenger_ship` |  |
| `passport_control` |  |
| `pause_button` |  |
| `paw_prints` |  |
| `peace_symbol` |  |
| `peach` |  |
| `peacock` |  |
| `peanuts` |  |
| `pear` |  |
| `pen` |  |
| `pencil` |  |
| `pencil2` |  |
| `penguin` |  |
| `pensive` |  |
| `people_holding_hands` |  |
| `people_hugging` |  |
| `performing_arts` |  |
| `persevere` |  |
| `person_bald` |  |
| `person_curly_hair` |  |
| `person_feeding_baby` |  |
| `person_fencing` |  |
| `person_in_manual_wheelchair` |  |
| `person_in_motorized_wheelchair` |  |
| `person_in_tuxedo` |  |
| `person_red_hair` |  |
| `person_white_hair` |  |
| `person_with_probing_cane` |  |
| `person_with_turban` |  |
| `person_with_veil` |  |
| `peru` |  |
| `petri_dish` |  |
| `philippines` |  |
| `phone` |  |
| `pick` |  |
| `pickup_truck` |  |
| `pie` |  |
| `pig` |  |
| `pig2` |  |
| `pig_nose` |  |
| `pill` |  |
| `pilot` |  |
| `pinata` |  |
| `pinched_fingers` |  |
| `pinching_hand` |  |
| `pineapple` |  |
| `ping_pong` |  |
| `pirate_flag` |  |
| `pisces` |  |
| `pitcairn_islands` |  |
| `pizza` |  |
| `placard` |  |
| `place_of_worship` |  |
| `plate_with_cutlery` |  |
| `play_or_pause_button` |  |
| `pleading_face` |  |
| `plunger` |  |
| `point_down` |  |
| `point_left` |  |
| `point_right` |  |
| `point_up` |  |
| `point_up_2` |  |
| `poland` |  |
| `polar_bear` |  |
| `police_car` |  |
| `police_officer` |  |
| `policeman` |  |
| `policewoman` |  |
| `poodle` |  |
| `poop` |  |
| `popcorn` |  |
| `portugal` |  |
| `post_office` |  |
| `postal_horn` |  |
| `postbox` |  |
| `potable_water` |  |
| `potato` |  |
| `potted_plant` |  |
| `pouch` |  |
| `poultry_leg` |  |
| `pound` |  |
| `pout` |  |
| `pouting_cat` |  |
| `pouting_face` |  |
| `pouting_man` |  |
| `pouting_woman` |  |
| `pray` |  |
| `prayer_beads` |  |
| `pregnant_woman` |  |
| `pretzel` |  |
| `previous_track_button` |  |
| `prince` |  |
| `princess` |  |
| `printer` |  |
| `probing_cane` |  |
| `puerto_rico` |  |
| `punch` |  |
| `purple_circle` |  |
| `purple_heart` |  |
| `purple_square` |  |
| `purse` |  |
| `pushpin` |  |
| `put_litter_in_its_place` |  |
| `qatar` |  |
| `question` |  |
| `rabbit` |  |
| `rabbit2` |  |
| `raccoon` |  |
| `racehorse` |  |
| `racing_car` |  |
| `radio` |  |
| `radio_button` |  |
| `radioactive` |  |
| `rage` |  |
| `rage1` |  |
| `rage2` |  |
| `rage3` |  |
| `rage4` |  |
| `railway_car` |  |
| `railway_track` |  |
| `rainbow` |  |
| `rainbow_flag` |  |
| `raised_back_of_hand` |  |
| `raised_eyebrow` |  |
| `raised_hand` |  |
| `raised_hand_with_fingers_splayed` |  |
| `raised_hands` |  |
| `raising_hand` |  |
| `raising_hand_man` |  |
| `raising_hand_woman` |  |
| `ram` |  |
| `ramen` |  |
| `rat` |  |
| `razor` |  |
| `receipt` |  |
| `record_button` |  |
| `recycle` |  |
| `red_car` |  |
| `red_circle` |  |
| `red_envelope` |  |
| `red_haired_man` |  |
| `red_haired_woman` |  |
| `red_square` |  |
| `registered` |  |
| `relaxed` |  |
| `relieved` |  |
| `reminder_ribbon` |  |
| `repeat` |  |
| `repeat_one` |  |
| `rescue_worker_helmet` |  |
| `restroom` |  |
| `reunion` |  |
| `revolving_hearts` |  |
| `rewind` |  |
| `rhinoceros` |  |
| `ribbon` |  |
| `rice` |  |
| `rice_ball` |  |
| `rice_cracker` |  |
| `rice_scene` |  |
| `right_anger_bubble` |  |
| `ring` |  |
| `ringed_planet` |  |
| `robot` |  |
| `rock` |  |
| `rocket` |  |
| `rofl` |  |
| `roll_eyes` |  |
| `roll_of_paper` |  |
| `roller_coaster` |  |
| `roller_skate` |  |
| `romania` |  |
| `rooster` |  |
| `rose` |  |
| `rosette` |  |
| `rotating_light` |  |
| `round_pushpin` |  |
| `rowboat` |  |
| `rowing_man` |  |
| `rowing_woman` |  |
| `ru` |  |
| `rugby_football` |  |
| `runner` |  |
| `running` |  |
| `running_man` |  |
| `running_shirt_with_sash` |  |
| `running_woman` |  |
| `rwanda` |  |
| `sa` |  |
| `safety_pin` |  |
| `safety_vest` |  |
| `sagittarius` |  |
| `sailboat` |  |
| `sake` |  |
| `salt` |  |
| `samoa` |  |
| `san_marino` |  |
| `sandal` |  |
| `sandwich` |  |
| `santa` |  |
| `sao_tome_principe` |  |
| `sari` |  |
| `sassy_man` |  |
| `sassy_woman` |  |
| `satellite` |  |
| `satisfied` |  |
| `saudi_arabia` |  |
| `sauna_man` |  |
| `sauna_person` |  |
| `sauna_woman` |  |
| `sauropod` |  |
| `saxophone` |  |
| `scarf` |  |
| `school` |  |
| `school_satchel` |  |
| `scientist` |  |
| `scissors` |  |
| `scorpion` |  |
| `scorpius` |  |
| `scotland` |  |
| `scream` |  |
| `scream_cat` |  |
| `screwdriver` |  |
| `scroll` |  |
| `seal` |  |
| `seat` |  |
| `secret` |  |
| `see_no_evil` |  |
| `seedling` |  |
| `selfie` |  |
| `senegal` |  |
| `serbia` |  |
| `service_dog` |  |
| `seven` |  |
| `sewing_needle` |  |
| `seychelles` |  |
| `shallow_pan_of_food` |  |
| `shamrock` |  |
| `shark` |  |
| `shaved_ice` |  |
| `sheep` |  |
| `shell` |  |
| `shield` |  |
| `shinto_shrine` |  |
| `ship` |  |
| `shipit` |  |
| `shirt` |  |
| `shoe` |  |
| `shopping` |  |
| `shopping_cart` |  |
| `shorts` |  |
| `shower` |  |
| `shrimp` |  |
| `shrug` |  |
| `shushing_face` |  |
| `sierra_leone` |  |
| `signal_strength` |  |
| `singapore` |  |
| `singer` |  |
| `sint_maarten` |  |
| `six` |  |
| `six_pointed_star` |  |
| `skateboard` |  |
| `ski` |  |
| `skier` |  |
| `skull` |  |
| `skull_and_crossbones` |  |
| `skunk` |  |
| `sled` |  |
| `sleeping` |  |
| `sleeping_bed` |  |
| `sleepy` |  |
| `slightly_frowning_face` |  |
| `slightly_smiling_face` |  |
| `slot_machine` |  |
| `sloth` |  |
| `slovakia` |  |
| `slovenia` |  |
| `small_airplane` |  |
| `small_blue_diamond` |  |
| `small_orange_diamond` |  |
| `small_red_triangle` |  |
| `small_red_triangle_down` |  |
| `smile` |  |
| `smile_cat` |  |
| `smiley` |  |
| `smiley_cat` |  |
| `smiling_face_with_tear` |  |
| `smiling_face_with_three_hearts` |  |
| `smiling_imp` |  |
| `smirk` |  |
| `smirk_cat` |  |
| `smoking` |  |
| `snail` |  |
| `snake` |  |
| `sneezing_face` |  |
| `snowboarder` |  |
| `snowflake` |  |
| `snowman` |  |
| `snowman_with_snow` |  |
| `soap` |  |
| `sob` |  |
| `soccer` |  |
| `socks` |  |
| `softball` |  |
| `solomon_islands` |  |
| `somalia` |  |
| `soon` |  |
| `sos` |  |
| `sound` |  |
| `south_africa` |  |
| `south_georgia_south_sandwich_islands` |  |
| `south_sudan` |  |
| `space_invader` |  |
| `spades` |  |
| `spaghetti` |  |
| `sparkle` |  |
| `sparkler` |  |
| `sparkles` |  |
| `sparkling_heart` |  |
| `speak_no_evil` |  |
| `speaker` |  |
| `speaking_head` |  |
| `speech_balloon` |  |
| `speedboat` |  |
| `spider` |  |
| `spider_web` |  |
| `spiral_calendar` |  |
| `spiral_notepad` |  |
| `sponge` |  |
| `spoon` |  |
| `squid` |  |
| `sri_lanka` |  |
| `st_barthelemy` |  |
| `st_helena` |  |
| `st_kitts_nevis` |  |
| `st_lucia` |  |
| `st_martin` |  |
| `st_pierre_miquelon` |  |
| `st_vincent_grenadines` |  |
| `stadium` |  |
| `standing_man` |  |
| `standing_person` |  |
| `standing_woman` |  |
| `star` |  |
| `star2` |  |
| `star_and_crescent` |  |
| `star_of_david` |  |
| `star_struck` |  |
| `stars` |  |
| `station` |  |
| `statue_of_liberty` |  |
| `steam_locomotive` |  |
| `stethoscope` |  |
| `stew` |  |
| `stop_button` |  |
| `stop_sign` |  |
| `stopwatch` |  |
| `straight_ruler` |  |
| `strawberry` |  |
| `stuck_out_tongue` |  |
| `stuck_out_tongue_closed_eyes` |  |
| `stuck_out_tongue_winking_eye` |  |
| `student` |  |
| `studio_microphone` |  |
| `stuffed_flatbread` |  |
| `sudan` |  |
| `sun_behind_large_cloud` |  |
| `sun_behind_rain_cloud` |  |
| `sun_behind_small_cloud` |  |
| `sun_with_face` |  |
| `sunflower` |  |
| `sunglasses` |  |
| `sunny` |  |
| `sunrise` |  |
| `sunrise_over_mountains` |  |
| `superhero` |  |
| `superhero_man` |  |
| `superhero_woman` |  |
| `supervillain` |  |
| `supervillain_man` |  |
| `supervillain_woman` |  |
| `surfer` |  |
| `surfing_man` |  |
| `surfing_woman` |  |
| `suriname` |  |
| `sushi` |  |
| `suspect` |  |
| `suspension_railway` |  |
| `svalbard_jan_mayen` |  |
| `swan` |  |
| `swaziland` |  |
| `sweat` |  |
| `sweat_drops` |  |
| `sweat_smile` |  |
| `sweden` |  |
| `sweet_potato` |  |
| `swim_brief` |  |
| `swimmer` |  |
| `swimming_man` |  |
| `swimming_woman` |  |
| `switzerland` |  |
| `symbols` |  |
| `synagogue` |  |
| `syria` |  |
| `syringe` |  |
| `taco` |  |
| `tada` |  |
| `taiwan` |  |
| `tajikistan` |  |
| `takeout_box` |  |
| `tamale` |  |
| `tanabata_tree` |  |
| `tangerine` |  |
| `tanzania` |  |
| `taurus` |  |
| `taxi` |  |
| `tea` |  |
| `teacher` |  |
| `teapot` |  |
| `technologist` |  |
| `teddy_bear` |  |
| `telephone` |  |
| `telephone_receiver` |  |
| `telescope` |  |
| `tennis` |  |
| `tent` |  |
| `test_tube` |  |
| `thailand` |  |
| `thermometer` |  |
| `thinking` |  |
| `thong_sandal` |  |
| `thought_balloon` |  |
| `thread` |  |
| `three` |  |
| `thumbsdown` |  |
| `thumbsup` |  |
| `ticket` |  |
| `tickets` |  |
| `tiger` |  |
| `tiger2` |  |
| `timer_clock` |  |
| `timor_leste` |  |
| `tipping_hand_man` |  |
| `tipping_hand_person` |  |
| `tipping_hand_woman` |  |
| `tired_face` |  |
| `tm` |  |
| `togo` |  |
| `toilet` |  |
| `tokelau` |  |
| `tokyo_tower` |  |
| `tomato` |  |
| `tonga` |  |
| `tongue` |  |
| `toolbox` |  |
| `tooth` |  |
| `toothbrush` |  |
| `top` |  |
| `tophat` |  |
| `tornado` |  |
| `tr` |  |
| `trackball` |  |
| `tractor` |  |
| `traffic_light` |  |
| `train` |  |
| `train2` |  |
| `tram` |  |
| `transgender_flag` |  |
| `transgender_symbol` |  |
| `trex` |  |
| `triangular_flag_on_post` |  |
| `triangular_ruler` |  |
| `trident` |  |
| `trinidad_tobago` |  |
| `tristan_da_cunha` |  |
| `triumph` |  |
| `trolleybus` |  |
| `trollface` |  |
| `trophy` |  |
| `tropical_drink` |  |
| `tropical_fish` |  |
| `truck` |  |
| `trumpet` |  |
| `tshirt` |  |
| `tulip` |  |
| `tumbler_glass` |  |
| `tunisia` |  |
| `turkey` |  |
| `turkmenistan` |  |
| `turks_caicos_islands` |  |
| `turtle` |  |
| `tuvalu` |  |
| `tv` |  |
| `twisted_rightwards_arrows` |  |
| `two` |  |
| `two_hearts` |  |
| `two_men_holding_hands` |  |
| `two_women_holding_hands` |  |
| `u5272` |  |
| `u5408` |  |
| `u55b6` |  |
| `u6307` |  |
| `u6708` |  |
| `u6709` |  |
| `u6e80` |  |
| `u7121` |  |
| `u7533` |  |
| `u7981` |  |
| `u7a7a` |  |
| `uganda` |  |
| `uk` |  |
| `ukraine` |  |
| `umbrella` |  |
| `unamused` |  |
| `underage` |  |
| `unicorn` |  |
| `united_arab_emirates` |  |
| `united_nations` |  |
| `unlock` |  |
| `up` |  |
| `upside_down_face` |  |
| `uruguay` |  |
| `us` |  |
| `us_outlying_islands` |  |
| `us_virgin_islands` |  |
| `uzbekistan` |  |
| `v` |  |
| `vampire` |  |
| `vampire_man` |  |
| `vampire_woman` |  |
| `vanuatu` |  |
| `vatican_city` |  |
| `venezuela` |  |
| `vertical_traffic_light` |  |
| `vhs` |  |
| `vibration_mode` |  |
| `video_camera` |  |
| `video_game` |  |
| `vietnam` |  |
| `violin` |  |
| `virgo` |  |
| `volcano` |  |
| `volleyball` |  |
| `vomiting_face` |  |
| `vs` |  |
| `vulcan_salute` |  |
| `waffle` |  |
| `wales` |  |
| `walking` |  |
| `walking_man` |  |
| `walking_woman` |  |
| `wallis_futuna` |  |
| `waning_crescent_moon` |  |
| `waning_gibbous_moon` |  |
| `warning` |  |
| `wastebasket` |  |
| `watch` |  |
| `water_buffalo` |  |
| `water_polo` |  |
| `watermelon` |  |
| `wave` |  |
| `wavy_dash` |  |
| `waxing_crescent_moon` |  |
| `waxing_gibbous_moon` |  |
| `wc` |  |
| `weary` |  |
| `wedding` |  |
| `weight_lifting` |  |
| `weight_lifting_man` |  |
| `weight_lifting_woman` |  |
| `western_sahara` |  |
| `whale` |  |
| `whale2` |  |
| `wheel_of_dharma` |  |
| `wheelchair` |  |
| `white_check_mark` |  |
| `white_circle` |  |
| `white_flag` |  |
| `white_flower` |  |
| `white_haired_man` |  |
| `white_haired_woman` |  |
| `white_heart` |  |
| `white_large_square` |  |
| `white_medium_small_square` |  |
| `white_medium_square` |  |
| `white_small_square` |  |
| `white_square_button` |  |
| `wilted_flower` |  |
| `wind_chime` |  |
| `wind_face` |  |
| `window` |  |
| `wine_glass` |  |
| `wink` |  |
| `wolf` |  |
| `woman` |  |
| `woman_artist` |  |
| `woman_astronaut` |  |
| `woman_beard` |  |
| `woman_cartwheeling` |  |
| `woman_cook` |  |
| `woman_dancing` |  |
| `woman_facepalming` |  |
| `woman_factory_worker` |  |
| `woman_farmer` |  |
| `woman_feeding_baby` |  |
| `woman_firefighter` |  |
| `woman_health_worker` |  |
| `woman_in_manual_wheelchair` |  |
| `woman_in_motorized_wheelchair` |  |
| `woman_in_tuxedo` |  |
| `woman_judge` |  |
| `woman_juggling` |  |
| `woman_mechanic` |  |
| `woman_office_worker` |  |
| `woman_pilot` |  |
| `woman_playing_handball` |  |
| `woman_playing_water_polo` |  |
| `woman_scientist` |  |
| `woman_shrugging` |  |
| `woman_singer` |  |
| `woman_student` |  |
| `woman_teacher` |  |
| `woman_technologist` |  |
| `woman_with_headscarf` |  |
| `woman_with_probing_cane` |  |
| `woman_with_turban` |  |
| `woman_with_veil` |  |
| `womans_clothes` |  |
| `womans_hat` |  |
| `women_wrestling` |  |
| `womens` |  |
| `wood` |  |
| `woozy_face` |  |
| `world_map` |  |
| `worm` |  |
| `worried` |  |
| `wrench` |  |
| `wrestling` |  |
| `writing_hand` |  |
| `x` |  |
| `yarn` |  |
| `yawning_face` |  |
| `yellow_circle` |  |
| `yellow_heart` |  |
| `yellow_square` |  |
| `yemen` |  |
| `yen` |  |
| `yin_yang` |  |
| `yo_yo` |  |
| `yum` |  |
| `zambia` |  |
| `zany_face` |  |
| `zap` |  |
| `zebra` |  |
| `zero` |  |
| `zimbabwe` |  |
| `zipper_mouth_face` |  |
| `zombie` |  |
| `zombie_man` |  |
| `zombie_woman` |  |
| `zzz` |  |

Operations: Load.

API path: `/emojis`

#### EmptyObject

| Field | Description |
| --- | --- |
| `attestations` |  |
| `enable_debug_logging` | Whether to enable debug logging for the re-run. |
| `encrypted_value` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | Array of unique strings. |
| `key_id` | ID of the key you used to encrypt the secret. |
| `languages` | CodeQL languages to be analyzed. |
| `name` | The name of the variable. |
| `query_suite` | CodeQL query suite to be used. |
| `runner_label` | Runner label to be used if the runner type is labeled. |
| `runner_type` | Runner type to be used. |
| `selected_repository_ids` | An array of repository ids that can access the organization variable. |
| `state` | The desired state of code scanning default setup. |
| `threat_model` | Threat model to be used for code scanning analysis. |
| `use_default` | Whether to use the default template or not. |
| `value` | The value of the variable. |
| `visibility` | The type of repositories in the organization that can access the variable. |

Operations: Create, Load, Patch, Update.

API path: `/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`

#### EnterpriseTeam

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` | A description of the team. |
| `group_id` | The ID of the IdP group to assign team membership with. |
| `group_name` | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` |  |
| `id` |  |
| `members_url` |  |
| `name` | The name of the team. |
| `organization_selection_type` |  |
| `slug` |  |
| `sync_to_organizations` | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/enterprises/{enterprise}/teams`

#### EnterpriseTeamMembership

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}`

#### Environment

| Field | Description |
| --- | --- |
| `created_at` | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | The type of deployment branch policy for this environment. |
| `html_url` |  |
| `id` | The id of the environment. |
| `name` | The name of the environment. |
| `node_id` |  |
| `prevent_self_review` | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | Built-in deployment protection rules for the environment. |
| `reviewers` | The people or teams that may review jobs that reference the environment. |
| `updated_at` | The time that the environment was last updated, in ISO 8601 format. |
| `url` |  |
| `wait_timer` | The amount of time to delay a job after the job is initially triggered. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}`

#### EnvironmentApproval

| Field | Description |
| --- | --- |
| `comment` | The comment submitted with the deployment review |
| `environments` | The list of environments that were approved or rejected |
| `state` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | A GitHub user. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/approvals`

#### Event

| Field | Description |
| --- | --- |
| `actor` | Actor |
| `created_at` |  |
| `id` |  |
| `org` | Actor |
| `payload` |  |
| `public` |  |
| `repo` |  |
| `type` |  |

Operations: List, Load.

API path: `/networks/{owner}/{repo}/events`

#### Feed

| Field | Description |
| --- | --- |
| `current_user_actor_url` |  |
| `current_user_organization_url` |  |
| `current_user_organization_urls` |  |
| `current_user_public_url` |  |
| `current_user_url` |  |
| `links` |  |
| `repository_discussions_category_url` | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | A feed of discussions for a given repository. |
| `security_advisories_url` |  |
| `timeline_url` |  |
| `user_url` |  |

Operations: List.

API path: `/feeds`

#### FileCommit

| Field | Description |
| --- | --- |
| `author` | The author of the file. |
| `branch` | The branch name. |
| `commit` |  |
| `committer` | The person that committed the file. |
| `content` | The new file content, using Base64 encoding. |
| `message` | The commit message. |
| `sha` | **Required if you are updating a file**. |

Operations: Remove, Update.

API path: `/repos/{owner}/{repo}/contents/{path}`

#### Follower

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/users/{username}/followers`

#### Following

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/users/{username}/following`

#### FullRepository

| Field | Description |
| --- | --- |
| `allow_auto_merge` | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `allow_forking` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `allow_rebase_merge` | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `allow_squash_merge` | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `allow_update_branch` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | Whether anonymous git access is allowed. |
| `archive_url` |  |
| `archived` | Whether to archive this repository. |
| `assignees_url` |  |
| `auto_init` | Pass `true` to create an initial commit with empty README. |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code of Conduct Simple |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` |  |
| `description` | A short description of the new repository. |
| `disabled` | Returns whether or not this repository disabled. |
| `downloads_url` |  |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `github_id` |  |
| `gitignore_template` | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` |  |
| `has_projects` | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | A URL with more information about the repository. |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `include_all_branches` | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` | License Simple |
| `license_template` | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` |  |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the new repository. |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `organization` | A GitHub user. |
| `owner` | A GitHub user. |
| `parent` | A repository on GitHub. |
| `permissions` |  |
| `private` | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `security_and_analysis` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | The size of the repository, in kilobytes. |
| `source` | A repository on GitHub. |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `team_id` | The id of the team that will be granted access to this repository. |
| `teams_url` |  |
| `temp_clone_token` |  |
| `template_repository` | A repository on GitHub. |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `use_squash_pr_title_as_default` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

Operations: Create, Load, Update.

API path: `/repos/{template_owner}/{template_repo}/generate`

#### Gist

| Field | Description |
| --- | --- |
| `comments` |  |
| `comments_enabled` |  |
| `comments_url` |  |
| `commits_url` |  |
| `created_at` |  |
| `description` | Description of the gist |
| `files` | Names and content for the files that make up the gist |
| `fork_of` | Gist |
| `forks` |  |
| `forks_url` |  |
| `git_pull_url` |  |
| `git_push_url` |  |
| `history` |  |
| `html_url` |  |
| `id` |  |
| `node_id` |  |
| `owner` | A GitHub user. |
| `public` |  |
| `truncated` |  |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/gists`

#### GistComment

| Field | Description |
| --- | --- |
| `author_association` | How the author is associated with the repository. |
| `avatar_url` |  |
| `body` | The comment text. |
| `created_at` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |
| `user_view_type` |  |

Operations: Create, List, Load, Update.

API path: `/gists/{gist_id}/comments`

#### GistCommit

| Field | Description |
| --- | --- |
| `change_status` |  |
| `committed_at` |  |
| `id` |  |
| `url` |  |
| `user` | A GitHub user. |
| `version` |  |

Operations: List.

API path: `/gists/{gist_id}/commits`

#### GistSimple

| Field | Description |
| --- | --- |
| `comments` |  |
| `comments_enabled` |  |
| `comments_url` |  |
| `commits_url` |  |
| `created_at` |  |
| `description` |  |
| `files` |  |
| `fork_of` | Gist |
| `forks` |  |
| `forks_url` |  |
| `git_pull_url` |  |
| `git_push_url` |  |
| `history` |  |
| `html_url` |  |
| `id` |  |
| `node_id` |  |
| `owner` | A GitHub user. |
| `public` |  |
| `truncated` |  |
| `updated_at` |  |
| `url` |  |
| `user` |  |

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
| `author` | Identifying information for the git-user |
| `committer` | Identifying information for the git-user |
| `html_url` |  |
| `id` |  |
| `message` | Message describing the purpose of the commit |
| `node_id` |  |
| `parents` | The full SHAs of the commits that were the parents of this commit. |
| `sha` | SHA for the commit |
| `signature` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | The SHA of the tree object this commit points to |
| `url` |  |
| `verification` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/git/commits`

#### GitRef

| Field | Description |
| --- | --- |
| `force` | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` |  |
| `node_id` |  |
| `object` |  |
| `ref` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | SHA for the reference |
| `type` |  |
| `url` |  |

Operations: Create, Load, Update.

API path: `/repos/{owner}/{repo}/git/refs`

#### GitTag

| Field | Description |
| --- | --- |
| `id` |  |
| `message` | Message describing the purpose of the tag |
| `node_id` |  |
| `object` | The SHA of the git object this is tagging. |
| `sha` |  |
| `tag` | Name of the tag |
| `tagger` | An object with information about the individual creating the tag. |
| `type` | The type of the object we're tagging. |
| `url` | URL for the tag |
| `verification` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/git/tags`

#### GitTree

| Field | Description |
| --- | --- |
| `base_tree` | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` |  |
| `sha` |  |
| `tree` | Objects specifying a tree structure |
| `truncated` |  |
| `url` |  |

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
| `id` |  |
| `name` |  |
| `source` |  |

Operations: Load.

API path: `/gitignore/templates/{name}`

#### GlobalAdvisory

| Field | Description |
| --- | --- |
| `credits` | The users who contributed to the advisory. |
| `cve_id` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` |  |
| `cvss_severities` |  |
| `cwes` |  |
| `description` | A detailed description of what the advisory entails. |
| `epss` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | The GitHub Security Advisory ID. |
| `github_reviewed_at` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | The URL for the advisory. |
| `id` |  |
| `identifiers` |  |
| `nvd_published_at` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` |  |
| `repository_advisory_url` | The API URL for the repository advisory. |
| `severity` | The severity of the advisory. |
| `source_code_location` | The URL of the advisory's source code. |
| `summary` | A short summary of the advisory. |
| `type` | The type of advisory. |
| `updated_at` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | The API URL for the advisory. |
| `vulnerabilities` | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

Operations: List, Load.

API path: `/advisories`

#### GpgKey

| Field | Description |
| --- | --- |
| `armored_public_key` | A GPG key in ASCII-armored format. |
| `can_certify` |  |
| `can_encrypt_comms` |  |
| `can_encrypt_storage` |  |
| `can_sign` |  |
| `created_at` |  |
| `emails` |  |
| `expires_at` |  |
| `id` |  |
| `key_id` |  |
| `name` | A descriptive name for the new key. |
| `primary_key_id` |  |
| `public_key` |  |
| `raw_key` |  |
| `revoked` |  |
| `subkeys` |  |

Operations: Create, List, Load.

API path: `/user/gpg_keys`

#### Hook

| Field | Description |
| --- | --- |
| `active` | Determines whether the hook is actually triggered on pushes. |
| `add_events` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | Configuration object of the webhook |
| `created_at` |  |
| `deliveries_url` |  |
| `events` | Determines what events the hook is triggered for. |
| `id` | Unique identifier of the webhook. |
| `last_response` |  |
| `name` | The name of a valid service, use 'web' for a webhook. |
| `ping_url` |  |
| `remove_events` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/hooks`

#### HookDelivery

| Field | Description |
| --- | --- |
| `action` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | Time when the delivery was delivered. |
| `duration` | Time spent delivering. |
| `event` | The event that triggered the delivery. |
| `guid` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | Unique identifier of the delivery. |
| `installation_id` | The id of the GitHub App installation associated with this event. |
| `redelivery` | Whether the delivery is a redelivery. |
| `repository_id` | The id of the repository associated with this event. |
| `request` |  |
| `response` |  |
| `status` | Description of the status of the attempted delivery |
| `status_code` | Status code received when delivery was made. |
| `throttled_at` | Time when the webhook delivery was throttled. |
| `url` | The URL target of the delivery. |

Operations: Load.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`

#### HookDeliveryItem

| Field | Description |
| --- | --- |
| `action` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | Time when the webhook delivery occurred. |
| `duration` | Time spent delivering. |
| `event` | The event that triggered the delivery. |
| `guid` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | Unique identifier of the webhook delivery. |
| `installation_id` | The id of the GitHub App installation associated with this event. |
| `redelivery` | Whether the webhook delivery is a redelivery. |
| `repository_id` | The id of the repository associated with this event. |
| `status` | Describes the response returned after attempting the delivery. |
| `status_code` | Status code received when delivery was made. |
| `throttled_at` | Time when the webhook delivery was throttled. |

Operations: List.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries`

#### HostedCompute

| Field | Description |
| --- | --- |
| `compute_service` | The hosted compute service the network configuration supports. |
| `created_on` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | The unique identifier of the network configuration. |
| `name` | The name of the network configuration. |
| `network_settings_ids` | The unique identifier of each network settings in the configuration. |

Operations: List, Remove.

API path: `/orgs/{org}/settings/network-configurations`

#### Hovercard

| Field | Description |
| --- | --- |
| `message` |  |
| `octicon` |  |

Operations: List.

API path: `/users/{username}/hovercard`

#### Import

| Field | Description |
| --- | --- |
| `authors_count` |  |
| `authors_url` |  |
| `commit_count` |  |
| `error_message` |  |
| `failed_step` |  |
| `has_large_files` |  |
| `html_url` |  |
| `human_name` |  |
| `import_percent` |  |
| `large_files_count` |  |
| `large_files_size` |  |
| `message` |  |
| `project_choices` |  |
| `push_percent` |  |
| `repository_url` |  |
| `status` |  |
| `status_text` |  |
| `svc_root` |  |
| `svn_root` |  |
| `tfvc_project` | For a tfvc import, the name of the project that is being imported. |
| `url` |  |
| `use_lfs` | Whether to store large files during the import. |
| `vcs` | The originating VCS type. |
| `vcs_password` | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | The URL of the originating repository. |
| `vcs_username` | If authentication is required, the username to provide to `vcs_url`. |

Operations: List, Patch, Update.

API path: `/repos/{owner}/{repo}/import`

#### Installation

| Field | Description |
| --- | --- |
| `access_tokens_url` |  |
| `account` |  |
| `app_id` |  |
| `app_slug` |  |
| `client_id` |  |
| `contact_email` |  |
| `created_at` |  |
| `events` |  |
| `has_multiple_single_files` |  |
| `html_url` |  |
| `id` | The ID of the installation. |
| `permissions` | The permissions granted to the user access token. |
| `repositories_url` |  |
| `repository_selection` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` |  |
| `single_file_paths` |  |
| `suspended_at` |  |
| `suspended_by` | A GitHub user. |
| `target_id` | The ID of the user or organization this token is being scoped to. |
| `target_type` |  |
| `updated_at` |  |

Operations: List, Load, Remove, Update.

API path: `/app/installations`

#### InstallationToken

| Field | Description |
| --- | --- |
| `id` |  |
| `permissions` | The permissions granted to the user access token. |
| `repositories` | List of repository names that the token should have access to |
| `repository_ids` | List of repository IDs that the token should have access to |

Operations: Create.

API path: `/app/installations/{installation_id}/access_tokens`

#### Integration

| Field | Description |
| --- | --- |
| `apps` | The GitHub Apps that have push access to this branch. |
| `client_id` |  |
| `created_at` |  |
| `description` |  |
| `events` | The list of events for the GitHub app. |
| `external_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the GitHub app |
| `installations_count` | The number of installations associated with the GitHub app. |
| `name` | The name of the GitHub app |
| `node_id` |  |
| `owner` |  |
| `permissions` | The set of permissions for the GitHub app |
| `slug` | The slug name of the GitHub app |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`

#### IntegrationInstallation

| Field | Description |
| --- | --- |
| `account` |  |
| `created_at` |  |
| `id` | Unique identifier of the request installation. |
| `node_id` |  |
| `requester` | A GitHub user. |

Operations: List.

API path: `/app/installation-requests`

#### Interaction

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `limit` |  |
| `origin` |  |

Operations: Load, Remove.

API path: `/repos/{owner}/{repo}/interaction-limits`

#### InteractionLimit

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `expiry` | The duration of the interaction restriction. |
| `limit` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` |  |

Operations: Update.

API path: `/repos/{owner}/{repo}/interaction-limits`

#### Issue

| Field | Description |
| --- | --- |
| `active_lock_reason` |  |
| `actor` | A GitHub user. |
| `after_id` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | A GitHub user. |
| `assignees` | Usernames of people to assign this issue to. |
| `assigner` | A GitHub user. |
| `author_association` | How the author is associated with the repository. |
| `before_id` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | Contents of the issue comment |
| `body_html` |  |
| `body_text` |  |
| `closed_at` |  |
| `closed_by` | A GitHub user. |
| `color` | 6-character hex code, without the leading #, identifying the color |
| `comments` |  |
| `comments_url` |  |
| `commit_id` |  |
| `commit_url` |  |
| `created_at` |  |
| `default` | Whether this label comes by default in a new repository. |
| `description` | Optional description of the label, such as its purpose. |
| `dismissed_review` |  |
| `draft` |  |
| `event` |  |
| `events_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the issue comment |
| `issue` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` |  |
| `issue_field_values` |  |
| `issue_id` | The id of the issue that blocks the current issue |
| `issue_url` |  |
| `label` | Issue Event Label |
| `labels` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` |  |
| `lock_reason` | The reason for locking the issue or pull request conversation. |
| `locked` |  |
| `milestone` | Issue Event Milestone |
| `name` | The name of the label. |
| `node_id` |  |
| `number` | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | GitHub apps are a new way to extend GitHub. |
| `project_card` | Issue Event Project Card |
| `pull_request` |  |
| `reactions` |  |
| `rename` | Issue Event Rename |
| `replace_parent` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | A repository on GitHub. |
| `repository_url` |  |
| `requested_reviewer` | A GitHub user. |
| `requested_team` | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | A GitHub user. |
| `state` | State of the issue; either 'open' or 'closed' |
| `state_reason` | The reason for the current state |
| `sub_issue_id` | The id of the sub-issue to add. |
| `sub_issues_summary` |  |
| `timeline_url` |  |
| `title` | Title of the issue |
| `type` | The type of issue. |
| `updated_at` |  |
| `url` | URL for the issue comment |
| `user` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/issues/{issue_number}/assignees`

#### IssueType

| Field | Description |
| --- | --- |
| `color` | The color of the issue type. |
| `created_at` | The time the issue type created. |
| `description` | The description of the issue type. |
| `id` | The unique identifier of the issue type. |
| `is_enabled` | The enabled state of the issue type. |
| `name` | The name of the issue type. |
| `node_id` | The node identifier of the issue type. |
| `updated_at` | The time the issue type last updated. |

Operations: Create, List, Update.

API path: `/orgs/{org}/issue-types`

#### Job

| Field | Description |
| --- | --- |
| `check_run_url` |  |
| `completed_at` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | The outcome of the job. |
| `created_at` | The time that the job created, in ISO 8601 format. |
| `head_branch` | The name of the current branch. |
| `head_sha` | The SHA of the commit that is being run. |
| `html_url` |  |
| `id` | The id of the job. |
| `labels` | Labels for the workflow job. |
| `name` | The name of the job. |
| `node_id` |  |
| `run_attempt` | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | The id of the associated workflow run. |
| `run_url` |  |
| `runner_group_id` | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | The name of the runner group to which this job has been assigned. |
| `runner_id` | The ID of the runner to which this job has been assigned. |
| `runner_name` | The name of the runner to which this job has been assigned. |
| `started_at` | The time that the job started, in ISO 8601 format. |
| `status` | The phase of the lifecycle that the job is currently in. |
| `steps` | Steps in this job. |
| `url` |  |
| `workflow_name` | The name of the workflow. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/jobs/{job_id}`

#### Key

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` | The public SSH key to add to your GitHub account. |
| `last_used` |  |
| `read_only` |  |
| `title` | A descriptive name for the new key. |
| `url` |  |
| `verified` |  |

Operations: Create, List, Load.

API path: `/user/keys`

#### Label

| Field | Description |
| --- | --- |
| `color` | 6-character hex code, without the leading #, identifying the color |
| `default` | Whether this label comes by default in a new repository. |
| `description` | Optional description of the label, such as its purpose. |
| `id` | Unique identifier for the label. |
| `name` | The name of the label. |
| `new_name` | The new name of the label. |
| `node_id` |  |
| `url` | URL for the label |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/labels`

#### Language

| Field | Description |
| --- | --- |
| `C` |  |
| `Python` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/languages`

#### License

| Field | Description |
| --- | --- |
| `body` |  |
| `conditions` |  |
| `content` |  |
| `description` |  |
| `download_url` |  |
| `encoding` |  |
| `featured` |  |
| `git_url` |  |
| `html_url` |  |
| `id` |  |
| `implementation` |  |
| `key` |  |
| `license` | License Simple |
| `limitations` |  |
| `links` |  |
| `name` |  |
| `node_id` |  |
| `path` |  |
| `permissions` |  |
| `sha` |  |
| `size` |  |
| `spdx_id` |  |
| `type` |  |
| `url` |  |

Operations: List, Load.

API path: `/licenses`

#### Markdown

| Field | Description |
| --- | --- |
| `context` | The repository context to use when creating references in `gfm` mode. |
| `mode` | The rendering mode. |
| `text` | The Markdown text to render in HTML. |

Operations: Create.

API path: `/markdown`

#### MarketplaceListingPlan

| Field | Description |
| --- | --- |
| `accounts_url` |  |
| `bullets` |  |
| `description` |  |
| `has_free_trial` |  |
| `id` |  |
| `monthly_price_in_cents` |  |
| `name` |  |
| `number` |  |
| `price_model` |  |
| `state` |  |
| `unit_name` |  |
| `url` |  |
| `yearly_price_in_cents` |  |

Operations: List.

API path: `/marketplace_listing/plans`

#### MarketplacePurchase

| Field | Description |
| --- | --- |
| `email` |  |
| `id` |  |
| `login` |  |
| `marketplace_pending_change` |  |
| `marketplace_purchase` |  |
| `organization_billing_email` |  |
| `type` |  |
| `url` |  |

Operations: List, Load.

API path: `/marketplace_listing/plans/{plan_id}/accounts`

#### Member

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/orgs/{org}/members`

#### Membership

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List, Load, Update.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships`

#### MergedUpstream

| Field | Description |
| --- | --- |
| `base_branch` |  |
| `branch` | The name of the branch which should be updated to match upstream. |
| `merge_type` |  |
| `message` |  |

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
| `authorizations_url` |  |
| `code_search_url` |  |
| `commit_search_url` |  |
| `current_user_authorizations_html_url` |  |
| `current_user_repositories_url` |  |
| `current_user_url` |  |
| `emails_url` |  |
| `emojis_url` |  |
| `events_url` |  |
| `feeds_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `hub_url` |  |
| `issue_search_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `label_search_url` |  |
| `notifications_url` |  |
| `organization_repositories_url` |  |
| `organization_teams_url` |  |
| `organization_url` |  |
| `public_gists_url` |  |
| `rate_limit_url` |  |
| `repository_search_url` |  |
| `repository_url` |  |
| `starred_gists_url` |  |
| `starred_url` |  |
| `topic_search_url` |  |
| `user_organizations_url` |  |
| `user_repositories_url` |  |
| `user_search_url` |  |
| `user_url` |  |

Operations: Load.

API path: `/`

#### Migration

| Field | Description |
| --- | --- |
| `allow_forking` |  |
| `archive_url` |  |
| `archived` |  |
| `assignees_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` |  |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `disabled` |  |
| `downloads_url` |  |
| `events_url` |  |
| `exclude` | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `guid` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_wiki` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` |  |
| `lock_repositories` | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` |  |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `org_metadata_only` | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | A GitHub user. |
| `permissions` |  |
| `private` |  |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `repositories` | The repositories included in the migration. |
| `role_name` |  |
| `security_and_analysis` |  |
| `size` | The size of the repository, in kilobytes. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `state` |  |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `visibility` |  |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/migrations`

#### Milestone

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `closed_at` |  |
| `closed_issues` |  |
| `created_at` |  |
| `creator` | A GitHub user. |
| `description` | A description of the milestone. |
| `due_on` | The milestone due date. |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `labels_url` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `number` | The number of the milestone. |
| `open_issues` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `state` | The state of the milestone. |
| `subscriptions_url` |  |
| `title` | The title of the milestone. |
| `type` |  |
| `updated_at` |  |
| `url` |  |
| `user_view_type` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/milestones`

#### MinimalRepository

| Field | Description |
| --- | --- |
| `allow_forking` |  |
| `archive_url` |  |
| `archived` |  |
| `assignees_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` |  |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `disabled` |  |
| `downloads_url` |  |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_wiki` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` |  |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` |  |
| `network_count` |  |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `owner` | A GitHub user. |
| `permissions` |  |
| `private` |  |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `role_name` |  |
| `security_and_analysis` |  |
| `size` | The size of the repository, in kilobytes. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `visibility` |  |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |

Operations: List.

API path: `/orgs/{org}/repos`

#### NetworkConfiguration

| Field | Description |
| --- | --- |
| `compute_service` | The hosted compute service the network configuration supports. |
| `created_on` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | The unique identifier of the network configuration. |
| `name` | The name of the network configuration. |
| `network_settings_ids` | The unique identifier of each network settings in the configuration. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/settings/network-configurations`

#### NetworkSetting

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the network settings resource. |
| `name` | The name of the network settings resource. |
| `network_configuration_id` | The identifier of the network configuration that is using this settings resource. |
| `region` | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | The subnet this network settings resource is configured for. |

Operations: Load.

API path: `/orgs/{org}/settings/network-settings/{network_settings_id}`

#### OidcCustomSub

| Field | Description |
| --- | --- |
| `include_claim_keys` | Array of unique strings. |

Operations: List.

API path: `/orgs/{org}/actions/oidc/customization/sub`

#### OidcCustomSubRepo

| Field | Description |
| --- | --- |
| `include_claim_keys` | Array of unique strings. |
| `use_default` | Whether to use the default template or not. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/oidc/customization/sub`

#### Org

| Field | Description |
| --- | --- |
| `access_tokens_url` |  |
| `account` |  |
| `action` | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` |  |
| `app_slug` |  |
| `artifact_url` | The URL where the artifact is stored. |
| `async` | When set to `true`, the request will be performed asynchronously. |
| `attestations` |  |
| `attestations_subject_digests` | Mapping of subject digest to bundles. |
| `avatar_url` |  |
| `base_role` | The system role from which this role inherits permissions. |
| `billing_email` | Billing email address. |
| `blog` |  |
| `client_id` |  |
| `company` | The company name. |
| `contact_email` |  |
| `created_at` | The date and time the role was created. |
| `default_repository_permission` | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | The description of the company. |
| `digest` | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | Whether the user has direct membership in the organization. |
| `email` | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` |  |
| `events_url` |  |
| `filled_seats` |  |
| `has_multiple_single_files` |  |
| `has_organization_projects` | Whether an organization can use organization projects. |
| `has_repository_projects` | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` |  |
| `html_url` |  |
| `id` | The ID of the installation. |
| `issues_url` |  |
| `location` | The location. |
| `login` |  |
| `members_allowed_repository_creation_type` | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | Whether organization members can fork private organization repositories. |
| `members_url` |  |
| `name` | The name of the artifact. |
| `node_id` |  |
| `organization` | A GitHub organization. |
| `organization_url` |  |
| `page_info` | Information about the current page. |
| `pat_ids` | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | The path of the artifact. |
| `permissions` | The permissions granted to the user access token. |
| `predicate_type` | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` |  |
| `properties` | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` |  |
| `query_suite` | CodeQL query suite to be used. |
| `reason` | Reason for approving or denying the request. |
| `registry_url` | The base URL of the artifact registry. |
| `repos_url` |  |
| `repositories_url` |  |
| `repository` | The repository name within the registry. |
| `repository_names` | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | Describe whether all repositories have been selected or there's a selection involved |
| `role` | The user's membership type in the organization. |
| `seats` |  |
| `secret_scanning_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` |  |
| `single_file_paths` |  |
| `source` | Source answers the question, "where did this role come from?" |
| `space` |  |
| `state` | The state of the member in the organization. |
| `status` | The status of the artifact (e.g., active, inactive). |
| `storage_records` |  |
| `subject_digests` | List of subject digests to fetch attestations for. |
| `suspended_at` |  |
| `suspended_by` | A GitHub user. |
| `target_id` | The ID of the user or organization this token is being scoped to. |
| `target_type` |  |
| `total_count` |  |
| `twitter_username` | The Twitter username of the company. |
| `updated_at` | The date and time the role was last updated. |
| `url` |  |
| `user` | A GitHub user. |
| `web_commit_signoff_required` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/orgs/{org}/attestations/bulk-list`

#### OrgHook

| Field | Description |
| --- | --- |
| `active` | Determines if notifications are sent when the webhook is triggered. |
| `config` | Key/value pairs to provide settings for this webhook. |
| `created_at` |  |
| `deliveries_url` |  |
| `events` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` |  |
| `name` | Must be passed as "web". |
| `ping_url` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/hooks`

#### OrgMembership

| Field | Description |
| --- | --- |
| `direct_membership` | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` |  |
| `organization` | A GitHub organization. |
| `organization_url` |  |
| `permissions` |  |
| `role` | The user's membership type in the organization. |
| `state` | The state of the member in the organization. |
| `url` |  |
| `user` | A GitHub user. |

Operations: Load, Update.

API path: `/orgs/{org}/memberships/{username}`

#### OrgPrivateRegistryConfiguration

| Field | Description |
| --- | --- |
| `created_at` |  |
| `name` | The name of the private registry configuration. |
| `registry_type` | The registry type. |
| `updated_at` |  |
| `username` | The username to use when authenticating with the private registry. |
| `visibility` | Which type of organization repositories have access to the private registry. |

Operations: Load.

API path: `/orgs/{org}/private-registries/{secret_name}`

#### OrgPrivateRegistryConfigurationWithSelectedRepository

| Field | Description |
| --- | --- |
| `encrypted_value` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` |  |
| `key_id` | The ID of the key you used to encrypt the secret. |
| `registry_type` | The registry type. |
| `selected_repository_ids` | An array of repository IDs that can access the organization private registry. |
| `url` | The URL of the private registry. |
| `username` | The username to use when authenticating with the private registry. |
| `visibility` | Which type of organization repositories have access to the private registry. |

Operations: Create.

API path: `/orgs/{org}/private-registries`

#### OrgRepoCustomPropertyValue

| Field | Description |
| --- | --- |
| `properties` | List of custom property names and associated values |
| `repository_full_name` |  |
| `repository_id` |  |
| `repository_name` |  |

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
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `selected_repositories_url` |  |
| `updated_at` |  |
| `visibility` | Visibility of a secret |

Operations: Load.

API path: `/orgs/{org}/actions/secrets/{secret_name}`

#### OrganizationActionsVariable

| Field | Description |
| --- | --- |
| `created_at` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` |  |
| `name` | The name of the variable. |
| `selected_repositories_url` |  |
| `updated_at` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | The value of the variable. |
| `visibility` | Visibility of a variable |

Operations: Load.

API path: `/orgs/{org}/actions/variables/{name}`

#### OrganizationDependabotSecret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `selected_repositories_url` |  |
| `updated_at` |  |
| `visibility` | Visibility of a secret |

Operations: Load.

API path: `/orgs/{org}/dependabot/secrets/{secret_name}`

#### OrganizationInvitation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `email` | **Required unless you provide `invitee_id`**. |
| `failed_at` |  |
| `failed_reason` |  |
| `id` |  |
| `invitation_source` |  |
| `invitation_teams_url` |  |
| `invitee_id` | **Required unless you provide `email`**. |
| `inviter` | A GitHub user. |
| `login` |  |
| `node_id` |  |
| `role` | The role for the new member. |
| `team_count` |  |
| `team_ids` | Specify IDs for the teams you want to invite new members to. |

Operations: Create, List.

API path: `/orgs/{org}/invitations`

#### OrganizationProgrammaticAccessGrant

| Field | Description |
| --- | --- |
| `access_granted_at` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | Date and time when the request for access was created. |
| `id` | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | A GitHub user. |
| `permissions` | Permissions requested, categorized by type of permission. |
| `reason` | Reason for requesting access. |
| `repositories_url` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | Type of repository selection requested. |
| `token_expired` | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | Unique identifier of the user's token. |
| `token_last_used_at` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | The name given to the user's token. |

Operations: List.

API path: `/orgs/{org}/personal-access-token-requests`

#### OrganizationRole

| Field | Description |
| --- | --- |
| `base_role` | The system role from which this role inherits permissions. |
| `created_at` | The date and time the role was created. |
| `description` | A short description about who this role is for or what permissions it grants. |
| `id` | The unique identifier of the role. |
| `name` | The name of the role. |
| `organization` | A GitHub user. |
| `permissions` | A list of permissions included in this role. |
| `source` | Source answers the question, "where did this role come from?" |
| `updated_at` | The date and time the role was last updated. |

Operations: Load.

API path: `/orgs/{org}/organization-roles/{role_id}`

#### OrganizationSecretScanningAlert

| Field | Description |
| --- | --- |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | Details on the location where the token was initially detected. |
| `has_more_locations` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | The GitHub URL of the alert resource. |
| `is_base64_encoded` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | The REST API URL of the code locations for this alert. |
| `multi_repo` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | The security alert number. |
| `publicly_leaked` | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | A GitHub user. |
| `repository` | A GitHub repository. |
| `resolution` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | The comment that was optionally added when this alert was closed |
| `resolved_at` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | A GitHub user. |
| `secret` | The secret that was detected. |
| `secret_type` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | Sets the state of the secret scanning alert. |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |
| `validity` | The token status as of the latest validity check. |

Operations: List.

API path: `/orgs/{org}/secret-scanning/alerts`

#### OutsideCollaborator

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/orgs/{org}/outside_collaborators`

#### Package

| Field | Description |
| --- | --- |
| `container` |  |
| `created_at` |  |
| `deleted_at` |  |
| `description` |  |
| `docker` |  |
| `github_id` | Unique identifier of the package. |
| `html_url` |  |
| `id` | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | Free storage space (GB) for GitHub Packages. |
| `license` |  |
| `metadata` |  |
| `name` | The name of the package. |
| `owner` | A GitHub user. |
| `package_html_url` |  |
| `package_type` |  |
| `repository` | Minimal Repository |
| `total_gigabytes_bandwidth_used` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` |  |
| `url` |  |
| `version_count` | The number of versions of the package. |
| `visibility` |  |

Operations: Create, List, Load, Remove.

API path: `/orgs/{org}/packages/{package_type}/{package_name}/restore`

#### Page

| Field | Description |
| --- | --- |
| `build_type` | The process in which the Page will be built. |
| `cname` | The Pages site's custom domain |
| `custom_404` | Whether the Page has a custom 404 page. |
| `html_url` | The web address the Page can be accessed from. |
| `https_certificate` |  |
| `https_enforced` | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | The state if the domain is verified |
| `public` | Whether the GitHub Pages site is publicly visible. |
| `source` | The source branch and directory used to publish your Pages site. |
| `status` | The status of the most recent build of the Page. |
| `url` | The API address for accessing this Page resource. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/pages`

#### PageBuild

| Field | Description |
| --- | --- |
| `commit` |  |
| `created_at` |  |
| `duration` |  |
| `error` |  |
| `id` |  |
| `pusher` | A GitHub user. |
| `status` |  |
| `updated_at` |  |
| `url` |  |

Operations: List, Load.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageBuildStatus

| Field | Description |
| --- | --- |
| `status` |  |
| `url` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageDeployment

| Field | Description |
| --- | --- |
| `artifact_id` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | A unique string that represents the version of the build for this deployment. |

Operations: Create.

API path: `/repos/{owner}/{repo}/pages/deployments`

#### PagesDeploymentStatus

| Field | Description |
| --- | --- |
| `status` | The current status of the deployment. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel`

#### PagesHealthCheck

| Field | Description |
| --- | --- |
| `alt_domain` |  |
| `domain` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/pages/health`

#### Participation

| Field | Description |
| --- | --- |
| `all` |  |
| `owner` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/stats/participation`

#### PendingDeployment

| Field | Description |
| --- | --- |
| `current_user_can_approve` | Whether the currently authenticated user can approve the deployment |
| `environment` |  |
| `reviewers` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | The set duration of the wait timer |
| `wait_timer_started_at` | The time that the wait timer began. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`

#### PorterAuthor

| Field | Description |
| --- | --- |
| `email` | The new Git author email. |
| `id` |  |
| `import_url` |  |
| `name` | The new Git author name. |
| `remote_id` |  |
| `remote_name` |  |
| `url` |  |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/import/authors`

#### PorterLargeFile

| Field | Description |
| --- | --- |
| `oid` |  |
| `path` |  |
| `ref_name` |  |
| `size` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/import/large_files`

#### PrivateRegistry

| Field | Description |
| --- | --- |
| `created_at` |  |
| `encrypted_value` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` |  |
| `key` | The Base64 encoded public key. |
| `key_id` | The identifier for the key. |
| `name` | The name of the private registry configuration. |
| `registry_type` | The registry type. |
| `selected_repository_ids` | An array of repository IDs that can access the organization private registry. |
| `updated_at` |  |
| `url` | The URL of the private registry. |
| `username` | The username to use when authenticating with the private registry. |
| `visibility` | Which type of organization repositories have access to the private registry. |

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
| `avatar_url` |  |
| `body` | The description of the project. |
| `columns_url` |  |
| `created_at` |  |
| `creator` | A GitHub user. |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` | The name of the project. |
| `node_id` |  |
| `number` |  |
| `organization_permission` | The baseline permission that all organization members have on this project |
| `organizations_url` |  |
| `owner_url` |  |
| `private` | Whether or not this project can be seen by everyone. |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `state` | State of the project; either 'open' or 'closed' |
| `subscriptions_url` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |
| `user_view_type` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/projects`

#### ProjectCollaboratorPermission

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: Load.

API path: `/projects/{project_id}/collaborators/{username}/permission`

#### ProjectColumn

| Field | Description |
| --- | --- |
| `cards_url` |  |
| `created_at` |  |
| `id` | The unique identifier of the project column |
| `name` | Name of the project column |
| `node_id` |  |
| `project_url` |  |
| `updated_at` |  |
| `url` |  |

Operations: Create, List, Load, Update.

API path: `/projects/{project_id}/columns`

#### ProjectsClassic

| Field | Description |
| --- | --- |
| `permission` | The permission to grant the collaborator. |
| `position` | The position of the column in a project. |

Operations: Create, Remove, Update.

API path: `/projects/columns/{column_id}/moves`

#### ProjectsV2

| Field | Description |
| --- | --- |
| `closed_at` | The time when the project was closed. |
| `created_at` | The time when the project was created. |
| `creator` | A GitHub user. |
| `deleted_at` | The time when the project was deleted. |
| `deleted_by` | A GitHub user. |
| `description` | A short description of the project. |
| `id` | The unique identifier of the project. |
| `is_template` | Whether this project is a template |
| `latest_status_update` | An status update belonging to a project |
| `node_id` | The node ID of the project. |
| `number` | The project number. |
| `owner` | A GitHub user. |
| `public` | Whether the project is visible to anyone with access to the owner. |
| `short_description` | A concise summary of the project. |
| `state` | The current state of the project. |
| `title` | The project title. |
| `updated_at` | The time when the project was last updated. |

Operations: List, Load.

API path: `/orgs/{org}/projectsV2`

#### ProjectsV2Field

| Field | Description |
| --- | --- |
| `configuration` | Configuration for iteration fields. |
| `created_at` | The time when the field was created. |
| `data_type` | The field's data type. |
| `id` | The unique identifier of the field. |
| `name` | The name of the field. |
| `node_id` | The node ID of the field. |
| `options` | The options available for single select fields. |
| `project_url` | The API URL of the project that contains the field. |
| `updated_at` | The time when the field was last updated. |

Operations: List, Load.

API path: `/orgs/{org}/projectsV2/{project_number}/fields`

#### ProjectsV2ItemSimple

| Field | Description |
| --- | --- |
| `id` | The numeric ID of the issue or pull request to add to the project. |
| `type` | The type of item to add to the project. |

Operations: Create.

API path: `/orgs/{org}/projectsV2/{project_number}/items`

#### ProjectsV2ItemWithContent

| Field | Description |
| --- | --- |
| `archived_at` | The time when the item was archived. |
| `content` | The content of the item, which varies by content type. |
| `content_type` | The type of content tracked in a project item |
| `created_at` | The time when the item was created. |
| `creator` | A GitHub user. |
| `fields` | The fields and values associated with this item. |
| `id` | The unique identifier of the project item. |
| `item_url` | The API URL of this item. |
| `node_id` | The node ID of the project item. |
| `project_url` | The API URL of the project that contains this item. |
| `updated_at` | The time when the item was last updated. |

Operations: List, Load, Update.

API path: `/orgs/{org}/projectsV2/{project_number}/items`

#### ProtectedBranch

| Field | Description |
| --- | --- |
| `allow_deletions` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | Enforce all configured restrictions for administrators. |
| `lock_branch` | Whether to set the branch as read-only. |
| `required_conversation_resolution` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | Require at least one approving review on a pull request, before merging. |
| `required_signatures` |  |
| `required_status_checks` | Status Check Policy |
| `restrictions` | Branch Restriction Policy |
| `url` |  |

Operations: Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection`

#### ProtectedBranchAdminEnforced

| Field | Description |
| --- | --- |
| `enabled` |  |
| `url` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`

#### ProtectedBranchPullRequestReview

| Field | Description |
| --- | --- |
| `bypass_pull_request_allowances` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | Specifies the number of reviewers required to approve pull requests. |
| `url` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`

#### PublicMember

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/orgs/{org}/public_members`

#### Pull

| Field | Description |
| --- | --- |
| `active_lock_reason` |  |
| `additions` |  |
| `assignee` | A GitHub user. |
| `assignees` |  |
| `author_association` | How the author is associated with the repository. |
| `auto_merge` | The status of auto merging a pull request. |
| `base` | The name of the branch you want the changes pulled into. |
| `body` | The contents of the pull request. |
| `changed_files` |  |
| `closed_at` |  |
| `comments` |  |
| `comments_url` |  |
| `commit_message` | Extra detail to append to automatic commit message. |
| `commit_title` | Title for the automatic commit message. |
| `commits` |  |
| `commits_url` |  |
| `created_at` |  |
| `deletions` |  |
| `diff_url` |  |
| `draft` | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | The expected SHA of the pull request's HEAD ref. |
| `head` | The name of the branch where your changes are implemented. |
| `head_repo` | The name of the repository where the changes in the pull request were made. |
| `html_url` |  |
| `id` |  |
| `issue` | An issue in the repository to convert to a pull request. |
| `issue_url` |  |
| `labels` |  |
| `links` |  |
| `locked` |  |
| `maintainer_can_modify` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` |  |
| `merge_method` | The merge method to use. |
| `mergeable` |  |
| `mergeable_state` |  |
| `merged` |  |
| `merged_at` |  |
| `merged_by` | A GitHub user. |
| `message` |  |
| `milestone` | A collection of related issues and pull requests. |
| `node_id` |  |
| `number` | Number uniquely identifying the pull request within its repository. |
| `patch_url` |  |
| `rebaseable` |  |
| `requested_reviewers` |  |
| `requested_teams` |  |
| `review_comment_url` |  |
| `review_comments` |  |
| `review_comments_url` |  |
| `sha` | SHA that pull request head must match to allow merge. |
| `state` | State of this Pull Request. |
| `statuses_url` |  |
| `title` | The title of the pull request. |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/pulls`

#### PullRequestReview

| Field | Description |
| --- | --- |
| `author_association` | How the author is associated with the repository. |
| `body` | The text of the review. |
| `body_html` |  |
| `body_text` |  |
| `comments` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | A commit SHA for the review. |
| `event` | The review action you want to perform. |
| `html_url` |  |
| `id` | Unique identifier of the review |
| `links` |  |
| `message` | The message for the pull request review dismissal |
| `node_id` |  |
| `pull_request_url` |  |
| `state` |  |
| `submitted_at` |  |
| `teams` |  |
| `user` | A GitHub user. |
| `users` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`

#### PullRequestReviewComment

| Field | Description |
| --- | --- |
| `author_association` | How the author is associated with the repository. |
| `body` | The text of the comment. |
| `body_html` |  |
| `body_text` |  |
| `commit_id` | The SHA of the commit to which the comment applies. |
| `created_at` |  |
| `diff_hunk` | The diff of the line that the comment refers to. |
| `html_url` | HTML URL for the pull request review comment. |
| `id` | The ID of the pull request review comment. |
| `in_reply_to` | The ID of the review comment to reply to. |
| `in_reply_to_id` | The comment ID to reply to. |
| `line` | The line of the blob to which the comment applies. |
| `links` |  |
| `node_id` | The node ID of the pull request review comment. |
| `original_commit_id` | The SHA of the original commit to which the comment applies. |
| `original_line` | The line of the blob to which the comment applies. |
| `original_position` | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | The first line of the range for a multi-line comment. |
| `path` | The relative path of the file to which the comment applies. |
| `position` | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | URL for the pull request that the review comment belongs to. |
| `reactions` |  |
| `side` | The side of the diff to which the comment applies. |
| `start_line` | The first line of the range for a multi-line comment. |
| `start_side` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` |  |
| `url` | URL for the pull request review comment |
| `user` | A GitHub user. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`

#### PullRequestSimple

| Field | Description |
| --- | --- |
| `reviewers` | An array of user `login`s that will be requested. |
| `team_reviewers` | An array of team `slug`s that will be requested. |

Operations: Create, Remove.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`

#### RateLimit

| Field | Description |
| --- | --- |
| `rate` |  |
| `resources` |  |

Operations: Load.

API path: `/rate_limit`

#### Reaction

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `content` | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `created_at` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user` | A GitHub user. |
| `user_view_type` |  |

Operations: Create, List, Remove.

API path: `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`

#### Referrer

| Field | Description |
| --- | --- |
| `count` |  |
| `referrer` |  |
| `uniques` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/popular/referrers`

#### Release

| Field | Description |
| --- | --- |
| `assets` |  |
| `assets_url` |  |
| `author` | A GitHub user. |
| `body` | Text describing the contents of the tag. |
| `body_html` |  |
| `body_text` |  |
| `browser_download_url` |  |
| `content_type` |  |
| `created_at` |  |
| `digest` |  |
| `discussion_category_name` | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | The URL of the release discussion. |
| `download_count` |  |
| `draft` | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | Whether to automatically generate the name and body for this release. |
| `html_url` |  |
| `id` |  |
| `immutable` | Whether or not the release is immutable. |
| `label` |  |
| `make_latest` | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` |  |
| `name` | The name of the release. |
| `node_id` |  |
| `prerelease` | Whether to identify the release as a prerelease or a full release. |
| `published_at` |  |
| `reactions` |  |
| `size` |  |
| `state` | State of the release asset. |
| `tag_name` | The name of the tag. |
| `tarball_url` |  |
| `target_commitish` | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` |  |
| `upload_url` |  |
| `uploader` | A GitHub user. |
| `url` |  |
| `zipball_url` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/releases`

#### ReleaseAsset

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `browser_download_url` |  |
| `content_type` |  |
| `created_at` |  |
| `digest` |  |
| `download_count` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `label` | An alternate short description of the asset. |
| `login` |  |
| `name` | The file name of the asset. |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `size` |  |
| `starred_at` |  |
| `starred_url` |  |
| `state` | State of the release asset. |
| `subscriptions_url` |  |
| `type` |  |
| `updated_at` |  |
| `uploader` | A GitHub user. |
| `url` |  |
| `user_view_type` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/releases/{release_id}/assets`

#### ReleaseNotesContent

| Field | Description |
| --- | --- |
| `body` | The generated body describing the contents of the release supporting markdown formatting |
| `configuration_file_path` | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `name` | The generated name of the release |
| `previous_tag_name` | The name of the previous tag to use as the starting point for the release notes. |
| `tag_name` | The tag name for the release. |
| `target_commitish` | Specifies the commitish value that will be the target for the release's tag. |

Operations: Create.

API path: `/repos/{owner}/{repo}/releases/generate-notes`

#### Remove

| Field | Description |
| --- | --- |
| `usernames` | The GitHub user handles to be removed from the team. |

Operations: Create.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove`

#### Repo

| Field | Description |
| --- | --- |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Whether to allow forking this repo |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | Whether anonymous git access is enabled for this repository |
| `app` | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` |  |
| `archived` | Whether the repository is archived. |
| `assignees_url` |  |
| `attestations` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `build_type` | The process by which the GitHub Pages site will be built. |
| `bundle` | The attestation's Sigstore Bundle. |
| `client_payload` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` |  |
| `cname` | Specify a custom domain for the repository. |
| `code_search_index_status` | The status of the code search index for this repository |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `content` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | The default branch of the repository. |
| `default_branch_only` | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | The type of deployment branch policy for this environment. |
| `deployments_url` |  |
| `description` |  |
| `disabled` | Returns whether or not this repository disabled. |
| `download_url` |  |
| `downloads_url` |  |
| `enabled` | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` |  |
| `event_type` | A custom webhook event name. |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `github_id` | Unique identifier of the repository |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_wiki` | Whether the wiki is enabled. |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `https_enforced` | Specify whether HTTPS should be enforced for the repository. |
| `id` | Unique identifier of the repository |
| `integration_url` | The URL for the endpoint to get details about the app. |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` | License Simple |
| `links` |  |
| `master_branch` |  |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | When forking from an existing repository, a new name for the fork. |
| `new_name` | The new name to be given to the repository. |
| `new_owner` | The username or organization name the repository will be transferred to. |
| `node_id` | The node ID for the deployment protection rule integration. |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `organization` | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | A GitHub user. |
| `path` |  |
| `permissions` |  |
| `private` | Whether the repository is private or public. |
| `properties` | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | Built-in deployment protection rules for the environment. |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `sha` |  |
| `size` | The size of the repository, in kilobytes. |
| `slug` | The slugified name of the deployment protection rule integration. |
| `source` |  |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `statuses_url` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `team_ids` | ID of the team or teams to add to the repository. |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `type` | Whether this rule targets a branch or tag. |
| `updated_at` | The time that the environment was last updated, in ISO 8601 format. |
| `url` |  |
| `use_squash_pr_title_as_default` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Whether to require contributors to sign off on web-based commits |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`

#### Repository

| Field | Description |
| --- | --- |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Whether to allow forking this repo |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | Whether anonymous git access is enabled for this repository |
| `archive_url` |  |
| `archived` | Whether the repository is archived. |
| `assignees_url` |  |
| `blobs_url` |  |
| `branches_url` |  |
| `clone_url` |  |
| `code_search_index_status` | The status of the code search index for this repository |
| `collaborators_url` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `default_branch` | The default branch of the repository. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deployments_url` |  |
| `description` |  |
| `disabled` | Returns whether or not this repository disabled. |
| `downloads_url` |  |
| `events_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `has_discussions` | Whether discussions are enabled. |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_wiki` | Whether the wiki is enabled. |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the repository |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `license` | License Simple |
| `master_branch` |  |
| `merge_commit_message` | The default value for a merge commit message. |
| `merge_commit_title` | The default value for a merge commit title. |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the repository. |
| `node_id` |  |
| `notifications_url` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `owner` | A GitHub user. |
| `permissions` |  |
| `private` | Whether the repository is private or public. |
| `pulls_url` |  |
| `pushed_at` |  |
| `releases_url` |  |
| `size` | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `statuses_url` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `topics` |  |
| `trees_url` |  |
| `updated_at` |  |
| `url` |  |
| `use_squash_pr_title_as_default` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Whether to require contributors to sign off on web-based commits |

Operations: List.

API path: `/user/starred`

#### RepositoryAdvisory

| Field | Description |
| --- | --- |
| `author` | The author of the advisory. |
| `closed_at` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | A list of teams that collaborate on the advisory. |
| `collaborating_users` | A list of users that collaborate on the advisory. |
| `created_at` | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` |  |
| `cve_id` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` |  |
| `cvss_severities` |  |
| `cvss_vector_string` | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | A list of only the CWE IDs. |
| `cwes` |  |
| `description` | A detailed description of what the advisory entails. |
| `ghsa_id` | The GitHub Security Advisory ID. |
| `html_url` | The URL for the advisory. |
| `identifiers` |  |
| `private_fork` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | The publisher of the advisory. |
| `severity` | The severity of the advisory. |
| `start_private_fork` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | The state of the advisory. |
| `submission` |  |
| `summary` | A short summary of the advisory. |
| `updated_at` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | The API URL for the advisory. |
| `vulnerabilities` | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve`

#### RepositoryCollaboratorPermission

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `permissions` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `role_name` |  |
| `site_admin` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/collaborators/{username}/permission`

#### RepositoryInvitation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `expired` | Whether or not the invitation has expired |
| `html_url` |  |
| `id` | Unique identifier of the repository invitation. |
| `invitee` | A GitHub user. |
| `inviter` | A GitHub user. |
| `node_id` |  |
| `permission` | The permission to grant the collaborator. |
| `permissions` | The permission associated with the invitation. |
| `repository` | Minimal Repository |
| `url` | URL for the repository invitation |

Operations: List, Patch, Update.

API path: `/repos/{owner}/{repo}/invitations`

#### RepositoryRuleDetailed

| Field | Description |
| --- | --- |
| `parameters` |  |
| `ruleset_id` |  |
| `ruleset_source` |  |
| `ruleset_source_type` |  |
| `type` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/rules/branches/{branch}`

#### RepositoryRuleset

| Field | Description |
| --- | --- |
| `bypass_actors` | The actors that can bypass the rules in this ruleset |
| `conditions` | Parameters for a repository ruleset ref name condition |
| `created_at` |  |
| `current_user_can_bypass` | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | The enforcement level of the ruleset. |
| `id` | The ID of the ruleset |
| `links` |  |
| `name` | The name of the ruleset |
| `node_id` |  |
| `rules` | An array of rules within the ruleset. |
| `source` | The name of the source |
| `source_type` | The type of the source of the ruleset |
| `target` | The target of the ruleset |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/repos/{owner}/{repo}/rulesets`

#### RepositorySubscription

| Field | Description |
| --- | --- |
| `created_at` |  |
| `ignored` | Determines if all notifications should be blocked from this repository. |
| `reason` |  |
| `repository_url` |  |
| `subscribed` | Determines if notifications should be received from this repository. |
| `url` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/subscription`

#### ReviewComment

| Field | Description |
| --- | --- |
| `author_association` | How the author is associated with the repository. |
| `body` |  |
| `body_html` |  |
| `body_text` |  |
| `commit_id` |  |
| `created_at` |  |
| `diff_hunk` |  |
| `html_url` |  |
| `id` |  |
| `in_reply_to_id` |  |
| `line` | The line of the blob to which the comment applies. |
| `links` |  |
| `node_id` |  |
| `original_commit_id` |  |
| `original_line` | The original line of the blob to which the comment applies. |
| `original_position` |  |
| `original_start_line` | The original first line of the range for a multi-line comment. |
| `path` |  |
| `position` |  |
| `pull_request_review_id` |  |
| `pull_request_url` |  |
| `reactions` |  |
| `side` | The side of the first line of the range for a multi-line comment. |
| `start_line` | The first line of the range for a multi-line comment. |
| `start_side` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |

Operations: List.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`

#### RuleSuite

| Field | Description |
| --- | --- |
| `actor_id` | The number that identifies the user. |
| `actor_name` | The handle for the GitHub user account. |
| `after_sha` | The new commit SHA of the ref. |
| `before_sha` | The previous commit SHA of the ref. |
| `evaluation_result` | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | The unique identifier of the rule insight. |
| `pushed_at` |  |
| `ref` | The ref name that the evaluation ran on. |
| `repository_id` | The ID of the repository associated with the rule evaluation. |
| `repository_name` | The name of the repository without the `.git` extension. |
| `result` | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | Details on the evaluated rules. |

Operations: List, Load.

API path: `/orgs/{org}/rulesets/rule-suites`

#### RulesetVersion

| Field | Description |
| --- | --- |
| `actor` | The actor who updated the ruleset |
| `id` |  |
| `updated_at` |  |
| `version_id` | The ID of the previous version of the ruleset |

Operations: List.

API path: `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history`

#### RulesetVersionWithState

| Field | Description |
| --- | --- |
| `actor` | The actor who updated the ruleset |
| `state` | The state of the ruleset version |
| `updated_at` |  |
| `version_id` | The ID of the previous version of the ruleset |

Operations: Load.

API path: `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}`

#### Runner

| Field | Description |
| --- | --- |
| `busy` |  |
| `ephemeral` |  |
| `id` | The ID of the runner. |
| `labels` |  |
| `name` | The name of the runner. |
| `os` | The Operating System of the runner. |
| `runner_group_id` | The ID of the runner group. |
| `status` | The status of the runner. |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/runners/{runner_id}`

#### RunnerApplication

| Field | Description |
| --- | --- |
| `architecture` |  |
| `download_url` |  |
| `filename` |  |
| `os` |  |
| `sha256_checksum` |  |
| `temp_download_token` | A short lived bearer token used to download the runner, if needed. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/runners/downloads`

#### RunnerGroup

| Field | Description |
| --- | --- |
| `allows_public_repositories` | Whether the runner group can be used by `public` repositories. |
| `default` |  |
| `hosted_runners_url` |  |
| `id` |  |
| `inherited` |  |
| `inherited_allows_public_repositories` |  |
| `name` | Name of the runner group. |
| `network_configuration_id` | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | List of runner IDs to add to the runner group. |
| `runners_url` |  |
| `selected_repositories_url` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | List of repository IDs that can access the runner group. |
| `selected_workflows` | List of workflows the runner group should be allowed to run. |
| `visibility` | Visibility of a runner group. |
| `workflow_restrictions_read_only` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

Operations: Create, Load, Update.

API path: `/orgs/{org}/actions/runner-groups`

#### Search

| Field | Description |
| --- | --- |
| `active_lock_reason` |  |
| `aliases` |  |
| `allow_auto_merge` |  |
| `allow_forking` |  |
| `allow_merge_commit` |  |
| `allow_rebase_merge` |  |
| `allow_squash_merge` |  |
| `archive_url` |  |
| `archived` |  |
| `assignee` | A GitHub user. |
| `assignees` |  |
| `assignees_url` |  |
| `author` | A GitHub user. |
| `author_association` | How the author is associated with the repository. |
| `avatar_url` |  |
| `bio` |  |
| `blobs_url` |  |
| `blog` |  |
| `body` |  |
| `body_html` |  |
| `body_text` |  |
| `branches_url` |  |
| `clone_url` |  |
| `closed_at` |  |
| `collaborators_url` |  |
| `color` |  |
| `comments` |  |
| `comments_url` |  |
| `commit` |  |
| `commits_url` |  |
| `committer` | Metaproperties for Git author/committer information. |
| `company` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `created_by` |  |
| `curated` |  |
| `default` |  |
| `default_branch` |  |
| `delete_branch_on_merge` |  |
| `deployments_url` |  |
| `description` |  |
| `disabled` | Returns whether or not this repository disabled. |
| `display_name` |  |
| `downloads_url` |  |
| `draft` |  |
| `email` |  |
| `events_url` |  |
| `featured` |  |
| `file_size` |  |
| `followers` |  |
| `followers_url` |  |
| `following` |  |
| `following_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `gists_url` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `gravatar_id` |  |
| `has_discussions` |  |
| `has_downloads` |  |
| `has_issues` |  |
| `has_pages` |  |
| `has_projects` |  |
| `has_wiki` |  |
| `hireable` |  |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` |  |
| `is_template` |  |
| `issue_comment_url` |  |
| `issue_dependencies_summary` |  |
| `issue_events_url` |  |
| `issue_field_values` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `last_modified_at` |  |
| `license` | License Simple |
| `line_numbers` |  |
| `location` |  |
| `locked` |  |
| `login` |  |
| `logo_url` |  |
| `master_branch` |  |
| `merges_url` |  |
| `milestone` | A collection of related issues and pull requests. |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` |  |
| `node_id` |  |
| `notifications_url` |  |
| `number` |  |
| `open_issues` |  |
| `open_issues_count` |  |
| `organizations_url` |  |
| `owner` | A GitHub user. |
| `parents` |  |
| `path` |  |
| `performed_via_github_app` | GitHub apps are a new way to extend GitHub. |
| `permissions` |  |
| `private` |  |
| `public_gists` |  |
| `public_repos` |  |
| `pull_request` |  |
| `pulls_url` |  |
| `pushed_at` |  |
| `reactions` |  |
| `received_events_url` |  |
| `related` |  |
| `released` |  |
| `releases_url` |  |
| `repos_url` |  |
| `repository` | A repository on GitHub. |
| `repository_count` |  |
| `repository_url` |  |
| `score` |  |
| `sha` |  |
| `short_description` |  |
| `site_admin` |  |
| `size` |  |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_url` |  |
| `state` |  |
| `state_reason` |  |
| `statuses_url` |  |
| `sub_issues_summary` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `subscriptions_url` |  |
| `suspended_at` |  |
| `svn_url` |  |
| `tags_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `text_matches` |  |
| `timeline_url` |  |
| `title` |  |
| `topics` |  |
| `trees_url` |  |
| `type` | The type of issue. |
| `updated_at` |  |
| `url` |  |
| `user` | A GitHub user. |
| `user_view_type` |  |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` |  |

Operations: List.

API path: `/search/issues`

#### SecretScanning

| Field | Description |
| --- | --- |
| `custom_pattern_settings` | Pattern settings for custom patterns. |
| `pattern_config_version` | The updated pattern configuration version. |
| `provider_pattern_settings` | Pattern settings for provider patterns. |

Operations: Update.

API path: `/orgs/{org}/secret-scanning/pattern-configurations`

#### SecretScanningAlert

| Field | Description |
| --- | --- |
| `created_at` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | Details on the location where the token was initially detected. |
| `has_more_locations` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | The GitHub URL of the alert resource. |
| `id` |  |
| `is_base64_encoded` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | The REST API URL of the code locations for this alert. |
| `multi_repo` | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | The security alert number. |
| `publicly_leaked` | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | A GitHub user. |
| `resolution` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | An optional comment to resolve an alert. |
| `resolved_at` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | A GitHub user. |
| `secret` | The secret that was detected. |
| `secret_type` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | Sets the state of the secret scanning alert. |
| `updated_at` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | The REST API URL of the alert resource. |
| `validity` | The token status as of the latest validity check. |

Operations: List, Load, Update.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts`

#### SecretScanningLocation

| Field | Description |
| --- | --- |
| `details` |  |
| `type` | The location type. |

Operations: List.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`

#### SecretScanningPatternConfiguration

| Field | Description |
| --- | --- |
| `custom_pattern_overrides` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | The version of the entity. |
| `provider_pattern_overrides` | Overrides for partner patterns. |

Operations: List.

API path: `/orgs/{org}/secret-scanning/pattern-configurations`

#### SecretScanningPushProtectionBypass

| Field | Description |
| --- | --- |
| `expire_at` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | The ID of the push protection bypass placeholder. |
| `reason` | The reason for bypassing push protection. |
| `token_type` | The token type this bypass is for. |

Operations: Create.

API path: `/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses`

#### SecretScanningScanHistory

| Field | Description |
| --- | --- |
| `backfill_scans` |  |
| `custom_pattern_backfill_scans` |  |
| `incremental_scans` |  |
| `pattern_update_scans` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/secret-scanning/scan-history`

#### SecurityAdvisory

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create.

API path: `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`

#### SelectedAction

| Field | Description |
| --- | --- |
| `github_owned_allowed` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | Whether actions from GitHub Marketplace verified creators are allowed. |

Operations: List.

API path: `/repos/{owner}/{repo}/actions/permissions/selected-actions`

#### SelfHostedRunner

| Field | Description |
| --- | --- |
| `enabled_repositories` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

Operations: Load.

API path: `/orgs/{org}/actions/permissions/self-hosted-runners`

#### ShortBlob

| Field | Description |
| --- | --- |
| `content` | The new blob's content. |
| `encoding` | The encoding used for `content`. |

Operations: Create.

API path: `/repos/{owner}/{repo}/git/blobs`

#### ShortBranch

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `protected` |  |
| `protection` | Branch Protection |
| `protection_url` |  |

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
| `accepted` | The number of students that have accepted the assignment. |
| `classroom` | A GitHub Classroom classroom |
| `deadline` | The time at which the assignment is due. |
| `editor` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | Whether feedback pull request will be created on assignment acceptance. |
| `id` | Unique identifier of the repository. |
| `invitations_enabled` | Whether the invitation link is enabled. |
| `invite_link` | The link that a student can use to accept the assignment. |
| `language` | The programming language used in the assignment. |
| `max_members` | The maximum allowable members per team. |
| `max_teams` | The maximum allowable teams for the assignment. |
| `passing` | The number of students that have passed the assignment. |
| `public_repo` | Whether an accepted assignment creates a public repository. |
| `slug` | Sluggified name of the assignment. |
| `students_are_repo_admins` | Whether students are admins on created repository on accepted assignment. |
| `submitted` | The number of students that have submitted the assignment. |
| `title` | Assignment title. |
| `type` | Whether it's a Group Assignment or Individual Assignment. |

Operations: List.

API path: `/classrooms/{classroom_id}/assignments`

#### SocialAccount

| Field | Description |
| --- | --- |
| `account_urls` | Full URLs for the social media profiles to add. |
| `provider` |  |
| `url` |  |

Operations: Create, List.

API path: `/user/social_accounts`

#### SshSigningKey

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` | The public SSH key to add to your GitHub account. |
| `title` | A descriptive name for the new key. |

Operations: Create, List, Load.

API path: `/user/ssh_signing_keys`

#### Status

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `context` | A string label to differentiate this status from the status of other systems. |
| `created_at` |  |
| `creator` | A GitHub user. |
| `description` | A short description of the status. |
| `id` |  |
| `node_id` |  |
| `state` | The state of the status. |
| `target_url` | The target URL to associate with this status. |
| `updated_at` |  |
| `url` |  |

Operations: Create, List.

API path: `/repos/{owner}/{repo}/statuses/{sha}`

#### StatusCheckPolicy

| Field | Description |
| --- | --- |
| `app_id` |  |
| `checks` | The list of status checks to require in order to merge into this branch. |
| `context` |  |
| `contexts` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` |  |
| `strict` | Require branches to be up to date before merging. |
| `url` |  |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`

#### Subscriber

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `events_url` |  |
| `followers_url` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `html_url` |  |
| `id` |  |
| `login` |  |
| `name` |  |
| `node_id` |  |
| `organizations_url` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subscriptions_url` |  |
| `type` |  |
| `url` |  |
| `user_view_type` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/subscribers`

#### Tag

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `node_id` |  |
| `tarball_url` |  |
| `zipball_url` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/tags`

#### TagProtection

| Field | Description |
| --- | --- |
| `created_at` |  |
| `enabled` |  |
| `id` |  |
| `pattern` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` |  |

Operations: Create, List.

API path: `/repos/{owner}/{repo}/tags/protection`

#### Team

| Field | Description |
| --- | --- |
| `allow_auto_merge` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | Whether to allow forking this repo |
| `allow_merge_commit` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | Whether to allow squash merges for pull requests. |
| `archive_url` |  |
| `archived` | Whether the repository is archived. |
| `assignees_url` |  |
| `assignment` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | A GitHub user. |
| `avatar_url` |  |
| `blobs_url` |  |
| `body` | The main text of the comment. |
| `body_html` |  |
| `body_version` | The current version of the body content. |
| `branches_url` |  |
| `clone_url` |  |
| `code_of_conduct` | Code Of Conduct |
| `collaborators_url` |  |
| `columns_url` |  |
| `comments_count` |  |
| `comments_url` |  |
| `commits_url` |  |
| `compare_url` |  |
| `contents_url` |  |
| `contributors_url` |  |
| `created_at` |  |
| `creator` | A GitHub user. |
| `custom_properties` | The custom properties that were defined for the repository. |
| `default_branch` | The default branch of the repository. |
| `delete_branch_on_merge` | Whether to delete head branches when pull requests are merged |
| `deployments_url` |  |
| `description` | The description of the team. |
| `disabled` | Returns whether or not this repository disabled. |
| `discussion_url` |  |
| `downloads_url` |  |
| `email` |  |
| `events_url` |  |
| `failed_at` |  |
| `failed_reason` |  |
| `followers_url` |  |
| `following_url` |  |
| `fork` |  |
| `forks` |  |
| `forks_count` |  |
| `forks_url` |  |
| `full_name` |  |
| `gists_url` |  |
| `git_commits_url` |  |
| `git_refs_url` |  |
| `git_tags_url` |  |
| `git_url` |  |
| `gravatar_id` |  |
| `has_discussions` |  |
| `has_downloads` | Whether downloads are enabled. |
| `has_issues` | Whether issues are enabled. |
| `has_pages` |  |
| `has_projects` | Whether projects are enabled. |
| `has_wiki` | Whether the wiki is enabled. |
| `homepage` |  |
| `hooks_url` |  |
| `html_url` |  |
| `id` | Unique identifier of the repository |
| `invitation_source` |  |
| `invitation_teams_url` |  |
| `inviter` | A GitHub user. |
| `is_template` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` |  |
| `issue_events_url` |  |
| `issues_url` |  |
| `keys_url` |  |
| `labels_url` |  |
| `language` |  |
| `languages_url` |  |
| `last_edited_at` |  |
| `ldap_dn` | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | License Simple |
| `login` |  |
| `maintainers` | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` |  |
| `members_count` |  |
| `members_url` |  |
| `merges_url` |  |
| `milestones_url` |  |
| `mirror_url` |  |
| `name` | The name of the repository. |
| `network_count` |  |
| `node_id` |  |
| `notification_setting` | The notification setting the team has set |
| `notifications_url` |  |
| `number` | The unique sequence number of a team discussion comment. |
| `open_issues` |  |
| `open_issues_count` |  |
| `organization` | Team Organization |
| `organization_permission` | The organization permission for this project. |
| `organizations_url` |  |
| `owner` | A GitHub user. |
| `owner_url` |  |
| `parent` | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | The ID of a team to set as the parent team. |
| `permission` | Permission that the team will have for its repositories |
| `permissions` |  |
| `pinned` | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | The level of privacy this team should have |
| `private` | Whether the repository is private or public. |
| `pulls_url` |  |
| `pushed_at` |  |
| `reactions` |  |
| `received_events_url` |  |
| `releases_url` |  |
| `repo_names` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` |  |
| `repos_url` |  |
| `repositories_url` |  |
| `role` | The role of the user in the team. |
| `role_name` |  |
| `security_and_analysis` |  |
| `site_admin` |  |
| `size` | The size of the repository, in kilobytes. |
| `slug` |  |
| `ssh_url` |  |
| `stargazers_count` |  |
| `stargazers_url` |  |
| `starred_at` |  |
| `starred_url` |  |
| `state` | The state of the user's membership in the team. |
| `statuses_url` |  |
| `subscribers_count` |  |
| `subscribers_url` |  |
| `subscription_url` |  |
| `subscriptions_url` |  |
| `svn_url` |  |
| `tags_url` |  |
| `team_count` |  |
| `team_url` |  |
| `teams_url` |  |
| `temp_clone_token` |  |
| `title` | The title of the discussion. |
| `topics` |  |
| `trees_url` |  |
| `type` |  |
| `updated_at` |  |
| `url` | URL for the team |
| `user_view_type` |  |
| `visibility` | The repository visibility: public, private, or internal. |
| `watchers` |  |
| `watchers_count` |  |
| `web_commit_signoff_required` | Whether to require contributors to sign off on web-based commits |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`

#### TeamSimple

| Field | Description |
| --- | --- |
| `description` | Description of the team |
| `html_url` |  |
| `id` | Unique identifier of the team |
| `ldap_dn` | Distinguished Name (DN) that team maps to within LDAP environment |
| `members_url` |  |
| `name` | Name of the team |
| `node_id` |  |
| `notification_setting` | The notification setting the team has set |
| `permission` | Permission that the team will have for its repositories |
| `privacy` | The level of privacy this team should have |
| `repositories_url` |  |
| `slug` |  |
| `url` | URL for the team |

Operations: List.

API path: `/orgs/{org}/security-managers`

#### Thread

| Field | Description |
| --- | --- |
| `id` |  |
| `last_read_at` |  |
| `reason` |  |
| `repository` | Minimal Repository |
| `subject` |  |
| `subscription_url` |  |
| `unread` |  |
| `updated_at` |  |
| `url` |  |

Operations: List, Load, Remove.

API path: `/repos/{owner}/{repo}/notifications`

#### ThreadSubscription

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `ignored` | Whether to block all notifications from a thread. |
| `reason` |  |
| `repository_url` |  |
| `subscribed` |  |
| `thread_url` |  |
| `url` |  |

Operations: Load, Update.

API path: `/notifications/threads/{thread_id}/subscription`

#### Topic

| Field | Description |
| --- | --- |
| `names` | An array of topics to add to the repository. |

Operations: List, Update.

API path: `/repos/{owner}/{repo}/topics`

#### User

| Field | Description |
| --- | --- |
| `assignment` | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | Mapping of subject digest to bundles. |
| `avatar_url` |  |
| `bio` | The new short biography of the user. |
| `blog` | The new blog URL of the user. |
| `collaborators` |  |
| `company` | The new company of the user. |
| `created_at` |  |
| `disk_usage` |  |
| `email` | The publicly visible email address of the user. |
| `events_url` |  |
| `followers` |  |
| `followers_url` |  |
| `following` |  |
| `following_url` |  |
| `gists_url` |  |
| `gravatar_id` |  |
| `hireable` | The new hiring availability of the user. |
| `html_url` |  |
| `id` |  |
| `inherited_from` | Team the user has gotten the role through |
| `location` | The new location of the user. |
| `login` |  |
| `name` | The new name of the user. |
| `node_id` |  |
| `organizations_url` |  |
| `owned_private_repos` |  |
| `page_info` | Information about the current page. |
| `plan` |  |
| `predicate_type` | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` |  |
| `private_repos` |  |
| `public_gists` |  |
| `public_repos` |  |
| `received_events_url` |  |
| `repos_url` |  |
| `site_admin` |  |
| `space` |  |
| `starred_at` |  |
| `starred_url` |  |
| `subject_digests` | List of subject digests to fetch attestations for. |
| `subscriptions_url` |  |
| `total_private_repos` |  |
| `twitter_username` | The new Twitter username of the user. |
| `two_factor_authentication` |  |
| `type` |  |
| `updated_at` |  |
| `url` |  |
| `user_view_type` |  |
| `users` | The username for users |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/users/{username}/attestations/bulk-list`

#### UserMarketplacePurchase

| Field | Description |
| --- | --- |
| `account` |  |
| `billing_cycle` |  |
| `free_trial_ends_on` |  |
| `next_billing_date` |  |
| `on_free_trial` |  |
| `plan` | Marketplace Listing Plan |
| `unit_count` |  |
| `updated_at` |  |

Operations: List.

API path: `/user/marketplace_purchases`

#### View

| Field | Description |
| --- | --- |
| `count` |  |
| `timestamp` |  |
| `uniques` |  |

Operations: List.

API path: `/repos/{owner}/{repo}/traffic/views`

#### WebhookConfig

| Field | Description |
| --- | --- |
| `content_type` | The media type used to serialize the payloads. |
| `insecure_ssl` |  |
| `secret` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | The URL to which the payloads will be delivered. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/config`

#### Workflow

| Field | Description |
| --- | --- |
| `badge_url` |  |
| `created_at` |  |
| `deleted_at` |  |
| `html_url` |  |
| `id` |  |
| `name` |  |
| `node_id` |  |
| `path` |  |
| `state` |  |
| `updated_at` |  |
| `url` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/actions/workflows/{workflow_id}`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `actor` | A GitHub user. |
| `artifacts_url` | The URL to the artifacts for the workflow run. |
| `cancel_url` | The URL to cancel the workflow run. |
| `check_suite_id` | The ID of the associated check suite. |
| `check_suite_node_id` | The node ID of the associated check suite. |
| `check_suite_url` | The URL to the associated check suite. |
| `conclusion` |  |
| `created_at` |  |
| `display_title` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` |  |
| `head_branch` |  |
| `head_commit` | A commit. |
| `head_repository` | Minimal Repository |
| `head_repository_id` |  |
| `head_sha` | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` |  |
| `id` | The ID of the workflow run. |
| `jobs_url` | The URL to the jobs for the workflow run. |
| `logs_url` | The URL to download the logs for the workflow run. |
| `name` | The name of the workflow run. |
| `node_id` |  |
| `path` | The full path of the workflow |
| `previous_attempt_url` | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` |  |
| `repository` | Minimal Repository |
| `rerun_url` | The URL to rerun the workflow run. |
| `run_attempt` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | The auto incrementing run number for the workflow run. |
| `run_started_at` | The start time of the latest run. |
| `status` |  |
| `triggering_actor` | A GitHub user. |
| `updated_at` |  |
| `url` | The URL to the workflow run. |
| `workflow_id` | The ID of the parent workflow. |
| `workflow_url` | The URL to the workflow. |

Operations: Create, Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/cancel`

#### WorkflowRunUsage

| Field | Description |
| --- | --- |
| `MACOS` |  |
| `UBUNTU` |  |
| `WINDOWS` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/timing`

#### WorkflowUsage

| Field | Description |
| --- | --- |
| `MACOS` |  |
| `UBUNTU` |  |
| `WINDOWS` |  |
| `id` |  |

Operations: Load.

API path: `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`



## Entities


### Action

Create an instance: `action = client.Action()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `int` | Total minutes used on macOS runner machines. |
| `UBUNTU` | `int` | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `int` | Total minutes used on Windows runner machines. |
| `access_level` | `str` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `dict` | A GitHub user. |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `str` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `bool` |  |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `str` | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `str` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `artifacts_url` | `str` | The URL to the artifacts for the workflow run. |
| `assignees_url` | `str` |  |
| `badge_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `busy` | `bool` |  |
| `can_approve_pull_request_reviews` | `bool` | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `str` | The URL to cancel the workflow run. |
| `check_run_url` | `str` |  |
| `check_suite_id` | `int` | The ID of the associated check suite. |
| `check_suite_node_id` | `str` | The node ID of the associated check suite. |
| `check_suite_url` | `str` | The URL to the associated check suite. |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `code_search_index_status` | `dict` | The status of the code search index for this repository |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `completed_at` | `str` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `str` | The outcome of the job. |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `cpu_cores` | `int` | The number of cores. |
| `created_at` | `str` | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `days` | `int` | The number of days to retain artifacts and logs |
| `default` | `bool` |  |
| `default_branch` | `str` | The default branch of the repository. |
| `default_workflow_permissions` | `str` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `str` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `digest` | `str` | The SHA256 digest of the artifact. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `display_name` | `str` | Display name for this image. |
| `display_title` | `str` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `str` |  |
| `enabled` | `bool` | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `str` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `bool` |  |
| `event` | `str` |  |
| `events_url` | `str` |  |
| `expired` | `bool` | Whether or not the artifact has expired. |
| `expires_at` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `github_owned_allowed` | `bool` | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `head_branch` | `str` | The name of the current branch. |
| `head_commit` | `dict` | A commit. |
| `head_repository` | `dict` | Minimal Repository |
| `head_repository_id` | `int` |  |
| `head_sha` | `str` | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `hosted_runners_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | The ID of the workflow run. |
| `image_details` | `dict` | Provides details of a hosted runner image |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `inputs` | `dict` | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `jobs_url` | `str` | The URL to the jobs for the workflow run. |
| `keys_url` | `str` |  |
| `labels` | `list` | The names of the custom labels to add to the runner. |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `last_active_on` | `str` | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `dict` | License Simple |
| `logs_url` | `str` | The URL to download the logs for the workflow run. |
| `machine_size_details` | `dict` | Provides details of a particular machine spec. |
| `macos_12_core` | `int` | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `str` |  |
| `maximum_runners` | `int` | The maximum amount of hosted runners. |
| `memory_gb` | `int` | The available RAM for the machine spec. |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the new runner. |
| `network_configuration_id` | `str` | The identifier of a hosted compute network configuration. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `os` | `str` | The Operating System of the runner. |
| `owner` | `dict` | A GitHub user. |
| `path` | `str` | The full path of the workflow |
| `patterns_allowed` | `list` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `dict` |  |
| `platform` | `str` | The operating system of the image. |
| `platforms` | `list` |  |
| `previous_attempt_url` | `str` | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `list` | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `list` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `ref` | `str` | The git reference for the workflow. |
| `referenced_workflows` | `list` |  |
| `releases_url` | `str` |  |
| `repository` | `dict` | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `bool` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `str` | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `bool` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `str` |  |
| `run_attempt` | `int` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | The id of the associated workflow run. |
| `run_number` | `int` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `str` | The start time of the latest run. |
| `run_url` | `str` |  |
| `run_workflows_from_fork_pull_requests` | `bool` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `int` | The ID of the runner group to register the runner to. |
| `runner_group_name` | `str` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `str` | The name of the runner to which this job has been assigned. |
| `runners` | `list` | List of runner IDs to add to the runner group. |
| `runners_url` | `str` |  |
| `security_and_analysis` | `dict` |  |
| `selected_repositories_url` | `str` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `list` | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `list` | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `bool` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `size_gb` | `int` | Image size in GB. |
| `size_in_bytes` | `int` | The size in bytes of the artifact. |
| `source` | `str` | The image provider. |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `started_at` | `str` | The time that the job started, in ISO 8601 format. |
| `state` | `str` |  |
| `status` | `str` | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `str` |  |
| `steps` | `list` | Steps in this job. |
| `storage_gb` | `int` | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `total` | `int` | Total minutes used on all runner machines. |
| `total_count` | `int` |  |
| `trees_url` | `str` |  |
| `triggering_actor` | `dict` | A GitHub user. |
| `type` | `str` | The type of label. |
| `ubuntu_16_core` | `int` | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `int` | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `int` | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `int` | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `int` | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `str` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `str` | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `value` | `str` | The value of the variable. |
| `verified_allowed` | `bool` | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `str` | The type of repositories in the organization that can access the variable. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `int` | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `int` | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `int` | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `int` | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `int` | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `str` | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `int` | The ID of the parent workflow. |
| `workflow_name` | `str` | The name of the workflow. |
| `workflow_restrictions_read_only` | `bool` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `dict` |  |
| `workflow_url` | `str` | The URL to the workflow. |

#### Example: Load

```python
action = client.Action().load({"archive_format": "archive_format", "artifact_id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
actions = client.Action().list({"org_id": "example"})
```

#### Example: Create

```python
action = client.Action().create({
    "org_id": "example_org_id",  # str
    "access_level": "example_access_level",  # str
    "active_caches_count": 1,  # int
    "active_caches_size_in_bytes": 1,  # int
    "actor": {},  # dict
    "allows_public_repositories": True,  # bool
    "approval_policy": "example_approval_policy",  # str
    "archive_download_url": "example_archive_download_url",  # str
    "archive_url": "example_archive_url",  # str
    "artifacts_url": "example_artifacts_url",  # str
    "assignees_url": "example_assignees_url",  # str
    "badge_url": "example_badge_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "busy": True,  # bool
    "cancel_url": "example_cancel_url",  # str
    "check_run_url": "example_check_run_url",  # str
    "check_suite_url": "example_check_suite_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "completed_at": "example_completed_at",  # str
    "conclusion": "example_conclusion",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "cpu_cores": 1,  # int
    "created_at": "example_created_at",  # str
    "days": 1,  # int
    "default": True,  # bool
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "display_name": "example_display_name",  # str
    "display_title": "example_display_title",  # str
    "downloads_url": "example_downloads_url",  # str
    "enabled": True,  # bool
    "enabled_repositories": "example_enabled_repositories",  # str
    "event": "example_event",  # str
    "events_url": "example_events_url",  # str
    "expired": True,  # bool
    "expires_at": "example_expires_at",  # str
    "fork": True,  # bool
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "head_branch": "example_head_branch",  # str
    "head_commit": {},  # dict
    "head_repository": {},  # dict
    "head_sha": "example_head_sha",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "image_details": {},  # dict
    "inherited": True,  # bool
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "jobs_url": "example_jobs_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels": [],  # list
    "labels_url": "example_labels_url",  # str
    "languages_url": "example_languages_url",  # str
    "logs_url": "example_logs_url",  # str
    "machine_size_details": {},  # dict
    "memory_gb": 1,  # int
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "os": "example_os",  # str
    "owner": {},  # dict
    "path": "example_path",  # str
    "platform": "example_platform",  # str
    "platforms": [],  # list
    "private": True,  # bool
    "public_ip_enabled": True,  # bool
    "pull_requests": [],  # list
    "pulls_url": "example_pulls_url",  # str
    "ref": "example_ref",  # str
    "releases_url": "example_releases_url",  # str
    "repository": {},  # dict
    "rerun_url": "example_rerun_url",  # str
    "run_id": 1,  # int
    "run_number": 1,  # int
    "run_url": "example_run_url",  # str
    "run_workflows_from_fork_pull_requests": True,  # bool
    "runner_group_id": 1,  # int
    "runner_group_name": "example_runner_group_name",  # str
    "runner_id": 1,  # int
    "runner_name": "example_runner_name",  # str
    "runners": [],  # list
    "runners_url": "example_runners_url",  # str
    "selected_repository_ids": [],  # list
    "size_gb": 1,  # int
    "size_in_bytes": 1,  # int
    "source": "example_source",  # str
    "stargazers_url": "example_stargazers_url",  # str
    "started_at": "example_started_at",  # str
    "state": "example_state",  # str
    "status": "example_status",  # str
    "statuses_url": "example_statuses_url",  # str
    "storage_gb": 1,  # int
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "total_count": 1,  # int
    "trees_url": "example_trees_url",  # str
    "triggering_actor": {},  # dict
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "workflow_id": 1,  # int
    "workflow_name": "example_workflow_name",  # str
    "workflow_url": "example_workflow_url",  # str
})
```


### ActionsArtifactAndLogRetention

Create an instance: `actions_artifact_and_log_retention = client.ActionsArtifactAndLogRetention()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `int` | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `int` | The maximum number of days that can be configured |

#### Example: Load

```python
actions_artifact_and_log_retention = client.ActionsArtifactAndLogRetention().load({"org_id": "org_id"})
```


### ActionsCacheList

Create an instance: `actions_cache_list = client.ActionsCacheList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` |  |
| `last_accessed_at` | `str` |  |
| `ref` | `str` |  |
| `size_in_bytes` | `int` |  |
| `version` | `str` |  |

#### Example: List

```python
actions_cache_lists = client.ActionsCacheList().list({"owner": "example", "repo": "example"})
```


### ActionsCacheUsageByRepository

Create an instance: `actions_cache_usage_by_repository = client.ActionsCacheUsageByRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `str` | The repository owner and name for the cache usage being shown. |

#### Example: Load

```python
actions_cache_usage_by_repository = client.ActionsCacheUsageByRepository().load({"owner": "owner", "repo": "repo"})
```


### ActionsCacheUsageOrgEnterprise

Create an instance: `actions_cache_usage_org_enterprise = client.ActionsCacheUsageOrgEnterprise()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_active_caches_count` | `int` | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `int` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

#### Example: Load

```python
actions_cache_usage_org_enterprise = client.ActionsCacheUsageOrgEnterprise().load({"org_id": "org_id"})
```


### ActionsForkPrContributorApproval

Create an instance: `actions_fork_pr_contributor_approval = client.ActionsForkPrContributorApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval_policy` | `str` | The policy that controls when fork PR workflows require approval from a maintainer. |

#### Example: Load

```python
actions_fork_pr_contributor_approval = client.ActionsForkPrContributorApproval().load({"org_id": "org_id"})
```


### ActionsForkPrWorkflowsPrivateRepo

Create an instance: `actions_fork_pr_workflows_private_repo = client.ActionsForkPrWorkflowsPrivateRepo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `bool` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `bool` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `bool` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

#### Example: Load

```python
actions_fork_pr_workflows_private_repo = client.ActionsForkPrWorkflowsPrivateRepo().load({"org_id": "org_id"})
```


### ActionsGetDefaultWorkflowPermission

Create an instance: `actions_get_default_workflow_permission = client.ActionsGetDefaultWorkflowPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `str` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

#### Example: Load

```python
actions_get_default_workflow_permission = client.ActionsGetDefaultWorkflowPermission().load({"org_id": "org_id"})
```


### ActionsHostedRunner

Create an instance: `actions_hosted_runner = client.ActionsHostedRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enable_static_ip` | `bool` | Whether this runner should be created with a static public IP. |
| `id` | `int` | The unique identifier of the hosted runner. |
| `image` | `dict` | The image of runner. |
| `image_details` | `dict` | Provides details of a hosted runner image |
| `last_active_on` | `str` | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `dict` | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | The maximum amount of hosted runners. |
| `name` | `str` | The name of the hosted runner. |
| `platform` | `str` | The operating system of the image. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `list` | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `int` | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `str` | The machine size of the runner. |
| `status` | `str` | The status of the runner. |

#### Example: Load

```python
actions_hosted_runner = client.ActionsHostedRunner().load({"id": 1, "org_id": "org_id"})
```

#### Example: Create

```python
actions_hosted_runner = client.ActionsHostedRunner().create({
    "org_id": "example_org_id",  # str
    "id": 1,  # int
    "image": {},  # dict
    "image_details": {},  # dict
    "machine_size_details": {},  # dict
    "name": "example_name",  # str
    "platform": "example_platform",  # str
    "public_ip_enabled": True,  # bool
    "size": "example_size",  # str
    "status": "example_status",  # str
})
```


### ActionsHostedRunnerLimit

Create an instance: `actions_hosted_runner_limit = client.ActionsHostedRunnerLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_usage` | `int` | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `int` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

#### Example: Load

```python
actions_hosted_runner_limit = client.ActionsHostedRunnerLimit().load({"org_id": "org_id"})
```


### ActionsOrganizationPermission

Create an instance: `actions_organization_permission = client.ActionsOrganizationPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `str` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `str` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `str` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `str` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```python
actions_organization_permission = client.ActionsOrganizationPermission().load({"org_id": "org_id"})
```


### ActionsPublicKey

Create an instance: `actions_public_key = client.ActionsPublicKey()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` | The Base64 encoded public key. |
| `key_id` | `str` | The identifier for the key. |
| `title` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
actions_public_key = client.ActionsPublicKey().load({"org_id": "org_id"})
```


### ActionsRepositoryPermission

Create an instance: `actions_repository_permission = client.ActionsRepositoryPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `str` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `str` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```python
actions_repository_permission = client.ActionsRepositoryPermission().load({"owner": "owner", "repo": "repo"})
```


### ActionsSecret

Create an instance: `actions_secret = client.ActionsSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the secret. |
| `updated_at` | `str` |  |

#### Example: Load

```python
actions_secret = client.ActionsSecret().load({"id": "actions_secret_id", "owner": "owner", "repo": "repo"})
```


### ActionsVariable

Create an instance: `actions_variable = client.ActionsVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `str` |  |
| `name` | `str` | The name of the variable. |
| `updated_at` | `str` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `str` | The value of the variable. |

#### Example: Load

```python
actions_variable = client.ActionsVariable().load({"id": "actions_variable_id", "owner": "owner", "repo": "repo"})
```


### ActionsWorkflowAccessToRepository

Create an instance: `actions_workflow_access_to_repository = client.ActionsWorkflowAccessToRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `str` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

#### Example: Load

```python
actions_workflow_access_to_repository = client.ActionsWorkflowAccessToRepository().load({"owner": "owner", "repo": "repo"})
```


### Activity

Create an instance: `activity = client.Activity()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_type` | `str` | The type of the activity that was performed. |
| `actor` | `dict` | A GitHub user. |
| `after` | `str` | The SHA of the commit after the activity. |
| `archive_url` | `str` |  |
| `assignees_url` | `str` |  |
| `avatar_url` | `str` |  |
| `before` | `str` | The SHA of the commit before the activity. |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `fork` | `bool` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `gists_url` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `github_id` | `int` |  |
| `gravatar_id` | `str` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `dict` |  |
| `languages_url` | `str` |  |
| `last_read_at` | `str` | Describes the last point that notifications were checked. |
| `login` | `str` |  |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `organizations_url` | `str` |  |
| `owner` | `dict` |  |
| `private` | `bool` |  |
| `pulls_url` | `str` |  |
| `read` | `bool` | Whether the notification has been read. |
| `received_events_url` | `str` |  |
| `ref` | `str` | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `ssh_url` | `str` |  |
| `stargazers_url` | `str` |  |
| `starred_url` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `timestamp` | `str` | The time when the activity occurred. |
| `trees_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
activity = client.Activity().load({"owner": "owner", "repo": "repo"})
```

#### Example: List

```python
activitys = client.Activity().list({"owner": "example", "repo": "example"})
```


### Add

Create an instance: `add = client.Add()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `list` | The GitHub user handles to add to the team. |

#### Example: Create

```python
add = client.Add().create({
    "enterprise": "example_enterprise",  # str
    "team_id": "example_team_id",  # str
    "usernames": [],  # list
})
```


### ApiInsightsRouteStat

Create an instance: `api_insights_route_stat = client.ApiInsightsRouteStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_route` | `str` | The API path's route template |
| `http_method` | `str` | The HTTP method |
| `last_rate_limited_timestamp` | `str` |  |
| `last_request_timestamp` | `str` |  |
| `rate_limited_request_count` | `int` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | The total number of requests within the queried time period |

#### Example: List

```python
api_insights_route_stats = client.ApiInsightsRouteStat().list({"actor_id": 1, "actor_type": "example", "org": "example", "min_timestamp": "example"})
```


### ApiInsightsSubjectStat

Create an instance: `api_insights_subject_stat = client.ApiInsightsSubjectStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `last_rate_limited_timestamp` | `str` |  |
| `last_request_timestamp` | `str` |  |
| `rate_limited_request_count` | `int` |  |
| `subject_id` | `int` |  |
| `subject_name` | `str` |  |
| `subject_type` | `str` |  |
| `total_request_count` | `int` |  |

#### Example: List

```python
api_insights_subject_stats = client.ApiInsightsSubjectStat().list({"org_id": "example", "min_timestamp": "example"})
```


### ApiInsightsSummaryStat

Create an instance: `api_insights_summary_stat = client.ApiInsightsSummaryStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `rate_limited_request_count` | `int` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | The total number of requests within the queried time period |

#### Example: Load

```python
api_insights_summary_stat = client.ApiInsightsSummaryStat().load({"min_timestamp": "min_timestamp"})
```


### ApiInsightsTimeStat

Create an instance: `api_insights_time_stat = client.ApiInsightsTimeStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate_limited_request_count` | `int` |  |
| `timestamp` | `str` |  |
| `total_request_count` | `int` |  |

#### Example: Load

```python
api_insights_time_stat = client.ApiInsightsTimeStat().load({"org_id": "org_id", "user_id": "user_id", "min_timestamp": "min_timestamp", "timestamp_increment": "timestamp_increment"})
```

#### Example: List

```python
api_insights_time_stats = client.ApiInsightsTimeStat().list({"min_timestamp": "example", "timestamp_increment": "example"})
```


### ApiInsightsUserStat

Create an instance: `api_insights_user_stat = client.ApiInsightsUserStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `int` |  |
| `actor_name` | `str` |  |
| `actor_type` | `str` |  |
| `id` | `str` |  |
| `integration_id` | `int` |  |
| `last_rate_limited_timestamp` | `str` |  |
| `last_request_timestamp` | `str` |  |
| `oauth_application_id` | `int` |  |
| `rate_limited_request_count` | `int` |  |
| `total_request_count` | `int` |  |

#### Example: Load

```python
api_insights_user_stat = client.ApiInsightsUserStat().load({"id": "api_insights_user_stat_id", "org_id": "org_id", "min_timestamp": "min_timestamp"})
```


### ApiOverview

Create an instance: `api_overview = client.ApiOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `list` |  |
| `actions_macos` | `list` |  |
| `api` | `list` |  |
| `codespaces` | `list` |  |
| `copilot` | `list` |  |
| `dependabot` | `list` |  |
| `domains` | `dict` |  |
| `git` | `list` |  |
| `github_enterprise_importer` | `list` |  |
| `hooks` | `list` |  |
| `importer` | `list` |  |
| `packages` | `list` |  |
| `pages` | `list` |  |
| `ssh_key_fingerprints` | `dict` |  |
| `ssh_keys` | `list` |  |
| `verifiable_password_authentication` | `bool` |  |
| `web` | `list` |  |

#### Example: List

```python
api_overviews = client.ApiOverview().list()
```


### App

Create an instance: `app = client.App()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `str` |  |
| `account` | `Any` |  |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | Whether anonymous git access is enabled for this repository |
| `app_id` | `int` |  |
| `app_slug` | `str` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `client_id` | `str` |  |
| `client_secret` | `str` |  |
| `clone_url` | `str` |  |
| `code_search_index_status` | `dict` | The status of the code search index for this repository |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contact_email` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `default_branch` | `str` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `str` |  |
| `events` | `list` |  |
| `events_url` | `str` |  |
| `external_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_multiple_single_files` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` | License Simple |
| `master_branch` | `str` |  |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the repository. |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | A GitHub user. |
| `pem` | `str` |  |
| `permissions` | `dict` | The permissions granted to the user access token. |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `repositories_url` | `str` |  |
| `repository_selection` | `str` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `str` |  |
| `single_file_paths` | `list` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `str` |  |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `suspended_at` | `str` |  |
| `suspended_by` | `dict` | A GitHub user. |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` | `str` |  |

#### Example: List

```python
apps = client.App().list()
```

#### Example: Create

```python
app = client.App().create({
    "code": "example_code",  # str
    "access_tokens_url": "example_access_tokens_url",  # str
    "account": "example_account",  # Any
    "app_id": 1,  # int
    "app_slug": "example_app_slug",  # str
    "archive_url": "example_archive_url",  # str
    "archived": True,  # bool
    "assignees_url": "example_assignees_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "clone_url": "example_clone_url",  # str
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "default_branch": "example_default_branch",  # str
    "deployments_url": "example_deployments_url",  # str
    "disabled": True,  # bool
    "downloads_url": "example_downloads_url",  # str
    "events_url": "example_events_url",  # str
    "fork": True,  # bool
    "forks": 1,  # int
    "forks_count": 1,  # int
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "git_url": "example_git_url",  # str
    "has_downloads": True,  # bool
    "has_issues": True,  # bool
    "has_pages": True,  # bool
    "has_projects": True,  # bool
    "has_wiki": True,  # bool
    "homepage": "example_homepage",  # str
    "hooks_url": "example_hooks_url",  # str
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "language": "example_language",  # str
    "languages_url": "example_languages_url",  # str
    "license": {},  # dict
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "mirror_url": "example_mirror_url",  # str
    "notifications_url": "example_notifications_url",  # str
    "open_issues": 1,  # int
    "open_issues_count": 1,  # int
    "private": True,  # bool
    "pulls_url": "example_pulls_url",  # str
    "pushed_at": "example_pushed_at",  # str
    "releases_url": "example_releases_url",  # str
    "repositories_url": "example_repositories_url",  # str
    "repository_selection": "example_repository_selection",  # str
    "single_file_name": "example_single_file_name",  # str
    "size": 1,  # int
    "ssh_url": "example_ssh_url",  # str
    "stargazers_count": 1,  # int
    "stargazers_url": "example_stargazers_url",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "suspended_at": "example_suspended_at",  # str
    "suspended_by": {},  # dict
    "svn_url": "example_svn_url",  # str
    "tags_url": "example_tags_url",  # str
    "target_id": 1,  # int
    "target_type": "example_target_type",  # str
    "teams_url": "example_teams_url",  # str
    "trees_url": "example_trees_url",  # str
    "url": "example_url",  # str
    "watchers": 1,  # int
    "watchers_count": 1,  # int
})
```


### Artifact

Create an instance: `artifact = client.Artifact()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `head_branch` | `str` |  |
| `head_repository_id` | `int` |  |
| `head_sha` | `str` |  |
| `id` | `int` |  |
| `repository_id` | `int` |  |

#### Example: Load

```python
artifact = client.Artifact().load({"id": 1, "owner": "owner", "repo": "repo"})
```


### Assignee

Create an instance: `assignee = client.Assignee()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
assignees = client.Assignee().list({"owner": "example", "repo": "example"})
```


### AuthenticationToken

Create an instance: `authentication_token = client.AuthenticationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `str` |  |
| `token` | `str` |  |

#### Example: Create

```python
authentication_token = client.AuthenticationToken().create({
    "org_id": "example_org_id",  # str
})
```


### Authorization

Create an instance: `authorization = client.Authorization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `str` | The access_token of the OAuth or GitHub application. |
| `app` | `dict` |  |
| `created_at` | `str` |  |
| `expires_at` | `str` |  |
| `fingerprint` | `str` |  |
| `hashed_token` | `str` |  |
| `id` | `int` |  |
| `installation` | `dict` |  |
| `note` | `str` |  |
| `note_url` | `str` |  |
| `permissions` | `dict` | The permissions granted to the user access token. |
| `repositories` | `list` | The list of repository names to scope the user access token to. |
| `repository_ids` | `list` | The list of repository IDs to scope the user access token to. |
| `scopes` | `list` | A list of scopes that this authorization is in. |
| `target` | `str` | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | The ID of the user or organization to scope the user access token to. |
| `token` | `str` |  |
| `token_last_eight` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |

#### Example: Create

```python
authorization = client.Authorization().create({
    "application_id": "example_application_id",  # str
    "access_token": "example_access_token",  # str
    "app": {},  # dict
    "created_at": "example_created_at",  # str
    "expires_at": "example_expires_at",  # str
    "fingerprint": "example_fingerprint",  # str
    "hashed_token": "example_hashed_token",  # str
    "id": 1,  # int
    "installation": {},  # dict
    "note": "example_note",  # str
    "note_url": "example_note_url",  # str
    "scopes": [],  # list
    "token": "example_token",  # str
    "token_last_eight": "example_token_last_eight",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### Autolink

Create an instance: `autolink = client.Autolink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `is_alphanumeric` | `bool` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `str` | The prefix of a key that is linkified. |
| `updated_at` | `str` |  |
| `url_template` | `str` | A template for the target URL that is generated if a key was found. |

#### Example: Load

```python
autolink = client.Autolink().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
autolinks = client.Autolink().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
autolink = client.Autolink().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "id": 1,  # int
    "is_alphanumeric": True,  # bool
    "key_prefix": "example_key_prefix",  # str
    "url_template": "example_url_template",  # str
})
```


### BaseGist

Create an instance: `base_gist = client.BaseGist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `files` | `dict` |  |
| `forks` | `list` |  |
| `forks_url` | `str` |  |
| `git_pull_url` | `str` |  |
| `git_push_url` | `str` |  |
| `history` | `list` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `owner` | `dict` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `str` | A GitHub user. |

#### Example: List

```python
base_gists = client.BaseGist().list()
```

#### Example: Create

```python
base_gist = client.BaseGist().create({
    "gist_id": "example_gist_id",  # str
})
```


### BillingUsageReport

Create an instance: `billing_usage_report = client.BillingUsageReport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | Date of the usage line item. |
| `discountAmount` | `float` | Discount amount of the usage line item. |
| `grossAmount` | `float` | Gross amount of the usage line item. |
| `netAmount` | `float` | Net amount of the usage line item. |
| `organizationName` | `str` | Name of the organization. |
| `pricePerUnit` | `float` | Price per unit of the usage line item. |
| `product` | `str` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `str` | Name of the repository. |
| `sku` | `str` | SKU name. |
| `unitType` | `str` | Unit type of the usage line item. |

#### Example: List

```python
billing_usage_reports = client.BillingUsageReport().list({"org": "example"})
```


### BillingUsageReportUser

Create an instance: `billing_usage_report_user = client.BillingUsageReportUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | Date of the usage line item. |
| `discountAmount` | `float` | Discount amount of the usage line item. |
| `grossAmount` | `float` | Gross amount of the usage line item. |
| `netAmount` | `float` | Net amount of the usage line item. |
| `pricePerUnit` | `float` | Price per unit of the usage line item. |
| `product` | `str` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `str` | Name of the repository. |
| `sku` | `str` | SKU name. |
| `unitType` | `str` | Unit type of the usage line item. |

#### Example: List

```python
billing_usage_report_users = client.BillingUsageReportUser().list({"username": "example"})
```


### Blob

Create an instance: `blob = client.Blob()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` |  |
| `encoding` | `str` |  |
| `highlighted_content` | `str` |  |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `sha` | `str` |  |
| `size` | `int` |  |
| `url` | `str` |  |

#### Example: Load

```python
blob = client.Blob().load({"id": "blob_id", "owner": "owner", "repo": "repo"})
```


### Block

Create an instance: `block = client.Block()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
blocks = client.Block().list()
```


### Branch

Create an instance: `branch = client.Branch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` | Commit |
| `id` | `str` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `pattern` | `str` |  |
| `protected` | `bool` |  |
| `protection` | `dict` | Branch Protection |
| `protection_url` | `str` |  |
| `required_approving_review_count` | `int` |  |

#### Example: Load

```python
branch = client.Branch().load({"id": "branch_id", "owner": "owner", "repo": "repo"})
```


### BranchProtection

Create an instance: `branch_protection = client.BranchProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `dict` |  |
| `allow_force_pushes` | `dict` |  |
| `allow_fork_syncing` | `dict` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `dict` |  |
| `enabled` | `bool` |  |
| `enforce_admins` | `dict` | Protected Branch Admin Enforced |
| `id` | `str` |  |
| `lock_branch` | `dict` | Whether to set the branch as read-only. |
| `name` | `str` |  |
| `protection_url` | `str` |  |
| `required_conversation_resolution` | `dict` |  |
| `required_linear_history` | `dict` |  |
| `required_pull_request_reviews` | `dict` | Protected Branch Pull Request Review |
| `required_signatures` | `dict` |  |
| `required_status_checks` | `dict` | Protected Branch Required Status Check |
| `restrictions` | `dict` | Branch Restriction Policy |
| `url` | `str` |  |

#### Example: Load

```python
branch_protection = client.BranchProtection().load({"id": "branch_protection_id", "owner": "owner", "repo": "repo"})
```


### BranchRestrictionPolicy

Create an instance: `branch_restriction_policy = client.BranchRestrictionPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `list` |  |
| `apps_url` | `str` |  |
| `teams` | `list` |  |
| `teams_url` | `str` |  |
| `url` | `str` |  |
| `users` | `list` |  |
| `users_url` | `str` |  |

#### Example: List

```python
branch_restriction_policys = client.BranchRestrictionPolicy().list({"branch_id": "example", "owner": "example", "repo": "example"})
```


### BranchShort

Create an instance: `branch_short = client.BranchShort()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` |  |
| `name` | `str` |  |
| `protected` | `bool` |  |

#### Example: List

```python
branch_shorts = client.BranchShort().list({"commit_sha": "example", "owner": "example", "repo": "example"})
```


### BranchWithProtection

Create an instance: `branch_with_protection = client.BranchWithProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `new_name` | `str` | The new name of the branch. |

#### Example: Create

```python
branch_with_protection = client.BranchWithProtection().create({
    "id": "example_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "new_name": "example_new_name",  # str
})
```


### Campaign

Create an instance: `campaign = client.Campaign()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_stats` | `dict` |  |
| `closed_at` | `str` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `list` | The code scanning alerts to include in this campaign |
| `contact_link` | `str` | The contact link of the campaign. |
| `created_at` | `str` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `str` | The campaign description |
| `ends_at` | `str` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | If true, will automatically generate issues for the campaign. |
| `id` | `str` |  |
| `managers` | `list` | The campaign managers |
| `name` | `str` | The campaign name |
| `number` | `int` | The number of the newly created campaign |
| `published_at` | `str` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `str` | Indicates whether a campaign is open or closed |
| `team_managers` | `list` | The campaign team managers |
| `updated_at` | `str` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```python
campaign = client.Campaign().load({"id": 1, "org_id": "org_id"})
```

#### Example: List

```python
campaigns = client.Campaign().list({"org_id": "example"})
```

#### Example: Create

```python
campaign = client.Campaign().create({
    "org_id": "example_org_id",  # str
    "alert_stats": {},  # dict
    "code_scanning_alerts": [],  # list
    "contact_link": "example_contact_link",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "ends_at": "example_ends_at",  # str
    "managers": [],  # list
    "number": 1,  # int
    "state": "example_state",  # str
    "updated_at": "example_updated_at",  # str
})
```


### Check

Create an instance: `check = client.Check()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `str` |  |
| `app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `before` | `str` |  |
| `check_runs_url` | `str` |  |
| `check_suite` | `dict` |  |
| `completed_at` | `str` |  |
| `conclusion` | `str` |  |
| `created_at` | `str` |  |
| `deployment` | `dict` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `str` |  |
| `external_id` | `str` |  |
| `head_branch` | `str` |  |
| `head_commit` | `dict` | A commit. |
| `head_sha` | `str` | The SHA of the commit that is being checked. |
| `html_url` | `str` |  |
| `id` | `int` | The id of the check. |
| `latest_check_runs_count` | `int` |  |
| `name` | `str` | The name of the check. |
| `node_id` | `str` |  |
| `output` | `dict` |  |
| `pull_requests` | `list` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `dict` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `started_at` | `str` |  |
| `status` | `str` | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
checks = client.Check().list({"owner": "example", "repo": "example"})
```


### CheckAnnotation

Create an instance: `check_annotation = client.CheckAnnotation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation_level` | `str` |  |
| `blob_href` | `str` |  |
| `end_column` | `int` |  |
| `end_line` | `int` |  |
| `message` | `str` |  |
| `path` | `str` |  |
| `raw_details` | `str` |  |
| `start_column` | `int` |  |
| `start_line` | `int` |  |
| `title` | `str` |  |

#### Example: List

```python
check_annotations = client.CheckAnnotation().list({"check_run_id": 1, "owner": "example", "repo": "example"})
```


### CheckAutomatedSecurityFix

Create an instance: `check_automated_security_fix = client.CheckAutomatedSecurityFix()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `bool` | Whether Dependabot security updates are paused for the repository. |

#### Example: Load

```python
check_automated_security_fix = client.CheckAutomatedSecurityFix().load({"owner": "owner", "repo": "repo"})
```


### CheckRun

Create an instance: `check_run = client.CheckRun()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `list` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `dict` |  |
| `completed_at` | `str` | The time the check completed. |
| `conclusion` | `str` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `dict` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `str` | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `str` | A reference for the run on the integrator's system. |
| `head_sha` | `str` | The SHA of the commit that is being checked. |
| `html_url` | `str` |  |
| `id` | `int` | The id of the check. |
| `name` | `str` | The name of the check. |
| `node_id` | `str` |  |
| `output` | `dict` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `list` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `str` | The time that the check run began. |
| `status` | `str` | The phase of the lifecycle that the check is currently in. |
| `url` | `str` |  |

#### Example: Load

```python
check_run = client.CheckRun().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
check_run = client.CheckRun().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "app": {},  # dict
    "check_suite": {},  # dict
    "completed_at": "example_completed_at",  # str
    "conclusion": "example_conclusion",  # str
    "deployment": {},  # dict
    "details_url": "example_details_url",  # str
    "external_id": "example_external_id",  # str
    "head_sha": "example_head_sha",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "output": {},  # dict
    "pull_requests": [],  # list
    "started_at": "example_started_at",  # str
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```


### CheckSuite

Create an instance: `check_suite = client.CheckSuite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `str` |  |
| `app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `before` | `str` |  |
| `check_runs_url` | `str` |  |
| `conclusion` | `str` |  |
| `created_at` | `str` |  |
| `head_branch` | `str` |  |
| `head_commit` | `dict` | A commit. |
| `head_sha` | `str` | The SHA of the head commit that is being checked. |
| `id` | `int` |  |
| `latest_check_runs_count` | `int` |  |
| `node_id` | `str` |  |
| `pull_requests` | `list` |  |
| `repository` | `dict` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `status` | `str` | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
check_suite = client.CheckSuite().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
check_suite = client.CheckSuite().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "after": "example_after",  # str
    "app": {},  # dict
    "before": "example_before",  # str
    "check_runs_url": "example_check_runs_url",  # str
    "conclusion": "example_conclusion",  # str
    "created_at": "example_created_at",  # str
    "head_branch": "example_head_branch",  # str
    "head_commit": {},  # dict
    "head_sha": "example_head_sha",  # str
    "id": 1,  # int
    "latest_check_runs_count": 1,  # int
    "node_id": "example_node_id",  # str
    "pull_requests": [],  # list
    "repository": {},  # dict
    "status": "example_status",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### CheckSuitePreference

Create an instance: `check_suite_preference = client.CheckSuitePreference()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_trigger_checks` | `list` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `dict` |  |
| `repository` | `dict` | Minimal Repository |


### Classroom

Create an instance: `classroom = client.Classroom()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Returns whether classroom is archived or not. |
| `avatar_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the classroom. |
| `login` | `str` |  |
| `name` | `str` | The name of the classroom. |
| `node_id` | `str` |  |
| `url` | `str` | The url of the classroom on GitHub Classroom. |

#### Example: Load

```python
classroom = client.Classroom().load({"id": 1})
```

#### Example: List

```python
classrooms = client.Classroom().list()
```


### ClassroomAcceptedAssignment

Create an instance: `classroom_accepted_assignment = client.ClassroomAcceptedAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `dict` | A GitHub Classroom assignment |
| `commit_count` | `int` | Count of student commits. |
| `grade` | `str` | Most recent grade. |
| `id` | `int` | Unique identifier of the repository. |
| `passing` | `bool` | Whether a submission passed. |
| `repository` | `dict` | A GitHub repository view for Classroom |
| `students` | `list` |  |
| `submitted` | `bool` | Whether an accepted assignment has been submitted. |

#### Example: List

```python
classroom_accepted_assignments = client.ClassroomAcceptedAssignment().list({"assignment_id": 1})
```


### ClassroomAssignment

Create an instance: `classroom_assignment = client.ClassroomAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `dict` | A GitHub Classroom classroom |
| `deadline` | `str` | The time at which the assignment is due. |
| `editor` | `str` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `int` | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Whether the invitation link is enabled. |
| `invite_link` | `str` | The link that a student can use to accept the assignment. |
| `language` | `str` | The programming language used in the assignment. |
| `max_members` | `int` | The maximum allowable members per team. |
| `max_teams` | `int` | The maximum allowable teams for the assignment. |
| `passing` | `int` | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Whether an accepted assignment creates a public repository. |
| `slug` | `str` | Sluggified name of the assignment. |
| `starter_code_repository` | `dict` | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | The number of students that have submitted the assignment. |
| `title` | `str` | Assignment title. |
| `type` | `str` | Whether it's a group assignment or individual assignment. |

#### Example: Load

```python
classroom_assignment = client.ClassroomAssignment().load({"id": 1})
```


### ClassroomAssignmentGrade

Create an instance: `classroom_assignment_grade = client.ClassroomAssignmentGrade()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment_name` | `str` | Name of the assignment |
| `assignment_url` | `str` | URL of the assignment |
| `github_username` | `str` | GitHub username of the student |
| `group_name` | `str` | If a group assignment, name of the group the student is in |
| `points_available` | `int` | Number of points available for the assignment |
| `points_awarded` | `int` | Number of points awarded to the student |
| `roster_identifier` | `str` | Roster identifier of the student |
| `starter_code_url` | `str` | URL of the starter code for the assignment |
| `student_repository_name` | `str` | Name of the student's assignment repository |
| `student_repository_url` | `str` | URL of the student's assignment repository |
| `submission_timestamp` | `str` | Timestamp of the student's assignment submission |

#### Example: List

```python
classroom_assignment_grades = client.ClassroomAssignmentGrade().list({"assignment_id": 1})
```


### Clone

Create an instance: `clone = client.Clone()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `str` |  |
| `uniques` | `int` |  |

#### Example: List

```python
clones = client.Clone().list({"owner": "example", "repo": "example"})
```


### CodeFrequency

Create an instance: `code_frequency = client.CodeFrequency()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
code_frequencys = client.CodeFrequency().list({"owner": "example", "repo": "example"})
```


### CodeFrequencyStat

Create an instance: `code_frequency_stat = client.CodeFrequencyStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
code_frequency_stats = client.CodeFrequencyStat().list({"owner": "example", "repo": "example"})
```


### CodeOfConduct

Create an instance: `code_of_conduct = client.CodeOfConduct()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `str` |  |
| `html_url` | `str` |  |
| `key` | `str` |  |
| `name` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
code_of_conduct = client.CodeOfConduct().load({"key": "key"})
```

#### Example: List

```python
code_of_conducts = client.CodeOfConduct().list()
```


### CodeScanning

Create an instance: `code_scanning = client.CodeScanning()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkout_uri` | `str` | The base directory used in the analysis, as it appears in the SARIF file. |
| `commit_sha` | `str` | The SHA of the commit to which the analysis you are uploading relates. |
| `ref` | `str` | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `sarif` | `str` | A Base64 string representing the SARIF file to upload. |
| `started_at` | `str` | The time that the analysis run began. |
| `tool_name` | `str` | The name of the tool used to generate the code scanning analysis. |
| `validate` | `bool` | Whether the SARIF file will be validated according to the code scanning specifications. |

#### Example: Create

```python
code_scanning = client.CodeScanning().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "commit_sha": "example_commit_sha",  # str
    "ref": "example_ref",  # str
    "sarif": "example_sarif",  # str
})
```


### CodeScanningAlert

Create an instance: `code_scanning_alert = client.CodeScanningAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_request` | `bool` | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | A GitHub user. |
| `dismissed_at` | `str` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | A GitHub user. |
| `dismissed_comment` | `str` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `id` | `str` |  |
| `instances_url` | `str` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` |  |
| `number` | `int` | The security alert number. |
| `rule` | `dict` |  |
| `state` | `str` | State of a code scanning alert. |
| `tool` | `dict` |  |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |

#### Example: Load

```python
code_scanning_alert = client.CodeScanningAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```


### CodeScanningAlertInstance

Create an instance: `code_scanning_alert_instance = client.CodeScanningAlertInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `str` | Identifies the configuration under which the analysis was executed. |
| `category` | `str` | Identifies the configuration under which the analysis was executed. |
| `classifications` | `list` | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `str` |  |
| `environment` | `str` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `str` |  |
| `location` | `dict` | Describe a region within a file for the alert. |
| `message` | `dict` |  |
| `ref` | `str` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `str` | State of a code scanning alert. |

#### Example: List

```python
code_scanning_alert_instances = client.CodeScanningAlertInstance().list({"alert_number": 1, "owner": "example", "repo": "example"})
```


### CodeScanningAlertItem

Create an instance: `code_scanning_alert_item = client.CodeScanningAlertItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | A GitHub user. |
| `dismissed_at` | `str` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | A GitHub user. |
| `dismissed_comment` | `str` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `instances_url` | `str` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` |  |
| `number` | `int` | The security alert number. |
| `rule` | `dict` |  |
| `state` | `str` | State of a code scanning alert. |
| `tool` | `dict` |  |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |

#### Example: List

```python
code_scanning_alert_items = client.CodeScanningAlertItem().list({"owner": "example", "repo": "example"})
```


### CodeScanningAnalysi

Create an instance: `code_scanning_analysi = client.CodeScanningAnalysi()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `str` | Identifies the configuration under which the analysis was executed. |
| `category` | `str` | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | `str` | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | `str` | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` | `bool` |  |
| `environment` | `str` | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `str` |  |
| `guid` | `str` | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `int` | Unique identifier for this analysis. |
| `name` | `str` | The name of the tool used to generate the code scanning analysis. |
| `ref` | `str` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `int` | The total number of results in the analysis. |
| `rules_count` | `int` | The total number of rules used in the analysis. |
| `sarif_id` | `str` | An identifier for the upload. |
| `tool` | `dict` |  |
| `url` | `str` | The REST API URL of the analysis resource. |
| `version` | `str` | The version of the tool used to generate the code scanning analysis. |
| `warning` | `str` | Warning generated when processing the analysis |

#### Example: Load

```python
code_scanning_analysi = client.CodeScanningAnalysi().load({"analysis_id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
code_scanning_analysis = client.CodeScanningAnalysi().list({"owner": "example", "repo": "example"})
```


### CodeScanningAnalysisDeletion

Create an instance: `code_scanning_analysis_deletion = client.CodeScanningAnalysisDeletion()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CodeScanningAutofix

Create an instance: `code_scanning_autofix = client.CodeScanningAutofix()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | The description of an autofix. |
| `started_at` | `str` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `str` | The status of an autofix. |

#### Example: Load

```python
code_scanning_autofix = client.CodeScanningAutofix().load({"alert_number": 1, "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
code_scanning_autofix = client.CodeScanningAutofix().create({
    "alert_number": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "description": "example_description",  # str
    "started_at": "example_started_at",  # str
    "status": "example_status",  # str
})
```


### CodeScanningAutofixCommit

Create an instance: `code_scanning_autofix_commit = client.CodeScanningAutofixCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `str` | Commit message to be used. |
| `target_ref` | `str` | The Git reference of target branch for the commit. |

#### Example: Create

```python
code_scanning_autofix_commit = client.CodeScanningAutofixCommit().create({
    "alert_id": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```


### CodeScanningCodeqlDatabase

Create an instance: `code_scanning_codeql_database = client.CodeScanningCodeqlDatabase()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `commit_oid` | `str` | The commit SHA of the repository at the time the CodeQL database was created. |
| `content_type` | `str` | The MIME type of the CodeQL database file. |
| `created_at` | `str` | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | The ID of the CodeQL database. |
| `language` | `str` | The language of the CodeQL database. |
| `login` | `str` |  |
| `name` | `str` | The name of the CodeQL database. |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `size` | `int` | The size of the CodeQL database file in bytes. |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `dict` | A GitHub user. |
| `url` | `str` | The URL at which to download the CodeQL database. |
| `user_view_type` | `str` |  |

#### Example: Load

```python
code_scanning_codeql_database = client.CodeScanningCodeqlDatabase().load({"language": "language", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
code_scanning_codeql_databases = client.CodeScanningCodeqlDatabase().list({"owner": "example", "repo": "example"})
```


### CodeScanningDefaultSetup

Create an instance: `code_scanning_default_setup = client.CodeScanningDefaultSetup()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `languages` | `list` | Languages to be analyzed. |
| `query_suite` | `str` | CodeQL query suite to be used. |
| `runner_label` | `str` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `str` | Runner type to be used. |
| `schedule` | `str` | The frequency of the periodic analysis. |
| `state` | `str` | Code scanning default setup has been configured or not. |
| `threat_model` | `str` | Threat model to be used for code scanning analysis. |
| `updated_at` | `str` | Timestamp of latest configuration update. |

#### Example: List

```python
code_scanning_default_setups = client.CodeScanningDefaultSetup().list({"owner": "example", "repo": "example"})
```


### CodeScanningOrganizationAlertItem

Create an instance: `code_scanning_organization_alert_item = client.CodeScanningOrganizationAlertItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | A GitHub user. |
| `dismissed_at` | `str` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | A GitHub user. |
| `dismissed_comment` | `str` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `instances_url` | `str` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` |  |
| `number` | `int` | The security alert number. |
| `repository` | `dict` | A GitHub repository. |
| `rule` | `dict` |  |
| `state` | `str` | State of a code scanning alert. |
| `tool` | `dict` |  |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |

#### Example: List

```python
code_scanning_organization_alert_items = client.CodeScanningOrganizationAlertItem().list({"org_id": "example"})
```


### CodeScanningSarifsStatus

Create an instance: `code_scanning_sarifs_status = client.CodeScanningSarifsStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analyses_url` | `str` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `list` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `str` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

#### Example: Load

```python
code_scanning_sarifs_status = client.CodeScanningSarifsStatus().load({"owner": "owner", "repo": "repo", "sarif_id": "sarif_id"})
```


### CodeScanningVariantAnalysi

Create an instance: `code_scanning_variant_analysi = client.CodeScanningVariantAnalysi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions_workflow_run_id` | `int` | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `dict` | A GitHub user. |
| `completed_at` | `str` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `dict` | A GitHub repository. |
| `created_at` | `str` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `str` | The reason for a failure of the variant analysis. |
| `id` | `int` | The ID of the variant analysis. |
| `language` | `str` | The language targeted by the CodeQL query |
| `query_language` | `str` | The language targeted by the CodeQL query |
| `query_pack` | `str` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `str` | The download url for the query pack. |
| `repositories` | `list` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `list` | List of repository lists to run the query against. |
| `repository_owners` | `list` | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `list` |  |
| `skipped_repositories` | `dict` | Information about repositories that were skipped from processing. |
| `status` | `str` |  |
| `updated_at` | `str` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```python
code_scanning_variant_analysi = client.CodeScanningVariantAnalysi().load({"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
code_scanning_variant_analysi = client.CodeScanningVariantAnalysi().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "actor": {},  # dict
    "controller_repo": {},  # dict
    "id": 1,  # int
    "language": "example_language",  # str
    "query_language": "example_query_language",  # str
    "query_pack": "example_query_pack",  # str
    "query_pack_url": "example_query_pack_url",  # str
    "skipped_repositories": {},  # dict
    "status": "example_status",  # str
})
```


### CodeScanningVariantAnalysisRepoTask

Create an instance: `code_scanning_variant_analysis_repo_task = client.CodeScanningVariantAnalysisRepoTask()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archive_url` | `str` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `str` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `str` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `str` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `str` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `str` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `str` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `str` | A template for the API URL to compare two commits or refs. |
| `contents_url` | `str` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `str` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `str` | The API URL to list the deployments of the repository. |
| `description` | `str` | The repository description. |
| `downloads_url` | `str` | The API URL to list the downloads on the repository. |
| `events_url` | `str` | The API URL to list the events of the repository. |
| `fork` | `bool` | Whether the repository is a fork. |
| `forks_url` | `str` | The API URL to list the forks of the repository. |
| `full_name` | `str` | The full, globally unique, name of the repository. |
| `git_commits_url` | `str` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `str` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `str` | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `int` | A unique identifier of the repository. |
| `hooks_url` | `str` | The API URL to list the hooks on the repository. |
| `html_url` | `str` | The URL to view the repository on GitHub.com. |
| `id` | `str` | A unique identifier of the repository. |
| `issue_comment_url` | `str` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `str` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `str` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `str` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `str` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `str` | The API URL to get information about the languages of the repository. |
| `merges_url` | `str` | The API URL to merge branches in the repository. |
| `milestones_url` | `str` | A template for the API URL to get information about milestones of the repository. |
| `name` | `str` | The name of the repository. |
| `node_id` | `str` | The GraphQL identifier of the repository. |
| `notifications_url` | `str` | A template for the API URL to get information about notifications on the repository. |
| `owner` | `dict` | A GitHub user. |
| `private` | `bool` | Whether the repository is private. |
| `pulls_url` | `str` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `str` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `str` | The API URL to list the stargazers on the repository. |
| `statuses_url` | `str` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `str` | The API URL to list the subscribers on the repository. |
| `subscription_url` | `str` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `str` | The API URL to get information about tags on the repository. |
| `teams_url` | `str` | The API URL to list the teams on the repository. |
| `trees_url` | `str` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `str` | The URL to get more information about the repository from the GitHub API. |

#### Example: Load

```python
code_scanning_variant_analysis_repo_task = client.CodeScanningVariantAnalysisRepoTask().load({"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo", "repo_name": "repo_name", "repo_owner": "repo_owner"})
```


### CodeSecurity

Create an instance: `code_security = client.CodeSecurity()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `str` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `str` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `dict` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `str` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `dict` | Feature options for code scanning |
| `created_at` | `str` |  |
| `default_for_new_repos` | `str` | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `str` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `str` | The enablement status of Dependabot security updates |
| `dependency_graph` | `str` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `str` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `dict` | Feature options for Automatic dependency submission |
| `description` | `str` | A description of the code security configuration |
| `enforcement` | `str` | The enforcement status for a security configuration |
| `html_url` | `str` | The URL of the configuration |
| `id` | `int` | The ID of the code security configuration |
| `name` | `str` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `str` | The enablement status of private vulnerability reporting |
| `secret_scanning` | `str` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `str` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `str` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `dict` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `str` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `str` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `str` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `str` | The enablement status of secret scanning validity checks |
| `target_type` | `str` | The type of the code security configuration. |
| `updated_at` | `str` |  |
| `url` | `str` | The URL of the configuration |


### CodeSecurityConfiguration

Create an instance: `code_security_configuration = client.CodeSecurityConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `str` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `str` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `dict` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `str` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `dict` | Feature options for code scanning |
| `code_security` | `str` | The enablement status of GitHub Code Security features. |
| `created_at` | `str` |  |
| `dependabot_alerts` | `str` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `str` | The enablement status of Dependabot security updates |
| `dependency_graph` | `str` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `str` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `dict` | Feature options for Automatic dependency submission |
| `description` | `str` | A description of the code security configuration |
| `enforcement` | `str` | The enforcement status for a security configuration |
| `html_url` | `str` | The URL of the configuration |
| `id` | `int` | The ID of the code security configuration |
| `name` | `str` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `str` | The enablement status of private vulnerability reporting |
| `scope` | `str` | The type of repositories to attach the configuration to. |
| `secret_protection` | `str` | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `str` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `str` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `str` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `dict` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `str` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `str` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `str` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `str` | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `list` | An array of repository IDs to attach the configuration to. |
| `target_type` | `str` | The type of the code security configuration. |
| `updated_at` | `str` |  |
| `url` | `str` | The URL of the configuration |

#### Example: Load

```python
code_security_configuration = client.CodeSecurityConfiguration().load({"id": 1, "enterprise": "enterprise"})
```

#### Example: List

```python
code_security_configurations = client.CodeSecurityConfiguration().list({"org_id": "example"})
```

#### Example: Create

```python
code_security_configuration = client.CodeSecurityConfiguration().create({
    "enterprise": "example_enterprise",  # str
    "scope": "example_scope",  # str
})
```


### CodeSecurityConfigurationRepository

Create an instance: `code_security_configuration_repository = client.CodeSecurityConfigurationRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `repository` | `dict` | A GitHub repository. |
| `status` | `str` | The attachment status of the code security configuration on the repository. |

#### Example: List

```python
code_security_configuration_repositorys = client.CodeSecurityConfigurationRepository().list({"configuration_id": 1})
```


### CodeSecurityDefaultConfiguration

Create an instance: `code_security_default_configuration = client.CodeSecurityDefaultConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `dict` | A code security configuration |
| `default_for_new_repos` | `Any` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

#### Example: List

```python
code_security_default_configurations = client.CodeSecurityDefaultConfiguration().list({"enterprise": "example"})
```


### CodeownersError

Create an instance: `codeowners_error = client.CodeownersError()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column` | `int` | The column number where this errors occurs. |
| `kind` | `str` | The type of error. |
| `line` | `int` | The line number where this errors occurs. |
| `message` | `str` | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `str` | The path of the file where the error occured. |
| `source` | `str` | The contents of the line where the error occurs. |
| `suggestion` | `str` | Suggested action to fix the error. |

#### Example: List

```python
codeowners_errors = client.CodeownersError().list({"owner": "example", "repo": "example"})
```


### Codespace

Create an instance: `codespace = client.Codespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `bool` | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` |  |
| `assignees_url` | `str` |  |
| `billable_owner` | `dict` | A GitHub user. |
| `blobs_url` | `str` |  |
| `branch` | `str` | Name of the exported branch |
| `branches_url` | `str` |  |
| `client_ip` | `str` | IP for location auto-detection when proxying a request |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `completed_at` | `str` | Completion time of the last export operation |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `cpus` | `int` | How many cores are available to the codespace. |
| `created_at` | `str` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` |  |
| `defaults` | `dict` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `devcontainer_path` | `str` | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `bool` |  |
| `display_name` | `str` | Display name for this codespace. |
| `downloads_url` | `str` |  |
| `encrypted_value` | `str` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `str` | UUID identifying this codespace's environment. |
| `events_url` | `str` |  |
| `export_url` | `str` | Url for fetching export details |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `geo` | `str` | The geographic area for this codespace. |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_status` | `dict` | Details about the codespace's git repository. |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` | Web url for the exported branch |
| `id` | `str` | Id for the export details |
| `idle_timeout_minutes` | `int` | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `str` | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `bool` |  |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `key` | `str` | The Base64 encoded public key. |
| `key_id` | `str` | The identifier for the key. |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `last_known_stop_notice` | `str` | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `last_used_at` | `str` | Last known time this codespace was started. |
| `license` | `dict` |  |
| `location` | `str` | The initally assigned location of a new codespace. |
| `machine` | `dict` | A description of the machine powering a codespace. |
| `machines_url` | `str` | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `int` | How much memory is available to the codespace. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `multi_repo_permissions_opt_out` | `bool` | Whether to authorize requested permissions from devcontainer.json |
| `name` | `str` | The name of the secret. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `operating_system` | `str` | The operating system of the machine. |
| `owner` | `dict` | A GitHub user. |
| `path` | `str` |  |
| `pending_operation` | `bool` | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `str` | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `dict` |  |
| `prebuild` | `bool` | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `str` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | Whether the new repository should be private. |
| `publish_url` | `str` | API URL to publish this codespace to a new repository. |
| `pulls_url` | `str` | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `str` |  |
| `recent_folders` | `list` | Recently opened folders inside the codespace. |
| `ref` | `str` | Git ref (typically a branch name) for this codespace |
| `releases_url` | `str` |  |
| `repository` | `dict` | Minimal Repository |
| `retention_expires_at` | `str` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `str` |  |
| `runtime_constraints` | `dict` |  |
| `security_and_analysis` | `dict` |  |
| `selected_repositories_url` | `str` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `list` | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `list` | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `str` | Git commit SHA of the exported branch |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `start_url` | `str` | API URL to start this codespace. |
| `state` | `str` | State of the latest export |
| `statuses_url` | `str` |  |
| `stop_url` | `str` | API URL to stop this codespace. |
| `storage_in_bytes` | `int` | How much storage is available to the codespace. |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `template` | `str` |  |
| `title` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `str` | API URL for this codespace. |
| `visibility` | `str` | The type of repositories in the organization that the secret is visible to |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |
| `web_url` | `str` | URL to access this codespace on the web. |
| `working_directory` | `str` | Working directory for this codespace |

#### Example: Load

```python
codespace = client.Codespace().load({"id": "codespace_id"})
```

#### Example: List

```python
codespaces = client.Codespace().list()
```

#### Example: Create

```python
codespace = client.Codespace().create({
    "accepted": True,  # bool
    "archive_url": "example_archive_url",  # str
    "assignees_url": "example_assignees_url",  # str
    "billable_owner": {},  # dict
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "cpus": 1,  # int
    "created_at": "example_created_at",  # str
    "defaults": {},  # dict
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "downloads_url": "example_downloads_url",  # str
    "environment_id": "example_environment_id",  # str
    "events_url": "example_events_url",  # str
    "fork": True,  # bool
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_status": {},  # dict
    "git_tags_url": "example_git_tags_url",  # str
    "hooks_url": "example_hooks_url",  # str
    "idle_timeout_minutes": 1,  # int
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "key": "example_key",  # str
    "key_id": "example_key_id",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "languages_url": "example_languages_url",  # str
    "last_used_at": "example_last_used_at",  # str
    "location": "example_location",  # str
    "machine": {},  # dict
    "machines_url": "example_machines_url",  # str
    "memory_in_bytes": 1,  # int
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "operating_system": "example_operating_system",  # str
    "owner": {},  # dict
    "path": "example_path",  # str
    "prebuild": True,  # bool
    "prebuild_availability": "example_prebuild_availability",  # str
    "pulls_url": "example_pulls_url",  # str
    "recent_folders": [],  # list
    "releases_url": "example_releases_url",  # str
    "repository": {},  # dict
    "selected_usernames": [],  # list
    "stargazers_url": "example_stargazers_url",  # str
    "start_url": "example_start_url",  # str
    "statuses_url": "example_statuses_url",  # str
    "stop_url": "example_stop_url",  # str
    "storage_in_bytes": 1,  # int
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "trees_url": "example_trees_url",  # str
    "updated_at": "example_updated_at",  # str
    "visibility": "example_visibility",  # str
    "web_url": "example_web_url",  # str
})
```


### Collaborator

Create an instance: `collaborator = client.Collaborator()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `permissions` | `dict` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `role_name` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
collaborators = client.Collaborator().list({"project_id": 1})
```


### CombinedBillingUsage

Create an instance: `combined_billing_usage = client.CombinedBillingUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_left_in_billing_cycle` | `int` | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `int` | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `int` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

#### Example: Load

```python
combined_billing_usage = client.CombinedBillingUsage().load({"org_id": "org_id"})
```


### CombinedCommitStatus

Create an instance: `combined_commit_status = client.CombinedCommitStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `context` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `int` |  |
| `node_id` | `str` |  |
| `required` | `bool` |  |
| `state` | `str` |  |
| `target_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
combined_commit_statuss = client.CombinedCommitStatus().list({"owner": "example", "ref": "example", "repo": "example"})
```


### Commit

Create an instance: `commit = client.Commit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Any` |  |
| `base` | `str` | The name of the base branch that the head will be merged into. |
| `comments_url` | `str` |  |
| `commit` | `dict` |  |
| `commit_message` | `str` | Commit message to use for the merge commit. |
| `committer` | `Any` |  |
| `files` | `list` |  |
| `head` | `str` | The head to merge. |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `parents` | `list` |  |
| `sha` | `str` |  |
| `stats` | `dict` |  |
| `url` | `str` |  |

#### Example: Load

```python
commit = client.Commit().load({"id": "commit_id", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
commits = client.Commit().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
commit = client.Commit().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author": "example_author",  # Any
    "base": "example_base",  # str
    "comments_url": "example_comments_url",  # str
    "commit": {},  # dict
    "committer": "example_committer",  # Any
    "head": "example_head",  # str
    "html_url": "example_html_url",  # str
    "node_id": "example_node_id",  # str
    "parents": [],  # list
    "sha": "example_sha",  # str
    "url": "example_url",  # str
})
```


### CommitActivity

Create an instance: `commit_activity = client.CommitActivity()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `list` |  |
| `total` | `int` |  |
| `week` | `int` |  |

#### Example: List

```python
commit_activitys = client.CommitActivity().list({"owner": "example", "repo": "example"})
```


### CommitComment

Create an instance: `commit_comment = client.CommitComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `str` | How the author is associated with the repository. |
| `body` | `str` | The contents of the comment. |
| `commit_id` | `str` |  |
| `created_at` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `line` | `int` | **Closing down notice**. |
| `node_id` | `str` |  |
| `path` | `str` | Relative path of the file to comment on. |
| `position` | `int` | Line index in the diff to comment on. |
| `reactions` | `dict` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |

#### Example: Load

```python
commit_comment = client.CommitComment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
commit_comments = client.CommitComment().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
commit_comment = client.CommitComment().create({
    "commit_sha": "example_commit_sha",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author_association": "example_author_association",  # str
    "body": "example_body",  # str
    "commit_id": "example_commit_id",  # str
    "created_at": "example_created_at",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "line": 1,  # int
    "node_id": "example_node_id",  # str
    "path": "example_path",  # str
    "position": 1,  # int
    "reactions": {},  # dict
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### CommitComparison

Create an instance: `commit_comparison = client.CommitComparison()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ahead_by` | `int` |  |
| `base_commit` | `dict` | Commit |
| `behind_by` | `int` |  |
| `commits` | `list` |  |
| `diff_url` | `str` |  |
| `files` | `list` |  |
| `html_url` | `str` |  |
| `merge_base_commit` | `dict` | Commit |
| `patch_url` | `str` |  |
| `permalink_url` | `str` |  |
| `status` | `str` |  |
| `total_commits` | `int` |  |
| `url` | `str` |  |

#### Example: Load

```python
commit_comparison = client.CommitComparison().load({"basehead": "basehead", "owner": "owner", "repo": "repo"})
```


### CommunityProfile

Create an instance: `community_profile = client.CommunityProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code_of_conduct` | `dict` | Code of Conduct Simple |
| `code_of_conduct_file` | `dict` |  |
| `contributing` | `dict` |  |
| `issue_template` | `dict` |  |
| `license` | `dict` | License Simple |
| `pull_request_template` | `dict` |  |
| `readme` | `dict` |  |

#### Example: Load

```python
community_profile = client.CommunityProfile().load({"owner": "owner", "repo": "repo"})
```


### ContentFile

Create an instance: `content_file = client.ContentFile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `git` | `str` |  |
| `html` | `str` |  |
| `self` | `str` |  |

#### Example: Load

```python
content_file = client.ContentFile().load({"owner": "owner", "repo": "repo"})
```


### ContentTraffic

Create an instance: `content_traffic = client.ContentTraffic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `path` | `str` |  |
| `title` | `str` |  |
| `uniques` | `int` |  |

#### Example: List

```python
content_traffics = client.ContentTraffic().list({"owner": "example", "repo": "example"})
```


### Contributor

Create an instance: `contributor = client.Contributor()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | A GitHub user. |
| `avatar_url` | `str` |  |
| `contributions` | `int` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `total` | `int` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |
| `weeks` | `list` |  |

#### Example: List

```python
contributors = client.Contributor().list({"owner": "example", "repo": "example"})
```


### Copilot

Create an instance: `copilot = client.Copilot()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` | A GitHub user. |
| `assigning_team` | `Any` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `str` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `str` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `str` | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `str` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `dict` | A GitHub organization. |
| `pending_cancellation_date` | `str` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `str` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `list` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `list` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `str` | **Closing down notice:** This field is no longer relevant and is closing down. |

#### Example: Load

```python
copilot = client.Copilot().load({"org_id": "org_id", "username": "username"})
```

#### Example: List

```python
copilots = client.Copilot().list({"org_id": "example"})
```

#### Example: Create

```python
copilot = client.Copilot().create({
    "org_id": "example_org_id",  # str
    "assignee": {},  # dict
    "created_at": "example_created_at",  # str
    "organization": {},  # dict
    "selected_teams": [],  # list
    "selected_usernames": [],  # list
})
```


### CopilotOrganizationDetail

Create an instance: `copilot_organization_detail = client.CopilotOrganizationDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```python
copilot_organization_detail = client.CopilotOrganizationDetail().load({"org_id": "org_id"})
```


### CopilotUsageMetricsDay

Create an instance: `copilot_usage_metrics_day = client.CopilotUsageMetricsDay()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copilot_dotcom_chat` | `dict` | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `dict` | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `dict` | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `dict` | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `str` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

#### Example: List

```python
copilot_usage_metrics_days = client.CopilotUsageMetricsDay().list({"org_id": "example"})
```


### Credential

Create an instance: `credential = client.Credential()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `list` | A list of credentials to be revoked, up to 1000 per request. |

#### Example: Create

```python
credential = client.Credential().create({
    "credentials": [],  # list
})
```


### CustomProperty

Create an instance: `custom_property = client.CustomProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_values` | `list` | An ordered list of the allowed values of the property. |
| `default_value` | `Any` | Default value of the property |
| `description` | `str` | Short description of the property |
| `properties` | `list` | The array of custom properties to create or update. |
| `property_name` | `str` | The name of the property |
| `required` | `bool` | Whether the property is required. |
| `source_type` | `str` | The source type of the property |
| `url` | `str` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `str` | The type of the value for the property |
| `values_editable_by` | `str` | Who can edit the values of the property |

#### Example: Load

```python
custom_property = client.CustomProperty().load({"custom_property_name": "custom_property_name", "org_id": "org_id"})
```

#### Example: List

```python
custom_propertys = client.CustomProperty().list({"org_id": "example"})
```


### CustomPropertyValue

Create an instance: `custom_property_value = client.CustomPropertyValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `property_name` | `str` | The name of the property |
| `value` | `Any` | The value assigned to the property |

#### Example: List

```python
custom_property_values = client.CustomPropertyValue().list({"owner": "example", "repo": "example"})
```


### Dependabot

Create an instance: `dependabot = client.Dependabot()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` |  |
| `assignees_url` | `str` |  |
| `avatar_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` |  |
| `default_level` | `str` | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` |  |
| `login` | `str` |  |
| `members_url` | `str` |  |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the secret. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | A GitHub user. |
| `permissions` | `dict` |  |
| `private` | `bool` |  |
| `public_members_url` | `str` |  |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `repos_url` | `str` |  |
| `repository_ids_to_add` | `list` | List of repository IDs to add. |
| `repository_ids_to_remove` | `list` | List of repository IDs to remove. |
| `role_name` | `str` |  |
| `security_and_analysis` | `dict` |  |
| `selected_repositories_url` | `str` |  |
| `selected_repository_ids` | `list` | An array of repository ids that can access the organization secret. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `visibility` | `str` | Visibility of a secret |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```python
dependabots = client.Dependabot().list()
```


### DependabotAlert

Create an instance: `dependabot_alert = client.DependabotAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `str` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `dict` | Details for the vulnerable dependency. |
| `dismissed_at` | `str` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | A GitHub user. |
| `dismissed_comment` | `str` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `str` | The reason that the alert was dismissed. |
| `fixed_at` | `str` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `id` | `str` |  |
| `number` | `int` | The security alert number. |
| `security_advisory` | `dict` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `dict` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `str` | The state of the Dependabot alert. |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |

#### Example: Load

```python
dependabot_alert = client.DependabotAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
dependabot_alerts = client.DependabotAlert().list({"owner": "example", "repo": "example"})
```


### DependabotAlertWithRepository

Create an instance: `dependabot_alert_with_repository = client.DependabotAlertWithRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `str` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `dict` | Details for the vulnerable dependency. |
| `dismissed_at` | `str` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | A GitHub user. |
| `dismissed_comment` | `str` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `str` | The reason that the alert was dismissed. |
| `fixed_at` | `str` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `number` | `int` | The security alert number. |
| `repository` | `dict` | A GitHub repository. |
| `security_advisory` | `dict` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `dict` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `str` | The state of the Dependabot alert. |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |

#### Example: List

```python
dependabot_alert_with_repositorys = client.DependabotAlertWithRepository().list({"org_id": "example"})
```


### DependabotPublicKey

Create an instance: `dependabot_public_key = client.DependabotPublicKey()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` | The Base64 encoded public key. |
| `key_id` | `str` | The identifier for the key. |

#### Example: Load

```python
dependabot_public_key = client.DependabotPublicKey().load({"org_id": "org_id"})
```


### DependabotRepositoryAccessDetail

Create an instance: `dependabot_repository_access_detail = client.DependabotRepositoryAccessDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archive_url` | `str` | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `str` | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `str` | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `str` | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `str` | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `str` | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `str` | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `str` | A template for the API URL to compare two commits or refs. |
| `contents_url` | `str` | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `str` | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `str` | The API URL to list the deployments of the repository. |
| `description` | `str` | The repository description. |
| `downloads_url` | `str` | The API URL to list the downloads on the repository. |
| `events_url` | `str` | The API URL to list the events of the repository. |
| `fork` | `bool` | Whether the repository is a fork. |
| `forks_url` | `str` | The API URL to list the forks of the repository. |
| `full_name` | `str` | The full, globally unique, name of the repository. |
| `git_commits_url` | `str` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `str` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `str` | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `str` | The API URL to list the hooks on the repository. |
| `html_url` | `str` | The URL to view the repository on GitHub.com. |
| `id` | `int` | A unique identifier of the repository. |
| `issue_comment_url` | `str` | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `str` | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `str` | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `str` | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `str` | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `str` | The API URL to get information about the languages of the repository. |
| `merges_url` | `str` | The API URL to merge branches in the repository. |
| `milestones_url` | `str` | A template for the API URL to get information about milestones of the repository. |
| `name` | `str` | The name of the repository. |
| `node_id` | `str` | The GraphQL identifier of the repository. |
| `notifications_url` | `str` | A template for the API URL to get information about notifications on the repository. |
| `owner` | `dict` | A GitHub user. |
| `private` | `bool` | Whether the repository is private. |
| `pulls_url` | `str` | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `str` | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `str` | The API URL to list the stargazers on the repository. |
| `statuses_url` | `str` | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `str` | The API URL to list the subscribers on the repository. |
| `subscription_url` | `str` | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `str` | The API URL to get information about tags on the repository. |
| `teams_url` | `str` | The API URL to list the teams on the repository. |
| `trees_url` | `str` | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `str` | The URL to get more information about the repository from the GitHub API. |

#### Example: List

```python
dependabot_repository_access_details = client.DependabotRepositoryAccessDetail().list({"org": "example"})
```


### DependabotSecret

Create an instance: `dependabot_secret = client.DependabotSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the secret. |
| `updated_at` | `str` |  |

#### Example: Load

```python
dependabot_secret = client.DependabotSecret().load({"id": "dependabot_secret_id", "owner": "owner", "repo": "repo"})
```


### DependencyGraph

Create an instance: `dependency_graph = client.DependencyGraph()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detector` | `dict` | A description of the detector used. |
| `job` | `dict` |  |
| `manifests` | `dict` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `dict` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `str` | The repository branch that triggered this snapshot. |
| `scanned` | `str` | The time at which the snapshot was scanned. |
| `sha` | `str` | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | The version of the repository snapshot submission. |

#### Example: Create

```python
dependency_graph = client.DependencyGraph().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "detector": {},  # dict
    "job": {},  # dict
    "ref": "example_ref",  # str
    "scanned": "example_scanned",  # str
    "sha": "example_sha",  # str
    "version": 1,  # int
})
```


### DependencyGraphDiff

Create an instance: `dependency_graph_diff = client.DependencyGraphDiff()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_type` | `str` |  |
| `ecosystem` | `str` |  |
| `license` | `str` |  |
| `manifest` | `str` |  |
| `name` | `str` |  |
| `package_url` | `str` |  |
| `scope` | `str` | Where the dependency is utilized. |
| `source_repository_url` | `str` |  |
| `version` | `str` |  |
| `vulnerabilities` | `list` |  |

#### Example: Load

```python
dependency_graph_diff = client.DependencyGraphDiff().load({"basehead": "basehead", "owner": "owner", "repo": "repo"})
```


### DependencyGraphSpdxSbom

Create an instance: `dependency_graph_spdx_sbom = client.DependencyGraphSpdxSbom()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `SPDXID` | `str` | The SPDX identifier for the SPDX document. |
| `comment` | `str` | An optional comment about the SPDX document. |
| `creationInfo` | `dict` |  |
| `dataLicense` | `str` | The license under which the SPDX document is licensed. |
| `documentNamespace` | `str` | The namespace for the SPDX document. |
| `name` | `str` | The name of the SPDX document. |
| `packages` | `list` |  |
| `relationships` | `list` |  |
| `spdxVersion` | `str` | The version of the SPDX specification that this document conforms to. |

#### Example: Load

```python
dependency_graph_spdx_sbom = client.DependencyGraphSpdxSbom().load({"owner": "owner", "repo": "repo"})
```


### DeployKey

Create an instance: `deploy_key = client.DeployKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `added_by` | `str` |  |
| `created_at` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `int` |  |
| `key` | `str` | The contents of the key. |
| `last_used` | `str` |  |
| `read_only` | `bool` | If `true`, the key will only be able to read repository contents. |
| `title` | `str` | A name for the key. |
| `url` | `str` |  |
| `verified` | `bool` |  |

#### Example: Load

```python
deploy_key = client.DeployKey().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
deploy_keys = client.DeployKey().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
deploy_key = client.DeployKey().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "read_only": True,  # bool
    "title": "example_title",  # str
    "url": "example_url",  # str
    "verified": True,  # bool
})
```


### Deployment

Create an instance: `deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_merge` | `bool` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `str` | A comment to accompany the deployment review |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `description` | `str` | Short description of the deployment. |
| `environment` | `str` | Name for the target deployment environment. |
| `environment_ids` | `list` | The list of environment ids to approve or reject |
| `id` | `int` | Unique identifier of the deployment |
| `node_id` | `str` |  |
| `original_environment` | `str` |  |
| `payload` | `Any` |  |
| `performed_via_github_app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `str` | The ref to deploy. |
| `repository_url` | `str` |  |
| `required_contexts` | `list` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `str` |  |
| `state` | `str` | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `str` |  |
| `task` | `str` | Parameter to specify a task to execute |
| `transient_environment` | `bool` | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
deployment = client.Deployment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
deployments = client.Deployment().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
deployment = client.Deployment().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "comment": "example_comment",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "description": "example_description",  # str
    "environment": "example_environment",  # str
    "environment_ids": [],  # list
    "id": 1,  # int
    "node_id": "example_node_id",  # str
    "payload": "example_payload",  # Any
    "performed_via_github_app": {},  # dict
    "ref": "example_ref",  # str
    "repository_url": "example_repository_url",  # str
    "sha": "example_sha",  # str
    "state": "example_state",  # str
    "statuses_url": "example_statuses_url",  # str
    "task": "example_task",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### DeploymentBranchPolicy

Create an instance: `deployment_branch_policy = client.DeploymentBranchPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The unique identifier of the branch or tag policy. |
| `name` | `str` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `str` |  |
| `type` | `str` | Whether this rule targets a branch or tag. |

#### Example: Load

```python
deployment_branch_policy = client.DeploymentBranchPolicy().load({"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
deployment_branch_policy = client.DeploymentBranchPolicy().create({
    "environment_name": "example_environment_name",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```


### DeploymentProtectionRule

Create an instance: `deployment_protection_rule = client.DeploymentProtectionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `int` | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `str` | The URL for the endpoint to get details about the app. |
| `node_id` | `str` | The node ID for the deployment protection rule integration. |
| `slug` | `str` | The slugified name of the deployment protection rule integration. |

#### Example: Load

```python
deployment_protection_rule = client.DeploymentProtectionRule().load({"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
deployment_protection_rule = client.DeploymentProtectionRule().create({
    "environment_name": "example_environment_name",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "id": 1,  # int
    "integration_url": "example_integration_url",  # str
    "node_id": "example_node_id",  # str
    "slug": "example_slug",  # str
})
```


### DeploymentStatus

Create an instance: `deployment_status = client.DeploymentStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_inactive` | `bool` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `deployment_url` | `str` |  |
| `description` | `str` | A short description of the status. |
| `environment` | `str` | The environment of the deployment that the status is for. |
| `environment_url` | `str` | The URL for accessing your environment. |
| `id` | `int` |  |
| `log_url` | `str` | The URL to associate with this status. |
| `node_id` | `str` |  |
| `performed_via_github_app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `str` |  |
| `state` | `str` | The state of the status. |
| `target_url` | `str` | Closing down notice: the URL to associate with this status. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
deployment_status = client.DeploymentStatus().load({"id": 1, "deployment_id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
deployment_statuss = client.DeploymentStatus().list({"id": 1, "owner": "example", "repo": "example"})
```

#### Example: Create

```python
deployment_status = client.DeploymentStatus().create({
    "id": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "deployment_url": "example_deployment_url",  # str
    "description": "example_description",  # str
    "node_id": "example_node_id",  # str
    "performed_via_github_app": {},  # dict
    "repository_url": "example_repository_url",  # str
    "state": "example_state",  # str
    "target_url": "example_target_url",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### DiffEntry

Create an instance: `diff_entry = client.DiffEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `int` |  |
| `blob_url` | `str` |  |
| `changes` | `int` |  |
| `contents_url` | `str` |  |
| `deletions` | `int` |  |
| `filename` | `str` |  |
| `patch` | `str` |  |
| `previous_filename` | `str` |  |
| `raw_url` | `str` |  |
| `sha` | `str` |  |
| `status` | `str` |  |

#### Example: List

```python
diff_entrys = client.DiffEntry().list({"owner": "example", "pull_number": 1, "repo": "example"})
```


### Email

Create an instance: `email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `primary` | `bool` |  |
| `verified` | `bool` |  |
| `visibility` | `str` | Denotes whether an email is publicly visible. |

#### Example: List

```python
emails = client.Email().list()
```

#### Example: Create

```python
email = client.Email().create({
})
```


### Emoji

Create an instance: `emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `1` | `str` |  |
| `100` | `str` |  |
| `1234` | `str` |  |
| `1st_place_medal` | `str` |  |
| `2nd_place_medal` | `str` |  |
| `3rd_place_medal` | `str` |  |
| `8ball` | `str` |  |
| `a` | `str` |  |
| `ab` | `str` |  |
| `abacus` | `str` |  |
| `abc` | `str` |  |
| `abcd` | `str` |  |
| `accept` | `str` |  |
| `accessibility` | `str` |  |
| `accordion` | `str` |  |
| `adhesive_bandage` | `str` |  |
| `adult` | `str` |  |
| `aerial_tramway` | `str` |  |
| `afghanistan` | `str` |  |
| `airplane` | `str` |  |
| `aland_islands` | `str` |  |
| `alarm_clock` | `str` |  |
| `albania` | `str` |  |
| `alembic` | `str` |  |
| `algeria` | `str` |  |
| `alien` | `str` |  |
| `ambulance` | `str` |  |
| `american_samoa` | `str` |  |
| `amphora` | `str` |  |
| `anatomical_heart` | `str` |  |
| `anchor` | `str` |  |
| `andorra` | `str` |  |
| `angel` | `str` |  |
| `anger` | `str` |  |
| `angola` | `str` |  |
| `angry` | `str` |  |
| `anguilla` | `str` |  |
| `anguished` | `str` |  |
| `ant` | `str` |  |
| `antarctica` | `str` |  |
| `antigua_barbuda` | `str` |  |
| `apple` | `str` |  |
| `aquarius` | `str` |  |
| `argentina` | `str` |  |
| `aries` | `str` |  |
| `armenia` | `str` |  |
| `arrow_backward` | `str` |  |
| `arrow_double_down` | `str` |  |
| `arrow_double_up` | `str` |  |
| `arrow_down` | `str` |  |
| `arrow_down_small` | `str` |  |
| `arrow_forward` | `str` |  |
| `arrow_heading_down` | `str` |  |
| `arrow_heading_up` | `str` |  |
| `arrow_left` | `str` |  |
| `arrow_lower_left` | `str` |  |
| `arrow_lower_right` | `str` |  |
| `arrow_right` | `str` |  |
| `arrow_right_hook` | `str` |  |
| `arrow_up` | `str` |  |
| `arrow_up_down` | `str` |  |
| `arrow_up_small` | `str` |  |
| `arrow_upper_left` | `str` |  |
| `arrow_upper_right` | `str` |  |
| `arrows_clockwise` | `str` |  |
| `arrows_counterclockwise` | `str` |  |
| `art` | `str` |  |
| `articulated_lorry` | `str` |  |
| `artificial_satellite` | `str` |  |
| `artist` | `str` |  |
| `aruba` | `str` |  |
| `ascension_island` | `str` |  |
| `asterisk` | `str` |  |
| `astonished` | `str` |  |
| `astronaut` | `str` |  |
| `athletic_shoe` | `str` |  |
| `atm` | `str` |  |
| `atom` | `str` |  |
| `atom_symbol` | `str` |  |
| `australia` | `str` |  |
| `austria` | `str` |  |
| `auto_rickshaw` | `str` |  |
| `avocado` | `str` |  |
| `axe` | `str` |  |
| `azerbaijan` | `str` |  |
| `b` | `str` |  |
| `baby` | `str` |  |
| `baby_bottle` | `str` |  |
| `baby_chick` | `str` |  |
| `baby_symbol` | `str` |  |
| `back` | `str` |  |
| `bacon` | `str` |  |
| `badger` | `str` |  |
| `badminton` | `str` |  |
| `bagel` | `str` |  |
| `baggage_claim` | `str` |  |
| `baguette_bread` | `str` |  |
| `bahamas` | `str` |  |
| `bahrain` | `str` |  |
| `balance_scale` | `str` |  |
| `bald_man` | `str` |  |
| `bald_woman` | `str` |  |
| `ballet_shoes` | `str` |  |
| `balloon` | `str` |  |
| `ballot_box` | `str` |  |
| `ballot_box_with_check` | `str` |  |
| `bamboo` | `str` |  |
| `banana` | `str` |  |
| `bangbang` | `str` |  |
| `bangladesh` | `str` |  |
| `banjo` | `str` |  |
| `bank` | `str` |  |
| `bar_chart` | `str` |  |
| `barbados` | `str` |  |
| `barber` | `str` |  |
| `baseball` | `str` |  |
| `basecamp` | `str` |  |
| `basecampy` | `str` |  |
| `basket` | `str` |  |
| `basketball` | `str` |  |
| `basketball_man` | `str` |  |
| `basketball_woman` | `str` |  |
| `bat` | `str` |  |
| `bath` | `str` |  |
| `bathtub` | `str` |  |
| `battery` | `str` |  |
| `beach_umbrella` | `str` |  |
| `bear` | `str` |  |
| `bearded_person` | `str` |  |
| `beaver` | `str` |  |
| `bed` | `str` |  |
| `bee` | `str` |  |
| `beer` | `str` |  |
| `beers` | `str` |  |
| `beetle` | `str` |  |
| `beginner` | `str` |  |
| `belarus` | `str` |  |
| `belgium` | `str` |  |
| `belize` | `str` |  |
| `bell` | `str` |  |
| `bell_pepper` | `str` |  |
| `bellhop_bell` | `str` |  |
| `benin` | `str` |  |
| `bento` | `str` |  |
| `bermuda` | `str` |  |
| `beverage_box` | `str` |  |
| `bhutan` | `str` |  |
| `bicyclist` | `str` |  |
| `bike` | `str` |  |
| `biking_man` | `str` |  |
| `biking_woman` | `str` |  |
| `bikini` | `str` |  |
| `billed_cap` | `str` |  |
| `biohazard` | `str` |  |
| `bird` | `str` |  |
| `birthday` | `str` |  |
| `bison` | `str` |  |
| `black_cat` | `str` |  |
| `black_circle` | `str` |  |
| `black_flag` | `str` |  |
| `black_heart` | `str` |  |
| `black_joker` | `str` |  |
| `black_large_square` | `str` |  |
| `black_medium_small_square` | `str` |  |
| `black_medium_square` | `str` |  |
| `black_nib` | `str` |  |
| `black_small_square` | `str` |  |
| `black_square_button` | `str` |  |
| `blond_haired_man` | `str` |  |
| `blond_haired_person` | `str` |  |
| `blond_haired_woman` | `str` |  |
| `blonde_woman` | `str` |  |
| `blossom` | `str` |  |
| `blowfish` | `str` |  |
| `blue_book` | `str` |  |
| `blue_car` | `str` |  |
| `blue_heart` | `str` |  |
| `blue_square` | `str` |  |
| `blueberries` | `str` |  |
| `blush` | `str` |  |
| `boar` | `str` |  |
| `boat` | `str` |  |
| `bolivia` | `str` |  |
| `bomb` | `str` |  |
| `bone` | `str` |  |
| `book` | `str` |  |
| `bookmark` | `str` |  |
| `bookmark_tabs` | `str` |  |
| `books` | `str` |  |
| `boom` | `str` |  |
| `boomerang` | `str` |  |
| `boot` | `str` |  |
| `bosnia_herzegovina` | `str` |  |
| `botswana` | `str` |  |
| `bouncing_ball_man` | `str` |  |
| `bouncing_ball_person` | `str` |  |
| `bouncing_ball_woman` | `str` |  |
| `bouquet` | `str` |  |
| `bouvet_island` | `str` |  |
| `bow` | `str` |  |
| `bow_and_arrow` | `str` |  |
| `bowing_man` | `str` |  |
| `bowing_woman` | `str` |  |
| `bowl_with_spoon` | `str` |  |
| `bowling` | `str` |  |
| `bowtie` | `str` |  |
| `boxing_glove` | `str` |  |
| `boy` | `str` |  |
| `brain` | `str` |  |
| `brazil` | `str` |  |
| `bread` | `str` |  |
| `breast_feeding` | `str` |  |
| `bricks` | `str` |  |
| `bride_with_veil` | `str` |  |
| `bridge_at_night` | `str` |  |
| `briefcase` | `str` |  |
| `british_indian_ocean_territory` | `str` |  |
| `british_virgin_islands` | `str` |  |
| `broccoli` | `str` |  |
| `broken_heart` | `str` |  |
| `broom` | `str` |  |
| `brown_circle` | `str` |  |
| `brown_heart` | `str` |  |
| `brown_square` | `str` |  |
| `brunei` | `str` |  |
| `bubble_tea` | `str` |  |
| `bucket` | `str` |  |
| `bug` | `str` |  |
| `building_construction` | `str` |  |
| `bulb` | `str` |  |
| `bulgaria` | `str` |  |
| `bullettrain_front` | `str` |  |
| `bullettrain_side` | `str` |  |
| `burkina_faso` | `str` |  |
| `burrito` | `str` |  |
| `burundi` | `str` |  |
| `bus` | `str` |  |
| `business_suit_levitating` | `str` |  |
| `busstop` | `str` |  |
| `bust_in_silhouette` | `str` |  |
| `busts_in_silhouette` | `str` |  |
| `butter` | `str` |  |
| `butterfly` | `str` |  |
| `cactus` | `str` |  |
| `cake` | `str` |  |
| `calendar` | `str` |  |
| `call_me_hand` | `str` |  |
| `calling` | `str` |  |
| `cambodia` | `str` |  |
| `camel` | `str` |  |
| `camera` | `str` |  |
| `camera_flash` | `str` |  |
| `cameroon` | `str` |  |
| `camping` | `str` |  |
| `canada` | `str` |  |
| `canary_islands` | `str` |  |
| `cancer` | `str` |  |
| `candle` | `str` |  |
| `candy` | `str` |  |
| `canned_food` | `str` |  |
| `canoe` | `str` |  |
| `cape_verde` | `str` |  |
| `capital_abcd` | `str` |  |
| `capricorn` | `str` |  |
| `car` | `str` |  |
| `card_file_box` | `str` |  |
| `card_index` | `str` |  |
| `card_index_dividers` | `str` |  |
| `caribbean_netherlands` | `str` |  |
| `carousel_horse` | `str` |  |
| `carpentry_saw` | `str` |  |
| `carrot` | `str` |  |
| `cartwheeling` | `str` |  |
| `cat` | `str` |  |
| `cat2` | `str` |  |
| `cayman_islands` | `str` |  |
| `cd` | `str` |  |
| `central_african_republic` | `str` |  |
| `ceuta_melilla` | `str` |  |
| `chad` | `str` |  |
| `chains` | `str` |  |
| `chair` | `str` |  |
| `champagne` | `str` |  |
| `chart` | `str` |  |
| `chart_with_downwards_trend` | `str` |  |
| `chart_with_upwards_trend` | `str` |  |
| `checkered_flag` | `str` |  |
| `cheese` | `str` |  |
| `cherries` | `str` |  |
| `cherry_blossom` | `str` |  |
| `chess_pawn` | `str` |  |
| `chestnut` | `str` |  |
| `chicken` | `str` |  |
| `child` | `str` |  |
| `children_crossing` | `str` |  |
| `chile` | `str` |  |
| `chipmunk` | `str` |  |
| `chocolate_bar` | `str` |  |
| `chopsticks` | `str` |  |
| `christmas_island` | `str` |  |
| `christmas_tree` | `str` |  |
| `church` | `str` |  |
| `cinema` | `str` |  |
| `circus_tent` | `str` |  |
| `city_sunrise` | `str` |  |
| `city_sunset` | `str` |  |
| `cityscape` | `str` |  |
| `cl` | `str` |  |
| `clamp` | `str` |  |
| `clap` | `str` |  |
| `clapper` | `str` |  |
| `classical_building` | `str` |  |
| `climbing` | `str` |  |
| `climbing_man` | `str` |  |
| `climbing_woman` | `str` |  |
| `clinking_glasses` | `str` |  |
| `clipboard` | `str` |  |
| `clipperton_island` | `str` |  |
| `clock1` | `str` |  |
| `clock10` | `str` |  |
| `clock1030` | `str` |  |
| `clock11` | `str` |  |
| `clock1130` | `str` |  |
| `clock12` | `str` |  |
| `clock1230` | `str` |  |
| `clock130` | `str` |  |
| `clock2` | `str` |  |
| `clock230` | `str` |  |
| `clock3` | `str` |  |
| `clock330` | `str` |  |
| `clock4` | `str` |  |
| `clock430` | `str` |  |
| `clock5` | `str` |  |
| `clock530` | `str` |  |
| `clock6` | `str` |  |
| `clock630` | `str` |  |
| `clock7` | `str` |  |
| `clock730` | `str` |  |
| `clock8` | `str` |  |
| `clock830` | `str` |  |
| `clock9` | `str` |  |
| `clock930` | `str` |  |
| `closed_book` | `str` |  |
| `closed_lock_with_key` | `str` |  |
| `closed_umbrella` | `str` |  |
| `cloud` | `str` |  |
| `cloud_with_lightning` | `str` |  |
| `cloud_with_lightning_and_rain` | `str` |  |
| `cloud_with_rain` | `str` |  |
| `cloud_with_snow` | `str` |  |
| `clown_face` | `str` |  |
| `clubs` | `str` |  |
| `cn` | `str` |  |
| `coat` | `str` |  |
| `cockroach` | `str` |  |
| `cocktail` | `str` |  |
| `coconut` | `str` |  |
| `cocos_islands` | `str` |  |
| `coffee` | `str` |  |
| `coffin` | `str` |  |
| `coin` | `str` |  |
| `cold_face` | `str` |  |
| `cold_sweat` | `str` |  |
| `collision` | `str` |  |
| `colombia` | `str` |  |
| `comet` | `str` |  |
| `comoros` | `str` |  |
| `compass` | `str` |  |
| `computer` | `str` |  |
| `computer_mouse` | `str` |  |
| `confetti_ball` | `str` |  |
| `confounded` | `str` |  |
| `confused` | `str` |  |
| `congo_brazzaville` | `str` |  |
| `congo_kinshasa` | `str` |  |
| `congratulations` | `str` |  |
| `construction` | `str` |  |
| `construction_worker` | `str` |  |
| `construction_worker_man` | `str` |  |
| `construction_worker_woman` | `str` |  |
| `control_knobs` | `str` |  |
| `convenience_store` | `str` |  |
| `cook` | `str` |  |
| `cook_islands` | `str` |  |
| `cookie` | `str` |  |
| `cool` | `str` |  |
| `cop` | `str` |  |
| `copilot` | `str` |  |
| `copyright` | `str` |  |
| `corn` | `str` |  |
| `costa_rica` | `str` |  |
| `cote_divoire` | `str` |  |
| `couch_and_lamp` | `str` |  |
| `couple` | `str` |  |
| `couple_with_heart` | `str` |  |
| `couple_with_heart_man_man` | `str` |  |
| `couple_with_heart_woman_man` | `str` |  |
| `couple_with_heart_woman_woman` | `str` |  |
| `couplekiss` | `str` |  |
| `couplekiss_man_man` | `str` |  |
| `couplekiss_man_woman` | `str` |  |
| `couplekiss_woman_woman` | `str` |  |
| `cow` | `str` |  |
| `cow2` | `str` |  |
| `cowboy_hat_face` | `str` |  |
| `crab` | `str` |  |
| `crayon` | `str` |  |
| `credit_card` | `str` |  |
| `crescent_moon` | `str` |  |
| `cricket` | `str` |  |
| `cricket_game` | `str` |  |
| `croatia` | `str` |  |
| `crocodile` | `str` |  |
| `croissant` | `str` |  |
| `crossed_fingers` | `str` |  |
| `crossed_flags` | `str` |  |
| `crossed_swords` | `str` |  |
| `crown` | `str` |  |
| `cry` | `str` |  |
| `crying_cat_face` | `str` |  |
| `crystal_ball` | `str` |  |
| `cuba` | `str` |  |
| `cucumber` | `str` |  |
| `cup_with_straw` | `str` |  |
| `cupcake` | `str` |  |
| `cupid` | `str` |  |
| `curacao` | `str` |  |
| `curling_stone` | `str` |  |
| `curly_haired_man` | `str` |  |
| `curly_haired_woman` | `str` |  |
| `curly_loop` | `str` |  |
| `currency_exchange` | `str` |  |
| `curry` | `str` |  |
| `cursing_face` | `str` |  |
| `custard` | `str` |  |
| `customs` | `str` |  |
| `cut_of_meat` | `str` |  |
| `cyclone` | `str` |  |
| `cyprus` | `str` |  |
| `czech_republic` | `str` |  |
| `dagger` | `str` |  |
| `dancer` | `str` |  |
| `dancers` | `str` |  |
| `dancing_men` | `str` |  |
| `dancing_women` | `str` |  |
| `dango` | `str` |  |
| `dark_sunglasses` | `str` |  |
| `dart` | `str` |  |
| `dash` | `str` |  |
| `date` | `str` |  |
| `de` | `str` |  |
| `deaf_man` | `str` |  |
| `deaf_person` | `str` |  |
| `deaf_woman` | `str` |  |
| `deciduous_tree` | `str` |  |
| `deer` | `str` |  |
| `denmark` | `str` |  |
| `department_store` | `str` |  |
| `dependabot` | `str` |  |
| `derelict_house` | `str` |  |
| `desert` | `str` |  |
| `desert_island` | `str` |  |
| `desktop_computer` | `str` |  |
| `detective` | `str` |  |
| `diamond_shape_with_a_dot_inside` | `str` |  |
| `diamonds` | `str` |  |
| `diego_garcia` | `str` |  |
| `disappointed` | `str` |  |
| `disappointed_relieved` | `str` |  |
| `disguised_face` | `str` |  |
| `diving_mask` | `str` |  |
| `diya_lamp` | `str` |  |
| `dizzy` | `str` |  |
| `dizzy_face` | `str` |  |
| `djibouti` | `str` |  |
| `dna` | `str` |  |
| `do_not_litter` | `str` |  |
| `dodo` | `str` |  |
| `dog` | `str` |  |
| `dog2` | `str` |  |
| `dollar` | `str` |  |
| `dolls` | `str` |  |
| `dolphin` | `str` |  |
| `dominica` | `str` |  |
| `dominican_republic` | `str` |  |
| `door` | `str` |  |
| `doughnut` | `str` |  |
| `dove` | `str` |  |
| `dragon` | `str` |  |
| `dragon_face` | `str` |  |
| `dress` | `str` |  |
| `dromedary_camel` | `str` |  |
| `drooling_face` | `str` |  |
| `drop_of_blood` | `str` |  |
| `droplet` | `str` |  |
| `drum` | `str` |  |
| `duck` | `str` |  |
| `dumpling` | `str` |  |
| `dvd` | `str` |  |
| `eagle` | `str` |  |
| `ear` | `str` |  |
| `ear_of_rice` | `str` |  |
| `ear_with_hearing_aid` | `str` |  |
| `earth_africa` | `str` |  |
| `earth_americas` | `str` |  |
| `earth_asia` | `str` |  |
| `ecuador` | `str` |  |
| `egg` | `str` |  |
| `eggplant` | `str` |  |
| `egypt` | `str` |  |
| `eight` | `str` |  |
| `eight_pointed_black_star` | `str` |  |
| `eight_spoked_asterisk` | `str` |  |
| `eject_button` | `str` |  |
| `el_salvador` | `str` |  |
| `electric_plug` | `str` |  |
| `electron` | `str` |  |
| `elephant` | `str` |  |
| `elevator` | `str` |  |
| `elf` | `str` |  |
| `elf_man` | `str` |  |
| `elf_woman` | `str` |  |
| `email` | `str` |  |
| `end` | `str` |  |
| `england` | `str` |  |
| `envelope` | `str` |  |
| `envelope_with_arrow` | `str` |  |
| `equatorial_guinea` | `str` |  |
| `eritrea` | `str` |  |
| `es` | `str` |  |
| `estonia` | `str` |  |
| `ethiopia` | `str` |  |
| `eu` | `str` |  |
| `euro` | `str` |  |
| `european_castle` | `str` |  |
| `european_post_office` | `str` |  |
| `european_union` | `str` |  |
| `evergreen_tree` | `str` |  |
| `exclamation` | `str` |  |
| `exploding_head` | `str` |  |
| `expressionless` | `str` |  |
| `eye` | `str` |  |
| `eye_speech_bubble` | `str` |  |
| `eyeglasses` | `str` |  |
| `eyes` | `str` |  |
| `face_exhaling` | `str` |  |
| `face_in_clouds` | `str` |  |
| `face_with_head_bandage` | `str` |  |
| `face_with_spiral_eyes` | `str` |  |
| `face_with_thermometer` | `str` |  |
| `facepalm` | `str` |  |
| `facepunch` | `str` |  |
| `factory` | `str` |  |
| `factory_worker` | `str` |  |
| `fairy` | `str` |  |
| `fairy_man` | `str` |  |
| `fairy_woman` | `str` |  |
| `falafel` | `str` |  |
| `falkland_islands` | `str` |  |
| `fallen_leaf` | `str` |  |
| `family` | `str` |  |
| `family_man_boy` | `str` |  |
| `family_man_boy_boy` | `str` |  |
| `family_man_girl` | `str` |  |
| `family_man_girl_boy` | `str` |  |
| `family_man_girl_girl` | `str` |  |
| `family_man_man_boy` | `str` |  |
| `family_man_man_boy_boy` | `str` |  |
| `family_man_man_girl` | `str` |  |
| `family_man_man_girl_boy` | `str` |  |
| `family_man_man_girl_girl` | `str` |  |
| `family_man_woman_boy` | `str` |  |
| `family_man_woman_boy_boy` | `str` |  |
| `family_man_woman_girl` | `str` |  |
| `family_man_woman_girl_boy` | `str` |  |
| `family_man_woman_girl_girl` | `str` |  |
| `family_woman_boy` | `str` |  |
| `family_woman_boy_boy` | `str` |  |
| `family_woman_girl` | `str` |  |
| `family_woman_girl_boy` | `str` |  |
| `family_woman_girl_girl` | `str` |  |
| `family_woman_woman_boy` | `str` |  |
| `family_woman_woman_boy_boy` | `str` |  |
| `family_woman_woman_girl` | `str` |  |
| `family_woman_woman_girl_boy` | `str` |  |
| `family_woman_woman_girl_girl` | `str` |  |
| `farmer` | `str` |  |
| `faroe_islands` | `str` |  |
| `fast_forward` | `str` |  |
| `fax` | `str` |  |
| `fearful` | `str` |  |
| `feather` | `str` |  |
| `feelsgood` | `str` |  |
| `feet` | `str` |  |
| `female_detective` | `str` |  |
| `female_sign` | `str` |  |
| `ferris_wheel` | `str` |  |
| `ferry` | `str` |  |
| `field_hockey` | `str` |  |
| `fiji` | `str` |  |
| `file_cabinet` | `str` |  |
| `file_folder` | `str` |  |
| `film_projector` | `str` |  |
| `film_strip` | `str` |  |
| `finland` | `str` |  |
| `finnadie` | `str` |  |
| `fire` | `str` |  |
| `fire_engine` | `str` |  |
| `fire_extinguisher` | `str` |  |
| `firecracker` | `str` |  |
| `firefighter` | `str` |  |
| `fireworks` | `str` |  |
| `first_quarter_moon` | `str` |  |
| `first_quarter_moon_with_face` | `str` |  |
| `fish` | `str` |  |
| `fish_cake` | `str` |  |
| `fishing_pole_and_fish` | `str` |  |
| `fishsticks` | `str` |  |
| `fist` | `str` |  |
| `fist_left` | `str` |  |
| `fist_oncoming` | `str` |  |
| `fist_raised` | `str` |  |
| `fist_right` | `str` |  |
| `five` | `str` |  |
| `flags` | `str` |  |
| `flamingo` | `str` |  |
| `flashlight` | `str` |  |
| `flat_shoe` | `str` |  |
| `flatbread` | `str` |  |
| `fleur_de_lis` | `str` |  |
| `flight_arrival` | `str` |  |
| `flight_departure` | `str` |  |
| `flipper` | `str` |  |
| `floppy_disk` | `str` |  |
| `flower_playing_cards` | `str` |  |
| `flushed` | `str` |  |
| `fly` | `str` |  |
| `flying_disc` | `str` |  |
| `flying_saucer` | `str` |  |
| `fog` | `str` |  |
| `foggy` | `str` |  |
| `fondue` | `str` |  |
| `foot` | `str` |  |
| `football` | `str` |  |
| `footprints` | `str` |  |
| `fork_and_knife` | `str` |  |
| `fortune_cookie` | `str` |  |
| `fountain` | `str` |  |
| `fountain_pen` | `str` |  |
| `four` | `str` |  |
| `four_leaf_clover` | `str` |  |
| `fox_face` | `str` |  |
| `fr` | `str` |  |
| `framed_picture` | `str` |  |
| `free` | `str` |  |
| `french_guiana` | `str` |  |
| `french_polynesia` | `str` |  |
| `french_southern_territories` | `str` |  |
| `fried_egg` | `str` |  |
| `fried_shrimp` | `str` |  |
| `fries` | `str` |  |
| `frog` | `str` |  |
| `frowning` | `str` |  |
| `frowning_face` | `str` |  |
| `frowning_man` | `str` |  |
| `frowning_person` | `str` |  |
| `frowning_woman` | `str` |  |
| `fu` | `str` |  |
| `fuelpump` | `str` |  |
| `full_moon` | `str` |  |
| `full_moon_with_face` | `str` |  |
| `funeral_urn` | `str` |  |
| `gabon` | `str` |  |
| `gambia` | `str` |  |
| `game_die` | `str` |  |
| `garlic` | `str` |  |
| `gb` | `str` |  |
| `gear` | `str` |  |
| `gem` | `str` |  |
| `gemini` | `str` |  |
| `genie` | `str` |  |
| `genie_man` | `str` |  |
| `genie_woman` | `str` |  |
| `georgia` | `str` |  |
| `ghana` | `str` |  |
| `ghost` | `str` |  |
| `gibraltar` | `str` |  |
| `gift` | `str` |  |
| `gift_heart` | `str` |  |
| `giraffe` | `str` |  |
| `girl` | `str` |  |
| `globe_with_meridians` | `str` |  |
| `gloves` | `str` |  |
| `goal_net` | `str` |  |
| `goat` | `str` |  |
| `goberserk` | `str` |  |
| `godmode` | `str` |  |
| `goggles` | `str` |  |
| `golf` | `str` |  |
| `golfing` | `str` |  |
| `golfing_man` | `str` |  |
| `golfing_woman` | `str` |  |
| `gorilla` | `str` |  |
| `grapes` | `str` |  |
| `greece` | `str` |  |
| `green_apple` | `str` |  |
| `green_book` | `str` |  |
| `green_circle` | `str` |  |
| `green_heart` | `str` |  |
| `green_salad` | `str` |  |
| `green_square` | `str` |  |
| `greenland` | `str` |  |
| `grenada` | `str` |  |
| `grey_exclamation` | `str` |  |
| `grey_question` | `str` |  |
| `grimacing` | `str` |  |
| `grin` | `str` |  |
| `grinning` | `str` |  |
| `guadeloupe` | `str` |  |
| `guam` | `str` |  |
| `guard` | `str` |  |
| `guardsman` | `str` |  |
| `guardswoman` | `str` |  |
| `guatemala` | `str` |  |
| `guernsey` | `str` |  |
| `guide_dog` | `str` |  |
| `guinea` | `str` |  |
| `guinea_bissau` | `str` |  |
| `guitar` | `str` |  |
| `gun` | `str` |  |
| `guyana` | `str` |  |
| `haircut` | `str` |  |
| `haircut_man` | `str` |  |
| `haircut_woman` | `str` |  |
| `haiti` | `str` |  |
| `hamburger` | `str` |  |
| `hammer` | `str` |  |
| `hammer_and_pick` | `str` |  |
| `hammer_and_wrench` | `str` |  |
| `hamster` | `str` |  |
| `hand` | `str` |  |
| `hand_over_mouth` | `str` |  |
| `handbag` | `str` |  |
| `handball_person` | `str` |  |
| `handshake` | `str` |  |
| `hankey` | `str` |  |
| `hash` | `str` |  |
| `hatched_chick` | `str` |  |
| `hatching_chick` | `str` |  |
| `headphones` | `str` |  |
| `headstone` | `str` |  |
| `health_worker` | `str` |  |
| `hear_no_evil` | `str` |  |
| `heard_mcdonald_islands` | `str` |  |
| `heart` | `str` |  |
| `heart_decoration` | `str` |  |
| `heart_eyes` | `str` |  |
| `heart_eyes_cat` | `str` |  |
| `heart_on_fire` | `str` |  |
| `heartbeat` | `str` |  |
| `heartpulse` | `str` |  |
| `hearts` | `str` |  |
| `heavy_check_mark` | `str` |  |
| `heavy_division_sign` | `str` |  |
| `heavy_dollar_sign` | `str` |  |
| `heavy_exclamation_mark` | `str` |  |
| `heavy_heart_exclamation` | `str` |  |
| `heavy_minus_sign` | `str` |  |
| `heavy_multiplication_x` | `str` |  |
| `heavy_plus_sign` | `str` |  |
| `hedgehog` | `str` |  |
| `helicopter` | `str` |  |
| `herb` | `str` |  |
| `hibiscus` | `str` |  |
| `high_brightness` | `str` |  |
| `high_heel` | `str` |  |
| `hiking_boot` | `str` |  |
| `hindu_temple` | `str` |  |
| `hippopotamus` | `str` |  |
| `hocho` | `str` |  |
| `hole` | `str` |  |
| `honduras` | `str` |  |
| `honey_pot` | `str` |  |
| `honeybee` | `str` |  |
| `hong_kong` | `str` |  |
| `hook` | `str` |  |
| `horse` | `str` |  |
| `horse_racing` | `str` |  |
| `hospital` | `str` |  |
| `hot_face` | `str` |  |
| `hot_pepper` | `str` |  |
| `hotdog` | `str` |  |
| `hotel` | `str` |  |
| `hotsprings` | `str` |  |
| `hourglass` | `str` |  |
| `hourglass_flowing_sand` | `str` |  |
| `house` | `str` |  |
| `house_with_garden` | `str` |  |
| `houses` | `str` |  |
| `hugs` | `str` |  |
| `hungary` | `str` |  |
| `hurtrealbad` | `str` |  |
| `hushed` | `str` |  |
| `hut` | `str` |  |
| `ice_cream` | `str` |  |
| `ice_cube` | `str` |  |
| `ice_hockey` | `str` |  |
| `ice_skate` | `str` |  |
| `icecream` | `str` |  |
| `iceland` | `str` |  |
| `id` | `str` |  |
| `ideograph_advantage` | `str` |  |
| `imp` | `str` |  |
| `inbox_tray` | `str` |  |
| `incoming_envelope` | `str` |  |
| `india` | `str` |  |
| `indonesia` | `str` |  |
| `infinity` | `str` |  |
| `information_desk_person` | `str` |  |
| `information_source` | `str` |  |
| `innocent` | `str` |  |
| `interrobang` | `str` |  |
| `iphone` | `str` |  |
| `iran` | `str` |  |
| `iraq` | `str` |  |
| `ireland` | `str` |  |
| `isle_of_man` | `str` |  |
| `israel` | `str` |  |
| `it` | `str` |  |
| `izakaya_lantern` | `str` |  |
| `jack_o_lantern` | `str` |  |
| `jamaica` | `str` |  |
| `japan` | `str` |  |
| `japanese_castle` | `str` |  |
| `japanese_goblin` | `str` |  |
| `japanese_ogre` | `str` |  |
| `jeans` | `str` |  |
| `jersey` | `str` |  |
| `jigsaw` | `str` |  |
| `jordan` | `str` |  |
| `joy` | `str` |  |
| `joy_cat` | `str` |  |
| `joystick` | `str` |  |
| `jp` | `str` |  |
| `judge` | `str` |  |
| `juggling_person` | `str` |  |
| `kangaroo` | `str` |  |
| `kazakhstan` | `str` |  |
| `kenya` | `str` |  |
| `key` | `str` |  |
| `keyboard` | `str` |  |
| `keycap_ten` | `str` |  |
| `kick_scooter` | `str` |  |
| `kimono` | `str` |  |
| `kiribati` | `str` |  |
| `kiss` | `str` |  |
| `kissing` | `str` |  |
| `kissing_cat` | `str` |  |
| `kissing_closed_eyes` | `str` |  |
| `kissing_heart` | `str` |  |
| `kissing_smiling_eyes` | `str` |  |
| `kite` | `str` |  |
| `kiwi_fruit` | `str` |  |
| `kneeling_man` | `str` |  |
| `kneeling_person` | `str` |  |
| `kneeling_woman` | `str` |  |
| `knife` | `str` |  |
| `knot` | `str` |  |
| `koala` | `str` |  |
| `koko` | `str` |  |
| `kosovo` | `str` |  |
| `kr` | `str` |  |
| `kuwait` | `str` |  |
| `kyrgyzstan` | `str` |  |
| `lab_coat` | `str` |  |
| `label` | `str` |  |
| `lacrosse` | `str` |  |
| `ladder` | `str` |  |
| `lady_beetle` | `str` |  |
| `lantern` | `str` |  |
| `laos` | `str` |  |
| `large_blue_circle` | `str` |  |
| `large_blue_diamond` | `str` |  |
| `large_orange_diamond` | `str` |  |
| `last_quarter_moon` | `str` |  |
| `last_quarter_moon_with_face` | `str` |  |
| `latin_cross` | `str` |  |
| `latvia` | `str` |  |
| `laughing` | `str` |  |
| `leafy_green` | `str` |  |
| `leaves` | `str` |  |
| `lebanon` | `str` |  |
| `ledger` | `str` |  |
| `left_luggage` | `str` |  |
| `left_right_arrow` | `str` |  |
| `left_speech_bubble` | `str` |  |
| `leftwards_arrow_with_hook` | `str` |  |
| `leg` | `str` |  |
| `lemon` | `str` |  |
| `leo` | `str` |  |
| `leopard` | `str` |  |
| `lesotho` | `str` |  |
| `level_slider` | `str` |  |
| `liberia` | `str` |  |
| `libra` | `str` |  |
| `libya` | `str` |  |
| `liechtenstein` | `str` |  |
| `light_rail` | `str` |  |
| `link` | `str` |  |
| `lion` | `str` |  |
| `lips` | `str` |  |
| `lipstick` | `str` |  |
| `lithuania` | `str` |  |
| `lizard` | `str` |  |
| `llama` | `str` |  |
| `lobster` | `str` |  |
| `lock` | `str` |  |
| `lock_with_ink_pen` | `str` |  |
| `lollipop` | `str` |  |
| `long_drum` | `str` |  |
| `loop` | `str` |  |
| `lotion_bottle` | `str` |  |
| `lotus_position` | `str` |  |
| `lotus_position_man` | `str` |  |
| `lotus_position_woman` | `str` |  |
| `loud_sound` | `str` |  |
| `loudspeaker` | `str` |  |
| `love_hotel` | `str` |  |
| `love_letter` | `str` |  |
| `love_you_gesture` | `str` |  |
| `low_brightness` | `str` |  |
| `luggage` | `str` |  |
| `lungs` | `str` |  |
| `luxembourg` | `str` |  |
| `lying_face` | `str` |  |
| `m` | `str` |  |
| `macau` | `str` |  |
| `macedonia` | `str` |  |
| `madagascar` | `str` |  |
| `mag` | `str` |  |
| `mag_right` | `str` |  |
| `mage` | `str` |  |
| `mage_man` | `str` |  |
| `mage_woman` | `str` |  |
| `magic_wand` | `str` |  |
| `magnet` | `str` |  |
| `mahjong` | `str` |  |
| `mailbox` | `str` |  |
| `mailbox_closed` | `str` |  |
| `mailbox_with_mail` | `str` |  |
| `mailbox_with_no_mail` | `str` |  |
| `malawi` | `str` |  |
| `malaysia` | `str` |  |
| `maldives` | `str` |  |
| `male_detective` | `str` |  |
| `male_sign` | `str` |  |
| `mali` | `str` |  |
| `malta` | `str` |  |
| `mammoth` | `str` |  |
| `man` | `str` |  |
| `man_artist` | `str` |  |
| `man_astronaut` | `str` |  |
| `man_beard` | `str` |  |
| `man_cartwheeling` | `str` |  |
| `man_cook` | `str` |  |
| `man_dancing` | `str` |  |
| `man_facepalming` | `str` |  |
| `man_factory_worker` | `str` |  |
| `man_farmer` | `str` |  |
| `man_feeding_baby` | `str` |  |
| `man_firefighter` | `str` |  |
| `man_health_worker` | `str` |  |
| `man_in_manual_wheelchair` | `str` |  |
| `man_in_motorized_wheelchair` | `str` |  |
| `man_in_tuxedo` | `str` |  |
| `man_judge` | `str` |  |
| `man_juggling` | `str` |  |
| `man_mechanic` | `str` |  |
| `man_office_worker` | `str` |  |
| `man_pilot` | `str` |  |
| `man_playing_handball` | `str` |  |
| `man_playing_water_polo` | `str` |  |
| `man_scientist` | `str` |  |
| `man_shrugging` | `str` |  |
| `man_singer` | `str` |  |
| `man_student` | `str` |  |
| `man_teacher` | `str` |  |
| `man_technologist` | `str` |  |
| `man_with_gua_pi_mao` | `str` |  |
| `man_with_probing_cane` | `str` |  |
| `man_with_turban` | `str` |  |
| `man_with_veil` | `str` |  |
| `mandarin` | `str` |  |
| `mango` | `str` |  |
| `mans_shoe` | `str` |  |
| `mantelpiece_clock` | `str` |  |
| `manual_wheelchair` | `str` |  |
| `maple_leaf` | `str` |  |
| `marshall_islands` | `str` |  |
| `martial_arts_uniform` | `str` |  |
| `martinique` | `str` |  |
| `mask` | `str` |  |
| `massage` | `str` |  |
| `massage_man` | `str` |  |
| `massage_woman` | `str` |  |
| `mate` | `str` |  |
| `mauritania` | `str` |  |
| `mauritius` | `str` |  |
| `mayotte` | `str` |  |
| `meat_on_bone` | `str` |  |
| `mechanic` | `str` |  |
| `mechanical_arm` | `str` |  |
| `mechanical_leg` | `str` |  |
| `medal_military` | `str` |  |
| `medal_sports` | `str` |  |
| `medical_symbol` | `str` |  |
| `mega` | `str` |  |
| `melon` | `str` |  |
| `memo` | `str` |  |
| `men_wrestling` | `str` |  |
| `mending_heart` | `str` |  |
| `menorah` | `str` |  |
| `mens` | `str` |  |
| `mermaid` | `str` |  |
| `merman` | `str` |  |
| `merperson` | `str` |  |
| `metal` | `str` |  |
| `metro` | `str` |  |
| `mexico` | `str` |  |
| `microbe` | `str` |  |
| `micronesia` | `str` |  |
| `microphone` | `str` |  |
| `microscope` | `str` |  |
| `middle_finger` | `str` |  |
| `military_helmet` | `str` |  |
| `milk_glass` | `str` |  |
| `milky_way` | `str` |  |
| `minibus` | `str` |  |
| `minidisc` | `str` |  |
| `mirror` | `str` |  |
| `mobile_phone_off` | `str` |  |
| `moldova` | `str` |  |
| `monaco` | `str` |  |
| `money_mouth_face` | `str` |  |
| `money_with_wings` | `str` |  |
| `moneybag` | `str` |  |
| `mongolia` | `str` |  |
| `monkey` | `str` |  |
| `monkey_face` | `str` |  |
| `monocle_face` | `str` |  |
| `monorail` | `str` |  |
| `montenegro` | `str` |  |
| `montserrat` | `str` |  |
| `moon` | `str` |  |
| `moon_cake` | `str` |  |
| `morocco` | `str` |  |
| `mortar_board` | `str` |  |
| `mosque` | `str` |  |
| `mosquito` | `str` |  |
| `motor_boat` | `str` |  |
| `motor_scooter` | `str` |  |
| `motorcycle` | `str` |  |
| `motorized_wheelchair` | `str` |  |
| `motorway` | `str` |  |
| `mount_fuji` | `str` |  |
| `mountain` | `str` |  |
| `mountain_bicyclist` | `str` |  |
| `mountain_biking_man` | `str` |  |
| `mountain_biking_woman` | `str` |  |
| `mountain_cableway` | `str` |  |
| `mountain_railway` | `str` |  |
| `mountain_snow` | `str` |  |
| `mouse` | `str` |  |
| `mouse2` | `str` |  |
| `mouse_trap` | `str` |  |
| `movie_camera` | `str` |  |
| `moyai` | `str` |  |
| `mozambique` | `str` |  |
| `mrs_claus` | `str` |  |
| `muscle` | `str` |  |
| `mushroom` | `str` |  |
| `musical_keyboard` | `str` |  |
| `musical_note` | `str` |  |
| `musical_score` | `str` |  |
| `mute` | `str` |  |
| `mx_claus` | `str` |  |
| `myanmar` | `str` |  |
| `nail_care` | `str` |  |
| `name_badge` | `str` |  |
| `namibia` | `str` |  |
| `national_park` | `str` |  |
| `nauru` | `str` |  |
| `nauseated_face` | `str` |  |
| `nazar_amulet` | `str` |  |
| `neckbeard` | `str` |  |
| `necktie` | `str` |  |
| `negative_squared_cross_mark` | `str` |  |
| `nepal` | `str` |  |
| `nerd_face` | `str` |  |
| `nesting_dolls` | `str` |  |
| `netherlands` | `str` |  |
| `neutral_face` | `str` |  |
| `new` | `str` |  |
| `new_caledonia` | `str` |  |
| `new_moon` | `str` |  |
| `new_moon_with_face` | `str` |  |
| `new_zealand` | `str` |  |
| `newspaper` | `str` |  |
| `newspaper_roll` | `str` |  |
| `next_track_button` | `str` |  |
| `ng` | `str` |  |
| `ng_man` | `str` |  |
| `ng_woman` | `str` |  |
| `nicaragua` | `str` |  |
| `niger` | `str` |  |
| `nigeria` | `str` |  |
| `night_with_stars` | `str` |  |
| `nine` | `str` |  |
| `ninja` | `str` |  |
| `niue` | `str` |  |
| `no_bell` | `str` |  |
| `no_bicycles` | `str` |  |
| `no_entry` | `str` |  |
| `no_entry_sign` | `str` |  |
| `no_good` | `str` |  |
| `no_good_man` | `str` |  |
| `no_good_woman` | `str` |  |
| `no_mobile_phones` | `str` |  |
| `no_mouth` | `str` |  |
| `no_pedestrians` | `str` |  |
| `no_smoking` | `str` |  |
| `nonpotable_water` | `str` |  |
| `norfolk_island` | `str` |  |
| `north_korea` | `str` |  |
| `northern_mariana_islands` | `str` |  |
| `norway` | `str` |  |
| `nose` | `str` |  |
| `notebook` | `str` |  |
| `notebook_with_decorative_cover` | `str` |  |
| `notes` | `str` |  |
| `nut_and_bolt` | `str` |  |
| `o` | `str` |  |
| `o2` | `str` |  |
| `ocean` | `str` |  |
| `octocat` | `str` |  |
| `octopus` | `str` |  |
| `oden` | `str` |  |
| `office` | `str` |  |
| `office_worker` | `str` |  |
| `oil_drum` | `str` |  |
| `ok` | `str` |  |
| `ok_hand` | `str` |  |
| `ok_man` | `str` |  |
| `ok_person` | `str` |  |
| `ok_woman` | `str` |  |
| `old_key` | `str` |  |
| `older_adult` | `str` |  |
| `older_man` | `str` |  |
| `older_woman` | `str` |  |
| `olive` | `str` |  |
| `om` | `str` |  |
| `oman` | `str` |  |
| `on` | `str` |  |
| `oncoming_automobile` | `str` |  |
| `oncoming_bus` | `str` |  |
| `oncoming_police_car` | `str` |  |
| `oncoming_taxi` | `str` |  |
| `one` | `str` |  |
| `one_piece_swimsuit` | `str` |  |
| `onion` | `str` |  |
| `open_book` | `str` |  |
| `open_file_folder` | `str` |  |
| `open_hands` | `str` |  |
| `open_mouth` | `str` |  |
| `open_umbrella` | `str` |  |
| `ophiuchus` | `str` |  |
| `orange` | `str` |  |
| `orange_book` | `str` |  |
| `orange_circle` | `str` |  |
| `orange_heart` | `str` |  |
| `orange_square` | `str` |  |
| `orangutan` | `str` |  |
| `orthodox_cross` | `str` |  |
| `otter` | `str` |  |
| `outbox_tray` | `str` |  |
| `owl` | `str` |  |
| `ox` | `str` |  |
| `oyster` | `str` |  |
| `package` | `str` |  |
| `page_facing_up` | `str` |  |
| `page_with_curl` | `str` |  |
| `pager` | `str` |  |
| `paintbrush` | `str` |  |
| `pakistan` | `str` |  |
| `palau` | `str` |  |
| `palestinian_territories` | `str` |  |
| `palm_tree` | `str` |  |
| `palms_up_together` | `str` |  |
| `panama` | `str` |  |
| `pancakes` | `str` |  |
| `panda_face` | `str` |  |
| `paperclip` | `str` |  |
| `paperclips` | `str` |  |
| `papua_new_guinea` | `str` |  |
| `parachute` | `str` |  |
| `paraguay` | `str` |  |
| `parasol_on_ground` | `str` |  |
| `parking` | `str` |  |
| `parrot` | `str` |  |
| `part_alternation_mark` | `str` |  |
| `partly_sunny` | `str` |  |
| `partying_face` | `str` |  |
| `passenger_ship` | `str` |  |
| `passport_control` | `str` |  |
| `pause_button` | `str` |  |
| `paw_prints` | `str` |  |
| `peace_symbol` | `str` |  |
| `peach` | `str` |  |
| `peacock` | `str` |  |
| `peanuts` | `str` |  |
| `pear` | `str` |  |
| `pen` | `str` |  |
| `pencil` | `str` |  |
| `pencil2` | `str` |  |
| `penguin` | `str` |  |
| `pensive` | `str` |  |
| `people_holding_hands` | `str` |  |
| `people_hugging` | `str` |  |
| `performing_arts` | `str` |  |
| `persevere` | `str` |  |
| `person_bald` | `str` |  |
| `person_curly_hair` | `str` |  |
| `person_feeding_baby` | `str` |  |
| `person_fencing` | `str` |  |
| `person_in_manual_wheelchair` | `str` |  |
| `person_in_motorized_wheelchair` | `str` |  |
| `person_in_tuxedo` | `str` |  |
| `person_red_hair` | `str` |  |
| `person_white_hair` | `str` |  |
| `person_with_probing_cane` | `str` |  |
| `person_with_turban` | `str` |  |
| `person_with_veil` | `str` |  |
| `peru` | `str` |  |
| `petri_dish` | `str` |  |
| `philippines` | `str` |  |
| `phone` | `str` |  |
| `pick` | `str` |  |
| `pickup_truck` | `str` |  |
| `pie` | `str` |  |
| `pig` | `str` |  |
| `pig2` | `str` |  |
| `pig_nose` | `str` |  |
| `pill` | `str` |  |
| `pilot` | `str` |  |
| `pinata` | `str` |  |
| `pinched_fingers` | `str` |  |
| `pinching_hand` | `str` |  |
| `pineapple` | `str` |  |
| `ping_pong` | `str` |  |
| `pirate_flag` | `str` |  |
| `pisces` | `str` |  |
| `pitcairn_islands` | `str` |  |
| `pizza` | `str` |  |
| `placard` | `str` |  |
| `place_of_worship` | `str` |  |
| `plate_with_cutlery` | `str` |  |
| `play_or_pause_button` | `str` |  |
| `pleading_face` | `str` |  |
| `plunger` | `str` |  |
| `point_down` | `str` |  |
| `point_left` | `str` |  |
| `point_right` | `str` |  |
| `point_up` | `str` |  |
| `point_up_2` | `str` |  |
| `poland` | `str` |  |
| `polar_bear` | `str` |  |
| `police_car` | `str` |  |
| `police_officer` | `str` |  |
| `policeman` | `str` |  |
| `policewoman` | `str` |  |
| `poodle` | `str` |  |
| `poop` | `str` |  |
| `popcorn` | `str` |  |
| `portugal` | `str` |  |
| `post_office` | `str` |  |
| `postal_horn` | `str` |  |
| `postbox` | `str` |  |
| `potable_water` | `str` |  |
| `potato` | `str` |  |
| `potted_plant` | `str` |  |
| `pouch` | `str` |  |
| `poultry_leg` | `str` |  |
| `pound` | `str` |  |
| `pout` | `str` |  |
| `pouting_cat` | `str` |  |
| `pouting_face` | `str` |  |
| `pouting_man` | `str` |  |
| `pouting_woman` | `str` |  |
| `pray` | `str` |  |
| `prayer_beads` | `str` |  |
| `pregnant_woman` | `str` |  |
| `pretzel` | `str` |  |
| `previous_track_button` | `str` |  |
| `prince` | `str` |  |
| `princess` | `str` |  |
| `printer` | `str` |  |
| `probing_cane` | `str` |  |
| `puerto_rico` | `str` |  |
| `punch` | `str` |  |
| `purple_circle` | `str` |  |
| `purple_heart` | `str` |  |
| `purple_square` | `str` |  |
| `purse` | `str` |  |
| `pushpin` | `str` |  |
| `put_litter_in_its_place` | `str` |  |
| `qatar` | `str` |  |
| `question` | `str` |  |
| `rabbit` | `str` |  |
| `rabbit2` | `str` |  |
| `raccoon` | `str` |  |
| `racehorse` | `str` |  |
| `racing_car` | `str` |  |
| `radio` | `str` |  |
| `radio_button` | `str` |  |
| `radioactive` | `str` |  |
| `rage` | `str` |  |
| `rage1` | `str` |  |
| `rage2` | `str` |  |
| `rage3` | `str` |  |
| `rage4` | `str` |  |
| `railway_car` | `str` |  |
| `railway_track` | `str` |  |
| `rainbow` | `str` |  |
| `rainbow_flag` | `str` |  |
| `raised_back_of_hand` | `str` |  |
| `raised_eyebrow` | `str` |  |
| `raised_hand` | `str` |  |
| `raised_hand_with_fingers_splayed` | `str` |  |
| `raised_hands` | `str` |  |
| `raising_hand` | `str` |  |
| `raising_hand_man` | `str` |  |
| `raising_hand_woman` | `str` |  |
| `ram` | `str` |  |
| `ramen` | `str` |  |
| `rat` | `str` |  |
| `razor` | `str` |  |
| `receipt` | `str` |  |
| `record_button` | `str` |  |
| `recycle` | `str` |  |
| `red_car` | `str` |  |
| `red_circle` | `str` |  |
| `red_envelope` | `str` |  |
| `red_haired_man` | `str` |  |
| `red_haired_woman` | `str` |  |
| `red_square` | `str` |  |
| `registered` | `str` |  |
| `relaxed` | `str` |  |
| `relieved` | `str` |  |
| `reminder_ribbon` | `str` |  |
| `repeat` | `str` |  |
| `repeat_one` | `str` |  |
| `rescue_worker_helmet` | `str` |  |
| `restroom` | `str` |  |
| `reunion` | `str` |  |
| `revolving_hearts` | `str` |  |
| `rewind` | `str` |  |
| `rhinoceros` | `str` |  |
| `ribbon` | `str` |  |
| `rice` | `str` |  |
| `rice_ball` | `str` |  |
| `rice_cracker` | `str` |  |
| `rice_scene` | `str` |  |
| `right_anger_bubble` | `str` |  |
| `ring` | `str` |  |
| `ringed_planet` | `str` |  |
| `robot` | `str` |  |
| `rock` | `str` |  |
| `rocket` | `str` |  |
| `rofl` | `str` |  |
| `roll_eyes` | `str` |  |
| `roll_of_paper` | `str` |  |
| `roller_coaster` | `str` |  |
| `roller_skate` | `str` |  |
| `romania` | `str` |  |
| `rooster` | `str` |  |
| `rose` | `str` |  |
| `rosette` | `str` |  |
| `rotating_light` | `str` |  |
| `round_pushpin` | `str` |  |
| `rowboat` | `str` |  |
| `rowing_man` | `str` |  |
| `rowing_woman` | `str` |  |
| `ru` | `str` |  |
| `rugby_football` | `str` |  |
| `runner` | `str` |  |
| `running` | `str` |  |
| `running_man` | `str` |  |
| `running_shirt_with_sash` | `str` |  |
| `running_woman` | `str` |  |
| `rwanda` | `str` |  |
| `sa` | `str` |  |
| `safety_pin` | `str` |  |
| `safety_vest` | `str` |  |
| `sagittarius` | `str` |  |
| `sailboat` | `str` |  |
| `sake` | `str` |  |
| `salt` | `str` |  |
| `samoa` | `str` |  |
| `san_marino` | `str` |  |
| `sandal` | `str` |  |
| `sandwich` | `str` |  |
| `santa` | `str` |  |
| `sao_tome_principe` | `str` |  |
| `sari` | `str` |  |
| `sassy_man` | `str` |  |
| `sassy_woman` | `str` |  |
| `satellite` | `str` |  |
| `satisfied` | `str` |  |
| `saudi_arabia` | `str` |  |
| `sauna_man` | `str` |  |
| `sauna_person` | `str` |  |
| `sauna_woman` | `str` |  |
| `sauropod` | `str` |  |
| `saxophone` | `str` |  |
| `scarf` | `str` |  |
| `school` | `str` |  |
| `school_satchel` | `str` |  |
| `scientist` | `str` |  |
| `scissors` | `str` |  |
| `scorpion` | `str` |  |
| `scorpius` | `str` |  |
| `scotland` | `str` |  |
| `scream` | `str` |  |
| `scream_cat` | `str` |  |
| `screwdriver` | `str` |  |
| `scroll` | `str` |  |
| `seal` | `str` |  |
| `seat` | `str` |  |
| `secret` | `str` |  |
| `see_no_evil` | `str` |  |
| `seedling` | `str` |  |
| `selfie` | `str` |  |
| `senegal` | `str` |  |
| `serbia` | `str` |  |
| `service_dog` | `str` |  |
| `seven` | `str` |  |
| `sewing_needle` | `str` |  |
| `seychelles` | `str` |  |
| `shallow_pan_of_food` | `str` |  |
| `shamrock` | `str` |  |
| `shark` | `str` |  |
| `shaved_ice` | `str` |  |
| `sheep` | `str` |  |
| `shell` | `str` |  |
| `shield` | `str` |  |
| `shinto_shrine` | `str` |  |
| `ship` | `str` |  |
| `shipit` | `str` |  |
| `shirt` | `str` |  |
| `shoe` | `str` |  |
| `shopping` | `str` |  |
| `shopping_cart` | `str` |  |
| `shorts` | `str` |  |
| `shower` | `str` |  |
| `shrimp` | `str` |  |
| `shrug` | `str` |  |
| `shushing_face` | `str` |  |
| `sierra_leone` | `str` |  |
| `signal_strength` | `str` |  |
| `singapore` | `str` |  |
| `singer` | `str` |  |
| `sint_maarten` | `str` |  |
| `six` | `str` |  |
| `six_pointed_star` | `str` |  |
| `skateboard` | `str` |  |
| `ski` | `str` |  |
| `skier` | `str` |  |
| `skull` | `str` |  |
| `skull_and_crossbones` | `str` |  |
| `skunk` | `str` |  |
| `sled` | `str` |  |
| `sleeping` | `str` |  |
| `sleeping_bed` | `str` |  |
| `sleepy` | `str` |  |
| `slightly_frowning_face` | `str` |  |
| `slightly_smiling_face` | `str` |  |
| `slot_machine` | `str` |  |
| `sloth` | `str` |  |
| `slovakia` | `str` |  |
| `slovenia` | `str` |  |
| `small_airplane` | `str` |  |
| `small_blue_diamond` | `str` |  |
| `small_orange_diamond` | `str` |  |
| `small_red_triangle` | `str` |  |
| `small_red_triangle_down` | `str` |  |
| `smile` | `str` |  |
| `smile_cat` | `str` |  |
| `smiley` | `str` |  |
| `smiley_cat` | `str` |  |
| `smiling_face_with_tear` | `str` |  |
| `smiling_face_with_three_hearts` | `str` |  |
| `smiling_imp` | `str` |  |
| `smirk` | `str` |  |
| `smirk_cat` | `str` |  |
| `smoking` | `str` |  |
| `snail` | `str` |  |
| `snake` | `str` |  |
| `sneezing_face` | `str` |  |
| `snowboarder` | `str` |  |
| `snowflake` | `str` |  |
| `snowman` | `str` |  |
| `snowman_with_snow` | `str` |  |
| `soap` | `str` |  |
| `sob` | `str` |  |
| `soccer` | `str` |  |
| `socks` | `str` |  |
| `softball` | `str` |  |
| `solomon_islands` | `str` |  |
| `somalia` | `str` |  |
| `soon` | `str` |  |
| `sos` | `str` |  |
| `sound` | `str` |  |
| `south_africa` | `str` |  |
| `south_georgia_south_sandwich_islands` | `str` |  |
| `south_sudan` | `str` |  |
| `space_invader` | `str` |  |
| `spades` | `str` |  |
| `spaghetti` | `str` |  |
| `sparkle` | `str` |  |
| `sparkler` | `str` |  |
| `sparkles` | `str` |  |
| `sparkling_heart` | `str` |  |
| `speak_no_evil` | `str` |  |
| `speaker` | `str` |  |
| `speaking_head` | `str` |  |
| `speech_balloon` | `str` |  |
| `speedboat` | `str` |  |
| `spider` | `str` |  |
| `spider_web` | `str` |  |
| `spiral_calendar` | `str` |  |
| `spiral_notepad` | `str` |  |
| `sponge` | `str` |  |
| `spoon` | `str` |  |
| `squid` | `str` |  |
| `sri_lanka` | `str` |  |
| `st_barthelemy` | `str` |  |
| `st_helena` | `str` |  |
| `st_kitts_nevis` | `str` |  |
| `st_lucia` | `str` |  |
| `st_martin` | `str` |  |
| `st_pierre_miquelon` | `str` |  |
| `st_vincent_grenadines` | `str` |  |
| `stadium` | `str` |  |
| `standing_man` | `str` |  |
| `standing_person` | `str` |  |
| `standing_woman` | `str` |  |
| `star` | `str` |  |
| `star2` | `str` |  |
| `star_and_crescent` | `str` |  |
| `star_of_david` | `str` |  |
| `star_struck` | `str` |  |
| `stars` | `str` |  |
| `station` | `str` |  |
| `statue_of_liberty` | `str` |  |
| `steam_locomotive` | `str` |  |
| `stethoscope` | `str` |  |
| `stew` | `str` |  |
| `stop_button` | `str` |  |
| `stop_sign` | `str` |  |
| `stopwatch` | `str` |  |
| `straight_ruler` | `str` |  |
| `strawberry` | `str` |  |
| `stuck_out_tongue` | `str` |  |
| `stuck_out_tongue_closed_eyes` | `str` |  |
| `stuck_out_tongue_winking_eye` | `str` |  |
| `student` | `str` |  |
| `studio_microphone` | `str` |  |
| `stuffed_flatbread` | `str` |  |
| `sudan` | `str` |  |
| `sun_behind_large_cloud` | `str` |  |
| `sun_behind_rain_cloud` | `str` |  |
| `sun_behind_small_cloud` | `str` |  |
| `sun_with_face` | `str` |  |
| `sunflower` | `str` |  |
| `sunglasses` | `str` |  |
| `sunny` | `str` |  |
| `sunrise` | `str` |  |
| `sunrise_over_mountains` | `str` |  |
| `superhero` | `str` |  |
| `superhero_man` | `str` |  |
| `superhero_woman` | `str` |  |
| `supervillain` | `str` |  |
| `supervillain_man` | `str` |  |
| `supervillain_woman` | `str` |  |
| `surfer` | `str` |  |
| `surfing_man` | `str` |  |
| `surfing_woman` | `str` |  |
| `suriname` | `str` |  |
| `sushi` | `str` |  |
| `suspect` | `str` |  |
| `suspension_railway` | `str` |  |
| `svalbard_jan_mayen` | `str` |  |
| `swan` | `str` |  |
| `swaziland` | `str` |  |
| `sweat` | `str` |  |
| `sweat_drops` | `str` |  |
| `sweat_smile` | `str` |  |
| `sweden` | `str` |  |
| `sweet_potato` | `str` |  |
| `swim_brief` | `str` |  |
| `swimmer` | `str` |  |
| `swimming_man` | `str` |  |
| `swimming_woman` | `str` |  |
| `switzerland` | `str` |  |
| `symbols` | `str` |  |
| `synagogue` | `str` |  |
| `syria` | `str` |  |
| `syringe` | `str` |  |
| `taco` | `str` |  |
| `tada` | `str` |  |
| `taiwan` | `str` |  |
| `tajikistan` | `str` |  |
| `takeout_box` | `str` |  |
| `tamale` | `str` |  |
| `tanabata_tree` | `str` |  |
| `tangerine` | `str` |  |
| `tanzania` | `str` |  |
| `taurus` | `str` |  |
| `taxi` | `str` |  |
| `tea` | `str` |  |
| `teacher` | `str` |  |
| `teapot` | `str` |  |
| `technologist` | `str` |  |
| `teddy_bear` | `str` |  |
| `telephone` | `str` |  |
| `telephone_receiver` | `str` |  |
| `telescope` | `str` |  |
| `tennis` | `str` |  |
| `tent` | `str` |  |
| `test_tube` | `str` |  |
| `thailand` | `str` |  |
| `thermometer` | `str` |  |
| `thinking` | `str` |  |
| `thong_sandal` | `str` |  |
| `thought_balloon` | `str` |  |
| `thread` | `str` |  |
| `three` | `str` |  |
| `thumbsdown` | `str` |  |
| `thumbsup` | `str` |  |
| `ticket` | `str` |  |
| `tickets` | `str` |  |
| `tiger` | `str` |  |
| `tiger2` | `str` |  |
| `timer_clock` | `str` |  |
| `timor_leste` | `str` |  |
| `tipping_hand_man` | `str` |  |
| `tipping_hand_person` | `str` |  |
| `tipping_hand_woman` | `str` |  |
| `tired_face` | `str` |  |
| `tm` | `str` |  |
| `togo` | `str` |  |
| `toilet` | `str` |  |
| `tokelau` | `str` |  |
| `tokyo_tower` | `str` |  |
| `tomato` | `str` |  |
| `tonga` | `str` |  |
| `tongue` | `str` |  |
| `toolbox` | `str` |  |
| `tooth` | `str` |  |
| `toothbrush` | `str` |  |
| `top` | `str` |  |
| `tophat` | `str` |  |
| `tornado` | `str` |  |
| `tr` | `str` |  |
| `trackball` | `str` |  |
| `tractor` | `str` |  |
| `traffic_light` | `str` |  |
| `train` | `str` |  |
| `train2` | `str` |  |
| `tram` | `str` |  |
| `transgender_flag` | `str` |  |
| `transgender_symbol` | `str` |  |
| `trex` | `str` |  |
| `triangular_flag_on_post` | `str` |  |
| `triangular_ruler` | `str` |  |
| `trident` | `str` |  |
| `trinidad_tobago` | `str` |  |
| `tristan_da_cunha` | `str` |  |
| `triumph` | `str` |  |
| `trolleybus` | `str` |  |
| `trollface` | `str` |  |
| `trophy` | `str` |  |
| `tropical_drink` | `str` |  |
| `tropical_fish` | `str` |  |
| `truck` | `str` |  |
| `trumpet` | `str` |  |
| `tshirt` | `str` |  |
| `tulip` | `str` |  |
| `tumbler_glass` | `str` |  |
| `tunisia` | `str` |  |
| `turkey` | `str` |  |
| `turkmenistan` | `str` |  |
| `turks_caicos_islands` | `str` |  |
| `turtle` | `str` |  |
| `tuvalu` | `str` |  |
| `tv` | `str` |  |
| `twisted_rightwards_arrows` | `str` |  |
| `two` | `str` |  |
| `two_hearts` | `str` |  |
| `two_men_holding_hands` | `str` |  |
| `two_women_holding_hands` | `str` |  |
| `u5272` | `str` |  |
| `u5408` | `str` |  |
| `u55b6` | `str` |  |
| `u6307` | `str` |  |
| `u6708` | `str` |  |
| `u6709` | `str` |  |
| `u6e80` | `str` |  |
| `u7121` | `str` |  |
| `u7533` | `str` |  |
| `u7981` | `str` |  |
| `u7a7a` | `str` |  |
| `uganda` | `str` |  |
| `uk` | `str` |  |
| `ukraine` | `str` |  |
| `umbrella` | `str` |  |
| `unamused` | `str` |  |
| `underage` | `str` |  |
| `unicorn` | `str` |  |
| `united_arab_emirates` | `str` |  |
| `united_nations` | `str` |  |
| `unlock` | `str` |  |
| `up` | `str` |  |
| `upside_down_face` | `str` |  |
| `uruguay` | `str` |  |
| `us` | `str` |  |
| `us_outlying_islands` | `str` |  |
| `us_virgin_islands` | `str` |  |
| `uzbekistan` | `str` |  |
| `v` | `str` |  |
| `vampire` | `str` |  |
| `vampire_man` | `str` |  |
| `vampire_woman` | `str` |  |
| `vanuatu` | `str` |  |
| `vatican_city` | `str` |  |
| `venezuela` | `str` |  |
| `vertical_traffic_light` | `str` |  |
| `vhs` | `str` |  |
| `vibration_mode` | `str` |  |
| `video_camera` | `str` |  |
| `video_game` | `str` |  |
| `vietnam` | `str` |  |
| `violin` | `str` |  |
| `virgo` | `str` |  |
| `volcano` | `str` |  |
| `volleyball` | `str` |  |
| `vomiting_face` | `str` |  |
| `vs` | `str` |  |
| `vulcan_salute` | `str` |  |
| `waffle` | `str` |  |
| `wales` | `str` |  |
| `walking` | `str` |  |
| `walking_man` | `str` |  |
| `walking_woman` | `str` |  |
| `wallis_futuna` | `str` |  |
| `waning_crescent_moon` | `str` |  |
| `waning_gibbous_moon` | `str` |  |
| `warning` | `str` |  |
| `wastebasket` | `str` |  |
| `watch` | `str` |  |
| `water_buffalo` | `str` |  |
| `water_polo` | `str` |  |
| `watermelon` | `str` |  |
| `wave` | `str` |  |
| `wavy_dash` | `str` |  |
| `waxing_crescent_moon` | `str` |  |
| `waxing_gibbous_moon` | `str` |  |
| `wc` | `str` |  |
| `weary` | `str` |  |
| `wedding` | `str` |  |
| `weight_lifting` | `str` |  |
| `weight_lifting_man` | `str` |  |
| `weight_lifting_woman` | `str` |  |
| `western_sahara` | `str` |  |
| `whale` | `str` |  |
| `whale2` | `str` |  |
| `wheel_of_dharma` | `str` |  |
| `wheelchair` | `str` |  |
| `white_check_mark` | `str` |  |
| `white_circle` | `str` |  |
| `white_flag` | `str` |  |
| `white_flower` | `str` |  |
| `white_haired_man` | `str` |  |
| `white_haired_woman` | `str` |  |
| `white_heart` | `str` |  |
| `white_large_square` | `str` |  |
| `white_medium_small_square` | `str` |  |
| `white_medium_square` | `str` |  |
| `white_small_square` | `str` |  |
| `white_square_button` | `str` |  |
| `wilted_flower` | `str` |  |
| `wind_chime` | `str` |  |
| `wind_face` | `str` |  |
| `window` | `str` |  |
| `wine_glass` | `str` |  |
| `wink` | `str` |  |
| `wolf` | `str` |  |
| `woman` | `str` |  |
| `woman_artist` | `str` |  |
| `woman_astronaut` | `str` |  |
| `woman_beard` | `str` |  |
| `woman_cartwheeling` | `str` |  |
| `woman_cook` | `str` |  |
| `woman_dancing` | `str` |  |
| `woman_facepalming` | `str` |  |
| `woman_factory_worker` | `str` |  |
| `woman_farmer` | `str` |  |
| `woman_feeding_baby` | `str` |  |
| `woman_firefighter` | `str` |  |
| `woman_health_worker` | `str` |  |
| `woman_in_manual_wheelchair` | `str` |  |
| `woman_in_motorized_wheelchair` | `str` |  |
| `woman_in_tuxedo` | `str` |  |
| `woman_judge` | `str` |  |
| `woman_juggling` | `str` |  |
| `woman_mechanic` | `str` |  |
| `woman_office_worker` | `str` |  |
| `woman_pilot` | `str` |  |
| `woman_playing_handball` | `str` |  |
| `woman_playing_water_polo` | `str` |  |
| `woman_scientist` | `str` |  |
| `woman_shrugging` | `str` |  |
| `woman_singer` | `str` |  |
| `woman_student` | `str` |  |
| `woman_teacher` | `str` |  |
| `woman_technologist` | `str` |  |
| `woman_with_headscarf` | `str` |  |
| `woman_with_probing_cane` | `str` |  |
| `woman_with_turban` | `str` |  |
| `woman_with_veil` | `str` |  |
| `womans_clothes` | `str` |  |
| `womans_hat` | `str` |  |
| `women_wrestling` | `str` |  |
| `womens` | `str` |  |
| `wood` | `str` |  |
| `woozy_face` | `str` |  |
| `world_map` | `str` |  |
| `worm` | `str` |  |
| `worried` | `str` |  |
| `wrench` | `str` |  |
| `wrestling` | `str` |  |
| `writing_hand` | `str` |  |
| `x` | `str` |  |
| `yarn` | `str` |  |
| `yawning_face` | `str` |  |
| `yellow_circle` | `str` |  |
| `yellow_heart` | `str` |  |
| `yellow_square` | `str` |  |
| `yemen` | `str` |  |
| `yen` | `str` |  |
| `yin_yang` | `str` |  |
| `yo_yo` | `str` |  |
| `yum` | `str` |  |
| `zambia` | `str` |  |
| `zany_face` | `str` |  |
| `zap` | `str` |  |
| `zebra` | `str` |  |
| `zero` | `str` |  |
| `zimbabwe` | `str` |  |
| `zipper_mouth_face` | `str` |  |
| `zombie` | `str` |  |
| `zombie_man` | `str` |  |
| `zombie_woman` | `str` |  |
| `zzz` | `str` |  |

#### Example: Load

```python
emoji = client.Emoji().load({"id": "emoji_id"})
```


### EmptyObject

Create an instance: `empty_object = client.EmptyObject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attestations` | `list` |  |
| `enable_debug_logging` | `bool` | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `str` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `list` | Array of unique strings. |
| `key_id` | `str` | ID of the key you used to encrypt the secret. |
| `languages` | `list` | CodeQL languages to be analyzed. |
| `name` | `str` | The name of the variable. |
| `query_suite` | `str` | CodeQL query suite to be used. |
| `runner_label` | `str` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `str` | Runner type to be used. |
| `selected_repository_ids` | `list` | An array of repository ids that can access the organization variable. |
| `state` | `str` | The desired state of code scanning default setup. |
| `threat_model` | `str` | Threat model to be used for code scanning analysis. |
| `use_default` | `bool` | Whether to use the default template or not. |
| `value` | `str` | The value of the variable. |
| `visibility` | `str` | The type of repositories in the organization that can access the variable. |

#### Example: Load

```python
empty_object = client.EmptyObject().load({"subject_digest": "subject_digest", "username": "username"})
```

#### Example: Create

```python
empty_object = client.EmptyObject().create({
    "org_id": "example_org_id",  # str
    "encrypted_value": "example_encrypted_value",  # str
    "key_id": "example_key_id",  # str
    "name": "example_name",  # str
    "use_default": True,  # bool
    "value": "example_value",  # str
    "visibility": "example_visibility",  # str
})
```


### EnterpriseTeam

Create an instance: `enterprise_team = client.EnterpriseTeam()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` | A description of the team. |
| `group_id` | `str` | The ID of the IdP group to assign team membership with. |
| `group_name` | `str` | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `members_url` | `str` |  |
| `name` | `str` | The name of the team. |
| `organization_selection_type` | `str` |  |
| `slug` | `str` |  |
| `sync_to_organizations` | `str` | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
enterprise_team = client.EnterpriseTeam().load({"id": "enterprise_team_id", "enterprise": "enterprise"})
```

#### Example: List

```python
enterprise_teams = client.EnterpriseTeam().list({"enterprise": "example"})
```

#### Example: Create

```python
enterprise_team = client.EnterpriseTeam().create({
    "enterprise": "example_enterprise",  # str
    "created_at": "example_created_at",  # str
    "group_id": "example_group_id",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "members_url": "example_members_url",  # str
    "name": "example_name",  # str
    "slug": "example_slug",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### EnterpriseTeamMembership

Create an instance: `enterprise_team_membership = client.EnterpriseTeamMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Environment

Create an instance: `environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `dict` | The type of deployment branch policy for this environment. |
| `html_url` | `str` |  |
| `id` | `int` | The id of the environment. |
| `name` | `str` | The name of the environment. |
| `node_id` | `str` |  |
| `prevent_self_review` | `bool` | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `list` | Built-in deployment protection rules for the environment. |
| `reviewers` | `list` | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `str` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `str` |  |
| `wait_timer` | `int` | The amount of time to delay a job after the job is initially triggered. |

#### Example: Load

```python
environment = client.Environment().load({"id": "environment_id", "owner": "owner", "repo": "repo"})
```


### EnvironmentApproval

Create an instance: `environment_approval = client.EnvironmentApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `str` | The comment submitted with the deployment review |
| `environments` | `list` | The list of environments that were approved or rejected |
| `state` | `str` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `dict` | A GitHub user. |

#### Example: List

```python
environment_approvals = client.EnvironmentApproval().list({"owner": "example", "repo": "example", "run_id": 1})
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | Actor |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `org` | `dict` | Actor |
| `payload` | `dict` |  |
| `public` | `bool` |  |
| `repo` | `dict` |  |
| `type` | `str` |  |

#### Example: Load

```python
event = client.Event().load({"org": "org", "username": "username"})
```

#### Example: List

```python
events = client.Event().list()
```


### Feed

Create an instance: `feed = client.Feed()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_actor_url` | `str` |  |
| `current_user_organization_url` | `str` |  |
| `current_user_organization_urls` | `list` |  |
| `current_user_public_url` | `str` |  |
| `current_user_url` | `str` |  |
| `links` | `dict` |  |
| `repository_discussions_category_url` | `str` | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `str` | A feed of discussions for a given repository. |
| `security_advisories_url` | `str` |  |
| `timeline_url` | `str` |  |
| `user_url` | `str` |  |

#### Example: List

```python
feeds = client.Feed().list()
```


### FileCommit

Create an instance: `file_commit = client.FileCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | The author of the file. |
| `branch` | `str` | The branch name. |
| `commit` | `dict` |  |
| `committer` | `dict` | The person that committed the file. |
| `content` | `dict` | The new file content, using Base64 encoding. |
| `message` | `str` | The commit message. |
| `sha` | `str` | **Required if you are updating a file**. |


### Follower

Create an instance: `follower = client.Follower()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
followers = client.Follower().list()
```


### Following

Create an instance: `following = client.Following()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
followings = client.Following().list()
```


### FullRepository

Create an instance: `full_repository = client.FullRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether to archive this repository. |
| `assignees_url` | `str` |  |
| `auto_init` | `bool` | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code of Conduct Simple |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `str` |  |
| `description` | `str` | A short description of the new repository. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `github_id` | `int` |  |
| `gitignore_template` | `str` | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `bool` | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `str` | A URL with more information about the repository. |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `include_all_branches` | `bool` | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `bool` | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` | License Simple |
| `license_template` | `str` | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `str` |  |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the new repository. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `dict` | A GitHub user. |
| `owner` | `dict` | A GitHub user. |
| `parent` | `dict` | A repository on GitHub. |
| `permissions` | `dict` |  |
| `private` | `bool` | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `security_and_analysis` | `dict` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `dict` | A repository on GitHub. |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `team_id` | `int` | The id of the team that will be granted access to this repository. |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `template_repository` | `dict` | A repository on GitHub. |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```python
full_repository = client.FullRepository().load({"owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
full_repository = client.FullRepository().create({
    "archive_url": "example_archive_url",  # str
    "archived": True,  # bool
    "assignees_url": "example_assignees_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "clone_url": "example_clone_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "created_at": "example_created_at",  # str
    "default_branch": "example_default_branch",  # str
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "disabled": True,  # bool
    "downloads_url": "example_downloads_url",  # str
    "events_url": "example_events_url",  # str
    "fork": True,  # bool
    "forks": 1,  # int
    "forks_count": 1,  # int
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "git_url": "example_git_url",  # str
    "github_id": 1,  # int
    "has_discussions": True,  # bool
    "has_issues": True,  # bool
    "has_pages": True,  # bool
    "has_projects": True,  # bool
    "has_wiki": True,  # bool
    "homepage": "example_homepage",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": "example_id",  # str
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "language": "example_language",  # str
    "languages_url": "example_languages_url",  # str
    "license": {},  # dict
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "mirror_url": "example_mirror_url",  # str
    "name": "example_name",  # str
    "network_count": 1,  # int
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "open_issues": 1,  # int
    "open_issues_count": 1,  # int
    "organization": {},  # dict
    "owner": {},  # dict
    "parent": {},  # dict
    "permissions": {},  # dict
    "private": True,  # bool
    "pulls_url": "example_pulls_url",  # str
    "pushed_at": "example_pushed_at",  # str
    "releases_url": "example_releases_url",  # str
    "size": 1,  # int
    "source": {},  # dict
    "ssh_url": "example_ssh_url",  # str
    "stargazers_count": 1,  # int
    "stargazers_url": "example_stargazers_url",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_count": 1,  # int
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "svn_url": "example_svn_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "template_repository": {},  # dict
    "trees_url": "example_trees_url",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "watchers": 1,  # int
    "watchers_count": 1,  # int
})
```


### Gist

Create an instance: `gist = client.Gist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` | Description of the gist |
| `files` | `dict` | Names and content for the files that make up the gist |
| `fork_of` | `dict` | Gist |
| `forks` | `list` |  |
| `forks_url` | `str` |  |
| `git_pull_url` | `str` |  |
| `git_push_url` | `str` |  |
| `history` | `list` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `owner` | `dict` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `str` | A GitHub user. |

#### Example: Load

```python
gist = client.Gist().load({"id": "gist_id"})
```

#### Example: List

```python
gists = client.Gist().list()
```

#### Example: Create

```python
gist = client.Gist().create({
    "fork_of": {},  # dict
    "owner": {},  # dict
})
```


### GistComment

Create an instance: `gist_comment = client.GistComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `str` | How the author is associated with the repository. |
| `avatar_url` | `str` |  |
| `body` | `str` | The comment text. |
| `created_at` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |
| `user_view_type` | `str` |  |

#### Example: Load

```python
gist_comment = client.GistComment().load({"id": 1, "gist_id": "gist_id"})
```

#### Example: List

```python
gist_comments = client.GistComment().list({"id": "example_id"})
```

#### Example: Create

```python
gist_comment = client.GistComment().create({
    "id": "example_id",  # str
    "author_association": "example_author_association",  # str
    "avatar_url": "example_avatar_url",  # str
    "body": "example_body",  # str
    "created_at": "example_created_at",  # str
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "gists_url": "example_gists_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "html_url": "example_html_url",  # str
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "organizations_url": "example_organizations_url",  # str
    "received_events_url": "example_received_events_url",  # str
    "repos_url": "example_repos_url",  # str
    "site_admin": True,  # bool
    "starred_url": "example_starred_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### GistCommit

Create an instance: `gist_commit = client.GistCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_status` | `dict` |  |
| `committed_at` | `str` |  |
| `id` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |
| `version` | `str` |  |

#### Example: List

```python
gist_commits = client.GistCommit().list({"id": "example"})
```


### GistSimple

Create an instance: `gist_simple = client.GistSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `files` | `dict` |  |
| `fork_of` | `dict` | Gist |
| `forks` | `list` |  |
| `forks_url` | `str` |  |
| `git_pull_url` | `str` |  |
| `git_push_url` | `str` |  |
| `history` | `list` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `owner` | `dict` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `str` |  |

#### Example: List

```python
gist_simples = client.GistSimple().list({"id": "example"})
```


### Git

Create an instance: `git = client.Git()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GitCommit

Create an instance: `git_commit = client.GitCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `dict` | Identifying information for the git-user |
| `committer` | `dict` | Identifying information for the git-user |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `message` | `str` | Message describing the purpose of the commit |
| `node_id` | `str` |  |
| `parents` | `list` | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `str` | SHA for the commit |
| `signature` | `str` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `dict` | The SHA of the tree object this commit points to |
| `url` | `str` |  |
| `verification` | `dict` |  |

#### Example: Load

```python
git_commit = client.GitCommit().load({"id": "git_commit_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
git_commit = client.GitCommit().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author": {},  # dict
    "committer": {},  # dict
    "html_url": "example_html_url",  # str
    "message": "example_message",  # str
    "node_id": "example_node_id",  # str
    "parents": [],  # list
    "sha": "example_sha",  # str
    "tree": {},  # dict
    "url": "example_url",  # str
    "verification": {},  # dict
})
```


### GitRef

Create an instance: `git_ref = client.GitRef()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `force` | `bool` | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `str` |  |
| `node_id` | `str` |  |
| `object` | `dict` |  |
| `ref` | `str` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `str` | SHA for the reference |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
git_ref = client.GitRef().load({"id": "git_ref_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
git_ref = client.GitRef().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "node_id": "example_node_id",  # str
    "object": {},  # dict
    "ref": "example_ref",  # str
    "sha": "example_sha",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
})
```


### GitTag

Create an instance: `git_tag = client.GitTag()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `message` | `str` | Message describing the purpose of the tag |
| `node_id` | `str` |  |
| `object` | `dict` | The SHA of the git object this is tagging. |
| `sha` | `str` |  |
| `tag` | `str` | Name of the tag |
| `tagger` | `dict` | An object with information about the individual creating the tag. |
| `type` | `str` | The type of the object we're tagging. |
| `url` | `str` | URL for the tag |
| `verification` | `dict` |  |

#### Example: Load

```python
git_tag = client.GitTag().load({"id": "git_tag_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
git_tag = client.GitTag().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "message": "example_message",  # str
    "node_id": "example_node_id",  # str
    "object": {},  # dict
    "sha": "example_sha",  # str
    "tag": "example_tag",  # str
    "tagger": {},  # dict
    "type": "example_type",  # str
    "url": "example_url",  # str
    "verification": {},  # dict
})
```


### GitTree

Create an instance: `git_tree = client.GitTree()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_tree` | `str` | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `str` |  |
| `sha` | `str` |  |
| `tree` | `list` | Objects specifying a tree structure |
| `truncated` | `bool` |  |
| `url` | `str` |  |

#### Example: Load

```python
git_tree = client.GitTree().load({"id": "git_tree_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
git_tree = client.GitTree().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "sha": "example_sha",  # str
    "tree": [],  # list
    "truncated": True,  # bool
})
```


### Gitignore

Create an instance: `gitignore = client.Gitignore()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
gitignores = client.Gitignore().list()
```


### GitignoreTemplate

Create an instance: `gitignore_template = client.GitignoreTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` |  |
| `source` | `str` |  |

#### Example: Load

```python
gitignore_template = client.GitignoreTemplate().load({"id": "gitignore_template_id"})
```


### GlobalAdvisory

Create an instance: `global_advisory = client.GlobalAdvisory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credits` | `list` | The users who contributed to the advisory. |
| `cve_id` | `str` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `dict` |  |
| `cvss_severities` | `dict` |  |
| `cwes` | `list` |  |
| `description` | `str` | A detailed description of what the advisory entails. |
| `epss` | `dict` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `str` | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `str` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `str` | The URL for the advisory. |
| `id` | `str` |  |
| `identifiers` | `list` |  |
| `nvd_published_at` | `str` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `str` | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `list` |  |
| `repository_advisory_url` | `str` | The API URL for the repository advisory. |
| `severity` | `str` | The severity of the advisory. |
| `source_code_location` | `str` | The URL of the advisory's source code. |
| `summary` | `str` | A short summary of the advisory. |
| `type` | `str` | The type of advisory. |
| `updated_at` | `str` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `str` | The API URL for the advisory. |
| `vulnerabilities` | `list` | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `str` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```python
global_advisory = client.GlobalAdvisory().load({"id": "global_advisory_id"})
```

#### Example: List

```python
global_advisorys = client.GlobalAdvisory().list()
```


### GpgKey

Create an instance: `gpg_key = client.GpgKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `armored_public_key` | `str` | A GPG key in ASCII-armored format. |
| `can_certify` | `bool` |  |
| `can_encrypt_comms` | `bool` |  |
| `can_encrypt_storage` | `bool` |  |
| `can_sign` | `bool` |  |
| `created_at` | `str` |  |
| `emails` | `list` |  |
| `expires_at` | `str` |  |
| `id` | `int` |  |
| `key_id` | `str` |  |
| `name` | `str` | A descriptive name for the new key. |
| `primary_key_id` | `int` |  |
| `public_key` | `str` |  |
| `raw_key` | `str` |  |
| `revoked` | `bool` |  |
| `subkeys` | `list` |  |

#### Example: Load

```python
gpg_key = client.GpgKey().load({"id": 1})
```

#### Example: List

```python
gpg_keys = client.GpgKey().list()
```

#### Example: Create

```python
gpg_key = client.GpgKey().create({
    "armored_public_key": "example_armored_public_key",  # str
    "can_certify": True,  # bool
    "can_encrypt_comms": True,  # bool
    "can_encrypt_storage": True,  # bool
    "can_sign": True,  # bool
    "created_at": "example_created_at",  # str
    "emails": [],  # list
    "expires_at": "example_expires_at",  # str
    "id": 1,  # int
    "key_id": "example_key_id",  # str
    "primary_key_id": 1,  # int
    "public_key": "example_public_key",  # str
    "raw_key": "example_raw_key",  # str
    "revoked": True,  # bool
    "subkeys": [],  # list
})
```


### Hook

Create an instance: `hook = client.Hook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `list` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `dict` | Configuration object of the webhook |
| `created_at` | `str` |  |
| `deliveries_url` | `str` |  |
| `events` | `list` | Determines what events the hook is triggered for. |
| `id` | `int` | Unique identifier of the webhook. |
| `last_response` | `dict` |  |
| `name` | `str` | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `str` |  |
| `remove_events` | `list` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
hook = client.Hook().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
hooks = client.Hook().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
hook = client.Hook().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "active": True,  # bool
    "config": {},  # dict
    "created_at": "example_created_at",  # str
    "events": [],  # list
    "id": 1,  # int
    "last_response": {},  # dict
    "name": "example_name",  # str
    "ping_url": "example_ping_url",  # str
    "test_url": "example_test_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### HookDelivery

Create an instance: `hook_delivery = client.HookDelivery()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `str` | Time when the delivery was delivered. |
| `duration` | `float` | Time spent delivering. |
| `event` | `str` | The event that triggered the delivery. |
| `guid` | `str` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Unique identifier of the delivery. |
| `installation_id` | `int` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Whether the delivery is a redelivery. |
| `repository_id` | `int` | The id of the repository associated with this event. |
| `request` | `dict` |  |
| `response` | `dict` |  |
| `status` | `str` | Description of the status of the attempted delivery |
| `status_code` | `int` | Status code received when delivery was made. |
| `throttled_at` | `str` | Time when the webhook delivery was throttled. |
| `url` | `str` | The URL target of the delivery. |

#### Example: Load

```python
hook_delivery = client.HookDelivery().load({"id": 1})
```


### HookDeliveryItem

Create an instance: `hook_delivery_item = client.HookDeliveryItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `str` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `str` | Time when the webhook delivery occurred. |
| `duration` | `float` | Time spent delivering. |
| `event` | `str` | The event that triggered the delivery. |
| `guid` | `str` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Unique identifier of the webhook delivery. |
| `installation_id` | `int` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Whether the webhook delivery is a redelivery. |
| `repository_id` | `int` | The id of the repository associated with this event. |
| `status` | `str` | Describes the response returned after attempting the delivery. |
| `status_code` | `int` | Status code received when delivery was made. |
| `throttled_at` | `str` | Time when the webhook delivery was throttled. |

#### Example: List

```python
hook_delivery_items = client.HookDeliveryItem().list()
```


### HostedCompute

Create an instance: `hosted_compute = client.HostedCompute()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `str` | The hosted compute service the network configuration supports. |
| `created_on` | `str` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `str` | The unique identifier of the network configuration. |
| `name` | `str` | The name of the network configuration. |
| `network_settings_ids` | `list` | The unique identifier of each network settings in the configuration. |

#### Example: List

```python
hosted_computes = client.HostedCompute().list({"org_id": "example"})
```


### Hovercard

Create an instance: `hovercard = client.Hovercard()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `str` |  |
| `octicon` | `str` |  |

#### Example: List

```python
hovercards = client.Hovercard().list({"username": "example"})
```


### Import

Create an instance: `import_ = client.Import()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors_count` | `int` |  |
| `authors_url` | `str` |  |
| `commit_count` | `int` |  |
| `error_message` | `str` |  |
| `failed_step` | `str` |  |
| `has_large_files` | `bool` |  |
| `html_url` | `str` |  |
| `human_name` | `str` |  |
| `import_percent` | `int` |  |
| `large_files_count` | `int` |  |
| `large_files_size` | `int` |  |
| `message` | `str` |  |
| `project_choices` | `list` |  |
| `push_percent` | `int` |  |
| `repository_url` | `str` |  |
| `status` | `str` |  |
| `status_text` | `str` |  |
| `svc_root` | `str` |  |
| `svn_root` | `str` |  |
| `tfvc_project` | `str` | For a tfvc import, the name of the project that is being imported. |
| `url` | `str` |  |
| `use_lfs` | `bool` | Whether to store large files during the import. |
| `vcs` | `str` | The originating VCS type. |
| `vcs_password` | `str` | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | `str` | The URL of the originating repository. |
| `vcs_username` | `str` | If authentication is required, the username to provide to `vcs_url`. |

#### Example: List

```python
import_s = client.Import().list({"owner": "example", "repo": "example"})
```


### Installation

Create an instance: `installation = client.Installation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `str` |  |
| `account` | `Any` |  |
| `app_id` | `int` |  |
| `app_slug` | `str` |  |
| `client_id` | `str` |  |
| `contact_email` | `str` |  |
| `created_at` | `str` |  |
| `events` | `list` |  |
| `has_multiple_single_files` | `bool` |  |
| `html_url` | `str` |  |
| `id` | `int` | The ID of the installation. |
| `permissions` | `dict` | The permissions granted to the user access token. |
| `repositories_url` | `str` |  |
| `repository_selection` | `str` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `str` |  |
| `single_file_paths` | `list` |  |
| `suspended_at` | `str` |  |
| `suspended_by` | `dict` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
installation = client.Installation().load({"id": 1})
```

#### Example: List

```python
installations = client.Installation().list()
```


### InstallationToken

Create an instance: `installation_token = client.InstallationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `permissions` | `dict` | The permissions granted to the user access token. |
| `repositories` | `list` | List of repository names that the token should have access to |
| `repository_ids` | `list` | List of repository IDs that the token should have access to |

#### Example: Create

```python
installation_token = client.InstallationToken().create({
    "id": 1,  # int
})
```


### Integration

Create an instance: `integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `list` | The GitHub Apps that have push access to this branch. |
| `client_id` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `events` | `list` | The list of events for the GitHub app. |
| `external_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the GitHub app |
| `installations_count` | `int` | The number of installations associated with the GitHub app. |
| `name` | `str` | The name of the GitHub app |
| `node_id` | `str` |  |
| `owner` | `Any` |  |
| `permissions` | `dict` | The set of permissions for the GitHub app |
| `slug` | `str` | The slug name of the GitHub app |
| `updated_at` | `str` |  |

#### Example: Load

```python
integration = client.Integration().load({"app_slug": "app_slug"})
```

#### Example: List

```python
integrations = client.Integration().list()
```

#### Example: Create

```python
integration = client.Integration().create({
    "branch_id": "example_branch_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "apps": [],  # list
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "events": [],  # list
    "external_url": "example_external_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "permissions": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### IntegrationInstallation

Create an instance: `integration_installation = client.IntegrationInstallation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `Any` |  |
| `created_at` | `str` |  |
| `id` | `int` | Unique identifier of the request installation. |
| `node_id` | `str` |  |
| `requester` | `dict` | A GitHub user. |

#### Example: List

```python
integration_installations = client.IntegrationInstallation().list()
```


### Interaction

Create an instance: `interaction = client.Interaction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `str` |  |
| `limit` | `str` |  |
| `origin` | `str` |  |

#### Example: Load

```python
interaction = client.Interaction().load()
```


### InteractionLimit

Create an instance: `interaction_limit = client.InteractionLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `str` |  |
| `expiry` | `str` | The duration of the interaction restriction. |
| `limit` | `str` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `str` |  |


### Issue

Create an instance: `issue = client.Issue()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `str` |  |
| `actor` | `dict` | A GitHub user. |
| `after_id` | `int` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `dict` | A GitHub user. |
| `assignees` | `list` | Usernames of people to assign this issue to. |
| `assigner` | `dict` | A GitHub user. |
| `author_association` | `str` | How the author is associated with the repository. |
| `before_id` | `int` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `str` | Contents of the issue comment |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `closed_at` | `str` |  |
| `closed_by` | `dict` | A GitHub user. |
| `color` | `str` | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` |  |
| `comments_url` | `str` |  |
| `commit_id` | `str` |  |
| `commit_url` | `str` |  |
| `created_at` | `str` |  |
| `default` | `bool` | Whether this label comes by default in a new repository. |
| `description` | `str` | Optional description of the label, such as its purpose. |
| `dismissed_review` | `dict` |  |
| `draft` | `bool` |  |
| `event` | `str` |  |
| `events_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the issue comment |
| `issue` | `dict` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `dict` |  |
| `issue_field_values` | `list` |  |
| `issue_id` | `int` | The id of the issue that blocks the current issue |
| `issue_url` | `str` |  |
| `label` | `dict` | Issue Event Label |
| `labels` | `list` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `str` |  |
| `lock_reason` | `str` | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` |  |
| `milestone` | `dict` | Issue Event Milestone |
| `name` | `str` | The name of the label. |
| `node_id` | `str` |  |
| `number` | `int` | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `str` | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `project_card` | `dict` | Issue Event Project Card |
| `pull_request` | `dict` |  |
| `reactions` | `dict` |  |
| `rename` | `dict` | Issue Event Rename |
| `replace_parent` | `bool` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `dict` | A repository on GitHub. |
| `repository_url` | `str` |  |
| `requested_reviewer` | `dict` | A GitHub user. |
| `requested_team` | `dict` | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `dict` | A GitHub user. |
| `state` | `str` | State of the issue; either 'open' or 'closed' |
| `state_reason` | `str` | The reason for the current state |
| `sub_issue_id` | `int` | The id of the sub-issue to add. |
| `sub_issues_summary` | `dict` |  |
| `timeline_url` | `str` |  |
| `title` | `str` | Title of the issue |
| `type` | `dict` | The type of issue. |
| `updated_at` | `str` |  |
| `url` | `str` | URL for the issue comment |
| `user` | `dict` | A GitHub user. |

#### Example: Load

```python
issue = client.Issue().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
issues = client.Issue().list()
```

#### Example: Create

```python
issue = client.Issue().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "actor": {},  # dict
    "assignee": {},  # dict
    "assigner": {},  # dict
    "author_association": "example_author_association",  # str
    "closed_at": "example_closed_at",  # str
    "closed_by": {},  # dict
    "comments": 1,  # int
    "comments_url": "example_comments_url",  # str
    "commit_id": "example_commit_id",  # str
    "commit_url": "example_commit_url",  # str
    "created_at": "example_created_at",  # str
    "dismissed_review": {},  # dict
    "event": "example_event",  # str
    "events_url": "example_events_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "issue": {},  # dict
    "issue_dependencies_summary": {},  # dict
    "issue_id": 1,  # int
    "issue_url": "example_issue_url",  # str
    "label": {},  # dict
    "labels": [],  # list
    "labels_url": "example_labels_url",  # str
    "locked": True,  # bool
    "milestone": {},  # dict
    "node_id": "example_node_id",  # str
    "number": 1,  # int
    "performed_via_github_app": {},  # dict
    "project_card": {},  # dict
    "pull_request": {},  # dict
    "reactions": {},  # dict
    "rename": {},  # dict
    "repository": {},  # dict
    "repository_url": "example_repository_url",  # str
    "requested_reviewer": {},  # dict
    "requested_team": {},  # dict
    "review_requester": {},  # dict
    "state": "example_state",  # str
    "sub_issue_id": 1,  # int
    "sub_issues_summary": {},  # dict
    "title": "example_title",  # str
    "type": {},  # dict
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### IssueType

Create an instance: `issue_type = client.IssueType()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `str` | The color of the issue type. |
| `created_at` | `str` | The time the issue type created. |
| `description` | `str` | The description of the issue type. |
| `id` | `int` | The unique identifier of the issue type. |
| `is_enabled` | `bool` | The enabled state of the issue type. |
| `name` | `str` | The name of the issue type. |
| `node_id` | `str` | The node identifier of the issue type. |
| `updated_at` | `str` | The time the issue type last updated. |

#### Example: List

```python
issue_types = client.IssueType().list({"org_id": "example"})
```

#### Example: Create

```python
issue_type = client.IssueType().create({
    "org_id": "example_org_id",  # str
    "description": "example_description",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
})
```


### Job

Create an instance: `job = client.Job()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `check_run_url` | `str` |  |
| `completed_at` | `str` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `str` | The outcome of the job. |
| `created_at` | `str` | The time that the job created, in ISO 8601 format. |
| `head_branch` | `str` | The name of the current branch. |
| `head_sha` | `str` | The SHA of the commit that is being run. |
| `html_url` | `str` |  |
| `id` | `int` | The id of the job. |
| `labels` | `list` | Labels for the workflow job. |
| `name` | `str` | The name of the job. |
| `node_id` | `str` |  |
| `run_attempt` | `int` | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | The id of the associated workflow run. |
| `run_url` | `str` |  |
| `runner_group_id` | `int` | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `str` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `str` | The name of the runner to which this job has been assigned. |
| `started_at` | `str` | The time that the job started, in ISO 8601 format. |
| `status` | `str` | The phase of the lifecycle that the job is currently in. |
| `steps` | `list` | Steps in this job. |
| `url` | `str` |  |
| `workflow_name` | `str` | The name of the workflow. |

#### Example: Load

```python
job = client.Job().load({"id": 1, "owner": "owner", "repo": "repo"})
```


### Key

Create an instance: `key = client.Key()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` | The public SSH key to add to your GitHub account. |
| `last_used` | `str` |  |
| `read_only` | `bool` |  |
| `title` | `str` | A descriptive name for the new key. |
| `url` | `str` |  |
| `verified` | `bool` |  |

#### Example: Load

```python
key = client.Key().load({"id": 1})
```

#### Example: List

```python
keys = client.Key().list()
```

#### Example: Create

```python
key = client.Key().create({
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "read_only": True,  # bool
    "title": "example_title",  # str
    "url": "example_url",  # str
    "verified": True,  # bool
})
```


### Label

Create an instance: `label = client.Label()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `color` | `str` | 6-character hex code, without the leading #, identifying the color |
| `default` | `bool` | Whether this label comes by default in a new repository. |
| `description` | `str` | Optional description of the label, such as its purpose. |
| `id` | `int` | Unique identifier for the label. |
| `name` | `str` | The name of the label. |
| `new_name` | `str` | The new name of the label. |
| `node_id` | `str` |  |
| `url` | `str` | URL for the label |

#### Example: Load

```python
label = client.Label().load({"id": "label_id", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
labels = client.Label().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
label = client.Label().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "color": "example_color",  # str
    "default": True,  # bool
    "description": "example_description",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "url": "example_url",  # str
})
```


### Language

Create an instance: `language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `C` | `int` |  |
| `Python` | `int` |  |

#### Example: Load

```python
language = client.Language().load({"owner": "owner", "repo": "repo"})
```


### License

Create an instance: `license = client.License()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `str` |  |
| `conditions` | `list` |  |
| `content` | `str` |  |
| `description` | `str` |  |
| `download_url` | `str` |  |
| `encoding` | `str` |  |
| `featured` | `bool` |  |
| `git_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `str` |  |
| `implementation` | `str` |  |
| `key` | `str` |  |
| `license` | `dict` | License Simple |
| `limitations` | `list` |  |
| `links` | `dict` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `path` | `str` |  |
| `permissions` | `list` |  |
| `sha` | `str` |  |
| `size` | `int` |  |
| `spdx_id` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
license = client.License().load({"id": "license_id"})
```

#### Example: List

```python
licenses = client.License().list()
```


### Markdown

Create an instance: `markdown = client.Markdown()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `str` | The repository context to use when creating references in `gfm` mode. |
| `mode` | `str` | The rendering mode. |
| `text` | `str` | The Markdown text to render in HTML. |

#### Example: Create

```python
markdown = client.Markdown().create({
    "text": "example_text",  # str
})
```


### MarketplaceListingPlan

Create an instance: `marketplace_listing_plan = client.MarketplaceListingPlan()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts_url` | `str` |  |
| `bullets` | `list` |  |
| `description` | `str` |  |
| `has_free_trial` | `bool` |  |
| `id` | `int` |  |
| `monthly_price_in_cents` | `int` |  |
| `name` | `str` |  |
| `number` | `int` |  |
| `price_model` | `str` |  |
| `state` | `str` |  |
| `unit_name` | `str` |  |
| `url` | `str` |  |
| `yearly_price_in_cents` | `int` |  |

#### Example: List

```python
marketplace_listing_plans = client.MarketplaceListingPlan().list()
```


### MarketplacePurchase

Create an instance: `marketplace_purchase = client.MarketplacePurchase()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `marketplace_pending_change` | `dict` |  |
| `marketplace_purchase` | `dict` |  |
| `organization_billing_email` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
marketplace_purchase = client.MarketplacePurchase().load({"account_id": 1})
```

#### Example: List

```python
marketplace_purchases = client.MarketplacePurchase().list({"plan_id": 1})
```


### Member

Create an instance: `member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
members = client.Member().list({"org_id": "example"})
```


### Membership

Create an instance: `membership = client.Membership()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
membership = client.Membership().load({"id": "membership_id", "enterprise": "enterprise", "team_id": "team_id"})
```

#### Example: List

```python
memberships = client.Membership().list({"enterprise": "example", "enterprise_team": "example"})
```


### MergedUpstream

Create an instance: `merged_upstream = client.MergedUpstream()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_branch` | `str` |  |
| `branch` | `str` | The name of the branch which should be updated to match upstream. |
| `merge_type` | `str` |  |
| `message` | `str` |  |

#### Example: Create

```python
merged_upstream = client.MergedUpstream().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "branch": "example_branch",  # str
})
```


### Meta

Create an instance: `meta = client.Meta()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
meta = client.Meta().load()
```

#### Example: List

```python
metas = client.Meta().list()
```


### Metaroot

Create an instance: `metaroot = client.Metaroot()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorizations_url` | `str` |  |
| `code_search_url` | `str` |  |
| `commit_search_url` | `str` |  |
| `current_user_authorizations_html_url` | `str` |  |
| `current_user_repositories_url` | `str` |  |
| `current_user_url` | `str` |  |
| `emails_url` | `str` |  |
| `emojis_url` | `str` |  |
| `events_url` | `str` |  |
| `feeds_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `hub_url` | `str` |  |
| `issue_search_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `label_search_url` | `str` |  |
| `notifications_url` | `str` |  |
| `organization_repositories_url` | `str` |  |
| `organization_teams_url` | `str` |  |
| `organization_url` | `str` |  |
| `public_gists_url` | `str` |  |
| `rate_limit_url` | `str` |  |
| `repository_search_url` | `str` |  |
| `repository_url` | `str` |  |
| `starred_gists_url` | `str` |  |
| `starred_url` | `str` |  |
| `topic_search_url` | `str` |  |
| `user_organizations_url` | `str` |  |
| `user_repositories_url` | `str` |  |
| `user_search_url` | `str` |  |
| `user_url` | `str` |  |

#### Example: Load

```python
metaroot = client.Metaroot().load()
```


### Migration

Create an instance: `migration = client.Migration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` |  |
| `assignees_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `exclude` | `list` | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `bool` | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `bool` | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `bool` | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `bool` | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `bool` | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `guid` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` |  |
| `lock_repositories` | `bool` | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` |  |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `org_metadata_only` | `bool` | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `dict` | A GitHub user. |
| `permissions` | `dict` |  |
| `private` | `bool` |  |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `repositories` | `list` | The repositories included in the migration. |
| `role_name` | `str` |  |
| `security_and_analysis` | `dict` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `state` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `visibility` | `str` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: Load

```python
migration = client.Migration().load({"id": 1})
```

#### Example: List

```python
migrations = client.Migration().list()
```

#### Example: Create

```python
migration = client.Migration().create({
    "assignees_url": "example_assignees_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "created_at": "example_created_at",  # str
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "downloads_url": "example_downloads_url",  # str
    "events_url": "example_events_url",  # str
    "exclude_attachments": True,  # bool
    "exclude_git_data": True,  # bool
    "exclude_metadata": True,  # bool
    "exclude_owner_projects": True,  # bool
    "exclude_releases": True,  # bool
    "fork": True,  # bool
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "guid": "example_guid",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "languages_url": "example_languages_url",  # str
    "lock_repositories": True,  # bool
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "org_metadata_only": True,  # bool
    "owner": {},  # dict
    "private": True,  # bool
    "pulls_url": "example_pulls_url",  # str
    "releases_url": "example_releases_url",  # str
    "repositories": [],  # list
    "stargazers_url": "example_stargazers_url",  # str
    "state": "example_state",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "trees_url": "example_trees_url",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### Milestone

Create an instance: `milestone = client.Milestone()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `closed_at` | `str` |  |
| `closed_issues` | `int` |  |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `description` | `str` | A description of the milestone. |
| `due_on` | `str` | The milestone due date. |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `labels_url` | `str` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `number` | `int` | The number of the milestone. |
| `open_issues` | `int` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `state` | `str` | The state of the milestone. |
| `subscriptions_url` | `str` |  |
| `title` | `str` | The title of the milestone. |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
milestone = client.Milestone().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
milestones = client.Milestone().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
milestone = client.Milestone().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "avatar_url": "example_avatar_url",  # str
    "closed_at": "example_closed_at",  # str
    "closed_issues": 1,  # int
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "gists_url": "example_gists_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "labels_url": "example_labels_url",  # str
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "number": 1,  # int
    "open_issues": 1,  # int
    "organizations_url": "example_organizations_url",  # str
    "received_events_url": "example_received_events_url",  # str
    "repos_url": "example_repos_url",  # str
    "site_admin": True,  # bool
    "starred_url": "example_starred_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "title": "example_title",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### MinimalRepository

Create an instance: `minimal_repository = client.MinimalRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `bool` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` |  |
| `assignees_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` |  |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` |  |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | A GitHub user. |
| `permissions` | `dict` |  |
| `private` | `bool` |  |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `role_name` | `str` |  |
| `security_and_analysis` | `dict` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `visibility` | `str` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```python
minimal_repositorys = client.MinimalRepository().list()
```


### NetworkConfiguration

Create an instance: `network_configuration = client.NetworkConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `str` | The hosted compute service the network configuration supports. |
| `created_on` | `str` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `str` | The unique identifier of the network configuration. |
| `name` | `str` | The name of the network configuration. |
| `network_settings_ids` | `list` | The unique identifier of each network settings in the configuration. |

#### Example: Load

```python
network_configuration = client.NetworkConfiguration().load({"id": "network_configuration_id", "org_id": "org_id"})
```

#### Example: Create

```python
network_configuration = client.NetworkConfiguration().create({
    "org_id": "example_org_id",  # str
    "created_on": "example_created_on",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
})
```


### NetworkSetting

Create an instance: `network_setting = client.NetworkSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The unique identifier of the network settings resource. |
| `name` | `str` | The name of the network settings resource. |
| `network_configuration_id` | `str` | The identifier of the network configuration that is using this settings resource. |
| `region` | `str` | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | `str` | The subnet this network settings resource is configured for. |

#### Example: Load

```python
network_setting = client.NetworkSetting().load({"id": "network_setting_id", "org_id": "org_id"})
```


### OidcCustomSub

Create an instance: `oidc_custom_sub = client.OidcCustomSub()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `list` | Array of unique strings. |

#### Example: List

```python
oidc_custom_subs = client.OidcCustomSub().list({"org_id": "example"})
```


### OidcCustomSubRepo

Create an instance: `oidc_custom_sub_repo = client.OidcCustomSubRepo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `list` | Array of unique strings. |
| `use_default` | `bool` | Whether to use the default template or not. |

#### Example: List

```python
oidc_custom_sub_repos = client.OidcCustomSubRepo().list({"owner": "example", "repo": "example"})
```


### Org

Create an instance: `org = client.Org()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `str` |  |
| `account` | `Any` |  |
| `action` | `str` | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` |  |
| `app_slug` | `str` |  |
| `artifact_url` | `str` | The URL where the artifact is stored. |
| `async` | `bool` | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `list` |  |
| `attestations_subject_digests` | `dict` | Mapping of subject digest to bundles. |
| `avatar_url` | `str` |  |
| `base_role` | `str` | The system role from which this role inherits permissions. |
| `billing_email` | `str` | Billing email address. |
| `blog` | `str` |  |
| `client_id` | `str` |  |
| `company` | `str` | The company name. |
| `contact_email` | `str` |  |
| `created_at` | `str` | The date and time the role was created. |
| `default_repository_permission` | `str` | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `bool` | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `str` | The description of the company. |
| `digest` | `str` | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `bool` | Whether the user has direct membership in the organization. |
| `email` | `str` | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `list` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `list` |  |
| `events_url` | `str` |  |
| `filled_seats` | `int` |  |
| `has_multiple_single_files` | `bool` |  |
| `has_organization_projects` | `bool` | Whether an organization can use organization projects. |
| `has_repository_projects` | `bool` | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | The ID of the installation. |
| `issues_url` | `str` |  |
| `location` | `str` | The location. |
| `login` | `str` |  |
| `members_allowed_repository_creation_type` | `str` | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `bool` | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `bool` | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `bool` | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `bool` | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `bool` | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `bool` | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `bool` | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `bool` | Whether organization members can fork private organization repositories. |
| `members_url` | `str` |  |
| `name` | `str` | The name of the artifact. |
| `node_id` | `str` |  |
| `organization` | `dict` | A GitHub organization. |
| `organization_url` | `str` |  |
| `page_info` | `dict` | Information about the current page. |
| `pat_ids` | `list` | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `list` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `str` | The path of the artifact. |
| `permissions` | `dict` | The permissions granted to the user access token. |
| `predicate_type` | `str` | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` |  |
| `properties` | `list` | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `str` |  |
| `query_suite` | `str` | CodeQL query suite to be used. |
| `reason` | `str` | Reason for approving or denying the request. |
| `registry_url` | `str` | The base URL of the artifact registry. |
| `repos_url` | `str` |  |
| `repositories_url` | `str` |  |
| `repository` | `str` | The repository name within the registry. |
| `repository_names` | `list` | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `str` | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `str` | The user's membership type in the organization. |
| `seats` | `int` |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `str` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `str` |  |
| `single_file_paths` | `list` |  |
| `source` | `str` | Source answers the question, "where did this role come from?" |
| `space` | `int` |  |
| `state` | `str` | The state of the member in the organization. |
| `status` | `str` | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `list` |  |
| `subject_digests` | `list` | List of subject digests to fetch attestations for. |
| `suspended_at` | `str` |  |
| `suspended_by` | `dict` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` |  |
| `total_count` | `int` |  |
| `twitter_username` | `str` | The Twitter username of the company. |
| `updated_at` | `str` | The date and time the role was last updated. |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |
| `web_commit_signoff_required` | `bool` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

#### Example: Load

```python
org = client.Org().load({"id": "org_id"})
```

#### Example: List

```python
orgs = client.Org().list()
```

#### Example: Create

```python
org = client.Org().create({
    "enablement": "example_enablement",  # str
    "org": "example_org",  # str
    "security_product": "example_security_product",  # str
    "access_tokens_url": "example_access_tokens_url",  # str
    "account": "example_account",  # Any
    "action": "example_action",  # str
    "app_id": 1,  # int
    "app_slug": "example_app_slug",  # str
    "avatar_url": "example_avatar_url",  # str
    "created_at": "example_created_at",  # str
    "digest": "example_digest",  # str
    "events": [],  # list
    "events_url": "example_events_url",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "issues_url": "example_issues_url",  # str
    "login": "example_login",  # str
    "members_url": "example_members_url",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "organization": {},  # dict
    "organization_url": "example_organization_url",  # str
    "pat_ids": [],  # list
    "permissions": {},  # dict
    "private_repos": 1,  # int
    "properties": [],  # list
    "public_members_url": "example_public_members_url",  # str
    "registry_url": "example_registry_url",  # str
    "repos_url": "example_repos_url",  # str
    "repositories_url": "example_repositories_url",  # str
    "repository_names": [],  # list
    "repository_selection": "example_repository_selection",  # str
    "role": "example_role",  # str
    "single_file_name": "example_single_file_name",  # str
    "space": 1,  # int
    "state": "example_state",  # str
    "subject_digests": [],  # list
    "suspended_at": "example_suspended_at",  # str
    "suspended_by": {},  # dict
    "target_id": 1,  # int
    "target_type": "example_target_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### OrgHook

Create an instance: `org_hook = client.OrgHook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines if notifications are sent when the webhook is triggered. |
| `config` | `dict` | Key/value pairs to provide settings for this webhook. |
| `created_at` | `str` |  |
| `deliveries_url` | `str` |  |
| `events` | `list` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `int` |  |
| `name` | `str` | Must be passed as "web". |
| `ping_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
org_hook = client.OrgHook().load({"id": 1, "org_id": "org_id"})
```

#### Example: List

```python
org_hooks = client.OrgHook().list({"id": "example_id"})
```

#### Example: Create

```python
org_hook = client.OrgHook().create({
    "id": "example_id",  # str
    "active": True,  # bool
    "config": {},  # dict
    "created_at": "example_created_at",  # str
    "events": [],  # list
    "name": "example_name",  # str
    "ping_url": "example_ping_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### OrgMembership

Create an instance: `org_membership = client.OrgMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_membership` | `bool` | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `list` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `str` |  |
| `organization` | `dict` | A GitHub organization. |
| `organization_url` | `str` |  |
| `permissions` | `dict` |  |
| `role` | `str` | The user's membership type in the organization. |
| `state` | `str` | The state of the member in the organization. |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |

#### Example: Load

```python
org_membership = client.OrgMembership().load({"id": "org_membership_id", "org_id": "org_id"})
```


### OrgPrivateRegistryConfiguration

Create an instance: `org_private_registry_configuration = client.OrgPrivateRegistryConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `name` | `str` | The name of the private registry configuration. |
| `registry_type` | `str` | The registry type. |
| `updated_at` | `str` |  |
| `username` | `str` | The username to use when authenticating with the private registry. |
| `visibility` | `str` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```python
org_private_registry_configuration = client.OrgPrivateRegistryConfiguration().load({"org_id": "org_id", "secret_name": "secret_name"})
```


### OrgPrivateRegistryConfigurationWithSelectedRepository

Create an instance: `org_private_registry_configuration_with_selected_repository = client.OrgPrivateRegistryConfigurationWithSelectedRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `encrypted_value` | `str` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `str` |  |
| `key_id` | `str` | The ID of the key you used to encrypt the secret. |
| `registry_type` | `str` | The registry type. |
| `selected_repository_ids` | `list` | An array of repository IDs that can access the organization private registry. |
| `url` | `str` | The URL of the private registry. |
| `username` | `str` | The username to use when authenticating with the private registry. |
| `visibility` | `str` | Which type of organization repositories have access to the private registry. |

#### Example: Create

```python
org_private_registry_configuration_with_selected_repository = client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({
    "id": "example_id",  # str
    "encrypted_value": "example_encrypted_value",  # str
    "key_id": "example_key_id",  # str
    "registry_type": "example_registry_type",  # str
    "url": "example_url",  # str
    "visibility": "example_visibility",  # str
})
```


### OrgRepoCustomPropertyValue

Create an instance: `org_repo_custom_property_value = client.OrgRepoCustomPropertyValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `properties` | `list` | List of custom property names and associated values |
| `repository_full_name` | `str` |  |
| `repository_id` | `int` |  |
| `repository_name` | `str` |  |

#### Example: List

```python
org_repo_custom_property_values = client.OrgRepoCustomPropertyValue().list({"org_id": "example"})
```


### Organization

Create an instance: `organization = client.Organization()`


### OrganizationActionsSecret

Create an instance: `organization_actions_secret = client.OrganizationActionsSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the secret. |
| `selected_repositories_url` | `str` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` | Visibility of a secret |

#### Example: Load

```python
organization_actions_secret = client.OrganizationActionsSecret().load({"id": "organization_actions_secret_id", "org_id": "org_id"})
```


### OrganizationActionsVariable

Create an instance: `organization_actions_variable = client.OrganizationActionsVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `str` |  |
| `name` | `str` | The name of the variable. |
| `selected_repositories_url` | `str` |  |
| `updated_at` | `str` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `str` | The value of the variable. |
| `visibility` | `str` | Visibility of a variable |

#### Example: Load

```python
organization_actions_variable = client.OrganizationActionsVariable().load({"id": "organization_actions_variable_id", "org_id": "org_id"})
```


### OrganizationDependabotSecret

Create an instance: `organization_dependabot_secret = client.OrganizationDependabotSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `name` | `str` | The name of the secret. |
| `selected_repositories_url` | `str` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` | Visibility of a secret |

#### Example: Load

```python
organization_dependabot_secret = client.OrganizationDependabotSecret().load({"id": "organization_dependabot_secret_id", "org_id": "org_id"})
```


### OrganizationInvitation

Create an instance: `organization_invitation = client.OrganizationInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `email` | `str` | **Required unless you provide `invitee_id`**. |
| `failed_at` | `str` |  |
| `failed_reason` | `str` |  |
| `id` | `int` |  |
| `invitation_source` | `str` |  |
| `invitation_teams_url` | `str` |  |
| `invitee_id` | `int` | **Required unless you provide `email`**. |
| `inviter` | `dict` | A GitHub user. |
| `login` | `str` |  |
| `node_id` | `str` |  |
| `role` | `str` | The role for the new member. |
| `team_count` | `int` |  |
| `team_ids` | `list` | Specify IDs for the teams you want to invite new members to. |

#### Example: List

```python
organization_invitations = client.OrganizationInvitation().list({"org_id": "example"})
```

#### Example: Create

```python
organization_invitation = client.OrganizationInvitation().create({
    "org_id": "example_org_id",  # str
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "invitation_teams_url": "example_invitation_teams_url",  # str
    "inviter": {},  # dict
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "team_count": 1,  # int
})
```


### OrganizationProgrammaticAccessGrant

Create an instance: `organization_programmatic_access_grant = client.OrganizationProgrammaticAccessGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_granted_at` | `str` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `str` | Date and time when the request for access was created. |
| `id` | `int` | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `dict` | A GitHub user. |
| `permissions` | `dict` | Permissions requested, categorized by type of permission. |
| `reason` | `str` | Reason for requesting access. |
| `repositories_url` | `str` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `str` | Type of repository selection requested. |
| `token_expired` | `bool` | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `str` | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Unique identifier of the user's token. |
| `token_last_used_at` | `str` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `str` | The name given to the user's token. |

#### Example: List

```python
organization_programmatic_access_grants = client.OrganizationProgrammaticAccessGrant().list({"org_id": "example"})
```


### OrganizationRole

Create an instance: `organization_role = client.OrganizationRole()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `str` | The system role from which this role inherits permissions. |
| `created_at` | `str` | The date and time the role was created. |
| `description` | `str` | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | The unique identifier of the role. |
| `name` | `str` | The name of the role. |
| `organization` | `dict` | A GitHub user. |
| `permissions` | `list` | A list of permissions included in this role. |
| `source` | `str` | Source answers the question, "where did this role come from?" |
| `updated_at` | `str` | The date and time the role was last updated. |

#### Example: Load

```python
organization_role = client.OrganizationRole().load({"id": 1, "org_id": "org_id"})
```


### OrganizationSecretScanningAlert

Create an instance: `organization_secret_scanning_alert = client.OrganizationSecretScanningAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `Any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `str` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | The security alert number. |
| `publicly_leaked` | `bool` | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `str` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `str` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `dict` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `str` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `str` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `dict` | A GitHub user. |
| `repository` | `dict` | A GitHub repository. |
| `resolution` | `str` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `str` | The comment that was optionally added when this alert was closed |
| `resolved_at` | `str` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `dict` | A GitHub user. |
| `secret` | `str` | The secret that was detected. |
| `secret_type` | `str` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `str` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `str` | Sets the state of the secret scanning alert. |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |
| `validity` | `str` | The token status as of the latest validity check. |

#### Example: List

```python
organization_secret_scanning_alerts = client.OrganizationSecretScanningAlert().list({"org_id": "example"})
```


### OutsideCollaborator

Create an instance: `outside_collaborator = client.OutsideCollaborator()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
outside_collaborators = client.OutsideCollaborator().list({"org_id": "example"})
```


### Package

Create an instance: `package = client.Package()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `container` | `dict` |  |
| `created_at` | `str` |  |
| `deleted_at` | `str` |  |
| `description` | `str` |  |
| `docker` | `dict` |  |
| `github_id` | `int` | Unique identifier of the package. |
| `html_url` | `str` |  |
| `id` | `str` | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Free storage space (GB) for GitHub Packages. |
| `license` | `str` |  |
| `metadata` | `dict` |  |
| `name` | `str` | The name of the package. |
| `owner` | `dict` | A GitHub user. |
| `package_html_url` | `str` |  |
| `package_type` | `str` |  |
| `repository` | `dict` | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `int` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `int` | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `version_count` | `int` | The number of versions of the package. |
| `visibility` | `str` |  |

#### Example: Load

```python
package = client.Package().load({"package_name": "package_name", "package_type": "package_type"})
```

#### Example: List

```python
packages = client.Package().list({"package_type": "example"})
```

#### Example: Create

```python
package = client.Package().create({
    "package_id": "example_package_id",  # str
    "package_name": "example_package_name",  # str
    "container": {},  # dict
    "created_at": "example_created_at",  # str
    "docker": {},  # dict
    "github_id": 1,  # int
    "html_url": "example_html_url",  # str
    "id": "example_id",  # str
    "included_gigabytes_bandwidth": 1,  # int
    "metadata": {},  # dict
    "name": "example_name",  # str
    "owner": {},  # dict
    "package_html_url": "example_package_html_url",  # str
    "package_type": "example_package_type",  # str
    "repository": {},  # dict
    "total_gigabytes_bandwidth_used": 1,  # int
    "total_paid_gigabytes_bandwidth_used": 1,  # int
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "version_count": 1,  # int
    "visibility": "example_visibility",  # str
})
```


### Page

Create an instance: `page = client.Page()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_type` | `str` | The process in which the Page will be built. |
| `cname` | `str` | The Pages site's custom domain |
| `custom_404` | `bool` | Whether the Page has a custom 404 page. |
| `html_url` | `str` | The web address the Page can be accessed from. |
| `https_certificate` | `dict` |  |
| `https_enforced` | `bool` | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `str` | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `str` | The state if the domain is verified |
| `public` | `bool` | Whether the GitHub Pages site is publicly visible. |
| `source` | `dict` | The source branch and directory used to publish your Pages site. |
| `status` | `str` | The status of the most recent build of the Page. |
| `url` | `str` | The API address for accessing this Page resource. |

#### Example: Load

```python
page = client.Page().load({"owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
page = client.Page().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "cname": "example_cname",  # str
    "custom_404": True,  # bool
    "https_certificate": {},  # dict
    "public": True,  # bool
    "source": {},  # dict
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```


### PageBuild

Create an instance: `page_build = client.PageBuild()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `str` |  |
| `created_at` | `str` |  |
| `duration` | `int` |  |
| `error` | `dict` |  |
| `id` | `str` |  |
| `pusher` | `dict` | A GitHub user. |
| `status` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
page_build = client.PageBuild().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
page_builds = client.PageBuild().list({"owner": "example", "repo": "example"})
```


### PageBuildStatus

Create an instance: `page_build_status = client.PageBuildStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
page_build_status = client.PageBuildStatus().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```


### PageDeployment

Create an instance: `page_deployment = client.PageDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact_id` | `float` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `str` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `str` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `str` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `str` | A unique string that represents the version of the build for this deployment. |

#### Example: Create

```python
page_deployment = client.PageDeployment().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "oidc_token": "example_oidc_token",  # str
    "pages_build_version": "example_pages_build_version",  # str
})
```


### PagesDeploymentStatus

Create an instance: `pages_deployment_status = client.PagesDeploymentStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `str` | The current status of the deployment. |

#### Example: Load

```python
pages_deployment_status = client.PagesDeploymentStatus().load({"owner": "owner", "pages_deployment_id": "pages_deployment_id", "repo": "repo"})
```

#### Example: Create

```python
pages_deployment_status = client.PagesDeploymentStatus().create({
    "deployment_id": "example_deployment_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```


### PagesHealthCheck

Create an instance: `pages_health_check = client.PagesHealthCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_domain` | `dict` |  |
| `domain` | `dict` |  |

#### Example: Load

```python
pages_health_check = client.PagesHealthCheck().load({"owner": "owner", "repo": "repo"})
```


### Participation

Create an instance: `participation = client.Participation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `all` | `list` |  |
| `owner` | `list` |  |

#### Example: List

```python
participations = client.Participation().list({"owner": "example", "repo": "example"})
```


### PendingDeployment

Create an instance: `pending_deployment = client.PendingDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_can_approve` | `bool` | Whether the currently authenticated user can approve the deployment |
| `environment` | `dict` |  |
| `reviewers` | `list` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | The set duration of the wait timer |
| `wait_timer_started_at` | `str` | The time that the wait timer began. |

#### Example: List

```python
pending_deployments = client.PendingDeployment().list({"owner": "example", "repo": "example", "run_id": 1})
```


### PorterAuthor

Create an instance: `porter_author = client.PorterAuthor()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | The new Git author email. |
| `id` | `int` |  |
| `import_url` | `str` |  |
| `name` | `str` | The new Git author name. |
| `remote_id` | `str` |  |
| `remote_name` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
porter_authors = client.PorterAuthor().list({"owner": "example", "repo": "example"})
```


### PorterLargeFile

Create an instance: `porter_large_file = client.PorterLargeFile()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `oid` | `str` |  |
| `path` | `str` |  |
| `ref_name` | `str` |  |
| `size` | `int` |  |

#### Example: List

```python
porter_large_files = client.PorterLargeFile().list({"owner": "example", "repo": "example"})
```


### PrivateRegistry

Create an instance: `private_registry = client.PrivateRegistry()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `encrypted_value` | `str` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `str` |  |
| `key` | `str` | The Base64 encoded public key. |
| `key_id` | `str` | The identifier for the key. |
| `name` | `str` | The name of the private registry configuration. |
| `registry_type` | `str` | The registry type. |
| `selected_repository_ids` | `list` | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `str` |  |
| `url` | `str` | The URL of the private registry. |
| `username` | `str` | The username to use when authenticating with the private registry. |
| `visibility` | `str` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```python
private_registry = client.PrivateRegistry().load({"org_id": "org_id"})
```

#### Example: List

```python
private_registrys = client.PrivateRegistry().list({"org_id": "example"})
```


### PrivateUser

Create an instance: `private_user = client.PrivateUser()`


### Project

Create an instance: `project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `body` | `str` | The description of the project. |
| `columns_url` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` | The name of the project. |
| `node_id` | `str` |  |
| `number` | `int` |  |
| `organization_permission` | `str` | The baseline permission that all organization members have on this project |
| `organizations_url` | `str` |  |
| `owner_url` | `str` |  |
| `private` | `bool` | Whether or not this project can be seen by everyone. |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `state` | `str` | State of the project; either 'open' or 'closed' |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
project = client.Project().load({"id": 1})
```

#### Example: List

```python
projects = client.Project().list({"org_id": "example"})
```

#### Example: Create

```python
project = client.Project().create({
    "avatar_url": "example_avatar_url",  # str
    "columns_url": "example_columns_url",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "gists_url": "example_gists_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "number": 1,  # int
    "organizations_url": "example_organizations_url",  # str
    "owner_url": "example_owner_url",  # str
    "received_events_url": "example_received_events_url",  # str
    "repos_url": "example_repos_url",  # str
    "site_admin": True,  # bool
    "starred_url": "example_starred_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### ProjectCollaboratorPermission

Create an instance: `project_collaborator_permission = client.ProjectCollaboratorPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
project_collaborator_permission = client.ProjectCollaboratorPermission().load({"project_id": 1, "username": "username"})
```


### ProjectColumn

Create an instance: `project_column = client.ProjectColumn()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cards_url` | `str` |  |
| `created_at` | `str` |  |
| `id` | `int` | The unique identifier of the project column |
| `name` | `str` | Name of the project column |
| `node_id` | `str` |  |
| `project_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
project_column = client.ProjectColumn().load({"id": 1})
```

#### Example: List

```python
project_columns = client.ProjectColumn().list({"id": 1})
```

#### Example: Create

```python
project_column = client.ProjectColumn().create({
    "id": 1,  # int
    "cards_url": "example_cards_url",  # str
    "created_at": "example_created_at",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "project_url": "example_project_url",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### ProjectsClassic

Create an instance: `projects_classic = client.ProjectsClassic()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `permission` | `str` | The permission to grant the collaborator. |
| `position` | `str` | The position of the column in a project. |

#### Example: Create

```python
projects_classic = client.ProjectsClassic().create({
    "column_id": 1,  # int
    "position": "example_position",  # str
})
```


### ProjectsV2

Create an instance: `projects_v2 = client.ProjectsV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `str` | The time when the project was closed. |
| `created_at` | `str` | The time when the project was created. |
| `creator` | `dict` | A GitHub user. |
| `deleted_at` | `str` | The time when the project was deleted. |
| `deleted_by` | `dict` | A GitHub user. |
| `description` | `str` | A short description of the project. |
| `id` | `float` | The unique identifier of the project. |
| `is_template` | `bool` | Whether this project is a template |
| `latest_status_update` | `dict` | An status update belonging to a project |
| `node_id` | `str` | The node ID of the project. |
| `number` | `int` | The project number. |
| `owner` | `dict` | A GitHub user. |
| `public` | `bool` | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `str` | A concise summary of the project. |
| `state` | `str` | The current state of the project. |
| `title` | `str` | The project title. |
| `updated_at` | `str` | The time when the project was last updated. |

#### Example: Load

```python
projects_v2 = client.ProjectsV2().load({"id": 1})
```

#### Example: List

```python
projects_v2s = client.ProjectsV2().list({"org_id": "example"})
```


### ProjectsV2Field

Create an instance: `projects_v2_field = client.ProjectsV2Field()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `dict` | Configuration for iteration fields. |
| `created_at` | `str` | The time when the field was created. |
| `data_type` | `str` | The field's data type. |
| `id` | `int` | The unique identifier of the field. |
| `name` | `str` | The name of the field. |
| `node_id` | `str` | The node ID of the field. |
| `options` | `list` | The options available for single select fields. |
| `project_url` | `str` | The API URL of the project that contains the field. |
| `updated_at` | `str` | The time when the field was last updated. |

#### Example: Load

```python
projects_v2_field = client.ProjectsV2Field().load({"id": 1, "projects_v2_id": 1})
```

#### Example: List

```python
projects_v2_fields = client.ProjectsV2Field().list({"project_number": 1})
```


### ProjectsV2ItemSimple

Create an instance: `projects_v2_item_simple = client.ProjectsV2ItemSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The numeric ID of the issue or pull request to add to the project. |
| `type` | `str` | The type of item to add to the project. |

#### Example: Create

```python
projects_v2_item_simple = client.ProjectsV2ItemSimple().create({
    "project_number": 1,  # int
    "id": 1,  # int
    "type": "example_type",  # str
})
```


### ProjectsV2ItemWithContent

Create an instance: `projects_v2_item_with_content = client.ProjectsV2ItemWithContent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `str` | The time when the item was archived. |
| `content` | `dict` | The content of the item, which varies by content type. |
| `content_type` | `str` | The type of content tracked in a project item |
| `created_at` | `str` | The time when the item was created. |
| `creator` | `dict` | A GitHub user. |
| `fields` | `list` | The fields and values associated with this item. |
| `id` | `float` | The unique identifier of the project item. |
| `item_url` | `str` | The API URL of this item. |
| `node_id` | `str` | The node ID of the project item. |
| `project_url` | `str` | The API URL of the project that contains this item. |
| `updated_at` | `str` | The time when the item was last updated. |

#### Example: Load

```python
projects_v2_item_with_content = client.ProjectsV2ItemWithContent().load({"item_id": 1, "projects_v2_id": 1})
```

#### Example: List

```python
projects_v2_item_with_contents = client.ProjectsV2ItemWithContent().list({"project_number": 1})
```


### ProtectedBranch

Create an instance: `protected_branch = client.ProtectedBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `dict` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `dict` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `dict` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `dict` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `dict` | Enforce all configured restrictions for administrators. |
| `lock_branch` | `dict` | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `dict` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `dict` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `dict` | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `dict` |  |
| `required_status_checks` | `dict` | Status Check Policy |
| `restrictions` | `dict` | Branch Restriction Policy |
| `url` | `str` |  |


### ProtectedBranchAdminEnforced

Create an instance: `protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `url` | `str` |  |

#### Example: Load

```python
protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced().load({"branch_id": "branch_id", "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced().create({
    "branch_id": "example_branch_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "enabled": True,  # bool
    "url": "example_url",  # str
})
```


### ProtectedBranchPullRequestReview

Create an instance: `protected_branch_pull_request_review = client.ProtectedBranchPullRequestReview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_pull_request_allowances` | `dict` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `dict` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `bool` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `bool` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `int` | Specifies the number of reviewers required to approve pull requests. |
| `url` | `str` |  |

#### Example: Load

```python
protected_branch_pull_request_review = client.ProtectedBranchPullRequestReview().load({"branch_id": "branch_id", "owner": "owner", "repo": "repo"})
```


### PublicMember

Create an instance: `public_member = client.PublicMember()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
public_members = client.PublicMember().list({"org_id": "example"})
```


### Pull

Create an instance: `pull = client.Pull()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `str` |  |
| `additions` | `int` |  |
| `assignee` | `dict` | A GitHub user. |
| `assignees` | `list` |  |
| `author_association` | `str` | How the author is associated with the repository. |
| `auto_merge` | `dict` | The status of auto merging a pull request. |
| `base` | `dict` | The name of the branch you want the changes pulled into. |
| `body` | `str` | The contents of the pull request. |
| `changed_files` | `int` |  |
| `closed_at` | `str` |  |
| `comments` | `int` |  |
| `comments_url` | `str` |  |
| `commit_message` | `str` | Extra detail to append to automatic commit message. |
| `commit_title` | `str` | Title for the automatic commit message. |
| `commits` | `int` |  |
| `commits_url` | `str` |  |
| `created_at` | `str` |  |
| `deletions` | `int` |  |
| `diff_url` | `str` |  |
| `draft` | `bool` | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `str` | The expected SHA of the pull request's HEAD ref. |
| `head` | `dict` | The name of the branch where your changes are implemented. |
| `head_repo` | `str` | The name of the repository where the changes in the pull request were made. |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `issue` | `int` | An issue in the repository to convert to a pull request. |
| `issue_url` | `str` |  |
| `labels` | `list` |  |
| `links` | `dict` |  |
| `locked` | `bool` |  |
| `maintainer_can_modify` | `bool` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `str` |  |
| `merge_method` | `str` | The merge method to use. |
| `mergeable` | `bool` |  |
| `mergeable_state` | `str` |  |
| `merged` | `bool` |  |
| `merged_at` | `str` |  |
| `merged_by` | `dict` | A GitHub user. |
| `message` | `str` |  |
| `milestone` | `dict` | A collection of related issues and pull requests. |
| `node_id` | `str` |  |
| `number` | `int` | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `str` |  |
| `rebaseable` | `bool` |  |
| `requested_reviewers` | `list` |  |
| `requested_teams` | `list` |  |
| `review_comment_url` | `str` |  |
| `review_comments` | `int` |  |
| `review_comments_url` | `str` |  |
| `sha` | `str` | SHA that pull request head must match to allow merge. |
| `state` | `str` | State of this Pull Request. |
| `statuses_url` | `str` |  |
| `title` | `str` | The title of the pull request. |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |

#### Example: Load

```python
pull = client.Pull().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
pulls = client.Pull().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
pull = client.Pull().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "additions": 1,  # int
    "assignee": {},  # dict
    "author_association": "example_author_association",  # str
    "auto_merge": {},  # dict
    "base": {},  # dict
    "body": "example_body",  # str
    "changed_files": 1,  # int
    "closed_at": "example_closed_at",  # str
    "comments": 1,  # int
    "comments_url": "example_comments_url",  # str
    "commits": 1,  # int
    "commits_url": "example_commits_url",  # str
    "created_at": "example_created_at",  # str
    "deletions": 1,  # int
    "diff_url": "example_diff_url",  # str
    "head": {},  # dict
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "issue_url": "example_issue_url",  # str
    "labels": [],  # list
    "links": {},  # dict
    "locked": True,  # bool
    "maintainer_can_modify": True,  # bool
    "merge_commit_sha": "example_merge_commit_sha",  # str
    "mergeable": True,  # bool
    "mergeable_state": "example_mergeable_state",  # str
    "merged": True,  # bool
    "merged_at": "example_merged_at",  # str
    "merged_by": {},  # dict
    "message": "example_message",  # str
    "milestone": {},  # dict
    "node_id": "example_node_id",  # str
    "number": 1,  # int
    "patch_url": "example_patch_url",  # str
    "review_comment_url": "example_review_comment_url",  # str
    "review_comments": 1,  # int
    "review_comments_url": "example_review_comments_url",  # str
    "sha": "example_sha",  # str
    "state": "example_state",  # str
    "statuses_url": "example_statuses_url",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### PullRequestReview

Create an instance: `pull_request_review = client.PullRequestReview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `str` | How the author is associated with the repository. |
| `body` | `str` | The text of the review. |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `comments` | `list` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `str` | A commit SHA for the review. |
| `event` | `str` | The review action you want to perform. |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the review |
| `links` | `dict` |  |
| `message` | `str` | The message for the pull request review dismissal |
| `node_id` | `str` |  |
| `pull_request_url` | `str` |  |
| `state` | `str` |  |
| `submitted_at` | `str` |  |
| `teams` | `list` |  |
| `user` | `dict` | A GitHub user. |
| `users` | `list` |  |

#### Example: Load

```python
pull_request_review = client.PullRequestReview().load({"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"})
```

#### Example: List

```python
pull_request_reviews = client.PullRequestReview().list({"owner": "example", "pull_number": 1, "repo": "example"})
```

#### Example: Create

```python
pull_request_review = client.PullRequestReview().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author_association": "example_author_association",  # str
    "body": "example_body",  # str
    "commit_id": "example_commit_id",  # str
    "event": "example_event",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "links": {},  # dict
    "message": "example_message",  # str
    "node_id": "example_node_id",  # str
    "pull_request_url": "example_pull_request_url",  # str
    "state": "example_state",  # str
    "teams": [],  # list
    "user": {},  # dict
    "users": [],  # list
})
```


### PullRequestReviewComment

Create an instance: `pull_request_review_comment = client.PullRequestReviewComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `str` | How the author is associated with the repository. |
| `body` | `str` | The text of the comment. |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `commit_id` | `str` | The SHA of the commit to which the comment applies. |
| `created_at` | `str` |  |
| `diff_hunk` | `str` | The diff of the line that the comment refers to. |
| `html_url` | `str` | HTML URL for the pull request review comment. |
| `id` | `int` | The ID of the pull request review comment. |
| `in_reply_to` | `int` | The ID of the review comment to reply to. |
| `in_reply_to_id` | `int` | The comment ID to reply to. |
| `line` | `int` | The line of the blob to which the comment applies. |
| `links` | `dict` |  |
| `node_id` | `str` | The node ID of the pull request review comment. |
| `original_commit_id` | `str` | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | The line of the blob to which the comment applies. |
| `original_position` | `int` | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | The first line of the range for a multi-line comment. |
| `path` | `str` | The relative path of the file to which the comment applies. |
| `position` | `int` | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `str` | URL for the pull request that the review comment belongs to. |
| `reactions` | `dict` |  |
| `side` | `str` | The side of the diff to which the comment applies. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `str` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `str` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `str` |  |
| `url` | `str` | URL for the pull request review comment |
| `user` | `dict` | A GitHub user. |

#### Example: Load

```python
pull_request_review_comment = client.PullRequestReviewComment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
pull_request_review_comments = client.PullRequestReviewComment().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
pull_request_review_comment = client.PullRequestReviewComment().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author_association": "example_author_association",  # str
    "body": "example_body",  # str
    "commit_id": "example_commit_id",  # str
    "created_at": "example_created_at",  # str
    "diff_hunk": "example_diff_hunk",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "links": {},  # dict
    "node_id": "example_node_id",  # str
    "original_commit_id": "example_original_commit_id",  # str
    "path": "example_path",  # str
    "pull_request_review_id": 1,  # int
    "pull_request_url": "example_pull_request_url",  # str
    "reactions": {},  # dict
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### PullRequestSimple

Create an instance: `pull_request_simple = client.PullRequestSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewers` | `list` | An array of user `login`s that will be requested. |
| `team_reviewers` | `list` | An array of team `slug`s that will be requested. |

#### Example: Create

```python
pull_request_simple = client.PullRequestSimple().create({
    "owner": "example_owner",  # str
    "pull_number": 1,  # int
    "repo": "example_repo",  # str
})
```


### RateLimit

Create an instance: `rate_limit = client.RateLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate` | `dict` |  |
| `resources` | `dict` |  |

#### Example: Load

```python
rate_limit = client.RateLimit().load()
```


### Reaction

Create an instance: `reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `content` | `str` | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `created_at` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |
| `user_view_type` | `str` |  |

#### Example: List

```python
reactions = client.Reaction().list({"discussion_number": 1, "team_id": 1})
```

#### Example: Create

```python
reaction = client.Reaction().create({
    "discussion_number": 1,  # int
    "team_id": 1,  # int
    "avatar_url": "example_avatar_url",  # str
    "content": "example_content",  # str
    "created_at": "example_created_at",  # str
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "gists_url": "example_gists_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "organizations_url": "example_organizations_url",  # str
    "received_events_url": "example_received_events_url",  # str
    "repos_url": "example_repos_url",  # str
    "site_admin": True,  # bool
    "starred_url": "example_starred_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
    "user": {},  # dict
})
```


### Referrer

Create an instance: `referrer = client.Referrer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `referrer` | `str` |  |
| `uniques` | `int` |  |

#### Example: List

```python
referrers = client.Referrer().list({"owner": "example", "repo": "example"})
```


### Release

Create an instance: `release = client.Release()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `list` |  |
| `assets_url` | `str` |  |
| `author` | `dict` | A GitHub user. |
| `body` | `str` | Text describing the contents of the tag. |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `browser_download_url` | `str` |  |
| `content_type` | `str` |  |
| `created_at` | `str` |  |
| `digest` | `str` |  |
| `discussion_category_name` | `str` | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `str` | The URL of the release discussion. |
| `download_count` | `int` |  |
| `draft` | `bool` | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `bool` | Whether to automatically generate the name and body for this release. |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `immutable` | `bool` | Whether or not the release is immutable. |
| `label` | `str` |  |
| `make_latest` | `str` | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `int` |  |
| `name` | `str` | The name of the release. |
| `node_id` | `str` |  |
| `prerelease` | `bool` | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `str` |  |
| `reactions` | `dict` |  |
| `size` | `int` |  |
| `state` | `str` | State of the release asset. |
| `tag_name` | `str` | The name of the tag. |
| `tarball_url` | `str` |  |
| `target_commitish` | `str` | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `str` |  |
| `upload_url` | `str` |  |
| `uploader` | `dict` | A GitHub user. |
| `url` | `str` |  |
| `zipball_url` | `str` |  |

#### Example: Load

```python
release = client.Release().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
releases = client.Release().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
release = client.Release().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "assets": [],  # list
    "assets_url": "example_assets_url",  # str
    "author": {},  # dict
    "browser_download_url": "example_browser_download_url",  # str
    "content_type": "example_content_type",  # str
    "created_at": "example_created_at",  # str
    "digest": "example_digest",  # str
    "download_count": 1,  # int
    "draft": True,  # bool
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "label": "example_label",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "prerelease": True,  # bool
    "published_at": "example_published_at",  # str
    "reactions": {},  # dict
    "size": 1,  # int
    "state": "example_state",  # str
    "tag_name": "example_tag_name",  # str
    "tarball_url": "example_tarball_url",  # str
    "target_commitish": "example_target_commitish",  # str
    "upload_url": "example_upload_url",  # str
    "uploader": {},  # dict
    "url": "example_url",  # str
    "zipball_url": "example_zipball_url",  # str
})
```


### ReleaseAsset

Create an instance: `release_asset = client.ReleaseAsset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `browser_download_url` | `str` |  |
| `content_type` | `str` |  |
| `created_at` | `str` |  |
| `digest` | `str` |  |
| `download_count` | `int` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `label` | `str` | An alternate short description of the asset. |
| `login` | `str` |  |
| `name` | `str` | The file name of the asset. |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `size` | `int` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `state` | `str` | State of the release asset. |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `uploader` | `dict` | A GitHub user. |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
release_asset = client.ReleaseAsset().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
release_assets = client.ReleaseAsset().list({"id": 1, "owner": "example", "repo": "example"})
```

#### Example: Create

```python
release_asset = client.ReleaseAsset().create({
    "id": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "name": "example_name",  # str
    "avatar_url": "example_avatar_url",  # str
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "gists_url": "example_gists_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "html_url": "example_html_url",  # str
    "login": "example_login",  # str
    "node_id": "example_node_id",  # str
    "organizations_url": "example_organizations_url",  # str
    "received_events_url": "example_received_events_url",  # str
    "repos_url": "example_repos_url",  # str
    "site_admin": True,  # bool
    "starred_url": "example_starred_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "type": "example_type",  # str
    "url": "example_url",  # str
})
```


### ReleaseNotesContent

Create an instance: `release_notes_content = client.ReleaseNotesContent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `str` | The generated body describing the contents of the release supporting markdown formatting |
| `configuration_file_path` | `str` | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `name` | `str` | The generated name of the release |
| `previous_tag_name` | `str` | The name of the previous tag to use as the starting point for the release notes. |
| `tag_name` | `str` | The tag name for the release. |
| `target_commitish` | `str` | Specifies the commitish value that will be the target for the release's tag. |

#### Example: Create

```python
release_notes_content = client.ReleaseNotesContent().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "body": "example_body",  # str
    "name": "example_name",  # str
    "tag_name": "example_tag_name",  # str
})
```


### Remove

Create an instance: `remove = client.Remove()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `list` | The GitHub user handles to be removed from the team. |

#### Example: Create

```python
remove = client.Remove().create({
    "enterprise": "example_enterprise",  # str
    "team_id": "example_team_id",  # str
    "usernames": [],  # list
})
```


### Repo

Create an instance: `repo = client.Repo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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
| `app` | `dict` | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `str` |  |
| `attestations` | `list` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `build_type` | `str` | The process by which the GitHub Pages site will be built. |
| `bundle` | `dict` | The attestation's Sigstore Bundle. |
| `client_payload` | `dict` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `str` |  |
| `cname` | `str` | Specify a custom domain for the repository. |
| `code_search_index_status` | `dict` | The status of the code search index for this repository |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `content` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `str` | The default branch of the repository. |
| `default_branch_only` | `bool` | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `dict` | The type of deployment branch policy for this environment. |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `download_url` | `str` |  |
| `downloads_url` | `str` |  |
| `enabled` | `bool` | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `str` |  |
| `event_type` | `str` | A custom webhook event name. |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `github_id` | `int` | Unique identifier of the repository |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `https_enforced` | `bool` | Specify whether HTTPS should be enforced for the repository. |
| `id` | `str` | Unique identifier of the repository |
| `integration_url` | `str` | The URL for the endpoint to get details about the app. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` | License Simple |
| `links` | `dict` |  |
| `master_branch` | `str` |  |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | When forking from an existing repository, a new name for the fork. |
| `new_name` | `str` | The new name to be given to the repository. |
| `new_owner` | `str` | The username or organization name the repository will be transferred to. |
| `node_id` | `str` | The node ID for the deployment protection rule integration. |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `str` | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `dict` | A GitHub user. |
| `path` | `str` |  |
| `permissions` | `dict` |  |
| `private` | `bool` | Whether the repository is private or public. |
| `properties` | `list` | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `list` | Built-in deployment protection rules for the environment. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `sha` | `str` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `str` | The slugified name of the deployment protection rule integration. |
| `source` | `Any` |  |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `team_ids` | `list` | ID of the team or teams to add to the repository. |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `type` | `str` | Whether this rule targets a branch or tag. |
| `updated_at` | `str` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `str` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```python
repo = client.Repo().load({"owner": "owner", "repo": "repo"})
```

#### Example: List

```python
repos = client.Repo().list()
```

#### Example: Create

```python
repo = client.Repo().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "app": {},  # dict
    "archive_url": "example_archive_url",  # str
    "archived": True,  # bool
    "assignees_url": "example_assignees_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "branches_url": "example_branches_url",  # str
    "bundle": {},  # dict
    "clone_url": "example_clone_url",  # str
    "collaborators_url": "example_collaborators_url",  # str
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "created_at": "example_created_at",  # str
    "default_branch": "example_default_branch",  # str
    "deployment_branch_policy": {},  # dict
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "disabled": True,  # bool
    "downloads_url": "example_downloads_url",  # str
    "enabled": True,  # bool
    "event_type": "example_event_type",  # str
    "events_url": "example_events_url",  # str
    "fork": True,  # bool
    "forks": 1,  # int
    "forks_count": 1,  # int
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "github_id": 1,  # int
    "has_downloads": True,  # bool
    "has_issues": True,  # bool
    "has_pages": True,  # bool
    "has_projects": True,  # bool
    "has_wiki": True,  # bool
    "homepage": "example_homepage",  # str
    "hooks_url": "example_hooks_url",  # str
    "id": "example_id",  # str
    "integration_url": "example_integration_url",  # str
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "language": "example_language",  # str
    "languages_url": "example_languages_url",  # str
    "license": {},  # dict
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "mirror_url": "example_mirror_url",  # str
    "new_owner": "example_new_owner",  # str
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "open_issues": 1,  # int
    "open_issues_count": 1,  # int
    "permissions": {},  # dict
    "private": True,  # bool
    "properties": [],  # list
    "pulls_url": "example_pulls_url",  # str
    "pushed_at": "example_pushed_at",  # str
    "releases_url": "example_releases_url",  # str
    "slug": "example_slug",  # str
    "ssh_url": "example_ssh_url",  # str
    "stargazers_count": 1,  # int
    "stargazers_url": "example_stargazers_url",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "svn_url": "example_svn_url",  # str
    "tags_url": "example_tags_url",  # str
    "teams_url": "example_teams_url",  # str
    "trees_url": "example_trees_url",  # str
    "updated_at": "example_updated_at",  # str
    "watchers": 1,  # int
    "watchers_count": 1,  # int
})
```


### Repository

Create an instance: `repository = client.Repository()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

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
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `str` |  |
| `blobs_url` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_search_index_status` | `dict` | The status of the code search index for this repository |
| `collaborators_url` | `str` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `default_branch` | `str` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `downloads_url` | `str` |  |
| `events_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `has_discussions` | `bool` | Whether discussions are enabled. |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the repository |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `license` | `dict` | License Simple |
| `master_branch` | `str` |  |
| `merge_commit_message` | `str` | The default value for a merge commit message. |
| `merge_commit_title` | `str` | The default value for a merge commit title. |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the repository. |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `dict` | A GitHub user. |
| `permissions` | `dict` |  |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `releases_url` | `str` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `str` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `statuses_url` | `str` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: List

```python
repositorys = client.Repository().list()
```


### RepositoryAdvisory

Create an instance: `repository_advisory = client.RepositoryAdvisory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Any` | The author of the advisory. |
| `closed_at` | `str` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `list` | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `list` | A list of users that collaborate on the advisory. |
| `created_at` | `str` | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `list` | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `list` |  |
| `cve_id` | `str` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `dict` |  |
| `cvss_severities` | `dict` |  |
| `cvss_vector_string` | `str` | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `list` | A list of only the CWE IDs. |
| `cwes` | `list` |  |
| `description` | `str` | A detailed description of what the advisory entails. |
| `ghsa_id` | `str` | The GitHub Security Advisory ID. |
| `html_url` | `str` | The URL for the advisory. |
| `identifiers` | `list` |  |
| `private_fork` | `Any` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `str` | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `Any` | The publisher of the advisory. |
| `severity` | `str` | The severity of the advisory. |
| `start_private_fork` | `bool` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `str` | The state of the advisory. |
| `submission` | `dict` |  |
| `summary` | `str` | A short summary of the advisory. |
| `updated_at` | `str` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `str` | The API URL for the advisory. |
| `vulnerabilities` | `list` | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `str` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```python
repository_advisory = client.RepositoryAdvisory().load({"ghsa_id": "ghsa_id", "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
repository_advisorys = client.RepositoryAdvisory().list({"org_id": "example"})
```

#### Example: Create

```python
repository_advisory = client.RepositoryAdvisory().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "author": "example_author",  # Any
    "closed_at": "example_closed_at",  # str
    "collaborating_teams": [],  # list
    "collaborating_users": [],  # list
    "created_at": "example_created_at",  # str
    "credits": [],  # list
    "credits_detailed": [],  # list
    "cve_id": "example_cve_id",  # str
    "cvss": {},  # dict
    "cwe_ids": [],  # list
    "cwes": [],  # list
    "description": "example_description",  # str
    "ghsa_id": "example_ghsa_id",  # str
    "html_url": "example_html_url",  # str
    "identifiers": [],  # list
    "private_fork": "example_private_fork",  # Any
    "published_at": "example_published_at",  # str
    "publisher": "example_publisher",  # Any
    "severity": "example_severity",  # str
    "state": "example_state",  # str
    "submission": {},  # dict
    "summary": "example_summary",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "vulnerabilities": [],  # list
    "withdrawn_at": "example_withdrawn_at",  # str
})
```


### RepositoryCollaboratorPermission

Create an instance: `repository_collaborator_permission = client.RepositoryCollaboratorPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `permissions` | `dict` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `role_name` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: Load

```python
repository_collaborator_permission = client.RepositoryCollaboratorPermission().load({"owner": "owner", "repo": "repo", "username": "username"})
```


### RepositoryInvitation

Create an instance: `repository_invitation = client.RepositoryInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `expired` | `bool` | Whether or not the invitation has expired |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the repository invitation. |
| `invitee` | `dict` | A GitHub user. |
| `inviter` | `dict` | A GitHub user. |
| `node_id` | `str` |  |
| `permission` | `str` | The permission to grant the collaborator. |
| `permissions` | `str` | The permission associated with the invitation. |
| `repository` | `dict` | Minimal Repository |
| `url` | `str` | URL for the repository invitation |

#### Example: List

```python
repository_invitations = client.RepositoryInvitation().list()
```


### RepositoryRuleDetailed

Create an instance: `repository_rule_detailed = client.RepositoryRuleDetailed()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `parameters` | `dict` |  |
| `ruleset_id` | `int` |  |
| `ruleset_source` | `str` |  |
| `ruleset_source_type` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
repository_rule_detailed = client.RepositoryRuleDetailed().load({"branch": "branch", "owner": "owner", "repo": "repo"})
```


### RepositoryRuleset

Create an instance: `repository_ruleset = client.RepositoryRuleset()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_actors` | `list` | The actors that can bypass the rules in this ruleset |
| `conditions` | `Any` | Parameters for a repository ruleset ref name condition |
| `created_at` | `str` |  |
| `current_user_can_bypass` | `str` | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `str` | The enforcement level of the ruleset. |
| `id` | `int` | The ID of the ruleset |
| `links` | `dict` |  |
| `name` | `str` | The name of the ruleset |
| `node_id` | `str` |  |
| `rules` | `list` | An array of rules within the ruleset. |
| `source` | `str` | The name of the source |
| `source_type` | `str` | The type of the source of the ruleset |
| `target` | `str` | The target of the ruleset |
| `updated_at` | `str` |  |

#### Example: Load

```python
repository_ruleset = client.RepositoryRuleset().load({"id": 1})
```

#### Example: List

```python
repository_rulesets = client.RepositoryRuleset().list({"org_id": "example"})
```

#### Example: Create

```python
repository_ruleset = client.RepositoryRuleset().create({
    "org_id": "example_org_id",  # str
    "enforcement": "example_enforcement",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "source": "example_source",  # str
})
```


### RepositorySubscription

Create an instance: `repository_subscription = client.RepositorySubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `ignored` | `bool` | Determines if all notifications should be blocked from this repository. |
| `reason` | `str` |  |
| `repository_url` | `str` |  |
| `subscribed` | `bool` | Determines if notifications should be received from this repository. |
| `url` | `str` |  |

#### Example: Load

```python
repository_subscription = client.RepositorySubscription().load({"owner": "owner", "repo": "repo"})
```


### ReviewComment

Create an instance: `review_comment = client.ReviewComment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `str` | How the author is associated with the repository. |
| `body` | `str` |  |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `commit_id` | `str` |  |
| `created_at` | `str` |  |
| `diff_hunk` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `in_reply_to_id` | `int` |  |
| `line` | `int` | The line of the blob to which the comment applies. |
| `links` | `dict` |  |
| `node_id` | `str` |  |
| `original_commit_id` | `str` |  |
| `original_line` | `int` | The original line of the blob to which the comment applies. |
| `original_position` | `int` |  |
| `original_start_line` | `int` | The original first line of the range for a multi-line comment. |
| `path` | `str` |  |
| `position` | `int` |  |
| `pull_request_review_id` | `int` |  |
| `pull_request_url` | `str` |  |
| `reactions` | `dict` |  |
| `side` | `str` | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `str` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `str` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |

#### Example: List

```python
review_comments = client.ReviewComment().list({"id": 1, "owner": "example", "pull_id": 1, "repo": "example"})
```


### RuleSuite

Create an instance: `rule_suite = client.RuleSuite()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `int` | The number that identifies the user. |
| `actor_name` | `str` | The handle for the GitHub user account. |
| `after_sha` | `str` | The new commit SHA of the ref. |
| `before_sha` | `str` | The previous commit SHA of the ref. |
| `evaluation_result` | `str` | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `int` | The unique identifier of the rule insight. |
| `pushed_at` | `str` |  |
| `ref` | `str` | The ref name that the evaluation ran on. |
| `repository_id` | `int` | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `str` | The name of the repository without the `.git` extension. |
| `result` | `str` | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `list` | Details on the evaluated rules. |

#### Example: Load

```python
rule_suite = client.RuleSuite().load({"id": 1})
```

#### Example: List

```python
rule_suites = client.RuleSuite().list({"org_id": "example"})
```


### RulesetVersion

Create an instance: `ruleset_version = client.RulesetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | The actor who updated the ruleset |
| `id` | `str` |  |
| `updated_at` | `str` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: List

```python
ruleset_versions = client.RulesetVersion().list({"id": 1})
```


### RulesetVersionWithState

Create an instance: `ruleset_version_with_state = client.RulesetVersionWithState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | The actor who updated the ruleset |
| `state` | `dict` | The state of the ruleset version |
| `updated_at` | `str` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: Load

```python
ruleset_version_with_state = client.RulesetVersionWithState().load({"ruleset_id": 1, "version_id": 1})
```


### Runner

Create an instance: `runner = client.Runner()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `busy` | `bool` |  |
| `ephemeral` | `bool` |  |
| `id` | `int` | The ID of the runner. |
| `labels` | `list` |  |
| `name` | `str` | The name of the runner. |
| `os` | `str` | The Operating System of the runner. |
| `runner_group_id` | `int` | The ID of the runner group. |
| `status` | `str` | The status of the runner. |

#### Example: Load

```python
runner = client.Runner().load({"id": 1})
```


### RunnerApplication

Create an instance: `runner_application = client.RunnerApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `str` |  |
| `download_url` | `str` |  |
| `filename` | `str` |  |
| `os` | `str` |  |
| `sha256_checksum` | `str` |  |
| `temp_download_token` | `str` | A short lived bearer token used to download the runner, if needed. |

#### Example: List

```python
runner_applications = client.RunnerApplication().list({"org_id": "example"})
```


### RunnerGroup

Create an instance: `runner_group = client.RunnerGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_public_repositories` | `bool` | Whether the runner group can be used by `public` repositories. |
| `default` | `bool` |  |
| `hosted_runners_url` | `str` |  |
| `id` | `float` |  |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `name` | `str` | Name of the runner group. |
| `network_configuration_id` | `str` | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `list` | List of runner IDs to add to the runner group. |
| `runners_url` | `str` |  |
| `selected_repositories_url` | `str` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `list` | List of repository IDs that can access the runner group. |
| `selected_workflows` | `list` | List of workflows the runner group should be allowed to run. |
| `visibility` | `str` | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `bool` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

#### Example: Load

```python
runner_group = client.RunnerGroup().load({"id": 1, "org_id": "org_id"})
```

#### Example: Create

```python
runner_group = client.RunnerGroup().create({
    "org_id": "example_org_id",  # str
    "allows_public_repositories": True,  # bool
    "default": True,  # bool
    "id": 1,  # float
    "inherited": True,  # bool
    "name": "example_name",  # str
    "runners_url": "example_runners_url",  # str
    "visibility": "example_visibility",  # str
})
```


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `str` |  |
| `aliases` | `list` |  |
| `allow_auto_merge` | `bool` |  |
| `allow_forking` | `bool` |  |
| `allow_merge_commit` | `bool` |  |
| `allow_rebase_merge` | `bool` |  |
| `allow_squash_merge` | `bool` |  |
| `archive_url` | `str` |  |
| `archived` | `bool` |  |
| `assignee` | `dict` | A GitHub user. |
| `assignees` | `list` |  |
| `assignees_url` | `str` |  |
| `author` | `dict` | A GitHub user. |
| `author_association` | `str` | How the author is associated with the repository. |
| `avatar_url` | `str` |  |
| `bio` | `str` |  |
| `blobs_url` | `str` |  |
| `blog` | `str` |  |
| `body` | `str` |  |
| `body_html` | `str` |  |
| `body_text` | `str` |  |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `closed_at` | `str` |  |
| `collaborators_url` | `str` |  |
| `color` | `str` |  |
| `comments` | `int` |  |
| `comments_url` | `str` |  |
| `commit` | `dict` |  |
| `commits_url` | `str` |  |
| `committer` | `dict` | Metaproperties for Git author/committer information. |
| `company` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `created_by` | `str` |  |
| `curated` | `bool` |  |
| `default` | `bool` |  |
| `default_branch` | `str` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `str` |  |
| `description` | `str` |  |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `display_name` | `str` |  |
| `downloads_url` | `str` |  |
| `draft` | `bool` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `featured` | `bool` |  |
| `file_size` | `int` |  |
| `followers` | `int` |  |
| `followers_url` | `str` |  |
| `following` | `int` |  |
| `following_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `gists_url` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` |  |
| `has_issues` | `bool` |  |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` |  |
| `has_wiki` | `bool` |  |
| `hireable` | `bool` |  |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `is_template` | `bool` |  |
| `issue_comment_url` | `str` |  |
| `issue_dependencies_summary` | `dict` |  |
| `issue_events_url` | `str` |  |
| `issue_field_values` | `list` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels` | `list` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `last_modified_at` | `str` |  |
| `license` | `dict` | License Simple |
| `line_numbers` | `list` |  |
| `location` | `str` |  |
| `locked` | `bool` |  |
| `login` | `str` |  |
| `logo_url` | `str` |  |
| `master_branch` | `str` |  |
| `merges_url` | `str` |  |
| `milestone` | `dict` | A collection of related issues and pull requests. |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `notifications_url` | `str` |  |
| `number` | `int` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organizations_url` | `str` |  |
| `owner` | `dict` | A GitHub user. |
| `parents` | `list` |  |
| `path` | `str` |  |
| `performed_via_github_app` | `dict` | GitHub apps are a new way to extend GitHub. |
| `permissions` | `dict` |  |
| `private` | `bool` |  |
| `public_gists` | `int` |  |
| `public_repos` | `int` |  |
| `pull_request` | `dict` |  |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `reactions` | `dict` |  |
| `received_events_url` | `str` |  |
| `related` | `list` |  |
| `released` | `str` |  |
| `releases_url` | `str` |  |
| `repos_url` | `str` |  |
| `repository` | `dict` | A repository on GitHub. |
| `repository_count` | `int` |  |
| `repository_url` | `str` |  |
| `score` | `float` |  |
| `sha` | `str` |  |
| `short_description` | `str` |  |
| `site_admin` | `bool` |  |
| `size` | `int` |  |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_url` | `str` |  |
| `state` | `str` |  |
| `state_reason` | `str` |  |
| `statuses_url` | `str` |  |
| `sub_issues_summary` | `dict` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `suspended_at` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `text_matches` | `list` |  |
| `timeline_url` | `str` |  |
| `title` | `str` |  |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `type` | `dict` | The type of issue. |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user` | `dict` | A GitHub user. |
| `user_view_type` | `str` |  |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```python
searchs = client.Search().list({"q": "example"})
```


### SecretScanning

Create an instance: `secret_scanning = client.SecretScanning()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_settings` | `list` | Pattern settings for custom patterns. |
| `pattern_config_version` | `str` | The updated pattern configuration version. |
| `provider_pattern_settings` | `list` | Pattern settings for provider patterns. |


### SecretScanningAlert

Create an instance: `secret_scanning_alert = client.SecretScanningAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `Any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `str` | The GitHub URL of the alert resource. |
| `id` | `str` |  |
| `is_base64_encoded` | `bool` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `str` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `int` | The security alert number. |
| `publicly_leaked` | `bool` | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `str` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `str` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `dict` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `str` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `str` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `dict` | A GitHub user. |
| `resolution` | `str` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `str` | An optional comment to resolve an alert. |
| `resolved_at` | `str` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `dict` | A GitHub user. |
| `secret` | `str` | The secret that was detected. |
| `secret_type` | `str` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `str` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `str` | Sets the state of the secret scanning alert. |
| `updated_at` | `str` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | The REST API URL of the alert resource. |
| `validity` | `str` | The token status as of the latest validity check. |

#### Example: Load

```python
secret_scanning_alert = client.SecretScanningAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: List

```python
secret_scanning_alerts = client.SecretScanningAlert().list({"owner": "example", "repo": "example"})
```


### SecretScanningLocation

Create an instance: `secret_scanning_location = client.SecretScanningLocation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `Any` |  |
| `type` | `str` | The location type. |

#### Example: List

```python
secret_scanning_locations = client.SecretScanningLocation().list({"alert_number": 1, "owner": "example", "repo": "example"})
```


### SecretScanningPatternConfiguration

Create an instance: `secret_scanning_pattern_configuration = client.SecretScanningPatternConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_overrides` | `list` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `str` | The version of the entity. |
| `provider_pattern_overrides` | `list` | Overrides for partner patterns. |

#### Example: List

```python
secret_scanning_pattern_configurations = client.SecretScanningPatternConfiguration().list({"org_id": "example"})
```


### SecretScanningPushProtectionBypass

Create an instance: `secret_scanning_push_protection_bypass = client.SecretScanningPushProtectionBypass()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expire_at` | `str` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | `str` | The ID of the push protection bypass placeholder. |
| `reason` | `str` | The reason for bypassing push protection. |
| `token_type` | `str` | The token type this bypass is for. |

#### Example: Create

```python
secret_scanning_push_protection_bypass = client.SecretScanningPushProtectionBypass().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "placeholder_id": "example_placeholder_id",  # str
})
```


### SecretScanningScanHistory

Create an instance: `secret_scanning_scan_history = client.SecretScanningScanHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backfill_scans` | `list` |  |
| `custom_pattern_backfill_scans` | `list` |  |
| `incremental_scans` | `list` |  |
| `pattern_update_scans` | `list` |  |

#### Example: List

```python
secret_scanning_scan_historys = client.SecretScanningScanHistory().list({"owner": "example", "repo": "example"})
```


### SecurityAdvisory

Create an instance: `security_advisory = client.SecurityAdvisory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Create

```python
security_advisory = client.SecurityAdvisory().create({
    "id": "example_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```


### SelectedAction

Create an instance: `selected_action = client.SelectedAction()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `github_owned_allowed` | `bool` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `list` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | Whether actions from GitHub Marketplace verified creators are allowed. |

#### Example: List

```python
selected_actions = client.SelectedAction().list({"org_id": "example"})
```


### SelfHostedRunner

Create an instance: `self_hosted_runner = client.SelfHostedRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled_repositories` | `str` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `str` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

#### Example: Load

```python
self_hosted_runner = client.SelfHostedRunner().load({"org_id": "org_id"})
```


### ShortBlob

Create an instance: `short_blob = client.ShortBlob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` | The new blob's content. |
| `encoding` | `str` | The encoding used for `content`. |

#### Example: Create

```python
short_blob = client.ShortBlob().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "content": "example_content",  # str
})
```


### ShortBranch

Create an instance: `short_branch = client.ShortBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` |  |
| `name` | `str` |  |
| `protected` | `bool` |  |
| `protection` | `dict` | Branch Protection |
| `protection_url` | `str` |  |

#### Example: List

```python
short_branchs = client.ShortBranch().list({"owner": "example", "repo": "example"})
```


### SimpleClassroom

Create an instance: `simple_classroom = client.SimpleClassroom()`


### SimpleClassroomAssignment

Create an instance: `simple_classroom_assignment = client.SimpleClassroomAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `dict` | A GitHub Classroom classroom |
| `deadline` | `str` | The time at which the assignment is due. |
| `editor` | `str` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `int` | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Whether the invitation link is enabled. |
| `invite_link` | `str` | The link that a student can use to accept the assignment. |
| `language` | `str` | The programming language used in the assignment. |
| `max_members` | `int` | The maximum allowable members per team. |
| `max_teams` | `int` | The maximum allowable teams for the assignment. |
| `passing` | `int` | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Whether an accepted assignment creates a public repository. |
| `slug` | `str` | Sluggified name of the assignment. |
| `students_are_repo_admins` | `bool` | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `int` | The number of students that have submitted the assignment. |
| `title` | `str` | Assignment title. |
| `type` | `str` | Whether it's a Group Assignment or Individual Assignment. |

#### Example: List

```python
simple_classroom_assignments = client.SimpleClassroomAssignment().list({"classroom_id": 1})
```


### SocialAccount

Create an instance: `social_account = client.SocialAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_urls` | `list` | Full URLs for the social media profiles to add. |
| `provider` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
social_accounts = client.SocialAccount().list()
```

#### Example: Create

```python
social_account = client.SocialAccount().create({
    "account_urls": [],  # list
    "provider": "example_provider",  # str
    "url": "example_url",  # str
})
```


### SshSigningKey

Create an instance: `ssh_signing_key = client.SshSigningKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `int` |  |
| `key` | `str` | The public SSH key to add to your GitHub account. |
| `title` | `str` | A descriptive name for the new key. |

#### Example: Load

```python
ssh_signing_key = client.SshSigningKey().load({"id": 1})
```

#### Example: List

```python
ssh_signing_keys = client.SshSigningKey().list()
```

#### Example: Create

```python
ssh_signing_key = client.SshSigningKey().create({
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "title": "example_title",  # str
})
```


### Status

Create an instance: `status = client.Status()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `context` | `str` | A string label to differentiate this status from the status of other systems. |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `description` | `str` | A short description of the status. |
| `id` | `int` |  |
| `node_id` | `str` |  |
| `state` | `str` | The state of the status. |
| `target_url` | `str` | The target URL to associate with this status. |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
statuss = client.Status().list({"owner": "example", "ref": "example", "repo": "example"})
```

#### Example: Create

```python
status = client.Status().create({
    "id": "example_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "avatar_url": "example_avatar_url",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "node_id": "example_node_id",  # str
    "state": "example_state",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```


### StatusCheckPolicy

Create an instance: `status_check_policy = client.StatusCheckPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` |  |
| `checks` | `list` | The list of status checks to require in order to merge into this branch. |
| `context` | `str` |  |
| `contexts` | `list` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `str` |  |
| `strict` | `bool` | Require branches to be up to date before merging. |
| `url` | `str` |  |

#### Example: List

```python
status_check_policys = client.StatusCheckPolicy().list({"branch_id": "example", "owner": "example", "repo": "example"})
```


### Subscriber

Create an instance: `subscriber = client.Subscriber()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `login` | `str` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `type` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |

#### Example: List

```python
subscribers = client.Subscriber().list({"owner": "example", "repo": "example"})
```


### Tag

Create an instance: `tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `dict` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `tarball_url` | `str` |  |
| `zipball_url` | `str` |  |

#### Example: List

```python
tags = client.Tag().list({"owner": "example", "repo": "example"})
```


### TagProtection

Create an instance: `tag_protection = client.TagProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `enabled` | `bool` |  |
| `id` | `int` |  |
| `pattern` | `str` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `str` |  |

#### Example: List

```python
tag_protections = client.TagProtection().list({"owner": "example", "repo": "example"})
```

#### Example: Create

```python
tag_protection = client.TagProtection().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "pattern": "example_pattern",  # str
})
```


### Team

Create an instance: `team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `bool` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | Whether to allow squash merges for pull requests. |
| `archive_url` | `str` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `str` |  |
| `assignment` | `str` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `dict` | A GitHub user. |
| `avatar_url` | `str` |  |
| `blobs_url` | `str` |  |
| `body` | `str` | The main text of the comment. |
| `body_html` | `str` |  |
| `body_version` | `str` | The current version of the body content. |
| `branches_url` | `str` |  |
| `clone_url` | `str` |  |
| `code_of_conduct` | `dict` | Code Of Conduct |
| `collaborators_url` | `str` |  |
| `columns_url` | `str` |  |
| `comments_count` | `int` |  |
| `comments_url` | `str` |  |
| `commits_url` | `str` |  |
| `compare_url` | `str` |  |
| `contents_url` | `str` |  |
| `contributors_url` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` | A GitHub user. |
| `custom_properties` | `dict` | The custom properties that were defined for the repository. |
| `default_branch` | `str` | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` |  |
| `description` | `str` | The description of the team. |
| `disabled` | `bool` | Returns whether or not this repository disabled. |
| `discussion_url` | `str` |  |
| `downloads_url` | `str` |  |
| `email` | `str` |  |
| `events_url` | `str` |  |
| `failed_at` | `str` |  |
| `failed_reason` | `str` |  |
| `followers_url` | `str` |  |
| `following_url` | `str` |  |
| `fork` | `bool` |  |
| `forks` | `int` |  |
| `forks_count` | `int` |  |
| `forks_url` | `str` |  |
| `full_name` | `str` |  |
| `gists_url` | `str` |  |
| `git_commits_url` | `str` |  |
| `git_refs_url` | `str` |  |
| `git_tags_url` | `str` |  |
| `git_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `has_discussions` | `bool` |  |
| `has_downloads` | `bool` | Whether downloads are enabled. |
| `has_issues` | `bool` | Whether issues are enabled. |
| `has_pages` | `bool` |  |
| `has_projects` | `bool` | Whether projects are enabled. |
| `has_wiki` | `bool` | Whether the wiki is enabled. |
| `homepage` | `str` |  |
| `hooks_url` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the repository |
| `invitation_source` | `str` |  |
| `invitation_teams_url` | `str` |  |
| `inviter` | `dict` | A GitHub user. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` |  |
| `issue_events_url` | `str` |  |
| `issues_url` | `str` |  |
| `keys_url` | `str` |  |
| `labels_url` | `str` |  |
| `language` | `str` |  |
| `languages_url` | `str` |  |
| `last_edited_at` | `str` |  |
| `ldap_dn` | `str` | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `dict` | License Simple |
| `login` | `str` |  |
| `maintainers` | `list` | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `str` |  |
| `members_count` | `int` |  |
| `members_url` | `str` |  |
| `merges_url` | `str` |  |
| `milestones_url` | `str` |  |
| `mirror_url` | `str` |  |
| `name` | `str` | The name of the repository. |
| `network_count` | `int` |  |
| `node_id` | `str` |  |
| `notification_setting` | `str` | The notification setting the team has set |
| `notifications_url` | `str` |  |
| `number` | `int` | The unique sequence number of a team discussion comment. |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organization` | `dict` | Team Organization |
| `organization_permission` | `str` | The organization permission for this project. |
| `organizations_url` | `str` |  |
| `owner` | `dict` | A GitHub user. |
| `owner_url` | `str` |  |
| `parent` | `dict` | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | The ID of a team to set as the parent team. |
| `permission` | `str` | Permission that the team will have for its repositories |
| `permissions` | `dict` |  |
| `pinned` | `bool` | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `str` | The level of privacy this team should have |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `str` |  |
| `pushed_at` | `str` |  |
| `reactions` | `dict` |  |
| `received_events_url` | `str` |  |
| `releases_url` | `str` |  |
| `repo_names` | `list` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` |  |
| `repos_url` | `str` |  |
| `repositories_url` | `str` |  |
| `role` | `str` | The role of the user in the team. |
| `role_name` | `str` |  |
| `security_and_analysis` | `dict` |  |
| `site_admin` | `bool` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `str` |  |
| `ssh_url` | `str` |  |
| `stargazers_count` | `int` |  |
| `stargazers_url` | `str` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `state` | `str` | The state of the user's membership in the team. |
| `statuses_url` | `str` |  |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `str` |  |
| `subscription_url` | `str` |  |
| `subscriptions_url` | `str` |  |
| `svn_url` | `str` |  |
| `tags_url` | `str` |  |
| `team_count` | `int` |  |
| `team_url` | `str` |  |
| `teams_url` | `str` |  |
| `temp_clone_token` | `str` |  |
| `title` | `str` | The title of the discussion. |
| `topics` | `list` |  |
| `trees_url` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` | URL for the team |
| `user_view_type` | `str` |  |
| `visibility` | `str` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```python
team = client.Team().load({"id": 1})
```

#### Example: List

```python
teams = client.Team().list()
```

#### Example: Create

```python
team = client.Team().create({
    "org_id": "example_org_id",  # str
    "archive_url": "example_archive_url",  # str
    "archived": True,  # bool
    "assignees_url": "example_assignees_url",  # str
    "author": {},  # dict
    "avatar_url": "example_avatar_url",  # str
    "blobs_url": "example_blobs_url",  # str
    "body": "example_body",  # str
    "body_html": "example_body_html",  # str
    "body_version": "example_body_version",  # str
    "branches_url": "example_branches_url",  # str
    "clone_url": "example_clone_url",  # str
    "code_of_conduct": {},  # dict
    "collaborators_url": "example_collaborators_url",  # str
    "columns_url": "example_columns_url",  # str
    "comments_count": 1,  # int
    "comments_url": "example_comments_url",  # str
    "commits_url": "example_commits_url",  # str
    "compare_url": "example_compare_url",  # str
    "contents_url": "example_contents_url",  # str
    "contributors_url": "example_contributors_url",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "default_branch": "example_default_branch",  # str
    "deployments_url": "example_deployments_url",  # str
    "description": "example_description",  # str
    "disabled": True,  # bool
    "discussion_url": "example_discussion_url",  # str
    "downloads_url": "example_downloads_url",  # str
    "events_url": "example_events_url",  # str
    "followers_url": "example_followers_url",  # str
    "following_url": "example_following_url",  # str
    "fork": True,  # bool
    "forks": 1,  # int
    "forks_count": 1,  # int
    "forks_url": "example_forks_url",  # str
    "full_name": "example_full_name",  # str
    "gists_url": "example_gists_url",  # str
    "git_commits_url": "example_git_commits_url",  # str
    "git_refs_url": "example_git_refs_url",  # str
    "git_tags_url": "example_git_tags_url",  # str
    "git_url": "example_git_url",  # str
    "gravatar_id": "example_gravatar_id",  # str
    "has_downloads": True,  # bool
    "has_issues": True,  # bool
    "has_pages": True,  # bool
    "has_projects": True,  # bool
    "has_wiki": True,  # bool
    "homepage": "example_homepage",  # str
    "hooks_url": "example_hooks_url",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "invitation_teams_url": "example_invitation_teams_url",  # str
    "inviter": {},  # dict
    "issue_comment_url": "example_issue_comment_url",  # str
    "issue_events_url": "example_issue_events_url",  # str
    "issues_url": "example_issues_url",  # str
    "keys_url": "example_keys_url",  # str
    "labels_url": "example_labels_url",  # str
    "language": "example_language",  # str
    "languages_url": "example_languages_url",  # str
    "last_edited_at": "example_last_edited_at",  # str
    "license": {},  # dict
    "login": "example_login",  # str
    "members_count": 1,  # int
    "members_url": "example_members_url",  # str
    "merges_url": "example_merges_url",  # str
    "milestones_url": "example_milestones_url",  # str
    "mirror_url": "example_mirror_url",  # str
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
    "notifications_url": "example_notifications_url",  # str
    "number": 1,  # int
    "open_issues": 1,  # int
    "open_issues_count": 1,  # int
    "organization": {},  # dict
    "organizations_url": "example_organizations_url",  # str
    "owner": {},  # dict
    "owner_url": "example_owner_url",  # str
    "parent": {},  # dict
    "permission": "example_permission",  # str
    "permissions": {},  # dict
    "pinned": True,  # bool
    "private": True,  # bool
    "pulls_url": "example_pulls_url",  # str
    "pushed_at": "example_pushed_at",  # str
    "reactions": {},  # dict
    "received_events_url": "example_received_events_url",  # str
    "releases_url": "example_releases_url",  # str
    "repos_count": 1,  # int
    "repos_url": "example_repos_url",  # str
    "repositories_url": "example_repositories_url",  # str
    "role": "example_role",  # str
    "site_admin": True,  # bool
    "size": 1,  # int
    "slug": "example_slug",  # str
    "ssh_url": "example_ssh_url",  # str
    "stargazers_count": 1,  # int
    "stargazers_url": "example_stargazers_url",  # str
    "starred_url": "example_starred_url",  # str
    "state": "example_state",  # str
    "statuses_url": "example_statuses_url",  # str
    "subscribers_url": "example_subscribers_url",  # str
    "subscription_url": "example_subscription_url",  # str
    "subscriptions_url": "example_subscriptions_url",  # str
    "svn_url": "example_svn_url",  # str
    "tags_url": "example_tags_url",  # str
    "team_count": 1,  # int
    "team_url": "example_team_url",  # str
    "teams_url": "example_teams_url",  # str
    "title": "example_title",  # str
    "trees_url": "example_trees_url",  # str
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "watchers": 1,  # int
    "watchers_count": 1,  # int
})
```


### TeamSimple

Create an instance: `team_simple = client.TeamSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Description of the team |
| `html_url` | `str` |  |
| `id` | `int` | Unique identifier of the team |
| `ldap_dn` | `str` | Distinguished Name (DN) that team maps to within LDAP environment |
| `members_url` | `str` |  |
| `name` | `str` | Name of the team |
| `node_id` | `str` |  |
| `notification_setting` | `str` | The notification setting the team has set |
| `permission` | `str` | Permission that the team will have for its repositories |
| `privacy` | `str` | The level of privacy this team should have |
| `repositories_url` | `str` |  |
| `slug` | `str` |  |
| `url` | `str` | URL for the team |

#### Example: List

```python
team_simples = client.TeamSimple().list({"org_id": "example"})
```


### Thread

Create an instance: `thread = client.Thread()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `last_read_at` | `str` |  |
| `reason` | `str` |  |
| `repository` | `dict` | Minimal Repository |
| `subject` | `dict` |  |
| `subscription_url` | `str` |  |
| `unread` | `bool` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
thread = client.Thread().load({"id": 1})
```

#### Example: List

```python
threads = client.Thread().list()
```


### ThreadSubscription

Create an instance: `thread_subscription = client.ThreadSubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `ignored` | `bool` | Whether to block all notifications from a thread. |
| `reason` | `str` |  |
| `repository_url` | `str` |  |
| `subscribed` | `bool` |  |
| `thread_url` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
thread_subscription = client.ThreadSubscription().load({"id": 1})
```


### Topic

Create an instance: `topic = client.Topic()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `names` | `list` | An array of topics to add to the repository. |

#### Example: List

```python
topics = client.Topic().list({"owner": "example", "repo": "example"})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `str` | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `dict` | Mapping of subject digest to bundles. |
| `avatar_url` | `str` |  |
| `bio` | `str` | The new short biography of the user. |
| `blog` | `str` | The new blog URL of the user. |
| `collaborators` | `int` |  |
| `company` | `str` | The new company of the user. |
| `created_at` | `str` |  |
| `disk_usage` | `int` |  |
| `email` | `str` | The publicly visible email address of the user. |
| `events_url` | `str` |  |
| `followers` | `int` |  |
| `followers_url` | `str` |  |
| `following` | `int` |  |
| `following_url` | `str` |  |
| `gists_url` | `str` |  |
| `gravatar_id` | `str` |  |
| `hireable` | `bool` | The new hiring availability of the user. |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `inherited_from` | `list` | Team the user has gotten the role through |
| `location` | `str` | The new location of the user. |
| `login` | `str` |  |
| `name` | `str` | The new name of the user. |
| `node_id` | `str` |  |
| `organizations_url` | `str` |  |
| `owned_private_repos` | `int` |  |
| `page_info` | `dict` | Information about the current page. |
| `plan` | `dict` |  |
| `predicate_type` | `str` | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `int` |  |
| `private_repos` | `int` |  |
| `public_gists` | `int` |  |
| `public_repos` | `int` |  |
| `received_events_url` | `str` |  |
| `repos_url` | `str` |  |
| `site_admin` | `bool` |  |
| `space` | `int` |  |
| `starred_at` | `str` |  |
| `starred_url` | `str` |  |
| `subject_digests` | `list` | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `str` |  |
| `total_private_repos` | `int` |  |
| `twitter_username` | `str` | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |
| `user_view_type` | `str` |  |
| `users` | `list` | The username for users |

#### Example: Load

```python
user = client.User().load({"id": 1})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
    "branch_id": "example_branch_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "private_repos": 1,  # int
    "space": 1,  # int
    "subject_digests": [],  # list
    "users": [],  # list
})
```


### UserMarketplacePurchase

Create an instance: `user_marketplace_purchase = client.UserMarketplacePurchase()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `dict` |  |
| `billing_cycle` | `str` |  |
| `free_trial_ends_on` | `str` |  |
| `next_billing_date` | `str` |  |
| `on_free_trial` | `bool` |  |
| `plan` | `dict` | Marketplace Listing Plan |
| `unit_count` | `int` |  |
| `updated_at` | `str` |  |

#### Example: List

```python
user_marketplace_purchases = client.UserMarketplacePurchase().list()
```


### View

Create an instance: `view = client.View()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `str` |  |
| `uniques` | `int` |  |

#### Example: List

```python
views = client.View().list({"owner": "example", "repo": "example"})
```


### WebhookConfig

Create an instance: `webhook_config = client.WebhookConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `str` | The media type used to serialize the payloads. |
| `insecure_ssl` | `str` |  |
| `secret` | `str` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `str` | The URL to which the payloads will be delivered. |

#### Example: Load

```python
webhook_config = client.WebhookConfig().load()
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `badge_url` | `str` |  |
| `created_at` | `str` |  |
| `deleted_at` | `str` |  |
| `html_url` | `str` |  |
| `id` | `int` |  |
| `name` | `str` |  |
| `node_id` | `str` |  |
| `path` | `str` |  |
| `state` | `str` |  |
| `updated_at` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
workflow = client.Workflow().load({"id": "workflow_id", "owner": "owner", "repo": "repo"})
```


### WorkflowRun

Create an instance: `workflow_run = client.WorkflowRun()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `dict` | A GitHub user. |
| `artifacts_url` | `str` | The URL to the artifacts for the workflow run. |
| `cancel_url` | `str` | The URL to cancel the workflow run. |
| `check_suite_id` | `int` | The ID of the associated check suite. |
| `check_suite_node_id` | `str` | The node ID of the associated check suite. |
| `check_suite_url` | `str` | The URL to the associated check suite. |
| `conclusion` | `str` |  |
| `created_at` | `str` |  |
| `display_title` | `str` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `str` |  |
| `head_branch` | `str` |  |
| `head_commit` | `dict` | A commit. |
| `head_repository` | `dict` | Minimal Repository |
| `head_repository_id` | `int` |  |
| `head_sha` | `str` | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `str` |  |
| `id` | `int` | The ID of the workflow run. |
| `jobs_url` | `str` | The URL to the jobs for the workflow run. |
| `logs_url` | `str` | The URL to download the logs for the workflow run. |
| `name` | `str` | The name of the workflow run. |
| `node_id` | `str` |  |
| `path` | `str` | The full path of the workflow |
| `previous_attempt_url` | `str` | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `list` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `list` |  |
| `repository` | `dict` | Minimal Repository |
| `rerun_url` | `str` | The URL to rerun the workflow run. |
| `run_attempt` | `int` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `str` | The start time of the latest run. |
| `status` | `str` |  |
| `triggering_actor` | `dict` | A GitHub user. |
| `updated_at` | `str` |  |
| `url` | `str` | The URL to the workflow run. |
| `workflow_id` | `int` | The ID of the parent workflow. |
| `workflow_url` | `str` | The URL to the workflow. |

#### Example: Load

```python
workflow_run = client.WorkflowRun().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### Example: Create

```python
workflow_run = client.WorkflowRun().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "run_id": 1,  # int
    "actor": {},  # dict
    "artifacts_url": "example_artifacts_url",  # str
    "cancel_url": "example_cancel_url",  # str
    "check_suite_url": "example_check_suite_url",  # str
    "conclusion": "example_conclusion",  # str
    "created_at": "example_created_at",  # str
    "display_title": "example_display_title",  # str
    "event": "example_event",  # str
    "head_branch": "example_head_branch",  # str
    "head_commit": {},  # dict
    "head_repository": {},  # dict
    "head_sha": "example_head_sha",  # str
    "html_url": "example_html_url",  # str
    "id": 1,  # int
    "jobs_url": "example_jobs_url",  # str
    "logs_url": "example_logs_url",  # str
    "node_id": "example_node_id",  # str
    "path": "example_path",  # str
    "pull_requests": [],  # list
    "repository": {},  # dict
    "rerun_url": "example_rerun_url",  # str
    "run_number": 1,  # int
    "status": "example_status",  # str
    "triggering_actor": {},  # dict
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "workflow_id": 1,  # int
    "workflow_url": "example_workflow_url",  # str
})
```


### WorkflowRunUsage

Create an instance: `workflow_run_usage = client.WorkflowRunUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `dict` |  |
| `UBUNTU` | `dict` |  |
| `WINDOWS` | `dict` |  |

#### Example: Load

```python
workflow_run_usage = client.WorkflowRunUsage().load({"owner": "owner", "repo": "repo", "run_id": 1})
```


### WorkflowUsage

Create an instance: `workflow_usage = client.WorkflowUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `dict` |  |
| `UBUNTU` | `dict` |  |
| `WINDOWS` | `dict` |  |
| `id` | `str` |  |

#### Example: Load

```python
workflow_usage = client.WorkflowUsage().load({"id": "workflow_usage_id", "owner": "owner", "repo": "repo"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── github_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`github_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
customproperty = client.CustomProperty()
customproperty.list()

# customproperty.data_get() now returns the customproperty data from the last list
# customproperty.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
