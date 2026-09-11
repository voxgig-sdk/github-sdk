# Github Golang SDK Reference

Complete API reference for the Github Golang SDK.


## GithubSDK

### Constructor

```go
func NewGithubSDK(options map[string]any) *GithubSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *GithubSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *GithubSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Action(data map[string]any) GithubEntity`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `ActionsArtifactAndLogRetention(data map[string]any) GithubEntity`

Create a new `ActionsArtifactAndLogRetention` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheList(data map[string]any) GithubEntity`

Create a new `ActionsCacheList` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheUsageByRepository(data map[string]any) GithubEntity`

Create a new `ActionsCacheUsageByRepository` entity instance. Pass `nil` for no initial data.

#### `ActionsCacheUsageOrgEnterprise(data map[string]any) GithubEntity`

Create a new `ActionsCacheUsageOrgEnterprise` entity instance. Pass `nil` for no initial data.

#### `ActionsForkPrContributorApproval(data map[string]any) GithubEntity`

Create a new `ActionsForkPrContributorApproval` entity instance. Pass `nil` for no initial data.

#### `ActionsForkPrWorkflowsPrivateRepo(data map[string]any) GithubEntity`

Create a new `ActionsForkPrWorkflowsPrivateRepo` entity instance. Pass `nil` for no initial data.

#### `ActionsGetDefaultWorkflowPermission(data map[string]any) GithubEntity`

Create a new `ActionsGetDefaultWorkflowPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsHostedRunner(data map[string]any) GithubEntity`

Create a new `ActionsHostedRunner` entity instance. Pass `nil` for no initial data.

#### `ActionsHostedRunnerLimit(data map[string]any) GithubEntity`

Create a new `ActionsHostedRunnerLimit` entity instance. Pass `nil` for no initial data.

#### `ActionsOrganizationPermission(data map[string]any) GithubEntity`

Create a new `ActionsOrganizationPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsPublicKey(data map[string]any) GithubEntity`

Create a new `ActionsPublicKey` entity instance. Pass `nil` for no initial data.

#### `ActionsRepositoryPermission(data map[string]any) GithubEntity`

Create a new `ActionsRepositoryPermission` entity instance. Pass `nil` for no initial data.

#### `ActionsSecret(data map[string]any) GithubEntity`

Create a new `ActionsSecret` entity instance. Pass `nil` for no initial data.

#### `ActionsVariable(data map[string]any) GithubEntity`

Create a new `ActionsVariable` entity instance. Pass `nil` for no initial data.

#### `ActionsWorkflowAccessToRepository(data map[string]any) GithubEntity`

Create a new `ActionsWorkflowAccessToRepository` entity instance. Pass `nil` for no initial data.

#### `Activity(data map[string]any) GithubEntity`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Add(data map[string]any) GithubEntity`

Create a new `Add` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsRouteStat(data map[string]any) GithubEntity`

Create a new `ApiInsightsRouteStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsSubjectStat(data map[string]any) GithubEntity`

Create a new `ApiInsightsSubjectStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsSummaryStat(data map[string]any) GithubEntity`

Create a new `ApiInsightsSummaryStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsTimeStat(data map[string]any) GithubEntity`

Create a new `ApiInsightsTimeStat` entity instance. Pass `nil` for no initial data.

#### `ApiInsightsUserStat(data map[string]any) GithubEntity`

Create a new `ApiInsightsUserStat` entity instance. Pass `nil` for no initial data.

#### `ApiOverview(data map[string]any) GithubEntity`

Create a new `ApiOverview` entity instance. Pass `nil` for no initial data.

#### `App(data map[string]any) GithubEntity`

Create a new `App` entity instance. Pass `nil` for no initial data.

#### `Artifact(data map[string]any) GithubEntity`

Create a new `Artifact` entity instance. Pass `nil` for no initial data.

#### `Assignee(data map[string]any) GithubEntity`

Create a new `Assignee` entity instance. Pass `nil` for no initial data.

#### `AuthenticationToken(data map[string]any) GithubEntity`

Create a new `AuthenticationToken` entity instance. Pass `nil` for no initial data.

#### `Authorization(data map[string]any) GithubEntity`

Create a new `Authorization` entity instance. Pass `nil` for no initial data.

#### `Autolink(data map[string]any) GithubEntity`

Create a new `Autolink` entity instance. Pass `nil` for no initial data.

#### `BaseGist(data map[string]any) GithubEntity`

Create a new `BaseGist` entity instance. Pass `nil` for no initial data.

#### `BillingUsageReport(data map[string]any) GithubEntity`

Create a new `BillingUsageReport` entity instance. Pass `nil` for no initial data.

#### `BillingUsageReportUser(data map[string]any) GithubEntity`

Create a new `BillingUsageReportUser` entity instance. Pass `nil` for no initial data.

#### `Blob(data map[string]any) GithubEntity`

Create a new `Blob` entity instance. Pass `nil` for no initial data.

#### `Block(data map[string]any) GithubEntity`

Create a new `Block` entity instance. Pass `nil` for no initial data.

#### `Branch(data map[string]any) GithubEntity`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `BranchProtection(data map[string]any) GithubEntity`

Create a new `BranchProtection` entity instance. Pass `nil` for no initial data.

#### `BranchRestrictionPolicy(data map[string]any) GithubEntity`

Create a new `BranchRestrictionPolicy` entity instance. Pass `nil` for no initial data.

#### `BranchShort(data map[string]any) GithubEntity`

Create a new `BranchShort` entity instance. Pass `nil` for no initial data.

#### `BranchWithProtection(data map[string]any) GithubEntity`

Create a new `BranchWithProtection` entity instance. Pass `nil` for no initial data.

#### `Campaign(data map[string]any) GithubEntity`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Check(data map[string]any) GithubEntity`

Create a new `Check` entity instance. Pass `nil` for no initial data.

#### `CheckAnnotation(data map[string]any) GithubEntity`

Create a new `CheckAnnotation` entity instance. Pass `nil` for no initial data.

#### `CheckAutomatedSecurityFix(data map[string]any) GithubEntity`

Create a new `CheckAutomatedSecurityFix` entity instance. Pass `nil` for no initial data.

#### `CheckRun(data map[string]any) GithubEntity`

Create a new `CheckRun` entity instance. Pass `nil` for no initial data.

#### `CheckSuite(data map[string]any) GithubEntity`

Create a new `CheckSuite` entity instance. Pass `nil` for no initial data.

#### `CheckSuitePreference(data map[string]any) GithubEntity`

Create a new `CheckSuitePreference` entity instance. Pass `nil` for no initial data.

#### `Classroom(data map[string]any) GithubEntity`

Create a new `Classroom` entity instance. Pass `nil` for no initial data.

#### `ClassroomAcceptedAssignment(data map[string]any) GithubEntity`

Create a new `ClassroomAcceptedAssignment` entity instance. Pass `nil` for no initial data.

#### `ClassroomAssignment(data map[string]any) GithubEntity`

Create a new `ClassroomAssignment` entity instance. Pass `nil` for no initial data.

#### `ClassroomAssignmentGrade(data map[string]any) GithubEntity`

Create a new `ClassroomAssignmentGrade` entity instance. Pass `nil` for no initial data.

#### `Clone(data map[string]any) GithubEntity`

Create a new `Clone` entity instance. Pass `nil` for no initial data.

#### `CodeFrequency(data map[string]any) GithubEntity`

Create a new `CodeFrequency` entity instance. Pass `nil` for no initial data.

#### `CodeFrequencyStat(data map[string]any) GithubEntity`

Create a new `CodeFrequencyStat` entity instance. Pass `nil` for no initial data.

#### `CodeOfConduct(data map[string]any) GithubEntity`

Create a new `CodeOfConduct` entity instance. Pass `nil` for no initial data.

#### `CodeScanning(data map[string]any) GithubEntity`

Create a new `CodeScanning` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlert(data map[string]any) GithubEntity`

Create a new `CodeScanningAlert` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlertInstance(data map[string]any) GithubEntity`

Create a new `CodeScanningAlertInstance` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAlertItem(data map[string]any) GithubEntity`

Create a new `CodeScanningAlertItem` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAnalysi(data map[string]any) GithubEntity`

Create a new `CodeScanningAnalysi` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAnalysisDeletion(data map[string]any) GithubEntity`

Create a new `CodeScanningAnalysisDeletion` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAutofix(data map[string]any) GithubEntity`

Create a new `CodeScanningAutofix` entity instance. Pass `nil` for no initial data.

#### `CodeScanningAutofixCommit(data map[string]any) GithubEntity`

Create a new `CodeScanningAutofixCommit` entity instance. Pass `nil` for no initial data.

#### `CodeScanningCodeqlDatabase(data map[string]any) GithubEntity`

Create a new `CodeScanningCodeqlDatabase` entity instance. Pass `nil` for no initial data.

#### `CodeScanningDefaultSetup(data map[string]any) GithubEntity`

Create a new `CodeScanningDefaultSetup` entity instance. Pass `nil` for no initial data.

#### `CodeScanningOrganizationAlertItem(data map[string]any) GithubEntity`

Create a new `CodeScanningOrganizationAlertItem` entity instance. Pass `nil` for no initial data.

#### `CodeScanningSarifsStatus(data map[string]any) GithubEntity`

Create a new `CodeScanningSarifsStatus` entity instance. Pass `nil` for no initial data.

#### `CodeScanningVariantAnalysi(data map[string]any) GithubEntity`

Create a new `CodeScanningVariantAnalysi` entity instance. Pass `nil` for no initial data.

#### `CodeScanningVariantAnalysisRepoTask(data map[string]any) GithubEntity`

Create a new `CodeScanningVariantAnalysisRepoTask` entity instance. Pass `nil` for no initial data.

#### `CodeSecurity(data map[string]any) GithubEntity`

Create a new `CodeSecurity` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityConfiguration(data map[string]any) GithubEntity`

Create a new `CodeSecurityConfiguration` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityConfigurationRepository(data map[string]any) GithubEntity`

Create a new `CodeSecurityConfigurationRepository` entity instance. Pass `nil` for no initial data.

#### `CodeSecurityDefaultConfiguration(data map[string]any) GithubEntity`

Create a new `CodeSecurityDefaultConfiguration` entity instance. Pass `nil` for no initial data.

#### `CodeownersError(data map[string]any) GithubEntity`

Create a new `CodeownersError` entity instance. Pass `nil` for no initial data.

#### `Codespace(data map[string]any) GithubEntity`

Create a new `Codespace` entity instance. Pass `nil` for no initial data.

#### `Collaborator(data map[string]any) GithubEntity`

Create a new `Collaborator` entity instance. Pass `nil` for no initial data.

#### `CombinedBillingUsage(data map[string]any) GithubEntity`

Create a new `CombinedBillingUsage` entity instance. Pass `nil` for no initial data.

#### `CombinedCommitStatus(data map[string]any) GithubEntity`

Create a new `CombinedCommitStatus` entity instance. Pass `nil` for no initial data.

#### `Commit(data map[string]any) GithubEntity`

Create a new `Commit` entity instance. Pass `nil` for no initial data.

#### `CommitActivity(data map[string]any) GithubEntity`

Create a new `CommitActivity` entity instance. Pass `nil` for no initial data.

#### `CommitComment(data map[string]any) GithubEntity`

Create a new `CommitComment` entity instance. Pass `nil` for no initial data.

#### `CommitComparison(data map[string]any) GithubEntity`

Create a new `CommitComparison` entity instance. Pass `nil` for no initial data.

#### `CommunityProfile(data map[string]any) GithubEntity`

Create a new `CommunityProfile` entity instance. Pass `nil` for no initial data.

#### `ContentFile(data map[string]any) GithubEntity`

Create a new `ContentFile` entity instance. Pass `nil` for no initial data.

#### `ContentTraffic(data map[string]any) GithubEntity`

Create a new `ContentTraffic` entity instance. Pass `nil` for no initial data.

#### `Contributor(data map[string]any) GithubEntity`

Create a new `Contributor` entity instance. Pass `nil` for no initial data.

#### `Copilot(data map[string]any) GithubEntity`

Create a new `Copilot` entity instance. Pass `nil` for no initial data.

#### `CopilotOrganizationDetail(data map[string]any) GithubEntity`

Create a new `CopilotOrganizationDetail` entity instance. Pass `nil` for no initial data.

#### `CopilotUsageMetricsDay(data map[string]any) GithubEntity`

Create a new `CopilotUsageMetricsDay` entity instance. Pass `nil` for no initial data.

#### `Credential(data map[string]any) GithubEntity`

Create a new `Credential` entity instance. Pass `nil` for no initial data.

#### `CustomProperty(data map[string]any) GithubEntity`

Create a new `CustomProperty` entity instance. Pass `nil` for no initial data.

#### `CustomPropertyValue(data map[string]any) GithubEntity`

Create a new `CustomPropertyValue` entity instance. Pass `nil` for no initial data.

#### `Dependabot(data map[string]any) GithubEntity`

Create a new `Dependabot` entity instance. Pass `nil` for no initial data.

#### `DependabotAlert(data map[string]any) GithubEntity`

Create a new `DependabotAlert` entity instance. Pass `nil` for no initial data.

#### `DependabotAlertWithRepository(data map[string]any) GithubEntity`

Create a new `DependabotAlertWithRepository` entity instance. Pass `nil` for no initial data.

#### `DependabotPublicKey(data map[string]any) GithubEntity`

Create a new `DependabotPublicKey` entity instance. Pass `nil` for no initial data.

#### `DependabotRepositoryAccessDetail(data map[string]any) GithubEntity`

Create a new `DependabotRepositoryAccessDetail` entity instance. Pass `nil` for no initial data.

#### `DependabotSecret(data map[string]any) GithubEntity`

Create a new `DependabotSecret` entity instance. Pass `nil` for no initial data.

#### `DependencyGraph(data map[string]any) GithubEntity`

Create a new `DependencyGraph` entity instance. Pass `nil` for no initial data.

#### `DependencyGraphDiff(data map[string]any) GithubEntity`

Create a new `DependencyGraphDiff` entity instance. Pass `nil` for no initial data.

#### `DependencyGraphSpdxSbom(data map[string]any) GithubEntity`

Create a new `DependencyGraphSpdxSbom` entity instance. Pass `nil` for no initial data.

#### `DeployKey(data map[string]any) GithubEntity`

Create a new `DeployKey` entity instance. Pass `nil` for no initial data.

#### `Deployment(data map[string]any) GithubEntity`

Create a new `Deployment` entity instance. Pass `nil` for no initial data.

#### `DeploymentBranchPolicy(data map[string]any) GithubEntity`

Create a new `DeploymentBranchPolicy` entity instance. Pass `nil` for no initial data.

#### `DeploymentProtectionRule(data map[string]any) GithubEntity`

Create a new `DeploymentProtectionRule` entity instance. Pass `nil` for no initial data.

#### `DeploymentStatus(data map[string]any) GithubEntity`

Create a new `DeploymentStatus` entity instance. Pass `nil` for no initial data.

#### `DiffEntry(data map[string]any) GithubEntity`

Create a new `DiffEntry` entity instance. Pass `nil` for no initial data.

#### `Email(data map[string]any) GithubEntity`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Emoji(data map[string]any) GithubEntity`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `EmptyObject(data map[string]any) GithubEntity`

Create a new `EmptyObject` entity instance. Pass `nil` for no initial data.

#### `EnterpriseTeam(data map[string]any) GithubEntity`

Create a new `EnterpriseTeam` entity instance. Pass `nil` for no initial data.

#### `EnterpriseTeamMembership(data map[string]any) GithubEntity`

Create a new `EnterpriseTeamMembership` entity instance. Pass `nil` for no initial data.

#### `Environment(data map[string]any) GithubEntity`

Create a new `Environment` entity instance. Pass `nil` for no initial data.

#### `EnvironmentApproval(data map[string]any) GithubEntity`

Create a new `EnvironmentApproval` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) GithubEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Feed(data map[string]any) GithubEntity`

Create a new `Feed` entity instance. Pass `nil` for no initial data.

#### `FileCommit(data map[string]any) GithubEntity`

Create a new `FileCommit` entity instance. Pass `nil` for no initial data.

#### `Follower(data map[string]any) GithubEntity`

Create a new `Follower` entity instance. Pass `nil` for no initial data.

#### `Following(data map[string]any) GithubEntity`

Create a new `Following` entity instance. Pass `nil` for no initial data.

#### `FullRepository(data map[string]any) GithubEntity`

Create a new `FullRepository` entity instance. Pass `nil` for no initial data.

#### `Gist(data map[string]any) GithubEntity`

Create a new `Gist` entity instance. Pass `nil` for no initial data.

#### `GistComment(data map[string]any) GithubEntity`

Create a new `GistComment` entity instance. Pass `nil` for no initial data.

#### `GistCommit(data map[string]any) GithubEntity`

Create a new `GistCommit` entity instance. Pass `nil` for no initial data.

#### `GistSimple(data map[string]any) GithubEntity`

Create a new `GistSimple` entity instance. Pass `nil` for no initial data.

#### `Git(data map[string]any) GithubEntity`

Create a new `Git` entity instance. Pass `nil` for no initial data.

#### `GitCommit(data map[string]any) GithubEntity`

Create a new `GitCommit` entity instance. Pass `nil` for no initial data.

#### `GitRef(data map[string]any) GithubEntity`

Create a new `GitRef` entity instance. Pass `nil` for no initial data.

#### `GitTag(data map[string]any) GithubEntity`

Create a new `GitTag` entity instance. Pass `nil` for no initial data.

#### `GitTree(data map[string]any) GithubEntity`

Create a new `GitTree` entity instance. Pass `nil` for no initial data.

#### `Gitignore(data map[string]any) GithubEntity`

Create a new `Gitignore` entity instance. Pass `nil` for no initial data.

#### `GitignoreTemplate(data map[string]any) GithubEntity`

Create a new `GitignoreTemplate` entity instance. Pass `nil` for no initial data.

#### `GlobalAdvisory(data map[string]any) GithubEntity`

Create a new `GlobalAdvisory` entity instance. Pass `nil` for no initial data.

#### `GpgKey(data map[string]any) GithubEntity`

Create a new `GpgKey` entity instance. Pass `nil` for no initial data.

#### `Hook(data map[string]any) GithubEntity`

Create a new `Hook` entity instance. Pass `nil` for no initial data.

#### `HookDelivery(data map[string]any) GithubEntity`

Create a new `HookDelivery` entity instance. Pass `nil` for no initial data.

#### `HookDeliveryItem(data map[string]any) GithubEntity`

Create a new `HookDeliveryItem` entity instance. Pass `nil` for no initial data.

#### `HostedCompute(data map[string]any) GithubEntity`

Create a new `HostedCompute` entity instance. Pass `nil` for no initial data.

#### `Hovercard(data map[string]any) GithubEntity`

Create a new `Hovercard` entity instance. Pass `nil` for no initial data.

#### `Import(data map[string]any) GithubEntity`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `Installation(data map[string]any) GithubEntity`

Create a new `Installation` entity instance. Pass `nil` for no initial data.

#### `InstallationToken(data map[string]any) GithubEntity`

Create a new `InstallationToken` entity instance. Pass `nil` for no initial data.

#### `Integration(data map[string]any) GithubEntity`

Create a new `Integration` entity instance. Pass `nil` for no initial data.

#### `IntegrationInstallation(data map[string]any) GithubEntity`

Create a new `IntegrationInstallation` entity instance. Pass `nil` for no initial data.

#### `Interaction(data map[string]any) GithubEntity`

Create a new `Interaction` entity instance. Pass `nil` for no initial data.

#### `InteractionLimit(data map[string]any) GithubEntity`

Create a new `InteractionLimit` entity instance. Pass `nil` for no initial data.

#### `Issue(data map[string]any) GithubEntity`

Create a new `Issue` entity instance. Pass `nil` for no initial data.

#### `IssueType(data map[string]any) GithubEntity`

Create a new `IssueType` entity instance. Pass `nil` for no initial data.

#### `Job(data map[string]any) GithubEntity`

Create a new `Job` entity instance. Pass `nil` for no initial data.

#### `Key(data map[string]any) GithubEntity`

Create a new `Key` entity instance. Pass `nil` for no initial data.

#### `Label(data map[string]any) GithubEntity`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `Language(data map[string]any) GithubEntity`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `License(data map[string]any) GithubEntity`

Create a new `License` entity instance. Pass `nil` for no initial data.

#### `Markdown(data map[string]any) GithubEntity`

Create a new `Markdown` entity instance. Pass `nil` for no initial data.

#### `MarketplaceListingPlan(data map[string]any) GithubEntity`

Create a new `MarketplaceListingPlan` entity instance. Pass `nil` for no initial data.

#### `MarketplacePurchase(data map[string]any) GithubEntity`

Create a new `MarketplacePurchase` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) GithubEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Membership(data map[string]any) GithubEntity`

Create a new `Membership` entity instance. Pass `nil` for no initial data.

#### `MergedUpstream(data map[string]any) GithubEntity`

Create a new `MergedUpstream` entity instance. Pass `nil` for no initial data.

#### `Meta(data map[string]any) GithubEntity`

Create a new `Meta` entity instance. Pass `nil` for no initial data.

#### `Metaroot(data map[string]any) GithubEntity`

Create a new `Metaroot` entity instance. Pass `nil` for no initial data.

#### `Migration(data map[string]any) GithubEntity`

Create a new `Migration` entity instance. Pass `nil` for no initial data.

#### `Milestone(data map[string]any) GithubEntity`

Create a new `Milestone` entity instance. Pass `nil` for no initial data.

#### `MinimalRepository(data map[string]any) GithubEntity`

Create a new `MinimalRepository` entity instance. Pass `nil` for no initial data.

#### `NetworkConfiguration(data map[string]any) GithubEntity`

Create a new `NetworkConfiguration` entity instance. Pass `nil` for no initial data.

#### `NetworkSetting(data map[string]any) GithubEntity`

Create a new `NetworkSetting` entity instance. Pass `nil` for no initial data.

#### `OidcCustomSub(data map[string]any) GithubEntity`

Create a new `OidcCustomSub` entity instance. Pass `nil` for no initial data.

#### `OidcCustomSubRepo(data map[string]any) GithubEntity`

