# Github Lua SDK Reference

Complete API reference for the Github Lua SDK.


## GithubSDK

### Constructor

```lua
local sdk = require("github_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Action(data)`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `ActionsArtifactAndLogRetention(data)`

Create a new `ActionsArtifactAndLogRetention` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheList(data)`

Create a new `ActionsCacheList` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheUsageByRepository(data)`

Create a new `ActionsCacheUsageByRepository` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheUsageOrgEnterprise(data)`

Create a new `ActionsCacheUsageOrgEnterprise` entity instance. Pass `nil` for no initial data.

#### `ActionsForkPrContributorApproval(data)`

Create a new `ActionsForkPrContributorApproval` entity instance. Pass `nil` for no initial data.

#### `ActionsForkPrWorkflowsPrivateRepo(data)`

Create a new `ActionsForkPrWorkflowsPrivateRepo` entity instance. Pass `nil` for no initial data.

#### `ActionsGetDefaultWorkflowPermission(data)`

Create a new `ActionsGetDefaultWorkflowPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsHostedRunner(data)`

Create a new `ActionsHostedRunner` entity instance. Pass `nil` for no initial data.

#### `ActionsHostedRunnerLimit(data)`

Create a new `ActionsHostedRunnerLimit` entity instance. Pass `nil` for no initial data.

#### `ActionsOrganizationPermission(data)`

Create a new `ActionsOrganizationPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsPublicKey(data)`

Create a new `ActionsPublicKey` entity instance. Pass `nil` for no initial data.

#### `ActionsRepositoryPermission(data)`

Create a new `ActionsRepositoryPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsSecret(data)`

Create a new `ActionsSecret` entity instance. Pass `nil` for no initial data.

#### `ActionsVariable(data)`

Create a new `ActionsVariable` entity instance. Pass `nil` for no initial data.

#### `ActionsWorkflowAccessToRepository(data)`

Create a new `ActionsWorkflowAccessToRepository` entity instance. Pass `nil` for no initial data.

#### `Activity(data)`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Add(data)`

Create a new `Add` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsRouteStat(data)`

Create a new `ApiInsightsRouteStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsSubjectStat(data)`

Create a new `ApiInsightsSubjectStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsSummaryStat(data)`

Create a new `ApiInsightsSummaryStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsTimeStat(data)`

Create a new `ApiInsightsTimeStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsUserStat(data)`

Create a new `ApiInsightsUserStat` entity instance. Pass `nil` for no initial data.

#### `ApiOverview(data)`

Create a new `ApiOverview` entity instance. Pass `nil` for no initial data.

#### `App(data)`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Artifact(data)`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `Assignee(data)`

Create a new `Assignee` entity instance. Pass `nil` for no initial data.

#### `AuthenticationToken(data)`

Create a new `AuthenticationToken` entity instance. Pass `nil` for no initial data.

#### `Authorization(data)`

Create a new `Authorization` entity instance. Pass `nil` for no initial data.

#### `Autolink(data)`

Create a new `Autolink` entity instance. Pass `nil` for no initial data.

#### `BaseGist(data)`

Create a new `BaseGist` entity instance. Pass `nil` for no initial data.

#### `BillingUsageReport(data)`

Create a new `BillingUsageReport` entity instance. Pass `nil` for no initial data.

#### `BillingUsageReportUser(data)`

Create a new `BillingUsageReportUser` entity instance. Pass `nil` for no initial data.

#### `Blob(data)`

Create a new `Blob` entity instance. Pass `nil` for no initial data.

#### `Block(data)`

Create a new `Block` entity instance. Pass `nil` for no initial data.

#### `Branch(data)`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `BranchProtection(data)`

Create a new `BranchProtection` entity instance. Pass `nil` for no initial data.

#### `BranchRestrictionPolicy(data)`

Create a new `BranchRestrictionPolicy` entity instance. Pass `nil` for no initial data.

#### `BranchShort(data)`

Create a new `BranchShort` entity instance. Pass `nil` for no initial data.

#### `BranchWithProtection(data)`

Create a new `BranchWithProtection` entity instance. Pass `nil` for no initial data.

#### `Campaign(data)`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Check(data)`

Create a new `Check` entity instance. Pass `nil` for no initial data.

#### `CheckAnnotation(data)`

Create a new `CheckAnnotation` entity instance. Pass `nil` for no initial data.

#### `CheckAutomatedSecurityFix(data)`

Create a new `CheckAutomatedSecurityFix` entity instance. Pass `nil` for no initial data.

#### `CheckRun(data)`

Create a new `CheckRun` entity instance. Pass `nil` for no initial data.

#### `CheckSuite(data)`

Create a new `CheckSuite` entity instance. Pass `nil` for no initial data.

#### `CheckSuitePreference(data)`

Create a new `CheckSuitePreference` entity instance. Pass `nil` for no initial data.

#### `Classroom(data)`

Create a new `Classroom` entity instance. Pass `nil` for no initial data.

#### `ClassroomAcceptedAssignment(data)`

Create a new `ClassroomAcceptedAssignment` entity instance. Pass `nil` for no initial data.

#### `ClassroomAssignment(data)`

Create a new `ClassroomAssignment` entity instance. Pass `nil` for no initial data.

#### `ClassroomAssignmentGrade(data)`

Create a new `ClassroomAssignmentGrade` entity instance. Pass `nil` for no initial data.

#### `Clone(data)`

Create a new `Clone` entity instance. Pass `nil` for no initial data.

#### `CodeFrequency(data)`

Create a new `CodeFrequency` entity instance. Pass `nil` for no initial data.

#### `CodeFrequencyStat(data)`

Create a new `CodeFrequencyStat` entity instance. Pass `nil` for no initial data.

#### `CodeOfConduct(data)`

Create a new `CodeOfConduct` entity instance. Pass `nil` for no initial data.

#### `CodeScanning(data)`

Create a new `CodeScanning` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlert(data)`

Create a new `CodeScanningAlert` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlertInstance(data)`

Create a new `CodeScanningAlertInstance` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlertItem(data)`

Create a new `CodeScanningAlertItem` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAnalysi(data)`

Create a new `CodeScanningAnalysi` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAnalysisDeletion(data)`

Create a new `CodeScanningAnalysisDeletion` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAutofix(data)`

Create a new `CodeScanningAutofix` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAutofixCommit(data)`

Create a new `CodeScanningAutofixCommit` entity instance. Pass `nil` for no initial data.

#### `CodeScanningCodeqlDatabase(data)`

Create a new `CodeScanningCodeqlDatabase` entity instance. Pass `nil` for no initial data.

#### `CodeScanningDefaultSetup(data)`

Create a new `CodeScanningDefaultSetup` entity instance. Pass `nil` for no initial data.

#### `CodeScanningOrganizationAlertItem(data)`

Create a new `CodeScanningOrganizationAlertItem` entity instance. Pass `nil` for no initial data.

#### `CodeScanningSarifsStatus(data)`

Create a new `CodeScanningSarifsStatus` entity instance. Pass `nil` for no initial data.

#### `CodeScanningVariantAnalysi(data)`

Create a new `CodeScanningVariantAnalysi` entity instance. Pass `nil` for no initial data.

#### `CodeScanningVariantAnalysisRepoTask(data)`

Create a new `CodeScanningVariantAnalysisRepoTask` entity instance. Pass `nil` for no initial data.

#### `CodeSecurity(data)`

Create a new `CodeSecurity` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityConfiguration(data)`

Create a new `CodeSecurityConfiguration` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityConfigurationRepository(data)`

Create a new `CodeSecurityConfigurationRepository` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityDefaultConfiguration(data)`

Create a new `CodeSecurityDefaultConfiguration` entity instance. Pass `nil` for no initial data.

#### `CodeownersError(data)`

Create a new `CodeownersError` entity instance. Pass `nil` for no initial data.

#### `Codespace(data)`

Create a new `Codespace` entity instance. Pass `nil` for no initial data.

#### `Collaborator(data)`

Create a new `Collaborator` entity instance. Pass `nil` for no initial data.

#### `CombinedBillingUsage(data)`

Create a new `CombinedBillingUsage` entity instance. Pass `nil` for no initial data.

#### `CombinedCommitStatus(data)`

Create a new `CombinedCommitStatus` entity instance. Pass `nil` for no initial data.

#### `Commit(data)`

Create a new `Commit` entity instance. Pass `nil` for no initial data.

#### `CommitActivity(data)`

Create a new `CommitActivity` entity instance. Pass `nil` for no initial data.

#### `CommitComment(data)`

Create a new `CommitComment` entity instance. Pass `nil` for no initial data.

#### `CommitComparison(data)`

Create a new `CommitComparison` entity instance. Pass `nil` for no initial data.

#### `CommunityProfile(data)`

Create a new `CommunityProfile` entity instance. Pass `nil` for no initial data.

#### `ContentFile(data)`

Create a new `ContentFile` entity instance. Pass `nil` for no initial data.

#### `ContentTraffic(data)`

Create a new `ContentTraffic` entity instance. Pass `nil` for no initial data.

#### `Contributor(data)`

Create a new `Contributor` entity instance. Pass `nil` for no initial data.

#### `Copilot(data)`

Create a new `Copilot` entity instance. Pass `nil` for no initial data.

#### `CopilotOrganizationDetail(data)`

Create a new `CopilotOrganizationDetail` entity instance. Pass `nil` for no initial data.

#### `CopilotUsageMetricsDay(data)`

Create a new `CopilotUsageMetricsDay` entity instance. Pass `nil` for no initial data.

#### `Credential(data)`

Create a new `Credential` entity instance. Pass `nil` for no initial data.

#### `CustomProperty(data)`

Create a new `CustomProperty` entity instance. Pass `nil` for no initial data.

#### `CustomPropertyValue(data)`

Create a new `CustomPropertyValue` entity instance. Pass `nil` for no initial data.

#### `Dependabot(data)`

Create a new `Dependabot` entity instance. Pass `nil` for no initial data.

#### `DependabotAlert(data)`

Create a new `DependabotAlert` entity instance. Pass `nil` for no initial data.

#### `DependabotAlertWithRepository(data)`

Create a new `DependabotAlertWithRepository` entity instance. Pass `nil` for no initial data.

#### `DependabotPublicKey(data)`

Create a new `DependabotPublicKey` entity instance. Pass `nil` for no initial data.

#### `DependabotRepositoryAccessDetail(data)`

Create a new `DependabotRepositoryAccessDetail` entity instance. Pass `nil` for no initial data.

#### `DependabotSecret(data)`

Create a new `DependabotSecret` entity instance. Pass `nil` for no initial data.

#### `DependencyGraph(data)`

Create a new `DependencyGraph` entity instance. Pass `nil` for no initial data.

#### `DependencyGraphDiff(data)`

Create a new `DependencyGraphDiff` entity instance. Pass `nil` for no initial data.

#### `DependencyGraphSpdxSbom(data)`

Create a new `DependencyGraphSpdxSbom` entity instance. Pass `nil` for no initial data.

#### `DeployKey(data)`

Create a new `DeployKey` entity instance. Pass `nil` for no initial data.

#### `Deployment(data)`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `DeploymentBranchPolicy(data)`

Create a new `DeploymentBranchPolicy` entity instance. Pass `nil` for no initial data.

#### `DeploymentProtectionRule(data)`

Create a new `DeploymentProtectionRule` entity instance. Pass `nil` for no initial data.

#### `DeploymentStatus(data)`

Create a new `DeploymentStatus` entity instance. Pass `nil` for no initial data.

#### `DiffEntry(data)`

Create a new `DiffEntry` entity instance. Pass `nil` for no initial data.

#### `Email(data)`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Emoji(data)`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `EmptyObject(data)`

Create a new `EmptyObject` entity instance. Pass `nil` for no initial data.

#### `EnterpriseTeam(data)`

Create a new `EnterpriseTeam` entity instance. Pass `nil` for no initial data.

#### `EnterpriseTeamMembership(data)`

Create a new `EnterpriseTeamMembership` entity instance. Pass `nil` for no initial data.

#### `Environment(data)`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `EnvironmentApproval(data)`

Create a new `EnvironmentApproval` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Feed(data)`

Create a new `Feed` entity instance. Pass `nil` for no initial data.

#### `FileCommit(data)`

Create a new `FileCommit` entity instance. Pass `nil` for no initial data.

#### `Follower(data)`

Create a new `Follower` entity instance. Pass `nil` for no initial data.

#### `Following(data)`

Create a new `Following` entity instance. Pass `nil` for no initial data.

#### `FullRepository(data)`

Create a new `FullRepository` entity instance. Pass `nil` for no initial data.

#### `Gist(data)`

Create a new `Gist` entity instance. Pass `nil` for no initial data.

#### `GistComment(data)`

Create a new `GistComment` entity instance. Pass `nil` for no initial data.

#### `GistCommit(data)`

Create a new `GistCommit` entity instance. Pass `nil` for no initial data.

#### `GistSimple(data)`

Create a new `GistSimple` entity instance. Pass `nil` for no initial data.

#### `Git(data)`

Create a new `Git` entity instance. Pass `nil` for no initial data.

#### `GitCommit(data)`

Create a new `GitCommit` entity instance. Pass `nil` for no initial data.

#### `GitRef(data)`

Create a new `GitRef` entity instance. Pass `nil` for no initial data.

#### `GitTag(data)`

Create a new `GitTag` entity instance. Pass `nil` for no initial data.

#### `GitTree(data)`

Create a new `GitTree` entity instance. Pass `nil` for no initial data.

#### `Gitignore(data)`

Create a new `Gitignore` entity instance. Pass `nil` for no initial data.

#### `GitignoreTemplate(data)`

Create a new `GitignoreTemplate` entity instance. Pass `nil` for no initial data.

#### `GlobalAdvisory(data)`

Create a new `GlobalAdvisory` entity instance. Pass `nil` for no initial data.

#### `GpgKey(data)`

Create a new `GpgKey` entity instance. Pass `nil` for no initial data.

#### `Hook(data)`

Create a new `Hook` entity instance. Pass `nil` for no initial data.

#### `HookDelivery(data)`

Create a new `HookDelivery` entity instance. Pass `nil` for no initial data.

#### `HookDeliveryItem(data)`

Create a new `HookDeliveryItem` entity instance. Pass `nil` for no initial data.

#### `HostedCompute(data)`

Create a new `HostedCompute` entity instance. Pass `nil` for no initial data.

#### `Hovercard(data)`

Create a new `Hovercard` entity instance. Pass `nil` for no initial data.

#### `Import(data)`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `Installation(data)`

Create a new `Installation` entity instance. Pass `nil` for no initial data.

#### `InstallationToken(data)`

Create a new `InstallationToken` entity instance. Pass `nil` for no initial data.

#### `Integration(data)`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationInstallation(data)`

Create a new `IntegrationInstallation` entity instance. Pass `nil` for no initial data.

#### `Interaction(data)`

Create a new `Interaction` entity instance. Pass `nil` for no initial data.

#### `InteractionLimit(data)`

Create a new `InteractionLimit` entity instance. Pass `nil` for no initial data.

#### `Issue(data)`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `IssueType(data)`

Create a new `IssueType` entity instance. Pass `nil` for no initial data.

#### `Job(data)`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `Key(data)`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `Label(data)`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `Language(data)`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `License(data)`

Create a new `License` entity instance. Pass `nil` for no initial data.

#### `Markdown(data)`

Create a new `Markdown` entity instance. Pass `nil` for no initial data.

#### `MarketplaceListingPlan(data)`

Create a new `MarketplaceListingPlan` entity instance. Pass `nil` for no initial data.

#### `MarketplacePurchase(data)`

Create a new `MarketplacePurchase` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Membership(data)`

Create a new `Membership` entity instance. Pass `nil` for no initial data.

#### `MergedUpstream(data)`

Create a new `MergedUpstream` entity instance. Pass `nil` for no initial data.

#### `Meta(data)`

Create a new `Meta` entity instance. Pass `nil` for no initial data.

#### `Metaroot(data)`

Create a new `Metaroot` entity instance. Pass `nil` for no initial data.

#### `Migration(data)`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Milestone(data)`

Create a new `Milestone` entity instance. Pass `nil` for no initial data.

#### `MinimalRepository(data)`

Create a new `MinimalRepository` entity instance. Pass `nil` for no initial data.

#### `NetworkConfiguration(data)`

Create a new `NetworkConfiguration` entity instance. Pass `nil` for no initial data.

#### `NetworkSetting(data)`

Create a new `NetworkSetting` entity instance. Pass `nil` for no initial data.

#### `OidcCustomSub(data)`

Create a new `OidcCustomSub` entity instance. Pass `nil` for no initial data.

#### `OidcCustomSubRepo(data)`

Create a new `OidcCustomSubRepo` entity instance. Pass `nil` for no initial data.

#### `Org(data)`

Create a new `Org` entity instance. Pass `nil` for no initial data.

#### `OrgHook(data)`

Create a new `OrgHook` entity instance. Pass `nil` for no initial data.

#### `OrgMembership(data)`

Create a new `OrgMembership` entity instance. Pass `nil` for no initial data.

#### `OrgPrivateRegistryConfiguration(data)`

Create a new `OrgPrivateRegistryConfiguration` entity instance. Pass `nil` for no initial data.

#### `OrgPrivateRegistryConfigurationWithSelectedRepository(data)`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepository` entity instance. Pass `nil` for no initial data.

#### `OrgRepoCustomPropertyValue(data)`

Create a new `OrgRepoCustomPropertyValue` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationActionsSecret(data)`

Create a new `OrganizationActionsSecret` entity instance. Pass `nil` for no initial data.

#### `OrganizationActionsVariable(data)`

Create a new `OrganizationActionsVariable` entity instance. Pass `nil` for no initial data.

#### `OrganizationDependabotSecret(data)`

Create a new `OrganizationDependabotSecret` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvitation(data)`

Create a new `OrganizationInvitation` entity instance. Pass `nil` for no initial data.

#### `OrganizationProgrammaticAccessGrant(data)`

Create a new `OrganizationProgrammaticAccessGrant` entity instance. Pass `nil` for no initial data.

#### `OrganizationRole(data)`

Create a new `OrganizationRole` entity instance. Pass `nil` for no initial data.

#### `OrganizationSecretScanningAlert(data)`

Create a new `OrganizationSecretScanningAlert` entity instance. Pass `nil` for no initial data.

#### `OutsideCollaborator(data)`

Create a new `OutsideCollaborator` entity instance. Pass `nil` for no initial data.

#### `Package(data)`

Create a new `Package` entity instance. Pass `nil` for no initial data.

#### `Page(data)`

Create a new `Page` entity instance. Pass `nil` for no initial data.

#### `PageBuild(data)`

Create a new `PageBuild` entity instance. Pass `nil` for no initial data.

#### `PageBuildStatus(data)`

Create a new `PageBuildStatus` entity instance. Pass `nil` for no initial data.

#### `PageDeployment(data)`

Create a new `PageDeployment` entity instance. Pass `nil` for no initial data.

#### `PagesDeploymentStatus(data)`

Create a new `PagesDeploymentStatus` entity instance. Pass `nil` for no initial data.

#### `PagesHealthCheck(data)`

Create a new `PagesHealthCheck` entity instance. Pass `nil` for no initial data.

#### `Participation(data)`

Create a new `Participation` entity instance. Pass `nil` for no initial data.

#### `PendingDeployment(data)`

Create a new `PendingDeployment` entity instance. Pass `nil` for no initial data.

#### `PorterAuthor(data)`

Create a new `PorterAuthor` entity instance. Pass `nil` for no initial data.

#### `PorterLargeFile(data)`

Create a new `PorterLargeFile` entity instance. Pass `nil` for no initial data.

#### `PrivateRegistry(data)`

Create a new `PrivateRegistry` entity instance. Pass `nil` for no initial data.

#### `PrivateUser(data)`

Create a new `PrivateUser` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectCollaboratorPermission(data)`

Create a new `ProjectCollaboratorPermission` entity instance. Pass `nil` for no initial data.

#### `ProjectColumn(data)`

Create a new `ProjectColumn` entity instance. Pass `nil` for no initial data.

#### `ProjectsClassic(data)`

Create a new `ProjectsClassic` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2(data)`

Create a new `ProjectsV2` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2Field(data)`

Create a new `ProjectsV2Field` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2ItemSimple(data)`

Create a new `ProjectsV2ItemSimple` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2ItemWithContent(data)`

Create a new `ProjectsV2ItemWithContent` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranch(data)`

Create a new `ProtectedBranch` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranchAdminEnforced(data)`

Create a new `ProtectedBranchAdminEnforced` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranchPullRequestReview(data)`

Create a new `ProtectedBranchPullRequestReview` entity instance. Pass `nil` for no initial data.

#### `PublicMember(data)`

Create a new `PublicMember` entity instance. Pass `nil` for no initial data.

#### `Pull(data)`

Create a new `Pull` entity instance. Pass `nil` for no initial data.

#### `PullRequestReview(data)`

Create a new `PullRequestReview` entity instance. Pass `nil` for no initial data.

#### `PullRequestReviewComment(data)`

Create a new `PullRequestReviewComment` entity instance. Pass `nil` for no initial data.

#### `PullRequestSimple(data)`

Create a new `PullRequestSimple` entity instance. Pass `nil` for no initial data.

#### `RateLimit(data)`

Create a new `RateLimit` entity instance. Pass `nil` for no initial data.

#### `Reaction(data)`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Referrer(data)`

Create a new `Referrer` entity instance. Pass `nil` for no initial data.

#### `Release(data)`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseAsset(data)`

Create a new `ReleaseAsset` entity instance. Pass `nil` for no initial data.

#### `ReleaseNotesContent(data)`

Create a new `ReleaseNotesContent` entity instance. Pass `nil` for no initial data.

#### `Remove(data)`

Create a new `Remove` entity instance. Pass `nil` for no initial data.

#### `Repo(data)`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `Repository(data)`

Create a new `Repository` entity instance. Pass `nil` for no initial data.

#### `RepositoryAdvisory(data)`

Create a new `RepositoryAdvisory` entity instance. Pass `nil` for no initial data.

#### `RepositoryCollaboratorPermission(data)`

Create a new `RepositoryCollaboratorPermission` entity instance. Pass `nil` for no initial data.

#### `RepositoryInvitation(data)`

Create a new `RepositoryInvitation` entity instance. Pass `nil` for no initial data.

#### `RepositoryRuleDetailed(data)`

Create a new `RepositoryRuleDetailed` entity instance. Pass `nil` for no initial data.

#### `RepositoryRuleset(data)`

Create a new `RepositoryRuleset` entity instance. Pass `nil` for no initial data.

#### `RepositorySubscription(data)`

Create a new `RepositorySubscription` entity instance. Pass `nil` for no initial data.

#### `ReviewComment(data)`

Create a new `ReviewComment` entity instance. Pass `nil` for no initial data.

#### `RuleSuite(data)`

Create a new `RuleSuite` entity instance. Pass `nil` for no initial data.

#### `RulesetVersion(data)`

Create a new `RulesetVersion` entity instance. Pass `nil` for no initial data.

#### `RulesetVersionWithState(data)`

Create a new `RulesetVersionWithState` entity instance. Pass `nil` for no initial data.

#### `Runner(data)`

Create a new `Runner` entity instance. Pass `nil` for no initial data.

#### `RunnerApplication(data)`

Create a new `RunnerApplication` entity instance. Pass `nil` for no initial data.

#### `RunnerGroup(data)`

Create a new `RunnerGroup` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `SecretScanning(data)`

Create a new `SecretScanning` entity instance. Pass `nil` for no initial data.

#### `SecretScanningAlert(data)`

Create a new `SecretScanningAlert` entity instance. Pass `nil` for no initial data.

#### `SecretScanningLocation(data)`

Create a new `SecretScanningLocation` entity instance. Pass `nil` for no initial data.

#### `SecretScanningPatternConfiguration(data)`

Create a new `SecretScanningPatternConfiguration` entity instance. Pass `nil` for no initial data.

#### `SecretScanningPushProtectionBypass(data)`

Create a new `SecretScanningPushProtectionBypass` entity instance. Pass `nil` for no initial data.

#### `SecretScanningScanHistory(data)`

Create a new `SecretScanningScanHistory` entity instance. Pass `nil` for no initial data.

#### `SecurityAdvisory(data)`

Create a new `SecurityAdvisory` entity instance. Pass `nil` for no initial data.

#### `SelectedAction(data)`

Create a new `SelectedAction` entity instance. Pass `nil` for no initial data.

#### `SelfHostedRunner(data)`

Create a new `SelfHostedRunner` entity instance. Pass `nil` for no initial data.

#### `ShortBlob(data)`

Create a new `ShortBlob` entity instance. Pass `nil` for no initial data.

#### `ShortBranch(data)`

Create a new `ShortBranch` entity instance. Pass `nil` for no initial data.

#### `SimpleClassroom(data)`

Create a new `SimpleClassroom` entity instance. Pass `nil` for no initial data.

#### `SimpleClassroomAssignment(data)`

Create a new `SimpleClassroomAssignment` entity instance. Pass `nil` for no initial data.

#### `SocialAccount(data)`

Create a new `SocialAccount` entity instance. Pass `nil` for no initial data.

#### `SshSigningKey(data)`

Create a new `SshSigningKey` entity instance. Pass `nil` for no initial data.

#### `Status(data)`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `StatusCheckPolicy(data)`

Create a new `StatusCheckPolicy` entity instance. Pass `nil` for no initial data.

#### `Subscriber(data)`

Create a new `Subscriber` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TagProtection(data)`

Create a new `TagProtection` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamSimple(data)`

Create a new `TeamSimple` entity instance. Pass `nil` for no initial data.

#### `Thread(data)`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `ThreadSubscription(data)`

Create a new `ThreadSubscription` entity instance. Pass `nil` for no initial data.

#### `Topic(data)`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserMarketplacePurchase(data)`

Create a new `UserMarketplacePurchase` entity instance. Pass `nil` for no initial data.

#### `View(data)`

Create a new `View` entity instance. Pass `nil` for no initial data.

#### `WebhookConfig(data)`

Create a new `WebhookConfig` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowRun(data)`

Create a new `WorkflowRun` entity instance. Pass `nil` for no initial data.

#### `WorkflowRunUsage(data)`

Create a new `WorkflowRunUsage` entity instance. Pass `nil` for no initial data.

#### `WorkflowUsage(data)`

Create a new `WorkflowUsage` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActionEntity

```lua
local action = client:Action(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `number` | No | Total minutes used on macOS runner machines. |
| `UBUNTU` | `number` | No | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `number` | No | Total minutes used on Windows runner machines. |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `number` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `number` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `table` | Yes | A GitHub user. |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `boolean` | Yes |  |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `string` | Yes |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | No | Whether the repository is archived. |
| `artifacts_url` | `string` | Yes | The URL to the artifacts for the workflow run. |
| `assignees_url` | `string` | Yes |  |
| `badge_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `busy` | `boolean` | Yes |  |
| `can_approve_pull_request_reviews` | `boolean` | No | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `string` | Yes | The URL to cancel the workflow run. |
| `check_run_url` | `string` | Yes |  |
| `check_suite_id` | `number` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | No | The node ID of the associated check suite. |
| `check_suite_url` | `string` | Yes | The URL to the associated check suite. |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `code_search_index_status` | `table` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | Yes | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | Yes | The outcome of the job. |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpu_cores` | `number` | Yes | The number of cores. |
| `created_at` | `string` | Yes | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `days` | `number` | Yes | The number of days to retain artifacts and logs |
| `default` | `boolean` | Yes |  |
| `default_branch` | `string` | No | The default branch of the repository. |
| `default_workflow_permissions` | `string` | No | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `string` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `digest` | `string` | No | The SHA256 digest of the artifact. |
| `disabled` | `boolean` | No | Returns whether or not this repository disabled. |
| `display_name` | `string` | Yes | Display name for this image. |
| `display_title` | `string` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `string` | Yes |  |
| `enabled` | `boolean` | Yes | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `string` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `boolean` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `expired` | `boolean` | Yes | Whether or not the artifact has expired. |
| `expires_at` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | No |  |
| `forks_count` | `number` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `github_owned_allowed` | `boolean` | No | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `boolean` | No | Whether discussions are enabled. |
| `has_downloads` | `boolean` | No | Whether downloads are enabled. |
| `has_issues` | `boolean` | No | Whether issues are enabled. |
| `has_pages` | `boolean` | No |  |
| `has_projects` | `boolean` | No | Whether projects are enabled. |
| `has_wiki` | `boolean` | No | Whether the wiki is enabled. |
| `head_branch` | `string` | Yes | The name of the current branch. |
| `head_commit` | `table` | Yes | A commit. |
| `head_repository` | `table` | Yes | Minimal Repository |
| `head_repository_id` | `number` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the workflow run. |
| `image_details` | `table` | Yes | Provides details of a hosted runner image |
| `inherited` | `boolean` | Yes |  |
| `inherited_allows_public_repositories` | `boolean` | No |  |
| `inputs` | `table` | No | Input keys and values configured in the workflow file. |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `keys_url` | `string` | Yes |  |
| `labels` | `table` | Yes | The names of the custom labels to add to the runner. |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `table` | No | License Simple |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `machine_size_details` | `table` | Yes | Provides details of a particular machine spec. |
| `macos_12_core` | `number` | No | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `string` | No |  |
| `maximum_runners` | `number` | No | The maximum amount of hosted runners. |
| `memory_gb` | `number` | Yes | The available RAM for the machine spec. |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes | The name of the new runner. |
| `network_configuration_id` | `string` | No | The identifier of a hosted compute network configuration. |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `os` | `string` | Yes | The Operating System of the runner. |
| `owner` | `table` | Yes | A GitHub user. |
| `path` | `string` | Yes | The full path of the workflow |
| `patterns_allowed` | `table` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `table` | No |  |
| `platform` | `string` | Yes | The operating system of the image. |
| `platforms` | `table` | Yes |  |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `public_ip_enabled` | `boolean` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `table` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `table` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | Yes | The git reference for the workflow. |
| `referenced_workflows` | `table` | No |  |
| `releases_url` | `string` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `boolean` | No | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `boolean` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `string` | No |  |
| `run_attempt` | `number` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `number` | Yes | The id of the associated workflow run. |
| `run_number` | `number` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `run_url` | `string` | Yes |  |
| `run_workflows_from_fork_pull_requests` | `boolean` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `number` | Yes | The ID of the runner group to register the runner to. |
| `runner_group_name` | `string` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `number` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | Yes | The name of the runner to which this job has been assigned. |
| `runners` | `table` | Yes | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `security_and_analysis` | `table` | No |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `table` | Yes | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `table` | No | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `boolean` | No | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `boolean` | No | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `boolean` | No | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `size_gb` | `number` | Yes | Image size in GB. |
| `size_in_bytes` | `number` | Yes | The size in bytes of the artifact. |
| `source` | `string` | Yes | The image provider. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `number` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `started_at` | `string` | Yes | The time that the job started, in ISO 8601 format. |
| `state` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `string` | Yes |  |
| `steps` | `table` | No | Steps in this job. |
| `storage_gb` | `number` | Yes | The available SSD storage for the machine spec. |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `total` | `number` | No | Total minutes used on all runner machines. |
| `total_count` | `number` | Yes |  |
| `trees_url` | `string` | Yes |  |
| `triggering_actor` | `table` | Yes | A GitHub user. |
| `type` | `string` | No | The type of label. |
| `ubuntu_16_core` | `number` | No | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `number` | No | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `number` | No | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `number` | No | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `number` | No | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `string` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | Yes | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `boolean` | No | Whether a squash merge commit can use the pull request title as default. |
| `value` | `string` | No | The value of the variable. |
| `verified_allowed` | `boolean` | No | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `string` | No | The type of repositories in the organization that can access the variable. |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `number` | No | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `number` | No | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `number` | No | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `number` | No | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `number` | No | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `string` | No | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `number` | Yes | The ID of the parent workflow. |
| `workflow_name` | `string` | Yes | The name of the workflow. |
| `workflow_restrictions_read_only` | `boolean` | No | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `table` | No |  |
| `workflow_url` | `string` | Yes | The URL to the workflow. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `MACOS` | - | - | - | - | - |
| `UBUNTU` | - | - | - | - | - |
| `WINDOWS` | - | - | - | - | - |
| `access_level` | - | - | - | - | - |
| `active_caches_count` | - | - | - | - | - |
| `active_caches_size_in_bytes` | - | - | - | - | - |
| `actor` | - | - | - | - | - |
| `allow_auto_merge` | - | - | - | - | - |
| `allow_forking` | - | - | - | - | - |
| `allow_merge_commit` | - | - | - | - | - |
| `allow_rebase_merge` | - | - | - | - | - |
| `allow_squash_merge` | - | - | - | - | - |
| `allow_update_branch` | - | - | - | - | - |
| `allowed_actions` | - | - | - | - | - |
| `allows_public_repositories` | - | - | - | - | - |
| `anonymous_access_enabled` | - | - | - | - | - |
| `approval_policy` | - | - | - | - | - |
| `archive_download_url` | - | - | - | - | - |
| `archive_url` | - | - | - | - | - |
| `archived` | - | Yes | - | - | - |
| `artifacts_url` | - | - | - | - | - |
| `assignees_url` | - | - | - | - | - |
| `badge_url` | - | - | - | - | - |
| `blobs_url` | - | - | - | - | - |
| `branches_url` | - | - | - | - | - |
| `busy` | - | - | - | - | - |
| `can_approve_pull_request_reviews` | - | - | - | - | - |
| `cancel_url` | - | - | - | - | - |
| `check_run_url` | - | - | - | - | - |
| `check_suite_id` | - | - | - | - | - |
| `check_suite_node_id` | - | - | - | - | - |
| `check_suite_url` | - | - | - | - | - |
| `clone_url` | - | Yes | - | - | - |
| `code_of_conduct` | - | - | - | - | - |
| `code_search_index_status` | - | - | - | - | - |
| `collaborators_url` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `compare_url` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `conclusion` | - | - | - | - | - |
| `contents_url` | - | - | - | - | - |
| `contributors_url` | - | - | - | - | - |
| `cpu_cores` | - | - | - | - | - |
| `created_at` | - | Yes | - | - | - |
| `custom_properties` | - | - | - | - | - |
| `days` | - | - | - | - | - |
| `default` | - | - | - | - | - |
| `default_branch` | - | Yes | - | - | - |
| `default_workflow_permissions` | - | - | - | - | - |
| `delete_branch_on_merge` | - | - | - | - | - |
| `deleted_at` | - | - | - | - | - |
| `deployments_url` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `digest` | - | - | - | - | - |
| `disabled` | - | Yes | - | - | - |
| `display_name` | - | - | - | - | - |
| `display_title` | - | - | - | - | - |
| `downloads_url` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `enabled_repositories` | - | - | - | - | - |
| `ephemeral` | - | - | - | - | - |
| `event` | - | - | - | - | - |
| `events_url` | - | - | - | - | - |
| `expired` | - | - | - | - | - |
| `expires_at` | - | - | - | - | - |
| `fork` | - | - | - | - | - |
| `forks` | - | Yes | - | - | - |
| `forks_count` | - | Yes | - | - | - |
| `forks_url` | - | - | - | - | - |
| `full_name` | - | - | - | - | - |
| `git_commits_url` | - | - | - | - | - |
| `git_refs_url` | - | - | - | - | - |
| `git_tags_url` | - | - | - | - | - |
| `git_url` | - | Yes | - | - | - |
| `github_owned_allowed` | - | - | - | - | - |
| `has_discussions` | - | - | - | - | - |
| `has_downloads` | - | Yes | - | - | - |
| `has_issues` | - | Yes | - | - | - |
| `has_pages` | - | Yes | - | - | - |
| `has_projects` | - | Yes | - | - | - |
| `has_wiki` | - | Yes | - | - | - |
| `head_branch` | - | - | - | - | - |
| `head_commit` | - | - | - | - | - |
| `head_repository` | - | - | - | - | - |
| `head_repository_id` | - | - | - | - | - |
| `head_sha` | - | - | - | - | - |
| `homepage` | - | Yes | - | - | - |
| `hooks_url` | - | - | - | - | - |
| `hosted_runners_url` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | Yes | - | - | - |
| `image_details` | - | - | - | - | - |
| `inherited` | - | - | - | - | - |
| `inherited_allows_public_repositories` | - | - | - | - | - |
| `inputs` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `issue_comment_url` | - | - | - | - | - |
| `issue_events_url` | - | - | - | - | - |
| `issues_url` | - | - | - | - | - |
| `jobs_url` | - | - | - | - | - |
| `keys_url` | - | - | - | - | - |
| `labels` | - | - | - | - | - |
| `labels_url` | - | - | - | - | - |
| `language` | - | Yes | - | - | - |
| `languages_url` | - | - | - | - | - |
| `last_active_on` | - | - | - | - | - |
| `license` | - | Yes | - | - | - |
| `logs_url` | - | - | - | - | - |
| `machine_size_details` | - | - | - | - | - |
| `macos_12_core` | - | - | - | - | - |
| `master_branch` | - | - | - | - | - |
| `maximum_runners` | - | - | - | - | - |
| `memory_gb` | - | - | - | - | - |
| `merge_commit_message` | - | - | - | - | - |
| `merge_commit_title` | - | - | - | - | - |
| `merges_url` | - | - | - | - | - |
| `milestones_url` | - | - | - | - | - |
| `mirror_url` | - | Yes | - | - | - |
| `name` | - | Yes | - | - | - |
| `network_configuration_id` | - | - | - | - | - |
| `network_count` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `notifications_url` | - | - | - | - | - |
| `open_issues` | - | Yes | - | - | - |
| `open_issues_count` | - | Yes | - | - | - |
| `os` | - | - | - | - | - |
| `owner` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `patterns_allowed` | - | - | - | - | - |
| `permissions` | - | Yes | - | - | - |
| `platform` | - | - | - | - | - |
| `platforms` | - | - | - | - | - |
| `previous_attempt_url` | - | - | - | - | - |
| `private` | - | - | - | - | - |
| `public_ip_enabled` | - | - | - | - | - |
| `public_ips` | - | - | - | - | - |
| `pull_requests` | - | - | - | - | - |
| `pulls_url` | - | - | - | - | - |
| `pushed_at` | - | Yes | - | - | - |
| `ref` | - | - | - | - | - |
| `referenced_workflows` | - | - | - | - | - |
| `releases_url` | - | - | - | - | - |
| `repository` | - | - | - | - | - |
| `require_approval_for_fork_pr_workflows` | - | - | - | - | - |
| `rerun_url` | - | - | - | - | - |
| `restricted_to_workflows` | - | - | - | - | - |
| `role_name` | - | - | - | - | - |
| `run_attempt` | - | - | - | - | - |
| `run_id` | - | - | - | - | - |
| `run_number` | - | - | - | - | - |
| `run_started_at` | - | - | - | - | - |
| `run_url` | - | - | - | - | - |
| `run_workflows_from_fork_pull_requests` | - | - | - | - | - |
| `runner_group_id` | - | Yes | - | - | - |
| `runner_group_name` | - | - | - | - | - |
| `runner_id` | - | - | - | - | - |
| `runner_name` | - | - | - | - | - |
| `runners` | - | - | - | - | - |
| `runners_url` | - | - | - | - | - |
| `security_and_analysis` | - | - | - | - | - |
| `selected_repositories_url` | - | - | - | - | - |
| `selected_repository_ids` | - | - | - | - | - |
| `selected_workflows` | - | - | - | - | - |
| `send_secrets_and_variables` | - | - | - | - | - |
| `send_write_tokens_to_workflows` | - | - | - | - | - |
| `sha_pinning_required` | - | - | - | - | - |
| `size` | - | Yes | - | - | - |
| `size_gb` | - | - | - | - | - |
| `size_in_bytes` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `squash_merge_commit_message` | - | - | - | - | - |
| `squash_merge_commit_title` | - | - | - | - | - |
| `ssh_url` | - | Yes | - | - | - |
| `stargazers_count` | - | Yes | - | - | - |
| `stargazers_url` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `started_at` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `statuses_url` | - | - | - | - | - |
| `steps` | - | - | - | - | - |
| `storage_gb` | - | - | - | - | - |
| `subscribers_count` | - | - | - | - | - |
| `subscribers_url` | - | - | - | - | - |
| `subscription_url` | - | - | - | - | - |
| `svn_url` | - | Yes | - | - | - |
| `tags_url` | - | - | - | - | - |
| `teams_url` | - | - | - | - | - |
| `temp_clone_token` | - | - | - | - | - |
| `topics` | - | - | - | - | - |
| `total` | - | - | - | - | - |
| `total_count` | - | - | - | - | - |
| `trees_url` | - | - | - | - | - |
| `triggering_actor` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `ubuntu_16_core` | - | - | - | - | - |
| `ubuntu_32_core` | - | - | - | - | - |
| `ubuntu_4_core` | - | - | - | - | - |
| `ubuntu_64_core` | - | - | - | - | - |
| `ubuntu_8_core` | - | - | - | - | - |
| `updated_at` | - | Yes | - | - | - |
| `url` | - | - | - | - | - |
| `use_squash_pr_title_as_default` | - | - | - | - | - |
| `value` | - | Yes | - | - | - |
| `verified_allowed` | - | - | - | - | - |
| `visibility` | - | Yes | - | - | - |
| `watchers` | - | Yes | - | - | - |
| `watchers_count` | - | Yes | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |
| `windows_16_core` | - | - | - | - | - |
| `windows_32_core` | - | - | - | - | - |
| `windows_4_core` | - | - | - | - | - |
| `windows_64_core` | - | - | - | - | - |
| `windows_8_core` | - | - | - | - | - |
| `work_folder` | - | - | - | - | - |
| `workflow_id` | - | - | - | - | - |
| `workflow_name` | - | - | - | - | - |
| `workflow_restrictions_read_only` | - | - | - | - | - |
| `workflow_run` | - | - | - | - | - |
| `workflow_url` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Action():create({
  org_id = --[[ string ]],
  access_level = --[[ string ]],
  active_caches_count = --[[ number ]],
  active_caches_size_in_bytes = --[[ number ]],
  actor = --[[ table ]],
  allows_public_repositories = --[[ boolean ]],
  approval_policy = --[[ string ]],
  archive_download_url = --[[ string ]],
  archive_url = --[[ string ]],
  artifacts_url = --[[ string ]],
  assignees_url = --[[ string ]],
  badge_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  busy = --[[ boolean ]],
  cancel_url = --[[ string ]],
  check_run_url = --[[ string ]],
  check_suite_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  completed_at = --[[ string ]],
  conclusion = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  cpu_cores = --[[ number ]],
  created_at = --[[ string ]],
  days = --[[ number ]],
  default = --[[ boolean ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  display_name = --[[ string ]],
  display_title = --[[ string ]],
  downloads_url = --[[ string ]],
  enabled = --[[ boolean ]],
  enabled_repositories = --[[ string ]],
  event = --[[ string ]],
  events_url = --[[ string ]],
  expired = --[[ boolean ]],
  expires_at = --[[ string ]],
  fork = --[[ boolean ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  head_branch = --[[ string ]],
  head_commit = --[[ table ]],
  head_repository = --[[ table ]],
  head_sha = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  image_details = --[[ table ]],
  inherited = --[[ boolean ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  jobs_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels = --[[ table ]],
  labels_url = --[[ string ]],
  languages_url = --[[ string ]],
  logs_url = --[[ string ]],
  machine_size_details = --[[ table ]],
  memory_gb = --[[ number ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  os = --[[ string ]],
  owner = --[[ table ]],
  path = --[[ string ]],
  platform = --[[ string ]],
  platforms = --[[ table ]],
  private = --[[ boolean ]],
  public_ip_enabled = --[[ boolean ]],
  pull_requests = --[[ table ]],
  pulls_url = --[[ string ]],
  ref = --[[ string ]],
  releases_url = --[[ string ]],
  repository = --[[ table ]],
  rerun_url = --[[ string ]],
  run_id = --[[ number ]],
  run_number = --[[ number ]],
  run_url = --[[ string ]],
  run_workflows_from_fork_pull_requests = --[[ boolean ]],
  runner_group_id = --[[ number ]],
  runner_group_name = --[[ string ]],
  runner_id = --[[ number ]],
  runner_name = --[[ string ]],
  runners = --[[ table ]],
  runners_url = --[[ string ]],
  selected_repository_ids = --[[ table ]],
  size_gb = --[[ number ]],
  size_in_bytes = --[[ number ]],
  source = --[[ string ]],
  stargazers_url = --[[ string ]],
  started_at = --[[ string ]],
  state = --[[ string ]],
  status = --[[ string ]],
  statuses_url = --[[ string ]],
  storage_gb = --[[ number ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  total_count = --[[ number ]],
  trees_url = --[[ string ]],
  triggering_actor = --[[ table ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  workflow_id = --[[ number ]],
  workflow_name = --[[ string ]],
  workflow_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Action():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Action():load({ archive_format = "archive_format", artifact_id = 1, owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Action():remove({ hosted_runner_id = 1, org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Action():update({
  org_id = "org_id",
  repository_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsArtifactAndLogRetentionEntity

```lua
local actions_artifact_and_log_retention = client:ActionsArtifactAndLogRetention(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `number` | Yes | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `number` | Yes | The maximum number of days that can be configured |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsArtifactAndLogRetention():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsArtifactAndLogRetentionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsCacheListEntity

```lua
local actions_cache_list = client:ActionsCacheList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `last_accessed_at` | `string` | No |  |
| `ref` | `string` | No |  |
| `size_in_bytes` | `number` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActionsCacheList():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ActionsCacheList():remove({ owner = "owner", repo = "repo", key = "key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsCacheUsageByRepositoryEntity

```lua
local actions_cache_usage_by_repository = client:ActionsCacheUsageByRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_caches_count` | `number` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `number` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsCacheUsageByRepository():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheUsageByRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsCacheUsageOrgEnterpriseEntity

```lua
local actions_cache_usage_org_enterprise = client:ActionsCacheUsageOrgEnterprise(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_active_caches_count` | `number` | Yes | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `number` | Yes | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsCacheUsageOrgEnterprise():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsForkPrContributorApprovalEntity

```lua
local actions_fork_pr_contributor_approval = client:ActionsForkPrContributorApproval(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsForkPrContributorApproval():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsForkPrContributorApprovalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsForkPrWorkflowsPrivateRepoEntity

```lua
local actions_fork_pr_workflows_private_repo = client:ActionsForkPrWorkflowsPrivateRepo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `boolean` | Yes | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `boolean` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `boolean` | Yes | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `boolean` | Yes | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsForkPrWorkflowsPrivateRepo():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsGetDefaultWorkflowPermissionEntity

```lua
local actions_get_default_workflow_permission = client:ActionsGetDefaultWorkflowPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_approve_pull_request_reviews` | `boolean` | Yes | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | Yes | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsGetDefaultWorkflowPermission():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsHostedRunnerEntity

```lua
local actions_hosted_runner = client:ActionsHostedRunner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable_static_ip` | `boolean` | No | Whether this runner should be created with a static public IP. |
| `id` | `number` | Yes | The unique identifier of the hosted runner. |
| `image` | `table` | Yes | The image of runner. |
| `image_details` | `table` | Yes | Provides details of a hosted runner image |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `table` | Yes | Provides details of a particular machine spec. |
| `maximum_runners` | `number` | No | The maximum amount of hosted runners. |
| `name` | `string` | Yes | The name of the hosted runner. |
| `platform` | `string` | Yes | The operating system of the image. |
| `public_ip_enabled` | `boolean` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `table` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `number` | No | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `string` | Yes | The machine size of the runner. |
| `status` | `string` | Yes | The status of the runner. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `enable_static_ip` | - | - | - |
| `id` | - | - | - |
| `image` | - | - | - |
| `image_details` | - | - | - |
| `last_active_on` | - | - | - |
| `machine_size_details` | - | - | - |
| `maximum_runners` | - | - | - |
| `name` | - | - | Yes |
| `platform` | - | - | - |
| `public_ip_enabled` | - | - | - |
| `public_ips` | - | - | - |
| `runner_group_id` | - | Yes | - |
| `size` | - | - | - |
| `status` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ActionsHostedRunner():create({
  org_id = --[[ string ]],
  id = --[[ number ]],
  image = --[[ table ]],
  image_details = --[[ table ]],
  machine_size_details = --[[ table ]],
  name = --[[ string ]],
  platform = --[[ string ]],
  public_ip_enabled = --[[ boolean ]],
  size = --[[ string ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsHostedRunner():load({ id = 1, org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ActionsHostedRunner():update({
  id = 1,
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsHostedRunnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsHostedRunnerLimitEntity

```lua
local actions_hosted_runner_limit = client:ActionsHostedRunnerLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_usage` | `number` | Yes | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `number` | Yes | The maximum number of static public IP addresses that can be used for Hosted Runners. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsHostedRunnerLimit():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsHostedRunnerLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsOrganizationPermissionEntity

```lua
local actions_organization_permission = client:ActionsOrganizationPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `string` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `string` | No | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `boolean` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsOrganizationPermission():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsOrganizationPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsPublicKeyEntity

```lua
local actions_public_key = client:ActionsPublicKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsPublicKey():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsPublicKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsRepositoryPermissionEntity

```lua
local actions_repository_permission = client:ActionsRepositoryPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `boolean` | Yes | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `boolean` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsRepositoryPermission():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsRepositoryPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsSecretEntity

```lua
local actions_secret = client:ActionsSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsSecret():load({ id = "actions_secret_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsVariableEntity

```lua
local actions_variable = client:ActionsVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the variable. |
| `updated_at` | `string` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `string` | Yes | The value of the variable. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsVariable():load({ id = "actions_variable_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsWorkflowAccessToRepositoryEntity

```lua
local actions_workflow_access_to_repository = client:ActionsWorkflowAccessToRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsWorkflowAccessToRepository():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivityEntity

```lua
local activity = client:Activity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_type` | `string` | Yes | The type of the activity that was performed. |
| `actor` | `table` | Yes | A GitHub user. |
| `after` | `string` | Yes | The SHA of the commit after the activity. |
| `archive_url` | `string` | No |  |
| `assignees_url` | `string` | No |  |
| `avatar_url` | `string` | No |  |
| `before` | `string` | Yes | The SHA of the commit before the activity. |
| `blobs_url` | `string` | No |  |
| `branches_url` | `string` | No |  |
| `clone_url` | `string` | No |  |
| `collaborators_url` | `string` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `compare_url` | `string` | No |  |
| `contents_url` | `string` | No |  |
| `contributors_url` | `string` | No |  |
| `deployments_url` | `string` | No |  |
| `description` | `string` | No |  |
| `downloads_url` | `string` | No |  |
| `events_url` | `string` | No |  |
| `followers_url` | `string` | No |  |
| `following_url` | `string` | No |  |
| `fork` | `boolean` | No |  |
| `forks_url` | `string` | No |  |
| `full_name` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `git_commits_url` | `string` | No |  |
| `git_refs_url` | `string` | No |  |
| `git_tags_url` | `string` | No |  |
| `git_url` | `string` | No |  |
| `github_id` | `number` | No |  |
| `gravatar_id` | `string` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `issue_comment_url` | `string` | No |  |
| `issue_events_url` | `string` | No |  |
| `issues_url` | `string` | No |  |
| `keys_url` | `string` | No |  |
| `labels_url` | `string` | No |  |
| `language` | `table` | No |  |
| `languages_url` | `string` | No |  |
| `last_read_at` | `string` | No | Describes the last point that notifications were checked. |
| `login` | `string` | No |  |
| `merges_url` | `string` | No |  |
| `milestones_url` | `string` | No |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | No |  |
| `node_id` | `string` | No |  |
| `notifications_url` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `owner` | `table` | No |  |
| `private` | `boolean` | No |  |
| `pulls_url` | `string` | No |  |
| `read` | `boolean` | No | Whether the notification has been read. |
| `received_events_url` | `string` | No |  |
| `ref` | `string` | Yes | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `boolean` | No |  |
| `ssh_url` | `string` | No |  |
| `stargazers_url` | `string` | No |  |
| `starred_url` | `string` | No |  |
| `statuses_url` | `string` | No |  |
| `subscribers_url` | `string` | No |  |
| `subscription_url` | `string` | No |  |
| `subscriptions_url` | `string` | No |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | No |  |
| `teams_url` | `string` | No |  |
| `timestamp` | `string` | Yes | The time when the activity occurred. |
| `trees_url` | `string` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | update | remove |
| --- | --- | --- | --- | --- |
| `activity_type` | - | - | - | - |
| `actor` | - | - | - | - |
| `after` | - | - | - | - |
| `archive_url` | - | - | - | - |
| `assignees_url` | - | - | - | - |
| `avatar_url` | - | - | - | - |
| `before` | - | - | - | - |
| `blobs_url` | - | - | - | - |
| `branches_url` | - | - | - | - |
| `clone_url` | - | - | - | - |
| `collaborators_url` | - | - | - | - |
| `comments_url` | - | - | - | - |
| `commits_url` | - | - | - | - |
| `compare_url` | - | - | - | - |
| `contents_url` | - | - | - | - |
| `contributors_url` | - | - | - | - |
| `deployments_url` | - | - | - | - |
| `description` | - | - | - | - |
| `downloads_url` | - | - | - | - |
| `events_url` | - | - | - | - |
| `followers_url` | - | - | - | - |
| `following_url` | - | - | - | - |
| `fork` | - | - | - | - |
| `forks_url` | - | - | - | - |
| `full_name` | - | - | - | - |
| `gists_url` | - | - | - | - |
| `git_commits_url` | - | - | - | - |
| `git_refs_url` | - | - | - | - |
| `git_tags_url` | - | - | - | - |
| `git_url` | - | - | - | - |
| `github_id` | - | Yes | - | - |
| `gravatar_id` | - | - | - | - |
| `homepage` | - | - | - | - |
| `hooks_url` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | Yes | - | - |
| `issue_comment_url` | - | - | - | - |
| `issue_events_url` | - | - | - | - |
| `issues_url` | - | - | - | - |
| `keys_url` | - | - | - | - |
| `labels_url` | - | - | - | - |
| `language` | - | - | - | - |
| `languages_url` | - | - | - | - |
| `last_read_at` | - | - | - | - |
| `login` | - | - | - | - |
| `merges_url` | - | - | - | - |
| `milestones_url` | - | - | - | - |
| `mirror_url` | - | - | - | - |
| `name` | - | - | - | - |
| `node_id` | - | Yes | - | - |
| `notifications_url` | - | - | - | - |
| `organizations_url` | - | - | - | - |
| `owner` | - | - | - | - |
| `private` | - | - | - | - |
| `pulls_url` | - | - | - | - |
| `read` | - | - | - | - |
| `received_events_url` | - | - | - | - |
| `ref` | - | - | - | - |
| `releases_url` | - | - | - | - |
| `repos_url` | - | - | - | - |
| `site_admin` | - | - | - | - |
| `ssh_url` | - | - | - | - |
| `stargazers_url` | - | - | - | - |
| `starred_url` | - | - | - | - |
| `statuses_url` | - | - | - | - |
| `subscribers_url` | - | - | - | - |
| `subscription_url` | - | - | - | - |
| `subscriptions_url` | - | - | - | - |
| `svn_url` | - | - | - | - |
| `tags_url` | - | - | - | - |
| `teams_url` | - | - | - | - |
| `timestamp` | - | - | - | - |
| `trees_url` | - | - | - | - |
| `type` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Activity():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Activity():load({ owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Activity():remove({ thread_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Activity():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AddEntity

```lua
local add = client:Add(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `table` | Yes | The GitHub user handles to add to the team. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Add():create({
  enterprise = --[[ string ]],
  team_id = --[[ string ]],
  usernames = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiInsightsRouteStatEntity

```lua
local api_insights_route_stat = client:ApiInsightsRouteStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_route` | `string` | No | The API path's route template |
| `http_method` | `string` | No | The HTTP method |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `rate_limited_request_count` | `number` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `number` | No | The total number of requests within the queried time period |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiInsightsRouteStat():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsRouteStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiInsightsSubjectStatEntity

```lua
local api_insights_subject_stat = client:ApiInsightsSubjectStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `rate_limited_request_count` | `number` | No |  |
| `subject_id` | `number` | No |  |
| `subject_name` | `string` | No |  |
| `subject_type` | `string` | No |  |
| `total_request_count` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiInsightsSubjectStat():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsSubjectStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiInsightsSummaryStatEntity

```lua
local api_insights_summary_stat = client:ApiInsightsSummaryStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `rate_limited_request_count` | `number` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `number` | No | The total number of requests within the queried time period |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiInsightsSummaryStat():load({ min_timestamp = "min_timestamp" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsSummaryStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiInsightsTimeStatEntity

```lua
local api_insights_time_stat = client:ApiInsightsTimeStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate_limited_request_count` | `number` | No |  |
| `timestamp` | `string` | No |  |
| `total_request_count` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiInsightsTimeStat():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiInsightsTimeStat():load({ org_id = "org_id", user_id = "user_id", min_timestamp = "min_timestamp", timestamp_increment = "timestamp_increment" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsTimeStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiInsightsUserStatEntity

```lua
local api_insights_user_stat = client:ApiInsightsUserStat(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `number` | No |  |
| `actor_name` | `string` | No |  |
| `actor_type` | `string` | No |  |
| `id` | `string` | No |  |
| `integration_id` | `number` | No |  |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `oauth_application_id` | `number` | No |  |
| `rate_limited_request_count` | `number` | No |  |
| `total_request_count` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiInsightsUserStat():load({ id = "api_insights_user_stat_id", org_id = "org_id", min_timestamp = "min_timestamp" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsUserStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiOverviewEntity

```lua
local api_overview = client:ApiOverview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | No |  |
| `actions_macos` | `table` | No |  |
| `api` | `table` | No |  |
| `codespaces` | `table` | No |  |
| `copilot` | `table` | No |  |
| `dependabot` | `table` | No |  |
| `domains` | `table` | No |  |
| `git` | `table` | No |  |
| `github_enterprise_importer` | `table` | No |  |
| `hooks` | `table` | No |  |
| `importer` | `table` | No |  |
| `packages` | `table` | No |  |
| `pages` | `table` | No |  |
| `ssh_key_fingerprints` | `table` | No |  |
| `ssh_keys` | `table` | No |  |
| `verifiable_password_authentication` | `boolean` | Yes |  |
| `web` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiOverview():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiOverviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AppEntity

```lua
local app = client:App(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is enabled for this repository |
| `app_id` | `number` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | No |  |
| `clone_url` | `string` | Yes |  |
| `code_search_index_status` | `table` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contact_email` | `string` | No |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | No |  |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events` | `table` | No |  |
| `events_url` | `string` | Yes |  |
| `external_url` | `string` | No |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `has_discussions` | `boolean` | No | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Yes | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Whether issues are enabled. |
| `has_multiple_single_files` | `boolean` | No |  |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Whether projects are enabled. |
| `has_wiki` | `boolean` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No |  |
| `id` | `number` | No | Unique identifier of the repository |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | No | The name of the repository. |
| `node_id` | `string` | No |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `owner` | `table` | No | A GitHub user. |
| `pem` | `string` | No |  |
| `permissions` | `table` | No | The permissions granted to the user access token. |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `table` | No |  |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `slug` | `string` | No |  |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `table` | Yes | A GitHub user. |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` | `string` | No |  |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `access_tokens_url` | - | - | - | - |
| `account` | - | - | - | - |
| `allow_auto_merge` | - | - | - | - |
| `allow_forking` | - | - | - | - |
| `allow_merge_commit` | - | - | - | - |
| `allow_rebase_merge` | - | - | - | - |
| `allow_squash_merge` | - | - | - | - |
| `allow_update_branch` | - | - | - | - |
| `anonymous_access_enabled` | - | - | - | - |
| `app_id` | - | - | - | - |
| `app_slug` | - | - | - | - |
| `archive_url` | - | - | - | - |
| `archived` | - | - | - | - |
| `assignees_url` | - | - | - | - |
| `blobs_url` | - | - | - | - |
| `branches_url` | - | - | - | - |
| `client_id` | - | - | - | - |
| `client_secret` | - | - | - | - |
| `clone_url` | - | - | - | - |
| `code_search_index_status` | - | - | - | - |
| `collaborators_url` | - | - | - | - |
| `comments_url` | - | - | - | - |
| `commits_url` | - | - | - | - |
| `compare_url` | - | - | - | - |
| `contact_email` | - | - | - | - |
| `contents_url` | - | - | - | - |
| `contributors_url` | - | - | - | - |
| `created_at` | Yes | - | - | - |
| `default_branch` | - | - | - | - |
| `delete_branch_on_merge` | - | - | - | - |
| `deployments_url` | - | - | - | - |
| `description` | Yes | - | - | - |
| `disabled` | - | - | - | - |
| `downloads_url` | - | - | - | - |
| `events` | Yes | - | - | - |
| `events_url` | - | - | - | - |
| `external_url` | - | - | - | - |
| `fork` | - | - | - | - |
| `forks` | - | - | - | - |
| `forks_count` | - | - | - | - |
| `forks_url` | - | - | - | - |
| `full_name` | - | - | - | - |
| `git_commits_url` | - | - | - | - |
| `git_refs_url` | - | - | - | - |
| `git_tags_url` | - | - | - | - |
| `git_url` | - | - | - | - |
| `has_discussions` | - | - | - | - |
| `has_downloads` | - | - | - | - |
| `has_issues` | - | - | - | - |
| `has_multiple_single_files` | - | - | - | - |
| `has_pages` | - | - | - | - |
| `has_projects` | - | - | - | - |
| `has_wiki` | - | - | - | - |
| `homepage` | - | - | - | - |
| `hooks_url` | - | - | - | - |
| `html_url` | Yes | - | - | - |
| `id` | Yes | - | - | - |
| `is_template` | - | - | - | - |
| `issue_comment_url` | - | - | - | - |
| `issue_events_url` | - | - | - | - |
| `issues_url` | - | - | - | - |
| `keys_url` | - | - | - | - |
| `labels_url` | - | - | - | - |
| `language` | - | - | - | - |
| `languages_url` | - | - | - | - |
| `license` | - | - | - | - |
| `master_branch` | - | - | - | - |
| `merge_commit_message` | - | - | - | - |
| `merge_commit_title` | - | - | - | - |
| `merges_url` | - | - | - | - |
| `milestones_url` | - | - | - | - |
| `mirror_url` | - | - | - | - |
| `name` | Yes | - | - | - |
| `node_id` | Yes | - | - | - |
| `notifications_url` | - | - | - | - |
| `open_issues` | - | - | - | - |
| `open_issues_count` | - | - | - | - |
| `owner` | Yes | - | - | - |
| `pem` | - | - | - | - |
| `permissions` | Yes | - | - | - |
| `private` | - | - | - | - |
| `pulls_url` | - | - | - | - |
| `pushed_at` | - | - | - | - |
| `releases_url` | - | - | - | - |
| `repositories_url` | - | - | - | - |
| `repository_selection` | - | - | - | - |
| `single_file_name` | - | - | - | - |
| `single_file_paths` | - | - | - | - |
| `size` | - | - | - | - |
| `slug` | - | - | - | - |
| `squash_merge_commit_message` | - | - | - | - |
| `squash_merge_commit_title` | - | - | - | - |
| `ssh_url` | - | - | - | - |
| `stargazers_count` | - | - | - | - |
| `stargazers_url` | - | - | - | - |
| `starred_at` | - | - | - | - |
| `statuses_url` | - | - | - | - |
| `subscribers_url` | - | - | - | - |
| `subscription_url` | - | - | - | - |
| `suspended_at` | - | - | - | - |
| `suspended_by` | - | - | - | - |
| `svn_url` | - | - | - | - |
| `tags_url` | - | - | - | - |
| `target_id` | - | - | - | - |
| `target_type` | - | - | - | - |
| `teams_url` | - | - | - | - |
| `temp_clone_token` | - | - | - | - |
| `topics` | - | - | - | - |
| `trees_url` | - | - | - | - |
| `updated_at` | Yes | - | - | - |
| `url` | - | - | - | - |
| `use_squash_pr_title_as_default` | - | - | - | - |
| `visibility` | - | - | - | - |
| `watchers` | - | - | - | - |
| `watchers_count` | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - |
| `webhook_secret` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:App():create({
  code = --[[ string ]],
  access_tokens_url = --[[ string ]],
  account = --[[ any ]],
  app_id = --[[ number ]],
  app_slug = --[[ string ]],
  archive_url = --[[ string ]],
  archived = --[[ boolean ]],
  assignees_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  clone_url = --[[ string ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  default_branch = --[[ string ]],
  deployments_url = --[[ string ]],
  disabled = --[[ boolean ]],
  downloads_url = --[[ string ]],
  events_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks = --[[ number ]],
  forks_count = --[[ number ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  git_url = --[[ string ]],
  has_downloads = --[[ boolean ]],
  has_issues = --[[ boolean ]],
  has_pages = --[[ boolean ]],
  has_projects = --[[ boolean ]],
  has_wiki = --[[ boolean ]],
  homepage = --[[ string ]],
  hooks_url = --[[ string ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  language = --[[ string ]],
  languages_url = --[[ string ]],
  license = --[[ table ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  mirror_url = --[[ string ]],
  notifications_url = --[[ string ]],
  open_issues = --[[ number ]],
  open_issues_count = --[[ number ]],
  private = --[[ boolean ]],
  pulls_url = --[[ string ]],
  pushed_at = --[[ string ]],
  releases_url = --[[ string ]],
  repositories_url = --[[ string ]],
  repository_selection = --[[ string ]],
  single_file_name = --[[ string ]],
  size = --[[ number ]],
  ssh_url = --[[ string ]],
  stargazers_count = --[[ number ]],
  stargazers_url = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  suspended_at = --[[ string ]],
  suspended_by = --[[ table ]],
  svn_url = --[[ string ]],
  tags_url = --[[ string ]],
  target_id = --[[ number ]],
  target_type = --[[ string ]],
  teams_url = --[[ string ]],
  trees_url = --[[ string ]],
  url = --[[ string ]],
  watchers = --[[ number ]],
  watchers_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:App():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:App():remove({ installation_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:App():update({
  installation_id = 1,
  repository_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ArtifactEntity

```lua
local artifact = client:Artifact(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `head_branch` | `string` | No |  |
| `head_repository_id` | `number` | No |  |
| `head_sha` | `string` | No |  |
| `id` | `number` | No |  |
| `repository_id` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Artifact():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssigneeEntity

```lua
local assignee = client:Assignee(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Assignee():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssigneeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthenticationTokenEntity

```lua
local authentication_token = client:AuthenticationToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `token` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AuthenticationToken():create({
  org_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthorizationEntity

```lua
local authorization = client:Authorization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes | The access_token of the OAuth or GitHub application. |
| `app` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `fingerprint` | `string` | Yes |  |
| `hashed_token` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `installation` | `table` | Yes |  |
| `note` | `string` | Yes |  |
| `note_url` | `string` | Yes |  |
| `permissions` | `table` | No | The permissions granted to the user access token. |
| `repositories` | `table` | No | The list of repository names to scope the user access token to. |
| `repository_ids` | `table` | No | The list of repository IDs to scope the user access token to. |
| `scopes` | `table` | Yes | A list of scopes that this authorization is in. |
| `target` | `string` | No | The name of the user or organization to scope the user access token to. |
| `target_id` | `number` | No | The ID of the user or organization to scope the user access token to. |
| `token` | `string` | Yes |  |
| `token_last_eight` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Authorization():create({
  application_id = --[[ string ]],
  access_token = --[[ string ]],
  app = --[[ table ]],
  created_at = --[[ string ]],
  expires_at = --[[ string ]],
  fingerprint = --[[ string ]],
  hashed_token = --[[ string ]],
  id = --[[ number ]],
  installation = --[[ table ]],
  note = --[[ string ]],
  note_url = --[[ string ]],
  scopes = --[[ table ]],
  token = --[[ string ]],
  token_last_eight = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Authorization():update({
  application_id = "application_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutolinkEntity

```lua
local autolink = client:Autolink(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `is_alphanumeric` | `boolean` | Yes | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `string` | Yes | The prefix of a key that is linkified. |
| `updated_at` | `string` | No |  |
| `url_template` | `string` | Yes | A template for the target URL that is generated if a key was found. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `is_alphanumeric` | - | - | Yes |
| `key_prefix` | - | - | - |
| `updated_at` | - | - | - |
| `url_template` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Autolink():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  id = --[[ number ]],
  is_alphanumeric = --[[ boolean ]],
  key_prefix = --[[ string ]],
  url_template = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Autolink():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Autolink():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutolinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BaseGistEntity

```lua
local base_gist = client:BaseGist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | No |  |
| `comments_enabled` | `boolean` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `files` | `table` | No |  |
| `forks` | `table` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `table` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `table` | No | A GitHub user. |
| `public` | `boolean` | No |  |
| `truncated` | `boolean` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No | A GitHub user. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `comments` | Yes | - |
| `comments_enabled` | - | - |
| `comments_url` | Yes | - |
| `commits_url` | Yes | - |
| `created_at` | Yes | - |
| `description` | Yes | - |
| `files` | Yes | - |
| `forks` | - | - |
| `forks_url` | Yes | - |
| `git_pull_url` | Yes | - |
| `git_push_url` | Yes | - |
| `history` | - | - |
| `html_url` | Yes | - |
| `id` | Yes | - |
| `node_id` | Yes | - |
| `owner` | Yes | - |
| `public` | Yes | - |
| `truncated` | - | - |
| `updated_at` | Yes | - |
| `url` | Yes | - |
| `user` | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BaseGist():create({
  gist_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BaseGist():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BaseGistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingUsageReportEntity

```lua
local billing_usage_report = client:BillingUsageReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `number` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `number` | Yes | Gross amount of the usage line item. |
| `netAmount` | `number` | Yes | Net amount of the usage line item. |
| `organizationName` | `string` | Yes | Name of the organization. |
| `pricePerUnit` | `number` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `number` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillingUsageReport():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingUsageReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingUsageReportUserEntity

```lua
local billing_usage_report_user = client:BillingUsageReportUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `number` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `number` | Yes | Gross amount of the usage line item. |
| `netAmount` | `number` | Yes | Net amount of the usage line item. |
| `pricePerUnit` | `number` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `number` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillingUsageReportUser():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingUsageReportUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BlobEntity

```lua
local blob = client:Blob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes |  |
| `encoding` | `string` | Yes |  |
| `highlighted_content` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `sha` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Blob():load({ id = "blob_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BlockEntity

```lua
local block = client:Block(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Block():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlockEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchEntity

```lua
local branch = client:Branch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | Yes | Commit |
| `id` | `string` | No |  |
| `links` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `protected` | `boolean` | Yes |  |
| `protection` | `table` | Yes | Branch Protection |
| `protection_url` | `string` | Yes |  |
| `required_approving_review_count` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Branch():load({ id = "branch_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchProtectionEntity

```lua
local branch_protection = client:BranchProtection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `table` | No |  |
| `allow_force_pushes` | `table` | No |  |
| `allow_fork_syncing` | `table` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `table` | No |  |
| `enabled` | `boolean` | No |  |
| `enforce_admins` | `table` | Yes | Protected Branch Admin Enforced |
| `id` | `string` | No |  |
| `lock_branch` | `table` | No | Whether to set the branch as read-only. |
| `name` | `string` | No |  |
| `protection_url` | `string` | No |  |
| `required_conversation_resolution` | `table` | No |  |
| `required_linear_history` | `table` | No |  |
| `required_pull_request_reviews` | `table` | Yes | Protected Branch Pull Request Review |
| `required_signatures` | `table` | Yes |  |
| `required_status_checks` | `table` | Yes | Protected Branch Required Status Check |
| `restrictions` | `table` | Yes | Branch Restriction Policy |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BranchProtection():load({ id = "branch_protection_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchProtectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchRestrictionPolicyEntity

```lua
local branch_restriction_policy = client:BranchRestrictionPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `table` | Yes |  |
| `apps_url` | `string` | Yes |  |
| `teams` | `table` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `users` | `table` | Yes |  |
| `users_url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BranchRestrictionPolicy():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchRestrictionPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchShortEntity

```lua
local branch_short = client:BranchShort(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BranchShort():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchShortEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchWithProtectionEntity

```lua
local branch_with_protection = client:BranchWithProtection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `new_name` | `string` | Yes | The new name of the branch. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BranchWithProtection():create({
  id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  new_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchWithProtectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CampaignEntity

```lua
local campaign = client:Campaign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_stats` | `table` | Yes |  |
| `closed_at` | `string` | No | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `table` | Yes | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | Yes | The contact link of the campaign. |
| `created_at` | `string` | Yes | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | Yes | The campaign description |
| `ends_at` | `string` | Yes | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `boolean` | No | If true, will automatically generate issues for the campaign. |
| `id` | `string` | No |  |
| `managers` | `table` | Yes | The campaign managers |
| `name` | `string` | No | The campaign name |
| `number` | `number` | Yes | The number of the newly created campaign |
| `published_at` | `string` | No | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Yes | Indicates whether a campaign is open or closed |
| `team_managers` | `table` | No | The campaign team managers |
| `updated_at` | `string` | Yes | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `alert_stats` | - | - | - | - | - |
| `closed_at` | - | - | - | - | - |
| `code_scanning_alerts` | - | - | - | - | - |
| `contact_link` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | Yes | - |
| `ends_at` | - | - | - | Yes | - |
| `generate_issues` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `managers` | - | - | Yes | Yes | - |
| `name` | - | - | Yes | - | - |
| `number` | - | - | - | - | - |
| `published_at` | - | - | - | - | - |
| `state` | - | - | - | Yes | - |
| `team_managers` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Campaign():create({
  org_id = --[[ string ]],
  alert_stats = --[[ table ]],
  code_scanning_alerts = --[[ table ]],
  contact_link = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  ends_at = --[[ string ]],
  managers = --[[ table ]],
  number = --[[ number ]],
  state = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Campaign():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Campaign():load({ id = 1, org_id = "org_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Campaign():remove({ id = 1, org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Campaign():update({
  id = 1,
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckEntity

```lua
local check = client:Check(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `check_suite` | `table` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deployment` | `table` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `table` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the check. |
| `latest_check_runs_count` | `number` | Yes |  |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `table` | Yes |  |
| `pull_requests` | `table` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `table` | Yes | Minimal Repository |
| `rerequestable` | `boolean` | No |  |
| `runs_rerequestable` | `boolean` | No |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Check():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckAnnotationEntity

```lua
local check_annotation = client:CheckAnnotation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation_level` | `string` | Yes |  |
| `blob_href` | `string` | Yes |  |
| `end_column` | `number` | Yes |  |
| `end_line` | `number` | Yes |  |
| `message` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `raw_details` | `string` | Yes |  |
| `start_column` | `number` | Yes |  |
| `start_line` | `number` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CheckAnnotation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckAnnotationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckAutomatedSecurityFixEntity

```lua
local check_automated_security_fix = client:CheckAutomatedSecurityFix(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `boolean` | Yes | Whether Dependabot security updates are paused for the repository. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CheckAutomatedSecurityFix():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckAutomatedSecurityFixEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckRunEntity

```lua
local check_run = client:CheckRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | No | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `table` | Yes |  |
| `completed_at` | `string` | Yes | The time the check completed. |
| `conclusion` | `string` | Yes | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `table` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | Yes | A reference for the run on the integrator's system. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the check. |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `table` | Yes | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `table` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `string` | Yes | The time that the check run began. |
| `status` | `string` | Yes | The phase of the lifecycle that the check is currently in. |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `actions` | - | - | - |
| `app` | - | - | - |
| `check_suite` | - | - | - |
| `completed_at` | - | Yes | Yes |
| `conclusion` | - | Yes | Yes |
| `deployment` | - | - | - |
| `details_url` | - | Yes | Yes |
| `external_id` | - | Yes | Yes |
| `head_sha` | - | - | - |
| `html_url` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `node_id` | - | - | - |
| `output` | - | - | - |
| `pull_requests` | - | - | - |
| `started_at` | - | Yes | Yes |
| `status` | - | Yes | Yes |
| `url` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CheckRun():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  app = --[[ table ]],
  check_suite = --[[ table ]],
  completed_at = --[[ string ]],
  conclusion = --[[ string ]],
  deployment = --[[ table ]],
  details_url = --[[ string ]],
  external_id = --[[ string ]],
  head_sha = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  output = --[[ table ]],
  pull_requests = --[[ table ]],
  started_at = --[[ string ]],
  status = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CheckRun():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CheckRun():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckSuiteEntity

```lua
local check_suite = client:CheckSuite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `table` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the head commit that is being checked. |
| `id` | `number` | Yes |  |
| `latest_check_runs_count` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `pull_requests` | `table` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |
| `rerequestable` | `boolean` | No |  |
| `runs_rerequestable` | `boolean` | No |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CheckSuite():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  after = --[[ string ]],
  app = --[[ table ]],
  before = --[[ string ]],
  check_runs_url = --[[ string ]],
  conclusion = --[[ string ]],
  created_at = --[[ string ]],
  head_branch = --[[ string ]],
  head_commit = --[[ table ]],
  head_sha = --[[ string ]],
  id = --[[ number ]],
  latest_check_runs_count = --[[ number ]],
  node_id = --[[ string ]],
  pull_requests = --[[ table ]],
  repository = --[[ table ]],
  status = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CheckSuite():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckSuiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckSuitePreferenceEntity

```lua
local check_suite_preference = client:CheckSuitePreference(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_trigger_checks` | `table` | No | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `table` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CheckSuitePreference():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckSuitePreferenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClassroomEntity

```lua
local classroom = client:Classroom(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Returns whether classroom is archived or not. |
| `avatar_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the classroom. |
| `login` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the classroom. |
| `node_id` | `string` | Yes |  |
| `url` | `string` | Yes | The url of the classroom on GitHub Classroom. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Classroom():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Classroom():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClassroomAcceptedAssignmentEntity

```lua
local classroom_accepted_assignment = client:ClassroomAcceptedAssignment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `table` | Yes | A GitHub Classroom assignment |
| `commit_count` | `number` | Yes | Count of student commits. |
| `grade` | `string` | Yes | Most recent grade. |
| `id` | `number` | Yes | Unique identifier of the repository. |
| `passing` | `boolean` | Yes | Whether a submission passed. |
| `repository` | `table` | Yes | A GitHub repository view for Classroom |
| `students` | `table` | Yes |  |
| `submitted` | `boolean` | Yes | Whether an accepted assignment has been submitted. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ClassroomAcceptedAssignment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAcceptedAssignmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClassroomAssignmentEntity

```lua
local classroom_assignment = client:ClassroomAssignment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `number` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `table` | Yes | A GitHub Classroom classroom |
| `deadline` | `string` | Yes | The time at which the assignment is due. |
| `editor` | `string` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `boolean` | Yes | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `number` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `boolean` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `string` | Yes | The link that a student can use to accept the assignment. |
| `language` | `string` | Yes | The programming language used in the assignment. |
| `max_members` | `number` | Yes | The maximum allowable members per team. |
| `max_teams` | `number` | Yes | The maximum allowable teams for the assignment. |
| `passing` | `number` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `boolean` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Yes | Sluggified name of the assignment. |
| `starter_code_repository` | `table` | Yes | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `boolean` | Yes | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `number` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a group assignment or individual assignment. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ClassroomAssignment():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAssignmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClassroomAssignmentGradeEntity

```lua
local classroom_assignment_grade = client:ClassroomAssignmentGrade(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_name` | `string` | Yes | Name of the assignment |
| `assignment_url` | `string` | Yes | URL of the assignment |
| `github_username` | `string` | Yes | GitHub username of the student |
| `group_name` | `string` | No | If a group assignment, name of the group the student is in |
| `points_available` | `number` | Yes | Number of points available for the assignment |
| `points_awarded` | `number` | Yes | Number of points awarded to the student |
| `roster_identifier` | `string` | Yes | Roster identifier of the student |
| `starter_code_url` | `string` | Yes | URL of the starter code for the assignment |
| `student_repository_name` | `string` | Yes | Name of the student's assignment repository |
| `student_repository_url` | `string` | Yes | URL of the student's assignment repository |
| `submission_timestamp` | `string` | Yes | Timestamp of the student's assignment submission |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ClassroomAssignmentGrade():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAssignmentGradeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CloneEntity

```lua
local clone = client:Clone(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Clone():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeFrequencyEntity

```lua
local code_frequency = client:CodeFrequency(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeFrequency():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeFrequencyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeFrequencyStatEntity

```lua
local code_frequency_stat = client:CodeFrequencyStat(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeFrequencyStat():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeFrequencyStatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeOfConductEntity

```lua
local code_of_conduct = client:CodeOfConduct(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `key` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeOfConduct():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeOfConduct():load({ key = "key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeOfConductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningEntity

```lua
local code_scanning = client:CodeScanning(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_uri` | `string` | No | The base directory used in the analysis, as it appears in the SARIF file. |
| `commit_sha` | `string` | Yes | The SHA of the commit to which the analysis you are uploading relates. |
| `ref` | `string` | Yes | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `sarif` | `string` | Yes | A Base64 string representing the SARIF file to upload. |
| `started_at` | `string` | No | The time that the analysis run began. |
| `tool_name` | `string` | No | The name of the tool used to generate the code scanning analysis. |
| `validate` | `boolean` | No | Whether the SARIF file will be validated according to the code scanning specifications. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CodeScanning():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  commit_sha = --[[ string ]],
  ref = --[[ string ]],
  sarif = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CodeScanning():remove({ language = "language", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAlertEntity

```lua
local code_scanning_alert = client:CodeScanningAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_request` | `boolean` | No | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `table` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `table` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `table` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `rule` | `table` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `table` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `create_request` | - | - |
| `created_at` | - | - |
| `dismissal_approved_by` | - | - |
| `dismissed_at` | - | - |
| `dismissed_by` | - | - |
| `dismissed_comment` | - | - |
| `dismissed_reason` | - | Yes |
| `fixed_at` | - | - |
| `html_url` | - | - |
| `id` | - | - |
| `instances_url` | - | - |
| `most_recent_instance` | - | - |
| `number` | - | - |
| `rule` | - | - |
| `state` | - | - |
| `tool` | - | - |
| `updated_at` | - | - |
| `url` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningAlert():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CodeScanningAlert():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAlertInstanceEntity

```lua
local code_scanning_alert_instance = client:CodeScanningAlertInstance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `classifications` | `table` | No | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` | No |  |
| `environment` | `string` | No | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` | No |  |
| `location` | `table` | No | Describe a region within a file for the alert. |
| `message` | `table` | No |  |
| `ref` | `string` | No | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | No | State of a code scanning alert. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningAlertInstance():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertInstanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAlertItemEntity

```lua
local code_scanning_alert_item = client:CodeScanningAlertItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `table` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `table` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `table` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `rule` | `table` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `table` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningAlertItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAnalysiEntity

```lua
local code_scanning_analysi = client:CodeScanningAnalysi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | Yes | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | `string` | Yes | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | `string` | Yes | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` | `boolean` | Yes |  |
| `environment` | `string` | Yes | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `string` | Yes |  |
| `guid` | `string` | No | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `number` | Yes | Unique identifier for this analysis. |
| `name` | `string` | No | The name of the tool used to generate the code scanning analysis. |
| `ref` | `string` | Yes | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `number` | Yes | The total number of results in the analysis. |
| `rules_count` | `number` | Yes | The total number of rules used in the analysis. |
| `sarif_id` | `string` | Yes | An identifier for the upload. |
| `tool` | `table` | Yes |  |
| `url` | `string` | Yes | The REST API URL of the analysis resource. |
| `version` | `string` | No | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Yes | Warning generated when processing the analysis |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningAnalysi():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningAnalysi():load({ analysis_id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAnalysiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAnalysisDeletionEntity

```lua
local code_scanning_analysis_deletion = client:CodeScanningAnalysisDeletion(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CodeScanningAnalysisDeletion():remove({ analysis_id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAnalysisDeletionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAutofixEntity

```lua
local code_scanning_autofix = client:CodeScanningAutofix(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | The description of an autofix. |
| `started_at` | `string` | Yes | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | Yes | The status of an autofix. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CodeScanningAutofix():create({
  alert_number = --[[ number ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  description = --[[ string ]],
  started_at = --[[ string ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningAutofix():load({ alert_number = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAutofixEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningAutofixCommitEntity

```lua
local code_scanning_autofix_commit = client:CodeScanningAutofixCommit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | Commit message to be used. |
| `target_ref` | `string` | No | The Git reference of target branch for the commit. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CodeScanningAutofixCommit():create({
  alert_id = --[[ number ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAutofixCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningCodeqlDatabaseEntity

```lua
local code_scanning_codeql_database = client:CodeScanningCodeqlDatabase(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `commit_oid` | `string` | No | The commit SHA of the repository at the time the CodeQL database was created. |
| `content_type` | `string` | Yes | The MIME type of the CodeQL database file. |
| `created_at` | `string` | Yes | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the CodeQL database. |
| `language` | `string` | Yes | The language of the CodeQL database. |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The name of the CodeQL database. |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `size` | `number` | Yes | The size of the CodeQL database file in bytes. |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `table` | Yes | A GitHub user. |
| `url` | `string` | Yes | The URL at which to download the CodeQL database. |
| `user_view_type` | `string` | No |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `avatar_url` | - | - |
| `commit_oid` | - | - |
| `content_type` | - | - |
| `created_at` | - | - |
| `email` | - | - |
| `events_url` | - | - |
| `followers_url` | - | - |
| `following_url` | - | - |
| `gists_url` | - | - |
| `gravatar_id` | - | - |
| `html_url` | - | - |
| `id` | - | - |
| `language` | - | - |
| `login` | - | - |
| `name` | - | Yes |
| `node_id` | - | - |
| `organizations_url` | - | - |
| `received_events_url` | - | - |
| `repos_url` | - | - |
| `site_admin` | - | - |
| `size` | - | - |
| `starred_at` | - | - |
| `starred_url` | - | - |
| `subscriptions_url` | - | - |
| `type` | - | - |
| `updated_at` | - | - |
| `uploader` | - | - |
| `url` | - | - |
| `user_view_type` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningCodeqlDatabase():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningCodeqlDatabase():load({ language = "language", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningCodeqlDatabaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningDefaultSetupEntity

```lua
local code_scanning_default_setup = client:CodeScanningDefaultSetup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `languages` | `table` | No | Languages to be analyzed. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `schedule` | `string` | No | The frequency of the periodic analysis. |
| `state` | `string` | No | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | No | Timestamp of latest configuration update. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningDefaultSetup():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningDefaultSetupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningOrganizationAlertItemEntity

```lua
local code_scanning_organization_alert_item = client:CodeScanningOrganizationAlertItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `table` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `table` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `table` | Yes |  |
| `number` | `number` | Yes | The security alert number. |
| `repository` | `table` | Yes | A GitHub repository. |
| `rule` | `table` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `table` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeScanningOrganizationAlertItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningOrganizationAlertItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningSarifsStatusEntity

```lua
local code_scanning_sarifs_status = client:CodeScanningSarifsStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analyses_url` | `string` | No | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `table` | No | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | No | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningSarifsStatus():load({ owner = "owner", repo = "repo", sarif_id = "sarif_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningSarifsStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningVariantAnalysiEntity

```lua
local code_scanning_variant_analysi = client:CodeScanningVariantAnalysi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions_workflow_run_id` | `number` | No | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `table` | Yes | A GitHub user. |
| `completed_at` | `string` | No | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `table` | Yes | A GitHub repository. |
| `created_at` | `string` | No | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | No | The reason for a failure of the variant analysis. |
| `id` | `number` | Yes | The ID of the variant analysis. |
| `language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_pack` | `string` | Yes | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | Yes | The download url for the query pack. |
| `repositories` | `table` | No | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `table` | No | List of repository lists to run the query against. |
| `repository_owners` | `table` | No | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `table` | No |  |
| `skipped_repositories` | `table` | Yes | Information about repositories that were skipped from processing. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | No | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CodeScanningVariantAnalysi():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  actor = --[[ table ]],
  controller_repo = --[[ table ]],
  id = --[[ number ]],
  language = --[[ string ]],
  query_language = --[[ string ]],
  query_pack = --[[ string ]],
  query_pack_url = --[[ string ]],
  skipped_repositories = --[[ table ]],
  status = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningVariantAnalysi():load({ codeql_variant_analysis_id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningVariantAnalysiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeScanningVariantAnalysisRepoTaskEntity

```lua
local code_scanning_variant_analysis_repo_task = client:CodeScanningVariantAnalysisRepoTask(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archive_url` | `string` | Yes | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `string` | Yes | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `string` | Yes | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `string` | Yes | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `string` | Yes | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `string` | Yes | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `string` | Yes | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `string` | Yes | A template for the API URL to compare two commits or refs. |
| `contents_url` | `string` | Yes | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `string` | Yes | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `string` | Yes | The API URL to list the deployments of the repository. |
| `description` | `string` | Yes | The repository description. |
| `downloads_url` | `string` | Yes | The API URL to list the downloads on the repository. |
| `events_url` | `string` | Yes | The API URL to list the events of the repository. |
| `fork` | `boolean` | Yes | Whether the repository is a fork. |
| `forks_url` | `string` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `string` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `number` | Yes | A unique identifier of the repository. |
| `hooks_url` | `string` | Yes | The API URL to list the hooks on the repository. |
| `html_url` | `string` | Yes | The URL to view the repository on GitHub.com. |
| `id` | `string` | Yes | A unique identifier of the repository. |
| `issue_comment_url` | `string` | Yes | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `string` | Yes | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `string` | Yes | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `string` | Yes | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `string` | Yes | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `string` | Yes | The API URL to get information about the languages of the repository. |
| `merges_url` | `string` | Yes | The API URL to merge branches in the repository. |
| `milestones_url` | `string` | Yes | A template for the API URL to get information about milestones of the repository. |
| `name` | `string` | Yes | The name of the repository. |
| `node_id` | `string` | Yes | The GraphQL identifier of the repository. |
| `notifications_url` | `string` | Yes | A template for the API URL to get information about notifications on the repository. |
| `owner` | `table` | Yes | A GitHub user. |
| `private` | `boolean` | Yes | Whether the repository is private. |
| `pulls_url` | `string` | Yes | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `string` | Yes | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `string` | Yes | The API URL to list the stargazers on the repository. |
| `statuses_url` | `string` | Yes | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `string` | Yes | The API URL to list the subscribers on the repository. |
| `subscription_url` | `string` | Yes | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `string` | Yes | The API URL to get information about tags on the repository. |
| `teams_url` | `string` | Yes | The API URL to list the teams on the repository. |
| `trees_url` | `string` | Yes | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `string` | Yes | The URL to get more information about the repository from the GitHub API. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeScanningVariantAnalysisRepoTask():load({ codeql_variant_analysis_id = 1, owner = "owner", repo = "repo", repo_name = "repo_name", repo_owner = "repo_owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeSecurityEntity

```lua
local code_security = client:CodeSecurity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `table` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `table` | No | Feature options for code scanning |
| `created_at` | `string` | No |  |
| `default_for_new_repos` | `string` | No | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `table` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `number` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `table` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `target_type` | `string` | No | The type of the code security configuration. |
| `updated_at` | `string` | No |  |
| `url` | `string` | No | The URL of the configuration |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CodeSecurity():remove({ configuration_id = 1, enterprise = "enterprise" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CodeSecurity():update({
  configuration_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeSecurityConfigurationEntity

```lua
local code_security_configuration = client:CodeSecurityConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `table` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `table` | No | Feature options for code scanning |
| `code_security` | `string` | No | The enablement status of GitHub Code Security features. |
| `created_at` | `string` | No |  |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `table` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `number` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `scope` | `string` | Yes | The type of repositories to attach the configuration to. |
| `secret_protection` | `string` | No | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `table` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `table` | No | An array of repository IDs to attach the configuration to. |
| `target_type` | `string` | No | The type of the code security configuration. |
| `updated_at` | `string` | No |  |
| `url` | `string` | No | The URL of the configuration |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `advanced_security` | - | - | - | - |
| `code_scanning_default_setup` | - | - | - | - |
| `code_scanning_default_setup_options` | - | - | - | - |
| `code_scanning_delegated_alert_dismissal` | - | - | - | - |
| `code_scanning_options` | - | - | - | - |
| `code_security` | - | - | - | - |
| `created_at` | - | - | - | - |
| `dependabot_alerts` | - | - | - | - |
| `dependabot_security_updates` | - | - | - | - |
| `dependency_graph` | - | - | - | - |
| `dependency_graph_autosubmit_action` | - | - | - | - |
| `dependency_graph_autosubmit_action_options` | - | - | - | - |
| `description` | - | - | Yes | - |
| `enforcement` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | Yes | - |
| `private_vulnerability_reporting` | - | - | - | - |
| `scope` | - | - | - | - |
| `secret_protection` | - | - | - | - |
| `secret_scanning` | - | - | - | - |
| `secret_scanning_delegated_alert_dismissal` | - | - | - | - |
| `secret_scanning_delegated_bypass` | - | - | - | - |
| `secret_scanning_delegated_bypass_options` | - | - | - | - |
| `secret_scanning_generic_secrets` | - | - | - | - |
| `secret_scanning_non_provider_patterns` | - | - | - | - |
| `secret_scanning_push_protection` | - | - | - | - |
| `secret_scanning_validity_checks` | - | - | - | - |
| `selected_repository_ids` | - | - | - | - |
| `target_type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CodeSecurityConfiguration():create({
  enterprise = --[[ string ]],
  scope = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeSecurityConfiguration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CodeSecurityConfiguration():load({ id = 1, enterprise = "enterprise" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CodeSecurityConfiguration():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeSecurityConfigurationRepositoryEntity

```lua
local code_security_configuration_repository = client:CodeSecurityConfigurationRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `repository` | `table` | Yes | A GitHub repository. |
| `status` | `string` | No | The attachment status of the code security configuration on the repository. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeSecurityConfigurationRepository():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeSecurityDefaultConfigurationEntity

```lua
local code_security_default_configuration = client:CodeSecurityDefaultConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `table` | No | A code security configuration |
| `default_for_new_repos` | `any` | No | The visibility of newly created repositories for which the code security configuration will be applied to by default |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeSecurityDefaultConfiguration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityDefaultConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodeownersErrorEntity

```lua
local codeowners_error = client:CodeownersError(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column` | `number` | Yes | The column number where this errors occurs. |
| `kind` | `string` | Yes | The type of error. |
| `line` | `number` | Yes | The line number where this errors occurs. |
| `message` | `string` | Yes | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `string` | Yes | The path of the file where the error occured. |
| `source` | `string` | No | The contents of the line where the error occurs. |
| `suggestion` | `string` | No | Suggested action to fix the error. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CodeownersError():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeownersErrorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CodespaceEntity

```lua
local codespace = client:Codespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `boolean` | Yes | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `assignees_url` | `string` | Yes |  |
| `billable_owner` | `table` | Yes | A GitHub user. |
| `blobs_url` | `string` | Yes |  |
| `branch` | `string` | No | Name of the exported branch |
| `branches_url` | `string` | Yes |  |
| `client_ip` | `string` | No | IP for location auto-detection when proxying a request |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | No | Completion time of the last export operation |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpus` | `number` | Yes | How many cores are available to the codespace. |
| `created_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `defaults` | `table` | Yes |  |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `devcontainer_path` | `string` | No | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `boolean` | No |  |
| `display_name` | `string` | No | Display name for this codespace. |
| `downloads_url` | `string` | Yes |  |
| `encrypted_value` | `string` | No | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `string` | Yes | UUID identifying this codespace's environment. |
| `events_url` | `string` | Yes |  |
| `export_url` | `string` | No | Url for fetching export details |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | No |  |
| `forks_count` | `number` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `geo` | `string` | No | The geographic area for this codespace. |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_status` | `table` | Yes | Details about the codespace's git repository. |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | No |  |
| `has_issues` | `boolean` | No |  |
| `has_pages` | `boolean` | No |  |
| `has_projects` | `boolean` | No |  |
| `has_wiki` | `boolean` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No | Web url for the exported branch |
| `id` | `string` | No | Id for the export details |
| `idle_timeout_minutes` | `number` | Yes | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `string` | No | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `boolean` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_known_stop_notice` | `string` | No | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `last_used_at` | `string` | Yes | Last known time this codespace was started. |
| `license` | `table` | No |  |
| `location` | `string` | Yes | The initally assigned location of a new codespace. |
| `machine` | `table` | Yes | A description of the machine powering a codespace. |
| `machines_url` | `string` | Yes | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `number` | Yes | How much memory is available to the codespace. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `multi_repo_permissions_opt_out` | `boolean` | No | Whether to authorize requested permissions from devcontainer.json |
| `name` | `string` | Yes | The name of the secret. |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `operating_system` | `string` | Yes | The operating system of the machine. |
| `owner` | `table` | Yes | A GitHub user. |
| `path` | `string` | Yes |  |
| `pending_operation` | `boolean` | No | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | No | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `table` | No |  |
| `prebuild` | `boolean` | Yes | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Yes | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `boolean` | No | Whether the new repository should be private. |
| `publish_url` | `string` | No | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | Yes | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` | No |  |
| `recent_folders` | `table` | Yes | Recently opened folders inside the codespace. |
| `ref` | `string` | No | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |
| `retention_expires_at` | `string` | No | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `number` | No | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` | No |  |
| `runtime_constraints` | `table` | No |  |
| `security_and_analysis` | `table` | No |  |
| `selected_repositories_url` | `string` | No | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `table` | No | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `table` | Yes | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `string` | No | Git commit SHA of the exported branch |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `number` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `start_url` | `string` | Yes | API URL to start this codespace. |
| `state` | `string` | No | State of the latest export |
| `statuses_url` | `string` | Yes |  |
| `stop_url` | `string` | Yes | API URL to stop this codespace. |
| `storage_in_bytes` | `number` | Yes | How much storage is available to the codespace. |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template` | `string` | No |  |
| `title` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | No | API URL for this codespace. |
| `visibility` | `string` | Yes | The type of repositories in the organization that the secret is visible to |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No |  |
| `web_url` | `string` | Yes | URL to access this codespace on the web. |
| `working_directory` | `string` | No | Working directory for this codespace |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accepted` | - | - | - | - | - |
| `allow_forking` | - | - | - | - | - |
| `archive_url` | - | - | - | - | - |
| `archived` | - | - | - | - | - |
| `assignees_url` | - | - | - | - | - |
| `billable_owner` | - | - | Yes | - | - |
| `blobs_url` | - | - | - | - | - |
| `branch` | - | - | - | - | - |
| `branches_url` | - | - | - | - | - |
| `client_ip` | - | - | - | - | - |
| `clone_url` | - | - | - | - | - |
| `code_of_conduct` | - | - | - | - | - |
| `collaborators_url` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `compare_url` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `contents_url` | - | - | - | - | - |
| `contributors_url` | - | - | - | - | - |
| `cpus` | - | - | - | - | - |
| `created_at` | Yes | Yes | Yes | - | - |
| `custom_properties` | - | - | - | - | - |
| `default_branch` | - | - | - | - | - |
| `defaults` | - | - | - | - | - |
| `delete_branch_on_merge` | - | - | - | - | - |
| `deployments_url` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `devcontainer_path` | - | - | - | - | - |
| `disabled` | - | - | - | - | - |
| `display_name` | - | Yes | - | - | - |
| `downloads_url` | - | - | - | - | - |
| `encrypted_value` | - | - | - | - | - |
| `environment_id` | - | - | Yes | - | - |
| `events_url` | - | - | - | - | - |
| `export_url` | - | - | - | - | - |
| `fork` | - | - | - | - | - |
| `forks` | - | - | - | - | - |
| `forks_count` | - | - | - | - | - |
| `forks_url` | - | - | - | - | - |
| `full_name` | - | - | - | - | - |
| `geo` | - | - | - | - | - |
| `git_commits_url` | - | - | - | - | - |
| `git_refs_url` | - | - | - | - | - |
| `git_status` | - | - | Yes | - | - |
| `git_tags_url` | - | - | - | - | - |
| `git_url` | - | - | - | - | - |
| `has_discussions` | - | - | - | - | - |
| `has_downloads` | - | - | - | - | - |
| `has_issues` | - | - | - | - | - |
| `has_pages` | - | - | - | - | - |
| `has_projects` | - | - | - | - | - |
| `has_wiki` | - | - | - | - | - |
| `homepage` | - | - | - | - | - |
| `hooks_url` | - | - | - | - | - |
| `html_url` | - | Yes | - | - | - |
| `id` | Yes | Yes | Yes | - | - |
| `idle_timeout_minutes` | - | - | Yes | - | - |
| `idle_timeout_notice` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `issue_comment_url` | - | - | - | - | - |
| `issue_events_url` | - | - | - | - | - |
| `issues_url` | - | - | - | - | - |
| `key` | - | - | - | - | - |
| `key_id` | - | - | - | Yes | - |
| `keys_url` | - | - | - | - | - |
| `labels_url` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `languages_url` | - | - | - | - | - |
| `last_known_stop_notice` | - | - | - | - | - |
| `last_used_at` | - | - | Yes | - | - |
| `license` | - | - | - | - | - |
| `location` | - | - | Yes | - | - |
| `machine` | - | - | Yes | - | - |
| `machines_url` | - | - | Yes | - | - |
| `memory_in_bytes` | - | - | - | - | - |
| `merges_url` | - | - | - | - | - |
| `milestones_url` | - | - | - | - | - |
| `mirror_url` | - | - | - | - | - |
| `multi_repo_permissions_opt_out` | - | - | - | - | - |
| `name` | - | Yes | Yes | - | - |
| `network_count` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `notifications_url` | - | - | - | - | - |
| `open_issues` | - | - | - | - | - |
| `open_issues_count` | - | - | - | - | - |
| `operating_system` | - | - | - | - | - |
| `owner` | - | - | Yes | - | - |
| `path` | - | - | - | - | - |
| `pending_operation` | - | - | - | - | - |
| `pending_operation_disabled_reason` | - | - | - | - | - |
| `permissions` | - | - | - | - | - |
| `prebuild` | - | - | Yes | - | - |
| `prebuild_availability` | - | - | - | - | - |
| `private` | - | Yes | - | - | - |
| `publish_url` | - | - | - | - | - |
| `pulls_url` | - | - | Yes | - | - |
| `pushed_at` | - | - | - | - | - |
| `recent_folders` | - | - | Yes | - | - |
| `ref` | - | - | - | - | - |
| `releases_url` | - | - | - | - | - |
| `repository` | - | - | Yes | - | - |
| `retention_expires_at` | - | - | - | - | - |
| `retention_period_minutes` | - | - | - | - | - |
| `role_name` | - | - | - | - | - |
| `runtime_constraints` | - | - | - | - | - |
| `security_and_analysis` | - | - | - | - | - |
| `selected_repositories_url` | Yes | Yes | - | - | - |
| `selected_repository_ids` | - | - | - | Yes | - |
| `selected_usernames` | - | - | - | Yes | - |
| `sha` | - | - | - | - | - |
| `size` | - | - | - | - | - |
| `ssh_url` | - | - | - | - | - |
| `stargazers_count` | - | - | - | - | - |
| `stargazers_url` | - | - | - | - | - |
| `start_url` | - | - | Yes | - | - |
| `state` | Yes | Yes | Yes | - | - |
| `statuses_url` | - | - | - | - | - |
| `stop_url` | - | - | Yes | - | - |
| `storage_in_bytes` | - | - | - | - | - |
| `subscribers_count` | - | - | - | - | - |
| `subscribers_url` | - | - | - | - | - |
| `subscription_url` | - | - | - | - | - |
| `svn_url` | - | - | - | - | - |
| `tags_url` | - | - | - | - | - |
| `teams_url` | - | - | - | - | - |
| `temp_clone_token` | - | - | - | - | - |
| `template` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `topics` | - | - | - | - | - |
| `trees_url` | - | - | - | - | - |
| `updated_at` | - | Yes | Yes | - | - |
| `url` | Yes | Yes | Yes | - | - |
| `visibility` | - | Yes | - | - | - |
| `watchers` | - | - | - | - | - |
| `watchers_count` | - | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |
| `web_url` | - | - | Yes | - | - |
| `working_directory` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Codespace():create({
  accepted = --[[ boolean ]],
  archive_url = --[[ string ]],
  assignees_url = --[[ string ]],
  billable_owner = --[[ table ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  cpus = --[[ number ]],
  created_at = --[[ string ]],
  defaults = --[[ table ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  downloads_url = --[[ string ]],
  environment_id = --[[ string ]],
  events_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_status = --[[ table ]],
  git_tags_url = --[[ string ]],
  hooks_url = --[[ string ]],
  idle_timeout_minutes = --[[ number ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  key = --[[ string ]],
  key_id = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  languages_url = --[[ string ]],
  last_used_at = --[[ string ]],
  location = --[[ string ]],
  machine = --[[ table ]],
  machines_url = --[[ string ]],
  memory_in_bytes = --[[ number ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  operating_system = --[[ string ]],
  owner = --[[ table ]],
  path = --[[ string ]],
  prebuild = --[[ boolean ]],
  prebuild_availability = --[[ string ]],
  pulls_url = --[[ string ]],
  recent_folders = --[[ table ]],
  releases_url = --[[ string ]],
  repository = --[[ table ]],
  selected_usernames = --[[ table ]],
  stargazers_url = --[[ string ]],
  start_url = --[[ string ]],
  statuses_url = --[[ string ]],
  stop_url = --[[ string ]],
  storage_in_bytes = --[[ number ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  trees_url = --[[ string ]],
  updated_at = --[[ string ]],
  visibility = --[[ string ]],
  web_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Codespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Codespace():load({ id = "codespace_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Codespace():remove({ id = "codespace_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Codespace():update({
  id = "codespace_id",
  secret_name = "secret_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollaboratorEntity

```lua
local collaborator = client:Collaborator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `permissions` | `table` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `role_name` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Collaborator():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollaboratorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CombinedBillingUsageEntity

```lua
local combined_billing_usage = client:CombinedBillingUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_left_in_billing_cycle` | `number` | Yes | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `number` | Yes | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `number` | Yes | Estimated sum of free and paid storage space (GB) used in billing cycle. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CombinedBillingUsage():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CombinedBillingUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CombinedCommitStatusEntity

```lua
local combined_commit_status = client:CombinedCommitStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `required` | `boolean` | No |  |
| `state` | `string` | Yes |  |
| `target_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CombinedCommitStatus():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CombinedCommitStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommitEntity

```lua
local commit = client:Commit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes |  |
| `base` | `string` | Yes | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` | Yes |  |
| `commit` | `table` | Yes |  |
| `commit_message` | `string` | No | Commit message to use for the merge commit. |
| `committer` | `any` | Yes |  |
| `files` | `table` | No |  |
| `head` | `string` | Yes | The head to merge. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `parents` | `table` | Yes |  |
| `sha` | `string` | Yes |  |
| `stats` | `table` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Commit():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  author = --[[ any ]],
  base = --[[ string ]],
  comments_url = --[[ string ]],
  commit = --[[ table ]],
  committer = --[[ any ]],
  head = --[[ string ]],
  html_url = --[[ string ]],
  node_id = --[[ string ]],
  parents = --[[ table ]],
  sha = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Commit():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Commit():load({ id = "commit_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommitActivityEntity

```lua
local commit_activity = client:CommitActivity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `table` | Yes |  |
| `total` | `number` | Yes |  |
| `week` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CommitActivity():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommitCommentEntity

```lua
local commit_comment = client:CommitComment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The contents of the comment. |
| `commit_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `line` | `number` | Yes | **Closing down notice**. |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes | Relative path of the file to comment on. |
| `position` | `number` | Yes | Line index in the diff to comment on. |
| `reactions` | `table` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `author_association` | - | - | - | - |
| `body` | - | - | - | - |
| `commit_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | - | - |
| `line` | - | - | Yes | - |
| `node_id` | - | - | - | - |
| `path` | - | - | Yes | - |
| `position` | - | - | Yes | - |
| `reactions` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `user` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CommitComment():create({
  commit_sha = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  author_association = --[[ string ]],
  body = --[[ string ]],
  commit_id = --[[ string ]],
  created_at = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  line = --[[ number ]],
  node_id = --[[ string ]],
  path = --[[ string ]],
  position = --[[ number ]],
  reactions = --[[ table ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CommitComment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CommitComment():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CommitComment():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommitComparisonEntity

```lua
local commit_comparison = client:CommitComparison(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ahead_by` | `number` | Yes |  |
| `base_commit` | `table` | Yes | Commit |
| `behind_by` | `number` | Yes |  |
| `commits` | `table` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `files` | `table` | No |  |
| `html_url` | `string` | Yes |  |
| `merge_base_commit` | `table` | Yes | Commit |
| `patch_url` | `string` | Yes |  |
| `permalink_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `total_commits` | `number` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CommitComparison():load({ basehead = "basehead", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitComparisonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommunityProfileEntity

```lua
local community_profile = client:CommunityProfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code_of_conduct` | `table` | Yes | Code of Conduct Simple |
| `code_of_conduct_file` | `table` | Yes |  |
| `contributing` | `table` | Yes |  |
| `issue_template` | `table` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `pull_request_template` | `table` | Yes |  |
| `readme` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CommunityProfile():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommunityProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentFileEntity

```lua
local content_file = client:ContentFile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `git` | `string` | Yes |  |
| `html` | `string` | Yes |  |
| `self` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContentFile():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentTrafficEntity

```lua
local content_traffic = client:ContentTraffic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `path` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContentTraffic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentTrafficEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContributorEntity

```lua
local contributor = client:Contributor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | Yes | A GitHub user. |
| `avatar_url` | `string` | No |  |
| `contributions` | `number` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | No |  |
| `followers_url` | `string` | No |  |
| `following_url` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `gravatar_id` | `string` | No |  |
| `html_url` | `string` | No |  |
| `id` | `number` | No |  |
| `login` | `string` | No |  |
| `name` | `string` | No |  |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `received_events_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `boolean` | No |  |
| `starred_url` | `string` | No |  |
| `subscriptions_url` | `string` | No |  |
| `total` | `number` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `weeks` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Contributor():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CopilotEntity

```lua
local copilot = client:Copilot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | Yes | A GitHub user. |
| `assigning_team` | `any` | No | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Yes | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | No | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | No | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | No | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `table` | Yes | A GitHub organization. |
| `pending_cancellation_date` | `string` | No | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | No | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `table` | Yes | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `table` | Yes | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | No | **Closing down notice:** This field is no longer relevant and is closing down. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Copilot():create({
  org_id = --[[ string ]],
  assignee = --[[ table ]],
  created_at = --[[ string ]],
  organization = --[[ table ]],
  selected_teams = --[[ table ]],
  selected_usernames = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Copilot():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Copilot():load({ org_id = "org_id", username = "username" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Copilot():remove({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CopilotOrganizationDetailEntity

```lua
local copilot_organization_detail = client:CopilotOrganizationDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_this_cycle` | `number` | No | The number of seats that have used Copilot during the current billing cycle. |
| `added_this_cycle` | `number` | No | Seats added during the current billing cycle. |
| `inactive_this_cycle` | `number` | No | The number of seats that have not used Copilot during the current billing cycle. |
| `pending_cancellation` | `number` | No | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `pending_invitation` | `number` | No | The number of users who have been invited to receive a Copilot seat through this organization. |
| `total` | `number` | No | The total number of seats being billed for the organization as of the current billing cycle. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CopilotOrganizationDetail():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotOrganizationDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CopilotUsageMetricsDayEntity

```lua
local copilot_usage_metrics_day = client:CopilotUsageMetricsDay(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copilot_dotcom_chat` | `table` | No | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `table` | No | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `table` | No | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `table` | No | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | Yes | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `number` | No | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `number` | No | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CopilotUsageMetricsDay():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotUsageMetricsDayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CredentialEntity

```lua
local credential = client:Credential(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `table` | Yes | A list of credentials to be revoked, up to 1000 per request. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Credential():create({
  credentials = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPropertyEntity

```lua
local custom_property = client:CustomProperty(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_values` | `table` | No | An ordered list of the allowed values of the property. |
| `default_value` | `any` | No | Default value of the property |
| `description` | `string` | No | Short description of the property |
| `properties` | `table` | Yes | The array of custom properties to create or update. |
| `property_name` | `string` | Yes | The name of the property |
| `required` | `boolean` | No | Whether the property is required. |
| `source_type` | `string` | No | The source type of the property |
| `url` | `string` | No | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | Yes | The type of the value for the property |
| `values_editable_by` | `string` | No | Who can edit the values of the property |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomProperty():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomProperty():load({ custom_property_name = "custom_property_name", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomProperty():update({
  custom_property_name = "custom_property_name",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPropertyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPropertyValueEntity

```lua
local custom_property_value = client:CustomPropertyValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `property_name` | `string` | Yes | The name of the property |
| `value` | `any` | Yes | The value assigned to the property |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomPropertyValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPropertyValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotEntity

```lua
local dependabot = client:Dependabot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `assignees_url` | `string` | Yes |  |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `default_level` | `string` | Yes | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | No |  |
| `forks_count` | `number` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | No |  |
| `has_issues` | `boolean` | No |  |
| `has_pages` | `boolean` | No |  |
| `has_projects` | `boolean` | No |  |
| `has_wiki` | `boolean` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `is_template` | `boolean` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | No |  |
| `login` | `string` | Yes |  |
| `members_url` | `string` | Yes |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | No |  |
| `private` | `boolean` | Yes |  |
| `public_members_url` | `string` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository_ids_to_add` | `table` | No | List of repository IDs to add. |
| `repository_ids_to_remove` | `table` | No | List of repository IDs to remove. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `table` | No |  |
| `selected_repositories_url` | `string` | No |  |
| `selected_repository_ids` | `table` | Yes | An array of repository ids that can access the organization secret. |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `number` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No | Visibility of a secret |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No |  |

### Field Usage by Operation

| Field | list | update | remove |
| --- | --- | --- | --- |
| `allow_forking` | - | - | - |
| `archive_url` | - | - | - |
| `archived` | - | - | - |
| `assignees_url` | - | - | - |
| `avatar_url` | - | - | - |
| `blobs_url` | - | - | - |
| `branches_url` | - | - | - |
| `clone_url` | - | - | - |
| `code_of_conduct` | - | - | - |
| `collaborators_url` | - | - | - |
| `comments_url` | - | - | - |
| `commits_url` | - | - | - |
| `compare_url` | - | - | - |
| `contents_url` | - | - | - |
| `contributors_url` | - | - | - |
| `created_at` | Yes | - | - |
| `custom_properties` | - | - | - |
| `default_branch` | - | - | - |
| `default_level` | - | - | - |
| `delete_branch_on_merge` | - | - | - |
| `deployments_url` | - | - | - |
| `description` | - | - | - |
| `disabled` | - | - | - |
| `downloads_url` | - | - | - |
| `events_url` | - | - | - |
| `fork` | - | - | - |
| `forks` | - | - | - |
| `forks_count` | - | - | - |
| `forks_url` | - | - | - |
| `full_name` | - | - | - |
| `git_commits_url` | - | - | - |
| `git_refs_url` | - | - | - |
| `git_tags_url` | - | - | - |
| `git_url` | - | - | - |
| `has_discussions` | - | - | - |
| `has_downloads` | - | - | - |
| `has_issues` | - | - | - |
| `has_pages` | - | - | - |
| `has_projects` | - | - | - |
| `has_wiki` | - | - | - |
| `homepage` | - | - | - |
| `hooks_url` | - | - | - |
| `html_url` | - | - | - |
| `id` | - | - | - |
| `is_template` | - | - | - |
| `issue_comment_url` | - | - | - |
| `issue_events_url` | - | - | - |
| `issues_url` | - | - | - |
| `keys_url` | - | - | - |
| `labels_url` | - | - | - |
| `language` | - | - | - |
| `languages_url` | - | - | - |
| `license` | - | - | - |
| `login` | - | - | - |
| `members_url` | - | - | - |
| `merges_url` | - | - | - |
| `milestones_url` | - | - | - |
| `mirror_url` | - | - | - |
| `name` | - | - | - |
| `network_count` | - | - | - |
| `node_id` | - | - | - |
| `notifications_url` | - | - | - |
| `open_issues` | - | - | - |
| `open_issues_count` | - | - | - |
| `owner` | - | - | - |
| `permissions` | - | - | - |
| `private` | - | - | - |
| `public_members_url` | - | - | - |
| `pulls_url` | - | - | - |
| `pushed_at` | - | - | - |
| `releases_url` | - | - | - |
| `repos_url` | - | - | - |
| `repository_ids_to_add` | - | - | - |
| `repository_ids_to_remove` | - | - | - |
| `role_name` | - | - | - |
| `security_and_analysis` | - | - | - |
| `selected_repositories_url` | - | - | - |
| `selected_repository_ids` | - | - | - |
| `size` | - | - | - |
| `ssh_url` | - | - | - |
| `stargazers_count` | - | - | - |
| `stargazers_url` | - | - | - |
| `statuses_url` | - | - | - |
| `subscribers_count` | - | - | - |
| `subscribers_url` | - | - | - |
| `subscription_url` | - | - | - |
| `svn_url` | - | - | - |
| `tags_url` | - | - | - |
| `teams_url` | - | - | - |
| `temp_clone_token` | - | - | - |
| `topics` | - | - | - |
| `trees_url` | - | - | - |
| `updated_at` | Yes | - | - |
| `url` | - | - | - |
| `visibility` | Yes | - | - |
| `watchers` | - | - | - |
| `watchers_count` | - | - | - |
| `web_commit_signoff_required` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Dependabot():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Dependabot():remove({ org_id = "org_id", secret_name = "secret_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Dependabot():update({
  org_id = "org_id",
  repository_id = 1,
  secret_id = "secret_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotAlertEntity

```lua
local dependabot_alert = client:DependabotAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `table` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `table` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `number` | `number` | Yes | The security alert number. |
| `security_advisory` | `table` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `table` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | Yes | The state of the Dependabot alert. |
| `updated_at` | `string` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `auto_dismissed_at` | - | - | - |
| `created_at` | - | - | - |
| `dependency` | - | - | - |
| `dismissed_at` | - | - | - |
| `dismissed_by` | - | - | - |
| `dismissed_comment` | - | - | Yes |
| `dismissed_reason` | - | - | Yes |
| `fixed_at` | - | - | - |
| `html_url` | - | - | - |
| `id` | - | - | - |
| `number` | - | - | - |
| `security_advisory` | - | - | - |
| `security_vulnerability` | - | - | - |
| `state` | - | - | - |
| `updated_at` | - | - | - |
| `url` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DependabotAlert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependabotAlert():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DependabotAlert():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotAlertWithRepositoryEntity

```lua
local dependabot_alert_with_repository = client:DependabotAlertWithRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `table` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `table` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `number` | `number` | Yes | The security alert number. |
| `repository` | `table` | Yes | A GitHub repository. |
| `security_advisory` | `table` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `table` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | Yes | The state of the Dependabot alert. |
| `updated_at` | `string` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DependabotAlertWithRepository():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotAlertWithRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotPublicKeyEntity

```lua
local dependabot_public_key = client:DependabotPublicKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependabotPublicKey():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotPublicKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotRepositoryAccessDetailEntity

```lua
local dependabot_repository_access_detail = client:DependabotRepositoryAccessDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archive_url` | `string` | Yes | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `string` | Yes | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `string` | Yes | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `string` | Yes | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `string` | Yes | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `string` | Yes | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `string` | Yes | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `string` | Yes | A template for the API URL to compare two commits or refs. |
| `contents_url` | `string` | Yes | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `string` | Yes | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `string` | Yes | The API URL to list the deployments of the repository. |
| `description` | `string` | Yes | The repository description. |
| `downloads_url` | `string` | Yes | The API URL to list the downloads on the repository. |
| `events_url` | `string` | Yes | The API URL to list the events of the repository. |
| `fork` | `boolean` | Yes | Whether the repository is a fork. |
| `forks_url` | `string` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `string` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `string` | Yes | The API URL to list the hooks on the repository. |
| `html_url` | `string` | Yes | The URL to view the repository on GitHub.com. |
| `id` | `number` | Yes | A unique identifier of the repository. |
| `issue_comment_url` | `string` | Yes | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `string` | Yes | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `string` | Yes | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `string` | Yes | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `string` | Yes | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `string` | Yes | The API URL to get information about the languages of the repository. |
| `merges_url` | `string` | Yes | The API URL to merge branches in the repository. |
| `milestones_url` | `string` | Yes | A template for the API URL to get information about milestones of the repository. |
| `name` | `string` | Yes | The name of the repository. |
| `node_id` | `string` | Yes | The GraphQL identifier of the repository. |
| `notifications_url` | `string` | Yes | A template for the API URL to get information about notifications on the repository. |
| `owner` | `table` | Yes | A GitHub user. |
| `private` | `boolean` | Yes | Whether the repository is private. |
| `pulls_url` | `string` | Yes | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `string` | Yes | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `string` | Yes | The API URL to list the stargazers on the repository. |
| `statuses_url` | `string` | Yes | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `string` | Yes | The API URL to list the subscribers on the repository. |
| `subscription_url` | `string` | Yes | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `string` | Yes | The API URL to get information about tags on the repository. |
| `teams_url` | `string` | Yes | The API URL to list the teams on the repository. |
| `trees_url` | `string` | Yes | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `string` | Yes | The URL to get more information about the repository from the GitHub API. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DependabotRepositoryAccessDetail():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotRepositoryAccessDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependabotSecretEntity

```lua
local dependabot_secret = client:DependabotSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependabotSecret():load({ id = "dependabot_secret_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependencyGraphEntity

```lua
local dependency_graph = client:DependencyGraph(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detector` | `table` | Yes | A description of the detector used. |
| `job` | `table` | Yes |  |
| `manifests` | `table` | No | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `table` | No | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | Yes | The repository branch that triggered this snapshot. |
| `scanned` | `string` | Yes | The time at which the snapshot was scanned. |
| `sha` | `string` | Yes | The commit SHA associated with this dependency snapshot. |
| `version` | `number` | Yes | The version of the repository snapshot submission. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DependencyGraph():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  detector = --[[ table ]],
  job = --[[ table ]],
  ref = --[[ string ]],
  scanned = --[[ string ]],
  sha = --[[ string ]],
  version = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependencyGraphDiffEntity

```lua
local dependency_graph_diff = client:DependencyGraphDiff(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_type` | `string` | Yes |  |
| `ecosystem` | `string` | Yes |  |
| `license` | `string` | Yes |  |
| `manifest` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `package_url` | `string` | Yes |  |
| `scope` | `string` | Yes | Where the dependency is utilized. |
| `source_repository_url` | `string` | Yes |  |
| `version` | `string` | Yes |  |
| `vulnerabilities` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependencyGraphDiff():load({ basehead = "basehead", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphDiffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependencyGraphSpdxSbomEntity

```lua
local dependency_graph_spdx_sbom = client:DependencyGraphSpdxSbom(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `SPDXID` | `string` | Yes | The SPDX identifier for the SPDX document. |
| `comment` | `string` | No | An optional comment about the SPDX document. |
| `creationInfo` | `table` | Yes |  |
| `dataLicense` | `string` | Yes | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | Yes | The namespace for the SPDX document. |
| `name` | `string` | Yes | The name of the SPDX document. |
| `packages` | `table` | Yes |  |
| `relationships` | `table` | Yes |  |
| `spdxVersion` | `string` | Yes | The version of the SPDX specification that this document conforms to. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependencyGraphSpdxSbom():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphSpdxSbomEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeployKeyEntity

```lua
local deploy_key = client:DeployKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_by` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enabled` | `boolean` | No |  |
| `id` | `number` | Yes |  |
| `key` | `string` | Yes | The contents of the key. |
| `last_used` | `string` | No |  |
| `read_only` | `boolean` | Yes | If `true`, the key will only be able to read repository contents. |
| `title` | `string` | Yes | A name for the key. |
| `url` | `string` | Yes |  |
| `verified` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `added_by` | - | - | - |
| `created_at` | - | - | - |
| `enabled` | - | - | - |
| `id` | - | - | - |
| `key` | - | - | - |
| `last_used` | - | - | - |
| `read_only` | - | - | Yes |
| `title` | - | - | Yes |
| `url` | - | - | - |
| `verified` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeployKey():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ number ]],
  key = --[[ string ]],
  read_only = --[[ boolean ]],
  title = --[[ string ]],
  url = --[[ string ]],
  verified = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DeployKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeployKey():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentEntity

```lua
local deployment = client:Deployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_merge` | `boolean` | No | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | Yes | A comment to accompany the deployment review |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `description` | `string` | Yes | Short description of the deployment. |
| `environment` | `string` | Yes | Name for the target deployment environment. |
| `environment_ids` | `table` | Yes | The list of environment ids to approve or reject |
| `id` | `number` | Yes | Unique identifier of the deployment |
| `node_id` | `string` | Yes |  |
| `original_environment` | `string` | No |  |
| `payload` | `any` | Yes |  |
| `performed_via_github_app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `boolean` | No | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | Yes | The ref to deploy. |
| `repository_url` | `string` | Yes |  |
| `required_contexts` | `table` | No | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `string` | Yes |  |
| `state` | `string` | Yes | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `string` | Yes |  |
| `task` | `string` | Yes | Parameter to specify a task to execute |
| `transient_environment` | `boolean` | No | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `auto_merge` | - | - | - |
| `comment` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `description` | - | - | Yes |
| `environment` | - | - | Yes |
| `environment_ids` | - | - | - |
| `id` | - | - | - |
| `node_id` | - | - | - |
| `original_environment` | - | - | - |
| `payload` | - | - | Yes |
| `performed_via_github_app` | - | - | - |
| `production_environment` | - | - | - |
| `ref` | - | - | - |
| `repository_url` | - | - | - |
| `required_contexts` | - | - | - |
| `sha` | - | - | - |
| `state` | - | - | - |
| `statuses_url` | - | - | - |
| `task` | - | - | Yes |
| `transient_environment` | - | - | - |
| `updated_at` | - | - | - |
| `url` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Deployment():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  comment = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  description = --[[ string ]],
  environment = --[[ string ]],
  environment_ids = --[[ table ]],
  id = --[[ number ]],
  node_id = --[[ string ]],
  payload = --[[ any ]],
  performed_via_github_app = --[[ table ]],
  ref = --[[ string ]],
  repository_url = --[[ string ]],
  sha = --[[ string ]],
  state = --[[ string ]],
  statuses_url = --[[ string ]],
  task = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Deployment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Deployment():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentBranchPolicyEntity

```lua
local deployment_branch_policy = client:DeploymentBranchPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No | The unique identifier of the branch or tag policy. |
| `name` | `string` | No | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `string` | No |  |
| `type` | `string` | No | Whether this rule targets a branch or tag. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `name` | - | Yes | Yes |
| `node_id` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeploymentBranchPolicy():create({
  environment_name = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeploymentBranchPolicy():load({ id = 1, environment_id = "environment_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DeploymentBranchPolicy():update({
  id = 1,
  environment_id = "environment_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentBranchPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentProtectionRuleEntity

```lua
local deployment_protection_rule = client:DeploymentProtectionRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `number` | No | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `string` | Yes | The URL for the endpoint to get details about the app. |
| `node_id` | `string` | Yes | The node ID for the deployment protection rule integration. |
| `slug` | `string` | Yes | The slugified name of the deployment protection rule integration. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeploymentProtectionRule():create({
  environment_name = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  id = --[[ number ]],
  integration_url = --[[ string ]],
  node_id = --[[ string ]],
  slug = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeploymentProtectionRule():load({ id = 1, environment_id = "environment_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentProtectionRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeploymentStatusEntity

```lua
local deployment_status = client:DeploymentStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_inactive` | `boolean` | No | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `deployment_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the status. |
| `environment` | `string` | No | The environment of the deployment that the status is for. |
| `environment_url` | `string` | No | The URL for accessing your environment. |
| `id` | `number` | Yes |  |
| `log_url` | `string` | No | The URL to associate with this status. |
| `node_id` | `string` | Yes |  |
| `performed_via_github_app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `string` | Yes |  |
| `state` | `string` | Yes | The state of the status. |
| `target_url` | `string` | Yes | Closing down notice: the URL to associate with this status. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `auto_inactive` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `deployment_url` | - | - | - |
| `description` | - | - | Yes |
| `environment` | - | - | - |
| `environment_url` | - | - | - |
| `id` | - | - | - |
| `log_url` | - | - | - |
| `node_id` | - | - | - |
| `performed_via_github_app` | - | - | - |
| `repository_url` | - | - | - |
| `state` | - | - | - |
| `target_url` | - | - | Yes |
| `updated_at` | - | - | - |
| `url` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DeploymentStatus():create({
  id = --[[ number ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  deployment_url = --[[ string ]],
  description = --[[ string ]],
  node_id = --[[ string ]],
  performed_via_github_app = --[[ table ]],
  repository_url = --[[ string ]],
  state = --[[ string ]],
  target_url = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DeploymentStatus():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DeploymentStatus():load({ id = 1, deployment_id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DiffEntryEntity

```lua
local diff_entry = client:DiffEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `number` | Yes |  |
| `blob_url` | `string` | Yes |  |
| `changes` | `number` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `deletions` | `number` | Yes |  |
| `filename` | `string` | Yes |  |
| `patch` | `string` | No |  |
| `previous_filename` | `string` | No |  |
| `raw_url` | `string` | Yes |  |
| `sha` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DiffEntry():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailEntity

```lua
local email = client:Email(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `primary` | `boolean` | No |  |
| `verified` | `boolean` | No |  |
| `visibility` | `string` | No | Denotes whether an email is publicly visible. |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `email` | Yes | - | - |
| `primary` | Yes | - | - |
| `verified` | Yes | - | - |
| `visibility` | Yes | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Email():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Email():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Email():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmojiEntity

```lua
local emoji = client:Emoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `1` | `string` | No |  |
| `100` | `string` | No |  |
| `1234` | `string` | No |  |
| `1st_place_medal` | `string` | No |  |
| `2nd_place_medal` | `string` | No |  |
| `3rd_place_medal` | `string` | No |  |
| `8ball` | `string` | No |  |
| `a` | `string` | No |  |
| `ab` | `string` | No |  |
| `abacus` | `string` | No |  |
| `abc` | `string` | No |  |
| `abcd` | `string` | No |  |
| `accept` | `string` | No |  |
| `accessibility` | `string` | No |  |
| `accordion` | `string` | No |  |
| `adhesive_bandage` | `string` | No |  |
| `adult` | `string` | No |  |
| `aerial_tramway` | `string` | No |  |
| `afghanistan` | `string` | No |  |
| `airplane` | `string` | No |  |
| `aland_islands` | `string` | No |  |
| `alarm_clock` | `string` | No |  |
| `albania` | `string` | No |  |
| `alembic` | `string` | No |  |
| `algeria` | `string` | No |  |
| `alien` | `string` | No |  |
| `ambulance` | `string` | No |  |
| `american_samoa` | `string` | No |  |
| `amphora` | `string` | No |  |
| `anatomical_heart` | `string` | No |  |
| `anchor` | `string` | No |  |
| `andorra` | `string` | No |  |
| `angel` | `string` | No |  |
| `anger` | `string` | No |  |
| `angola` | `string` | No |  |
| `angry` | `string` | No |  |
| `anguilla` | `string` | No |  |
| `anguished` | `string` | No |  |
| `ant` | `string` | No |  |
| `antarctica` | `string` | No |  |
| `antigua_barbuda` | `string` | No |  |
| `apple` | `string` | No |  |
| `aquarius` | `string` | No |  |
| `argentina` | `string` | No |  |
| `aries` | `string` | No |  |
| `armenia` | `string` | No |  |
| `arrow_backward` | `string` | No |  |
| `arrow_double_down` | `string` | No |  |
| `arrow_double_up` | `string` | No |  |
| `arrow_down` | `string` | No |  |
| `arrow_down_small` | `string` | No |  |
| `arrow_forward` | `string` | No |  |
| `arrow_heading_down` | `string` | No |  |
| `arrow_heading_up` | `string` | No |  |
| `arrow_left` | `string` | No |  |
| `arrow_lower_left` | `string` | No |  |
| `arrow_lower_right` | `string` | No |  |
| `arrow_right` | `string` | No |  |
| `arrow_right_hook` | `string` | No |  |
| `arrow_up` | `string` | No |  |
| `arrow_up_down` | `string` | No |  |
| `arrow_up_small` | `string` | No |  |
| `arrow_upper_left` | `string` | No |  |
| `arrow_upper_right` | `string` | No |  |
| `arrows_clockwise` | `string` | No |  |
| `arrows_counterclockwise` | `string` | No |  |
| `art` | `string` | No |  |
| `articulated_lorry` | `string` | No |  |
| `artificial_satellite` | `string` | No |  |
| `artist` | `string` | No |  |
| `aruba` | `string` | No |  |
| `ascension_island` | `string` | No |  |
| `asterisk` | `string` | No |  |
| `astonished` | `string` | No |  |
| `astronaut` | `string` | No |  |
| `athletic_shoe` | `string` | No |  |
| `atm` | `string` | No |  |
| `atom` | `string` | No |  |
| `atom_symbol` | `string` | No |  |
| `australia` | `string` | No |  |
| `austria` | `string` | No |  |
| `auto_rickshaw` | `string` | No |  |
| `avocado` | `string` | No |  |
| `axe` | `string` | No |  |
| `azerbaijan` | `string` | No |  |
| `b` | `string` | No |  |
| `baby` | `string` | No |  |
| `baby_bottle` | `string` | No |  |
| `baby_chick` | `string` | No |  |
| `baby_symbol` | `string` | No |  |
| `back` | `string` | No |  |
| `bacon` | `string` | No |  |
| `badger` | `string` | No |  |
| `badminton` | `string` | No |  |
| `bagel` | `string` | No |  |
| `baggage_claim` | `string` | No |  |
| `baguette_bread` | `string` | No |  |
| `bahamas` | `string` | No |  |
| `bahrain` | `string` | No |  |
| `balance_scale` | `string` | No |  |
| `bald_man` | `string` | No |  |
| `bald_woman` | `string` | No |  |
| `ballet_shoes` | `string` | No |  |
| `balloon` | `string` | No |  |
| `ballot_box` | `string` | No |  |
| `ballot_box_with_check` | `string` | No |  |
| `bamboo` | `string` | No |  |
| `banana` | `string` | No |  |
| `bangbang` | `string` | No |  |
| `bangladesh` | `string` | No |  |
| `banjo` | `string` | No |  |
| `bank` | `string` | No |  |
| `bar_chart` | `string` | No |  |
| `barbados` | `string` | No |  |
| `barber` | `string` | No |  |
| `baseball` | `string` | No |  |
| `basecamp` | `string` | No |  |
| `basecampy` | `string` | No |  |
| `basket` | `string` | No |  |
| `basketball` | `string` | No |  |
| `basketball_man` | `string` | No |  |
| `basketball_woman` | `string` | No |  |
| `bat` | `string` | No |  |
| `bath` | `string` | No |  |
| `bathtub` | `string` | No |  |
| `battery` | `string` | No |  |
| `beach_umbrella` | `string` | No |  |
| `bear` | `string` | No |  |
| `bearded_person` | `string` | No |  |
| `beaver` | `string` | No |  |
| `bed` | `string` | No |  |
| `bee` | `string` | No |  |
| `beer` | `string` | No |  |
| `beers` | `string` | No |  |
| `beetle` | `string` | No |  |
| `beginner` | `string` | No |  |
| `belarus` | `string` | No |  |
| `belgium` | `string` | No |  |
| `belize` | `string` | No |  |
| `bell` | `string` | No |  |
| `bell_pepper` | `string` | No |  |
| `bellhop_bell` | `string` | No |  |
| `benin` | `string` | No |  |
| `bento` | `string` | No |  |
| `bermuda` | `string` | No |  |
| `beverage_box` | `string` | No |  |
| `bhutan` | `string` | No |  |
| `bicyclist` | `string` | No |  |
| `bike` | `string` | No |  |
| `biking_man` | `string` | No |  |
| `biking_woman` | `string` | No |  |
| `bikini` | `string` | No |  |
| `billed_cap` | `string` | No |  |
| `biohazard` | `string` | No |  |
| `bird` | `string` | No |  |
| `birthday` | `string` | No |  |
| `bison` | `string` | No |  |
| `black_cat` | `string` | No |  |
| `black_circle` | `string` | No |  |
| `black_flag` | `string` | No |  |
| `black_heart` | `string` | No |  |
| `black_joker` | `string` | No |  |
| `black_large_square` | `string` | No |  |
| `black_medium_small_square` | `string` | No |  |
| `black_medium_square` | `string` | No |  |
| `black_nib` | `string` | No |  |
| `black_small_square` | `string` | No |  |
| `black_square_button` | `string` | No |  |
| `blond_haired_man` | `string` | No |  |
| `blond_haired_person` | `string` | No |  |
| `blond_haired_woman` | `string` | No |  |
| `blonde_woman` | `string` | No |  |
| `blossom` | `string` | No |  |
| `blowfish` | `string` | No |  |
| `blue_book` | `string` | No |  |
| `blue_car` | `string` | No |  |
| `blue_heart` | `string` | No |  |
| `blue_square` | `string` | No |  |
| `blueberries` | `string` | No |  |
| `blush` | `string` | No |  |
| `boar` | `string` | No |  |
| `boat` | `string` | No |  |
| `bolivia` | `string` | No |  |
| `bomb` | `string` | No |  |
| `bone` | `string` | No |  |
| `book` | `string` | No |  |
| `bookmark` | `string` | No |  |
| `bookmark_tabs` | `string` | No |  |
| `books` | `string` | No |  |
| `boom` | `string` | No |  |
| `boomerang` | `string` | No |  |
| `boot` | `string` | No |  |
| `bosnia_herzegovina` | `string` | No |  |
| `botswana` | `string` | No |  |
| `bouncing_ball_man` | `string` | No |  |
| `bouncing_ball_person` | `string` | No |  |
| `bouncing_ball_woman` | `string` | No |  |
| `bouquet` | `string` | No |  |
| `bouvet_island` | `string` | No |  |
| `bow` | `string` | No |  |
| `bow_and_arrow` | `string` | No |  |
| `bowing_man` | `string` | No |  |
| `bowing_woman` | `string` | No |  |
| `bowl_with_spoon` | `string` | No |  |
| `bowling` | `string` | No |  |
| `bowtie` | `string` | No |  |
| `boxing_glove` | `string` | No |  |
| `boy` | `string` | No |  |
| `brain` | `string` | No |  |
| `brazil` | `string` | No |  |
| `bread` | `string` | No |  |
| `breast_feeding` | `string` | No |  |
| `bricks` | `string` | No |  |
| `bride_with_veil` | `string` | No |  |
| `bridge_at_night` | `string` | No |  |
| `briefcase` | `string` | No |  |
| `british_indian_ocean_territory` | `string` | No |  |
| `british_virgin_islands` | `string` | No |  |
| `broccoli` | `string` | No |  |
| `broken_heart` | `string` | No |  |
| `broom` | `string` | No |  |
| `brown_circle` | `string` | No |  |
| `brown_heart` | `string` | No |  |
| `brown_square` | `string` | No |  |
| `brunei` | `string` | No |  |
| `bubble_tea` | `string` | No |  |
| `bucket` | `string` | No |  |
| `bug` | `string` | No |  |
| `building_construction` | `string` | No |  |
| `bulb` | `string` | No |  |
| `bulgaria` | `string` | No |  |
| `bullettrain_front` | `string` | No |  |
| `bullettrain_side` | `string` | No |  |
| `burkina_faso` | `string` | No |  |
| `burrito` | `string` | No |  |
| `burundi` | `string` | No |  |
| `bus` | `string` | No |  |
| `business_suit_levitating` | `string` | No |  |
| `busstop` | `string` | No |  |
| `bust_in_silhouette` | `string` | No |  |
| `busts_in_silhouette` | `string` | No |  |
| `butter` | `string` | No |  |
| `butterfly` | `string` | No |  |
| `cactus` | `string` | No |  |
| `cake` | `string` | No |  |
| `calendar` | `string` | No |  |
| `call_me_hand` | `string` | No |  |
| `calling` | `string` | No |  |
| `cambodia` | `string` | No |  |
| `camel` | `string` | No |  |
| `camera` | `string` | No |  |
| `camera_flash` | `string` | No |  |
| `cameroon` | `string` | No |  |
| `camping` | `string` | No |  |
| `canada` | `string` | No |  |
| `canary_islands` | `string` | No |  |
| `cancer` | `string` | No |  |
| `candle` | `string` | No |  |
| `candy` | `string` | No |  |
| `canned_food` | `string` | No |  |
| `canoe` | `string` | No |  |
| `cape_verde` | `string` | No |  |
| `capital_abcd` | `string` | No |  |
| `capricorn` | `string` | No |  |
| `car` | `string` | No |  |
| `card_file_box` | `string` | No |  |
| `card_index` | `string` | No |  |
| `card_index_dividers` | `string` | No |  |
| `caribbean_netherlands` | `string` | No |  |
| `carousel_horse` | `string` | No |  |
| `carpentry_saw` | `string` | No |  |
| `carrot` | `string` | No |  |
| `cartwheeling` | `string` | No |  |
| `cat` | `string` | No |  |
| `cat2` | `string` | No |  |
| `cayman_islands` | `string` | No |  |
| `cd` | `string` | No |  |
| `central_african_republic` | `string` | No |  |
| `ceuta_melilla` | `string` | No |  |
| `chad` | `string` | No |  |
| `chains` | `string` | No |  |
| `chair` | `string` | No |  |
| `champagne` | `string` | No |  |
| `chart` | `string` | No |  |
| `chart_with_downwards_trend` | `string` | No |  |
| `chart_with_upwards_trend` | `string` | No |  |
| `checkered_flag` | `string` | No |  |
| `cheese` | `string` | No |  |
| `cherries` | `string` | No |  |
| `cherry_blossom` | `string` | No |  |
| `chess_pawn` | `string` | No |  |
| `chestnut` | `string` | No |  |
| `chicken` | `string` | No |  |
| `child` | `string` | No |  |
| `children_crossing` | `string` | No |  |
| `chile` | `string` | No |  |
| `chipmunk` | `string` | No |  |
| `chocolate_bar` | `string` | No |  |
| `chopsticks` | `string` | No |  |
| `christmas_island` | `string` | No |  |
| `christmas_tree` | `string` | No |  |
| `church` | `string` | No |  |
| `cinema` | `string` | No |  |
| `circus_tent` | `string` | No |  |
| `city_sunrise` | `string` | No |  |
| `city_sunset` | `string` | No |  |
| `cityscape` | `string` | No |  |
| `cl` | `string` | No |  |
| `clamp` | `string` | No |  |
| `clap` | `string` | No |  |
| `clapper` | `string` | No |  |
| `classical_building` | `string` | No |  |
| `climbing` | `string` | No |  |
| `climbing_man` | `string` | No |  |
| `climbing_woman` | `string` | No |  |
| `clinking_glasses` | `string` | No |  |
| `clipboard` | `string` | No |  |
| `clipperton_island` | `string` | No |  |
| `clock1` | `string` | No |  |
| `clock10` | `string` | No |  |
| `clock1030` | `string` | No |  |
| `clock11` | `string` | No |  |
| `clock1130` | `string` | No |  |
| `clock12` | `string` | No |  |
| `clock1230` | `string` | No |  |
| `clock130` | `string` | No |  |
| `clock2` | `string` | No |  |
| `clock230` | `string` | No |  |
| `clock3` | `string` | No |  |
| `clock330` | `string` | No |  |
| `clock4` | `string` | No |  |
| `clock430` | `string` | No |  |
| `clock5` | `string` | No |  |
| `clock530` | `string` | No |  |
| `clock6` | `string` | No |  |
| `clock630` | `string` | No |  |
| `clock7` | `string` | No |  |
| `clock730` | `string` | No |  |
| `clock8` | `string` | No |  |
| `clock830` | `string` | No |  |
| `clock9` | `string` | No |  |
| `clock930` | `string` | No |  |
| `closed_book` | `string` | No |  |
| `closed_lock_with_key` | `string` | No |  |
| `closed_umbrella` | `string` | No |  |
| `cloud` | `string` | No |  |
| `cloud_with_lightning` | `string` | No |  |
| `cloud_with_lightning_and_rain` | `string` | No |  |
| `cloud_with_rain` | `string` | No |  |
| `cloud_with_snow` | `string` | No |  |
| `clown_face` | `string` | No |  |
| `clubs` | `string` | No |  |
| `cn` | `string` | No |  |
| `coat` | `string` | No |  |
| `cockroach` | `string` | No |  |
| `cocktail` | `string` | No |  |
| `coconut` | `string` | No |  |
| `cocos_islands` | `string` | No |  |
| `coffee` | `string` | No |  |
| `coffin` | `string` | No |  |
| `coin` | `string` | No |  |
| `cold_face` | `string` | No |  |
| `cold_sweat` | `string` | No |  |
| `collision` | `string` | No |  |
| `colombia` | `string` | No |  |
| `comet` | `string` | No |  |
| `comoros` | `string` | No |  |
| `compass` | `string` | No |  |
| `computer` | `string` | No |  |
| `computer_mouse` | `string` | No |  |
| `confetti_ball` | `string` | No |  |
| `confounded` | `string` | No |  |
| `confused` | `string` | No |  |
| `congo_brazzaville` | `string` | No |  |
| `congo_kinshasa` | `string` | No |  |
| `congratulations` | `string` | No |  |
| `construction` | `string` | No |  |
| `construction_worker` | `string` | No |  |
| `construction_worker_man` | `string` | No |  |
| `construction_worker_woman` | `string` | No |  |
| `control_knobs` | `string` | No |  |
| `convenience_store` | `string` | No |  |
| `cook` | `string` | No |  |
| `cook_islands` | `string` | No |  |
| `cookie` | `string` | No |  |
| `cool` | `string` | No |  |
| `cop` | `string` | No |  |
| `copilot` | `string` | No |  |
| `copyright` | `string` | No |  |
| `corn` | `string` | No |  |
| `costa_rica` | `string` | No |  |
| `cote_divoire` | `string` | No |  |
| `couch_and_lamp` | `string` | No |  |
| `couple` | `string` | No |  |
| `couple_with_heart` | `string` | No |  |
| `couple_with_heart_man_man` | `string` | No |  |
| `couple_with_heart_woman_man` | `string` | No |  |
| `couple_with_heart_woman_woman` | `string` | No |  |
| `couplekiss` | `string` | No |  |
| `couplekiss_man_man` | `string` | No |  |
| `couplekiss_man_woman` | `string` | No |  |
| `couplekiss_woman_woman` | `string` | No |  |
| `cow` | `string` | No |  |
| `cow2` | `string` | No |  |
| `cowboy_hat_face` | `string` | No |  |
| `crab` | `string` | No |  |
| `crayon` | `string` | No |  |
| `credit_card` | `string` | No |  |
| `crescent_moon` | `string` | No |  |
| `cricket` | `string` | No |  |
| `cricket_game` | `string` | No |  |
| `croatia` | `string` | No |  |
| `crocodile` | `string` | No |  |
| `croissant` | `string` | No |  |
| `crossed_fingers` | `string` | No |  |
| `crossed_flags` | `string` | No |  |
| `crossed_swords` | `string` | No |  |
| `crown` | `string` | No |  |
| `cry` | `string` | No |  |
| `crying_cat_face` | `string` | No |  |
| `crystal_ball` | `string` | No |  |
| `cuba` | `string` | No |  |
| `cucumber` | `string` | No |  |
| `cup_with_straw` | `string` | No |  |
| `cupcake` | `string` | No |  |
| `cupid` | `string` | No |  |
| `curacao` | `string` | No |  |
| `curling_stone` | `string` | No |  |
| `curly_haired_man` | `string` | No |  |
| `curly_haired_woman` | `string` | No |  |
| `curly_loop` | `string` | No |  |
| `currency_exchange` | `string` | No |  |
| `curry` | `string` | No |  |
| `cursing_face` | `string` | No |  |
| `custard` | `string` | No |  |
| `customs` | `string` | No |  |
| `cut_of_meat` | `string` | No |  |
| `cyclone` | `string` | No |  |
| `cyprus` | `string` | No |  |
| `czech_republic` | `string` | No |  |
| `dagger` | `string` | No |  |
| `dancer` | `string` | No |  |
| `dancers` | `string` | No |  |
| `dancing_men` | `string` | No |  |
| `dancing_women` | `string` | No |  |
| `dango` | `string` | No |  |
| `dark_sunglasses` | `string` | No |  |
| `dart` | `string` | No |  |
| `dash` | `string` | No |  |
| `date` | `string` | No |  |
| `de` | `string` | No |  |
| `deaf_man` | `string` | No |  |
| `deaf_person` | `string` | No |  |
| `deaf_woman` | `string` | No |  |
| `deciduous_tree` | `string` | No |  |
| `deer` | `string` | No |  |
| `denmark` | `string` | No |  |
| `department_store` | `string` | No |  |
| `dependabot` | `string` | No |  |
| `derelict_house` | `string` | No |  |
| `desert` | `string` | No |  |
| `desert_island` | `string` | No |  |
| `desktop_computer` | `string` | No |  |
| `detective` | `string` | No |  |
| `diamond_shape_with_a_dot_inside` | `string` | No |  |
| `diamonds` | `string` | No |  |
| `diego_garcia` | `string` | No |  |
| `disappointed` | `string` | No |  |
| `disappointed_relieved` | `string` | No |  |
| `disguised_face` | `string` | No |  |
| `diving_mask` | `string` | No |  |
| `diya_lamp` | `string` | No |  |
| `dizzy` | `string` | No |  |
| `dizzy_face` | `string` | No |  |
| `djibouti` | `string` | No |  |
| `dna` | `string` | No |  |
| `do_not_litter` | `string` | No |  |
| `dodo` | `string` | No |  |
| `dog` | `string` | No |  |
| `dog2` | `string` | No |  |
| `dollar` | `string` | No |  |
| `dolls` | `string` | No |  |
| `dolphin` | `string` | No |  |
| `dominica` | `string` | No |  |
| `dominican_republic` | `string` | No |  |
| `door` | `string` | No |  |
| `doughnut` | `string` | No |  |
| `dove` | `string` | No |  |
| `dragon` | `string` | No |  |
| `dragon_face` | `string` | No |  |
| `dress` | `string` | No |  |
| `dromedary_camel` | `string` | No |  |
| `drooling_face` | `string` | No |  |
| `drop_of_blood` | `string` | No |  |
| `droplet` | `string` | No |  |
| `drum` | `string` | No |  |
| `duck` | `string` | No |  |
| `dumpling` | `string` | No |  |
| `dvd` | `string` | No |  |
| `eagle` | `string` | No |  |
| `ear` | `string` | No |  |
| `ear_of_rice` | `string` | No |  |
| `ear_with_hearing_aid` | `string` | No |  |
| `earth_africa` | `string` | No |  |
| `earth_americas` | `string` | No |  |
| `earth_asia` | `string` | No |  |
| `ecuador` | `string` | No |  |
| `egg` | `string` | No |  |
| `eggplant` | `string` | No |  |
| `egypt` | `string` | No |  |
| `eight` | `string` | No |  |
| `eight_pointed_black_star` | `string` | No |  |
| `eight_spoked_asterisk` | `string` | No |  |
| `eject_button` | `string` | No |  |
| `el_salvador` | `string` | No |  |
| `electric_plug` | `string` | No |  |
| `electron` | `string` | No |  |
| `elephant` | `string` | No |  |
| `elevator` | `string` | No |  |
| `elf` | `string` | No |  |
| `elf_man` | `string` | No |  |
| `elf_woman` | `string` | No |  |
| `email` | `string` | No |  |
| `end` | `string` | No |  |
| `england` | `string` | No |  |
| `envelope` | `string` | No |  |
| `envelope_with_arrow` | `string` | No |  |
| `equatorial_guinea` | `string` | No |  |
| `eritrea` | `string` | No |  |
| `es` | `string` | No |  |
| `estonia` | `string` | No |  |
| `ethiopia` | `string` | No |  |
| `eu` | `string` | No |  |
| `euro` | `string` | No |  |
| `european_castle` | `string` | No |  |
| `european_post_office` | `string` | No |  |
| `european_union` | `string` | No |  |
| `evergreen_tree` | `string` | No |  |
| `exclamation` | `string` | No |  |
| `exploding_head` | `string` | No |  |
| `expressionless` | `string` | No |  |
| `eye` | `string` | No |  |
| `eye_speech_bubble` | `string` | No |  |
| `eyeglasses` | `string` | No |  |
| `eyes` | `string` | No |  |
| `face_exhaling` | `string` | No |  |
| `face_in_clouds` | `string` | No |  |
| `face_with_head_bandage` | `string` | No |  |
| `face_with_spiral_eyes` | `string` | No |  |
| `face_with_thermometer` | `string` | No |  |
| `facepalm` | `string` | No |  |
| `facepunch` | `string` | No |  |
| `factory` | `string` | No |  |
| `factory_worker` | `string` | No |  |
| `fairy` | `string` | No |  |
| `fairy_man` | `string` | No |  |
| `fairy_woman` | `string` | No |  |
| `falafel` | `string` | No |  |
| `falkland_islands` | `string` | No |  |
| `fallen_leaf` | `string` | No |  |
| `family` | `string` | No |  |
| `family_man_boy` | `string` | No |  |
| `family_man_boy_boy` | `string` | No |  |
| `family_man_girl` | `string` | No |  |
| `family_man_girl_boy` | `string` | No |  |
| `family_man_girl_girl` | `string` | No |  |
| `family_man_man_boy` | `string` | No |  |
| `family_man_man_boy_boy` | `string` | No |  |
| `family_man_man_girl` | `string` | No |  |
| `family_man_man_girl_boy` | `string` | No |  |
| `family_man_man_girl_girl` | `string` | No |  |
| `family_man_woman_boy` | `string` | No |  |
| `family_man_woman_boy_boy` | `string` | No |  |
| `family_man_woman_girl` | `string` | No |  |
| `family_man_woman_girl_boy` | `string` | No |  |
| `family_man_woman_girl_girl` | `string` | No |  |
| `family_woman_boy` | `string` | No |  |
| `family_woman_boy_boy` | `string` | No |  |
| `family_woman_girl` | `string` | No |  |
| `family_woman_girl_boy` | `string` | No |  |
| `family_woman_girl_girl` | `string` | No |  |
| `family_woman_woman_boy` | `string` | No |  |
| `family_woman_woman_boy_boy` | `string` | No |  |
| `family_woman_woman_girl` | `string` | No |  |
| `family_woman_woman_girl_boy` | `string` | No |  |
| `family_woman_woman_girl_girl` | `string` | No |  |
| `farmer` | `string` | No |  |
| `faroe_islands` | `string` | No |  |
| `fast_forward` | `string` | No |  |
| `fax` | `string` | No |  |
| `fearful` | `string` | No |  |
| `feather` | `string` | No |  |
| `feelsgood` | `string` | No |  |
| `feet` | `string` | No |  |
| `female_detective` | `string` | No |  |
| `female_sign` | `string` | No |  |
| `ferris_wheel` | `string` | No |  |
| `ferry` | `string` | No |  |
| `field_hockey` | `string` | No |  |
| `fiji` | `string` | No |  |
| `file_cabinet` | `string` | No |  |
| `file_folder` | `string` | No |  |
| `film_projector` | `string` | No |  |
| `film_strip` | `string` | No |  |
| `finland` | `string` | No |  |
| `finnadie` | `string` | No |  |
| `fire` | `string` | No |  |
| `fire_engine` | `string` | No |  |
| `fire_extinguisher` | `string` | No |  |
| `firecracker` | `string` | No |  |
| `firefighter` | `string` | No |  |
| `fireworks` | `string` | No |  |
| `first_quarter_moon` | `string` | No |  |
| `first_quarter_moon_with_face` | `string` | No |  |
| `fish` | `string` | No |  |
| `fish_cake` | `string` | No |  |
| `fishing_pole_and_fish` | `string` | No |  |
| `fishsticks` | `string` | No |  |
| `fist` | `string` | No |  |
| `fist_left` | `string` | No |  |
| `fist_oncoming` | `string` | No |  |
| `fist_raised` | `string` | No |  |
| `fist_right` | `string` | No |  |
| `five` | `string` | No |  |
| `flags` | `string` | No |  |
| `flamingo` | `string` | No |  |
| `flashlight` | `string` | No |  |
| `flat_shoe` | `string` | No |  |
| `flatbread` | `string` | No |  |
| `fleur_de_lis` | `string` | No |  |
| `flight_arrival` | `string` | No |  |
| `flight_departure` | `string` | No |  |
| `flipper` | `string` | No |  |
| `floppy_disk` | `string` | No |  |
| `flower_playing_cards` | `string` | No |  |
| `flushed` | `string` | No |  |
| `fly` | `string` | No |  |
| `flying_disc` | `string` | No |  |
| `flying_saucer` | `string` | No |  |
| `fog` | `string` | No |  |
| `foggy` | `string` | No |  |
| `fondue` | `string` | No |  |
| `foot` | `string` | No |  |
| `football` | `string` | No |  |
| `footprints` | `string` | No |  |
| `fork_and_knife` | `string` | No |  |
| `fortune_cookie` | `string` | No |  |
| `fountain` | `string` | No |  |
| `fountain_pen` | `string` | No |  |
| `four` | `string` | No |  |
| `four_leaf_clover` | `string` | No |  |
| `fox_face` | `string` | No |  |
| `fr` | `string` | No |  |
| `framed_picture` | `string` | No |  |
| `free` | `string` | No |  |
| `french_guiana` | `string` | No |  |
| `french_polynesia` | `string` | No |  |
| `french_southern_territories` | `string` | No |  |
| `fried_egg` | `string` | No |  |
| `fried_shrimp` | `string` | No |  |
| `fries` | `string` | No |  |
| `frog` | `string` | No |  |
| `frowning` | `string` | No |  |
| `frowning_face` | `string` | No |  |
| `frowning_man` | `string` | No |  |
| `frowning_person` | `string` | No |  |
| `frowning_woman` | `string` | No |  |
| `fu` | `string` | No |  |
| `fuelpump` | `string` | No |  |
| `full_moon` | `string` | No |  |
| `full_moon_with_face` | `string` | No |  |
| `funeral_urn` | `string` | No |  |
| `gabon` | `string` | No |  |
| `gambia` | `string` | No |  |
| `game_die` | `string` | No |  |
| `garlic` | `string` | No |  |
| `gb` | `string` | No |  |
| `gear` | `string` | No |  |
| `gem` | `string` | No |  |
| `gemini` | `string` | No |  |
| `genie` | `string` | No |  |
| `genie_man` | `string` | No |  |
| `genie_woman` | `string` | No |  |
| `georgia` | `string` | No |  |
| `ghana` | `string` | No |  |
| `ghost` | `string` | No |  |
| `gibraltar` | `string` | No |  |
| `gift` | `string` | No |  |
| `gift_heart` | `string` | No |  |
| `giraffe` | `string` | No |  |
| `girl` | `string` | No |  |
| `globe_with_meridians` | `string` | No |  |
| `gloves` | `string` | No |  |
| `goal_net` | `string` | No |  |
| `goat` | `string` | No |  |
| `goberserk` | `string` | No |  |
| `godmode` | `string` | No |  |
| `goggles` | `string` | No |  |
| `golf` | `string` | No |  |
| `golfing` | `string` | No |  |
| `golfing_man` | `string` | No |  |
| `golfing_woman` | `string` | No |  |
| `gorilla` | `string` | No |  |
| `grapes` | `string` | No |  |
| `greece` | `string` | No |  |
| `green_apple` | `string` | No |  |
| `green_book` | `string` | No |  |
| `green_circle` | `string` | No |  |
| `green_heart` | `string` | No |  |
| `green_salad` | `string` | No |  |
| `green_square` | `string` | No |  |
| `greenland` | `string` | No |  |
| `grenada` | `string` | No |  |
| `grey_exclamation` | `string` | No |  |
| `grey_question` | `string` | No |  |
| `grimacing` | `string` | No |  |
| `grin` | `string` | No |  |
| `grinning` | `string` | No |  |
| `guadeloupe` | `string` | No |  |
| `guam` | `string` | No |  |
| `guard` | `string` | No |  |
| `guardsman` | `string` | No |  |
| `guardswoman` | `string` | No |  |
| `guatemala` | `string` | No |  |
| `guernsey` | `string` | No |  |
| `guide_dog` | `string` | No |  |
| `guinea` | `string` | No |  |
| `guinea_bissau` | `string` | No |  |
| `guitar` | `string` | No |  |
| `gun` | `string` | No |  |
| `guyana` | `string` | No |  |
| `haircut` | `string` | No |  |
| `haircut_man` | `string` | No |  |
| `haircut_woman` | `string` | No |  |
| `haiti` | `string` | No |  |
| `hamburger` | `string` | No |  |
| `hammer` | `string` | No |  |
| `hammer_and_pick` | `string` | No |  |
| `hammer_and_wrench` | `string` | No |  |
| `hamster` | `string` | No |  |
| `hand` | `string` | No |  |
| `hand_over_mouth` | `string` | No |  |
| `handbag` | `string` | No |  |
| `handball_person` | `string` | No |  |
| `handshake` | `string` | No |  |
| `hankey` | `string` | No |  |
| `hash` | `string` | No |  |
| `hatched_chick` | `string` | No |  |
| `hatching_chick` | `string` | No |  |
| `headphones` | `string` | No |  |
| `headstone` | `string` | No |  |
| `health_worker` | `string` | No |  |
| `hear_no_evil` | `string` | No |  |
| `heard_mcdonald_islands` | `string` | No |  |
| `heart` | `string` | No |  |
| `heart_decoration` | `string` | No |  |
| `heart_eyes` | `string` | No |  |
| `heart_eyes_cat` | `string` | No |  |
| `heart_on_fire` | `string` | No |  |
| `heartbeat` | `string` | No |  |
| `heartpulse` | `string` | No |  |
| `hearts` | `string` | No |  |
| `heavy_check_mark` | `string` | No |  |
| `heavy_division_sign` | `string` | No |  |
| `heavy_dollar_sign` | `string` | No |  |
| `heavy_exclamation_mark` | `string` | No |  |
| `heavy_heart_exclamation` | `string` | No |  |
| `heavy_minus_sign` | `string` | No |  |
| `heavy_multiplication_x` | `string` | No |  |
| `heavy_plus_sign` | `string` | No |  |
| `hedgehog` | `string` | No |  |
| `helicopter` | `string` | No |  |
| `herb` | `string` | No |  |
| `hibiscus` | `string` | No |  |
| `high_brightness` | `string` | No |  |
| `high_heel` | `string` | No |  |
| `hiking_boot` | `string` | No |  |
| `hindu_temple` | `string` | No |  |
| `hippopotamus` | `string` | No |  |
| `hocho` | `string` | No |  |
| `hole` | `string` | No |  |
| `honduras` | `string` | No |  |
| `honey_pot` | `string` | No |  |
| `honeybee` | `string` | No |  |
| `hong_kong` | `string` | No |  |
| `hook` | `string` | No |  |
| `horse` | `string` | No |  |
| `horse_racing` | `string` | No |  |
| `hospital` | `string` | No |  |
| `hot_face` | `string` | No |  |
| `hot_pepper` | `string` | No |  |
| `hotdog` | `string` | No |  |
| `hotel` | `string` | No |  |
| `hotsprings` | `string` | No |  |
| `hourglass` | `string` | No |  |
| `hourglass_flowing_sand` | `string` | No |  |
| `house` | `string` | No |  |
| `house_with_garden` | `string` | No |  |
| `houses` | `string` | No |  |
| `hugs` | `string` | No |  |
| `hungary` | `string` | No |  |
| `hurtrealbad` | `string` | No |  |
| `hushed` | `string` | No |  |
| `hut` | `string` | No |  |
| `ice_cream` | `string` | No |  |
| `ice_cube` | `string` | No |  |
| `ice_hockey` | `string` | No |  |
| `ice_skate` | `string` | No |  |
| `icecream` | `string` | No |  |
| `iceland` | `string` | No |  |
| `id` | `string` | No |  |
| `ideograph_advantage` | `string` | No |  |
| `imp` | `string` | No |  |
| `inbox_tray` | `string` | No |  |
| `incoming_envelope` | `string` | No |  |
| `india` | `string` | No |  |
| `indonesia` | `string` | No |  |
| `infinity` | `string` | No |  |
| `information_desk_person` | `string` | No |  |
| `information_source` | `string` | No |  |
| `innocent` | `string` | No |  |
| `interrobang` | `string` | No |  |
| `iphone` | `string` | No |  |
| `iran` | `string` | No |  |
| `iraq` | `string` | No |  |
| `ireland` | `string` | No |  |
| `isle_of_man` | `string` | No |  |
| `israel` | `string` | No |  |
| `it` | `string` | No |  |
| `izakaya_lantern` | `string` | No |  |
| `jack_o_lantern` | `string` | No |  |
| `jamaica` | `string` | No |  |
| `japan` | `string` | No |  |
| `japanese_castle` | `string` | No |  |
| `japanese_goblin` | `string` | No |  |
| `japanese_ogre` | `string` | No |  |
| `jeans` | `string` | No |  |
| `jersey` | `string` | No |  |
| `jigsaw` | `string` | No |  |
| `jordan` | `string` | No |  |
| `joy` | `string` | No |  |
| `joy_cat` | `string` | No |  |
| `joystick` | `string` | No |  |
| `jp` | `string` | No |  |
| `judge` | `string` | No |  |
| `juggling_person` | `string` | No |  |
| `kangaroo` | `string` | No |  |
| `kazakhstan` | `string` | No |  |
| `kenya` | `string` | No |  |
| `key` | `string` | No |  |
| `keyboard` | `string` | No |  |
| `keycap_ten` | `string` | No |  |
| `kick_scooter` | `string` | No |  |
| `kimono` | `string` | No |  |
| `kiribati` | `string` | No |  |
| `kiss` | `string` | No |  |
| `kissing` | `string` | No |  |
| `kissing_cat` | `string` | No |  |
| `kissing_closed_eyes` | `string` | No |  |
| `kissing_heart` | `string` | No |  |
| `kissing_smiling_eyes` | `string` | No |  |
| `kite` | `string` | No |  |
| `kiwi_fruit` | `string` | No |  |
| `kneeling_man` | `string` | No |  |
| `kneeling_person` | `string` | No |  |
| `kneeling_woman` | `string` | No |  |
| `knife` | `string` | No |  |
| `knot` | `string` | No |  |
| `koala` | `string` | No |  |
| `koko` | `string` | No |  |
| `kosovo` | `string` | No |  |
| `kr` | `string` | No |  |
| `kuwait` | `string` | No |  |
| `kyrgyzstan` | `string` | No |  |
| `lab_coat` | `string` | No |  |
| `label` | `string` | No |  |
| `lacrosse` | `string` | No |  |
| `ladder` | `string` | No |  |
| `lady_beetle` | `string` | No |  |
| `lantern` | `string` | No |  |
| `laos` | `string` | No |  |
| `large_blue_circle` | `string` | No |  |
| `large_blue_diamond` | `string` | No |  |
| `large_orange_diamond` | `string` | No |  |
| `last_quarter_moon` | `string` | No |  |
| `last_quarter_moon_with_face` | `string` | No |  |
| `latin_cross` | `string` | No |  |
| `latvia` | `string` | No |  |
| `laughing` | `string` | No |  |
| `leafy_green` | `string` | No |  |
| `leaves` | `string` | No |  |
| `lebanon` | `string` | No |  |
| `ledger` | `string` | No |  |
| `left_luggage` | `string` | No |  |
| `left_right_arrow` | `string` | No |  |
| `left_speech_bubble` | `string` | No |  |
| `leftwards_arrow_with_hook` | `string` | No |  |
| `leg` | `string` | No |  |
| `lemon` | `string` | No |  |
| `leo` | `string` | No |  |
| `leopard` | `string` | No |  |
| `lesotho` | `string` | No |  |
| `level_slider` | `string` | No |  |
| `liberia` | `string` | No |  |
| `libra` | `string` | No |  |
| `libya` | `string` | No |  |
| `liechtenstein` | `string` | No |  |
| `light_rail` | `string` | No |  |
| `link` | `string` | No |  |
| `lion` | `string` | No |  |
| `lips` | `string` | No |  |
| `lipstick` | `string` | No |  |
| `lithuania` | `string` | No |  |
| `lizard` | `string` | No |  |
| `llama` | `string` | No |  |
| `lobster` | `string` | No |  |
| `lock` | `string` | No |  |
| `lock_with_ink_pen` | `string` | No |  |
| `lollipop` | `string` | No |  |
| `long_drum` | `string` | No |  |
| `loop` | `string` | No |  |
| `lotion_bottle` | `string` | No |  |
| `lotus_position` | `string` | No |  |
| `lotus_position_man` | `string` | No |  |
| `lotus_position_woman` | `string` | No |  |
| `loud_sound` | `string` | No |  |
| `loudspeaker` | `string` | No |  |
| `love_hotel` | `string` | No |  |
| `love_letter` | `string` | No |  |
| `love_you_gesture` | `string` | No |  |
| `low_brightness` | `string` | No |  |
| `luggage` | `string` | No |  |
| `lungs` | `string` | No |  |
| `luxembourg` | `string` | No |  |
| `lying_face` | `string` | No |  |
| `m` | `string` | No |  |
| `macau` | `string` | No |  |
| `macedonia` | `string` | No |  |
| `madagascar` | `string` | No |  |
| `mag` | `string` | No |  |
| `mag_right` | `string` | No |  |
| `mage` | `string` | No |  |
| `mage_man` | `string` | No |  |
| `mage_woman` | `string` | No |  |
| `magic_wand` | `string` | No |  |
| `magnet` | `string` | No |  |
| `mahjong` | `string` | No |  |
| `mailbox` | `string` | No |  |
| `mailbox_closed` | `string` | No |  |
| `mailbox_with_mail` | `string` | No |  |
| `mailbox_with_no_mail` | `string` | No |  |
| `malawi` | `string` | No |  |
| `malaysia` | `string` | No |  |
| `maldives` | `string` | No |  |
| `male_detective` | `string` | No |  |
| `male_sign` | `string` | No |  |
| `mali` | `string` | No |  |
| `malta` | `string` | No |  |
| `mammoth` | `string` | No |  |
| `man` | `string` | No |  |
| `man_artist` | `string` | No |  |
| `man_astronaut` | `string` | No |  |
| `man_beard` | `string` | No |  |
| `man_cartwheeling` | `string` | No |  |
| `man_cook` | `string` | No |  |
| `man_dancing` | `string` | No |  |
| `man_facepalming` | `string` | No |  |
| `man_factory_worker` | `string` | No |  |
| `man_farmer` | `string` | No |  |
| `man_feeding_baby` | `string` | No |  |
| `man_firefighter` | `string` | No |  |
| `man_health_worker` | `string` | No |  |
| `man_in_manual_wheelchair` | `string` | No |  |
| `man_in_motorized_wheelchair` | `string` | No |  |
| `man_in_tuxedo` | `string` | No |  |
| `man_judge` | `string` | No |  |
| `man_juggling` | `string` | No |  |
| `man_mechanic` | `string` | No |  |
| `man_office_worker` | `string` | No |  |
| `man_pilot` | `string` | No |  |
| `man_playing_handball` | `string` | No |  |
| `man_playing_water_polo` | `string` | No |  |
| `man_scientist` | `string` | No |  |
| `man_shrugging` | `string` | No |  |
| `man_singer` | `string` | No |  |
| `man_student` | `string` | No |  |
| `man_teacher` | `string` | No |  |
| `man_technologist` | `string` | No |  |
| `man_with_gua_pi_mao` | `string` | No |  |
| `man_with_probing_cane` | `string` | No |  |
| `man_with_turban` | `string` | No |  |
| `man_with_veil` | `string` | No |  |
| `mandarin` | `string` | No |  |
| `mango` | `string` | No |  |
| `mans_shoe` | `string` | No |  |
| `mantelpiece_clock` | `string` | No |  |
| `manual_wheelchair` | `string` | No |  |
| `maple_leaf` | `string` | No |  |
| `marshall_islands` | `string` | No |  |
| `martial_arts_uniform` | `string` | No |  |
| `martinique` | `string` | No |  |
| `mask` | `string` | No |  |
| `massage` | `string` | No |  |
| `massage_man` | `string` | No |  |
| `massage_woman` | `string` | No |  |
| `mate` | `string` | No |  |
| `mauritania` | `string` | No |  |
| `mauritius` | `string` | No |  |
| `mayotte` | `string` | No |  |
| `meat_on_bone` | `string` | No |  |
| `mechanic` | `string` | No |  |
| `mechanical_arm` | `string` | No |  |
| `mechanical_leg` | `string` | No |  |
| `medal_military` | `string` | No |  |
| `medal_sports` | `string` | No |  |
| `medical_symbol` | `string` | No |  |
| `mega` | `string` | No |  |
| `melon` | `string` | No |  |
| `memo` | `string` | No |  |
| `men_wrestling` | `string` | No |  |
| `mending_heart` | `string` | No |  |
| `menorah` | `string` | No |  |
| `mens` | `string` | No |  |
| `mermaid` | `string` | No |  |
| `merman` | `string` | No |  |
| `merperson` | `string` | No |  |
| `metal` | `string` | No |  |
| `metro` | `string` | No |  |
| `mexico` | `string` | No |  |
| `microbe` | `string` | No |  |
| `micronesia` | `string` | No |  |
| `microphone` | `string` | No |  |
| `microscope` | `string` | No |  |
| `middle_finger` | `string` | No |  |
| `military_helmet` | `string` | No |  |
| `milk_glass` | `string` | No |  |
| `milky_way` | `string` | No |  |
| `minibus` | `string` | No |  |
| `minidisc` | `string` | No |  |
| `mirror` | `string` | No |  |
| `mobile_phone_off` | `string` | No |  |
| `moldova` | `string` | No |  |
| `monaco` | `string` | No |  |
| `money_mouth_face` | `string` | No |  |
| `money_with_wings` | `string` | No |  |
| `moneybag` | `string` | No |  |
| `mongolia` | `string` | No |  |
| `monkey` | `string` | No |  |
| `monkey_face` | `string` | No |  |
| `monocle_face` | `string` | No |  |
| `monorail` | `string` | No |  |
| `montenegro` | `string` | No |  |
| `montserrat` | `string` | No |  |
| `moon` | `string` | No |  |
| `moon_cake` | `string` | No |  |
| `morocco` | `string` | No |  |
| `mortar_board` | `string` | No |  |
| `mosque` | `string` | No |  |
| `mosquito` | `string` | No |  |
| `motor_boat` | `string` | No |  |
| `motor_scooter` | `string` | No |  |
| `motorcycle` | `string` | No |  |
| `motorized_wheelchair` | `string` | No |  |
| `motorway` | `string` | No |  |
| `mount_fuji` | `string` | No |  |
| `mountain` | `string` | No |  |
| `mountain_bicyclist` | `string` | No |  |
| `mountain_biking_man` | `string` | No |  |
| `mountain_biking_woman` | `string` | No |  |
| `mountain_cableway` | `string` | No |  |
| `mountain_railway` | `string` | No |  |
| `mountain_snow` | `string` | No |  |
| `mouse` | `string` | No |  |
| `mouse2` | `string` | No |  |
| `mouse_trap` | `string` | No |  |
| `movie_camera` | `string` | No |  |
| `moyai` | `string` | No |  |
| `mozambique` | `string` | No |  |
| `mrs_claus` | `string` | No |  |
| `muscle` | `string` | No |  |
| `mushroom` | `string` | No |  |
| `musical_keyboard` | `string` | No |  |
| `musical_note` | `string` | No |  |
| `musical_score` | `string` | No |  |
| `mute` | `string` | No |  |
| `mx_claus` | `string` | No |  |
| `myanmar` | `string` | No |  |
| `nail_care` | `string` | No |  |
| `name_badge` | `string` | No |  |
| `namibia` | `string` | No |  |
| `national_park` | `string` | No |  |
| `nauru` | `string` | No |  |
| `nauseated_face` | `string` | No |  |
| `nazar_amulet` | `string` | No |  |
| `neckbeard` | `string` | No |  |
| `necktie` | `string` | No |  |
| `negative_squared_cross_mark` | `string` | No |  |
| `nepal` | `string` | No |  |
| `nerd_face` | `string` | No |  |
| `nesting_dolls` | `string` | No |  |
| `netherlands` | `string` | No |  |
| `neutral_face` | `string` | No |  |
| `new` | `string` | No |  |
| `new_caledonia` | `string` | No |  |
| `new_moon` | `string` | No |  |
| `new_moon_with_face` | `string` | No |  |
| `new_zealand` | `string` | No |  |
| `newspaper` | `string` | No |  |
| `newspaper_roll` | `string` | No |  |
| `next_track_button` | `string` | No |  |
| `ng` | `string` | No |  |
| `ng_man` | `string` | No |  |
| `ng_woman` | `string` | No |  |
| `nicaragua` | `string` | No |  |
| `niger` | `string` | No |  |
| `nigeria` | `string` | No |  |
| `night_with_stars` | `string` | No |  |
| `nine` | `string` | No |  |
| `ninja` | `string` | No |  |
| `niue` | `string` | No |  |
| `no_bell` | `string` | No |  |
| `no_bicycles` | `string` | No |  |
| `no_entry` | `string` | No |  |
| `no_entry_sign` | `string` | No |  |
| `no_good` | `string` | No |  |
| `no_good_man` | `string` | No |  |
| `no_good_woman` | `string` | No |  |
| `no_mobile_phones` | `string` | No |  |
| `no_mouth` | `string` | No |  |
| `no_pedestrians` | `string` | No |  |
| `no_smoking` | `string` | No |  |
| `nonpotable_water` | `string` | No |  |
| `norfolk_island` | `string` | No |  |
| `north_korea` | `string` | No |  |
| `northern_mariana_islands` | `string` | No |  |
| `norway` | `string` | No |  |
| `nose` | `string` | No |  |
| `notebook` | `string` | No |  |
| `notebook_with_decorative_cover` | `string` | No |  |
| `notes` | `string` | No |  |
| `nut_and_bolt` | `string` | No |  |
| `o` | `string` | No |  |
| `o2` | `string` | No |  |
| `ocean` | `string` | No |  |
| `octocat` | `string` | No |  |
| `octopus` | `string` | No |  |
| `oden` | `string` | No |  |
| `office` | `string` | No |  |
| `office_worker` | `string` | No |  |
| `oil_drum` | `string` | No |  |
| `ok` | `string` | No |  |
| `ok_hand` | `string` | No |  |
| `ok_man` | `string` | No |  |
| `ok_person` | `string` | No |  |
| `ok_woman` | `string` | No |  |
| `old_key` | `string` | No |  |
| `older_adult` | `string` | No |  |
| `older_man` | `string` | No |  |
| `older_woman` | `string` | No |  |
| `olive` | `string` | No |  |
| `om` | `string` | No |  |
| `oman` | `string` | No |  |
| `on` | `string` | No |  |
| `oncoming_automobile` | `string` | No |  |
| `oncoming_bus` | `string` | No |  |
| `oncoming_police_car` | `string` | No |  |
| `oncoming_taxi` | `string` | No |  |
| `one` | `string` | No |  |
| `one_piece_swimsuit` | `string` | No |  |
| `onion` | `string` | No |  |
| `open_book` | `string` | No |  |
| `open_file_folder` | `string` | No |  |
| `open_hands` | `string` | No |  |
| `open_mouth` | `string` | No |  |
| `open_umbrella` | `string` | No |  |
| `ophiuchus` | `string` | No |  |
| `orange` | `string` | No |  |
| `orange_book` | `string` | No |  |
| `orange_circle` | `string` | No |  |
| `orange_heart` | `string` | No |  |
| `orange_square` | `string` | No |  |
| `orangutan` | `string` | No |  |
| `orthodox_cross` | `string` | No |  |
| `otter` | `string` | No |  |
| `outbox_tray` | `string` | No |  |
| `owl` | `string` | No |  |
| `ox` | `string` | No |  |
| `oyster` | `string` | No |  |
| `package` | `string` | No |  |
| `page_facing_up` | `string` | No |  |
| `page_with_curl` | `string` | No |  |
| `pager` | `string` | No |  |
| `paintbrush` | `string` | No |  |
| `pakistan` | `string` | No |  |
| `palau` | `string` | No |  |
| `palestinian_territories` | `string` | No |  |
| `palm_tree` | `string` | No |  |
| `palms_up_together` | `string` | No |  |
| `panama` | `string` | No |  |
| `pancakes` | `string` | No |  |
| `panda_face` | `string` | No |  |
| `paperclip` | `string` | No |  |
| `paperclips` | `string` | No |  |
| `papua_new_guinea` | `string` | No |  |
| `parachute` | `string` | No |  |
| `paraguay` | `string` | No |  |
| `parasol_on_ground` | `string` | No |  |
| `parking` | `string` | No |  |
| `parrot` | `string` | No |  |
| `part_alternation_mark` | `string` | No |  |
| `partly_sunny` | `string` | No |  |
| `partying_face` | `string` | No |  |
| `passenger_ship` | `string` | No |  |
| `passport_control` | `string` | No |  |
| `pause_button` | `string` | No |  |
| `paw_prints` | `string` | No |  |
| `peace_symbol` | `string` | No |  |
| `peach` | `string` | No |  |
| `peacock` | `string` | No |  |
| `peanuts` | `string` | No |  |
| `pear` | `string` | No |  |
| `pen` | `string` | No |  |
| `pencil` | `string` | No |  |
| `pencil2` | `string` | No |  |
| `penguin` | `string` | No |  |
| `pensive` | `string` | No |  |
| `people_holding_hands` | `string` | No |  |
| `people_hugging` | `string` | No |  |
| `performing_arts` | `string` | No |  |
| `persevere` | `string` | No |  |
| `person_bald` | `string` | No |  |
| `person_curly_hair` | `string` | No |  |
| `person_feeding_baby` | `string` | No |  |
| `person_fencing` | `string` | No |  |
| `person_in_manual_wheelchair` | `string` | No |  |
| `person_in_motorized_wheelchair` | `string` | No |  |
| `person_in_tuxedo` | `string` | No |  |
| `person_red_hair` | `string` | No |  |
| `person_white_hair` | `string` | No |  |
| `person_with_probing_cane` | `string` | No |  |
| `person_with_turban` | `string` | No |  |
| `person_with_veil` | `string` | No |  |
| `peru` | `string` | No |  |
| `petri_dish` | `string` | No |  |
| `philippines` | `string` | No |  |
| `phone` | `string` | No |  |
| `pick` | `string` | No |  |
| `pickup_truck` | `string` | No |  |
| `pie` | `string` | No |  |
| `pig` | `string` | No |  |
| `pig2` | `string` | No |  |
| `pig_nose` | `string` | No |  |
| `pill` | `string` | No |  |
| `pilot` | `string` | No |  |
| `pinata` | `string` | No |  |
| `pinched_fingers` | `string` | No |  |
| `pinching_hand` | `string` | No |  |
| `pineapple` | `string` | No |  |
| `ping_pong` | `string` | No |  |
| `pirate_flag` | `string` | No |  |
| `pisces` | `string` | No |  |
| `pitcairn_islands` | `string` | No |  |
| `pizza` | `string` | No |  |
| `placard` | `string` | No |  |
| `place_of_worship` | `string` | No |  |
| `plate_with_cutlery` | `string` | No |  |
| `play_or_pause_button` | `string` | No |  |
| `pleading_face` | `string` | No |  |
| `plunger` | `string` | No |  |
| `point_down` | `string` | No |  |
| `point_left` | `string` | No |  |
| `point_right` | `string` | No |  |
| `point_up` | `string` | No |  |
| `point_up_2` | `string` | No |  |
| `poland` | `string` | No |  |
| `polar_bear` | `string` | No |  |
| `police_car` | `string` | No |  |
| `police_officer` | `string` | No |  |
| `policeman` | `string` | No |  |
| `policewoman` | `string` | No |  |
| `poodle` | `string` | No |  |
| `poop` | `string` | No |  |
| `popcorn` | `string` | No |  |
| `portugal` | `string` | No |  |
| `post_office` | `string` | No |  |
| `postal_horn` | `string` | No |  |
| `postbox` | `string` | No |  |
| `potable_water` | `string` | No |  |
| `potato` | `string` | No |  |
| `potted_plant` | `string` | No |  |
| `pouch` | `string` | No |  |
| `poultry_leg` | `string` | No |  |
| `pound` | `string` | No |  |
| `pout` | `string` | No |  |
| `pouting_cat` | `string` | No |  |
| `pouting_face` | `string` | No |  |
| `pouting_man` | `string` | No |  |
| `pouting_woman` | `string` | No |  |
| `pray` | `string` | No |  |
| `prayer_beads` | `string` | No |  |
| `pregnant_woman` | `string` | No |  |
| `pretzel` | `string` | No |  |
| `previous_track_button` | `string` | No |  |
| `prince` | `string` | No |  |
| `princess` | `string` | No |  |
| `printer` | `string` | No |  |
| `probing_cane` | `string` | No |  |
| `puerto_rico` | `string` | No |  |
| `punch` | `string` | No |  |
| `purple_circle` | `string` | No |  |
| `purple_heart` | `string` | No |  |
| `purple_square` | `string` | No |  |
| `purse` | `string` | No |  |
| `pushpin` | `string` | No |  |
| `put_litter_in_its_place` | `string` | No |  |
| `qatar` | `string` | No |  |
| `question` | `string` | No |  |
| `rabbit` | `string` | No |  |
| `rabbit2` | `string` | No |  |
| `raccoon` | `string` | No |  |
| `racehorse` | `string` | No |  |
| `racing_car` | `string` | No |  |
| `radio` | `string` | No |  |
| `radio_button` | `string` | No |  |
| `radioactive` | `string` | No |  |
| `rage` | `string` | No |  |
| `rage1` | `string` | No |  |
| `rage2` | `string` | No |  |
| `rage3` | `string` | No |  |
| `rage4` | `string` | No |  |
| `railway_car` | `string` | No |  |
| `railway_track` | `string` | No |  |
| `rainbow` | `string` | No |  |
| `rainbow_flag` | `string` | No |  |
| `raised_back_of_hand` | `string` | No |  |
| `raised_eyebrow` | `string` | No |  |
| `raised_hand` | `string` | No |  |
| `raised_hand_with_fingers_splayed` | `string` | No |  |
| `raised_hands` | `string` | No |  |
| `raising_hand` | `string` | No |  |
| `raising_hand_man` | `string` | No |  |
| `raising_hand_woman` | `string` | No |  |
| `ram` | `string` | No |  |
| `ramen` | `string` | No |  |
| `rat` | `string` | No |  |
| `razor` | `string` | No |  |
| `receipt` | `string` | No |  |
| `record_button` | `string` | No |  |
| `recycle` | `string` | No |  |
| `red_car` | `string` | No |  |
| `red_circle` | `string` | No |  |
| `red_envelope` | `string` | No |  |
| `red_haired_man` | `string` | No |  |
| `red_haired_woman` | `string` | No |  |
| `red_square` | `string` | No |  |
| `registered` | `string` | No |  |
| `relaxed` | `string` | No |  |
| `relieved` | `string` | No |  |
| `reminder_ribbon` | `string` | No |  |
| `repeat` | `string` | No |  |
| `repeat_one` | `string` | No |  |
| `rescue_worker_helmet` | `string` | No |  |
| `restroom` | `string` | No |  |
| `reunion` | `string` | No |  |
| `revolving_hearts` | `string` | No |  |
| `rewind` | `string` | No |  |
| `rhinoceros` | `string` | No |  |
| `ribbon` | `string` | No |  |
| `rice` | `string` | No |  |
| `rice_ball` | `string` | No |  |
| `rice_cracker` | `string` | No |  |
| `rice_scene` | `string` | No |  |
| `right_anger_bubble` | `string` | No |  |
| `ring` | `string` | No |  |
| `ringed_planet` | `string` | No |  |
| `robot` | `string` | No |  |
| `rock` | `string` | No |  |
| `rocket` | `string` | No |  |
| `rofl` | `string` | No |  |
| `roll_eyes` | `string` | No |  |
| `roll_of_paper` | `string` | No |  |
| `roller_coaster` | `string` | No |  |
| `roller_skate` | `string` | No |  |
| `romania` | `string` | No |  |
| `rooster` | `string` | No |  |
| `rose` | `string` | No |  |
| `rosette` | `string` | No |  |
| `rotating_light` | `string` | No |  |
| `round_pushpin` | `string` | No |  |
| `rowboat` | `string` | No |  |
| `rowing_man` | `string` | No |  |
| `rowing_woman` | `string` | No |  |
| `ru` | `string` | No |  |
| `rugby_football` | `string` | No |  |
| `runner` | `string` | No |  |
| `running` | `string` | No |  |
| `running_man` | `string` | No |  |
| `running_shirt_with_sash` | `string` | No |  |
| `running_woman` | `string` | No |  |
| `rwanda` | `string` | No |  |
| `sa` | `string` | No |  |
| `safety_pin` | `string` | No |  |
| `safety_vest` | `string` | No |  |
| `sagittarius` | `string` | No |  |
| `sailboat` | `string` | No |  |
| `sake` | `string` | No |  |
| `salt` | `string` | No |  |
| `samoa` | `string` | No |  |
| `san_marino` | `string` | No |  |
| `sandal` | `string` | No |  |
| `sandwich` | `string` | No |  |
| `santa` | `string` | No |  |
| `sao_tome_principe` | `string` | No |  |
| `sari` | `string` | No |  |
| `sassy_man` | `string` | No |  |
| `sassy_woman` | `string` | No |  |
| `satellite` | `string` | No |  |
| `satisfied` | `string` | No |  |
| `saudi_arabia` | `string` | No |  |
| `sauna_man` | `string` | No |  |
| `sauna_person` | `string` | No |  |
| `sauna_woman` | `string` | No |  |
| `sauropod` | `string` | No |  |
| `saxophone` | `string` | No |  |
| `scarf` | `string` | No |  |
| `school` | `string` | No |  |
| `school_satchel` | `string` | No |  |
| `scientist` | `string` | No |  |
| `scissors` | `string` | No |  |
| `scorpion` | `string` | No |  |
| `scorpius` | `string` | No |  |
| `scotland` | `string` | No |  |
| `scream` | `string` | No |  |
| `scream_cat` | `string` | No |  |
| `screwdriver` | `string` | No |  |
| `scroll` | `string` | No |  |
| `seal` | `string` | No |  |
| `seat` | `string` | No |  |
| `secret` | `string` | No |  |
| `see_no_evil` | `string` | No |  |
| `seedling` | `string` | No |  |
| `selfie` | `string` | No |  |
| `senegal` | `string` | No |  |
| `serbia` | `string` | No |  |
| `service_dog` | `string` | No |  |
| `seven` | `string` | No |  |
| `sewing_needle` | `string` | No |  |
| `seychelles` | `string` | No |  |
| `shallow_pan_of_food` | `string` | No |  |
| `shamrock` | `string` | No |  |
| `shark` | `string` | No |  |
| `shaved_ice` | `string` | No |  |
| `sheep` | `string` | No |  |
| `shell` | `string` | No |  |
| `shield` | `string` | No |  |
| `shinto_shrine` | `string` | No |  |
| `ship` | `string` | No |  |
| `shipit` | `string` | No |  |
| `shirt` | `string` | No |  |
| `shoe` | `string` | No |  |
| `shopping` | `string` | No |  |
| `shopping_cart` | `string` | No |  |
| `shorts` | `string` | No |  |
| `shower` | `string` | No |  |
| `shrimp` | `string` | No |  |
| `shrug` | `string` | No |  |
| `shushing_face` | `string` | No |  |
| `sierra_leone` | `string` | No |  |
| `signal_strength` | `string` | No |  |
| `singapore` | `string` | No |  |
| `singer` | `string` | No |  |
| `sint_maarten` | `string` | No |  |
| `six` | `string` | No |  |
| `six_pointed_star` | `string` | No |  |
| `skateboard` | `string` | No |  |
| `ski` | `string` | No |  |
| `skier` | `string` | No |  |
| `skull` | `string` | No |  |
| `skull_and_crossbones` | `string` | No |  |
| `skunk` | `string` | No |  |
| `sled` | `string` | No |  |
| `sleeping` | `string` | No |  |
| `sleeping_bed` | `string` | No |  |
| `sleepy` | `string` | No |  |
| `slightly_frowning_face` | `string` | No |  |
| `slightly_smiling_face` | `string` | No |  |
| `slot_machine` | `string` | No |  |
| `sloth` | `string` | No |  |
| `slovakia` | `string` | No |  |
| `slovenia` | `string` | No |  |
| `small_airplane` | `string` | No |  |
| `small_blue_diamond` | `string` | No |  |
| `small_orange_diamond` | `string` | No |  |
| `small_red_triangle` | `string` | No |  |
| `small_red_triangle_down` | `string` | No |  |
| `smile` | `string` | No |  |
| `smile_cat` | `string` | No |  |
| `smiley` | `string` | No |  |
| `smiley_cat` | `string` | No |  |
| `smiling_face_with_tear` | `string` | No |  |
| `smiling_face_with_three_hearts` | `string` | No |  |
| `smiling_imp` | `string` | No |  |
| `smirk` | `string` | No |  |
| `smirk_cat` | `string` | No |  |
| `smoking` | `string` | No |  |
| `snail` | `string` | No |  |
| `snake` | `string` | No |  |
| `sneezing_face` | `string` | No |  |
| `snowboarder` | `string` | No |  |
| `snowflake` | `string` | No |  |
| `snowman` | `string` | No |  |
| `snowman_with_snow` | `string` | No |  |
| `soap` | `string` | No |  |
| `sob` | `string` | No |  |
| `soccer` | `string` | No |  |
| `socks` | `string` | No |  |
| `softball` | `string` | No |  |
| `solomon_islands` | `string` | No |  |
| `somalia` | `string` | No |  |
| `soon` | `string` | No |  |
| `sos` | `string` | No |  |
| `sound` | `string` | No |  |
| `south_africa` | `string` | No |  |
| `south_georgia_south_sandwich_islands` | `string` | No |  |
| `south_sudan` | `string` | No |  |
| `space_invader` | `string` | No |  |
| `spades` | `string` | No |  |
| `spaghetti` | `string` | No |  |
| `sparkle` | `string` | No |  |
| `sparkler` | `string` | No |  |
| `sparkles` | `string` | No |  |
| `sparkling_heart` | `string` | No |  |
| `speak_no_evil` | `string` | No |  |
| `speaker` | `string` | No |  |
| `speaking_head` | `string` | No |  |
| `speech_balloon` | `string` | No |  |
| `speedboat` | `string` | No |  |
| `spider` | `string` | No |  |
| `spider_web` | `string` | No |  |
| `spiral_calendar` | `string` | No |  |
| `spiral_notepad` | `string` | No |  |
| `sponge` | `string` | No |  |
| `spoon` | `string` | No |  |
| `squid` | `string` | No |  |
| `sri_lanka` | `string` | No |  |
| `st_barthelemy` | `string` | No |  |
| `st_helena` | `string` | No |  |
| `st_kitts_nevis` | `string` | No |  |
| `st_lucia` | `string` | No |  |
| `st_martin` | `string` | No |  |
| `st_pierre_miquelon` | `string` | No |  |
| `st_vincent_grenadines` | `string` | No |  |
| `stadium` | `string` | No |  |
| `standing_man` | `string` | No |  |
| `standing_person` | `string` | No |  |
| `standing_woman` | `string` | No |  |
| `star` | `string` | No |  |
| `star2` | `string` | No |  |
| `star_and_crescent` | `string` | No |  |
| `star_of_david` | `string` | No |  |
| `star_struck` | `string` | No |  |
| `stars` | `string` | No |  |
| `station` | `string` | No |  |
| `statue_of_liberty` | `string` | No |  |
| `steam_locomotive` | `string` | No |  |
| `stethoscope` | `string` | No |  |
| `stew` | `string` | No |  |
| `stop_button` | `string` | No |  |
| `stop_sign` | `string` | No |  |
| `stopwatch` | `string` | No |  |
| `straight_ruler` | `string` | No |  |
| `strawberry` | `string` | No |  |
| `stuck_out_tongue` | `string` | No |  |
| `stuck_out_tongue_closed_eyes` | `string` | No |  |
| `stuck_out_tongue_winking_eye` | `string` | No |  |
| `student` | `string` | No |  |
| `studio_microphone` | `string` | No |  |
| `stuffed_flatbread` | `string` | No |  |
| `sudan` | `string` | No |  |
| `sun_behind_large_cloud` | `string` | No |  |
| `sun_behind_rain_cloud` | `string` | No |  |
| `sun_behind_small_cloud` | `string` | No |  |
| `sun_with_face` | `string` | No |  |
| `sunflower` | `string` | No |  |
| `sunglasses` | `string` | No |  |
| `sunny` | `string` | No |  |
| `sunrise` | `string` | No |  |
| `sunrise_over_mountains` | `string` | No |  |
| `superhero` | `string` | No |  |
| `superhero_man` | `string` | No |  |
| `superhero_woman` | `string` | No |  |
| `supervillain` | `string` | No |  |
| `supervillain_man` | `string` | No |  |
| `supervillain_woman` | `string` | No |  |
| `surfer` | `string` | No |  |
| `surfing_man` | `string` | No |  |
| `surfing_woman` | `string` | No |  |
| `suriname` | `string` | No |  |
| `sushi` | `string` | No |  |
| `suspect` | `string` | No |  |
| `suspension_railway` | `string` | No |  |
| `svalbard_jan_mayen` | `string` | No |  |
| `swan` | `string` | No |  |
| `swaziland` | `string` | No |  |
| `sweat` | `string` | No |  |
| `sweat_drops` | `string` | No |  |
| `sweat_smile` | `string` | No |  |
| `sweden` | `string` | No |  |
| `sweet_potato` | `string` | No |  |
| `swim_brief` | `string` | No |  |
| `swimmer` | `string` | No |  |
| `swimming_man` | `string` | No |  |
| `swimming_woman` | `string` | No |  |
| `switzerland` | `string` | No |  |
| `symbols` | `string` | No |  |
| `synagogue` | `string` | No |  |
| `syria` | `string` | No |  |
| `syringe` | `string` | No |  |
| `taco` | `string` | No |  |
| `tada` | `string` | No |  |
| `taiwan` | `string` | No |  |
| `tajikistan` | `string` | No |  |
| `takeout_box` | `string` | No |  |
| `tamale` | `string` | No |  |
| `tanabata_tree` | `string` | No |  |
| `tangerine` | `string` | No |  |
| `tanzania` | `string` | No |  |
| `taurus` | `string` | No |  |
| `taxi` | `string` | No |  |
| `tea` | `string` | No |  |
| `teacher` | `string` | No |  |
| `teapot` | `string` | No |  |
| `technologist` | `string` | No |  |
| `teddy_bear` | `string` | No |  |
| `telephone` | `string` | No |  |
| `telephone_receiver` | `string` | No |  |
| `telescope` | `string` | No |  |
| `tennis` | `string` | No |  |
| `tent` | `string` | No |  |
| `test_tube` | `string` | No |  |
| `thailand` | `string` | No |  |
| `thermometer` | `string` | No |  |
| `thinking` | `string` | No |  |
| `thong_sandal` | `string` | No |  |
| `thought_balloon` | `string` | No |  |
| `thread` | `string` | No |  |
| `three` | `string` | No |  |
| `thumbsdown` | `string` | No |  |
| `thumbsup` | `string` | No |  |
| `ticket` | `string` | No |  |
| `tickets` | `string` | No |  |
| `tiger` | `string` | No |  |
| `tiger2` | `string` | No |  |
| `timer_clock` | `string` | No |  |
| `timor_leste` | `string` | No |  |
| `tipping_hand_man` | `string` | No |  |
| `tipping_hand_person` | `string` | No |  |
| `tipping_hand_woman` | `string` | No |  |
| `tired_face` | `string` | No |  |
| `tm` | `string` | No |  |
| `togo` | `string` | No |  |
| `toilet` | `string` | No |  |
| `tokelau` | `string` | No |  |
| `tokyo_tower` | `string` | No |  |
| `tomato` | `string` | No |  |
| `tonga` | `string` | No |  |
| `tongue` | `string` | No |  |
| `toolbox` | `string` | No |  |
| `tooth` | `string` | No |  |
| `toothbrush` | `string` | No |  |
| `top` | `string` | No |  |
| `tophat` | `string` | No |  |
| `tornado` | `string` | No |  |
| `tr` | `string` | No |  |
| `trackball` | `string` | No |  |
| `tractor` | `string` | No |  |
| `traffic_light` | `string` | No |  |
| `train` | `string` | No |  |
| `train2` | `string` | No |  |
| `tram` | `string` | No |  |
| `transgender_flag` | `string` | No |  |
| `transgender_symbol` | `string` | No |  |
| `trex` | `string` | No |  |
| `triangular_flag_on_post` | `string` | No |  |
| `triangular_ruler` | `string` | No |  |
| `trident` | `string` | No |  |
| `trinidad_tobago` | `string` | No |  |
| `tristan_da_cunha` | `string` | No |  |
| `triumph` | `string` | No |  |
| `trolleybus` | `string` | No |  |
| `trollface` | `string` | No |  |
| `trophy` | `string` | No |  |
| `tropical_drink` | `string` | No |  |
| `tropical_fish` | `string` | No |  |
| `truck` | `string` | No |  |
| `trumpet` | `string` | No |  |
| `tshirt` | `string` | No |  |
| `tulip` | `string` | No |  |
| `tumbler_glass` | `string` | No |  |
| `tunisia` | `string` | No |  |
| `turkey` | `string` | No |  |
| `turkmenistan` | `string` | No |  |
| `turks_caicos_islands` | `string` | No |  |
| `turtle` | `string` | No |  |
| `tuvalu` | `string` | No |  |
| `tv` | `string` | No |  |
| `twisted_rightwards_arrows` | `string` | No |  |
| `two` | `string` | No |  |
| `two_hearts` | `string` | No |  |
| `two_men_holding_hands` | `string` | No |  |
| `two_women_holding_hands` | `string` | No |  |
| `u5272` | `string` | No |  |
| `u5408` | `string` | No |  |
| `u55b6` | `string` | No |  |
| `u6307` | `string` | No |  |
| `u6708` | `string` | No |  |
| `u6709` | `string` | No |  |
| `u6e80` | `string` | No |  |
| `u7121` | `string` | No |  |
| `u7533` | `string` | No |  |
| `u7981` | `string` | No |  |
| `u7a7a` | `string` | No |  |
| `uganda` | `string` | No |  |
| `uk` | `string` | No |  |
| `ukraine` | `string` | No |  |
| `umbrella` | `string` | No |  |
| `unamused` | `string` | No |  |
| `underage` | `string` | No |  |
| `unicorn` | `string` | No |  |
| `united_arab_emirates` | `string` | No |  |
| `united_nations` | `string` | No |  |
| `unlock` | `string` | No |  |
| `up` | `string` | No |  |
| `upside_down_face` | `string` | No |  |
| `uruguay` | `string` | No |  |
| `us` | `string` | No |  |
| `us_outlying_islands` | `string` | No |  |
| `us_virgin_islands` | `string` | No |  |
| `uzbekistan` | `string` | No |  |
| `v` | `string` | No |  |
| `vampire` | `string` | No |  |
| `vampire_man` | `string` | No |  |
| `vampire_woman` | `string` | No |  |
| `vanuatu` | `string` | No |  |
| `vatican_city` | `string` | No |  |
| `venezuela` | `string` | No |  |
| `vertical_traffic_light` | `string` | No |  |
| `vhs` | `string` | No |  |
| `vibration_mode` | `string` | No |  |
| `video_camera` | `string` | No |  |
| `video_game` | `string` | No |  |
| `vietnam` | `string` | No |  |
| `violin` | `string` | No |  |
| `virgo` | `string` | No |  |
| `volcano` | `string` | No |  |
| `volleyball` | `string` | No |  |
| `vomiting_face` | `string` | No |  |
| `vs` | `string` | No |  |
| `vulcan_salute` | `string` | No |  |
| `waffle` | `string` | No |  |
| `wales` | `string` | No |  |
| `walking` | `string` | No |  |
| `walking_man` | `string` | No |  |
| `walking_woman` | `string` | No |  |
| `wallis_futuna` | `string` | No |  |
| `waning_crescent_moon` | `string` | No |  |
| `waning_gibbous_moon` | `string` | No |  |
| `warning` | `string` | No |  |
| `wastebasket` | `string` | No |  |
| `watch` | `string` | No |  |
| `water_buffalo` | `string` | No |  |
| `water_polo` | `string` | No |  |
| `watermelon` | `string` | No |  |
| `wave` | `string` | No |  |
| `wavy_dash` | `string` | No |  |
| `waxing_crescent_moon` | `string` | No |  |
| `waxing_gibbous_moon` | `string` | No |  |
| `wc` | `string` | No |  |
| `weary` | `string` | No |  |
| `wedding` | `string` | No |  |
| `weight_lifting` | `string` | No |  |
| `weight_lifting_man` | `string` | No |  |
| `weight_lifting_woman` | `string` | No |  |
| `western_sahara` | `string` | No |  |
| `whale` | `string` | No |  |
| `whale2` | `string` | No |  |
| `wheel_of_dharma` | `string` | No |  |
| `wheelchair` | `string` | No |  |
| `white_check_mark` | `string` | No |  |
| `white_circle` | `string` | No |  |
| `white_flag` | `string` | No |  |
| `white_flower` | `string` | No |  |
| `white_haired_man` | `string` | No |  |
| `white_haired_woman` | `string` | No |  |
| `white_heart` | `string` | No |  |
| `white_large_square` | `string` | No |  |
| `white_medium_small_square` | `string` | No |  |
| `white_medium_square` | `string` | No |  |
| `white_small_square` | `string` | No |  |
| `white_square_button` | `string` | No |  |
| `wilted_flower` | `string` | No |  |
| `wind_chime` | `string` | No |  |
| `wind_face` | `string` | No |  |
| `window` | `string` | No |  |
| `wine_glass` | `string` | No |  |
| `wink` | `string` | No |  |
| `wolf` | `string` | No |  |
| `woman` | `string` | No |  |
| `woman_artist` | `string` | No |  |
| `woman_astronaut` | `string` | No |  |
| `woman_beard` | `string` | No |  |
| `woman_cartwheeling` | `string` | No |  |
| `woman_cook` | `string` | No |  |
| `woman_dancing` | `string` | No |  |
| `woman_facepalming` | `string` | No |  |
| `woman_factory_worker` | `string` | No |  |
| `woman_farmer` | `string` | No |  |
| `woman_feeding_baby` | `string` | No |  |
| `woman_firefighter` | `string` | No |  |
| `woman_health_worker` | `string` | No |  |
| `woman_in_manual_wheelchair` | `string` | No |  |
| `woman_in_motorized_wheelchair` | `string` | No |  |
| `woman_in_tuxedo` | `string` | No |  |
| `woman_judge` | `string` | No |  |
| `woman_juggling` | `string` | No |  |
| `woman_mechanic` | `string` | No |  |
| `woman_office_worker` | `string` | No |  |
| `woman_pilot` | `string` | No |  |
| `woman_playing_handball` | `string` | No |  |
| `woman_playing_water_polo` | `string` | No |  |
| `woman_scientist` | `string` | No |  |
| `woman_shrugging` | `string` | No |  |
| `woman_singer` | `string` | No |  |
| `woman_student` | `string` | No |  |
| `woman_teacher` | `string` | No |  |
| `woman_technologist` | `string` | No |  |
| `woman_with_headscarf` | `string` | No |  |
| `woman_with_probing_cane` | `string` | No |  |
| `woman_with_turban` | `string` | No |  |
| `woman_with_veil` | `string` | No |  |
| `womans_clothes` | `string` | No |  |
| `womans_hat` | `string` | No |  |
| `women_wrestling` | `string` | No |  |
| `womens` | `string` | No |  |
| `wood` | `string` | No |  |
| `woozy_face` | `string` | No |  |
| `world_map` | `string` | No |  |
| `worm` | `string` | No |  |
| `worried` | `string` | No |  |
| `wrench` | `string` | No |  |
| `wrestling` | `string` | No |  |
| `writing_hand` | `string` | No |  |
| `x` | `string` | No |  |
| `yarn` | `string` | No |  |
| `yawning_face` | `string` | No |  |
| `yellow_circle` | `string` | No |  |
| `yellow_heart` | `string` | No |  |
| `yellow_square` | `string` | No |  |
| `yemen` | `string` | No |  |
| `yen` | `string` | No |  |
| `yin_yang` | `string` | No |  |
| `yo_yo` | `string` | No |  |
| `yum` | `string` | No |  |
| `zambia` | `string` | No |  |
| `zany_face` | `string` | No |  |
| `zap` | `string` | No |  |
| `zebra` | `string` | No |  |
| `zero` | `string` | No |  |
| `zimbabwe` | `string` | No |  |
| `zipper_mouth_face` | `string` | No |  |
| `zombie` | `string` | No |  |
| `zombie_man` | `string` | No |  |
| `zombie_woman` | `string` | No |  |
| `zzz` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Emoji():load({ id = "emoji_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmptyObjectEntity

```lua
local empty_object = client:EmptyObject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attestations` | `table` | No |  |
| `enable_debug_logging` | `boolean` | No | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Yes | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `table` | No | Array of unique strings. |
| `key_id` | `string` | Yes | ID of the key you used to encrypt the secret. |
| `languages` | `table` | No | CodeQL languages to be analyzed. |
| `name` | `string` | Yes | The name of the variable. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `selected_repository_ids` | `table` | No | An array of repository ids that can access the organization variable. |
| `state` | `string` | No | The desired state of code scanning default setup. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `use_default` | `boolean` | Yes | Whether to use the default template or not. |
| `value` | `string` | Yes | The value of the variable. |
| `visibility` | `string` | Yes | The type of repositories in the organization that can access the variable. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `attestations` | - | - | - |
| `enable_debug_logging` | - | - | - |
| `encrypted_value` | - | - | Yes |
| `include_claim_keys` | - | - | Yes |
| `key_id` | - | - | Yes |
| `languages` | - | - | - |
| `name` | - | - | - |
| `query_suite` | - | - | - |
| `runner_label` | - | - | - |
| `runner_type` | - | - | - |
| `selected_repository_ids` | - | - | - |
| `state` | - | - | - |
| `threat_model` | - | - | - |
| `use_default` | - | - | - |
| `value` | - | - | - |
| `visibility` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EmptyObject():create({
  org_id = --[[ string ]],
  encrypted_value = --[[ string ]],
  key_id = --[[ string ]],
  name = --[[ string ]],
  use_default = --[[ boolean ]],
  value = --[[ string ]],
  visibility = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmptyObject():load({ subject_digest = "subject_digest", username = "username" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EmptyObject():update({
  org_id = "org_id",
  secret_name = "secret_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmptyObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseTeamEntity

```lua
local enterprise_team = client:EnterpriseTeam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | A description of the team. |
| `group_id` | `string` | Yes | The ID of the IdP group to assign team membership with. |
| `group_name` | `string` | No | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `members_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the team. |
| `organization_selection_type` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `sync_to_organizations` | `string` | No | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `group_id` | - | - | Yes | Yes | - |
| `group_name` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `members_url` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `organization_selection_type` | - | - | - | - | - |
| `slug` | - | - | - | - | - |
| `sync_to_organizations` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EnterpriseTeam():create({
  enterprise = --[[ string ]],
  created_at = --[[ string ]],
  group_id = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  members_url = --[[ string ]],
  name = --[[ string ]],
  slug = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnterpriseTeam():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EnterpriseTeam():load({ id = "enterprise_team_id", enterprise = "enterprise" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EnterpriseTeam():remove({ id = "enterprise_team_id", enterprise = "enterprise" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EnterpriseTeam():update({
  id = "enterprise_team_id",
  enterprise = "enterprise",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseTeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseTeamMembershipEntity

```lua
local enterprise_team_membership = client:EnterpriseTeamMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EnterpriseTeamMembership():remove({ enterprise = "enterprise", id = "id", team_id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseTeamMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentEntity

```lua
local environment = client:Environment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `table` | Yes | The type of deployment branch policy for this environment. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the environment. |
| `name` | `string` | Yes | The name of the environment. |
| `node_id` | `string` | Yes |  |
| `prevent_self_review` | `boolean` | No | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `table` | No | Built-in deployment protection rules for the environment. |
| `reviewers` | `table` | No | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | Yes |  |
| `wait_timer` | `number` | No | The amount of time to delay a job after the job is initially triggered. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Environment():load({ id = "environment_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Environment():update({
  id = "environment_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnvironmentApprovalEntity

```lua
local environment_approval = client:EnvironmentApproval(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | Yes | The comment submitted with the deployment review |
| `environments` | `table` | Yes | The list of environments that were approved or rejected |
| `state` | `string` | Yes | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `table` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnvironmentApproval():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentApprovalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | Yes | Actor |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `org` | `table` | Yes | Actor |
| `payload` | `table` | Yes |  |
| `public` | `boolean` | Yes |  |
| `repo` | `table` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Event():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Event():load({ org = "org", username = "username" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeedEntity

```lua
local feed = client:Feed(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_actor_url` | `string` | No |  |
| `current_user_organization_url` | `string` | No |  |
| `current_user_organization_urls` | `table` | No |  |
| `current_user_public_url` | `string` | No |  |
| `current_user_url` | `string` | No |  |
| `links` | `table` | Yes |  |
| `repository_discussions_category_url` | `string` | No | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | No | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` | No |  |
| `timeline_url` | `string` | Yes |  |
| `user_url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Feed():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileCommitEntity

```lua
local file_commit = client:FileCommit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | Yes | The author of the file. |
| `branch` | `string` | No | The branch name. |
| `commit` | `table` | Yes |  |
| `committer` | `table` | Yes | The person that committed the file. |
| `content` | `table` | Yes | The new file content, using Base64 encoding. |
| `message` | `string` | Yes | The commit message. |
| `sha` | `string` | No | **Required if you are updating a file**. |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FileCommit():remove({ owner = "owner", path = "path", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FileCommit():update({
  owner = "owner",
  path = "path",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FollowerEntity

```lua
local follower = client:Follower(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Follower():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FollowingEntity

```lua
local following = client:Following(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Following():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FullRepositoryEntity

```lua
local full_repository = client:FullRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `boolean` | No | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `allow_forking` | `boolean` | No | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `boolean` | No | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `allow_rebase_merge` | `boolean` | No | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `allow_squash_merge` | `boolean` | No | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `allow_update_branch` | `boolean` | No | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is allowed. |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether to archive this repository. |
| `assignees_url` | `string` | Yes |  |
| `auto_init` | `boolean` | No | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `table` | Yes | Code of Conduct Simple |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `boolean` | No | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the new repository. |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `github_id` | `number` | Yes |  |
| `gitignore_template` | `string` | No | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `boolean` | Yes | Whether discussions are enabled. |
| `has_downloads` | `boolean` | No | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `boolean` | Yes | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `string` | Yes | A URL with more information about the repository. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `include_all_branches` | `boolean` | No | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `boolean` | No | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `license_template` | `string` | No | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the new repository. |
| `network_count` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organization` | `table` | Yes | A GitHub user. |
| `owner` | `table` | Yes | A GitHub user. |
| `parent` | `table` | Yes | A repository on GitHub. |
| `permissions` | `table` | Yes |  |
| `private` | `boolean` | Yes | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `table` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `source` | `table` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_id` | `number` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template_repository` | `table` | Yes | A repository on GitHub. |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `allow_auto_merge` | - | - | - |
| `allow_forking` | - | - | - |
| `allow_merge_commit` | - | - | - |
| `allow_rebase_merge` | - | - | - |
| `allow_squash_merge` | - | - | - |
| `allow_update_branch` | - | - | - |
| `anonymous_access_enabled` | - | - | - |
| `archive_url` | - | - | - |
| `archived` | - | - | Yes |
| `assignees_url` | - | - | - |
| `auto_init` | - | - | - |
| `blobs_url` | - | - | - |
| `branches_url` | - | - | - |
| `clone_url` | - | - | - |
| `code_of_conduct` | - | - | - |
| `collaborators_url` | - | - | - |
| `comments_url` | - | - | - |
| `commits_url` | - | - | - |
| `compare_url` | - | - | - |
| `contents_url` | - | - | - |
| `contributors_url` | - | - | - |
| `created_at` | - | - | - |
| `custom_properties` | - | - | - |
| `default_branch` | - | - | Yes |
| `delete_branch_on_merge` | - | - | - |
| `deployments_url` | - | - | - |
| `description` | - | Yes | Yes |
| `disabled` | - | - | - |
| `downloads_url` | - | - | - |
| `events_url` | - | - | - |
| `fork` | - | - | - |
| `forks` | - | - | - |
| `forks_count` | - | - | - |
| `forks_url` | - | - | - |
| `full_name` | - | - | - |
| `git_commits_url` | - | - | - |
| `git_refs_url` | - | - | - |
| `git_tags_url` | - | - | - |
| `git_url` | - | - | - |
| `github_id` | - | - | - |
| `gitignore_template` | - | - | - |
| `has_discussions` | - | Yes | - |
| `has_downloads` | - | - | - |
| `has_issues` | - | Yes | Yes |
| `has_pages` | - | - | - |
| `has_projects` | - | Yes | Yes |
| `has_wiki` | - | Yes | Yes |
| `homepage` | - | Yes | Yes |
| `hooks_url` | - | - | - |
| `html_url` | - | - | - |
| `id` | - | - | - |
| `include_all_branches` | - | - | - |
| `is_template` | - | - | - |
| `issue_comment_url` | - | - | - |
| `issue_events_url` | - | - | - |
| `issues_url` | - | - | - |
| `keys_url` | - | - | - |
| `labels_url` | - | - | - |
| `language` | - | - | - |
| `languages_url` | - | - | - |
| `license` | - | - | - |
| `license_template` | - | - | - |
| `master_branch` | - | - | - |
| `merge_commit_message` | - | - | - |
| `merge_commit_title` | - | - | - |
| `merges_url` | - | - | - |
| `milestones_url` | - | - | - |
| `mirror_url` | - | - | - |
| `name` | - | - | Yes |
| `network_count` | - | - | - |
| `node_id` | - | - | - |
| `notifications_url` | - | - | - |
| `open_issues` | - | - | - |
| `open_issues_count` | - | - | - |
| `organization` | - | - | - |
| `owner` | - | Yes | - |
| `parent` | - | - | - |
| `permissions` | - | - | - |
| `private` | - | Yes | Yes |
| `pulls_url` | - | - | - |
| `pushed_at` | - | - | - |
| `releases_url` | - | - | - |
| `security_and_analysis` | - | - | - |
| `size` | - | - | - |
| `source` | - | - | - |
| `squash_merge_commit_message` | - | - | - |
| `squash_merge_commit_title` | - | - | - |
| `ssh_url` | - | - | - |
| `stargazers_count` | - | - | - |
| `stargazers_url` | - | - | - |
| `statuses_url` | - | - | - |
| `subscribers_count` | - | - | - |
| `subscribers_url` | - | - | - |
| `subscription_url` | - | - | - |
| `svn_url` | - | - | - |
| `tags_url` | - | - | - |
| `team_id` | - | - | - |
| `teams_url` | - | - | - |
| `temp_clone_token` | - | - | - |
| `template_repository` | - | - | - |
| `topics` | - | - | - |
| `trees_url` | - | - | - |
| `updated_at` | - | - | - |
| `url` | - | - | - |
| `use_squash_pr_title_as_default` | - | - | - |
| `visibility` | - | - | - |
| `watchers` | - | - | - |
| `watchers_count` | - | - | - |
| `web_commit_signoff_required` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FullRepository():create({
  archive_url = --[[ string ]],
  archived = --[[ boolean ]],
  assignees_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  clone_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  created_at = --[[ string ]],
  default_branch = --[[ string ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  disabled = --[[ boolean ]],
  downloads_url = --[[ string ]],
  events_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks = --[[ number ]],
  forks_count = --[[ number ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  git_url = --[[ string ]],
  github_id = --[[ number ]],
  has_discussions = --[[ boolean ]],
  has_issues = --[[ boolean ]],
  has_pages = --[[ boolean ]],
  has_projects = --[[ boolean ]],
  has_wiki = --[[ boolean ]],
  homepage = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ string ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  language = --[[ string ]],
  languages_url = --[[ string ]],
  license = --[[ table ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  mirror_url = --[[ string ]],
  name = --[[ string ]],
  network_count = --[[ number ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  open_issues = --[[ number ]],
  open_issues_count = --[[ number ]],
  organization = --[[ table ]],
  owner = --[[ table ]],
  parent = --[[ table ]],
  permissions = --[[ table ]],
  private = --[[ boolean ]],
  pulls_url = --[[ string ]],
  pushed_at = --[[ string ]],
  releases_url = --[[ string ]],
  size = --[[ number ]],
  source = --[[ table ]],
  ssh_url = --[[ string ]],
  stargazers_count = --[[ number ]],
  stargazers_url = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_count = --[[ number ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  svn_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  template_repository = --[[ table ]],
  trees_url = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  watchers = --[[ number ]],
  watchers_count = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FullRepository():load({ owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FullRepository():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FullRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GistEntity

```lua
local gist = client:Gist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | No |  |
| `comments_enabled` | `boolean` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No | Description of the gist |
| `files` | `table` | No | Names and content for the files that make up the gist |
| `fork_of` | `table` | Yes | Gist |
| `forks` | `table` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `table` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `table` | Yes | A GitHub user. |
| `public` | `boolean` | No |  |
| `truncated` | `boolean` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No | A GitHub user. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `comments` | - | Yes | - | - | - |
| `comments_enabled` | - | - | - | - | - |
| `comments_url` | - | Yes | - | - | - |
| `commits_url` | - | Yes | - | - | - |
| `created_at` | - | Yes | - | - | - |
| `description` | - | Yes | - | - | - |
| `files` | - | Yes | Yes | - | - |
| `fork_of` | - | - | - | - | - |
| `forks` | - | - | - | - | - |
| `forks_url` | - | Yes | - | - | - |
| `git_pull_url` | - | Yes | - | - | - |
| `git_push_url` | - | Yes | - | - | - |
| `history` | - | - | - | - | - |
| `html_url` | - | Yes | - | - | - |
| `id` | - | Yes | - | - | - |
| `node_id` | - | Yes | - | - | - |
| `owner` | - | - | - | - | - |
| `public` | - | Yes | - | - | - |
| `truncated` | - | - | - | - | - |
| `updated_at` | - | Yes | - | - | - |
| `url` | - | Yes | - | - | - |
| `user` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Gist():create({
  fork_of = --[[ table ]],
  owner = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Gist():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Gist():load({ id = "gist_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Gist():remove({ id = "gist_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Gist():update({
  id = "gist_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GistCommentEntity

```lua
local gist_comment = client:GistComment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `avatar_url` | `string` | Yes |  |
| `body` | `string` | Yes | The comment text. |
| `created_at` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GistComment():create({
  id = --[[ string ]],
  author_association = --[[ string ]],
  avatar_url = --[[ string ]],
  body = --[[ string ]],
  created_at = --[[ string ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  gists_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  html_url = --[[ string ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  organizations_url = --[[ string ]],
  received_events_url = --[[ string ]],
  repos_url = --[[ string ]],
  site_admin = --[[ boolean ]],
  starred_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GistComment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GistComment():load({ id = 1, gist_id = "gist_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GistComment():update({
  id = 1,
  gist_id = "gist_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GistCommitEntity

```lua
local gist_commit = client:GistCommit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_status` | `table` | Yes |  |
| `committed_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `version` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GistCommit():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GistSimpleEntity

```lua
local gist_simple = client:GistSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `number` | No |  |
| `comments_enabled` | `boolean` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `files` | `table` | No |  |
| `fork_of` | `table` | Yes | Gist |
| `forks` | `table` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `table` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `table` | Yes | A GitHub user. |
| `public` | `boolean` | No |  |
| `truncated` | `boolean` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GistSimple():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitEntity

```lua
local git = client:Git(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Git():remove({ owner = "owner", ref = "ref", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitCommitEntity

```lua
local git_commit = client:GitCommit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `table` | Yes | Identifying information for the git-user |
| `committer` | `table` | Yes | Identifying information for the git-user |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the commit |
| `node_id` | `string` | Yes |  |
| `parents` | `table` | Yes | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | Yes | SHA for the commit |
| `signature` | `string` | No | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `table` | Yes | The SHA of the tree object this commit points to |
| `url` | `string` | Yes |  |
| `verification` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `author` | - | - |
| `committer` | - | Yes |
| `html_url` | - | - |
| `id` | - | - |
| `message` | - | - |
| `node_id` | - | - |
| `parents` | - | Yes |
| `sha` | - | - |
| `signature` | - | - |
| `tree` | - | - |
| `url` | - | - |
| `verification` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitCommit():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  author = --[[ table ]],
  committer = --[[ table ]],
  html_url = --[[ string ]],
  message = --[[ string ]],
  node_id = --[[ string ]],
  parents = --[[ table ]],
  sha = --[[ string ]],
  tree = --[[ table ]],
  url = --[[ string ]],
  verification = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GitCommit():load({ id = "git_commit_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitCommitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitRefEntity

```lua
local git_ref = client:GitRef(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `force` | `boolean` | No | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `object` | `table` | Yes |  |
| `ref` | `string` | Yes | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | Yes | SHA for the reference |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitRef():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  node_id = --[[ string ]],
  object = --[[ table ]],
  ref = --[[ string ]],
  sha = --[[ string ]],
  type = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GitRef():load({ id = "git_ref_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GitRef():update({
  id = "git_ref_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitRefEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitTagEntity

```lua
local git_tag = client:GitTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the tag |
| `node_id` | `string` | Yes |  |
| `object` | `table` | Yes | The SHA of the git object this is tagging. |
| `sha` | `string` | Yes |  |
| `tag` | `string` | Yes | Name of the tag |
| `tagger` | `table` | Yes | An object with information about the individual creating the tag. |
| `type` | `string` | Yes | The type of the object we're tagging. |
| `url` | `string` | Yes | URL for the tag |
| `verification` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitTag():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  message = --[[ string ]],
  node_id = --[[ string ]],
  object = --[[ table ]],
  sha = --[[ string ]],
  tag = --[[ string ]],
  tagger = --[[ table ]],
  type = --[[ string ]],
  url = --[[ string ]],
  verification = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GitTag():load({ id = "git_tag_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitTreeEntity

```lua
local git_tree = client:GitTree(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_tree` | `string` | No | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` | No |  |
| `sha` | `string` | Yes |  |
| `tree` | `table` | Yes | Objects specifying a tree structure |
| `truncated` | `boolean` | Yes |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GitTree():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  sha = --[[ string ]],
  tree = --[[ table ]],
  truncated = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GitTree():load({ id = "git_tree_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitTreeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitignoreEntity

```lua
local gitignore = client:Gitignore(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Gitignore():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitignoreEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GitignoreTemplateEntity

```lua
local gitignore_template = client:GitignoreTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `source` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GitignoreTemplate():load({ id = "gitignore_template_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitignoreTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GlobalAdvisoryEntity

```lua
local global_advisory = client:GlobalAdvisory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `table` | Yes | The users who contributed to the advisory. |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `table` | Yes |  |
| `cvss_severities` | `table` | No |  |
| `cwes` | `table` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `epss` | `table` | No | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | Yes | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `id` | `string` | No |  |
| `identifiers` | `table` | Yes |  |
| `nvd_published_at` | `string` | Yes | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `table` | Yes |  |
| `repository_advisory_url` | `string` | Yes | The API URL for the repository advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `source_code_location` | `string` | Yes | The URL of the advisory's source code. |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `type` | `string` | Yes | The type of advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `table` | Yes | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GlobalAdvisory():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GlobalAdvisory():load({ id = "global_advisory_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalAdvisoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GpgKeyEntity

```lua
local gpg_key = client:GpgKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `armored_public_key` | `string` | Yes | A GPG key in ASCII-armored format. |
| `can_certify` | `boolean` | Yes |  |
| `can_encrypt_comms` | `boolean` | Yes |  |
| `can_encrypt_storage` | `boolean` | Yes |  |
| `can_sign` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `emails` | `table` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key_id` | `string` | Yes |  |
| `name` | `string` | No | A descriptive name for the new key. |
| `primary_key_id` | `number` | Yes |  |
| `public_key` | `string` | Yes |  |
| `raw_key` | `string` | Yes |  |
| `revoked` | `boolean` | Yes |  |
| `subkeys` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GpgKey():create({
  armored_public_key = --[[ string ]],
  can_certify = --[[ boolean ]],
  can_encrypt_comms = --[[ boolean ]],
  can_encrypt_storage = --[[ boolean ]],
  can_sign = --[[ boolean ]],
  created_at = --[[ string ]],
  emails = --[[ table ]],
  expires_at = --[[ string ]],
  id = --[[ number ]],
  key_id = --[[ string ]],
  primary_key_id = --[[ number ]],
  public_key = --[[ string ]],
  raw_key = --[[ string ]],
  revoked = --[[ boolean ]],
  subkeys = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GpgKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GpgKey():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpgKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HookEntity

```lua
local hook = client:Hook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `table` | No | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `table` | Yes | Configuration object of the webhook |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `table` | Yes | Determines what events the hook is triggered for. |
| `id` | `number` | Yes | Unique identifier of the webhook. |
| `last_response` | `table` | Yes |  |
| `name` | `string` | Yes | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` | Yes |  |
| `remove_events` | `table` | No | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `active` | - | - | Yes | Yes |
| `add_events` | - | - | - | - |
| `config` | - | - | Yes | Yes |
| `created_at` | - | - | - | - |
| `deliveries_url` | - | - | - | - |
| `events` | - | - | Yes | Yes |
| `id` | - | - | - | - |
| `last_response` | - | - | - | - |
| `name` | - | - | Yes | - |
| `ping_url` | - | - | - | - |
| `remove_events` | - | - | - | - |
| `test_url` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Hook():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  active = --[[ boolean ]],
  config = --[[ table ]],
  created_at = --[[ string ]],
  events = --[[ table ]],
  id = --[[ number ]],
  last_response = --[[ table ]],
  name = --[[ string ]],
  ping_url = --[[ string ]],
  test_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Hook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Hook():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Hook():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HookDeliveryEntity

```lua
local hook_delivery = client:HookDelivery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the delivery was delivered. |
| `duration` | `number` | Yes | Time spent delivering. |
| `event` | `string` | Yes | The event that triggered the delivery. |
| `guid` | `string` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `number` | Yes | Unique identifier of the delivery. |
| `installation_id` | `number` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `boolean` | Yes | Whether the delivery is a redelivery. |
| `repository_id` | `number` | Yes | The id of the repository associated with this event. |
| `request` | `table` | Yes |  |
| `response` | `table` | Yes |  |
| `status` | `string` | Yes | Description of the status of the attempted delivery |
| `status_code` | `number` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |
| `url` | `string` | No | The URL target of the delivery. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:HookDelivery():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookDeliveryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HookDeliveryItemEntity

```lua
local hook_delivery_item = client:HookDeliveryItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the webhook delivery occurred. |
| `duration` | `number` | Yes | Time spent delivering. |
| `event` | `string` | Yes | The event that triggered the delivery. |
| `guid` | `string` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `number` | Yes | Unique identifier of the webhook delivery. |
| `installation_id` | `number` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `boolean` | Yes | Whether the webhook delivery is a redelivery. |
| `repository_id` | `number` | Yes | The id of the repository associated with this event. |
| `status` | `string` | Yes | Describes the response returned after attempting the delivery. |
| `status_code` | `number` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:HookDeliveryItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookDeliveryItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HostedComputeEntity

```lua
local hosted_compute = client:HostedCompute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `table` | No | The unique identifier of each network settings in the configuration. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:HostedCompute():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:HostedCompute():remove({ network_configuration_id = "network_configuration_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HostedComputeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HovercardEntity

```lua
local hovercard = client:Hovercard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `octicon` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Hovercard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HovercardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImportEntity

```lua
local import = client:Import(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors_count` | `number` | No |  |
| `authors_url` | `string` | Yes |  |
| `commit_count` | `number` | No |  |
| `error_message` | `string` | No |  |
| `failed_step` | `string` | No |  |
| `has_large_files` | `boolean` | No |  |
| `html_url` | `string` | Yes |  |
| `human_name` | `string` | No |  |
| `import_percent` | `number` | No |  |
| `large_files_count` | `number` | No |  |
| `large_files_size` | `number` | No |  |
| `message` | `string` | No |  |
| `project_choices` | `table` | No |  |
| `push_percent` | `number` | No |  |
| `repository_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `status_text` | `string` | No |  |
| `svc_root` | `string` | No |  |
| `svn_root` | `string` | No |  |
| `tfvc_project` | `string` | No | For a tfvc import, the name of the project that is being imported. |
| `url` | `string` | Yes |  |
| `use_lfs` | `boolean` | No | Whether to store large files during the import. |
| `vcs` | `string` | Yes | The originating VCS type. |
| `vcs_password` | `string` | No | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | `string` | Yes | The URL of the originating repository. |
| `vcs_username` | `string` | No | If authentication is required, the username to provide to `vcs_url`. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `authors_count` | - | - |
| `authors_url` | - | - |
| `commit_count` | - | - |
| `error_message` | - | - |
| `failed_step` | - | - |
| `has_large_files` | - | - |
| `html_url` | - | - |
| `human_name` | - | - |
| `import_percent` | - | - |
| `large_files_count` | - | - |
| `large_files_size` | - | - |
| `message` | - | - |
| `project_choices` | - | - |
| `push_percent` | - | - |
| `repository_url` | - | - |
| `status` | - | - |
| `status_text` | - | - |
| `svc_root` | - | - |
| `svn_root` | - | - |
| `tfvc_project` | - | - |
| `url` | - | - |
| `use_lfs` | - | - |
| `vcs` | Yes | Yes |
| `vcs_password` | - | - |
| `vcs_url` | - | - |
| `vcs_username` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Import():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Import():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InstallationEntity

```lua
local installation = client:Installation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `app_id` | `number` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `client_id` | `string` | No |  |
| `contact_email` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `events` | `table` | Yes |  |
| `has_multiple_single_files` | `boolean` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the installation. |
| `permissions` | `table` | Yes | The permissions granted to the user access token. |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `table` | No |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `table` | Yes | A GitHub user. |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Installation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Installation():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Installation():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Installation():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InstallationTokenEntity

```lua
local installation_token = client:InstallationToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `permissions` | `table` | No | The permissions granted to the user access token. |
| `repositories` | `table` | No | List of repository names that the token should have access to |
| `repository_ids` | `table` | No | List of repository IDs that the token should have access to |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:InstallationToken():create({
  id = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallationTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationEntity

```lua
local integration = client:Integration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `table` | Yes | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `events` | `table` | Yes | The list of events for the GitHub app. |
| `external_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the GitHub app |
| `installations_count` | `number` | No | The number of installations associated with the GitHub app. |
| `name` | `string` | Yes | The name of the GitHub app |
| `node_id` | `string` | Yes |  |
| `owner` | `any` | Yes |  |
| `permissions` | `table` | Yes | The set of permissions for the GitHub app |
| `slug` | `string` | No | The slug name of the GitHub app |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Integration():create({
  branch_id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  apps = --[[ table ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  events = --[[ table ]],
  external_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  permissions = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Integration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Integration():load({ app_slug = "app_slug" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Integration():remove({ branch_id = "branch_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Integration():update({
  branch_id = "branch_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IntegrationInstallationEntity

```lua
local integration_installation = client:IntegrationInstallation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the request installation. |
| `node_id` | `string` | No |  |
| `requester` | `table` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IntegrationInstallation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationInstallationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InteractionEntity

```lua
local interaction = client:Interaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `limit` | `string` | No |  |
| `origin` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Interaction():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Interaction():remove()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InteractionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InteractionLimitEntity

```lua
local interaction_limit = client:InteractionLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | Yes |  |
| `expiry` | `string` | No | The duration of the interaction restriction. |
| `limit` | `string` | Yes | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:InteractionLimit():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InteractionLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueEntity

```lua
local issue = client:Issue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `actor` | `table` | Yes | A GitHub user. |
| `after_id` | `number` | No | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `table` | Yes | A GitHub user. |
| `assignees` | `table` | No | Usernames of people to assign this issue to. |
| `assigner` | `table` | Yes | A GitHub user. |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `before_id` | `number` | No | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | No | Contents of the issue comment |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `closed_at` | `string` | Yes |  |
| `closed_by` | `table` | Yes | A GitHub user. |
| `color` | `string` | No | 6-character hex code, without the leading #, identifying the color |
| `comments` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_id` | `string` | Yes |  |
| `commit_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default` | `boolean` | No | Whether this label comes by default in a new repository. |
| `description` | `string` | No | Optional description of the label, such as its purpose. |
| `dismissed_review` | `table` | Yes |  |
| `draft` | `boolean` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the issue comment |
| `issue` | `table` | Yes | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `table` | Yes |  |
| `issue_field_values` | `table` | No |  |
| `issue_id` | `number` | Yes | The id of the issue that blocks the current issue |
| `issue_url` | `string` | Yes |  |
| `label` | `table` | Yes | Issue Event Label |
| `labels` | `table` | Yes | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` | Yes |  |
| `lock_reason` | `string` | No | The reason for locking the issue or pull request conversation. |
| `locked` | `boolean` | Yes |  |
| `milestone` | `table` | Yes | Issue Event Milestone |
| `name` | `string` | No | The name of the label. |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | No | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `project_card` | `table` | Yes | Issue Event Project Card |
| `pull_request` | `table` | Yes |  |
| `reactions` | `table` | Yes |  |
| `rename` | `table` | Yes | Issue Event Rename |
| `replace_parent` | `boolean` | No | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `table` | Yes | A repository on GitHub. |
| `repository_url` | `string` | Yes |  |
| `requested_reviewer` | `table` | Yes | A GitHub user. |
| `requested_team` | `table` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `table` | Yes | A GitHub user. |
| `state` | `string` | Yes | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | No | The reason for the current state |
| `sub_issue_id` | `number` | Yes | The id of the sub-issue to add. |
| `sub_issues_summary` | `table` | Yes |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes | Title of the issue |
| `type` | `table` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the issue comment |
| `user` | `table` | Yes | A GitHub user. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active_lock_reason` | - | - | - | - | - |
| `actor` | - | Yes | - | - | - |
| `after_id` | - | - | - | - | - |
| `assignee` | - | - | Yes | Yes | - |
| `assignees` | - | - | - | - | - |
| `assigner` | - | - | - | - | - |
| `author_association` | Yes | Yes | - | Yes | - |
| `before_id` | - | - | - | - | - |
| `body` | - | - | Yes | Yes | - |
| `body_html` | - | - | - | - | - |
| `body_text` | - | - | - | - | - |
| `closed_at` | - | - | - | - | - |
| `closed_by` | - | - | - | - | - |
| `color` | - | Yes | - | - | - |
| `comments` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commit_id` | - | Yes | - | - | - |
| `commit_url` | - | Yes | - | - | - |
| `created_at` | - | Yes | - | - | - |
| `default` | - | Yes | - | - | - |
| `description` | - | Yes | - | - | - |
| `dismissed_review` | - | - | - | - | - |
| `draft` | - | - | - | - | - |
| `event` | - | Yes | - | - | - |
| `events_url` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | Yes | Yes | Yes | - |
| `issue` | - | - | - | - | - |
| `issue_dependencies_summary` | - | - | - | - | - |
| `issue_field_values` | - | - | - | - | - |
| `issue_id` | - | - | - | - | - |
| `issue_url` | - | - | - | - | - |
| `label` | - | - | - | - | - |
| `labels` | - | - | Yes | Yes | - |
| `labels_url` | - | - | - | - | - |
| `lock_reason` | - | - | - | - | - |
| `locked` | - | - | - | - | - |
| `milestone` | - | - | Yes | Yes | - |
| `name` | - | Yes | - | - | - |
| `node_id` | - | Yes | Yes | Yes | - |
| `number` | - | - | - | - | - |
| `parent_issue_url` | - | - | - | - | - |
| `performed_via_github_app` | - | Yes | - | - | - |
| `project_card` | - | - | - | - | - |
| `pull_request` | - | - | - | - | - |
| `reactions` | - | - | - | - | - |
| `rename` | - | - | - | - | - |
| `replace_parent` | - | - | - | - | - |
| `repository` | - | - | - | - | - |
| `repository_url` | - | - | - | - | - |
| `requested_reviewer` | - | - | - | - | - |
| `requested_team` | - | - | - | - | - |
| `review_requester` | - | - | - | - | - |
| `state` | - | - | - | Yes | - |
| `state_reason` | - | - | - | - | - |
| `sub_issue_id` | - | - | - | - | - |
| `sub_issues_summary` | - | - | - | - | - |
| `timeline_url` | - | - | - | - | - |
| `title` | - | - | - | Yes | - |
| `type` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | Yes | Yes | Yes | - |
| `user` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Issue():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  actor = --[[ table ]],
  assignee = --[[ table ]],
  assigner = --[[ table ]],
  author_association = --[[ string ]],
  closed_at = --[[ string ]],
  closed_by = --[[ table ]],
  comments = --[[ number ]],
  comments_url = --[[ string ]],
  commit_id = --[[ string ]],
  commit_url = --[[ string ]],
  created_at = --[[ string ]],
  dismissed_review = --[[ table ]],
  event = --[[ string ]],
  events_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  issue = --[[ table ]],
  issue_dependencies_summary = --[[ table ]],
  issue_id = --[[ number ]],
  issue_url = --[[ string ]],
  label = --[[ table ]],
  labels = --[[ table ]],
  labels_url = --[[ string ]],
  locked = --[[ boolean ]],
  milestone = --[[ table ]],
  node_id = --[[ string ]],
  number = --[[ number ]],
  performed_via_github_app = --[[ table ]],
  project_card = --[[ table ]],
  pull_request = --[[ table ]],
  reactions = --[[ table ]],
  rename = --[[ table ]],
  repository = --[[ table ]],
  repository_url = --[[ string ]],
  requested_reviewer = --[[ table ]],
  requested_team = --[[ table ]],
  review_requester = --[[ table ]],
  state = --[[ string ]],
  sub_issue_id = --[[ number ]],
  sub_issues_summary = --[[ table ]],
  title = --[[ string ]],
  type = --[[ table ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Issue():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Issue():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Issue():remove({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Issue():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IssueTypeEntity

```lua
local issue_type = client:IssueType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | The color of the issue type. |
| `created_at` | `string` | No | The time the issue type created. |
| `description` | `string` | Yes | The description of the issue type. |
| `id` | `number` | Yes | The unique identifier of the issue type. |
| `is_enabled` | `boolean` | No | The enabled state of the issue type. |
| `name` | `string` | Yes | The name of the issue type. |
| `node_id` | `string` | Yes | The node identifier of the issue type. |
| `updated_at` | `string` | No | The time the issue type last updated. |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `color` | - | - | - |
| `created_at` | - | - | - |
| `description` | - | Yes | Yes |
| `id` | - | - | - |
| `is_enabled` | - | Yes | Yes |
| `name` | - | - | - |
| `node_id` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IssueType():create({
  org_id = --[[ string ]],
  description = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IssueType():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IssueType():update({
  id = 1,
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobEntity

```lua
local job = client:Job(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_run_url` | `string` | Yes |  |
| `completed_at` | `string` | Yes | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | Yes | The outcome of the job. |
| `created_at` | `string` | Yes | The time that the job created, in ISO 8601 format. |
| `head_branch` | `string` | Yes | The name of the current branch. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being run. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The id of the job. |
| `labels` | `table` | Yes | Labels for the workflow job. |
| `name` | `string` | Yes | The name of the job. |
| `node_id` | `string` | Yes |  |
| `run_attempt` | `number` | No | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `number` | Yes | The id of the associated workflow run. |
| `run_url` | `string` | Yes |  |
| `runner_group_id` | `number` | Yes | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `string` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `number` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | Yes | The name of the runner to which this job has been assigned. |
| `started_at` | `string` | Yes | The time that the job started, in ISO 8601 format. |
| `status` | `string` | Yes | The phase of the lifecycle that the job is currently in. |
| `steps` | `table` | No | Steps in this job. |
| `url` | `string` | Yes |  |
| `workflow_name` | `string` | Yes | The name of the workflow. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Job():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## KeyEntity

```lua
local key = client:Key(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key` | `string` | Yes | The public SSH key to add to your GitHub account. |
| `last_used` | `string` | No |  |
| `read_only` | `boolean` | Yes |  |
| `title` | `string` | Yes | A descriptive name for the new key. |
| `url` | `string` | Yes |  |
| `verified` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | Yes | - |
| `id` | - | - | - |
| `key` | - | - | - |
| `last_used` | - | - | - |
| `read_only` | - | - | - |
| `title` | - | - | Yes |
| `url` | - | - | - |
| `verified` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Key():create({
  created_at = --[[ string ]],
  id = --[[ number ]],
  key = --[[ string ]],
  read_only = --[[ boolean ]],
  title = --[[ string ]],
  url = --[[ string ]],
  verified = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Key():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Key():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LabelEntity

```lua
local label = client:Label(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | Yes | 6-character hex code, without the leading #, identifying the color |
| `default` | `boolean` | Yes | Whether this label comes by default in a new repository. |
| `description` | `string` | Yes | Optional description of the label, such as its purpose. |
| `id` | `number` | Yes | Unique identifier for the label. |
| `name` | `string` | Yes | The name of the label. |
| `new_name` | `string` | No | The new name of the label. |
| `node_id` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the label |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `color` | - | - | Yes | Yes |
| `default` | - | - | - | - |
| `description` | - | - | Yes | Yes |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `new_name` | - | - | - | - |
| `node_id` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Label():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  color = --[[ string ]],
  default = --[[ boolean ]],
  description = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Label():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Label():load({ id = "label_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Label():update({
  id = "label_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LanguageEntity

```lua
local language = client:Language(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `C` | `number` | No |  |
| `Python` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Language():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LicenseEntity

```lua
local license = client:License(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes |  |
| `conditions` | `table` | Yes |  |
| `content` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `encoding` | `string` | Yes |  |
| `featured` | `boolean` | Yes |  |
| `git_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `implementation` | `string` | Yes |  |
| `key` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `limitations` | `table` | Yes |  |
| `links` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `permissions` | `table` | Yes |  |
| `sha` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `spdx_id` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `body` | - | - |
| `conditions` | - | - |
| `content` | - | - |
| `description` | - | - |
| `download_url` | - | - |
| `encoding` | - | - |
| `featured` | - | - |
| `git_url` | - | - |
| `html_url` | - | Yes |
| `id` | - | - |
| `implementation` | - | - |
| `key` | - | - |
| `license` | - | - |
| `limitations` | - | - |
| `links` | - | - |
| `name` | - | - |
| `node_id` | - | - |
| `path` | - | - |
| `permissions` | - | - |
| `sha` | - | - |
| `size` | - | - |
| `spdx_id` | - | - |
| `type` | - | - |
| `url` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:License():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:License():load({ id = "license_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LicenseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MarkdownEntity

```lua
local markdown = client:Markdown(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `string` | No | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | No | The rendering mode. |
| `text` | `string` | Yes | The Markdown text to render in HTML. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Markdown():create({
  text = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarkdownEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MarketplaceListingPlanEntity

```lua
local marketplace_listing_plan = client:MarketplaceListingPlan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts_url` | `string` | Yes |  |
| `bullets` | `table` | Yes |  |
| `description` | `string` | Yes |  |
| `has_free_trial` | `boolean` | Yes |  |
| `id` | `number` | Yes |  |
| `monthly_price_in_cents` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `number` | `number` | Yes |  |
| `price_model` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `unit_name` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `yearly_price_in_cents` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MarketplaceListingPlan():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplaceListingPlanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MarketplacePurchaseEntity

```lua
local marketplace_purchase = client:MarketplacePurchase(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `marketplace_pending_change` | `table` | No |  |
| `marketplace_purchase` | `table` | Yes |  |
| `organization_billing_email` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MarketplacePurchase():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MarketplacePurchase():load({ account_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplacePurchaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Member():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MembershipEntity

```lua
local membership = client:Membership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Membership():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Membership():load({ id = "membership_id", enterprise = "enterprise", team_id = "team_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Membership():update({
  id = "membership_id",
  enterprise = "enterprise",
  team_id = "team_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MergedUpstreamEntity

```lua
local merged_upstream = client:MergedUpstream(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_branch` | `string` | No |  |
| `branch` | `string` | Yes | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` | No |  |
| `message` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MergedUpstream():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  branch = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergedUpstreamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetaEntity

```lua
local meta = client:Meta(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Meta():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Meta():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MetarootEntity

```lua
local metaroot = client:Metaroot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorizations_url` | `string` | Yes |  |
| `code_search_url` | `string` | Yes |  |
| `commit_search_url` | `string` | Yes |  |
| `current_user_authorizations_html_url` | `string` | Yes |  |
| `current_user_repositories_url` | `string` | Yes |  |
| `current_user_url` | `string` | Yes |  |
| `emails_url` | `string` | Yes |  |
| `emojis_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `feeds_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `hub_url` | `string` | No |  |
| `issue_search_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `label_search_url` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `organization_repositories_url` | `string` | Yes |  |
| `organization_teams_url` | `string` | Yes |  |
| `organization_url` | `string` | Yes |  |
| `public_gists_url` | `string` | Yes |  |
| `rate_limit_url` | `string` | Yes |  |
| `repository_search_url` | `string` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `starred_gists_url` | `string` | Yes |  |
| `starred_url` | `string` | Yes |  |
| `topic_search_url` | `string` | No |  |
| `user_organizations_url` | `string` | Yes |  |
| `user_repositories_url` | `string` | Yes |  |
| `user_search_url` | `string` | Yes |  |
| `user_url` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Metaroot():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetarootEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MigrationEntity

```lua
local migration = client:Migration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `boolean` | No |  |
| `archive_url` | `string` | No |  |
| `archived` | `boolean` | No |  |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `exclude` | `table` | No | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `boolean` | Yes | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `boolean` | Yes | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `boolean` | Yes | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `boolean` | Yes | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `boolean` | Yes | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | No |  |
| `forks_count` | `number` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `guid` | `string` | Yes |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | No |  |
| `has_issues` | `boolean` | No |  |
| `has_pages` | `boolean` | No |  |
| `has_projects` | `boolean` | No |  |
| `has_wiki` | `boolean` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `is_template` | `boolean` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | No |  |
| `lock_repositories` | `boolean` | Yes | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `org_metadata_only` | `boolean` | Yes | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | No |  |
| `private` | `boolean` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repositories` | `table` | Yes | The repositories included in the migration. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `table` | No |  |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `number` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `allow_forking` | - | - | - | - |
| `archive_url` | - | Yes | - | - |
| `archived` | - | - | - | - |
| `assignees_url` | - | - | - | - |
| `blobs_url` | - | - | - | - |
| `branches_url` | - | - | - | - |
| `clone_url` | - | - | - | - |
| `code_of_conduct` | - | - | - | - |
| `collaborators_url` | - | - | - | - |
| `comments_url` | - | - | - | - |
| `commits_url` | - | - | - | - |
| `compare_url` | - | - | - | - |
| `contents_url` | - | - | - | - |
| `contributors_url` | - | - | - | - |
| `created_at` | - | Yes | - | - |
| `custom_properties` | - | - | - | - |
| `default_branch` | - | - | - | - |
| `delete_branch_on_merge` | - | - | - | - |
| `deployments_url` | - | - | - | - |
| `description` | - | - | - | - |
| `disabled` | - | - | - | - |
| `downloads_url` | - | - | - | - |
| `events_url` | - | - | - | - |
| `exclude` | - | - | - | - |
| `exclude_attachments` | - | - | Yes | - |
| `exclude_git_data` | - | - | Yes | - |
| `exclude_metadata` | - | - | Yes | - |
| `exclude_owner_projects` | - | - | Yes | - |
| `exclude_releases` | - | - | Yes | - |
| `fork` | - | - | - | - |
| `forks` | - | - | - | - |
| `forks_count` | - | - | - | - |
| `forks_url` | - | - | - | - |
| `full_name` | - | - | - | - |
| `git_commits_url` | - | - | - | - |
| `git_refs_url` | - | - | - | - |
| `git_tags_url` | - | - | - | - |
| `git_url` | - | - | - | - |
| `guid` | - | - | - | - |
| `has_discussions` | - | - | - | - |
| `has_downloads` | - | - | - | - |
| `has_issues` | - | - | - | - |
| `has_pages` | - | - | - | - |
| `has_projects` | - | - | - | - |
| `has_wiki` | - | - | - | - |
| `homepage` | - | - | - | - |
| `hooks_url` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | - | - |
| `is_template` | - | - | - | - |
| `issue_comment_url` | - | - | - | - |
| `issue_events_url` | - | - | - | - |
| `issues_url` | - | - | - | - |
| `keys_url` | - | - | - | - |
| `labels_url` | - | - | - | - |
| `language` | - | - | - | - |
| `languages_url` | - | - | - | - |
| `license` | - | - | - | - |
| `lock_repositories` | - | - | Yes | - |
| `merges_url` | - | - | - | - |
| `milestones_url` | - | - | - | - |
| `mirror_url` | - | - | - | - |
| `name` | - | - | - | - |
| `network_count` | - | - | - | - |
| `node_id` | - | - | - | - |
| `notifications_url` | - | - | - | - |
| `open_issues` | - | - | - | - |
| `open_issues_count` | - | - | - | - |
| `org_metadata_only` | - | - | Yes | - |
| `owner` | - | - | - | - |
| `permissions` | - | - | - | - |
| `private` | - | - | - | - |
| `pulls_url` | - | - | - | - |
| `pushed_at` | - | - | - | - |
| `releases_url` | - | - | - | - |
| `repositories` | - | - | - | - |
| `role_name` | - | - | - | - |
| `security_and_analysis` | - | - | - | - |
| `size` | - | - | - | - |
| `ssh_url` | - | - | - | - |
| `stargazers_count` | - | - | - | - |
| `stargazers_url` | - | - | - | - |
| `state` | - | - | - | - |
| `statuses_url` | - | - | - | - |
| `subscribers_count` | - | - | - | - |
| `subscribers_url` | - | - | - | - |
| `subscription_url` | - | - | - | - |
| `svn_url` | - | - | - | - |
| `tags_url` | - | - | - | - |
| `teams_url` | - | - | - | - |
| `temp_clone_token` | - | - | - | - |
| `topics` | - | - | - | - |
| `trees_url` | - | - | - | - |
| `updated_at` | - | Yes | - | - |
| `url` | - | - | - | - |
| `visibility` | - | - | - | - |
| `watchers` | - | - | - | - |
| `watchers_count` | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Migration():create({
  assignees_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  created_at = --[[ string ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  downloads_url = --[[ string ]],
  events_url = --[[ string ]],
  exclude_attachments = --[[ boolean ]],
  exclude_git_data = --[[ boolean ]],
  exclude_metadata = --[[ boolean ]],
  exclude_owner_projects = --[[ boolean ]],
  exclude_releases = --[[ boolean ]],
  fork = --[[ boolean ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  guid = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  languages_url = --[[ string ]],
  lock_repositories = --[[ boolean ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  org_metadata_only = --[[ boolean ]],
  owner = --[[ table ]],
  private = --[[ boolean ]],
  pulls_url = --[[ string ]],
  releases_url = --[[ string ]],
  repositories = --[[ table ]],
  stargazers_url = --[[ string ]],
  state = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  trees_url = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Migration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Migration():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Migration():remove({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MilestoneEntity

```lua
local milestone = client:Milestone(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `closed_issues` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `description` | `string` | No | A description of the milestone. |
| `due_on` | `string` | No | The milestone due date. |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes | The number of the milestone. |
| `open_issues` | `number` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | No | The state of the milestone. |
| `subscriptions_url` | `string` | Yes |  |
| `title` | `string` | Yes | The title of the milestone. |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `avatar_url` | - | - | - | - |
| `closed_at` | - | - | - | - |
| `closed_issues` | - | - | - | - |
| `created_at` | - | - | - | - |
| `creator` | - | - | - | - |
| `description` | - | Yes | - | - |
| `due_on` | - | Yes | - | - |
| `email` | - | - | - | - |
| `events_url` | - | - | - | - |
| `followers_url` | - | - | - | - |
| `following_url` | - | - | - | - |
| `gists_url` | - | - | - | - |
| `gravatar_id` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | - | - |
| `labels_url` | - | - | - | - |
| `login` | - | - | - | - |
| `name` | - | - | - | - |
| `node_id` | - | - | - | - |
| `number` | - | - | - | - |
| `open_issues` | - | - | - | - |
| `organizations_url` | - | - | - | - |
| `received_events_url` | - | - | - | - |
| `repos_url` | - | - | - | - |
| `site_admin` | - | - | - | - |
| `starred_at` | - | - | - | - |
| `starred_url` | - | - | - | - |
| `state` | - | Yes | - | - |
| `subscriptions_url` | - | - | - | - |
| `title` | - | - | - | Yes |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `user_view_type` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Milestone():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  avatar_url = --[[ string ]],
  closed_at = --[[ string ]],
  closed_issues = --[[ number ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  gists_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  labels_url = --[[ string ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  number = --[[ number ]],
  open_issues = --[[ number ]],
  organizations_url = --[[ string ]],
  received_events_url = --[[ string ]],
  repos_url = --[[ string ]],
  site_admin = --[[ boolean ]],
  starred_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  title = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Milestone():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Milestone():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Milestone():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MinimalRepositoryEntity

```lua
local minimal_repository = client:MinimalRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | No |  |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | No |  |
| `forks_count` | `number` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | No |  |
| `has_issues` | `boolean` | No |  |
| `has_pages` | `boolean` | No |  |
| `has_projects` | `boolean` | No |  |
| `has_wiki` | `boolean` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `is_template` | `boolean` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | No |  |
| `open_issues_count` | `number` | No |  |
| `owner` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | No |  |
| `private` | `boolean` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `table` | No |  |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `number` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `number` | No |  |
| `watchers_count` | `number` | No |  |
| `web_commit_signoff_required` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MinimalRepository():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MinimalRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NetworkConfigurationEntity

```lua
local network_configuration = client:NetworkConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `table` | No | The unique identifier of each network settings in the configuration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `compute_service` | - | - | - |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `network_settings_ids` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NetworkConfiguration():create({
  org_id = --[[ string ]],
  created_on = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NetworkConfiguration():load({ id = "network_configuration_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NetworkConfiguration():update({
  id = "network_configuration_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NetworkSettingEntity

```lua
local network_setting = client:NetworkSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The unique identifier of the network settings resource. |
| `name` | `string` | Yes | The name of the network settings resource. |
| `network_configuration_id` | `string` | No | The identifier of the network configuration that is using this settings resource. |
| `region` | `string` | Yes | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | `string` | Yes | The subnet this network settings resource is configured for. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NetworkSetting():load({ id = "network_setting_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OidcCustomSubEntity

```lua
local oidc_custom_sub = client:OidcCustomSub(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `table` | Yes | Array of unique strings. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OidcCustomSub():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OidcCustomSubEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OidcCustomSubRepoEntity

```lua
local oidc_custom_sub_repo = client:OidcCustomSubRepo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `table` | No | Array of unique strings. |
| `use_default` | `boolean` | Yes | Whether to use the default template or not. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OidcCustomSubRepo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OidcCustomSubRepoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgEntity

```lua
local org = client:Org(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `action` | `string` | Yes | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `number` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `artifact_url` | `string` | No | The URL where the artifact is stored. |
| `async` | `boolean` | No | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `table` | No |  |
| `attestations_subject_digests` | `table` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `string` | Yes |  |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `billing_email` | `string` | No | Billing email address. |
| `blog` | `string` | No |  |
| `client_id` | `string` | No |  |
| `company` | `string` | No | The company name. |
| `contact_email` | `string` | No |  |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `default_repository_permission` | `string` | No | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `boolean` | No | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `string` | No | The description of the company. |
| `digest` | `string` | Yes | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `boolean` | No | Whether the user has direct membership in the organization. |
| `email` | `string` | No | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `table` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `table` | Yes |  |
| `events_url` | `string` | Yes |  |
| `filled_seats` | `number` | No |  |
| `has_multiple_single_files` | `boolean` | No |  |
| `has_organization_projects` | `boolean` | No | Whether an organization can use organization projects. |
| `has_repository_projects` | `boolean` | No | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the installation. |
| `issues_url` | `string` | Yes |  |
| `location` | `string` | No | The location. |
| `login` | `string` | Yes |  |
| `members_allowed_repository_creation_type` | `string` | No | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `boolean` | No | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `boolean` | No | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `boolean` | No | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `boolean` | No | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `boolean` | No | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `boolean` | No | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `boolean` | No | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `boolean` | No | Whether organization members can fork private organization repositories. |
| `members_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the artifact. |
| `node_id` | `string` | Yes |  |
| `organization` | `table` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `page_info` | `table` | No | Information about the current page. |
| `pat_ids` | `table` | Yes | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `table` | No | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | No | The path of the artifact. |
| `permissions` | `table` | Yes | The permissions granted to the user access token. |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `number` | Yes |  |
| `properties` | `table` | Yes | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` | Yes |  |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `reason` | `string` | No | Reason for approving or denying the request. |
| `registry_url` | `string` | Yes | The base URL of the artifact registry. |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository` | `string` | No | The repository name within the registry. |
| `repository_names` | `table` | Yes | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `seats` | `number` | No |  |
| `secret_scanning_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | No | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `boolean` | No | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `boolean` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `table` | No |  |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `space` | `number` | Yes |  |
| `state` | `string` | Yes | The state of the member in the organization. |
| `status` | `string` | No | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `table` | No |  |
| `subject_digests` | `table` | Yes | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `table` | Yes | A GitHub user. |
| `target_id` | `number` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `total_count` | `number` | No |  |
| `twitter_username` | `string` | No | The Twitter username of the company. |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `web_commit_signoff_required` | `boolean` | No | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `access_tokens_url` | - | - | - | - | - |
| `account` | - | - | - | - | - |
| `action` | - | - | - | - | - |
| `advanced_security_enabled_for_new_repositories` | - | - | - | - | - |
| `app_id` | - | - | - | - | - |
| `app_slug` | - | - | - | - | - |
| `artifact_url` | - | - | - | - | - |
| `async` | - | - | - | - | - |
| `attestations` | - | - | - | - | - |
| `attestations_subject_digests` | - | - | - | - | - |
| `avatar_url` | - | - | - | - | - |
| `base_role` | - | - | - | - | - |
| `billing_email` | - | - | - | - | - |
| `blog` | - | - | - | - | - |
| `client_id` | - | - | - | - | - |
| `company` | - | - | - | - | - |
| `contact_email` | - | - | - | - | - |
| `created_at` | - | Yes | - | - | - |
| `default_repository_permission` | - | - | - | - | - |
| `dependabot_alerts_enabled_for_new_repositories` | - | - | - | - | - |
| `dependabot_security_updates_enabled_for_new_repositories` | - | - | - | - | - |
| `dependency_graph_enabled_for_new_repositories` | - | - | - | - | - |
| `deploy_keys_enabled_for_repositories` | - | - | - | - | - |
| `description` | - | Yes | - | - | - |
| `digest` | - | Yes | - | - | - |
| `direct_membership` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `enterprise_teams_providing_indirect_membership` | - | - | - | - | - |
| `events` | - | - | - | - | - |
| `events_url` | - | - | - | - | - |
| `filled_seats` | - | - | - | - | - |
| `has_multiple_single_files` | - | - | - | - | - |
| `has_organization_projects` | - | - | - | - | - |
| `has_repository_projects` | - | - | - | - | - |
| `hooks_url` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | Yes | - | - | - |
| `issues_url` | - | - | - | - | - |
| `location` | - | - | - | - | - |
| `login` | - | - | - | - | - |
| `members_allowed_repository_creation_type` | - | - | - | - | - |
| `members_can_create_internal_repositories` | - | - | - | - | - |
| `members_can_create_pages` | - | - | - | - | - |
| `members_can_create_private_pages` | - | - | - | - | - |
| `members_can_create_private_repositories` | - | - | - | - | - |
| `members_can_create_public_pages` | - | - | - | - | - |
| `members_can_create_public_repositories` | - | - | - | - | - |
| `members_can_create_repositories` | - | - | - | - | - |
| `members_can_fork_private_repositories` | - | - | - | - | - |
| `members_url` | - | - | - | - | - |
| `name` | - | Yes | - | - | - |
| `node_id` | - | - | - | - | - |
| `organization` | - | - | - | - | - |
| `organization_url` | - | - | - | - | - |
| `page_info` | - | - | - | - | - |
| `pat_ids` | - | - | - | - | - |
| `pat_request_ids` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `permissions` | - | - | - | - | - |
| `predicate_type` | - | - | - | - | - |
| `private_repos` | - | - | - | - | - |
| `properties` | - | - | - | - | - |
| `public_members_url` | - | - | - | - | - |
| `query_suite` | - | - | - | - | - |
| `reason` | - | - | - | - | - |
| `registry_url` | - | Yes | - | - | - |
| `repos_url` | - | - | - | - | - |
| `repositories_url` | - | - | - | - | - |
| `repository` | - | - | - | - | - |
| `repository_names` | - | - | - | - | - |
| `repository_selection` | - | - | - | - | - |
| `role` | - | - | - | - | - |
| `seats` | - | - | - | - | - |
| `secret_scanning_enabled_for_new_repositories` | - | - | - | - | - |
| `secret_scanning_push_protection_custom_link` | - | - | - | - | - |
| `secret_scanning_push_protection_custom_link_enabled` | - | - | - | - | - |
| `secret_scanning_push_protection_enabled_for_new_repositories` | - | - | - | - | - |
| `single_file_name` | - | - | - | - | - |
| `single_file_paths` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `space` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `storage_records` | - | - | - | - | - |
| `subject_digests` | - | - | - | - | - |
| `suspended_at` | - | - | - | - | - |
| `suspended_by` | - | - | - | - | - |
| `target_id` | - | - | - | - | - |
| `target_type` | - | - | - | - | - |
| `total_count` | - | - | - | - | - |
| `twitter_username` | - | - | - | - | - |
| `updated_at` | - | Yes | - | - | - |
| `url` | - | - | - | - | - |
| `user` | - | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Org():create({
  enablement = --[[ string ]],
  org = --[[ string ]],
  security_product = --[[ string ]],
  access_tokens_url = --[[ string ]],
  account = --[[ any ]],
  action = --[[ string ]],
  app_id = --[[ number ]],
  app_slug = --[[ string ]],
  avatar_url = --[[ string ]],
  created_at = --[[ string ]],
  digest = --[[ string ]],
  events = --[[ table ]],
  events_url = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  issues_url = --[[ string ]],
  login = --[[ string ]],
  members_url = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  organization = --[[ table ]],
  organization_url = --[[ string ]],
  pat_ids = --[[ table ]],
  permissions = --[[ table ]],
  private_repos = --[[ number ]],
  properties = --[[ table ]],
  public_members_url = --[[ string ]],
  registry_url = --[[ string ]],
  repos_url = --[[ string ]],
  repositories_url = --[[ string ]],
  repository_names = --[[ table ]],
  repository_selection = --[[ string ]],
  role = --[[ string ]],
  single_file_name = --[[ string ]],
  space = --[[ number ]],
  state = --[[ string ]],
  subject_digests = --[[ table ]],
  suspended_at = --[[ string ]],
  suspended_by = --[[ table ]],
  target_id = --[[ number ]],
  target_type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Org():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Org():load({ id = "org_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Org():remove({ id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Org():update({
  id = "org_id",
  username = "username",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgHookEntity

```lua
local org_hook = client:OrgHook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Yes | Determines if notifications are sent when the webhook is triggered. |
| `config` | `table` | Yes | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `table` | Yes | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes | Must be passed as "web". |
| `ping_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `active` | - | - | Yes | Yes |
| `config` | - | - | - | - |
| `created_at` | - | - | - | - |
| `deliveries_url` | - | - | - | - |
| `events` | - | - | Yes | Yes |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `ping_url` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrgHook():create({
  id = --[[ string ]],
  active = --[[ boolean ]],
  config = --[[ table ]],
  created_at = --[[ string ]],
  events = --[[ table ]],
  name = --[[ string ]],
  ping_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrgHook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrgHook():load({ id = 1, org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrgHook():update({
  id = 1,
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgHookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgMembershipEntity

```lua
local org_membership = client:OrgMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_membership` | `boolean` | No | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `table` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` | No |  |
| `organization` | `table` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `permissions` | `table` | Yes |  |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `state` | `string` | Yes | The state of the member in the organization. |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `direct_membership` | - | - |
| `enterprise_teams_providing_indirect_membership` | - | - |
| `id` | - | - |
| `organization` | - | - |
| `organization_url` | - | - |
| `permissions` | - | - |
| `role` | - | Yes |
| `state` | - | - |
| `url` | - | - |
| `user` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrgMembership():load({ id = "org_membership_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrgMembership():update({
  id = "org_membership_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationEntity

```lua
local org_private_registry_configuration = client:OrgPrivateRegistryConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the private registry configuration. |
| `registry_type` | `string` | Yes | The registry type. |
| `updated_at` | `string` | Yes |  |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrgPrivateRegistryConfiguration():load({ org_id = "org_id", secret_name = "secret_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgPrivateRegistryConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity

```lua
local org_private_registry_configuration_with_selected_repository = client:OrgPrivateRegistryConfigurationWithSelectedRepository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encrypted_value` | `string` | Yes | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` | No |  |
| `key_id` | `string` | Yes | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | Yes | The registry type. |
| `selected_repository_ids` | `table` | No | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | Yes | The URL of the private registry. |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrgPrivateRegistryConfigurationWithSelectedRepository():create({
  id = --[[ string ]],
  encrypted_value = --[[ string ]],
  key_id = --[[ string ]],
  registry_type = --[[ string ]],
  url = --[[ string ]],
  visibility = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgRepoCustomPropertyValueEntity

```lua
local org_repo_custom_property_value = client:OrgRepoCustomPropertyValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `properties` | `table` | Yes | List of custom property names and associated values |
| `repository_full_name` | `string` | Yes |  |
| `repository_id` | `number` | Yes |  |
| `repository_name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrgRepoCustomPropertyValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgRepoCustomPropertyValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationActionsSecretEntity

```lua
local organization_actions_secret = client:OrganizationActionsSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `selected_repositories_url` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes | Visibility of a secret |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationActionsSecret():load({ id = "organization_actions_secret_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationActionsSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationActionsVariableEntity

```lua
local organization_actions_variable = client:OrganizationActionsVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the variable. |
| `selected_repositories_url` | `string` | No |  |
| `updated_at` | `string` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `string` | Yes | The value of the variable. |
| `visibility` | `string` | Yes | Visibility of a variable |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationActionsVariable():load({ id = "organization_actions_variable_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationActionsVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationDependabotSecretEntity

```lua
local organization_dependabot_secret = client:OrganizationDependabotSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `selected_repositories_url` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes | Visibility of a secret |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationDependabotSecret():load({ id = "organization_dependabot_secret_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationDependabotSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationInvitationEntity

```lua
local organization_invitation = client:OrganizationInvitation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `email` | `string` | No | **Required unless you provide `invitee_id`**. |
| `failed_at` | `string` | No |  |
| `failed_reason` | `string` | No |  |
| `id` | `number` | Yes |  |
| `invitation_source` | `string` | No |  |
| `invitation_teams_url` | `string` | Yes |  |
| `invitee_id` | `number` | No | **Required unless you provide `email`**. |
| `inviter` | `table` | Yes | A GitHub user. |
| `login` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `role` | `string` | No | The role for the new member. |
| `team_count` | `number` | Yes |  |
| `team_ids` | `table` | No | Specify IDs for the teams you want to invite new members to. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `created_at` | - | - |
| `email` | Yes | - |
| `failed_at` | - | - |
| `failed_reason` | - | - |
| `id` | - | - |
| `invitation_source` | - | - |
| `invitation_teams_url` | - | - |
| `invitee_id` | - | - |
| `inviter` | - | - |
| `login` | - | - |
| `node_id` | - | - |
| `role` | Yes | - |
| `team_count` | - | - |
| `team_ids` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationInvitation():create({
  org_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ number ]],
  invitation_teams_url = --[[ string ]],
  inviter = --[[ table ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  team_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationInvitation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationProgrammaticAccessGrantEntity

```lua
local organization_programmatic_access_grant = client:OrganizationProgrammaticAccessGrant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_granted_at` | `string` | Yes | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Yes | Date and time when the request for access was created. |
| `id` | `number` | Yes | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | Yes | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Yes | Reason for requesting access. |
| `repositories_url` | `string` | Yes | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Yes | Type of repository selection requested. |
| `token_expired` | `boolean` | Yes | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Yes | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `number` | Yes | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Yes | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | Yes | The name given to the user's token. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationProgrammaticAccessGrant():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationRoleEntity

```lua
local organization_role = client:OrganizationRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `description` | `string` | No | A short description about who this role is for or what permissions it grants. |
| `id` | `number` | Yes | The unique identifier of the role. |
| `name` | `string` | Yes | The name of the role. |
| `organization` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | Yes | A list of permissions included in this role. |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationRole():load({ id = 1, org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationSecretScanningAlertEntity

```lua
local organization_secret_scanning_alert = client:OrganizationSecretScanningAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `boolean` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | No | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `boolean` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `boolean` | No | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `number` | No | The security alert number. |
| `publicly_leaked` | `boolean` | No | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `table` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `table` | Yes | A GitHub user. |
| `repository` | `table` | Yes | A GitHub repository. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `table` | Yes | A GitHub user. |
| `secret` | `string` | No | The secret that was detected. |
| `secret_type` | `string` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | No | The REST API URL of the alert resource. |
| `validity` | `string` | No | The token status as of the latest validity check. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationSecretScanningAlert():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationSecretScanningAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OutsideCollaboratorEntity

```lua
local outside_collaborator = client:OutsideCollaborator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OutsideCollaborator():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutsideCollaboratorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageEntity

```lua
local package = client:Package(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `docker` | `table` | Yes |  |
| `github_id` | `number` | Yes | Unique identifier of the package. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `number` | Yes | Free storage space (GB) for GitHub Packages. |
| `license` | `string` | No |  |
| `metadata` | `table` | Yes |  |
| `name` | `string` | Yes | The name of the package. |
| `owner` | `table` | Yes | A GitHub user. |
| `package_html_url` | `string` | Yes |  |
| `package_type` | `string` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `number` | Yes | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `number` | Yes | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `version_count` | `number` | Yes | The number of versions of the package. |
| `visibility` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `container` | - | - | - | - |
| `created_at` | - | - | - | - |
| `deleted_at` | - | - | - | - |
| `description` | - | - | - | - |
| `docker` | - | - | - | - |
| `github_id` | - | - | - | - |
| `html_url` | - | Yes | - | - |
| `id` | - | - | - | - |
| `included_gigabytes_bandwidth` | - | - | - | - |
| `license` | - | - | - | - |
| `metadata` | - | - | - | - |
| `name` | - | - | - | - |
| `owner` | - | - | - | - |
| `package_html_url` | - | - | - | - |
| `package_type` | - | - | - | - |
| `repository` | - | - | - | - |
| `total_gigabytes_bandwidth_used` | - | - | - | - |
| `total_paid_gigabytes_bandwidth_used` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `version_count` | - | - | - | - |
| `visibility` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Package():create({
  package_id = --[[ string ]],
  package_name = --[[ string ]],
  container = --[[ table ]],
  created_at = --[[ string ]],
  docker = --[[ table ]],
  github_id = --[[ number ]],
  html_url = --[[ string ]],
  id = --[[ string ]],
  included_gigabytes_bandwidth = --[[ number ]],
  metadata = --[[ table ]],
  name = --[[ string ]],
  owner = --[[ table ]],
  package_html_url = --[[ string ]],
  package_type = --[[ string ]],
  repository = --[[ table ]],
  total_gigabytes_bandwidth_used = --[[ number ]],
  total_paid_gigabytes_bandwidth_used = --[[ number ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  version_count = --[[ number ]],
  visibility = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Package():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Package():load({ package_name = "package_name", package_type = "package_type" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Package():remove({ package_name = "package_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PageEntity

```lua
local page = client:Page(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_type` | `string` | No | The process in which the Page will be built. |
| `cname` | `string` | Yes | The Pages site's custom domain |
| `custom_404` | `boolean` | Yes | Whether the Page has a custom 404 page. |
| `html_url` | `string` | No | The web address the Page can be accessed from. |
| `https_certificate` | `table` | Yes |  |
| `https_enforced` | `boolean` | No | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | No | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | No | The state if the domain is verified |
| `public` | `boolean` | Yes | Whether the GitHub Pages site is publicly visible. |
| `source` | `table` | Yes | The source branch and directory used to publish your Pages site. |
| `status` | `string` | Yes | The status of the most recent build of the Page. |
| `url` | `string` | Yes | The API address for accessing this Page resource. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Page():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  cname = --[[ string ]],
  custom_404 = --[[ boolean ]],
  https_certificate = --[[ table ]],
  public = --[[ boolean ]],
  source = --[[ table ]],
  status = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Page():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PageBuildEntity

```lua
local page_build = client:PageBuild(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `duration` | `number` | Yes |  |
| `error` | `table` | Yes |  |
| `id` | `string` | No |  |
| `pusher` | `table` | Yes | A GitHub user. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PageBuild():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PageBuild():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageBuildEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PageBuildStatusEntity

```lua
local page_build_status = client:PageBuildStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PageBuildStatus():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageBuildStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PageDeploymentEntity

```lua
local page_deployment = client:PageDeployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact_id` | `number` | No | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | No | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | No | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | Yes | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | Yes | A unique string that represents the version of the build for this deployment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PageDeployment():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  oidc_token = --[[ string ]],
  pages_build_version = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PagesDeploymentStatusEntity

```lua
local pages_deployment_status = client:PagesDeploymentStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No | The current status of the deployment. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PagesDeploymentStatus():create({
  deployment_id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PagesDeploymentStatus():load({ owner = "owner", pages_deployment_id = "pages_deployment_id", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PagesDeploymentStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PagesHealthCheckEntity

```lua
local pages_health_check = client:PagesHealthCheck(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_domain` | `table` | No |  |
| `domain` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PagesHealthCheck():load({ owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PagesHealthCheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ParticipationEntity

```lua
local participation = client:Participation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `table` | Yes |  |
| `owner` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Participation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParticipationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PendingDeploymentEntity

```lua
local pending_deployment = client:PendingDeployment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_can_approve` | `boolean` | Yes | Whether the currently authenticated user can approve the deployment |
| `environment` | `table` | Yes |  |
| `reviewers` | `table` | Yes | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `number` | Yes | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | Yes | The time that the wait timer began. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PendingDeployment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PendingDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PorterAuthorEntity

```lua
local porter_author = client:PorterAuthor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The new Git author email. |
| `id` | `number` | Yes |  |
| `import_url` | `string` | Yes |  |
| `name` | `string` | Yes | The new Git author name. |
| `remote_id` | `string` | Yes |  |
| `remote_name` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `email` | - | Yes |
| `id` | - | - |
| `import_url` | - | - |
| `name` | - | Yes |
| `remote_id` | - | - |
| `remote_name` | - | - |
| `url` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PorterAuthor():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PorterAuthor():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PorterAuthorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PorterLargeFileEntity

```lua
local porter_large_file = client:PorterLargeFile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oid` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `ref_name` | `string` | Yes |  |
| `size` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PorterLargeFile():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PorterLargeFileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrivateRegistryEntity

```lua
local private_registry = client:PrivateRegistry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `encrypted_value` | `string` | No | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` | No |  |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |
| `name` | `string` | Yes | The name of the private registry configuration. |
| `registry_type` | `string` | No | The registry type. |
| `selected_repository_ids` | `table` | No | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | No | The URL of the private registry. |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | No | Which type of organization repositories have access to the private registry. |

### Field Usage by Operation

| Field | load | list | update | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `encrypted_value` | - | - | - | - |
| `id` | - | - | - | - |
| `key` | - | - | - | - |
| `key_id` | - | - | Yes | - |
| `name` | - | - | - | - |
| `registry_type` | - | Yes | - | - |
| `selected_repository_ids` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `username` | - | - | - | - |
| `visibility` | - | Yes | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PrivateRegistry():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PrivateRegistry():load({ org_id = "org_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PrivateRegistry():remove({ id = "id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PrivateRegistry():update({
  id = "id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateRegistryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrivateUserEntity

```lua
local private_user = client:PrivateUser(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `body` | `string` | No | The description of the project. |
| `columns_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The name of the project. |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes |  |
| `organization_permission` | `string` | No | The baseline permission that all organization members have on this project |
| `organizations_url` | `string` | Yes |  |
| `owner_url` | `string` | Yes |  |
| `private` | `boolean` | No | Whether or not this project can be seen by everyone. |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | No | State of the project; either 'open' or 'closed' |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `avatar_url` | - | - | - | - | - |
| `body` | - | Yes | - | - | - |
| `columns_url` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `events_url` | - | - | - | - | - |
| `followers_url` | - | - | - | - | - |
| `following_url` | - | - | - | - | - |
| `gists_url` | - | - | - | - | - |
| `gravatar_id` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `login` | - | - | - | - | - |
| `name` | - | Yes | Yes | - | - |
| `node_id` | - | - | - | - | - |
| `number` | - | - | - | - | - |
| `organization_permission` | - | - | - | - | - |
| `organizations_url` | - | - | - | - | - |
| `owner_url` | - | - | - | - | - |
| `private` | - | - | - | - | - |
| `received_events_url` | - | - | - | - | - |
| `repos_url` | - | - | - | - | - |
| `site_admin` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `starred_url` | - | - | - | - | - |
| `state` | - | Yes | - | - | - |
| `subscriptions_url` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | - | - | - | - |
| `user_view_type` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  avatar_url = --[[ string ]],
  columns_url = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  gists_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  number = --[[ number ]],
  organizations_url = --[[ string ]],
  owner_url = --[[ string ]],
  received_events_url = --[[ string ]],
  repos_url = --[[ string ]],
  site_admin = --[[ boolean ]],
  starred_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Project():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectCollaboratorPermissionEntity

```lua
local project_collaborator_permission = client:ProjectCollaboratorPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectCollaboratorPermission():load({ project_id = 1, username = "username" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectCollaboratorPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectColumnEntity

```lua
local project_column = client:ProjectColumn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cards_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `number` | Yes | The unique identifier of the project column |
| `name` | `string` | Yes | Name of the project column |
| `node_id` | `string` | Yes |  |
| `project_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectColumn():create({
  id = --[[ number ]],
  cards_url = --[[ string ]],
  created_at = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  project_url = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectColumn():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectColumn():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectColumn():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectColumnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsClassicEntity

```lua
local projects_classic = client:ProjectsClassic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `position` | `string` | Yes | The position of the column in a project. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectsClassic():create({
  column_id = --[[ number ]],
  position = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectsClassic():remove({ column_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectsClassic():update({
  project_id = 1,
  username = "username",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsClassicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsV2Entity

```lua
local projects_v2 = client:ProjectsV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes | The time when the project was closed. |
| `created_at` | `string` | Yes | The time when the project was created. |
| `creator` | `table` | Yes | A GitHub user. |
| `deleted_at` | `string` | Yes | The time when the project was deleted. |
| `deleted_by` | `table` | Yes | A GitHub user. |
| `description` | `string` | Yes | A short description of the project. |
| `id` | `number` | Yes | The unique identifier of the project. |
| `is_template` | `boolean` | No | Whether this project is a template |
| `latest_status_update` | `table` | Yes | An status update belonging to a project |
| `node_id` | `string` | Yes | The node ID of the project. |
| `number` | `number` | Yes | The project number. |
| `owner` | `table` | Yes | A GitHub user. |
| `public` | `boolean` | Yes | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | Yes | A concise summary of the project. |
| `state` | `string` | No | The current state of the project. |
| `title` | `string` | Yes | The project title. |
| `updated_at` | `string` | Yes | The time when the project was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectsV2():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectsV2():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsV2FieldEntity

```lua
local projects_v2_field = client:ProjectsV2Field(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `table` | No | Configuration for iteration fields. |
| `created_at` | `string` | Yes | The time when the field was created. |
| `data_type` | `string` | Yes | The field's data type. |
| `id` | `number` | Yes | The unique identifier of the field. |
| `name` | `string` | Yes | The name of the field. |
| `node_id` | `string` | No | The node ID of the field. |
| `options` | `table` | No | The options available for single select fields. |
| `project_url` | `string` | Yes | The API URL of the project that contains the field. |
| `updated_at` | `string` | Yes | The time when the field was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectsV2Field():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectsV2Field():load({ id = 1, projects_v2_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2FieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsV2ItemSimpleEntity

```lua
local projects_v2_item_simple = client:ProjectsV2ItemSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | Yes | The type of item to add to the project. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectsV2ItemSimple():create({
  project_number = --[[ number ]],
  id = --[[ number ]],
  type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2ItemSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectsV2ItemWithContentEntity

```lua
local projects_v2_item_with_content = client:ProjectsV2ItemWithContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | Yes | The time when the item was archived. |
| `content` | `table` | No | The content of the item, which varies by content type. |
| `content_type` | `string` | Yes | The type of content tracked in a project item |
| `created_at` | `string` | Yes | The time when the item was created. |
| `creator` | `table` | Yes | A GitHub user. |
| `fields` | `table` | No | The fields and values associated with this item. |
| `id` | `number` | Yes | The unique identifier of the project item. |
| `item_url` | `string` | No | The API URL of this item. |
| `node_id` | `string` | No | The node ID of the project item. |
| `project_url` | `string` | No | The API URL of the project that contains this item. |
| `updated_at` | `string` | Yes | The time when the item was last updated. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `archived_at` | - | - | - |
| `content` | - | - | - |
| `content_type` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `fields` | - | - | Yes |
| `id` | - | - | - |
| `item_url` | - | - | - |
| `node_id` | - | - | - |
| `project_url` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectsV2ItemWithContent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProjectsV2ItemWithContent():load({ item_id = 1, projects_v2_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectsV2ItemWithContent():update({
  item_id = 1,
  projects_v2_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2ItemWithContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProtectedBranchEntity

```lua
local protected_branch = client:ProtectedBranch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `table` | Yes | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `table` | Yes | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `table` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `table` | Yes | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `table` | Yes | Enforce all configured restrictions for administrators. |
| `lock_branch` | `table` | No | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `table` | No | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `table` | Yes | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `table` | Yes | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `table` | Yes |  |
| `required_status_checks` | `table` | Yes | Status Check Policy |
| `restrictions` | `table` | Yes | Branch Restriction Policy |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `allow_deletions` | Yes |
| `allow_force_pushes` | Yes |
| `allow_fork_syncing` | - |
| `block_creations` | Yes |
| `enforce_admins` | - |
| `lock_branch` | - |
| `required_conversation_resolution` | - |
| `required_linear_history` | Yes |
| `required_pull_request_reviews` | - |
| `required_signatures` | - |
| `required_status_checks` | - |
| `restrictions` | - |
| `url` | - |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProtectedBranch():update({
  branch_id = "branch_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProtectedBranchAdminEnforcedEntity

```lua
local protected_branch_admin_enforced = client:ProtectedBranchAdminEnforced(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProtectedBranchAdminEnforced():create({
  branch_id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  enabled = --[[ boolean ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProtectedBranchAdminEnforced():load({ branch_id = "branch_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchAdminEnforcedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProtectedBranchPullRequestReviewEntity

```lua
local protected_branch_pull_request_review = client:ProtectedBranchPullRequestReview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_pull_request_allowances` | `table` | No | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `boolean` | Yes | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `table` | No | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `boolean` | Yes | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `boolean` | No | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `number` | No | Specifies the number of reviewers required to approve pull requests. |
| `url` | `string` | No |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `bypass_pull_request_allowances` | - | - |
| `dismiss_stale_reviews` | - | Yes |
| `dismissal_restrictions` | - | - |
| `require_code_owner_reviews` | - | Yes |
| `require_last_push_approval` | - | - |
| `required_approving_review_count` | - | - |
| `url` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProtectedBranchPullRequestReview():load({ branch_id = "branch_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProtectedBranchPullRequestReview():update({
  branch_id = "branch_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchPullRequestReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicMemberEntity

```lua
local public_member = client:PublicMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PublicMember():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PullEntity

```lua
local pull = client:Pull(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `additions` | `number` | Yes |  |
| `assignee` | `table` | Yes | A GitHub user. |
| `assignees` | `table` | No |  |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `auto_merge` | `table` | Yes | The status of auto merging a pull request. |
| `base` | `table` | Yes | The name of the branch you want the changes pulled into. |
| `body` | `string` | Yes | The contents of the pull request. |
| `changed_files` | `number` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `comments` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_message` | `string` | No | Extra detail to append to automatic commit message. |
| `commit_title` | `string` | No | Title for the automatic commit message. |
| `commits` | `number` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deletions` | `number` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `draft` | `boolean` | No | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `string` | No | The expected SHA of the pull request's HEAD ref. |
| `head` | `table` | Yes | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | No | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `issue` | `number` | No | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` | Yes |  |
| `labels` | `table` | Yes |  |
| `links` | `table` | Yes |  |
| `locked` | `boolean` | Yes |  |
| `maintainer_can_modify` | `boolean` | Yes | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` | Yes |  |
| `merge_method` | `string` | No | The merge method to use. |
| `mergeable` | `boolean` | Yes |  |
| `mergeable_state` | `string` | Yes |  |
| `merged` | `boolean` | Yes |  |
| `merged_at` | `string` | Yes |  |
| `merged_by` | `table` | Yes | A GitHub user. |
| `message` | `string` | Yes |  |
| `milestone` | `table` | Yes | A collection of related issues and pull requests. |
| `node_id` | `string` | Yes |  |
| `number` | `number` | Yes | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` | Yes |  |
| `rebaseable` | `boolean` | No |  |
| `requested_reviewers` | `table` | No |  |
| `requested_teams` | `table` | No |  |
| `review_comment_url` | `string` | Yes |  |
| `review_comments` | `number` | Yes |  |
| `review_comments_url` | `string` | Yes |  |
| `sha` | `string` | Yes | SHA that pull request head must match to allow merge. |
| `state` | `string` | Yes | State of this Pull Request. |
| `statuses_url` | `string` | Yes |  |
| `title` | `string` | Yes | The title of the pull request. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active_lock_reason` | - | - | - | - | - |
| `additions` | - | - | - | - | - |
| `assignee` | - | - | - | - | - |
| `assignees` | - | - | - | - | - |
| `author_association` | - | - | - | - | - |
| `auto_merge` | - | - | - | - | - |
| `base` | - | - | - | Yes | - |
| `body` | - | - | Yes | Yes | - |
| `changed_files` | - | - | - | - | - |
| `closed_at` | - | - | - | - | - |
| `comments` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commit_message` | - | - | - | - | - |
| `commit_title` | - | - | - | - | - |
| `commits` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `deletions` | - | - | - | - | - |
| `diff_url` | - | - | - | - | - |
| `draft` | - | - | - | - | - |
| `expected_head_sha` | - | - | - | - | - |
| `head` | - | - | - | - | - |
| `head_repo` | - | - | - | - | - |
| `html_url` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `issue` | - | - | - | - | - |
| `issue_url` | - | - | - | - | - |
| `labels` | - | - | - | - | - |
| `links` | - | - | - | - | - |
| `locked` | - | - | - | - | - |
| `maintainer_can_modify` | - | - | Yes | Yes | - |
| `merge_commit_sha` | - | - | - | - | - |
| `merge_method` | - | - | - | - | - |
| `mergeable` | - | - | - | - | - |
| `mergeable_state` | - | - | - | - | - |
| `merged` | - | - | - | - | - |
| `merged_at` | - | - | - | - | - |
| `merged_by` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `milestone` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `number` | - | - | - | - | - |
| `patch_url` | - | - | - | - | - |
| `rebaseable` | - | - | - | - | - |
| `requested_reviewers` | - | - | - | - | - |
| `requested_teams` | - | - | - | - | - |
| `review_comment_url` | - | - | - | - | - |
| `review_comments` | - | - | - | - | - |
| `review_comments_url` | - | - | - | - | - |
| `sha` | - | - | - | Yes | - |
| `state` | - | - | - | Yes | - |
| `statuses_url` | - | - | - | - | - |
| `title` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | - | - | - | - |
| `user` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Pull():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  additions = --[[ number ]],
  assignee = --[[ table ]],
  author_association = --[[ string ]],
  auto_merge = --[[ table ]],
  base = --[[ table ]],
  body = --[[ string ]],
  changed_files = --[[ number ]],
  closed_at = --[[ string ]],
  comments = --[[ number ]],
  comments_url = --[[ string ]],
  commits = --[[ number ]],
  commits_url = --[[ string ]],
  created_at = --[[ string ]],
  deletions = --[[ number ]],
  diff_url = --[[ string ]],
  head = --[[ table ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  issue_url = --[[ string ]],
  labels = --[[ table ]],
  links = --[[ table ]],
  locked = --[[ boolean ]],
  maintainer_can_modify = --[[ boolean ]],
  merge_commit_sha = --[[ string ]],
  mergeable = --[[ boolean ]],
  mergeable_state = --[[ string ]],
  merged = --[[ boolean ]],
  merged_at = --[[ string ]],
  merged_by = --[[ table ]],
  message = --[[ string ]],
  milestone = --[[ table ]],
  node_id = --[[ string ]],
  number = --[[ number ]],
  patch_url = --[[ string ]],
  review_comment_url = --[[ string ]],
  review_comments = --[[ number ]],
  review_comments_url = --[[ string ]],
  sha = --[[ string ]],
  state = --[[ string ]],
  statuses_url = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Pull():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Pull():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Pull():remove({ comment_id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Pull():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PullRequestReviewEntity

```lua
local pull_request_review = client:PullRequestReview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The text of the review. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `comments` | `table` | No | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | Yes | A commit SHA for the review. |
| `event` | `string` | Yes | The review action you want to perform. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the review |
| `links` | `table` | Yes |  |
| `message` | `string` | Yes | The message for the pull request review dismissal |
| `node_id` | `string` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `submitted_at` | `string` | No |  |
| `teams` | `table` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `users` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `author_association` | - | - | - | - | - |
| `body` | - | - | Yes | - | - |
| `body_html` | - | - | - | - | - |
| `body_text` | - | - | - | - | - |
| `comments` | - | - | - | - | - |
| `commit_id` | - | - | Yes | - | - |
| `event` | - | - | Yes | Yes | - |
| `html_url` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `links` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `pull_request_url` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `submitted_at` | - | - | - | - | - |
| `teams` | - | - | - | - | - |
| `user` | - | - | - | - | - |
| `users` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PullRequestReview():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  author_association = --[[ string ]],
  body = --[[ string ]],
  commit_id = --[[ string ]],
  event = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  links = --[[ table ]],
  message = --[[ string ]],
  node_id = --[[ string ]],
  pull_request_url = --[[ string ]],
  state = --[[ string ]],
  teams = --[[ table ]],
  user = --[[ table ]],
  users = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PullRequestReview():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PullRequestReview():load({ id = 1, owner = "owner", pull_id = 1, repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PullRequestReview():remove({ id = 1, owner = "owner", pull_id = 1, repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PullRequestReview():update({
  id = 1,
  owner = "owner",
  pull_id = 1,
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PullRequestReviewCommentEntity

```lua
local pull_request_review_comment = client:PullRequestReviewComment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The text of the comment. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `commit_id` | `string` | Yes | The SHA of the commit to which the comment applies. |
| `created_at` | `string` | Yes |  |
| `diff_hunk` | `string` | Yes | The diff of the line that the comment refers to. |
| `html_url` | `string` | Yes | HTML URL for the pull request review comment. |
| `id` | `number` | Yes | The ID of the pull request review comment. |
| `in_reply_to` | `number` | No | The ID of the review comment to reply to. |
| `in_reply_to_id` | `number` | No | The comment ID to reply to. |
| `line` | `number` | No | The line of the blob to which the comment applies. |
| `links` | `table` | Yes |  |
| `node_id` | `string` | Yes | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | Yes | The SHA of the original commit to which the comment applies. |
| `original_line` | `number` | No | The line of the blob to which the comment applies. |
| `original_position` | `number` | No | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `path` | `string` | Yes | The relative path of the file to which the comment applies. |
| `position` | `number` | No | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `number` | Yes | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | Yes | URL for the pull request that the review comment belongs to. |
| `reactions` | `table` | Yes |  |
| `side` | `string` | No | The side of the diff to which the comment applies. |
| `start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the pull request review comment |
| `user` | `table` | Yes | A GitHub user. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PullRequestReviewComment():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  author_association = --[[ string ]],
  body = --[[ string ]],
  commit_id = --[[ string ]],
  created_at = --[[ string ]],
  diff_hunk = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  links = --[[ table ]],
  node_id = --[[ string ]],
  original_commit_id = --[[ string ]],
  path = --[[ string ]],
  pull_request_review_id = --[[ number ]],
  pull_request_url = --[[ string ]],
  reactions = --[[ table ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PullRequestReviewComment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PullRequestReviewComment():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PullRequestReviewComment():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestReviewCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PullRequestSimpleEntity

```lua
local pull_request_simple = client:PullRequestSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewers` | `table` | No | An array of user `login`s that will be requested. |
| `team_reviewers` | `table` | No | An array of team `slug`s that will be requested. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PullRequestSimple():create({
  owner = --[[ string ]],
  pull_number = --[[ number ]],
  repo = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PullRequestSimple():remove({ owner = "owner", pull_number = 1, repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RateLimitEntity

```lua
local rate_limit = client:RateLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate` | `table` | Yes |  |
| `resources` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RateLimit():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RateLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReactionEntity

```lua
local reaction = client:Reaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `content` | `string` | Yes | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `created_at` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Reaction():create({
  discussion_number = --[[ number ]],
  team_id = --[[ number ]],
  avatar_url = --[[ string ]],
  content = --[[ string ]],
  created_at = --[[ string ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  gists_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  organizations_url = --[[ string ]],
  received_events_url = --[[ string ]],
  repos_url = --[[ string ]],
  site_admin = --[[ boolean ]],
  starred_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  type = --[[ string ]],
  url = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Reaction():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Reaction():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReferrerEntity

```lua
local referrer = client:Referrer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `referrer` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Referrer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReferrerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseEntity

```lua
local release = client:Release(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `table` | Yes |  |
| `assets_url` | `string` | Yes |  |
| `author` | `table` | Yes | A GitHub user. |
| `body` | `string` | No | Text describing the contents of the tag. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `browser_download_url` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `digest` | `string` | Yes |  |
| `discussion_category_name` | `string` | No | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `string` | No | The URL of the release discussion. |
| `download_count` | `number` | Yes |  |
| `draft` | `boolean` | Yes | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `boolean` | No | Whether to automatically generate the name and body for this release. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `immutable` | `boolean` | No | Whether or not the release is immutable. |
| `label` | `string` | Yes |  |
| `make_latest` | `string` | No | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `number` | No |  |
| `name` | `string` | Yes | The name of the release. |
| `node_id` | `string` | Yes |  |
| `prerelease` | `boolean` | Yes | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `string` | Yes |  |
| `reactions` | `table` | Yes |  |
| `size` | `number` | Yes |  |
| `state` | `string` | Yes | State of the release asset. |
| `tag_name` | `string` | Yes | The name of the tag. |
| `tarball_url` | `string` | Yes |  |
| `target_commitish` | `string` | Yes | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` | No |  |
| `upload_url` | `string` | Yes |  |
| `uploader` | `table` | Yes | A GitHub user. |
| `url` | `string` | Yes |  |
| `zipball_url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `assets` | - | - | - | - |
| `assets_url` | - | - | - | - |
| `author` | - | - | - | - |
| `body` | - | - | - | - |
| `body_html` | - | - | - | - |
| `body_text` | - | - | - | - |
| `browser_download_url` | - | - | - | - |
| `content_type` | - | - | - | - |
| `created_at` | - | - | - | - |
| `digest` | - | - | - | - |
| `discussion_category_name` | - | - | - | - |
| `discussion_url` | - | - | - | - |
| `download_count` | - | - | - | - |
| `draft` | - | - | Yes | Yes |
| `generate_release_notes` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | - | - |
| `immutable` | - | - | - | - |
| `label` | - | - | - | - |
| `make_latest` | - | - | - | - |
| `mentions_count` | - | - | - | - |
| `name` | - | - | Yes | Yes |
| `node_id` | - | - | - | - |
| `prerelease` | - | - | Yes | Yes |
| `published_at` | - | - | - | - |
| `reactions` | - | - | - | - |
| `size` | - | - | - | - |
| `state` | - | - | - | - |
| `tag_name` | - | - | - | Yes |
| `tarball_url` | - | - | - | - |
| `target_commitish` | - | - | Yes | Yes |
| `updated_at` | - | Yes | - | - |
| `upload_url` | - | - | - | - |
| `uploader` | - | - | - | - |
| `url` | - | - | - | - |
| `zipball_url` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Release():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  assets = --[[ table ]],
  assets_url = --[[ string ]],
  author = --[[ table ]],
  browser_download_url = --[[ string ]],
  content_type = --[[ string ]],
  created_at = --[[ string ]],
  digest = --[[ string ]],
  download_count = --[[ number ]],
  draft = --[[ boolean ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  label = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  prerelease = --[[ boolean ]],
  published_at = --[[ string ]],
  reactions = --[[ table ]],
  size = --[[ number ]],
  state = --[[ string ]],
  tag_name = --[[ string ]],
  tarball_url = --[[ string ]],
  target_commitish = --[[ string ]],
  upload_url = --[[ string ]],
  uploader = --[[ table ]],
  url = --[[ string ]],
  zipball_url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Release():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Release():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Release():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseAssetEntity

```lua
local release_asset = client:ReleaseAsset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `browser_download_url` | `string` | No |  |
| `content_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `digest` | `string` | No |  |
| `download_count` | `number` | No |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `label` | `string` | No | An alternate short description of the asset. |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The file name of the asset. |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `size` | `number` | No |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | No | State of the release asset. |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `uploader` | `table` | No | A GitHub user. |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `avatar_url` | - | - | - | - |
| `browser_download_url` | - | Yes | - | - |
| `content_type` | - | Yes | - | - |
| `created_at` | - | Yes | - | - |
| `digest` | - | Yes | - | - |
| `download_count` | - | Yes | - | - |
| `email` | - | - | - | - |
| `events_url` | - | - | - | - |
| `followers_url` | - | - | - | - |
| `following_url` | - | - | - | - |
| `gists_url` | - | - | - | - |
| `gravatar_id` | - | - | - | - |
| `html_url` | - | - | - | - |
| `id` | - | - | Yes | - |
| `label` | - | Yes | - | - |
| `login` | - | - | - | - |
| `name` | - | Yes | - | - |
| `node_id` | - | - | Yes | - |
| `organizations_url` | - | - | - | - |
| `received_events_url` | - | - | - | - |
| `repos_url` | - | - | - | - |
| `site_admin` | - | - | - | - |
| `size` | - | Yes | - | - |
| `starred_at` | - | - | - | - |
| `starred_url` | - | - | - | - |
| `state` | - | Yes | - | - |
| `subscriptions_url` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | Yes | - | - |
| `uploader` | - | Yes | - | - |
| `url` | - | - | Yes | - |
| `user_view_type` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReleaseAsset():create({
  id = --[[ number ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  name = --[[ string ]],
  avatar_url = --[[ string ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  gists_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  html_url = --[[ string ]],
  login = --[[ string ]],
  node_id = --[[ string ]],
  organizations_url = --[[ string ]],
  received_events_url = --[[ string ]],
  repos_url = --[[ string ]],
  site_admin = --[[ boolean ]],
  starred_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  type = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReleaseAsset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReleaseAsset():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReleaseAsset():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseAssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReleaseNotesContentEntity

```lua
local release_notes_content = client:ReleaseNotesContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes | The generated body describing the contents of the release supporting markdown formatting |
| `configuration_file_path` | `string` | No | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `name` | `string` | Yes | The generated name of the release |
| `previous_tag_name` | `string` | No | The name of the previous tag to use as the starting point for the release notes. |
| `tag_name` | `string` | Yes | The tag name for the release. |
| `target_commitish` | `string` | No | Specifies the commitish value that will be the target for the release's tag. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReleaseNotesContent():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  body = --[[ string ]],
  name = --[[ string ]],
  tag_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseNotesContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemoveEntity

```lua
local remove = client:Remove(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `table` | Yes | The GitHub user handles to be removed from the team. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Remove():create({
  enterprise = --[[ string ]],
  team_id = --[[ string ]],
  usernames = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepoEntity

```lua
local repo = client:Repo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is enabled for this repository |
| `app` | `table` | Yes | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `attestations` | `table` | No |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `build_type` | `string` | No | The process by which the GitHub Pages site will be built. |
| `bundle` | `table` | Yes | The attestation's Sigstore Bundle. |
| `client_payload` | `table` | No | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` | Yes |  |
| `cname` | `string` | No | Specify a custom domain for the repository. |
| `code_search_index_status` | `table` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `content` | `string` | No |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `default_branch_only` | `boolean` | No | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `table` | Yes | The type of deployment branch policy for this environment. |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `download_url` | `string` | No |  |
| `downloads_url` | `string` | Yes |  |
| `enabled` | `boolean` | Yes | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `string` | No |  |
| `event_type` | `string` | Yes | A custom webhook event name. |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `github_id` | `number` | Yes | Unique identifier of the repository |
| `has_discussions` | `boolean` | No | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Yes | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Whether issues are enabled. |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Whether projects are enabled. |
| `has_wiki` | `boolean` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No |  |
| `https_enforced` | `boolean` | No | Specify whether HTTPS should be enforced for the repository. |
| `id` | `string` | Yes | Unique identifier of the repository |
| `integration_url` | `string` | Yes | The URL for the endpoint to get details about the app. |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `links` | `table` | No |  |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | No | When forking from an existing repository, a new name for the fork. |
| `new_name` | `string` | No | The new name to be given to the repository. |
| `new_owner` | `string` | Yes | The username or organization name the repository will be transferred to. |
| `node_id` | `string` | Yes | The node ID for the deployment protection rule integration. |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organization` | `string` | No | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `table` | Yes | A GitHub user. |
| `path` | `string` | No |  |
| `permissions` | `table` | Yes |  |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `properties` | `table` | Yes | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `table` | No | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `sha` | `string` | No |  |
| `size` | `number` | No | The size of the repository, in kilobytes. |
| `slug` | `string` | Yes | The slugified name of the deployment protection rule integration. |
| `source` | `any` | No |  |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_ids` | `table` | No | ID of the team or teams to add to the repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `string` | No | Whether this rule targets a branch or tag. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | No |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `allow_auto_merge` | - | - | - | - | - |
| `allow_forking` | - | - | - | - | - |
| `allow_merge_commit` | - | - | - | - | - |
| `allow_rebase_merge` | - | - | - | - | - |
| `allow_squash_merge` | - | - | - | - | - |
| `allow_update_branch` | - | - | - | - | - |
| `anonymous_access_enabled` | - | - | - | - | - |
| `app` | - | - | - | - | - |
| `archive_url` | - | - | - | - | - |
| `archived` | - | - | - | - | - |
| `assignees_url` | - | - | - | - | - |
| `attestations` | - | - | - | - | - |
| `blobs_url` | - | - | - | - | - |
| `branches_url` | - | - | - | - | - |
| `build_type` | - | - | - | - | - |
| `bundle` | - | - | - | - | - |
| `client_payload` | - | - | - | - | - |
| `clone_url` | - | - | - | - | - |
| `cname` | - | - | - | - | - |
| `code_search_index_status` | - | - | - | - | - |
| `collaborators_url` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `compare_url` | - | - | - | - | - |
| `content` | - | - | - | - | - |
| `contents_url` | - | - | - | - | - |
| `contributors_url` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `default_branch` | - | - | - | - | - |
| `default_branch_only` | - | - | - | - | - |
| `delete_branch_on_merge` | - | - | - | - | - |
| `deployment_branch_policy` | - | - | - | - | - |
| `deployments_url` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `disabled` | - | - | - | - | - |
| `download_url` | - | - | - | - | - |
| `downloads_url` | - | - | - | - | - |
| `enabled` | - | - | - | - | - |
| `encoding` | - | - | - | - | - |
| `event_type` | - | - | - | - | - |
| `events_url` | - | - | - | - | - |
| `fork` | - | - | - | - | - |
| `forks` | - | - | - | - | - |
| `forks_count` | - | - | - | - | - |
| `forks_url` | - | - | - | - | - |
| `full_name` | - | - | - | - | - |
| `git_commits_url` | - | - | - | - | - |
| `git_refs_url` | - | - | - | - | - |
| `git_tags_url` | - | - | - | - | - |
| `git_url` | - | Yes | - | - | - |
| `github_id` | - | Yes | - | - | - |
| `has_discussions` | - | - | - | - | - |
| `has_downloads` | - | - | - | - | - |
| `has_issues` | - | - | - | - | - |
| `has_pages` | - | - | - | - | - |
| `has_projects` | - | - | - | - | - |
| `has_wiki` | - | - | - | - | - |
| `homepage` | - | - | - | - | - |
| `hooks_url` | - | - | - | - | - |
| `html_url` | - | Yes | - | - | - |
| `https_enforced` | - | - | - | - | - |
| `id` | - | Yes | - | - | - |
| `integration_url` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `issue_comment_url` | - | - | - | - | - |
| `issue_events_url` | - | - | - | - | - |
| `issues_url` | - | - | - | - | - |
| `keys_url` | - | - | - | - | - |
| `labels_url` | - | - | - | - | - |
| `language` | - | - | - | - | - |
| `languages_url` | - | - | - | - | - |
| `license` | - | - | - | - | - |
| `links` | - | - | - | - | - |
| `master_branch` | - | - | - | - | - |
| `merge_commit_message` | - | - | - | - | - |
| `merge_commit_title` | - | - | - | - | - |
| `merges_url` | - | - | - | - | - |
| `milestones_url` | - | - | - | - | - |
| `mirror_url` | - | - | - | - | - |
| `name` | - | Yes | - | - | - |
| `new_name` | - | - | - | - | - |
| `new_owner` | - | - | - | - | - |
| `node_id` | - | Yes | - | - | - |
| `notifications_url` | - | - | - | - | - |
| `open_issues` | - | - | - | - | - |
| `open_issues_count` | - | - | - | - | - |
| `organization` | - | - | - | - | - |
| `owner` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `permissions` | - | - | - | - | - |
| `private` | - | - | - | - | - |
| `properties` | - | - | - | - | - |
| `protection_rules` | - | - | - | - | - |
| `pulls_url` | - | - | - | - | - |
| `pushed_at` | - | - | - | - | - |
| `releases_url` | - | - | - | - | - |
| `sha` | - | - | - | - | - |
| `size` | - | Yes | - | - | - |
| `slug` | - | - | - | - | - |
| `source` | - | - | - | - | - |
| `squash_merge_commit_message` | - | - | - | - | - |
| `squash_merge_commit_title` | - | - | - | - | - |
| `ssh_url` | - | - | - | - | - |
| `stargazers_count` | - | - | - | - | - |
| `stargazers_url` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `statuses_url` | - | - | - | - | - |
| `subscribers_url` | - | - | - | - | - |
| `subscription_url` | - | - | - | - | - |
| `svn_url` | - | - | - | - | - |
| `tags_url` | - | - | - | - | - |
| `team_ids` | - | - | - | - | - |
| `teams_url` | - | - | - | - | - |
| `temp_clone_token` | - | - | - | - | - |
| `topics` | - | - | - | - | - |
| `trees_url` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | Yes | - | - | - |
| `use_squash_pr_title_as_default` | - | - | - | - | - |
| `visibility` | - | - | - | - | - |
| `watchers` | - | - | - | - | - |
| `watchers_count` | - | - | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Repo():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  app = --[[ table ]],
  archive_url = --[[ string ]],
  archived = --[[ boolean ]],
  assignees_url = --[[ string ]],
  blobs_url = --[[ string ]],
  branches_url = --[[ string ]],
  bundle = --[[ table ]],
  clone_url = --[[ string ]],
  collaborators_url = --[[ string ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  created_at = --[[ string ]],
  default_branch = --[[ string ]],
  deployment_branch_policy = --[[ table ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  disabled = --[[ boolean ]],
  downloads_url = --[[ string ]],
  enabled = --[[ boolean ]],
  event_type = --[[ string ]],
  events_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks = --[[ number ]],
  forks_count = --[[ number ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  github_id = --[[ number ]],
  has_downloads = --[[ boolean ]],
  has_issues = --[[ boolean ]],
  has_pages = --[[ boolean ]],
  has_projects = --[[ boolean ]],
  has_wiki = --[[ boolean ]],
  homepage = --[[ string ]],
  hooks_url = --[[ string ]],
  id = --[[ string ]],
  integration_url = --[[ string ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  language = --[[ string ]],
  languages_url = --[[ string ]],
  license = --[[ table ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  mirror_url = --[[ string ]],
  new_owner = --[[ string ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  open_issues = --[[ number ]],
  open_issues_count = --[[ number ]],
  permissions = --[[ table ]],
  private = --[[ boolean ]],
  properties = --[[ table ]],
  pulls_url = --[[ string ]],
  pushed_at = --[[ string ]],
  releases_url = --[[ string ]],
  slug = --[[ string ]],
  ssh_url = --[[ string ]],
  stargazers_count = --[[ number ]],
  stargazers_url = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  svn_url = --[[ string ]],
  tags_url = --[[ string ]],
  teams_url = --[[ string ]],
  trees_url = --[[ string ]],
  updated_at = --[[ string ]],
  watchers = --[[ number ]],
  watchers_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Repo():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Repo():load({ owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Repo():remove({ owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Repo():update({
  branch_id = "branch_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryEntity

```lua
local repository = client:Repository(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `boolean` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `boolean` | No | Whether anonymous git access is enabled for this repository |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_search_index_status` | `table` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `has_discussions` | `boolean` | No | Whether discussions are enabled. |
| `has_downloads` | `boolean` | Yes | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Whether issues are enabled. |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Whether projects are enabled. |
| `has_wiki` | `boolean` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the repository |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `table` | Yes | License Simple |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `owner` | `table` | Yes | A GitHub user. |
| `permissions` | `table` | Yes |  |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `boolean` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Repository():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryAdvisoryEntity

```lua
local repository_advisory = client:RepositoryAdvisory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes | The author of the advisory. |
| `closed_at` | `string` | Yes | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `table` | Yes | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `table` | Yes | A list of users that collaborate on the advisory. |
| `created_at` | `string` | Yes | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `table` | Yes | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `table` | Yes |  |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `table` | Yes |  |
| `cvss_severities` | `table` | No |  |
| `cvss_vector_string` | `string` | No | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `table` | Yes | A list of only the CWE IDs. |
| `cwes` | `table` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `identifiers` | `table` | Yes |  |
| `private_fork` | `any` | Yes | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `any` | Yes | The publisher of the advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `start_private_fork` | `boolean` | No | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | Yes | The state of the advisory. |
| `submission` | `table` | Yes |  |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `table` | Yes | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `string` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `author` | - | - | - | - |
| `closed_at` | - | - | - | - |
| `collaborating_teams` | - | - | - | Yes |
| `collaborating_users` | - | - | - | Yes |
| `created_at` | - | - | - | - |
| `credits` | - | - | Yes | Yes |
| `credits_detailed` | - | - | - | - |
| `cve_id` | - | - | Yes | Yes |
| `cvss` | - | - | - | - |
| `cvss_severities` | - | - | - | - |
| `cvss_vector_string` | - | - | - | - |
| `cwe_ids` | - | - | Yes | Yes |
| `cwes` | - | - | - | - |
| `description` | - | - | - | Yes |
| `ghsa_id` | - | - | - | - |
| `html_url` | - | - | - | - |
| `identifiers` | - | - | - | - |
| `private_fork` | - | - | - | - |
| `published_at` | - | - | - | - |
| `publisher` | - | - | - | - |
| `severity` | - | - | Yes | Yes |
| `start_private_fork` | - | - | - | - |
| `state` | - | - | - | Yes |
| `submission` | - | - | - | - |
| `summary` | - | - | - | Yes |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `vulnerabilities` | - | - | Yes | Yes |
| `withdrawn_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryAdvisory():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  author = --[[ any ]],
  closed_at = --[[ string ]],
  collaborating_teams = --[[ table ]],
  collaborating_users = --[[ table ]],
  created_at = --[[ string ]],
  credits = --[[ table ]],
  credits_detailed = --[[ table ]],
  cve_id = --[[ string ]],
  cvss = --[[ table ]],
  cwe_ids = --[[ table ]],
  cwes = --[[ table ]],
  description = --[[ string ]],
  ghsa_id = --[[ string ]],
  html_url = --[[ string ]],
  identifiers = --[[ table ]],
  private_fork = --[[ any ]],
  published_at = --[[ string ]],
  publisher = --[[ any ]],
  severity = --[[ string ]],
  state = --[[ string ]],
  submission = --[[ table ]],
  summary = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  vulnerabilities = --[[ table ]],
  withdrawn_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryAdvisory():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryAdvisory():load({ ghsa_id = "ghsa_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryAdvisory():update({
  ghsa_id = "ghsa_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryAdvisoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryCollaboratorPermissionEntity

```lua
local repository_collaborator_permission = client:RepositoryCollaboratorPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `permissions` | `table` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `role_name` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryCollaboratorPermission():load({ owner = "owner", repo = "repo", username = "username" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryCollaboratorPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryInvitationEntity

```lua
local repository_invitation = client:RepositoryInvitation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `expired` | `boolean` | No | Whether or not the invitation has expired |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the repository invitation. |
| `invitee` | `table` | Yes | A GitHub user. |
| `inviter` | `table` | Yes | A GitHub user. |
| `node_id` | `string` | Yes |  |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `permissions` | `string` | Yes | The permission associated with the invitation. |
| `repository` | `table` | Yes | Minimal Repository |
| `url` | `string` | Yes | URL for the repository invitation |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `created_at` | - | - |
| `expired` | - | - |
| `html_url` | - | - |
| `id` | - | - |
| `invitee` | - | - |
| `inviter` | - | - |
| `node_id` | - | - |
| `permission` | - | - |
| `permissions` | - | - |
| `repository` | - | - |
| `url` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryInvitation():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryInvitation():update({
  owner = "owner",
  repo = "repo",
  username = "username",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryInvitationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryRuleDetailedEntity

```lua
local repository_rule_detailed = client:RepositoryRuleDetailed(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameters` | `table` | No |  |
| `ruleset_id` | `number` | No |  |
| `ruleset_source` | `string` | No |  |
| `ruleset_source_type` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryRuleDetailed():load({ branch = "branch", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRuleDetailedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryRulesetEntity

```lua
local repository_ruleset = client:RepositoryRuleset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_actors` | `table` | No | The actors that can bypass the rules in this ruleset |
| `conditions` | `any` | No | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` | No |  |
| `current_user_can_bypass` | `string` | No | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | Yes | The enforcement level of the ruleset. |
| `id` | `number` | Yes | The ID of the ruleset |
| `links` | `table` | No |  |
| `name` | `string` | Yes | The name of the ruleset |
| `node_id` | `string` | No |  |
| `rules` | `table` | No | An array of rules within the ruleset. |
| `source` | `string` | Yes | The name of the source |
| `source_type` | `string` | No | The type of the source of the ruleset |
| `target` | `string` | No | The target of the ruleset |
| `updated_at` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `bypass_actors` | - | - | - | - |
| `conditions` | - | - | - | - |
| `created_at` | - | - | - | - |
| `current_user_can_bypass` | - | - | - | - |
| `enforcement` | - | - | - | Yes |
| `id` | - | - | - | - |
| `links` | - | - | - | - |
| `name` | - | - | - | Yes |
| `node_id` | - | - | - | - |
| `rules` | - | - | - | - |
| `source` | - | - | - | - |
| `source_type` | - | - | - | - |
| `target` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryRuleset():create({
  org_id = --[[ string ]],
  enforcement = --[[ string ]],
  id = --[[ number ]],
  name = --[[ string ]],
  source = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryRuleset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryRuleset():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryRuleset():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRulesetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositorySubscriptionEntity

```lua
local repository_subscription = client:RepositorySubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `ignored` | `boolean` | Yes | Determines if all notifications should be blocked from this repository. |
| `reason` | `string` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `subscribed` | `boolean` | Yes | Determines if notifications should be received from this repository. |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `created_at` | - | - |
| `ignored` | - | Yes |
| `reason` | - | - |
| `repository_url` | - | - |
| `subscribed` | - | Yes |
| `url` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositorySubscription():load({ owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositorySubscription():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositorySubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReviewCommentEntity

```lua
local review_comment = client:ReviewComment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes |  |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `commit_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `diff_hunk` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `in_reply_to_id` | `number` | No |  |
| `line` | `number` | No | The line of the blob to which the comment applies. |
| `links` | `table` | Yes |  |
| `node_id` | `string` | Yes |  |
| `original_commit_id` | `string` | Yes |  |
| `original_line` | `number` | No | The original line of the blob to which the comment applies. |
| `original_position` | `number` | Yes |  |
| `original_start_line` | `number` | No | The original first line of the range for a multi-line comment. |
| `path` | `string` | Yes |  |
| `position` | `number` | Yes |  |
| `pull_request_review_id` | `number` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `reactions` | `table` | Yes |  |
| `side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `start_line` | `number` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReviewComment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewCommentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RuleSuiteEntity

```lua
local rule_suite = client:RuleSuite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `number` | No | The number that identifies the user. |
| `actor_name` | `string` | No | The handle for the GitHub user account. |
| `after_sha` | `string` | No | The new commit SHA of the ref. |
| `before_sha` | `string` | No | The previous commit SHA of the ref. |
| `evaluation_result` | `string` | No | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `number` | No | The unique identifier of the rule insight. |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | No | The ref name that the evaluation ran on. |
| `repository_id` | `number` | No | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `string` | No | The name of the repository without the `.git` extension. |
| `result` | `string` | No | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `table` | No | Details on the evaluated rules. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RuleSuite():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RuleSuite():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleSuiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RulesetVersionEntity

```lua
local ruleset_version = client:RulesetVersion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | Yes | The actor who updated the ruleset |
| `id` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `version_id` | `number` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RulesetVersion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RulesetVersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RulesetVersionWithStateEntity

```lua
local ruleset_version_with_state = client:RulesetVersionWithState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | Yes | The actor who updated the ruleset |
| `state` | `table` | Yes | The state of the ruleset version |
| `updated_at` | `string` | Yes |  |
| `version_id` | `number` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RulesetVersionWithState():load({ ruleset_id = 1, version_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RulesetVersionWithStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RunnerEntity

```lua
local runner = client:Runner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `busy` | `boolean` | Yes |  |
| `ephemeral` | `boolean` | No |  |
| `id` | `number` | Yes | The ID of the runner. |
| `labels` | `table` | Yes |  |
| `name` | `string` | Yes | The name of the runner. |
| `os` | `string` | Yes | The Operating System of the runner. |
| `runner_group_id` | `number` | No | The ID of the runner group. |
| `status` | `string` | Yes | The status of the runner. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Runner():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RunnerApplicationEntity

```lua
local runner_application = client:RunnerApplication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `filename` | `string` | Yes |  |
| `os` | `string` | Yes |  |
| `sha256_checksum` | `string` | No |  |
| `temp_download_token` | `string` | No | A short lived bearer token used to download the runner, if needed. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RunnerApplication():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RunnerGroupEntity

```lua
local runner_group = client:RunnerGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_public_repositories` | `boolean` | Yes | Whether the runner group can be used by `public` repositories. |
| `default` | `boolean` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `id` | `number` | Yes |  |
| `inherited` | `boolean` | Yes |  |
| `inherited_allows_public_repositories` | `boolean` | No |  |
| `name` | `string` | Yes | Name of the runner group. |
| `network_configuration_id` | `string` | No | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `boolean` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `table` | No | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `table` | No | List of repository IDs that can access the runner group. |
| `selected_workflows` | `table` | No | List of workflows the runner group should be allowed to run. |
| `visibility` | `string` | Yes | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `boolean` | No | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `allows_public_repositories` | - | Yes | Yes |
| `default` | - | - | - |
| `hosted_runners_url` | - | - | - |
| `id` | - | - | - |
| `inherited` | - | - | - |
| `inherited_allows_public_repositories` | - | - | - |
| `name` | - | - | - |
| `network_configuration_id` | - | - | - |
| `restricted_to_workflows` | - | - | - |
| `runners` | - | - | - |
| `runners_url` | - | - | - |
| `selected_repositories_url` | - | - | - |
| `selected_repository_ids` | - | - | - |
| `selected_workflows` | - | - | - |
| `visibility` | - | Yes | Yes |
| `workflow_restrictions_read_only` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RunnerGroup():create({
  org_id = --[[ string ]],
  allows_public_repositories = --[[ boolean ]],
  default = --[[ boolean ]],
  id = --[[ number ]],
  inherited = --[[ boolean ]],
  name = --[[ string ]],
  runners_url = --[[ string ]],
  visibility = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RunnerGroup():load({ id = 1, org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RunnerGroup():update({
  id = 1,
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `aliases` | `table` | No |  |
| `allow_auto_merge` | `boolean` | No |  |
| `allow_forking` | `boolean` | No |  |
| `allow_merge_commit` | `boolean` | No |  |
| `allow_rebase_merge` | `boolean` | No |  |
| `allow_squash_merge` | `boolean` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes |  |
| `assignee` | `table` | Yes | A GitHub user. |
| `assignees` | `table` | No |  |
| `assignees_url` | `string` | Yes |  |
| `author` | `table` | Yes | A GitHub user. |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `avatar_url` | `string` | Yes |  |
| `bio` | `string` | No |  |
| `blobs_url` | `string` | Yes |  |
| `blog` | `string` | No |  |
| `body` | `string` | No |  |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `collaborators_url` | `string` | Yes |  |
| `color` | `string` | Yes |  |
| `comments` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit` | `table` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `committer` | `table` | Yes | Metaproperties for Git author/committer information. |
| `company` | `string` | No |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `curated` | `boolean` | Yes |  |
| `default` | `boolean` | Yes |  |
| `default_branch` | `string` | Yes |  |
| `delete_branch_on_merge` | `boolean` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `display_name` | `string` | Yes |  |
| `downloads_url` | `string` | Yes |  |
| `draft` | `boolean` | No |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `featured` | `boolean` | Yes |  |
| `file_size` | `number` | No |  |
| `followers` | `number` | No |  |
| `followers_url` | `string` | Yes |  |
| `following` | `number` | No |  |
| `following_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | Yes |  |
| `has_issues` | `boolean` | Yes |  |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes |  |
| `has_wiki` | `boolean` | Yes |  |
| `hireable` | `boolean` | No |  |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `is_template` | `boolean` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_dependencies_summary` | `table` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issue_field_values` | `table` | No |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels` | `table` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_modified_at` | `string` | No |  |
| `license` | `table` | Yes | License Simple |
| `line_numbers` | `table` | No |  |
| `location` | `string` | No |  |
| `locked` | `boolean` | Yes |  |
| `login` | `string` | Yes |  |
| `logo_url` | `string` | No |  |
| `master_branch` | `string` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestone` | `table` | Yes | A collection of related issues and pull requests. |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `number` | `number` | Yes |  |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `owner` | `table` | Yes | A GitHub user. |
| `parents` | `table` | Yes |  |
| `path` | `string` | Yes |  |
| `performed_via_github_app` | `table` | Yes | GitHub apps are a new way to extend GitHub. |
| `permissions` | `table` | Yes |  |
| `private` | `boolean` | Yes |  |
| `public_gists` | `number` | No |  |
| `public_repos` | `number` | No |  |
| `pull_request` | `table` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `table` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `related` | `table` | No |  |
| `released` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository` | `table` | Yes | A repository on GitHub. |
| `repository_count` | `number` | No |  |
| `repository_url` | `string` | Yes |  |
| `score` | `number` | Yes |  |
| `sha` | `string` | Yes |  |
| `short_description` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `size` | `number` | Yes |  |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `state_reason` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `sub_issues_summary` | `table` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `suspended_at` | `string` | No |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `text_matches` | `table` | No |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes |  |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `table` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `table` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No |  |

### Field Usage by Operation

| Field | list |
| --- | --- |
| `active_lock_reason` | - |
| `aliases` | - |
| `allow_auto_merge` | - |
| `allow_forking` | - |
| `allow_merge_commit` | - |
| `allow_rebase_merge` | - |
| `allow_squash_merge` | - |
| `archive_url` | - |
| `archived` | - |
| `assignee` | - |
| `assignees` | - |
| `assignees_url` | - |
| `author` | - |
| `author_association` | - |
| `avatar_url` | - |
| `bio` | - |
| `blobs_url` | - |
| `blog` | - |
| `body` | - |
| `body_html` | - |
| `body_text` | - |
| `branches_url` | - |
| `clone_url` | - |
| `closed_at` | - |
| `collaborators_url` | - |
| `color` | - |
| `comments` | - |
| `comments_url` | - |
| `commit` | - |
| `commits_url` | - |
| `committer` | - |
| `company` | - |
| `compare_url` | - |
| `contents_url` | - |
| `contributors_url` | - |
| `created_at` | Yes |
| `created_by` | - |
| `curated` | - |
| `default` | - |
| `default_branch` | - |
| `delete_branch_on_merge` | - |
| `deployments_url` | - |
| `description` | - |
| `disabled` | - |
| `display_name` | - |
| `downloads_url` | - |
| `draft` | - |
| `email` | - |
| `events_url` | - |
| `featured` | - |
| `file_size` | - |
| `followers` | - |
| `followers_url` | - |
| `following` | - |
| `following_url` | - |
| `fork` | - |
| `forks` | - |
| `forks_count` | - |
| `forks_url` | - |
| `full_name` | - |
| `gists_url` | - |
| `git_commits_url` | - |
| `git_refs_url` | - |
| `git_tags_url` | - |
| `git_url` | - |
| `gravatar_id` | - |
| `has_discussions` | - |
| `has_downloads` | - |
| `has_issues` | - |
| `has_pages` | - |
| `has_projects` | - |
| `has_wiki` | - |
| `hireable` | - |
| `homepage` | - |
| `hooks_url` | - |
| `html_url` | - |
| `id` | - |
| `is_template` | - |
| `issue_comment_url` | - |
| `issue_dependencies_summary` | - |
| `issue_events_url` | - |
| `issue_field_values` | - |
| `issues_url` | - |
| `keys_url` | - |
| `labels` | - |
| `labels_url` | - |
| `language` | Yes |
| `languages_url` | - |
| `last_modified_at` | - |
| `license` | - |
| `line_numbers` | - |
| `location` | - |
| `locked` | - |
| `login` | - |
| `logo_url` | - |
| `master_branch` | - |
| `merges_url` | - |
| `milestone` | - |
| `milestones_url` | - |
| `mirror_url` | - |
| `name` | Yes |
| `node_id` | - |
| `notifications_url` | - |
| `number` | - |
| `open_issues` | - |
| `open_issues_count` | - |
| `organizations_url` | - |
| `owner` | - |
| `parents` | - |
| `path` | - |
| `performed_via_github_app` | - |
| `permissions` | - |
| `private` | - |
| `public_gists` | - |
| `public_repos` | - |
| `pull_request` | - |
| `pulls_url` | - |
| `pushed_at` | - |
| `reactions` | - |
| `received_events_url` | - |
| `related` | - |
| `released` | - |
| `releases_url` | - |
| `repos_url` | - |
| `repository` | - |
| `repository_count` | - |
| `repository_url` | - |
| `score` | - |
| `sha` | - |
| `short_description` | - |
| `site_admin` | - |
| `size` | - |
| `ssh_url` | - |
| `stargazers_count` | - |
| `stargazers_url` | - |
| `starred_url` | - |
| `state` | - |
| `state_reason` | - |
| `statuses_url` | - |
| `sub_issues_summary` | - |
| `subscribers_url` | - |
| `subscription_url` | - |
| `subscriptions_url` | - |
| `suspended_at` | - |
| `svn_url` | - |
| `tags_url` | - |
| `teams_url` | - |
| `temp_clone_token` | - |
| `text_matches` | - |
| `timeline_url` | - |
| `title` | - |
| `topics` | - |
| `trees_url` | - |
| `type` | - |
| `updated_at` | Yes |
| `url` | - |
| `user` | - |
| `user_view_type` | - |
| `visibility` | - |
| `watchers` | - |
| `watchers_count` | - |
| `web_commit_signoff_required` | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Search():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningEntity

```lua
local secret_scanning = client:SecretScanning(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_settings` | `table` | No | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | No | The updated pattern configuration version. |
| `provider_pattern_settings` | `table` | No | Pattern settings for provider patterns. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SecretScanning():update({
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningAlertEntity

```lua
local secret_scanning_alert = client:SecretScanningAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `boolean` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | No | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `is_base64_encoded` | `boolean` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `boolean` | No | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `number` | No | The security alert number. |
| `publicly_leaked` | `boolean` | No | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `table` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `boolean` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `table` | Yes | A GitHub user. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | An optional comment to resolve an alert. |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `table` | Yes | A GitHub user. |
| `secret` | `string` | No | The secret that was detected. |
| `secret_type` | `string` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | No | The REST API URL of the alert resource. |
| `validity` | `string` | No | The token status as of the latest validity check. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `first_location_detected` | - | - | - |
| `has_more_locations` | - | - | - |
| `html_url` | - | - | - |
| `id` | - | - | - |
| `is_base64_encoded` | - | - | - |
| `locations_url` | - | - | - |
| `multi_repo` | - | - | - |
| `number` | - | - | - |
| `publicly_leaked` | - | - | - |
| `push_protection_bypass_request_comment` | - | - | - |
| `push_protection_bypass_request_html_url` | - | - | - |
| `push_protection_bypass_request_reviewer` | - | - | - |
| `push_protection_bypass_request_reviewer_comment` | - | - | - |
| `push_protection_bypassed` | - | - | - |
| `push_protection_bypassed_at` | - | - | - |
| `push_protection_bypassed_by` | - | - | - |
| `resolution` | - | - | - |
| `resolution_comment` | - | - | - |
| `resolved_at` | - | - | - |
| `resolved_by` | - | - | - |
| `secret` | - | - | - |
| `secret_type` | - | - | - |
| `secret_type_display_name` | - | - | - |
| `state` | - | - | Yes |
| `updated_at` | - | - | - |
| `url` | - | - | - |
| `validity` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SecretScanningAlert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SecretScanningAlert():load({ id = 1, owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SecretScanningAlert():update({
  id = 1,
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningLocationEntity

```lua
local secret_scanning_location = client:SecretScanningLocation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `any` | No |  |
| `type` | `string` | No | The location type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SecretScanningLocation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningLocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningPatternConfigurationEntity

```lua
local secret_scanning_pattern_configuration = client:SecretScanningPatternConfiguration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_overrides` | `table` | No | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | No | The version of the entity. |
| `provider_pattern_overrides` | `table` | No | Overrides for partner patterns. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SecretScanningPatternConfiguration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningPatternConfigurationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningPushProtectionBypassEntity

```lua
local secret_scanning_push_protection_bypass = client:SecretScanningPushProtectionBypass(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expire_at` | `string` | No | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | `string` | Yes | The ID of the push protection bypass placeholder. |
| `reason` | `string` | No | The reason for bypassing push protection. |
| `token_type` | `string` | No | The token type this bypass is for. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `expire_at` | - |
| `placeholder_id` | - |
| `reason` | Yes |
| `token_type` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SecretScanningPushProtectionBypass():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  placeholder_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningPushProtectionBypassEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretScanningScanHistoryEntity

```lua
local secret_scanning_scan_history = client:SecretScanningScanHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backfill_scans` | `table` | No |  |
| `custom_pattern_backfill_scans` | `table` | No |  |
| `incremental_scans` | `table` | No |  |
| `pattern_update_scans` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SecretScanningScanHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningScanHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecurityAdvisoryEntity

```lua
local security_advisory = client:SecurityAdvisory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SecurityAdvisory():create({
  id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecurityAdvisoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SelectedActionEntity

```lua
local selected_action = client:SelectedAction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `github_owned_allowed` | `boolean` | No | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `table` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `boolean` | No | Whether actions from GitHub Marketplace verified creators are allowed. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SelectedAction():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelectedActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SelfHostedRunnerEntity

```lua
local self_hosted_runner = client:SelfHostedRunner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_repositories` | `string` | Yes | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | No | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SelfHostedRunner():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfHostedRunnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShortBlobEntity

```lua
local short_blob = client:ShortBlob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The new blob's content. |
| `encoding` | `string` | No | The encoding used for `content`. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ShortBlob():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  content = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShortBlobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShortBranchEntity

```lua
local short_branch = client:ShortBranch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `boolean` | Yes |  |
| `protection` | `table` | No | Branch Protection |
| `protection_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ShortBranch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShortBranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimpleClassroomEntity

```lua
local simple_classroom = client:SimpleClassroom(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimpleClassroomEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SimpleClassroomAssignmentEntity

```lua
local simple_classroom_assignment = client:SimpleClassroomAssignment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `number` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `table` | Yes | A GitHub Classroom classroom |
| `deadline` | `string` | Yes | The time at which the assignment is due. |
| `editor` | `string` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `boolean` | Yes | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `number` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `boolean` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `string` | Yes | The link that a student can use to accept the assignment. |
| `language` | `string` | Yes | The programming language used in the assignment. |
| `max_members` | `number` | No | The maximum allowable members per team. |
| `max_teams` | `number` | No | The maximum allowable teams for the assignment. |
| `passing` | `number` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `boolean` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Yes | Sluggified name of the assignment. |
| `students_are_repo_admins` | `boolean` | Yes | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `number` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a Group Assignment or Individual Assignment. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SimpleClassroomAssignment():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimpleClassroomAssignmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SocialAccountEntity

```lua
local social_account = client:SocialAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_urls` | `table` | Yes | Full URLs for the social media profiles to add. |
| `provider` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SocialAccount():create({
  account_urls = --[[ table ]],
  provider = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SocialAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SshSigningKeyEntity

```lua
local ssh_signing_key = client:SshSigningKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key` | `string` | Yes | The public SSH key to add to your GitHub account. |
| `title` | `string` | Yes | A descriptive name for the new key. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `key` | - | - | - |
| `title` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SshSigningKey():create({
  created_at = --[[ string ]],
  id = --[[ number ]],
  key = --[[ string ]],
  title = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SshSigningKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SshSigningKey():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SshSigningKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusEntity

```lua
local status = client:Status(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | No | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `description` | `string` | No | A short description of the status. |
| `id` | `number` | Yes |  |
| `node_id` | `string` | Yes |  |
| `state` | `string` | Yes | The state of the status. |
| `target_url` | `string` | No | The target URL to associate with this status. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `avatar_url` | - | - |
| `context` | Yes | - |
| `created_at` | - | - |
| `creator` | - | - |
| `description` | Yes | - |
| `id` | - | - |
| `node_id` | - | - |
| `state` | - | - |
| `target_url` | Yes | - |
| `updated_at` | - | - |
| `url` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Status():create({
  id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  avatar_url = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  node_id = --[[ string ]],
  state = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Status():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusCheckPolicyEntity

```lua
local status_check_policy = client:StatusCheckPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `number` | Yes |  |
| `checks` | `table` | Yes | The list of status checks to require in order to merge into this branch. |
| `context` | `string` | Yes |  |
| `contexts` | `table` | Yes | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `string` | Yes |  |
| `strict` | `boolean` | Yes | Require branches to be up to date before merging. |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `app_id` | - | - |
| `checks` | - | Yes |
| `context` | - | - |
| `contexts` | - | Yes |
| `contexts_url` | - | - |
| `strict` | - | Yes |
| `url` | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StatusCheckPolicy():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StatusCheckPolicy():update({
  branch_id = "branch_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusCheckPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriberEntity

```lua
local subscriber = client:Subscriber(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `boolean` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subscriber():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `tarball_url` | `string` | Yes |  |
| `zipball_url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tag():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagProtectionEntity

```lua
local tag_protection = client:TagProtection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `id` | `number` | No |  |
| `pattern` | `string` | Yes | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TagProtection():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  pattern = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TagProtection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagProtectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `boolean` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `boolean` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `boolean` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `boolean` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `boolean` | No | Whether to allow squash merges for pull requests. |
| `archive_url` | `string` | Yes |  |
| `archived` | `boolean` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `assignment` | `string` | No | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `table` | Yes | A GitHub user. |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `body` | `string` | Yes | The main text of the comment. |
| `body_html` | `string` | Yes |  |
| `body_version` | `string` | Yes | The current version of the body content. |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `table` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `columns_url` | `string` | Yes |  |
| `comments_count` | `number` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes | A GitHub user. |
| `custom_properties` | `table` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `boolean` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | The description of the team. |
| `disabled` | `boolean` | Yes | Returns whether or not this repository disabled. |
| `discussion_url` | `string` | Yes |  |
| `downloads_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `failed_at` | `string` | No |  |
| `failed_reason` | `string` | No |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `fork` | `boolean` | Yes |  |
| `forks` | `number` | Yes |  |
| `forks_count` | `number` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `has_discussions` | `boolean` | No |  |
| `has_downloads` | `boolean` | Yes | Whether downloads are enabled. |
| `has_issues` | `boolean` | Yes | Whether issues are enabled. |
| `has_pages` | `boolean` | Yes |  |
| `has_projects` | `boolean` | Yes | Whether projects are enabled. |
| `has_wiki` | `boolean` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the repository |
| `invitation_source` | `string` | No |  |
| `invitation_teams_url` | `string` | Yes |  |
| `inviter` | `table` | Yes | A GitHub user. |
| `is_template` | `boolean` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `last_edited_at` | `string` | Yes |  |
| `ldap_dn` | `string` | No | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `table` | Yes | License Simple |
| `login` | `string` | Yes |  |
| `maintainers` | `table` | No | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `string` | No |  |
| `members_count` | `number` | Yes |  |
| `members_url` | `string` | Yes |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `network_count` | `number` | No |  |
| `node_id` | `string` | Yes |  |
| `notification_setting` | `string` | No | The notification setting the team has set |
| `notifications_url` | `string` | Yes |  |
| `number` | `number` | Yes | The unique sequence number of a team discussion comment. |
| `open_issues` | `number` | Yes |  |
| `open_issues_count` | `number` | Yes |  |
| `organization` | `table` | Yes | Team Organization |
| `organization_permission` | `string` | No | The organization permission for this project. |
| `organizations_url` | `string` | Yes |  |
| `owner` | `table` | Yes | A GitHub user. |
| `owner_url` | `string` | Yes |  |
| `parent` | `table` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `number` | No | The ID of a team to set as the parent team. |
| `permission` | `string` | Yes | Permission that the team will have for its repositories |
| `permissions` | `table` | Yes |  |
| `pinned` | `boolean` | Yes | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | No | The level of privacy this team should have |
| `private` | `boolean` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `table` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repo_names` | `table` | No | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `number` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `role` | `string` | Yes | The role of the user in the team. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `table` | No |  |
| `site_admin` | `boolean` | Yes |  |
| `size` | `number` | Yes | The size of the repository, in kilobytes. |
| `slug` | `string` | Yes |  |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `number` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | Yes | The state of the user's membership in the team. |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `number` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_count` | `number` | Yes |  |
| `team_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `title` | `string` | Yes | The title of the discussion. |
| `topics` | `table` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the team |
| `user_view_type` | `string` | No |  |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `number` | Yes |  |
| `watchers_count` | `number` | Yes |  |
| `web_commit_signoff_required` | `boolean` | No | Whether to require contributors to sign off on web-based commits |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `allow_auto_merge` | - | - | - | - | - |
| `allow_forking` | - | - | - | - | - |
| `allow_merge_commit` | - | - | - | - | - |
| `allow_rebase_merge` | - | - | - | - | - |
| `allow_squash_merge` | - | - | - | - | - |
| `archive_url` | - | - | - | - | - |
| `archived` | - | Yes | - | - | - |
| `assignees_url` | - | - | - | - | - |
| `assignment` | - | - | - | - | - |
| `author` | - | - | - | - | - |
| `avatar_url` | - | - | - | - | - |
| `blobs_url` | - | - | - | - | - |
| `body` | - | - | - | - | - |
| `body_html` | - | - | - | - | - |
| `body_version` | - | - | - | - | - |
| `branches_url` | - | - | - | - | - |
| `clone_url` | - | Yes | - | - | - |
| `code_of_conduct` | - | - | - | - | - |
| `collaborators_url` | - | - | - | - | - |
| `columns_url` | - | - | - | - | - |
| `comments_count` | - | - | - | - | - |
| `comments_url` | - | - | - | - | - |
| `commits_url` | - | - | - | - | - |
| `compare_url` | - | - | - | - | - |
| `contents_url` | - | - | - | - | - |
| `contributors_url` | - | - | - | - | - |
| `created_at` | - | Yes | - | - | - |
| `creator` | - | - | - | - | - |
| `custom_properties` | - | - | - | - | - |
| `default_branch` | - | Yes | - | - | - |
| `delete_branch_on_merge` | - | - | - | - | - |
| `deployments_url` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `disabled` | - | Yes | - | - | - |
| `discussion_url` | - | - | - | - | - |
| `downloads_url` | - | - | - | - | - |
| `email` | - | Yes | - | - | - |
| `events_url` | - | - | - | - | - |
| `failed_at` | - | - | - | - | - |
| `failed_reason` | - | - | - | - | - |
| `followers_url` | - | - | - | - | - |
| `following_url` | - | - | - | - | - |
| `fork` | - | - | - | - | - |
| `forks` | - | Yes | - | - | - |
| `forks_count` | - | Yes | - | - | - |
| `forks_url` | - | - | - | - | - |
| `full_name` | - | - | - | - | - |
| `gists_url` | - | - | - | - | - |
| `git_commits_url` | - | - | - | - | - |
| `git_refs_url` | - | - | - | - | - |
| `git_tags_url` | - | - | - | - | - |
| `git_url` | - | Yes | - | - | - |
| `gravatar_id` | - | - | - | - | - |
| `has_discussions` | - | - | - | - | - |
| `has_downloads` | - | Yes | - | - | - |
| `has_issues` | - | Yes | - | - | - |
| `has_pages` | - | Yes | - | - | - |
| `has_projects` | - | Yes | - | - | - |
| `has_wiki` | - | Yes | - | - | - |
| `homepage` | - | Yes | - | - | - |
| `hooks_url` | - | - | - | - | - |
| `html_url` | - | - | Yes | Yes | - |
| `id` | - | - | Yes | Yes | - |
| `invitation_source` | - | - | - | - | - |
| `invitation_teams_url` | - | - | - | - | - |
| `inviter` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `issue_comment_url` | - | - | - | - | - |
| `issue_events_url` | - | - | - | - | - |
| `issues_url` | - | - | - | - | - |
| `keys_url` | - | - | - | - | - |
| `labels_url` | - | - | - | - | - |
| `language` | - | Yes | - | - | - |
| `languages_url` | - | - | - | - | - |
| `last_edited_at` | - | - | - | - | - |
| `ldap_dn` | - | - | - | - | - |
| `license` | - | Yes | - | - | - |
| `login` | - | - | - | - | - |
| `maintainers` | - | - | - | - | - |
| `master_branch` | - | - | - | - | - |
| `members_count` | - | - | - | - | - |
| `members_url` | - | - | Yes | Yes | - |
| `merges_url` | - | - | - | - | - |
| `milestones_url` | - | - | - | - | - |
| `mirror_url` | - | Yes | - | - | - |
| `name` | - | Yes | Yes | Yes | - |
| `network_count` | - | - | - | - | - |
| `node_id` | - | - | Yes | Yes | - |
| `notification_setting` | - | - | - | - | - |
| `notifications_url` | - | - | - | - | - |
| `number` | - | - | - | - | - |
| `open_issues` | - | Yes | - | - | - |
| `open_issues_count` | - | Yes | - | - | - |
| `organization` | - | - | - | - | - |
| `organization_permission` | - | - | - | - | - |
| `organizations_url` | - | - | - | - | - |
| `owner` | - | - | - | - | - |
| `owner_url` | - | - | - | - | - |
| `parent` | - | - | Yes | Yes | - |
| `parent_team_id` | - | - | - | - | - |
| `permission` | - | - | Yes | Yes | - |
| `permissions` | - | Yes | - | - | - |
| `pinned` | - | - | - | - | - |
| `privacy` | - | - | - | - | - |
| `private` | Yes | Yes | Yes | - | - |
| `pulls_url` | - | - | - | - | - |
| `pushed_at` | - | Yes | - | - | - |
| `reactions` | - | - | - | - | - |
| `received_events_url` | - | - | - | - | - |
| `releases_url` | - | - | - | - | - |
| `repo_names` | - | - | - | - | - |
| `repos_count` | - | - | - | - | - |
| `repos_url` | - | - | - | - | - |
| `repositories_url` | - | - | Yes | Yes | - |
| `role` | - | - | - | Yes | - |
| `role_name` | - | - | - | - | - |
| `security_and_analysis` | - | - | - | - | - |
| `site_admin` | - | - | - | - | - |
| `size` | - | Yes | - | - | - |
| `slug` | - | - | Yes | Yes | - |
| `ssh_url` | - | Yes | - | - | - |
| `stargazers_count` | - | Yes | - | - | - |
| `stargazers_url` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `starred_url` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `statuses_url` | - | - | - | - | - |
| `subscribers_count` | - | - | - | - | - |
| `subscribers_url` | - | - | - | - | - |
| `subscription_url` | - | - | - | - | - |
| `subscriptions_url` | - | - | - | - | - |
| `svn_url` | - | Yes | - | - | - |
| `tags_url` | - | - | - | - | - |
| `team_count` | - | - | - | - | - |
| `team_url` | - | - | - | - | - |
| `teams_url` | - | - | - | - | - |
| `temp_clone_token` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `topics` | - | - | - | - | - |
| `trees_url` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `updated_at` | - | Yes | - | - | - |
| `url` | - | - | Yes | Yes | - |
| `user_view_type` | - | - | - | - | - |
| `visibility` | - | - | - | - | - |
| `watchers` | - | Yes | - | - | - |
| `watchers_count` | - | Yes | - | - | - |
| `web_commit_signoff_required` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Team():create({
  org_id = --[[ string ]],
  archive_url = --[[ string ]],
  archived = --[[ boolean ]],
  assignees_url = --[[ string ]],
  author = --[[ table ]],
  avatar_url = --[[ string ]],
  blobs_url = --[[ string ]],
  body = --[[ string ]],
  body_html = --[[ string ]],
  body_version = --[[ string ]],
  branches_url = --[[ string ]],
  clone_url = --[[ string ]],
  code_of_conduct = --[[ table ]],
  collaborators_url = --[[ string ]],
  columns_url = --[[ string ]],
  comments_count = --[[ number ]],
  comments_url = --[[ string ]],
  commits_url = --[[ string ]],
  compare_url = --[[ string ]],
  contents_url = --[[ string ]],
  contributors_url = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  default_branch = --[[ string ]],
  deployments_url = --[[ string ]],
  description = --[[ string ]],
  disabled = --[[ boolean ]],
  discussion_url = --[[ string ]],
  downloads_url = --[[ string ]],
  events_url = --[[ string ]],
  followers_url = --[[ string ]],
  following_url = --[[ string ]],
  fork = --[[ boolean ]],
  forks = --[[ number ]],
  forks_count = --[[ number ]],
  forks_url = --[[ string ]],
  full_name = --[[ string ]],
  gists_url = --[[ string ]],
  git_commits_url = --[[ string ]],
  git_refs_url = --[[ string ]],
  git_tags_url = --[[ string ]],
  git_url = --[[ string ]],
  gravatar_id = --[[ string ]],
  has_downloads = --[[ boolean ]],
  has_issues = --[[ boolean ]],
  has_pages = --[[ boolean ]],
  has_projects = --[[ boolean ]],
  has_wiki = --[[ boolean ]],
  homepage = --[[ string ]],
  hooks_url = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  invitation_teams_url = --[[ string ]],
  inviter = --[[ table ]],
  issue_comment_url = --[[ string ]],
  issue_events_url = --[[ string ]],
  issues_url = --[[ string ]],
  keys_url = --[[ string ]],
  labels_url = --[[ string ]],
  language = --[[ string ]],
  languages_url = --[[ string ]],
  last_edited_at = --[[ string ]],
  license = --[[ table ]],
  login = --[[ string ]],
  members_count = --[[ number ]],
  members_url = --[[ string ]],
  merges_url = --[[ string ]],
  milestones_url = --[[ string ]],
  mirror_url = --[[ string ]],
  name = --[[ string ]],
  node_id = --[[ string ]],
  notifications_url = --[[ string ]],
  number = --[[ number ]],
  open_issues = --[[ number ]],
  open_issues_count = --[[ number ]],
  organization = --[[ table ]],
  organizations_url = --[[ string ]],
  owner = --[[ table ]],
  owner_url = --[[ string ]],
  parent = --[[ table ]],
  permission = --[[ string ]],
  permissions = --[[ table ]],
  pinned = --[[ boolean ]],
  private = --[[ boolean ]],
  pulls_url = --[[ string ]],
  pushed_at = --[[ string ]],
  reactions = --[[ table ]],
  received_events_url = --[[ string ]],
  releases_url = --[[ string ]],
  repos_count = --[[ number ]],
  repos_url = --[[ string ]],
  repositories_url = --[[ string ]],
  role = --[[ string ]],
  site_admin = --[[ boolean ]],
  size = --[[ number ]],
  slug = --[[ string ]],
  ssh_url = --[[ string ]],
  stargazers_count = --[[ number ]],
  stargazers_url = --[[ string ]],
  starred_url = --[[ string ]],
  state = --[[ string ]],
  statuses_url = --[[ string ]],
  subscribers_url = --[[ string ]],
  subscription_url = --[[ string ]],
  subscriptions_url = --[[ string ]],
  svn_url = --[[ string ]],
  tags_url = --[[ string ]],
  team_count = --[[ number ]],
  team_url = --[[ string ]],
  teams_url = --[[ string ]],
  title = --[[ string ]],
  trees_url = --[[ string ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  watchers = --[[ number ]],
  watchers_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Team():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Team():update({
  id = 1,
  project_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamSimpleEntity

```lua
local team_simple = client:TeamSimple(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the team |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | Unique identifier of the team |
| `ldap_dn` | `string` | No | Distinguished Name (DN) that team maps to within LDAP environment |
| `members_url` | `string` | Yes |  |
| `name` | `string` | Yes | Name of the team |
| `node_id` | `string` | Yes |  |
| `notification_setting` | `string` | No | The notification setting the team has set |
| `permission` | `string` | Yes | Permission that the team will have for its repositories |
| `privacy` | `string` | No | The level of privacy this team should have |
| `repositories_url` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the team |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TeamSimple():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamSimpleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreadEntity

```lua
local thread = client:Thread(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `last_read_at` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `repository` | `table` | Yes | Minimal Repository |
| `subject` | `table` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `unread` | `boolean` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Thread():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Thread():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Thread():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ThreadSubscriptionEntity

```lua
local thread_subscription = client:ThreadSubscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `boolean` | Yes | Whether to block all notifications from a thread. |
| `reason` | `string` | Yes |  |
| `repository_url` | `string` | No |  |
| `subscribed` | `boolean` | Yes |  |
| `thread_url` | `string` | No |  |
| `url` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `created_at` | - | - |
| `id` | - | - |
| `ignored` | - | Yes |
| `reason` | - | - |
| `repository_url` | - | - |
| `subscribed` | - | - |
| `thread_url` | - | - |
| `url` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ThreadSubscription():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ThreadSubscription():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadSubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopicEntity

```lua
local topic = client:Topic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `names` | `table` | Yes | An array of topics to add to the repository. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Topic():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Topic():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `string` | No | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `table` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `string` | No |  |
| `bio` | `string` | No | The new short biography of the user. |
| `blog` | `string` | No | The new blog URL of the user. |
| `collaborators` | `number` | No |  |
| `company` | `string` | No | The new company of the user. |
| `created_at` | `string` | No |  |
| `disk_usage` | `number` | No |  |
| `email` | `string` | No | The publicly visible email address of the user. |
| `events_url` | `string` | No |  |
| `followers` | `number` | No |  |
| `followers_url` | `string` | No |  |
| `following` | `number` | No |  |
| `following_url` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `gravatar_id` | `string` | No |  |
| `hireable` | `boolean` | No | The new hiring availability of the user. |
| `html_url` | `string` | No |  |
| `id` | `number` | No |  |
| `inherited_from` | `table` | No | Team the user has gotten the role through |
| `location` | `string` | No | The new location of the user. |
| `login` | `string` | No |  |
| `name` | `string` | No | The new name of the user. |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `owned_private_repos` | `number` | No |  |
| `page_info` | `table` | No | Information about the current page. |
| `plan` | `table` | No |  |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `number` | No |  |
| `private_repos` | `number` | Yes |  |
| `public_gists` | `number` | No |  |
| `public_repos` | `number` | No |  |
| `received_events_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `boolean` | No |  |
| `space` | `number` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | No |  |
| `subject_digests` | `table` | Yes | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` | No |  |
| `total_private_repos` | `number` | No |  |
| `twitter_username` | `string` | No | The new Twitter username of the user. |
| `two_factor_authentication` | `boolean` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `users` | `table` | Yes | The username for users |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignment` | - | - | - | - | - |
| `attestations_subject_digests` | - | - | - | - | - |
| `avatar_url` | - | Yes | - | - | - |
| `bio` | - | - | - | - | - |
| `blog` | - | - | - | - | - |
| `collaborators` | - | - | - | - | - |
| `company` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `disk_usage` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `events_url` | - | Yes | - | - | - |
| `followers` | - | - | - | - | - |
| `followers_url` | - | Yes | - | - | - |
| `following` | - | - | - | - | - |
| `following_url` | - | Yes | - | - | - |
| `gists_url` | - | Yes | - | - | - |
| `gravatar_id` | - | Yes | - | - | - |
| `hireable` | - | - | - | - | - |
| `html_url` | - | Yes | - | - | - |
| `id` | - | Yes | - | - | - |
| `inherited_from` | - | - | - | - | - |
| `location` | - | - | - | - | - |
| `login` | - | Yes | - | - | - |
| `name` | - | - | - | - | - |
| `node_id` | - | Yes | - | - | - |
| `organizations_url` | - | Yes | - | - | - |
| `owned_private_repos` | - | - | - | - | - |
| `page_info` | - | - | - | - | - |
| `plan` | - | - | - | - | - |
| `predicate_type` | - | - | - | - | - |
| `private_gists` | - | - | - | - | - |
| `private_repos` | - | - | - | - | - |
| `public_gists` | - | - | - | - | - |
| `public_repos` | - | - | - | - | - |
| `received_events_url` | - | Yes | - | - | - |
| `repos_url` | - | Yes | - | - | - |
| `site_admin` | - | Yes | - | - | - |
| `space` | - | - | - | - | - |
| `starred_at` | - | - | - | - | - |
| `starred_url` | - | Yes | - | - | - |
| `subject_digests` | - | - | - | - | - |
| `subscriptions_url` | - | Yes | - | - | - |
| `total_private_repos` | - | - | - | - | - |
| `twitter_username` | - | - | - | - | - |
| `two_factor_authentication` | - | - | - | - | - |
| `type` | - | Yes | - | - | - |
| `updated_at` | - | - | - | - | - |
| `url` | - | Yes | - | - | - |
| `user_view_type` | - | - | - | - | - |
| `users` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:User():create({
  branch_id = --[[ string ]],
  owner = --[[ string ]],
  repo = --[[ string ]],
  private_repos = --[[ number ]],
  space = --[[ number ]],
  subject_digests = --[[ table ]],
  users = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:User():remove({ gpg_key_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:User():update({
  id = 1,
  username = "username",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserMarketplacePurchaseEntity

```lua
local user_marketplace_purchase = client:UserMarketplacePurchase(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `table` | Yes |  |
| `billing_cycle` | `string` | Yes |  |
| `free_trial_ends_on` | `string` | Yes |  |
| `next_billing_date` | `string` | Yes |  |
| `on_free_trial` | `boolean` | Yes |  |
| `plan` | `table` | Yes | Marketplace Listing Plan |
| `unit_count` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserMarketplacePurchase():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserMarketplacePurchaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ViewEntity

```lua
local view = client:View(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:View():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookConfigEntity

```lua
local webhook_config = client:WebhookConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` | No |  |
| `secret` | `string` | No | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | No | The URL to which the payloads will be delivered. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhookConfig():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:WebhookConfig():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badge_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = "workflow_id", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Workflow():update({
  id = "workflow_id",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowRunEntity

```lua
local workflow_run = client:WorkflowRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `table` | Yes | A GitHub user. |
| `artifacts_url` | `string` | Yes | The URL to the artifacts for the workflow run. |
| `cancel_url` | `string` | Yes | The URL to cancel the workflow run. |
| `check_suite_id` | `number` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | No | The node ID of the associated check suite. |
| `check_suite_url` | `string` | Yes | The URL to the associated check suite. |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `display_title` | `string` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `table` | Yes | A commit. |
| `head_repository` | `table` | Yes | Minimal Repository |
| `head_repository_id` | `number` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `string` | Yes |  |
| `id` | `number` | Yes | The ID of the workflow run. |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `name` | `string` | No | The name of the workflow run. |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes | The full path of the workflow |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `table` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `table` | No |  |
| `repository` | `table` | Yes | Minimal Repository |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `run_attempt` | `number` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `number` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `status` | `string` | Yes |  |
| `triggering_actor` | `table` | Yes | A GitHub user. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | The URL to the workflow run. |
| `workflow_id` | `number` | Yes | The ID of the parent workflow. |
| `workflow_url` | `string` | Yes | The URL to the workflow. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:WorkflowRun():create({
  owner = --[[ string ]],
  repo = --[[ string ]],
  run_id = --[[ number ]],
  actor = --[[ table ]],
  artifacts_url = --[[ string ]],
  cancel_url = --[[ string ]],
  check_suite_url = --[[ string ]],
  conclusion = --[[ string ]],
  created_at = --[[ string ]],
  display_title = --[[ string ]],
  event = --[[ string ]],
  head_branch = --[[ string ]],
  head_commit = --[[ table ]],
  head_repository = --[[ table ]],
  head_sha = --[[ string ]],
  html_url = --[[ string ]],
  id = --[[ number ]],
  jobs_url = --[[ string ]],
  logs_url = --[[ string ]],
  node_id = --[[ string ]],
  path = --[[ string ]],
  pull_requests = --[[ table ]],
  repository = --[[ table ]],
  rerun_url = --[[ string ]],
  run_number = --[[ number ]],
  status = --[[ string ]],
  triggering_actor = --[[ table ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  workflow_id = --[[ number ]],
  workflow_url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkflowRun():load({ id = 1, owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowRunUsageEntity

```lua
local workflow_run_usage = client:WorkflowRunUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `table` | Yes |  |
| `UBUNTU` | `table` | Yes |  |
| `WINDOWS` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkflowRunUsage():load({ owner = "owner", repo = "repo", run_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowUsageEntity

```lua
local workflow_usage = client:WorkflowUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `table` | No |  |
| `UBUNTU` | `table` | No |  |
| `WINDOWS` | `table` | No |  |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkflowUsage():load({ id = "workflow_usage_id", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

