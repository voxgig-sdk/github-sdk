# Github TypeScript SDK



The TypeScript SDK for the Github API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/github-sdk/releases](https://github.com/voxgig-sdk/github-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { GithubSDK } from '@voxgig-sdk/github'

const client = new GithubSDK({
  apikey: process.env.GITHUB_APIKEY,
})
```

### 2. List action records

`list()` resolves to an array of Action ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const actions = await client.Action().list({ org_id: "example" })

for (const action of actions) {
  console.log(action)
}
```

### 3. Load an action

Action is nested under archive_format, so provide the `archive_format`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const action = await client.Action().load({
    archive_format: 'example_archive_format',
    artifact_id: 1,
    owner: 'example_owner',
    repo: 'example_repo',
  })
  console.log(action)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Action ENTITY (.data() for the record)
const created = await client.Action().create({
  org_id: 'example_org_id',
  access_level: 'example_access_level',
  active_caches_count: 1,
  active_caches_size_in_bytes: 1,
  actor: {},
  allows_public_repositories: true,
  approval_policy: 'example_approval_policy',
  archive_download_url: 'example_archive_download_url',
  archive_url: 'example_archive_url',
  artifacts_url: 'example_artifacts_url',
  assignees_url: 'example_assignees_url',
  badge_url: 'example_badge_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  busy: true,
  cancel_url: 'example_cancel_url',
  check_run_url: 'example_check_run_url',
  check_suite_url: 'example_check_suite_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  completed_at: 'example_completed_at',
  conclusion: 'example_conclusion',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  cpu_cores: 1,
  created_at: 'example_created_at',
  days: 1,
  default: true,
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  display_name: 'example_display_name',
  display_title: 'example_display_title',
  downloads_url: 'example_downloads_url',
  enabled: true,
  enabled_repositories: 'example_enabled_repositories',
  event: 'example_event',
  events_url: 'example_events_url',
  expired: true,
  expires_at: 'example_expires_at',
  fork: true,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  head_branch: 'example_head_branch',
  head_commit: {},
  head_repository: {},
  head_sha: 'example_head_sha',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  image_details: {},
  inherited: true,
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  jobs_url: 'example_jobs_url',
  keys_url: 'example_keys_url',
  labels: [],
  labels_url: 'example_labels_url',
  languages_url: 'example_languages_url',
  logs_url: 'example_logs_url',
  machine_size_details: {},
  memory_gb: 1,
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  name: 'example_name',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  os: 'example_os',
  owner: {},
  path: 'example_path',
  platform: 'example_platform',
  platforms: [],
  private: true,
  public_ip_enabled: true,
  pull_requests: [],
  pulls_url: 'example_pulls_url',
  ref: 'example_ref',
  releases_url: 'example_releases_url',
  repository: {},
  rerun_url: 'example_rerun_url',
  run_id: 1,
  run_number: 1,
  run_url: 'example_run_url',
  run_workflows_from_fork_pull_requests: true,
  runner_group_id: 1,
  runner_group_name: 'example_runner_group_name',
  runner_id: 1,
  runner_name: 'example_runner_name',
  runners: [],
  runners_url: 'example_runners_url',
  selected_repository_ids: [],
  size_gb: 1,
  size_in_bytes: 1,
  source: 'example_source',
  stargazers_url: 'example_stargazers_url',
  started_at: 'example_started_at',
  state: 'example_state',
  status: 'example_status',
  statuses_url: 'example_statuses_url',
  storage_gb: 1,
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  total_count: 1,
  trees_url: 'example_trees_url',
  triggering_actor: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  workflow_id: 1,
  workflow_name: 'example_workflow_name',
  workflow_url: 'example_workflow_url',
})

// Update — the id comes off the returned entity's data()
const updated = await client.Action().update({
  org_id: 'example_org_id',
  repository_id: 1,
})

// Remove
await client.Action().remove({
  hosted_runner_id: 1,
  org_id: 'example_org_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const custompropertys = await client.CustomProperty().list()
  console.log(custompropertys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = GithubSDK.test()

const customproperty = await client.CustomProperty().list()
// customproperty is the entity, populated with mock response data
// — call customproperty.data() for the record itself
console.log(customproperty)
```

You can also use the instance method:

```ts
const client = new GithubSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.CustomProperty()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new GithubSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### GithubSDK

#### Constructor

```ts
new GithubSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Action(data?)` | `ActionEntity` | Create an Action entity instance. |
| `ActionsArtifactAndLogRetention(data?)` | `ActionsArtifactAndLogRetentionEntity` | Create an ActionsArtifactAndLogRetention entity instance. |
| `ActionsCacheList(data?)` | `ActionsCacheListEntity` | Create an ActionsCacheList entity instance. |
| `ActionsCacheUsageByRepository(data?)` | `ActionsCacheUsageByRepositoryEntity` | Create an ActionsCacheUsageByRepository entity instance. |
| `ActionsCacheUsageOrgEnterprise(data?)` | `ActionsCacheUsageOrgEnterpriseEntity` | Create an ActionsCacheUsageOrgEnterprise entity instance. |
| `ActionsForkPrContributorApproval(data?)` | `ActionsForkPrContributorApprovalEntity` | Create an ActionsForkPrContributorApproval entity instance. |
| `ActionsForkPrWorkflowsPrivateRepo(data?)` | `ActionsForkPrWorkflowsPrivateRepoEntity` | Create an ActionsForkPrWorkflowsPrivateRepo entity instance. |
| `ActionsGetDefaultWorkflowPermission(data?)` | `ActionsGetDefaultWorkflowPermissionEntity` | Create an ActionsGetDefaultWorkflowPermission entity instance. |
| `ActionsHostedRunner(data?)` | `ActionsHostedRunnerEntity` | Create an ActionsHostedRunner entity instance. |
| `ActionsHostedRunnerLimit(data?)` | `ActionsHostedRunnerLimitEntity` | Create an ActionsHostedRunnerLimit entity instance. |
| `ActionsOrganizationPermission(data?)` | `ActionsOrganizationPermissionEntity` | Create an ActionsOrganizationPermission entity instance. |
| `ActionsPublicKey(data?)` | `ActionsPublicKeyEntity` | Create an ActionsPublicKey entity instance. |
| `ActionsRepositoryPermission(data?)` | `ActionsRepositoryPermissionEntity` | Create an ActionsRepositoryPermission entity instance. |
| `ActionsSecret(data?)` | `ActionsSecretEntity` | Create an ActionsSecret entity instance. |
| `ActionsVariable(data?)` | `ActionsVariableEntity` | Create an ActionsVariable entity instance. |
| `ActionsWorkflowAccessToRepository(data?)` | `ActionsWorkflowAccessToRepositoryEntity` | Create an ActionsWorkflowAccessToRepository entity instance. |
| `Activity(data?)` | `ActivityEntity` | Create an Activity entity instance. |
| `Add(data?)` | `AddEntity` | Create an Add entity instance. |
| `ApiInsightsRouteStat(data?)` | `ApiInsightsRouteStatEntity` | Create an ApiInsightsRouteStat entity instance. |
| `ApiInsightsSubjectStat(data?)` | `ApiInsightsSubjectStatEntity` | Create an ApiInsightsSubjectStat entity instance. |
| `ApiInsightsSummaryStat(data?)` | `ApiInsightsSummaryStatEntity` | Create an ApiInsightsSummaryStat entity instance. |
| `ApiInsightsTimeStat(data?)` | `ApiInsightsTimeStatEntity` | Create an ApiInsightsTimeStat entity instance. |
| `ApiInsightsUserStat(data?)` | `ApiInsightsUserStatEntity` | Create an ApiInsightsUserStat entity instance. |
| `ApiOverview(data?)` | `ApiOverviewEntity` | Create an ApiOverview entity instance. |
| `App(data?)` | `AppEntity` | Create an App entity instance. |
| `Artifact(data?)` | `ArtifactEntity` | Create an Artifact entity instance. |
| `Assignee(data?)` | `AssigneeEntity` | Create an Assignee entity instance. |
| `AuthenticationToken(data?)` | `AuthenticationTokenEntity` | Create an AuthenticationToken entity instance. |
| `Authorization(data?)` | `AuthorizationEntity` | Create an Authorization entity instance. |
| `Autolink(data?)` | `AutolinkEntity` | Create an Autolink entity instance. |
| `BaseGist(data?)` | `BaseGistEntity` | Create a BaseGist entity instance. |
| `BillingUsageReport(data?)` | `BillingUsageReportEntity` | Create a BillingUsageReport entity instance. |
| `BillingUsageReportUser(data?)` | `BillingUsageReportUserEntity` | Create a BillingUsageReportUser entity instance. |
| `Blob(data?)` | `BlobEntity` | Create a Blob entity instance. |
| `Block(data?)` | `BlockEntity` | Create a Block entity instance. |
| `Branch(data?)` | `BranchEntity` | Create a Branch entity instance. |
| `BranchProtection(data?)` | `BranchProtectionEntity` | Create a BranchProtection entity instance. |
| `BranchRestrictionPolicy(data?)` | `BranchRestrictionPolicyEntity` | Create a BranchRestrictionPolicy entity instance. |
| `BranchShort(data?)` | `BranchShortEntity` | Create a BranchShort entity instance. |
| `BranchWithProtection(data?)` | `BranchWithProtectionEntity` | Create a BranchWithProtection entity instance. |
| `Campaign(data?)` | `CampaignEntity` | Create a Campaign entity instance. |
| `Check(data?)` | `CheckEntity` | Create a Check entity instance. |
| `CheckAnnotation(data?)` | `CheckAnnotationEntity` | Create a CheckAnnotation entity instance. |
| `CheckAutomatedSecurityFix(data?)` | `CheckAutomatedSecurityFixEntity` | Create a CheckAutomatedSecurityFix entity instance. |
| `CheckRun(data?)` | `CheckRunEntity` | Create a CheckRun entity instance. |
| `CheckSuite(data?)` | `CheckSuiteEntity` | Create a CheckSuite entity instance. |
| `CheckSuitePreference(data?)` | `CheckSuitePreferenceEntity` | Create a CheckSuitePreference entity instance. |
| `Classroom(data?)` | `ClassroomEntity` | Create a Classroom entity instance. |
| `ClassroomAcceptedAssignment(data?)` | `ClassroomAcceptedAssignmentEntity` | Create a ClassroomAcceptedAssignment entity instance. |
| `ClassroomAssignment(data?)` | `ClassroomAssignmentEntity` | Create a ClassroomAssignment entity instance. |
| `ClassroomAssignmentGrade(data?)` | `ClassroomAssignmentGradeEntity` | Create a ClassroomAssignmentGrade entity instance. |
| `Clone(data?)` | `CloneEntity` | Create a Clone entity instance. |
| `CodeFrequency(data?)` | `CodeFrequencyEntity` | Create a CodeFrequency entity instance. |
| `CodeFrequencyStat(data?)` | `CodeFrequencyStatEntity` | Create a CodeFrequencyStat entity instance. |
| `CodeOfConduct(data?)` | `CodeOfConductEntity` | Create a CodeOfConduct entity instance. |
| `CodeScanning(data?)` | `CodeScanningEntity` | Create a CodeScanning entity instance. |
| `CodeScanningAlert(data?)` | `CodeScanningAlertEntity` | Create a CodeScanningAlert entity instance. |
| `CodeScanningAlertInstance(data?)` | `CodeScanningAlertInstanceEntity` | Create a CodeScanningAlertInstance entity instance. |
| `CodeScanningAlertItem(data?)` | `CodeScanningAlertItemEntity` | Create a CodeScanningAlertItem entity instance. |
| `CodeScanningAnalysi(data?)` | `CodeScanningAnalysiEntity` | Create a CodeScanningAnalysi entity instance. |
| `CodeScanningAnalysisDeletion(data?)` | `CodeScanningAnalysisDeletionEntity` | Create a CodeScanningAnalysisDeletion entity instance. |
| `CodeScanningAutofix(data?)` | `CodeScanningAutofixEntity` | Create a CodeScanningAutofix entity instance. |
| `CodeScanningAutofixCommit(data?)` | `CodeScanningAutofixCommitEntity` | Create a CodeScanningAutofixCommit entity instance. |
| `CodeScanningCodeqlDatabase(data?)` | `CodeScanningCodeqlDatabaseEntity` | Create a CodeScanningCodeqlDatabase entity instance. |
| `CodeScanningDefaultSetup(data?)` | `CodeScanningDefaultSetupEntity` | Create a CodeScanningDefaultSetup entity instance. |
| `CodeScanningOrganizationAlertItem(data?)` | `CodeScanningOrganizationAlertItemEntity` | Create a CodeScanningOrganizationAlertItem entity instance. |
| `CodeScanningSarifsStatus(data?)` | `CodeScanningSarifsStatusEntity` | Create a CodeScanningSarifsStatus entity instance. |
| `CodeScanningVariantAnalysi(data?)` | `CodeScanningVariantAnalysiEntity` | Create a CodeScanningVariantAnalysi entity instance. |
| `CodeScanningVariantAnalysisRepoTask(data?)` | `CodeScanningVariantAnalysisRepoTaskEntity` | Create a CodeScanningVariantAnalysisRepoTask entity instance. |
| `CodeSecurity(data?)` | `CodeSecurityEntity` | Create a CodeSecurity entity instance. |
| `CodeSecurityConfiguration(data?)` | `CodeSecurityConfigurationEntity` | Create a CodeSecurityConfiguration entity instance. |
| `CodeSecurityConfigurationRepository(data?)` | `CodeSecurityConfigurationRepositoryEntity` | Create a CodeSecurityConfigurationRepository entity instance. |
| `CodeSecurityDefaultConfiguration(data?)` | `CodeSecurityDefaultConfigurationEntity` | Create a CodeSecurityDefaultConfiguration entity instance. |
| `CodeownersError(data?)` | `CodeownersErrorEntity` | Create a CodeownersError entity instance. |
| `Codespace(data?)` | `CodespaceEntity` | Create a Codespace entity instance. |
| `Collaborator(data?)` | `CollaboratorEntity` | Create a Collaborator entity instance. |
| `CombinedBillingUsage(data?)` | `CombinedBillingUsageEntity` | Create a CombinedBillingUsage entity instance. |
| `CombinedCommitStatus(data?)` | `CombinedCommitStatusEntity` | Create a CombinedCommitStatus entity instance. |
| `Commit(data?)` | `CommitEntity` | Create a Commit entity instance. |
| `CommitActivity(data?)` | `CommitActivityEntity` | Create a CommitActivity entity instance. |
| `CommitComment(data?)` | `CommitCommentEntity` | Create a CommitComment entity instance. |
| `CommitComparison(data?)` | `CommitComparisonEntity` | Create a CommitComparison entity instance. |
| `CommunityProfile(data?)` | `CommunityProfileEntity` | Create a CommunityProfile entity instance. |
| `ContentFile(data?)` | `ContentFileEntity` | Create a ContentFile entity instance. |
| `ContentTraffic(data?)` | `ContentTrafficEntity` | Create a ContentTraffic entity instance. |
| `Contributor(data?)` | `ContributorEntity` | Create a Contributor entity instance. |
| `Copilot(data?)` | `CopilotEntity` | Create a Copilot entity instance. |
| `CopilotOrganizationDetail(data?)` | `CopilotOrganizationDetailEntity` | Create a CopilotOrganizationDetail entity instance. |
| `CopilotUsageMetricsDay(data?)` | `CopilotUsageMetricsDayEntity` | Create a CopilotUsageMetricsDay entity instance. |
| `Credential(data?)` | `CredentialEntity` | Create a Credential entity instance. |
| `CustomProperty(data?)` | `CustomPropertyEntity` | Create a CustomProperty entity instance. |
| `CustomPropertyValue(data?)` | `CustomPropertyValueEntity` | Create a CustomPropertyValue entity instance. |
| `Dependabot(data?)` | `DependabotEntity` | Create a Dependabot entity instance. |
| `DependabotAlert(data?)` | `DependabotAlertEntity` | Create a DependabotAlert entity instance. |
| `DependabotAlertWithRepository(data?)` | `DependabotAlertWithRepositoryEntity` | Create a DependabotAlertWithRepository entity instance. |
| `DependabotPublicKey(data?)` | `DependabotPublicKeyEntity` | Create a DependabotPublicKey entity instance. |
| `DependabotRepositoryAccessDetail(data?)` | `DependabotRepositoryAccessDetailEntity` | Create a DependabotRepositoryAccessDetail entity instance. |
| `DependabotSecret(data?)` | `DependabotSecretEntity` | Create a DependabotSecret entity instance. |
| `DependencyGraph(data?)` | `DependencyGraphEntity` | Create a DependencyGraph entity instance. |
| `DependencyGraphDiff(data?)` | `DependencyGraphDiffEntity` | Create a DependencyGraphDiff entity instance. |
| `DependencyGraphSpdxSbom(data?)` | `DependencyGraphSpdxSbomEntity` | Create a DependencyGraphSpdxSbom entity instance. |
| `DeployKey(data?)` | `DeployKeyEntity` | Create a DeployKey entity instance. |
| `Deployment(data?)` | `DeploymentEntity` | Create a Deployment entity instance. |
| `DeploymentBranchPolicy(data?)` | `DeploymentBranchPolicyEntity` | Create a DeploymentBranchPolicy entity instance. |
| `DeploymentProtectionRule(data?)` | `DeploymentProtectionRuleEntity` | Create a DeploymentProtectionRule entity instance. |
| `DeploymentStatus(data?)` | `DeploymentStatusEntity` | Create a DeploymentStatus entity instance. |
| `DiffEntry(data?)` | `DiffEntryEntity` | Create a DiffEntry entity instance. |
| `Email(data?)` | `EmailEntity` | Create an Email entity instance. |
| `Emoji(data?)` | `EmojiEntity` | Create an Emoji entity instance. |
| `EmptyObject(data?)` | `EmptyObjectEntity` | Create an EmptyObject entity instance. |
| `EnterpriseTeam(data?)` | `EnterpriseTeamEntity` | Create an EnterpriseTeam entity instance. |
| `EnterpriseTeamMembership(data?)` | `EnterpriseTeamMembershipEntity` | Create an EnterpriseTeamMembership entity instance. |
| `Environment(data?)` | `EnvironmentEntity` | Create an Environment entity instance. |
| `EnvironmentApproval(data?)` | `EnvironmentApprovalEntity` | Create an EnvironmentApproval entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `Feed(data?)` | `FeedEntity` | Create a Feed entity instance. |
| `FileCommit(data?)` | `FileCommitEntity` | Create a FileCommit entity instance. |
| `Follower(data?)` | `FollowerEntity` | Create a Follower entity instance. |
| `Following(data?)` | `FollowingEntity` | Create a Following entity instance. |
| `FullRepository(data?)` | `FullRepositoryEntity` | Create a FullRepository entity instance. |
| `Gist(data?)` | `GistEntity` | Create a Gist entity instance. |
| `GistComment(data?)` | `GistCommentEntity` | Create a GistComment entity instance. |
| `GistCommit(data?)` | `GistCommitEntity` | Create a GistCommit entity instance. |
| `GistSimple(data?)` | `GistSimpleEntity` | Create a GistSimple entity instance. |
| `Git(data?)` | `GitEntity` | Create a Git entity instance. |
| `GitCommit(data?)` | `GitCommitEntity` | Create a GitCommit entity instance. |
| `GitRef(data?)` | `GitRefEntity` | Create a GitRef entity instance. |
| `GitTag(data?)` | `GitTagEntity` | Create a GitTag entity instance. |
| `GitTree(data?)` | `GitTreeEntity` | Create a GitTree entity instance. |
| `Gitignore(data?)` | `GitignoreEntity` | Create a Gitignore entity instance. |
| `GitignoreTemplate(data?)` | `GitignoreTemplateEntity` | Create a GitignoreTemplate entity instance. |
| `GlobalAdvisory(data?)` | `GlobalAdvisoryEntity` | Create a GlobalAdvisory entity instance. |
| `GpgKey(data?)` | `GpgKeyEntity` | Create a GpgKey entity instance. |
| `Hook(data?)` | `HookEntity` | Create a Hook entity instance. |
| `HookDelivery(data?)` | `HookDeliveryEntity` | Create a HookDelivery entity instance. |
| `HookDeliveryItem(data?)` | `HookDeliveryItemEntity` | Create a HookDeliveryItem entity instance. |
| `HostedCompute(data?)` | `HostedComputeEntity` | Create a HostedCompute entity instance. |
| `Hovercard(data?)` | `HovercardEntity` | Create a Hovercard entity instance. |
| `Import(data?)` | `ImportEntity` | Create an Import entity instance. |
| `Installation(data?)` | `InstallationEntity` | Create an Installation entity instance. |
| `InstallationToken(data?)` | `InstallationTokenEntity` | Create an InstallationToken entity instance. |
| `Integration(data?)` | `IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationInstallation(data?)` | `IntegrationInstallationEntity` | Create an IntegrationInstallation entity instance. |
| `Interaction(data?)` | `InteractionEntity` | Create an Interaction entity instance. |
| `InteractionLimit(data?)` | `InteractionLimitEntity` | Create an InteractionLimit entity instance. |
| `Issue(data?)` | `IssueEntity` | Create an Issue entity instance. |
| `IssueType(data?)` | `IssueTypeEntity` | Create an IssueType entity instance. |
| `Job(data?)` | `JobEntity` | Create a Job entity instance. |
| `Key(data?)` | `KeyEntity` | Create a Key entity instance. |
| `Label(data?)` | `LabelEntity` | Create a Label entity instance. |
| `Language(data?)` | `LanguageEntity` | Create a Language entity instance. |
| `License(data?)` | `LicenseEntity` | Create a License entity instance. |
| `Markdown(data?)` | `MarkdownEntity` | Create a Markdown entity instance. |
| `MarketplaceListingPlan(data?)` | `MarketplaceListingPlanEntity` | Create a MarketplaceListingPlan entity instance. |
| `MarketplacePurchase(data?)` | `MarketplacePurchaseEntity` | Create a MarketplacePurchase entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `Membership(data?)` | `MembershipEntity` | Create a Membership entity instance. |
| `MergedUpstream(data?)` | `MergedUpstreamEntity` | Create a MergedUpstream entity instance. |
| `Meta(data?)` | `MetaEntity` | Create a Meta entity instance. |
| `Metaroot(data?)` | `MetarootEntity` | Create a Metaroot entity instance. |
| `Migration(data?)` | `MigrationEntity` | Create a Migration entity instance. |
| `Milestone(data?)` | `MilestoneEntity` | Create a Milestone entity instance. |
| `MinimalRepository(data?)` | `MinimalRepositoryEntity` | Create a MinimalRepository entity instance. |
| `NetworkConfiguration(data?)` | `NetworkConfigurationEntity` | Create a NetworkConfiguration entity instance. |
| `NetworkSetting(data?)` | `NetworkSettingEntity` | Create a NetworkSetting entity instance. |
| `OidcCustomSub(data?)` | `OidcCustomSubEntity` | Create an OidcCustomSub entity instance. |
| `OidcCustomSubRepo(data?)` | `OidcCustomSubRepoEntity` | Create an OidcCustomSubRepo entity instance. |
| `Org(data?)` | `OrgEntity` | Create an Org entity instance. |
| `OrgHook(data?)` | `OrgHookEntity` | Create an OrgHook entity instance. |
| `OrgMembership(data?)` | `OrgMembershipEntity` | Create an OrgMembership entity instance. |
| `OrgPrivateRegistryConfiguration(data?)` | `OrgPrivateRegistryConfigurationEntity` | Create an OrgPrivateRegistryConfiguration entity instance. |
| `OrgPrivateRegistryConfigurationWithSelectedRepository(data?)` | `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` | Create an OrgPrivateRegistryConfigurationWithSelectedRepository entity instance. |
| `OrgRepoCustomPropertyValue(data?)` | `OrgRepoCustomPropertyValueEntity` | Create an OrgRepoCustomPropertyValue entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationActionsSecret(data?)` | `OrganizationActionsSecretEntity` | Create an OrganizationActionsSecret entity instance. |
| `OrganizationActionsVariable(data?)` | `OrganizationActionsVariableEntity` | Create an OrganizationActionsVariable entity instance. |
| `OrganizationDependabotSecret(data?)` | `OrganizationDependabotSecretEntity` | Create an OrganizationDependabotSecret entity instance. |
| `OrganizationInvitation(data?)` | `OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `OrganizationProgrammaticAccessGrant(data?)` | `OrganizationProgrammaticAccessGrantEntity` | Create an OrganizationProgrammaticAccessGrant entity instance. |
| `OrganizationRole(data?)` | `OrganizationRoleEntity` | Create an OrganizationRole entity instance. |
| `OrganizationSecretScanningAlert(data?)` | `OrganizationSecretScanningAlertEntity` | Create an OrganizationSecretScanningAlert entity instance. |
| `OutsideCollaborator(data?)` | `OutsideCollaboratorEntity` | Create an OutsideCollaborator entity instance. |
| `Package(data?)` | `PackageEntity` | Create a Package entity instance. |
| `Page(data?)` | `PageEntity` | Create a Page entity instance. |
| `PageBuild(data?)` | `PageBuildEntity` | Create a PageBuild entity instance. |
| `PageBuildStatus(data?)` | `PageBuildStatusEntity` | Create a PageBuildStatus entity instance. |
| `PageDeployment(data?)` | `PageDeploymentEntity` | Create a PageDeployment entity instance. |
| `PagesDeploymentStatus(data?)` | `PagesDeploymentStatusEntity` | Create a PagesDeploymentStatus entity instance. |
| `PagesHealthCheck(data?)` | `PagesHealthCheckEntity` | Create a PagesHealthCheck entity instance. |
| `Participation(data?)` | `ParticipationEntity` | Create a Participation entity instance. |
| `PendingDeployment(data?)` | `PendingDeploymentEntity` | Create a PendingDeployment entity instance. |
| `PorterAuthor(data?)` | `PorterAuthorEntity` | Create a PorterAuthor entity instance. |
| `PorterLargeFile(data?)` | `PorterLargeFileEntity` | Create a PorterLargeFile entity instance. |
| `PrivateRegistry(data?)` | `PrivateRegistryEntity` | Create a PrivateRegistry entity instance. |
| `PrivateUser(data?)` | `PrivateUserEntity` | Create a PrivateUser entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectCollaboratorPermission(data?)` | `ProjectCollaboratorPermissionEntity` | Create a ProjectCollaboratorPermission entity instance. |
| `ProjectColumn(data?)` | `ProjectColumnEntity` | Create a ProjectColumn entity instance. |
| `ProjectsClassic(data?)` | `ProjectsClassicEntity` | Create a ProjectsClassic entity instance. |
| `ProjectsV2(data?)` | `ProjectsV2Entity` | Create a ProjectsV2 entity instance. |
| `ProjectsV2Field(data?)` | `ProjectsV2FieldEntity` | Create a ProjectsV2Field entity instance. |
| `ProjectsV2ItemSimple(data?)` | `ProjectsV2ItemSimpleEntity` | Create a ProjectsV2ItemSimple entity instance. |
| `ProjectsV2ItemWithContent(data?)` | `ProjectsV2ItemWithContentEntity` | Create a ProjectsV2ItemWithContent entity instance. |
| `ProtectedBranch(data?)` | `ProtectedBranchEntity` | Create a ProtectedBranch entity instance. |
| `ProtectedBranchAdminEnforced(data?)` | `ProtectedBranchAdminEnforcedEntity` | Create a ProtectedBranchAdminEnforced entity instance. |
| `ProtectedBranchPullRequestReview(data?)` | `ProtectedBranchPullRequestReviewEntity` | Create a ProtectedBranchPullRequestReview entity instance. |
| `PublicMember(data?)` | `PublicMemberEntity` | Create a PublicMember entity instance. |
| `Pull(data?)` | `PullEntity` | Create a Pull entity instance. |
| `PullRequestReview(data?)` | `PullRequestReviewEntity` | Create a PullRequestReview entity instance. |
| `PullRequestReviewComment(data?)` | `PullRequestReviewCommentEntity` | Create a PullRequestReviewComment entity instance. |
| `PullRequestSimple(data?)` | `PullRequestSimpleEntity` | Create a PullRequestSimple entity instance. |
| `RateLimit(data?)` | `RateLimitEntity` | Create a RateLimit entity instance. |
| `Reaction(data?)` | `ReactionEntity` | Create a Reaction entity instance. |
| `Referrer(data?)` | `ReferrerEntity` | Create a Referrer entity instance. |
| `Release(data?)` | `ReleaseEntity` | Create a Release entity instance. |
| `ReleaseAsset(data?)` | `ReleaseAssetEntity` | Create a ReleaseAsset entity instance. |
| `ReleaseNotesContent(data?)` | `ReleaseNotesContentEntity` | Create a ReleaseNotesContent entity instance. |
| `Remove(data?)` | `RemoveEntity` | Create a Remove entity instance. |
| `Repo(data?)` | `RepoEntity` | Create a Repo entity instance. |
| `Repository(data?)` | `RepositoryEntity` | Create a Repository entity instance. |
| `RepositoryAdvisory(data?)` | `RepositoryAdvisoryEntity` | Create a RepositoryAdvisory entity instance. |
| `RepositoryCollaboratorPermission(data?)` | `RepositoryCollaboratorPermissionEntity` | Create a RepositoryCollaboratorPermission entity instance. |
| `RepositoryInvitation(data?)` | `RepositoryInvitationEntity` | Create a RepositoryInvitation entity instance. |
| `RepositoryRuleDetailed(data?)` | `RepositoryRuleDetailedEntity` | Create a RepositoryRuleDetailed entity instance. |
| `RepositoryRuleset(data?)` | `RepositoryRulesetEntity` | Create a RepositoryRuleset entity instance. |
| `RepositorySubscription(data?)` | `RepositorySubscriptionEntity` | Create a RepositorySubscription entity instance. |
| `ReviewComment(data?)` | `ReviewCommentEntity` | Create a ReviewComment entity instance. |
| `RuleSuite(data?)` | `RuleSuiteEntity` | Create a RuleSuite entity instance. |
| `RulesetVersion(data?)` | `RulesetVersionEntity` | Create a RulesetVersion entity instance. |
| `RulesetVersionWithState(data?)` | `RulesetVersionWithStateEntity` | Create a RulesetVersionWithState entity instance. |
| `Runner(data?)` | `RunnerEntity` | Create a Runner entity instance. |
| `RunnerApplication(data?)` | `RunnerApplicationEntity` | Create a RunnerApplication entity instance. |
| `RunnerGroup(data?)` | `RunnerGroupEntity` | Create a RunnerGroup entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `SecretScanning(data?)` | `SecretScanningEntity` | Create a SecretScanning entity instance. |
| `SecretScanningAlert(data?)` | `SecretScanningAlertEntity` | Create a SecretScanningAlert entity instance. |
| `SecretScanningLocation(data?)` | `SecretScanningLocationEntity` | Create a SecretScanningLocation entity instance. |
| `SecretScanningPatternConfiguration(data?)` | `SecretScanningPatternConfigurationEntity` | Create a SecretScanningPatternConfiguration entity instance. |
| `SecretScanningPushProtectionBypass(data?)` | `SecretScanningPushProtectionBypassEntity` | Create a SecretScanningPushProtectionBypass entity instance. |
| `SecretScanningScanHistory(data?)` | `SecretScanningScanHistoryEntity` | Create a SecretScanningScanHistory entity instance. |
| `SecurityAdvisory(data?)` | `SecurityAdvisoryEntity` | Create a SecurityAdvisory entity instance. |
| `SelectedAction(data?)` | `SelectedActionEntity` | Create a SelectedAction entity instance. |
| `SelfHostedRunner(data?)` | `SelfHostedRunnerEntity` | Create a SelfHostedRunner entity instance. |
| `ShortBlob(data?)` | `ShortBlobEntity` | Create a ShortBlob entity instance. |
| `ShortBranch(data?)` | `ShortBranchEntity` | Create a ShortBranch entity instance. |
| `SimpleClassroom(data?)` | `SimpleClassroomEntity` | Create a SimpleClassroom entity instance. |
| `SimpleClassroomAssignment(data?)` | `SimpleClassroomAssignmentEntity` | Create a SimpleClassroomAssignment entity instance. |
| `SocialAccount(data?)` | `SocialAccountEntity` | Create a SocialAccount entity instance. |
| `SshSigningKey(data?)` | `SshSigningKeyEntity` | Create a SshSigningKey entity instance. |
| `Status(data?)` | `StatusEntity` | Create a Status entity instance. |
| `StatusCheckPolicy(data?)` | `StatusCheckPolicyEntity` | Create a StatusCheckPolicy entity instance. |
| `Subscriber(data?)` | `SubscriberEntity` | Create a Subscriber entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `TagProtection(data?)` | `TagProtectionEntity` | Create a TagProtection entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TeamSimple(data?)` | `TeamSimpleEntity` | Create a TeamSimple entity instance. |
| `Thread(data?)` | `ThreadEntity` | Create a Thread entity instance. |
| `ThreadSubscription(data?)` | `ThreadSubscriptionEntity` | Create a ThreadSubscription entity instance. |
| `Topic(data?)` | `TopicEntity` | Create a Topic entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserMarketplacePurchase(data?)` | `UserMarketplacePurchaseEntity` | Create an UserMarketplacePurchase entity instance. |
| `View(data?)` | `ViewEntity` | Create a View entity instance. |
| `WebhookConfig(data?)` | `WebhookConfigEntity` | Create a WebhookConfig entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun(data?)` | `WorkflowRunEntity` | Create a WorkflowRun entity instance. |
| `WorkflowRunUsage(data?)` | `WorkflowRunUsageEntity` | Create a WorkflowRunUsage entity instance. |
| `WorkflowUsage(data?)` | `WorkflowUsageEntity` | Create a WorkflowUsage entity instance. |
| `tester(testopts?, sdkopts?)` | `GithubSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `GithubSDK.test(testopts?, sdkopts?)` | `GithubSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): GithubSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load, patch, remove, update.

API path: `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`

#### ActionsArtifactAndLogRetention

| Field | Description |
| --- | --- |
| `days` | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | The maximum number of days that can be configured |

Operations: load.

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

Operations: list, remove.

API path: `/repos/{owner}/{repo}/actions/caches`

#### ActionsCacheUsageByRepository

| Field | Description |
| --- | --- |
| `active_caches_count` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | The repository owner and name for the cache usage being shown. |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/cache/usage`

#### ActionsCacheUsageOrgEnterprise

| Field | Description |
| --- | --- |
| `total_active_caches_count` | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

Operations: load.

API path: `/orgs/{org}/actions/cache/usage`

#### ActionsForkPrContributorApproval

| Field | Description |
| --- | --- |
| `approval_policy` | The policy that controls when fork PR workflows require approval from a maintainer. |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-contributor-approval`

#### ActionsForkPrWorkflowsPrivateRepo

| Field | Description |
| --- | --- |
| `require_approval_for_fork_pr_workflows` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/permissions/fork-pr-workflows-private-repos`

#### ActionsGetDefaultWorkflowPermission

| Field | Description |
| --- | --- |
| `can_approve_pull_request_reviews` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

Operations: load.

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

Operations: create, load, update.

API path: `/orgs/{org}/actions/hosted-runners`

#### ActionsHostedRunnerLimit

| Field | Description |
| --- | --- |
| `current_usage` | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

Operations: load.

API path: `/orgs/{org}/actions/hosted-runners/limits`

#### ActionsOrganizationPermission

| Field | Description |
| --- | --- |
| `allowed_actions` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | Whether actions must be pinned to a full-length commit SHA. |

Operations: load.

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

Operations: load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key`

#### ActionsRepositoryPermission

| Field | Description |
| --- | --- |
| `allowed_actions` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | Whether actions must be pinned to a full-length commit SHA. |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/permissions`

#### ActionsSecret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `updated_at` |  |

Operations: load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}`

#### ActionsVariable

| Field | Description |
| --- | --- |
| `created_at` | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` |  |
| `name` | The name of the variable. |
| `updated_at` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | The value of the variable. |

Operations: load.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}`

#### ActionsWorkflowAccessToRepository

| Field | Description |
| --- | --- |
| `access_level` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

Operations: load.

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

Operations: list, load, patch, remove, update.

API path: `/repos/{owner}/{repo}/activity`

#### Add

| Field | Description |
| --- | --- |
| `usernames` | The GitHub user handles to add to the team. |

Operations: create.

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

Operations: list.

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

Operations: list.

API path: `/orgs/{org}/insights/api/subject-stats`

#### ApiInsightsSummaryStat

| Field | Description |
| --- | --- |
| `id` |  |
| `rate_limited_request_count` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | The total number of requests within the queried time period |

Operations: load.

API path: `/orgs/{org}/insights/api/summary-stats/{actor_type}/{actor_id}`

#### ApiInsightsTimeStat

| Field | Description |
| --- | --- |
| `rate_limited_request_count` |  |
| `timestamp` |  |
| `total_request_count` |  |

Operations: list, load.

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

Operations: load.

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

Operations: list.

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

Operations: create, list, remove, update.

API path: `/app-manifests/{code}/conversions`

#### Artifact

| Field | Description |
| --- | --- |
| `head_branch` |  |
| `head_repository_id` |  |
| `head_sha` |  |
| `id` |  |
| `repository_id` |  |

Operations: load.

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

Operations: list.

API path: `/repos/{owner}/{repo}/assignees`

#### AuthenticationToken

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `token` |  |

Operations: create.

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

Operations: create, update.

API path: `/applications/{client_id}/token`

#### Autolink

| Field | Description |
| --- | --- |
| `id` |  |
| `is_alphanumeric` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | The prefix of a key that is linkified. |
| `updated_at` |  |
| `url_template` | A template for the target URL that is generated if a key was found. |

Operations: create, list, load.

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

Operations: create, list.

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

Operations: list.

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

Operations: list.

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

Operations: load.

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

Operations: list.

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

Operations: load.

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

Operations: load.

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

Operations: list.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions`

#### BranchShort

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `protected` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`

#### BranchWithProtection

| Field | Description |
| --- | --- |
| `id` |  |
| `new_name` | The new name of the branch. |

Operations: create.

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

Operations: create, list, load, remove, update.

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

Operations: list.

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

Operations: list.

API path: `/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`

#### CheckAutomatedSecurityFix

| Field | Description |
| --- | --- |
| `enabled` | Whether Dependabot security updates are enabled for the repository. |
| `paused` | Whether Dependabot security updates are paused for the repository. |

Operations: load.

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

Operations: create, load, update.

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

Operations: create, load.

API path: `/repos/{owner}/{repo}/check-suites`

#### CheckSuitePreference

| Field | Description |
| --- | --- |
| `auto_trigger_checks` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` |  |
| `repository` | Minimal Repository |

Operations: update.

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

Operations: list, load.

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

Operations: list.

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

Operations: load.

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

Operations: list.

API path: `/assignments/{assignment_id}/grades`

#### Clone

| Field | Description |
| --- | --- |
| `count` |  |
| `timestamp` |  |
| `uniques` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/traffic/clones`

#### CodeFrequency

| Field | Description |
| --- | --- |

Operations: list.

API path: `/repos/{owner}/{repo}/stats/code_frequency`

#### CodeFrequencyStat

| Field | Description |
| --- | --- |

Operations: list.

API path: `/repos/{owner}/{repo}/stats/punch_card`

#### CodeOfConduct

| Field | Description |
| --- | --- |
| `body` |  |
| `html_url` |  |
| `key` |  |
| `name` |  |
| `url` |  |

Operations: list, load.

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

Operations: create, remove.

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

Operations: load, update.

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

Operations: list.

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

Operations: list.

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

Operations: list, load.

API path: `/repos/{owner}/{repo}/code-scanning/analyses`

#### CodeScanningAnalysisDeletion

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`

#### CodeScanningAutofix

| Field | Description |
| --- | --- |
| `description` | The description of an autofix. |
| `started_at` | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | The status of an autofix. |

Operations: create, load.

API path: `/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix`

#### CodeScanningAutofixCommit

| Field | Description |
| --- | --- |
| `message` | Commit message to be used. |
| `target_ref` | The Git reference of target branch for the commit. |

Operations: create.

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

Operations: list, load.

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

Operations: list.

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

Operations: list.

API path: `/orgs/{org}/code-scanning/alerts`

#### CodeScanningSarifsStatus

| Field | Description |
| --- | --- |
| `analyses_url` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

Operations: load.

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

Operations: create, load.

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

Operations: load.

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

Operations: remove, update.

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

Operations: create, list, load, update.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach`

#### CodeSecurityConfigurationRepository

| Field | Description |
| --- | --- |
| `repository` | A GitHub repository. |
| `status` | The attachment status of the code security configuration on the repository. |

Operations: list.

API path: `/enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories`

#### CodeSecurityDefaultConfiguration

| Field | Description |
| --- | --- |
| `configuration` | A code security configuration |
| `default_for_new_repos` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

Operations: list.

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

Operations: list.

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

Operations: create, list, load, patch, remove, update.

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

Operations: list.

API path: `/repos/{owner}/{repo}/collaborators`

#### CombinedBillingUsage

| Field | Description |
| --- | --- |
| `days_left_in_billing_cycle` | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

Operations: load.

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

Operations: list.

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

Operations: create, list, load.

API path: `/repos/{owner}/{repo}/merges`

#### CommitActivity

| Field | Description |
| --- | --- |
| `days` |  |
| `total` |  |
| `week` |  |

Operations: list.

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

Operations: create, list, load, update.

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

Operations: load.

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

Operations: load.

API path: `/repos/{owner}/{repo}/community/profile`

#### ContentFile

| Field | Description |
| --- | --- |
| `git` |  |
| `html` |  |
| `self` |  |

Operations: load.

API path: `/repos/{owner}/{repo}/readme/{dir}`

#### ContentTraffic

| Field | Description |
| --- | --- |
| `count` |  |
| `path` |  |
| `title` |  |
| `uniques` |  |

Operations: list.

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

Operations: list.

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

Operations: create, list, load, remove.

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

Operations: load.

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

Operations: list.

API path: `/orgs/{org}/team/{team_slug}/copilot/metrics`

#### Credential

| Field | Description |
| --- | --- |
| `credentials` | A list of credentials to be revoked, up to 1000 per request. |

Operations: create.

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

Operations: list, load, patch, update.

API path: `/orgs/{org}/properties/schema`

#### CustomPropertyValue

| Field | Description |
| --- | --- |
| `property_name` | The name of the property |
| `value` | The value assigned to the property |

Operations: list.

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

Operations: list, patch, remove, update.

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

Operations: list, load, update.

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

Operations: list.

API path: `/orgs/{org}/dependabot/alerts`

#### DependabotPublicKey

| Field | Description |
| --- | --- |
| `key` | The Base64 encoded public key. |
| `key_id` | The identifier for the key. |

Operations: load.

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

Operations: list.

API path: `/organizations/{org}/dependabot/repository-access`

#### DependabotSecret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` | The name of the secret. |
| `updated_at` |  |

Operations: load.

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

Operations: create.

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

Operations: load.

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

Operations: load.

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

Operations: create, list, load.

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

Operations: create, list, load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`

#### DeploymentBranchPolicy

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the branch or tag policy. |
| `name` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` |  |
| `type` | Whether this rule targets a branch or tag. |

Operations: create, load, update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`

#### DeploymentProtectionRule

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the deployment protection rule integration. |
| `integration_id` | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | The URL for the endpoint to get details about the app. |
| `node_id` | The node ID for the deployment protection rule integration. |
| `slug` | The slugified name of the deployment protection rule integration. |

Operations: create, load.

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

Operations: create, list, load.

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

Operations: list.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/files`

#### Email

| Field | Description |
| --- | --- |
| `email` |  |
| `primary` |  |
| `verified` |  |
| `visibility` | Denotes whether an email is publicly visible. |

Operations: create, list, update.

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

Operations: load.

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

Operations: create, load, patch, update.

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

Operations: create, list, load, remove, update.

API path: `/enterprises/{enterprise}/teams`

#### EnterpriseTeamMembership

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: load, update.

API path: `/repos/{owner}/{repo}/environments/{environment_name}`

#### EnvironmentApproval

| Field | Description |
| --- | --- |
| `comment` | The comment submitted with the deployment review |
| `environments` | The list of environments that were approved or rejected |
| `state` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | A GitHub user. |

Operations: list.

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

Operations: list, load.

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

Operations: list.

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

Operations: remove, update.

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

Operations: list.

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

Operations: list.

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

Operations: create, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

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

Operations: list.

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

Operations: list.

API path: `/gists/{gist_id}/forks`

#### Git

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create, load.

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

Operations: create, load, update.

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

Operations: create, load.

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

Operations: create, load.

API path: `/repos/{owner}/{repo}/git/trees`

#### Gitignore

| Field | Description |
| --- | --- |

Operations: list.

API path: `/gitignore/templates`

#### GitignoreTemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `source` |  |

Operations: load.

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

Operations: list, load.

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

Operations: create, list, load.

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

Operations: create, list, load, update.

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

Operations: load.

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

Operations: list.

API path: `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries`

#### HostedCompute

| Field | Description |
| --- | --- |
| `compute_service` | The hosted compute service the network configuration supports. |
| `created_on` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | The unique identifier of the network configuration. |
| `name` | The name of the network configuration. |
| `network_settings_ids` | The unique identifier of each network settings in the configuration. |

Operations: list, remove.

API path: `/orgs/{org}/settings/network-configurations`

#### Hovercard

| Field | Description |
| --- | --- |
| `message` |  |
| `octicon` |  |

Operations: list.

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

Operations: list, patch, update.

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

Operations: list, load, remove, update.

API path: `/app/installations`

#### InstallationToken

| Field | Description |
| --- | --- |
| `id` |  |
| `permissions` | The permissions granted to the user access token. |
| `repositories` | List of repository names that the token should have access to |
| `repository_ids` | List of repository IDs that the token should have access to |

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`

#### IntegrationInstallation

| Field | Description |
| --- | --- |
| `account` |  |
| `created_at` |  |
| `id` | Unique identifier of the request installation. |
| `node_id` |  |
| `requester` | A GitHub user. |

Operations: list.

API path: `/app/installation-requests`

#### Interaction

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `limit` |  |
| `origin` |  |

Operations: load, remove.

API path: `/repos/{owner}/{repo}/interaction-limits`

#### InteractionLimit

| Field | Description |
| --- | --- |
| `expires_at` |  |
| `expiry` | The duration of the interaction restriction. |
| `limit` | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` |  |

Operations: update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, update.

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

Operations: load.

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

Operations: create, list, load.

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

Operations: create, list, load, update.

API path: `/repos/{owner}/{repo}/labels`

#### Language

| Field | Description |
| --- | --- |
| `C` |  |
| `Python` |  |

Operations: load.

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

Operations: list, load.

API path: `/licenses`

#### Markdown

| Field | Description |
| --- | --- |
| `context` | The repository context to use when creating references in `gfm` mode. |
| `mode` | The rendering mode. |
| `text` | The Markdown text to render in HTML. |

Operations: create.

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

Operations: list.

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

Operations: list, load.

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

Operations: list.

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

Operations: list, load, update.

API path: `/enterprises/{enterprise}/teams/{enterprise-team}/memberships`

#### MergedUpstream

| Field | Description |
| --- | --- |
| `base_branch` |  |
| `branch` | The name of the branch which should be updated to match upstream. |
| `merge_type` |  |
| `message` |  |

Operations: create.

API path: `/repos/{owner}/{repo}/merge-upstream`

#### Meta

| Field | Description |
| --- | --- |

Operations: list, load.

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

Operations: load.

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

Operations: create, list, load, remove.

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

Operations: create, list, load, update.

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

Operations: list.

API path: `/orgs/{org}/repos`

#### NetworkConfiguration

| Field | Description |
| --- | --- |
| `compute_service` | The hosted compute service the network configuration supports. |
| `created_on` | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | The unique identifier of the network configuration. |
| `name` | The name of the network configuration. |
| `network_settings_ids` | The unique identifier of each network settings in the configuration. |

Operations: create, load, update.

API path: `/orgs/{org}/settings/network-configurations`

#### NetworkSetting

| Field | Description |
| --- | --- |
| `id` | The unique identifier of the network settings resource. |
| `name` | The name of the network settings resource. |
| `network_configuration_id` | The identifier of the network configuration that is using this settings resource. |
| `region` | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | The subnet this network settings resource is configured for. |

Operations: load.

API path: `/orgs/{org}/settings/network-settings/{network_settings_id}`

#### OidcCustomSub

| Field | Description |
| --- | --- |
| `include_claim_keys` | Array of unique strings. |

Operations: list.

API path: `/orgs/{org}/actions/oidc/customization/sub`

#### OidcCustomSubRepo

| Field | Description |
| --- | --- |
| `include_claim_keys` | Array of unique strings. |
| `use_default` | Whether to use the default template or not. |

Operations: list.

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

Operations: create, list, load, patch, remove, update.

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

Operations: create, list, load, update.

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

Operations: load, update.

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

Operations: load.

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

Operations: create.

API path: `/orgs/{org}/private-registries`

#### OrgRepoCustomPropertyValue

| Field | Description |
| --- | --- |
| `properties` | List of custom property names and associated values |
| `repository_full_name` |  |
| `repository_id` |  |
| `repository_name` |  |

Operations: list.

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

Operations: load.

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

Operations: load.

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

Operations: load.

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

Operations: create, list.

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

Operations: list.

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

Operations: load.

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

Operations: list.

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

Operations: list.

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

Operations: create, list, load, remove.

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

Operations: create, load.

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

Operations: list, load.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageBuildStatus

| Field | Description |
| --- | --- |
| `status` |  |
| `url` |  |

Operations: create.

API path: `/repos/{owner}/{repo}/pages/builds`

#### PageDeployment

| Field | Description |
| --- | --- |
| `artifact_id` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | A unique string that represents the version of the build for this deployment. |

Operations: create.

API path: `/repos/{owner}/{repo}/pages/deployments`

#### PagesDeploymentStatus

| Field | Description |
| --- | --- |
| `status` | The current status of the deployment. |

Operations: create, load.

API path: `/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel`

#### PagesHealthCheck

| Field | Description |
| --- | --- |
| `alt_domain` |  |
| `domain` |  |

Operations: load.

API path: `/repos/{owner}/{repo}/pages/health`

#### Participation

| Field | Description |
| --- | --- |
| `all` |  |
| `owner` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/stats/participation`

#### PendingDeployment

| Field | Description |
| --- | --- |
| `current_user_can_approve` | Whether the currently authenticated user can approve the deployment |
| `environment` |  |
| `reviewers` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | The set duration of the wait timer |
| `wait_timer_started_at` | The time that the wait timer began. |

Operations: list.

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

Operations: list, update.

API path: `/repos/{owner}/{repo}/import/authors`

#### PorterLargeFile

| Field | Description |
| --- | --- |
| `oid` |  |
| `path` |  |
| `ref_name` |  |
| `size` |  |

Operations: list.

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

Operations: list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: load.

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

Operations: create, list, load, update.

API path: `/projects/{project_id}/columns`

#### ProjectsClassic

| Field | Description |
| --- | --- |
| `permission` | The permission to grant the collaborator. |
| `position` | The position of the column in a project. |

Operations: create, remove, update.

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

Operations: list, load.

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

Operations: list, load.

API path: `/orgs/{org}/projectsV2/{project_number}/fields`

#### ProjectsV2ItemSimple

| Field | Description |
| --- | --- |
| `id` | The numeric ID of the issue or pull request to add to the project. |
| `type` | The type of item to add to the project. |

Operations: create.

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

Operations: list, load, update.

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

Operations: update.

API path: `/repos/{owner}/{repo}/branches/{branch}/protection`

#### ProtectedBranchAdminEnforced

| Field | Description |
| --- | --- |
| `enabled` |  |
| `url` |  |

Operations: create, load.

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

Operations: load, update.

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

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`

#### PullRequestSimple

| Field | Description |
| --- | --- |
| `reviewers` | An array of user `login`s that will be requested. |
| `team_reviewers` | An array of team `slug`s that will be requested. |

Operations: create, remove.

API path: `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`

#### RateLimit

| Field | Description |
| --- | --- |
| `rate` |  |
| `resources` |  |

Operations: load.

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

Operations: create, list, remove.

API path: `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`

#### Referrer

| Field | Description |
| --- | --- |
| `count` |  |
| `referrer` |  |
| `uniques` |  |

Operations: list.

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

Operations: create, list, load, update.

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

Operations: create, list, load, update.

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

Operations: create.

API path: `/repos/{owner}/{repo}/releases/generate-notes`

#### Remove

| Field | Description |
| --- | --- |
| `usernames` | The GitHub user handles to be removed from the team. |

Operations: create.

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

Operations: create, list, load, patch, remove, update.

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

Operations: list.

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

Operations: create, list, load, update.

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

Operations: load.

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

Operations: list, patch, update.

API path: `/repos/{owner}/{repo}/invitations`

#### RepositoryRuleDetailed

| Field | Description |
| --- | --- |
| `parameters` |  |
| `ruleset_id` |  |
| `ruleset_source` |  |
| `ruleset_source_type` |  |
| `type` |  |

Operations: load.

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

Operations: create, list, load, update.

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

Operations: load, update.

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

Operations: list.

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

Operations: list, load.

API path: `/orgs/{org}/rulesets/rule-suites`

#### RulesetVersion

| Field | Description |
| --- | --- |
| `actor` | The actor who updated the ruleset |
| `id` |  |
| `updated_at` |  |
| `version_id` | The ID of the previous version of the ruleset |

Operations: list.

API path: `/repos/{owner}/{repo}/rulesets/{ruleset_id}/history`

#### RulesetVersionWithState

| Field | Description |
| --- | --- |
| `actor` | The actor who updated the ruleset |
| `state` | The state of the ruleset version |
| `updated_at` |  |
| `version_id` | The ID of the previous version of the ruleset |

Operations: load.

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

Operations: load.

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

Operations: list.

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

Operations: create, load, update.

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

Operations: list.

API path: `/search/issues`

#### SecretScanning

| Field | Description |
| --- | --- |
| `custom_pattern_settings` | Pattern settings for custom patterns. |
| `pattern_config_version` | The updated pattern configuration version. |
| `provider_pattern_settings` | Pattern settings for provider patterns. |

Operations: update.

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

Operations: list, load, update.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts`

#### SecretScanningLocation

| Field | Description |
| --- | --- |
| `details` |  |
| `type` | The location type. |

Operations: list.

API path: `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`

#### SecretScanningPatternConfiguration

| Field | Description |
| --- | --- |
| `custom_pattern_overrides` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | The version of the entity. |
| `provider_pattern_overrides` | Overrides for partner patterns. |

Operations: list.

API path: `/orgs/{org}/secret-scanning/pattern-configurations`

#### SecretScanningPushProtectionBypass

| Field | Description |
| --- | --- |
| `expire_at` | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | The ID of the push protection bypass placeholder. |
| `reason` | The reason for bypassing push protection. |
| `token_type` | The token type this bypass is for. |

Operations: create.

API path: `/repos/{owner}/{repo}/secret-scanning/push-protection-bypasses`

#### SecretScanningScanHistory

| Field | Description |
| --- | --- |
| `backfill_scans` |  |
| `custom_pattern_backfill_scans` |  |
| `incremental_scans` |  |
| `pattern_update_scans` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/secret-scanning/scan-history`

#### SecurityAdvisory

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`

#### SelectedAction

| Field | Description |
| --- | --- |
| `github_owned_allowed` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | Whether actions from GitHub Marketplace verified creators are allowed. |

Operations: list.

API path: `/repos/{owner}/{repo}/actions/permissions/selected-actions`

#### SelfHostedRunner

| Field | Description |
| --- | --- |
| `enabled_repositories` | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

Operations: load.

API path: `/orgs/{org}/actions/permissions/self-hosted-runners`

#### ShortBlob

| Field | Description |
| --- | --- |
| `content` | The new blob's content. |
| `encoding` | The encoding used for `content`. |

Operations: create.

API path: `/repos/{owner}/{repo}/git/blobs`

#### ShortBranch

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `protected` |  |
| `protection` | Branch Protection |
| `protection_url` |  |

Operations: list.

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

Operations: list.

API path: `/classrooms/{classroom_id}/assignments`

#### SocialAccount

| Field | Description |
| --- | --- |
| `account_urls` | Full URLs for the social media profiles to add. |
| `provider` |  |
| `url` |  |

Operations: create, list.

API path: `/user/social_accounts`

#### SshSigningKey

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `key` | The public SSH key to add to your GitHub account. |
| `title` | A descriptive name for the new key. |

Operations: create, list, load.

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

Operations: create, list.

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

Operations: list, update.

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

Operations: list.

API path: `/repos/{owner}/{repo}/subscribers`

#### Tag

| Field | Description |
| --- | --- |
| `commit` |  |
| `name` |  |
| `node_id` |  |
| `tarball_url` |  |
| `zipball_url` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/tags`

#### TagProtection

| Field | Description |
| --- | --- |
| `created_at` |  |
| `enabled` |  |
| `id` |  |
| `pattern` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` |  |

Operations: create, list.

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

Operations: create, list, load, patch, remove, update.

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

Operations: list.

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

Operations: list, load, remove.

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

Operations: load, update.

API path: `/notifications/threads/{thread_id}/subscription`

#### Topic

| Field | Description |
| --- | --- |
| `names` | An array of topics to add to the repository. |

Operations: list, update.

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

Operations: create, list, load, patch, remove, update.

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

Operations: list.

API path: `/user/marketplace_purchases`

#### View

| Field | Description |
| --- | --- |
| `count` |  |
| `timestamp` |  |
| `uniques` |  |

Operations: list.

API path: `/repos/{owner}/{repo}/traffic/views`

#### WebhookConfig

| Field | Description |
| --- | --- |
| `content_type` | The media type used to serialize the payloads. |
| `insecure_ssl` |  |
| `secret` | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | The URL to which the payloads will be delivered. |

Operations: load, update.

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

Operations: load, update.

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

Operations: create, load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/cancel`

#### WorkflowRunUsage

| Field | Description |
| --- | --- |
| `MACOS` |  |
| `UBUNTU` |  |
| `WINDOWS` |  |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/runs/{run_id}/timing`

#### WorkflowUsage

| Field | Description |
| --- | --- |
| `MACOS` |  |
| `UBUNTU` |  |
| `WINDOWS` |  |
| `id` |  |

Operations: load.

API path: `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`



## Entities


### Action

Create an instance: `const action = client.Action()`

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
| `MACOS` | `number` | Total minutes used on macOS runner machines. |
| `UBUNTU` | `number` | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `number` | Total minutes used on Windows runner machines. |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `number` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `number` | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `Record<string, any>` | A GitHub user. |
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `boolean` |  |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `string` | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `string` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether the repository is archived. |
| `artifacts_url` | `string` | The URL to the artifacts for the workflow run. |
| `assignees_url` | `string` |  |
| `badge_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `busy` | `boolean` |  |
| `can_approve_pull_request_reviews` | `boolean` | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `string` | The URL to cancel the workflow run. |
| `check_run_url` | `string` |  |
| `check_suite_id` | `number` | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | The node ID of the associated check suite. |
| `check_suite_url` | `string` | The URL to the associated check suite. |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `code_search_index_status` | `Record<string, any>` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `completed_at` | `string` | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | The outcome of the job. |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `cpu_cores` | `number` | The number of cores. |
| `created_at` | `string` | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `days` | `number` | The number of days to retain artifacts and logs |
| `default` | `boolean` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `default_workflow_permissions` | `string` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `string` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `digest` | `string` | The SHA256 digest of the artifact. |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `display_name` | `string` | Display name for this image. |
| `display_title` | `string` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `string` |  |
| `enabled` | `boolean` | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `string` | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `boolean` |  |
| `event` | `string` |  |
| `events_url` | `string` |  |
| `expired` | `boolean` | Whether or not the artifact has expired. |
| `expires_at` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_owned_allowed` | `boolean` | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `head_branch` | `string` | The name of the current branch. |
| `head_commit` | `Record<string, any>` | A commit. |
| `head_repository` | `Record<string, any>` | Minimal Repository |
| `head_repository_id` | `number` |  |
| `head_sha` | `string` | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `hosted_runners_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | The ID of the workflow run. |
| `image_details` | `Record<string, any>` | Provides details of a hosted runner image |
| `inherited` | `boolean` |  |
| `inherited_allows_public_repositories` | `boolean` |  |
| `inputs` | `Record<string, any>` | Input keys and values configured in the workflow file. |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `jobs_url` | `string` | The URL to the jobs for the workflow run. |
| `keys_url` | `string` |  |
| `labels` | `any[]` | The names of the custom labels to add to the runner. |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `Record<string, any>` | License Simple |
| `logs_url` | `string` | The URL to download the logs for the workflow run. |
| `machine_size_details` | `Record<string, any>` | Provides details of a particular machine spec. |
| `macos_12_core` | `number` | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `string` |  |
| `maximum_runners` | `number` | The maximum amount of hosted runners. |
| `memory_gb` | `number` | The available RAM for the machine spec. |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the new runner. |
| `network_configuration_id` | `string` | The identifier of a hosted compute network configuration. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `os` | `string` | The Operating System of the runner. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `path` | `string` | The full path of the workflow |
| `patterns_allowed` | `any[]` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `Record<string, any>` |  |
| `platform` | `string` | The operating system of the image. |
| `platforms` | `any[]` |  |
| `previous_attempt_url` | `string` | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `boolean` | Whether the repository is private or public. |
| `public_ip_enabled` | `boolean` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `any[]` | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `any[]` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `ref` | `string` | The git reference for the workflow. |
| `referenced_workflows` | `any[]` |  |
| `releases_url` | `string` |  |
| `repository` | `Record<string, any>` | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `boolean` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `string` | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `boolean` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `string` |  |
| `run_attempt` | `number` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `number` | The id of the associated workflow run. |
| `run_number` | `number` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | The start time of the latest run. |
| `run_url` | `string` |  |
| `run_workflows_from_fork_pull_requests` | `boolean` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `number` | The ID of the runner group to register the runner to. |
| `runner_group_name` | `string` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `number` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | The name of the runner to which this job has been assigned. |
| `runners` | `any[]` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `any[]` | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `any[]` | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `boolean` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `boolean` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `boolean` | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `number` | The size of the repository, in kilobytes. |
| `size_gb` | `number` | Image size in GB. |
| `size_in_bytes` | `number` | The size in bytes of the artifact. |
| `source` | `string` | The image provider. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `started_at` | `string` | The time that the job started, in ISO 8601 format. |
| `state` | `string` |  |
| `status` | `string` | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `string` |  |
| `steps` | `any[]` | Steps in this job. |
| `storage_gb` | `number` | The available SSD storage for the machine spec. |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `total` | `number` | Total minutes used on all runner machines. |
| `total_count` | `number` |  |
| `trees_url` | `string` |  |
| `triggering_actor` | `Record<string, any>` | A GitHub user. |
| `type` | `string` | The type of label. |
| `ubuntu_16_core` | `number` | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `number` | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `number` | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `number` | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `number` | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `string` | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `boolean` | Whether a squash merge commit can use the pull request title as default. |
| `value` | `string` | The value of the variable. |
| `verified_allowed` | `boolean` | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `string` | The type of repositories in the organization that can access the variable. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `number` | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `number` | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `number` | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `number` | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `number` | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `string` | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `number` | The ID of the parent workflow. |
| `workflow_name` | `string` | The name of the workflow. |
| `workflow_restrictions_read_only` | `boolean` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `Record<string, any>` |  |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```ts
const action = await client.Action().load({ archive_format: 'archive_format', artifact_id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const actions = await client.Action().list({ org_id: "example" })
```

#### Example: Create

```ts
const action = await client.Action().create({
  org_id: 'example_org_id',
  access_level: 'example_access_level',
  active_caches_count: 1,
  active_caches_size_in_bytes: 1,
  actor: {},
  allows_public_repositories: true,
  approval_policy: 'example_approval_policy',
  archive_download_url: 'example_archive_download_url',
  archive_url: 'example_archive_url',
  artifacts_url: 'example_artifacts_url',
  assignees_url: 'example_assignees_url',
  badge_url: 'example_badge_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  busy: true,
  cancel_url: 'example_cancel_url',
  check_run_url: 'example_check_run_url',
  check_suite_url: 'example_check_suite_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  completed_at: 'example_completed_at',
  conclusion: 'example_conclusion',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  cpu_cores: 1,
  created_at: 'example_created_at',
  days: 1,
  default: true,
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  display_name: 'example_display_name',
  display_title: 'example_display_title',
  downloads_url: 'example_downloads_url',
  enabled: true,
  enabled_repositories: 'example_enabled_repositories',
  event: 'example_event',
  events_url: 'example_events_url',
  expired: true,
  expires_at: 'example_expires_at',
  fork: true,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  head_branch: 'example_head_branch',
  head_commit: {},
  head_repository: {},
  head_sha: 'example_head_sha',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  image_details: {},
  inherited: true,
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  jobs_url: 'example_jobs_url',
  keys_url: 'example_keys_url',
  labels: [],
  labels_url: 'example_labels_url',
  languages_url: 'example_languages_url',
  logs_url: 'example_logs_url',
  machine_size_details: {},
  memory_gb: 1,
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  name: 'example_name',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  os: 'example_os',
  owner: {},
  path: 'example_path',
  platform: 'example_platform',
  platforms: [],
  private: true,
  public_ip_enabled: true,
  pull_requests: [],
  pulls_url: 'example_pulls_url',
  ref: 'example_ref',
  releases_url: 'example_releases_url',
  repository: {},
  rerun_url: 'example_rerun_url',
  run_id: 1,
  run_number: 1,
  run_url: 'example_run_url',
  run_workflows_from_fork_pull_requests: true,
  runner_group_id: 1,
  runner_group_name: 'example_runner_group_name',
  runner_id: 1,
  runner_name: 'example_runner_name',
  runners: [],
  runners_url: 'example_runners_url',
  selected_repository_ids: [],
  size_gb: 1,
  size_in_bytes: 1,
  source: 'example_source',
  stargazers_url: 'example_stargazers_url',
  started_at: 'example_started_at',
  state: 'example_state',
  status: 'example_status',
  statuses_url: 'example_statuses_url',
  storage_gb: 1,
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  total_count: 1,
  trees_url: 'example_trees_url',
  triggering_actor: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  workflow_id: 1,
  workflow_name: 'example_workflow_name',
  workflow_url: 'example_workflow_url',
})
```


### ActionsArtifactAndLogRetention

Create an instance: `const actions_artifact_and_log_retention = client.ActionsArtifactAndLogRetention()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `number` | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `number` | The maximum number of days that can be configured |

#### Example: Load

```ts
const actions_artifact_and_log_retention = await client.ActionsArtifactAndLogRetention().load({ org_id: 'org_id' })
```


### ActionsCacheList

Create an instance: `const actions_cache_list = client.ActionsCacheList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `last_accessed_at` | `string` |  |
| `ref` | `string` |  |
| `size_in_bytes` | `number` |  |
| `version` | `string` |  |

#### Example: List

```ts
const actions_cache_lists = await client.ActionsCacheList().list({ owner: "example", repo: "example" })
```


### ActionsCacheUsageByRepository

Create an instance: `const actions_cache_usage_by_repository = client.ActionsCacheUsageByRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_caches_count` | `number` | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `number` | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | The repository owner and name for the cache usage being shown. |

#### Example: Load

```ts
const actions_cache_usage_by_repository = await client.ActionsCacheUsageByRepository().load({ owner: 'owner', repo: 'repo' })
```


### ActionsCacheUsageOrgEnterprise

Create an instance: `const actions_cache_usage_org_enterprise = client.ActionsCacheUsageOrgEnterprise()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `total_active_caches_count` | `number` | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `number` | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

#### Example: Load

```ts
const actions_cache_usage_org_enterprise = await client.ActionsCacheUsageOrgEnterprise().load({ org_id: 'org_id' })
```


### ActionsForkPrContributorApproval

Create an instance: `const actions_fork_pr_contributor_approval = client.ActionsForkPrContributorApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approval_policy` | `string` | The policy that controls when fork PR workflows require approval from a maintainer. |

#### Example: Load

```ts
const actions_fork_pr_contributor_approval = await client.ActionsForkPrContributorApproval().load({ org_id: 'org_id' })
```


### ActionsForkPrWorkflowsPrivateRepo

Create an instance: `const actions_fork_pr_workflows_private_repo = client.ActionsForkPrWorkflowsPrivateRepo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `boolean` | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `boolean` | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `boolean` | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `boolean` | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

#### Example: Load

```ts
const actions_fork_pr_workflows_private_repo = await client.ActionsForkPrWorkflowsPrivateRepo().load({ org_id: 'org_id' })
```


### ActionsGetDefaultWorkflowPermission

Create an instance: `const actions_get_default_workflow_permission = client.ActionsGetDefaultWorkflowPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `can_approve_pull_request_reviews` | `boolean` | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

#### Example: Load

```ts
const actions_get_default_workflow_permission = await client.ActionsGetDefaultWorkflowPermission().load({ org_id: 'org_id' })
```


### ActionsHostedRunner

Create an instance: `const actions_hosted_runner = client.ActionsHostedRunner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enable_static_ip` | `boolean` | Whether this runner should be created with a static public IP. |
| `id` | `number` | The unique identifier of the hosted runner. |
| `image` | `Record<string, any>` | The image of runner. |
| `image_details` | `Record<string, any>` | Provides details of a hosted runner image |
| `last_active_on` | `string` | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `Record<string, any>` | Provides details of a particular machine spec. |
| `maximum_runners` | `number` | The maximum amount of hosted runners. |
| `name` | `string` | The name of the hosted runner. |
| `platform` | `string` | The operating system of the image. |
| `public_ip_enabled` | `boolean` | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `any[]` | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `number` | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `string` | The machine size of the runner. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```ts
const actions_hosted_runner = await client.ActionsHostedRunner().load({ id: 1, org_id: 'org_id' })
```

#### Example: Create

```ts
const actions_hosted_runner = await client.ActionsHostedRunner().create({
  org_id: 'example_org_id',
  id: 1,
  image: {},
  image_details: {},
  machine_size_details: {},
  name: 'example_name',
  platform: 'example_platform',
  public_ip_enabled: true,
  size: 'example_size',
  status: 'example_status',
})
```


### ActionsHostedRunnerLimit

Create an instance: `const actions_hosted_runner_limit = client.ActionsHostedRunnerLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_usage` | `number` | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `number` | The maximum number of static public IP addresses that can be used for Hosted Runners. |

#### Example: Load

```ts
const actions_hosted_runner_limit = await client.ActionsHostedRunnerLimit().load({ org_id: 'org_id' })
```


### ActionsOrganizationPermission

Create an instance: `const actions_organization_permission = client.ActionsOrganizationPermission()`

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
| `sha_pinning_required` | `boolean` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```ts
const actions_organization_permission = await client.ActionsOrganizationPermission().load({ org_id: 'org_id' })
```


### ActionsPublicKey

Create an instance: `const actions_public_key = client.ActionsPublicKey()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `key` | `string` | The Base64 encoded public key. |
| `key_id` | `string` | The identifier for the key. |
| `title` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const actions_public_key = await client.ActionsPublicKey().load({ org_id: 'org_id' })
```


### ActionsRepositoryPermission

Create an instance: `const actions_repository_permission = client.ActionsRepositoryPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_actions` | `string` | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `boolean` | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `boolean` | Whether actions must be pinned to a full-length commit SHA. |

#### Example: Load

```ts
const actions_repository_permission = await client.ActionsRepositoryPermission().load({ owner: 'owner', repo: 'repo' })
```


### ActionsSecret

Create an instance: `const actions_secret = client.ActionsSecret()`

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

```ts
const actions_secret = await client.ActionsSecret().load({ id: 'actions_secret_id', owner: 'owner', repo: 'repo' })
```


### ActionsVariable

Create an instance: `const actions_variable = client.ActionsVariable()`

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

```ts
const actions_variable = await client.ActionsVariable().load({ id: 'actions_variable_id', owner: 'owner', repo: 'repo' })
```


### ActionsWorkflowAccessToRepository

Create an instance: `const actions_workflow_access_to_repository = client.ActionsWorkflowAccessToRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

#### Example: Load

```ts
const actions_workflow_access_to_repository = await client.ActionsWorkflowAccessToRepository().load({ owner: 'owner', repo: 'repo' })
```


### Activity

Create an instance: `const activity = client.Activity()`

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
| `actor` | `Record<string, any>` | A GitHub user. |
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
| `fork` | `boolean` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `number` |  |
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
| `language` | `Record<string, any>` |  |
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
| `owner` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `pulls_url` | `string` |  |
| `read` | `boolean` | Whether the notification has been read. |
| `received_events_url` | `string` |  |
| `ref` | `string` | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
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

```ts
const activity = await client.Activity().load({ owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const activitys = await client.Activity().list({ owner: "example", repo: "example" })
```


### Add

Create an instance: `const add = client.Add()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `any[]` | The GitHub user handles to add to the team. |

#### Example: Create

```ts
const add = await client.Add().create({
  enterprise: 'example_enterprise',
  team_id: 'example_team_id',
  usernames: [],
})
```


### ApiInsightsRouteStat

Create an instance: `const api_insights_route_stat = client.ApiInsightsRouteStat()`

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
| `rate_limited_request_count` | `number` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `number` | The total number of requests within the queried time period |

#### Example: List

```ts
const api_insights_route_stats = await client.ApiInsightsRouteStat().list({ actor_id: 1, actor_type: "example", org: "example", min_timestamp: "example" })
```


### ApiInsightsSubjectStat

Create an instance: `const api_insights_subject_stat = client.ApiInsightsSubjectStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `last_rate_limited_timestamp` | `string` |  |
| `last_request_timestamp` | `string` |  |
| `rate_limited_request_count` | `number` |  |
| `subject_id` | `number` |  |
| `subject_name` | `string` |  |
| `subject_type` | `string` |  |
| `total_request_count` | `number` |  |

#### Example: List

```ts
const api_insights_subject_stats = await client.ApiInsightsSubjectStat().list({ org_id: "example", min_timestamp: "example" })
```


### ApiInsightsSummaryStat

Create an instance: `const api_insights_summary_stat = client.ApiInsightsSummaryStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `rate_limited_request_count` | `number` | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `number` | The total number of requests within the queried time period |

#### Example: Load

```ts
const api_insights_summary_stat = await client.ApiInsightsSummaryStat().load({ min_timestamp: 'min_timestamp' })
```


### ApiInsightsTimeStat

Create an instance: `const api_insights_time_stat = client.ApiInsightsTimeStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate_limited_request_count` | `number` |  |
| `timestamp` | `string` |  |
| `total_request_count` | `number` |  |

#### Example: Load

```ts
const api_insights_time_stat = await client.ApiInsightsTimeStat().load({ org_id: 'org_id', user_id: 'user_id', min_timestamp: 'min_timestamp', timestamp_increment: 'timestamp_increment' })
```

#### Example: List

```ts
const api_insights_time_stats = await client.ApiInsightsTimeStat().list({ min_timestamp: "example", timestamp_increment: "example" })
```


### ApiInsightsUserStat

Create an instance: `const api_insights_user_stat = client.ApiInsightsUserStat()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `number` |  |
| `actor_name` | `string` |  |
| `actor_type` | `string` |  |
| `id` | `string` |  |
| `integration_id` | `number` |  |
| `last_rate_limited_timestamp` | `string` |  |
| `last_request_timestamp` | `string` |  |
| `oauth_application_id` | `number` |  |
| `rate_limited_request_count` | `number` |  |
| `total_request_count` | `number` |  |

#### Example: Load

```ts
const api_insights_user_stat = await client.ApiInsightsUserStat().load({ id: 'api_insights_user_stat_id', org_id: 'org_id', min_timestamp: 'min_timestamp' })
```


### ApiOverview

Create an instance: `const api_overview = client.ApiOverview()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `any[]` |  |
| `actions_macos` | `any[]` |  |
| `api` | `any[]` |  |
| `codespaces` | `any[]` |  |
| `copilot` | `any[]` |  |
| `dependabot` | `any[]` |  |
| `domains` | `Record<string, any>` |  |
| `git` | `any[]` |  |
| `github_enterprise_importer` | `any[]` |  |
| `hooks` | `any[]` |  |
| `importer` | `any[]` |  |
| `packages` | `any[]` |  |
| `pages` | `any[]` |  |
| `ssh_key_fingerprints` | `Record<string, any>` |  |
| `ssh_keys` | `any[]` |  |
| `verifiable_password_authentication` | `boolean` |  |
| `web` | `any[]` |  |

#### Example: List

```ts
const api_overviews = await client.ApiOverview().list()
```


### App

Create an instance: `const app = client.App()`

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
| `account` | `any` |  |
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is enabled for this repository |
| `app_id` | `number` |  |
| `app_slug` | `string` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `clone_url` | `string` |  |
| `code_search_index_status` | `Record<string, any>` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contact_email` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events` | `any[]` |  |
| `events_url` | `string` |  |
| `external_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_multiple_single_files` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the repository |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `pem` | `string` |  |
| `permissions` | `Record<string, any>` | The permissions granted to the user access token. |
| `private` | `boolean` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `any[]` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `slug` | `string` |  |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `suspended_at` | `string` |  |
| `suspended_by` | `Record<string, any>` | A GitHub user. |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `target_id` | `number` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` | `string` |  |

#### Example: List

```ts
const apps = await client.App().list()
```

#### Example: Create

```ts
const app = await client.App().create({
  code: 'example_code',
  access_tokens_url: 'example_access_tokens_url',
  account: 'example_account',
  app_id: 1,
  app_slug: 'example_app_slug',
  archive_url: 'example_archive_url',
  archived: true,
  assignees_url: 'example_assignees_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  clone_url: 'example_clone_url',
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  default_branch: 'example_default_branch',
  deployments_url: 'example_deployments_url',
  disabled: true,
  downloads_url: 'example_downloads_url',
  events_url: 'example_events_url',
  fork: true,
  forks: 1,
  forks_count: 1,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  git_url: 'example_git_url',
  has_downloads: true,
  has_issues: true,
  has_pages: true,
  has_projects: true,
  has_wiki: true,
  homepage: 'example_homepage',
  hooks_url: 'example_hooks_url',
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  language: 'example_language',
  languages_url: 'example_languages_url',
  license: {},
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  mirror_url: 'example_mirror_url',
  notifications_url: 'example_notifications_url',
  open_issues: 1,
  open_issues_count: 1,
  private: true,
  pulls_url: 'example_pulls_url',
  pushed_at: 'example_pushed_at',
  releases_url: 'example_releases_url',
  repositories_url: 'example_repositories_url',
  repository_selection: 'example_repository_selection',
  single_file_name: 'example_single_file_name',
  size: 1,
  ssh_url: 'example_ssh_url',
  stargazers_count: 1,
  stargazers_url: 'example_stargazers_url',
  statuses_url: 'example_statuses_url',
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  suspended_at: 'example_suspended_at',
  suspended_by: {},
  svn_url: 'example_svn_url',
  tags_url: 'example_tags_url',
  target_id: 1,
  target_type: 'example_target_type',
  teams_url: 'example_teams_url',
  trees_url: 'example_trees_url',
  url: 'example_url',
  watchers: 1,
  watchers_count: 1,
})
```


### Artifact

Create an instance: `const artifact = client.Artifact()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `head_branch` | `string` |  |
| `head_repository_id` | `number` |  |
| `head_sha` | `string` |  |
| `id` | `number` |  |
| `repository_id` | `number` |  |

#### Example: Load

```ts
const artifact = await client.Artifact().load({ id: 1, owner: 'owner', repo: 'repo' })
```


### Assignee

Create an instance: `const assignee = client.Assignee()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const assignees = await client.Assignee().list({ owner: "example", repo: "example" })
```


### AuthenticationToken

Create an instance: `const authentication_token = client.AuthenticationToken()`

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

```ts
const authentication_token = await client.AuthenticationToken().create({
  org_id: 'example_org_id',
})
```


### Authorization

Create an instance: `const authorization = client.Authorization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` | The access_token of the OAuth or GitHub application. |
| `app` | `Record<string, any>` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fingerprint` | `string` |  |
| `hashed_token` | `string` |  |
| `id` | `number` |  |
| `installation` | `Record<string, any>` |  |
| `note` | `string` |  |
| `note_url` | `string` |  |
| `permissions` | `Record<string, any>` | The permissions granted to the user access token. |
| `repositories` | `any[]` | The list of repository names to scope the user access token to. |
| `repository_ids` | `any[]` | The list of repository IDs to scope the user access token to. |
| `scopes` | `any[]` | A list of scopes that this authorization is in. |
| `target` | `string` | The name of the user or organization to scope the user access token to. |
| `target_id` | `number` | The ID of the user or organization to scope the user access token to. |
| `token` | `string` |  |
| `token_last_eight` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Create

```ts
const authorization = await client.Authorization().create({
  application_id: 'example_application_id',
  access_token: 'example_access_token',
  app: {},
  created_at: 'example_created_at',
  expires_at: 'example_expires_at',
  fingerprint: 'example_fingerprint',
  hashed_token: 'example_hashed_token',
  id: 1,
  installation: {},
  note: 'example_note',
  note_url: 'example_note_url',
  scopes: [],
  token: 'example_token',
  token_last_eight: 'example_token_last_eight',
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### Autolink

Create an instance: `const autolink = client.Autolink()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `is_alphanumeric` | `boolean` | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `string` | The prefix of a key that is linkified. |
| `updated_at` | `string` |  |
| `url_template` | `string` | A template for the target URL that is generated if a key was found. |

#### Example: Load

```ts
const autolink = await client.Autolink().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const autolinks = await client.Autolink().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const autolink = await client.Autolink().create({
  owner: 'example_owner',
  repo: 'example_repo',
  id: 1,
  is_alphanumeric: true,
  key_prefix: 'example_key_prefix',
  url_template: 'example_url_template',
})
```


### BaseGist

Create an instance: `const base_gist = client.BaseGist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `number` |  |
| `comments_enabled` | `boolean` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `Record<string, any>` |  |
| `forks` | `any[]` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `any[]` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `public` | `boolean` |  |
| `truncated` | `boolean` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: List

```ts
const base_gists = await client.BaseGist().list()
```

#### Example: Create

```ts
const base_gist = await client.BaseGist().create({
  gist_id: 'example_gist_id',
})
```


### BillingUsageReport

Create an instance: `const billing_usage_report = client.BillingUsageReport()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `number` | Discount amount of the usage line item. |
| `grossAmount` | `number` | Gross amount of the usage line item. |
| `netAmount` | `number` | Net amount of the usage line item. |
| `organizationName` | `string` | Name of the organization. |
| `pricePerUnit` | `number` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `number` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```ts
const billing_usage_reports = await client.BillingUsageReport().list({ org: "example" })
```


### BillingUsageReportUser

Create an instance: `const billing_usage_report_user = client.BillingUsageReportUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` | Date of the usage line item. |
| `discountAmount` | `number` | Discount amount of the usage line item. |
| `grossAmount` | `number` | Gross amount of the usage line item. |
| `netAmount` | `number` | Net amount of the usage line item. |
| `pricePerUnit` | `number` | Price per unit of the usage line item. |
| `product` | `string` | Product name. |
| `quantity` | `number` | Quantity of the usage line item. |
| `repositoryName` | `string` | Name of the repository. |
| `sku` | `string` | SKU name. |
| `unitType` | `string` | Unit type of the usage line item. |

#### Example: List

```ts
const billing_usage_report_users = await client.BillingUsageReportUser().list({ username: "example" })
```


### Blob

Create an instance: `const blob = client.Blob()`

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
| `size` | `number` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const blob = await client.Blob().load({ id: 'blob_id', owner: 'owner', repo: 'repo' })
```


### Block

Create an instance: `const block = client.Block()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const blocks = await client.Block().list()
```


### Branch

Create an instance: `const branch = client.Branch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Record<string, any>` | Commit |
| `id` | `string` |  |
| `links` | `Record<string, any>` |  |
| `name` | `string` |  |
| `pattern` | `string` |  |
| `protected` | `boolean` |  |
| `protection` | `Record<string, any>` | Branch Protection |
| `protection_url` | `string` |  |
| `required_approving_review_count` | `number` |  |

#### Example: Load

```ts
const branch = await client.Branch().load({ id: 'branch_id', owner: 'owner', repo: 'repo' })
```


### BranchProtection

Create an instance: `const branch_protection = client.BranchProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `Record<string, any>` |  |
| `allow_force_pushes` | `Record<string, any>` |  |
| `allow_fork_syncing` | `Record<string, any>` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `Record<string, any>` |  |
| `enabled` | `boolean` |  |
| `enforce_admins` | `Record<string, any>` | Protected Branch Admin Enforced |
| `id` | `string` |  |
| `lock_branch` | `Record<string, any>` | Whether to set the branch as read-only. |
| `name` | `string` |  |
| `protection_url` | `string` |  |
| `required_conversation_resolution` | `Record<string, any>` |  |
| `required_linear_history` | `Record<string, any>` |  |
| `required_pull_request_reviews` | `Record<string, any>` | Protected Branch Pull Request Review |
| `required_signatures` | `Record<string, any>` |  |
| `required_status_checks` | `Record<string, any>` | Protected Branch Required Status Check |
| `restrictions` | `Record<string, any>` | Branch Restriction Policy |
| `url` | `string` |  |

#### Example: Load

```ts
const branch_protection = await client.BranchProtection().load({ id: 'branch_protection_id', owner: 'owner', repo: 'repo' })
```


### BranchRestrictionPolicy

Create an instance: `const branch_restriction_policy = client.BranchRestrictionPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apps` | `any[]` |  |
| `apps_url` | `string` |  |
| `teams` | `any[]` |  |
| `teams_url` | `string` |  |
| `url` | `string` |  |
| `users` | `any[]` |  |
| `users_url` | `string` |  |

#### Example: List

```ts
const branch_restriction_policys = await client.BranchRestrictionPolicy().list({ branch_id: "example", owner: "example", repo: "example" })
```


### BranchShort

Create an instance: `const branch_short = client.BranchShort()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Record<string, any>` |  |
| `name` | `string` |  |
| `protected` | `boolean` |  |

#### Example: List

```ts
const branch_shorts = await client.BranchShort().list({ commit_sha: "example", owner: "example", repo: "example" })
```


### BranchWithProtection

Create an instance: `const branch_with_protection = client.BranchWithProtection()`

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

```ts
const branch_with_protection = await client.BranchWithProtection().create({
  id: 'example_id',
  owner: 'example_owner',
  repo: 'example_repo',
  new_name: 'example_new_name',
})
```


### Campaign

Create an instance: `const campaign = client.Campaign()`

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
| `alert_stats` | `Record<string, any>` |  |
| `closed_at` | `string` | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `any[]` | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | The contact link of the campaign. |
| `created_at` | `string` | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | The campaign description |
| `ends_at` | `string` | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `boolean` | If true, will automatically generate issues for the campaign. |
| `id` | `string` |  |
| `managers` | `any[]` | The campaign managers |
| `name` | `string` | The campaign name |
| `number` | `number` | The number of the newly created campaign |
| `published_at` | `string` | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Indicates whether a campaign is open or closed |
| `team_managers` | `any[]` | The campaign team managers |
| `updated_at` | `string` | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```ts
const campaign = await client.Campaign().load({ id: 1, org_id: 'org_id' })
```

#### Example: List

```ts
const campaigns = await client.Campaign().list({ org_id: "example" })
```

#### Example: Create

```ts
const campaign = await client.Campaign().create({
  org_id: 'example_org_id',
  alert_stats: {},
  code_scanning_alerts: [],
  contact_link: 'example_contact_link',
  created_at: 'example_created_at',
  description: 'example_description',
  ends_at: 'example_ends_at',
  managers: [],
  number: 1,
  state: 'example_state',
  updated_at: 'example_updated_at',
})
```


### Check

Create an instance: `const check = client.Check()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `check_suite` | `Record<string, any>` |  |
| `completed_at` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `deployment` | `Record<string, any>` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` |  |
| `external_id` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `Record<string, any>` | A commit. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `number` | The id of the check. |
| `latest_check_runs_count` | `number` |  |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `Record<string, any>` |  |
| `pull_requests` | `any[]` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `Record<string, any>` | Minimal Repository |
| `rerequestable` | `boolean` |  |
| `runs_rerequestable` | `boolean` |  |
| `started_at` | `string` |  |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const checks = await client.Check().list({ owner: "example", repo: "example" })
```


### CheckAnnotation

Create an instance: `const check_annotation = client.CheckAnnotation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation_level` | `string` |  |
| `blob_href` | `string` |  |
| `end_column` | `number` |  |
| `end_line` | `number` |  |
| `message` | `string` |  |
| `path` | `string` |  |
| `raw_details` | `string` |  |
| `start_column` | `number` |  |
| `start_line` | `number` |  |
| `title` | `string` |  |

#### Example: List

```ts
const check_annotations = await client.CheckAnnotation().list({ check_run_id: 1, owner: "example", repo: "example" })
```


### CheckAutomatedSecurityFix

Create an instance: `const check_automated_security_fix = client.CheckAutomatedSecurityFix()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `boolean` | Whether Dependabot security updates are paused for the repository. |

#### Example: Load

```ts
const check_automated_security_fix = await client.CheckAutomatedSecurityFix().load({ owner: 'owner', repo: 'repo' })
```


### CheckRun

Create an instance: `const check_run = client.CheckRun()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `any[]` | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `Record<string, any>` |  |
| `completed_at` | `string` | The time the check completed. |
| `conclusion` | `string` | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `Record<string, any>` | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | A reference for the run on the integrator's system. |
| `head_sha` | `string` | The SHA of the commit that is being checked. |
| `html_url` | `string` |  |
| `id` | `number` | The id of the check. |
| `name` | `string` | The name of the check. |
| `node_id` | `string` |  |
| `output` | `Record<string, any>` | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `any[]` | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `string` | The time that the check run began. |
| `status` | `string` | The phase of the lifecycle that the check is currently in. |
| `url` | `string` |  |

#### Example: Load

```ts
const check_run = await client.CheckRun().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const check_run = await client.CheckRun().create({
  owner: 'example_owner',
  repo: 'example_repo',
  app: {},
  check_suite: {},
  completed_at: 'example_completed_at',
  conclusion: 'example_conclusion',
  deployment: {},
  details_url: 'example_details_url',
  external_id: 'example_external_id',
  head_sha: 'example_head_sha',
  html_url: 'example_html_url',
  id: 1,
  name: 'example_name',
  node_id: 'example_node_id',
  output: {},
  pull_requests: [],
  started_at: 'example_started_at',
  status: 'example_status',
  url: 'example_url',
})
```


### CheckSuite

Create an instance: `const check_suite = client.CheckSuite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `after` | `string` |  |
| `app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `before` | `string` |  |
| `check_runs_url` | `string` |  |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `Record<string, any>` | A commit. |
| `head_sha` | `string` | The SHA of the head commit that is being checked. |
| `id` | `number` |  |
| `latest_check_runs_count` | `number` |  |
| `node_id` | `string` |  |
| `pull_requests` | `any[]` |  |
| `repository` | `Record<string, any>` | Minimal Repository |
| `rerequestable` | `boolean` |  |
| `runs_rerequestable` | `boolean` |  |
| `status` | `string` | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const check_suite = await client.CheckSuite().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const check_suite = await client.CheckSuite().create({
  owner: 'example_owner',
  repo: 'example_repo',
  after: 'example_after',
  app: {},
  before: 'example_before',
  check_runs_url: 'example_check_runs_url',
  conclusion: 'example_conclusion',
  created_at: 'example_created_at',
  head_branch: 'example_head_branch',
  head_commit: {},
  head_sha: 'example_head_sha',
  id: 1,
  latest_check_runs_count: 1,
  node_id: 'example_node_id',
  pull_requests: [],
  repository: {},
  status: 'example_status',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### CheckSuitePreference

Create an instance: `const check_suite_preference = client.CheckSuitePreference()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_trigger_checks` | `any[]` | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `Record<string, any>` |  |
| `repository` | `Record<string, any>` | Minimal Repository |


### Classroom

Create an instance: `const classroom = client.Classroom()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Returns whether classroom is archived or not. |
| `avatar_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the classroom. |
| `login` | `string` |  |
| `name` | `string` | The name of the classroom. |
| `node_id` | `string` |  |
| `url` | `string` | The url of the classroom on GitHub Classroom. |

#### Example: Load

```ts
const classroom = await client.Classroom().load({ id: 1 })
```

#### Example: List

```ts
const classrooms = await client.Classroom().list()
```


### ClassroomAcceptedAssignment

Create an instance: `const classroom_accepted_assignment = client.ClassroomAcceptedAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment` | `Record<string, any>` | A GitHub Classroom assignment |
| `commit_count` | `number` | Count of student commits. |
| `grade` | `string` | Most recent grade. |
| `id` | `number` | Unique identifier of the repository. |
| `passing` | `boolean` | Whether a submission passed. |
| `repository` | `Record<string, any>` | A GitHub repository view for Classroom |
| `students` | `any[]` |  |
| `submitted` | `boolean` | Whether an accepted assignment has been submitted. |

#### Example: List

```ts
const classroom_accepted_assignments = await client.ClassroomAcceptedAssignment().list({ assignment_id: 1 })
```


### ClassroomAssignment

Create an instance: `const classroom_assignment = client.ClassroomAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `number` | The number of students that have accepted the assignment. |
| `classroom` | `Record<string, any>` | A GitHub Classroom classroom |
| `deadline` | `string` | The time at which the assignment is due. |
| `editor` | `string` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `boolean` | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `number` | Unique identifier of the repository. |
| `invitations_enabled` | `boolean` | Whether the invitation link is enabled. |
| `invite_link` | `string` | The link that a student can use to accept the assignment. |
| `language` | `string` | The programming language used in the assignment. |
| `max_members` | `number` | The maximum allowable members per team. |
| `max_teams` | `number` | The maximum allowable teams for the assignment. |
| `passing` | `number` | The number of students that have passed the assignment. |
| `public_repo` | `boolean` | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Sluggified name of the assignment. |
| `starter_code_repository` | `Record<string, any>` | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `boolean` | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `number` | The number of students that have submitted the assignment. |
| `title` | `string` | Assignment title. |
| `type` | `string` | Whether it's a group assignment or individual assignment. |

#### Example: Load

```ts
const classroom_assignment = await client.ClassroomAssignment().load({ id: 1 })
```


### ClassroomAssignmentGrade

Create an instance: `const classroom_assignment_grade = client.ClassroomAssignmentGrade()`

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
| `points_available` | `number` | Number of points available for the assignment |
| `points_awarded` | `number` | Number of points awarded to the student |
| `roster_identifier` | `string` | Roster identifier of the student |
| `starter_code_url` | `string` | URL of the starter code for the assignment |
| `student_repository_name` | `string` | Name of the student's assignment repository |
| `student_repository_url` | `string` | URL of the student's assignment repository |
| `submission_timestamp` | `string` | Timestamp of the student's assignment submission |

#### Example: List

```ts
const classroom_assignment_grades = await client.ClassroomAssignmentGrade().list({ assignment_id: 1 })
```


### Clone

Create an instance: `const clone = client.Clone()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `timestamp` | `string` |  |
| `uniques` | `number` |  |

#### Example: List

```ts
const clones = await client.Clone().list({ owner: "example", repo: "example" })
```


### CodeFrequency

Create an instance: `const code_frequency = client.CodeFrequency()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const code_frequencys = await client.CodeFrequency().list({ owner: "example", repo: "example" })
```


### CodeFrequencyStat

Create an instance: `const code_frequency_stat = client.CodeFrequencyStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const code_frequency_stats = await client.CodeFrequencyStat().list({ owner: "example", repo: "example" })
```


### CodeOfConduct

Create an instance: `const code_of_conduct = client.CodeOfConduct()`

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

```ts
const code_of_conduct = await client.CodeOfConduct().load({ key: 'key' })
```

#### Example: List

```ts
const code_of_conducts = await client.CodeOfConduct().list()
```


### CodeScanning

Create an instance: `const code_scanning = client.CodeScanning()`

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
| `validate` | `boolean` | Whether the SARIF file will be validated according to the code scanning specifications. |

#### Example: Create

```ts
const code_scanning = await client.CodeScanning().create({
  owner: 'example_owner',
  repo: 'example_repo',
  commit_sha: 'example_commit_sha',
  ref: 'example_ref',
  sarif: 'example_sarif',
})
```


### CodeScanningAlert

Create an instance: `const code_scanning_alert = client.CodeScanningAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_request` | `boolean` | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` |  |
| `number` | `number` | The security alert number. |
| `rule` | `Record<string, any>` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `Record<string, any>` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```ts
const code_scanning_alert = await client.CodeScanningAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```


### CodeScanningAlertInstance

Create an instance: `const code_scanning_alert_instance = client.CodeScanningAlertInstance()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analysis_key` | `string` | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | Identifies the configuration under which the analysis was executed. |
| `classifications` | `any[]` | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` |  |
| `environment` | `string` | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` |  |
| `location` | `Record<string, any>` | Describe a region within a file for the alert. |
| `message` | `Record<string, any>` |  |
| `ref` | `string` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | State of a code scanning alert. |

#### Example: List

```ts
const code_scanning_alert_instances = await client.CodeScanningAlertInstance().list({ alert_number: 1, owner: "example", repo: "example" })
```


### CodeScanningAlertItem

Create an instance: `const code_scanning_alert_item = client.CodeScanningAlertItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` |  |
| `number` | `number` | The security alert number. |
| `rule` | `Record<string, any>` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `Record<string, any>` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```ts
const code_scanning_alert_items = await client.CodeScanningAlertItem().list({ owner: "example", repo: "example" })
```


### CodeScanningAnalysi

Create an instance: `const code_scanning_analysi = client.CodeScanningAnalysi()`

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
| `deletable` | `boolean` |  |
| `environment` | `string` | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `string` |  |
| `guid` | `string` | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `number` | Unique identifier for this analysis. |
| `name` | `string` | The name of the tool used to generate the code scanning analysis. |
| `ref` | `string` | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `number` | The total number of results in the analysis. |
| `rules_count` | `number` | The total number of rules used in the analysis. |
| `sarif_id` | `string` | An identifier for the upload. |
| `tool` | `Record<string, any>` |  |
| `url` | `string` | The REST API URL of the analysis resource. |
| `version` | `string` | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Warning generated when processing the analysis |

#### Example: Load

```ts
const code_scanning_analysi = await client.CodeScanningAnalysi().load({ analysis_id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const code_scanning_analysis = await client.CodeScanningAnalysi().list({ owner: "example", repo: "example" })
```


### CodeScanningAnalysisDeletion

Create an instance: `const code_scanning_analysis_deletion = client.CodeScanningAnalysisDeletion()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CodeScanningAutofix

Create an instance: `const code_scanning_autofix = client.CodeScanningAutofix()`

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

```ts
const code_scanning_autofix = await client.CodeScanningAutofix().load({ alert_number: 1, owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const code_scanning_autofix = await client.CodeScanningAutofix().create({
  alert_number: 1,
  owner: 'example_owner',
  repo: 'example_repo',
  description: 'example_description',
  started_at: 'example_started_at',
  status: 'example_status',
})
```


### CodeScanningAutofixCommit

Create an instance: `const code_scanning_autofix_commit = client.CodeScanningAutofixCommit()`

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

```ts
const code_scanning_autofix_commit = await client.CodeScanningAutofixCommit().create({
  alert_id: 1,
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### CodeScanningCodeqlDatabase

Create an instance: `const code_scanning_codeql_database = client.CodeScanningCodeqlDatabase()`

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
| `id` | `number` | The ID of the CodeQL database. |
| `language` | `string` | The language of the CodeQL database. |
| `login` | `string` |  |
| `name` | `string` | The name of the CodeQL database. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `size` | `number` | The size of the CodeQL database file in bytes. |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `Record<string, any>` | A GitHub user. |
| `url` | `string` | The URL at which to download the CodeQL database. |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const code_scanning_codeql_database = await client.CodeScanningCodeqlDatabase().load({ language: 'language', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const code_scanning_codeql_databases = await client.CodeScanningCodeqlDatabase().list({ owner: "example", repo: "example" })
```


### CodeScanningDefaultSetup

Create an instance: `const code_scanning_default_setup = client.CodeScanningDefaultSetup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `languages` | `any[]` | Languages to be analyzed. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `schedule` | `string` | The frequency of the periodic analysis. |
| `state` | `string` | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | Timestamp of latest configuration update. |

#### Example: List

```ts
const code_scanning_default_setups = await client.CodeScanningDefaultSetup().list({ owner: "example", repo: "example" })
```


### CodeScanningOrganizationAlertItem

Create an instance: `const code_scanning_organization_alert_item = client.CodeScanningOrganizationAlertItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_comment` | `string` | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `instances_url` | `string` | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `Record<string, any>` |  |
| `number` | `number` | The security alert number. |
| `repository` | `Record<string, any>` | A GitHub repository. |
| `rule` | `Record<string, any>` |  |
| `state` | `string` | State of a code scanning alert. |
| `tool` | `Record<string, any>` |  |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```ts
const code_scanning_organization_alert_items = await client.CodeScanningOrganizationAlertItem().list({ org_id: "example" })
```


### CodeScanningSarifsStatus

Create an instance: `const code_scanning_sarifs_status = client.CodeScanningSarifsStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analyses_url` | `string` | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `any[]` | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

#### Example: Load

```ts
const code_scanning_sarifs_status = await client.CodeScanningSarifsStatus().load({ owner: 'owner', repo: 'repo', sarif_id: 'sarif_id' })
```


### CodeScanningVariantAnalysi

Create an instance: `const code_scanning_variant_analysi = client.CodeScanningVariantAnalysi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions_workflow_run_id` | `number` | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `Record<string, any>` | A GitHub user. |
| `completed_at` | `string` | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `Record<string, any>` | A GitHub repository. |
| `created_at` | `string` | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | The reason for a failure of the variant analysis. |
| `id` | `number` | The ID of the variant analysis. |
| `language` | `string` | The language targeted by the CodeQL query |
| `query_language` | `string` | The language targeted by the CodeQL query |
| `query_pack` | `string` | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | The download url for the query pack. |
| `repositories` | `any[]` | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `any[]` | List of repository lists to run the query against. |
| `repository_owners` | `any[]` | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `any[]` |  |
| `skipped_repositories` | `Record<string, any>` | Information about repositories that were skipped from processing. |
| `status` | `string` |  |
| `updated_at` | `string` | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

#### Example: Load

```ts
const code_scanning_variant_analysi = await client.CodeScanningVariantAnalysi().load({ codeql_variant_analysis_id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const code_scanning_variant_analysi = await client.CodeScanningVariantAnalysi().create({
  owner: 'example_owner',
  repo: 'example_repo',
  actor: {},
  controller_repo: {},
  id: 1,
  language: 'example_language',
  query_language: 'example_query_language',
  query_pack: 'example_query_pack',
  query_pack_url: 'example_query_pack_url',
  skipped_repositories: {},
  status: 'example_status',
})
```


### CodeScanningVariantAnalysisRepoTask

Create an instance: `const code_scanning_variant_analysis_repo_task = client.CodeScanningVariantAnalysisRepoTask()`

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
| `fork` | `boolean` | Whether the repository is a fork. |
| `forks_url` | `string` | The API URL to list the forks of the repository. |
| `full_name` | `string` | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `number` | A unique identifier of the repository. |
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
| `owner` | `Record<string, any>` | A GitHub user. |
| `private` | `boolean` | Whether the repository is private. |
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

```ts
const code_scanning_variant_analysis_repo_task = await client.CodeScanningVariantAnalysisRepoTask().load({ codeql_variant_analysis_id: 1, owner: 'owner', repo: 'repo', repo_name: 'repo_name', repo_owner: 'repo_owner' })
```


### CodeSecurity

Create an instance: `const code_security = client.CodeSecurity()`

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
| `code_scanning_default_setup_options` | `Record<string, any>` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `Record<string, any>` | Feature options for code scanning |
| `created_at` | `string` |  |
| `default_for_new_repos` | `string` | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `Record<string, any>` | Feature options for Automatic dependency submission |
| `description` | `string` | A description of the code security configuration |
| `enforcement` | `string` | The enforcement status for a security configuration |
| `html_url` | `string` | The URL of the configuration |
| `id` | `number` | The ID of the code security configuration |
| `name` | `string` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `Record<string, any>` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |


### CodeSecurityConfiguration

Create an instance: `const code_security_configuration = client.CodeSecurityConfiguration()`

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
| `code_scanning_default_setup_options` | `Record<string, any>` | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `Record<string, any>` | Feature options for code scanning |
| `code_security` | `string` | The enablement status of GitHub Code Security features. |
| `created_at` | `string` |  |
| `dependabot_alerts` | `string` | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `Record<string, any>` | Feature options for Automatic dependency submission |
| `description` | `string` | A description of the code security configuration |
| `enforcement` | `string` | The enforcement status for a security configuration |
| `html_url` | `string` | The URL of the configuration |
| `id` | `number` | The ID of the code security configuration |
| `name` | `string` | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | The enablement status of private vulnerability reporting |
| `scope` | `string` | The type of repositories to attach the configuration to. |
| `secret_protection` | `string` | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `string` | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `Record<string, any>` | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `any[]` | An array of repository IDs to attach the configuration to. |
| `target_type` | `string` | The type of the code security configuration. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the configuration |

#### Example: Load

```ts
const code_security_configuration = await client.CodeSecurityConfiguration().load({ id: 1, enterprise: 'enterprise' })
```

#### Example: List

```ts
const code_security_configurations = await client.CodeSecurityConfiguration().list({ org_id: "example" })
```

#### Example: Create

```ts
const code_security_configuration = await client.CodeSecurityConfiguration().create({
  enterprise: 'example_enterprise',
  scope: 'example_scope',
})
```


### CodeSecurityConfigurationRepository

Create an instance: `const code_security_configuration_repository = client.CodeSecurityConfigurationRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `repository` | `Record<string, any>` | A GitHub repository. |
| `status` | `string` | The attachment status of the code security configuration on the repository. |

#### Example: List

```ts
const code_security_configuration_repositorys = await client.CodeSecurityConfigurationRepository().list({ configuration_id: 1 })
```


### CodeSecurityDefaultConfiguration

Create an instance: `const code_security_default_configuration = client.CodeSecurityDefaultConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | A code security configuration |
| `default_for_new_repos` | `any` | The visibility of newly created repositories for which the code security configuration will be applied to by default |

#### Example: List

```ts
const code_security_default_configurations = await client.CodeSecurityDefaultConfiguration().list({ enterprise: "example" })
```


### CodeownersError

Create an instance: `const codeowners_error = client.CodeownersError()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column` | `number` | The column number where this errors occurs. |
| `kind` | `string` | The type of error. |
| `line` | `number` | The line number where this errors occurs. |
| `message` | `string` | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `string` | The path of the file where the error occured. |
| `source` | `string` | The contents of the line where the error occurs. |
| `suggestion` | `string` | Suggested action to fix the error. |

#### Example: List

```ts
const codeowners_errors = await client.CodeownersError().list({ owner: "example", repo: "example" })
```


### Codespace

Create an instance: `const codespace = client.Codespace()`

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
| `accepted` | `boolean` | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignees_url` | `string` |  |
| `billable_owner` | `Record<string, any>` | A GitHub user. |
| `blobs_url` | `string` |  |
| `branch` | `string` | Name of the exported branch |
| `branches_url` | `string` |  |
| `client_ip` | `string` | IP for location auto-detection when proxying a request |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `completed_at` | `string` | Completion time of the last export operation |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `cpus` | `number` | How many cores are available to the codespace. |
| `created_at` | `string` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `defaults` | `Record<string, any>` |  |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `devcontainer_path` | `string` | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `boolean` |  |
| `display_name` | `string` | Display name for this codespace. |
| `downloads_url` | `string` |  |
| `encrypted_value` | `string` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `string` | UUID identifying this codespace's environment. |
| `events_url` | `string` |  |
| `export_url` | `string` | Url for fetching export details |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `geo` | `string` | The geographic area for this codespace. |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_status` | `Record<string, any>` | Details about the codespace's git repository. |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` | Web url for the exported branch |
| `id` | `string` | Id for the export details |
| `idle_timeout_minutes` | `number` | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `string` | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `boolean` |  |
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
| `license` | `Record<string, any>` |  |
| `location` | `string` | The initally assigned location of a new codespace. |
| `machine` | `Record<string, any>` | A description of the machine powering a codespace. |
| `machines_url` | `string` | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `number` | How much memory is available to the codespace. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `multi_repo_permissions_opt_out` | `boolean` | Whether to authorize requested permissions from devcontainer.json |
| `name` | `string` | The name of the secret. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `operating_system` | `string` | The operating system of the machine. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `path` | `string` |  |
| `pending_operation` | `boolean` | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `Record<string, any>` |  |
| `prebuild` | `boolean` | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `boolean` | Whether the new repository should be private. |
| `publish_url` | `string` | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` |  |
| `recent_folders` | `any[]` | Recently opened folders inside the codespace. |
| `ref` | `string` | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` |  |
| `repository` | `Record<string, any>` | Minimal Repository |
| `retention_expires_at` | `string` | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `number` | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` |  |
| `runtime_constraints` | `Record<string, any>` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `selected_repositories_url` | `string` | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `any[]` | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `any[]` | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `string` | Git commit SHA of the exported branch |
| `size` | `number` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `start_url` | `string` | API URL to start this codespace. |
| `state` | `string` | State of the latest export |
| `statuses_url` | `string` |  |
| `stop_url` | `string` | API URL to stop this codespace. |
| `storage_in_bytes` | `number` | How much storage is available to the codespace. |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template` | `string` |  |
| `title` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | API URL for this codespace. |
| `visibility` | `string` | The type of repositories in the organization that the secret is visible to |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |
| `web_url` | `string` | URL to access this codespace on the web. |
| `working_directory` | `string` | Working directory for this codespace |

#### Example: Load

```ts
const codespace = await client.Codespace().load({ id: 'codespace_id' })
```

#### Example: List

```ts
const codespaces = await client.Codespace().list()
```

#### Example: Create

```ts
const codespace = await client.Codespace().create({
  accepted: true,
  archive_url: 'example_archive_url',
  assignees_url: 'example_assignees_url',
  billable_owner: {},
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  cpus: 1,
  created_at: 'example_created_at',
  defaults: {},
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  downloads_url: 'example_downloads_url',
  environment_id: 'example_environment_id',
  events_url: 'example_events_url',
  fork: true,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_status: {},
  git_tags_url: 'example_git_tags_url',
  hooks_url: 'example_hooks_url',
  idle_timeout_minutes: 1,
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  key: 'example_key',
  key_id: 'example_key_id',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  languages_url: 'example_languages_url',
  last_used_at: 'example_last_used_at',
  location: 'example_location',
  machine: {},
  machines_url: 'example_machines_url',
  memory_in_bytes: 1,
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  name: 'example_name',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  operating_system: 'example_operating_system',
  owner: {},
  path: 'example_path',
  prebuild: true,
  prebuild_availability: 'example_prebuild_availability',
  pulls_url: 'example_pulls_url',
  recent_folders: [],
  releases_url: 'example_releases_url',
  repository: {},
  selected_usernames: [],
  stargazers_url: 'example_stargazers_url',
  start_url: 'example_start_url',
  statuses_url: 'example_statuses_url',
  stop_url: 'example_stop_url',
  storage_in_bytes: 1,
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  trees_url: 'example_trees_url',
  updated_at: 'example_updated_at',
  visibility: 'example_visibility',
  web_url: 'example_web_url',
})
```


### Collaborator

Create an instance: `const collaborator = client.Collaborator()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `permissions` | `Record<string, any>` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `role_name` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const collaborators = await client.Collaborator().list({ project_id: 1 })
```


### CombinedBillingUsage

Create an instance: `const combined_billing_usage = client.CombinedBillingUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_left_in_billing_cycle` | `number` | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `number` | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `number` | Estimated sum of free and paid storage space (GB) used in billing cycle. |

#### Example: Load

```ts
const combined_billing_usage = await client.CombinedBillingUsage().load({ org_id: 'org_id' })
```


### CombinedCommitStatus

Create an instance: `const combined_commit_status = client.CombinedCommitStatus()`

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
| `id` | `number` |  |
| `node_id` | `string` |  |
| `required` | `boolean` |  |
| `state` | `string` |  |
| `target_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const combined_commit_statuss = await client.CombinedCommitStatus().list({ owner: "example", ref: "example", repo: "example" })
```


### Commit

Create an instance: `const commit = client.Commit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `any` |  |
| `base` | `string` | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` |  |
| `commit` | `Record<string, any>` |  |
| `commit_message` | `string` | Commit message to use for the merge commit. |
| `committer` | `any` |  |
| `files` | `any[]` |  |
| `head` | `string` | The head to merge. |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `parents` | `any[]` |  |
| `sha` | `string` |  |
| `stats` | `Record<string, any>` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const commit = await client.Commit().load({ id: 'commit_id', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const commits = await client.Commit().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const commit = await client.Commit().create({
  owner: 'example_owner',
  repo: 'example_repo',
  author: 'example_author',
  base: 'example_base',
  comments_url: 'example_comments_url',
  commit: {},
  committer: 'example_committer',
  head: 'example_head',
  html_url: 'example_html_url',
  node_id: 'example_node_id',
  parents: [],
  sha: 'example_sha',
  url: 'example_url',
})
```


### CommitActivity

Create an instance: `const commit_activity = client.CommitActivity()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days` | `any[]` |  |
| `total` | `number` |  |
| `week` | `number` |  |

#### Example: List

```ts
const commit_activitys = await client.CommitActivity().list({ owner: "example", repo: "example" })
```


### CommitComment

Create an instance: `const commit_comment = client.CommitComment()`

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
| `id` | `number` |  |
| `line` | `number` | **Closing down notice**. |
| `node_id` | `string` |  |
| `path` | `string` | Relative path of the file to comment on. |
| `position` | `number` | Line index in the diff to comment on. |
| `reactions` | `Record<string, any>` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Load

```ts
const commit_comment = await client.CommitComment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const commit_comments = await client.CommitComment().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const commit_comment = await client.CommitComment().create({
  commit_sha: 'example_commit_sha',
  owner: 'example_owner',
  repo: 'example_repo',
  author_association: 'example_author_association',
  body: 'example_body',
  commit_id: 'example_commit_id',
  created_at: 'example_created_at',
  html_url: 'example_html_url',
  id: 1,
  line: 1,
  node_id: 'example_node_id',
  path: 'example_path',
  position: 1,
  reactions: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### CommitComparison

Create an instance: `const commit_comparison = client.CommitComparison()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ahead_by` | `number` |  |
| `base_commit` | `Record<string, any>` | Commit |
| `behind_by` | `number` |  |
| `commits` | `any[]` |  |
| `diff_url` | `string` |  |
| `files` | `any[]` |  |
| `html_url` | `string` |  |
| `merge_base_commit` | `Record<string, any>` | Commit |
| `patch_url` | `string` |  |
| `permalink_url` | `string` |  |
| `status` | `string` |  |
| `total_commits` | `number` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const commit_comparison = await client.CommitComparison().load({ basehead: 'basehead', owner: 'owner', repo: 'repo' })
```


### CommunityProfile

Create an instance: `const community_profile = client.CommunityProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code_of_conduct` | `Record<string, any>` | Code of Conduct Simple |
| `code_of_conduct_file` | `Record<string, any>` |  |
| `contributing` | `Record<string, any>` |  |
| `issue_template` | `Record<string, any>` |  |
| `license` | `Record<string, any>` | License Simple |
| `pull_request_template` | `Record<string, any>` |  |
| `readme` | `Record<string, any>` |  |

#### Example: Load

```ts
const community_profile = await client.CommunityProfile().load({ owner: 'owner', repo: 'repo' })
```


### ContentFile

Create an instance: `const content_file = client.ContentFile()`

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

```ts
const content_file = await client.ContentFile().load({ owner: 'owner', repo: 'repo' })
```


### ContentTraffic

Create an instance: `const content_traffic = client.ContentTraffic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `path` | `string` |  |
| `title` | `string` |  |
| `uniques` | `number` |  |

#### Example: List

```ts
const content_traffics = await client.ContentTraffic().list({ owner: "example", repo: "example" })
```


### Contributor

Create an instance: `const contributor = client.Contributor()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Record<string, any>` | A GitHub user. |
| `avatar_url` | `string` |  |
| `contributions` | `number` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `total` | `number` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |
| `weeks` | `any[]` |  |

#### Example: List

```ts
const contributors = await client.Contributor().list({ owner: "example", repo: "example" })
```


### Copilot

Create an instance: `const copilot = client.Copilot()`

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
| `assignee` | `Record<string, any>` | A GitHub user. |
| `assigning_team` | `any` | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `Record<string, any>` | A GitHub organization. |
| `pending_cancellation_date` | `string` | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `any[]` | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `any[]` | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | **Closing down notice:** This field is no longer relevant and is closing down. |

#### Example: Load

```ts
const copilot = await client.Copilot().load({ org_id: 'org_id', username: 'username' })
```

#### Example: List

```ts
const copilots = await client.Copilot().list({ org_id: "example" })
```

#### Example: Create

```ts
const copilot = await client.Copilot().create({
  org_id: 'example_org_id',
  assignee: {},
  created_at: 'example_created_at',
  organization: {},
  selected_teams: [],
  selected_usernames: [],
})
```


### CopilotOrganizationDetail

Create an instance: `const copilot_organization_detail = client.CopilotOrganizationDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_this_cycle` | `number` | The number of seats that have used Copilot during the current billing cycle. |
| `added_this_cycle` | `number` | Seats added during the current billing cycle. |
| `inactive_this_cycle` | `number` | The number of seats that have not used Copilot during the current billing cycle. |
| `pending_cancellation` | `number` | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `pending_invitation` | `number` | The number of users who have been invited to receive a Copilot seat through this organization. |
| `total` | `number` | The total number of seats being billed for the organization as of the current billing cycle. |

#### Example: Load

```ts
const copilot_organization_detail = await client.CopilotOrganizationDetail().load({ org_id: 'org_id' })
```


### CopilotUsageMetricsDay

Create an instance: `const copilot_usage_metrics_day = client.CopilotUsageMetricsDay()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `copilot_dotcom_chat` | `Record<string, any>` | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `Record<string, any>` | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `Record<string, any>` | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `Record<string, any>` | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `number` | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `number` | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

#### Example: List

```ts
const copilot_usage_metrics_days = await client.CopilotUsageMetricsDay().list({ org_id: "example" })
```


### Credential

Create an instance: `const credential = client.Credential()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credentials` | `any[]` | A list of credentials to be revoked, up to 1000 per request. |

#### Example: Create

```ts
const credential = await client.Credential().create({
  credentials: [],
})
```


### CustomProperty

Create an instance: `const custom_property = client.CustomProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_values` | `any[]` | An ordered list of the allowed values of the property. |
| `default_value` | `any` | Default value of the property |
| `description` | `string` | Short description of the property |
| `properties` | `any[]` | The array of custom properties to create or update. |
| `property_name` | `string` | The name of the property |
| `required` | `boolean` | Whether the property is required. |
| `source_type` | `string` | The source type of the property |
| `url` | `string` | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | The type of the value for the property |
| `values_editable_by` | `string` | Who can edit the values of the property |

#### Example: Load

```ts
const custom_property = await client.CustomProperty().load({ custom_property_name: 'custom_property_name', org_id: 'org_id' })
```

#### Example: List

```ts
const custom_propertys = await client.CustomProperty().list({ org_id: "example" })
```


### CustomPropertyValue

Create an instance: `const custom_property_value = client.CustomPropertyValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `property_name` | `string` | The name of the property |
| `value` | `any` | The value assigned to the property |

#### Example: List

```ts
const custom_property_values = await client.CustomPropertyValue().list({ owner: "example", repo: "example" })
```


### Dependabot

Create an instance: `const dependabot = client.Dependabot()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignees_url` | `string` |  |
| `avatar_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `default_level` | `string` | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `is_template` | `boolean` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` |  |
| `login` | `string` |  |
| `members_url` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the secret. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `public_members_url` | `string` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository_ids_to_add` | `any[]` | List of repository IDs to add. |
| `repository_ids_to_remove` | `any[]` | List of repository IDs to remove. |
| `role_name` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `selected_repositories_url` | `string` |  |
| `selected_repository_ids` | `any[]` | An array of repository ids that can access the organization secret. |
| `size` | `number` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` | Visibility of a secret |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |

#### Example: List

```ts
const dependabots = await client.Dependabot().list()
```


### DependabotAlert

Create an instance: `const dependabot_alert = client.DependabotAlert()`

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
| `dependency` | `Record<string, any>` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `number` | `number` | The security alert number. |
| `security_advisory` | `Record<string, any>` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `Record<string, any>` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: Load

```ts
const dependabot_alert = await client.DependabotAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const dependabot_alerts = await client.DependabotAlert().list({ owner: "example", repo: "example" })
```


### DependabotAlertWithRepository

Create an instance: `const dependabot_alert_with_repository = client.DependabotAlertWithRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_dismissed_at` | `string` | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `Record<string, any>` | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `Record<string, any>` | A GitHub user. |
| `dismissed_comment` | `string` | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | The reason that the alert was dismissed. |
| `fixed_at` | `string` | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `number` | `number` | The security alert number. |
| `repository` | `Record<string, any>` | A GitHub repository. |
| `security_advisory` | `Record<string, any>` | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `Record<string, any>` | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | The state of the Dependabot alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |

#### Example: List

```ts
const dependabot_alert_with_repositorys = await client.DependabotAlertWithRepository().list({ org_id: "example" })
```


### DependabotPublicKey

Create an instance: `const dependabot_public_key = client.DependabotPublicKey()`

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

```ts
const dependabot_public_key = await client.DependabotPublicKey().load({ org_id: 'org_id' })
```


### DependabotRepositoryAccessDetail

Create an instance: `const dependabot_repository_access_detail = client.DependabotRepositoryAccessDetail()`

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
| `fork` | `boolean` | Whether the repository is a fork. |
| `forks_url` | `string` | The API URL to list the forks of the repository. |
| `full_name` | `string` | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `string` | The API URL to list the hooks on the repository. |
| `html_url` | `string` | The URL to view the repository on GitHub.com. |
| `id` | `number` | A unique identifier of the repository. |
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
| `owner` | `Record<string, any>` | A GitHub user. |
| `private` | `boolean` | Whether the repository is private. |
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

```ts
const dependabot_repository_access_details = await client.DependabotRepositoryAccessDetail().list({ org: "example" })
```


### DependabotSecret

Create an instance: `const dependabot_secret = client.DependabotSecret()`

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

```ts
const dependabot_secret = await client.DependabotSecret().load({ id: 'dependabot_secret_id', owner: 'owner', repo: 'repo' })
```


### DependencyGraph

Create an instance: `const dependency_graph = client.DependencyGraph()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detector` | `Record<string, any>` | A description of the detector used. |
| `job` | `Record<string, any>` |  |
| `manifests` | `Record<string, any>` | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `Record<string, any>` | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | The repository branch that triggered this snapshot. |
| `scanned` | `string` | The time at which the snapshot was scanned. |
| `sha` | `string` | The commit SHA associated with this dependency snapshot. |
| `version` | `number` | The version of the repository snapshot submission. |

#### Example: Create

```ts
const dependency_graph = await client.DependencyGraph().create({
  owner: 'example_owner',
  repo: 'example_repo',
  detector: {},
  job: {},
  ref: 'example_ref',
  scanned: 'example_scanned',
  sha: 'example_sha',
  version: 1,
})
```


### DependencyGraphDiff

Create an instance: `const dependency_graph_diff = client.DependencyGraphDiff()`

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
| `vulnerabilities` | `any[]` |  |

#### Example: Load

```ts
const dependency_graph_diff = await client.DependencyGraphDiff().load({ basehead: 'basehead', owner: 'owner', repo: 'repo' })
```


### DependencyGraphSpdxSbom

Create an instance: `const dependency_graph_spdx_sbom = client.DependencyGraphSpdxSbom()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `SPDXID` | `string` | The SPDX identifier for the SPDX document. |
| `comment` | `string` | An optional comment about the SPDX document. |
| `creationInfo` | `Record<string, any>` |  |
| `dataLicense` | `string` | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | The namespace for the SPDX document. |
| `name` | `string` | The name of the SPDX document. |
| `packages` | `any[]` |  |
| `relationships` | `any[]` |  |
| `spdxVersion` | `string` | The version of the SPDX specification that this document conforms to. |

#### Example: Load

```ts
const dependency_graph_spdx_sbom = await client.DependencyGraphSpdxSbom().load({ owner: 'owner', repo: 'repo' })
```


### DeployKey

Create an instance: `const deploy_key = client.DeployKey()`

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
| `enabled` | `boolean` |  |
| `id` | `number` |  |
| `key` | `string` | The contents of the key. |
| `last_used` | `string` |  |
| `read_only` | `boolean` | If `true`, the key will only be able to read repository contents. |
| `title` | `string` | A name for the key. |
| `url` | `string` |  |
| `verified` | `boolean` |  |

#### Example: Load

```ts
const deploy_key = await client.DeployKey().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const deploy_keys = await client.DeployKey().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const deploy_key = await client.DeployKey().create({
  owner: 'example_owner',
  repo: 'example_repo',
  created_at: 'example_created_at',
  id: 1,
  key: 'example_key',
  read_only: true,
  title: 'example_title',
  url: 'example_url',
  verified: true,
})
```


### Deployment

Create an instance: `const deployment = client.Deployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_merge` | `boolean` | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | A comment to accompany the deployment review |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` | A GitHub user. |
| `description` | `string` | Short description of the deployment. |
| `environment` | `string` | Name for the target deployment environment. |
| `environment_ids` | `any[]` | The list of environment ids to approve or reject |
| `id` | `number` | Unique identifier of the deployment |
| `node_id` | `string` |  |
| `original_environment` | `string` |  |
| `payload` | `any` |  |
| `performed_via_github_app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `boolean` | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | The ref to deploy. |
| `repository_url` | `string` |  |
| `required_contexts` | `any[]` | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `string` |  |
| `state` | `string` | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `string` |  |
| `task` | `string` | Parameter to specify a task to execute |
| `transient_environment` | `boolean` | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const deployment = await client.Deployment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const deployments = await client.Deployment().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const deployment = await client.Deployment().create({
  owner: 'example_owner',
  repo: 'example_repo',
  comment: 'example_comment',
  created_at: 'example_created_at',
  creator: {},
  description: 'example_description',
  environment: 'example_environment',
  environment_ids: [],
  id: 1,
  node_id: 'example_node_id',
  payload: 'example_payload',
  performed_via_github_app: {},
  ref: 'example_ref',
  repository_url: 'example_repository_url',
  sha: 'example_sha',
  state: 'example_state',
  statuses_url: 'example_statuses_url',
  task: 'example_task',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### DeploymentBranchPolicy

Create an instance: `const deployment_branch_policy = client.DeploymentBranchPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The unique identifier of the branch or tag policy. |
| `name` | `string` | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `string` |  |
| `type` | `string` | Whether this rule targets a branch or tag. |

#### Example: Load

```ts
const deployment_branch_policy = await client.DeploymentBranchPolicy().load({ id: 1, environment_id: 'environment_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const deployment_branch_policy = await client.DeploymentBranchPolicy().create({
  environment_name: 'example_environment_name',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### DeploymentProtectionRule

Create an instance: `const deployment_protection_rule = client.DeploymentProtectionRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `number` | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `string` | The URL for the endpoint to get details about the app. |
| `node_id` | `string` | The node ID for the deployment protection rule integration. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |

#### Example: Load

```ts
const deployment_protection_rule = await client.DeploymentProtectionRule().load({ id: 1, environment_id: 'environment_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const deployment_protection_rule = await client.DeploymentProtectionRule().create({
  environment_name: 'example_environment_name',
  owner: 'example_owner',
  repo: 'example_repo',
  id: 1,
  integration_url: 'example_integration_url',
  node_id: 'example_node_id',
  slug: 'example_slug',
})
```


### DeploymentStatus

Create an instance: `const deployment_status = client.DeploymentStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_inactive` | `boolean` | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` | A GitHub user. |
| `deployment_url` | `string` |  |
| `description` | `string` | A short description of the status. |
| `environment` | `string` | The environment of the deployment that the status is for. |
| `environment_url` | `string` | The URL for accessing your environment. |
| `id` | `number` |  |
| `log_url` | `string` | The URL to associate with this status. |
| `node_id` | `string` |  |
| `performed_via_github_app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | Closing down notice: the URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const deployment_status = await client.DeploymentStatus().load({ id: 1, deployment_id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const deployment_statuss = await client.DeploymentStatus().list({ id: 1, owner: "example", repo: "example" })
```

#### Example: Create

```ts
const deployment_status = await client.DeploymentStatus().create({
  id: 1,
  owner: 'example_owner',
  repo: 'example_repo',
  created_at: 'example_created_at',
  creator: {},
  deployment_url: 'example_deployment_url',
  description: 'example_description',
  node_id: 'example_node_id',
  performed_via_github_app: {},
  repository_url: 'example_repository_url',
  state: 'example_state',
  target_url: 'example_target_url',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### DiffEntry

Create an instance: `const diff_entry = client.DiffEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `additions` | `number` |  |
| `blob_url` | `string` |  |
| `changes` | `number` |  |
| `contents_url` | `string` |  |
| `deletions` | `number` |  |
| `filename` | `string` |  |
| `patch` | `string` |  |
| `previous_filename` | `string` |  |
| `raw_url` | `string` |  |
| `sha` | `string` |  |
| `status` | `string` |  |

#### Example: List

```ts
const diff_entrys = await client.DiffEntry().list({ owner: "example", pull_number: 1, repo: "example" })
```


### Email

Create an instance: `const email = client.Email()`

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
| `primary` | `boolean` |  |
| `verified` | `boolean` |  |
| `visibility` | `string` | Denotes whether an email is publicly visible. |

#### Example: List

```ts
const emails = await client.Email().list()
```

#### Example: Create

```ts
const email = await client.Email().create({
})
```


### Emoji

Create an instance: `const emoji = client.Emoji()`

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

```ts
const emoji = await client.Emoji().load({ id: 'emoji_id' })
```


### EmptyObject

Create an instance: `const empty_object = client.EmptyObject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attestations` | `any[]` |  |
| `enable_debug_logging` | `boolean` | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `any[]` | Array of unique strings. |
| `key_id` | `string` | ID of the key you used to encrypt the secret. |
| `languages` | `any[]` | CodeQL languages to be analyzed. |
| `name` | `string` | The name of the variable. |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `runner_label` | `string` | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | Runner type to be used. |
| `selected_repository_ids` | `any[]` | An array of repository ids that can access the organization variable. |
| `state` | `string` | The desired state of code scanning default setup. |
| `threat_model` | `string` | Threat model to be used for code scanning analysis. |
| `use_default` | `boolean` | Whether to use the default template or not. |
| `value` | `string` | The value of the variable. |
| `visibility` | `string` | The type of repositories in the organization that can access the variable. |

#### Example: Load

```ts
const empty_object = await client.EmptyObject().load({ subject_digest: 'subject_digest', username: 'username' })
```

#### Example: Create

```ts
const empty_object = await client.EmptyObject().create({
  org_id: 'example_org_id',
  encrypted_value: 'example_encrypted_value',
  key_id: 'example_key_id',
  name: 'example_name',
  use_default: true,
  value: 'example_value',
  visibility: 'example_visibility',
})
```


### EnterpriseTeam

Create an instance: `const enterprise_team = client.EnterpriseTeam()`

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
| `id` | `number` |  |
| `members_url` | `string` |  |
| `name` | `string` | The name of the team. |
| `organization_selection_type` | `string` |  |
| `slug` | `string` |  |
| `sync_to_organizations` | `string` | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const enterprise_team = await client.EnterpriseTeam().load({ id: 'enterprise_team_id', enterprise: 'enterprise' })
```

#### Example: List

```ts
const enterprise_teams = await client.EnterpriseTeam().list({ enterprise: "example" })
```

#### Example: Create

```ts
const enterprise_team = await client.EnterpriseTeam().create({
  enterprise: 'example_enterprise',
  created_at: 'example_created_at',
  group_id: 'example_group_id',
  html_url: 'example_html_url',
  id: 1,
  members_url: 'example_members_url',
  name: 'example_name',
  slug: 'example_slug',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### EnterpriseTeamMembership

Create an instance: `const enterprise_team_membership = client.EnterpriseTeamMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Environment

Create an instance: `const environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `Record<string, any>` | The type of deployment branch policy for this environment. |
| `html_url` | `string` |  |
| `id` | `number` | The id of the environment. |
| `name` | `string` | The name of the environment. |
| `node_id` | `string` |  |
| `prevent_self_review` | `boolean` | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `any[]` | Built-in deployment protection rules for the environment. |
| `reviewers` | `any[]` | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` |  |
| `wait_timer` | `number` | The amount of time to delay a job after the job is initially triggered. |

#### Example: Load

```ts
const environment = await client.Environment().load({ id: 'environment_id', owner: 'owner', repo: 'repo' })
```


### EnvironmentApproval

Create an instance: `const environment_approval = client.EnvironmentApproval()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` | The comment submitted with the deployment review |
| `environments` | `any[]` | The list of environments that were approved or rejected |
| `state` | `string` | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: List

```ts
const environment_approvals = await client.EnvironmentApproval().list({ owner: "example", repo: "example", run_id: 1 })
```


### Event

Create an instance: `const event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | Actor |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `org` | `Record<string, any>` | Actor |
| `payload` | `Record<string, any>` |  |
| `public` | `boolean` |  |
| `repo` | `Record<string, any>` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const event = await client.Event().load({ org: 'org', username: 'username' })
```

#### Example: List

```ts
const events = await client.Event().list()
```


### Feed

Create an instance: `const feed = client.Feed()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_actor_url` | `string` |  |
| `current_user_organization_url` | `string` |  |
| `current_user_organization_urls` | `any[]` |  |
| `current_user_public_url` | `string` |  |
| `current_user_url` | `string` |  |
| `links` | `Record<string, any>` |  |
| `repository_discussions_category_url` | `string` | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` |  |
| `timeline_url` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```ts
const feeds = await client.Feed().list()
```


### FileCommit

Create an instance: `const file_commit = client.FileCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Record<string, any>` | The author of the file. |
| `branch` | `string` | The branch name. |
| `commit` | `Record<string, any>` |  |
| `committer` | `Record<string, any>` | The person that committed the file. |
| `content` | `Record<string, any>` | The new file content, using Base64 encoding. |
| `message` | `string` | The commit message. |
| `sha` | `string` | **Required if you are updating a file**. |


### Follower

Create an instance: `const follower = client.Follower()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const followers = await client.Follower().list()
```


### Following

Create an instance: `const following = client.Following()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const followings = await client.Following().list()
```


### FullRepository

Create an instance: `const full_repository = client.FullRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `boolean` | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `allow_forking` | `boolean` | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `boolean` | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `allow_rebase_merge` | `boolean` | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `allow_squash_merge` | `boolean` | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `allow_update_branch` | `boolean` | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is allowed. |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether to archive this repository. |
| `assignees_url` | `string` |  |
| `auto_init` | `boolean` | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code of Conduct Simple |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `boolean` | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `string` |  |
| `description` | `string` | A short description of the new repository. |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `number` |  |
| `gitignore_template` | `string` | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `boolean` | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `string` | A URL with more information about the repository. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `include_all_branches` | `boolean` | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `boolean` | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `license_template` | `string` | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the new repository. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organization` | `Record<string, any>` | A GitHub user. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `parent` | `Record<string, any>` | A repository on GitHub. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `security_and_analysis` | `Record<string, any>` | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | The size of the repository, in kilobytes. |
| `source` | `Record<string, any>` | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_id` | `number` | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `template_repository` | `Record<string, any>` | A repository on GitHub. |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

#### Example: Load

```ts
const full_repository = await client.FullRepository().load({ owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const full_repository = await client.FullRepository().create({
  archive_url: 'example_archive_url',
  archived: true,
  assignees_url: 'example_assignees_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  clone_url: 'example_clone_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  created_at: 'example_created_at',
  default_branch: 'example_default_branch',
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  disabled: true,
  downloads_url: 'example_downloads_url',
  events_url: 'example_events_url',
  fork: true,
  forks: 1,
  forks_count: 1,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  git_url: 'example_git_url',
  github_id: 1,
  has_discussions: true,
  has_issues: true,
  has_pages: true,
  has_projects: true,
  has_wiki: true,
  homepage: 'example_homepage',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 'example_id',
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  language: 'example_language',
  languages_url: 'example_languages_url',
  license: {},
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  mirror_url: 'example_mirror_url',
  name: 'example_name',
  network_count: 1,
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  open_issues: 1,
  open_issues_count: 1,
  organization: {},
  owner: {},
  parent: {},
  permissions: {},
  private: true,
  pulls_url: 'example_pulls_url',
  pushed_at: 'example_pushed_at',
  releases_url: 'example_releases_url',
  size: 1,
  source: {},
  ssh_url: 'example_ssh_url',
  stargazers_count: 1,
  stargazers_url: 'example_stargazers_url',
  statuses_url: 'example_statuses_url',
  subscribers_count: 1,
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  svn_url: 'example_svn_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  template_repository: {},
  trees_url: 'example_trees_url',
  updated_at: 'example_updated_at',
  url: 'example_url',
  watchers: 1,
  watchers_count: 1,
})
```


### Gist

Create an instance: `const gist = client.Gist()`

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
| `comments` | `number` |  |
| `comments_enabled` | `boolean` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` | Description of the gist |
| `files` | `Record<string, any>` | Names and content for the files that make up the gist |
| `fork_of` | `Record<string, any>` | Gist |
| `forks` | `any[]` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `any[]` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `public` | `boolean` |  |
| `truncated` | `boolean` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` | A GitHub user. |

#### Example: Load

```ts
const gist = await client.Gist().load({ id: 'gist_id' })
```

#### Example: List

```ts
const gists = await client.Gist().list()
```

#### Example: Create

```ts
const gist = await client.Gist().create({
  fork_of: {},
  owner: {},
})
```


### GistComment

Create an instance: `const gist_comment = client.GistComment()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const gist_comment = await client.GistComment().load({ id: 1, gist_id: 'gist_id' })
```

#### Example: List

```ts
const gist_comments = await client.GistComment().list({ id: "example_id" })
```

#### Example: Create

```ts
const gist_comment = await client.GistComment().create({
  id: 'example_id',
  author_association: 'example_author_association',
  avatar_url: 'example_avatar_url',
  body: 'example_body',
  created_at: 'example_created_at',
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  gists_url: 'example_gists_url',
  gravatar_id: 'example_gravatar_id',
  html_url: 'example_html_url',
  login: 'example_login',
  node_id: 'example_node_id',
  organizations_url: 'example_organizations_url',
  received_events_url: 'example_received_events_url',
  repos_url: 'example_repos_url',
  site_admin: true,
  starred_url: 'example_starred_url',
  subscriptions_url: 'example_subscriptions_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### GistCommit

Create an instance: `const gist_commit = client.GistCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_status` | `Record<string, any>` |  |
| `committed_at` | `string` |  |
| `id` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `version` | `string` |  |

#### Example: List

```ts
const gist_commits = await client.GistCommit().list({ id: "example" })
```


### GistSimple

Create an instance: `const gist_simple = client.GistSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `number` |  |
| `comments_enabled` | `boolean` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `files` | `Record<string, any>` |  |
| `fork_of` | `Record<string, any>` | Gist |
| `forks` | `any[]` |  |
| `forks_url` | `string` |  |
| `git_pull_url` | `string` |  |
| `git_push_url` | `string` |  |
| `history` | `any[]` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `public` | `boolean` |  |
| `truncated` | `boolean` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `string` |  |

#### Example: List

```ts
const gist_simples = await client.GistSimple().list({ id: "example" })
```


### Git

Create an instance: `const git = client.Git()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### GitCommit

Create an instance: `const git_commit = client.GitCommit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `Record<string, any>` | Identifying information for the git-user |
| `committer` | `Record<string, any>` | Identifying information for the git-user |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `message` | `string` | Message describing the purpose of the commit |
| `node_id` | `string` |  |
| `parents` | `any[]` | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | SHA for the commit |
| `signature` | `string` | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `Record<string, any>` | The SHA of the tree object this commit points to |
| `url` | `string` |  |
| `verification` | `Record<string, any>` |  |

#### Example: Load

```ts
const git_commit = await client.GitCommit().load({ id: 'git_commit_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const git_commit = await client.GitCommit().create({
  owner: 'example_owner',
  repo: 'example_repo',
  author: {},
  committer: {},
  html_url: 'example_html_url',
  message: 'example_message',
  node_id: 'example_node_id',
  parents: [],
  sha: 'example_sha',
  tree: {},
  url: 'example_url',
  verification: {},
})
```


### GitRef

Create an instance: `const git_ref = client.GitRef()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `force` | `boolean` | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` |  |
| `node_id` | `string` |  |
| `object` | `Record<string, any>` |  |
| `ref` | `string` | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | SHA for the reference |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const git_ref = await client.GitRef().load({ id: 'git_ref_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const git_ref = await client.GitRef().create({
  owner: 'example_owner',
  repo: 'example_repo',
  node_id: 'example_node_id',
  object: {},
  ref: 'example_ref',
  sha: 'example_sha',
  type: 'example_type',
  url: 'example_url',
})
```


### GitTag

Create an instance: `const git_tag = client.GitTag()`

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
| `object` | `Record<string, any>` | The SHA of the git object this is tagging. |
| `sha` | `string` |  |
| `tag` | `string` | Name of the tag |
| `tagger` | `Record<string, any>` | An object with information about the individual creating the tag. |
| `type` | `string` | The type of the object we're tagging. |
| `url` | `string` | URL for the tag |
| `verification` | `Record<string, any>` |  |

#### Example: Load

```ts
const git_tag = await client.GitTag().load({ id: 'git_tag_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const git_tag = await client.GitTag().create({
  owner: 'example_owner',
  repo: 'example_repo',
  message: 'example_message',
  node_id: 'example_node_id',
  object: {},
  sha: 'example_sha',
  tag: 'example_tag',
  tagger: {},
  type: 'example_type',
  url: 'example_url',
  verification: {},
})
```


### GitTree

Create an instance: `const git_tree = client.GitTree()`

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
| `tree` | `any[]` | Objects specifying a tree structure |
| `truncated` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const git_tree = await client.GitTree().load({ id: 'git_tree_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const git_tree = await client.GitTree().create({
  owner: 'example_owner',
  repo: 'example_repo',
  sha: 'example_sha',
  tree: [],
  truncated: true,
})
```


### Gitignore

Create an instance: `const gitignore = client.Gitignore()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const gitignores = await client.Gitignore().list()
```


### GitignoreTemplate

Create an instance: `const gitignore_template = client.GitignoreTemplate()`

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

```ts
const gitignore_template = await client.GitignoreTemplate().load({ id: 'gitignore_template_id' })
```


### GlobalAdvisory

Create an instance: `const global_advisory = client.GlobalAdvisory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credits` | `any[]` | The users who contributed to the advisory. |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `Record<string, any>` |  |
| `cvss_severities` | `Record<string, any>` |  |
| `cwes` | `any[]` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `epss` | `Record<string, any>` | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | The URL for the advisory. |
| `id` | `string` |  |
| `identifiers` | `any[]` |  |
| `nvd_published_at` | `string` | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `any[]` |  |
| `repository_advisory_url` | `string` | The API URL for the repository advisory. |
| `severity` | `string` | The severity of the advisory. |
| `source_code_location` | `string` | The URL of the advisory's source code. |
| `summary` | `string` | A short summary of the advisory. |
| `type` | `string` | The type of advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `any[]` | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```ts
const global_advisory = await client.GlobalAdvisory().load({ id: 'global_advisory_id' })
```

#### Example: List

```ts
const global_advisorys = await client.GlobalAdvisory().list()
```


### GpgKey

Create an instance: `const gpg_key = client.GpgKey()`

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
| `can_certify` | `boolean` |  |
| `can_encrypt_comms` | `boolean` |  |
| `can_encrypt_storage` | `boolean` |  |
| `can_sign` | `boolean` |  |
| `created_at` | `string` |  |
| `emails` | `any[]` |  |
| `expires_at` | `string` |  |
| `id` | `number` |  |
| `key_id` | `string` |  |
| `name` | `string` | A descriptive name for the new key. |
| `primary_key_id` | `number` |  |
| `public_key` | `string` |  |
| `raw_key` | `string` |  |
| `revoked` | `boolean` |  |
| `subkeys` | `any[]` |  |

#### Example: Load

```ts
const gpg_key = await client.GpgKey().load({ id: 1 })
```

#### Example: List

```ts
const gpg_keys = await client.GpgKey().list()
```

#### Example: Create

```ts
const gpg_key = await client.GpgKey().create({
  armored_public_key: 'example_armored_public_key',
  can_certify: true,
  can_encrypt_comms: true,
  can_encrypt_storage: true,
  can_sign: true,
  created_at: 'example_created_at',
  emails: [],
  expires_at: 'example_expires_at',
  id: 1,
  key_id: 'example_key_id',
  primary_key_id: 1,
  public_key: 'example_public_key',
  raw_key: 'example_raw_key',
  revoked: true,
  subkeys: [],
})
```


### Hook

Create an instance: `const hook = client.Hook()`

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
| `active` | `boolean` | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `any[]` | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `Record<string, any>` | Configuration object of the webhook |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `any[]` | Determines what events the hook is triggered for. |
| `id` | `number` | Unique identifier of the webhook. |
| `last_response` | `Record<string, any>` |  |
| `name` | `string` | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` |  |
| `remove_events` | `any[]` | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const hook = await client.Hook().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const hooks = await client.Hook().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const hook = await client.Hook().create({
  owner: 'example_owner',
  repo: 'example_repo',
  active: true,
  config: {},
  created_at: 'example_created_at',
  events: [],
  id: 1,
  last_response: {},
  name: 'example_name',
  ping_url: 'example_ping_url',
  test_url: 'example_test_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### HookDelivery

Create an instance: `const hook_delivery = client.HookDelivery()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the delivery was delivered. |
| `duration` | `number` | Time spent delivering. |
| `event` | `string` | The event that triggered the delivery. |
| `guid` | `string` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `number` | Unique identifier of the delivery. |
| `installation_id` | `number` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `boolean` | Whether the delivery is a redelivery. |
| `repository_id` | `number` | The id of the repository associated with this event. |
| `request` | `Record<string, any>` |  |
| `response` | `Record<string, any>` |  |
| `status` | `string` | Description of the status of the attempted delivery |
| `status_code` | `number` | Status code received when delivery was made. |
| `throttled_at` | `string` | Time when the webhook delivery was throttled. |
| `url` | `string` | The URL target of the delivery. |

#### Example: Load

```ts
const hook_delivery = await client.HookDelivery().load({ id: 1 })
```


### HookDeliveryItem

Create an instance: `const hook_delivery_item = client.HookDeliveryItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Time when the webhook delivery occurred. |
| `duration` | `number` | Time spent delivering. |
| `event` | `string` | The event that triggered the delivery. |
| `guid` | `string` | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `number` | Unique identifier of the webhook delivery. |
| `installation_id` | `number` | The id of the GitHub App installation associated with this event. |
| `redelivery` | `boolean` | Whether the webhook delivery is a redelivery. |
| `repository_id` | `number` | The id of the repository associated with this event. |
| `status` | `string` | Describes the response returned after attempting the delivery. |
| `status_code` | `number` | Status code received when delivery was made. |
| `throttled_at` | `string` | Time when the webhook delivery was throttled. |

#### Example: List

```ts
const hook_delivery_items = await client.HookDeliveryItem().list()
```


### HostedCompute

Create an instance: `const hosted_compute = client.HostedCompute()`

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
| `network_settings_ids` | `any[]` | The unique identifier of each network settings in the configuration. |

#### Example: List

```ts
const hosted_computes = await client.HostedCompute().list({ org_id: "example" })
```


### Hovercard

Create an instance: `const hovercard = client.Hovercard()`

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

```ts
const hovercards = await client.Hovercard().list({ username: "example" })
```


### Import

Create an instance: `const import_ = client.Import()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authors_count` | `number` |  |
| `authors_url` | `string` |  |
| `commit_count` | `number` |  |
| `error_message` | `string` |  |
| `failed_step` | `string` |  |
| `has_large_files` | `boolean` |  |
| `html_url` | `string` |  |
| `human_name` | `string` |  |
| `import_percent` | `number` |  |
| `large_files_count` | `number` |  |
| `large_files_size` | `number` |  |
| `message` | `string` |  |
| `project_choices` | `any[]` |  |
| `push_percent` | `number` |  |
| `repository_url` | `string` |  |
| `status` | `string` |  |
| `status_text` | `string` |  |
| `svc_root` | `string` |  |
| `svn_root` | `string` |  |
| `tfvc_project` | `string` | For a tfvc import, the name of the project that is being imported. |
| `url` | `string` |  |
| `use_lfs` | `boolean` | Whether to store large files during the import. |
| `vcs` | `string` | The originating VCS type. |
| `vcs_password` | `string` | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | `string` | The URL of the originating repository. |
| `vcs_username` | `string` | If authentication is required, the username to provide to `vcs_url`. |

#### Example: List

```ts
const import_s = await client.Import().list({ owner: "example", repo: "example" })
```


### Installation

Create an instance: `const installation = client.Installation()`

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
| `account` | `any` |  |
| `app_id` | `number` |  |
| `app_slug` | `string` |  |
| `client_id` | `string` |  |
| `contact_email` | `string` |  |
| `created_at` | `string` |  |
| `events` | `any[]` |  |
| `has_multiple_single_files` | `boolean` |  |
| `html_url` | `string` |  |
| `id` | `number` | The ID of the installation. |
| `permissions` | `Record<string, any>` | The permissions granted to the user access token. |
| `repositories_url` | `string` |  |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` |  |
| `single_file_paths` | `any[]` |  |
| `suspended_at` | `string` |  |
| `suspended_by` | `Record<string, any>` | A GitHub user. |
| `target_id` | `number` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const installation = await client.Installation().load({ id: 1 })
```

#### Example: List

```ts
const installations = await client.Installation().list()
```


### InstallationToken

Create an instance: `const installation_token = client.InstallationToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `permissions` | `Record<string, any>` | The permissions granted to the user access token. |
| `repositories` | `any[]` | List of repository names that the token should have access to |
| `repository_ids` | `any[]` | List of repository IDs that the token should have access to |

#### Example: Create

```ts
const installation_token = await client.InstallationToken().create({
  id: 1,
})
```


### Integration

Create an instance: `const integration = client.Integration()`

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
| `apps` | `any[]` | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `events` | `any[]` | The list of events for the GitHub app. |
| `external_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the GitHub app |
| `installations_count` | `number` | The number of installations associated with the GitHub app. |
| `name` | `string` | The name of the GitHub app |
| `node_id` | `string` |  |
| `owner` | `any` |  |
| `permissions` | `Record<string, any>` | The set of permissions for the GitHub app |
| `slug` | `string` | The slug name of the GitHub app |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const integration = await client.Integration().load({ app_slug: 'app_slug' })
```

#### Example: List

```ts
const integrations = await client.Integration().list()
```

#### Example: Create

```ts
const integration = await client.Integration().create({
  branch_id: 'example_branch_id',
  owner: 'example_owner',
  repo: 'example_repo',
  apps: [],
  created_at: 'example_created_at',
  description: 'example_description',
  events: [],
  external_url: 'example_external_url',
  html_url: 'example_html_url',
  id: 1,
  name: 'example_name',
  node_id: 'example_node_id',
  permissions: {},
  updated_at: 'example_updated_at',
})
```


### IntegrationInstallation

Create an instance: `const integration_installation = client.IntegrationInstallation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `any` |  |
| `created_at` | `string` |  |
| `id` | `number` | Unique identifier of the request installation. |
| `node_id` | `string` |  |
| `requester` | `Record<string, any>` | A GitHub user. |

#### Example: List

```ts
const integration_installations = await client.IntegrationInstallation().list()
```


### Interaction

Create an instance: `const interaction = client.Interaction()`

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

```ts
const interaction = await client.Interaction().load()
```


### InteractionLimit

Create an instance: `const interaction_limit = client.InteractionLimit()`

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

Create an instance: `const issue = client.Issue()`

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
| `actor` | `Record<string, any>` | A GitHub user. |
| `after_id` | `number` | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `Record<string, any>` | A GitHub user. |
| `assignees` | `any[]` | Usernames of people to assign this issue to. |
| `assigner` | `Record<string, any>` | A GitHub user. |
| `author_association` | `string` | How the author is associated with the repository. |
| `before_id` | `number` | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | Contents of the issue comment |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `closed_at` | `string` |  |
| `closed_by` | `Record<string, any>` | A GitHub user. |
| `color` | `string` | 6-character hex code, without the leading #, identifying the color |
| `comments` | `number` |  |
| `comments_url` | `string` |  |
| `commit_id` | `string` |  |
| `commit_url` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | Whether this label comes by default in a new repository. |
| `description` | `string` | Optional description of the label, such as its purpose. |
| `dismissed_review` | `Record<string, any>` |  |
| `draft` | `boolean` |  |
| `event` | `string` |  |
| `events_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the issue comment |
| `issue` | `Record<string, any>` | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `Record<string, any>` |  |
| `issue_field_values` | `any[]` |  |
| `issue_id` | `number` | The id of the issue that blocks the current issue |
| `issue_url` | `string` |  |
| `label` | `Record<string, any>` | Issue Event Label |
| `labels` | `any[]` | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` |  |
| `lock_reason` | `string` | The reason for locking the issue or pull request conversation. |
| `locked` | `boolean` |  |
| `milestone` | `Record<string, any>` | Issue Event Milestone |
| `name` | `string` | The name of the label. |
| `node_id` | `string` |  |
| `number` | `number` | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `project_card` | `Record<string, any>` | Issue Event Project Card |
| `pull_request` | `Record<string, any>` |  |
| `reactions` | `Record<string, any>` |  |
| `rename` | `Record<string, any>` | Issue Event Rename |
| `replace_parent` | `boolean` | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `Record<string, any>` | A repository on GitHub. |
| `repository_url` | `string` |  |
| `requested_reviewer` | `Record<string, any>` | A GitHub user. |
| `requested_team` | `Record<string, any>` | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `Record<string, any>` | A GitHub user. |
| `state` | `string` | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | The reason for the current state |
| `sub_issue_id` | `number` | The id of the sub-issue to add. |
| `sub_issues_summary` | `Record<string, any>` |  |
| `timeline_url` | `string` |  |
| `title` | `string` | Title of the issue |
| `type` | `Record<string, any>` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the issue comment |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Load

```ts
const issue = await client.Issue().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const issues = await client.Issue().list()
```

#### Example: Create

```ts
const issue = await client.Issue().create({
  owner: 'example_owner',
  repo: 'example_repo',
  actor: {},
  assignee: {},
  assigner: {},
  author_association: 'example_author_association',
  closed_at: 'example_closed_at',
  closed_by: {},
  comments: 1,
  comments_url: 'example_comments_url',
  commit_id: 'example_commit_id',
  commit_url: 'example_commit_url',
  created_at: 'example_created_at',
  dismissed_review: {},
  event: 'example_event',
  events_url: 'example_events_url',
  html_url: 'example_html_url',
  id: 1,
  issue: {},
  issue_dependencies_summary: {},
  issue_id: 1,
  issue_url: 'example_issue_url',
  label: {},
  labels: [],
  labels_url: 'example_labels_url',
  locked: true,
  milestone: {},
  node_id: 'example_node_id',
  number: 1,
  performed_via_github_app: {},
  project_card: {},
  pull_request: {},
  reactions: {},
  rename: {},
  repository: {},
  repository_url: 'example_repository_url',
  requested_reviewer: {},
  requested_team: {},
  review_requester: {},
  state: 'example_state',
  sub_issue_id: 1,
  sub_issues_summary: {},
  title: 'example_title',
  type: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### IssueType

Create an instance: `const issue_type = client.IssueType()`

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
| `id` | `number` | The unique identifier of the issue type. |
| `is_enabled` | `boolean` | The enabled state of the issue type. |
| `name` | `string` | The name of the issue type. |
| `node_id` | `string` | The node identifier of the issue type. |
| `updated_at` | `string` | The time the issue type last updated. |

#### Example: List

```ts
const issue_types = await client.IssueType().list({ org_id: "example" })
```

#### Example: Create

```ts
const issue_type = await client.IssueType().create({
  org_id: 'example_org_id',
  description: 'example_description',
  id: 1,
  name: 'example_name',
  node_id: 'example_node_id',
})
```


### Job

Create an instance: `const job = client.Job()`

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
| `id` | `number` | The id of the job. |
| `labels` | `any[]` | Labels for the workflow job. |
| `name` | `string` | The name of the job. |
| `node_id` | `string` |  |
| `run_attempt` | `number` | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `number` | The id of the associated workflow run. |
| `run_url` | `string` |  |
| `runner_group_id` | `number` | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `string` | The name of the runner group to which this job has been assigned. |
| `runner_id` | `number` | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | The name of the runner to which this job has been assigned. |
| `started_at` | `string` | The time that the job started, in ISO 8601 format. |
| `status` | `string` | The phase of the lifecycle that the job is currently in. |
| `steps` | `any[]` | Steps in this job. |
| `url` | `string` |  |
| `workflow_name` | `string` | The name of the workflow. |

#### Example: Load

```ts
const job = await client.Job().load({ id: 1, owner: 'owner', repo: 'repo' })
```


### Key

Create an instance: `const key = client.Key()`

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
| `id` | `number` |  |
| `key` | `string` | The public SSH key to add to your GitHub account. |
| `last_used` | `string` |  |
| `read_only` | `boolean` |  |
| `title` | `string` | A descriptive name for the new key. |
| `url` | `string` |  |
| `verified` | `boolean` |  |

#### Example: Load

```ts
const key = await client.Key().load({ id: 1 })
```

#### Example: List

```ts
const keys = await client.Key().list()
```

#### Example: Create

```ts
const key = await client.Key().create({
  created_at: 'example_created_at',
  id: 1,
  key: 'example_key',
  read_only: true,
  title: 'example_title',
  url: 'example_url',
  verified: true,
})
```


### Label

Create an instance: `const label = client.Label()`

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
| `default` | `boolean` | Whether this label comes by default in a new repository. |
| `description` | `string` | Optional description of the label, such as its purpose. |
| `id` | `number` | Unique identifier for the label. |
| `name` | `string` | The name of the label. |
| `new_name` | `string` | The new name of the label. |
| `node_id` | `string` |  |
| `url` | `string` | URL for the label |

#### Example: Load

```ts
const label = await client.Label().load({ id: 'label_id', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const labels = await client.Label().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const label = await client.Label().create({
  owner: 'example_owner',
  repo: 'example_repo',
  color: 'example_color',
  default: true,
  description: 'example_description',
  id: 1,
  name: 'example_name',
  node_id: 'example_node_id',
  url: 'example_url',
})
```


### Language

Create an instance: `const language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `C` | `number` |  |
| `Python` | `number` |  |

#### Example: Load

```ts
const language = await client.Language().load({ owner: 'owner', repo: 'repo' })
```


### License

Create an instance: `const license = client.License()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `conditions` | `any[]` |  |
| `content` | `string` |  |
| `description` | `string` |  |
| `download_url` | `string` |  |
| `encoding` | `string` |  |
| `featured` | `boolean` |  |
| `git_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `string` |  |
| `implementation` | `string` |  |
| `key` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `limitations` | `any[]` |  |
| `links` | `Record<string, any>` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `path` | `string` |  |
| `permissions` | `any[]` |  |
| `sha` | `string` |  |
| `size` | `number` |  |
| `spdx_id` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const license = await client.License().load({ id: 'license_id' })
```

#### Example: List

```ts
const licenses = await client.License().list()
```


### Markdown

Create an instance: `const markdown = client.Markdown()`

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

```ts
const markdown = await client.Markdown().create({
  text: 'example_text',
})
```


### MarketplaceListingPlan

Create an instance: `const marketplace_listing_plan = client.MarketplaceListingPlan()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounts_url` | `string` |  |
| `bullets` | `any[]` |  |
| `description` | `string` |  |
| `has_free_trial` | `boolean` |  |
| `id` | `number` |  |
| `monthly_price_in_cents` | `number` |  |
| `name` | `string` |  |
| `number` | `number` |  |
| `price_model` | `string` |  |
| `state` | `string` |  |
| `unit_name` | `string` |  |
| `url` | `string` |  |
| `yearly_price_in_cents` | `number` |  |

#### Example: List

```ts
const marketplace_listing_plans = await client.MarketplaceListingPlan().list()
```


### MarketplacePurchase

Create an instance: `const marketplace_purchase = client.MarketplacePurchase()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `id` | `number` |  |
| `login` | `string` |  |
| `marketplace_pending_change` | `Record<string, any>` |  |
| `marketplace_purchase` | `Record<string, any>` |  |
| `organization_billing_email` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const marketplace_purchase = await client.MarketplacePurchase().load({ account_id: 1 })
```

#### Example: List

```ts
const marketplace_purchases = await client.MarketplacePurchase().list({ plan_id: 1 })
```


### Member

Create an instance: `const member = client.Member()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const members = await client.Member().list({ org_id: "example" })
```


### Membership

Create an instance: `const membership = client.Membership()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const membership = await client.Membership().load({ id: 'membership_id', enterprise: 'enterprise', team_id: 'team_id' })
```

#### Example: List

```ts
const memberships = await client.Membership().list({ enterprise: "example", enterprise_team: "example" })
```


### MergedUpstream

Create an instance: `const merged_upstream = client.MergedUpstream()`

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

```ts
const merged_upstream = await client.MergedUpstream().create({
  owner: 'example_owner',
  repo: 'example_repo',
  branch: 'example_branch',
})
```


### Meta

Create an instance: `const meta = client.Meta()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const meta = await client.Meta().load()
```

#### Example: List

```ts
const metas = await client.Meta().list()
```


### Metaroot

Create an instance: `const metaroot = client.Metaroot()`

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

```ts
const metaroot = await client.Metaroot().load()
```


### Migration

Create an instance: `const migration = client.Migration()`

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
| `allow_forking` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `exclude` | `any[]` | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `boolean` | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `boolean` | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `boolean` | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `boolean` | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `boolean` | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `guid` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `is_template` | `boolean` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` |  |
| `lock_repositories` | `boolean` | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `org_metadata_only` | `boolean` | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `Record<string, any>` | A GitHub user. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `repositories` | `any[]` | The repositories included in the migration. |
| `role_name` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `state` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |

#### Example: Load

```ts
const migration = await client.Migration().load({ id: 1 })
```

#### Example: List

```ts
const migrations = await client.Migration().list()
```

#### Example: Create

```ts
const migration = await client.Migration().create({
  assignees_url: 'example_assignees_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  created_at: 'example_created_at',
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  downloads_url: 'example_downloads_url',
  events_url: 'example_events_url',
  exclude_attachments: true,
  exclude_git_data: true,
  exclude_metadata: true,
  exclude_owner_projects: true,
  exclude_releases: true,
  fork: true,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  guid: 'example_guid',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  languages_url: 'example_languages_url',
  lock_repositories: true,
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  name: 'example_name',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  org_metadata_only: true,
  owner: {},
  private: true,
  pulls_url: 'example_pulls_url',
  releases_url: 'example_releases_url',
  repositories: [],
  stargazers_url: 'example_stargazers_url',
  state: 'example_state',
  statuses_url: 'example_statuses_url',
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  trees_url: 'example_trees_url',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### Milestone

Create an instance: `const milestone = client.Milestone()`

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
| `closed_issues` | `number` |  |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` | A GitHub user. |
| `description` | `string` | A description of the milestone. |
| `due_on` | `string` | The milestone due date. |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `labels_url` | `string` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `number` | `number` | The number of the milestone. |
| `open_issues` | `number` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
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

```ts
const milestone = await client.Milestone().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const milestones = await client.Milestone().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const milestone = await client.Milestone().create({
  owner: 'example_owner',
  repo: 'example_repo',
  avatar_url: 'example_avatar_url',
  closed_at: 'example_closed_at',
  closed_issues: 1,
  created_at: 'example_created_at',
  creator: {},
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  gists_url: 'example_gists_url',
  gravatar_id: 'example_gravatar_id',
  html_url: 'example_html_url',
  id: 1,
  labels_url: 'example_labels_url',
  login: 'example_login',
  node_id: 'example_node_id',
  number: 1,
  open_issues: 1,
  organizations_url: 'example_organizations_url',
  received_events_url: 'example_received_events_url',
  repos_url: 'example_repos_url',
  site_admin: true,
  starred_url: 'example_starred_url',
  subscriptions_url: 'example_subscriptions_url',
  title: 'example_title',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### MinimalRepository

Create an instance: `const minimal_repository = client.MinimalRepository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_forking` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` |  |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `is_template` | `boolean` |  |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `role_name` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `visibility` | `string` |  |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |

#### Example: List

```ts
const minimal_repositorys = await client.MinimalRepository().list()
```


### NetworkConfiguration

Create an instance: `const network_configuration = client.NetworkConfiguration()`

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
| `network_settings_ids` | `any[]` | The unique identifier of each network settings in the configuration. |

#### Example: Load

```ts
const network_configuration = await client.NetworkConfiguration().load({ id: 'network_configuration_id', org_id: 'org_id' })
```

#### Example: Create

```ts
const network_configuration = await client.NetworkConfiguration().create({
  org_id: 'example_org_id',
  created_on: 'example_created_on',
  id: 'example_id',
  name: 'example_name',
})
```


### NetworkSetting

Create an instance: `const network_setting = client.NetworkSetting()`

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

```ts
const network_setting = await client.NetworkSetting().load({ id: 'network_setting_id', org_id: 'org_id' })
```


### OidcCustomSub

Create an instance: `const oidc_custom_sub = client.OidcCustomSub()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `any[]` | Array of unique strings. |

#### Example: List

```ts
const oidc_custom_subs = await client.OidcCustomSub().list({ org_id: "example" })
```


### OidcCustomSubRepo

Create an instance: `const oidc_custom_sub_repo = client.OidcCustomSubRepo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `include_claim_keys` | `any[]` | Array of unique strings. |
| `use_default` | `boolean` | Whether to use the default template or not. |

#### Example: List

```ts
const oidc_custom_sub_repos = await client.OidcCustomSubRepo().list({ owner: "example", repo: "example" })
```


### Org

Create an instance: `const org = client.Org()`

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
| `account` | `any` |  |
| `action` | `string` | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `number` |  |
| `app_slug` | `string` |  |
| `artifact_url` | `string` | The URL where the artifact is stored. |
| `async` | `boolean` | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `any[]` |  |
| `attestations_subject_digests` | `Record<string, any>` | Mapping of subject digest to bundles. |
| `avatar_url` | `string` |  |
| `base_role` | `string` | The system role from which this role inherits permissions. |
| `billing_email` | `string` | Billing email address. |
| `blog` | `string` |  |
| `client_id` | `string` |  |
| `company` | `string` | The company name. |
| `contact_email` | `string` |  |
| `created_at` | `string` | The date and time the role was created. |
| `default_repository_permission` | `string` | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `boolean` | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `string` | The description of the company. |
| `digest` | `string` | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `boolean` | Whether the user has direct membership in the organization. |
| `email` | `string` | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `any[]` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `any[]` |  |
| `events_url` | `string` |  |
| `filled_seats` | `number` |  |
| `has_multiple_single_files` | `boolean` |  |
| `has_organization_projects` | `boolean` | Whether an organization can use organization projects. |
| `has_repository_projects` | `boolean` | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | The ID of the installation. |
| `issues_url` | `string` |  |
| `location` | `string` | The location. |
| `login` | `string` |  |
| `members_allowed_repository_creation_type` | `string` | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `boolean` | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `boolean` | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `boolean` | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `boolean` | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `boolean` | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `boolean` | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `boolean` | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `boolean` | Whether organization members can fork private organization repositories. |
| `members_url` | `string` |  |
| `name` | `string` | The name of the artifact. |
| `node_id` | `string` |  |
| `organization` | `Record<string, any>` | A GitHub organization. |
| `organization_url` | `string` |  |
| `page_info` | `Record<string, any>` | Information about the current page. |
| `pat_ids` | `any[]` | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `any[]` | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | The path of the artifact. |
| `permissions` | `Record<string, any>` | The permissions granted to the user access token. |
| `predicate_type` | `string` | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `number` |  |
| `properties` | `any[]` | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` |  |
| `query_suite` | `string` | CodeQL query suite to be used. |
| `reason` | `string` | Reason for approving or denying the request. |
| `registry_url` | `string` | The base URL of the artifact registry. |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `repository` | `string` | The repository name within the registry. |
| `repository_names` | `any[]` | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | The user's membership type in the organization. |
| `seats` | `number` |  |
| `secret_scanning_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `boolean` | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `boolean` | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` |  |
| `single_file_paths` | `any[]` |  |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `space` | `number` |  |
| `state` | `string` | The state of the member in the organization. |
| `status` | `string` | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `any[]` |  |
| `subject_digests` | `any[]` | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` |  |
| `suspended_by` | `Record<string, any>` | A GitHub user. |
| `target_id` | `number` | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` |  |
| `total_count` | `number` |  |
| `twitter_username` | `string` | The Twitter username of the company. |
| `updated_at` | `string` | The date and time the role was last updated. |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `web_commit_signoff_required` | `boolean` | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

#### Example: Load

```ts
const org = await client.Org().load({ id: 'org_id' })
```

#### Example: List

```ts
const orgs = await client.Org().list()
```

#### Example: Create

```ts
const org = await client.Org().create({
  enablement: 'example_enablement',
  org: 'example_org',
  security_product: 'example_security_product',
  access_tokens_url: 'example_access_tokens_url',
  account: 'example_account',
  action: 'example_action',
  app_id: 1,
  app_slug: 'example_app_slug',
  avatar_url: 'example_avatar_url',
  created_at: 'example_created_at',
  digest: 'example_digest',
  events: [],
  events_url: 'example_events_url',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  issues_url: 'example_issues_url',
  login: 'example_login',
  members_url: 'example_members_url',
  name: 'example_name',
  node_id: 'example_node_id',
  organization: {},
  organization_url: 'example_organization_url',
  pat_ids: [],
  permissions: {},
  private_repos: 1,
  properties: [],
  public_members_url: 'example_public_members_url',
  registry_url: 'example_registry_url',
  repos_url: 'example_repos_url',
  repositories_url: 'example_repositories_url',
  repository_names: [],
  repository_selection: 'example_repository_selection',
  role: 'example_role',
  single_file_name: 'example_single_file_name',
  space: 1,
  state: 'example_state',
  subject_digests: [],
  suspended_at: 'example_suspended_at',
  suspended_by: {},
  target_id: 1,
  target_type: 'example_target_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### OrgHook

Create an instance: `const org_hook = client.OrgHook()`

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
| `active` | `boolean` | Determines if notifications are sent when the webhook is triggered. |
| `config` | `Record<string, any>` | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` |  |
| `deliveries_url` | `string` |  |
| `events` | `any[]` | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `number` |  |
| `name` | `string` | Must be passed as "web". |
| `ping_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const org_hook = await client.OrgHook().load({ id: 1, org_id: 'org_id' })
```

#### Example: List

```ts
const org_hooks = await client.OrgHook().list({ id: "example_id" })
```

#### Example: Create

```ts
const org_hook = await client.OrgHook().create({
  id: 'example_id',
  active: true,
  config: {},
  created_at: 'example_created_at',
  events: [],
  name: 'example_name',
  ping_url: 'example_ping_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### OrgMembership

Create an instance: `const org_membership = client.OrgMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `direct_membership` | `boolean` | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `any[]` | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` |  |
| `organization` | `Record<string, any>` | A GitHub organization. |
| `organization_url` | `string` |  |
| `permissions` | `Record<string, any>` |  |
| `role` | `string` | The user's membership type in the organization. |
| `state` | `string` | The state of the member in the organization. |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Load

```ts
const org_membership = await client.OrgMembership().load({ id: 'org_membership_id', org_id: 'org_id' })
```


### OrgPrivateRegistryConfiguration

Create an instance: `const org_private_registry_configuration = client.OrgPrivateRegistryConfiguration()`

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

```ts
const org_private_registry_configuration = await client.OrgPrivateRegistryConfiguration().load({ org_id: 'org_id', secret_name: 'secret_name' })
```


### OrgPrivateRegistryConfigurationWithSelectedRepository

Create an instance: `const org_private_registry_configuration_with_selected_repository = client.OrgPrivateRegistryConfigurationWithSelectedRepository()`

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
| `selected_repository_ids` | `any[]` | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Create

```ts
const org_private_registry_configuration_with_selected_repository = await client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({
  id: 'example_id',
  encrypted_value: 'example_encrypted_value',
  key_id: 'example_key_id',
  registry_type: 'example_registry_type',
  url: 'example_url',
  visibility: 'example_visibility',
})
```


### OrgRepoCustomPropertyValue

Create an instance: `const org_repo_custom_property_value = client.OrgRepoCustomPropertyValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `properties` | `any[]` | List of custom property names and associated values |
| `repository_full_name` | `string` |  |
| `repository_id` | `number` |  |
| `repository_name` | `string` |  |

#### Example: List

```ts
const org_repo_custom_property_values = await client.OrgRepoCustomPropertyValue().list({ org_id: "example" })
```


### Organization

Create an instance: `const organization = client.Organization()`


### OrganizationActionsSecret

Create an instance: `const organization_actions_secret = client.OrganizationActionsSecret()`

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

```ts
const organization_actions_secret = await client.OrganizationActionsSecret().load({ id: 'organization_actions_secret_id', org_id: 'org_id' })
```


### OrganizationActionsVariable

Create an instance: `const organization_actions_variable = client.OrganizationActionsVariable()`

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

```ts
const organization_actions_variable = await client.OrganizationActionsVariable().load({ id: 'organization_actions_variable_id', org_id: 'org_id' })
```


### OrganizationDependabotSecret

Create an instance: `const organization_dependabot_secret = client.OrganizationDependabotSecret()`

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

```ts
const organization_dependabot_secret = await client.OrganizationDependabotSecret().load({ id: 'organization_dependabot_secret_id', org_id: 'org_id' })
```


### OrganizationInvitation

Create an instance: `const organization_invitation = client.OrganizationInvitation()`

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
| `id` | `number` |  |
| `invitation_source` | `string` |  |
| `invitation_teams_url` | `string` |  |
| `invitee_id` | `number` | **Required unless you provide `email`**. |
| `inviter` | `Record<string, any>` | A GitHub user. |
| `login` | `string` |  |
| `node_id` | `string` |  |
| `role` | `string` | The role for the new member. |
| `team_count` | `number` |  |
| `team_ids` | `any[]` | Specify IDs for the teams you want to invite new members to. |

#### Example: List

```ts
const organization_invitations = await client.OrganizationInvitation().list({ org_id: "example" })
```

#### Example: Create

```ts
const organization_invitation = await client.OrganizationInvitation().create({
  org_id: 'example_org_id',
  created_at: 'example_created_at',
  id: 1,
  invitation_teams_url: 'example_invitation_teams_url',
  inviter: {},
  login: 'example_login',
  node_id: 'example_node_id',
  team_count: 1,
})
```


### OrganizationProgrammaticAccessGrant

Create an instance: `const organization_programmatic_access_grant = client.OrganizationProgrammaticAccessGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_granted_at` | `string` | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Date and time when the request for access was created. |
| `id` | `number` | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `permissions` | `Record<string, any>` | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Reason for requesting access. |
| `repositories_url` | `string` | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Type of repository selection requested. |
| `token_expired` | `boolean` | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `number` | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | The name given to the user's token. |

#### Example: List

```ts
const organization_programmatic_access_grants = await client.OrganizationProgrammaticAccessGrant().list({ org_id: "example" })
```


### OrganizationRole

Create an instance: `const organization_role = client.OrganizationRole()`

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
| `id` | `number` | The unique identifier of the role. |
| `name` | `string` | The name of the role. |
| `organization` | `Record<string, any>` | A GitHub user. |
| `permissions` | `any[]` | A list of permissions included in this role. |
| `source` | `string` | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | The date and time the role was last updated. |

#### Example: Load

```ts
const organization_role = await client.OrganizationRole().load({ id: 1, org_id: 'org_id' })
```


### OrganizationSecretScanningAlert

Create an instance: `const organization_secret_scanning_alert = client.OrganizationSecretScanningAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `boolean` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `boolean` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `boolean` | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `number` | The security alert number. |
| `publicly_leaked` | `boolean` | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `Record<string, any>` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `Record<string, any>` | A GitHub user. |
| `repository` | `Record<string, any>` | A GitHub repository. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `Record<string, any>` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: List

```ts
const organization_secret_scanning_alerts = await client.OrganizationSecretScanningAlert().list({ org_id: "example" })
```


### OutsideCollaborator

Create an instance: `const outside_collaborator = client.OutsideCollaborator()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const outside_collaborators = await client.OutsideCollaborator().list({ org_id: "example" })
```


### Package

Create an instance: `const package_ = client.Package()`

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
| `container` | `Record<string, any>` |  |
| `created_at` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `docker` | `Record<string, any>` |  |
| `github_id` | `number` | Unique identifier of the package. |
| `html_url` | `string` |  |
| `id` | `string` | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `number` | Free storage space (GB) for GitHub Packages. |
| `license` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` | The name of the package. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `package_html_url` | `string` |  |
| `package_type` | `string` |  |
| `repository` | `Record<string, any>` | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `number` | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `number` | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `version_count` | `number` | The number of versions of the package. |
| `visibility` | `string` |  |

#### Example: Load

```ts
const package_ = await client.Package().load({ package_name: 'package_name', package_type: 'package_type' })
```

#### Example: List

```ts
const package_s = await client.Package().list({ package_type: "example" })
```

#### Example: Create

```ts
const package_ = await client.Package().create({
  package_id: 'example_package_id',
  package_name: 'example_package_name',
  container: {},
  created_at: 'example_created_at',
  docker: {},
  github_id: 1,
  html_url: 'example_html_url',
  id: 'example_id',
  included_gigabytes_bandwidth: 1,
  metadata: {},
  name: 'example_name',
  owner: {},
  package_html_url: 'example_package_html_url',
  package_type: 'example_package_type',
  repository: {},
  total_gigabytes_bandwidth_used: 1,
  total_paid_gigabytes_bandwidth_used: 1,
  updated_at: 'example_updated_at',
  url: 'example_url',
  version_count: 1,
  visibility: 'example_visibility',
})
```


### Page

Create an instance: `const page = client.Page()`

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
| `custom_404` | `boolean` | Whether the Page has a custom 404 page. |
| `html_url` | `string` | The web address the Page can be accessed from. |
| `https_certificate` | `Record<string, any>` |  |
| `https_enforced` | `boolean` | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | The state if the domain is verified |
| `public` | `boolean` | Whether the GitHub Pages site is publicly visible. |
| `source` | `Record<string, any>` | The source branch and directory used to publish your Pages site. |
| `status` | `string` | The status of the most recent build of the Page. |
| `url` | `string` | The API address for accessing this Page resource. |

#### Example: Load

```ts
const page = await client.Page().load({ owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const page = await client.Page().create({
  owner: 'example_owner',
  repo: 'example_repo',
  cname: 'example_cname',
  custom_404: true,
  https_certificate: {},
  public: true,
  source: {},
  status: 'example_status',
  url: 'example_url',
})
```


### PageBuild

Create an instance: `const page_build = client.PageBuild()`

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
| `duration` | `number` |  |
| `error` | `Record<string, any>` |  |
| `id` | `string` |  |
| `pusher` | `Record<string, any>` | A GitHub user. |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const page_build = await client.PageBuild().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const page_builds = await client.PageBuild().list({ owner: "example", repo: "example" })
```


### PageBuildStatus

Create an instance: `const page_build_status = client.PageBuildStatus()`

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

```ts
const page_build_status = await client.PageBuildStatus().create({
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### PageDeployment

Create an instance: `const page_deployment = client.PageDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artifact_id` | `number` | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | A unique string that represents the version of the build for this deployment. |

#### Example: Create

```ts
const page_deployment = await client.PageDeployment().create({
  owner: 'example_owner',
  repo: 'example_repo',
  oidc_token: 'example_oidc_token',
  pages_build_version: 'example_pages_build_version',
})
```


### PagesDeploymentStatus

Create an instance: `const pages_deployment_status = client.PagesDeploymentStatus()`

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

```ts
const pages_deployment_status = await client.PagesDeploymentStatus().load({ owner: 'owner', pages_deployment_id: 'pages_deployment_id', repo: 'repo' })
```

#### Example: Create

```ts
const pages_deployment_status = await client.PagesDeploymentStatus().create({
  deployment_id: 'example_deployment_id',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### PagesHealthCheck

Create an instance: `const pages_health_check = client.PagesHealthCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alt_domain` | `Record<string, any>` |  |
| `domain` | `Record<string, any>` |  |

#### Example: Load

```ts
const pages_health_check = await client.PagesHealthCheck().load({ owner: 'owner', repo: 'repo' })
```


### Participation

Create an instance: `const participation = client.Participation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `all` | `any[]` |  |
| `owner` | `any[]` |  |

#### Example: List

```ts
const participations = await client.Participation().list({ owner: "example", repo: "example" })
```


### PendingDeployment

Create an instance: `const pending_deployment = client.PendingDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_user_can_approve` | `boolean` | Whether the currently authenticated user can approve the deployment |
| `environment` | `Record<string, any>` |  |
| `reviewers` | `any[]` | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `number` | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | The time that the wait timer began. |

#### Example: List

```ts
const pending_deployments = await client.PendingDeployment().list({ owner: "example", repo: "example", run_id: 1 })
```


### PorterAuthor

Create an instance: `const porter_author = client.PorterAuthor()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | The new Git author email. |
| `id` | `number` |  |
| `import_url` | `string` |  |
| `name` | `string` | The new Git author name. |
| `remote_id` | `string` |  |
| `remote_name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const porter_authors = await client.PorterAuthor().list({ owner: "example", repo: "example" })
```


### PorterLargeFile

Create an instance: `const porter_large_file = client.PorterLargeFile()`

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
| `size` | `number` |  |

#### Example: List

```ts
const porter_large_files = await client.PorterLargeFile().list({ owner: "example", repo: "example" })
```


### PrivateRegistry

Create an instance: `const private_registry = client.PrivateRegistry()`

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
| `selected_repository_ids` | `any[]` | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL of the private registry. |
| `username` | `string` | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Which type of organization repositories have access to the private registry. |

#### Example: Load

```ts
const private_registry = await client.PrivateRegistry().load({ org_id: 'org_id' })
```

#### Example: List

```ts
const private_registrys = await client.PrivateRegistry().list({ org_id: "example" })
```


### PrivateUser

Create an instance: `const private_user = client.PrivateUser()`


### Project

Create an instance: `const project = client.Project()`

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
| `creator` | `Record<string, any>` | A GitHub user. |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` | The name of the project. |
| `node_id` | `string` |  |
| `number` | `number` |  |
| `organization_permission` | `string` | The baseline permission that all organization members have on this project |
| `organizations_url` | `string` |  |
| `owner_url` | `string` |  |
| `private` | `boolean` | Whether or not this project can be seen by everyone. |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | State of the project; either 'open' or 'closed' |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const project = await client.Project().load({ id: 1 })
```

#### Example: List

```ts
const projects = await client.Project().list({ org_id: "example" })
```

#### Example: Create

```ts
const project = await client.Project().create({
  avatar_url: 'example_avatar_url',
  columns_url: 'example_columns_url',
  created_at: 'example_created_at',
  creator: {},
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  gists_url: 'example_gists_url',
  gravatar_id: 'example_gravatar_id',
  html_url: 'example_html_url',
  id: 1,
  login: 'example_login',
  node_id: 'example_node_id',
  number: 1,
  organizations_url: 'example_organizations_url',
  owner_url: 'example_owner_url',
  received_events_url: 'example_received_events_url',
  repos_url: 'example_repos_url',
  site_admin: true,
  starred_url: 'example_starred_url',
  subscriptions_url: 'example_subscriptions_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### ProjectCollaboratorPermission

Create an instance: `const project_collaborator_permission = client.ProjectCollaboratorPermission()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const project_collaborator_permission = await client.ProjectCollaboratorPermission().load({ project_id: 1, username: 'username' })
```


### ProjectColumn

Create an instance: `const project_column = client.ProjectColumn()`

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
| `id` | `number` | The unique identifier of the project column |
| `name` | `string` | Name of the project column |
| `node_id` | `string` |  |
| `project_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const project_column = await client.ProjectColumn().load({ id: 1 })
```

#### Example: List

```ts
const project_columns = await client.ProjectColumn().list({ id: 1 })
```

#### Example: Create

```ts
const project_column = await client.ProjectColumn().create({
  id: 1,
  cards_url: 'example_cards_url',
  created_at: 'example_created_at',
  name: 'example_name',
  node_id: 'example_node_id',
  project_url: 'example_project_url',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### ProjectsClassic

Create an instance: `const projects_classic = client.ProjectsClassic()`

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

```ts
const projects_classic = await client.ProjectsClassic().create({
  column_id: 1,
  position: 'example_position',
})
```


### ProjectsV2

Create an instance: `const projects_v2 = client.ProjectsV2()`

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
| `creator` | `Record<string, any>` | A GitHub user. |
| `deleted_at` | `string` | The time when the project was deleted. |
| `deleted_by` | `Record<string, any>` | A GitHub user. |
| `description` | `string` | A short description of the project. |
| `id` | `number` | The unique identifier of the project. |
| `is_template` | `boolean` | Whether this project is a template |
| `latest_status_update` | `Record<string, any>` | An status update belonging to a project |
| `node_id` | `string` | The node ID of the project. |
| `number` | `number` | The project number. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `public` | `boolean` | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | A concise summary of the project. |
| `state` | `string` | The current state of the project. |
| `title` | `string` | The project title. |
| `updated_at` | `string` | The time when the project was last updated. |

#### Example: Load

```ts
const projects_v2 = await client.ProjectsV2().load({ id: 1 })
```

#### Example: List

```ts
const projects_v2s = await client.ProjectsV2().list({ org_id: "example" })
```


### ProjectsV2Field

Create an instance: `const projects_v2_field = client.ProjectsV2Field()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | Configuration for iteration fields. |
| `created_at` | `string` | The time when the field was created. |
| `data_type` | `string` | The field's data type. |
| `id` | `number` | The unique identifier of the field. |
| `name` | `string` | The name of the field. |
| `node_id` | `string` | The node ID of the field. |
| `options` | `any[]` | The options available for single select fields. |
| `project_url` | `string` | The API URL of the project that contains the field. |
| `updated_at` | `string` | The time when the field was last updated. |

#### Example: Load

```ts
const projects_v2_field = await client.ProjectsV2Field().load({ id: 1, projects_v2_id: 1 })
```

#### Example: List

```ts
const projects_v2_fields = await client.ProjectsV2Field().list({ project_number: 1 })
```


### ProjectsV2ItemSimple

Create an instance: `const projects_v2_item_simple = client.ProjectsV2ItemSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | The type of item to add to the project. |

#### Example: Create

```ts
const projects_v2_item_simple = await client.ProjectsV2ItemSimple().create({
  project_number: 1,
  id: 1,
  type: 'example_type',
})
```


### ProjectsV2ItemWithContent

Create an instance: `const projects_v2_item_with_content = client.ProjectsV2ItemWithContent()`

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
| `content` | `Record<string, any>` | The content of the item, which varies by content type. |
| `content_type` | `string` | The type of content tracked in a project item |
| `created_at` | `string` | The time when the item was created. |
| `creator` | `Record<string, any>` | A GitHub user. |
| `fields` | `any[]` | The fields and values associated with this item. |
| `id` | `number` | The unique identifier of the project item. |
| `item_url` | `string` | The API URL of this item. |
| `node_id` | `string` | The node ID of the project item. |
| `project_url` | `string` | The API URL of the project that contains this item. |
| `updated_at` | `string` | The time when the item was last updated. |

#### Example: Load

```ts
const projects_v2_item_with_content = await client.ProjectsV2ItemWithContent().load({ item_id: 1, projects_v2_id: 1 })
```

#### Example: List

```ts
const projects_v2_item_with_contents = await client.ProjectsV2ItemWithContent().list({ project_number: 1 })
```


### ProtectedBranch

Create an instance: `const protected_branch = client.ProtectedBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_deletions` | `Record<string, any>` | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `Record<string, any>` | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `Record<string, any>` | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `Record<string, any>` | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `Record<string, any>` | Enforce all configured restrictions for administrators. |
| `lock_branch` | `Record<string, any>` | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `Record<string, any>` | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `Record<string, any>` | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `Record<string, any>` | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `Record<string, any>` |  |
| `required_status_checks` | `Record<string, any>` | Status Check Policy |
| `restrictions` | `Record<string, any>` | Branch Restriction Policy |
| `url` | `string` |  |


### ProtectedBranchAdminEnforced

Create an instance: `const protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const protected_branch_admin_enforced = await client.ProtectedBranchAdminEnforced().load({ branch_id: 'branch_id', owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const protected_branch_admin_enforced = await client.ProtectedBranchAdminEnforced().create({
  branch_id: 'example_branch_id',
  owner: 'example_owner',
  repo: 'example_repo',
  enabled: true,
  url: 'example_url',
})
```


### ProtectedBranchPullRequestReview

Create an instance: `const protected_branch_pull_request_review = client.ProtectedBranchPullRequestReview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bypass_pull_request_allowances` | `Record<string, any>` | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `boolean` | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `Record<string, any>` | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `boolean` | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `boolean` | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `number` | Specifies the number of reviewers required to approve pull requests. |
| `url` | `string` |  |

#### Example: Load

```ts
const protected_branch_pull_request_review = await client.ProtectedBranchPullRequestReview().load({ branch_id: 'branch_id', owner: 'owner', repo: 'repo' })
```


### PublicMember

Create an instance: `const public_member = client.PublicMember()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const public_members = await client.PublicMember().list({ org_id: "example" })
```


### Pull

Create an instance: `const pull = client.Pull()`

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
| `additions` | `number` |  |
| `assignee` | `Record<string, any>` | A GitHub user. |
| `assignees` | `any[]` |  |
| `author_association` | `string` | How the author is associated with the repository. |
| `auto_merge` | `Record<string, any>` | The status of auto merging a pull request. |
| `base` | `Record<string, any>` | The name of the branch you want the changes pulled into. |
| `body` | `string` | The contents of the pull request. |
| `changed_files` | `number` |  |
| `closed_at` | `string` |  |
| `comments` | `number` |  |
| `comments_url` | `string` |  |
| `commit_message` | `string` | Extra detail to append to automatic commit message. |
| `commit_title` | `string` | Title for the automatic commit message. |
| `commits` | `number` |  |
| `commits_url` | `string` |  |
| `created_at` | `string` |  |
| `deletions` | `number` |  |
| `diff_url` | `string` |  |
| `draft` | `boolean` | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `string` | The expected SHA of the pull request's HEAD ref. |
| `head` | `Record<string, any>` | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `issue` | `number` | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` |  |
| `labels` | `any[]` |  |
| `links` | `Record<string, any>` |  |
| `locked` | `boolean` |  |
| `maintainer_can_modify` | `boolean` | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` |  |
| `merge_method` | `string` | The merge method to use. |
| `mergeable` | `boolean` |  |
| `mergeable_state` | `string` |  |
| `merged` | `boolean` |  |
| `merged_at` | `string` |  |
| `merged_by` | `Record<string, any>` | A GitHub user. |
| `message` | `string` |  |
| `milestone` | `Record<string, any>` | A collection of related issues and pull requests. |
| `node_id` | `string` |  |
| `number` | `number` | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` |  |
| `rebaseable` | `boolean` |  |
| `requested_reviewers` | `any[]` |  |
| `requested_teams` | `any[]` |  |
| `review_comment_url` | `string` |  |
| `review_comments` | `number` |  |
| `review_comments_url` | `string` |  |
| `sha` | `string` | SHA that pull request head must match to allow merge. |
| `state` | `string` | State of this Pull Request. |
| `statuses_url` | `string` |  |
| `title` | `string` | The title of the pull request. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Load

```ts
const pull = await client.Pull().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const pulls = await client.Pull().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const pull = await client.Pull().create({
  owner: 'example_owner',
  repo: 'example_repo',
  additions: 1,
  assignee: {},
  author_association: 'example_author_association',
  auto_merge: {},
  base: {},
  body: 'example_body',
  changed_files: 1,
  closed_at: 'example_closed_at',
  comments: 1,
  comments_url: 'example_comments_url',
  commits: 1,
  commits_url: 'example_commits_url',
  created_at: 'example_created_at',
  deletions: 1,
  diff_url: 'example_diff_url',
  head: {},
  html_url: 'example_html_url',
  id: 1,
  issue_url: 'example_issue_url',
  labels: [],
  links: {},
  locked: true,
  maintainer_can_modify: true,
  merge_commit_sha: 'example_merge_commit_sha',
  mergeable: true,
  mergeable_state: 'example_mergeable_state',
  merged: true,
  merged_at: 'example_merged_at',
  merged_by: {},
  message: 'example_message',
  milestone: {},
  node_id: 'example_node_id',
  number: 1,
  patch_url: 'example_patch_url',
  review_comment_url: 'example_review_comment_url',
  review_comments: 1,
  review_comments_url: 'example_review_comments_url',
  sha: 'example_sha',
  state: 'example_state',
  statuses_url: 'example_statuses_url',
  title: 'example_title',
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### PullRequestReview

Create an instance: `const pull_request_review = client.PullRequestReview()`

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
| `comments` | `any[]` | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | A commit SHA for the review. |
| `event` | `string` | The review action you want to perform. |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the review |
| `links` | `Record<string, any>` |  |
| `message` | `string` | The message for the pull request review dismissal |
| `node_id` | `string` |  |
| `pull_request_url` | `string` |  |
| `state` | `string` |  |
| `submitted_at` | `string` |  |
| `teams` | `any[]` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `users` | `any[]` |  |

#### Example: Load

```ts
const pull_request_review = await client.PullRequestReview().load({ id: 1, owner: 'owner', pull_id: 1, repo: 'repo' })
```

#### Example: List

```ts
const pull_request_reviews = await client.PullRequestReview().list({ owner: "example", pull_number: 1, repo: "example" })
```

#### Example: Create

```ts
const pull_request_review = await client.PullRequestReview().create({
  owner: 'example_owner',
  repo: 'example_repo',
  author_association: 'example_author_association',
  body: 'example_body',
  commit_id: 'example_commit_id',
  event: 'example_event',
  html_url: 'example_html_url',
  id: 1,
  links: {},
  message: 'example_message',
  node_id: 'example_node_id',
  pull_request_url: 'example_pull_request_url',
  state: 'example_state',
  teams: [],
  user: {},
  users: [],
})
```


### PullRequestReviewComment

Create an instance: `const pull_request_review_comment = client.PullRequestReviewComment()`

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
| `id` | `number` | The ID of the pull request review comment. |
| `in_reply_to` | `number` | The ID of the review comment to reply to. |
| `in_reply_to_id` | `number` | The comment ID to reply to. |
| `line` | `number` | The line of the blob to which the comment applies. |
| `links` | `Record<string, any>` |  |
| `node_id` | `string` | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | The SHA of the original commit to which the comment applies. |
| `original_line` | `number` | The line of the blob to which the comment applies. |
| `original_position` | `number` | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `number` | The first line of the range for a multi-line comment. |
| `path` | `string` | The relative path of the file to which the comment applies. |
| `position` | `number` | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `number` | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | URL for the pull request that the review comment belongs to. |
| `reactions` | `Record<string, any>` |  |
| `side` | `string` | The side of the diff to which the comment applies. |
| `start_line` | `number` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the pull request review comment |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: Load

```ts
const pull_request_review_comment = await client.PullRequestReviewComment().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const pull_request_review_comments = await client.PullRequestReviewComment().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const pull_request_review_comment = await client.PullRequestReviewComment().create({
  owner: 'example_owner',
  repo: 'example_repo',
  author_association: 'example_author_association',
  body: 'example_body',
  commit_id: 'example_commit_id',
  created_at: 'example_created_at',
  diff_hunk: 'example_diff_hunk',
  html_url: 'example_html_url',
  id: 1,
  links: {},
  node_id: 'example_node_id',
  original_commit_id: 'example_original_commit_id',
  path: 'example_path',
  pull_request_review_id: 1,
  pull_request_url: 'example_pull_request_url',
  reactions: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  user: {},
})
```


### PullRequestSimple

Create an instance: `const pull_request_simple = client.PullRequestSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `reviewers` | `any[]` | An array of user `login`s that will be requested. |
| `team_reviewers` | `any[]` | An array of team `slug`s that will be requested. |

#### Example: Create

```ts
const pull_request_simple = await client.PullRequestSimple().create({
  owner: 'example_owner',
  pull_number: 1,
  repo: 'example_repo',
})
```


### RateLimit

Create an instance: `const rate_limit = client.RateLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `rate` | `Record<string, any>` |  |
| `resources` | `Record<string, any>` |  |

#### Example: Load

```ts
const rate_limit = await client.RateLimit().load()
```


### Reaction

Create an instance: `const reaction = client.Reaction()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const reactions = await client.Reaction().list({ discussion_number: 1, team_id: 1 })
```

#### Example: Create

```ts
const reaction = await client.Reaction().create({
  discussion_number: 1,
  team_id: 1,
  avatar_url: 'example_avatar_url',
  content: 'example_content',
  created_at: 'example_created_at',
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  gists_url: 'example_gists_url',
  gravatar_id: 'example_gravatar_id',
  html_url: 'example_html_url',
  id: 1,
  login: 'example_login',
  node_id: 'example_node_id',
  organizations_url: 'example_organizations_url',
  received_events_url: 'example_received_events_url',
  repos_url: 'example_repos_url',
  site_admin: true,
  starred_url: 'example_starred_url',
  subscriptions_url: 'example_subscriptions_url',
  type: 'example_type',
  url: 'example_url',
  user: {},
})
```


### Referrer

Create an instance: `const referrer = client.Referrer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `referrer` | `string` |  |
| `uniques` | `number` |  |

#### Example: List

```ts
const referrers = await client.Referrer().list({ owner: "example", repo: "example" })
```


### Release

Create an instance: `const release = client.Release()`

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
| `assets` | `any[]` |  |
| `assets_url` | `string` |  |
| `author` | `Record<string, any>` | A GitHub user. |
| `body` | `string` | Text describing the contents of the tag. |
| `body_html` | `string` |  |
| `body_text` | `string` |  |
| `browser_download_url` | `string` |  |
| `content_type` | `string` |  |
| `created_at` | `string` |  |
| `digest` | `string` |  |
| `discussion_category_name` | `string` | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `string` | The URL of the release discussion. |
| `download_count` | `number` |  |
| `draft` | `boolean` | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `boolean` | Whether to automatically generate the name and body for this release. |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `immutable` | `boolean` | Whether or not the release is immutable. |
| `label` | `string` |  |
| `make_latest` | `string` | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `number` |  |
| `name` | `string` | The name of the release. |
| `node_id` | `string` |  |
| `prerelease` | `boolean` | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `string` |  |
| `reactions` | `Record<string, any>` |  |
| `size` | `number` |  |
| `state` | `string` | State of the release asset. |
| `tag_name` | `string` | The name of the tag. |
| `tarball_url` | `string` |  |
| `target_commitish` | `string` | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` |  |
| `upload_url` | `string` |  |
| `uploader` | `Record<string, any>` | A GitHub user. |
| `url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: Load

```ts
const release = await client.Release().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const releases = await client.Release().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const release = await client.Release().create({
  owner: 'example_owner',
  repo: 'example_repo',
  assets: [],
  assets_url: 'example_assets_url',
  author: {},
  browser_download_url: 'example_browser_download_url',
  content_type: 'example_content_type',
  created_at: 'example_created_at',
  digest: 'example_digest',
  download_count: 1,
  draft: true,
  html_url: 'example_html_url',
  id: 1,
  label: 'example_label',
  name: 'example_name',
  node_id: 'example_node_id',
  prerelease: true,
  published_at: 'example_published_at',
  reactions: {},
  size: 1,
  state: 'example_state',
  tag_name: 'example_tag_name',
  tarball_url: 'example_tarball_url',
  target_commitish: 'example_target_commitish',
  upload_url: 'example_upload_url',
  uploader: {},
  url: 'example_url',
  zipball_url: 'example_zipball_url',
})
```


### ReleaseAsset

Create an instance: `const release_asset = client.ReleaseAsset()`

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
| `download_count` | `number` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `label` | `string` | An alternate short description of the asset. |
| `login` | `string` |  |
| `name` | `string` | The file name of the asset. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `size` | `number` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | State of the release asset. |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `uploader` | `Record<string, any>` | A GitHub user. |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const release_asset = await client.ReleaseAsset().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const release_assets = await client.ReleaseAsset().list({ id: 1, owner: "example", repo: "example" })
```

#### Example: Create

```ts
const release_asset = await client.ReleaseAsset().create({
  id: 1,
  owner: 'example_owner',
  repo: 'example_repo',
  name: 'example_name',
  avatar_url: 'example_avatar_url',
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  gists_url: 'example_gists_url',
  gravatar_id: 'example_gravatar_id',
  html_url: 'example_html_url',
  login: 'example_login',
  node_id: 'example_node_id',
  organizations_url: 'example_organizations_url',
  received_events_url: 'example_received_events_url',
  repos_url: 'example_repos_url',
  site_admin: true,
  starred_url: 'example_starred_url',
  subscriptions_url: 'example_subscriptions_url',
  type: 'example_type',
  url: 'example_url',
})
```


### ReleaseNotesContent

Create an instance: `const release_notes_content = client.ReleaseNotesContent()`

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

```ts
const release_notes_content = await client.ReleaseNotesContent().create({
  owner: 'example_owner',
  repo: 'example_repo',
  body: 'example_body',
  name: 'example_name',
  tag_name: 'example_tag_name',
})
```


### Remove

Create an instance: `const remove = client.Remove()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usernames` | `any[]` | The GitHub user handles to be removed from the team. |

#### Example: Create

```ts
const remove = await client.Remove().create({
  enterprise: 'example_enterprise',
  team_id: 'example_team_id',
  usernames: [],
})
```


### Repo

Create an instance: `const repo = client.Repo()`

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
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is enabled for this repository |
| `app` | `Record<string, any>` | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `attestations` | `any[]` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `build_type` | `string` | The process by which the GitHub Pages site will be built. |
| `bundle` | `Record<string, any>` | The attestation's Sigstore Bundle. |
| `client_payload` | `Record<string, any>` | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` |  |
| `cname` | `string` | Specify a custom domain for the repository. |
| `code_search_index_status` | `Record<string, any>` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `content` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `string` | The default branch of the repository. |
| `default_branch_only` | `boolean` | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `Record<string, any>` | The type of deployment branch policy for this environment. |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `download_url` | `string` |  |
| `downloads_url` | `string` |  |
| `enabled` | `boolean` | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `string` |  |
| `event_type` | `string` | A custom webhook event name. |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `github_id` | `number` | Unique identifier of the repository |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `https_enforced` | `boolean` | Specify whether HTTPS should be enforced for the repository. |
| `id` | `string` | Unique identifier of the repository |
| `integration_url` | `string` | The URL for the endpoint to get details about the app. |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `links` | `Record<string, any>` |  |
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
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organization` | `string` | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `Record<string, any>` | A GitHub user. |
| `path` | `string` |  |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` | Whether the repository is private or public. |
| `properties` | `any[]` | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `any[]` | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `sha` | `string` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `slug` | `string` | The slugified name of the deployment protection rule integration. |
| `source` | `any` |  |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_ids` | `any[]` | ID of the team or teams to add to the repository. |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `type` | `string` | Whether this rule targets a branch or tag. |
| `updated_at` | `string` | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```ts
const repo = await client.Repo().load({ owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const repos = await client.Repo().list()
```

#### Example: Create

```ts
const repo = await client.Repo().create({
  owner: 'example_owner',
  repo: 'example_repo',
  app: {},
  archive_url: 'example_archive_url',
  archived: true,
  assignees_url: 'example_assignees_url',
  blobs_url: 'example_blobs_url',
  branches_url: 'example_branches_url',
  bundle: {},
  clone_url: 'example_clone_url',
  collaborators_url: 'example_collaborators_url',
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  created_at: 'example_created_at',
  default_branch: 'example_default_branch',
  deployment_branch_policy: {},
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  disabled: true,
  downloads_url: 'example_downloads_url',
  enabled: true,
  event_type: 'example_event_type',
  events_url: 'example_events_url',
  fork: true,
  forks: 1,
  forks_count: 1,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  github_id: 1,
  has_downloads: true,
  has_issues: true,
  has_pages: true,
  has_projects: true,
  has_wiki: true,
  homepage: 'example_homepage',
  hooks_url: 'example_hooks_url',
  id: 'example_id',
  integration_url: 'example_integration_url',
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  language: 'example_language',
  languages_url: 'example_languages_url',
  license: {},
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  mirror_url: 'example_mirror_url',
  new_owner: 'example_new_owner',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  open_issues: 1,
  open_issues_count: 1,
  permissions: {},
  private: true,
  properties: [],
  pulls_url: 'example_pulls_url',
  pushed_at: 'example_pushed_at',
  releases_url: 'example_releases_url',
  slug: 'example_slug',
  ssh_url: 'example_ssh_url',
  stargazers_count: 1,
  stargazers_url: 'example_stargazers_url',
  statuses_url: 'example_statuses_url',
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  svn_url: 'example_svn_url',
  tags_url: 'example_tags_url',
  teams_url: 'example_teams_url',
  trees_url: 'example_trees_url',
  updated_at: 'example_updated_at',
  watchers: 1,
  watchers_count: 1,
})
```


### Repository

Create an instance: `const repository = client.Repository()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | Whether anonymous git access is enabled for this repository |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `blobs_url` | `string` |  |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_search_index_status` | `Record<string, any>` | The status of the code search index for this repository |
| `collaborators_url` | `string` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `downloads_url` | `string` |  |
| `events_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `has_discussions` | `boolean` | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the repository |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `master_branch` | `string` |  |
| `merge_commit_message` | `string` | The default value for a merge commit message. |
| `merge_commit_title` | `string` | The default value for a merge commit title. |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `releases_url` | `string` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `string` | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `statuses_url` | `string` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `use_squash_pr_title_as_default` | `boolean` | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Whether to require contributors to sign off on web-based commits |

#### Example: List

```ts
const repositorys = await client.Repository().list()
```


### RepositoryAdvisory

Create an instance: `const repository_advisory = client.RepositoryAdvisory()`

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
| `author` | `any` | The author of the advisory. |
| `closed_at` | `string` | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `any[]` | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `any[]` | A list of users that collaborate on the advisory. |
| `created_at` | `string` | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `any[]` | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `any[]` |  |
| `cve_id` | `string` | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `Record<string, any>` |  |
| `cvss_severities` | `Record<string, any>` |  |
| `cvss_vector_string` | `string` | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `any[]` | A list of only the CWE IDs. |
| `cwes` | `any[]` |  |
| `description` | `string` | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | The GitHub Security Advisory ID. |
| `html_url` | `string` | The URL for the advisory. |
| `identifiers` | `any[]` |  |
| `private_fork` | `any` | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `any` | The publisher of the advisory. |
| `severity` | `string` | The severity of the advisory. |
| `start_private_fork` | `boolean` | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | The state of the advisory. |
| `submission` | `Record<string, any>` |  |
| `summary` | `string` | A short summary of the advisory. |
| `updated_at` | `string` | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | The API URL for the advisory. |
| `vulnerabilities` | `any[]` | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `string` | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

#### Example: Load

```ts
const repository_advisory = await client.RepositoryAdvisory().load({ ghsa_id: 'ghsa_id', owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const repository_advisorys = await client.RepositoryAdvisory().list({ org_id: "example" })
```

#### Example: Create

```ts
const repository_advisory = await client.RepositoryAdvisory().create({
  owner: 'example_owner',
  repo: 'example_repo',
  author: 'example_author',
  closed_at: 'example_closed_at',
  collaborating_teams: [],
  collaborating_users: [],
  created_at: 'example_created_at',
  credits: [],
  credits_detailed: [],
  cve_id: 'example_cve_id',
  cvss: {},
  cwe_ids: [],
  cwes: [],
  description: 'example_description',
  ghsa_id: 'example_ghsa_id',
  html_url: 'example_html_url',
  identifiers: [],
  private_fork: 'example_private_fork',
  published_at: 'example_published_at',
  publisher: 'example_publisher',
  severity: 'example_severity',
  state: 'example_state',
  submission: {},
  summary: 'example_summary',
  updated_at: 'example_updated_at',
  url: 'example_url',
  vulnerabilities: [],
  withdrawn_at: 'example_withdrawn_at',
})
```


### RepositoryCollaboratorPermission

Create an instance: `const repository_collaborator_permission = client.RepositoryCollaboratorPermission()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `permissions` | `Record<string, any>` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `role_name` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: Load

```ts
const repository_collaborator_permission = await client.RepositoryCollaboratorPermission().load({ owner: 'owner', repo: 'repo', username: 'username' })
```


### RepositoryInvitation

Create an instance: `const repository_invitation = client.RepositoryInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expired` | `boolean` | Whether or not the invitation has expired |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the repository invitation. |
| `invitee` | `Record<string, any>` | A GitHub user. |
| `inviter` | `Record<string, any>` | A GitHub user. |
| `node_id` | `string` |  |
| `permission` | `string` | The permission to grant the collaborator. |
| `permissions` | `string` | The permission associated with the invitation. |
| `repository` | `Record<string, any>` | Minimal Repository |
| `url` | `string` | URL for the repository invitation |

#### Example: List

```ts
const repository_invitations = await client.RepositoryInvitation().list()
```


### RepositoryRuleDetailed

Create an instance: `const repository_rule_detailed = client.RepositoryRuleDetailed()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `parameters` | `Record<string, any>` |  |
| `ruleset_id` | `number` |  |
| `ruleset_source` | `string` |  |
| `ruleset_source_type` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const repository_rule_detailed = await client.RepositoryRuleDetailed().load({ branch: 'branch', owner: 'owner', repo: 'repo' })
```


### RepositoryRuleset

Create an instance: `const repository_ruleset = client.RepositoryRuleset()`

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
| `bypass_actors` | `any[]` | The actors that can bypass the rules in this ruleset |
| `conditions` | `any` | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` |  |
| `current_user_can_bypass` | `string` | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | The enforcement level of the ruleset. |
| `id` | `number` | The ID of the ruleset |
| `links` | `Record<string, any>` |  |
| `name` | `string` | The name of the ruleset |
| `node_id` | `string` |  |
| `rules` | `any[]` | An array of rules within the ruleset. |
| `source` | `string` | The name of the source |
| `source_type` | `string` | The type of the source of the ruleset |
| `target` | `string` | The target of the ruleset |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const repository_ruleset = await client.RepositoryRuleset().load({ id: 1 })
```

#### Example: List

```ts
const repository_rulesets = await client.RepositoryRuleset().list({ org_id: "example" })
```

#### Example: Create

```ts
const repository_ruleset = await client.RepositoryRuleset().create({
  org_id: 'example_org_id',
  enforcement: 'example_enforcement',
  id: 1,
  name: 'example_name',
  source: 'example_source',
})
```


### RepositorySubscription

Create an instance: `const repository_subscription = client.RepositorySubscription()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `ignored` | `boolean` | Determines if all notifications should be blocked from this repository. |
| `reason` | `string` |  |
| `repository_url` | `string` |  |
| `subscribed` | `boolean` | Determines if notifications should be received from this repository. |
| `url` | `string` |  |

#### Example: Load

```ts
const repository_subscription = await client.RepositorySubscription().load({ owner: 'owner', repo: 'repo' })
```


### ReviewComment

Create an instance: `const review_comment = client.ReviewComment()`

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
| `id` | `number` |  |
| `in_reply_to_id` | `number` |  |
| `line` | `number` | The line of the blob to which the comment applies. |
| `links` | `Record<string, any>` |  |
| `node_id` | `string` |  |
| `original_commit_id` | `string` |  |
| `original_line` | `number` | The original line of the blob to which the comment applies. |
| `original_position` | `number` |  |
| `original_start_line` | `number` | The original first line of the range for a multi-line comment. |
| `path` | `string` |  |
| `position` | `number` |  |
| `pull_request_review_id` | `number` |  |
| `pull_request_url` | `string` |  |
| `reactions` | `Record<string, any>` |  |
| `side` | `string` | The side of the first line of the range for a multi-line comment. |
| `start_line` | `number` | The first line of the range for a multi-line comment. |
| `start_side` | `string` | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |

#### Example: List

```ts
const review_comments = await client.ReviewComment().list({ id: 1, owner: "example", pull_id: 1, repo: "example" })
```


### RuleSuite

Create an instance: `const rule_suite = client.RuleSuite()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor_id` | `number` | The number that identifies the user. |
| `actor_name` | `string` | The handle for the GitHub user account. |
| `after_sha` | `string` | The new commit SHA of the ref. |
| `before_sha` | `string` | The previous commit SHA of the ref. |
| `evaluation_result` | `string` | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `number` | The unique identifier of the rule insight. |
| `pushed_at` | `string` |  |
| `ref` | `string` | The ref name that the evaluation ran on. |
| `repository_id` | `number` | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `string` | The name of the repository without the `.git` extension. |
| `result` | `string` | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `any[]` | Details on the evaluated rules. |

#### Example: Load

```ts
const rule_suite = await client.RuleSuite().load({ id: 1 })
```

#### Example: List

```ts
const rule_suites = await client.RuleSuite().list({ org_id: "example" })
```


### RulesetVersion

Create an instance: `const ruleset_version = client.RulesetVersion()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | The actor who updated the ruleset |
| `id` | `string` |  |
| `updated_at` | `string` |  |
| `version_id` | `number` | The ID of the previous version of the ruleset |

#### Example: List

```ts
const ruleset_versions = await client.RulesetVersion().list({ id: 1 })
```


### RulesetVersionWithState

Create an instance: `const ruleset_version_with_state = client.RulesetVersionWithState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | The actor who updated the ruleset |
| `state` | `Record<string, any>` | The state of the ruleset version |
| `updated_at` | `string` |  |
| `version_id` | `number` | The ID of the previous version of the ruleset |

#### Example: Load

```ts
const ruleset_version_with_state = await client.RulesetVersionWithState().load({ ruleset_id: 1, version_id: 1 })
```


### Runner

Create an instance: `const runner = client.Runner()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `busy` | `boolean` |  |
| `ephemeral` | `boolean` |  |
| `id` | `number` | The ID of the runner. |
| `labels` | `any[]` |  |
| `name` | `string` | The name of the runner. |
| `os` | `string` | The Operating System of the runner. |
| `runner_group_id` | `number` | The ID of the runner group. |
| `status` | `string` | The status of the runner. |

#### Example: Load

```ts
const runner = await client.Runner().load({ id: 1 })
```


### RunnerApplication

Create an instance: `const runner_application = client.RunnerApplication()`

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

```ts
const runner_applications = await client.RunnerApplication().list({ org_id: "example" })
```


### RunnerGroup

Create an instance: `const runner_group = client.RunnerGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allows_public_repositories` | `boolean` | Whether the runner group can be used by `public` repositories. |
| `default` | `boolean` |  |
| `hosted_runners_url` | `string` |  |
| `id` | `number` |  |
| `inherited` | `boolean` |  |
| `inherited_allows_public_repositories` | `boolean` |  |
| `name` | `string` | Name of the runner group. |
| `network_configuration_id` | `string` | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `boolean` | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `any[]` | List of runner IDs to add to the runner group. |
| `runners_url` | `string` |  |
| `selected_repositories_url` | `string` | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `any[]` | List of repository IDs that can access the runner group. |
| `selected_workflows` | `any[]` | List of workflows the runner group should be allowed to run. |
| `visibility` | `string` | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `boolean` | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

#### Example: Load

```ts
const runner_group = await client.RunnerGroup().load({ id: 1, org_id: 'org_id' })
```

#### Example: Create

```ts
const runner_group = await client.RunnerGroup().create({
  org_id: 'example_org_id',
  allows_public_repositories: true,
  default: true,
  id: 1,
  inherited: true,
  name: 'example_name',
  runners_url: 'example_runners_url',
  visibility: 'example_visibility',
})
```


### Search

Create an instance: `const search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_lock_reason` | `string` |  |
| `aliases` | `any[]` |  |
| `allow_auto_merge` | `boolean` |  |
| `allow_forking` | `boolean` |  |
| `allow_merge_commit` | `boolean` |  |
| `allow_rebase_merge` | `boolean` |  |
| `allow_squash_merge` | `boolean` |  |
| `archive_url` | `string` |  |
| `archived` | `boolean` |  |
| `assignee` | `Record<string, any>` | A GitHub user. |
| `assignees` | `any[]` |  |
| `assignees_url` | `string` |  |
| `author` | `Record<string, any>` | A GitHub user. |
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
| `comments` | `number` |  |
| `comments_url` | `string` |  |
| `commit` | `Record<string, any>` |  |
| `commits_url` | `string` |  |
| `committer` | `Record<string, any>` | Metaproperties for Git author/committer information. |
| `company` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `curated` | `boolean` |  |
| `default` | `boolean` |  |
| `default_branch` | `string` |  |
| `delete_branch_on_merge` | `boolean` |  |
| `deployments_url` | `string` |  |
| `description` | `string` |  |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `display_name` | `string` |  |
| `downloads_url` | `string` |  |
| `draft` | `boolean` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `featured` | `boolean` |  |
| `file_size` | `number` |  |
| `followers` | `number` |  |
| `followers_url` | `string` |  |
| `following` | `number` |  |
| `following_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` |  |
| `has_issues` | `boolean` |  |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` |  |
| `has_wiki` | `boolean` |  |
| `hireable` | `boolean` |  |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `is_template` | `boolean` |  |
| `issue_comment_url` | `string` |  |
| `issue_dependencies_summary` | `Record<string, any>` |  |
| `issue_events_url` | `string` |  |
| `issue_field_values` | `any[]` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels` | `any[]` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_modified_at` | `string` |  |
| `license` | `Record<string, any>` | License Simple |
| `line_numbers` | `any[]` |  |
| `location` | `string` |  |
| `locked` | `boolean` |  |
| `login` | `string` |  |
| `logo_url` | `string` |  |
| `master_branch` | `string` |  |
| `merges_url` | `string` |  |
| `milestone` | `Record<string, any>` | A collection of related issues and pull requests. |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `notifications_url` | `string` |  |
| `number` | `number` |  |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organizations_url` | `string` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `parents` | `any[]` |  |
| `path` | `string` |  |
| `performed_via_github_app` | `Record<string, any>` | GitHub apps are a new way to extend GitHub. |
| `permissions` | `Record<string, any>` |  |
| `private` | `boolean` |  |
| `public_gists` | `number` |  |
| `public_repos` | `number` |  |
| `pull_request` | `Record<string, any>` |  |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `Record<string, any>` |  |
| `received_events_url` | `string` |  |
| `related` | `any[]` |  |
| `released` | `string` |  |
| `releases_url` | `string` |  |
| `repos_url` | `string` |  |
| `repository` | `Record<string, any>` | A repository on GitHub. |
| `repository_count` | `number` |  |
| `repository_url` | `string` |  |
| `score` | `number` |  |
| `sha` | `string` |  |
| `short_description` | `string` |  |
| `site_admin` | `boolean` |  |
| `size` | `number` |  |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` |  |
| `state_reason` | `string` |  |
| `statuses_url` | `string` |  |
| `sub_issues_summary` | `Record<string, any>` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `suspended_at` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `text_matches` | `any[]` |  |
| `timeline_url` | `string` |  |
| `title` | `string` |  |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `type` | `Record<string, any>` | The type of issue. |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user` | `Record<string, any>` | A GitHub user. |
| `user_view_type` | `string` |  |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` |  |

#### Example: List

```ts
const searchs = await client.Search().list({ q: "example" })
```


### SecretScanning

Create an instance: `const secret_scanning = client.SecretScanning()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_settings` | `any[]` | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | The updated pattern configuration version. |
| `provider_pattern_settings` | `any[]` | Pattern settings for provider patterns. |


### SecretScanningAlert

Create an instance: `const secret_scanning_alert = client.SecretScanningAlert()`

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
| `first_location_detected` | `any` | Details on the location where the token was initially detected. |
| `has_more_locations` | `boolean` | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | The GitHub URL of the alert resource. |
| `id` | `string` |  |
| `is_base64_encoded` | `boolean` | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | The REST API URL of the code locations for this alert. |
| `multi_repo` | `boolean` | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `number` | The security alert number. |
| `publicly_leaked` | `boolean` | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `Record<string, any>` | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `Record<string, any>` | A GitHub user. |
| `resolution` | `string` | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | An optional comment to resolve an alert. |
| `resolved_at` | `string` | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `Record<string, any>` | A GitHub user. |
| `secret` | `string` | The secret that was detected. |
| `secret_type` | `string` | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | The REST API URL of the alert resource. |
| `validity` | `string` | The token status as of the latest validity check. |

#### Example: Load

```ts
const secret_scanning_alert = await client.SecretScanningAlert().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: List

```ts
const secret_scanning_alerts = await client.SecretScanningAlert().list({ owner: "example", repo: "example" })
```


### SecretScanningLocation

Create an instance: `const secret_scanning_location = client.SecretScanningLocation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `details` | `any` |  |
| `type` | `string` | The location type. |

#### Example: List

```ts
const secret_scanning_locations = await client.SecretScanningLocation().list({ alert_number: 1, owner: "example", repo: "example" })
```


### SecretScanningPatternConfiguration

Create an instance: `const secret_scanning_pattern_configuration = client.SecretScanningPatternConfiguration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_pattern_overrides` | `any[]` | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | The version of the entity. |
| `provider_pattern_overrides` | `any[]` | Overrides for partner patterns. |

#### Example: List

```ts
const secret_scanning_pattern_configurations = await client.SecretScanningPatternConfiguration().list({ org_id: "example" })
```


### SecretScanningPushProtectionBypass

Create an instance: `const secret_scanning_push_protection_bypass = client.SecretScanningPushProtectionBypass()`

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

```ts
const secret_scanning_push_protection_bypass = await client.SecretScanningPushProtectionBypass().create({
  owner: 'example_owner',
  repo: 'example_repo',
  placeholder_id: 'example_placeholder_id',
})
```


### SecretScanningScanHistory

Create an instance: `const secret_scanning_scan_history = client.SecretScanningScanHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backfill_scans` | `any[]` |  |
| `custom_pattern_backfill_scans` | `any[]` |  |
| `incremental_scans` | `any[]` |  |
| `pattern_update_scans` | `any[]` |  |

#### Example: List

```ts
const secret_scanning_scan_historys = await client.SecretScanningScanHistory().list({ owner: "example", repo: "example" })
```


### SecurityAdvisory

Create an instance: `const security_advisory = client.SecurityAdvisory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const security_advisory = await client.SecurityAdvisory().create({
  id: 'example_id',
  owner: 'example_owner',
  repo: 'example_repo',
})
```


### SelectedAction

Create an instance: `const selected_action = client.SelectedAction()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `github_owned_allowed` | `boolean` | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `any[]` | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `boolean` | Whether actions from GitHub Marketplace verified creators are allowed. |

#### Example: List

```ts
const selected_actions = await client.SelectedAction().list({ org_id: "example" })
```


### SelfHostedRunner

Create an instance: `const self_hosted_runner = client.SelfHostedRunner()`

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

```ts
const self_hosted_runner = await client.SelfHostedRunner().load({ org_id: 'org_id' })
```


### ShortBlob

Create an instance: `const short_blob = client.ShortBlob()`

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

```ts
const short_blob = await client.ShortBlob().create({
  owner: 'example_owner',
  repo: 'example_repo',
  content: 'example_content',
})
```


### ShortBranch

Create an instance: `const short_branch = client.ShortBranch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Record<string, any>` |  |
| `name` | `string` |  |
| `protected` | `boolean` |  |
| `protection` | `Record<string, any>` | Branch Protection |
| `protection_url` | `string` |  |

#### Example: List

```ts
const short_branchs = await client.ShortBranch().list({ owner: "example", repo: "example" })
```


### SimpleClassroom

Create an instance: `const simple_classroom = client.SimpleClassroom()`


### SimpleClassroomAssignment

Create an instance: `const simple_classroom_assignment = client.SimpleClassroomAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accepted` | `number` | The number of students that have accepted the assignment. |
| `classroom` | `Record<string, any>` | A GitHub Classroom classroom |
| `deadline` | `string` | The time at which the assignment is due. |
| `editor` | `string` | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `boolean` | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `number` | Unique identifier of the repository. |
| `invitations_enabled` | `boolean` | Whether the invitation link is enabled. |
| `invite_link` | `string` | The link that a student can use to accept the assignment. |
| `language` | `string` | The programming language used in the assignment. |
| `max_members` | `number` | The maximum allowable members per team. |
| `max_teams` | `number` | The maximum allowable teams for the assignment. |
| `passing` | `number` | The number of students that have passed the assignment. |
| `public_repo` | `boolean` | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Sluggified name of the assignment. |
| `students_are_repo_admins` | `boolean` | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `number` | The number of students that have submitted the assignment. |
| `title` | `string` | Assignment title. |
| `type` | `string` | Whether it's a Group Assignment or Individual Assignment. |

#### Example: List

```ts
const simple_classroom_assignments = await client.SimpleClassroomAssignment().list({ classroom_id: 1 })
```


### SocialAccount

Create an instance: `const social_account = client.SocialAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_urls` | `any[]` | Full URLs for the social media profiles to add. |
| `provider` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const social_accounts = await client.SocialAccount().list()
```

#### Example: Create

```ts
const social_account = await client.SocialAccount().create({
  account_urls: [],
  provider: 'example_provider',
  url: 'example_url',
})
```


### SshSigningKey

Create an instance: `const ssh_signing_key = client.SshSigningKey()`

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
| `id` | `number` |  |
| `key` | `string` | The public SSH key to add to your GitHub account. |
| `title` | `string` | A descriptive name for the new key. |

#### Example: Load

```ts
const ssh_signing_key = await client.SshSigningKey().load({ id: 1 })
```

#### Example: List

```ts
const ssh_signing_keys = await client.SshSigningKey().list()
```

#### Example: Create

```ts
const ssh_signing_key = await client.SshSigningKey().create({
  created_at: 'example_created_at',
  id: 1,
  key: 'example_key',
  title: 'example_title',
})
```


### Status

Create an instance: `const status = client.Status()`

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
| `creator` | `Record<string, any>` | A GitHub user. |
| `description` | `string` | A short description of the status. |
| `id` | `number` |  |
| `node_id` | `string` |  |
| `state` | `string` | The state of the status. |
| `target_url` | `string` | The target URL to associate with this status. |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const statuss = await client.Status().list({ owner: "example", ref: "example", repo: "example" })
```

#### Example: Create

```ts
const status = await client.Status().create({
  id: 'example_id',
  owner: 'example_owner',
  repo: 'example_repo',
  avatar_url: 'example_avatar_url',
  created_at: 'example_created_at',
  creator: {},
  node_id: 'example_node_id',
  state: 'example_state',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### StatusCheckPolicy

Create an instance: `const status_check_policy = client.StatusCheckPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_id` | `number` |  |
| `checks` | `any[]` | The list of status checks to require in order to merge into this branch. |
| `context` | `string` |  |
| `contexts` | `any[]` | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `string` |  |
| `strict` | `boolean` | Require branches to be up to date before merging. |
| `url` | `string` |  |

#### Example: List

```ts
const status_check_policys = await client.StatusCheckPolicy().list({ branch_id: "example", owner: "example", repo: "example" })
```


### Subscriber

Create an instance: `const subscriber = client.Subscriber()`

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
| `id` | `number` |  |
| `login` | `string` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |

#### Example: List

```ts
const subscribers = await client.Subscriber().list({ owner: "example", repo: "example" })
```


### Tag

Create an instance: `const tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `commit` | `Record<string, any>` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `tarball_url` | `string` |  |
| `zipball_url` | `string` |  |

#### Example: List

```ts
const tags = await client.Tag().list({ owner: "example", repo: "example" })
```


### TagProtection

Create an instance: `const tag_protection = client.TagProtection()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `enabled` | `boolean` |  |
| `id` | `number` |  |
| `pattern` | `string` | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `string` |  |

#### Example: List

```ts
const tag_protections = await client.TagProtection().list({ owner: "example", repo: "example" })
```

#### Example: Create

```ts
const tag_protection = await client.TagProtection().create({
  owner: 'example_owner',
  repo: 'example_repo',
  pattern: 'example_pattern',
})
```


### Team

Create an instance: `const team = client.Team()`

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
| `allow_auto_merge` | `boolean` | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | Whether to allow squash merges for pull requests. |
| `archive_url` | `string` |  |
| `archived` | `boolean` | Whether the repository is archived. |
| `assignees_url` | `string` |  |
| `assignment` | `string` | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `Record<string, any>` | A GitHub user. |
| `avatar_url` | `string` |  |
| `blobs_url` | `string` |  |
| `body` | `string` | The main text of the comment. |
| `body_html` | `string` |  |
| `body_version` | `string` | The current version of the body content. |
| `branches_url` | `string` |  |
| `clone_url` | `string` |  |
| `code_of_conduct` | `Record<string, any>` | Code Of Conduct |
| `collaborators_url` | `string` |  |
| `columns_url` | `string` |  |
| `comments_count` | `number` |  |
| `comments_url` | `string` |  |
| `commits_url` | `string` |  |
| `compare_url` | `string` |  |
| `contents_url` | `string` |  |
| `contributors_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` | A GitHub user. |
| `custom_properties` | `Record<string, any>` | The custom properties that were defined for the repository. |
| `default_branch` | `string` | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` |  |
| `description` | `string` | The description of the team. |
| `disabled` | `boolean` | Returns whether or not this repository disabled. |
| `discussion_url` | `string` |  |
| `downloads_url` | `string` |  |
| `email` | `string` |  |
| `events_url` | `string` |  |
| `failed_at` | `string` |  |
| `failed_reason` | `string` |  |
| `followers_url` | `string` |  |
| `following_url` | `string` |  |
| `fork` | `boolean` |  |
| `forks` | `number` |  |
| `forks_count` | `number` |  |
| `forks_url` | `string` |  |
| `full_name` | `string` |  |
| `gists_url` | `string` |  |
| `git_commits_url` | `string` |  |
| `git_refs_url` | `string` |  |
| `git_tags_url` | `string` |  |
| `git_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `has_discussions` | `boolean` |  |
| `has_downloads` | `boolean` | Whether downloads are enabled. |
| `has_issues` | `boolean` | Whether issues are enabled. |
| `has_pages` | `boolean` |  |
| `has_projects` | `boolean` | Whether projects are enabled. |
| `has_wiki` | `boolean` | Whether the wiki is enabled. |
| `homepage` | `string` |  |
| `hooks_url` | `string` |  |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the repository |
| `invitation_source` | `string` |  |
| `invitation_teams_url` | `string` |  |
| `inviter` | `Record<string, any>` | A GitHub user. |
| `is_template` | `boolean` | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` |  |
| `issue_events_url` | `string` |  |
| `issues_url` | `string` |  |
| `keys_url` | `string` |  |
| `labels_url` | `string` |  |
| `language` | `string` |  |
| `languages_url` | `string` |  |
| `last_edited_at` | `string` |  |
| `ldap_dn` | `string` | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `Record<string, any>` | License Simple |
| `login` | `string` |  |
| `maintainers` | `any[]` | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `string` |  |
| `members_count` | `number` |  |
| `members_url` | `string` |  |
| `merges_url` | `string` |  |
| `milestones_url` | `string` |  |
| `mirror_url` | `string` |  |
| `name` | `string` | The name of the repository. |
| `network_count` | `number` |  |
| `node_id` | `string` |  |
| `notification_setting` | `string` | The notification setting the team has set |
| `notifications_url` | `string` |  |
| `number` | `number` | The unique sequence number of a team discussion comment. |
| `open_issues` | `number` |  |
| `open_issues_count` | `number` |  |
| `organization` | `Record<string, any>` | Team Organization |
| `organization_permission` | `string` | The organization permission for this project. |
| `organizations_url` | `string` |  |
| `owner` | `Record<string, any>` | A GitHub user. |
| `owner_url` | `string` |  |
| `parent` | `Record<string, any>` | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `number` | The ID of a team to set as the parent team. |
| `permission` | `string` | Permission that the team will have for its repositories |
| `permissions` | `Record<string, any>` |  |
| `pinned` | `boolean` | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | The level of privacy this team should have |
| `private` | `boolean` | Whether the repository is private or public. |
| `pulls_url` | `string` |  |
| `pushed_at` | `string` |  |
| `reactions` | `Record<string, any>` |  |
| `received_events_url` | `string` |  |
| `releases_url` | `string` |  |
| `repo_names` | `any[]` | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `number` |  |
| `repos_url` | `string` |  |
| `repositories_url` | `string` |  |
| `role` | `string` | The role of the user in the team. |
| `role_name` | `string` |  |
| `security_and_analysis` | `Record<string, any>` |  |
| `site_admin` | `boolean` |  |
| `size` | `number` | The size of the repository, in kilobytes. |
| `slug` | `string` |  |
| `ssh_url` | `string` |  |
| `stargazers_count` | `number` |  |
| `stargazers_url` | `string` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `state` | `string` | The state of the user's membership in the team. |
| `statuses_url` | `string` |  |
| `subscribers_count` | `number` |  |
| `subscribers_url` | `string` |  |
| `subscription_url` | `string` |  |
| `subscriptions_url` | `string` |  |
| `svn_url` | `string` |  |
| `tags_url` | `string` |  |
| `team_count` | `number` |  |
| `team_url` | `string` |  |
| `teams_url` | `string` |  |
| `temp_clone_token` | `string` |  |
| `title` | `string` | The title of the discussion. |
| `topics` | `any[]` |  |
| `trees_url` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` | URL for the team |
| `user_view_type` | `string` |  |
| `visibility` | `string` | The repository visibility: public, private, or internal. |
| `watchers` | `number` |  |
| `watchers_count` | `number` |  |
| `web_commit_signoff_required` | `boolean` | Whether to require contributors to sign off on web-based commits |

#### Example: Load

```ts
const team = await client.Team().load({ id: 1 })
```

#### Example: List

```ts
const teams = await client.Team().list()
```

#### Example: Create

```ts
const team = await client.Team().create({
  org_id: 'example_org_id',
  archive_url: 'example_archive_url',
  archived: true,
  assignees_url: 'example_assignees_url',
  author: {},
  avatar_url: 'example_avatar_url',
  blobs_url: 'example_blobs_url',
  body: 'example_body',
  body_html: 'example_body_html',
  body_version: 'example_body_version',
  branches_url: 'example_branches_url',
  clone_url: 'example_clone_url',
  code_of_conduct: {},
  collaborators_url: 'example_collaborators_url',
  columns_url: 'example_columns_url',
  comments_count: 1,
  comments_url: 'example_comments_url',
  commits_url: 'example_commits_url',
  compare_url: 'example_compare_url',
  contents_url: 'example_contents_url',
  contributors_url: 'example_contributors_url',
  created_at: 'example_created_at',
  creator: {},
  default_branch: 'example_default_branch',
  deployments_url: 'example_deployments_url',
  description: 'example_description',
  disabled: true,
  discussion_url: 'example_discussion_url',
  downloads_url: 'example_downloads_url',
  events_url: 'example_events_url',
  followers_url: 'example_followers_url',
  following_url: 'example_following_url',
  fork: true,
  forks: 1,
  forks_count: 1,
  forks_url: 'example_forks_url',
  full_name: 'example_full_name',
  gists_url: 'example_gists_url',
  git_commits_url: 'example_git_commits_url',
  git_refs_url: 'example_git_refs_url',
  git_tags_url: 'example_git_tags_url',
  git_url: 'example_git_url',
  gravatar_id: 'example_gravatar_id',
  has_downloads: true,
  has_issues: true,
  has_pages: true,
  has_projects: true,
  has_wiki: true,
  homepage: 'example_homepage',
  hooks_url: 'example_hooks_url',
  html_url: 'example_html_url',
  id: 1,
  invitation_teams_url: 'example_invitation_teams_url',
  inviter: {},
  issue_comment_url: 'example_issue_comment_url',
  issue_events_url: 'example_issue_events_url',
  issues_url: 'example_issues_url',
  keys_url: 'example_keys_url',
  labels_url: 'example_labels_url',
  language: 'example_language',
  languages_url: 'example_languages_url',
  last_edited_at: 'example_last_edited_at',
  license: {},
  login: 'example_login',
  members_count: 1,
  members_url: 'example_members_url',
  merges_url: 'example_merges_url',
  milestones_url: 'example_milestones_url',
  mirror_url: 'example_mirror_url',
  name: 'example_name',
  node_id: 'example_node_id',
  notifications_url: 'example_notifications_url',
  number: 1,
  open_issues: 1,
  open_issues_count: 1,
  organization: {},
  organizations_url: 'example_organizations_url',
  owner: {},
  owner_url: 'example_owner_url',
  parent: {},
  permission: 'example_permission',
  permissions: {},
  pinned: true,
  private: true,
  pulls_url: 'example_pulls_url',
  pushed_at: 'example_pushed_at',
  reactions: {},
  received_events_url: 'example_received_events_url',
  releases_url: 'example_releases_url',
  repos_count: 1,
  repos_url: 'example_repos_url',
  repositories_url: 'example_repositories_url',
  role: 'example_role',
  site_admin: true,
  size: 1,
  slug: 'example_slug',
  ssh_url: 'example_ssh_url',
  stargazers_count: 1,
  stargazers_url: 'example_stargazers_url',
  starred_url: 'example_starred_url',
  state: 'example_state',
  statuses_url: 'example_statuses_url',
  subscribers_url: 'example_subscribers_url',
  subscription_url: 'example_subscription_url',
  subscriptions_url: 'example_subscriptions_url',
  svn_url: 'example_svn_url',
  tags_url: 'example_tags_url',
  team_count: 1,
  team_url: 'example_team_url',
  teams_url: 'example_teams_url',
  title: 'example_title',
  trees_url: 'example_trees_url',
  type: 'example_type',
  updated_at: 'example_updated_at',
  url: 'example_url',
  watchers: 1,
  watchers_count: 1,
})
```


### TeamSimple

Create an instance: `const team_simple = client.TeamSimple()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the team |
| `html_url` | `string` |  |
| `id` | `number` | Unique identifier of the team |
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

```ts
const team_simples = await client.TeamSimple().list({ org_id: "example" })
```


### Thread

Create an instance: `const thread = client.Thread()`

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
| `repository` | `Record<string, any>` | Minimal Repository |
| `subject` | `Record<string, any>` |  |
| `subscription_url` | `string` |  |
| `unread` | `boolean` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const thread = await client.Thread().load({ id: 1 })
```

#### Example: List

```ts
const threads = await client.Thread().list()
```


### ThreadSubscription

Create an instance: `const thread_subscription = client.ThreadSubscription()`

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
| `ignored` | `boolean` | Whether to block all notifications from a thread. |
| `reason` | `string` |  |
| `repository_url` | `string` |  |
| `subscribed` | `boolean` |  |
| `thread_url` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const thread_subscription = await client.ThreadSubscription().load({ id: 1 })
```


### Topic

Create an instance: `const topic = client.Topic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `names` | `any[]` | An array of topics to add to the repository. |

#### Example: List

```ts
const topics = await client.Topic().list({ owner: "example", repo: "example" })
```


### User

Create an instance: `const user = client.User()`

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
| `attestations_subject_digests` | `Record<string, any>` | Mapping of subject digest to bundles. |
| `avatar_url` | `string` |  |
| `bio` | `string` | The new short biography of the user. |
| `blog` | `string` | The new blog URL of the user. |
| `collaborators` | `number` |  |
| `company` | `string` | The new company of the user. |
| `created_at` | `string` |  |
| `disk_usage` | `number` |  |
| `email` | `string` | The publicly visible email address of the user. |
| `events_url` | `string` |  |
| `followers` | `number` |  |
| `followers_url` | `string` |  |
| `following` | `number` |  |
| `following_url` | `string` |  |
| `gists_url` | `string` |  |
| `gravatar_id` | `string` |  |
| `hireable` | `boolean` | The new hiring availability of the user. |
| `html_url` | `string` |  |
| `id` | `number` |  |
| `inherited_from` | `any[]` | Team the user has gotten the role through |
| `location` | `string` | The new location of the user. |
| `login` | `string` |  |
| `name` | `string` | The new name of the user. |
| `node_id` | `string` |  |
| `organizations_url` | `string` |  |
| `owned_private_repos` | `number` |  |
| `page_info` | `Record<string, any>` | Information about the current page. |
| `plan` | `Record<string, any>` |  |
| `predicate_type` | `string` | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `number` |  |
| `private_repos` | `number` |  |
| `public_gists` | `number` |  |
| `public_repos` | `number` |  |
| `received_events_url` | `string` |  |
| `repos_url` | `string` |  |
| `site_admin` | `boolean` |  |
| `space` | `number` |  |
| `starred_at` | `string` |  |
| `starred_url` | `string` |  |
| `subject_digests` | `any[]` | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` |  |
| `total_private_repos` | `number` |  |
| `twitter_username` | `string` | The new Twitter username of the user. |
| `two_factor_authentication` | `boolean` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `user_view_type` | `string` |  |
| `users` | `any[]` | The username for users |

#### Example: Load

```ts
const user = await client.User().load({ id: 1 })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  branch_id: 'example_branch_id',
  owner: 'example_owner',
  repo: 'example_repo',
  private_repos: 1,
  space: 1,
  subject_digests: [],
  users: [],
})
```


### UserMarketplacePurchase

Create an instance: `const user_marketplace_purchase = client.UserMarketplacePurchase()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account` | `Record<string, any>` |  |
| `billing_cycle` | `string` |  |
| `free_trial_ends_on` | `string` |  |
| `next_billing_date` | `string` |  |
| `on_free_trial` | `boolean` |  |
| `plan` | `Record<string, any>` | Marketplace Listing Plan |
| `unit_count` | `number` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const user_marketplace_purchases = await client.UserMarketplacePurchase().list()
```


### View

Create an instance: `const view = client.View()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `timestamp` | `string` |  |
| `uniques` | `number` |  |

#### Example: List

```ts
const views = await client.View().list({ owner: "example", repo: "example" })
```


### WebhookConfig

Create an instance: `const webhook_config = client.WebhookConfig()`

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

```ts
const webhook_config = await client.WebhookConfig().load()
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

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
| `id` | `number` |  |
| `name` | `string` |  |
| `node_id` | `string` |  |
| `path` | `string` |  |
| `state` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 'workflow_id', owner: 'owner', repo: 'repo' })
```


### WorkflowRun

Create an instance: `const workflow_run = client.WorkflowRun()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `Record<string, any>` | A GitHub user. |
| `artifacts_url` | `string` | The URL to the artifacts for the workflow run. |
| `cancel_url` | `string` | The URL to cancel the workflow run. |
| `check_suite_id` | `number` | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | The node ID of the associated check suite. |
| `check_suite_url` | `string` | The URL to the associated check suite. |
| `conclusion` | `string` |  |
| `created_at` | `string` |  |
| `display_title` | `string` | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `string` |  |
| `head_branch` | `string` |  |
| `head_commit` | `Record<string, any>` | A commit. |
| `head_repository` | `Record<string, any>` | Minimal Repository |
| `head_repository_id` | `number` |  |
| `head_sha` | `string` | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `string` |  |
| `id` | `number` | The ID of the workflow run. |
| `jobs_url` | `string` | The URL to the jobs for the workflow run. |
| `logs_url` | `string` | The URL to download the logs for the workflow run. |
| `name` | `string` | The name of the workflow run. |
| `node_id` | `string` |  |
| `path` | `string` | The full path of the workflow |
| `previous_attempt_url` | `string` | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `any[]` | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `any[]` |  |
| `repository` | `Record<string, any>` | Minimal Repository |
| `rerun_url` | `string` | The URL to rerun the workflow run. |
| `run_attempt` | `number` | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `number` | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | The start time of the latest run. |
| `status` | `string` |  |
| `triggering_actor` | `Record<string, any>` | A GitHub user. |
| `updated_at` | `string` |  |
| `url` | `string` | The URL to the workflow run. |
| `workflow_id` | `number` | The ID of the parent workflow. |
| `workflow_url` | `string` | The URL to the workflow. |

#### Example: Load

```ts
const workflow_run = await client.WorkflowRun().load({ id: 1, owner: 'owner', repo: 'repo' })
```

#### Example: Create

```ts
const workflow_run = await client.WorkflowRun().create({
  owner: 'example_owner',
  repo: 'example_repo',
  run_id: 1,
  actor: {},
  artifacts_url: 'example_artifacts_url',
  cancel_url: 'example_cancel_url',
  check_suite_url: 'example_check_suite_url',
  conclusion: 'example_conclusion',
  created_at: 'example_created_at',
  display_title: 'example_display_title',
  event: 'example_event',
  head_branch: 'example_head_branch',
  head_commit: {},
  head_repository: {},
  head_sha: 'example_head_sha',
  html_url: 'example_html_url',
  id: 1,
  jobs_url: 'example_jobs_url',
  logs_url: 'example_logs_url',
  node_id: 'example_node_id',
  path: 'example_path',
  pull_requests: [],
  repository: {},
  rerun_url: 'example_rerun_url',
  run_number: 1,
  status: 'example_status',
  triggering_actor: {},
  updated_at: 'example_updated_at',
  url: 'example_url',
  workflow_id: 1,
  workflow_url: 'example_workflow_url',
})
```


### WorkflowRunUsage

Create an instance: `const workflow_run_usage = client.WorkflowRunUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `Record<string, any>` |  |
| `UBUNTU` | `Record<string, any>` |  |
| `WINDOWS` | `Record<string, any>` |  |

#### Example: Load

```ts
const workflow_run_usage = await client.WorkflowRunUsage().load({ owner: 'owner', repo: 'repo', run_id: 1 })
```


### WorkflowUsage

Create an instance: `const workflow_usage = client.WorkflowUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `MACOS` | `Record<string, any>` |  |
| `UBUNTU` | `Record<string, any>` |  |
| `WINDOWS` | `Record<string, any>` |  |
| `id` | `string` |  |

#### Example: Load

```ts
const workflow_usage = await client.WorkflowUsage().load({ id: 'workflow_usage_id', owner: 'owner', repo: 'repo' })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
github/
├── src/
│   ├── GithubSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { GithubSDK } from '@voxgig-sdk/github'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const customproperty = client.CustomProperty()
await customproperty.list()

// customproperty.data() now returns the customproperty data from the last `list`
// customproperty.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