Create a new `OidcCustomSubRepo` entity instance. Pass `nil` for no initial data.

#### `Org(data map[string]any) GithubEntity`

Create a new `Org` entity instance. Pass `nil` for no initial data.

#### `OrgHook(data map[string]any) GithubEntity`

Create a new `OrgHook` entity instance. Pass `nil` for no initial data.

#### `OrgMembership(data map[string]any) GithubEntity`

Create a new `OrgMembership` entity instance. Pass `nil` for no initial data.

#### `OrgPrivateRegistryConfiguration(data map[string]any) GithubEntity`

Create a new `OrgPrivateRegistryConfiguration` entity instance. Pass `nil` for no initial data.

#### `OrgPrivateRegistryConfigurationWithSelectedRepository(data map[string]any) GithubEntity`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepository` entity instance. Pass `nil` for no initial data.

#### `OrgRepoCustomPropertyValue(data map[string]any) GithubEntity`

Create a new `OrgRepoCustomPropertyValue` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) GithubEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationActionsSecret(data map[string]any) GithubEntity`

Create a new `OrganizationActionsSecret` entity instance. Pass `nil` for no initial data.

#### `OrganizationActionsVariable(data map[string]any) GithubEntity`

Create a new `OrganizationActionsVariable` entity instance. Pass `nil` for no initial data.

#### `OrganizationDependabotSecret(data map[string]any) GithubEntity`

Create a new `OrganizationDependabotSecret` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvitation(data map[string]any) GithubEntity`

Create a new `OrganizationInvitation` entity instance. Pass `nil` for no initial data.

#### `OrganizationProgrammaticAccessGrant(data map[string]any) GithubEntity`

Create a new `OrganizationProgrammaticAccessGrant` entity instance. Pass `nil` for no initial data.

#### `OrganizationRole(data map[string]any) GithubEntity`

Create a new `OrganizationRole` entity instance. Pass `nil` for no initial data.

#### `OrganizationSecretScanningAlert(data map[string]any) GithubEntity`

Create a new `OrganizationSecretScanningAlert` entity instance. Pass `nil` for no initial data.

#### `OutsideCollaborator(data map[string]any) GithubEntity`

Create a new `OutsideCollaborator` entity instance. Pass `nil` for no initial data.

#### `Package(data map[string]any) GithubEntity`

Create a new `Package` entity instance. Pass `nil` for no initial data.

#### `Page(data map[string]any) GithubEntity`

Create a new `Page` entity instance. Pass `nil` for no initial data.

#### `PageBuild(data map[string]any) GithubEntity`

Create a new `PageBuild` entity instance. Pass `nil` for no initial data.

#### `PageBuildStatus(data map[string]any) GithubEntity`

Create a new `PageBuildStatus` entity instance. Pass `nil` for no initial data.

#### `PageDeployment(data map[string]any) GithubEntity`

Create a new `PageDeployment` entity instance. Pass `nil` for no initial data.

#### `PagesDeploymentStatus(data map[string]any) GithubEntity`

Create a new `PagesDeploymentStatus` entity instance. Pass `nil` for no initial data.

#### `PagesHealthCheck(data map[string]any) GithubEntity`

Create a new `PagesHealthCheck` entity instance. Pass `nil` for no initial data.

#### `Participation(data map[string]any) GithubEntity`

Create a new `Participation` entity instance. Pass `nil` for no initial data.

#### `PendingDeployment(data map[string]any) GithubEntity`

Create a new `PendingDeployment` entity instance. Pass `nil` for no initial data.

#### `PorterAuthor(data map[string]any) GithubEntity`

Create a new `PorterAuthor` entity instance. Pass `nil` for no initial data.

#### `PorterLargeFile(data map[string]any) GithubEntity`

Create a new `PorterLargeFile` entity instance. Pass `nil` for no initial data.

#### `PrivateRegistry(data map[string]any) GithubEntity`

Create a new `PrivateRegistry` entity instance. Pass `nil` for no initial data.

#### `PrivateUser(data map[string]any) GithubEntity`

Create a new `PrivateUser` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) GithubEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectCollaboratorPermission(data map[string]any) GithubEntity`

Create a new `ProjectCollaboratorPermission` entity instance. Pass `nil` for no initial data.

#### `ProjectColumn(data map[string]any) GithubEntity`

Create a new `ProjectColumn` entity instance. Pass `nil` for no initial data.

#### `ProjectsClassic(data map[string]any) GithubEntity`

Create a new `ProjectsClassic` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2(data map[string]any) GithubEntity`

Create a new `ProjectsV2` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2Field(data map[string]any) GithubEntity`

Create a new `ProjectsV2Field` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2ItemSimple(data map[string]any) GithubEntity`

Create a new `ProjectsV2ItemSimple` entity instance. Pass `nil` for no initial data.

#### `ProjectsV2ItemWithContent(data map[string]any) GithubEntity`

Create a new `ProjectsV2ItemWithContent` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranch(data map[string]any) GithubEntity`

Create a new `ProtectedBranch` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranchAdminEnforced(data map[string]any) GithubEntity`

Create a new `ProtectedBranchAdminEnforced` entity instance. Pass `nil` for no initial data.

#### `ProtectedBranchPullRequestReview(data map[string]any) GithubEntity`

Create a new `ProtectedBranchPullRequestReview` entity instance. Pass `nil` for no initial data.

#### `PublicMember(data map[string]any) GithubEntity`

Create a new `PublicMember` entity instance. Pass `nil` for no initial data.

#### `Pull(data map[string]any) GithubEntity`

Create a new `Pull` entity instance. Pass `nil` for no initial data.

#### `PullRequestReview(data map[string]any) GithubEntity`

Create a new `PullRequestReview` entity instance. Pass `nil` for no initial data.

#### `PullRequestReviewComment(data map[string]any) GithubEntity`

Create a new `PullRequestReviewComment` entity instance. Pass `nil` for no initial data.

#### `PullRequestSimple(data map[string]any) GithubEntity`

Create a new `PullRequestSimple` entity instance. Pass `nil` for no initial data.

#### `RateLimit(data map[string]any) GithubEntity`

Create a new `RateLimit` entity instance. Pass `nil` for no initial data.

#### `Reaction(data map[string]any) GithubEntity`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Referrer(data map[string]any) GithubEntity`

Create a new `Referrer` entity instance. Pass `nil` for no initial data.

#### `Release(data map[string]any) GithubEntity`

Create a new `Release` entity instance. Pass `nil` for no initial data.

#### `ReleaseAsset(data map[string]any) GithubEntity`

Create a new `ReleaseAsset` entity instance. Pass `nil` for no initial data.

#### `ReleaseNotesContent(data map[string]any) GithubEntity`

Create a new `ReleaseNotesContent` entity instance. Pass `nil` for no initial data.

#### `Remove(data map[string]any) GithubEntity`

Create a new `Remove` entity instance. Pass `nil` for no initial data.

#### `Repo(data map[string]any) GithubEntity`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `Repository(data map[string]any) GithubEntity`

Create a new `Repository` entity instance. Pass `nil` for no initial data.

#### `RepositoryAdvisory(data map[string]any) GithubEntity`

Create a new `RepositoryAdvisory` entity instance. Pass `nil` for no initial data.

#### `RepositoryCollaboratorPermission(data map[string]any) GithubEntity`

Create a new `RepositoryCollaboratorPermission` entity instance. Pass `nil` for no initial data.

#### `RepositoryInvitation(data map[string]any) GithubEntity`

Create a new `RepositoryInvitation` entity instance. Pass `nil` for no initial data.

#### `RepositoryRuleDetailed(data map[string]any) GithubEntity`

Create a new `RepositoryRuleDetailed` entity instance. Pass `nil` for no initial data.

#### `RepositoryRuleset(data map[string]any) GithubEntity`

Create a new `RepositoryRuleset` entity instance. Pass `nil` for no initial data.

#### `RepositorySubscription(data map[string]any) GithubEntity`

Create a new `RepositorySubscription` entity instance. Pass `nil` for no initial data.

#### `ReviewComment(data map[string]any) GithubEntity`

Create a new `ReviewComment` entity instance. Pass `nil` for no initial data.

#### `RuleSuite(data map[string]any) GithubEntity`

Create a new `RuleSuite` entity instance. Pass `nil` for no initial data.

#### `RulesetVersion(data map[string]any) GithubEntity`

Create a new `RulesetVersion` entity instance. Pass `nil` for no initial data.

#### `RulesetVersionWithState(data map[string]any) GithubEntity`

Create a new `RulesetVersionWithState` entity instance. Pass `nil` for no initial data.

#### `Runner(data map[string]any) GithubEntity`

Create a new `Runner` entity instance. Pass `nil` for no initial data.

#### `RunnerApplication(data map[string]any) GithubEntity`

Create a new `RunnerApplication` entity instance. Pass `nil` for no initial data.

#### `RunnerGroup(data map[string]any) GithubEntity`

Create a new `RunnerGroup` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) GithubEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `SecretScanning(data map[string]any) GithubEntity`

Create a new `SecretScanning` entity instance. Pass `nil` for no initial data.

#### `SecretScanningAlert(data map[string]any) GithubEntity`

Create a new `SecretScanningAlert` entity instance. Pass `nil` for no initial data.

#### `SecretScanningLocation(data map[string]any) GithubEntity`

Create a new `SecretScanningLocation` entity instance. Pass `nil` for no initial data.

#### `SecretScanningPatternConfiguration(data map[string]any) GithubEntity`

Create a new `SecretScanningPatternConfiguration` entity instance. Pass `nil` for no initial data.

#### `SecretScanningPushProtectionBypass(data map[string]any) GithubEntity`

Create a new `SecretScanningPushProtectionBypass` entity instance. Pass `nil` for no initial data.

#### `SecretScanningScanHistory(data map[string]any) GithubEntity`

Create a new `SecretScanningScanHistory` entity instance. Pass `nil` for no initial data.

#### `SecurityAdvisory(data map[string]any) GithubEntity`

Create a new `SecurityAdvisory` entity instance. Pass `nil` for no initial data.

#### `SelectedAction(data map[string]any) GithubEntity`

Create a new `SelectedAction` entity instance. Pass `nil` for no initial data.

#### `SelfHostedRunner(data map[string]any) GithubEntity`

Create a new `SelfHostedRunner` entity instance. Pass `nil` for no initial data.

#### `ShortBlob(data map[string]any) GithubEntity`

Create a new `ShortBlob` entity instance. Pass `nil` for no initial data.

#### `ShortBranch(data map[string]any) GithubEntity`

Create a new `ShortBranch` entity instance. Pass `nil` for no initial data.

#### `SimpleClassroom(data map[string]any) GithubEntity`

Create a new `SimpleClassroom` entity instance. Pass `nil` for no initial data.

#### `SimpleClassroomAssignment(data map[string]any) GithubEntity`

Create a new `SimpleClassroomAssignment` entity instance. Pass `nil` for no initial data.

#### `SocialAccount(data map[string]any) GithubEntity`

Create a new `SocialAccount` entity instance. Pass `nil` for no initial data.

#### `SshSigningKey(data map[string]any) GithubEntity`

Create a new `SshSigningKey` entity instance. Pass `nil` for no initial data.

#### `Status(data map[string]any) GithubEntity`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `StatusCheckPolicy(data map[string]any) GithubEntity`

Create a new `StatusCheckPolicy` entity instance. Pass `nil` for no initial data.

#### `Subscriber(data map[string]any) GithubEntity`

Create a new `Subscriber` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) GithubEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `TagProtection(data map[string]any) GithubEntity`

Create a new `TagProtection` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) GithubEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TeamSimple(data map[string]any) GithubEntity`

Create a new `TeamSimple` entity instance. Pass `nil` for no initial data.

#### `Thread(data map[string]any) GithubEntity`

Create a new `Thread` entity instance. Pass `nil` for no initial data.

#### `ThreadSubscription(data map[string]any) GithubEntity`

Create a new `ThreadSubscription` entity instance. Pass `nil` for no initial data.

#### `Topic(data map[string]any) GithubEntity`

Create a new `Topic` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) GithubEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserMarketplacePurchase(data map[string]any) GithubEntity`

Create a new `UserMarketplacePurchase` entity instance. Pass `nil` for no initial data.

#### `View(data map[string]any) GithubEntity`

Create a new `View` entity instance. Pass `nil` for no initial data.

#### `WebhookConfig(data map[string]any) GithubEntity`

