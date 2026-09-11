# Github PHP SDK



The PHP SDK for the Github API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Action()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/github-sdk/releases](https://github.com/voxgig-sdk/github-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'github_sdk.php';

$client = new GithubSDK([
    "apikey" => getenv("GITHUB_APIKEY"),
]);
```

### 2. List action records

```php
try {
    // list() returns an array of Action records — iterate directly.
    $actions = $client->Action()->list();
    foreach ($actions as $item) {
        echo $item["id"] . " " . $item["MACOS"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an action

Action is nested under archive_format, so provide the `archive_format`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Action record (throws on error).
    $action = $client->Action()->load(["archive_format" => "example_archive_format", "artifact_id" => 1, "owner" => "example_owner", "repo" => "example_repo"]);
    print_r($action);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Action record.
$created = $client->Action()->create(["org_id" => "example_org_id", "access_level" => "example_access_level", "active_caches_count" => 1, "active_caches_size_in_bytes" => 1, "actor" => [], "allows_public_repositories" => true, "approval_policy" => "example_approval_policy", "archive_download_url" => "example_archive_download_url", "archive_url" => "example_archive_url", "artifacts_url" => "example_artifacts_url", "assignees_url" => "example_assignees_url", "badge_url" => "example_badge_url", "blobs_url" => "example_blobs_url", "branches_url" => "example_branches_url", "busy" => true, "cancel_url" => "example_cancel_url", "check_run_url" => "example_check_run_url", "check_suite_url" => "example_check_suite_url", "code_of_conduct" => [], "collaborators_url" => "example_collaborators_url", "comments_url" => "example_comments_url", "commits_url" => "example_commits_url", "compare_url" => "example_compare_url", "completed_at" => "example_completed_at", "conclusion" => "example_conclusion", "contents_url" => "example_contents_url", "contributors_url" => "example_contributors_url", "cpu_cores" => 1, "created_at" => "example_created_at", "days" => 1, "default" => true, "deployments_url" => "example_deployments_url", "description" => "example_description", "display_name" => "example_display_name", "display_title" => "example_display_title", "downloads_url" => "example_downloads_url", "enabled" => true, "enabled_repositories" => "example_enabled_repositories", "event" => "example_event", "events_url" => "example_events_url", "expired" => true, "expires_at" => "example_expires_at", "fork" => true, "forks_url" => "example_forks_url", "full_name" => "example_full_name", "git_commits_url" => "example_git_commits_url", "git_refs_url" => "example_git_refs_url", "git_tags_url" => "example_git_tags_url", "head_branch" => "example_head_branch", "head_commit" => [], "head_repository" => [], "head_sha" => "example_head_sha", "hooks_url" => "example_hooks_url", "html_url" => "example_html_url", "id" => 1, "image_details" => [], "inherited" => true, "issue_comment_url" => "example_issue_comment_url", "issue_events_url" => "example_issue_events_url", "issues_url" => "example_issues_url", "jobs_url" => "example_jobs_url", "keys_url" => "example_keys_url", "labels" => [], "labels_url" => "example_labels_url", "languages_url" => "example_languages_url", "logs_url" => "example_logs_url", "machine_size_details" => [], "memory_gb" => 1, "merges_url" => "example_merges_url", "milestones_url" => "example_milestones_url", "name" => "example_name", "node_id" => "example_node_id", "notifications_url" => "example_notifications_url", "os" => "example_os", "owner" => [], "path" => "example_path", "platform" => "example_platform", "platforms" => [], "private" => true, "public_ip_enabled" => true, "pull_requests" => [], "pulls_url" => "example_pulls_url", "ref" => "example_ref", "releases_url" => "example_releases_url", "repository" => [], "rerun_url" => "example_rerun_url", "run_id" => 1, "run_number" => 1, "run_url" => "example_run_url", "run_workflows_from_fork_pull_requests" => true, "runner_group_id" => 1, "runner_group_name" => "example_runner_group_name", "runner_id" => 1, "runner_name" => "example_runner_name", "runners" => [], "runners_url" => "example_runners_url", "selected_repository_ids" => [], "size_gb" => 1, "size_in_bytes" => 1, "source" => "example_source", "stargazers_url" => "example_stargazers_url", "started_at" => "example_started_at", "state" => "example_state", "status" => "example_status", "statuses_url" => "example_statuses_url", "storage_gb" => 1, "subscribers_url" => "example_subscribers_url", "subscription_url" => "example_subscription_url", "tags_url" => "example_tags_url", "teams_url" => "example_teams_url", "total_count" => 1, "trees_url" => "example_trees_url", "triggering_actor" => [], "updated_at" => "example_updated_at", "url" => "example_url", "workflow_id" => 1, "workflow_name" => "example_workflow_name", "workflow_url" => "example_workflow_url"]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->Action()->update(["org_id" => "example_org_id", "repository_id" => 1]);

// Remove
$client->Action()->remove(["hosted_runner_id" => 1, "org_id" => "example_org_id"]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $custompropertys = $client->CustomProperty()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = GithubSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$customproperty = $client->CustomProperty()->list();
print_r($customproperty);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new GithubSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
GITHUB_TEST_LIVE=TRUE
GITHUB_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### GithubSDK

```php
require_once 'github_sdk.php';
$client = new GithubSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = GithubSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### GithubSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Action` | `($data): ActionEntity` | Create an Action entity instance. |
| `ActionsArtifactAndLogRetention` | `($data): ActionsArtifactAndLogRetentionEntity` | Create an ActionsArtifactAndLogRetention entity instance. |
| `ActionsCacheList` | `($data): ActionsCacheListEntity` | Create an ActionsCacheList entity instance. |
| `ActionsCacheUsageByRepository` | `($data): ActionsCacheUsageByRepositoryEntity` | Create an ActionsCacheUsageByRepository entity instance. |
| `ActionsCacheUsageOrgEnterprise` | `($data): ActionsCacheUsageOrgEnterpriseEntity` | Create an ActionsCacheUsageOrgEnterprise entity instance. |
| `ActionsForkPrContributorApproval` | `($data): ActionsForkPrContributorApprovalEntity` | Create an ActionsForkPrContributorApproval entity instance. |
| `ActionsForkPrWorkflowsPrivateRepo` | `($data): ActionsForkPrWorkflowsPrivateRepoEntity` | Create an ActionsForkPrWorkflowsPrivateRepo entity instance. |
| `ActionsGetDefaultWorkflowPermission` | `($data): ActionsGetDefaultWorkflowPermissionEntity` | Create an ActionsGetDefaultWorkflowPermission entity instance. |
| `ActionsHostedRunner` | `($data): ActionsHostedRunnerEntity` | Create an ActionsHostedRunner entity instance. |
| `ActionsHostedRunnerLimit` | `($data): ActionsHostedRunnerLimitEntity` | Create an ActionsHostedRunnerLimit entity instance. |
| `ActionsOrganizationPermission` | `($data): ActionsOrganizationPermissionEntity` | Create an ActionsOrganizationPermission entity instance. |
| `ActionsPublicKey` | `($data): ActionsPublicKeyEntity` | Create an ActionsPublicKey entity instance. |
| `ActionsRepositoryPermission` | `($data): ActionsRepositoryPermissionEntity` | Create an ActionsRepositoryPermission entity instance. |
| `ActionsSecret` | `($data): ActionsSecretEntity` | Create an ActionsSecret entity instance. |
| `ActionsVariable` | `($data): ActionsVariableEntity` | Create an ActionsVariable entity instance. |
| `ActionsWorkflowAccessToRepository` | `($data): ActionsWorkflowAccessToRepositoryEntity` | Create an ActionsWorkflowAccessToRepository entity instance. |
| `Activity` | `($data): ActivityEntity` | Create an Activity entity instance. |
| `Add` | `($data): AddEntity` | Create an Add entity instance. |
| `ApiInsightsRouteStat` | `($data): ApiInsightsRouteStatEntity` | Create an ApiInsightsRouteStat entity instance. |
| `ApiInsightsSubjectStat` | `($data): ApiInsightsSubjectStatEntity` | Create an ApiInsightsSubjectStat entity instance. |
| `ApiInsightsSummaryStat` | `($data): ApiInsightsSummaryStatEntity` | Create an ApiInsightsSummaryStat entity instance. |
| `ApiInsightsTimeStat` | `($data): ApiInsightsTimeStatEntity` | Create an ApiInsightsTimeStat entity instance. |
| `ApiInsightsUserStat` | `($data): ApiInsightsUserStatEntity` | Create an ApiInsightsUserStat entity instance. |
| `ApiOverview` | `($data): ApiOverviewEntity` | Create an ApiOverview entity instance. |
| `App` | `($data): AppEntity` | Create an App entity instance. |
| `Artifact` | `($data): ArtifactEntity` | Create an Artifact entity instance. |
| `Assignee` | `($data): AssigneeEntity` | Create an Assignee entity instance. |
| `AuthenticationToken` | `($data): AuthenticationTokenEntity` | Create an AuthenticationToken entity instance. |
| `Authorization` | `($data): AuthorizationEntity` | Create an Authorization entity instance. |
| `Autolink` | `($data): AutolinkEntity` | Create an Autolink entity instance. |
| `BaseGist` | `($data): BaseGistEntity` | Create a BaseGist entity instance. |
| `BillingUsageReport` | `($data): BillingUsageReportEntity` | Create a BillingUsageReport entity instance. |
| `BillingUsageReportUser` | `($data): BillingUsageReportUserEntity` | Create a BillingUsageReportUser entity instance. |
| `Blob` | `($data): BlobEntity` | Create a Blob entity instance. |
| `Block` | `($data): BlockEntity` | Create a Block entity instance. |
| `Branch` | `($data): BranchEntity` | Create a Branch entity instance. |
| `BranchProtection` | `($data): BranchProtectionEntity` | Create a BranchProtection entity instance. |
| `BranchRestrictionPolicy` | `($data): BranchRestrictionPolicyEntity` | Create a BranchRestrictionPolicy entity instance. |
| `BranchShort` | `($data): BranchShortEntity` | Create a BranchShort entity instance. |
| `BranchWithProtection` | `($data): BranchWithProtectionEntity` | Create a BranchWithProtection entity instance. |
| `Campaign` | `($data): CampaignEntity` | Create a Campaign entity instance. |
| `Check` | `($data): CheckEntity` | Create a Check entity instance. |
| `CheckAnnotation` | `($data): CheckAnnotationEntity` | Create a CheckAnnotation entity instance. |
| `CheckAutomatedSecurityFix` | `($data): CheckAutomatedSecurityFixEntity` | Create a CheckAutomatedSecurityFix entity instance. |
| `CheckRun` | `($data): CheckRunEntity` | Create a CheckRun entity instance. |
| `CheckSuite` | `($data): CheckSuiteEntity` | Create a CheckSuite entity instance. |
| `CheckSuitePreference` | `($data): CheckSuitePreferenceEntity` | Create a CheckSuitePreference entity instance. |
| `Classroom` | `($data): ClassroomEntity` | Create a Classroom entity instance. |
| `ClassroomAcceptedAssignment` | `($data): ClassroomAcceptedAssignmentEntity` | Create a ClassroomAcceptedAssignment entity instance. |
| `ClassroomAssignment` | `($data): ClassroomAssignmentEntity` | Create a ClassroomAssignment entity instance. |
| `ClassroomAssignmentGrade` | `($data): ClassroomAssignmentGradeEntity` | Create a ClassroomAssignmentGrade entity instance. |
| `Clone` | `($data): CloneEntity` | Create a Clone entity instance. |
| `CodeFrequency` | `($data): CodeFrequencyEntity` | Create a CodeFrequency entity instance. |
| `CodeFrequencyStat` | `($data): CodeFrequencyStatEntity` | Create a CodeFrequencyStat entity instance. |
| `CodeOfConduct` | `($data): CodeOfConductEntity` | Create a CodeOfConduct entity instance. |
| `CodeScanning` | `($data): CodeScanningEntity` | Create a CodeScanning entity instance. |
| `CodeScanningAlert` | `($data): CodeScanningAlertEntity` | Create a CodeScanningAlert entity instance. |
| `CodeScanningAlertInstance` | `($data): CodeScanningAlertInstanceEntity` | Create a CodeScanningAlertInstance entity instance. |
| `CodeScanningAlertItem` | `($data): CodeScanningAlertItemEntity` | Create a CodeScanningAlertItem entity instance. |
| `CodeScanningAnalysi` | `($data): CodeScanningAnalysiEntity` | Create a CodeScanningAnalysi entity instance. |
| `CodeScanningAnalysisDeletion` | `($data): CodeScanningAnalysisDeletionEntity` | Create a CodeScanningAnalysisDeletion entity instance. |
| `CodeScanningAutofix` | `($data): CodeScanningAutofixEntity` | Create a CodeScanningAutofix entity instance. |
| `CodeScanningAutofixCommit` | `($data): CodeScanningAutofixCommitEntity` | Create a CodeScanningAutofixCommit entity instance. |
| `CodeScanningCodeqlDatabase` | `($data): CodeScanningCodeqlDatabaseEntity` | Create a CodeScanningCodeqlDatabase entity instance. |
| `CodeScanningDefaultSetup` | `($data): CodeScanningDefaultSetupEntity` | Create a CodeScanningDefaultSetup entity instance. |
| `CodeScanningOrganizationAlertItem` | `($data): CodeScanningOrganizationAlertItemEntity` | Create a CodeScanningOrganizationAlertItem entity instance. |
| `CodeScanningSarifsStatus` | `($data): CodeScanningSarifsStatusEntity` | Create a CodeScanningSarifsStatus entity instance. |
| `CodeScanningVariantAnalysi` | `($data): CodeScanningVariantAnalysiEntity` | Create a CodeScanningVariantAnalysi entity instance. |
| `CodeScanningVariantAnalysisRepoTask` | `($data): CodeScanningVariantAnalysisRepoTaskEntity` | Create a CodeScanningVariantAnalysisRepoTask entity instance. |
| `CodeSecurity` | `($data): CodeSecurityEntity` | Create a CodeSecurity entity instance. |
| `CodeSecurityConfiguration` | `($data): CodeSecurityConfigurationEntity` | Create a CodeSecurityConfiguration entity instance. |
| `CodeSecurityConfigurationRepository` | `($data): CodeSecurityConfigurationRepositoryEntity` | Create a CodeSecurityConfigurationRepository entity instance. |
| `CodeSecurityDefaultConfiguration` | `($data): CodeSecurityDefaultConfigurationEntity` | Create a CodeSecurityDefaultConfiguration entity instance. |
| `CodeownersError` | `($data): CodeownersErrorEntity` | Create a CodeownersError entity instance. |
| `Codespace` | `($data): CodespaceEntity` | Create a Codespace entity instance. |
| `Collaborator` | `($data): CollaboratorEntity` | Create a Collaborator entity instance. |
| `CombinedBillingUsage` | `($data): CombinedBillingUsageEntity` | Create a CombinedBillingUsage entity instance. |
| `CombinedCommitStatus` | `($data): CombinedCommitStatusEntity` | Create a CombinedCommitStatus entity instance. |
| `Commit` | `($data): CommitEntity` | Create a Commit entity instance. |
| `CommitActivity` | `($data): CommitActivityEntity` | Create a CommitActivity entity instance. |
| `CommitComment` | `($data): CommitCommentEntity` | Create a CommitComment entity instance. |
| `CommitComparison` | `($data): CommitComparisonEntity` | Create a CommitComparison entity instance. |
| `CommunityProfile` | `($data): CommunityProfileEntity` | Create a CommunityProfile entity instance. |
| `ContentFile` | `($data): ContentFileEntity` | Create a ContentFile entity instance. |
| `ContentTraffic` | `($data): ContentTrafficEntity` | Create a ContentTraffic entity instance. |
| `Contributor` | `($data): ContributorEntity` | Create a Contributor entity instance. |
| `Copilot` | `($data): CopilotEntity` | Create a Copilot entity instance. |
| `CopilotOrganizationDetail` | `($data): CopilotOrganizationDetailEntity` | Create a CopilotOrganizationDetail entity instance. |
| `CopilotUsageMetricsDay` | `($data): CopilotUsageMetricsDayEntity` | Create a CopilotUsageMetricsDay entity instance. |
| `Credential` | `($data): CredentialEntity` | Create a Credential entity instance. |
| `CustomProperty` | `($data): CustomPropertyEntity` | Create a CustomProperty entity instance. |
| `CustomPropertyValue` | `($data): CustomPropertyValueEntity` | Create a CustomPropertyValue entity instance. |
| `Dependabot` | `($data): DependabotEntity` | Create a Dependabot entity instance. |
| `DependabotAlert` | `($data): DependabotAlertEntity` | Create a DependabotAlert entity instance. |
| `DependabotAlertWithRepository` | `($data): DependabotAlertWithRepositoryEntity` | Create a DependabotAlertWithRepository entity instance. |
| `DependabotPublicKey` | `($data): DependabotPublicKeyEntity` | Create a DependabotPublicKey entity instance. |
| `DependabotRepositoryAccessDetail` | `($data): DependabotRepositoryAccessDetailEntity` | Create a DependabotRepositoryAccessDetail entity instance. |
| `DependabotSecret` | `($data): DependabotSecretEntity` | Create a DependabotSecret entity instance. |
| `DependencyGraph` | `($data): DependencyGraphEntity` | Create a DependencyGraph entity instance. |
| `DependencyGraphDiff` | `($data): DependencyGraphDiffEntity` | Create a DependencyGraphDiff entity instance. |
| `DependencyGraphSpdxSbom` | `($data): DependencyGraphSpdxSbomEntity` | Create a DependencyGraphSpdxSbom entity instance. |
| `DeployKey` | `($data): DeployKeyEntity` | Create a DeployKey entity instance. |
| `Deployment` | `($data): DeploymentEntity` | Create a Deployment entity instance. |
| `DeploymentBranchPolicy` | `($data): DeploymentBranchPolicyEntity` | Create a DeploymentBranchPolicy entity instance. |
| `DeploymentProtectionRule` | `($data): DeploymentProtectionRuleEntity` | Create a DeploymentProtectionRule entity instance. |
| `DeploymentStatus` | `($data): DeploymentStatusEntity` | Create a DeploymentStatus entity instance. |
| `DiffEntry` | `($data): DiffEntryEntity` | Create a DiffEntry entity instance. |
| `Email` | `($data): EmailEntity` | Create an Email entity instance. |
| `Emoji` | `($data): EmojiEntity` | Create an Emoji entity instance. |
| `EmptyObject` | `($data): EmptyObjectEntity` | Create an EmptyObject entity instance. |
| `EnterpriseTeam` | `($data): EnterpriseTeamEntity` | Create an EnterpriseTeam entity instance. |
| `EnterpriseTeamMembership` | `($data): EnterpriseTeamMembershipEntity` | Create an EnterpriseTeamMembership entity instance. |
| `Environment` | `($data): EnvironmentEntity` | Create an Environment entity instance. |
| `EnvironmentApproval` | `($data): EnvironmentApprovalEntity` | Create an EnvironmentApproval entity instance. |
| `Event` | `($data): EventEntity` | Create an Event entity instance. |
| `Feed` | `($data): FeedEntity` | Create a Feed entity instance. |
| `FileCommit` | `($data): FileCommitEntity` | Create a FileCommit entity instance. |
| `Follower` | `($data): FollowerEntity` | Create a Follower entity instance. |
| `Following` | `($data): FollowingEntity` | Create a Following entity instance. |
| `FullRepository` | `($data): FullRepositoryEntity` | Create a FullRepository entity instance. |
| `Gist` | `($data): GistEntity` | Create a Gist entity instance. |
| `GistComment` | `($data): GistCommentEntity` | Create a GistComment entity instance. |
| `GistCommit` | `($data): GistCommitEntity` | Create a GistCommit entity instance. |
| `GistSimple` | `($data): GistSimpleEntity` | Create a GistSimple entity instance. |
| `Git` | `($data): GitEntity` | Create a Git entity instance. |
| `GitCommit` | `($data): GitCommitEntity` | Create a GitCommit entity instance. |
| `GitRef` | `($data): GitRefEntity` | Create a GitRef entity instance. |
| `GitTag` | `($data): GitTagEntity` | Create a GitTag entity instance. |
| `GitTree` | `($data): GitTreeEntity` | Create a GitTree entity instance. |
| `Gitignore` | `($data): GitignoreEntity` | Create a Gitignore entity instance. |
| `GitignoreTemplate` | `($data): GitignoreTemplateEntity` | Create a GitignoreTemplate entity instance. |
| `GlobalAdvisory` | `($data): GlobalAdvisoryEntity` | Create a GlobalAdvisory entity instance. |
| `GpgKey` | `($data): GpgKeyEntity` | Create a GpgKey entity instance. |
| `Hook` | `($data): HookEntity` | Create a Hook entity instance. |
| `HookDelivery` | `($data): HookDeliveryEntity` | Create a HookDelivery entity instance. |
| `HookDeliveryItem` | `($data): HookDeliveryItemEntity` | Create a HookDeliveryItem entity instance. |
| `HostedCompute` | `($data): HostedComputeEntity` | Create a HostedCompute entity instance. |
| `Hovercard` | `($data): HovercardEntity` | Create a Hovercard entity instance. |
| `Import` | `($data): ImportEntity` | Create an Import entity instance. |
| `Installation` | `($data): InstallationEntity` | Create an Installation entity instance. |
| `InstallationToken` | `($data): InstallationTokenEntity` | Create an InstallationToken entity instance. |
| `Integration` | `($data): IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationInstallation` | `($data): IntegrationInstallationEntity` | Create an IntegrationInstallation entity instance. |
| `Interaction` | `($data): InteractionEntity` | Create an Interaction entity instance. |
| `InteractionLimit` | `($data): InteractionLimitEntity` | Create an InteractionLimit entity instance. |
| `Issue` | `($data): IssueEntity` | Create an Issue entity instance. |
| `IssueType` | `($data): IssueTypeEntity` | Create an IssueType entity instance. |
| `Job` | `($data): JobEntity` | Create a Job entity instance. |
| `Key` | `($data): KeyEntity` | Create a Key entity instance. |
| `Label` | `($data): LabelEntity` | Create a Label entity instance. |
| `Language` | `($data): LanguageEntity` | Create a Language entity instance. |
| `License` | `($data): LicenseEntity` | Create a License entity instance. |
| `Markdown` | `($data): MarkdownEntity` | Create a Markdown entity instance. |
| `MarketplaceListingPlan` | `($data): MarketplaceListingPlanEntity` | Create a MarketplaceListingPlan entity instance. |
| `MarketplacePurchase` | `($data): MarketplacePurchaseEntity` | Create a MarketplacePurchase entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `Membership` | `($data): MembershipEntity` | Create a Membership entity instance. |
| `MergedUpstream` | `($data): MergedUpstreamEntity` | Create a MergedUpstream entity instance. |
| `Meta` | `($data): MetaEntity` | Create a Meta entity instance. |
| `Metaroot` | `($data): MetarootEntity` | Create a Metaroot entity instance. |
| `Migration` | `($data): MigrationEntity` | Create a Migration entity instance. |
| `Milestone` | `($data): MilestoneEntity` | Create a Milestone entity instance. |
| `MinimalRepository` | `($data): MinimalRepositoryEntity` | Create a MinimalRepository entity instance. |
| `NetworkConfiguration` | `($data): NetworkConfigurationEntity` | Create a NetworkConfiguration entity instance. |
| `NetworkSetting` | `($data): NetworkSettingEntity` | Create a NetworkSetting entity instance. |
| `OidcCustomSub` | `($data): OidcCustomSubEntity` | Create an OidcCustomSub entity instance. |
| `OidcCustomSubRepo` | `($data): OidcCustomSubRepoEntity` | Create an OidcCustomSubRepo entity instance. |
| `Org` | `($data): OrgEntity` | Create an Org entity instance. |
| `OrgHook` | `($data): OrgHookEntity` | Create an OrgHook entity instance. |
| `OrgMembership` | `($data): OrgMembershipEntity` | Create an OrgMembership entity instance. |
| `OrgPrivateRegistryConfiguration` | `($data): OrgPrivateRegistryConfigurationEntity` | Create an OrgPrivateRegistryConfiguration entity instance. |
| `OrgPrivateRegistryConfigurationWithSelectedRepository` | `($data): OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` | Create an OrgPrivateRegistryConfigurationWithSelectedRepository entity instance. |
| `OrgRepoCustomPropertyValue` | `($data): OrgRepoCustomPropertyValueEntity` | Create an OrgRepoCustomPropertyValue entity instance. |
| `Organization` | `($data): OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationActionsSecret` | `($data): OrganizationActionsSecretEntity` | Create an OrganizationActionsSecret entity instance. |
| `OrganizationActionsVariable` | `($data): OrganizationActionsVariableEntity` | Create an OrganizationActionsVariable entity instance. |
| `OrganizationDependabotSecret` | `($data): OrganizationDependabotSecretEntity` | Create an OrganizationDependabotSecret entity instance. |
| `OrganizationInvitation` | `($data): OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `OrganizationProgrammaticAccessGrant` | `($data): OrganizationProgrammaticAccessGrantEntity` | Create an OrganizationProgrammaticAccessGrant entity instance. |
| `OrganizationRole` | `($data): OrganizationRoleEntity` | Create an OrganizationRole entity instance. |
| `OrganizationSecretScanningAlert` | `($data): OrganizationSecretScanningAlertEntity` | Create an OrganizationSecretScanningAlert entity instance. |
| `OutsideCollaborator` | `($data): OutsideCollaboratorEntity` | Create an OutsideCollaborator entity instance. |
| `Package` | `($data): PackageEntity` | Create a Package entity instance. |
| `Page` | `($data): PageEntity` | Create a Page entity instance. |
| `PageBuild` | `($data): PageBuildEntity` | Create a PageBuild entity instance. |
| `PageBuildStatus` | `($data): PageBuildStatusEntity` | Create a PageBuildStatus entity instance. |
| `PageDeployment` | `($data): PageDeploymentEntity` | Create a PageDeployment entity instance. |
| `PagesDeploymentStatus` | `($data): PagesDeploymentStatusEntity` | Create a PagesDeploymentStatus entity instance. |
| `PagesHealthCheck` | `($data): PagesHealthCheckEntity` | Create a PagesHealthCheck entity instance. |
| `Participation` | `($data): ParticipationEntity` | Create a Participation entity instance. |
| `PendingDeployment` | `($data): PendingDeploymentEntity` | Create a PendingDeployment entity instance. |
| `PorterAuthor` | `($data): PorterAuthorEntity` | Create a PorterAuthor entity instance. |
| `PorterLargeFile` | `($data): PorterLargeFileEntity` | Create a PorterLargeFile entity instance. |
| `PrivateRegistry` | `($data): PrivateRegistryEntity` | Create a PrivateRegistry entity instance. |
| `PrivateUser` | `($data): PrivateUserEntity` | Create a PrivateUser entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |
| `ProjectCollaboratorPermission` | `($data): ProjectCollaboratorPermissionEntity` | Create a ProjectCollaboratorPermission entity instance. |
| `ProjectColumn` | `($data): ProjectColumnEntity` | Create a ProjectColumn entity instance. |
| `ProjectsClassic` | `($data): ProjectsClassicEntity` | Create a ProjectsClassic entity instance. |
| `ProjectsV2` | `($data): ProjectsV2Entity` | Create a ProjectsV2 entity instance. |
| `ProjectsV2Field` | `($data): ProjectsV2FieldEntity` | Create a ProjectsV2Field entity instance. |
| `ProjectsV2ItemSimple` | `($data): ProjectsV2ItemSimpleEntity` | Create a ProjectsV2ItemSimple entity instance. |
| `ProjectsV2ItemWithContent` | `($data): ProjectsV2ItemWithContentEntity` | Create a ProjectsV2ItemWithContent entity instance. |
| `ProtectedBranch` | `($data): ProtectedBranchEntity` | Create a ProtectedBranch entity instance. |
| `ProtectedBranchAdminEnforced` | `($data): ProtectedBranchAdminEnforcedEntity` | Create a ProtectedBranchAdminEnforced entity instance. |
| `ProtectedBranchPullRequestReview` | `($data): ProtectedBranchPullRequestReviewEntity` | Create a ProtectedBranchPullRequestReview entity instance. |
| `PublicMember` | `($data): PublicMemberEntity` | Create a PublicMember entity instance. |
| `Pull` | `($data): PullEntity` | Create a Pull entity instance. |
| `PullRequestReview` | `($data): PullRequestReviewEntity` | Create a PullRequestReview entity instance. |
| `PullRequestReviewComment` | `($data): PullRequestReviewCommentEntity` | Create a PullRequestReviewComment entity instance. |
| `PullRequestSimple` | `($data): PullRequestSimpleEntity` | Create a PullRequestSimple entity instance. |
| `RateLimit` | `($data): RateLimitEntity` | Create a RateLimit entity instance. |
| `Reaction` | `($data): ReactionEntity` | Create a Reaction entity instance. |
| `Referrer` | `($data): ReferrerEntity` | Create a Referrer entity instance. |
| `Release` | `($data): ReleaseEntity` | Create a Release entity instance. |
| `ReleaseAsset` | `($data): ReleaseAssetEntity` | Create a ReleaseAsset entity instance. |
| `ReleaseNotesContent` | `($data): ReleaseNotesContentEntity` | Create a ReleaseNotesContent entity instance. |
| `Remove` | `($data): RemoveEntity` | Create a Remove entity instance. |
| `Repo` | `($data): RepoEntity` | Create a Repo entity instance. |
| `Repository` | `($data): RepositoryEntity` | Create a Repository entity instance. |
| `RepositoryAdvisory` | `($data): RepositoryAdvisoryEntity` | Create a RepositoryAdvisory entity instance. |
| `RepositoryCollaboratorPermission` | `($data): RepositoryCollaboratorPermissionEntity` | Create a RepositoryCollaboratorPermission entity instance. |
| `RepositoryInvitation` | `($data): RepositoryInvitationEntity` | Create a RepositoryInvitation entity instance. |
| `RepositoryRuleDetailed` | `($data): RepositoryRuleDetailedEntity` | Create a RepositoryRuleDetailed entity instance. |
| `RepositoryRuleset` | `($data): RepositoryRulesetEntity` | Create a RepositoryRuleset entity instance. |
| `RepositorySubscription` | `($data): RepositorySubscriptionEntity` | Create a RepositorySubscription entity instance. |
| `ReviewComment` | `($data): ReviewCommentEntity` | Create a ReviewComment entity instance. |
| `RuleSuite` | `($data): RuleSuiteEntity` | Create a RuleSuite entity instance. |
| `RulesetVersion` | `($data): RulesetVersionEntity` | Create a RulesetVersion entity instance. |
| `RulesetVersionWithState` | `($data): RulesetVersionWithStateEntity` | Create a RulesetVersionWithState entity instance. |
| `Runner` | `($data): RunnerEntity` | Create a Runner entity instance. |
| `RunnerApplication` | `($data): RunnerApplicationEntity` | Create a RunnerApplication entity instance. |
| `RunnerGroup` | `($data): RunnerGroupEntity` | Create a RunnerGroup entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `SecretScanning` | `($data): SecretScanningEntity` | Create a SecretScanning entity instance. |
| `SecretScanningAlert` | `($data): SecretScanningAlertEntity` | Create a SecretScanningAlert entity instance. |
| `SecretScanningLocation` | `($data): SecretScanningLocationEntity` | Create a SecretScanningLocation entity instance. |
| `SecretScanningPatternConfiguration` | `($data): SecretScanningPatternConfigurationEntity` | Create a SecretScanningPatternConfiguration entity instance. |
| `SecretScanningPushProtectionBypass` | `($data): SecretScanningPushProtectionBypassEntity` | Create a SecretScanningPushProtectionBypass entity instance. |
| `SecretScanningScanHistory` | `($data): SecretScanningScanHistoryEntity` | Create a SecretScanningScanHistory entity instance. |
| `SecurityAdvisory` | `($data): SecurityAdvisoryEntity` | Create a SecurityAdvisory entity instance. |
| `SelectedAction` | `($data): SelectedActionEntity` | Create a SelectedAction entity instance. |
| `SelfHostedRunner` | `($data): SelfHostedRunnerEntity` | Create a SelfHostedRunner entity instance. |
| `ShortBlob` | `($data): ShortBlobEntity` | Create a ShortBlob entity instance. |
| `ShortBranch` | `($data): ShortBranchEntity` | Create a ShortBranch entity instance. |
| `SimpleClassroom` | `($data): SimpleClassroomEntity` | Create a SimpleClassroom entity instance. |
| `SimpleClassroomAssignment` | `($data): SimpleClassroomAssignmentEntity` | Create a SimpleClassroomAssignment entity instance. |
| `SocialAccount` | `($data): SocialAccountEntity` | Create a SocialAccount entity instance. |
| `SshSigningKey` | `($data): SshSigningKeyEntity` | Create a SshSigningKey entity instance. |
| `Status` | `($data): StatusEntity` | Create a Status entity instance. |
| `StatusCheckPolicy` | `($data): StatusCheckPolicyEntity` | Create a StatusCheckPolicy entity instance. |
| `Subscriber` | `($data): SubscriberEntity` | Create a Subscriber entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `TagProtection` | `($data): TagProtectionEntity` | Create a TagProtection entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `TeamSimple` | `($data): TeamSimpleEntity` | Create a TeamSimple entity instance. |
| `Thread` | `($data): ThreadEntity` | Create a Thread entity instance. |
| `ThreadSubscription` | `($data): ThreadSubscriptionEntity` | Create a ThreadSubscription entity instance. |
| `Topic` | `($data): TopicEntity` | Create a Topic entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserMarketplacePurchase` | `($data): UserMarketplacePurchaseEntity` | Create an UserMarketplacePurchase entity instance. |
| `View` | `($data): ViewEntity` | Create a View entity instance. |
| `WebhookConfig` | `($data): WebhookConfigEntity` | Create a WebhookConfig entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `($data): WorkflowRunEntity` | Create a WorkflowRun entity instance. |
| `WorkflowRunUsage` | `($data): WorkflowRunUsageEntity` | Create a WorkflowRunUsage entity instance. |
| `WorkflowUsage` | `($data): WorkflowUsageEntity` | Create a WorkflowUsage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$action = $client->Action();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `int` | Total minutes used on macOS runner machines. |
| `UBUNTU` | `int` | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `int` | Total minutes used on Windows runner machines. |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `array` | A GitHub user. |
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
| `code_of_conduct` | `array` | Code Of Conduct |
| `code_search_index_status` | `array` | The status of the code search index for this repository |
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
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `head_commit` | `array` | A commit. |
| `head_repository` | `array` | Minimal Repository |
| `head_repository_id` | `int` |  |
| `head_sha` | `string` | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `hosted_runners_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the workflow run. |
| `image_details` | `array` | Provides details of a hosted runner image |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `inputs` | `array` | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `jobs_url` | `string` | The URL to the jobs for the workflow run. |
| `keys_url` | `string` |  |
| `labels` | `array` | The names of the custom labels to add to the runner. |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `array` | License Simple |
| `logs_url` | `string` | The URL to download the logs for the workflow run. |
| `machine_size_details` | `array` | Provides details of a particular machine spec. |
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
| `owner` | `array` | A GitHub user. |
| `path` | `string` | The full path of the workflow |
| `patterns_allowed` | `array` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `array` |  |
| `platform` | `string` | The operating system of the image. |
| `platforms` | `array` |  |
| `previous_attempt_url` | `string` | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `array` | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `array` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `ref` | `string` | The git reference for the workflow. |
| `referenced_workflows` | `array` |  |
| `releases_url` | `string` |  |
| `repository` | `array` | Minimal Repository |
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
| `runners` | `array` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `security_and_analysis` | `array` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `array` | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `array` | List of workflows the runner group should be allowed to run. |
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
| `steps` | `array` | Steps in this job. |
| `storage_gb` | `int` | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `array` |  |
| `total` | `int` | Total minutes used on all runner machines. |
| `total_count` | `int` |  |
| `trees_url` | `string` |  |
| `triggering_actor` | `array` | A GitHub user. |
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
| `workflow_run` | `array` |  |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Action record (throws on error).
$action = $client->Action()->load(["archive_format" => "archive_format", "artifact_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Action records (throws on error).
$actions = $client->Action()->list();
```

#### Example: Create

```php
$action = $client->Action()->create([
    "org_id" => null, // string
    "access_level" => null, // string
    "active_caches_count" => null, // int
    "active_caches_size_in_bytes" => null, // int
    "actor" => null, // array
    "allows_public_repositories" => null, // bool
    "approval_policy" => null, // string
    "archive_download_url" => null, // string
    "archive_url" => null, // string
    "artifacts_url" => null, // string
    "assignees_url" => null, // string
    "badge_url" => null, // string
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "busy" => null, // bool
    "cancel_url" => null, // string
    "check_run_url" => null, // string
    "check_suite_url" => null, // string
    "code_of_conduct" => null, // array
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "completed_at" => null, // string
    "conclusion" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "cpu_cores" => null, // int
    "created_at" => null, // string
    "days" => null, // int
    "default" => null, // bool
    "deployments_url" => null, // string
    "description" => null, // string
    "display_name" => null, // string
    "display_title" => null, // string
    "downloads_url" => null, // string
    "enabled" => null, // bool
    "enabled_repositories" => null, // string
    "event" => null, // string
    "events_url" => null, // string
    "expired" => null, // bool
    "expires_at" => null, // string
    "fork" => null, // bool
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "head_branch" => null, // string
    "head_commit" => null, // array
    "head_repository" => null, // array
    "head_sha" => null, // string
    "hooks_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "image_details" => null, // array
    "inherited" => null, // bool
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "jobs_url" => null, // string
    "keys_url" => null, // string
    "labels" => null, // array
    "labels_url" => null, // string
    "languages_url" => null, // string
    "logs_url" => null, // string
    "machine_size_details" => null, // array
    "memory_gb" => null, // int
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "notifications_url" => null, // string
    "os" => null, // string
    "owner" => null, // array
    "path" => null, // string
    "platform" => null, // string
    "platforms" => null, // array
    "private" => null, // bool
    "public_ip_enabled" => null, // bool
    "pull_requests" => null, // array
    "pulls_url" => null, // string
    "ref" => null, // string
    "releases_url" => null, // string
    "repository" => null, // array
    "rerun_url" => null, // string
    "run_id" => null, // int
    "run_number" => null, // int
    "run_url" => null, // string
    "run_workflows_from_fork_pull_requests" => null, // bool
    "runner_group_id" => null, // int
    "runner_group_name" => null, // string
    "runner_id" => null, // int
    "runner_name" => null, // string
    "runners" => null, // array
    "runners_url" => null, // string
    "selected_repository_ids" => null, // array
    "size_gb" => null, // int
    "size_in_bytes" => null, // int
    "source" => null, // string
    "stargazers_url" => null, // string
    "started_at" => null, // string
    "state" => null, // string
    "status" => null, // string
    "statuses_url" => null, // string
    "storage_gb" => null, // int
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "tags_url" => null, // string
    "teams_url" => null, // string
    "total_count" => null, // int
    "trees_url" => null, // string
    "triggering_actor" => null, // array
    "updated_at" => null, // string
    "url" => null, // string
    "workflow_id" => null, // int
    "workflow_name" => null, // string
    "workflow_url" => null, // string
]);
```


### ActionsArtifactAndLogRetention

Create an instance: `$actions_artifact_and_log_retention = $client->ActionsArtifactAndLogRetention();`

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

```php
// load() returns the ENTITY — call data_get() for the ActionsArtifactAndLogRetention record (throws on error).
$actions_artifact_and_log_retention = $client->ActionsArtifactAndLogRetention()->load(["org_id" => "org_id"]);
```


### ActionsCacheList

Create an instance: `$actions_cache_list = $client->ActionsCacheList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

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

```php
// list() returns an array of ActionsCacheList records (throws on error).
$actions_cache_lists = $client->ActionsCacheList()->list();
```


### ActionsCacheUsageByRepository

Create an instance: `$actions_cache_usage_by_repository = $client->ActionsCacheUsageByRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_caches_count` | `int` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | The repository owner and name for the cache usage being shown. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsCacheUsageByRepository record (throws on error).
$actions_cache_usage_by_repository = $client->ActionsCacheUsageByRepository()->load(["owner" => "owner", "repo" => "repo"]);
```


### ActionsCacheUsageOrgEnterprise

Create an instance: `$actions_cache_usage_org_enterprise = $client->ActionsCacheUsageOrgEnterprise();`

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

```php
// load() returns the ENTITY — call data_get() for the ActionsCacheUsageOrgEnterprise record (throws on error).
$actions_cache_usage_org_enterprise = $client->ActionsCacheUsageOrgEnterprise()->load(["org_id" => "org_id"]);
```


### ActionsForkPrContributorApproval

Create an instance: `$actions_fork_pr_contributor_approval = $client->ActionsForkPrContributorApproval();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval_policy` | `string` | The policy that controls when fork PR workflows require approval from a maintainer. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsForkPrContributorApproval record (throws on error).
$actions_fork_pr_contributor_approval = $client->ActionsForkPrContributorApproval()->load(["org_id" => "org_id"]);
```


### ActionsForkPrWorkflowsPrivateRepo

Create an instance: `$actions_fork_pr_workflows_private_repo = $client->ActionsForkPrWorkflowsPrivateRepo();`

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

```php
// load() returns the ENTITY — call data_get() for the ActionsForkPrWorkflowsPrivateRepo record (throws on error).
$actions_fork_pr_workflows_private_repo = $client->ActionsForkPrWorkflowsPrivateRepo()->load(["org_id" => "org_id"]);
```


### ActionsGetDefaultWorkflowPermission

Create an instance: `$actions_get_default_workflow_permission = $client->ActionsGetDefaultWorkflowPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsGetDefaultWorkflowPermission record (throws on error).
$actions_get_default_workflow_permission = $client->ActionsGetDefaultWorkflowPermission()->load(["org_id" => "org_id"]);
```


### ActionsHostedRunner

Create an instance: `$actions_hosted_runner = $client->ActionsHostedRunner();`

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
| `image` | `array` | The image of runner. |
| `image_details` | `array` | Provides details of a hosted runner image |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `array` | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | The maximum amount of hosted runners. |
| `name` | `string` | The name of the hosted runner. |
| `platform` | `string` | The operating system of the image. |
| `public_ip_enabled` | `bool` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `array` | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `int` | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `string` | The machine size of the runner. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsHostedRunner record (throws on error).
$actions_hosted_runner = $client->ActionsHostedRunner()->load(["id" => 1, "org_id" => "org_id"]);
```

#### Example: Create

```php
$actions_hosted_runner = $client->ActionsHostedRunner()->create([
    "org_id" => null, // string
    "id" => null, // int
    "image" => null, // array
    "image_details" => null, // array
    "machine_size_details" => null, // array
    "name" => null, // string
    "platform" => null, // string
    "public_ip_enabled" => null, // bool
    "size" => null, // string
    "status" => null, // string
]);
```


### ActionsHostedRunnerLimit

Create an instance: `$actions_hosted_runner_limit = $client->ActionsHostedRunnerLimit();`

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

```php
// load() returns the ENTITY — call data_get() for the ActionsHostedRunnerLimit record (throws on error).
$actions_hosted_runner_limit = $client->ActionsHostedRunnerLimit()->load(["org_id" => "org_id"]);
```


### ActionsOrganizationPermission

Create an instance: `$actions_organization_permission = $client->ActionsOrganizationPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `string` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `string` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `string` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsOrganizationPermission record (throws on error).
$actions_organization_permission = $client->ActionsOrganizationPermission()->load(["org_id" => "org_id"]);
```


### ActionsPublicKey

Create an instance: `$actions_public_key = $client->ActionsPublicKey();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the ActionsPublicKey record (throws on error).
$actions_public_key = $client->ActionsPublicKey()->load(["org_id" => "org_id"]);
```


### ActionsRepositoryPermission

Create an instance: `$actions_repository_permission = $client->ActionsRepositoryPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsRepositoryPermission record (throws on error).
$actions_repository_permission = $client->ActionsRepositoryPermission()->load(["owner" => "owner", "repo" => "repo"]);
```


### ActionsSecret

Create an instance: `$actions_secret = $client->ActionsSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsSecret record (throws on error).
$actions_secret = $client->ActionsSecret()->load(["id" => "actions_secret_id", "owner" => "owner", "repo" => "repo"]);
```


### ActionsVariable

Create an instance: `$actions_variable = $client->ActionsVariable();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `string` |  |
| `name` | `string` | The name of the variable. |
| `updated_at` | `string` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `string` | The value of the variable. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsVariable record (throws on error).
$actions_variable = $client->ActionsVariable()->load(["id" => "actions_variable_id", "owner" => "owner", "repo" => "repo"]);
```


### ActionsWorkflowAccessToRepository

Create an instance: `$actions_workflow_access_to_repository = $client->ActionsWorkflowAccessToRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsWorkflowAccessToRepository record (throws on error).
$actions_workflow_access_to_repository = $client->ActionsWorkflowAccessToRepository()->load(["owner" => "owner", "repo" => "repo"]);
```


### Activity

Create an instance: `$activity = $client->Activity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_type` | `string` | The type of the activity that was performed. |
| `actor` | `array` | A GitHub user. |
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
| `language` | `array` |  |
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
| `owner` | `array` |  |
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

```php
// load() returns the ENTITY — call data_get() for the Activity record (throws on error).
$activity = $client->Activity()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Activity records (throws on error).
$activitys = $client->Activity()->list();
```


### Add

Create an instance: `$add = $client->Add();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `array` | The GitHub user handles to add to the team. |

#### Example: Create

```php
$add = $client->Add()->create([
    "enterprise" => null, // string
    "team_id" => null, // string
    "usernames" => null, // array
]);
```


### ApiInsightsRouteStat

Create an instance: `$api_insights_route_stat = $client->ApiInsightsRouteStat();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of ApiInsightsRouteStat records (throws on error).
$api_insights_route_stats = $client->ApiInsightsRouteStat()->list();
```


### ApiInsightsSubjectStat

Create an instance: `$api_insights_subject_stat = $client->ApiInsightsSubjectStat();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of ApiInsightsSubjectStat records (throws on error).
$api_insights_subject_stats = $client->ApiInsightsSubjectStat()->list();
```


### ApiInsightsSummaryStat

Create an instance: `$api_insights_summary_stat = $client->ApiInsightsSummaryStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `rate_limited_request_count` | `int` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | The total number of requests within the queried time period |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApiInsightsSummaryStat record (throws on error).
$api_insights_summary_stat = $client->ApiInsightsSummaryStat()->load(["min_timestamp" => "min_timestamp"]);
```


### ApiInsightsTimeStat

Create an instance: `$api_insights_time_stat = $client->ApiInsightsTimeStat();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate_limited_request_count` | `int` |  |
| `timestamp` | `string` |  |
| `total_request_count` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApiInsightsTimeStat record (throws on error).
$api_insights_time_stat = $client->ApiInsightsTimeStat()->load(["org_id" => "org_id", "user_id" => "user_id", "min_timestamp" => "min_timestamp", "timestamp_increment" => "timestamp_increment"]);
```

#### Example: List

```php
// list() returns an array of ApiInsightsTimeStat records (throws on error).
$api_insights_time_stats = $client->ApiInsightsTimeStat()->list();
```


### ApiInsightsUserStat

Create an instance: `$api_insights_user_stat = $client->ApiInsightsUserStat();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the ApiInsightsUserStat record (throws on error).
$api_insights_user_stat = $client->ApiInsightsUserStat()->load(["id" => "api_insights_user_stat_id", "org_id" => "org_id", "min_timestamp" => "min_timestamp"]);
```


### ApiOverview

Create an instance: `$api_overview = $client->ApiOverview();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` |  |
| `actions_macos` | `array` |  |
| `api` | `array` |  |
| `codespaces` | `array` |  |
| `copilot` | `array` |  |
| `dependabot` | `array` |  |
| `domains` | `array` |  |
| `git` | `array` |  |
| `github_enterprise_importer` | `array` |  |
| `hooks` | `array` |  |
| `importer` | `array` |  |
| `packages` | `array` |  |
| `pages` | `array` |  |
| `ssh_key_fingerprints` | `array` |  |
| `ssh_keys` | `array` |  |
| `verifiable_password_authentication` | `bool` |  |
| `web` | `array` |  |

#### Example: List

```php
// list() returns an array of ApiOverview records (throws on error).
$api_overviews = $client->ApiOverview()->list();
```


### App

Create an instance: `$app = $client->App();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `mixed` |  |
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
| `code_search_index_status` | `array` | The status of the code search index for this repository |
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
| `events` | `array` |  |
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
| `license` | `array` | License Simple |
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
| `owner` | `array` | A GitHub user. |
| `pem` | `string` |  |
| `permissions` | `array` | The permissions granted to the user access token. |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `array` |  |
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
| `suspended_by` | `array` | A GitHub user. |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `array` |  |
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

```php
// list() returns an array of App records (throws on error).
$apps = $client->App()->list();
```

#### Example: Create

```php
$app = $client->App()->create([
    "code" => null, // string
    "access_tokens_url" => null, // string
    "account" => null, // mixed
    "app_id" => null, // int
    "app_slug" => null, // string
    "archive_url" => null, // string
    "archived" => null, // bool
    "assignees_url" => null, // string
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "clone_url" => null, // string
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "default_branch" => null, // string
    "deployments_url" => null, // string
    "disabled" => null, // bool
    "downloads_url" => null, // string
    "events_url" => null, // string
    "fork" => null, // bool
    "forks" => null, // int
    "forks_count" => null, // int
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "git_url" => null, // string
    "has_downloads" => null, // bool
    "has_issues" => null, // bool
    "has_pages" => null, // bool
    "has_projects" => null, // bool
    "has_wiki" => null, // bool
    "homepage" => null, // string
    "hooks_url" => null, // string
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "language" => null, // string
    "languages_url" => null, // string
    "license" => null, // array
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "mirror_url" => null, // string
    "notifications_url" => null, // string
    "open_issues" => null, // int
    "open_issues_count" => null, // int
    "private" => null, // bool
    "pulls_url" => null, // string
    "pushed_at" => null, // string
    "releases_url" => null, // string
    "repositories_url" => null, // string
    "repository_selection" => null, // string
    "single_file_name" => null, // string
    "size" => null, // int
    "ssh_url" => null, // string
    "stargazers_count" => null, // int
    "stargazers_url" => null, // string
    "statuses_url" => null, // string
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "suspended_at" => null, // string
    "suspended_by" => null, // array
    "svn_url" => null, // string
    "tags_url" => null, // string
    "target_id" => null, // int
    "target_type" => null, // string
    "teams_url" => null, // string
    "trees_url" => null, // string
    "url" => null, // string
    "watchers" => null, // int
    "watchers_count" => null, // int
]);
```


### Artifact

Create an instance: `$artifact = $client->Artifact();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `head_branch` | `string` |  |
| `head_repository_id` | `int` |  |
| `head_sha` | `string` |  |
| `id` | `int` |  |
| `repository_id` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Artifact record (throws on error).
$artifact = $client->Artifact()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```


### Assignee

Create an instance: `$assignee = $client->Assignee();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Assignee records (throws on error).
$assignees = $client->Assignee()->list();
```


### AuthenticationToken

Create an instance: `$authentication_token = $client->AuthenticationToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `token` | `string` |  |

#### Example: Create

```php
$authentication_token = $client->AuthenticationToken()->create([
    "org_id" => null, // string
]);
```


### Authorization

Create an instance: `$authorization = $client->Authorization();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` | The access_token of the OAuth or GitHub application. |
| `app` | `array` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `hashed_token` | `string` |  |
| `id` | `int` |  |
| `installation` | `array` |  |
| `note` | `string` |  |
| `note_url` | `string` |  |
| `permissions` | `array` | The permissions granted to the user access token. |
| `repositories` | `array` | The list of repository names to scope the user access token to. |
| `repository_ids` | `array` | The list of repository IDs to scope the user access token to. |
| `scopes` | `array` | A list of scopes that this authorization is in. |
| `target` | `string` | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | The ID of the user or organization to scope the user access token to. |
| `token` | `string` |  |
| `token_last_eight` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: Create

```php
$authorization = $client->Authorization()->create([
    "application_id" => null, // string
    "access_token" => null, // string
    "app" => null, // array
    "created_at" => null, // string
    "expires_at" => null, // string
    "fingerprint" => null, // string
    "hashed_token" => null, // string
    "id" => null, // int
    "installation" => null, // array
    "note" => null, // string
    "note_url" => null, // string
    "scopes" => null, // array
    "token" => null, // string
    "token_last_eight" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### Autolink

Create an instance: `$autolink = $client->Autolink();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `is_alphanumeric` | `bool` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `string` | The prefix of a key that is linkified. |
| `updated_at` | `string` |  |
| `url_template` | `string` | A template for the target URL that is generated if a key was found. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Autolink record (throws on error).
$autolink = $client->Autolink()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Autolink records (throws on error).
$autolinks = $client->Autolink()->list();
```

#### Example: Create

```php
$autolink = $client->Autolink()->create([
    "owner" => null, // string
    "repo" => null, // string
    "id" => null, // int
    "is_alphanumeric" => null, // bool
    "key_prefix" => null, // string
    "url_template" => null, // string
]);
```


### BaseGist

Create an instance: `$base_gist = $client->BaseGist();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `array` |  |
| `forks` | `array` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `array` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `array` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: List

```php
// list() returns an array of BaseGist records (throws on error).
$base_gists = $client->BaseGist()->list();
```

#### Example: Create

```php
$base_gist = $client->BaseGist()->create([
    "gist_id" => null, // string
]);
```


### BillingUsageReport

Create an instance: `$billing_usage_report = $client->BillingUsageReport();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `float` | Discount amount of the usage line item. |
| `grossAmount` | `float` | Gross amount of the usage line item. |
| `netAmount` | `float` | Net amount of the usage line item. |
| `organizationName` | `string` | Name of the organization. |
| `pricePerUnit` | `float` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```php
// list() returns an array of BillingUsageReport records (throws on error).
$billing_usage_reports = $client->BillingUsageReport()->list();
```


### BillingUsageReportUser

Create an instance: `$billing_usage_report_user = $client->BillingUsageReportUser();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `float` | Discount amount of the usage line item. |
| `grossAmount` | `float` | Gross amount of the usage line item. |
| `netAmount` | `float` | Net amount of the usage line item. |
| `pricePerUnit` | `float` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `int` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```php
// list() returns an array of BillingUsageReportUser records (throws on error).
$billing_usage_report_users = $client->BillingUsageReportUser()->list();
```


### Blob

Create an instance: `$blob = $client->Blob();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the Blob record (throws on error).
$blob = $client->Blob()->load(["id" => "blob_id", "owner" => "owner", "repo" => "repo"]);
```


### Block

Create an instance: `$block = $client->Block();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Block records (throws on error).
$blocks = $client->Block()->list();
```


### Branch

Create an instance: `$branch = $client->Branch();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` | Commit |
| `id` | `string` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `pattern` | `string` |  |
| `protected` | `bool` |  |
| `protection` | `array` | Branch Protection |
| `protection_url` | `string` |  |
| `required_approving_review_count` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Branch record (throws on error).
$branch = $client->Branch()->load(["id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```


### BranchProtection

Create an instance: `$branch_protection = $client->BranchProtection();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `array` |  |
| `allow_force_pushes` | `array` |  |
| `allow_fork_syncing` | `array` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `array` |  |
| `enabled` | `bool` |  |
| `enforce_admins` | `array` | Protected Branch Admin Enforced |
| `id` | `string` |  |
| `lock_branch` | `array` | Whether to set the branch as read-only. |
| `name` | `string` |  |
| `protection_url` | `string` |  |
| `required_conversation_resolution` | `array` |  |
| `required_linear_history` | `array` |  |
| `required_pull_request_reviews` | `array` | Protected Branch Pull Request Review |
| `required_signatures` | `array` |  |
| `required_status_checks` | `array` | Protected Branch Required Status Check |
| `restrictions` | `array` | Branch Restriction Policy |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BranchProtection record (throws on error).
$branch_protection = $client->BranchProtection()->load(["id" => "branch_protection_id", "owner" => "owner", "repo" => "repo"]);
```


### BranchRestrictionPolicy

Create an instance: `$branch_restriction_policy = $client->BranchRestrictionPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `array` |  |
| `apps_url` | `string` |  |
| `teams` | `array` |  |
| `teams_url` | `string` |  |
| `url` | `string` |  |
| `users` | `array` |  |
| `users_url` | `string` |  |

#### Example: List

```php
// list() returns an array of BranchRestrictionPolicy records (throws on error).
$branch_restriction_policys = $client->BranchRestrictionPolicy()->list();
```


### BranchShort

Create an instance: `$branch_short = $client->BranchShort();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |

#### Example: List

```php
// list() returns an array of BranchShort records (throws on error).
$branch_shorts = $client->BranchShort()->list();
```


### BranchWithProtection

Create an instance: `$branch_with_protection = $client->BranchWithProtection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `new_name` | `string` | The new name of the branch. |

#### Example: Create

```php
$branch_with_protection = $client->BranchWithProtection()->create([
    "id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "new_name" => null, // string
]);
```


### Campaign

Create an instance: `$campaign = $client->Campaign();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_stats` | `array` |  |
| `closed_at` | `string` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `array` | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | The contact link of the campaign. |
| `created_at` | `string` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | The campaign description |
| `ends_at` | `string` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | If true, will automatically generate issues for the campaign. |
| `id` | `string` |  |
| `managers` | `array` | The campaign managers |
| `name` | `string` | The campaign name |
| `number` | `int` | The number of the newly created campaign |
| `published_at` | `string` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Indicates whether a campaign is open or closed |
| `team_managers` | `array` | The campaign team managers |
| `updated_at` | `string` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Campaign record (throws on error).
$campaign = $client->Campaign()->load(["id" => 1, "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of Campaign records (throws on error).
$campaigns = $client->Campaign()->list();
```

#### Example: Create

```php
$campaign = $client->Campaign()->create([
    "org_id" => null, // string
    "alert_stats" => null, // array
    "code_scanning_alerts" => null, // array
    "contact_link" => null, // string
    "created_at" => null, // string
    "description" => null, // string
    "ends_at" => null, // string
    "managers" => null, // array
    "number" => null, // int
    "state" => null, // string
    "updated_at" => null, // string
]);
```


### Check

Create an instance: `$check = $client->Check();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `array` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `check_suite` | `array` |  |
| `completed_at` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `deployment` | `array` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` |  |
| `external_id` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `array` | A commit. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the check. |
| `latest_check_runs_count` | `int` |  |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `array` |  |
| `pull_requests` | `array` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `array` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `started_at` | `string` |  |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of Check records (throws on error).
$checks = $client->Check()->list();
```


### CheckAnnotation

Create an instance: `$check_annotation = $client->CheckAnnotation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of CheckAnnotation records (throws on error).
$check_annotations = $client->CheckAnnotation()->list();
```


### CheckAutomatedSecurityFix

Create an instance: `$check_automated_security_fix = $client->CheckAutomatedSecurityFix();`

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

```php
// load() returns the ENTITY — call data_get() for the CheckAutomatedSecurityFix record (throws on error).
$check_automated_security_fix = $client->CheckAutomatedSecurityFix()->load(["owner" => "owner", "repo" => "repo"]);
```


### CheckRun

Create an instance: `$check_run = $client->CheckRun();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `array` | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `array` |  |
| `completed_at` | `string` | The time the check completed. |
| `conclusion` | `string` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `array` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | A reference for the run on the integrator's system. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the check. |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `array` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `array` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `string` | The time that the check run began. |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CheckRun record (throws on error).
$check_run = $client->CheckRun()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$check_run = $client->CheckRun()->create([
    "owner" => null, // string
    "repo" => null, // string
    "app" => null, // array
    "check_suite" => null, // array
    "completed_at" => null, // string
    "conclusion" => null, // string
    "deployment" => null, // array
    "details_url" => null, // string
    "external_id" => null, // string
    "head_sha" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "name" => null, // string
    "node_id" => null, // string
    "output" => null, // array
    "pull_requests" => null, // array
    "started_at" => null, // string
    "status" => null, // string
    "url" => null, // string
]);
```


### CheckSuite

Create an instance: `$check_suite = $client->CheckSuite();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `array` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `array` | A commit. |
| `head_sha` | `string` | The SHA of the head commit that is being checked. |
| `id` | `int` |  |
| `latest_check_runs_count` | `int` |  |
| `node_id` | `string` |  |
| `pull_requests` | `array` |  |
| `repository` | `array` | Minimal Repository |
| `rerequestable` | `bool` |  |
| `runs_rerequestable` | `bool` |  |
| `status` | `string` | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CheckSuite record (throws on error).
$check_suite = $client->CheckSuite()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$check_suite = $client->CheckSuite()->create([
    "owner" => null, // string
    "repo" => null, // string
    "after" => null, // string
    "app" => null, // array
    "before" => null, // string
    "check_runs_url" => null, // string
    "conclusion" => null, // string
    "created_at" => null, // string
    "head_branch" => null, // string
    "head_commit" => null, // array
    "head_sha" => null, // string
    "id" => null, // int
    "latest_check_runs_count" => null, // int
    "node_id" => null, // string
    "pull_requests" => null, // array
    "repository" => null, // array
    "status" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### CheckSuitePreference

Create an instance: `$check_suite_preference = $client->CheckSuitePreference();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_trigger_checks` | `array` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `array` |  |
| `repository` | `array` | Minimal Repository |


### Classroom

Create an instance: `$classroom = $client->Classroom();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the Classroom record (throws on error).
$classroom = $client->Classroom()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Classroom records (throws on error).
$classrooms = $client->Classroom()->list();
```


### ClassroomAcceptedAssignment

Create an instance: `$classroom_accepted_assignment = $client->ClassroomAcceptedAssignment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `array` | A GitHub Classroom assignment |
| `commit_count` | `int` | Count of student commits. |
| `grade` | `string` | Most recent grade. |
| `id` | `int` | Unique identifier of the repository. |
| `passing` | `bool` | Whether a submission passed. |
| `repository` | `array` | A GitHub repository view for Classroom |
| `students` | `array` |  |
| `submitted` | `bool` | Whether an accepted assignment has been submitted. |

#### Example: List

```php
// list() returns an array of ClassroomAcceptedAssignment records (throws on error).
$classroom_accepted_assignments = $client->ClassroomAcceptedAssignment()->list();
```


### ClassroomAssignment

Create an instance: `$classroom_assignment = $client->ClassroomAssignment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `array` | A GitHub Classroom classroom |
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
| `starter_code_repository` | `array` | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | The number of students that have submitted the assignment. |
| `title` | `string` | Assignment title. |
| `type` | `string` | Whether it's a group assignment or individual assignment. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ClassroomAssignment record (throws on error).
$classroom_assignment = $client->ClassroomAssignment()->load(["id" => 1]);
```


### ClassroomAssignmentGrade

Create an instance: `$classroom_assignment_grade = $client->ClassroomAssignmentGrade();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of ClassroomAssignmentGrade records (throws on error).
$classroom_assignment_grades = $client->ClassroomAssignmentGrade()->list();
```


### Clone

Create an instance: `$clone = $client->Clone();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```php
// list() returns an array of Clone records (throws on error).
$clones = $client->Clone()->list();
```


### CodeFrequency

Create an instance: `$code_frequency = $client->CodeFrequency();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of CodeFrequency records (throws on error).
$code_frequencys = $client->CodeFrequency()->list();
```


### CodeFrequencyStat

Create an instance: `$code_frequency_stat = $client->CodeFrequencyStat();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of CodeFrequencyStat records (throws on error).
$code_frequency_stats = $client->CodeFrequencyStat()->list();
```


### CodeOfConduct

Create an instance: `$code_of_conduct = $client->CodeOfConduct();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `html_url` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeOfConduct record (throws on error).
$code_of_conduct = $client->CodeOfConduct()->load(["key" => "key"]);
```

#### Example: List

```php
// list() returns an array of CodeOfConduct records (throws on error).
$code_of_conducts = $client->CodeOfConduct()->list();
```


### CodeScanning

Create an instance: `$code_scanning = $client->CodeScanning();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

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

```php
$code_scanning = $client->CodeScanning()->create([
    "owner" => null, // string
    "repo" => null, // string
    "commit_sha" => null, // string
    "ref" => null, // string
    "sarif" => null, // string
]);
```


### CodeScanningAlert

Create an instance: `$code_scanning_alert = $client->CodeScanningAlert();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_request` | `bool` | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` |  |
| `number` | `int` | The security alert number. |
| `rule` | `array` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `array` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningAlert record (throws on error).
$code_scanning_alert = $client->CodeScanningAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```


### CodeScanningAlertInstance

Create an instance: `$code_scanning_alert_instance = $client->CodeScanningAlertInstance();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `string` | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | Identifies the configuration under which the analysis was executed. |
| `classifications` | `array` | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` |  |
| `environment` | `string` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` |  |
| `location` | `array` | Describe a region within a file for the alert. |
| `message` | `array` |  |
| `ref` | `string` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | State of a code scanning alert. |

#### Example: List

```php
// list() returns an array of CodeScanningAlertInstance records (throws on error).
$code_scanning_alert_instances = $client->CodeScanningAlertInstance()->list();
```


### CodeScanningAlertItem

Create an instance: `$code_scanning_alert_item = $client->CodeScanningAlertItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` |  |
| `number` | `int` | The security alert number. |
| `rule` | `array` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `array` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```php
// list() returns an array of CodeScanningAlertItem records (throws on error).
$code_scanning_alert_items = $client->CodeScanningAlertItem()->list();
```


### CodeScanningAnalysi

Create an instance: `$code_scanning_analysi = $client->CodeScanningAnalysi();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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
| `tool` | `array` |  |
| `url` | `string` | The REST API URL of the analysis resource. |
| `version` | `string` | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Warning generated when processing the analysis |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningAnalysi record (throws on error).
$code_scanning_analysi = $client->CodeScanningAnalysi()->load(["analysis_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of CodeScanningAnalysi records (throws on error).
$code_scanning_analysis = $client->CodeScanningAnalysi()->list();
```


### CodeScanningAnalysisDeletion

Create an instance: `$code_scanning_analysis_deletion = $client->CodeScanningAnalysisDeletion();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CodeScanningAutofix

Create an instance: `$code_scanning_autofix = $client->CodeScanningAutofix();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of an autofix. |
| `started_at` | `string` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | The status of an autofix. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningAutofix record (throws on error).
$code_scanning_autofix = $client->CodeScanningAutofix()->load(["alert_number" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$code_scanning_autofix = $client->CodeScanningAutofix()->create([
    "alert_number" => null, // int
    "owner" => null, // string
    "repo" => null, // string
    "description" => null, // string
    "started_at" => null, // string
    "status" => null, // string
]);
```


### CodeScanningAutofixCommit

Create an instance: `$code_scanning_autofix_commit = $client->CodeScanningAutofixCommit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` | Commit message to be used. |
| `target_ref` | `string` | The Git reference of target branch for the commit. |

#### Example: Create

```php
$code_scanning_autofix_commit = $client->CodeScanningAutofixCommit()->create([
    "alert_id" => null, // int
    "owner" => null, // string
    "repo" => null, // string
]);
```


### CodeScanningCodeqlDatabase

Create an instance: `$code_scanning_codeql_database = $client->CodeScanningCodeqlDatabase();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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
| `uploader` | `array` | A GitHub user. |
| `url` | `string` | The URL at which to download the CodeQL database. |
| `user_view_type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningCodeqlDatabase record (throws on error).
$code_scanning_codeql_database = $client->CodeScanningCodeqlDatabase()->load(["language" => "language", "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of CodeScanningCodeqlDatabase records (throws on error).
$code_scanning_codeql_databases = $client->CodeScanningCodeqlDatabase()->list();
```


### CodeScanningDefaultSetup

Create an instance: `$code_scanning_default_setup = $client->CodeScanningDefaultSetup();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `languages` | `array` | Languages to be analyzed. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `schedule` | `string` | The frequency of the periodic analysis. |
| `state` | `string` | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | Timestamp of latest configuration update. |

#### Example: List

```php
// list() returns an array of CodeScanningDefaultSetup records (throws on error).
$code_scanning_default_setups = $client->CodeScanningDefaultSetup()->list();
```


### CodeScanningOrganizationAlertItem

Create an instance: `$code_scanning_organization_alert_item = $client->CodeScanningOrganizationAlertItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` |  |
| `number` | `int` | The security alert number. |
| `repository` | `array` | A GitHub repository. |
| `rule` | `array` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `array` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```php
// list() returns an array of CodeScanningOrganizationAlertItem records (throws on error).
$code_scanning_organization_alert_items = $client->CodeScanningOrganizationAlertItem()->list();
```


### CodeScanningSarifsStatus

Create an instance: `$code_scanning_sarifs_status = $client->CodeScanningSarifsStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analyses_url` | `string` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `array` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningSarifsStatus record (throws on error).
$code_scanning_sarifs_status = $client->CodeScanningSarifsStatus()->load(["owner" => "owner", "repo" => "repo", "sarif_id" => "sarif_id"]);
```


### CodeScanningVariantAnalysi

Create an instance: `$code_scanning_variant_analysi = $client->CodeScanningVariantAnalysi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions_workflow_run_id` | `int` | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `array` | A GitHub user. |
| `completed_at` | `string` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `array` | A GitHub repository. |
| `created_at` | `string` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | The reason for a failure of the variant analysis. |
| `id` | `int` | The ID of the variant analysis. |
| `language` | `string` | The language targeted by the CodeQL query |
| `query_language` | `string` | The language targeted by the CodeQL query |
| `query_pack` | `string` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | The download url for the query pack. |
| `repositories` | `array` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `array` | List of repository lists to run the query against. |
| `repository_owners` | `array` | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `array` |  |
| `skipped_repositories` | `array` | Information about repositories that were skipped from processing. |
| `status` | `string` |  |
| `updated_at` | `string` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeScanningVariantAnalysi record (throws on error).
$code_scanning_variant_analysi = $client->CodeScanningVariantAnalysi()->load(["codeql_variant_analysis_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$code_scanning_variant_analysi = $client->CodeScanningVariantAnalysi()->create([
    "owner" => null, // string
    "repo" => null, // string
    "actor" => null, // array
    "controller_repo" => null, // array
    "id" => null, // int
    "language" => null, // string
    "query_language" => null, // string
    "query_pack" => null, // string
    "query_pack_url" => null, // string
    "skipped_repositories" => null, // array
    "status" => null, // string
]);
```


### CodeScanningVariantAnalysisRepoTask

Create an instance: `$code_scanning_variant_analysis_repo_task = $client->CodeScanningVariantAnalysisRepoTask();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `owner` | `array` | A GitHub user. |
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

```php
// load() returns the ENTITY — call data_get() for the CodeScanningVariantAnalysisRepoTask record (throws on error).
$code_scanning_variant_analysis_repo_task = $client->CodeScanningVariantAnalysisRepoTask()->load(["codeql_variant_analysis_id" => 1, "owner" => "owner", "repo" => "repo", "repo_name" => "repo_name", "repo_owner" => "repo_owner"]);
```


### CodeSecurity

Create an instance: `$code_security = $client->CodeSecurity();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `string` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `array` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `array` | Feature options for code scanning |
| `created_at` | `string` |  |
| `default_for_new_repos` | `string` | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `array` | Feature options for Automatic dependency submission |
| `description` | `string` | A description of the code security configuration |
| `enforcement` | `string` | The enforcement status for a security configuration |
| `html_url` | `string` | The URL of the configuration |
| `id` | `int` | The ID of the code security configuration |
| `name` | `string` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `array` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |


### CodeSecurityConfiguration

Create an instance: `$code_security_configuration = $client->CodeSecurityConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `advanced_security` | `string` | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `array` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `array` | Feature options for code scanning |
| `code_security` | `string` | The enablement status of GitHub Code Security features. |
| `created_at` | `string` |  |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `array` | Feature options for Automatic dependency submission |
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
| `secret_scanning_delegated_bypass_options` | `array` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `array` | An array of repository IDs to attach the configuration to. |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CodeSecurityConfiguration record (throws on error).
$code_security_configuration = $client->CodeSecurityConfiguration()->load(["id" => 1, "enterprise" => "enterprise"]);
```

#### Example: List

```php
// list() returns an array of CodeSecurityConfiguration records (throws on error).
$code_security_configurations = $client->CodeSecurityConfiguration()->list();
```

#### Example: Create

```php
$code_security_configuration = $client->CodeSecurityConfiguration()->create([
    "enterprise" => null, // string
    "scope" => null, // string
]);
```


### CodeSecurityConfigurationRepository

Create an instance: `$code_security_configuration_repository = $client->CodeSecurityConfigurationRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `repository` | `array` | A GitHub repository. |
| `status` | `string` | The attachment status of the code security configuration on the repository. |

#### Example: List

```php
// list() returns an array of CodeSecurityConfigurationRepository records (throws on error).
$code_security_configuration_repositorys = $client->CodeSecurityConfigurationRepository()->list();
```


### CodeSecurityDefaultConfiguration

Create an instance: `$code_security_default_configuration = $client->CodeSecurityDefaultConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `array` | A code security configuration |
| `default_for_new_repos` | `mixed` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

#### Example: List

```php
// list() returns an array of CodeSecurityDefaultConfiguration records (throws on error).
$code_security_default_configurations = $client->CodeSecurityDefaultConfiguration()->list();
```


### CodeownersError

Create an instance: `$codeowners_error = $client->CodeownersError();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of CodeownersError records (throws on error).
$codeowners_errors = $client->CodeownersError()->list();
```


### Codespace

Create an instance: `$codespace = $client->Codespace();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `bool` | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignees_url` | `string` |  |
| `billable_owner` | `array` | A GitHub user. |
| `blobs_url` | `string` |  |
| `branch` | `string` | Name of the exported branch |
| `branches_url` | `string` |  |
| `client_ip` | `string` | IP for location auto-detection when proxying a request |
| `clone_url` | `string` |  |
| `code_of_conduct` | `array` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `completed_at` | `string` | Completion time of the last export operation |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `cpus` | `int` | How many cores are available to the codespace. |
| `created_at` | `string` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `defaults` | `array` |  |
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
| `git_status` | `array` | Details about the codespace's git repository. |
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
| `license` | `array` |  |
| `location` | `string` | The initally assigned location of a new codespace. |
| `machine` | `array` | A description of the machine powering a codespace. |
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
| `owner` | `array` | A GitHub user. |
| `path` | `string` |  |
| `pending_operation` | `bool` | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `array` |  |
| `prebuild` | `bool` | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | Whether the new repository should be private. |
| `publish_url` | `string` | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` |  |
| `recent_folders` | `array` | Recently opened folders inside the codespace. |
| `ref` | `string` | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` |  |
| `repository` | `array` | Minimal Repository |
| `retention_expires_at` | `string` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` |  |
| `runtime_constraints` | `array` |  |
| `security_and_analysis` | `array` |  |
| `selected_repositories_url` | `string` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `array` | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `array` | The usernames of the organization members whose codespaces be billed to the organization. |
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
| `topics` | `array` |  |
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

```php
// load() returns the ENTITY — call data_get() for the Codespace record (throws on error).
$codespace = $client->Codespace()->load(["id" => "codespace_id"]);
```

#### Example: List

```php
// list() returns an array of Codespace records (throws on error).
$codespaces = $client->Codespace()->list();
```

#### Example: Create

```php
$codespace = $client->Codespace()->create([
    "accepted" => null, // bool
    "archive_url" => null, // string
    "assignees_url" => null, // string
    "billable_owner" => null, // array
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "code_of_conduct" => null, // array
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "cpus" => null, // int
    "created_at" => null, // string
    "defaults" => null, // array
    "deployments_url" => null, // string
    "description" => null, // string
    "downloads_url" => null, // string
    "environment_id" => null, // string
    "events_url" => null, // string
    "fork" => null, // bool
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_status" => null, // array
    "git_tags_url" => null, // string
    "hooks_url" => null, // string
    "idle_timeout_minutes" => null, // int
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "key" => null, // string
    "key_id" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "languages_url" => null, // string
    "last_used_at" => null, // string
    "location" => null, // string
    "machine" => null, // array
    "machines_url" => null, // string
    "memory_in_bytes" => null, // int
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "notifications_url" => null, // string
    "operating_system" => null, // string
    "owner" => null, // array
    "path" => null, // string
    "prebuild" => null, // bool
    "prebuild_availability" => null, // string
    "pulls_url" => null, // string
    "recent_folders" => null, // array
    "releases_url" => null, // string
    "repository" => null, // array
    "selected_usernames" => null, // array
    "stargazers_url" => null, // string
    "start_url" => null, // string
    "statuses_url" => null, // string
    "stop_url" => null, // string
    "storage_in_bytes" => null, // int
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "tags_url" => null, // string
    "teams_url" => null, // string
    "trees_url" => null, // string
    "updated_at" => null, // string
    "visibility" => null, // string
    "web_url" => null, // string
]);
```


### Collaborator

Create an instance: `$collaborator = $client->Collaborator();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `permissions` | `array` |  |
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

```php
// list() returns an array of Collaborator records (throws on error).
$collaborators = $client->Collaborator()->list();
```


### CombinedBillingUsage

Create an instance: `$combined_billing_usage = $client->CombinedBillingUsage();`

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

```php
// load() returns the ENTITY — call data_get() for the CombinedBillingUsage record (throws on error).
$combined_billing_usage = $client->CombinedBillingUsage()->load(["org_id" => "org_id"]);
```


### CombinedCommitStatus

Create an instance: `$combined_commit_status = $client->CombinedCommitStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of CombinedCommitStatus records (throws on error).
$combined_commit_statuss = $client->CombinedCommitStatus()->list();
```


### Commit

Create an instance: `$commit = $client->Commit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `mixed` |  |
| `base` | `string` | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` |  |
| `commit` | `array` |  |
| `commit_message` | `string` | Commit message to use for the merge commit. |
| `committer` | `mixed` |  |
| `files` | `array` |  |
| `head` | `string` | The head to merge. |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `parents` | `array` |  |
| `sha` | `string` |  |
| `stats` | `array` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Commit record (throws on error).
$commit = $client->Commit()->load(["id" => "commit_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Commit records (throws on error).
$commits = $client->Commit()->list();
```

#### Example: Create

```php
$commit = $client->Commit()->create([
    "owner" => null, // string
    "repo" => null, // string
    "author" => null, // mixed
    "base" => null, // string
    "comments_url" => null, // string
    "commit" => null, // array
    "committer" => null, // mixed
    "head" => null, // string
    "html_url" => null, // string
    "node_id" => null, // string
    "parents" => null, // array
    "sha" => null, // string
    "url" => null, // string
]);
```


### CommitActivity

Create an instance: `$commit_activity = $client->CommitActivity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `array` |  |
| `total` | `int` |  |
| `week` | `int` |  |

#### Example: List

```php
// list() returns an array of CommitActivity records (throws on error).
$commit_activitys = $client->CommitActivity()->list();
```


### CommitComment

Create an instance: `$commit_comment = $client->CommitComment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `reactions` | `array` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CommitComment record (throws on error).
$commit_comment = $client->CommitComment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of CommitComment records (throws on error).
$commit_comments = $client->CommitComment()->list();
```

#### Example: Create

```php
$commit_comment = $client->CommitComment()->create([
    "commit_sha" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "author_association" => null, // string
    "body" => null, // string
    "commit_id" => null, // string
    "created_at" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "line" => null, // int
    "node_id" => null, // string
    "path" => null, // string
    "position" => null, // int
    "reactions" => null, // array
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### CommitComparison

Create an instance: `$commit_comparison = $client->CommitComparison();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ahead_by` | `int` |  |
| `base_commit` | `array` | Commit |
| `behind_by` | `int` |  |
| `commits` | `array` |  |
| `diff_url` | `string` |  |
| `files` | `array` |  |
| `html_url` | `string` |  |
| `merge_base_commit` | `array` | Commit |
| `patch_url` | `string` |  |
| `permalink_url` | `string` |  |
| `status` | `string` |  |
| `total_commits` | `int` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CommitComparison record (throws on error).
$commit_comparison = $client->CommitComparison()->load(["basehead" => "basehead", "owner" => "owner", "repo" => "repo"]);
```


### CommunityProfile

Create an instance: `$community_profile = $client->CommunityProfile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code_of_conduct` | `array` | Code of Conduct Simple |
| `code_of_conduct_file` | `array` |  |
| `contributing` | `array` |  |
| `issue_template` | `array` |  |
| `license` | `array` | License Simple |
| `pull_request_template` | `array` |  |
| `readme` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CommunityProfile record (throws on error).
$community_profile = $client->CommunityProfile()->load(["owner" => "owner", "repo" => "repo"]);
```


### ContentFile

Create an instance: `$content_file = $client->ContentFile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `git` | `string` |  |
| `html` | `string` |  |
| `self` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContentFile record (throws on error).
$content_file = $client->ContentFile()->load(["owner" => "owner", "repo" => "repo"]);
```


### ContentTraffic

Create an instance: `$content_traffic = $client->ContentTraffic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `path` | `string` |  |
| `title` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```php
// list() returns an array of ContentTraffic records (throws on error).
$content_traffics = $client->ContentTraffic()->list();
```


### Contributor

Create an instance: `$contributor = $client->Contributor();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` | A GitHub user. |
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
| `weeks` | `array` |  |

#### Example: List

```php
// list() returns an array of Contributor records (throws on error).
$contributors = $client->Contributor()->list();
```


### Copilot

Create an instance: `$copilot = $client->Copilot();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `array` | A GitHub user. |
| `assigning_team` | `mixed` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `array` | A GitHub organization. |
| `pending_cancellation_date` | `string` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `array` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `array` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | **Closing down notice:** This field is no longer relevant and is closing down. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Copilot record (throws on error).
$copilot = $client->Copilot()->load(["org_id" => "org_id", "username" => "username"]);
```

#### Example: List

```php
// list() returns an array of Copilot records (throws on error).
$copilots = $client->Copilot()->list();
```

#### Example: Create

```php
$copilot = $client->Copilot()->create([
    "org_id" => null, // string
    "assignee" => null, // array
    "created_at" => null, // string
    "organization" => null, // array
    "selected_teams" => null, // array
    "selected_usernames" => null, // array
]);
```


### CopilotOrganizationDetail

Create an instance: `$copilot_organization_detail = $client->CopilotOrganizationDetail();`

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

```php
// load() returns the ENTITY — call data_get() for the CopilotOrganizationDetail record (throws on error).
$copilot_organization_detail = $client->CopilotOrganizationDetail()->load(["org_id" => "org_id"]);
```


### CopilotUsageMetricsDay

Create an instance: `$copilot_usage_metrics_day = $client->CopilotUsageMetricsDay();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copilot_dotcom_chat` | `array` | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `array` | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `array` | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `array` | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

#### Example: List

```php
// list() returns an array of CopilotUsageMetricsDay records (throws on error).
$copilot_usage_metrics_days = $client->CopilotUsageMetricsDay()->list();
```


### Credential

Create an instance: `$credential = $client->Credential();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `array` | A list of credentials to be revoked, up to 1000 per request. |

#### Example: Create

```php
$credential = $client->Credential()->create([
    "credentials" => null, // array
]);
```


### CustomProperty

Create an instance: `$custom_property = $client->CustomProperty();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_values` | `array` | An ordered list of the allowed values of the property. |
| `default_value` | `mixed` | Default value of the property |
| `description` | `string` | Short description of the property |
| `properties` | `array` | The array of custom properties to create or update. |
| `property_name` | `string` | The name of the property |
| `required` | `bool` | Whether the property is required. |
| `source_type` | `string` | The source type of the property |
| `url` | `string` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | The type of the value for the property |
| `values_editable_by` | `string` | Who can edit the values of the property |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomProperty record (throws on error).
$custom_property = $client->CustomProperty()->load(["custom_property_name" => "custom_property_name", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of CustomProperty records (throws on error).
$custom_propertys = $client->CustomProperty()->list();
```


### CustomPropertyValue

Create an instance: `$custom_property_value = $client->CustomPropertyValue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `property_name` | `string` | The name of the property |
| `value` | `mixed` | The value assigned to the property |

#### Example: List

```php
// list() returns an array of CustomPropertyValue records (throws on error).
$custom_property_values = $client->CustomPropertyValue()->list();
```


### Dependabot

Create an instance: `$dependabot = $client->Dependabot();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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
| `code_of_conduct` | `array` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `license` | `array` |  |
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
| `owner` | `array` | A GitHub user. |
| `permissions` | `array` |  |
| `private` | `bool` |  |
| `public_members_url` | `string` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository_ids_to_add` | `array` | List of repository IDs to add. |
| `repository_ids_to_remove` | `array` | List of repository IDs to remove. |
| `role_name` | `string` |  |
| `security_and_analysis` | `array` |  |
| `selected_repositories_url` | `string` |  |
| `selected_repository_ids` | `array` | An array of repository ids that can access the organization secret. |
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
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` | Visibility of a secret |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```php
// list() returns an array of Dependabot records (throws on error).
$dependabots = $client->Dependabot()->list();
```


### DependabotAlert

Create an instance: `$dependabot_alert = $client->DependabotAlert();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `string` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `array` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `number` | `int` | The security alert number. |
| `security_advisory` | `array` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `array` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependabotAlert record (throws on error).
$dependabot_alert = $client->DependabotAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of DependabotAlert records (throws on error).
$dependabot_alerts = $client->DependabotAlert()->list();
```


### DependabotAlertWithRepository

Create an instance: `$dependabot_alert_with_repository = $client->DependabotAlertWithRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `string` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `array` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `number` | `int` | The security alert number. |
| `repository` | `array` | A GitHub repository. |
| `security_advisory` | `array` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `array` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```php
// list() returns an array of DependabotAlertWithRepository records (throws on error).
$dependabot_alert_with_repositorys = $client->DependabotAlertWithRepository()->list();
```


### DependabotPublicKey

Create an instance: `$dependabot_public_key = $client->DependabotPublicKey();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependabotPublicKey record (throws on error).
$dependabot_public_key = $client->DependabotPublicKey()->load(["org_id" => "org_id"]);
```


### DependabotRepositoryAccessDetail

Create an instance: `$dependabot_repository_access_detail = $client->DependabotRepositoryAccessDetail();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `owner` | `array` | A GitHub user. |
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

```php
// list() returns an array of DependabotRepositoryAccessDetail records (throws on error).
$dependabot_repository_access_details = $client->DependabotRepositoryAccessDetail()->list();
```


### DependabotSecret

Create an instance: `$dependabot_secret = $client->DependabotSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` | The name of the secret. |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependabotSecret record (throws on error).
$dependabot_secret = $client->DependabotSecret()->load(["id" => "dependabot_secret_id", "owner" => "owner", "repo" => "repo"]);
```


### DependencyGraph

Create an instance: `$dependency_graph = $client->DependencyGraph();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detector` | `array` | A description of the detector used. |
| `job` | `array` |  |
| `manifests` | `array` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `array` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | The repository branch that triggered this snapshot. |
| `scanned` | `string` | The time at which the snapshot was scanned. |
| `sha` | `string` | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | The version of the repository snapshot submission. |

#### Example: Create

```php
$dependency_graph = $client->DependencyGraph()->create([
    "owner" => null, // string
    "repo" => null, // string
    "detector" => null, // array
    "job" => null, // array
    "ref" => null, // string
    "scanned" => null, // string
    "sha" => null, // string
    "version" => null, // int
]);
```


### DependencyGraphDiff

Create an instance: `$dependency_graph_diff = $client->DependencyGraphDiff();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `vulnerabilities` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependencyGraphDiff record (throws on error).
$dependency_graph_diff = $client->DependencyGraphDiff()->load(["basehead" => "basehead", "owner" => "owner", "repo" => "repo"]);
```


### DependencyGraphSpdxSbom

Create an instance: `$dependency_graph_spdx_sbom = $client->DependencyGraphSpdxSbom();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `SPDXID` | `string` | The SPDX identifier for the SPDX document. |
| `comment` | `string` | An optional comment about the SPDX document. |
| `creationInfo` | `array` |  |
| `dataLicense` | `string` | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | The namespace for the SPDX document. |
| `name` | `string` | The name of the SPDX document. |
| `packages` | `array` |  |
| `relationships` | `array` |  |
| `spdxVersion` | `string` | The version of the SPDX specification that this document conforms to. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependencyGraphSpdxSbom record (throws on error).
$dependency_graph_spdx_sbom = $client->DependencyGraphSpdxSbom()->load(["owner" => "owner", "repo" => "repo"]);
```


### DeployKey

Create an instance: `$deploy_key = $client->DeployKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the DeployKey record (throws on error).
$deploy_key = $client->DeployKey()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of DeployKey records (throws on error).
$deploy_keys = $client->DeployKey()->list();
```

#### Example: Create

```php
$deploy_key = $client->DeployKey()->create([
    "owner" => null, // string
    "repo" => null, // string
    "created_at" => null, // string
    "id" => null, // int
    "key" => null, // string
    "read_only" => null, // bool
    "title" => null, // string
    "url" => null, // string
    "verified" => null, // bool
]);
```


### Deployment

Create an instance: `$deployment = $client->Deployment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_merge` | `bool` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | A comment to accompany the deployment review |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
| `description` | `string` | Short description of the deployment. |
| `environment` | `string` | Name for the target deployment environment. |
| `environment_ids` | `array` | The list of environment ids to approve or reject |
| `id` | `int` | Unique identifier of the deployment |
| `node_id` | `string` |  |
| `original_environment` | `string` |  |
| `payload` | `mixed` |  |
| `performed_via_github_app` | `array` | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | The ref to deploy. |
| `repository_url` | `string` |  |
| `required_contexts` | `array` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `string` |  |
| `state` | `string` | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `string` |  |
| `task` | `string` | Parameter to specify a task to execute |
| `transient_environment` | `bool` | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Deployment record (throws on error).
$deployment = $client->Deployment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Deployment records (throws on error).
$deployments = $client->Deployment()->list();
```

#### Example: Create

```php
$deployment = $client->Deployment()->create([
    "owner" => null, // string
    "repo" => null, // string
    "comment" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "description" => null, // string
    "environment" => null, // string
    "environment_ids" => null, // array
    "id" => null, // int
    "node_id" => null, // string
    "payload" => null, // mixed
    "performed_via_github_app" => null, // array
    "ref" => null, // string
    "repository_url" => null, // string
    "sha" => null, // string
    "state" => null, // string
    "statuses_url" => null, // string
    "task" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### DeploymentBranchPolicy

Create an instance: `$deployment_branch_policy = $client->DeploymentBranchPolicy();`

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
| `name` | `string` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `string` |  |
| `type` | `string` | Whether this rule targets a branch or tag. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeploymentBranchPolicy record (throws on error).
$deployment_branch_policy = $client->DeploymentBranchPolicy()->load(["id" => 1, "environment_id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$deployment_branch_policy = $client->DeploymentBranchPolicy()->create([
    "environment_name" => null, // string
    "owner" => null, // string
    "repo" => null, // string
]);
```


### DeploymentProtectionRule

Create an instance: `$deployment_protection_rule = $client->DeploymentProtectionRule();`

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
| `integration_url` | `string` | The URL for the endpoint to get details about the app. |
| `node_id` | `string` | The node ID for the deployment protection rule integration. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeploymentProtectionRule record (throws on error).
$deployment_protection_rule = $client->DeploymentProtectionRule()->load(["id" => 1, "environment_id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$deployment_protection_rule = $client->DeploymentProtectionRule()->create([
    "environment_name" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "id" => null, // int
    "integration_url" => null, // string
    "node_id" => null, // string
    "slug" => null, // string
]);
```


### DeploymentStatus

Create an instance: `$deployment_status = $client->DeploymentStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_inactive` | `bool` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
| `deployment_url` | `string` |  |
| `description` | `string` | A short description of the status. |
| `environment` | `string` | The environment of the deployment that the status is for. |
| `environment_url` | `string` | The URL for accessing your environment. |
| `id` | `int` |  |
| `log_url` | `string` | The URL to associate with this status. |
| `node_id` | `string` |  |
| `performed_via_github_app` | `array` | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | Closing down notice: the URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DeploymentStatus record (throws on error).
$deployment_status = $client->DeploymentStatus()->load(["id" => 1, "deployment_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of DeploymentStatus records (throws on error).
$deployment_statuss = $client->DeploymentStatus()->list();
```

#### Example: Create

```php
$deployment_status = $client->DeploymentStatus()->create([
    "id" => null, // int
    "owner" => null, // string
    "repo" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "deployment_url" => null, // string
    "description" => null, // string
    "node_id" => null, // string
    "performed_via_github_app" => null, // array
    "repository_url" => null, // string
    "state" => null, // string
    "target_url" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### DiffEntry

Create an instance: `$diff_entry = $client->DiffEntry();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of DiffEntry records (throws on error).
$diff_entrys = $client->DiffEntry()->list();
```


### Email

Create an instance: `$email = $client->Email();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `primary` | `bool` |  |
| `verified` | `bool` |  |
| `visibility` | `string` | Denotes whether an email is publicly visible. |

#### Example: List

```php
// list() returns an array of Email records (throws on error).
$emails = $client->Email()->list();
```

#### Example: Create

```php
$email = $client->Email()->create([
]);
```


### Emoji

Create an instance: `$emoji = $client->Emoji();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the Emoji record (throws on error).
$emoji = $client->Emoji()->load(["id" => "emoji_id"]);
```


### EmptyObject

Create an instance: `$empty_object = $client->EmptyObject();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attestations` | `array` |  |
| `enable_debug_logging` | `bool` | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `array` | Array of unique strings. |
| `key_id` | `string` | ID of the key you used to encrypt the secret. |
| `languages` | `array` | CodeQL languages to be analyzed. |
| `name` | `string` | The name of the variable. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `selected_repository_ids` | `array` | An array of repository ids that can access the organization variable. |
| `state` | `string` | The desired state of code scanning default setup. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `use_default` | `bool` | Whether to use the default template or not. |
| `value` | `string` | The value of the variable. |
| `visibility` | `string` | The type of repositories in the organization that can access the variable. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmptyObject record (throws on error).
$empty_object = $client->EmptyObject()->load(["subject_digest" => "subject_digest", "username" => "username"]);
```

#### Example: Create

```php
$empty_object = $client->EmptyObject()->create([
    "org_id" => null, // string
    "encrypted_value" => null, // string
    "key_id" => null, // string
    "name" => null, // string
    "use_default" => null, // bool
    "value" => null, // string
    "visibility" => null, // string
]);
```


### EnterpriseTeam

Create an instance: `$enterprise_team = $client->EnterpriseTeam();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the EnterpriseTeam record (throws on error).
$enterprise_team = $client->EnterpriseTeam()->load(["id" => "enterprise_team_id", "enterprise" => "enterprise"]);
```

#### Example: List

```php
// list() returns an array of EnterpriseTeam records (throws on error).
$enterprise_teams = $client->EnterpriseTeam()->list();
```

#### Example: Create

```php
$enterprise_team = $client->EnterpriseTeam()->create([
    "enterprise" => null, // string
    "created_at" => null, // string
    "group_id" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "members_url" => null, // string
    "name" => null, // string
    "slug" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### EnterpriseTeamMembership

Create an instance: `$enterprise_team_membership = $client->EnterpriseTeamMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Environment

Create an instance: `$environment = $client->Environment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `array` | The type of deployment branch policy for this environment. |
| `html_url` | `string` |  |
| `id` | `int` | The id of the environment. |
| `name` | `string` | The name of the environment. |
| `node_id` | `string` |  |
| `prevent_self_review` | `bool` | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `array` | Built-in deployment protection rules for the environment. |
| `reviewers` | `array` | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` |  |
| `wait_timer` | `int` | The amount of time to delay a job after the job is initially triggered. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Environment record (throws on error).
$environment = $client->Environment()->load(["id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```


### EnvironmentApproval

Create an instance: `$environment_approval = $client->EnvironmentApproval();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | The comment submitted with the deployment review |
| `environments` | `array` | The list of environments that were approved or rejected |
| `state` | `string` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `array` | A GitHub user. |

#### Example: List

```php
// list() returns an array of EnvironmentApproval records (throws on error).
$environment_approvals = $client->EnvironmentApproval()->list();
```


### Event

Create an instance: `$event = $client->Event();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `array` | Actor |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `org` | `array` | Actor |
| `payload` | `array` |  |
| `public` | `bool` |  |
| `repo` | `array` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Event record (throws on error).
$event = $client->Event()->load(["org" => "org", "username" => "username"]);
```

#### Example: List

```php
// list() returns an array of Event records (throws on error).
$events = $client->Event()->list();
```


### Feed

Create an instance: `$feed = $client->Feed();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_actor_url` | `string` |  |
| `current_user_organization_url` | `string` |  |
| `current_user_organization_urls` | `array` |  |
| `current_user_public_url` | `string` |  |
| `current_user_url` | `string` |  |
| `links` | `array` |  |
| `repository_discussions_category_url` | `string` | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` |  |
| `timeline_url` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```php
// list() returns an array of Feed records (throws on error).
$feeds = $client->Feed()->list();
```


### FileCommit

Create an instance: `$file_commit = $client->FileCommit();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` | The author of the file. |
| `branch` | `string` | The branch name. |
| `commit` | `array` |  |
| `committer` | `array` | The person that committed the file. |
| `content` | `array` | The new file content, using Base64 encoding. |
| `message` | `string` | The commit message. |
| `sha` | `string` | **Required if you are updating a file**. |


### Follower

Create an instance: `$follower = $client->Follower();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Follower records (throws on error).
$followers = $client->Follower()->list();
```


### Following

Create an instance: `$following = $client->Following();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Following records (throws on error).
$followings = $client->Following()->list();
```


### FullRepository

Create an instance: `$full_repository = $client->FullRepository();`

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
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether to archive this repository. |
| `assignees_url` | `string` |  |
| `auto_init` | `bool` | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `array` | Code of Conduct Simple |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `license` | `array` | License Simple |
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
| `organization` | `array` | A GitHub user. |
| `owner` | `array` | A GitHub user. |
| `parent` | `array` | A repository on GitHub. |
| `permissions` | `array` |  |
| `private` | `bool` | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `array` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | The size of the repository, in kilobytes. |
| `source` | `array` | A repository on GitHub. |
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
| `template_repository` | `array` | A repository on GitHub. |
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FullRepository record (throws on error).
$full_repository = $client->FullRepository()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$full_repository = $client->FullRepository()->create([
    "archive_url" => null, // string
    "archived" => null, // bool
    "assignees_url" => null, // string
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "clone_url" => null, // string
    "code_of_conduct" => null, // array
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "created_at" => null, // string
    "default_branch" => null, // string
    "deployments_url" => null, // string
    "description" => null, // string
    "disabled" => null, // bool
    "downloads_url" => null, // string
    "events_url" => null, // string
    "fork" => null, // bool
    "forks" => null, // int
    "forks_count" => null, // int
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "git_url" => null, // string
    "github_id" => null, // int
    "has_discussions" => null, // bool
    "has_issues" => null, // bool
    "has_pages" => null, // bool
    "has_projects" => null, // bool
    "has_wiki" => null, // bool
    "homepage" => null, // string
    "hooks_url" => null, // string
    "html_url" => null, // string
    "id" => null, // string
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "language" => null, // string
    "languages_url" => null, // string
    "license" => null, // array
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "mirror_url" => null, // string
    "name" => null, // string
    "network_count" => null, // int
    "node_id" => null, // string
    "notifications_url" => null, // string
    "open_issues" => null, // int
    "open_issues_count" => null, // int
    "organization" => null, // array
    "owner" => null, // array
    "parent" => null, // array
    "permissions" => null, // array
    "private" => null, // bool
    "pulls_url" => null, // string
    "pushed_at" => null, // string
    "releases_url" => null, // string
    "size" => null, // int
    "source" => null, // array
    "ssh_url" => null, // string
    "stargazers_count" => null, // int
    "stargazers_url" => null, // string
    "statuses_url" => null, // string
    "subscribers_count" => null, // int
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "svn_url" => null, // string
    "tags_url" => null, // string
    "teams_url" => null, // string
    "template_repository" => null, // array
    "trees_url" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "watchers" => null, // int
    "watchers_count" => null, // int
]);
```


### Gist

Create an instance: `$gist = $client->Gist();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` | Description of the gist |
| `files` | `array` | Names and content for the files that make up the gist |
| `fork_of` | `array` | Gist |
| `forks` | `array` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `array` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `array` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Gist record (throws on error).
$gist = $client->Gist()->load(["id" => "gist_id"]);
```

#### Example: List

```php
// list() returns an array of Gist records (throws on error).
$gists = $client->Gist()->list();
```

#### Example: Create

```php
$gist = $client->Gist()->create([
    "fork_of" => null, // array
    "owner" => null, // array
]);
```


### GistComment

Create an instance: `$gist_comment = $client->GistComment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `user` | `array` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GistComment record (throws on error).
$gist_comment = $client->GistComment()->load(["id" => 1, "gist_id" => "gist_id"]);
```

#### Example: List

```php
// list() returns an array of GistComment records (throws on error).
$gist_comments = $client->GistComment()->list();
```

#### Example: Create

```php
$gist_comment = $client->GistComment()->create([
    "id" => null, // string
    "author_association" => null, // string
    "avatar_url" => null, // string
    "body" => null, // string
    "created_at" => null, // string
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "gists_url" => null, // string
    "gravatar_id" => null, // string
    "html_url" => null, // string
    "login" => null, // string
    "node_id" => null, // string
    "organizations_url" => null, // string
    "received_events_url" => null, // string
    "repos_url" => null, // string
    "site_admin" => null, // bool
    "starred_url" => null, // string
    "subscriptions_url" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### GistCommit

Create an instance: `$gist_commit = $client->GistCommit();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_status` | `array` |  |
| `committed_at` | `string` |  |
| `id` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |
| `version` | `string` |  |

#### Example: List

```php
// list() returns an array of GistCommit records (throws on error).
$gist_commits = $client->GistCommit()->list();
```


### GistSimple

Create an instance: `$gist_simple = $client->GistSimple();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `int` |  |
| `comments_enabled` | `bool` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `array` |  |
| `fork_of` | `array` | Gist |
| `forks` | `array` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `array` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `array` | A GitHub user. |
| `public` | `bool` |  |
| `truncated` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` |  |

#### Example: List

```php
// list() returns an array of GistSimple records (throws on error).
$gist_simples = $client->GistSimple()->list();
```


### Git

Create an instance: `$git = $client->Git();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GitCommit

Create an instance: `$git_commit = $client->GitCommit();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `array` | Identifying information for the git-user |
| `committer` | `array` | Identifying information for the git-user |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `message` | `string` | Message describing the purpose of the commit |
| `node_id` | `string` |  |
| `parents` | `array` | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | SHA for the commit |
| `signature` | `string` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `array` | The SHA of the tree object this commit points to |
| `url` | `string` |  |
| `verification` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GitCommit record (throws on error).
$git_commit = $client->GitCommit()->load(["id" => "git_commit_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$git_commit = $client->GitCommit()->create([
    "owner" => null, // string
    "repo" => null, // string
    "author" => null, // array
    "committer" => null, // array
    "html_url" => null, // string
    "message" => null, // string
    "node_id" => null, // string
    "parents" => null, // array
    "sha" => null, // string
    "tree" => null, // array
    "url" => null, // string
    "verification" => null, // array
]);
```


### GitRef

Create an instance: `$git_ref = $client->GitRef();`

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
| `id` | `string` |  |
| `node_id` | `string` |  |
| `object` | `array` |  |
| `ref` | `string` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | SHA for the reference |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GitRef record (throws on error).
$git_ref = $client->GitRef()->load(["id" => "git_ref_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$git_ref = $client->GitRef()->create([
    "owner" => null, // string
    "repo" => null, // string
    "node_id" => null, // string
    "object" => null, // array
    "ref" => null, // string
    "sha" => null, // string
    "type" => null, // string
    "url" => null, // string
]);
```


### GitTag

Create an instance: `$git_tag = $client->GitTag();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `message` | `string` | Message describing the purpose of the tag |
| `node_id` | `string` |  |
| `object` | `array` | The SHA of the git object this is tagging. |
| `sha` | `string` |  |
| `tag` | `string` | Name of the tag |
| `tagger` | `array` | An object with information about the individual creating the tag. |
| `type` | `string` | The type of the object we're tagging. |
| `url` | `string` | URL for the tag |
| `verification` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GitTag record (throws on error).
$git_tag = $client->GitTag()->load(["id" => "git_tag_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$git_tag = $client->GitTag()->create([
    "owner" => null, // string
    "repo" => null, // string
    "message" => null, // string
    "node_id" => null, // string
    "object" => null, // array
    "sha" => null, // string
    "tag" => null, // string
    "tagger" => null, // array
    "type" => null, // string
    "url" => null, // string
    "verification" => null, // array
]);
```


### GitTree

Create an instance: `$git_tree = $client->GitTree();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_tree` | `string` | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` |  |
| `sha` | `string` |  |
| `tree` | `array` | Objects specifying a tree structure |
| `truncated` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GitTree record (throws on error).
$git_tree = $client->GitTree()->load(["id" => "git_tree_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$git_tree = $client->GitTree()->create([
    "owner" => null, // string
    "repo" => null, // string
    "sha" => null, // string
    "tree" => null, // array
    "truncated" => null, // bool
]);
```


### Gitignore

Create an instance: `$gitignore = $client->Gitignore();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Gitignore records (throws on error).
$gitignores = $client->Gitignore()->list();
```


### GitignoreTemplate

Create an instance: `$gitignore_template = $client->GitignoreTemplate();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `source` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GitignoreTemplate record (throws on error).
$gitignore_template = $client->GitignoreTemplate()->load(["id" => "gitignore_template_id"]);
```


### GlobalAdvisory

Create an instance: `$global_advisory = $client->GlobalAdvisory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credits` | `array` | The users who contributed to the advisory. |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `array` |  |
| `cvss_severities` | `array` |  |
| `cwes` | `array` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `epss` | `array` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | The URL for the advisory. |
| `id` | `string` |  |
| `identifiers` | `array` |  |
| `nvd_published_at` | `string` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `array` |  |
| `repository_advisory_url` | `string` | The API URL for the repository advisory. |
| `severity` | `string` | The severity of the advisory. |
| `source_code_location` | `string` | The URL of the advisory's source code. |
| `summary` | `string` | A short summary of the advisory. |
| `type` | `string` | The type of advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `array` | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GlobalAdvisory record (throws on error).
$global_advisory = $client->GlobalAdvisory()->load(["id" => "global_advisory_id"]);
```

#### Example: List

```php
// list() returns an array of GlobalAdvisory records (throws on error).
$global_advisorys = $client->GlobalAdvisory()->list();
```


### GpgKey

Create an instance: `$gpg_key = $client->GpgKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `armored_public_key` | `string` | A GPG key in ASCII-armored format. |
| `can_certify` | `bool` |  |
| `can_encrypt_comms` | `bool` |  |
| `can_encrypt_storage` | `bool` |  |
| `can_sign` | `bool` |  |
| `created_at` | `string` |  |
| `emails` | `array` |  |
| `expires_at` | `string` |  |
| `id` | `int` |  |
| `key_id` | `string` |  |
| `name` | `string` | A descriptive name for the new key. |
| `primary_key_id` | `int` |  |
| `public_key` | `string` |  |
| `raw_key` | `string` |  |
| `revoked` | `bool` |  |
| `subkeys` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GpgKey record (throws on error).
$gpg_key = $client->GpgKey()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of GpgKey records (throws on error).
$gpg_keys = $client->GpgKey()->list();
```

#### Example: Create

```php
$gpg_key = $client->GpgKey()->create([
    "armored_public_key" => null, // string
    "can_certify" => null, // bool
    "can_encrypt_comms" => null, // bool
    "can_encrypt_storage" => null, // bool
    "can_sign" => null, // bool
    "created_at" => null, // string
    "emails" => null, // array
    "expires_at" => null, // string
    "id" => null, // int
    "key_id" => null, // string
    "primary_key_id" => null, // int
    "public_key" => null, // string
    "raw_key" => null, // string
    "revoked" => null, // bool
    "subkeys" => null, // array
]);
```


### Hook

Create an instance: `$hook = $client->Hook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `array` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `array` | Configuration object of the webhook |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `array` | Determines what events the hook is triggered for. |
| `id` | `int` | Unique identifier of the webhook. |
| `last_response` | `array` |  |
| `name` | `string` | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` |  |
| `remove_events` | `array` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Hook record (throws on error).
$hook = $client->Hook()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Hook records (throws on error).
$hooks = $client->Hook()->list();
```

#### Example: Create

```php
$hook = $client->Hook()->create([
    "owner" => null, // string
    "repo" => null, // string
    "active" => null, // bool
    "config" => null, // array
    "created_at" => null, // string
    "events" => null, // array
    "id" => null, // int
    "last_response" => null, // array
    "name" => null, // string
    "ping_url" => null, // string
    "test_url" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### HookDelivery

Create an instance: `$hook_delivery = $client->HookDelivery();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the delivery was delivered. |
| `duration` | `float` | Time spent delivering. |
| `event` | `string` | The event that triggered the delivery. |
| `guid` | `string` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Unique identifier of the delivery. |
| `installation_id` | `int` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Whether the delivery is a redelivery. |
| `repository_id` | `int` | The id of the repository associated with this event. |
| `request` | `array` |  |
| `response` | `array` |  |
| `status` | `string` | Description of the status of the attempted delivery |
| `status_code` | `int` | Status code received when delivery was made. |
| `throttled_at` | `string` | Time when the webhook delivery was throttled. |
| `url` | `string` | The URL target of the delivery. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the HookDelivery record (throws on error).
$hook_delivery = $client->HookDelivery()->load(["id" => 1]);
```


### HookDeliveryItem

Create an instance: `$hook_delivery_item = $client->HookDeliveryItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the webhook delivery occurred. |
| `duration` | `float` | Time spent delivering. |
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

```php
// list() returns an array of HookDeliveryItem records (throws on error).
$hook_delivery_items = $client->HookDeliveryItem()->list();
```


### HostedCompute

Create an instance: `$hosted_compute = $client->HostedCompute();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `string` | The hosted compute service the network configuration supports. |
| `created_on` | `string` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | The unique identifier of the network configuration. |
| `name` | `string` | The name of the network configuration. |
| `network_settings_ids` | `array` | The unique identifier of each network settings in the configuration. |

#### Example: List

```php
// list() returns an array of HostedCompute records (throws on error).
$hosted_computes = $client->HostedCompute()->list();
```


### Hovercard

Create an instance: `$hovercard = $client->Hovercard();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `octicon` | `string` |  |

#### Example: List

```php
// list() returns an array of Hovercard records (throws on error).
$hovercards = $client->Hovercard()->list();
```


### Import

Create an instance: `$import = $client->Import();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

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
| `project_choices` | `array` |  |
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

```php
// list() returns an array of Import records (throws on error).
$imports = $client->Import()->list();
```


### Installation

Create an instance: `$installation = $client->Installation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `mixed` |  |
| `app_id` | `int` |  |
| `app_slug` | `string` |  |
| `client_id` | `string` |  |
| `contact_email` | `string` |  |
| `created_at` | `string` |  |
| `events` | `array` |  |
| `has_multiple_single_files` | `bool` |  |
| `html_url` | `string` |  |
| `id` | `int` | The ID of the installation. |
| `permissions` | `array` | The permissions granted to the user access token. |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `array` |  |
| `suspended_at` | `string` |  |
| `suspended_by` | `array` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Installation record (throws on error).
$installation = $client->Installation()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Installation records (throws on error).
$installations = $client->Installation()->list();
```


### InstallationToken

Create an instance: `$installation_token = $client->InstallationToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `permissions` | `array` | The permissions granted to the user access token. |
| `repositories` | `array` | List of repository names that the token should have access to |
| `repository_ids` | `array` | List of repository IDs that the token should have access to |

#### Example: Create

```php
$installation_token = $client->InstallationToken()->create([
    "id" => null, // int
]);
```


### Integration

Create an instance: `$integration = $client->Integration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `array` | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `events` | `array` | The list of events for the GitHub app. |
| `external_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the GitHub app |
| `installations_count` | `int` | The number of installations associated with the GitHub app. |
| `name` | `string` | The name of the GitHub app |
| `node_id` | `string` |  |
| `owner` | `mixed` |  |
| `permissions` | `array` | The set of permissions for the GitHub app |
| `slug` | `string` | The slug name of the GitHub app |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Integration record (throws on error).
$integration = $client->Integration()->load(["app_slug" => "app_slug"]);
```

#### Example: List

```php
// list() returns an array of Integration records (throws on error).
$integrations = $client->Integration()->list();
```

#### Example: Create

```php
$integration = $client->Integration()->create([
    "branch_id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "apps" => null, // array
    "created_at" => null, // string
    "description" => null, // string
    "events" => null, // array
    "external_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "name" => null, // string
    "node_id" => null, // string
    "permissions" => null, // array
    "updated_at" => null, // string
]);
```


### IntegrationInstallation

Create an instance: `$integration_installation = $client->IntegrationInstallation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `mixed` |  |
| `created_at` | `string` |  |
| `id` | `int` | Unique identifier of the request installation. |
| `node_id` | `string` |  |
| `requester` | `array` | A GitHub user. |

#### Example: List

```php
// list() returns an array of IntegrationInstallation records (throws on error).
$integration_installations = $client->IntegrationInstallation()->list();
```


### Interaction

Create an instance: `$interaction = $client->Interaction();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `limit` | `string` |  |
| `origin` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Interaction record (throws on error).
$interaction = $client->Interaction()->load();
```


### InteractionLimit

Create an instance: `$interaction_limit = $client->InteractionLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expires_at` | `string` |  |
| `expiry` | `string` | The duration of the interaction restriction. |
| `limit` | `string` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` |  |


### Issue

Create an instance: `$issue = $client->Issue();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `actor` | `array` | A GitHub user. |
| `after_id` | `int` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `array` | A GitHub user. |
| `assignees` | `array` | Usernames of people to assign this issue to. |
| `assigner` | `array` | A GitHub user. |
| `author_association` | `string` | How the author is associated with the repository. |
| `before_id` | `int` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | Contents of the issue comment |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `array` | A GitHub user. |
| `color` | `string` | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` |  |
| `comments_url` | `string` |  |
| `commit_id` | `string` |  |
| `commit_url` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` | Whether this label comes by default in a new repository. |
| `description` | `string` | Optional description of the label, such as its purpose. |
| `dismissed_review` | `array` |  |
| `draft` | `bool` |  |
| `event` | `string` |  |
| `events_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the issue comment |
| `issue` | `array` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `array` |  |
| `issue_field_values` | `array` |  |
| `issue_id` | `int` | The id of the issue that blocks the current issue |
| `issue_url` | `string` |  |
| `label` | `array` | Issue Event Label |
| `labels` | `array` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` |  |
| `lock_reason` | `string` | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` |  |
| `milestone` | `array` | Issue Event Milestone |
| `name` | `string` | The name of the label. |
| `node_id` | `string` |  |
| `number` | `int` | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `array` | GitHub apps are a new way to extend GitHub. |
| `project_card` | `array` | Issue Event Project Card |
| `pull_request` | `array` |  |
| `reactions` | `array` |  |
| `rename` | `array` | Issue Event Rename |
| `replace_parent` | `bool` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `array` | A repository on GitHub. |
| `repository_url` | `string` |  |
| `requested_reviewer` | `array` | A GitHub user. |
| `requested_team` | `array` | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `array` | A GitHub user. |
| `state` | `string` | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | The reason for the current state |
| `sub_issue_id` | `int` | The id of the sub-issue to add. |
| `sub_issues_summary` | `array` |  |
| `timeline_url` | `string` |  |
| `title` | `string` | Title of the issue |
| `type` | `array` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the issue comment |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Issue record (throws on error).
$issue = $client->Issue()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Issue records (throws on error).
$issues = $client->Issue()->list();
```

#### Example: Create

```php
$issue = $client->Issue()->create([
    "owner" => null, // string
    "repo" => null, // string
    "actor" => null, // array
    "assignee" => null, // array
    "assigner" => null, // array
    "author_association" => null, // string
    "closed_at" => null, // string
    "closed_by" => null, // array
    "comments" => null, // int
    "comments_url" => null, // string
    "commit_id" => null, // string
    "commit_url" => null, // string
    "created_at" => null, // string
    "dismissed_review" => null, // array
    "event" => null, // string
    "events_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "issue" => null, // array
    "issue_dependencies_summary" => null, // array
    "issue_id" => null, // int
    "issue_url" => null, // string
    "label" => null, // array
    "labels" => null, // array
    "labels_url" => null, // string
    "locked" => null, // bool
    "milestone" => null, // array
    "node_id" => null, // string
    "number" => null, // int
    "performed_via_github_app" => null, // array
    "project_card" => null, // array
    "pull_request" => null, // array
    "reactions" => null, // array
    "rename" => null, // array
    "repository" => null, // array
    "repository_url" => null, // string
    "requested_reviewer" => null, // array
    "requested_team" => null, // array
    "review_requester" => null, // array
    "state" => null, // string
    "sub_issue_id" => null, // int
    "sub_issues_summary" => null, // array
    "title" => null, // string
    "type" => null, // array
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### IssueType

Create an instance: `$issue_type = $client->IssueType();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// list() returns an array of IssueType records (throws on error).
$issue_types = $client->IssueType()->list();
```

#### Example: Create

```php
$issue_type = $client->IssueType()->create([
    "org_id" => null, // string
    "description" => null, // string
    "id" => null, // int
    "name" => null, // string
    "node_id" => null, // string
]);
```


### Job

Create an instance: `$job = $client->Job();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `labels` | `array` | Labels for the workflow job. |
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
| `steps` | `array` | Steps in this job. |
| `url` | `string` |  |
| `workflow_name` | `string` | The name of the workflow. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Job record (throws on error).
$job = $client->Job()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```


### Key

Create an instance: `$key = $client->Key();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the Key record (throws on error).
$key = $client->Key()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Key records (throws on error).
$keys = $client->Key()->list();
```

#### Example: Create

```php
$key = $client->Key()->create([
    "created_at" => null, // string
    "id" => null, // int
    "key" => null, // string
    "read_only" => null, // bool
    "title" => null, // string
    "url" => null, // string
    "verified" => null, // bool
]);
```


### Label

Create an instance: `$label = $client->Label();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the Label record (throws on error).
$label = $client->Label()->load(["id" => "label_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Label records (throws on error).
$labels = $client->Label()->list();
```

#### Example: Create

```php
$label = $client->Label()->create([
    "owner" => null, // string
    "repo" => null, // string
    "color" => null, // string
    "default" => null, // bool
    "description" => null, // string
    "id" => null, // int
    "name" => null, // string
    "node_id" => null, // string
    "url" => null, // string
]);
```


### Language

Create an instance: `$language = $client->Language();`

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

```php
// load() returns the ENTITY — call data_get() for the Language record (throws on error).
$language = $client->Language()->load(["owner" => "owner", "repo" => "repo"]);
```


### License

Create an instance: `$license = $client->License();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `conditions` | `array` |  |
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
| `license` | `array` | License Simple |
| `limitations` | `array` |  |
| `links` | `array` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `path` | `string` |  |
| `permissions` | `array` |  |
| `sha` | `string` |  |
| `size` | `int` |  |
| `spdx_id` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the License record (throws on error).
$license = $client->License()->load(["id" => "license_id"]);
```

#### Example: List

```php
// list() returns an array of License records (throws on error).
$licenses = $client->License()->list();
```


### Markdown

Create an instance: `$markdown = $client->Markdown();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `context` | `string` | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | The rendering mode. |
| `text` | `string` | The Markdown text to render in HTML. |

#### Example: Create

```php
$markdown = $client->Markdown()->create([
    "text" => null, // string
]);
```


### MarketplaceListingPlan

Create an instance: `$marketplace_listing_plan = $client->MarketplaceListingPlan();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts_url` | `string` |  |
| `bullets` | `array` |  |
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

```php
// list() returns an array of MarketplaceListingPlan records (throws on error).
$marketplace_listing_plans = $client->MarketplaceListingPlan()->list();
```


### MarketplacePurchase

Create an instance: `$marketplace_purchase = $client->MarketplacePurchase();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `id` | `int` |  |
| `login` | `string` |  |
| `marketplace_pending_change` | `array` |  |
| `marketplace_purchase` | `array` |  |
| `organization_billing_email` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MarketplacePurchase record (throws on error).
$marketplace_purchase = $client->MarketplacePurchase()->load(["account_id" => 1]);
```

#### Example: List

```php
// list() returns an array of MarketplacePurchase records (throws on error).
$marketplace_purchases = $client->MarketplacePurchase()->list();
```


### Member

Create an instance: `$member = $client->Member();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Member records (throws on error).
$members = $client->Member()->list();
```


### Membership

Create an instance: `$membership = $client->Membership();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the Membership record (throws on error).
$membership = $client->Membership()->load(["id" => "membership_id", "enterprise" => "enterprise", "team_id" => "team_id"]);
```

#### Example: List

```php
// list() returns an array of Membership records (throws on error).
$memberships = $client->Membership()->list();
```


### MergedUpstream

Create an instance: `$merged_upstream = $client->MergedUpstream();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_branch` | `string` |  |
| `branch` | `string` | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` |  |
| `message` | `string` |  |

#### Example: Create

```php
$merged_upstream = $client->MergedUpstream()->create([
    "owner" => null, // string
    "repo" => null, // string
    "branch" => null, // string
]);
```


### Meta

Create an instance: `$meta = $client->Meta();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Meta record (throws on error).
$meta = $client->Meta()->load();
```

#### Example: List

```php
// list() returns an array of Meta records (throws on error).
$metas = $client->Meta()->list();
```


### Metaroot

Create an instance: `$metaroot = $client->Metaroot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the Metaroot record (throws on error).
$metaroot = $client->Metaroot()->load();
```


### Migration

Create an instance: `$migration = $client->Migration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

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
| `code_of_conduct` | `array` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `bool` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `bool` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `exclude` | `array` | Exclude related items from being returned in the response in order to improve performance of the request. |
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
| `license` | `array` |  |
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
| `owner` | `array` | A GitHub user. |
| `permissions` | `array` |  |
| `private` | `bool` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories` | `array` | The repositories included in the migration. |
| `role_name` | `string` |  |
| `security_and_analysis` | `array` |  |
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
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Migration record (throws on error).
$migration = $client->Migration()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Migration records (throws on error).
$migrations = $client->Migration()->list();
```

#### Example: Create

```php
$migration = $client->Migration()->create([
    "assignees_url" => null, // string
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "code_of_conduct" => null, // array
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "created_at" => null, // string
    "deployments_url" => null, // string
    "description" => null, // string
    "downloads_url" => null, // string
    "events_url" => null, // string
    "exclude_attachments" => null, // bool
    "exclude_git_data" => null, // bool
    "exclude_metadata" => null, // bool
    "exclude_owner_projects" => null, // bool
    "exclude_releases" => null, // bool
    "fork" => null, // bool
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "guid" => null, // string
    "hooks_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "languages_url" => null, // string
    "lock_repositories" => null, // bool
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "notifications_url" => null, // string
    "org_metadata_only" => null, // bool
    "owner" => null, // array
    "private" => null, // bool
    "pulls_url" => null, // string
    "releases_url" => null, // string
    "repositories" => null, // array
    "stargazers_url" => null, // string
    "state" => null, // string
    "statuses_url" => null, // string
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "tags_url" => null, // string
    "teams_url" => null, // string
    "trees_url" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### Milestone

Create an instance: `$milestone = $client->Milestone();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `closed_at` | `string` |  |
| `closed_issues` | `int` |  |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
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

```php
// load() returns the ENTITY — call data_get() for the Milestone record (throws on error).
$milestone = $client->Milestone()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Milestone records (throws on error).
$milestones = $client->Milestone()->list();
```

#### Example: Create

```php
$milestone = $client->Milestone()->create([
    "owner" => null, // string
    "repo" => null, // string
    "avatar_url" => null, // string
    "closed_at" => null, // string
    "closed_issues" => null, // int
    "created_at" => null, // string
    "creator" => null, // array
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "gists_url" => null, // string
    "gravatar_id" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "labels_url" => null, // string
    "login" => null, // string
    "node_id" => null, // string
    "number" => null, // int
    "open_issues" => null, // int
    "organizations_url" => null, // string
    "received_events_url" => null, // string
    "repos_url" => null, // string
    "site_admin" => null, // bool
    "starred_url" => null, // string
    "subscriptions_url" => null, // string
    "title" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### MinimalRepository

Create an instance: `$minimal_repository = $client->MinimalRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `code_of_conduct` | `array` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `license` | `array` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `int` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `owner` | `array` | A GitHub user. |
| `permissions` | `array` |  |
| `private` | `bool` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `role_name` | `string` |  |
| `security_and_analysis` | `array` |  |
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
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```php
// list() returns an array of MinimalRepository records (throws on error).
$minimal_repositorys = $client->MinimalRepository()->list();
```


### NetworkConfiguration

Create an instance: `$network_configuration = $client->NetworkConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `compute_service` | `string` | The hosted compute service the network configuration supports. |
| `created_on` | `string` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | The unique identifier of the network configuration. |
| `name` | `string` | The name of the network configuration. |
| `network_settings_ids` | `array` | The unique identifier of each network settings in the configuration. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NetworkConfiguration record (throws on error).
$network_configuration = $client->NetworkConfiguration()->load(["id" => "network_configuration_id", "org_id" => "org_id"]);
```

#### Example: Create

```php
$network_configuration = $client->NetworkConfiguration()->create([
    "org_id" => null, // string
    "created_on" => null, // string
    "id" => null, // string
    "name" => null, // string
]);
```


### NetworkSetting

Create an instance: `$network_setting = $client->NetworkSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the network settings resource. |
| `name` | `string` | The name of the network settings resource. |
| `network_configuration_id` | `string` | The identifier of the network configuration that is using this settings resource. |
| `region` | `string` | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | `string` | The subnet this network settings resource is configured for. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NetworkSetting record (throws on error).
$network_setting = $client->NetworkSetting()->load(["id" => "network_setting_id", "org_id" => "org_id"]);
```


### OidcCustomSub

Create an instance: `$oidc_custom_sub = $client->OidcCustomSub();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `array` | Array of unique strings. |

#### Example: List

```php
// list() returns an array of OidcCustomSub records (throws on error).
$oidc_custom_subs = $client->OidcCustomSub()->list();
```


### OidcCustomSubRepo

Create an instance: `$oidc_custom_sub_repo = $client->OidcCustomSubRepo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `array` | Array of unique strings. |
| `use_default` | `bool` | Whether to use the default template or not. |

#### Example: List

```php
// list() returns an array of OidcCustomSubRepo records (throws on error).
$oidc_custom_sub_repos = $client->OidcCustomSubRepo()->list();
```


### Org

Create an instance: `$org = $client->Org();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_tokens_url` | `string` |  |
| `account` | `mixed` |  |
| `action` | `string` | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` |  |
| `app_slug` | `string` |  |
| `artifact_url` | `string` | The URL where the artifact is stored. |
| `async` | `bool` | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `array` |  |
| `attestations_subject_digests` | `array` | Mapping of subject digest to bundles. |
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
| `enterprise_teams_providing_indirect_membership` | `array` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `array` |  |
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
| `organization` | `array` | A GitHub organization. |
| `organization_url` | `string` |  |
| `page_info` | `array` | Information about the current page. |
| `pat_ids` | `array` | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `array` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | The path of the artifact. |
| `permissions` | `array` | The permissions granted to the user access token. |
| `predicate_type` | `string` | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` |  |
| `properties` | `array` | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` |  |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `reason` | `string` | Reason for approving or denying the request. |
| `registry_url` | `string` | The base URL of the artifact registry. |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository` | `string` | The repository name within the registry. |
| `repository_names` | `array` | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | The user's membership type in the organization. |
| `seats` | `int` |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` |  |
| `single_file_paths` | `array` |  |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `space` | `int` |  |
| `state` | `string` | The state of the member in the organization. |
| `status` | `string` | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `array` |  |
| `subject_digests` | `array` | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` |  |
| `suspended_by` | `array` | A GitHub user. |
| `target_id` | `int` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `total_count` | `int` |  |
| `twitter_username` | `string` | The Twitter username of the company. |
| `updated_at` | `string` | The date and time the role was last updated. |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |
| `web_commit_signoff_required` | `bool` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Org record (throws on error).
$org = $client->Org()->load(["id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of Org records (throws on error).
$orgs = $client->Org()->list();
```

#### Example: Create

```php
$org = $client->Org()->create([
    "enablement" => null, // string
    "org" => null, // string
    "security_product" => null, // string
    "access_tokens_url" => null, // string
    "account" => null, // mixed
    "action" => null, // string
    "app_id" => null, // int
    "app_slug" => null, // string
    "avatar_url" => null, // string
    "created_at" => null, // string
    "digest" => null, // string
    "events" => null, // array
    "events_url" => null, // string
    "hooks_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "issues_url" => null, // string
    "login" => null, // string
    "members_url" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "organization" => null, // array
    "organization_url" => null, // string
    "pat_ids" => null, // array
    "permissions" => null, // array
    "private_repos" => null, // int
    "properties" => null, // array
    "public_members_url" => null, // string
    "registry_url" => null, // string
    "repos_url" => null, // string
    "repositories_url" => null, // string
    "repository_names" => null, // array
    "repository_selection" => null, // string
    "role" => null, // string
    "single_file_name" => null, // string
    "space" => null, // int
    "state" => null, // string
    "subject_digests" => null, // array
    "suspended_at" => null, // string
    "suspended_by" => null, // array
    "target_id" => null, // int
    "target_type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### OrgHook

Create an instance: `$org_hook = $client->OrgHook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` | Determines if notifications are sent when the webhook is triggered. |
| `config` | `array` | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `array` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `int` |  |
| `name` | `string` | Must be passed as "web". |
| `ping_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrgHook record (throws on error).
$org_hook = $client->OrgHook()->load(["id" => 1, "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of OrgHook records (throws on error).
$org_hooks = $client->OrgHook()->list();
```

#### Example: Create

```php
$org_hook = $client->OrgHook()->create([
    "id" => null, // string
    "active" => null, // bool
    "config" => null, // array
    "created_at" => null, // string
    "events" => null, // array
    "name" => null, // string
    "ping_url" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### OrgMembership

Create an instance: `$org_membership = $client->OrgMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_membership` | `bool` | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `array` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` |  |
| `organization` | `array` | A GitHub organization. |
| `organization_url` | `string` |  |
| `permissions` | `array` |  |
| `role` | `string` | The user's membership type in the organization. |
| `state` | `string` | The state of the member in the organization. |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrgMembership record (throws on error).
$org_membership = $client->OrgMembership()->load(["id" => "org_membership_id", "org_id" => "org_id"]);
```


### OrgPrivateRegistryConfiguration

Create an instance: `$org_private_registry_configuration = $client->OrgPrivateRegistryConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the OrgPrivateRegistryConfiguration record (throws on error).
$org_private_registry_configuration = $client->OrgPrivateRegistryConfiguration()->load(["org_id" => "org_id", "secret_name" => "secret_name"]);
```


### OrgPrivateRegistryConfigurationWithSelectedRepository

Create an instance: `$org_private_registry_configuration_with_selected_repository = $client->OrgPrivateRegistryConfigurationWithSelectedRepository();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `encrypted_value` | `string` | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` |  |
| `key_id` | `string` | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | The registry type. |
| `selected_repository_ids` | `array` | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Create

```php
$org_private_registry_configuration_with_selected_repository = $client->OrgPrivateRegistryConfigurationWithSelectedRepository()->create([
    "id" => null, // string
    "encrypted_value" => null, // string
    "key_id" => null, // string
    "registry_type" => null, // string
    "url" => null, // string
    "visibility" => null, // string
]);
```


### OrgRepoCustomPropertyValue

Create an instance: `$org_repo_custom_property_value = $client->OrgRepoCustomPropertyValue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `properties` | `array` | List of custom property names and associated values |
| `repository_full_name` | `string` |  |
| `repository_id` | `int` |  |
| `repository_name` | `string` |  |

#### Example: List

```php
// list() returns an array of OrgRepoCustomPropertyValue records (throws on error).
$org_repo_custom_property_values = $client->OrgRepoCustomPropertyValue()->list();
```


### Organization

Create an instance: `$organization = $client->Organization();`


### OrganizationActionsSecret

Create an instance: `$organization_actions_secret = $client->OrganizationActionsSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the OrganizationActionsSecret record (throws on error).
$organization_actions_secret = $client->OrganizationActionsSecret()->load(["id" => "organization_actions_secret_id", "org_id" => "org_id"]);
```


### OrganizationActionsVariable

Create an instance: `$organization_actions_variable = $client->OrganizationActionsVariable();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the OrganizationActionsVariable record (throws on error).
$organization_actions_variable = $client->OrganizationActionsVariable()->load(["id" => "organization_actions_variable_id", "org_id" => "org_id"]);
```


### OrganizationDependabotSecret

Create an instance: `$organization_dependabot_secret = $client->OrganizationDependabotSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the OrganizationDependabotSecret record (throws on error).
$organization_dependabot_secret = $client->OrganizationDependabotSecret()->load(["id" => "organization_dependabot_secret_id", "org_id" => "org_id"]);
```


### OrganizationInvitation

Create an instance: `$organization_invitation = $client->OrganizationInvitation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

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
| `inviter` | `array` | A GitHub user. |
| `login` | `string` |  |
| `node_id` | `string` |  |
| `role` | `string` | The role for the new member. |
| `team_count` | `int` |  |
| `team_ids` | `array` | Specify IDs for the teams you want to invite new members to. |

#### Example: List

```php
// list() returns an array of OrganizationInvitation records (throws on error).
$organization_invitations = $client->OrganizationInvitation()->list();
```

#### Example: Create

```php
$organization_invitation = $client->OrganizationInvitation()->create([
    "org_id" => null, // string
    "created_at" => null, // string
    "id" => null, // int
    "invitation_teams_url" => null, // string
    "inviter" => null, // array
    "login" => null, // string
    "node_id" => null, // string
    "team_count" => null, // int
]);
```


### OrganizationProgrammaticAccessGrant

Create an instance: `$organization_programmatic_access_grant = $client->OrganizationProgrammaticAccessGrant();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_granted_at` | `string` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Date and time when the request for access was created. |
| `id` | `int` | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `array` | A GitHub user. |
| `permissions` | `array` | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Reason for requesting access. |
| `repositories_url` | `string` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Type of repository selection requested. |
| `token_expired` | `bool` | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | The name given to the user's token. |

#### Example: List

```php
// list() returns an array of OrganizationProgrammaticAccessGrant records (throws on error).
$organization_programmatic_access_grants = $client->OrganizationProgrammaticAccessGrant()->list();
```


### OrganizationRole

Create an instance: `$organization_role = $client->OrganizationRole();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `string` | The system role from which this role inherits permissions. |
| `created_at` | `string` | The date and time the role was created. |
| `description` | `string` | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | The unique identifier of the role. |
| `name` | `string` | The name of the role. |
| `organization` | `array` | A GitHub user. |
| `permissions` | `array` | A list of permissions included in this role. |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | The date and time the role was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrganizationRole record (throws on error).
$organization_role = $client->OrganizationRole()->load(["id" => 1, "org_id" => "org_id"]);
```


### OrganizationSecretScanningAlert

Create an instance: `$organization_secret_scanning_alert = $client->OrganizationSecretScanningAlert();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `mixed` | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | The security alert number. |
| `publicly_leaked` | `bool` | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `array` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `array` | A GitHub user. |
| `repository` | `array` | A GitHub repository. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `array` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: List

```php
// list() returns an array of OrganizationSecretScanningAlert records (throws on error).
$organization_secret_scanning_alerts = $client->OrganizationSecretScanningAlert()->list();
```


### OutsideCollaborator

Create an instance: `$outside_collaborator = $client->OutsideCollaborator();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of OutsideCollaborator records (throws on error).
$outside_collaborators = $client->OutsideCollaborator()->list();
```


### Package

Create an instance: `$package = $client->Package();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `container` | `array` |  |
| `created_at` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `docker` | `array` |  |
| `github_id` | `int` | Unique identifier of the package. |
| `html_url` | `string` |  |
| `id` | `string` | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Free storage space (GB) for GitHub Packages. |
| `license` | `string` |  |
| `metadata` | `array` |  |
| `name` | `string` | The name of the package. |
| `owner` | `array` | A GitHub user. |
| `package_html_url` | `string` |  |
| `package_type` | `string` |  |
| `repository` | `array` | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `int` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `int` | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `version_count` | `int` | The number of versions of the package. |
| `visibility` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Package record (throws on error).
$package = $client->Package()->load(["package_name" => "package_name", "package_type" => "package_type"]);
```

#### Example: List

```php
// list() returns an array of Package records (throws on error).
$packages = $client->Package()->list();
```

#### Example: Create

```php
$package = $client->Package()->create([
    "package_id" => null, // string
    "package_name" => null, // string
    "container" => null, // array
    "created_at" => null, // string
    "docker" => null, // array
    "github_id" => null, // int
    "html_url" => null, // string
    "id" => null, // string
    "included_gigabytes_bandwidth" => null, // int
    "metadata" => null, // array
    "name" => null, // string
    "owner" => null, // array
    "package_html_url" => null, // string
    "package_type" => null, // string
    "repository" => null, // array
    "total_gigabytes_bandwidth_used" => null, // int
    "total_paid_gigabytes_bandwidth_used" => null, // int
    "updated_at" => null, // string
    "url" => null, // string
    "version_count" => null, // int
    "visibility" => null, // string
]);
```


### Page

Create an instance: `$page = $client->Page();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_type` | `string` | The process in which the Page will be built. |
| `cname` | `string` | The Pages site's custom domain |
| `custom_404` | `bool` | Whether the Page has a custom 404 page. |
| `html_url` | `string` | The web address the Page can be accessed from. |
| `https_certificate` | `array` |  |
| `https_enforced` | `bool` | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | The state if the domain is verified |
| `public` | `bool` | Whether the GitHub Pages site is publicly visible. |
| `source` | `array` | The source branch and directory used to publish your Pages site. |
| `status` | `string` | The status of the most recent build of the Page. |
| `url` | `string` | The API address for accessing this Page resource. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Page record (throws on error).
$page = $client->Page()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$page = $client->Page()->create([
    "owner" => null, // string
    "repo" => null, // string
    "cname" => null, // string
    "custom_404" => null, // bool
    "https_certificate" => null, // array
    "public" => null, // bool
    "source" => null, // array
    "status" => null, // string
    "url" => null, // string
]);
```


### PageBuild

Create an instance: `$page_build = $client->PageBuild();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `string` |  |
| `created_at` | `string` |  |
| `duration` | `int` |  |
| `error` | `array` |  |
| `id` | `string` |  |
| `pusher` | `array` | A GitHub user. |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PageBuild record (throws on error).
$page_build = $client->PageBuild()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of PageBuild records (throws on error).
$page_builds = $client->PageBuild()->list();
```


### PageBuildStatus

Create an instance: `$page_build_status = $client->PageBuildStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$page_build_status = $client->PageBuildStatus()->create([
    "owner" => null, // string
    "repo" => null, // string
]);
```


### PageDeployment

Create an instance: `$page_deployment = $client->PageDeployment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact_id` | `float` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | A unique string that represents the version of the build for this deployment. |

#### Example: Create

```php
$page_deployment = $client->PageDeployment()->create([
    "owner" => null, // string
    "repo" => null, // string
    "oidc_token" => null, // string
    "pages_build_version" => null, // string
]);
```


### PagesDeploymentStatus

Create an instance: `$pages_deployment_status = $client->PagesDeploymentStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` | The current status of the deployment. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PagesDeploymentStatus record (throws on error).
$pages_deployment_status = $client->PagesDeploymentStatus()->load(["owner" => "owner", "pages_deployment_id" => "pages_deployment_id", "repo" => "repo"]);
```

#### Example: Create

```php
$pages_deployment_status = $client->PagesDeploymentStatus()->create([
    "deployment_id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
]);
```


### PagesHealthCheck

Create an instance: `$pages_health_check = $client->PagesHealthCheck();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_domain` | `array` |  |
| `domain` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PagesHealthCheck record (throws on error).
$pages_health_check = $client->PagesHealthCheck()->load(["owner" => "owner", "repo" => "repo"]);
```


### Participation

Create an instance: `$participation = $client->Participation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `all` | `array` |  |
| `owner` | `array` |  |

#### Example: List

```php
// list() returns an array of Participation records (throws on error).
$participations = $client->Participation()->list();
```


### PendingDeployment

Create an instance: `$pending_deployment = $client->PendingDeployment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_can_approve` | `bool` | Whether the currently authenticated user can approve the deployment |
| `environment` | `array` |  |
| `reviewers` | `array` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | The time that the wait timer began. |

#### Example: List

```php
// list() returns an array of PendingDeployment records (throws on error).
$pending_deployments = $client->PendingDeployment()->list();
```


### PorterAuthor

Create an instance: `$porter_author = $client->PorterAuthor();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// list() returns an array of PorterAuthor records (throws on error).
$porter_authors = $client->PorterAuthor()->list();
```


### PorterLargeFile

Create an instance: `$porter_large_file = $client->PorterLargeFile();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `oid` | `string` |  |
| `path` | `string` |  |
| `ref_name` | `string` |  |
| `size` | `int` |  |

#### Example: List

```php
// list() returns an array of PorterLargeFile records (throws on error).
$porter_large_files = $client->PorterLargeFile()->list();
```


### PrivateRegistry

Create an instance: `$private_registry = $client->PrivateRegistry();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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
| `selected_repository_ids` | `array` | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PrivateRegistry record (throws on error).
$private_registry = $client->PrivateRegistry()->load(["org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of PrivateRegistry records (throws on error).
$private_registrys = $client->PrivateRegistry()->list();
```


### PrivateUser

Create an instance: `$private_user = $client->PrivateUser();`


### Project

Create an instance: `$project = $client->Project();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `body` | `string` | The description of the project. |
| `columns_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
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

```php
// load() returns the ENTITY — call data_get() for the Project record (throws on error).
$project = $client->Project()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Project records (throws on error).
$projects = $client->Project()->list();
```

#### Example: Create

```php
$project = $client->Project()->create([
    "avatar_url" => null, // string
    "columns_url" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "gists_url" => null, // string
    "gravatar_id" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "login" => null, // string
    "node_id" => null, // string
    "number" => null, // int
    "organizations_url" => null, // string
    "owner_url" => null, // string
    "received_events_url" => null, // string
    "repos_url" => null, // string
    "site_admin" => null, // bool
    "starred_url" => null, // string
    "subscriptions_url" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### ProjectCollaboratorPermission

Create an instance: `$project_collaborator_permission = $client->ProjectCollaboratorPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```php
// load() returns the ENTITY — call data_get() for the ProjectCollaboratorPermission record (throws on error).
$project_collaborator_permission = $client->ProjectCollaboratorPermission()->load(["project_id" => 1, "username" => "username"]);
```


### ProjectColumn

Create an instance: `$project_column = $client->ProjectColumn();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the ProjectColumn record (throws on error).
$project_column = $client->ProjectColumn()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of ProjectColumn records (throws on error).
$project_columns = $client->ProjectColumn()->list();
```

#### Example: Create

```php
$project_column = $client->ProjectColumn()->create([
    "id" => null, // int
    "cards_url" => null, // string
    "created_at" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "project_url" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### ProjectsClassic

Create an instance: `$projects_classic = $client->ProjectsClassic();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `permission` | `string` | The permission to grant the collaborator. |
| `position` | `string` | The position of the column in a project. |

#### Example: Create

```php
$projects_classic = $client->ProjectsClassic()->create([
    "column_id" => null, // int
    "position" => null, // string
]);
```


### ProjectsV2

Create an instance: `$projects_v2 = $client->ProjectsV2();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `string` | The time when the project was closed. |
| `created_at` | `string` | The time when the project was created. |
| `creator` | `array` | A GitHub user. |
| `deleted_at` | `string` | The time when the project was deleted. |
| `deleted_by` | `array` | A GitHub user. |
| `description` | `string` | A short description of the project. |
| `id` | `float` | The unique identifier of the project. |
| `is_template` | `bool` | Whether this project is a template |
| `latest_status_update` | `array` | An status update belonging to a project |
| `node_id` | `string` | The node ID of the project. |
| `number` | `int` | The project number. |
| `owner` | `array` | A GitHub user. |
| `public` | `bool` | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | A concise summary of the project. |
| `state` | `string` | The current state of the project. |
| `title` | `string` | The project title. |
| `updated_at` | `string` | The time when the project was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProjectsV2 record (throws on error).
$projects_v2 = $client->ProjectsV2()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of ProjectsV2 records (throws on error).
$projects_v2s = $client->ProjectsV2()->list();
```


### ProjectsV2Field

Create an instance: `$projects_v2_field = $client->ProjectsV2Field();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `array` | Configuration for iteration fields. |
| `created_at` | `string` | The time when the field was created. |
| `data_type` | `string` | The field's data type. |
| `id` | `int` | The unique identifier of the field. |
| `name` | `string` | The name of the field. |
| `node_id` | `string` | The node ID of the field. |
| `options` | `array` | The options available for single select fields. |
| `project_url` | `string` | The API URL of the project that contains the field. |
| `updated_at` | `string` | The time when the field was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProjectsV2Field record (throws on error).
$projects_v2_field = $client->ProjectsV2Field()->load(["id" => 1, "projects_v2_id" => 1]);
```

#### Example: List

```php
// list() returns an array of ProjectsV2Field records (throws on error).
$projects_v2_fields = $client->ProjectsV2Field()->list();
```


### ProjectsV2ItemSimple

Create an instance: `$projects_v2_item_simple = $client->ProjectsV2ItemSimple();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | The type of item to add to the project. |

#### Example: Create

```php
$projects_v2_item_simple = $client->ProjectsV2ItemSimple()->create([
    "project_number" => null, // int
    "id" => null, // int
    "type" => null, // string
]);
```


### ProjectsV2ItemWithContent

Create an instance: `$projects_v2_item_with_content = $client->ProjectsV2ItemWithContent();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | The time when the item was archived. |
| `content` | `array` | The content of the item, which varies by content type. |
| `content_type` | `string` | The type of content tracked in a project item |
| `created_at` | `string` | The time when the item was created. |
| `creator` | `array` | A GitHub user. |
| `fields` | `array` | The fields and values associated with this item. |
| `id` | `float` | The unique identifier of the project item. |
| `item_url` | `string` | The API URL of this item. |
| `node_id` | `string` | The node ID of the project item. |
| `project_url` | `string` | The API URL of the project that contains this item. |
| `updated_at` | `string` | The time when the item was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProjectsV2ItemWithContent record (throws on error).
$projects_v2_item_with_content = $client->ProjectsV2ItemWithContent()->load(["item_id" => 1, "projects_v2_id" => 1]);
```

#### Example: List

```php
// list() returns an array of ProjectsV2ItemWithContent records (throws on error).
$projects_v2_item_with_contents = $client->ProjectsV2ItemWithContent()->list();
```


### ProtectedBranch

Create an instance: `$protected_branch = $client->ProtectedBranch();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `array` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `array` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `array` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `array` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `array` | Enforce all configured restrictions for administrators. |
| `lock_branch` | `array` | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `array` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `array` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `array` | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `array` |  |
| `required_status_checks` | `array` | Status Check Policy |
| `restrictions` | `array` | Branch Restriction Policy |
| `url` | `string` |  |


### ProtectedBranchAdminEnforced

Create an instance: `$protected_branch_admin_enforced = $client->ProtectedBranchAdminEnforced();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProtectedBranchAdminEnforced record (throws on error).
$protected_branch_admin_enforced = $client->ProtectedBranchAdminEnforced()->load(["branch_id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$protected_branch_admin_enforced = $client->ProtectedBranchAdminEnforced()->create([
    "branch_id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "enabled" => null, // bool
    "url" => null, // string
]);
```


### ProtectedBranchPullRequestReview

Create an instance: `$protected_branch_pull_request_review = $client->ProtectedBranchPullRequestReview();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_pull_request_allowances` | `array` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `array` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `bool` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `bool` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `int` | Specifies the number of reviewers required to approve pull requests. |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProtectedBranchPullRequestReview record (throws on error).
$protected_branch_pull_request_review = $client->ProtectedBranchPullRequestReview()->load(["branch_id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```


### PublicMember

Create an instance: `$public_member = $client->PublicMember();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of PublicMember records (throws on error).
$public_members = $client->PublicMember()->list();
```


### Pull

Create an instance: `$pull = $client->Pull();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `additions` | `int` |  |
| `assignee` | `array` | A GitHub user. |
| `assignees` | `array` |  |
| `author_association` | `string` | How the author is associated with the repository. |
| `auto_merge` | `array` | The status of auto merging a pull request. |
| `base` | `array` | The name of the branch you want the changes pulled into. |
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
| `head` | `array` | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` |  |
| `id` | `int` |  |
| `issue` | `int` | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` |  |
| `labels` | `array` |  |
| `links` | `array` |  |
| `locked` | `bool` |  |
| `maintainer_can_modify` | `bool` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` |  |
| `merge_method` | `string` | The merge method to use. |
| `mergeable` | `bool` |  |
| `mergeable_state` | `string` |  |
| `merged` | `bool` |  |
| `merged_at` | `string` |  |
| `merged_by` | `array` | A GitHub user. |
| `message` | `string` |  |
| `milestone` | `array` | A collection of related issues and pull requests. |
| `node_id` | `string` |  |
| `number` | `int` | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` |  |
| `rebaseable` | `bool` |  |
| `requested_reviewers` | `array` |  |
| `requested_teams` | `array` |  |
| `review_comment_url` | `string` |  |
| `review_comments` | `int` |  |
| `review_comments_url` | `string` |  |
| `sha` | `string` | SHA that pull request head must match to allow merge. |
| `state` | `string` | State of this Pull Request. |
| `statuses_url` | `string` |  |
| `title` | `string` | The title of the pull request. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Pull record (throws on error).
$pull = $client->Pull()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Pull records (throws on error).
$pulls = $client->Pull()->list();
```

#### Example: Create

```php
$pull = $client->Pull()->create([
    "owner" => null, // string
    "repo" => null, // string
    "additions" => null, // int
    "assignee" => null, // array
    "author_association" => null, // string
    "auto_merge" => null, // array
    "base" => null, // array
    "body" => null, // string
    "changed_files" => null, // int
    "closed_at" => null, // string
    "comments" => null, // int
    "comments_url" => null, // string
    "commits" => null, // int
    "commits_url" => null, // string
    "created_at" => null, // string
    "deletions" => null, // int
    "diff_url" => null, // string
    "head" => null, // array
    "html_url" => null, // string
    "id" => null, // int
    "issue_url" => null, // string
    "labels" => null, // array
    "links" => null, // array
    "locked" => null, // bool
    "maintainer_can_modify" => null, // bool
    "merge_commit_sha" => null, // string
    "mergeable" => null, // bool
    "mergeable_state" => null, // string
    "merged" => null, // bool
    "merged_at" => null, // string
    "merged_by" => null, // array
    "message" => null, // string
    "milestone" => null, // array
    "node_id" => null, // string
    "number" => null, // int
    "patch_url" => null, // string
    "review_comment_url" => null, // string
    "review_comments" => null, // int
    "review_comments_url" => null, // string
    "sha" => null, // string
    "state" => null, // string
    "statuses_url" => null, // string
    "title" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### PullRequestReview

Create an instance: `$pull_request_review = $client->PullRequestReview();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_association` | `string` | How the author is associated with the repository. |
| `body` | `string` | The text of the review. |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `comments` | `array` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | A commit SHA for the review. |
| `event` | `string` | The review action you want to perform. |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the review |
| `links` | `array` |  |
| `message` | `string` | The message for the pull request review dismissal |
| `node_id` | `string` |  |
| `pull_request_url` | `string` |  |
| `state` | `string` |  |
| `submitted_at` | `string` |  |
| `teams` | `array` |  |
| `user` | `array` | A GitHub user. |
| `users` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PullRequestReview record (throws on error).
$pull_request_review = $client->PullRequestReview()->load(["id" => 1, "owner" => "owner", "pull_id" => 1, "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of PullRequestReview records (throws on error).
$pull_request_reviews = $client->PullRequestReview()->list();
```

#### Example: Create

```php
$pull_request_review = $client->PullRequestReview()->create([
    "owner" => null, // string
    "repo" => null, // string
    "author_association" => null, // string
    "body" => null, // string
    "commit_id" => null, // string
    "event" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "links" => null, // array
    "message" => null, // string
    "node_id" => null, // string
    "pull_request_url" => null, // string
    "state" => null, // string
    "teams" => null, // array
    "user" => null, // array
    "users" => null, // array
]);
```


### PullRequestReviewComment

Create an instance: `$pull_request_review_comment = $client->PullRequestReviewComment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `links` | `array` |  |
| `node_id` | `string` | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | The line of the blob to which the comment applies. |
| `original_position` | `int` | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | The first line of the range for a multi-line comment. |
| `path` | `string` | The relative path of the file to which the comment applies. |
| `position` | `int` | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | URL for the pull request that the review comment belongs to. |
| `reactions` | `array` |  |
| `side` | `string` | The side of the diff to which the comment applies. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the pull request review comment |
| `user` | `array` | A GitHub user. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PullRequestReviewComment record (throws on error).
$pull_request_review_comment = $client->PullRequestReviewComment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of PullRequestReviewComment records (throws on error).
$pull_request_review_comments = $client->PullRequestReviewComment()->list();
```

#### Example: Create

```php
$pull_request_review_comment = $client->PullRequestReviewComment()->create([
    "owner" => null, // string
    "repo" => null, // string
    "author_association" => null, // string
    "body" => null, // string
    "commit_id" => null, // string
    "created_at" => null, // string
    "diff_hunk" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "links" => null, // array
    "node_id" => null, // string
    "original_commit_id" => null, // string
    "path" => null, // string
    "pull_request_review_id" => null, // int
    "pull_request_url" => null, // string
    "reactions" => null, // array
    "updated_at" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### PullRequestSimple

Create an instance: `$pull_request_simple = $client->PullRequestSimple();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewers` | `array` | An array of user `login`s that will be requested. |
| `team_reviewers` | `array` | An array of team `slug`s that will be requested. |

#### Example: Create

```php
$pull_request_simple = $client->PullRequestSimple()->create([
    "owner" => null, // string
    "pull_number" => null, // int
    "repo" => null, // string
]);
```


### RateLimit

Create an instance: `$rate_limit = $client->RateLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate` | `array` |  |
| `resources` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RateLimit record (throws on error).
$rate_limit = $client->RateLimit()->load();
```


### Reaction

Create an instance: `$reaction = $client->Reaction();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

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
| `user` | `array` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: List

```php
// list() returns an array of Reaction records (throws on error).
$reactions = $client->Reaction()->list();
```

#### Example: Create

```php
$reaction = $client->Reaction()->create([
    "discussion_number" => null, // int
    "team_id" => null, // int
    "avatar_url" => null, // string
    "content" => null, // string
    "created_at" => null, // string
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "gists_url" => null, // string
    "gravatar_id" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "login" => null, // string
    "node_id" => null, // string
    "organizations_url" => null, // string
    "received_events_url" => null, // string
    "repos_url" => null, // string
    "site_admin" => null, // bool
    "starred_url" => null, // string
    "subscriptions_url" => null, // string
    "type" => null, // string
    "url" => null, // string
    "user" => null, // array
]);
```


### Referrer

Create an instance: `$referrer = $client->Referrer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `referrer` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```php
// list() returns an array of Referrer records (throws on error).
$referrers = $client->Referrer()->list();
```


### Release

Create an instance: `$release = $client->Release();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assets` | `array` |  |
| `assets_url` | `string` |  |
| `author` | `array` | A GitHub user. |
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
| `reactions` | `array` |  |
| `size` | `int` |  |
| `state` | `string` | State of the release asset. |
| `tag_name` | `string` | The name of the tag. |
| `tarball_url` | `string` |  |
| `target_commitish` | `string` | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` |  |
| `upload_url` | `string` |  |
| `uploader` | `array` | A GitHub user. |
| `url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Release record (throws on error).
$release = $client->Release()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Release records (throws on error).
$releases = $client->Release()->list();
```

#### Example: Create

```php
$release = $client->Release()->create([
    "owner" => null, // string
    "repo" => null, // string
    "assets" => null, // array
    "assets_url" => null, // string
    "author" => null, // array
    "browser_download_url" => null, // string
    "content_type" => null, // string
    "created_at" => null, // string
    "digest" => null, // string
    "download_count" => null, // int
    "draft" => null, // bool
    "html_url" => null, // string
    "id" => null, // int
    "label" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "prerelease" => null, // bool
    "published_at" => null, // string
    "reactions" => null, // array
    "size" => null, // int
    "state" => null, // string
    "tag_name" => null, // string
    "tarball_url" => null, // string
    "target_commitish" => null, // string
    "upload_url" => null, // string
    "uploader" => null, // array
    "url" => null, // string
    "zipball_url" => null, // string
]);
```


### ReleaseAsset

Create an instance: `$release_asset = $client->ReleaseAsset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `uploader` | `array` | A GitHub user. |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ReleaseAsset record (throws on error).
$release_asset = $client->ReleaseAsset()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of ReleaseAsset records (throws on error).
$release_assets = $client->ReleaseAsset()->list();
```

#### Example: Create

```php
$release_asset = $client->ReleaseAsset()->create([
    "id" => null, // int
    "owner" => null, // string
    "repo" => null, // string
    "name" => null, // string
    "avatar_url" => null, // string
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "gists_url" => null, // string
    "gravatar_id" => null, // string
    "html_url" => null, // string
    "login" => null, // string
    "node_id" => null, // string
    "organizations_url" => null, // string
    "received_events_url" => null, // string
    "repos_url" => null, // string
    "site_admin" => null, // bool
    "starred_url" => null, // string
    "subscriptions_url" => null, // string
    "type" => null, // string
    "url" => null, // string
]);
```


### ReleaseNotesContent

Create an instance: `$release_notes_content = $client->ReleaseNotesContent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

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

```php
$release_notes_content = $client->ReleaseNotesContent()->create([
    "owner" => null, // string
    "repo" => null, // string
    "body" => null, // string
    "name" => null, // string
    "tag_name" => null, // string
]);
```


### Remove

Create an instance: `$remove = $client->Remove();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `array` | The GitHub user handles to be removed from the team. |

#### Example: Create

```php
$remove = $client->Remove()->create([
    "enterprise" => null, // string
    "team_id" => null, // string
    "usernames" => null, // array
]);
```


### Repo

Create an instance: `$repo = $client->Repo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
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
| `app` | `array` | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `attestations` | `array` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `build_type` | `string` | The process by which the GitHub Pages site will be built. |
| `bundle` | `array` | The attestation's Sigstore Bundle. |
| `client_payload` | `array` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` |  |
| `cname` | `string` | Specify a custom domain for the repository. |
| `code_search_index_status` | `array` | The status of the code search index for this repository |
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
| `deployment_branch_policy` | `array` | The type of deployment branch policy for this environment. |
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
| `license` | `array` | License Simple |
| `links` | `array` |  |
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
| `owner` | `array` | A GitHub user. |
| `path` | `string` |  |
| `permissions` | `array` |  |
| `private` | `bool` | Whether the repository is private or public. |
| `properties` | `array` | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `array` | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `sha` | `string` |  |
| `size` | `int` | The size of the repository, in kilobytes. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |
| `source` | `mixed` |  |
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
| `team_ids` | `array` | ID of the team or teams to add to the repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `array` |  |
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

```php
// load() returns the ENTITY — call data_get() for the Repo record (throws on error).
$repo = $client->Repo()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Repo records (throws on error).
$repos = $client->Repo()->list();
```

#### Example: Create

```php
$repo = $client->Repo()->create([
    "owner" => null, // string
    "repo" => null, // string
    "app" => null, // array
    "archive_url" => null, // string
    "archived" => null, // bool
    "assignees_url" => null, // string
    "blobs_url" => null, // string
    "branches_url" => null, // string
    "bundle" => null, // array
    "clone_url" => null, // string
    "collaborators_url" => null, // string
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "created_at" => null, // string
    "default_branch" => null, // string
    "deployment_branch_policy" => null, // array
    "deployments_url" => null, // string
    "description" => null, // string
    "disabled" => null, // bool
    "downloads_url" => null, // string
    "enabled" => null, // bool
    "event_type" => null, // string
    "events_url" => null, // string
    "fork" => null, // bool
    "forks" => null, // int
    "forks_count" => null, // int
    "forks_url" => null, // string
    "full_name" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "github_id" => null, // int
    "has_downloads" => null, // bool
    "has_issues" => null, // bool
    "has_pages" => null, // bool
    "has_projects" => null, // bool
    "has_wiki" => null, // bool
    "homepage" => null, // string
    "hooks_url" => null, // string
    "id" => null, // string
    "integration_url" => null, // string
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "language" => null, // string
    "languages_url" => null, // string
    "license" => null, // array
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "mirror_url" => null, // string
    "new_owner" => null, // string
    "node_id" => null, // string
    "notifications_url" => null, // string
    "open_issues" => null, // int
    "open_issues_count" => null, // int
    "permissions" => null, // array
    "private" => null, // bool
    "properties" => null, // array
    "pulls_url" => null, // string
    "pushed_at" => null, // string
    "releases_url" => null, // string
    "slug" => null, // string
    "ssh_url" => null, // string
    "stargazers_count" => null, // int
    "stargazers_url" => null, // string
    "statuses_url" => null, // string
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "svn_url" => null, // string
    "tags_url" => null, // string
    "teams_url" => null, // string
    "trees_url" => null, // string
    "updated_at" => null, // string
    "watchers" => null, // int
    "watchers_count" => null, // int
]);
```


### Repository

Create an instance: `$repository = $client->Repository();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `code_search_index_status` | `array` | The status of the code search index for this repository |
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
| `license` | `array` | License Simple |
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
| `owner` | `array` | A GitHub user. |
| `permissions` | `array` |  |
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
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `bool` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` | Whether to require contributors to sign off on web-based commits |

#### Example: List

```php
// list() returns an array of Repository records (throws on error).
$repositorys = $client->Repository()->list();
```


### RepositoryAdvisory

Create an instance: `$repository_advisory = $client->RepositoryAdvisory();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `mixed` | The author of the advisory. |
| `closed_at` | `string` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `array` | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `array` | A list of users that collaborate on the advisory. |
| `created_at` | `string` | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `array` | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `array` |  |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `array` |  |
| `cvss_severities` | `array` |  |
| `cvss_vector_string` | `string` | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `array` | A list of only the CWE IDs. |
| `cwes` | `array` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `html_url` | `string` | The URL for the advisory. |
| `identifiers` | `array` |  |
| `private_fork` | `mixed` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `mixed` | The publisher of the advisory. |
| `severity` | `string` | The severity of the advisory. |
| `start_private_fork` | `bool` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | The state of the advisory. |
| `submission` | `array` |  |
| `summary` | `string` | A short summary of the advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `array` | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryAdvisory record (throws on error).
$repository_advisory = $client->RepositoryAdvisory()->load(["ghsa_id" => "ghsa_id", "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of RepositoryAdvisory records (throws on error).
$repository_advisorys = $client->RepositoryAdvisory()->list();
```

#### Example: Create

```php
$repository_advisory = $client->RepositoryAdvisory()->create([
    "owner" => null, // string
    "repo" => null, // string
    "author" => null, // mixed
    "closed_at" => null, // string
    "collaborating_teams" => null, // array
    "collaborating_users" => null, // array
    "created_at" => null, // string
    "credits" => null, // array
    "credits_detailed" => null, // array
    "cve_id" => null, // string
    "cvss" => null, // array
    "cwe_ids" => null, // array
    "cwes" => null, // array
    "description" => null, // string
    "ghsa_id" => null, // string
    "html_url" => null, // string
    "identifiers" => null, // array
    "private_fork" => null, // mixed
    "published_at" => null, // string
    "publisher" => null, // mixed
    "severity" => null, // string
    "state" => null, // string
    "submission" => null, // array
    "summary" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "vulnerabilities" => null, // array
    "withdrawn_at" => null, // string
]);
```


### RepositoryCollaboratorPermission

Create an instance: `$repository_collaborator_permission = $client->RepositoryCollaboratorPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `permissions` | `array` |  |
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

```php
// load() returns the ENTITY — call data_get() for the RepositoryCollaboratorPermission record (throws on error).
$repository_collaborator_permission = $client->RepositoryCollaboratorPermission()->load(["owner" => "owner", "repo" => "repo", "username" => "username"]);
```


### RepositoryInvitation

Create an instance: `$repository_invitation = $client->RepositoryInvitation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expired` | `bool` | Whether or not the invitation has expired |
| `html_url` | `string` |  |
| `id` | `int` | Unique identifier of the repository invitation. |
| `invitee` | `array` | A GitHub user. |
| `inviter` | `array` | A GitHub user. |
| `node_id` | `string` |  |
| `permission` | `string` | The permission to grant the collaborator. |
| `permissions` | `string` | The permission associated with the invitation. |
| `repository` | `array` | Minimal Repository |
| `url` | `string` | URL for the repository invitation |

#### Example: List

```php
// list() returns an array of RepositoryInvitation records (throws on error).
$repository_invitations = $client->RepositoryInvitation()->list();
```


### RepositoryRuleDetailed

Create an instance: `$repository_rule_detailed = $client->RepositoryRuleDetailed();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `parameters` | `array` |  |
| `ruleset_id` | `int` |  |
| `ruleset_source` | `string` |  |
| `ruleset_source_type` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryRuleDetailed record (throws on error).
$repository_rule_detailed = $client->RepositoryRuleDetailed()->load(["branch" => "branch", "owner" => "owner", "repo" => "repo"]);
```


### RepositoryRuleset

Create an instance: `$repository_ruleset = $client->RepositoryRuleset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_actors` | `array` | The actors that can bypass the rules in this ruleset |
| `conditions` | `mixed` | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` |  |
| `current_user_can_bypass` | `string` | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | The enforcement level of the ruleset. |
| `id` | `int` | The ID of the ruleset |
| `links` | `array` |  |
| `name` | `string` | The name of the ruleset |
| `node_id` | `string` |  |
| `rules` | `array` | An array of rules within the ruleset. |
| `source` | `string` | The name of the source |
| `source_type` | `string` | The type of the source of the ruleset |
| `target` | `string` | The target of the ruleset |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryRuleset record (throws on error).
$repository_ruleset = $client->RepositoryRuleset()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of RepositoryRuleset records (throws on error).
$repository_rulesets = $client->RepositoryRuleset()->list();
```

#### Example: Create

```php
$repository_ruleset = $client->RepositoryRuleset()->create([
    "org_id" => null, // string
    "enforcement" => null, // string
    "id" => null, // int
    "name" => null, // string
    "source" => null, // string
]);
```


### RepositorySubscription

Create an instance: `$repository_subscription = $client->RepositorySubscription();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the RepositorySubscription record (throws on error).
$repository_subscription = $client->RepositorySubscription()->load(["owner" => "owner", "repo" => "repo"]);
```


### ReviewComment

Create an instance: `$review_comment = $client->ReviewComment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `links` | `array` |  |
| `node_id` | `string` |  |
| `original_commit_id` | `string` |  |
| `original_line` | `int` | The original line of the blob to which the comment applies. |
| `original_position` | `int` |  |
| `original_start_line` | `int` | The original first line of the range for a multi-line comment. |
| `path` | `string` |  |
| `position` | `int` |  |
| `pull_request_review_id` | `int` |  |
| `pull_request_url` | `string` |  |
| `reactions` | `array` |  |
| `side` | `string` | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |

#### Example: List

```php
// list() returns an array of ReviewComment records (throws on error).
$review_comments = $client->ReviewComment()->list();
```


### RuleSuite

Create an instance: `$rule_suite = $client->RuleSuite();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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
| `rule_evaluations` | `array` | Details on the evaluated rules. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RuleSuite record (throws on error).
$rule_suite = $client->RuleSuite()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of RuleSuite records (throws on error).
$rule_suites = $client->RuleSuite()->list();
```


### RulesetVersion

Create an instance: `$ruleset_version = $client->RulesetVersion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `array` | The actor who updated the ruleset |
| `id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: List

```php
// list() returns an array of RulesetVersion records (throws on error).
$ruleset_versions = $client->RulesetVersion()->list();
```


### RulesetVersionWithState

Create an instance: `$ruleset_version_with_state = $client->RulesetVersionWithState();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `array` | The actor who updated the ruleset |
| `state` | `array` | The state of the ruleset version |
| `updated_at` | `string` |  |
| `version_id` | `int` | The ID of the previous version of the ruleset |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RulesetVersionWithState record (throws on error).
$ruleset_version_with_state = $client->RulesetVersionWithState()->load(["ruleset_id" => 1, "version_id" => 1]);
```


### Runner

Create an instance: `$runner = $client->Runner();`

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
| `labels` | `array` |  |
| `name` | `string` | The name of the runner. |
| `os` | `string` | The Operating System of the runner. |
| `runner_group_id` | `int` | The ID of the runner group. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Runner record (throws on error).
$runner = $client->Runner()->load(["id" => 1]);
```


### RunnerApplication

Create an instance: `$runner_application = $client->RunnerApplication();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of RunnerApplication records (throws on error).
$runner_applications = $client->RunnerApplication()->list();
```


### RunnerGroup

Create an instance: `$runner_group = $client->RunnerGroup();`

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
| `hosted_runners_url` | `string` |  |
| `id` | `float` |  |
| `inherited` | `bool` |  |
| `inherited_allows_public_repositories` | `bool` |  |
| `name` | `string` | Name of the runner group. |
| `network_configuration_id` | `string` | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `array` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `array` | List of repository IDs that can access the runner group. |
| `selected_workflows` | `array` | List of workflows the runner group should be allowed to run. |
| `visibility` | `string` | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `bool` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RunnerGroup record (throws on error).
$runner_group = $client->RunnerGroup()->load(["id" => 1, "org_id" => "org_id"]);
```

#### Example: Create

```php
$runner_group = $client->RunnerGroup()->create([
    "org_id" => null, // string
    "allows_public_repositories" => null, // bool
    "default" => null, // bool
    "id" => null, // float
    "inherited" => null, // bool
    "name" => null, // string
    "runners_url" => null, // string
    "visibility" => null, // string
]);
```


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `aliases` | `array` |  |
| `allow_auto_merge` | `bool` |  |
| `allow_forking` | `bool` |  |
| `allow_merge_commit` | `bool` |  |
| `allow_rebase_merge` | `bool` |  |
| `allow_squash_merge` | `bool` |  |
| `archive_url` | `string` |  |
| `archived` | `bool` |  |
| `assignee` | `array` | A GitHub user. |
| `assignees` | `array` |  |
| `assignees_url` | `string` |  |
| `author` | `array` | A GitHub user. |
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
| `commit` | `array` |  |
| `commits_url` | `string` |  |
| `committer` | `array` | Metaproperties for Git author/committer information. |
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
| `issue_dependencies_summary` | `array` |  |
| `issue_events_url` | `string` |  |
| `issue_field_values` | `array` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels` | `array` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_modified_at` | `string` |  |
| `license` | `array` | License Simple |
| `line_numbers` | `array` |  |
| `location` | `string` |  |
| `locked` | `bool` |  |
| `login` | `string` |  |
| `logo_url` | `string` |  |
| `master_branch` | `string` |  |
| `merges_url` | `string` |  |
| `milestone` | `array` | A collection of related issues and pull requests. |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `number` | `int` |  |
| `open_issues` | `int` |  |
| `open_issues_count` | `int` |  |
| `organizations_url` | `string` |  |
| `owner` | `array` | A GitHub user. |
| `parents` | `array` |  |
| `path` | `string` |  |
| `performed_via_github_app` | `array` | GitHub apps are a new way to extend GitHub. |
| `permissions` | `array` |  |
| `private` | `bool` |  |
| `public_gists` | `int` |  |
| `public_repos` | `int` |  |
| `pull_request` | `array` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `array` |  |
| `received_events_url` | `string` |  |
| `related` | `array` |  |
| `released` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository` | `array` | A repository on GitHub. |
| `repository_count` | `int` |  |
| `repository_url` | `string` |  |
| `score` | `float` |  |
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
| `sub_issues_summary` | `array` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `suspended_at` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `text_matches` | `array` |  |
| `timeline_url` | `string` |  |
| `title` | `string` |  |
| `topics` | `array` |  |
| `trees_url` | `string` |  |
| `type` | `array` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `array` | A GitHub user. |
| `user_view_type` | `string` |  |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `int` |  |
| `watchers_count` | `int` |  |
| `web_commit_signoff_required` | `bool` |  |

#### Example: List

```php
// list() returns an array of Search records (throws on error).
$searchs = $client->Search()->list();
```


### SecretScanning

Create an instance: `$secret_scanning = $client->SecretScanning();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_settings` | `array` | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | The updated pattern configuration version. |
| `provider_pattern_settings` | `array` | Pattern settings for provider patterns. |


### SecretScanningAlert

Create an instance: `$secret_scanning_alert = $client->SecretScanningAlert();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `mixed` | Details on the location where the token was initially detected. |
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
| `push_protection_bypass_request_reviewer` | `array` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `array` | A GitHub user. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | An optional comment to resolve an alert. |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `array` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SecretScanningAlert record (throws on error).
$secret_scanning_alert = $client->SecretScanningAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of SecretScanningAlert records (throws on error).
$secret_scanning_alerts = $client->SecretScanningAlert()->list();
```


### SecretScanningLocation

Create an instance: `$secret_scanning_location = $client->SecretScanningLocation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `mixed` |  |
| `type` | `string` | The location type. |

#### Example: List

```php
// list() returns an array of SecretScanningLocation records (throws on error).
$secret_scanning_locations = $client->SecretScanningLocation()->list();
```


### SecretScanningPatternConfiguration

Create an instance: `$secret_scanning_pattern_configuration = $client->SecretScanningPatternConfiguration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_overrides` | `array` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | The version of the entity. |
| `provider_pattern_overrides` | `array` | Overrides for partner patterns. |

#### Example: List

```php
// list() returns an array of SecretScanningPatternConfiguration records (throws on error).
$secret_scanning_pattern_configurations = $client->SecretScanningPatternConfiguration()->list();
```


### SecretScanningPushProtectionBypass

Create an instance: `$secret_scanning_push_protection_bypass = $client->SecretScanningPushProtectionBypass();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expire_at` | `string` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | `string` | The ID of the push protection bypass placeholder. |
| `reason` | `string` | The reason for bypassing push protection. |
| `token_type` | `string` | The token type this bypass is for. |

#### Example: Create

```php
$secret_scanning_push_protection_bypass = $client->SecretScanningPushProtectionBypass()->create([
    "owner" => null, // string
    "repo" => null, // string
    "placeholder_id" => null, // string
]);
```


### SecretScanningScanHistory

Create an instance: `$secret_scanning_scan_history = $client->SecretScanningScanHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backfill_scans` | `array` |  |
| `custom_pattern_backfill_scans` | `array` |  |
| `incremental_scans` | `array` |  |
| `pattern_update_scans` | `array` |  |

#### Example: List

```php
// list() returns an array of SecretScanningScanHistory records (throws on error).
$secret_scanning_scan_historys = $client->SecretScanningScanHistory()->list();
```


### SecurityAdvisory

Create an instance: `$security_advisory = $client->SecurityAdvisory();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```php
$security_advisory = $client->SecurityAdvisory()->create([
    "id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
]);
```


### SelectedAction

Create an instance: `$selected_action = $client->SelectedAction();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `github_owned_allowed` | `bool` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `array` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | Whether actions from GitHub Marketplace verified creators are allowed. |

#### Example: List

```php
// list() returns an array of SelectedAction records (throws on error).
$selected_actions = $client->SelectedAction()->list();
```


### SelfHostedRunner

Create an instance: `$self_hosted_runner = $client->SelfHostedRunner();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled_repositories` | `string` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SelfHostedRunner record (throws on error).
$self_hosted_runner = $client->SelfHostedRunner()->load(["org_id" => "org_id"]);
```


### ShortBlob

Create an instance: `$short_blob = $client->ShortBlob();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | The new blob's content. |
| `encoding` | `string` | The encoding used for `content`. |

#### Example: Create

```php
$short_blob = $client->ShortBlob()->create([
    "owner" => null, // string
    "repo" => null, // string
    "content" => null, // string
]);
```


### ShortBranch

Create an instance: `$short_branch = $client->ShortBranch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` |  |
| `name` | `string` |  |
| `protected` | `bool` |  |
| `protection` | `array` | Branch Protection |
| `protection_url` | `string` |  |

#### Example: List

```php
// list() returns an array of ShortBranch records (throws on error).
$short_branchs = $client->ShortBranch()->list();
```


### SimpleClassroom

Create an instance: `$simple_classroom = $client->SimpleClassroom();`


### SimpleClassroomAssignment

Create an instance: `$simple_classroom_assignment = $client->SimpleClassroomAssignment();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `int` | The number of students that have accepted the assignment. |
| `classroom` | `array` | A GitHub Classroom classroom |
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

```php
// list() returns an array of SimpleClassroomAssignment records (throws on error).
$simple_classroom_assignments = $client->SimpleClassroomAssignment()->list();
```


### SocialAccount

Create an instance: `$social_account = $client->SocialAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_urls` | `array` | Full URLs for the social media profiles to add. |
| `provider` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of SocialAccount records (throws on error).
$social_accounts = $client->SocialAccount()->list();
```

#### Example: Create

```php
$social_account = $client->SocialAccount()->create([
    "account_urls" => null, // array
    "provider" => null, // string
    "url" => null, // string
]);
```


### SshSigningKey

Create an instance: `$ssh_signing_key = $client->SshSigningKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `key` | `string` | The public SSH key to add to your GitHub account. |
| `title` | `string` | A descriptive name for the new key. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SshSigningKey record (throws on error).
$ssh_signing_key = $client->SshSigningKey()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of SshSigningKey records (throws on error).
$ssh_signing_keys = $client->SshSigningKey()->list();
```

#### Example: Create

```php
$ssh_signing_key = $client->SshSigningKey()->create([
    "created_at" => null, // string
    "id" => null, // int
    "key" => null, // string
    "title" => null, // string
]);
```


### Status

Create an instance: `$status = $client->Status();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `context` | `string` | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
| `description` | `string` | A short description of the status. |
| `id` | `int` |  |
| `node_id` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | The target URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of Status records (throws on error).
$statuss = $client->Status()->list();
```

#### Example: Create

```php
$status = $client->Status()->create([
    "id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "avatar_url" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "node_id" => null, // string
    "state" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
]);
```


### StatusCheckPolicy

Create an instance: `$status_check_policy = $client->StatusCheckPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `int` |  |
| `checks` | `array` | The list of status checks to require in order to merge into this branch. |
| `context` | `string` |  |
| `contexts` | `array` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `string` |  |
| `strict` | `bool` | Require branches to be up to date before merging. |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of StatusCheckPolicy records (throws on error).
$status_check_policys = $client->StatusCheckPolicy()->list();
```


### Subscriber

Create an instance: `$subscriber = $client->Subscriber();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of Subscriber records (throws on error).
$subscribers = $client->Subscriber()->list();
```


### Tag

Create an instance: `$tag = $client->Tag();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `array` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `tarball_url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: List

```php
// list() returns an array of Tag records (throws on error).
$tags = $client->Tag()->list();
```


### TagProtection

Create an instance: `$tag_protection = $client->TagProtection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `enabled` | `bool` |  |
| `id` | `int` |  |
| `pattern` | `string` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of TagProtection records (throws on error).
$tag_protections = $client->TagProtection()->list();
```

#### Example: Create

```php
$tag_protection = $client->TagProtection()->create([
    "owner" => null, // string
    "repo" => null, // string
    "pattern" => null, // string
]);
```


### Team

Create an instance: `$team = $client->Team();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
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
| `archive_url` | `string` |  |
| `archived` | `bool` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `assignment` | `string` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `array` | A GitHub user. |
| `avatar_url` | `string` |  |
| `blobs_url` | `string` |  |
| `body` | `string` | The main text of the comment. |
| `body_html` | `string` |  |
| `body_version` | `string` | The current version of the body content. |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `array` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `columns_url` | `string` |  |
| `comments_count` | `int` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` | A GitHub user. |
| `custom_properties` | `array` | The custom properties that were defined for the repository. |
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
| `inviter` | `array` | A GitHub user. |
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
| `license` | `array` | License Simple |
| `login` | `string` |  |
| `maintainers` | `array` | List GitHub usernames for organization members who will become team maintainers. |
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
| `organization` | `array` | Team Organization |
| `organization_permission` | `string` | The organization permission for this project. |
| `organizations_url` | `string` |  |
| `owner` | `array` | A GitHub user. |
| `owner_url` | `string` |  |
| `parent` | `array` | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | The ID of a team to set as the parent team. |
| `permission` | `string` | Permission that the team will have for its repositories |
| `permissions` | `array` |  |
| `pinned` | `bool` | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | The level of privacy this team should have |
| `private` | `bool` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `array` |  |
| `received_events_url` | `string` |  |
| `releases_url` | `string` |  |
| `repo_names` | `array` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` |  |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `role` | `string` | The role of the user in the team. |
| `role_name` | `string` |  |
| `security_and_analysis` | `array` |  |
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
| `topics` | `array` |  |
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

```php
// load() returns the ENTITY — call data_get() for the Team record (throws on error).
$team = $client->Team()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Team records (throws on error).
$teams = $client->Team()->list();
```

#### Example: Create

```php
$team = $client->Team()->create([
    "org_id" => null, // string
    "archive_url" => null, // string
    "archived" => null, // bool
    "assignees_url" => null, // string
    "author" => null, // array
    "avatar_url" => null, // string
    "blobs_url" => null, // string
    "body" => null, // string
    "body_html" => null, // string
    "body_version" => null, // string
    "branches_url" => null, // string
    "clone_url" => null, // string
    "code_of_conduct" => null, // array
    "collaborators_url" => null, // string
    "columns_url" => null, // string
    "comments_count" => null, // int
    "comments_url" => null, // string
    "commits_url" => null, // string
    "compare_url" => null, // string
    "contents_url" => null, // string
    "contributors_url" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "default_branch" => null, // string
    "deployments_url" => null, // string
    "description" => null, // string
    "disabled" => null, // bool
    "discussion_url" => null, // string
    "downloads_url" => null, // string
    "events_url" => null, // string
    "followers_url" => null, // string
    "following_url" => null, // string
    "fork" => null, // bool
    "forks" => null, // int
    "forks_count" => null, // int
    "forks_url" => null, // string
    "full_name" => null, // string
    "gists_url" => null, // string
    "git_commits_url" => null, // string
    "git_refs_url" => null, // string
    "git_tags_url" => null, // string
    "git_url" => null, // string
    "gravatar_id" => null, // string
    "has_downloads" => null, // bool
    "has_issues" => null, // bool
    "has_pages" => null, // bool
    "has_projects" => null, // bool
    "has_wiki" => null, // bool
    "homepage" => null, // string
    "hooks_url" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "invitation_teams_url" => null, // string
    "inviter" => null, // array
    "issue_comment_url" => null, // string
    "issue_events_url" => null, // string
    "issues_url" => null, // string
    "keys_url" => null, // string
    "labels_url" => null, // string
    "language" => null, // string
    "languages_url" => null, // string
    "last_edited_at" => null, // string
    "license" => null, // array
    "login" => null, // string
    "members_count" => null, // int
    "members_url" => null, // string
    "merges_url" => null, // string
    "milestones_url" => null, // string
    "mirror_url" => null, // string
    "name" => null, // string
    "node_id" => null, // string
    "notifications_url" => null, // string
    "number" => null, // int
    "open_issues" => null, // int
    "open_issues_count" => null, // int
    "organization" => null, // array
    "organizations_url" => null, // string
    "owner" => null, // array
    "owner_url" => null, // string
    "parent" => null, // array
    "permission" => null, // string
    "permissions" => null, // array
    "pinned" => null, // bool
    "private" => null, // bool
    "pulls_url" => null, // string
    "pushed_at" => null, // string
    "reactions" => null, // array
    "received_events_url" => null, // string
    "releases_url" => null, // string
    "repos_count" => null, // int
    "repos_url" => null, // string
    "repositories_url" => null, // string
    "role" => null, // string
    "site_admin" => null, // bool
    "size" => null, // int
    "slug" => null, // string
    "ssh_url" => null, // string
    "stargazers_count" => null, // int
    "stargazers_url" => null, // string
    "starred_url" => null, // string
    "state" => null, // string
    "statuses_url" => null, // string
    "subscribers_url" => null, // string
    "subscription_url" => null, // string
    "subscriptions_url" => null, // string
    "svn_url" => null, // string
    "tags_url" => null, // string
    "team_count" => null, // int
    "team_url" => null, // string
    "teams_url" => null, // string
    "title" => null, // string
    "trees_url" => null, // string
    "type" => null, // string
    "updated_at" => null, // string
    "url" => null, // string
    "watchers" => null, // int
    "watchers_count" => null, // int
]);
```


### TeamSimple

Create an instance: `$team_simple = $client->TeamSimple();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```php
// list() returns an array of TeamSimple records (throws on error).
$team_simples = $client->TeamSimple()->list();
```


### Thread

Create an instance: `$thread = $client->Thread();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `last_read_at` | `string` |  |
| `reason` | `string` |  |
| `repository` | `array` | Minimal Repository |
| `subject` | `array` |  |
| `subscription_url` | `string` |  |
| `unread` | `bool` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Thread record (throws on error).
$thread = $client->Thread()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Thread records (throws on error).
$threads = $client->Thread()->list();
```


### ThreadSubscription

Create an instance: `$thread_subscription = $client->ThreadSubscription();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the ThreadSubscription record (throws on error).
$thread_subscription = $client->ThreadSubscription()->load(["id" => 1]);
```


### Topic

Create an instance: `$topic = $client->Topic();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `names` | `array` | An array of topics to add to the repository. |

#### Example: List

```php
// list() returns an array of Topic records (throws on error).
$topics = $client->Topic()->list();
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `string` | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `array` | Mapping of subject digest to bundles. |
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
| `inherited_from` | `array` | Team the user has gotten the role through |
| `location` | `string` | The new location of the user. |
| `login` | `string` |  |
| `name` | `string` | The new name of the user. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `owned_private_repos` | `int` |  |
| `page_info` | `array` | Information about the current page. |
| `plan` | `array` |  |
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
| `subject_digests` | `array` | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` |  |
| `total_private_repos` | `int` |  |
| `twitter_username` | `string` | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |
| `users` | `array` | The username for users |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the User record (throws on error).
$user = $client->User()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```

#### Example: Create

```php
$user = $client->User()->create([
    "branch_id" => null, // string
    "owner" => null, // string
    "repo" => null, // string
    "private_repos" => null, // int
    "space" => null, // int
    "subject_digests" => null, // array
    "users" => null, // array
]);
```


### UserMarketplacePurchase

Create an instance: `$user_marketplace_purchase = $client->UserMarketplacePurchase();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `array` |  |
| `billing_cycle` | `string` |  |
| `free_trial_ends_on` | `string` |  |
| `next_billing_date` | `string` |  |
| `on_free_trial` | `bool` |  |
| `plan` | `array` | Marketplace Listing Plan |
| `unit_count` | `int` |  |
| `updated_at` | `string` |  |

#### Example: List

```php
// list() returns an array of UserMarketplacePurchase records (throws on error).
$user_marketplace_purchases = $client->UserMarketplacePurchase()->list();
```


### View

Create an instance: `$view = $client->View();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `timestamp` | `string` |  |
| `uniques` | `int` |  |

#### Example: List

```php
// list() returns an array of View records (throws on error).
$views = $client->View()->list();
```


### WebhookConfig

Create an instance: `$webhook_config = $client->WebhookConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` |  |
| `secret` | `string` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | The URL to which the payloads will be delivered. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WebhookConfig record (throws on error).
$webhook_config = $client->WebhookConfig()->load();
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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

```php
// load() returns the ENTITY — call data_get() for the Workflow record (throws on error).
$workflow = $client->Workflow()->load(["id" => "workflow_id", "owner" => "owner", "repo" => "repo"]);
```


### WorkflowRun

Create an instance: `$workflow_run = $client->WorkflowRun();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `array` | A GitHub user. |
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
| `head_commit` | `array` | A commit. |
| `head_repository` | `array` | Minimal Repository |
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
| `pull_requests` | `array` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `array` |  |
| `repository` | `array` | Minimal Repository |
| `rerun_url` | `string` | The URL to rerun the workflow run. |
| `run_attempt` | `int` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | The start time of the latest run. |
| `status` | `string` |  |
| `triggering_actor` | `array` | A GitHub user. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL to the workflow run. |
| `workflow_id` | `int` | The ID of the parent workflow. |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkflowRun record (throws on error).
$workflow_run = $client->WorkflowRun()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### Example: Create

```php
$workflow_run = $client->WorkflowRun()->create([
    "owner" => null, // string
    "repo" => null, // string
    "run_id" => null, // int
    "actor" => null, // array
    "artifacts_url" => null, // string
    "cancel_url" => null, // string
    "check_suite_url" => null, // string
    "conclusion" => null, // string
    "created_at" => null, // string
    "display_title" => null, // string
    "event" => null, // string
    "head_branch" => null, // string
    "head_commit" => null, // array
    "head_repository" => null, // array
    "head_sha" => null, // string
    "html_url" => null, // string
    "id" => null, // int
    "jobs_url" => null, // string
    "logs_url" => null, // string
    "node_id" => null, // string
    "path" => null, // string
    "pull_requests" => null, // array
    "repository" => null, // array
    "rerun_url" => null, // string
    "run_number" => null, // int
    "status" => null, // string
    "triggering_actor" => null, // array
    "updated_at" => null, // string
    "url" => null, // string
    "workflow_id" => null, // int
    "workflow_url" => null, // string
]);
```


### WorkflowRunUsage

Create an instance: `$workflow_run_usage = $client->WorkflowRunUsage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `array` |  |
| `UBUNTU` | `array` |  |
| `WINDOWS` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkflowRunUsage record (throws on error).
$workflow_run_usage = $client->WorkflowRunUsage()->load(["owner" => "owner", "repo" => "repo", "run_id" => 1]);
```


### WorkflowUsage

Create an instance: `$workflow_usage = $client->WorkflowUsage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `array` |  |
| `UBUNTU` | `array` |  |
| `WINDOWS` | `array` |  |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WorkflowUsage record (throws on error).
$workflow_usage = $client->WorkflowUsage()->load(["id" => "workflow_usage_id", "owner" => "owner", "repo" => "repo"]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── github_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`github_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$customproperty = $client->CustomProperty();
$customproperty->list();

// $customproperty->data_get() now returns the customproperty data from the last list
// $customproperty->match_get() returns the last match criteria
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