Create a new `WebhookConfig` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) GithubEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowRun(data map[string]any) GithubEntity`

Create a new `WorkflowRun` entity instance. Pass `nil` for no initial data.

#### `WorkflowRunUsage(data map[string]any) GithubEntity`

Create a new `WorkflowRunUsage` entity instance. Pass `nil` for no initial data.

#### `WorkflowUsage(data map[string]any) GithubEntity`

Create a new `WorkflowUsage` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActionEntity

```go
action := client.Action(nil)
fmt.Println(action.GetName()) // "action"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `int` | No | Total minutes used on macOS runner machines. |
| `UBUNTU` | `int` | No | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `int` | No | Total minutes used on Windows runner machines. |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `int` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `map[string]any` | Yes | A GitHub user. |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `bool` | Yes |  |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `string` | Yes |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | No | Whether the repository is archived. |
| `artifacts_url` | `string` | Yes | The URL to the artifacts for the workflow run. |
| `assignees_url` | `string` | Yes |  |
| `badge_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `busy` | `bool` | Yes |  |
| `can_approve_pull_request_reviews` | `bool` | No | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `string` | Yes | The URL to cancel the workflow run. |
| `check_run_url` | `string` | Yes |  |
| `check_suite_id` | `int` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | No | The node ID of the associated check suite. |
| `check_suite_url` | `string` | Yes | The URL to the associated check suite. |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `code_search_index_status` | `map[string]any` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | Yes | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `string` | Yes | The outcome of the job. |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpu_cores` | `int` | Yes | The number of cores. |
| `created_at` | `string` | Yes | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `days` | `int` | Yes | The number of days to retain artifacts and logs |
| `default` | `bool` | Yes |  |
| `default_branch` | `string` | No | The default branch of the repository. |
| `default_workflow_permissions` | `string` | No | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `string` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `digest` | `string` | No | The SHA256 digest of the artifact. |
| `disabled` | `bool` | No | Returns whether or not this repository disabled. |
| `display_name` | `string` | Yes | Display name for this image. |
| `display_title` | `string` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `string` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `bool` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `expired` | `bool` | Yes | Whether or not the artifact has expired. |
| `expires_at` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `github_owned_allowed` | `bool` | No | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | No | Whether issues are enabled. |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No | Whether projects are enabled. |
| `has_wiki` | `bool` | No | Whether the wiki is enabled. |
| `head_branch` | `string` | Yes | The name of the current branch. |
| `head_commit` | `map[string]any` | Yes | A commit. |
| `head_repository` | `map[string]any` | Yes | Minimal Repository |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the workflow run. |
| `image_details` | `map[string]any` | Yes | Provides details of a hosted runner image |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `inputs` | `map[string]any` | No | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `keys_url` | `string` | Yes |  |
| `labels` | `[]any` | Yes | The names of the custom labels to add to the runner. |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `map[string]any` | No | License Simple |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `machine_size_details` | `map[string]any` | Yes | Provides details of a particular machine spec. |
| `macos_12_core` | `int` | No | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `string` | No |  |
| `maximum_runners` | `int` | No | The maximum amount of hosted runners. |
| `memory_gb` | `int` | Yes | The available RAM for the machine spec. |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes | The name of the new runner. |
| `network_configuration_id` | `string` | No | The identifier of a hosted compute network configuration. |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `os` | `string` | Yes | The Operating System of the runner. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `path` | `string` | Yes | The full path of the workflow |
| `patterns_allowed` | `[]any` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `map[string]any` | No |  |
| `platform` | `string` | Yes | The operating system of the image. |
| `platforms` | `[]any` | Yes |  |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `[]any` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `[]any` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | Yes | The git reference for the workflow. |
| `referenced_workflows` | `[]any` | No |  |
| `releases_url` | `string` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `bool` | No | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `bool` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `string` | No |  |
| `run_attempt` | `int` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | Yes | The id of the associated workflow run. |
| `run_number` | `int` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `run_url` | `string` | Yes |  |
| `run_workflows_from_fork_pull_requests` | `bool` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `int` | Yes | The ID of the runner group to register the runner to. |
| `runner_group_name` | `string` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | Yes | The name of the runner to which this job has been assigned. |
| `runners` | `[]any` | Yes | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `[]any` | Yes | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `[]any` | No | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `bool` | No | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | No | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `size_gb` | `int` | Yes | Image size in GB. |
| `size_in_bytes` | `int` | Yes | The size in bytes of the artifact. |
| `source` | `string` | Yes | The image provider. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `started_at` | `string` | Yes | The time that the job started, in ISO 8601 format. |
| `state` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `string` | Yes |  |
| `steps` | `[]any` | No | Steps in this job. |
| `storage_gb` | `int` | Yes | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `total` | `int` | No | Total minutes used on all runner machines. |
| `total_count` | `int` | Yes |  |
| `trees_url` | `string` | Yes |  |
| `triggering_actor` | `map[string]any` | Yes | A GitHub user. |
| `type` | `string` | No | The type of label. |
| `ubuntu_16_core` | `int` | No | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `int` | No | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `int` | No | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `int` | No | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `int` | No | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `string` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | Yes | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `value` | `string` | No | The value of the variable. |
| `verified_allowed` | `bool` | No | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `string` | No | The type of repositories in the organization that can access the variable. |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `int` | No | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `int` | No | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `int` | No | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `int` | No | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `int` | No | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `string` | No | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `int` | Yes | The ID of the parent workflow. |
| `workflow_name` | `string` | Yes | The name of the workflow. |
| `workflow_restrictions_read_only` | `bool` | No | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Action(nil).Load(map[string]any{"archive_format": "archive_format", "artifact_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Action(nil).Update(map[string]any{
    "org_id": "org_id",
    "repository_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Action(nil).Remove(map[string]any{"hosted_runner_id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsArtifactAndLogRetentionEntity

```go
actionsArtifactAndLogRetention := client.ActionsArtifactAndLogRetention(nil)
fmt.Println(actionsArtifactAndLogRetention.GetName()) // "actions_artifact_and_log_retention"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `int` | Yes | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `int` | Yes | The maximum number of days that can be configured |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsArtifactAndLogRetention(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsArtifactAndLogRetentionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsCacheListEntity

```go
actionsCacheList := client.ActionsCacheList(nil)
fmt.Println(actionsCacheList.GetName()) // "actions_cache_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `last_accessed_at` | `string` | No |  |
| `ref` | `string` | No |  |
| `size_in_bytes` | `int` | No |  |
| `version` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActionsCacheList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ActionsCacheList(nil).Remove(map[string]any{"owner": "owner", "repo": "repo", "key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsCacheListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsCacheUsageByRepositoryEntity

```go
actionsCacheUsageByRepository := client.ActionsCacheUsageByRepository(nil)
fmt.Println(actionsCacheUsageByRepository.GetName()) // "actions_cache_usage_by_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_caches_count` | `int` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsCacheUsageByRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsCacheUsageByRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsCacheUsageOrgEnterpriseEntity

```go
actionsCacheUsageOrgEnterprise := client.ActionsCacheUsageOrgEnterprise(nil)
fmt.Println(actionsCacheUsageOrgEnterprise.GetName()) // "actions_cache_usage_org_enterprise"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_active_caches_count` | `int` | Yes | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `int` | Yes | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsCacheUsageOrgEnterprise(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsForkPrContributorApprovalEntity

```go
actionsForkPrContributorApproval := client.ActionsForkPrContributorApproval(nil)
fmt.Println(actionsForkPrContributorApproval.GetName()) // "actions_fork_pr_contributor_approval"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsForkPrContributorApproval(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsForkPrContributorApprovalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsForkPrWorkflowsPrivateRepoEntity

```go
actionsForkPrWorkflowsPrivateRepo := client.ActionsForkPrWorkflowsPrivateRepo(nil)
fmt.Println(actionsForkPrWorkflowsPrivateRepo.GetName()) // "actions_fork_pr_workflows_private_repo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `bool` | Yes | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `bool` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `bool` | Yes | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Yes | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsForkPrWorkflowsPrivateRepo(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsGetDefaultWorkflowPermissionEntity

```go
actionsGetDefaultWorkflowPermission := client.ActionsGetDefaultWorkflowPermission(nil)
fmt.Println(actionsGetDefaultWorkflowPermission.GetName()) // "actions_get_default_workflow_permission"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Yes | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | Yes | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsGetDefaultWorkflowPermission(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsHostedRunnerEntity

```go
actionsHostedRunner := client.ActionsHostedRunner(nil)
fmt.Println(actionsHostedRunner.GetName()) // "actions_hosted_runner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable_static_ip` | `bool` | No | Whether this runner should be created with a static public IP. |
| `id` | `int` | Yes | The unique identifier of the hosted runner. |
| `image` | `map[string]any` | Yes | The image of runner. |
| `image_details` | `map[string]any` | Yes | Provides details of a hosted runner image |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `map[string]any` | Yes | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | No | The maximum amount of hosted runners. |
| `name` | `string` | Yes | The name of the hosted runner. |
| `platform` | `string` | Yes | The operating system of the image. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `[]any` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `int` | No | The unique identifier of the group that the hosted runner belongs to. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsHostedRunner(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ActionsHostedRunner(nil).Update(map[string]any{
    "id": 1,
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsHostedRunnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsHostedRunnerLimitEntity

```go
actionsHostedRunnerLimit := client.ActionsHostedRunnerLimit(nil)
fmt.Println(actionsHostedRunnerLimit.GetName()) // "actions_hosted_runner_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_usage` | `int` | Yes | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `int` | Yes | The maximum number of static public IP addresses that can be used for Hosted Runners. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsHostedRunnerLimit(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsHostedRunnerLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsOrganizationPermissionEntity

```go
actionsOrganizationPermission := client.ActionsOrganizationPermission(nil)
fmt.Println(actionsOrganizationPermission.GetName()) // "actions_organization_permission"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `string` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `string` | No | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsOrganizationPermission(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsOrganizationPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsPublicKeyEntity

```go
actionsPublicKey := client.ActionsPublicKey(nil)
fmt.Println(actionsPublicKey.GetName()) // "actions_public_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsPublicKey(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsPublicKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsRepositoryPermissionEntity

```go
actionsRepositoryPermission := client.ActionsRepositoryPermission(nil)
fmt.Println(actionsRepositoryPermission.GetName()) // "actions_repository_permission"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Yes | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsRepositoryPermission(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsRepositoryPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsSecretEntity

```go
actionsSecret := client.ActionsSecret(nil)
fmt.Println(actionsSecret.GetName()) // "actions_secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsSecret(nil).Load(map[string]any{"id": "actions_secret_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsVariableEntity

```go
actionsVariable := client.ActionsVariable(nil)
fmt.Println(actionsVariable.GetName()) // "actions_variable"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsVariable(nil).Load(map[string]any{"id": "actions_variable_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsWorkflowAccessToRepositoryEntity

```go
actionsWorkflowAccessToRepository := client.ActionsWorkflowAccessToRepository(nil)
fmt.Println(actionsWorkflowAccessToRepository.GetName()) // "actions_workflow_access_to_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsWorkflowAccessToRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActivityEntity

```go
activity := client.Activity(nil)
fmt.Println(activity.GetName()) // "activity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_type` | `string` | Yes | The type of the activity that was performed. |
| `actor` | `map[string]any` | Yes | A GitHub user. |
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
| `fork` | `bool` | No |  |
| `forks_url` | `string` | No |  |
| `full_name` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `git_commits_url` | `string` | No |  |
| `git_refs_url` | `string` | No |  |
| `git_tags_url` | `string` | No |  |
| `git_url` | `string` | No |  |
| `github_id` | `int` | No |  |
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
| `language` | `map[string]any` | No |  |
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
| `owner` | `map[string]any` | No |  |
| `private` | `bool` | No |  |
| `pulls_url` | `string` | No |  |
| `read` | `bool` | No | Whether the notification has been read. |
| `received_events_url` | `string` | No |  |
| `ref` | `string` | Yes | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Activity(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Activity(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Activity(nil).Remove(map[string]any{"thread_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AddEntity

```go
add := client.Add(nil)
fmt.Println(add.GetName()) // "add"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `[]any` | Yes | The GitHub user handles to add to the team. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AddEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiInsightsRouteStatEntity

```go
apiInsightsRouteStat := client.ApiInsightsRouteStat(nil)
fmt.Println(apiInsightsRouteStat.GetName()) // "api_insights_route_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_route` | `string` | No | The API path's route template |
| `http_method` | `string` | No | The HTTP method |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `rate_limited_request_count` | `int` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | No | The total number of requests within the queried time period |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiInsightsRouteStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiInsightsRouteStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiInsightsSubjectStatEntity

```go
apiInsightsSubjectStat := client.ApiInsightsSubjectStat(nil)
fmt.Println(apiInsightsSubjectStat.GetName()) // "api_insights_subject_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `rate_limited_request_count` | `int` | No |  |
| `subject_id` | `int` | No |  |
| `subject_name` | `string` | No |  |
| `subject_type` | `string` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiInsightsSubjectStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiInsightsSubjectStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiInsightsSummaryStatEntity

```go
apiInsightsSummaryStat := client.ApiInsightsSummaryStat(nil)
fmt.Println(apiInsightsSummaryStat.GetName()) // "api_insights_summary_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `rate_limited_request_count` | `int` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | No | The total number of requests within the queried time period |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiInsightsSummaryStat(nil).Load(map[string]any{"min_timestamp": "min_timestamp"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiInsightsSummaryStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiInsightsTimeStatEntity

```go
apiInsightsTimeStat := client.ApiInsightsTimeStat(nil)
fmt.Println(apiInsightsTimeStat.GetName()) // "api_insights_time_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate_limited_request_count` | `int` | No |  |
| `timestamp` | `string` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiInsightsTimeStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiInsightsTimeStat(nil).Load(map[string]any{"org_id": "org_id", "user_id": "user_id", "min_timestamp": "min_timestamp", "timestamp_increment": "timestamp_increment"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiInsightsTimeStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiInsightsUserStatEntity

```go
apiInsightsUserStat := client.ApiInsightsUserStat(nil)
fmt.Println(apiInsightsUserStat.GetName()) // "api_insights_user_stat"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `int` | No |  |
| `actor_name` | `string` | No |  |
| `actor_type` | `string` | No |  |
| `id` | `string` | No |  |
| `integration_id` | `int` | No |  |
| `last_rate_limited_timestamp` | `string` | No |  |
| `last_request_timestamp` | `string` | No |  |
| `oauth_application_id` | `int` | No |  |
| `rate_limited_request_count` | `int` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiInsightsUserStat(nil).Load(map[string]any{"id": "api_insights_user_stat_id", "org_id": "org_id", "min_timestamp": "min_timestamp"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiInsightsUserStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiOverviewEntity

```go
apiOverview := client.ApiOverview(nil)
fmt.Println(apiOverview.GetName()) // "api_overview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | No |  |
| `actions_macos` | `[]any` | No |  |
| `api` | `[]any` | No |  |
| `codespaces` | `[]any` | No |  |
| `copilot` | `[]any` | No |  |
| `dependabot` | `[]any` | No |  |
| `domains` | `map[string]any` | No |  |
| `git` | `[]any` | No |  |
| `github_enterprise_importer` | `[]any` | No |  |
| `hooks` | `[]any` | No |  |
| `importer` | `[]any` | No |  |
| `packages` | `[]any` | No |  |
| `pages` | `[]any` | No |  |
| `ssh_key_fingerprints` | `map[string]any` | No |  |
| `ssh_keys` | `[]any` | No |  |
| `verifiable_password_authentication` | `bool` | Yes |  |
| `web` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiOverview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiOverviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AppEntity

```go
app := client.App(nil)
fmt.Println(app.GetName()) // "app"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `app_id` | `int` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `client_id` | `string` | No |  |
| `client_secret` | `string` | No |  |
| `clone_url` | `string` | Yes |  |
| `code_search_index_status` | `map[string]any` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contact_email` | `string` | No |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | No |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events` | `[]any` | No |  |
| `events_url` | `string` | Yes |  |
| `external_url` | `string` | No |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_multiple_single_files` | `bool` | No |  |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No |  |
| `id` | `int` | No | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | No | The name of the repository. |
| `node_id` | `string` | No |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `owner` | `map[string]any` | No | A GitHub user. |
| `pem` | `string` | No |  |
| `permissions` | `map[string]any` | No | The permissions granted to the user access token. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `[]any` | No |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `slug` | `string` | No |  |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `map[string]any` | Yes | A GitHub user. |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.App(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.App(nil).Update(map[string]any{
    "installation_id": 1,
    "repository_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.App(nil).Remove(map[string]any{"installation_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AppEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ArtifactEntity

```go
artifact := client.Artifact(nil)
fmt.Println(artifact.GetName()) // "artifact"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `head_branch` | `string` | No |  |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `string` | No |  |
| `id` | `int` | No |  |
| `repository_id` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Artifact(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssigneeEntity

```go
assignee := client.Assignee(nil)
fmt.Println(assignee.GetName()) // "assignee"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Assignee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssigneeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthenticationTokenEntity

```go
authenticationToken := client.AuthenticationToken(nil)
fmt.Println(authenticationToken.GetName()) // "authentication_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `token` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AuthenticationToken(nil).Create(map[string]any{
    "org_id": "example_org_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthenticationTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthorizationEntity

```go
authorization := client.Authorization(nil)
fmt.Println(authorization.GetName()) // "authorization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes | The access_token of the OAuth or GitHub application. |
| `app` | `map[string]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `fingerprint` | `string` | Yes |  |
| `hashed_token` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `installation` | `map[string]any` | Yes |  |
| `note` | `string` | Yes |  |
| `note_url` | `string` | Yes |  |
| `permissions` | `map[string]any` | No | The permissions granted to the user access token. |
| `repositories` | `[]any` | No | The list of repository names to scope the user access token to. |
| `repository_ids` | `[]any` | No | The list of repository IDs to scope the user access token to. |
| `scopes` | `[]any` | Yes | A list of scopes that this authorization is in. |
| `target` | `string` | No | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | No | The ID of the user or organization to scope the user access token to. |
| `token` | `string` | Yes |  |
| `token_last_eight` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Authorization(nil).Update(map[string]any{
    "application_id": "application_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutolinkEntity

```go
autolink := client.Autolink(nil)
fmt.Println(autolink.GetName()) // "autolink"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes |  |
| `is_alphanumeric` | `bool` | Yes | Whether this autolink reference matches alphanumeric characters. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Autolink(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Autolink(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutolinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BaseGistEntity

```go
baseGist := client.BaseGist(nil)
fmt.Println(baseGist.GetName()) // "base_gist"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `files` | `map[string]any` | No |  |
| `forks` | `[]any` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `[]any` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `map[string]any` | No | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BaseGist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BaseGist(nil).Create(map[string]any{
    "gist_id": "example_gist_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BaseGistEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingUsageReportEntity

```go
billingUsageReport := client.BillingUsageReport(nil)
fmt.Println(billingUsageReport.GetName()) // "billing_usage_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `float64` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float64` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float64` | Yes | Net amount of the usage line item. |
| `organizationName` | `string` | Yes | Name of the organization. |
| `pricePerUnit` | `float64` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillingUsageReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingUsageReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingUsageReportUserEntity

```go
billingUsageReportUser := client.BillingUsageReportUser(nil)
fmt.Println(billingUsageReportUser.GetName()) // "billing_usage_report_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `float64` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float64` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float64` | Yes | Net amount of the usage line item. |
| `pricePerUnit` | `float64` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillingUsageReportUser(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingUsageReportUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BlobEntity

```go
blob := client.Blob(nil)
fmt.Println(blob.GetName()) // "blob"
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
| `size` | `int` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Blob(nil).Load(map[string]any{"id": "blob_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BlobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BlockEntity

```go
block := client.Block(nil)
fmt.Println(block.GetName()) // "block"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Block(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BlockEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchEntity

```go
branch := client.Branch(nil)
fmt.Println(branch.GetName()) // "branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | Yes | Commit |
| `id` | `string` | No |  |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `protected` | `bool` | Yes |  |
| `protection` | `map[string]any` | Yes | Branch Protection |
| `protection_url` | `string` | Yes |  |
| `required_approving_review_count` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Branch(nil).Load(map[string]any{"id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchProtectionEntity

```go
branchProtection := client.BranchProtection(nil)
fmt.Println(branchProtection.GetName()) // "branch_protection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `map[string]any` | No |  |
| `allow_force_pushes` | `map[string]any` | No |  |
| `allow_fork_syncing` | `map[string]any` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `map[string]any` | No |  |
| `enabled` | `bool` | No |  |
| `enforce_admins` | `map[string]any` | Yes | Protected Branch Admin Enforced |
| `id` | `string` | No |  |
| `lock_branch` | `map[string]any` | No | Whether to set the branch as read-only. |
| `name` | `string` | No |  |
| `protection_url` | `string` | No |  |
| `required_conversation_resolution` | `map[string]any` | No |  |
| `required_linear_history` | `map[string]any` | No |  |
| `required_pull_request_reviews` | `map[string]any` | Yes | Protected Branch Pull Request Review |
| `required_signatures` | `map[string]any` | Yes |  |
| `required_status_checks` | `map[string]any` | Yes | Protected Branch Required Status Check |
| `restrictions` | `map[string]any` | Yes | Branch Restriction Policy |
| `url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BranchProtection(nil).Load(map[string]any{"id": "branch_protection_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchProtectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchRestrictionPolicyEntity

```go
branchRestrictionPolicy := client.BranchRestrictionPolicy(nil)
fmt.Println(branchRestrictionPolicy.GetName()) // "branch_restriction_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `[]any` | Yes |  |
| `apps_url` | `string` | Yes |  |
| `teams` | `[]any` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `users` | `[]any` | Yes |  |
| `users_url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BranchRestrictionPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchRestrictionPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchShortEntity

```go
branchShort := client.BranchShort(nil)
fmt.Println(branchShort.GetName()) // "branch_short"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BranchShort(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchShortEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchWithProtectionEntity

```go
branchWithProtection := client.BranchWithProtection(nil)
fmt.Println(branchWithProtection.GetName()) // "branch_with_protection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `new_name` | `string` | Yes | The new name of the branch. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchWithProtectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CampaignEntity

```go
campaign := client.Campaign(nil)
fmt.Println(campaign.GetName()) // "campaign"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_stats` | `map[string]any` | Yes |  |
| `closed_at` | `string` | No | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `[]any` | Yes | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | Yes | The contact link of the campaign. |
| `created_at` | `string` | Yes | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | Yes | The campaign description |
| `ends_at` | `string` | Yes | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | No | If true, will automatically generate issues for the campaign. |
| `id` | `string` | No |  |
| `managers` | `[]any` | Yes | The campaign managers |
| `name` | `string` | No | The campaign name |
| `number` | `int` | Yes | The number of the newly created campaign |
| `published_at` | `string` | No | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Yes | Indicates whether a campaign is open or closed |
| `team_managers` | `[]any` | No | The campaign team managers |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Campaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Campaign(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Campaign(nil).Update(map[string]any{
    "id": 1,
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Campaign(nil).Remove(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckEntity

```go
check := client.Check(nil)
fmt.Println(check.GetName()) // "check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `check_suite` | `map[string]any` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deployment` | `map[string]any` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `map[string]any` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `latest_check_runs_count` | `int` | Yes |  |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `map[string]any` | Yes |  |
| `pull_requests` | `[]any` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Check(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckAnnotationEntity

```go
checkAnnotation := client.CheckAnnotation(nil)
fmt.Println(checkAnnotation.GetName()) // "check_annotation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation_level` | `string` | Yes |  |
| `blob_href` | `string` | Yes |  |
| `end_column` | `int` | Yes |  |
| `end_line` | `int` | Yes |  |
| `message` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `raw_details` | `string` | Yes |  |
| `start_column` | `int` | Yes |  |
| `start_line` | `int` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CheckAnnotation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckAnnotationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckAutomatedSecurityFixEntity

```go
checkAutomatedSecurityFix := client.CheckAutomatedSecurityFix(nil)
fmt.Println(checkAutomatedSecurityFix.GetName()) // "check_automated_security_fix"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `bool` | Yes | Whether Dependabot security updates are paused for the repository. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CheckAutomatedSecurityFix(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckAutomatedSecurityFixEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckRunEntity

```go
checkRun := client.CheckRun(nil)
fmt.Println(checkRun.GetName()) // "check_run"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | No | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `map[string]any` | Yes |  |
| `completed_at` | `string` | Yes | The time the check completed. |
| `conclusion` | `string` | Yes | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `map[string]any` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | Yes | A reference for the run on the integrator's system. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `map[string]any` | Yes | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `[]any` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CheckRun(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CheckRun(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckRunEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckSuiteEntity

```go
checkSuite := client.CheckSuite(nil)
fmt.Println(checkSuite.GetName()) // "check_suite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `map[string]any` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the head commit that is being checked. |
| `id` | `int` | Yes |  |
| `latest_check_runs_count` | `int` | Yes |  |
| `node_id` | `string` | Yes |  |
| `pull_requests` | `[]any` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CheckSuite(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckSuiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckSuitePreferenceEntity

```go
checkSuitePreference := client.CheckSuitePreference(nil)
fmt.Println(checkSuitePreference.GetName()) // "check_suite_preference"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_trigger_checks` | `[]any` | No | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `map[string]any` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CheckSuitePreference(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckSuitePreferenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClassroomEntity

```go
classroom := client.Classroom(nil)
fmt.Println(classroom.GetName()) // "classroom"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Returns whether classroom is archived or not. |
| `avatar_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the classroom. |
| `login` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the classroom. |
| `node_id` | `string` | Yes |  |
| `url` | `string` | Yes | The url of the classroom on GitHub Classroom. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Classroom(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Classroom(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClassroomEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClassroomAcceptedAssignmentEntity

```go
classroomAcceptedAssignment := client.ClassroomAcceptedAssignment(nil)
fmt.Println(classroomAcceptedAssignment.GetName()) // "classroom_accepted_assignment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `map[string]any` | Yes | A GitHub Classroom assignment |
| `commit_count` | `int` | Yes | Count of student commits. |
| `grade` | `string` | Yes | Most recent grade. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `passing` | `bool` | Yes | Whether a submission passed. |
| `repository` | `map[string]any` | Yes | A GitHub repository view for Classroom |
| `students` | `[]any` | Yes |  |
| `submitted` | `bool` | Yes | Whether an accepted assignment has been submitted. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ClassroomAcceptedAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClassroomAcceptedAssignmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClassroomAssignmentEntity

```go
classroomAssignment := client.ClassroomAssignment(nil)
fmt.Println(classroomAssignment.GetName()) // "classroom_assignment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `map[string]any` | Yes | A GitHub Classroom classroom |
| `deadline` | `string` | Yes | The time at which the assignment is due. |
| `editor` | `string` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Yes | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `string` | Yes | The link that a student can use to accept the assignment. |
| `language` | `string` | Yes | The programming language used in the assignment. |
| `max_members` | `int` | Yes | The maximum allowable members per team. |
| `max_teams` | `int` | Yes | The maximum allowable teams for the assignment. |
| `passing` | `int` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Yes | Sluggified name of the assignment. |
| `starter_code_repository` | `map[string]any` | Yes | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Yes | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a group assignment or individual assignment. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ClassroomAssignment(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClassroomAssignmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClassroomAssignmentGradeEntity

```go
classroomAssignmentGrade := client.ClassroomAssignmentGrade(nil)
fmt.Println(classroomAssignmentGrade.GetName()) // "classroom_assignment_grade"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_name` | `string` | Yes | Name of the assignment |
| `assignment_url` | `string` | Yes | URL of the assignment |
| `github_username` | `string` | Yes | GitHub username of the student |
| `group_name` | `string` | No | If a group assignment, name of the group the student is in |
| `points_available` | `int` | Yes | Number of points available for the assignment |
| `points_awarded` | `int` | Yes | Number of points awarded to the student |
| `roster_identifier` | `string` | Yes | Roster identifier of the student |
| `starter_code_url` | `string` | Yes | URL of the starter code for the assignment |
| `student_repository_name` | `string` | Yes | Name of the student's assignment repository |
| `student_repository_url` | `string` | Yes | URL of the student's assignment repository |
| `submission_timestamp` | `string` | Yes | Timestamp of the student's assignment submission |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ClassroomAssignmentGrade(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClassroomAssignmentGradeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CloneEntity

```go
clone := client.Clone(nil)
fmt.Println(clone.GetName()) // "clone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Clone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeFrequencyEntity

```go
codeFrequency := client.CodeFrequency(nil)
fmt.Println(codeFrequency.GetName()) // "code_frequency"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeFrequency(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeFrequencyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeFrequencyStatEntity

```go
codeFrequencyStat := client.CodeFrequencyStat(nil)
fmt.Println(codeFrequencyStat.GetName()) // "code_frequency_stat"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeFrequencyStat(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeFrequencyStatEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeOfConductEntity

```go
codeOfConduct := client.CodeOfConduct(nil)
fmt.Println(codeOfConduct.GetName()) // "code_of_conduct"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeOfConduct(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeOfConduct(nil).Load(map[string]any{"key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeOfConductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningEntity

```go
codeScanning := client.CodeScanning(nil)
fmt.Println(codeScanning.GetName()) // "code_scanning"
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
| `validate` | `bool` | No | Whether the SARIF file will be validated according to the code scanning specifications. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CodeScanning(nil).Remove(map[string]any{"language": "language", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAlertEntity

```go
codeScanningAlert := client.CodeScanningAlert(nil)
fmt.Println(codeScanningAlert.GetName()) // "code_scanning_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_request` | `bool` | No | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `map[string]any` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `map[string]any` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CodeScanningAlert(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAlertInstanceEntity

```go
codeScanningAlertInstance := client.CodeScanningAlertInstance(nil)
fmt.Println(codeScanningAlertInstance.GetName()) // "code_scanning_alert_instance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `classifications` | `[]any` | No | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` | No |  |
| `environment` | `string` | No | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` | No |  |
| `location` | `map[string]any` | No | Describe a region within a file for the alert. |
| `message` | `map[string]any` | No |  |
| `ref` | `string` | No | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | No | State of a code scanning alert. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningAlertInstance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAlertInstanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAlertItemEntity

```go
codeScanningAlertItem := client.CodeScanningAlertItem(nil)
fmt.Println(codeScanningAlertItem.GetName()) // "code_scanning_alert_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `map[string]any` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `map[string]any` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningAlertItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAlertItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAnalysiEntity

```go
codeScanningAnalysi := client.CodeScanningAnalysi(nil)
fmt.Println(codeScanningAnalysi.GetName()) // "code_scanning_analysi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | Yes | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | `string` | Yes | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | `string` | Yes | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` | `bool` | Yes |  |
| `environment` | `string` | Yes | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `string` | Yes |  |
| `guid` | `string` | No | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `int` | Yes | Unique identifier for this analysis. |
| `name` | `string` | No | The name of the tool used to generate the code scanning analysis. |
| `ref` | `string` | Yes | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `int` | Yes | The total number of results in the analysis. |
| `rules_count` | `int` | Yes | The total number of rules used in the analysis. |
| `sarif_id` | `string` | Yes | An identifier for the upload. |
| `tool` | `map[string]any` | Yes |  |
| `url` | `string` | Yes | The REST API URL of the analysis resource. |
| `version` | `string` | No | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Yes | Warning generated when processing the analysis |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningAnalysi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningAnalysi(nil).Load(map[string]any{"analysis_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAnalysiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAnalysisDeletionEntity

```go
codeScanningAnalysisDeletion := client.CodeScanningAnalysisDeletion(nil)
fmt.Println(codeScanningAnalysisDeletion.GetName()) // "code_scanning_analysis_deletion"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CodeScanningAnalysisDeletion(nil).Remove(map[string]any{"analysis_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAnalysisDeletionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAutofixEntity

```go
codeScanningAutofix := client.CodeScanningAutofix(nil)
fmt.Println(codeScanningAutofix.GetName()) // "code_scanning_autofix"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | The description of an autofix. |
| `started_at` | `string` | Yes | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | Yes | The status of an autofix. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningAutofix(nil).Load(map[string]any{"alert_number": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAutofixEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningAutofixCommitEntity

```go
codeScanningAutofixCommit := client.CodeScanningAutofixCommit(nil)
fmt.Println(codeScanningAutofixCommit.GetName()) // "code_scanning_autofix_commit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | Commit message to be used. |
| `target_ref` | `string` | No | The Git reference of target branch for the commit. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningAutofixCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningCodeqlDatabaseEntity

```go
codeScanningCodeqlDatabase := client.CodeScanningCodeqlDatabase(nil)
fmt.Println(codeScanningCodeqlDatabase.GetName()) // "code_scanning_codeql_database"
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
| `id` | `int` | Yes | The ID of the CodeQL database. |
| `language` | `string` | Yes | The language of the CodeQL database. |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The name of the CodeQL database. |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes | The size of the CodeQL database file in bytes. |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `map[string]any` | Yes | A GitHub user. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningCodeqlDatabase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningCodeqlDatabase(nil).Load(map[string]any{"language": "language", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningCodeqlDatabaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningDefaultSetupEntity

```go
codeScanningDefaultSetup := client.CodeScanningDefaultSetup(nil)
fmt.Println(codeScanningDefaultSetup.GetName()) // "code_scanning_default_setup"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `languages` | `[]any` | No | Languages to be analyzed. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `schedule` | `string` | No | The frequency of the periodic analysis. |
| `state` | `string` | No | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | No | Timestamp of latest configuration update. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningDefaultSetup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningDefaultSetupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningOrganizationAlertItemEntity

```go
codeScanningOrganizationAlertItem := client.CodeScanningOrganizationAlertItem(nil)
fmt.Println(codeScanningOrganizationAlertItem.GetName()) // "code_scanning_organization_alert_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `map[string]any` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `map[string]any` | Yes | A GitHub repository. |
| `rule` | `map[string]any` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `map[string]any` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeScanningOrganizationAlertItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningOrganizationAlertItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningSarifsStatusEntity

```go
codeScanningSarifsStatus := client.CodeScanningSarifsStatus(nil)
fmt.Println(codeScanningSarifsStatus.GetName()) // "code_scanning_sarifs_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analyses_url` | `string` | No | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `[]any` | No | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | No | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningSarifsStatus(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "sarif_id": "sarif_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningSarifsStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningVariantAnalysiEntity

```go
codeScanningVariantAnalysi := client.CodeScanningVariantAnalysi(nil)
fmt.Println(codeScanningVariantAnalysi.GetName()) // "code_scanning_variant_analysi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions_workflow_run_id` | `int` | No | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `map[string]any` | Yes | A GitHub user. |
| `completed_at` | `string` | No | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `map[string]any` | Yes | A GitHub repository. |
| `created_at` | `string` | No | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | No | The reason for a failure of the variant analysis. |
| `id` | `int` | Yes | The ID of the variant analysis. |
| `language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_pack` | `string` | Yes | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | Yes | The download url for the query pack. |
| `repositories` | `[]any` | No | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `[]any` | No | List of repository lists to run the query against. |
| `repository_owners` | `[]any` | No | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `[]any` | No |  |
| `skipped_repositories` | `map[string]any` | Yes | Information about repositories that were skipped from processing. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | No | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningVariantAnalysi(nil).Load(map[string]any{"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningVariantAnalysiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeScanningVariantAnalysisRepoTaskEntity

```go
codeScanningVariantAnalysisRepoTask := client.CodeScanningVariantAnalysisRepoTask(nil)
fmt.Println(codeScanningVariantAnalysisRepoTask.GetName()) // "code_scanning_variant_analysis_repo_task"
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
| `fork` | `bool` | Yes | Whether the repository is a fork. |
| `forks_url` | `string` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `string` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `int` | Yes | A unique identifier of the repository. |
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
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `private` | `bool` | Yes | Whether the repository is private. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeScanningVariantAnalysisRepoTask(nil).Load(map[string]any{"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo", "repo_name": "repo_name", "repo_owner": "repo_owner"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeSecurityEntity

```go
codeSecurity := client.CodeSecurity(nil)
fmt.Println(codeSecurity.GetName()) // "code_security"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `map[string]any` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `map[string]any` | No | Feature options for code scanning |
| `created_at` | `string` | No |  |
| `default_for_new_repos` | `string` | No | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `map[string]any` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `int` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `map[string]any` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `target_type` | `string` | No | The type of the code security configuration. |
| `updated_at` | `string` | No |  |
| `url` | `string` | No | The URL of the configuration |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CodeSecurity(nil).Update(map[string]any{
    "configuration_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CodeSecurity(nil).Remove(map[string]any{"configuration_id": 1, "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeSecurityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeSecurityConfigurationEntity

```go
codeSecurityConfiguration := client.CodeSecurityConfiguration(nil)
fmt.Println(codeSecurityConfiguration.GetName()) // "code_security_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `map[string]any` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `map[string]any` | No | Feature options for code scanning |
| `code_security` | `string` | No | The enablement status of GitHub Code Security features. |
| `created_at` | `string` | No |  |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `map[string]any` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `int` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `scope` | `string` | Yes | The type of repositories to attach the configuration to. |
| `secret_protection` | `string` | No | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `map[string]any` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `[]any` | No | An array of repository IDs to attach the configuration to. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeSecurityConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CodeSecurityConfiguration(nil).Load(map[string]any{"id": 1, "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CodeSecurityConfiguration(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeSecurityConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeSecurityConfigurationRepositoryEntity

```go
codeSecurityConfigurationRepository := client.CodeSecurityConfigurationRepository(nil)
fmt.Println(codeSecurityConfigurationRepository.GetName()) // "code_security_configuration_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `repository` | `map[string]any` | Yes | A GitHub repository. |
| `status` | `string` | No | The attachment status of the code security configuration on the repository. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeSecurityConfigurationRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeSecurityDefaultConfigurationEntity

```go
codeSecurityDefaultConfiguration := client.CodeSecurityDefaultConfiguration(nil)
fmt.Println(codeSecurityDefaultConfiguration.GetName()) // "code_security_default_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | No | A code security configuration |
| `default_for_new_repos` | `any` | No | The visibility of newly created repositories for which the code security configuration will be applied to by default |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeSecurityDefaultConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeSecurityDefaultConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodeownersErrorEntity

```go
codeownersError := client.CodeownersError(nil)
fmt.Println(codeownersError.GetName()) // "codeowners_error"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column` | `int` | Yes | The column number where this errors occurs. |
| `kind` | `string` | Yes | The type of error. |
| `line` | `int` | Yes | The line number where this errors occurs. |
| `message` | `string` | Yes | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `string` | Yes | The path of the file where the error occured. |
| `source` | `string` | No | The contents of the line where the error occurs. |
| `suggestion` | `string` | No | Suggested action to fix the error. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CodeownersError(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodeownersErrorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CodespaceEntity

```go
codespace := client.Codespace(nil)
fmt.Println(codespace.GetName()) // "codespace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `bool` | Yes | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `string` | Yes |  |
| `billable_owner` | `map[string]any` | Yes | A GitHub user. |
| `blobs_url` | `string` | Yes |  |
| `branch` | `string` | No | Name of the exported branch |
| `branches_url` | `string` | Yes |  |
| `client_ip` | `string` | No | IP for location auto-detection when proxying a request |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | No | Completion time of the last export operation |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpus` | `int` | Yes | How many cores are available to the codespace. |
| `created_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `defaults` | `map[string]any` | Yes |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `devcontainer_path` | `string` | No | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `bool` | No |  |
| `display_name` | `string` | No | Display name for this codespace. |
| `downloads_url` | `string` | Yes |  |
| `encrypted_value` | `string` | No | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `string` | Yes | UUID identifying this codespace's environment. |
| `events_url` | `string` | Yes |  |
| `export_url` | `string` | No | Url for fetching export details |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `geo` | `string` | No | The geographic area for this codespace. |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_status` | `map[string]any` | Yes | Details about the codespace's git repository. |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No | Web url for the exported branch |
| `id` | `string` | No | Id for the export details |
| `idle_timeout_minutes` | `int` | Yes | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `string` | No | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `bool` | No |  |
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
| `license` | `map[string]any` | No |  |
| `location` | `string` | Yes | The initally assigned location of a new codespace. |
| `machine` | `map[string]any` | Yes | A description of the machine powering a codespace. |
| `machines_url` | `string` | Yes | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `int` | Yes | How much memory is available to the codespace. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `multi_repo_permissions_opt_out` | `bool` | No | Whether to authorize requested permissions from devcontainer.json |
| `name` | `string` | Yes | The name of the secret. |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `operating_system` | `string` | Yes | The operating system of the machine. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `path` | `string` | Yes |  |
| `pending_operation` | `bool` | No | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | No | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `map[string]any` | No |  |
| `prebuild` | `bool` | Yes | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Yes | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | No | Whether the new repository should be private. |
| `publish_url` | `string` | No | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | Yes | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` | No |  |
| `recent_folders` | `[]any` | Yes | Recently opened folders inside the codespace. |
| `ref` | `string` | No | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `retention_expires_at` | `string` | No | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | No | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` | No |  |
| `runtime_constraints` | `map[string]any` | No |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `selected_repositories_url` | `string` | No | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `[]any` | No | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `[]any` | Yes | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `string` | No | Git commit SHA of the exported branch |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `start_url` | `string` | Yes | API URL to start this codespace. |
| `state` | `string` | No | State of the latest export |
| `statuses_url` | `string` | Yes |  |
| `stop_url` | `string` | Yes | API URL to stop this codespace. |
| `storage_in_bytes` | `int` | Yes | How much storage is available to the codespace. |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template` | `string` | No |  |
| `title` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `string` | No | API URL for this codespace. |
| `visibility` | `string` | Yes | The type of repositories in the organization that the secret is visible to |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Codespace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Codespace(nil).Load(map[string]any{"id": "codespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Codespace(nil).Update(map[string]any{
    "id": "codespace_id",
    "secret_name": "secret_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Codespace(nil).Remove(map[string]any{"id": "codespace_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CodespaceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollaboratorEntity

```go
collaborator := client.Collaborator(nil)
fmt.Println(collaborator.GetName()) // "collaborator"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `permissions` | `map[string]any` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `role_name` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Collaborator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollaboratorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CombinedBillingUsageEntity

```go
combinedBillingUsage := client.CombinedBillingUsage(nil)
fmt.Println(combinedBillingUsage.GetName()) // "combined_billing_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_left_in_billing_cycle` | `int` | Yes | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `int` | Yes | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `int` | Yes | Estimated sum of free and paid storage space (GB) used in billing cycle. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CombinedBillingUsage(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CombinedBillingUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CombinedCommitStatusEntity

```go
combinedCommitStatus := client.CombinedCommitStatus(nil)
fmt.Println(combinedCommitStatus.GetName()) // "combined_commit_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `node_id` | `string` | Yes |  |
| `required` | `bool` | No |  |
| `state` | `string` | Yes |  |
| `target_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CombinedCommitStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CombinedCommitStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommitEntity

```go
commit := client.Commit(nil)
fmt.Println(commit.GetName()) // "commit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes |  |
| `base` | `string` | Yes | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` | Yes |  |
| `commit` | `map[string]any` | Yes |  |
| `commit_message` | `string` | No | Commit message to use for the merge commit. |
| `committer` | `any` | Yes |  |
| `files` | `[]any` | No |  |
| `head` | `string` | Yes | The head to merge. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `parents` | `[]any` | Yes |  |
| `sha` | `string` | Yes |  |
| `stats` | `map[string]any` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Commit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Commit(nil).Load(map[string]any{"id": "commit_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommitActivityEntity

```go
commitActivity := client.CommitActivity(nil)
fmt.Println(commitActivity.GetName()) // "commit_activity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `[]any` | Yes |  |
| `total` | `int` | Yes |  |
| `week` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CommitActivity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommitActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommitCommentEntity

```go
commitComment := client.CommitComment(nil)
fmt.Println(commitComment.GetName()) // "commit_comment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The contents of the comment. |
| `commit_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `line` | `int` | Yes | **Closing down notice**. |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes | Relative path of the file to comment on. |
| `position` | `int` | Yes | Line index in the diff to comment on. |
| `reactions` | `map[string]any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CommitComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CommitComment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CommitComment(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommitCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommitComparisonEntity

```go
commitComparison := client.CommitComparison(nil)
fmt.Println(commitComparison.GetName()) // "commit_comparison"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ahead_by` | `int` | Yes |  |
| `base_commit` | `map[string]any` | Yes | Commit |
| `behind_by` | `int` | Yes |  |
| `commits` | `[]any` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `files` | `[]any` | No |  |
| `html_url` | `string` | Yes |  |
| `merge_base_commit` | `map[string]any` | Yes | Commit |
| `patch_url` | `string` | Yes |  |
| `permalink_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `total_commits` | `int` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CommitComparison(nil).Load(map[string]any{"basehead": "basehead", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommitComparisonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CommunityProfileEntity

```go
communityProfile := client.CommunityProfile(nil)
fmt.Println(communityProfile.GetName()) // "community_profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code_of_conduct` | `map[string]any` | Yes | Code of Conduct Simple |
| `code_of_conduct_file` | `map[string]any` | Yes |  |
| `contributing` | `map[string]any` | Yes |  |
| `issue_template` | `map[string]any` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `pull_request_template` | `map[string]any` | Yes |  |
| `readme` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CommunityProfile(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommunityProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentFileEntity

```go
contentFile := client.ContentFile(nil)
fmt.Println(contentFile.GetName()) // "content_file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `git` | `string` | Yes |  |
| `html` | `string` | Yes |  |
| `self` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContentFile(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentTrafficEntity

```go
contentTraffic := client.ContentTraffic(nil)
fmt.Println(contentTraffic.GetName()) // "content_traffic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `path` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContentTraffic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentTrafficEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContributorEntity

```go
contributor := client.Contributor(nil)
fmt.Println(contributor.GetName()) // "contributor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | Yes | A GitHub user. |
| `avatar_url` | `string` | No |  |
| `contributions` | `int` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | No |  |
| `followers_url` | `string` | No |  |
| `following_url` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `gravatar_id` | `string` | No |  |
| `html_url` | `string` | No |  |
| `id` | `int` | No |  |
| `login` | `string` | No |  |
| `name` | `string` | No |  |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `received_events_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `bool` | No |  |
| `starred_url` | `string` | No |  |
| `subscriptions_url` | `string` | No |  |
| `total` | `int` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `weeks` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Contributor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContributorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CopilotEntity

```go
copilot := client.Copilot(nil)
fmt.Println(copilot.GetName()) // "copilot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | Yes | A GitHub user. |
| `assigning_team` | `any` | No | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Yes | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | No | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | No | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | No | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `map[string]any` | Yes | A GitHub organization. |
| `pending_cancellation_date` | `string` | No | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | No | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `[]any` | Yes | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `[]any` | Yes | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | No | **Closing down notice:** This field is no longer relevant and is closing down. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Copilot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Copilot(nil).Load(map[string]any{"org_id": "org_id", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Copilot(nil).Remove(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CopilotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CopilotOrganizationDetailEntity

```go
copilotOrganizationDetail := client.CopilotOrganizationDetail(nil)
fmt.Println(copilotOrganizationDetail.GetName()) // "copilot_organization_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_this_cycle` | `int` | No | The number of seats that have used Copilot during the current billing cycle. |
| `added_this_cycle` | `int` | No | Seats added during the current billing cycle. |
| `inactive_this_cycle` | `int` | No | The number of seats that have not used Copilot during the current billing cycle. |
| `pending_cancellation` | `int` | No | The number of seats that are pending cancellation at the end of the current billing cycle. |
| `pending_invitation` | `int` | No | The number of users who have been invited to receive a Copilot seat through this organization. |
| `total` | `int` | No | The total number of seats being billed for the organization as of the current billing cycle. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CopilotOrganizationDetail(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CopilotOrganizationDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CopilotUsageMetricsDayEntity

```go
copilotUsageMetricsDay := client.CopilotUsageMetricsDay(nil)
fmt.Println(copilotUsageMetricsDay.GetName()) // "copilot_usage_metrics_day"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copilot_dotcom_chat` | `map[string]any` | No | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `map[string]any` | No | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `map[string]any` | No | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `map[string]any` | No | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | Yes | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | No | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | No | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CopilotUsageMetricsDay(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CopilotUsageMetricsDayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CredentialEntity

```go
credential := client.Credential(nil)
fmt.Println(credential.GetName()) // "credential"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `[]any` | Yes | A list of credentials to be revoked, up to 1000 per request. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Credential(nil).Create(map[string]any{
    "credentials": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPropertyEntity

```go
customProperty := client.CustomProperty(nil)
fmt.Println(customProperty.GetName()) // "custom_property"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_values` | `[]any` | No | An ordered list of the allowed values of the property. |
| `default_value` | `any` | No | Default value of the property |
| `description` | `string` | No | Short description of the property |
| `properties` | `[]any` | Yes | The array of custom properties to create or update. |
| `property_name` | `string` | Yes | The name of the property |
| `required` | `bool` | No | Whether the property is required. |
| `source_type` | `string` | No | The source type of the property |
| `url` | `string` | No | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | Yes | The type of the value for the property |
| `values_editable_by` | `string` | No | Who can edit the values of the property |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomProperty(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomProperty(nil).Load(map[string]any{"custom_property_name": "custom_property_name", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomProperty(nil).Update(map[string]any{
    "custom_property_name": "custom_property_name",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPropertyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPropertyValueEntity

```go
customPropertyValue := client.CustomPropertyValue(nil)
fmt.Println(customPropertyValue.GetName()) // "custom_property_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `property_name` | `string` | Yes | The name of the property |
| `value` | `any` | Yes | The value assigned to the property |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomPropertyValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPropertyValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotEntity

```go
dependabot := client.Dependabot(nil)
fmt.Println(dependabot.GetName()) // "dependabot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `string` | Yes |  |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `default_level` | `string` | Yes | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | No |  |
| `login` | `string` | Yes |  |
| `members_url` | `string` | Yes |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `map[string]any` | No |  |
| `private` | `bool` | Yes |  |
| `public_members_url` | `string` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository_ids_to_add` | `[]any` | No | List of repository IDs to add. |
| `repository_ids_to_remove` | `[]any` | No | List of repository IDs to remove. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `selected_repositories_url` | `string` | No |  |
| `selected_repository_ids` | `[]any` | Yes | An array of repository ids that can access the organization secret. |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No | Visibility of a secret |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Dependabot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Dependabot(nil).Update(map[string]any{
    "org_id": "org_id",
    "repository_id": 1,
    "secret_id": "secret_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Dependabot(nil).Remove(map[string]any{"org_id": "org_id", "secret_name": "secret_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotAlertEntity

```go
dependabotAlert := client.DependabotAlert(nil)
fmt.Println(dependabotAlert.GetName()) // "dependabot_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `map[string]any` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `number` | `int` | Yes | The security alert number. |
| `security_advisory` | `map[string]any` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `map[string]any` | Yes | Details pertaining to one vulnerable version range for the advisory. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DependabotAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependabotAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DependabotAlert(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotAlertWithRepositoryEntity

```go
dependabotAlertWithRepository := client.DependabotAlertWithRepository(nil)
fmt.Println(dependabotAlertWithRepository.GetName()) // "dependabot_alert_with_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `map[string]any` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `map[string]any` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `map[string]any` | Yes | A GitHub repository. |
| `security_advisory` | `map[string]any` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `map[string]any` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | Yes | The state of the Dependabot alert. |
| `updated_at` | `string` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DependabotAlertWithRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotAlertWithRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotPublicKeyEntity

```go
dependabotPublicKey := client.DependabotPublicKey(nil)
fmt.Println(dependabotPublicKey.GetName()) // "dependabot_public_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependabotPublicKey(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotPublicKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotRepositoryAccessDetailEntity

```go
dependabotRepositoryAccessDetail := client.DependabotRepositoryAccessDetail(nil)
fmt.Println(dependabotRepositoryAccessDetail.GetName()) // "dependabot_repository_access_detail"
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
| `fork` | `bool` | Yes | Whether the repository is a fork. |
| `forks_url` | `string` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `string` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `string` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `string` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `string` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `string` | Yes | The API URL to list the hooks on the repository. |
| `html_url` | `string` | Yes | The URL to view the repository on GitHub.com. |
| `id` | `int` | Yes | A unique identifier of the repository. |
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
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `private` | `bool` | Yes | Whether the repository is private. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DependabotRepositoryAccessDetail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotRepositoryAccessDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependabotSecretEntity

```go
dependabotSecret := client.DependabotSecret(nil)
fmt.Println(dependabotSecret.GetName()) // "dependabot_secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependabotSecret(nil).Load(map[string]any{"id": "dependabot_secret_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependabotSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependencyGraphEntity

```go
dependencyGraph := client.DependencyGraph(nil)
fmt.Println(dependencyGraph.GetName()) // "dependency_graph"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detector` | `map[string]any` | Yes | A description of the detector used. |
| `job` | `map[string]any` | Yes |  |
| `manifests` | `map[string]any` | No | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `map[string]any` | No | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | Yes | The repository branch that triggered this snapshot. |
| `scanned` | `string` | Yes | The time at which the snapshot was scanned. |
| `sha` | `string` | Yes | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | Yes | The version of the repository snapshot submission. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependencyGraphEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependencyGraphDiffEntity

```go
dependencyGraphDiff := client.DependencyGraphDiff(nil)
fmt.Println(dependencyGraphDiff.GetName()) // "dependency_graph_diff"
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
| `vulnerabilities` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependencyGraphDiff(nil).Load(map[string]any{"basehead": "basehead", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependencyGraphDiffEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependencyGraphSpdxSbomEntity

```go
dependencyGraphSpdxSbom := client.DependencyGraphSpdxSbom(nil)
fmt.Println(dependencyGraphSpdxSbom.GetName()) // "dependency_graph_spdx_sbom"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `SPDXID` | `string` | Yes | The SPDX identifier for the SPDX document. |
| `comment` | `string` | No | An optional comment about the SPDX document. |
| `creationInfo` | `map[string]any` | Yes |  |
| `dataLicense` | `string` | Yes | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | Yes | The namespace for the SPDX document. |
| `name` | `string` | Yes | The name of the SPDX document. |
| `packages` | `[]any` | Yes |  |
| `relationships` | `[]any` | Yes |  |
| `spdxVersion` | `string` | Yes | The version of the SPDX specification that this document conforms to. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependencyGraphSpdxSbom(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependencyGraphSpdxSbomEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeployKeyEntity

```go
deployKey := client.DeployKey(nil)
fmt.Println(deployKey.GetName()) // "deploy_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_by` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enabled` | `bool` | No |  |
| `id` | `int` | Yes |  |
| `key` | `string` | Yes | The contents of the key. |
| `last_used` | `string` | No |  |
| `read_only` | `bool` | Yes | If `true`, the key will only be able to read repository contents. |
| `title` | `string` | Yes | A name for the key. |
| `url` | `string` | Yes |  |
| `verified` | `bool` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DeployKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeployKey(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentEntity

```go
deployment := client.Deployment(nil)
fmt.Println(deployment.GetName()) // "deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_merge` | `bool` | No | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | Yes | A comment to accompany the deployment review |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `description` | `string` | Yes | Short description of the deployment. |
| `environment` | `string` | Yes | Name for the target deployment environment. |
| `environment_ids` | `[]any` | Yes | The list of environment ids to approve or reject |
| `id` | `int` | Yes | Unique identifier of the deployment |
| `node_id` | `string` | Yes |  |
| `original_environment` | `string` | No |  |
| `payload` | `any` | Yes |  |
| `performed_via_github_app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | No | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | Yes | The ref to deploy. |
| `repository_url` | `string` | Yes |  |
| `required_contexts` | `[]any` | No | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `string` | Yes |  |
| `state` | `string` | Yes | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `string` | Yes |  |
| `task` | `string` | Yes | Parameter to specify a task to execute |
| `transient_environment` | `bool` | No | Specifies if the given environment is will no longer exist at some point in the future. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Deployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Deployment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentBranchPolicyEntity

```go
deploymentBranchPolicy := client.DeploymentBranchPolicy(nil)
fmt.Println(deploymentBranchPolicy.GetName()) // "deployment_branch_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | The unique identifier of the branch or tag policy. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeploymentBranchPolicy(nil).Load(map[string]any{"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DeploymentBranchPolicy(nil).Update(map[string]any{
    "id": 1,
    "environment_id": "environment_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentBranchPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentProtectionRuleEntity

```go
deploymentProtectionRule := client.DeploymentProtectionRule(nil)
fmt.Println(deploymentProtectionRule.GetName()) // "deployment_protection_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `int` | No | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `string` | Yes | The URL for the endpoint to get details about the app. |
| `node_id` | `string` | Yes | The node ID for the deployment protection rule integration. |
| `slug` | `string` | Yes | The slugified name of the deployment protection rule integration. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeploymentProtectionRule(nil).Load(map[string]any{"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentProtectionRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeploymentStatusEntity

```go
deploymentStatus := client.DeploymentStatus(nil)
fmt.Println(deploymentStatus.GetName()) // "deployment_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_inactive` | `bool` | No | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `deployment_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the status. |
| `environment` | `string` | No | The environment of the deployment that the status is for. |
| `environment_url` | `string` | No | The URL for accessing your environment. |
| `id` | `int` | Yes |  |
| `log_url` | `string` | No | The URL to associate with this status. |
| `node_id` | `string` | Yes |  |
| `performed_via_github_app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DeploymentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DeploymentStatus(nil).Load(map[string]any{"id": 1, "deployment_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeploymentStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DiffEntryEntity

```go
diffEntry := client.DiffEntry(nil)
fmt.Println(diffEntry.GetName()) // "diff_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `int` | Yes |  |
| `blob_url` | `string` | Yes |  |
| `changes` | `int` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `deletions` | `int` | Yes |  |
| `filename` | `string` | Yes |  |
| `patch` | `string` | No |  |
| `previous_filename` | `string` | No |  |
| `raw_url` | `string` | Yes |  |
| `sha` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DiffEntry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DiffEntryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailEntity

```go
email := client.Email(nil)
fmt.Println(email.GetName()) // "email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `primary` | `bool` | No |  |
| `verified` | `bool` | No |  |
| `visibility` | `string` | No | Denotes whether an email is publicly visible. |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `email` | Yes | - | - |
| `primary` | Yes | - | - |
| `verified` | Yes | - | - |
| `visibility` | Yes | - | Yes |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Email(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Email(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Email(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmojiEntity

```go
emoji := client.Emoji(nil)
fmt.Println(emoji.GetName()) // "emoji"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Emoji(nil).Load(map[string]any{"id": "emoji_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmptyObjectEntity

```go
emptyObject := client.EmptyObject(nil)
fmt.Println(emptyObject.GetName()) // "empty_object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attestations` | `[]any` | No |  |
| `enable_debug_logging` | `bool` | No | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Yes | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `[]any` | No | Array of unique strings. |
| `key_id` | `string` | Yes | ID of the key you used to encrypt the secret. |
| `languages` | `[]any` | No | CodeQL languages to be analyzed. |
| `name` | `string` | Yes | The name of the variable. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `selected_repository_ids` | `[]any` | No | An array of repository ids that can access the organization variable. |
| `state` | `string` | No | The desired state of code scanning default setup. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `use_default` | `bool` | Yes | Whether to use the default template or not. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmptyObject(nil).Load(map[string]any{"subject_digest": "subject_digest", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EmptyObject(nil).Update(map[string]any{
    "org_id": "org_id",
    "secret_name": "secret_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmptyObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterpriseTeamEntity

```go
enterpriseTeam := client.EnterpriseTeam(nil)
fmt.Println(enterpriseTeam.GetName()) // "enterprise_team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | A description of the team. |
| `group_id` | `string` | Yes | The ID of the IdP group to assign team membership with. |
| `group_name` | `string` | No | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnterpriseTeam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EnterpriseTeam(nil).Load(map[string]any{"id": "enterprise_team_id", "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EnterpriseTeam(nil).Update(map[string]any{
    "id": "enterprise_team_id",
    "enterprise": "enterprise",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EnterpriseTeam(nil).Remove(map[string]any{"id": "enterprise_team_id", "enterprise": "enterprise"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseTeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterpriseTeamMembershipEntity

```go
enterpriseTeamMembership := client.EnterpriseTeamMembership(nil)
fmt.Println(enterpriseTeamMembership.GetName()) // "enterprise_team_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EnterpriseTeamMembership(nil).Remove(map[string]any{"enterprise": "enterprise", "id": "id", "team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseTeamMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentEntity

```go
environment := client.Environment(nil)
fmt.Println(environment.GetName()) // "environment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `map[string]any` | Yes | The type of deployment branch policy for this environment. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the environment. |
| `name` | `string` | Yes | The name of the environment. |
| `node_id` | `string` | Yes |  |
| `prevent_self_review` | `bool` | No | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `[]any` | No | Built-in deployment protection rules for the environment. |
| `reviewers` | `[]any` | No | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | Yes |  |
| `wait_timer` | `int` | No | The amount of time to delay a job after the job is initially triggered. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Environment(nil).Load(map[string]any{"id": "environment_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Environment(nil).Update(map[string]any{
    "id": "environment_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnvironmentApprovalEntity

```go
environmentApproval := client.EnvironmentApproval(nil)
fmt.Println(environmentApproval.GetName()) // "environment_approval"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | Yes | The comment submitted with the deployment review |
| `environments` | `[]any` | Yes | The list of environments that were approved or rejected |
| `state` | `string` | Yes | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `map[string]any` | Yes | A GitHub user. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnvironmentApproval(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnvironmentApprovalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | Yes | Actor |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `org` | `map[string]any` | Yes | Actor |
| `payload` | `map[string]any` | Yes |  |
| `public` | `bool` | Yes |  |
| `repo` | `map[string]any` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Event(nil).Load(map[string]any{"org": "org", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeedEntity

```go
feed := client.Feed(nil)
fmt.Println(feed.GetName()) // "feed"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_actor_url` | `string` | No |  |
| `current_user_organization_url` | `string` | No |  |
| `current_user_organization_urls` | `[]any` | No |  |
| `current_user_public_url` | `string` | No |  |
| `current_user_url` | `string` | No |  |
| `links` | `map[string]any` | Yes |  |
| `repository_discussions_category_url` | `string` | No | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | No | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` | No |  |
| `timeline_url` | `string` | Yes |  |
| `user_url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Feed(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FileCommitEntity

```go
fileCommit := client.FileCommit(nil)
fmt.Println(fileCommit.GetName()) // "file_commit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | Yes | The author of the file. |
| `branch` | `string` | No | The branch name. |
| `commit` | `map[string]any` | Yes |  |
| `committer` | `map[string]any` | Yes | The person that committed the file. |
| `content` | `map[string]any` | Yes | The new file content, using Base64 encoding. |
| `message` | `string` | Yes | The commit message. |
| `sha` | `string` | No | **Required if you are updating a file**. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FileCommit(nil).Update(map[string]any{
    "owner": "owner",
    "path": "path",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FileCommit(nil).Remove(map[string]any{"owner": "owner", "path": "path", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FileCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FollowerEntity

```go
follower := client.Follower(nil)
fmt.Println(follower.GetName()) // "follower"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Follower(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FollowerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FollowingEntity

```go
following := client.Following(nil)
fmt.Println(following.GetName()) // "following"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Following(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FollowingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FullRepositoryEntity

```go
fullRepository := client.FullRepository(nil)
fmt.Println(fullRepository.GetName()) // "full_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge. |
| `allow_forking` | `bool` | No | Either `true` to allow private forks, or `false` to prevent private forks. |
| `allow_merge_commit` | `bool` | No | Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. |
| `allow_rebase_merge` | `bool` | No | Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. |
| `allow_squash_merge` | `bool` | No | Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. |
| `allow_update_branch` | `bool` | No | Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is allowed. |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether to archive this repository. |
| `assignees_url` | `string` | Yes |  |
| `auto_init` | `bool` | No | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `map[string]any` | Yes | Code of Conduct Simple |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | No | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the new repository. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `github_id` | `int` | Yes |  |
| `gitignore_template` | `string` | No | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `bool` | Yes | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `bool` | Yes | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `string` | Yes | A URL with more information about the repository. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `include_all_branches` | `bool` | No | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `bool` | No | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `license_template` | `string` | No | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the new repository. |
| `network_count` | `int` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `map[string]any` | Yes | A GitHub user. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `parent` | `map[string]any` | Yes | A repository on GitHub. |
| `permissions` | `map[string]any` | Yes |  |
| `private` | `bool` | Yes | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `map[string]any` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `map[string]any` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_id` | `int` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `template_repository` | `map[string]any` | Yes | A repository on GitHub. |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FullRepository(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FullRepository(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FullRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GistEntity

```go
gist := client.Gist(nil)
fmt.Println(gist.GetName()) // "gist"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No | Description of the gist |
| `files` | `map[string]any` | No | Names and content for the files that make up the gist |
| `fork_of` | `map[string]any` | Yes | Gist |
| `forks` | `[]any` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `[]any` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gist(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Gist(nil).Load(map[string]any{"id": "gist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Gist(nil).Update(map[string]any{
    "id": "gist_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Gist(nil).Remove(map[string]any{"id": "gist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GistEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GistCommentEntity

```go
gistComment := client.GistComment(nil)
fmt.Println(gistComment.GetName()) // "gist_comment"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GistComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GistComment(nil).Load(map[string]any{"id": 1, "gist_id": "gist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GistComment(nil).Update(map[string]any{
    "id": 1,
    "gist_id": "gist_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GistCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GistCommitEntity

```go
gistCommit := client.GistCommit(nil)
fmt.Println(gistCommit.GetName()) // "gist_commit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_status` | `map[string]any` | Yes |  |
| `committed_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `version` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GistCommit(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GistCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GistSimpleEntity

```go
gistSimple := client.GistSimple(nil)
fmt.Println(gistSimple.GetName()) // "gist_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `string` | No |  |
| `commits_url` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `files` | `map[string]any` | No |  |
| `fork_of` | `map[string]any` | Yes | Gist |
| `forks` | `[]any` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `[]any` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GistSimple(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GistSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitEntity

```go
git := client.Git(nil)
fmt.Println(git.GetName()) // "git"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Git(nil).Remove(map[string]any{"owner": "owner", "ref": "ref", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitCommitEntity

```go
gitCommit := client.GitCommit(nil)
fmt.Println(gitCommit.GetName()) // "git_commit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `map[string]any` | Yes | Identifying information for the git-user |
| `committer` | `map[string]any` | Yes | Identifying information for the git-user |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the commit |
| `node_id` | `string` | Yes |  |
| `parents` | `[]any` | Yes | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | Yes | SHA for the commit |
| `signature` | `string` | No | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `map[string]any` | Yes | The SHA of the tree object this commit points to |
| `url` | `string` | Yes |  |
| `verification` | `map[string]any` | Yes |  |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GitCommit(nil).Load(map[string]any{"id": "git_commit_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitCommitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitRefEntity

```go
gitRef := client.GitRef(nil)
fmt.Println(gitRef.GetName()) // "git_ref"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `force` | `bool` | No | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `object` | `map[string]any` | Yes |  |
| `ref` | `string` | Yes | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | Yes | SHA for the reference |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GitRef(nil).Load(map[string]any{"id": "git_ref_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GitRef(nil).Update(map[string]any{
    "id": "git_ref_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitRefEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitTagEntity

```go
gitTag := client.GitTag(nil)
fmt.Println(gitTag.GetName()) // "git_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the tag |
| `node_id` | `string` | Yes |  |
| `object` | `map[string]any` | Yes | The SHA of the git object this is tagging. |
| `sha` | `string` | Yes |  |
| `tag` | `string` | Yes | Name of the tag |
| `tagger` | `map[string]any` | Yes | An object with information about the individual creating the tag. |
| `type` | `string` | Yes | The type of the object we're tagging. |
| `url` | `string` | Yes | URL for the tag |
| `verification` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GitTag(nil).Load(map[string]any{"id": "git_tag_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitTagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitTreeEntity

```go
gitTree := client.GitTree(nil)
fmt.Println(gitTree.GetName()) // "git_tree"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_tree` | `string` | No | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` | No |  |
| `sha` | `string` | Yes |  |
| `tree` | `[]any` | Yes | Objects specifying a tree structure |
| `truncated` | `bool` | Yes |  |
| `url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GitTree(nil).Load(map[string]any{"id": "git_tree_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitTreeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitignoreEntity

```go
gitignore := client.Gitignore(nil)
fmt.Println(gitignore.GetName()) // "gitignore"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gitignore(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitignoreEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GitignoreTemplateEntity

```go
gitignoreTemplate := client.GitignoreTemplate(nil)
fmt.Println(gitignoreTemplate.GetName()) // "gitignore_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `source` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GitignoreTemplate(nil).Load(map[string]any{"id": "gitignore_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GitignoreTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GlobalAdvisoryEntity

```go
globalAdvisory := client.GlobalAdvisory(nil)
fmt.Println(globalAdvisory.GetName()) // "global_advisory"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `[]any` | Yes | The users who contributed to the advisory. |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `map[string]any` | Yes |  |
| `cvss_severities` | `map[string]any` | No |  |
| `cwes` | `[]any` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `epss` | `map[string]any` | No | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | Yes | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `id` | `string` | No |  |
| `identifiers` | `[]any` | Yes |  |
| `nvd_published_at` | `string` | Yes | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `[]any` | Yes |  |
| `repository_advisory_url` | `string` | Yes | The API URL for the repository advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `source_code_location` | `string` | Yes | The URL of the advisory's source code. |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `type` | `string` | Yes | The type of advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `[]any` | Yes | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GlobalAdvisory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GlobalAdvisory(nil).Load(map[string]any{"id": "global_advisory_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GlobalAdvisoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GpgKeyEntity

```go
gpgKey := client.GpgKey(nil)
fmt.Println(gpgKey.GetName()) // "gpg_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `armored_public_key` | `string` | Yes | A GPG key in ASCII-armored format. |
| `can_certify` | `bool` | Yes |  |
| `can_encrypt_comms` | `bool` | Yes |  |
| `can_encrypt_storage` | `bool` | Yes |  |
| `can_sign` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `emails` | `[]any` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_id` | `string` | Yes |  |
| `name` | `string` | No | A descriptive name for the new key. |
| `primary_key_id` | `int` | Yes |  |
| `public_key` | `string` | Yes |  |
| `raw_key` | `string` | Yes |  |
| `revoked` | `bool` | Yes |  |
| `subkeys` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GpgKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GpgKey(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GpgKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HookEntity

```go
hook := client.Hook(nil)
fmt.Println(hook.GetName()) // "hook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `[]any` | No | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `map[string]any` | Yes | Configuration object of the webhook |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `[]any` | Yes | Determines what events the hook is triggered for. |
| `id` | `int` | Yes | Unique identifier of the webhook. |
| `last_response` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` | Yes |  |
| `remove_events` | `[]any` | No | Determines a list of events to be removed from the list of events that the Hook triggers for. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Hook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Hook(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Hook(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HookDeliveryEntity

```go
hookDelivery := client.HookDelivery(nil)
fmt.Println(hookDelivery.GetName()) // "hook_delivery"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the delivery was delivered. |
| `duration` | `float64` | Yes | Time spent delivering. |
| `event` | `string` | Yes | The event that triggered the delivery. |
| `guid` | `string` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Yes | Unique identifier of the delivery. |
| `installation_id` | `int` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Yes | Whether the delivery is a redelivery. |
| `repository_id` | `int` | Yes | The id of the repository associated with this event. |
| `request` | `map[string]any` | Yes |  |
| `response` | `map[string]any` | Yes |  |
| `status` | `string` | Yes | Description of the status of the attempted delivery |
| `status_code` | `int` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |
| `url` | `string` | No | The URL target of the delivery. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.HookDelivery(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HookDeliveryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HookDeliveryItemEntity

```go
hookDeliveryItem := client.HookDeliveryItem(nil)
fmt.Println(hookDeliveryItem.GetName()) // "hook_delivery_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the webhook delivery occurred. |
| `duration` | `float64` | Yes | Time spent delivering. |
| `event` | `string` | Yes | The event that triggered the delivery. |
| `guid` | `string` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Yes | Unique identifier of the webhook delivery. |
| `installation_id` | `int` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Yes | Whether the webhook delivery is a redelivery. |
| `repository_id` | `int` | Yes | The id of the repository associated with this event. |
| `status` | `string` | Yes | Describes the response returned after attempting the delivery. |
| `status_code` | `int` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HookDeliveryItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HookDeliveryItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HostedComputeEntity

```go
hostedCompute := client.HostedCompute(nil)
fmt.Println(hostedCompute.GetName()) // "hosted_compute"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `[]any` | No | The unique identifier of each network settings in the configuration. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HostedCompute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.HostedCompute(nil).Remove(map[string]any{"network_configuration_id": "network_configuration_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HostedComputeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HovercardEntity

```go
hovercard := client.Hovercard(nil)
fmt.Println(hovercard.GetName()) // "hovercard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `octicon` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Hovercard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HovercardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImportEntity

```go
import_ := client.Import(nil)
fmt.Println(import_.GetName()) // "import"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors_count` | `int` | No |  |
| `authors_url` | `string` | Yes |  |
| `commit_count` | `int` | No |  |
| `error_message` | `string` | No |  |
| `failed_step` | `string` | No |  |
| `has_large_files` | `bool` | No |  |
| `html_url` | `string` | Yes |  |
| `human_name` | `string` | No |  |
| `import_percent` | `int` | No |  |
| `large_files_count` | `int` | No |  |
| `large_files_size` | `int` | No |  |
| `message` | `string` | No |  |
| `project_choices` | `[]any` | No |  |
| `push_percent` | `int` | No |  |
| `repository_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `status_text` | `string` | No |  |
| `svc_root` | `string` | No |  |
| `svn_root` | `string` | No |  |
| `tfvc_project` | `string` | No | For a tfvc import, the name of the project that is being imported. |
| `url` | `string` | Yes |  |
| `use_lfs` | `bool` | No | Whether to store large files during the import. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Import(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Import(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InstallationEntity

```go
installation := client.Installation(nil)
fmt.Println(installation.GetName()) // "installation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `app_id` | `int` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `client_id` | `string` | No |  |
| `contact_email` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `events` | `[]any` | Yes |  |
| `has_multiple_single_files` | `bool` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the installation. |
| `permissions` | `map[string]any` | Yes | The permissions granted to the user access token. |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `[]any` | No |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `map[string]any` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Installation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Installation(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Installation(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Installation(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InstallationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InstallationTokenEntity

```go
installationToken := client.InstallationToken(nil)
fmt.Println(installationToken.GetName()) // "installation_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `permissions` | `map[string]any` | No | The permissions granted to the user access token. |
| `repositories` | `[]any` | No | List of repository names that the token should have access to |
| `repository_ids` | `[]any` | No | List of repository IDs that the token should have access to |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.InstallationToken(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InstallationTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationEntity

```go
integration := client.Integration(nil)
fmt.Println(integration.GetName()) // "integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `[]any` | Yes | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `events` | `[]any` | Yes | The list of events for the GitHub app. |
| `external_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the GitHub app |
| `installations_count` | `int` | No | The number of installations associated with the GitHub app. |
| `name` | `string` | Yes | The name of the GitHub app |
| `node_id` | `string` | Yes |  |
| `owner` | `any` | Yes |  |
| `permissions` | `map[string]any` | Yes | The set of permissions for the GitHub app |
| `slug` | `string` | No | The slug name of the GitHub app |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Integration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Integration(nil).Load(map[string]any{"app_slug": "app_slug"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Integration(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Integration(nil).Remove(map[string]any{"branch_id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IntegrationInstallationEntity

```go
integrationInstallation := client.IntegrationInstallation(nil)
fmt.Println(integrationInstallation.GetName()) // "integration_installation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the request installation. |
| `node_id` | `string` | No |  |
| `requester` | `map[string]any` | Yes | A GitHub user. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IntegrationInstallation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IntegrationInstallationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InteractionEntity

```go
interaction := client.Interaction(nil)
fmt.Println(interaction.GetName()) // "interaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `limit` | `string` | No |  |
| `origin` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Interaction(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Interaction(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InteractionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InteractionLimitEntity

```go
interactionLimit := client.InteractionLimit(nil)
fmt.Println(interactionLimit.GetName()) // "interaction_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | Yes |  |
| `expiry` | `string` | No | The duration of the interaction restriction. |
| `limit` | `string` | Yes | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.InteractionLimit(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InteractionLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueEntity

```go
issue := client.Issue(nil)
fmt.Println(issue.GetName()) // "issue"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `actor` | `map[string]any` | Yes | A GitHub user. |
| `after_id` | `int` | No | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `map[string]any` | Yes | A GitHub user. |
| `assignees` | `[]any` | No | Usernames of people to assign this issue to. |
| `assigner` | `map[string]any` | Yes | A GitHub user. |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `before_id` | `int` | No | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | No | Contents of the issue comment |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `closed_at` | `string` | Yes |  |
| `closed_by` | `map[string]any` | Yes | A GitHub user. |
| `color` | `string` | No | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_id` | `string` | Yes |  |
| `commit_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default` | `bool` | No | Whether this label comes by default in a new repository. |
| `description` | `string` | No | Optional description of the label, such as its purpose. |
| `dismissed_review` | `map[string]any` | Yes |  |
| `draft` | `bool` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the issue comment |
| `issue` | `map[string]any` | Yes | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `map[string]any` | Yes |  |
| `issue_field_values` | `[]any` | No |  |
| `issue_id` | `int` | Yes | The id of the issue that blocks the current issue |
| `issue_url` | `string` | Yes |  |
| `label` | `map[string]any` | Yes | Issue Event Label |
| `labels` | `[]any` | Yes | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` | Yes |  |
| `lock_reason` | `string` | No | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` | Yes |  |
| `milestone` | `map[string]any` | Yes | Issue Event Milestone |
| `name` | `string` | No | The name of the label. |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | No | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `project_card` | `map[string]any` | Yes | Issue Event Project Card |
| `pull_request` | `map[string]any` | Yes |  |
| `reactions` | `map[string]any` | Yes |  |
| `rename` | `map[string]any` | Yes | Issue Event Rename |
| `replace_parent` | `bool` | No | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `map[string]any` | Yes | A repository on GitHub. |
| `repository_url` | `string` | Yes |  |
| `requested_reviewer` | `map[string]any` | Yes | A GitHub user. |
| `requested_team` | `map[string]any` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `map[string]any` | Yes | A GitHub user. |
| `state` | `string` | Yes | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | No | The reason for the current state |
| `sub_issue_id` | `int` | Yes | The id of the sub-issue to add. |
| `sub_issues_summary` | `map[string]any` | Yes |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes | Title of the issue |
| `type` | `map[string]any` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the issue comment |
| `user` | `map[string]any` | Yes | A GitHub user. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Issue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Issue(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Issue(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Issue(nil).Remove(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IssueTypeEntity

```go
issueType := client.IssueType(nil)
fmt.Println(issueType.GetName()) // "issue_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | No | The color of the issue type. |
| `created_at` | `string` | No | The time the issue type created. |
| `description` | `string` | Yes | The description of the issue type. |
| `id` | `int` | Yes | The unique identifier of the issue type. |
| `is_enabled` | `bool` | No | The enabled state of the issue type. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IssueType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IssueType(nil).Update(map[string]any{
    "id": 1,
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IssueTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JobEntity

```go
job := client.Job(nil)
fmt.Println(job.GetName()) // "job"
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
| `id` | `int` | Yes | The id of the job. |
| `labels` | `[]any` | Yes | Labels for the workflow job. |
| `name` | `string` | Yes | The name of the job. |
| `node_id` | `string` | Yes |  |
| `run_attempt` | `int` | No | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | Yes | The id of the associated workflow run. |
| `run_url` | `string` | Yes |  |
| `runner_group_id` | `int` | Yes | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `string` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `string` | Yes | The name of the runner to which this job has been assigned. |
| `started_at` | `string` | Yes | The time that the job started, in ISO 8601 format. |
| `status` | `string` | Yes | The phase of the lifecycle that the job is currently in. |
| `steps` | `[]any` | No | Steps in this job. |
| `url` | `string` | Yes |  |
| `workflow_name` | `string` | Yes | The name of the workflow. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Job(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## KeyEntity

```go
key := client.Key(nil)
fmt.Println(key.GetName()) // "key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key` | `string` | Yes | The public SSH key to add to your GitHub account. |
| `last_used` | `string` | No |  |
| `read_only` | `bool` | Yes |  |
| `title` | `string` | Yes | A descriptive name for the new key. |
| `url` | `string` | Yes |  |
| `verified` | `bool` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Key(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Key(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `KeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LabelEntity

```go
label := client.Label(nil)
fmt.Println(label.GetName()) // "label"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `string` | Yes | 6-character hex code, without the leading #, identifying the color |
| `default` | `bool` | Yes | Whether this label comes by default in a new repository. |
| `description` | `string` | Yes | Optional description of the label, such as its purpose. |
| `id` | `int` | Yes | Unique identifier for the label. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Label(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Label(nil).Load(map[string]any{"id": "label_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Label(nil).Update(map[string]any{
    "id": "label_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LanguageEntity

```go
language := client.Language(nil)
fmt.Println(language.GetName()) // "language"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `C` | `int` | No |  |
| `Python` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Language(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LicenseEntity

```go
license := client.License(nil)
fmt.Println(license.GetName()) // "license"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes |  |
| `conditions` | `[]any` | Yes |  |
| `content` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `encoding` | `string` | Yes |  |
| `featured` | `bool` | Yes |  |
| `git_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `implementation` | `string` | Yes |  |
| `key` | `string` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `limitations` | `[]any` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `permissions` | `[]any` | Yes |  |
| `sha` | `string` | Yes |  |
| `size` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.License(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.License(nil).Load(map[string]any{"id": "license_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LicenseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MarkdownEntity

```go
markdown := client.Markdown(nil)
fmt.Println(markdown.GetName()) // "markdown"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `string` | No | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | No | The rendering mode. |
| `text` | `string` | Yes | The Markdown text to render in HTML. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Markdown(nil).Create(map[string]any{
    "text": "example_text",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MarkdownEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MarketplaceListingPlanEntity

```go
marketplaceListingPlan := client.MarketplaceListingPlan(nil)
fmt.Println(marketplaceListingPlan.GetName()) // "marketplace_listing_plan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts_url` | `string` | Yes |  |
| `bullets` | `[]any` | Yes |  |
| `description` | `string` | Yes |  |
| `has_free_trial` | `bool` | Yes |  |
| `id` | `int` | Yes |  |
| `monthly_price_in_cents` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `number` | `int` | Yes |  |
| `price_model` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `unit_name` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `yearly_price_in_cents` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MarketplaceListingPlan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MarketplaceListingPlanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MarketplacePurchaseEntity

```go
marketplacePurchase := client.MarketplacePurchase(nil)
fmt.Println(marketplacePurchase.GetName()) // "marketplace_purchase"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `marketplace_pending_change` | `map[string]any` | No |  |
| `marketplace_purchase` | `map[string]any` | Yes |  |
| `organization_billing_email` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MarketplacePurchase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MarketplacePurchase(nil).Load(map[string]any{"account_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MarketplacePurchaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MembershipEntity

```go
membership := client.Membership(nil)
fmt.Println(membership.GetName()) // "membership"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Membership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Membership(nil).Load(map[string]any{"id": "membership_id", "enterprise": "enterprise", "team_id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Membership(nil).Update(map[string]any{
    "id": "membership_id",
    "enterprise": "enterprise",
    "team_id": "team_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MergedUpstreamEntity

```go
mergedUpstream := client.MergedUpstream(nil)
fmt.Println(mergedUpstream.GetName()) // "merged_upstream"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_branch` | `string` | No |  |
| `branch` | `string` | Yes | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` | No |  |
| `message` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MergedUpstreamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetaEntity

```go
meta := client.Meta(nil)
fmt.Println(meta.GetName()) // "meta"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Meta(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Meta(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MetarootEntity

```go
metaroot := client.Metaroot(nil)
fmt.Println(metaroot.GetName()) // "metaroot"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Metaroot(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MetarootEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MigrationEntity

```go
migration := client.Migration(nil)
fmt.Println(migration.GetName()) // "migration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `string` | No |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `exclude` | `[]any` | No | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `bool` | Yes | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `bool` | Yes | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `bool` | Yes | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `bool` | Yes | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `bool` | Yes | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `guid` | `string` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | No |  |
| `lock_repositories` | `bool` | Yes | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `org_metadata_only` | `bool` | Yes | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `map[string]any` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repositories` | `[]any` | Yes | The repositories included in the migration. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Migration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Migration(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Migration(nil).Remove(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MilestoneEntity

```go
milestone := client.Milestone(nil)
fmt.Println(milestone.GetName()) // "milestone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `closed_issues` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `description` | `string` | No | A description of the milestone. |
| `due_on` | `string` | No | The milestone due date. |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes | The number of the milestone. |
| `open_issues` | `int` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Milestone(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Milestone(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Milestone(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MinimalRepositoryEntity

```go
minimalRepository := client.MinimalRepository(nil)
fmt.Println(minimalRepository.GetName()) // "minimal_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `map[string]any` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `string` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `string` | Yes |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MinimalRepository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MinimalRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NetworkConfigurationEntity

```go
networkConfiguration := client.NetworkConfiguration(nil)
fmt.Println(networkConfiguration.GetName()) // "network_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `[]any` | No | The unique identifier of each network settings in the configuration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `compute_service` | - | - | - |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `network_settings_ids` | - | Yes | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NetworkConfiguration(nil).Load(map[string]any{"id": "network_configuration_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NetworkConfiguration(nil).Update(map[string]any{
    "id": "network_configuration_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NetworkConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NetworkSettingEntity

```go
networkSetting := client.NetworkSetting(nil)
fmt.Println(networkSetting.GetName()) // "network_setting"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NetworkSetting(nil).Load(map[string]any{"id": "network_setting_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NetworkSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OidcCustomSubEntity

```go
oidcCustomSub := client.OidcCustomSub(nil)
fmt.Println(oidcCustomSub.GetName()) // "oidc_custom_sub"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `[]any` | Yes | Array of unique strings. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OidcCustomSub(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OidcCustomSubEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OidcCustomSubRepoEntity

```go
oidcCustomSubRepo := client.OidcCustomSubRepo(nil)
fmt.Println(oidcCustomSubRepo.GetName()) // "oidc_custom_sub_repo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `[]any` | No | Array of unique strings. |
| `use_default` | `bool` | Yes | Whether to use the default template or not. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OidcCustomSubRepo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OidcCustomSubRepoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgEntity

```go
org := client.Org(nil)
fmt.Println(org.GetName()) // "org"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `any` | Yes |  |
| `action` | `string` | Yes | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `artifact_url` | `string` | No | The URL where the artifact is stored. |
| `async` | `bool` | No | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `[]any` | No |  |
| `attestations_subject_digests` | `map[string]any` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `string` | Yes |  |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `billing_email` | `string` | No | Billing email address. |
| `blog` | `string` | No |  |
| `client_id` | `string` | No |  |
| `company` | `string` | No | The company name. |
| `contact_email` | `string` | No |  |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `default_repository_permission` | `string` | No | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `bool` | No | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `string` | No | The description of the company. |
| `digest` | `string` | Yes | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `bool` | No | Whether the user has direct membership in the organization. |
| `email` | `string` | No | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `[]any` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `[]any` | Yes |  |
| `events_url` | `string` | Yes |  |
| `filled_seats` | `int` | No |  |
| `has_multiple_single_files` | `bool` | No |  |
| `has_organization_projects` | `bool` | No | Whether an organization can use organization projects. |
| `has_repository_projects` | `bool` | No | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the installation. |
| `issues_url` | `string` | Yes |  |
| `location` | `string` | No | The location. |
| `login` | `string` | Yes |  |
| `members_allowed_repository_creation_type` | `string` | No | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `bool` | No | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `bool` | No | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `bool` | No | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `bool` | No | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `bool` | No | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `bool` | No | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `bool` | No | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `bool` | No | Whether organization members can fork private organization repositories. |
| `members_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the artifact. |
| `node_id` | `string` | Yes |  |
| `organization` | `map[string]any` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `page_info` | `map[string]any` | No | Information about the current page. |
| `pat_ids` | `[]any` | Yes | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `[]any` | No | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | No | The path of the artifact. |
| `permissions` | `map[string]any` | Yes | The permissions granted to the user access token. |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` | Yes |  |
| `properties` | `[]any` | Yes | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` | Yes |  |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `reason` | `string` | No | Reason for approving or denying the request. |
| `registry_url` | `string` | Yes | The base URL of the artifact registry. |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository` | `string` | No | The repository name within the registry. |
| `repository_names` | `[]any` | Yes | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `seats` | `int` | No |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | No | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | No | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `[]any` | No |  |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `space` | `int` | Yes |  |
| `state` | `string` | Yes | The state of the member in the organization. |
| `status` | `string` | No | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `[]any` | No |  |
| `subject_digests` | `[]any` | Yes | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `map[string]any` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `total_count` | `int` | No |  |
| `twitter_username` | `string` | No | The Twitter username of the company. |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `web_commit_signoff_required` | `bool` | No | Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Org(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Org(nil).Load(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Org(nil).Update(map[string]any{
    "id": "org_id",
    "username": "username",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Org(nil).Remove(map[string]any{"id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgHookEntity

```go
orgHook := client.OrgHook(nil)
fmt.Println(orgHook.GetName()) // "org_hook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines if notifications are sent when the webhook is triggered. |
| `config` | `map[string]any` | Yes | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `[]any` | Yes | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrgHook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrgHook(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrgHook(nil).Update(map[string]any{
    "id": 1,
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgHookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgMembershipEntity

```go
orgMembership := client.OrgMembership(nil)
fmt.Println(orgMembership.GetName()) // "org_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_membership` | `bool` | No | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `[]any` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` | No |  |
| `organization` | `map[string]any` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `permissions` | `map[string]any` | Yes |  |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `state` | `string` | Yes | The state of the member in the organization. |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrgMembership(nil).Load(map[string]any{"id": "org_membership_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OrgMembership(nil).Update(map[string]any{
    "id": "org_membership_id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationEntity

```go
orgPrivateRegistryConfiguration := client.OrgPrivateRegistryConfiguration(nil)
fmt.Println(orgPrivateRegistryConfiguration.GetName()) // "org_private_registry_configuration"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrgPrivateRegistryConfiguration(nil).Load(map[string]any{"org_id": "org_id", "secret_name": "secret_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgPrivateRegistryConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity

```go
orgPrivateRegistryConfigurationWithSelectedRepository := client.OrgPrivateRegistryConfigurationWithSelectedRepository(nil)
fmt.Println(orgPrivateRegistryConfigurationWithSelectedRepository.GetName()) // "org_private_registry_configuration_with_selected_repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encrypted_value` | `string` | Yes | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` | No |  |
| `key_id` | `string` | Yes | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | Yes | The registry type. |
| `selected_repository_ids` | `[]any` | No | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | Yes | The URL of the private registry. |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgRepoCustomPropertyValueEntity

```go
orgRepoCustomPropertyValue := client.OrgRepoCustomPropertyValue(nil)
fmt.Println(orgRepoCustomPropertyValue.GetName()) // "org_repo_custom_property_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `properties` | `[]any` | Yes | List of custom property names and associated values |
| `repository_full_name` | `string` | Yes |  |
| `repository_id` | `int` | Yes |  |
| `repository_name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrgRepoCustomPropertyValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgRepoCustomPropertyValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationActionsSecretEntity

```go
organizationActionsSecret := client.OrganizationActionsSecret(nil)
fmt.Println(organizationActionsSecret.GetName()) // "organization_actions_secret"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationActionsSecret(nil).Load(map[string]any{"id": "organization_actions_secret_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationActionsSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationActionsVariableEntity

```go
organizationActionsVariable := client.OrganizationActionsVariable(nil)
fmt.Println(organizationActionsVariable.GetName()) // "organization_actions_variable"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationActionsVariable(nil).Load(map[string]any{"id": "organization_actions_variable_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationActionsVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationDependabotSecretEntity

```go
organizationDependabotSecret := client.OrganizationDependabotSecret(nil)
fmt.Println(organizationDependabotSecret.GetName()) // "organization_dependabot_secret"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationDependabotSecret(nil).Load(map[string]any{"id": "organization_dependabot_secret_id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationDependabotSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationInvitationEntity

```go
organizationInvitation := client.OrganizationInvitation(nil)
fmt.Println(organizationInvitation.GetName()) // "organization_invitation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `email` | `string` | No | **Required unless you provide `invitee_id`**. |
| `failed_at` | `string` | No |  |
| `failed_reason` | `string` | No |  |
| `id` | `int` | Yes |  |
| `invitation_source` | `string` | No |  |
| `invitation_teams_url` | `string` | Yes |  |
| `invitee_id` | `int` | No | **Required unless you provide `email`**. |
| `inviter` | `map[string]any` | Yes | A GitHub user. |
| `login` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `role` | `string` | No | The role for the new member. |
| `team_count` | `int` | Yes |  |
| `team_ids` | `[]any` | No | Specify IDs for the teams you want to invite new members to. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationProgrammaticAccessGrantEntity

```go
organizationProgrammaticAccessGrant := client.OrganizationProgrammaticAccessGrant(nil)
fmt.Println(organizationProgrammaticAccessGrant.GetName()) // "organization_programmatic_access_grant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_granted_at` | `string` | Yes | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Yes | Date and time when the request for access was created. |
| `id` | `int` | Yes | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `map[string]any` | Yes | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Yes | Reason for requesting access. |
| `repositories_url` | `string` | Yes | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Yes | Type of repository selection requested. |
| `token_expired` | `bool` | Yes | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Yes | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Yes | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Yes | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | Yes | The name given to the user's token. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationProgrammaticAccessGrant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationRoleEntity

```go
organizationRole := client.OrganizationRole(nil)
fmt.Println(organizationRole.GetName()) // "organization_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `description` | `string` | No | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | Yes | The unique identifier of the role. |
| `name` | `string` | Yes | The name of the role. |
| `organization` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `[]any` | Yes | A list of permissions included in this role. |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationRole(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationRoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationSecretScanningAlertEntity

```go
organizationSecretScanningAlert := client.OrganizationSecretScanningAlert(nil)
fmt.Println(organizationSecretScanningAlert.GetName()) // "organization_secret_scanning_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | No | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | No | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | No | The security alert number. |
| `publicly_leaked` | `bool` | No | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `map[string]any` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `map[string]any` | Yes | A GitHub user. |
| `repository` | `map[string]any` | Yes | A GitHub repository. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `map[string]any` | Yes | A GitHub user. |
| `secret` | `string` | No | The secret that was detected. |
| `secret_type` | `string` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | No | The REST API URL of the alert resource. |
| `validity` | `string` | No | The token status as of the latest validity check. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationSecretScanningAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationSecretScanningAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OutsideCollaboratorEntity

```go
outsideCollaborator := client.OutsideCollaborator(nil)
fmt.Println(outsideCollaborator.GetName()) // "outside_collaborator"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OutsideCollaborator(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OutsideCollaboratorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PackageEntity

```go
package_ := client.Package(nil)
fmt.Println(package_.GetName()) // "package"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `map[string]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `docker` | `map[string]any` | Yes |  |
| `github_id` | `int` | Yes | Unique identifier of the package. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Yes | Free storage space (GB) for GitHub Packages. |
| `license` | `string` | No |  |
| `metadata` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | The name of the package. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `package_html_url` | `string` | Yes |  |
| `package_type` | `string` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `int` | Yes | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `int` | Yes | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `version_count` | `int` | Yes | The number of versions of the package. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Package(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Package(nil).Load(map[string]any{"package_name": "package_name", "package_type": "package_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Package(nil).Remove(map[string]any{"package_name": "package_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PackageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PageEntity

```go
page := client.Page(nil)
fmt.Println(page.GetName()) // "page"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_type` | `string` | No | The process in which the Page will be built. |
| `cname` | `string` | Yes | The Pages site's custom domain |
| `custom_404` | `bool` | Yes | Whether the Page has a custom 404 page. |
| `html_url` | `string` | No | The web address the Page can be accessed from. |
| `https_certificate` | `map[string]any` | Yes |  |
| `https_enforced` | `bool` | No | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | No | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | No | The state if the domain is verified |
| `public` | `bool` | Yes | Whether the GitHub Pages site is publicly visible. |
| `source` | `map[string]any` | Yes | The source branch and directory used to publish your Pages site. |
| `status` | `string` | Yes | The status of the most recent build of the Page. |
| `url` | `string` | Yes | The API address for accessing this Page resource. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Page(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PageBuildEntity

```go
pageBuild := client.PageBuild(nil)
fmt.Println(pageBuild.GetName()) // "page_build"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `duration` | `int` | Yes |  |
| `error` | `map[string]any` | Yes |  |
| `id` | `string` | No |  |
| `pusher` | `map[string]any` | Yes | A GitHub user. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PageBuild(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PageBuild(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PageBuildEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PageBuildStatusEntity

```go
pageBuildStatus := client.PageBuildStatus(nil)
fmt.Println(pageBuildStatus.GetName()) // "page_build_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PageBuildStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PageDeploymentEntity

```go
pageDeployment := client.PageDeployment(nil)
fmt.Println(pageDeployment.GetName()) // "page_deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact_id` | `float64` | No | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | No | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | No | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | Yes | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | Yes | A unique string that represents the version of the build for this deployment. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PageDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PagesDeploymentStatusEntity

```go
pagesDeploymentStatus := client.PagesDeploymentStatus(nil)
fmt.Println(pagesDeploymentStatus.GetName()) // "pages_deployment_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No | The current status of the deployment. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PagesDeploymentStatus(nil).Load(map[string]any{"owner": "owner", "pages_deployment_id": "pages_deployment_id", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PagesDeploymentStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PagesHealthCheckEntity

```go
pagesHealthCheck := client.PagesHealthCheck(nil)
fmt.Println(pagesHealthCheck.GetName()) // "pages_health_check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_domain` | `map[string]any` | No |  |
| `domain` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PagesHealthCheck(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PagesHealthCheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ParticipationEntity

```go
participation := client.Participation(nil)
fmt.Println(participation.GetName()) // "participation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `[]any` | Yes |  |
| `owner` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Participation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ParticipationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PendingDeploymentEntity

```go
pendingDeployment := client.PendingDeployment(nil)
fmt.Println(pendingDeployment.GetName()) // "pending_deployment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_can_approve` | `bool` | Yes | Whether the currently authenticated user can approve the deployment |
| `environment` | `map[string]any` | Yes |  |
| `reviewers` | `[]any` | Yes | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | Yes | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | Yes | The time that the wait timer began. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PendingDeployment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PendingDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PorterAuthorEntity

```go
porterAuthor := client.PorterAuthor(nil)
fmt.Println(porterAuthor.GetName()) // "porter_author"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The new Git author email. |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PorterAuthor(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PorterAuthor(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PorterAuthorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PorterLargeFileEntity

```go
porterLargeFile := client.PorterLargeFile(nil)
fmt.Println(porterLargeFile.GetName()) // "porter_large_file"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oid` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `ref_name` | `string` | Yes |  |
| `size` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PorterLargeFile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PorterLargeFileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrivateRegistryEntity

```go
privateRegistry := client.PrivateRegistry(nil)
fmt.Println(privateRegistry.GetName()) // "private_registry"
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
| `selected_repository_ids` | `[]any` | No | An array of repository IDs that can access the organization private registry. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PrivateRegistry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PrivateRegistry(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PrivateRegistry(nil).Update(map[string]any{
    "id": "id",
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PrivateRegistry(nil).Remove(map[string]any{"id": "id", "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrivateRegistryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrivateUserEntity

```go
privateUser := client.PrivateUser(nil)
fmt.Println(privateUser.GetName()) // "private_user"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrivateUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `body` | `string` | No | The description of the project. |
| `columns_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The name of the project. |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes |  |
| `organization_permission` | `string` | No | The baseline permission that all organization members have on this project |
| `organizations_url` | `string` | Yes |  |
| `owner_url` | `string` | Yes |  |
| `private` | `bool` | No | Whether or not this project can be seen by everyone. |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectCollaboratorPermissionEntity

```go
projectCollaboratorPermission := client.ProjectCollaboratorPermission(nil)
fmt.Println(projectCollaboratorPermission.GetName()) // "project_collaborator_permission"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectCollaboratorPermission(nil).Load(map[string]any{"project_id": 1, "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectCollaboratorPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectColumnEntity

```go
projectColumn := client.ProjectColumn(nil)
fmt.Println(projectColumn.GetName()) // "project_column"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cards_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `int` | Yes | The unique identifier of the project column |
| `name` | `string` | Yes | Name of the project column |
| `node_id` | `string` | Yes |  |
| `project_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectColumn(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectColumn(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectColumn(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectColumnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsClassicEntity

```go
projectsClassic := client.ProjectsClassic(nil)
fmt.Println(projectsClassic.GetName()) // "projects_classic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `position` | `string` | Yes | The position of the column in a project. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectsClassic(nil).Update(map[string]any{
    "project_id": 1,
    "username": "username",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectsClassic(nil).Remove(map[string]any{"column_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsClassicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsV2Entity

```go
projectsV2 := client.ProjectsV2(nil)
fmt.Println(projectsV2.GetName()) // "projects_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes | The time when the project was closed. |
| `created_at` | `string` | Yes | The time when the project was created. |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `deleted_at` | `string` | Yes | The time when the project was deleted. |
| `deleted_by` | `map[string]any` | Yes | A GitHub user. |
| `description` | `string` | Yes | A short description of the project. |
| `id` | `float64` | Yes | The unique identifier of the project. |
| `is_template` | `bool` | No | Whether this project is a template |
| `latest_status_update` | `map[string]any` | Yes | An status update belonging to a project |
| `node_id` | `string` | Yes | The node ID of the project. |
| `number` | `int` | Yes | The project number. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `public` | `bool` | Yes | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | Yes | A concise summary of the project. |
| `state` | `string` | No | The current state of the project. |
| `title` | `string` | Yes | The project title. |
| `updated_at` | `string` | Yes | The time when the project was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectsV2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectsV2(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsV2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsV2FieldEntity

```go
projectsV2Field := client.ProjectsV2Field(nil)
fmt.Println(projectsV2Field.GetName()) // "projects_v2_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `map[string]any` | No | Configuration for iteration fields. |
| `created_at` | `string` | Yes | The time when the field was created. |
| `data_type` | `string` | Yes | The field's data type. |
| `id` | `int` | Yes | The unique identifier of the field. |
| `name` | `string` | Yes | The name of the field. |
| `node_id` | `string` | No | The node ID of the field. |
| `options` | `[]any` | No | The options available for single select fields. |
| `project_url` | `string` | Yes | The API URL of the project that contains the field. |
| `updated_at` | `string` | Yes | The time when the field was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectsV2Field(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectsV2Field(nil).Load(map[string]any{"id": 1, "projects_v2_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsV2FieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsV2ItemSimpleEntity

```go
projectsV2ItemSimple := client.ProjectsV2ItemSimple(nil)
fmt.Println(projectsV2ItemSimple.GetName()) // "projects_v2_item_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | Yes | The type of item to add to the project. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsV2ItemSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectsV2ItemWithContentEntity

```go
projectsV2ItemWithContent := client.ProjectsV2ItemWithContent(nil)
fmt.Println(projectsV2ItemWithContent.GetName()) // "projects_v2_item_with_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | Yes | The time when the item was archived. |
| `content` | `map[string]any` | No | The content of the item, which varies by content type. |
| `content_type` | `string` | Yes | The type of content tracked in a project item |
| `created_at` | `string` | Yes | The time when the item was created. |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `fields` | `[]any` | No | The fields and values associated with this item. |
| `id` | `float64` | Yes | The unique identifier of the project item. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectsV2ItemWithContent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProjectsV2ItemWithContent(nil).Load(map[string]any{"item_id": 1, "projects_v2_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectsV2ItemWithContent(nil).Update(map[string]any{
    "item_id": 1,
    "projects_v2_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectsV2ItemWithContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProtectedBranchEntity

```go
protectedBranch := client.ProtectedBranch(nil)
fmt.Println(protectedBranch.GetName()) // "protected_branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `map[string]any` | Yes | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `map[string]any` | Yes | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `map[string]any` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `map[string]any` | Yes | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `map[string]any` | Yes | Enforce all configured restrictions for administrators. |
| `lock_branch` | `map[string]any` | No | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `map[string]any` | No | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `map[string]any` | Yes | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `map[string]any` | Yes | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `map[string]any` | Yes |  |
| `required_status_checks` | `map[string]any` | Yes | Status Check Policy |
| `restrictions` | `map[string]any` | Yes | Branch Restriction Policy |
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProtectedBranch(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProtectedBranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProtectedBranchAdminEnforcedEntity

```go
protectedBranchAdminEnforced := client.ProtectedBranchAdminEnforced(nil)
fmt.Println(protectedBranchAdminEnforced.GetName()) // "protected_branch_admin_enforced"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProtectedBranchAdminEnforced(nil).Load(map[string]any{"branch_id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProtectedBranchAdminEnforcedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProtectedBranchPullRequestReviewEntity

```go
protectedBranchPullRequestReview := client.ProtectedBranchPullRequestReview(nil)
fmt.Println(protectedBranchPullRequestReview.GetName()) // "protected_branch_pull_request_review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_pull_request_allowances` | `map[string]any` | No | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Yes | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `map[string]any` | No | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `bool` | Yes | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `bool` | No | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `int` | No | Specifies the number of reviewers required to approve pull requests. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProtectedBranchPullRequestReview(nil).Load(map[string]any{"branch_id": "branch_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProtectedBranchPullRequestReview(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProtectedBranchPullRequestReviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PublicMemberEntity

```go
publicMember := client.PublicMember(nil)
fmt.Println(publicMember.GetName()) // "public_member"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PublicMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PullEntity

```go
pull := client.Pull(nil)
fmt.Println(pull.GetName()) // "pull"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `additions` | `int` | Yes |  |
| `assignee` | `map[string]any` | Yes | A GitHub user. |
| `assignees` | `[]any` | No |  |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `auto_merge` | `map[string]any` | Yes | The status of auto merging a pull request. |
| `base` | `map[string]any` | Yes | The name of the branch you want the changes pulled into. |
| `body` | `string` | Yes | The contents of the pull request. |
| `changed_files` | `int` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `comments` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_message` | `string` | No | Extra detail to append to automatic commit message. |
| `commit_title` | `string` | No | Title for the automatic commit message. |
| `commits` | `int` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deletions` | `int` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `draft` | `bool` | No | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `string` | No | The expected SHA of the pull request's HEAD ref. |
| `head` | `map[string]any` | Yes | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | No | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `issue` | `int` | No | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `links` | `map[string]any` | Yes |  |
| `locked` | `bool` | Yes |  |
| `maintainer_can_modify` | `bool` | Yes | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` | Yes |  |
| `merge_method` | `string` | No | The merge method to use. |
| `mergeable` | `bool` | Yes |  |
| `mergeable_state` | `string` | Yes |  |
| `merged` | `bool` | Yes |  |
| `merged_at` | `string` | Yes |  |
| `merged_by` | `map[string]any` | Yes | A GitHub user. |
| `message` | `string` | Yes |  |
| `milestone` | `map[string]any` | Yes | A collection of related issues and pull requests. |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` | Yes |  |
| `rebaseable` | `bool` | No |  |
| `requested_reviewers` | `[]any` | No |  |
| `requested_teams` | `[]any` | No |  |
| `review_comment_url` | `string` | Yes |  |
| `review_comments` | `int` | Yes |  |
| `review_comments_url` | `string` | Yes |  |
| `sha` | `string` | Yes | SHA that pull request head must match to allow merge. |
| `state` | `string` | Yes | State of this Pull Request. |
| `statuses_url` | `string` | Yes |  |
| `title` | `string` | Yes | The title of the pull request. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Pull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Pull(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Pull(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Pull(nil).Remove(map[string]any{"comment_id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PullEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PullRequestReviewEntity

```go
pullRequestReview := client.PullRequestReview(nil)
fmt.Println(pullRequestReview.GetName()) // "pull_request_review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The text of the review. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `comments` | `[]any` | No | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | Yes | A commit SHA for the review. |
| `event` | `string` | Yes | The review action you want to perform. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the review |
| `links` | `map[string]any` | Yes |  |
| `message` | `string` | Yes | The message for the pull request review dismissal |
| `node_id` | `string` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `submitted_at` | `string` | No |  |
| `teams` | `[]any` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `users` | `[]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PullRequestReview(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PullRequestReview(nil).Load(map[string]any{"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PullRequestReview(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "pull_id": 1,
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PullRequestReview(nil).Remove(map[string]any{"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PullRequestReviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PullRequestReviewCommentEntity

```go
pullRequestReviewComment := client.PullRequestReviewComment(nil)
fmt.Println(pullRequestReviewComment.GetName()) // "pull_request_review_comment"
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
| `id` | `int` | Yes | The ID of the pull request review comment. |
| `in_reply_to` | `int` | No | The ID of the review comment to reply to. |
| `in_reply_to_id` | `int` | No | The comment ID to reply to. |
| `line` | `int` | No | The line of the blob to which the comment applies. |
| `links` | `map[string]any` | Yes |  |
| `node_id` | `string` | Yes | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | Yes | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | No | The line of the blob to which the comment applies. |
| `original_position` | `int` | No | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `path` | `string` | Yes | The relative path of the file to which the comment applies. |
| `position` | `int` | No | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | Yes | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | Yes | URL for the pull request that the review comment belongs to. |
| `reactions` | `map[string]any` | Yes |  |
| `side` | `string` | No | The side of the diff to which the comment applies. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the pull request review comment |
| `user` | `map[string]any` | Yes | A GitHub user. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PullRequestReviewComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PullRequestReviewComment(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PullRequestReviewComment(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PullRequestReviewCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PullRequestSimpleEntity

```go
pullRequestSimple := client.PullRequestSimple(nil)
fmt.Println(pullRequestSimple.GetName()) // "pull_request_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewers` | `[]any` | No | An array of user `login`s that will be requested. |
| `team_reviewers` | `[]any` | No | An array of team `slug`s that will be requested. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PullRequestSimple(nil).Remove(map[string]any{"owner": "owner", "pull_number": 1, "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PullRequestSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RateLimitEntity

```go
rateLimit := client.RateLimit(nil)
fmt.Println(rateLimit.GetName()) // "rate_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate` | `map[string]any` | Yes |  |
| `resources` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RateLimit(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RateLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReactionEntity

```go
reaction := client.Reaction(nil)
fmt.Println(reaction.GetName()) // "reaction"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Reaction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Reaction(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReferrerEntity

```go
referrer := client.Referrer(nil)
fmt.Println(referrer.GetName()) // "referrer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `referrer` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Referrer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReferrerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseEntity

```go
release := client.Release(nil)
fmt.Println(release.GetName()) // "release"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `[]any` | Yes |  |
| `assets_url` | `string` | Yes |  |
| `author` | `map[string]any` | Yes | A GitHub user. |
| `body` | `string` | No | Text describing the contents of the tag. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `browser_download_url` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `digest` | `string` | Yes |  |
| `discussion_category_name` | `string` | No | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `string` | No | The URL of the release discussion. |
| `download_count` | `int` | Yes |  |
| `draft` | `bool` | Yes | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `bool` | No | Whether to automatically generate the name and body for this release. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `immutable` | `bool` | No | Whether or not the release is immutable. |
| `label` | `string` | Yes |  |
| `make_latest` | `string` | No | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `int` | No |  |
| `name` | `string` | Yes | The name of the release. |
| `node_id` | `string` | Yes |  |
| `prerelease` | `bool` | Yes | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `string` | Yes |  |
| `reactions` | `map[string]any` | Yes |  |
| `size` | `int` | Yes |  |
| `state` | `string` | Yes | State of the release asset. |
| `tag_name` | `string` | Yes | The name of the tag. |
| `tarball_url` | `string` | Yes |  |
| `target_commitish` | `string` | Yes | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` | No |  |
| `upload_url` | `string` | Yes |  |
| `uploader` | `map[string]any` | Yes | A GitHub user. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Release(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Release(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Release(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseAssetEntity

```go
releaseAsset := client.ReleaseAsset(nil)
fmt.Println(releaseAsset.GetName()) // "release_asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `browser_download_url` | `string` | No |  |
| `content_type` | `string` | No |  |
| `created_at` | `string` | No |  |
| `digest` | `string` | No |  |
| `download_count` | `int` | No |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `label` | `string` | No | An alternate short description of the asset. |
| `login` | `string` | Yes |  |
| `name` | `string` | No | The file name of the asset. |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | No |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | No | State of the release asset. |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `uploader` | `map[string]any` | No | A GitHub user. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReleaseAsset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReleaseAsset(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReleaseAsset(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseAssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReleaseNotesContentEntity

```go
releaseNotesContent := client.ReleaseNotesContent(nil)
fmt.Println(releaseNotesContent.GetName()) // "release_notes_content"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReleaseNotesContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemoveEntity

```go
remove := client.Remove(nil)
fmt.Println(remove.GetName()) // "remove"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `[]any` | Yes | The GitHub user handles to be removed from the team. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepoEntity

```go
repo := client.Repo(nil)
fmt.Println(repo.GetName()) // "repo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `app` | `map[string]any` | Yes | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `attestations` | `[]any` | No |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `build_type` | `string` | No | The process by which the GitHub Pages site will be built. |
| `bundle` | `map[string]any` | Yes | The attestation's Sigstore Bundle. |
| `client_payload` | `map[string]any` | No | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` | Yes |  |
| `cname` | `string` | No | Specify a custom domain for the repository. |
| `code_search_index_status` | `map[string]any` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `content` | `string` | No |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `default_branch_only` | `bool` | No | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `map[string]any` | Yes | The type of deployment branch policy for this environment. |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `download_url` | `string` | No |  |
| `downloads_url` | `string` | Yes |  |
| `enabled` | `bool` | Yes | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `string` | No |  |
| `event_type` | `string` | Yes | A custom webhook event name. |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | No |  |
| `github_id` | `int` | Yes | Unique identifier of the repository |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | No |  |
| `https_enforced` | `bool` | No | Specify whether HTTPS should be enforced for the repository. |
| `id` | `string` | Yes | Unique identifier of the repository |
| `integration_url` | `string` | Yes | The URL for the endpoint to get details about the app. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `links` | `map[string]any` | No |  |
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
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `string` | No | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `path` | `string` | No |  |
| `permissions` | `map[string]any` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `properties` | `[]any` | Yes | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `[]any` | No | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `sha` | `string` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `slug` | `string` | Yes | The slugified name of the deployment protection rule integration. |
| `source` | `any` | No |  |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_ids` | `[]any` | No | ID of the team or teams to add to the repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `string` | No | Whether this rule targets a branch or tag. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | No |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Repo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Repo(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Repo(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Repo(nil).Remove(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryEntity

```go
repository := client.Repository(nil)
fmt.Println(repository.GetName()) // "repository"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_search_index_status` | `map[string]any` | No | The status of the code search index for this repository |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `license` | `map[string]any` | Yes | License Simple |
| `master_branch` | `string` | No |  |
| `merge_commit_message` | `string` | No | The default value for a merge commit message. |
| `merge_commit_title` | `string` | No | The default value for a merge commit title. |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `permissions` | `map[string]any` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `string` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `string` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Repository(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryAdvisoryEntity

```go
repositoryAdvisory := client.RepositoryAdvisory(nil)
fmt.Println(repositoryAdvisory.GetName()) // "repository_advisory"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `any` | Yes | The author of the advisory. |
| `closed_at` | `string` | Yes | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `[]any` | Yes | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `[]any` | Yes | A list of users that collaborate on the advisory. |
| `created_at` | `string` | Yes | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `[]any` | Yes | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `[]any` | Yes |  |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `map[string]any` | Yes |  |
| `cvss_severities` | `map[string]any` | No |  |
| `cvss_vector_string` | `string` | No | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `[]any` | Yes | A list of only the CWE IDs. |
| `cwes` | `[]any` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `identifiers` | `[]any` | Yes |  |
| `private_fork` | `any` | Yes | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `any` | Yes | The publisher of the advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `start_private_fork` | `bool` | No | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | Yes | The state of the advisory. |
| `submission` | `map[string]any` | Yes |  |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `[]any` | Yes | A product affected by the vulnerability detailed in a repository security advisory. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryAdvisory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryAdvisory(nil).Load(map[string]any{"ghsa_id": "ghsa_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryAdvisory(nil).Update(map[string]any{
    "ghsa_id": "ghsa_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryAdvisoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryCollaboratorPermissionEntity

```go
repositoryCollaboratorPermission := client.RepositoryCollaboratorPermission(nil)
fmt.Println(repositoryCollaboratorPermission.GetName()) // "repository_collaborator_permission"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `permissions` | `map[string]any` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `role_name` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryCollaboratorPermission(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryCollaboratorPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryInvitationEntity

```go
repositoryInvitation := client.RepositoryInvitation(nil)
fmt.Println(repositoryInvitation.GetName()) // "repository_invitation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `expired` | `bool` | No | Whether or not the invitation has expired |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository invitation. |
| `invitee` | `map[string]any` | Yes | A GitHub user. |
| `inviter` | `map[string]any` | Yes | A GitHub user. |
| `node_id` | `string` | Yes |  |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `permissions` | `string` | Yes | The permission associated with the invitation. |
| `repository` | `map[string]any` | Yes | Minimal Repository |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryInvitation(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    "username": "username",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryInvitationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryRuleDetailedEntity

```go
repositoryRuleDetailed := client.RepositoryRuleDetailed(nil)
fmt.Println(repositoryRuleDetailed.GetName()) // "repository_rule_detailed"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameters` | `map[string]any` | No |  |
| `ruleset_id` | `int` | No |  |
| `ruleset_source` | `string` | No |  |
| `ruleset_source_type` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryRuleDetailed(nil).Load(map[string]any{"branch": "branch", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryRuleDetailedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositoryRulesetEntity

```go
repositoryRuleset := client.RepositoryRuleset(nil)
fmt.Println(repositoryRuleset.GetName()) // "repository_ruleset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_actors` | `[]any` | No | The actors that can bypass the rules in this ruleset |
| `conditions` | `any` | No | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` | No |  |
| `current_user_can_bypass` | `string` | No | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | Yes | The enforcement level of the ruleset. |
| `id` | `int` | Yes | The ID of the ruleset |
| `links` | `map[string]any` | No |  |
| `name` | `string` | Yes | The name of the ruleset |
| `node_id` | `string` | No |  |
| `rules` | `[]any` | No | An array of rules within the ruleset. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RepositoryRuleset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositoryRuleset(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositoryRuleset(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositoryRulesetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RepositorySubscriptionEntity

```go
repositorySubscription := client.RepositorySubscription(nil)
fmt.Println(repositorySubscription.GetName()) // "repository_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `ignored` | `bool` | Yes | Determines if all notifications should be blocked from this repository. |
| `reason` | `string` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `subscribed` | `bool` | Yes | Determines if notifications should be received from this repository. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RepositorySubscription(nil).Load(map[string]any{"owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RepositorySubscription(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RepositorySubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReviewCommentEntity

```go
reviewComment := client.ReviewComment(nil)
fmt.Println(reviewComment.GetName()) // "review_comment"
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
| `id` | `int` | Yes |  |
| `in_reply_to_id` | `int` | No |  |
| `line` | `int` | No | The line of the blob to which the comment applies. |
| `links` | `map[string]any` | Yes |  |
| `node_id` | `string` | Yes |  |
| `original_commit_id` | `string` | Yes |  |
| `original_line` | `int` | No | The original line of the blob to which the comment applies. |
| `original_position` | `int` | Yes |  |
| `original_start_line` | `int` | No | The original first line of the range for a multi-line comment. |
| `path` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `pull_request_review_id` | `int` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `reactions` | `map[string]any` | Yes |  |
| `side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReviewComment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReviewCommentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RuleSuiteEntity

```go
ruleSuite := client.RuleSuite(nil)
fmt.Println(ruleSuite.GetName()) // "rule_suite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `int` | No | The number that identifies the user. |
| `actor_name` | `string` | No | The handle for the GitHub user account. |
| `after_sha` | `string` | No | The new commit SHA of the ref. |
| `before_sha` | `string` | No | The previous commit SHA of the ref. |
| `evaluation_result` | `string` | No | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `int` | No | The unique identifier of the rule insight. |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | No | The ref name that the evaluation ran on. |
| `repository_id` | `int` | No | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `string` | No | The name of the repository without the `.git` extension. |
| `result` | `string` | No | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `[]any` | No | Details on the evaluated rules. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RuleSuite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RuleSuite(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RuleSuiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RulesetVersionEntity

```go
rulesetVersion := client.RulesetVersion(nil)
fmt.Println(rulesetVersion.GetName()) // "ruleset_version"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | Yes | The actor who updated the ruleset |
| `id` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RulesetVersion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RulesetVersionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RulesetVersionWithStateEntity

```go
rulesetVersionWithState := client.RulesetVersionWithState(nil)
fmt.Println(rulesetVersionWithState.GetName()) // "ruleset_version_with_state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | Yes | The actor who updated the ruleset |
| `state` | `map[string]any` | Yes | The state of the ruleset version |
| `updated_at` | `string` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RulesetVersionWithState(nil).Load(map[string]any{"ruleset_id": 1, "version_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RulesetVersionWithStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RunnerEntity

```go
runner := client.Runner(nil)
fmt.Println(runner.GetName()) // "runner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `busy` | `bool` | Yes |  |
| `ephemeral` | `bool` | No |  |
| `id` | `int` | Yes | The ID of the runner. |
| `labels` | `[]any` | Yes |  |
| `name` | `string` | Yes | The name of the runner. |
| `os` | `string` | Yes | The Operating System of the runner. |
| `runner_group_id` | `int` | No | The ID of the runner group. |
| `status` | `string` | Yes | The status of the runner. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Runner(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RunnerApplicationEntity

```go
runnerApplication := client.RunnerApplication(nil)
fmt.Println(runnerApplication.GetName()) // "runner_application"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RunnerApplication(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RunnerApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RunnerGroupEntity

```go
runnerGroup := client.RunnerGroup(nil)
fmt.Println(runnerGroup.GetName()) // "runner_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_public_repositories` | `bool` | Yes | Whether the runner group can be used by `public` repositories. |
| `default` | `bool` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `id` | `float64` | Yes |  |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `name` | `string` | Yes | Name of the runner group. |
| `network_configuration_id` | `string` | No | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `[]any` | No | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `[]any` | No | List of repository IDs that can access the runner group. |
| `selected_workflows` | `[]any` | No | List of workflows the runner group should be allowed to run. |
| `visibility` | `string` | Yes | Visibility of a runner group. |
| `workflow_restrictions_read_only` | `bool` | No | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RunnerGroup(nil).Load(map[string]any{"id": 1, "org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.RunnerGroup(nil).Update(map[string]any{
    "id": 1,
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RunnerGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `aliases` | `[]any` | No |  |
| `allow_auto_merge` | `bool` | No |  |
| `allow_forking` | `bool` | No |  |
| `allow_merge_commit` | `bool` | No |  |
| `allow_rebase_merge` | `bool` | No |  |
| `allow_squash_merge` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `assignee` | `map[string]any` | Yes | A GitHub user. |
| `assignees` | `[]any` | No |  |
| `assignees_url` | `string` | Yes |  |
| `author` | `map[string]any` | Yes | A GitHub user. |
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
| `comments` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit` | `map[string]any` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `committer` | `map[string]any` | Yes | Metaproperties for Git author/committer information. |
| `company` | `string` | No |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `curated` | `bool` | Yes |  |
| `default` | `bool` | Yes |  |
| `default_branch` | `string` | Yes |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `display_name` | `string` | Yes |  |
| `downloads_url` | `string` | Yes |  |
| `draft` | `bool` | No |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `featured` | `bool` | Yes |  |
| `file_size` | `int` | No |  |
| `followers` | `int` | No |  |
| `followers_url` | `string` | Yes |  |
| `following` | `int` | No |  |
| `following_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | Yes |  |
| `has_issues` | `bool` | Yes |  |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes |  |
| `has_wiki` | `bool` | Yes |  |
| `hireable` | `bool` | No |  |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `string` | Yes |  |
| `issue_dependencies_summary` | `map[string]any` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issue_field_values` | `[]any` | No |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels` | `[]any` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_modified_at` | `string` | No |  |
| `license` | `map[string]any` | Yes | License Simple |
| `line_numbers` | `[]any` | No |  |
| `location` | `string` | No |  |
| `locked` | `bool` | Yes |  |
| `login` | `string` | Yes |  |
| `logo_url` | `string` | No |  |
| `master_branch` | `string` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestone` | `map[string]any` | Yes | A collection of related issues and pull requests. |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `number` | `int` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `parents` | `[]any` | Yes |  |
| `path` | `string` | Yes |  |
| `performed_via_github_app` | `map[string]any` | Yes | GitHub apps are a new way to extend GitHub. |
| `permissions` | `map[string]any` | Yes |  |
| `private` | `bool` | Yes |  |
| `public_gists` | `int` | No |  |
| `public_repos` | `int` | No |  |
| `pull_request` | `map[string]any` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `map[string]any` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `related` | `[]any` | No |  |
| `released` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository` | `map[string]any` | Yes | A repository on GitHub. |
| `repository_count` | `int` | No |  |
| `repository_url` | `string` | Yes |  |
| `score` | `float64` | Yes |  |
| `sha` | `string` | Yes |  |
| `short_description` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes |  |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `state_reason` | `string` | No |  |
| `statuses_url` | `string` | Yes |  |
| `sub_issues_summary` | `map[string]any` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `suspended_at` | `string` | No |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `text_matches` | `[]any` | No |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes |  |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `map[string]any` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `map[string]any` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningEntity

```go
secretScanning := client.SecretScanning(nil)
fmt.Println(secretScanning.GetName()) // "secret_scanning"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_settings` | `[]any` | No | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | No | The updated pattern configuration version. |
| `provider_pattern_settings` | `[]any` | No | Pattern settings for provider patterns. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SecretScanning(nil).Update(map[string]any{
    "org_id": "org_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningAlertEntity

```go
secretScanningAlert := client.SecretScanningAlert(nil)
fmt.Println(secretScanningAlert.GetName()) // "secret_scanning_alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | No | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `is_base64_encoded` | `bool` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | No | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `int` | No | The security alert number. |
| `publicly_leaked` | `bool` | No | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `map[string]any` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `map[string]any` | Yes | A GitHub user. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | An optional comment to resolve an alert. |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `map[string]any` | Yes | A GitHub user. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SecretScanningAlert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SecretScanningAlert(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SecretScanningAlert(nil).Update(map[string]any{
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningAlertEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningLocationEntity

```go
secretScanningLocation := client.SecretScanningLocation(nil)
fmt.Println(secretScanningLocation.GetName()) // "secret_scanning_location"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `any` | No |  |
| `type` | `string` | No | The location type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SecretScanningLocation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningLocationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningPatternConfigurationEntity

```go
secretScanningPatternConfiguration := client.SecretScanningPatternConfiguration(nil)
fmt.Println(secretScanningPatternConfiguration.GetName()) // "secret_scanning_pattern_configuration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_overrides` | `[]any` | No | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | No | The version of the entity. |
| `provider_pattern_overrides` | `[]any` | No | Overrides for partner patterns. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SecretScanningPatternConfiguration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningPatternConfigurationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningPushProtectionBypassEntity

```go
secretScanningPushProtectionBypass := client.SecretScanningPushProtectionBypass(nil)
fmt.Println(secretScanningPushProtectionBypass.GetName()) // "secret_scanning_push_protection_bypass"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningPushProtectionBypassEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecretScanningScanHistoryEntity

```go
secretScanningScanHistory := client.SecretScanningScanHistory(nil)
fmt.Println(secretScanningScanHistory.GetName()) // "secret_scanning_scan_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backfill_scans` | `[]any` | No |  |
| `custom_pattern_backfill_scans` | `[]any` | No |  |
| `incremental_scans` | `[]any` | No |  |
| `pattern_update_scans` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SecretScanningScanHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretScanningScanHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SecurityAdvisoryEntity

```go
securityAdvisory := client.SecurityAdvisory(nil)
fmt.Println(securityAdvisory.GetName()) // "security_advisory"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecurityAdvisoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SelectedActionEntity

```go
selectedAction := client.SelectedAction(nil)
fmt.Println(selectedAction.GetName()) // "selected_action"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `github_owned_allowed` | `bool` | No | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `[]any` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | No | Whether actions from GitHub Marketplace verified creators are allowed. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SelectedAction(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SelectedActionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SelfHostedRunnerEntity

```go
selfHostedRunner := client.SelfHostedRunner(nil)
fmt.Println(selfHostedRunner.GetName()) // "self_hosted_runner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_repositories` | `string` | Yes | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | No | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SelfHostedRunner(nil).Load(map[string]any{"org_id": "org_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SelfHostedRunnerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShortBlobEntity

```go
shortBlob := client.ShortBlob(nil)
fmt.Println(shortBlob.GetName()) // "short_blob"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The new blob's content. |
| `encoding` | `string` | No | The encoding used for `content`. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShortBlobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShortBranchEntity

```go
shortBranch := client.ShortBranch(nil)
fmt.Println(shortBranch.GetName()) // "short_branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `bool` | Yes |  |
| `protection` | `map[string]any` | No | Branch Protection |
| `protection_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ShortBranch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShortBranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimpleClassroomEntity

```go
simpleClassroom := client.SimpleClassroom(nil)
fmt.Println(simpleClassroom.GetName()) // "simple_classroom"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimpleClassroomEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SimpleClassroomAssignmentEntity

```go
simpleClassroomAssignment := client.SimpleClassroomAssignment(nil)
fmt.Println(simpleClassroomAssignment.GetName()) // "simple_classroom_assignment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `map[string]any` | Yes | A GitHub Classroom classroom |
| `deadline` | `string` | Yes | The time at which the assignment is due. |
| `editor` | `string` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Yes | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `string` | Yes | The link that a student can use to accept the assignment. |
| `language` | `string` | Yes | The programming language used in the assignment. |
| `max_members` | `int` | No | The maximum allowable members per team. |
| `max_teams` | `int` | No | The maximum allowable teams for the assignment. |
| `passing` | `int` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `string` | Yes | Sluggified name of the assignment. |
| `students_are_repo_admins` | `bool` | Yes | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `int` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a Group Assignment or Individual Assignment. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SimpleClassroomAssignment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SimpleClassroomAssignmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SocialAccountEntity

```go
socialAccount := client.SocialAccount(nil)
fmt.Println(socialAccount.GetName()) // "social_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_urls` | `[]any` | Yes | Full URLs for the social media profiles to add. |
| `provider` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SocialAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SocialAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SshSigningKeyEntity

```go
sshSigningKey := client.SshSigningKey(nil)
fmt.Println(sshSigningKey.GetName()) // "ssh_signing_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SshSigningKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SshSigningKey(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SshSigningKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StatusEntity

```go
status := client.Status(nil)
fmt.Println(status.GetName()) // "status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | No | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `description` | `string` | No | A short description of the status. |
| `id` | `int` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Status(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StatusCheckPolicyEntity

```go
statusCheckPolicy := client.StatusCheckPolicy(nil)
fmt.Println(statusCheckPolicy.GetName()) // "status_check_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes |  |
| `checks` | `[]any` | Yes | The list of status checks to require in order to merge into this branch. |
| `context` | `string` | Yes |  |
| `contexts` | `[]any` | Yes | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `string` | Yes |  |
| `strict` | `bool` | Yes | Require branches to be up to date before merging. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.StatusCheckPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.StatusCheckPolicy(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusCheckPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriberEntity

```go
subscriber := client.Subscriber(nil)
fmt.Println(subscriber.GetName()) // "subscriber"
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
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `name` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user_view_type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subscriber(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `tarball_url` | `string` | Yes |  |
| `zipball_url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagProtectionEntity

```go
tagProtection := client.TagProtection(nil)
fmt.Println(tagProtection.GetName()) // "tag_protection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `int` | No |  |
| `pattern` | `string` | Yes | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TagProtection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagProtectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `assignment` | `string` | No | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `map[string]any` | Yes | A GitHub user. |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `body` | `string` | Yes | The main text of the comment. |
| `body_html` | `string` | Yes |  |
| `body_version` | `string` | Yes | The current version of the body content. |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `map[string]any` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `columns_url` | `string` | Yes |  |
| `comments_count` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes | A GitHub user. |
| `custom_properties` | `map[string]any` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes | The description of the team. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `discussion_url` | `string` | Yes |  |
| `downloads_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `events_url` | `string` | Yes |  |
| `failed_at` | `string` | No |  |
| `failed_reason` | `string` | No |  |
| `followers_url` | `string` | Yes |  |
| `following_url` | `string` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `gists_url` | `string` | Yes |  |
| `git_commits_url` | `string` | Yes |  |
| `git_refs_url` | `string` | Yes |  |
| `git_tags_url` | `string` | Yes |  |
| `git_url` | `string` | Yes |  |
| `gravatar_id` | `string` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `string` | Yes |  |
| `hooks_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `invitation_source` | `string` | No |  |
| `invitation_teams_url` | `string` | Yes |  |
| `inviter` | `map[string]any` | Yes | A GitHub user. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `languages_url` | `string` | Yes |  |
| `last_edited_at` | `string` | Yes |  |
| `ldap_dn` | `string` | No | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `map[string]any` | Yes | License Simple |
| `login` | `string` | Yes |  |
| `maintainers` | `[]any` | No | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `string` | No |  |
| `members_count` | `int` | Yes |  |
| `members_url` | `string` | Yes |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes | The name of the repository. |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notification_setting` | `string` | No | The notification setting the team has set |
| `notifications_url` | `string` | Yes |  |
| `number` | `int` | Yes | The unique sequence number of a team discussion comment. |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `map[string]any` | Yes | Team Organization |
| `organization_permission` | `string` | No | The organization permission for this project. |
| `organizations_url` | `string` | Yes |  |
| `owner` | `map[string]any` | Yes | A GitHub user. |
| `owner_url` | `string` | Yes |  |
| `parent` | `map[string]any` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | No | The ID of a team to set as the parent team. |
| `permission` | `string` | Yes | Permission that the team will have for its repositories |
| `permissions` | `map[string]any` | Yes |  |
| `pinned` | `bool` | Yes | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | No | The level of privacy this team should have |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `map[string]any` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repo_names` | `[]any` | No | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `role` | `string` | Yes | The role of the user in the team. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `map[string]any` | No |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `slug` | `string` | Yes |  |
| `ssh_url` | `string` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `string` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | Yes |  |
| `state` | `string` | Yes | The state of the user's membership in the team. |
| `statuses_url` | `string` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `team_count` | `int` | Yes |  |
| `team_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `title` | `string` | Yes | The title of the discussion. |
| `topics` | `[]any` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the team |
| `user_view_type` | `string` | No |  |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Team(nil).Update(map[string]any{
    "id": 1,
    "project_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Team(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamSimpleEntity

```go
teamSimple := client.TeamSimple(nil)
fmt.Println(teamSimple.GetName()) // "team_simple"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the team |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the team |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TeamSimple(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamSimpleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreadEntity

```go
thread := client.Thread(nil)
fmt.Println(thread.GetName()) // "thread"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `last_read_at` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `subject` | `map[string]any` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `unread` | `bool` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Thread(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Thread(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Thread(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ThreadSubscriptionEntity

```go
threadSubscription := client.ThreadSubscription(nil)
fmt.Println(threadSubscription.GetName()) // "thread_subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `ignored` | `bool` | Yes | Whether to block all notifications from a thread. |
| `reason` | `string` | Yes |  |
| `repository_url` | `string` | No |  |
| `subscribed` | `bool` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ThreadSubscription(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ThreadSubscription(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ThreadSubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopicEntity

```go
topic := client.Topic(nil)
fmt.Println(topic.GetName()) // "topic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `names` | `[]any` | Yes | An array of topics to add to the repository. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Topic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Topic(nil).Update(map[string]any{
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `string` | No | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `map[string]any` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `string` | No |  |
| `bio` | `string` | No | The new short biography of the user. |
| `blog` | `string` | No | The new blog URL of the user. |
| `collaborators` | `int` | No |  |
| `company` | `string` | No | The new company of the user. |
| `created_at` | `string` | No |  |
| `disk_usage` | `int` | No |  |
| `email` | `string` | No | The publicly visible email address of the user. |
| `events_url` | `string` | No |  |
| `followers` | `int` | No |  |
| `followers_url` | `string` | No |  |
| `following` | `int` | No |  |
| `following_url` | `string` | No |  |
| `gists_url` | `string` | No |  |
| `gravatar_id` | `string` | No |  |
| `hireable` | `bool` | No | The new hiring availability of the user. |
| `html_url` | `string` | No |  |
| `id` | `int` | No |  |
| `inherited_from` | `[]any` | No | Team the user has gotten the role through |
| `location` | `string` | No | The new location of the user. |
| `login` | `string` | No |  |
| `name` | `string` | No | The new name of the user. |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `owned_private_repos` | `int` | No |  |
| `page_info` | `map[string]any` | No | Information about the current page. |
| `plan` | `map[string]any` | No |  |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `int` | No |  |
| `private_repos` | `int` | Yes |  |
| `public_gists` | `int` | No |  |
| `public_repos` | `int` | No |  |
| `received_events_url` | `string` | No |  |
| `repos_url` | `string` | No |  |
| `site_admin` | `bool` | No |  |
| `space` | `int` | Yes |  |
| `starred_at` | `string` | No |  |
| `starred_url` | `string` | No |  |
| `subject_digests` | `[]any` | Yes | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` | No |  |
| `total_private_repos` | `int` | No |  |
| `twitter_username` | `string` | No | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `users` | `[]any` | Yes | The username for users |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.User(nil).Update(map[string]any{
    "id": 1,
    "username": "username",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.User(nil).Remove(map[string]any{"gpg_key_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserMarketplacePurchaseEntity

```go
userMarketplacePurchase := client.UserMarketplacePurchase(nil)
fmt.Println(userMarketplacePurchase.GetName()) // "user_marketplace_purchase"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `map[string]any` | Yes |  |
| `billing_cycle` | `string` | Yes |  |
| `free_trial_ends_on` | `string` | Yes |  |
| `next_billing_date` | `string` | Yes |  |
| `on_free_trial` | `bool` | Yes |  |
| `plan` | `map[string]any` | Yes | Marketplace Listing Plan |
| `unit_count` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserMarketplacePurchase(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserMarketplacePurchaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ViewEntity

```go
view := client.View(nil)
fmt.Println(view.GetName()) // "view"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.View(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ViewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookConfigEntity

```go
webhookConfig := client.WebhookConfig(nil)
fmt.Println(webhookConfig.GetName()) // "webhook_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` | No |  |
| `secret` | `string` | No | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | No | The URL to which the payloads will be delivered. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhookConfig(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.WebhookConfig(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badge_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Workflow(nil).Update(map[string]any{
    "id": "workflow_id",
    "owner": "owner",
    "repo": "repo",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowRunEntity

```go
workflowRun := client.WorkflowRun(nil)
fmt.Println(workflowRun.GetName()) // "workflow_run"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `map[string]any` | Yes | A GitHub user. |
| `artifacts_url` | `string` | Yes | The URL to the artifacts for the workflow run. |
| `cancel_url` | `string` | Yes | The URL to cancel the workflow run. |
| `check_suite_id` | `int` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `string` | No | The node ID of the associated check suite. |
| `check_suite_url` | `string` | Yes | The URL to the associated check suite. |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `display_title` | `string` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `map[string]any` | Yes | A commit. |
| `head_repository` | `map[string]any` | Yes | Minimal Repository |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the workflow run. |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `name` | `string` | No | The name of the workflow run. |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes | The full path of the workflow |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `[]any` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `[]any` | No |  |
| `repository` | `map[string]any` | Yes | Minimal Repository |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `run_attempt` | `int` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `status` | `string` | Yes |  |
| `triggering_actor` | `map[string]any` | Yes | A GitHub user. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | The URL to the workflow run. |
| `workflow_id` | `int` | Yes | The ID of the parent workflow. |
| `workflow_url` | `string` | Yes | The URL to the workflow. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkflowRun(nil).Load(map[string]any{"id": 1, "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowRunUsageEntity

```go
workflowRunUsage := client.WorkflowRunUsage(nil)
fmt.Println(workflowRunUsage.GetName()) // "workflow_run_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `map[string]any` | Yes |  |
| `UBUNTU` | `map[string]any` | Yes |  |
| `WINDOWS` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkflowRunUsage(nil).Load(map[string]any{"owner": "owner", "repo": "repo", "run_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowRunUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkflowUsageEntity

```go
workflowUsage := client.WorkflowUsage(nil)
fmt.Println(workflowUsage.GetName()) // "workflow_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `map[string]any` | No |  |
| `UBUNTU` | `map[string]any` | No |  |
| `WINDOWS` | `map[string]any` | No |  |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkflowUsage(nil).Load(map[string]any{"id": "workflow_usage_id", "owner": "owner", "repo": "repo"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewGithubSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

