# Github Python SDK Reference

Complete API reference for the Github Python SDK.


## GithubSDK

### Constructor

```python
from github_sdk import GithubSDK

client = GithubSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = GithubSDK.test()
```


### Instance Methods

#### `Action(data=None)`

Create a new `ActionEntity` instance. Pass `None` for no initial data.

#### `ActionsArtifactAndLogRetention(data=None)`

Create a new `ActionsArtifactAndLogRetentionEntity` instance. Pass `None` for no initial data.

#### `ActionsCacheList(data=None)`

Create a new `ActionsCacheListEntity` instance. Pass `None` for no initial data.

#### `ActionsCacheUsageByRepository(data=None)`

Create a new `ActionsCacheUsageByRepositoryEntity` instance. Pass `None` for no initial data.

#### `ActionsCacheUsageOrgEnterprise(data=None)`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance. Pass `None` for no initial data.

#### `ActionsForkPrContributorApproval(data=None)`

Create a new `ActionsForkPrContributorApprovalEntity` instance. Pass `None` for no initial data.

#### `ActionsForkPrWorkflowsPrivateRepo(data=None)`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance. Pass `None` for no initial data.

#### `ActionsGetDefaultWorkflowPermission(data=None)`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance. Pass `None` for no initial data.

#### `ActionsHostedRunner(data=None)`

Create a new `ActionsHostedRunnerEntity` instance. Pass `None` for no initial data.

#### `ActionsHostedRunnerLimit(data=None)`

Create a new `ActionsHostedRunnerLimitEntity` instance. Pass `None` for no initial data.

#### `ActionsOrganizationPermission(data=None)`

Create a new `ActionsOrganizationPermissionEntity` instance. Pass `None` for no initial data.

#### `ActionsPublicKey(data=None)`

Create a new `ActionsPublicKeyEntity` instance. Pass `None` for no initial data.

#### `ActionsRepositoryPermission(data=None)`

Create a new `ActionsRepositoryPermissionEntity` instance. Pass `None` for no initial data.

#### `ActionsSecret(data=None)`

Create a new `ActionsSecretEntity` instance. Pass `None` for no initial data.

#### `ActionsVariable(data=None)`

Create a new `ActionsVariableEntity` instance. Pass `None` for no initial data.

#### `ActionsWorkflowAccessToRepository(data=None)`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance. Pass `None` for no initial data.

#### `Activity(data=None)`

Create a new `ActivityEntity` instance. Pass `None` for no initial data.

#### `Add(data=None)`

Create a new `AddEntity` instance. Pass `None` for no initial data.

#### `ApiInsightsRouteStat(data=None)`

Create a new `ApiInsightsRouteStatEntity` instance. Pass `None` for no initial data.

#### `ApiInsightsSubjectStat(data=None)`

Create a new `ApiInsightsSubjectStatEntity` instance. Pass `None` for no initial data.

#### `ApiInsightsSummaryStat(data=None)`

Create a new `ApiInsightsSummaryStatEntity` instance. Pass `None` for no initial data.

#### `ApiInsightsTimeStat(data=None)`

Create a new `ApiInsightsTimeStatEntity` instance. Pass `None` for no initial data.

#### `ApiInsightsUserStat(data=None)`

Create a new `ApiInsightsUserStatEntity` instance. Pass `None` for no initial data.

#### `ApiOverview(data=None)`

Create a new `ApiOverviewEntity` instance. Pass `None` for no initial data.

#### `App(data=None)`

Create a new `AppEntity` instance. Pass `None` for no initial data.

#### `Artifact(data=None)`

Create a new `ArtifactEntity` instance. Pass `None` for no initial data.

#### `Assignee(data=None)`

Create a new `AssigneeEntity` instance. Pass `None` for no initial data.

#### `AuthenticationToken(data=None)`

Create a new `AuthenticationTokenEntity` instance. Pass `None` for no initial data.

#### `Authorization(data=None)`

Create a new `AuthorizationEntity` instance. Pass `None` for no initial data.

#### `Autolink(data=None)`

Create a new `AutolinkEntity` instance. Pass `None` for no initial data.

#### `BaseGist(data=None)`

Create a new `BaseGistEntity` instance. Pass `None` for no initial data.

#### `BillingUsageReport(data=None)`

Create a new `BillingUsageReportEntity` instance. Pass `None` for no initial data.

#### `BillingUsageReportUser(data=None)`

Create a new `BillingUsageReportUserEntity` instance. Pass `None` for no initial data.

#### `Blob(data=None)`

Create a new `BlobEntity` instance. Pass `None` for no initial data.

#### `Block(data=None)`

Create a new `BlockEntity` instance. Pass `None` for no initial data.

#### `Branch(data=None)`

Create a new `BranchEntity` instance. Pass `None` for no initial data.

#### `BranchProtection(data=None)`

Create a new `BranchProtectionEntity` instance. Pass `None` for no initial data.

#### `BranchRestrictionPolicy(data=None)`

Create a new `BranchRestrictionPolicyEntity` instance. Pass `None` for no initial data.

#### `BranchShort(data=None)`

Create a new `BranchShortEntity` instance. Pass `None` for no initial data.

#### `BranchWithProtection(data=None)`

Create a new `BranchWithProtectionEntity` instance. Pass `None` for no initial data.

#### `Campaign(data=None)`

Create a new `CampaignEntity` instance. Pass `None` for no initial data.

#### `Check(data=None)`

Create a new `CheckEntity` instance. Pass `None` for no initial data.

#### `CheckAnnotation(data=None)`

Create a new `CheckAnnotationEntity` instance. Pass `None` for no initial data.

#### `CheckAutomatedSecurityFix(data=None)`

Create a new `CheckAutomatedSecurityFixEntity` instance. Pass `None` for no initial data.

#### `CheckRun(data=None)`

Create a new `CheckRunEntity` instance. Pass `None` for no initial data.

#### `CheckSuite(data=None)`

Create a new `CheckSuiteEntity` instance. Pass `None` for no initial data.

#### `CheckSuitePreference(data=None)`

Create a new `CheckSuitePreferenceEntity` instance. Pass `None` for no initial data.

#### `Classroom(data=None)`

Create a new `ClassroomEntity` instance. Pass `None` for no initial data.

#### `ClassroomAcceptedAssignment(data=None)`

Create a new `ClassroomAcceptedAssignmentEntity` instance. Pass `None` for no initial data.

#### `ClassroomAssignment(data=None)`

Create a new `ClassroomAssignmentEntity` instance. Pass `None` for no initial data.

#### `ClassroomAssignmentGrade(data=None)`

Create a new `ClassroomAssignmentGradeEntity` instance. Pass `None` for no initial data.

#### `Clone(data=None)`

Create a new `CloneEntity` instance. Pass `None` for no initial data.

#### `CodeFrequency(data=None)`

Create a new `CodeFrequencyEntity` instance. Pass `None` for no initial data.

#### `CodeFrequencyStat(data=None)`

Create a new `CodeFrequencyStatEntity` instance. Pass `None` for no initial data.

#### `CodeOfConduct(data=None)`

Create a new `CodeOfConductEntity` instance. Pass `None` for no initial data.

#### `CodeScanning(data=None)`

Create a new `CodeScanningEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAlert(data=None)`

Create a new `CodeScanningAlertEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAlertInstance(data=None)`

Create a new `CodeScanningAlertInstanceEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAlertItem(data=None)`

Create a new `CodeScanningAlertItemEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAnalysi(data=None)`

Create a new `CodeScanningAnalysiEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAnalysisDeletion(data=None)`

Create a new `CodeScanningAnalysisDeletionEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAutofix(data=None)`

Create a new `CodeScanningAutofixEntity` instance. Pass `None` for no initial data.

#### `CodeScanningAutofixCommit(data=None)`

Create a new `CodeScanningAutofixCommitEntity` instance. Pass `None` for no initial data.

#### `CodeScanningCodeqlDatabase(data=None)`

Create a new `CodeScanningCodeqlDatabaseEntity` instance. Pass `None` for no initial data.

#### `CodeScanningDefaultSetup(data=None)`

Create a new `CodeScanningDefaultSetupEntity` instance. Pass `None` for no initial data.

#### `CodeScanningOrganizationAlertItem(data=None)`

Create a new `CodeScanningOrganizationAlertItemEntity` instance. Pass `None` for no initial data.

#### `CodeScanningSarifsStatus(data=None)`

Create a new `CodeScanningSarifsStatusEntity` instance. Pass `None` for no initial data.

#### `CodeScanningVariantAnalysi(data=None)`

Create a new `CodeScanningVariantAnalysiEntity` instance. Pass `None` for no initial data.

#### `CodeScanningVariantAnalysisRepoTask(data=None)`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance. Pass `None` for no initial data.

#### `CodeSecurity(data=None)`

Create a new `CodeSecurityEntity` instance. Pass `None` for no initial data.

#### `CodeSecurityConfiguration(data=None)`

Create a new `CodeSecurityConfigurationEntity` instance. Pass `None` for no initial data.

#### `CodeSecurityConfigurationRepository(data=None)`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance. Pass `None` for no initial data.

#### `CodeSecurityDefaultConfiguration(data=None)`

Create a new `CodeSecurityDefaultConfigurationEntity` instance. Pass `None` for no initial data.

#### `CodeownersError(data=None)`

Create a new `CodeownersErrorEntity` instance. Pass `None` for no initial data.

#### `Codespace(data=None)`

Create a new `CodespaceEntity` instance. Pass `None` for no initial data.

#### `Collaborator(data=None)`

Create a new `CollaboratorEntity` instance. Pass `None` for no initial data.

#### `CombinedBillingUsage(data=None)`

Create a new `CombinedBillingUsageEntity` instance. Pass `None` for no initial data.

#### `CombinedCommitStatus(data=None)`

Create a new `CombinedCommitStatusEntity` instance. Pass `None` for no initial data.

#### `Commit(data=None)`

Create a new `CommitEntity` instance. Pass `None` for no initial data.

#### `CommitActivity(data=None)`

Create a new `CommitActivityEntity` instance. Pass `None` for no initial data.

#### `CommitComment(data=None)`

Create a new `CommitCommentEntity` instance. Pass `None` for no initial data.

#### `CommitComparison(data=None)`

Create a new `CommitComparisonEntity` instance. Pass `None` for no initial data.

#### `CommunityProfile(data=None)`

Create a new `CommunityProfileEntity` instance. Pass `None` for no initial data.

#### `ContentFile(data=None)`

Create a new `ContentFileEntity` instance. Pass `None` for no initial data.

#### `ContentTraffic(data=None)`

Create a new `ContentTrafficEntity` instance. Pass `None` for no initial data.

#### `Contributor(data=None)`

Create a new `ContributorEntity` instance. Pass `None` for no initial data.

#### `Copilot(data=None)`

Create a new `CopilotEntity` instance. Pass `None` for no initial data.

#### `CopilotOrganizationDetail(data=None)`

Create a new `CopilotOrganizationDetailEntity` instance. Pass `None` for no initial data.

#### `CopilotUsageMetricsDay(data=None)`

Create a new `CopilotUsageMetricsDayEntity` instance. Pass `None` for no initial data.

#### `Credential(data=None)`

Create a new `CredentialEntity` instance. Pass `None` for no initial data.

#### `CustomProperty(data=None)`

Create a new `CustomPropertyEntity` instance. Pass `None` for no initial data.

#### `CustomPropertyValue(data=None)`

Create a new `CustomPropertyValueEntity` instance. Pass `None` for no initial data.

#### `Dependabot(data=None)`

Create a new `DependabotEntity` instance. Pass `None` for no initial data.

#### `DependabotAlert(data=None)`

Create a new `DependabotAlertEntity` instance. Pass `None` for no initial data.

#### `DependabotAlertWithRepository(data=None)`

Create a new `DependabotAlertWithRepositoryEntity` instance. Pass `None` for no initial data.

#### `DependabotPublicKey(data=None)`

Create a new `DependabotPublicKeyEntity` instance. Pass `None` for no initial data.

#### `DependabotRepositoryAccessDetail(data=None)`

Create a new `DependabotRepositoryAccessDetailEntity` instance. Pass `None` for no initial data.

#### `DependabotSecret(data=None)`

Create a new `DependabotSecretEntity` instance. Pass `None` for no initial data.

#### `DependencyGraph(data=None)`

Create a new `DependencyGraphEntity` instance. Pass `None` for no initial data.

#### `DependencyGraphDiff(data=None)`

Create a new `DependencyGraphDiffEntity` instance. Pass `None` for no initial data.

#### `DependencyGraphSpdxSbom(data=None)`

Create a new `DependencyGraphSpdxSbomEntity` instance. Pass `None` for no initial data.

#### `DeployKey(data=None)`

Create a new `DeployKeyEntity` instance. Pass `None` for no initial data.

#### `Deployment(data=None)`

Create a new `DeploymentEntity` instance. Pass `None` for no initial data.

#### `DeploymentBranchPolicy(data=None)`

Create a new `DeploymentBranchPolicyEntity` instance. Pass `None` for no initial data.

#### `DeploymentProtectionRule(data=None)`

Create a new `DeploymentProtectionRuleEntity` instance. Pass `None` for no initial data.

#### `DeploymentStatus(data=None)`

Create a new `DeploymentStatusEntity` instance. Pass `None` for no initial data.

#### `DiffEntry(data=None)`

Create a new `DiffEntryEntity` instance. Pass `None` for no initial data.

#### `Email(data=None)`

Create a new `EmailEntity` instance. Pass `None` for no initial data.

#### `Emoji(data=None)`

Create a new `EmojiEntity` instance. Pass `None` for no initial data.

#### `EmptyObject(data=None)`

Create a new `EmptyObjectEntity` instance. Pass `None` for no initial data.

#### `EnterpriseTeam(data=None)`

Create a new `EnterpriseTeamEntity` instance. Pass `None` for no initial data.

#### `EnterpriseTeamMembership(data=None)`

Create a new `EnterpriseTeamMembershipEntity` instance. Pass `None` for no initial data.

#### `Environment(data=None)`

Create a new `EnvironmentEntity` instance. Pass `None` for no initial data.

#### `EnvironmentApproval(data=None)`

Create a new `EnvironmentApprovalEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `Feed(data=None)`

Create a new `FeedEntity` instance. Pass `None` for no initial data.

#### `FileCommit(data=None)`

Create a new `FileCommitEntity` instance. Pass `None` for no initial data.

#### `Follower(data=None)`

Create a new `FollowerEntity` instance. Pass `None` for no initial data.

#### `Following(data=None)`

Create a new `FollowingEntity` instance. Pass `None` for no initial data.

#### `FullRepository(data=None)`

Create a new `FullRepositoryEntity` instance. Pass `None` for no initial data.

#### `Gist(data=None)`

Create a new `GistEntity` instance. Pass `None` for no initial data.

#### `GistComment(data=None)`

Create a new `GistCommentEntity` instance. Pass `None` for no initial data.

#### `GistCommit(data=None)`

Create a new `GistCommitEntity` instance. Pass `None` for no initial data.

#### `GistSimple(data=None)`

Create a new `GistSimpleEntity` instance. Pass `None` for no initial data.

#### `Git(data=None)`

Create a new `GitEntity` instance. Pass `None` for no initial data.

#### `GitCommit(data=None)`

Create a new `GitCommitEntity` instance. Pass `None` for no initial data.

#### `GitRef(data=None)`

Create a new `GitRefEntity` instance. Pass `None` for no initial data.

#### `GitTag(data=None)`

Create a new `GitTagEntity` instance. Pass `None` for no initial data.

#### `GitTree(data=None)`

Create a new `GitTreeEntity` instance. Pass `None` for no initial data.

#### `Gitignore(data=None)`

Create a new `GitignoreEntity` instance. Pass `None` for no initial data.

#### `GitignoreTemplate(data=None)`

Create a new `GitignoreTemplateEntity` instance. Pass `None` for no initial data.

#### `GlobalAdvisory(data=None)`

Create a new `GlobalAdvisoryEntity` instance. Pass `None` for no initial data.

#### `GpgKey(data=None)`

Create a new `GpgKeyEntity` instance. Pass `None` for no initial data.

#### `Hook(data=None)`

Create a new `HookEntity` instance. Pass `None` for no initial data.

#### `HookDelivery(data=None)`

Create a new `HookDeliveryEntity` instance. Pass `None` for no initial data.

#### `HookDeliveryItem(data=None)`

Create a new `HookDeliveryItemEntity` instance. Pass `None` for no initial data.

#### `HostedCompute(data=None)`

Create a new `HostedComputeEntity` instance. Pass `None` for no initial data.

#### `Hovercard(data=None)`

Create a new `HovercardEntity` instance. Pass `None` for no initial data.

#### `Import(data=None)`

Create a new `ImportEntity` instance. Pass `None` for no initial data.

#### `Installation(data=None)`

Create a new `InstallationEntity` instance. Pass `None` for no initial data.

#### `InstallationToken(data=None)`

Create a new `InstallationTokenEntity` instance. Pass `None` for no initial data.

#### `Integration(data=None)`

Create a new `IntegrationEntity` instance. Pass `None` for no initial data.

#### `IntegrationInstallation(data=None)`

Create a new `IntegrationInstallationEntity` instance. Pass `None` for no initial data.

#### `Interaction(data=None)`

Create a new `InteractionEntity` instance. Pass `None` for no initial data.

#### `InteractionLimit(data=None)`

Create a new `InteractionLimitEntity` instance. Pass `None` for no initial data.

#### `Issue(data=None)`

Create a new `IssueEntity` instance. Pass `None` for no initial data.

#### `IssueType(data=None)`

Create a new `IssueTypeEntity` instance. Pass `None` for no initial data.

#### `Job(data=None)`

Create a new `JobEntity` instance. Pass `None` for no initial data.

#### `Key(data=None)`

Create a new `KeyEntity` instance. Pass `None` for no initial data.

#### `Label(data=None)`

Create a new `LabelEntity` instance. Pass `None` for no initial data.

#### `Language(data=None)`

Create a new `LanguageEntity` instance. Pass `None` for no initial data.

#### `License(data=None)`

Create a new `LicenseEntity` instance. Pass `None` for no initial data.

#### `Markdown(data=None)`

Create a new `MarkdownEntity` instance. Pass `None` for no initial data.

#### `MarketplaceListingPlan(data=None)`

Create a new `MarketplaceListingPlanEntity` instance. Pass `None` for no initial data.

#### `MarketplacePurchase(data=None)`

Create a new `MarketplacePurchaseEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `Membership(data=None)`

Create a new `MembershipEntity` instance. Pass `None` for no initial data.

#### `MergedUpstream(data=None)`

Create a new `MergedUpstreamEntity` instance. Pass `None` for no initial data.

#### `Meta(data=None)`

Create a new `MetaEntity` instance. Pass `None` for no initial data.

#### `Metaroot(data=None)`

Create a new `MetarootEntity` instance. Pass `None` for no initial data.

#### `Migration(data=None)`

Create a new `MigrationEntity` instance. Pass `None` for no initial data.

#### `Milestone(data=None)`

Create a new `MilestoneEntity` instance. Pass `None` for no initial data.

#### `MinimalRepository(data=None)`

Create a new `MinimalRepositoryEntity` instance. Pass `None` for no initial data.

#### `NetworkConfiguration(data=None)`

Create a new `NetworkConfigurationEntity` instance. Pass `None` for no initial data.

#### `NetworkSetting(data=None)`

Create a new `NetworkSettingEntity` instance. Pass `None` for no initial data.

#### `OidcCustomSub(data=None)`

Create a new `OidcCustomSubEntity` instance. Pass `None` for no initial data.

#### `OidcCustomSubRepo(data=None)`

Create a new `OidcCustomSubRepoEntity` instance. Pass `None` for no initial data.

#### `Org(data=None)`

Create a new `OrgEntity` instance. Pass `None` for no initial data.

#### `OrgHook(data=None)`

Create a new `OrgHookEntity` instance. Pass `None` for no initial data.

#### `OrgMembership(data=None)`

Create a new `OrgMembershipEntity` instance. Pass `None` for no initial data.

#### `OrgPrivateRegistryConfiguration(data=None)`

Create a new `OrgPrivateRegistryConfigurationEntity` instance. Pass `None` for no initial data.

#### `OrgPrivateRegistryConfigurationWithSelectedRepository(data=None)`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance. Pass `None` for no initial data.

#### `OrgRepoCustomPropertyValue(data=None)`

Create a new `OrgRepoCustomPropertyValueEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `OrganizationActionsSecret(data=None)`

Create a new `OrganizationActionsSecretEntity` instance. Pass `None` for no initial data.

#### `OrganizationActionsVariable(data=None)`

Create a new `OrganizationActionsVariableEntity` instance. Pass `None` for no initial data.

#### `OrganizationDependabotSecret(data=None)`

Create a new `OrganizationDependabotSecretEntity` instance. Pass `None` for no initial data.

#### `OrganizationInvitation(data=None)`

Create a new `OrganizationInvitationEntity` instance. Pass `None` for no initial data.

#### `OrganizationProgrammaticAccessGrant(data=None)`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance. Pass `None` for no initial data.

#### `OrganizationRole(data=None)`

Create a new `OrganizationRoleEntity` instance. Pass `None` for no initial data.

#### `OrganizationSecretScanningAlert(data=None)`

Create a new `OrganizationSecretScanningAlertEntity` instance. Pass `None` for no initial data.

#### `OutsideCollaborator(data=None)`

Create a new `OutsideCollaboratorEntity` instance. Pass `None` for no initial data.

#### `Package(data=None)`

Create a new `PackageEntity` instance. Pass `None` for no initial data.

#### `Page(data=None)`

Create a new `PageEntity` instance. Pass `None` for no initial data.

#### `PageBuild(data=None)`

Create a new `PageBuildEntity` instance. Pass `None` for no initial data.

#### `PageBuildStatus(data=None)`

Create a new `PageBuildStatusEntity` instance. Pass `None` for no initial data.

#### `PageDeployment(data=None)`

Create a new `PageDeploymentEntity` instance. Pass `None` for no initial data.

#### `PagesDeploymentStatus(data=None)`

Create a new `PagesDeploymentStatusEntity` instance. Pass `None` for no initial data.

#### `PagesHealthCheck(data=None)`

Create a new `PagesHealthCheckEntity` instance. Pass `None` for no initial data.

#### `Participation(data=None)`

Create a new `ParticipationEntity` instance. Pass `None` for no initial data.

#### `PendingDeployment(data=None)`

Create a new `PendingDeploymentEntity` instance. Pass `None` for no initial data.

#### `PorterAuthor(data=None)`

Create a new `PorterAuthorEntity` instance. Pass `None` for no initial data.

#### `PorterLargeFile(data=None)`

Create a new `PorterLargeFileEntity` instance. Pass `None` for no initial data.

#### `PrivateRegistry(data=None)`

Create a new `PrivateRegistryEntity` instance. Pass `None` for no initial data.

#### `PrivateUser(data=None)`

Create a new `PrivateUserEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectCollaboratorPermission(data=None)`

Create a new `ProjectCollaboratorPermissionEntity` instance. Pass `None` for no initial data.

#### `ProjectColumn(data=None)`

Create a new `ProjectColumnEntity` instance. Pass `None` for no initial data.

#### `ProjectsClassic(data=None)`

Create a new `ProjectsClassicEntity` instance. Pass `None` for no initial data.

#### `ProjectsV2(data=None)`

Create a new `ProjectsV2Entity` instance. Pass `None` for no initial data.

#### `ProjectsV2Field(data=None)`

Create a new `ProjectsV2FieldEntity` instance. Pass `None` for no initial data.

#### `ProjectsV2ItemSimple(data=None)`

Create a new `ProjectsV2ItemSimpleEntity` instance. Pass `None` for no initial data.

#### `ProjectsV2ItemWithContent(data=None)`

Create a new `ProjectsV2ItemWithContentEntity` instance. Pass `None` for no initial data.

#### `ProtectedBranch(data=None)`

Create a new `ProtectedBranchEntity` instance. Pass `None` for no initial data.

#### `ProtectedBranchAdminEnforced(data=None)`

Create a new `ProtectedBranchAdminEnforcedEntity` instance. Pass `None` for no initial data.

#### `ProtectedBranchPullRequestReview(data=None)`

Create a new `ProtectedBranchPullRequestReviewEntity` instance. Pass `None` for no initial data.

#### `PublicMember(data=None)`

Create a new `PublicMemberEntity` instance. Pass `None` for no initial data.

#### `Pull(data=None)`

Create a new `PullEntity` instance. Pass `None` for no initial data.

#### `PullRequestReview(data=None)`

Create a new `PullRequestReviewEntity` instance. Pass `None` for no initial data.

#### `PullRequestReviewComment(data=None)`

Create a new `PullRequestReviewCommentEntity` instance. Pass `None` for no initial data.

#### `PullRequestSimple(data=None)`

Create a new `PullRequestSimpleEntity` instance. Pass `None` for no initial data.

#### `RateLimit(data=None)`

Create a new `RateLimitEntity` instance. Pass `None` for no initial data.

#### `Reaction(data=None)`

Create a new `ReactionEntity` instance. Pass `None` for no initial data.

#### `Referrer(data=None)`

Create a new `ReferrerEntity` instance. Pass `None` for no initial data.

#### `Release(data=None)`

Create a new `ReleaseEntity` instance. Pass `None` for no initial data.

#### `ReleaseAsset(data=None)`

Create a new `ReleaseAssetEntity` instance. Pass `None` for no initial data.

#### `ReleaseNotesContent(data=None)`

Create a new `ReleaseNotesContentEntity` instance. Pass `None` for no initial data.

#### `Remove(data=None)`

Create a new `RemoveEntity` instance. Pass `None` for no initial data.

#### `Repo(data=None)`

Create a new `RepoEntity` instance. Pass `None` for no initial data.

#### `Repository(data=None)`

Create a new `RepositoryEntity` instance. Pass `None` for no initial data.

#### `RepositoryAdvisory(data=None)`

Create a new `RepositoryAdvisoryEntity` instance. Pass `None` for no initial data.

#### `RepositoryCollaboratorPermission(data=None)`

Create a new `RepositoryCollaboratorPermissionEntity` instance. Pass `None` for no initial data.

#### `RepositoryInvitation(data=None)`

Create a new `RepositoryInvitationEntity` instance. Pass `None` for no initial data.

#### `RepositoryRuleDetailed(data=None)`

Create a new `RepositoryRuleDetailedEntity` instance. Pass `None` for no initial data.

#### `RepositoryRuleset(data=None)`

Create a new `RepositoryRulesetEntity` instance. Pass `None` for no initial data.

#### `RepositorySubscription(data=None)`

Create a new `RepositorySubscriptionEntity` instance. Pass `None` for no initial data.

#### `ReviewComment(data=None)`

Create a new `ReviewCommentEntity` instance. Pass `None` for no initial data.

#### `RuleSuite(data=None)`

Create a new `RuleSuiteEntity` instance. Pass `None` for no initial data.

#### `RulesetVersion(data=None)`

Create a new `RulesetVersionEntity` instance. Pass `None` for no initial data.

#### `RulesetVersionWithState(data=None)`

Create a new `RulesetVersionWithStateEntity` instance. Pass `None` for no initial data.

#### `Runner(data=None)`

Create a new `RunnerEntity` instance. Pass `None` for no initial data.

#### `RunnerApplication(data=None)`

Create a new `RunnerApplicationEntity` instance. Pass `None` for no initial data.

#### `RunnerGroup(data=None)`

Create a new `RunnerGroupEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `SecretScanning(data=None)`

Create a new `SecretScanningEntity` instance. Pass `None` for no initial data.

#### `SecretScanningAlert(data=None)`

Create a new `SecretScanningAlertEntity` instance. Pass `None` for no initial data.

#### `SecretScanningLocation(data=None)`

Create a new `SecretScanningLocationEntity` instance. Pass `None` for no initial data.

#### `SecretScanningPatternConfiguration(data=None)`

Create a new `SecretScanningPatternConfigurationEntity` instance. Pass `None` for no initial data.

#### `SecretScanningPushProtectionBypass(data=None)`

Create a new `SecretScanningPushProtectionBypassEntity` instance. Pass `None` for no initial data.

#### `SecretScanningScanHistory(data=None)`

Create a new `SecretScanningScanHistoryEntity` instance. Pass `None` for no initial data.

#### `SecurityAdvisory(data=None)`

Create a new `SecurityAdvisoryEntity` instance. Pass `None` for no initial data.

#### `SelectedAction(data=None)`

Create a new `SelectedActionEntity` instance. Pass `None` for no initial data.

#### `SelfHostedRunner(data=None)`

Create a new `SelfHostedRunnerEntity` instance. Pass `None` for no initial data.

#### `ShortBlob(data=None)`

Create a new `ShortBlobEntity` instance. Pass `None` for no initial data.

#### `ShortBranch(data=None)`

Create a new `ShortBranchEntity` instance. Pass `None` for no initial data.

#### `SimpleClassroom(data=None)`

Create a new `SimpleClassroomEntity` instance. Pass `None` for no initial data.

#### `SimpleClassroomAssignment(data=None)`

Create a new `SimpleClassroomAssignmentEntity` instance. Pass `None` for no initial data.

#### `SocialAccount(data=None)`

Create a new `SocialAccountEntity` instance. Pass `None` for no initial data.

#### `SshSigningKey(data=None)`

Create a new `SshSigningKeyEntity` instance. Pass `None` for no initial data.

#### `Status(data=None)`

Create a new `StatusEntity` instance. Pass `None` for no initial data.

#### `StatusCheckPolicy(data=None)`

Create a new `StatusCheckPolicyEntity` instance. Pass `None` for no initial data.

#### `Subscriber(data=None)`

Create a new `SubscriberEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `TagProtection(data=None)`

Create a new `TagProtectionEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TeamSimple(data=None)`

Create a new `TeamSimpleEntity` instance. Pass `None` for no initial data.

#### `Thread(data=None)`

Create a new `ThreadEntity` instance. Pass `None` for no initial data.

#### `ThreadSubscription(data=None)`

Create a new `ThreadSubscriptionEntity` instance. Pass `None` for no initial data.

#### `Topic(data=None)`

Create a new `TopicEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserMarketplacePurchase(data=None)`

Create a new `UserMarketplacePurchaseEntity` instance. Pass `None` for no initial data.

#### `View(data=None)`

Create a new `ViewEntity` instance. Pass `None` for no initial data.

#### `WebhookConfig(data=None)`

Create a new `WebhookConfigEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `WorkflowRun(data=None)`

Create a new `WorkflowRunEntity` instance. Pass `None` for no initial data.

#### `WorkflowRunUsage(data=None)`

Create a new `WorkflowRunUsageEntity` instance. Pass `None` for no initial data.

#### `WorkflowUsage(data=None)`

Create a new `WorkflowUsageEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActionEntity

```python
action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `int` | No | Total minutes used on macOS runner machines. |
| `UBUNTU` | `int` | No | Total minutes used on Ubuntu runner machines. |
| `WINDOWS` | `int` | No | Total minutes used on Windows runner machines. |
| `access_level` | `str` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |
| `active_caches_count` | `int` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `actor` | `dict` | Yes | A GitHub user. |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `allowed_actions` | `str` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `allows_public_repositories` | `bool` | Yes |  |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `approval_policy` | `str` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |
| `archive_download_url` | `str` | Yes |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | No | Whether the repository is archived. |
| `artifacts_url` | `str` | Yes | The URL to the artifacts for the workflow run. |
| `assignees_url` | `str` | Yes |  |
| `badge_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `busy` | `bool` | Yes |  |
| `can_approve_pull_request_reviews` | `bool` | No | Whether GitHub Actions can approve pull requests. |
| `cancel_url` | `str` | Yes | The URL to cancel the workflow run. |
| `check_run_url` | `str` | Yes |  |
| `check_suite_id` | `int` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `str` | No | The node ID of the associated check suite. |
| `check_suite_url` | `str` | Yes | The URL to the associated check suite. |
| `clone_url` | `str` | No |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `code_search_index_status` | `dict` | No | The status of the code search index for this repository |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `completed_at` | `str` | Yes | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `str` | Yes | The outcome of the job. |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `cpu_cores` | `int` | Yes | The number of cores. |
| `created_at` | `str` | Yes | The time that the job created, in ISO 8601 format. |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `days` | `int` | Yes | The number of days to retain artifacts and logs |
| `default` | `bool` | Yes |  |
| `default_branch` | `str` | No | The default branch of the repository. |
| `default_workflow_permissions` | `str` | No | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deleted_at` | `str` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `digest` | `str` | No | The SHA256 digest of the artifact. |
| `disabled` | `bool` | No | Returns whether or not this repository disabled. |
| `display_name` | `str` | Yes | Display name for this image. |
| `display_title` | `str` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `downloads_url` | `str` | Yes |  |
| `enabled` | `bool` | Yes | Whether GitHub Actions is enabled on the repository. |
| `enabled_repositories` | `str` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `ephemeral` | `bool` | No |  |
| `event` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `expired` | `bool` | Yes | Whether or not the artifact has expired. |
| `expires_at` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes | The repository owner and name for the cache usage being shown. |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `github_owned_allowed` | `bool` | No | Whether GitHub-owned actions are allowed. |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | No | Whether issues are enabled. |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No | Whether projects are enabled. |
| `has_wiki` | `bool` | No | Whether the wiki is enabled. |
| `head_branch` | `str` | Yes | The name of the current branch. |
| `head_commit` | `dict` | Yes | A commit. |
| `head_repository` | `dict` | Yes | Minimal Repository |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `str` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | Yes |  |
| `hosted_runners_url` | `str` | No |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the workflow run. |
| `image_details` | `dict` | Yes | Provides details of a hosted runner image |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `inputs` | `dict` | No | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `jobs_url` | `str` | Yes | The URL to the jobs for the workflow run. |
| `keys_url` | `str` | Yes |  |
| `labels` | `list` | Yes | The names of the custom labels to add to the runner. |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `last_active_on` | `str` | No | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `dict` | No | License Simple |
| `logs_url` | `str` | Yes | The URL to download the logs for the workflow run. |
| `machine_size_details` | `dict` | Yes | Provides details of a particular machine spec. |
| `macos_12_core` | `int` | No | Total minutes used on macOS 12 core runner machines. |
| `master_branch` | `str` | No |  |
| `maximum_runners` | `int` | No | The maximum amount of hosted runners. |
| `memory_gb` | `int` | Yes | The available RAM for the machine spec. |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | No |  |
| `name` | `str` | Yes | The name of the new runner. |
| `network_configuration_id` | `str` | No | The identifier of a hosted compute network configuration. |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `os` | `str` | Yes | The Operating System of the runner. |
| `owner` | `dict` | Yes | A GitHub user. |
| `path` | `str` | Yes | The full path of the workflow |
| `patterns_allowed` | `list` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `dict` | No |  |
| `platform` | `str` | Yes | The operating system of the image. |
| `platforms` | `list` | Yes |  |
| `previous_attempt_url` | `str` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `list` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `list` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | No |  |
| `ref` | `str` | Yes | The git reference for the workflow. |
| `referenced_workflows` | `list` | No |  |
| `releases_url` | `str` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `require_approval_for_fork_pr_workflows` | `bool` | No | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `rerun_url` | `str` | Yes | The URL to rerun the workflow run. |
| `restricted_to_workflows` | `bool` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `role_name` | `str` | No |  |
| `run_attempt` | `int` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | Yes | The id of the associated workflow run. |
| `run_number` | `int` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `str` | No | The start time of the latest run. |
| `run_url` | `str` | Yes |  |
| `run_workflows_from_fork_pull_requests` | `bool` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `runner_group_id` | `int` | Yes | The ID of the runner group to register the runner to. |
| `runner_group_name` | `str` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `str` | Yes | The name of the runner to which this job has been assigned. |
| `runners` | `list` | Yes | List of runner IDs to add to the runner group. |
| `runners_url` | `str` | Yes |  |
| `security_and_analysis` | `dict` | No |  |
| `selected_repositories_url` | `str` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `list` | Yes | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `list` | No | List of workflows the runner group should be allowed to run. |
| `send_secrets_and_variables` | `bool` | No | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | No | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `size_gb` | `int` | Yes | Image size in GB. |
| `size_in_bytes` | `int` | Yes | The size in bytes of the artifact. |
| `source` | `str` | Yes | The image provider. |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `started_at` | `str` | Yes | The time that the job started, in ISO 8601 format. |
| `state` | `str` | Yes |  |
| `status` | `str` | Yes | The phase of the lifecycle that the job is currently in. |
| `statuses_url` | `str` | Yes |  |
| `steps` | `list` | No | Steps in this job. |
| `storage_gb` | `int` | Yes | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `total` | `int` | No | Total minutes used on all runner machines. |
| `total_count` | `int` | Yes |  |
| `trees_url` | `str` | Yes |  |
| `triggering_actor` | `dict` | Yes | A GitHub user. |
| `type` | `str` | No | The type of label. |
| `ubuntu_16_core` | `int` | No | Total minutes used on Ubuntu 16 core runner machines. |
| `ubuntu_32_core` | `int` | No | Total minutes used on Ubuntu 32 core runner machines. |
| `ubuntu_4_core` | `int` | No | Total minutes used on Ubuntu 4 core runner machines. |
| `ubuntu_64_core` | `int` | No | Total minutes used on Ubuntu 64 core runner machines. |
| `ubuntu_8_core` | `int` | No | Total minutes used on Ubuntu 8 core runner machines. |
| `updated_at` | `str` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `str` | Yes | The URL to the workflow run. |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `value` | `str` | No | The value of the variable. |
| `verified_allowed` | `bool` | No | Whether actions from GitHub Marketplace verified creators are allowed. |
| `visibility` | `str` | No | The type of repositories in the organization that can access the variable. |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |
| `windows_16_core` | `int` | No | Total minutes used on Windows 16 core runner machines. |
| `windows_32_core` | `int` | No | Total minutes used on Windows 32 core runner machines. |
| `windows_4_core` | `int` | No | Total minutes used on Windows 4 core runner machines. |
| `windows_64_core` | `int` | No | Total minutes used on Windows 64 core runner machines. |
| `windows_8_core` | `int` | No | Total minutes used on Windows 8 core runner machines. |
| `work_folder` | `str` | No | The working directory to be used for job execution, relative to the runner install directory. |
| `workflow_id` | `int` | Yes | The ID of the parent workflow. |
| `workflow_name` | `str` | Yes | The name of the workflow. |
| `workflow_restrictions_read_only` | `bool` | No | If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified. |
| `workflow_run` | `dict` | No |  |
| `workflow_url` | `str` | Yes | The URL to the workflow. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Action().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Action().list({"org_id": "example"})
for action in results:
    print(action)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Action().load({"archive_format": "archive_format", "artifact_id": 1, "owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Action().remove({"hosted_runner_id": 1, "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Action().update({
    "org_id": "org_id",
    "repository_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsArtifactAndLogRetentionEntity

```python
actions_artifact_and_log_retention = client.ActionsArtifactAndLogRetention()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `int` | Yes | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `int` | Yes | The maximum number of days that can be configured |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsArtifactAndLogRetention().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsArtifactAndLogRetentionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsCacheListEntity

```python
actions_cache_list = client.ActionsCacheList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `last_accessed_at` | `str` | No |  |
| `ref` | `str` | No |  |
| `size_in_bytes` | `int` | No |  |
| `version` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActionsCacheList().list({"owner": "example", "repo": "example"})
for actions_cache_list in results:
    print(actions_cache_list)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ActionsCacheList().remove({"owner": "owner", "repo": "repo", "key": "key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsCacheUsageByRepositoryEntity

```python
actions_cache_usage_by_repository = client.ActionsCacheUsageByRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_caches_count` | `int` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `str` | Yes | The repository owner and name for the cache usage being shown. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsCacheUsageByRepository().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheUsageByRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsCacheUsageOrgEnterpriseEntity

```python
actions_cache_usage_org_enterprise = client.ActionsCacheUsageOrgEnterprise()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_active_caches_count` | `int` | Yes | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `int` | Yes | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsCacheUsageOrgEnterprise().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsForkPrContributorApprovalEntity

```python
actions_fork_pr_contributor_approval = client.ActionsForkPrContributorApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_policy` | `str` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsForkPrContributorApproval().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsForkPrContributorApprovalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsForkPrWorkflowsPrivateRepoEntity

```python
actions_fork_pr_workflows_private_repo = client.ActionsForkPrWorkflowsPrivateRepo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `bool` | Yes | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `bool` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `bool` | Yes | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Yes | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsForkPrWorkflowsPrivateRepo().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsGetDefaultWorkflowPermissionEntity

```python
actions_get_default_workflow_permission = client.ActionsGetDefaultWorkflowPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Yes | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `str` | Yes | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsGetDefaultWorkflowPermission().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsHostedRunnerEntity

```python
actions_hosted_runner = client.ActionsHostedRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable_static_ip` | `bool` | No | Whether this runner should be created with a static public IP. |
| `id` | `int` | Yes | The unique identifier of the hosted runner. |
| `image` | `dict` | Yes | The image of runner. |
| `image_details` | `dict` | Yes | Provides details of a hosted runner image |
| `last_active_on` | `str` | No | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `dict` | Yes | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | No | The maximum amount of hosted runners. |
| `name` | `str` | Yes | The name of the hosted runner. |
| `platform` | `str` | Yes | The operating system of the image. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `list` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `runner_group_id` | `int` | No | The unique identifier of the group that the hosted runner belongs to. |
| `size` | `str` | Yes | The machine size of the runner. |
| `status` | `str` | Yes | The status of the runner. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ActionsHostedRunner().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsHostedRunner().load({"id": 1, "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ActionsHostedRunner().update({
    "id": 1,
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsHostedRunnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsHostedRunnerLimitEntity

```python
actions_hosted_runner_limit = client.ActionsHostedRunnerLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_usage` | `int` | Yes | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `int` | Yes | The maximum number of static public IP addresses that can be used for Hosted Runners. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsHostedRunnerLimit().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsHostedRunnerLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsOrganizationPermissionEntity

```python
actions_organization_permission = client.ActionsOrganizationPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `str` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled_repositories` | `str` | Yes | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| `selected_actions_url` | `str` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `selected_repositories_url` | `str` | No | The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsOrganizationPermission().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsOrganizationPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsPublicKeyEntity

```python
actions_public_key = client.ActionsPublicKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | Yes | The Base64 encoded public key. |
| `key_id` | `str` | Yes | The identifier for the key. |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsPublicKey().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsPublicKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsRepositoryPermissionEntity

```python
actions_repository_permission = client.ActionsRepositoryPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `str` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Yes | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `str` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsRepositoryPermission().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsRepositoryPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsSecretEntity

```python
actions_secret = client.ActionsSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the secret. |
| `updated_at` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsSecret().load({"id": "actions_secret_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsVariableEntity

```python
actions_variable = client.ActionsVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the variable. |
| `updated_at` | `str` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `str` | Yes | The value of the variable. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsVariable().load({"id": "actions_variable_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsWorkflowAccessToRepositoryEntity

```python
actions_workflow_access_to_repository = client.ActionsWorkflowAccessToRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `str` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsWorkflowAccessToRepository().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivityEntity

```python
activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_type` | `str` | Yes | The type of the activity that was performed. |
| `actor` | `dict` | Yes | A GitHub user. |
| `after` | `str` | Yes | The SHA of the commit after the activity. |
| `archive_url` | `str` | No |  |
| `assignees_url` | `str` | No |  |
| `avatar_url` | `str` | No |  |
| `before` | `str` | Yes | The SHA of the commit before the activity. |
| `blobs_url` | `str` | No |  |
| `branches_url` | `str` | No |  |
| `clone_url` | `str` | No |  |
| `collaborators_url` | `str` | No |  |
| `comments_url` | `str` | No |  |
| `commits_url` | `str` | No |  |
| `compare_url` | `str` | No |  |
| `contents_url` | `str` | No |  |
| `contributors_url` | `str` | No |  |
| `deployments_url` | `str` | No |  |
| `description` | `str` | No |  |
| `downloads_url` | `str` | No |  |
| `events_url` | `str` | No |  |
| `followers_url` | `str` | No |  |
| `following_url` | `str` | No |  |
| `fork` | `bool` | No |  |
| `forks_url` | `str` | No |  |
| `full_name` | `str` | No |  |
| `gists_url` | `str` | No |  |
| `git_commits_url` | `str` | No |  |
| `git_refs_url` | `str` | No |  |
| `git_tags_url` | `str` | No |  |
| `git_url` | `str` | No |  |
| `github_id` | `int` | No |  |
| `gravatar_id` | `str` | No |  |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | No |  |
| `html_url` | `str` | No |  |
| `id` | `str` | No |  |
| `issue_comment_url` | `str` | No |  |
| `issue_events_url` | `str` | No |  |
| `issues_url` | `str` | No |  |
| `keys_url` | `str` | No |  |
| `labels_url` | `str` | No |  |
| `language` | `dict` | No |  |
| `languages_url` | `str` | No |  |
| `last_read_at` | `str` | No | Describes the last point that notifications were checked. |
| `login` | `str` | No |  |
| `merges_url` | `str` | No |  |
| `milestones_url` | `str` | No |  |
| `mirror_url` | `str` | No |  |
| `name` | `str` | No |  |
| `node_id` | `str` | No |  |
| `notifications_url` | `str` | No |  |
| `organizations_url` | `str` | No |  |
| `owner` | `dict` | No |  |
| `private` | `bool` | No |  |
| `pulls_url` | `str` | No |  |
| `read` | `bool` | No | Whether the notification has been read. |
| `received_events_url` | `str` | No |  |
| `ref` | `str` | Yes | The full Git reference, formatted as `refs/heads/<branch name>`. |
| `releases_url` | `str` | No |  |
| `repos_url` | `str` | No |  |
| `site_admin` | `bool` | No |  |
| `ssh_url` | `str` | No |  |
| `stargazers_url` | `str` | No |  |
| `starred_url` | `str` | No |  |
| `statuses_url` | `str` | No |  |
| `subscribers_url` | `str` | No |  |
| `subscription_url` | `str` | No |  |
| `subscriptions_url` | `str` | No |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | No |  |
| `teams_url` | `str` | No |  |
| `timestamp` | `str` | Yes | The time when the activity occurred. |
| `trees_url` | `str` | No |  |
| `type` | `str` | No |  |
| `url` | `str` | No |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Activity().list({"owner": "example", "repo": "example"})
for activity in results:
    print(activity)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Activity().load({"owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Activity().remove({"thread_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Activity().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AddEntity

```python
add = client.Add()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `list` | Yes | The GitHub user handles to add to the team. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Add().create({
    "enterprise": "example_enterprise",  # str
    "team_id": "example_team_id",  # str
    "usernames": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiInsightsRouteStatEntity

```python
api_insights_route_stat = client.ApiInsightsRouteStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_route` | `str` | No | The API path's route template |
| `http_method` | `str` | No | The HTTP method |
| `last_rate_limited_timestamp` | `str` | No |  |
| `last_request_timestamp` | `str` | No |  |
| `rate_limited_request_count` | `int` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | No | The total number of requests within the queried time period |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiInsightsRouteStat().list({"actor_id": 1, "actor_type": "example", "org": "example", "min_timestamp": "example"})
for api_insights_route_stat in results:
    print(api_insights_route_stat)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsRouteStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiInsightsSubjectStatEntity

```python
api_insights_subject_stat = client.ApiInsightsSubjectStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `last_rate_limited_timestamp` | `str` | No |  |
| `last_request_timestamp` | `str` | No |  |
| `rate_limited_request_count` | `int` | No |  |
| `subject_id` | `int` | No |  |
| `subject_name` | `str` | No |  |
| `subject_type` | `str` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiInsightsSubjectStat().list({"org_id": "example", "min_timestamp": "example"})
for api_insights_subject_stat in results:
    print(api_insights_subject_stat)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsSubjectStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiInsightsSummaryStatEntity

```python
api_insights_summary_stat = client.ApiInsightsSummaryStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `rate_limited_request_count` | `int` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | No | The total number of requests within the queried time period |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiInsightsSummaryStat().load({"min_timestamp": "min_timestamp"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsSummaryStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiInsightsTimeStatEntity

```python
api_insights_time_stat = client.ApiInsightsTimeStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate_limited_request_count` | `int` | No |  |
| `timestamp` | `str` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiInsightsTimeStat().list({"min_timestamp": "example", "timestamp_increment": "example"})
for api_insights_time_stat in results:
    print(api_insights_time_stat)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiInsightsTimeStat().load({"org_id": "org_id", "user_id": "user_id", "min_timestamp": "min_timestamp", "timestamp_increment": "timestamp_increment"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsTimeStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiInsightsUserStatEntity

```python
api_insights_user_stat = client.ApiInsightsUserStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `int` | No |  |
| `actor_name` | `str` | No |  |
| `actor_type` | `str` | No |  |
| `id` | `str` | No |  |
| `integration_id` | `int` | No |  |
| `last_rate_limited_timestamp` | `str` | No |  |
| `last_request_timestamp` | `str` | No |  |
| `oauth_application_id` | `int` | No |  |
| `rate_limited_request_count` | `int` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiInsightsUserStat().load({"id": "api_insights_user_stat_id", "org_id": "org_id", "min_timestamp": "min_timestamp"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiInsightsUserStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiOverviewEntity

```python
api_overview = client.ApiOverview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | No |  |
| `actions_macos` | `list` | No |  |
| `api` | `list` | No |  |
| `codespaces` | `list` | No |  |
| `copilot` | `list` | No |  |
| `dependabot` | `list` | No |  |
| `domains` | `dict` | No |  |
| `git` | `list` | No |  |
| `github_enterprise_importer` | `list` | No |  |
| `hooks` | `list` | No |  |
| `importer` | `list` | No |  |
| `packages` | `list` | No |  |
| `pages` | `list` | No |  |
| `ssh_key_fingerprints` | `dict` | No |  |
| `ssh_keys` | `list` | No |  |
| `verifiable_password_authentication` | `bool` | Yes |  |
| `web` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiOverview().list()
for api_overview in results:
    print(api_overview)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiOverviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AppEntity

```python
app = client.App()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `str` | Yes |  |
| `account` | `Any` | Yes |  |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `allow_update_branch` | `bool` | No | Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging. |
| `anonymous_access_enabled` | `bool` | No | Whether anonymous git access is enabled for this repository |
| `app_id` | `int` | Yes |  |
| `app_slug` | `str` | Yes |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `client_id` | `str` | No |  |
| `client_secret` | `str` | No |  |
| `clone_url` | `str` | Yes |  |
| `code_search_index_status` | `dict` | No | The status of the code search index for this repository |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contact_email` | `str` | No |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | No |  |
| `default_branch` | `str` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | No |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `str` | Yes |  |
| `events` | `list` | No |  |
| `events_url` | `str` | Yes |  |
| `external_url` | `str` | No |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_multiple_single_files` | `bool` | No |  |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `str` | Yes |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | No |  |
| `id` | `int` | No | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `master_branch` | `str` | No |  |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | No | The name of the repository. |
| `node_id` | `str` | No |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `owner` | `dict` | No | A GitHub user. |
| `pem` | `str` | No |  |
| `permissions` | `dict` | No | The permissions granted to the user access token. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `repositories_url` | `str` | Yes |  |
| `repository_selection` | `str` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `str` | Yes |  |
| `single_file_paths` | `list` | No |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `slug` | `str` | No |  |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `suspended_at` | `str` | Yes |  |
| `suspended_by` | `dict` | Yes | A GitHub user. |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |
| `webhook_secret` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.App().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.App().list()
for app in results:
    print(app)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.App().remove({"installation_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.App().update({
    "installation_id": 1,
    "repository_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AppEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ArtifactEntity

```python
artifact = client.Artifact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `head_branch` | `str` | No |  |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `str` | No |  |
| `id` | `int` | No |  |
| `repository_id` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Artifact().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArtifactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssigneeEntity

```python
assignee = client.Assignee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Assignee().list({"owner": "example", "repo": "example"})
for assignee in results:
    print(assignee)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssigneeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthenticationTokenEntity

```python
authentication_token = client.AuthenticationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `str` | No |  |
| `token` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AuthenticationToken().create({
    "org_id": "example_org_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthenticationTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthorizationEntity

```python
authorization = client.Authorization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `str` | Yes | The access_token of the OAuth or GitHub application. |
| `app` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `expires_at` | `str` | Yes |  |
| `fingerprint` | `str` | Yes |  |
| `hashed_token` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `installation` | `dict` | Yes |  |
| `note` | `str` | Yes |  |
| `note_url` | `str` | Yes |  |
| `permissions` | `dict` | No | The permissions granted to the user access token. |
| `repositories` | `list` | No | The list of repository names to scope the user access token to. |
| `repository_ids` | `list` | No | The list of repository IDs to scope the user access token to. |
| `scopes` | `list` | Yes | A list of scopes that this authorization is in. |
| `target` | `str` | No | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | No | The ID of the user or organization to scope the user access token to. |
| `token` | `str` | Yes |  |
| `token_last_eight` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Authorization().create({
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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Authorization().update({
    "application_id": "application_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutolinkEntity

```python
autolink = client.Autolink()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes |  |
| `is_alphanumeric` | `bool` | Yes | Whether this autolink reference matches alphanumeric characters. |
| `key_prefix` | `str` | Yes | The prefix of a key that is linkified. |
| `updated_at` | `str` | No |  |
| `url_template` | `str` | Yes | A template for the target URL that is generated if a key was found. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `is_alphanumeric` | - | - | Yes |
| `key_prefix` | - | - | - |
| `updated_at` | - | - | - |
| `url_template` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Autolink().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "id": 1,  # int
    "is_alphanumeric": True,  # bool
    "key_prefix": "example_key_prefix",  # str
    "url_template": "example_url_template",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Autolink().list({"owner": "example", "repo": "example"})
for autolink in results:
    print(autolink)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Autolink().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutolinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BaseGistEntity

```python
base_gist = client.BaseGist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `str` | No |  |
| `commits_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `files` | `dict` | No |  |
| `forks` | `list` | No |  |
| `forks_url` | `str` | No |  |
| `git_pull_url` | `str` | No |  |
| `git_push_url` | `str` | No |  |
| `history` | `list` | No |  |
| `html_url` | `str` | No |  |
| `id` | `str` | No |  |
| `node_id` | `str` | No |  |
| `owner` | `dict` | No | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `user` | `str` | No | A GitHub user. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BaseGist().create({
    "gist_id": "example_gist_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BaseGist().list()
for base_gist in results:
    print(base_gist)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BaseGistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingUsageReportEntity

```python
billing_usage_report = client.BillingUsageReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | Date of the usage line item. |
| `discountAmount` | `float` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float` | Yes | Net amount of the usage line item. |
| `organizationName` | `str` | Yes | Name of the organization. |
| `pricePerUnit` | `float` | Yes | Price per unit of the usage line item. |
| `product` | `str` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `str` | No | Name of the repository. |
| `sku` | `str` | Yes | SKU name. |
| `unitType` | `str` | Yes | Unit type of the usage line item. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillingUsageReport().list({"org": "example"})
for billing_usage_report in results:
    print(billing_usage_report)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingUsageReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingUsageReportUserEntity

```python
billing_usage_report_user = client.BillingUsageReportUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | Yes | Date of the usage line item. |
| `discountAmount` | `float` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float` | Yes | Net amount of the usage line item. |
| `pricePerUnit` | `float` | Yes | Price per unit of the usage line item. |
| `product` | `str` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `str` | No | Name of the repository. |
| `sku` | `str` | Yes | SKU name. |
| `unitType` | `str` | Yes | Unit type of the usage line item. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillingUsageReportUser().list({"username": "example"})
for billing_usage_report_user in results:
    print(billing_usage_report_user)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingUsageReportUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BlobEntity

```python
blob = client.Blob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | Yes |  |
| `encoding` | `str` | Yes |  |
| `highlighted_content` | `str` | No |  |
| `id` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `sha` | `str` | Yes |  |
| `size` | `int` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Blob().load({"id": "blob_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BlockEntity

```python
block = client.Block()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Block().list()
for block in results:
    print(block)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BlockEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchEntity

```python
branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | Yes | Commit |
| `id` | `str` | No |  |
| `links` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `pattern` | `str` | No |  |
| `protected` | `bool` | Yes |  |
| `protection` | `dict` | Yes | Branch Protection |
| `protection_url` | `str` | Yes |  |
| `required_approving_review_count` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Branch().load({"id": "branch_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchProtectionEntity

```python
branch_protection = client.BranchProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `dict` | No |  |
| `allow_force_pushes` | `dict` | No |  |
| `allow_fork_syncing` | `dict` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `dict` | No |  |
| `enabled` | `bool` | No |  |
| `enforce_admins` | `dict` | Yes | Protected Branch Admin Enforced |
| `id` | `str` | No |  |
| `lock_branch` | `dict` | No | Whether to set the branch as read-only. |
| `name` | `str` | No |  |
| `protection_url` | `str` | No |  |
| `required_conversation_resolution` | `dict` | No |  |
| `required_linear_history` | `dict` | No |  |
| `required_pull_request_reviews` | `dict` | Yes | Protected Branch Pull Request Review |
| `required_signatures` | `dict` | Yes |  |
| `required_status_checks` | `dict` | Yes | Protected Branch Required Status Check |
| `restrictions` | `dict` | Yes | Branch Restriction Policy |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BranchProtection().load({"id": "branch_protection_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchProtectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchRestrictionPolicyEntity

```python
branch_restriction_policy = client.BranchRestrictionPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `list` | Yes |  |
| `apps_url` | `str` | Yes |  |
| `teams` | `list` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `users` | `list` | Yes |  |
| `users_url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BranchRestrictionPolicy().list({"branch_id": "example", "owner": "example", "repo": "example"})
for branch_restriction_policy in results:
    print(branch_restriction_policy)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchRestrictionPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchShortEntity

```python
branch_short = client.BranchShort()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `protected` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BranchShort().list({"commit_sha": "example", "owner": "example", "repo": "example"})
for branch_short in results:
    print(branch_short)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchShortEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchWithProtectionEntity

```python
branch_with_protection = client.BranchWithProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `new_name` | `str` | Yes | The new name of the branch. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BranchWithProtection().create({
    "id": "example_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "new_name": "example_new_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchWithProtectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CampaignEntity

```python
campaign = client.Campaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_stats` | `dict` | Yes |  |
| `closed_at` | `str` | No | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `list` | Yes | The code scanning alerts to include in this campaign |
| `contact_link` | `str` | Yes | The contact link of the campaign. |
| `created_at` | `str` | Yes | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `str` | Yes | The campaign description |
| `ends_at` | `str` | Yes | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | No | If true, will automatically generate issues for the campaign. |
| `id` | `str` | No |  |
| `managers` | `list` | Yes | The campaign managers |
| `name` | `str` | No | The campaign name |
| `number` | `int` | Yes | The number of the newly created campaign |
| `published_at` | `str` | No | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `str` | Yes | Indicates whether a campaign is open or closed |
| `team_managers` | `list` | No | The campaign team managers |
| `updated_at` | `str` | Yes | The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Campaign().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Campaign().list({"org_id": "example"})
for campaign in results:
    print(campaign)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Campaign().load({"id": 1, "org_id": "org_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Campaign().remove({"id": 1, "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Campaign().update({
    "id": 1,
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckEntity

```python
check = client.Check()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `str` | Yes |  |
| `app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `str` | Yes |  |
| `check_runs_url` | `str` | Yes |  |
| `check_suite` | `dict` | Yes |  |
| `completed_at` | `str` | Yes |  |
| `conclusion` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deployment` | `dict` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `str` | Yes |  |
| `external_id` | `str` | Yes |  |
| `head_branch` | `str` | Yes |  |
| `head_commit` | `dict` | Yes | A commit. |
| `head_sha` | `str` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `latest_check_runs_count` | `int` | Yes |  |
| `name` | `str` | Yes | The name of the check. |
| `node_id` | `str` | Yes |  |
| `output` | `dict` | Yes |  |
| `pull_requests` | `list` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `dict` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `started_at` | `str` | Yes |  |
| `status` | `str` | Yes | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Check().list({"owner": "example", "repo": "example"})
for check in results:
    print(check)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckAnnotationEntity

```python
check_annotation = client.CheckAnnotation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation_level` | `str` | Yes |  |
| `blob_href` | `str` | Yes |  |
| `end_column` | `int` | Yes |  |
| `end_line` | `int` | Yes |  |
| `message` | `str` | Yes |  |
| `path` | `str` | Yes |  |
| `raw_details` | `str` | Yes |  |
| `start_column` | `int` | Yes |  |
| `start_line` | `int` | Yes |  |
| `title` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CheckAnnotation().list({"check_run_id": 1, "owner": "example", "repo": "example"})
for check_annotation in results:
    print(check_annotation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckAnnotationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckAutomatedSecurityFixEntity

```python
check_automated_security_fix = client.CheckAutomatedSecurityFix()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `bool` | Yes | Whether Dependabot security updates are paused for the repository. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CheckAutomatedSecurityFix().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckAutomatedSecurityFixEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckRunEntity

```python
check_run = client.CheckRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | No | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `dict` | Yes |  |
| `completed_at` | `str` | Yes | The time the check completed. |
| `conclusion` | `str` | Yes | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `dict` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `str` | Yes | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `str` | Yes | A reference for the run on the integrator's system. |
| `head_sha` | `str` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `name` | `str` | Yes | The name of the check. |
| `node_id` | `str` | Yes |  |
| `output` | `dict` | Yes | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `list` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `started_at` | `str` | Yes | The time that the check run began. |
| `status` | `str` | Yes | The phase of the lifecycle that the check is currently in. |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CheckRun().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CheckRun().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CheckRun().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckSuiteEntity

```python
check_suite = client.CheckSuite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `str` | Yes |  |
| `app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `str` | Yes |  |
| `check_runs_url` | `str` | Yes |  |
| `conclusion` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `head_branch` | `str` | Yes |  |
| `head_commit` | `dict` | Yes | A commit. |
| `head_sha` | `str` | Yes | The SHA of the head commit that is being checked. |
| `id` | `int` | Yes |  |
| `latest_check_runs_count` | `int` | Yes |  |
| `node_id` | `str` | Yes |  |
| `pull_requests` | `list` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `status` | `str` | Yes | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CheckSuite().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CheckSuite().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckSuiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckSuitePreferenceEntity

```python
check_suite_preference = client.CheckSuitePreference()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_trigger_checks` | `list` | No | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `dict` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CheckSuitePreference().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckSuitePreferenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClassroomEntity

```python
classroom = client.Classroom()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Returns whether classroom is archived or not. |
| `avatar_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the classroom. |
| `login` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the classroom. |
| `node_id` | `str` | Yes |  |
| `url` | `str` | Yes | The url of the classroom on GitHub Classroom. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Classroom().list()
for classroom in results:
    print(classroom)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Classroom().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClassroomAcceptedAssignmentEntity

```python
classroom_accepted_assignment = client.ClassroomAcceptedAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `dict` | Yes | A GitHub Classroom assignment |
| `commit_count` | `int` | Yes | Count of student commits. |
| `grade` | `str` | Yes | Most recent grade. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `passing` | `bool` | Yes | Whether a submission passed. |
| `repository` | `dict` | Yes | A GitHub repository view for Classroom |
| `students` | `list` | Yes |  |
| `submitted` | `bool` | Yes | Whether an accepted assignment has been submitted. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ClassroomAcceptedAssignment().list({"assignment_id": 1})
for classroom_accepted_assignment in results:
    print(classroom_accepted_assignment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAcceptedAssignmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClassroomAssignmentEntity

```python
classroom_assignment = client.ClassroomAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `dict` | Yes | A GitHub Classroom classroom |
| `deadline` | `str` | Yes | The time at which the assignment is due. |
| `editor` | `str` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Yes | Whether feedback pull request will be created when a student accepts the assignment. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `str` | Yes | The link that a student can use to accept the assignment. |
| `language` | `str` | Yes | The programming language used in the assignment. |
| `max_members` | `int` | Yes | The maximum allowable members per team. |
| `max_teams` | `int` | Yes | The maximum allowable teams for the assignment. |
| `passing` | `int` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `str` | Yes | Sluggified name of the assignment. |
| `starter_code_repository` | `dict` | Yes | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Yes | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | Yes | The number of students that have submitted the assignment. |
| `title` | `str` | Yes | Assignment title. |
| `type` | `str` | Yes | Whether it's a group assignment or individual assignment. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ClassroomAssignment().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAssignmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClassroomAssignmentGradeEntity

```python
classroom_assignment_grade = client.ClassroomAssignmentGrade()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_name` | `str` | Yes | Name of the assignment |
| `assignment_url` | `str` | Yes | URL of the assignment |
| `github_username` | `str` | Yes | GitHub username of the student |
| `group_name` | `str` | No | If a group assignment, name of the group the student is in |
| `points_available` | `int` | Yes | Number of points available for the assignment |
| `points_awarded` | `int` | Yes | Number of points awarded to the student |
| `roster_identifier` | `str` | Yes | Roster identifier of the student |
| `starter_code_url` | `str` | Yes | URL of the starter code for the assignment |
| `student_repository_name` | `str` | Yes | Name of the student's assignment repository |
| `student_repository_url` | `str` | Yes | URL of the student's assignment repository |
| `submission_timestamp` | `str` | Yes | Timestamp of the student's assignment submission |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ClassroomAssignmentGrade().list({"assignment_id": 1})
for classroom_assignment_grade in results:
    print(classroom_assignment_grade)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClassroomAssignmentGradeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CloneEntity

```python
clone = client.Clone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `str` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Clone().list({"owner": "example", "repo": "example"})
for clone in results:
    print(clone)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeFrequencyEntity

```python
code_frequency = client.CodeFrequency()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeFrequency().list({"owner": "example", "repo": "example"})
for code_frequency in results:
    print(code_frequency)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeFrequencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeFrequencyStatEntity

```python
code_frequency_stat = client.CodeFrequencyStat()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeFrequencyStat().list({"owner": "example", "repo": "example"})
for code_frequency_stat in results:
    print(code_frequency_stat)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeFrequencyStatEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeOfConductEntity

```python
code_of_conduct = client.CodeOfConduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | No |  |
| `html_url` | `str` | Yes |  |
| `key` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeOfConduct().list()
for code_of_conduct in results:
    print(code_of_conduct)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeOfConduct().load({"key": "key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeOfConductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningEntity

```python
code_scanning = client.CodeScanning()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkout_uri` | `str` | No | The base directory used in the analysis, as it appears in the SARIF file. |
| `commit_sha` | `str` | Yes | The SHA of the commit to which the analysis you are uploading relates. |
| `ref` | `str` | Yes | The full Git reference, formatted as `refs/heads/<branch name>`, `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`. |
| `sarif` | `str` | Yes | A Base64 string representing the SARIF file to upload. |
| `started_at` | `str` | No | The time that the analysis run began. |
| `tool_name` | `str` | No | The name of the tool used to generate the code scanning analysis. |
| `validate` | `bool` | No | Whether the SARIF file will be validated according to the code scanning specifications. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CodeScanning().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "commit_sha": "example_commit_sha",  # str
    "ref": "example_ref",  # str
    "sarif": "example_sarif",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CodeScanning().remove({"language": "language", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAlertEntity

```python
code_scanning_alert = client.CodeScanningAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_request` | `bool` | No | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `str` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | Yes | A GitHub user. |
| `dismissed_at` | `str` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | Yes | A GitHub user. |
| `dismissed_comment` | `str` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | Yes | The GitHub URL of the alert resource. |
| `id` | `str` | No |  |
| `instances_url` | `str` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `dict` | Yes |  |
| `state` | `str` | Yes | State of a code scanning alert. |
| `tool` | `dict` | Yes |  |
| `updated_at` | `str` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | Yes | The REST API URL of the alert resource. |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CodeScanningAlert().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAlertInstanceEntity

```python
code_scanning_alert_instance = client.CodeScanningAlertInstance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `str` | No | Identifies the configuration under which the analysis was executed. |
| `category` | `str` | No | Identifies the configuration under which the analysis was executed. |
| `classifications` | `list` | No | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `str` | No |  |
| `environment` | `str` | No | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `str` | No |  |
| `location` | `dict` | No | Describe a region within a file for the alert. |
| `message` | `dict` | No |  |
| `ref` | `str` | No | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `str` | No | State of a code scanning alert. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningAlertInstance().list({"alert_number": 1, "owner": "example", "repo": "example"})
for code_scanning_alert_instance in results:
    print(code_scanning_alert_instance)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertInstanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAlertItemEntity

```python
code_scanning_alert_item = client.CodeScanningAlertItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | Yes | A GitHub user. |
| `dismissed_at` | `str` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | Yes | A GitHub user. |
| `dismissed_comment` | `str` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `str` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `dict` | Yes |  |
| `state` | `str` | Yes | State of a code scanning alert. |
| `tool` | `dict` | Yes |  |
| `updated_at` | `str` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningAlertItem().list({"owner": "example", "repo": "example"})
for code_scanning_alert_item in results:
    print(code_scanning_alert_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAlertItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAnalysiEntity

```python
code_scanning_analysi = client.CodeScanningAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `str` | Yes | Identifies the configuration under which the analysis was executed. |
| `category` | `str` | No | Identifies the configuration under which the analysis was executed. |
| `commit_sha` | `str` | Yes | The SHA of the commit to which the analysis you are uploading relates. |
| `created_at` | `str` | Yes | The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `deletable` | `bool` | Yes |  |
| `environment` | `str` | Yes | Identifies the variable values associated with the environment in which this analysis was performed. |
| `error` | `str` | Yes |  |
| `guid` | `str` | No | The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. |
| `id` | `int` | Yes | Unique identifier for this analysis. |
| `name` | `str` | No | The name of the tool used to generate the code scanning analysis. |
| `ref` | `str` | Yes | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `results_count` | `int` | Yes | The total number of results in the analysis. |
| `rules_count` | `int` | Yes | The total number of rules used in the analysis. |
| `sarif_id` | `str` | Yes | An identifier for the upload. |
| `tool` | `dict` | Yes |  |
| `url` | `str` | Yes | The REST API URL of the analysis resource. |
| `version` | `str` | No | The version of the tool used to generate the code scanning analysis. |
| `warning` | `str` | Yes | Warning generated when processing the analysis |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningAnalysi().list({"owner": "example", "repo": "example"})
for code_scanning_analysi in results:
    print(code_scanning_analysi)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningAnalysi().load({"analysis_id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAnalysiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAnalysisDeletionEntity

```python
code_scanning_analysis_deletion = client.CodeScanningAnalysisDeletion()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CodeScanningAnalysisDeletion().remove({"analysis_id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAnalysisDeletionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAutofixEntity

```python
code_scanning_autofix = client.CodeScanningAutofix()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | The description of an autofix. |
| `started_at` | `str` | Yes | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `str` | Yes | The status of an autofix. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CodeScanningAutofix().create({
    "alert_number": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "description": "example_description",  # str
    "started_at": "example_started_at",  # str
    "status": "example_status",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningAutofix().load({"alert_number": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAutofixEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningAutofixCommitEntity

```python
code_scanning_autofix_commit = client.CodeScanningAutofixCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | No | Commit message to be used. |
| `target_ref` | `str` | No | The Git reference of target branch for the commit. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CodeScanningAutofixCommit().create({
    "alert_id": 1,  # int
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningAutofixCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningCodeqlDatabaseEntity

```python
code_scanning_codeql_database = client.CodeScanningCodeqlDatabase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `commit_oid` | `str` | No | The commit SHA of the repository at the time the CodeQL database was created. |
| `content_type` | `str` | Yes | The MIME type of the CodeQL database file. |
| `created_at` | `str` | Yes | The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the CodeQL database. |
| `language` | `str` | Yes | The language of the CodeQL database. |
| `login` | `str` | Yes |  |
| `name` | `str` | No | The name of the CodeQL database. |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes | The size of the CodeQL database file in bytes. |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes | The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `uploader` | `dict` | Yes | A GitHub user. |
| `url` | `str` | Yes | The URL at which to download the CodeQL database. |
| `user_view_type` | `str` | No |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningCodeqlDatabase().list({"owner": "example", "repo": "example"})
for code_scanning_codeql_database in results:
    print(code_scanning_codeql_database)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningCodeqlDatabase().load({"language": "language", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningCodeqlDatabaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningDefaultSetupEntity

```python
code_scanning_default_setup = client.CodeScanningDefaultSetup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `languages` | `list` | No | Languages to be analyzed. |
| `query_suite` | `str` | No | CodeQL query suite to be used. |
| `runner_label` | `str` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `str` | No | Runner type to be used. |
| `schedule` | `str` | No | The frequency of the periodic analysis. |
| `state` | `str` | No | Code scanning default setup has been configured or not. |
| `threat_model` | `str` | No | Threat model to be used for code scanning analysis. |
| `updated_at` | `str` | No | Timestamp of latest configuration update. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningDefaultSetup().list({"owner": "example", "repo": "example"})
for code_scanning_default_setup in results:
    print(code_scanning_default_setup)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningDefaultSetupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningOrganizationAlertItemEntity

```python
code_scanning_organization_alert_item = client.CodeScanningOrganizationAlertItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `dict` | Yes | A GitHub user. |
| `dismissed_at` | `str` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | Yes | A GitHub user. |
| `dismissed_comment` | `str` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `str` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `str` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `str` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `dict` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `dict` | Yes | A GitHub repository. |
| `rule` | `dict` | Yes |  |
| `state` | `str` | Yes | State of a code scanning alert. |
| `tool` | `dict` | Yes |  |
| `updated_at` | `str` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeScanningOrganizationAlertItem().list({"org_id": "example"})
for code_scanning_organization_alert_item in results:
    print(code_scanning_organization_alert_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningOrganizationAlertItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningSarifsStatusEntity

```python
code_scanning_sarifs_status = client.CodeScanningSarifsStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analyses_url` | `str` | No | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `list` | No | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `str` | No | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningSarifsStatus().load({"owner": "owner", "repo": "repo", "sarif_id": "sarif_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningSarifsStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningVariantAnalysiEntity

```python
code_scanning_variant_analysi = client.CodeScanningVariantAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions_workflow_run_id` | `int` | No | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `dict` | Yes | A GitHub user. |
| `completed_at` | `str` | No | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `dict` | Yes | A GitHub repository. |
| `created_at` | `str` | No | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `str` | No | The reason for a failure of the variant analysis. |
| `id` | `int` | Yes | The ID of the variant analysis. |
| `language` | `str` | Yes | The language targeted by the CodeQL query |
| `query_language` | `str` | Yes | The language targeted by the CodeQL query |
| `query_pack` | `str` | Yes | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `str` | Yes | The download url for the query pack. |
| `repositories` | `list` | No | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `list` | No | List of repository lists to run the query against. |
| `repository_owners` | `list` | No | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `list` | No |  |
| `skipped_repositories` | `dict` | Yes | Information about repositories that were skipped from processing. |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | No | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CodeScanningVariantAnalysi().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningVariantAnalysi().load({"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningVariantAnalysiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeScanningVariantAnalysisRepoTaskEntity

```python
code_scanning_variant_analysis_repo_task = client.CodeScanningVariantAnalysisRepoTask()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archive_url` | `str` | Yes | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `str` | Yes | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `str` | Yes | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `str` | Yes | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `str` | Yes | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `str` | Yes | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `str` | Yes | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `str` | Yes | A template for the API URL to compare two commits or refs. |
| `contents_url` | `str` | Yes | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `str` | Yes | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `str` | Yes | The API URL to list the deployments of the repository. |
| `description` | `str` | Yes | The repository description. |
| `downloads_url` | `str` | Yes | The API URL to list the downloads on the repository. |
| `events_url` | `str` | Yes | The API URL to list the events of the repository. |
| `fork` | `bool` | Yes | Whether the repository is a fork. |
| `forks_url` | `str` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `str` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `str` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `str` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `str` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `github_id` | `int` | Yes | A unique identifier of the repository. |
| `hooks_url` | `str` | Yes | The API URL to list the hooks on the repository. |
| `html_url` | `str` | Yes | The URL to view the repository on GitHub.com. |
| `id` | `str` | Yes | A unique identifier of the repository. |
| `issue_comment_url` | `str` | Yes | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `str` | Yes | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `str` | Yes | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `str` | Yes | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `str` | Yes | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `str` | Yes | The API URL to get information about the languages of the repository. |
| `merges_url` | `str` | Yes | The API URL to merge branches in the repository. |
| `milestones_url` | `str` | Yes | A template for the API URL to get information about milestones of the repository. |
| `name` | `str` | Yes | The name of the repository. |
| `node_id` | `str` | Yes | The GraphQL identifier of the repository. |
| `notifications_url` | `str` | Yes | A template for the API URL to get information about notifications on the repository. |
| `owner` | `dict` | Yes | A GitHub user. |
| `private` | `bool` | Yes | Whether the repository is private. |
| `pulls_url` | `str` | Yes | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `str` | Yes | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `str` | Yes | The API URL to list the stargazers on the repository. |
| `statuses_url` | `str` | Yes | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `str` | Yes | The API URL to list the subscribers on the repository. |
| `subscription_url` | `str` | Yes | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `str` | Yes | The API URL to get information about tags on the repository. |
| `teams_url` | `str` | Yes | The API URL to list the teams on the repository. |
| `trees_url` | `str` | Yes | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `str` | Yes | The URL to get more information about the repository from the GitHub API. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeScanningVariantAnalysisRepoTask().load({"codeql_variant_analysis_id": 1, "owner": "owner", "repo": "repo", "repo_name": "repo_name", "repo_owner": "repo_owner"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeSecurityEntity

```python
code_security = client.CodeSecurity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `str` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `str` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `dict` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `str` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `dict` | No | Feature options for code scanning |
| `created_at` | `str` | No |  |
| `default_for_new_repos` | `str` | No | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `str` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `str` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `str` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `str` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `dict` | No | Feature options for Automatic dependency submission |
| `description` | `str` | No | A description of the code security configuration |
| `enforcement` | `str` | No | The enforcement status for a security configuration |
| `html_url` | `str` | No | The URL of the configuration |
| `id` | `int` | No | The ID of the code security configuration |
| `name` | `str` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `str` | No | The enablement status of private vulnerability reporting |
| `secret_scanning` | `str` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `str` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `str` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `dict` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `str` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `str` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `str` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `str` | No | The enablement status of secret scanning validity checks |
| `target_type` | `str` | No | The type of the code security configuration. |
| `updated_at` | `str` | No |  |
| `url` | `str` | No | The URL of the configuration |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CodeSecurity().remove({"configuration_id": 1, "enterprise": "enterprise"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CodeSecurity().update({
    "configuration_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeSecurityConfigurationEntity

```python
code_security_configuration = client.CodeSecurityConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `str` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `str` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `dict` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `str` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `dict` | No | Feature options for code scanning |
| `code_security` | `str` | No | The enablement status of GitHub Code Security features. |
| `created_at` | `str` | No |  |
| `dependabot_alerts` | `str` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `str` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `str` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `str` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `dict` | No | Feature options for Automatic dependency submission |
| `description` | `str` | No | A description of the code security configuration |
| `enforcement` | `str` | No | The enforcement status for a security configuration |
| `html_url` | `str` | No | The URL of the configuration |
| `id` | `int` | No | The ID of the code security configuration |
| `name` | `str` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `str` | No | The enablement status of private vulnerability reporting |
| `scope` | `str` | Yes | The type of repositories to attach the configuration to. |
| `secret_protection` | `str` | No | The enablement status of GitHub Secret Protection features. |
| `secret_scanning` | `str` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `str` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `str` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `dict` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `str` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `str` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `str` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `str` | No | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `list` | No | An array of repository IDs to attach the configuration to. |
| `target_type` | `str` | No | The type of the code security configuration. |
| `updated_at` | `str` | No |  |
| `url` | `str` | No | The URL of the configuration |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CodeSecurityConfiguration().create({
    "enterprise": "example_enterprise",  # str
    "scope": "example_scope",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeSecurityConfiguration().list({"org_id": "example"})
for code_security_configuration in results:
    print(code_security_configuration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CodeSecurityConfiguration().load({"id": 1, "enterprise": "enterprise"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CodeSecurityConfiguration().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeSecurityConfigurationRepositoryEntity

```python
code_security_configuration_repository = client.CodeSecurityConfigurationRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `repository` | `dict` | Yes | A GitHub repository. |
| `status` | `str` | No | The attachment status of the code security configuration on the repository. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeSecurityConfigurationRepository().list({"configuration_id": 1})
for code_security_configuration_repository in results:
    print(code_security_configuration_repository)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeSecurityDefaultConfigurationEntity

```python
code_security_default_configuration = client.CodeSecurityDefaultConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `dict` | No | A code security configuration |
| `default_for_new_repos` | `Any` | No | The visibility of newly created repositories for which the code security configuration will be applied to by default |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeSecurityDefaultConfiguration().list({"enterprise": "example"})
for code_security_default_configuration in results:
    print(code_security_default_configuration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeSecurityDefaultConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodeownersErrorEntity

```python
codeowners_error = client.CodeownersError()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column` | `int` | Yes | The column number where this errors occurs. |
| `kind` | `str` | Yes | The type of error. |
| `line` | `int` | Yes | The line number where this errors occurs. |
| `message` | `str` | Yes | A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting). |
| `path` | `str` | Yes | The path of the file where the error occured. |
| `source` | `str` | No | The contents of the line where the error occurs. |
| `suggestion` | `str` | No | Suggested action to fix the error. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CodeownersError().list({"owner": "example", "repo": "example"})
for codeowners_error in results:
    print(codeowners_error)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodeownersErrorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CodespaceEntity

```python
codespace = client.Codespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `bool` | Yes | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `str` | Yes |  |
| `billable_owner` | `dict` | Yes | A GitHub user. |
| `blobs_url` | `str` | Yes |  |
| `branch` | `str` | No | Name of the exported branch |
| `branches_url` | `str` | Yes |  |
| `client_ip` | `str` | No | IP for location auto-detection when proxying a request |
| `clone_url` | `str` | No |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `completed_at` | `str` | No | Completion time of the last export operation |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `cpus` | `int` | Yes | How many cores are available to the codespace. |
| `created_at` | `str` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | No |  |
| `defaults` | `dict` | Yes |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `devcontainer_path` | `str` | No | Path to devcontainer.json from repo root used to create Codespace. |
| `disabled` | `bool` | No |  |
| `display_name` | `str` | No | Display name for this codespace. |
| `downloads_url` | `str` | Yes |  |
| `encrypted_value` | `str` | No | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secre… |
| `environment_id` | `str` | Yes | UUID identifying this codespace's environment. |
| `events_url` | `str` | Yes |  |
| `export_url` | `str` | No | Url for fetching export details |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `geo` | `str` | No | The geographic area for this codespace. |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_status` | `dict` | Yes | Details about the codespace's git repository. |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | No | Web url for the exported branch |
| `id` | `str` | No | Id for the export details |
| `idle_timeout_minutes` | `int` | Yes | The number of minutes of inactivity after which this codespace will be automatically stopped. |
| `idle_timeout_notice` | `str` | No | Text to show user when codespace idle timeout minutes has been overriden by an organization policy |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `key` | `str` | Yes | The Base64 encoded public key. |
| `key_id` | `str` | Yes | The identifier for the key. |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `last_known_stop_notice` | `str` | No | The text to display to a user when a codespace has been stopped for a potentially actionable reason. |
| `last_used_at` | `str` | Yes | Last known time this codespace was started. |
| `license` | `dict` | No |  |
| `location` | `str` | Yes | The initally assigned location of a new codespace. |
| `machine` | `dict` | Yes | A description of the machine powering a codespace. |
| `machines_url` | `str` | Yes | API URL to access available alternate machine types for this codespace. |
| `memory_in_bytes` | `int` | Yes | How much memory is available to the codespace. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | No |  |
| `multi_repo_permissions_opt_out` | `bool` | No | Whether to authorize requested permissions from devcontainer.json |
| `name` | `str` | Yes | The name of the secret. |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `operating_system` | `str` | Yes | The operating system of the machine. |
| `owner` | `dict` | Yes | A GitHub user. |
| `path` | `str` | Yes |  |
| `pending_operation` | `bool` | No | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `str` | No | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `dict` | No |  |
| `prebuild` | `bool` | Yes | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `str` | Yes | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | No | Whether the new repository should be private. |
| `publish_url` | `str` | No | API URL to publish this codespace to a new repository. |
| `pulls_url` | `str` | Yes | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `str` | No |  |
| `recent_folders` | `list` | Yes | Recently opened folders inside the codespace. |
| `ref` | `str` | No | Git ref (typically a branch name) for this codespace |
| `releases_url` | `str` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `retention_expires_at` | `str` | No | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | No | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `str` | No |  |
| `runtime_constraints` | `dict` | No |  |
| `security_and_analysis` | `dict` | No |  |
| `selected_repositories_url` | `str` | No | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `list` | No | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `list` | Yes | The usernames of the organization members whose codespaces be billed to the organization. |
| `sha` | `str` | No | Git commit SHA of the exported branch |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `str` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `str` | Yes |  |
| `start_url` | `str` | Yes | API URL to start this codespace. |
| `state` | `str` | No | State of the latest export |
| `statuses_url` | `str` | Yes |  |
| `stop_url` | `str` | Yes | API URL to stop this codespace. |
| `storage_in_bytes` | `int` | Yes | How much storage is available to the codespace. |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `template` | `str` | No |  |
| `title` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `url` | `str` | No | API URL for this codespace. |
| `visibility` | `str` | Yes | The type of repositories in the organization that the secret is visible to |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |
| `web_url` | `str` | Yes | URL to access this codespace on the web. |
| `working_directory` | `str` | No | Working directory for this codespace |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Codespace().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Codespace().list()
for codespace in results:
    print(codespace)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Codespace().load({"id": "codespace_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Codespace().remove({"id": "codespace_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Codespace().update({
    "id": "codespace_id",
    "secret_name": "secret_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CodespaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CollaboratorEntity

```python
collaborator = client.Collaborator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `permissions` | `dict` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `role_name` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Collaborator().list({"project_id": 1})
for collaborator in results:
    print(collaborator)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollaboratorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CombinedBillingUsageEntity

```python
combined_billing_usage = client.CombinedBillingUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_left_in_billing_cycle` | `int` | Yes | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `int` | Yes | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `int` | Yes | Estimated sum of free and paid storage space (GB) used in billing cycle. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CombinedBillingUsage().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CombinedBillingUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CombinedCommitStatusEntity

```python
combined_commit_status = client.CombinedCommitStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `context` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `node_id` | `str` | Yes |  |
| `required` | `bool` | No |  |
| `state` | `str` | Yes |  |
| `target_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CombinedCommitStatus().list({"owner": "example", "ref": "example", "repo": "example"})
for combined_commit_status in results:
    print(combined_commit_status)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CombinedCommitStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommitEntity

```python
commit = client.Commit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Any` | Yes |  |
| `base` | `str` | Yes | The name of the base branch that the head will be merged into. |
| `comments_url` | `str` | Yes |  |
| `commit` | `dict` | Yes |  |
| `commit_message` | `str` | No | Commit message to use for the merge commit. |
| `committer` | `Any` | Yes |  |
| `files` | `list` | No |  |
| `head` | `str` | Yes | The head to merge. |
| `html_url` | `str` | Yes |  |
| `id` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `parents` | `list` | Yes |  |
| `sha` | `str` | Yes |  |
| `stats` | `dict` | No |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Commit().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Commit().list({"owner": "example", "repo": "example"})
for commit in results:
    print(commit)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Commit().load({"id": "commit_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommitActivityEntity

```python
commit_activity = client.CommitActivity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `list` | Yes |  |
| `total` | `int` | Yes |  |
| `week` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CommitActivity().list({"owner": "example", "repo": "example"})
for commit_activity in results:
    print(commit_activity)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommitCommentEntity

```python
commit_comment = client.CommitComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `body` | `str` | Yes | The contents of the comment. |
| `commit_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `line` | `int` | Yes | **Closing down notice**. |
| `node_id` | `str` | Yes |  |
| `path` | `str` | Yes | Relative path of the file to comment on. |
| `position` | `int` | Yes | Line index in the diff to comment on. |
| `reactions` | `dict` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CommitComment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CommitComment().list({"owner": "example", "repo": "example"})
for commit_comment in results:
    print(commit_comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CommitComment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CommitComment().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommitComparisonEntity

```python
commit_comparison = client.CommitComparison()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ahead_by` | `int` | Yes |  |
| `base_commit` | `dict` | Yes | Commit |
| `behind_by` | `int` | Yes |  |
| `commits` | `list` | Yes |  |
| `diff_url` | `str` | Yes |  |
| `files` | `list` | No |  |
| `html_url` | `str` | Yes |  |
| `merge_base_commit` | `dict` | Yes | Commit |
| `patch_url` | `str` | Yes |  |
| `permalink_url` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `total_commits` | `int` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CommitComparison().load({"basehead": "basehead", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommitComparisonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommunityProfileEntity

```python
community_profile = client.CommunityProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code_of_conduct` | `dict` | Yes | Code of Conduct Simple |
| `code_of_conduct_file` | `dict` | Yes |  |
| `contributing` | `dict` | Yes |  |
| `issue_template` | `dict` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `pull_request_template` | `dict` | Yes |  |
| `readme` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CommunityProfile().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommunityProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentFileEntity

```python
content_file = client.ContentFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `git` | `str` | Yes |  |
| `html` | `str` | Yes |  |
| `self` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContentFile().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentTrafficEntity

```python
content_traffic = client.ContentTraffic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `path` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContentTraffic().list({"owner": "example", "repo": "example"})
for content_traffic in results:
    print(content_traffic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentTrafficEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContributorEntity

```python
contributor = client.Contributor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | Yes | A GitHub user. |
| `avatar_url` | `str` | No |  |
| `contributions` | `int` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | No |  |
| `followers_url` | `str` | No |  |
| `following_url` | `str` | No |  |
| `gists_url` | `str` | No |  |
| `gravatar_id` | `str` | No |  |
| `html_url` | `str` | No |  |
| `id` | `int` | No |  |
| `login` | `str` | No |  |
| `name` | `str` | No |  |
| `node_id` | `str` | No |  |
| `organizations_url` | `str` | No |  |
| `received_events_url` | `str` | No |  |
| `repos_url` | `str` | No |  |
| `site_admin` | `bool` | No |  |
| `starred_url` | `str` | No |  |
| `subscriptions_url` | `str` | No |  |
| `total` | `int` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | No |  |
| `user_view_type` | `str` | No |  |
| `weeks` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Contributor().list({"owner": "example", "repo": "example"})
for contributor in results:
    print(contributor)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CopilotEntity

```python
copilot = client.Copilot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes | A GitHub user. |
| `assigning_team` | `Any` | No | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `str` | Yes | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `str` | No | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `str` | No | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `str` | No | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `dict` | Yes | A GitHub organization. |
| `pending_cancellation_date` | `str` | No | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `str` | No | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `list` | Yes | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `list` | Yes | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `str` | No | **Closing down notice:** This field is no longer relevant and is closing down. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Copilot().create({
    "org_id": "example_org_id",  # str
    "assignee": {},  # dict
    "created_at": "example_created_at",  # str
    "organization": {},  # dict
    "selected_teams": [],  # list
    "selected_usernames": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Copilot().list({"org_id": "example"})
for copilot in results:
    print(copilot)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Copilot().load({"org_id": "org_id", "username": "username"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Copilot().remove({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CopilotOrganizationDetailEntity

```python
copilot_organization_detail = client.CopilotOrganizationDetail()
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CopilotOrganizationDetail().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotOrganizationDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CopilotUsageMetricsDayEntity

```python
copilot_usage_metrics_day = client.CopilotUsageMetricsDay()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copilot_dotcom_chat` | `dict` | No | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `dict` | No | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `dict` | No | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `dict` | No | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `str` | Yes | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | No | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | No | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CopilotUsageMetricsDay().list({"org_id": "example"})
for copilot_usage_metrics_day in results:
    print(copilot_usage_metrics_day)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopilotUsageMetricsDayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CredentialEntity

```python
credential = client.Credential()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `list` | Yes | A list of credentials to be revoked, up to 1000 per request. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Credential().create({
    "credentials": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPropertyEntity

```python
custom_property = client.CustomProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_values` | `list` | No | An ordered list of the allowed values of the property. |
| `default_value` | `Any` | No | Default value of the property |
| `description` | `str` | No | Short description of the property |
| `properties` | `list` | Yes | The array of custom properties to create or update. |
| `property_name` | `str` | Yes | The name of the property |
| `required` | `bool` | No | Whether the property is required. |
| `source_type` | `str` | No | The source type of the property |
| `url` | `str` | No | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `str` | Yes | The type of the value for the property |
| `values_editable_by` | `str` | No | Who can edit the values of the property |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomProperty().list({"org_id": "example"})
for custom_property in results:
    print(custom_property)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomProperty().load({"custom_property_name": "custom_property_name", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomProperty().update({
    "custom_property_name": "custom_property_name",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPropertyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPropertyValueEntity

```python
custom_property_value = client.CustomPropertyValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `property_name` | `str` | Yes | The name of the property |
| `value` | `Any` | Yes | The value assigned to the property |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomPropertyValue().list({"owner": "example", "repo": "example"})
for custom_property_value in results:
    print(custom_property_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPropertyValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotEntity

```python
dependabot = client.Dependabot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `str` | Yes |  |
| `avatar_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | No |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | No |  |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | No |  |
| `default_level` | `str` | Yes | The default repository access level for Dependabot updates. |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | No |  |
| `login` | `str` | Yes |  |
| `members_url` | `str` | Yes |  |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | No |  |
| `name` | `str` | Yes | The name of the secret. |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `permissions` | `dict` | No |  |
| `private` | `bool` | Yes |  |
| `public_members_url` | `str` | Yes |  |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | No |  |
| `releases_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `repository_ids_to_add` | `list` | No | List of repository IDs to add. |
| `repository_ids_to_remove` | `list` | No | List of repository IDs to remove. |
| `role_name` | `str` | No |  |
| `security_and_analysis` | `dict` | No |  |
| `selected_repositories_url` | `str` | No |  |
| `selected_repository_ids` | `list` | Yes | An array of repository ids that can access the organization secret. |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `str` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `str` | Yes |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | Yes |  |
| `visibility` | `str` | No | Visibility of a secret |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Dependabot().list()
for dependabot in results:
    print(dependabot)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Dependabot().remove({"org_id": "org_id", "secret_name": "secret_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Dependabot().update({
    "org_id": "org_id",
    "repository_id": 1,
    "secret_id": "secret_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotAlertEntity

```python
dependabot_alert = client.DependabotAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `str` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `str` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `dict` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `str` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | Yes | A GitHub user. |
| `dismissed_comment` | `str` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `str` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `str` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | Yes | The GitHub URL of the alert resource. |
| `id` | `str` | No |  |
| `number` | `int` | Yes | The security alert number. |
| `security_advisory` | `dict` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `dict` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `str` | Yes | The state of the Dependabot alert. |
| `updated_at` | `str` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | Yes | The REST API URL of the alert resource. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DependabotAlert().list({"owner": "example", "repo": "example"})
for dependabot_alert in results:
    print(dependabot_alert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependabotAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DependabotAlert().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotAlertWithRepositoryEntity

```python
dependabot_alert_with_repository = client.DependabotAlertWithRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `str` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `str` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `dict` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `str` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `dict` | Yes | A GitHub user. |
| `dismissed_comment` | `str` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `str` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `str` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `str` | Yes | The GitHub URL of the alert resource. |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `dict` | Yes | A GitHub repository. |
| `security_advisory` | `dict` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `dict` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `str` | Yes | The state of the Dependabot alert. |
| `updated_at` | `str` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DependabotAlertWithRepository().list({"org_id": "example"})
for dependabot_alert_with_repository in results:
    print(dependabot_alert_with_repository)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotAlertWithRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotPublicKeyEntity

```python
dependabot_public_key = client.DependabotPublicKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | Yes | The Base64 encoded public key. |
| `key_id` | `str` | Yes | The identifier for the key. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependabotPublicKey().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotPublicKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotRepositoryAccessDetailEntity

```python
dependabot_repository_access_detail = client.DependabotRepositoryAccessDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archive_url` | `str` | Yes | A template for the API URL to download the repository as an archive. |
| `assignees_url` | `str` | Yes | A template for the API URL to list the available assignees for issues in the repository. |
| `blobs_url` | `str` | Yes | A template for the API URL to create or retrieve a raw Git blob in the repository. |
| `branches_url` | `str` | Yes | A template for the API URL to get information about branches in the repository. |
| `collaborators_url` | `str` | Yes | A template for the API URL to get information about collaborators of the repository. |
| `comments_url` | `str` | Yes | A template for the API URL to get information about comments on the repository. |
| `commits_url` | `str` | Yes | A template for the API URL to get information about commits on the repository. |
| `compare_url` | `str` | Yes | A template for the API URL to compare two commits or refs. |
| `contents_url` | `str` | Yes | A template for the API URL to get the contents of the repository. |
| `contributors_url` | `str` | Yes | A template for the API URL to list the contributors to the repository. |
| `deployments_url` | `str` | Yes | The API URL to list the deployments of the repository. |
| `description` | `str` | Yes | The repository description. |
| `downloads_url` | `str` | Yes | The API URL to list the downloads on the repository. |
| `events_url` | `str` | Yes | The API URL to list the events of the repository. |
| `fork` | `bool` | Yes | Whether the repository is a fork. |
| `forks_url` | `str` | Yes | The API URL to list the forks of the repository. |
| `full_name` | `str` | Yes | The full, globally unique, name of the repository. |
| `git_commits_url` | `str` | Yes | A template for the API URL to get information about Git commits of the repository. |
| `git_refs_url` | `str` | Yes | A template for the API URL to get information about Git refs of the repository. |
| `git_tags_url` | `str` | Yes | A template for the API URL to get information about Git tags of the repository. |
| `hooks_url` | `str` | Yes | The API URL to list the hooks on the repository. |
| `html_url` | `str` | Yes | The URL to view the repository on GitHub.com. |
| `id` | `int` | Yes | A unique identifier of the repository. |
| `issue_comment_url` | `str` | Yes | A template for the API URL to get information about issue comments on the repository. |
| `issue_events_url` | `str` | Yes | A template for the API URL to get information about issue events on the repository. |
| `issues_url` | `str` | Yes | A template for the API URL to get information about issues on the repository. |
| `keys_url` | `str` | Yes | A template for the API URL to get information about deploy keys on the repository. |
| `labels_url` | `str` | Yes | A template for the API URL to get information about labels of the repository. |
| `languages_url` | `str` | Yes | The API URL to get information about the languages of the repository. |
| `merges_url` | `str` | Yes | The API URL to merge branches in the repository. |
| `milestones_url` | `str` | Yes | A template for the API URL to get information about milestones of the repository. |
| `name` | `str` | Yes | The name of the repository. |
| `node_id` | `str` | Yes | The GraphQL identifier of the repository. |
| `notifications_url` | `str` | Yes | A template for the API URL to get information about notifications on the repository. |
| `owner` | `dict` | Yes | A GitHub user. |
| `private` | `bool` | Yes | Whether the repository is private. |
| `pulls_url` | `str` | Yes | A template for the API URL to get information about pull requests on the repository. |
| `releases_url` | `str` | Yes | A template for the API URL to get information about releases on the repository. |
| `stargazers_url` | `str` | Yes | The API URL to list the stargazers on the repository. |
| `statuses_url` | `str` | Yes | A template for the API URL to get information about statuses of a commit. |
| `subscribers_url` | `str` | Yes | The API URL to list the subscribers on the repository. |
| `subscription_url` | `str` | Yes | The API URL to subscribe to notifications for this repository. |
| `tags_url` | `str` | Yes | The API URL to get information about tags on the repository. |
| `teams_url` | `str` | Yes | The API URL to list the teams on the repository. |
| `trees_url` | `str` | Yes | A template for the API URL to create or retrieve a raw Git tree of the repository. |
| `url` | `str` | Yes | The URL to get more information about the repository from the GitHub API. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DependabotRepositoryAccessDetail().list({"org": "example"})
for dependabot_repository_access_detail in results:
    print(dependabot_repository_access_detail)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotRepositoryAccessDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependabotSecretEntity

```python
dependabot_secret = client.DependabotSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the secret. |
| `updated_at` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependabotSecret().load({"id": "dependabot_secret_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependabotSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependencyGraphEntity

```python
dependency_graph = client.DependencyGraph()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detector` | `dict` | Yes | A description of the detector used. |
| `job` | `dict` | Yes |  |
| `manifests` | `dict` | No | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `dict` | No | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `str` | Yes | The repository branch that triggered this snapshot. |
| `scanned` | `str` | Yes | The time at which the snapshot was scanned. |
| `sha` | `str` | Yes | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | Yes | The version of the repository snapshot submission. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DependencyGraph().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependencyGraphDiffEntity

```python
dependency_graph_diff = client.DependencyGraphDiff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_type` | `str` | Yes |  |
| `ecosystem` | `str` | Yes |  |
| `license` | `str` | Yes |  |
| `manifest` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `package_url` | `str` | Yes |  |
| `scope` | `str` | Yes | Where the dependency is utilized. |
| `source_repository_url` | `str` | Yes |  |
| `version` | `str` | Yes |  |
| `vulnerabilities` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependencyGraphDiff().load({"basehead": "basehead", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphDiffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependencyGraphSpdxSbomEntity

```python
dependency_graph_spdx_sbom = client.DependencyGraphSpdxSbom()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `SPDXID` | `str` | Yes | The SPDX identifier for the SPDX document. |
| `comment` | `str` | No | An optional comment about the SPDX document. |
| `creationInfo` | `dict` | Yes |  |
| `dataLicense` | `str` | Yes | The license under which the SPDX document is licensed. |
| `documentNamespace` | `str` | Yes | The namespace for the SPDX document. |
| `name` | `str` | Yes | The name of the SPDX document. |
| `packages` | `list` | Yes |  |
| `relationships` | `list` | Yes |  |
| `spdxVersion` | `str` | Yes | The version of the SPDX specification that this document conforms to. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependencyGraphSpdxSbom().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyGraphSpdxSbomEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeployKeyEntity

```python
deploy_key = client.DeployKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `added_by` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `enabled` | `bool` | No |  |
| `id` | `int` | Yes |  |
| `key` | `str` | Yes | The contents of the key. |
| `last_used` | `str` | No |  |
| `read_only` | `bool` | Yes | If `true`, the key will only be able to read repository contents. |
| `title` | `str` | Yes | A name for the key. |
| `url` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeployKey().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeployKey().list({"owner": "example", "repo": "example"})
for deploy_key in results:
    print(deploy_key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeployKey().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeployKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentEntity

```python
deployment = client.Deployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_merge` | `bool` | No | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `str` | Yes | A comment to accompany the deployment review |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `description` | `str` | Yes | Short description of the deployment. |
| `environment` | `str` | Yes | Name for the target deployment environment. |
| `environment_ids` | `list` | Yes | The list of environment ids to approve or reject |
| `id` | `int` | Yes | Unique identifier of the deployment |
| `node_id` | `str` | Yes |  |
| `original_environment` | `str` | No |  |
| `payload` | `Any` | Yes |  |
| `performed_via_github_app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | No | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `str` | Yes | The ref to deploy. |
| `repository_url` | `str` | Yes |  |
| `required_contexts` | `list` | No | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
| `sha` | `str` | Yes |  |
| `state` | `str` | Yes | Whether to approve or reject deployment to the specified environments. |
| `statuses_url` | `str` | Yes |  |
| `task` | `str` | Yes | Parameter to specify a task to execute |
| `transient_environment` | `bool` | No | Specifies if the given environment is will no longer exist at some point in the future. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Deployment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Deployment().list({"owner": "example", "repo": "example"})
for deployment in results:
    print(deployment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Deployment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentBranchPolicyEntity

```python
deployment_branch_policy = client.DeploymentBranchPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | The unique identifier of the branch or tag policy. |
| `name` | `str` | No | The name pattern that branches or tags must match in order to deploy to the environment. |
| `node_id` | `str` | No |  |
| `type` | `str` | No | Whether this rule targets a branch or tag. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `name` | - | Yes | Yes |
| `node_id` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeploymentBranchPolicy().create({
    "environment_name": "example_environment_name",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeploymentBranchPolicy().load({"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DeploymentBranchPolicy().update({
    "id": 1,
    "environment_id": "environment_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentBranchPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentProtectionRuleEntity

```python
deployment_protection_rule = client.DeploymentProtectionRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes | The unique identifier of the deployment protection rule integration. |
| `integration_id` | `int` | No | The ID of the custom app that will be enabled on the environment. |
| `integration_url` | `str` | Yes | The URL for the endpoint to get details about the app. |
| `node_id` | `str` | Yes | The node ID for the deployment protection rule integration. |
| `slug` | `str` | Yes | The slugified name of the deployment protection rule integration. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeploymentProtectionRule().create({
    "environment_name": "example_environment_name",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "id": 1,  # int
    "integration_url": "example_integration_url",  # str
    "node_id": "example_node_id",  # str
    "slug": "example_slug",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeploymentProtectionRule().load({"id": 1, "environment_id": "environment_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentProtectionRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeploymentStatusEntity

```python
deployment_status = client.DeploymentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_inactive` | `bool` | No | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `deployment_url` | `str` | Yes |  |
| `description` | `str` | Yes | A short description of the status. |
| `environment` | `str` | No | The environment of the deployment that the status is for. |
| `environment_url` | `str` | No | The URL for accessing your environment. |
| `id` | `int` | Yes |  |
| `log_url` | `str` | No | The URL to associate with this status. |
| `node_id` | `str` | Yes |  |
| `performed_via_github_app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `repository_url` | `str` | Yes |  |
| `state` | `str` | Yes | The state of the status. |
| `target_url` | `str` | Yes | Closing down notice: the URL to associate with this status. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DeploymentStatus().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DeploymentStatus().list({"id": 1, "owner": "example", "repo": "example"})
for deployment_status in results:
    print(deployment_status)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DeploymentStatus().load({"id": 1, "deployment_id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeploymentStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DiffEntryEntity

```python
diff_entry = client.DiffEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `additions` | `int` | Yes |  |
| `blob_url` | `str` | Yes |  |
| `changes` | `int` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `deletions` | `int` | Yes |  |
| `filename` | `str` | Yes |  |
| `patch` | `str` | No |  |
| `previous_filename` | `str` | No |  |
| `raw_url` | `str` | Yes |  |
| `sha` | `str` | Yes |  |
| `status` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DiffEntry().list({"owner": "example", "pull_number": 1, "repo": "example"})
for diff_entry in results:
    print(diff_entry)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiffEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailEntity

```python
email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `primary` | `bool` | No |  |
| `verified` | `bool` | No |  |
| `visibility` | `str` | No | Denotes whether an email is publicly visible. |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `email` | Yes | - | - |
| `primary` | Yes | - | - |
| `verified` | Yes | - | - |
| `visibility` | Yes | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Email().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Email().list()
for email in results:
    print(email)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Email().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmojiEntity

```python
emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `1` | `str` | No |  |
| `100` | `str` | No |  |
| `1234` | `str` | No |  |
| `1st_place_medal` | `str` | No |  |
| `2nd_place_medal` | `str` | No |  |
| `3rd_place_medal` | `str` | No |  |
| `8ball` | `str` | No |  |
| `a` | `str` | No |  |
| `ab` | `str` | No |  |
| `abacus` | `str` | No |  |
| `abc` | `str` | No |  |
| `abcd` | `str` | No |  |
| `accept` | `str` | No |  |
| `accessibility` | `str` | No |  |
| `accordion` | `str` | No |  |
| `adhesive_bandage` | `str` | No |  |
| `adult` | `str` | No |  |
| `aerial_tramway` | `str` | No |  |
| `afghanistan` | `str` | No |  |
| `airplane` | `str` | No |  |
| `aland_islands` | `str` | No |  |
| `alarm_clock` | `str` | No |  |
| `albania` | `str` | No |  |
| `alembic` | `str` | No |  |
| `algeria` | `str` | No |  |
| `alien` | `str` | No |  |
| `ambulance` | `str` | No |  |
| `american_samoa` | `str` | No |  |
| `amphora` | `str` | No |  |
| `anatomical_heart` | `str` | No |  |
| `anchor` | `str` | No |  |
| `andorra` | `str` | No |  |
| `angel` | `str` | No |  |
| `anger` | `str` | No |  |
| `angola` | `str` | No |  |
| `angry` | `str` | No |  |
| `anguilla` | `str` | No |  |
| `anguished` | `str` | No |  |
| `ant` | `str` | No |  |
| `antarctica` | `str` | No |  |
| `antigua_barbuda` | `str` | No |  |
| `apple` | `str` | No |  |
| `aquarius` | `str` | No |  |
| `argentina` | `str` | No |  |
| `aries` | `str` | No |  |
| `armenia` | `str` | No |  |
| `arrow_backward` | `str` | No |  |
| `arrow_double_down` | `str` | No |  |
| `arrow_double_up` | `str` | No |  |
| `arrow_down` | `str` | No |  |
| `arrow_down_small` | `str` | No |  |
| `arrow_forward` | `str` | No |  |
| `arrow_heading_down` | `str` | No |  |
| `arrow_heading_up` | `str` | No |  |
| `arrow_left` | `str` | No |  |
| `arrow_lower_left` | `str` | No |  |
| `arrow_lower_right` | `str` | No |  |
| `arrow_right` | `str` | No |  |
| `arrow_right_hook` | `str` | No |  |
| `arrow_up` | `str` | No |  |
| `arrow_up_down` | `str` | No |  |
| `arrow_up_small` | `str` | No |  |
| `arrow_upper_left` | `str` | No |  |
| `arrow_upper_right` | `str` | No |  |
| `arrows_clockwise` | `str` | No |  |
| `arrows_counterclockwise` | `str` | No |  |
| `art` | `str` | No |  |
| `articulated_lorry` | `str` | No |  |
| `artificial_satellite` | `str` | No |  |
| `artist` | `str` | No |  |
| `aruba` | `str` | No |  |
| `ascension_island` | `str` | No |  |
| `asterisk` | `str` | No |  |
| `astonished` | `str` | No |  |
| `astronaut` | `str` | No |  |
| `athletic_shoe` | `str` | No |  |
| `atm` | `str` | No |  |
| `atom` | `str` | No |  |
| `atom_symbol` | `str` | No |  |
| `australia` | `str` | No |  |
| `austria` | `str` | No |  |
| `auto_rickshaw` | `str` | No |  |
| `avocado` | `str` | No |  |
| `axe` | `str` | No |  |
| `azerbaijan` | `str` | No |  |
| `b` | `str` | No |  |
| `baby` | `str` | No |  |
| `baby_bottle` | `str` | No |  |
| `baby_chick` | `str` | No |  |
| `baby_symbol` | `str` | No |  |
| `back` | `str` | No |  |
| `bacon` | `str` | No |  |
| `badger` | `str` | No |  |
| `badminton` | `str` | No |  |
| `bagel` | `str` | No |  |
| `baggage_claim` | `str` | No |  |
| `baguette_bread` | `str` | No |  |
| `bahamas` | `str` | No |  |
| `bahrain` | `str` | No |  |
| `balance_scale` | `str` | No |  |
| `bald_man` | `str` | No |  |
| `bald_woman` | `str` | No |  |
| `ballet_shoes` | `str` | No |  |
| `balloon` | `str` | No |  |
| `ballot_box` | `str` | No |  |
| `ballot_box_with_check` | `str` | No |  |
| `bamboo` | `str` | No |  |
| `banana` | `str` | No |  |
| `bangbang` | `str` | No |  |
| `bangladesh` | `str` | No |  |
| `banjo` | `str` | No |  |
| `bank` | `str` | No |  |
| `bar_chart` | `str` | No |  |
| `barbados` | `str` | No |  |
| `barber` | `str` | No |  |
| `baseball` | `str` | No |  |
| `basecamp` | `str` | No |  |
| `basecampy` | `str` | No |  |
| `basket` | `str` | No |  |
| `basketball` | `str` | No |  |
| `basketball_man` | `str` | No |  |
| `basketball_woman` | `str` | No |  |
| `bat` | `str` | No |  |
| `bath` | `str` | No |  |
| `bathtub` | `str` | No |  |
| `battery` | `str` | No |  |
| `beach_umbrella` | `str` | No |  |
| `bear` | `str` | No |  |
| `bearded_person` | `str` | No |  |
| `beaver` | `str` | No |  |
| `bed` | `str` | No |  |
| `bee` | `str` | No |  |
| `beer` | `str` | No |  |
| `beers` | `str` | No |  |
| `beetle` | `str` | No |  |
| `beginner` | `str` | No |  |
| `belarus` | `str` | No |  |
| `belgium` | `str` | No |  |
| `belize` | `str` | No |  |
| `bell` | `str` | No |  |
| `bell_pepper` | `str` | No |  |
| `bellhop_bell` | `str` | No |  |
| `benin` | `str` | No |  |
| `bento` | `str` | No |  |
| `bermuda` | `str` | No |  |
| `beverage_box` | `str` | No |  |
| `bhutan` | `str` | No |  |
| `bicyclist` | `str` | No |  |
| `bike` | `str` | No |  |
| `biking_man` | `str` | No |  |
| `biking_woman` | `str` | No |  |
| `bikini` | `str` | No |  |
| `billed_cap` | `str` | No |  |
| `biohazard` | `str` | No |  |
| `bird` | `str` | No |  |
| `birthday` | `str` | No |  |
| `bison` | `str` | No |  |
| `black_cat` | `str` | No |  |
| `black_circle` | `str` | No |  |
| `black_flag` | `str` | No |  |
| `black_heart` | `str` | No |  |
| `black_joker` | `str` | No |  |
| `black_large_square` | `str` | No |  |
| `black_medium_small_square` | `str` | No |  |
| `black_medium_square` | `str` | No |  |
| `black_nib` | `str` | No |  |
| `black_small_square` | `str` | No |  |
| `black_square_button` | `str` | No |  |
| `blond_haired_man` | `str` | No |  |
| `blond_haired_person` | `str` | No |  |
| `blond_haired_woman` | `str` | No |  |
| `blonde_woman` | `str` | No |  |
| `blossom` | `str` | No |  |
| `blowfish` | `str` | No |  |
| `blue_book` | `str` | No |  |
| `blue_car` | `str` | No |  |
| `blue_heart` | `str` | No |  |
| `blue_square` | `str` | No |  |
| `blueberries` | `str` | No |  |
| `blush` | `str` | No |  |
| `boar` | `str` | No |  |
| `boat` | `str` | No |  |
| `bolivia` | `str` | No |  |
| `bomb` | `str` | No |  |
| `bone` | `str` | No |  |
| `book` | `str` | No |  |
| `bookmark` | `str` | No |  |
| `bookmark_tabs` | `str` | No |  |
| `books` | `str` | No |  |
| `boom` | `str` | No |  |
| `boomerang` | `str` | No |  |
| `boot` | `str` | No |  |
| `bosnia_herzegovina` | `str` | No |  |
| `botswana` | `str` | No |  |
| `bouncing_ball_man` | `str` | No |  |
| `bouncing_ball_person` | `str` | No |  |
| `bouncing_ball_woman` | `str` | No |  |
| `bouquet` | `str` | No |  |
| `bouvet_island` | `str` | No |  |
| `bow` | `str` | No |  |
| `bow_and_arrow` | `str` | No |  |
| `bowing_man` | `str` | No |  |
| `bowing_woman` | `str` | No |  |
| `bowl_with_spoon` | `str` | No |  |
| `bowling` | `str` | No |  |
| `bowtie` | `str` | No |  |
| `boxing_glove` | `str` | No |  |
| `boy` | `str` | No |  |
| `brain` | `str` | No |  |
| `brazil` | `str` | No |  |
| `bread` | `str` | No |  |
| `breast_feeding` | `str` | No |  |
| `bricks` | `str` | No |  |
| `bride_with_veil` | `str` | No |  |
| `bridge_at_night` | `str` | No |  |
| `briefcase` | `str` | No |  |
| `british_indian_ocean_territory` | `str` | No |  |
| `british_virgin_islands` | `str` | No |  |
| `broccoli` | `str` | No |  |
| `broken_heart` | `str` | No |  |
| `broom` | `str` | No |  |
| `brown_circle` | `str` | No |  |
| `brown_heart` | `str` | No |  |
| `brown_square` | `str` | No |  |
| `brunei` | `str` | No |  |
| `bubble_tea` | `str` | No |  |
| `bucket` | `str` | No |  |
| `bug` | `str` | No |  |
| `building_construction` | `str` | No |  |
| `bulb` | `str` | No |  |
| `bulgaria` | `str` | No |  |
| `bullettrain_front` | `str` | No |  |
| `bullettrain_side` | `str` | No |  |
| `burkina_faso` | `str` | No |  |
| `burrito` | `str` | No |  |
| `burundi` | `str` | No |  |
| `bus` | `str` | No |  |
| `business_suit_levitating` | `str` | No |  |
| `busstop` | `str` | No |  |
| `bust_in_silhouette` | `str` | No |  |
| `busts_in_silhouette` | `str` | No |  |
| `butter` | `str` | No |  |
| `butterfly` | `str` | No |  |
| `cactus` | `str` | No |  |
| `cake` | `str` | No |  |
| `calendar` | `str` | No |  |
| `call_me_hand` | `str` | No |  |
| `calling` | `str` | No |  |
| `cambodia` | `str` | No |  |
| `camel` | `str` | No |  |
| `camera` | `str` | No |  |
| `camera_flash` | `str` | No |  |
| `cameroon` | `str` | No |  |
| `camping` | `str` | No |  |
| `canada` | `str` | No |  |
| `canary_islands` | `str` | No |  |
| `cancer` | `str` | No |  |
| `candle` | `str` | No |  |
| `candy` | `str` | No |  |
| `canned_food` | `str` | No |  |
| `canoe` | `str` | No |  |
| `cape_verde` | `str` | No |  |
| `capital_abcd` | `str` | No |  |
| `capricorn` | `str` | No |  |
| `car` | `str` | No |  |
| `card_file_box` | `str` | No |  |
| `card_index` | `str` | No |  |
| `card_index_dividers` | `str` | No |  |
| `caribbean_netherlands` | `str` | No |  |
| `carousel_horse` | `str` | No |  |
| `carpentry_saw` | `str` | No |  |
| `carrot` | `str` | No |  |
| `cartwheeling` | `str` | No |  |
| `cat` | `str` | No |  |
| `cat2` | `str` | No |  |
| `cayman_islands` | `str` | No |  |
| `cd` | `str` | No |  |
| `central_african_republic` | `str` | No |  |
| `ceuta_melilla` | `str` | No |  |
| `chad` | `str` | No |  |
| `chains` | `str` | No |  |
| `chair` | `str` | No |  |
| `champagne` | `str` | No |  |
| `chart` | `str` | No |  |
| `chart_with_downwards_trend` | `str` | No |  |
| `chart_with_upwards_trend` | `str` | No |  |
| `checkered_flag` | `str` | No |  |
| `cheese` | `str` | No |  |
| `cherries` | `str` | No |  |
| `cherry_blossom` | `str` | No |  |
| `chess_pawn` | `str` | No |  |
| `chestnut` | `str` | No |  |
| `chicken` | `str` | No |  |
| `child` | `str` | No |  |
| `children_crossing` | `str` | No |  |
| `chile` | `str` | No |  |
| `chipmunk` | `str` | No |  |
| `chocolate_bar` | `str` | No |  |
| `chopsticks` | `str` | No |  |
| `christmas_island` | `str` | No |  |
| `christmas_tree` | `str` | No |  |
| `church` | `str` | No |  |
| `cinema` | `str` | No |  |
| `circus_tent` | `str` | No |  |
| `city_sunrise` | `str` | No |  |
| `city_sunset` | `str` | No |  |
| `cityscape` | `str` | No |  |
| `cl` | `str` | No |  |
| `clamp` | `str` | No |  |
| `clap` | `str` | No |  |
| `clapper` | `str` | No |  |
| `classical_building` | `str` | No |  |
| `climbing` | `str` | No |  |
| `climbing_man` | `str` | No |  |
| `climbing_woman` | `str` | No |  |
| `clinking_glasses` | `str` | No |  |
| `clipboard` | `str` | No |  |
| `clipperton_island` | `str` | No |  |
| `clock1` | `str` | No |  |
| `clock10` | `str` | No |  |
| `clock1030` | `str` | No |  |
| `clock11` | `str` | No |  |
| `clock1130` | `str` | No |  |
| `clock12` | `str` | No |  |
| `clock1230` | `str` | No |  |
| `clock130` | `str` | No |  |
| `clock2` | `str` | No |  |
| `clock230` | `str` | No |  |
| `clock3` | `str` | No |  |
| `clock330` | `str` | No |  |
| `clock4` | `str` | No |  |
| `clock430` | `str` | No |  |
| `clock5` | `str` | No |  |
| `clock530` | `str` | No |  |
| `clock6` | `str` | No |  |
| `clock630` | `str` | No |  |
| `clock7` | `str` | No |  |
| `clock730` | `str` | No |  |
| `clock8` | `str` | No |  |
| `clock830` | `str` | No |  |
| `clock9` | `str` | No |  |
| `clock930` | `str` | No |  |
| `closed_book` | `str` | No |  |
| `closed_lock_with_key` | `str` | No |  |
| `closed_umbrella` | `str` | No |  |
| `cloud` | `str` | No |  |
| `cloud_with_lightning` | `str` | No |  |
| `cloud_with_lightning_and_rain` | `str` | No |  |
| `cloud_with_rain` | `str` | No |  |
| `cloud_with_snow` | `str` | No |  |
| `clown_face` | `str` | No |  |
| `clubs` | `str` | No |  |
| `cn` | `str` | No |  |
| `coat` | `str` | No |  |
| `cockroach` | `str` | No |  |
| `cocktail` | `str` | No |  |
| `coconut` | `str` | No |  |
| `cocos_islands` | `str` | No |  |
| `coffee` | `str` | No |  |
| `coffin` | `str` | No |  |
| `coin` | `str` | No |  |
| `cold_face` | `str` | No |  |
| `cold_sweat` | `str` | No |  |
| `collision` | `str` | No |  |
| `colombia` | `str` | No |  |
| `comet` | `str` | No |  |
| `comoros` | `str` | No |  |
| `compass` | `str` | No |  |
| `computer` | `str` | No |  |
| `computer_mouse` | `str` | No |  |
| `confetti_ball` | `str` | No |  |
| `confounded` | `str` | No |  |
| `confused` | `str` | No |  |
| `congo_brazzaville` | `str` | No |  |
| `congo_kinshasa` | `str` | No |  |
| `congratulations` | `str` | No |  |
| `construction` | `str` | No |  |
| `construction_worker` | `str` | No |  |
| `construction_worker_man` | `str` | No |  |
| `construction_worker_woman` | `str` | No |  |
| `control_knobs` | `str` | No |  |
| `convenience_store` | `str` | No |  |
| `cook` | `str` | No |  |
| `cook_islands` | `str` | No |  |
| `cookie` | `str` | No |  |
| `cool` | `str` | No |  |
| `cop` | `str` | No |  |
| `copilot` | `str` | No |  |
| `copyright` | `str` | No |  |
| `corn` | `str` | No |  |
| `costa_rica` | `str` | No |  |
| `cote_divoire` | `str` | No |  |
| `couch_and_lamp` | `str` | No |  |
| `couple` | `str` | No |  |
| `couple_with_heart` | `str` | No |  |
| `couple_with_heart_man_man` | `str` | No |  |
| `couple_with_heart_woman_man` | `str` | No |  |
| `couple_with_heart_woman_woman` | `str` | No |  |
| `couplekiss` | `str` | No |  |
| `couplekiss_man_man` | `str` | No |  |
| `couplekiss_man_woman` | `str` | No |  |
| `couplekiss_woman_woman` | `str` | No |  |
| `cow` | `str` | No |  |
| `cow2` | `str` | No |  |
| `cowboy_hat_face` | `str` | No |  |
| `crab` | `str` | No |  |
| `crayon` | `str` | No |  |
| `credit_card` | `str` | No |  |
| `crescent_moon` | `str` | No |  |
| `cricket` | `str` | No |  |
| `cricket_game` | `str` | No |  |
| `croatia` | `str` | No |  |
| `crocodile` | `str` | No |  |
| `croissant` | `str` | No |  |
| `crossed_fingers` | `str` | No |  |
| `crossed_flags` | `str` | No |  |
| `crossed_swords` | `str` | No |  |
| `crown` | `str` | No |  |
| `cry` | `str` | No |  |
| `crying_cat_face` | `str` | No |  |
| `crystal_ball` | `str` | No |  |
| `cuba` | `str` | No |  |
| `cucumber` | `str` | No |  |
| `cup_with_straw` | `str` | No |  |
| `cupcake` | `str` | No |  |
| `cupid` | `str` | No |  |
| `curacao` | `str` | No |  |
| `curling_stone` | `str` | No |  |
| `curly_haired_man` | `str` | No |  |
| `curly_haired_woman` | `str` | No |  |
| `curly_loop` | `str` | No |  |
| `currency_exchange` | `str` | No |  |
| `curry` | `str` | No |  |
| `cursing_face` | `str` | No |  |
| `custard` | `str` | No |  |
| `customs` | `str` | No |  |
| `cut_of_meat` | `str` | No |  |
| `cyclone` | `str` | No |  |
| `cyprus` | `str` | No |  |
| `czech_republic` | `str` | No |  |
| `dagger` | `str` | No |  |
| `dancer` | `str` | No |  |
| `dancers` | `str` | No |  |
| `dancing_men` | `str` | No |  |
| `dancing_women` | `str` | No |  |
| `dango` | `str` | No |  |
| `dark_sunglasses` | `str` | No |  |
| `dart` | `str` | No |  |
| `dash` | `str` | No |  |
| `date` | `str` | No |  |
| `de` | `str` | No |  |
| `deaf_man` | `str` | No |  |
| `deaf_person` | `str` | No |  |
| `deaf_woman` | `str` | No |  |
| `deciduous_tree` | `str` | No |  |
| `deer` | `str` | No |  |
| `denmark` | `str` | No |  |
| `department_store` | `str` | No |  |
| `dependabot` | `str` | No |  |
| `derelict_house` | `str` | No |  |
| `desert` | `str` | No |  |
| `desert_island` | `str` | No |  |
| `desktop_computer` | `str` | No |  |
| `detective` | `str` | No |  |
| `diamond_shape_with_a_dot_inside` | `str` | No |  |
| `diamonds` | `str` | No |  |
| `diego_garcia` | `str` | No |  |
| `disappointed` | `str` | No |  |
| `disappointed_relieved` | `str` | No |  |
| `disguised_face` | `str` | No |  |
| `diving_mask` | `str` | No |  |
| `diya_lamp` | `str` | No |  |
| `dizzy` | `str` | No |  |
| `dizzy_face` | `str` | No |  |
| `djibouti` | `str` | No |  |
| `dna` | `str` | No |  |
| `do_not_litter` | `str` | No |  |
| `dodo` | `str` | No |  |
| `dog` | `str` | No |  |
| `dog2` | `str` | No |  |
| `dollar` | `str` | No |  |
| `dolls` | `str` | No |  |
| `dolphin` | `str` | No |  |
| `dominica` | `str` | No |  |
| `dominican_republic` | `str` | No |  |
| `door` | `str` | No |  |
| `doughnut` | `str` | No |  |
| `dove` | `str` | No |  |
| `dragon` | `str` | No |  |
| `dragon_face` | `str` | No |  |
| `dress` | `str` | No |  |
| `dromedary_camel` | `str` | No |  |
| `drooling_face` | `str` | No |  |
| `drop_of_blood` | `str` | No |  |
| `droplet` | `str` | No |  |
| `drum` | `str` | No |  |
| `duck` | `str` | No |  |
| `dumpling` | `str` | No |  |
| `dvd` | `str` | No |  |
| `eagle` | `str` | No |  |
| `ear` | `str` | No |  |
| `ear_of_rice` | `str` | No |  |
| `ear_with_hearing_aid` | `str` | No |  |
| `earth_africa` | `str` | No |  |
| `earth_americas` | `str` | No |  |
| `earth_asia` | `str` | No |  |
| `ecuador` | `str` | No |  |
| `egg` | `str` | No |  |
| `eggplant` | `str` | No |  |
| `egypt` | `str` | No |  |
| `eight` | `str` | No |  |
| `eight_pointed_black_star` | `str` | No |  |
| `eight_spoked_asterisk` | `str` | No |  |
| `eject_button` | `str` | No |  |
| `el_salvador` | `str` | No |  |
| `electric_plug` | `str` | No |  |
| `electron` | `str` | No |  |
| `elephant` | `str` | No |  |
| `elevator` | `str` | No |  |
| `elf` | `str` | No |  |
| `elf_man` | `str` | No |  |
| `elf_woman` | `str` | No |  |
| `email` | `str` | No |  |
| `end` | `str` | No |  |
| `england` | `str` | No |  |
| `envelope` | `str` | No |  |
| `envelope_with_arrow` | `str` | No |  |
| `equatorial_guinea` | `str` | No |  |
| `eritrea` | `str` | No |  |
| `es` | `str` | No |  |
| `estonia` | `str` | No |  |
| `ethiopia` | `str` | No |  |
| `eu` | `str` | No |  |
| `euro` | `str` | No |  |
| `european_castle` | `str` | No |  |
| `european_post_office` | `str` | No |  |
| `european_union` | `str` | No |  |
| `evergreen_tree` | `str` | No |  |
| `exclamation` | `str` | No |  |
| `exploding_head` | `str` | No |  |
| `expressionless` | `str` | No |  |
| `eye` | `str` | No |  |
| `eye_speech_bubble` | `str` | No |  |
| `eyeglasses` | `str` | No |  |
| `eyes` | `str` | No |  |
| `face_exhaling` | `str` | No |  |
| `face_in_clouds` | `str` | No |  |
| `face_with_head_bandage` | `str` | No |  |
| `face_with_spiral_eyes` | `str` | No |  |
| `face_with_thermometer` | `str` | No |  |
| `facepalm` | `str` | No |  |
| `facepunch` | `str` | No |  |
| `factory` | `str` | No |  |
| `factory_worker` | `str` | No |  |
| `fairy` | `str` | No |  |
| `fairy_man` | `str` | No |  |
| `fairy_woman` | `str` | No |  |
| `falafel` | `str` | No |  |
| `falkland_islands` | `str` | No |  |
| `fallen_leaf` | `str` | No |  |
| `family` | `str` | No |  |
| `family_man_boy` | `str` | No |  |
| `family_man_boy_boy` | `str` | No |  |
| `family_man_girl` | `str` | No |  |
| `family_man_girl_boy` | `str` | No |  |
| `family_man_girl_girl` | `str` | No |  |
| `family_man_man_boy` | `str` | No |  |
| `family_man_man_boy_boy` | `str` | No |  |
| `family_man_man_girl` | `str` | No |  |
| `family_man_man_girl_boy` | `str` | No |  |
| `family_man_man_girl_girl` | `str` | No |  |
| `family_man_woman_boy` | `str` | No |  |
| `family_man_woman_boy_boy` | `str` | No |  |
| `family_man_woman_girl` | `str` | No |  |
| `family_man_woman_girl_boy` | `str` | No |  |
| `family_man_woman_girl_girl` | `str` | No |  |
| `family_woman_boy` | `str` | No |  |
| `family_woman_boy_boy` | `str` | No |  |
| `family_woman_girl` | `str` | No |  |
| `family_woman_girl_boy` | `str` | No |  |
| `family_woman_girl_girl` | `str` | No |  |
| `family_woman_woman_boy` | `str` | No |  |
| `family_woman_woman_boy_boy` | `str` | No |  |
| `family_woman_woman_girl` | `str` | No |  |
| `family_woman_woman_girl_boy` | `str` | No |  |
| `family_woman_woman_girl_girl` | `str` | No |  |
| `farmer` | `str` | No |  |
| `faroe_islands` | `str` | No |  |
| `fast_forward` | `str` | No |  |
| `fax` | `str` | No |  |
| `fearful` | `str` | No |  |
| `feather` | `str` | No |  |
| `feelsgood` | `str` | No |  |
| `feet` | `str` | No |  |
| `female_detective` | `str` | No |  |
| `female_sign` | `str` | No |  |
| `ferris_wheel` | `str` | No |  |
| `ferry` | `str` | No |  |
| `field_hockey` | `str` | No |  |
| `fiji` | `str` | No |  |
| `file_cabinet` | `str` | No |  |
| `file_folder` | `str` | No |  |
| `film_projector` | `str` | No |  |
| `film_strip` | `str` | No |  |
| `finland` | `str` | No |  |
| `finnadie` | `str` | No |  |
| `fire` | `str` | No |  |
| `fire_engine` | `str` | No |  |
| `fire_extinguisher` | `str` | No |  |
| `firecracker` | `str` | No |  |
| `firefighter` | `str` | No |  |
| `fireworks` | `str` | No |  |
| `first_quarter_moon` | `str` | No |  |
| `first_quarter_moon_with_face` | `str` | No |  |
| `fish` | `str` | No |  |
| `fish_cake` | `str` | No |  |
| `fishing_pole_and_fish` | `str` | No |  |
| `fishsticks` | `str` | No |  |
| `fist` | `str` | No |  |
| `fist_left` | `str` | No |  |
| `fist_oncoming` | `str` | No |  |
| `fist_raised` | `str` | No |  |
| `fist_right` | `str` | No |  |
| `five` | `str` | No |  |
| `flags` | `str` | No |  |
| `flamingo` | `str` | No |  |
| `flashlight` | `str` | No |  |
| `flat_shoe` | `str` | No |  |
| `flatbread` | `str` | No |  |
| `fleur_de_lis` | `str` | No |  |
| `flight_arrival` | `str` | No |  |
| `flight_departure` | `str` | No |  |
| `flipper` | `str` | No |  |
| `floppy_disk` | `str` | No |  |
| `flower_playing_cards` | `str` | No |  |
| `flushed` | `str` | No |  |
| `fly` | `str` | No |  |
| `flying_disc` | `str` | No |  |
| `flying_saucer` | `str` | No |  |
| `fog` | `str` | No |  |
| `foggy` | `str` | No |  |
| `fondue` | `str` | No |  |
| `foot` | `str` | No |  |
| `football` | `str` | No |  |
| `footprints` | `str` | No |  |
| `fork_and_knife` | `str` | No |  |
| `fortune_cookie` | `str` | No |  |
| `fountain` | `str` | No |  |
| `fountain_pen` | `str` | No |  |
| `four` | `str` | No |  |
| `four_leaf_clover` | `str` | No |  |
| `fox_face` | `str` | No |  |
| `fr` | `str` | No |  |
| `framed_picture` | `str` | No |  |
| `free` | `str` | No |  |
| `french_guiana` | `str` | No |  |
| `french_polynesia` | `str` | No |  |
| `french_southern_territories` | `str` | No |  |
| `fried_egg` | `str` | No |  |
| `fried_shrimp` | `str` | No |  |
| `fries` | `str` | No |  |
| `frog` | `str` | No |  |
| `frowning` | `str` | No |  |
| `frowning_face` | `str` | No |  |
| `frowning_man` | `str` | No |  |
| `frowning_person` | `str` | No |  |
| `frowning_woman` | `str` | No |  |
| `fu` | `str` | No |  |
| `fuelpump` | `str` | No |  |
| `full_moon` | `str` | No |  |
| `full_moon_with_face` | `str` | No |  |
| `funeral_urn` | `str` | No |  |
| `gabon` | `str` | No |  |
| `gambia` | `str` | No |  |
| `game_die` | `str` | No |  |
| `garlic` | `str` | No |  |
| `gb` | `str` | No |  |
| `gear` | `str` | No |  |
| `gem` | `str` | No |  |
| `gemini` | `str` | No |  |
| `genie` | `str` | No |  |
| `genie_man` | `str` | No |  |
| `genie_woman` | `str` | No |  |
| `georgia` | `str` | No |  |
| `ghana` | `str` | No |  |
| `ghost` | `str` | No |  |
| `gibraltar` | `str` | No |  |
| `gift` | `str` | No |  |
| `gift_heart` | `str` | No |  |
| `giraffe` | `str` | No |  |
| `girl` | `str` | No |  |
| `globe_with_meridians` | `str` | No |  |
| `gloves` | `str` | No |  |
| `goal_net` | `str` | No |  |
| `goat` | `str` | No |  |
| `goberserk` | `str` | No |  |
| `godmode` | `str` | No |  |
| `goggles` | `str` | No |  |
| `golf` | `str` | No |  |
| `golfing` | `str` | No |  |
| `golfing_man` | `str` | No |  |
| `golfing_woman` | `str` | No |  |
| `gorilla` | `str` | No |  |
| `grapes` | `str` | No |  |
| `greece` | `str` | No |  |
| `green_apple` | `str` | No |  |
| `green_book` | `str` | No |  |
| `green_circle` | `str` | No |  |
| `green_heart` | `str` | No |  |
| `green_salad` | `str` | No |  |
| `green_square` | `str` | No |  |
| `greenland` | `str` | No |  |
| `grenada` | `str` | No |  |
| `grey_exclamation` | `str` | No |  |
| `grey_question` | `str` | No |  |
| `grimacing` | `str` | No |  |
| `grin` | `str` | No |  |
| `grinning` | `str` | No |  |
| `guadeloupe` | `str` | No |  |
| `guam` | `str` | No |  |
| `guard` | `str` | No |  |
| `guardsman` | `str` | No |  |
| `guardswoman` | `str` | No |  |
| `guatemala` | `str` | No |  |
| `guernsey` | `str` | No |  |
| `guide_dog` | `str` | No |  |
| `guinea` | `str` | No |  |
| `guinea_bissau` | `str` | No |  |
| `guitar` | `str` | No |  |
| `gun` | `str` | No |  |
| `guyana` | `str` | No |  |
| `haircut` | `str` | No |  |
| `haircut_man` | `str` | No |  |
| `haircut_woman` | `str` | No |  |
| `haiti` | `str` | No |  |
| `hamburger` | `str` | No |  |
| `hammer` | `str` | No |  |
| `hammer_and_pick` | `str` | No |  |
| `hammer_and_wrench` | `str` | No |  |
| `hamster` | `str` | No |  |
| `hand` | `str` | No |  |
| `hand_over_mouth` | `str` | No |  |
| `handbag` | `str` | No |  |
| `handball_person` | `str` | No |  |
| `handshake` | `str` | No |  |
| `hankey` | `str` | No |  |
| `hash` | `str` | No |  |
| `hatched_chick` | `str` | No |  |
| `hatching_chick` | `str` | No |  |
| `headphones` | `str` | No |  |
| `headstone` | `str` | No |  |
| `health_worker` | `str` | No |  |
| `hear_no_evil` | `str` | No |  |
| `heard_mcdonald_islands` | `str` | No |  |
| `heart` | `str` | No |  |
| `heart_decoration` | `str` | No |  |
| `heart_eyes` | `str` | No |  |
| `heart_eyes_cat` | `str` | No |  |
| `heart_on_fire` | `str` | No |  |
| `heartbeat` | `str` | No |  |
| `heartpulse` | `str` | No |  |
| `hearts` | `str` | No |  |
| `heavy_check_mark` | `str` | No |  |
| `heavy_division_sign` | `str` | No |  |
| `heavy_dollar_sign` | `str` | No |  |
| `heavy_exclamation_mark` | `str` | No |  |
| `heavy_heart_exclamation` | `str` | No |  |
| `heavy_minus_sign` | `str` | No |  |
| `heavy_multiplication_x` | `str` | No |  |
| `heavy_plus_sign` | `str` | No |  |
| `hedgehog` | `str` | No |  |
| `helicopter` | `str` | No |  |
| `herb` | `str` | No |  |
| `hibiscus` | `str` | No |  |
| `high_brightness` | `str` | No |  |
| `high_heel` | `str` | No |  |
| `hiking_boot` | `str` | No |  |
| `hindu_temple` | `str` | No |  |
| `hippopotamus` | `str` | No |  |
| `hocho` | `str` | No |  |
| `hole` | `str` | No |  |
| `honduras` | `str` | No |  |
| `honey_pot` | `str` | No |  |
| `honeybee` | `str` | No |  |
| `hong_kong` | `str` | No |  |
| `hook` | `str` | No |  |
| `horse` | `str` | No |  |
| `horse_racing` | `str` | No |  |
| `hospital` | `str` | No |  |
| `hot_face` | `str` | No |  |
| `hot_pepper` | `str` | No |  |
| `hotdog` | `str` | No |  |
| `hotel` | `str` | No |  |
| `hotsprings` | `str` | No |  |
| `hourglass` | `str` | No |  |
| `hourglass_flowing_sand` | `str` | No |  |
| `house` | `str` | No |  |
| `house_with_garden` | `str` | No |  |
| `houses` | `str` | No |  |
| `hugs` | `str` | No |  |
| `hungary` | `str` | No |  |
| `hurtrealbad` | `str` | No |  |
| `hushed` | `str` | No |  |
| `hut` | `str` | No |  |
| `ice_cream` | `str` | No |  |
| `ice_cube` | `str` | No |  |
| `ice_hockey` | `str` | No |  |
| `ice_skate` | `str` | No |  |
| `icecream` | `str` | No |  |
| `iceland` | `str` | No |  |
| `id` | `str` | No |  |
| `ideograph_advantage` | `str` | No |  |
| `imp` | `str` | No |  |
| `inbox_tray` | `str` | No |  |
| `incoming_envelope` | `str` | No |  |
| `india` | `str` | No |  |
| `indonesia` | `str` | No |  |
| `infinity` | `str` | No |  |
| `information_desk_person` | `str` | No |  |
| `information_source` | `str` | No |  |
| `innocent` | `str` | No |  |
| `interrobang` | `str` | No |  |
| `iphone` | `str` | No |  |
| `iran` | `str` | No |  |
| `iraq` | `str` | No |  |
| `ireland` | `str` | No |  |
| `isle_of_man` | `str` | No |  |
| `israel` | `str` | No |  |
| `it` | `str` | No |  |
| `izakaya_lantern` | `str` | No |  |
| `jack_o_lantern` | `str` | No |  |
| `jamaica` | `str` | No |  |
| `japan` | `str` | No |  |
| `japanese_castle` | `str` | No |  |
| `japanese_goblin` | `str` | No |  |
| `japanese_ogre` | `str` | No |  |
| `jeans` | `str` | No |  |
| `jersey` | `str` | No |  |
| `jigsaw` | `str` | No |  |
| `jordan` | `str` | No |  |
| `joy` | `str` | No |  |
| `joy_cat` | `str` | No |  |
| `joystick` | `str` | No |  |
| `jp` | `str` | No |  |
| `judge` | `str` | No |  |
| `juggling_person` | `str` | No |  |
| `kangaroo` | `str` | No |  |
| `kazakhstan` | `str` | No |  |
| `kenya` | `str` | No |  |
| `key` | `str` | No |  |
| `keyboard` | `str` | No |  |
| `keycap_ten` | `str` | No |  |
| `kick_scooter` | `str` | No |  |
| `kimono` | `str` | No |  |
| `kiribati` | `str` | No |  |
| `kiss` | `str` | No |  |
| `kissing` | `str` | No |  |
| `kissing_cat` | `str` | No |  |
| `kissing_closed_eyes` | `str` | No |  |
| `kissing_heart` | `str` | No |  |
| `kissing_smiling_eyes` | `str` | No |  |
| `kite` | `str` | No |  |
| `kiwi_fruit` | `str` | No |  |
| `kneeling_man` | `str` | No |  |
| `kneeling_person` | `str` | No |  |
| `kneeling_woman` | `str` | No |  |
| `knife` | `str` | No |  |
| `knot` | `str` | No |  |
| `koala` | `str` | No |  |
| `koko` | `str` | No |  |
| `kosovo` | `str` | No |  |
| `kr` | `str` | No |  |
| `kuwait` | `str` | No |  |
| `kyrgyzstan` | `str` | No |  |
| `lab_coat` | `str` | No |  |
| `label` | `str` | No |  |
| `lacrosse` | `str` | No |  |
| `ladder` | `str` | No |  |
| `lady_beetle` | `str` | No |  |
| `lantern` | `str` | No |  |
| `laos` | `str` | No |  |
| `large_blue_circle` | `str` | No |  |
| `large_blue_diamond` | `str` | No |  |
| `large_orange_diamond` | `str` | No |  |
| `last_quarter_moon` | `str` | No |  |
| `last_quarter_moon_with_face` | `str` | No |  |
| `latin_cross` | `str` | No |  |
| `latvia` | `str` | No |  |
| `laughing` | `str` | No |  |
| `leafy_green` | `str` | No |  |
| `leaves` | `str` | No |  |
| `lebanon` | `str` | No |  |
| `ledger` | `str` | No |  |
| `left_luggage` | `str` | No |  |
| `left_right_arrow` | `str` | No |  |
| `left_speech_bubble` | `str` | No |  |
| `leftwards_arrow_with_hook` | `str` | No |  |
| `leg` | `str` | No |  |
| `lemon` | `str` | No |  |
| `leo` | `str` | No |  |
| `leopard` | `str` | No |  |
| `lesotho` | `str` | No |  |
| `level_slider` | `str` | No |  |
| `liberia` | `str` | No |  |
| `libra` | `str` | No |  |
| `libya` | `str` | No |  |
| `liechtenstein` | `str` | No |  |
| `light_rail` | `str` | No |  |
| `link` | `str` | No |  |
| `lion` | `str` | No |  |
| `lips` | `str` | No |  |
| `lipstick` | `str` | No |  |
| `lithuania` | `str` | No |  |
| `lizard` | `str` | No |  |
| `llama` | `str` | No |  |
| `lobster` | `str` | No |  |
| `lock` | `str` | No |  |
| `lock_with_ink_pen` | `str` | No |  |
| `lollipop` | `str` | No |  |
| `long_drum` | `str` | No |  |
| `loop` | `str` | No |  |
| `lotion_bottle` | `str` | No |  |
| `lotus_position` | `str` | No |  |
| `lotus_position_man` | `str` | No |  |
| `lotus_position_woman` | `str` | No |  |
| `loud_sound` | `str` | No |  |
| `loudspeaker` | `str` | No |  |
| `love_hotel` | `str` | No |  |
| `love_letter` | `str` | No |  |
| `love_you_gesture` | `str` | No |  |
| `low_brightness` | `str` | No |  |
| `luggage` | `str` | No |  |
| `lungs` | `str` | No |  |
| `luxembourg` | `str` | No |  |
| `lying_face` | `str` | No |  |
| `m` | `str` | No |  |
| `macau` | `str` | No |  |
| `macedonia` | `str` | No |  |
| `madagascar` | `str` | No |  |
| `mag` | `str` | No |  |
| `mag_right` | `str` | No |  |
| `mage` | `str` | No |  |
| `mage_man` | `str` | No |  |
| `mage_woman` | `str` | No |  |
| `magic_wand` | `str` | No |  |
| `magnet` | `str` | No |  |
| `mahjong` | `str` | No |  |
| `mailbox` | `str` | No |  |
| `mailbox_closed` | `str` | No |  |
| `mailbox_with_mail` | `str` | No |  |
| `mailbox_with_no_mail` | `str` | No |  |
| `malawi` | `str` | No |  |
| `malaysia` | `str` | No |  |
| `maldives` | `str` | No |  |
| `male_detective` | `str` | No |  |
| `male_sign` | `str` | No |  |
| `mali` | `str` | No |  |
| `malta` | `str` | No |  |
| `mammoth` | `str` | No |  |
| `man` | `str` | No |  |
| `man_artist` | `str` | No |  |
| `man_astronaut` | `str` | No |  |
| `man_beard` | `str` | No |  |
| `man_cartwheeling` | `str` | No |  |
| `man_cook` | `str` | No |  |
| `man_dancing` | `str` | No |  |
| `man_facepalming` | `str` | No |  |
| `man_factory_worker` | `str` | No |  |
| `man_farmer` | `str` | No |  |
| `man_feeding_baby` | `str` | No |  |
| `man_firefighter` | `str` | No |  |
| `man_health_worker` | `str` | No |  |
| `man_in_manual_wheelchair` | `str` | No |  |
| `man_in_motorized_wheelchair` | `str` | No |  |
| `man_in_tuxedo` | `str` | No |  |
| `man_judge` | `str` | No |  |
| `man_juggling` | `str` | No |  |
| `man_mechanic` | `str` | No |  |
| `man_office_worker` | `str` | No |  |
| `man_pilot` | `str` | No |  |
| `man_playing_handball` | `str` | No |  |
| `man_playing_water_polo` | `str` | No |  |
| `man_scientist` | `str` | No |  |
| `man_shrugging` | `str` | No |  |
| `man_singer` | `str` | No |  |
| `man_student` | `str` | No |  |
| `man_teacher` | `str` | No |  |
| `man_technologist` | `str` | No |  |
| `man_with_gua_pi_mao` | `str` | No |  |
| `man_with_probing_cane` | `str` | No |  |
| `man_with_turban` | `str` | No |  |
| `man_with_veil` | `str` | No |  |
| `mandarin` | `str` | No |  |
| `mango` | `str` | No |  |
| `mans_shoe` | `str` | No |  |
| `mantelpiece_clock` | `str` | No |  |
| `manual_wheelchair` | `str` | No |  |
| `maple_leaf` | `str` | No |  |
| `marshall_islands` | `str` | No |  |
| `martial_arts_uniform` | `str` | No |  |
| `martinique` | `str` | No |  |
| `mask` | `str` | No |  |
| `massage` | `str` | No |  |
| `massage_man` | `str` | No |  |
| `massage_woman` | `str` | No |  |
| `mate` | `str` | No |  |
| `mauritania` | `str` | No |  |
| `mauritius` | `str` | No |  |
| `mayotte` | `str` | No |  |
| `meat_on_bone` | `str` | No |  |
| `mechanic` | `str` | No |  |
| `mechanical_arm` | `str` | No |  |
| `mechanical_leg` | `str` | No |  |
| `medal_military` | `str` | No |  |
| `medal_sports` | `str` | No |  |
| `medical_symbol` | `str` | No |  |
| `mega` | `str` | No |  |
| `melon` | `str` | No |  |
| `memo` | `str` | No |  |
| `men_wrestling` | `str` | No |  |
| `mending_heart` | `str` | No |  |
| `menorah` | `str` | No |  |
| `mens` | `str` | No |  |
| `mermaid` | `str` | No |  |
| `merman` | `str` | No |  |
| `merperson` | `str` | No |  |
| `metal` | `str` | No |  |
| `metro` | `str` | No |  |
| `mexico` | `str` | No |  |
| `microbe` | `str` | No |  |
| `micronesia` | `str` | No |  |
| `microphone` | `str` | No |  |
| `microscope` | `str` | No |  |
| `middle_finger` | `str` | No |  |
| `military_helmet` | `str` | No |  |
| `milk_glass` | `str` | No |  |
| `milky_way` | `str` | No |  |
| `minibus` | `str` | No |  |
| `minidisc` | `str` | No |  |
| `mirror` | `str` | No |  |
| `mobile_phone_off` | `str` | No |  |
| `moldova` | `str` | No |  |
| `monaco` | `str` | No |  |
| `money_mouth_face` | `str` | No |  |
| `money_with_wings` | `str` | No |  |
| `moneybag` | `str` | No |  |
| `mongolia` | `str` | No |  |
| `monkey` | `str` | No |  |
| `monkey_face` | `str` | No |  |
| `monocle_face` | `str` | No |  |
| `monorail` | `str` | No |  |
| `montenegro` | `str` | No |  |
| `montserrat` | `str` | No |  |
| `moon` | `str` | No |  |
| `moon_cake` | `str` | No |  |
| `morocco` | `str` | No |  |
| `mortar_board` | `str` | No |  |
| `mosque` | `str` | No |  |
| `mosquito` | `str` | No |  |
| `motor_boat` | `str` | No |  |
| `motor_scooter` | `str` | No |  |
| `motorcycle` | `str` | No |  |
| `motorized_wheelchair` | `str` | No |  |
| `motorway` | `str` | No |  |
| `mount_fuji` | `str` | No |  |
| `mountain` | `str` | No |  |
| `mountain_bicyclist` | `str` | No |  |
| `mountain_biking_man` | `str` | No |  |
| `mountain_biking_woman` | `str` | No |  |
| `mountain_cableway` | `str` | No |  |
| `mountain_railway` | `str` | No |  |
| `mountain_snow` | `str` | No |  |
| `mouse` | `str` | No |  |
| `mouse2` | `str` | No |  |
| `mouse_trap` | `str` | No |  |
| `movie_camera` | `str` | No |  |
| `moyai` | `str` | No |  |
| `mozambique` | `str` | No |  |
| `mrs_claus` | `str` | No |  |
| `muscle` | `str` | No |  |
| `mushroom` | `str` | No |  |
| `musical_keyboard` | `str` | No |  |
| `musical_note` | `str` | No |  |
| `musical_score` | `str` | No |  |
| `mute` | `str` | No |  |
| `mx_claus` | `str` | No |  |
| `myanmar` | `str` | No |  |
| `nail_care` | `str` | No |  |
| `name_badge` | `str` | No |  |
| `namibia` | `str` | No |  |
| `national_park` | `str` | No |  |
| `nauru` | `str` | No |  |
| `nauseated_face` | `str` | No |  |
| `nazar_amulet` | `str` | No |  |
| `neckbeard` | `str` | No |  |
| `necktie` | `str` | No |  |
| `negative_squared_cross_mark` | `str` | No |  |
| `nepal` | `str` | No |  |
| `nerd_face` | `str` | No |  |
| `nesting_dolls` | `str` | No |  |
| `netherlands` | `str` | No |  |
| `neutral_face` | `str` | No |  |
| `new` | `str` | No |  |
| `new_caledonia` | `str` | No |  |
| `new_moon` | `str` | No |  |
| `new_moon_with_face` | `str` | No |  |
| `new_zealand` | `str` | No |  |
| `newspaper` | `str` | No |  |
| `newspaper_roll` | `str` | No |  |
| `next_track_button` | `str` | No |  |
| `ng` | `str` | No |  |
| `ng_man` | `str` | No |  |
| `ng_woman` | `str` | No |  |
| `nicaragua` | `str` | No |  |
| `niger` | `str` | No |  |
| `nigeria` | `str` | No |  |
| `night_with_stars` | `str` | No |  |
| `nine` | `str` | No |  |
| `ninja` | `str` | No |  |
| `niue` | `str` | No |  |
| `no_bell` | `str` | No |  |
| `no_bicycles` | `str` | No |  |
| `no_entry` | `str` | No |  |
| `no_entry_sign` | `str` | No |  |
| `no_good` | `str` | No |  |
| `no_good_man` | `str` | No |  |
| `no_good_woman` | `str` | No |  |
| `no_mobile_phones` | `str` | No |  |
| `no_mouth` | `str` | No |  |
| `no_pedestrians` | `str` | No |  |
| `no_smoking` | `str` | No |  |
| `nonpotable_water` | `str` | No |  |
| `norfolk_island` | `str` | No |  |
| `north_korea` | `str` | No |  |
| `northern_mariana_islands` | `str` | No |  |
| `norway` | `str` | No |  |
| `nose` | `str` | No |  |
| `notebook` | `str` | No |  |
| `notebook_with_decorative_cover` | `str` | No |  |
| `notes` | `str` | No |  |
| `nut_and_bolt` | `str` | No |  |
| `o` | `str` | No |  |
| `o2` | `str` | No |  |
| `ocean` | `str` | No |  |
| `octocat` | `str` | No |  |
| `octopus` | `str` | No |  |
| `oden` | `str` | No |  |
| `office` | `str` | No |  |
| `office_worker` | `str` | No |  |
| `oil_drum` | `str` | No |  |
| `ok` | `str` | No |  |
| `ok_hand` | `str` | No |  |
| `ok_man` | `str` | No |  |
| `ok_person` | `str` | No |  |
| `ok_woman` | `str` | No |  |
| `old_key` | `str` | No |  |
| `older_adult` | `str` | No |  |
| `older_man` | `str` | No |  |
| `older_woman` | `str` | No |  |
| `olive` | `str` | No |  |
| `om` | `str` | No |  |
| `oman` | `str` | No |  |
| `on` | `str` | No |  |
| `oncoming_automobile` | `str` | No |  |
| `oncoming_bus` | `str` | No |  |
| `oncoming_police_car` | `str` | No |  |
| `oncoming_taxi` | `str` | No |  |
| `one` | `str` | No |  |
| `one_piece_swimsuit` | `str` | No |  |
| `onion` | `str` | No |  |
| `open_book` | `str` | No |  |
| `open_file_folder` | `str` | No |  |
| `open_hands` | `str` | No |  |
| `open_mouth` | `str` | No |  |
| `open_umbrella` | `str` | No |  |
| `ophiuchus` | `str` | No |  |
| `orange` | `str` | No |  |
| `orange_book` | `str` | No |  |
| `orange_circle` | `str` | No |  |
| `orange_heart` | `str` | No |  |
| `orange_square` | `str` | No |  |
| `orangutan` | `str` | No |  |
| `orthodox_cross` | `str` | No |  |
| `otter` | `str` | No |  |
| `outbox_tray` | `str` | No |  |
| `owl` | `str` | No |  |
| `ox` | `str` | No |  |
| `oyster` | `str` | No |  |
| `package` | `str` | No |  |
| `page_facing_up` | `str` | No |  |
| `page_with_curl` | `str` | No |  |
| `pager` | `str` | No |  |
| `paintbrush` | `str` | No |  |
| `pakistan` | `str` | No |  |
| `palau` | `str` | No |  |
| `palestinian_territories` | `str` | No |  |
| `palm_tree` | `str` | No |  |
| `palms_up_together` | `str` | No |  |
| `panama` | `str` | No |  |
| `pancakes` | `str` | No |  |
| `panda_face` | `str` | No |  |
| `paperclip` | `str` | No |  |
| `paperclips` | `str` | No |  |
| `papua_new_guinea` | `str` | No |  |
| `parachute` | `str` | No |  |
| `paraguay` | `str` | No |  |
| `parasol_on_ground` | `str` | No |  |
| `parking` | `str` | No |  |
| `parrot` | `str` | No |  |
| `part_alternation_mark` | `str` | No |  |
| `partly_sunny` | `str` | No |  |
| `partying_face` | `str` | No |  |
| `passenger_ship` | `str` | No |  |
| `passport_control` | `str` | No |  |
| `pause_button` | `str` | No |  |
| `paw_prints` | `str` | No |  |
| `peace_symbol` | `str` | No |  |
| `peach` | `str` | No |  |
| `peacock` | `str` | No |  |
| `peanuts` | `str` | No |  |
| `pear` | `str` | No |  |
| `pen` | `str` | No |  |
| `pencil` | `str` | No |  |
| `pencil2` | `str` | No |  |
| `penguin` | `str` | No |  |
| `pensive` | `str` | No |  |
| `people_holding_hands` | `str` | No |  |
| `people_hugging` | `str` | No |  |
| `performing_arts` | `str` | No |  |
| `persevere` | `str` | No |  |
| `person_bald` | `str` | No |  |
| `person_curly_hair` | `str` | No |  |
| `person_feeding_baby` | `str` | No |  |
| `person_fencing` | `str` | No |  |
| `person_in_manual_wheelchair` | `str` | No |  |
| `person_in_motorized_wheelchair` | `str` | No |  |
| `person_in_tuxedo` | `str` | No |  |
| `person_red_hair` | `str` | No |  |
| `person_white_hair` | `str` | No |  |
| `person_with_probing_cane` | `str` | No |  |
| `person_with_turban` | `str` | No |  |
| `person_with_veil` | `str` | No |  |
| `peru` | `str` | No |  |
| `petri_dish` | `str` | No |  |
| `philippines` | `str` | No |  |
| `phone` | `str` | No |  |
| `pick` | `str` | No |  |
| `pickup_truck` | `str` | No |  |
| `pie` | `str` | No |  |
| `pig` | `str` | No |  |
| `pig2` | `str` | No |  |
| `pig_nose` | `str` | No |  |
| `pill` | `str` | No |  |
| `pilot` | `str` | No |  |
| `pinata` | `str` | No |  |
| `pinched_fingers` | `str` | No |  |
| `pinching_hand` | `str` | No |  |
| `pineapple` | `str` | No |  |
| `ping_pong` | `str` | No |  |
| `pirate_flag` | `str` | No |  |
| `pisces` | `str` | No |  |
| `pitcairn_islands` | `str` | No |  |
| `pizza` | `str` | No |  |
| `placard` | `str` | No |  |
| `place_of_worship` | `str` | No |  |
| `plate_with_cutlery` | `str` | No |  |
| `play_or_pause_button` | `str` | No |  |
| `pleading_face` | `str` | No |  |
| `plunger` | `str` | No |  |
| `point_down` | `str` | No |  |
| `point_left` | `str` | No |  |
| `point_right` | `str` | No |  |
| `point_up` | `str` | No |  |
| `point_up_2` | `str` | No |  |
| `poland` | `str` | No |  |
| `polar_bear` | `str` | No |  |
| `police_car` | `str` | No |  |
| `police_officer` | `str` | No |  |
| `policeman` | `str` | No |  |
| `policewoman` | `str` | No |  |
| `poodle` | `str` | No |  |
| `poop` | `str` | No |  |
| `popcorn` | `str` | No |  |
| `portugal` | `str` | No |  |
| `post_office` | `str` | No |  |
| `postal_horn` | `str` | No |  |
| `postbox` | `str` | No |  |
| `potable_water` | `str` | No |  |
| `potato` | `str` | No |  |
| `potted_plant` | `str` | No |  |
| `pouch` | `str` | No |  |
| `poultry_leg` | `str` | No |  |
| `pound` | `str` | No |  |
| `pout` | `str` | No |  |
| `pouting_cat` | `str` | No |  |
| `pouting_face` | `str` | No |  |
| `pouting_man` | `str` | No |  |
| `pouting_woman` | `str` | No |  |
| `pray` | `str` | No |  |
| `prayer_beads` | `str` | No |  |
| `pregnant_woman` | `str` | No |  |
| `pretzel` | `str` | No |  |
| `previous_track_button` | `str` | No |  |
| `prince` | `str` | No |  |
| `princess` | `str` | No |  |
| `printer` | `str` | No |  |
| `probing_cane` | `str` | No |  |
| `puerto_rico` | `str` | No |  |
| `punch` | `str` | No |  |
| `purple_circle` | `str` | No |  |
| `purple_heart` | `str` | No |  |
| `purple_square` | `str` | No |  |
| `purse` | `str` | No |  |
| `pushpin` | `str` | No |  |
| `put_litter_in_its_place` | `str` | No |  |
| `qatar` | `str` | No |  |
| `question` | `str` | No |  |
| `rabbit` | `str` | No |  |
| `rabbit2` | `str` | No |  |
| `raccoon` | `str` | No |  |
| `racehorse` | `str` | No |  |
| `racing_car` | `str` | No |  |
| `radio` | `str` | No |  |
| `radio_button` | `str` | No |  |
| `radioactive` | `str` | No |  |
| `rage` | `str` | No |  |
| `rage1` | `str` | No |  |
| `rage2` | `str` | No |  |
| `rage3` | `str` | No |  |
| `rage4` | `str` | No |  |
| `railway_car` | `str` | No |  |
| `railway_track` | `str` | No |  |
| `rainbow` | `str` | No |  |
| `rainbow_flag` | `str` | No |  |
| `raised_back_of_hand` | `str` | No |  |
| `raised_eyebrow` | `str` | No |  |
| `raised_hand` | `str` | No |  |
| `raised_hand_with_fingers_splayed` | `str` | No |  |
| `raised_hands` | `str` | No |  |
| `raising_hand` | `str` | No |  |
| `raising_hand_man` | `str` | No |  |
| `raising_hand_woman` | `str` | No |  |
| `ram` | `str` | No |  |
| `ramen` | `str` | No |  |
| `rat` | `str` | No |  |
| `razor` | `str` | No |  |
| `receipt` | `str` | No |  |
| `record_button` | `str` | No |  |
| `recycle` | `str` | No |  |
| `red_car` | `str` | No |  |
| `red_circle` | `str` | No |  |
| `red_envelope` | `str` | No |  |
| `red_haired_man` | `str` | No |  |
| `red_haired_woman` | `str` | No |  |
| `red_square` | `str` | No |  |
| `registered` | `str` | No |  |
| `relaxed` | `str` | No |  |
| `relieved` | `str` | No |  |
| `reminder_ribbon` | `str` | No |  |
| `repeat` | `str` | No |  |
| `repeat_one` | `str` | No |  |
| `rescue_worker_helmet` | `str` | No |  |
| `restroom` | `str` | No |  |
| `reunion` | `str` | No |  |
| `revolving_hearts` | `str` | No |  |
| `rewind` | `str` | No |  |
| `rhinoceros` | `str` | No |  |
| `ribbon` | `str` | No |  |
| `rice` | `str` | No |  |
| `rice_ball` | `str` | No |  |
| `rice_cracker` | `str` | No |  |
| `rice_scene` | `str` | No |  |
| `right_anger_bubble` | `str` | No |  |
| `ring` | `str` | No |  |
| `ringed_planet` | `str` | No |  |
| `robot` | `str` | No |  |
| `rock` | `str` | No |  |
| `rocket` | `str` | No |  |
| `rofl` | `str` | No |  |
| `roll_eyes` | `str` | No |  |
| `roll_of_paper` | `str` | No |  |
| `roller_coaster` | `str` | No |  |
| `roller_skate` | `str` | No |  |
| `romania` | `str` | No |  |
| `rooster` | `str` | No |  |
| `rose` | `str` | No |  |
| `rosette` | `str` | No |  |
| `rotating_light` | `str` | No |  |
| `round_pushpin` | `str` | No |  |
| `rowboat` | `str` | No |  |
| `rowing_man` | `str` | No |  |
| `rowing_woman` | `str` | No |  |
| `ru` | `str` | No |  |
| `rugby_football` | `str` | No |  |
| `runner` | `str` | No |  |
| `running` | `str` | No |  |
| `running_man` | `str` | No |  |
| `running_shirt_with_sash` | `str` | No |  |
| `running_woman` | `str` | No |  |
| `rwanda` | `str` | No |  |
| `sa` | `str` | No |  |
| `safety_pin` | `str` | No |  |
| `safety_vest` | `str` | No |  |
| `sagittarius` | `str` | No |  |
| `sailboat` | `str` | No |  |
| `sake` | `str` | No |  |
| `salt` | `str` | No |  |
| `samoa` | `str` | No |  |
| `san_marino` | `str` | No |  |
| `sandal` | `str` | No |  |
| `sandwich` | `str` | No |  |
| `santa` | `str` | No |  |
| `sao_tome_principe` | `str` | No |  |
| `sari` | `str` | No |  |
| `sassy_man` | `str` | No |  |
| `sassy_woman` | `str` | No |  |
| `satellite` | `str` | No |  |
| `satisfied` | `str` | No |  |
| `saudi_arabia` | `str` | No |  |
| `sauna_man` | `str` | No |  |
| `sauna_person` | `str` | No |  |
| `sauna_woman` | `str` | No |  |
| `sauropod` | `str` | No |  |
| `saxophone` | `str` | No |  |
| `scarf` | `str` | No |  |
| `school` | `str` | No |  |
| `school_satchel` | `str` | No |  |
| `scientist` | `str` | No |  |
| `scissors` | `str` | No |  |
| `scorpion` | `str` | No |  |
| `scorpius` | `str` | No |  |
| `scotland` | `str` | No |  |
| `scream` | `str` | No |  |
| `scream_cat` | `str` | No |  |
| `screwdriver` | `str` | No |  |
| `scroll` | `str` | No |  |
| `seal` | `str` | No |  |
| `seat` | `str` | No |  |
| `secret` | `str` | No |  |
| `see_no_evil` | `str` | No |  |
| `seedling` | `str` | No |  |
| `selfie` | `str` | No |  |
| `senegal` | `str` | No |  |
| `serbia` | `str` | No |  |
| `service_dog` | `str` | No |  |
| `seven` | `str` | No |  |
| `sewing_needle` | `str` | No |  |
| `seychelles` | `str` | No |  |
| `shallow_pan_of_food` | `str` | No |  |
| `shamrock` | `str` | No |  |
| `shark` | `str` | No |  |
| `shaved_ice` | `str` | No |  |
| `sheep` | `str` | No |  |
| `shell` | `str` | No |  |
| `shield` | `str` | No |  |
| `shinto_shrine` | `str` | No |  |
| `ship` | `str` | No |  |
| `shipit` | `str` | No |  |
| `shirt` | `str` | No |  |
| `shoe` | `str` | No |  |
| `shopping` | `str` | No |  |
| `shopping_cart` | `str` | No |  |
| `shorts` | `str` | No |  |
| `shower` | `str` | No |  |
| `shrimp` | `str` | No |  |
| `shrug` | `str` | No |  |
| `shushing_face` | `str` | No |  |
| `sierra_leone` | `str` | No |  |
| `signal_strength` | `str` | No |  |
| `singapore` | `str` | No |  |
| `singer` | `str` | No |  |
| `sint_maarten` | `str` | No |  |
| `six` | `str` | No |  |
| `six_pointed_star` | `str` | No |  |
| `skateboard` | `str` | No |  |
| `ski` | `str` | No |  |
| `skier` | `str` | No |  |
| `skull` | `str` | No |  |
| `skull_and_crossbones` | `str` | No |  |
| `skunk` | `str` | No |  |
| `sled` | `str` | No |  |
| `sleeping` | `str` | No |  |
| `sleeping_bed` | `str` | No |  |
| `sleepy` | `str` | No |  |
| `slightly_frowning_face` | `str` | No |  |
| `slightly_smiling_face` | `str` | No |  |
| `slot_machine` | `str` | No |  |
| `sloth` | `str` | No |  |
| `slovakia` | `str` | No |  |
| `slovenia` | `str` | No |  |
| `small_airplane` | `str` | No |  |
| `small_blue_diamond` | `str` | No |  |
| `small_orange_diamond` | `str` | No |  |
| `small_red_triangle` | `str` | No |  |
| `small_red_triangle_down` | `str` | No |  |
| `smile` | `str` | No |  |
| `smile_cat` | `str` | No |  |
| `smiley` | `str` | No |  |
| `smiley_cat` | `str` | No |  |
| `smiling_face_with_tear` | `str` | No |  |
| `smiling_face_with_three_hearts` | `str` | No |  |
| `smiling_imp` | `str` | No |  |
| `smirk` | `str` | No |  |
| `smirk_cat` | `str` | No |  |
| `smoking` | `str` | No |  |
| `snail` | `str` | No |  |
| `snake` | `str` | No |  |
| `sneezing_face` | `str` | No |  |
| `snowboarder` | `str` | No |  |
| `snowflake` | `str` | No |  |
| `snowman` | `str` | No |  |
| `snowman_with_snow` | `str` | No |  |
| `soap` | `str` | No |  |
| `sob` | `str` | No |  |
| `soccer` | `str` | No |  |
| `socks` | `str` | No |  |
| `softball` | `str` | No |  |
| `solomon_islands` | `str` | No |  |
| `somalia` | `str` | No |  |
| `soon` | `str` | No |  |
| `sos` | `str` | No |  |
| `sound` | `str` | No |  |
| `south_africa` | `str` | No |  |
| `south_georgia_south_sandwich_islands` | `str` | No |  |
| `south_sudan` | `str` | No |  |
| `space_invader` | `str` | No |  |
| `spades` | `str` | No |  |
| `spaghetti` | `str` | No |  |
| `sparkle` | `str` | No |  |
| `sparkler` | `str` | No |  |
| `sparkles` | `str` | No |  |
| `sparkling_heart` | `str` | No |  |
| `speak_no_evil` | `str` | No |  |
| `speaker` | `str` | No |  |
| `speaking_head` | `str` | No |  |
| `speech_balloon` | `str` | No |  |
| `speedboat` | `str` | No |  |
| `spider` | `str` | No |  |
| `spider_web` | `str` | No |  |
| `spiral_calendar` | `str` | No |  |
| `spiral_notepad` | `str` | No |  |
| `sponge` | `str` | No |  |
| `spoon` | `str` | No |  |
| `squid` | `str` | No |  |
| `sri_lanka` | `str` | No |  |
| `st_barthelemy` | `str` | No |  |
| `st_helena` | `str` | No |  |
| `st_kitts_nevis` | `str` | No |  |
| `st_lucia` | `str` | No |  |
| `st_martin` | `str` | No |  |
| `st_pierre_miquelon` | `str` | No |  |
| `st_vincent_grenadines` | `str` | No |  |
| `stadium` | `str` | No |  |
| `standing_man` | `str` | No |  |
| `standing_person` | `str` | No |  |
| `standing_woman` | `str` | No |  |
| `star` | `str` | No |  |
| `star2` | `str` | No |  |
| `star_and_crescent` | `str` | No |  |
| `star_of_david` | `str` | No |  |
| `star_struck` | `str` | No |  |
| `stars` | `str` | No |  |
| `station` | `str` | No |  |
| `statue_of_liberty` | `str` | No |  |
| `steam_locomotive` | `str` | No |  |
| `stethoscope` | `str` | No |  |
| `stew` | `str` | No |  |
| `stop_button` | `str` | No |  |
| `stop_sign` | `str` | No |  |
| `stopwatch` | `str` | No |  |
| `straight_ruler` | `str` | No |  |
| `strawberry` | `str` | No |  |
| `stuck_out_tongue` | `str` | No |  |
| `stuck_out_tongue_closed_eyes` | `str` | No |  |
| `stuck_out_tongue_winking_eye` | `str` | No |  |
| `student` | `str` | No |  |
| `studio_microphone` | `str` | No |  |
| `stuffed_flatbread` | `str` | No |  |
| `sudan` | `str` | No |  |
| `sun_behind_large_cloud` | `str` | No |  |
| `sun_behind_rain_cloud` | `str` | No |  |
| `sun_behind_small_cloud` | `str` | No |  |
| `sun_with_face` | `str` | No |  |
| `sunflower` | `str` | No |  |
| `sunglasses` | `str` | No |  |
| `sunny` | `str` | No |  |
| `sunrise` | `str` | No |  |
| `sunrise_over_mountains` | `str` | No |  |
| `superhero` | `str` | No |  |
| `superhero_man` | `str` | No |  |
| `superhero_woman` | `str` | No |  |
| `supervillain` | `str` | No |  |
| `supervillain_man` | `str` | No |  |
| `supervillain_woman` | `str` | No |  |
| `surfer` | `str` | No |  |
| `surfing_man` | `str` | No |  |
| `surfing_woman` | `str` | No |  |
| `suriname` | `str` | No |  |
| `sushi` | `str` | No |  |
| `suspect` | `str` | No |  |
| `suspension_railway` | `str` | No |  |
| `svalbard_jan_mayen` | `str` | No |  |
| `swan` | `str` | No |  |
| `swaziland` | `str` | No |  |
| `sweat` | `str` | No |  |
| `sweat_drops` | `str` | No |  |
| `sweat_smile` | `str` | No |  |
| `sweden` | `str` | No |  |
| `sweet_potato` | `str` | No |  |
| `swim_brief` | `str` | No |  |
| `swimmer` | `str` | No |  |
| `swimming_man` | `str` | No |  |
| `swimming_woman` | `str` | No |  |
| `switzerland` | `str` | No |  |
| `symbols` | `str` | No |  |
| `synagogue` | `str` | No |  |
| `syria` | `str` | No |  |
| `syringe` | `str` | No |  |
| `taco` | `str` | No |  |
| `tada` | `str` | No |  |
| `taiwan` | `str` | No |  |
| `tajikistan` | `str` | No |  |
| `takeout_box` | `str` | No |  |
| `tamale` | `str` | No |  |
| `tanabata_tree` | `str` | No |  |
| `tangerine` | `str` | No |  |
| `tanzania` | `str` | No |  |
| `taurus` | `str` | No |  |
| `taxi` | `str` | No |  |
| `tea` | `str` | No |  |
| `teacher` | `str` | No |  |
| `teapot` | `str` | No |  |
| `technologist` | `str` | No |  |
| `teddy_bear` | `str` | No |  |
| `telephone` | `str` | No |  |
| `telephone_receiver` | `str` | No |  |
| `telescope` | `str` | No |  |
| `tennis` | `str` | No |  |
| `tent` | `str` | No |  |
| `test_tube` | `str` | No |  |
| `thailand` | `str` | No |  |
| `thermometer` | `str` | No |  |
| `thinking` | `str` | No |  |
| `thong_sandal` | `str` | No |  |
| `thought_balloon` | `str` | No |  |
| `thread` | `str` | No |  |
| `three` | `str` | No |  |
| `thumbsdown` | `str` | No |  |
| `thumbsup` | `str` | No |  |
| `ticket` | `str` | No |  |
| `tickets` | `str` | No |  |
| `tiger` | `str` | No |  |
| `tiger2` | `str` | No |  |
| `timer_clock` | `str` | No |  |
| `timor_leste` | `str` | No |  |
| `tipping_hand_man` | `str` | No |  |
| `tipping_hand_person` | `str` | No |  |
| `tipping_hand_woman` | `str` | No |  |
| `tired_face` | `str` | No |  |
| `tm` | `str` | No |  |
| `togo` | `str` | No |  |
| `toilet` | `str` | No |  |
| `tokelau` | `str` | No |  |
| `tokyo_tower` | `str` | No |  |
| `tomato` | `str` | No |  |
| `tonga` | `str` | No |  |
| `tongue` | `str` | No |  |
| `toolbox` | `str` | No |  |
| `tooth` | `str` | No |  |
| `toothbrush` | `str` | No |  |
| `top` | `str` | No |  |
| `tophat` | `str` | No |  |
| `tornado` | `str` | No |  |
| `tr` | `str` | No |  |
| `trackball` | `str` | No |  |
| `tractor` | `str` | No |  |
| `traffic_light` | `str` | No |  |
| `train` | `str` | No |  |
| `train2` | `str` | No |  |
| `tram` | `str` | No |  |
| `transgender_flag` | `str` | No |  |
| `transgender_symbol` | `str` | No |  |
| `trex` | `str` | No |  |
| `triangular_flag_on_post` | `str` | No |  |
| `triangular_ruler` | `str` | No |  |
| `trident` | `str` | No |  |
| `trinidad_tobago` | `str` | No |  |
| `tristan_da_cunha` | `str` | No |  |
| `triumph` | `str` | No |  |
| `trolleybus` | `str` | No |  |
| `trollface` | `str` | No |  |
| `trophy` | `str` | No |  |
| `tropical_drink` | `str` | No |  |
| `tropical_fish` | `str` | No |  |
| `truck` | `str` | No |  |
| `trumpet` | `str` | No |  |
| `tshirt` | `str` | No |  |
| `tulip` | `str` | No |  |
| `tumbler_glass` | `str` | No |  |
| `tunisia` | `str` | No |  |
| `turkey` | `str` | No |  |
| `turkmenistan` | `str` | No |  |
| `turks_caicos_islands` | `str` | No |  |
| `turtle` | `str` | No |  |
| `tuvalu` | `str` | No |  |
| `tv` | `str` | No |  |
| `twisted_rightwards_arrows` | `str` | No |  |
| `two` | `str` | No |  |
| `two_hearts` | `str` | No |  |
| `two_men_holding_hands` | `str` | No |  |
| `two_women_holding_hands` | `str` | No |  |
| `u5272` | `str` | No |  |
| `u5408` | `str` | No |  |
| `u55b6` | `str` | No |  |
| `u6307` | `str` | No |  |
| `u6708` | `str` | No |  |
| `u6709` | `str` | No |  |
| `u6e80` | `str` | No |  |
| `u7121` | `str` | No |  |
| `u7533` | `str` | No |  |
| `u7981` | `str` | No |  |
| `u7a7a` | `str` | No |  |
| `uganda` | `str` | No |  |
| `uk` | `str` | No |  |
| `ukraine` | `str` | No |  |
| `umbrella` | `str` | No |  |
| `unamused` | `str` | No |  |
| `underage` | `str` | No |  |
| `unicorn` | `str` | No |  |
| `united_arab_emirates` | `str` | No |  |
| `united_nations` | `str` | No |  |
| `unlock` | `str` | No |  |
| `up` | `str` | No |  |
| `upside_down_face` | `str` | No |  |
| `uruguay` | `str` | No |  |
| `us` | `str` | No |  |
| `us_outlying_islands` | `str` | No |  |
| `us_virgin_islands` | `str` | No |  |
| `uzbekistan` | `str` | No |  |
| `v` | `str` | No |  |
| `vampire` | `str` | No |  |
| `vampire_man` | `str` | No |  |
| `vampire_woman` | `str` | No |  |
| `vanuatu` | `str` | No |  |
| `vatican_city` | `str` | No |  |
| `venezuela` | `str` | No |  |
| `vertical_traffic_light` | `str` | No |  |
| `vhs` | `str` | No |  |
| `vibration_mode` | `str` | No |  |
| `video_camera` | `str` | No |  |
| `video_game` | `str` | No |  |
| `vietnam` | `str` | No |  |
| `violin` | `str` | No |  |
| `virgo` | `str` | No |  |
| `volcano` | `str` | No |  |
| `volleyball` | `str` | No |  |
| `vomiting_face` | `str` | No |  |
| `vs` | `str` | No |  |
| `vulcan_salute` | `str` | No |  |
| `waffle` | `str` | No |  |
| `wales` | `str` | No |  |
| `walking` | `str` | No |  |
| `walking_man` | `str` | No |  |
| `walking_woman` | `str` | No |  |
| `wallis_futuna` | `str` | No |  |
| `waning_crescent_moon` | `str` | No |  |
| `waning_gibbous_moon` | `str` | No |  |
| `warning` | `str` | No |  |
| `wastebasket` | `str` | No |  |
| `watch` | `str` | No |  |
| `water_buffalo` | `str` | No |  |
| `water_polo` | `str` | No |  |
| `watermelon` | `str` | No |  |
| `wave` | `str` | No |  |
| `wavy_dash` | `str` | No |  |
| `waxing_crescent_moon` | `str` | No |  |
| `waxing_gibbous_moon` | `str` | No |  |
| `wc` | `str` | No |  |
| `weary` | `str` | No |  |
| `wedding` | `str` | No |  |
| `weight_lifting` | `str` | No |  |
| `weight_lifting_man` | `str` | No |  |
| `weight_lifting_woman` | `str` | No |  |
| `western_sahara` | `str` | No |  |
| `whale` | `str` | No |  |
| `whale2` | `str` | No |  |
| `wheel_of_dharma` | `str` | No |  |
| `wheelchair` | `str` | No |  |
| `white_check_mark` | `str` | No |  |
| `white_circle` | `str` | No |  |
| `white_flag` | `str` | No |  |
| `white_flower` | `str` | No |  |
| `white_haired_man` | `str` | No |  |
| `white_haired_woman` | `str` | No |  |
| `white_heart` | `str` | No |  |
| `white_large_square` | `str` | No |  |
| `white_medium_small_square` | `str` | No |  |
| `white_medium_square` | `str` | No |  |
| `white_small_square` | `str` | No |  |
| `white_square_button` | `str` | No |  |
| `wilted_flower` | `str` | No |  |
| `wind_chime` | `str` | No |  |
| `wind_face` | `str` | No |  |
| `window` | `str` | No |  |
| `wine_glass` | `str` | No |  |
| `wink` | `str` | No |  |
| `wolf` | `str` | No |  |
| `woman` | `str` | No |  |
| `woman_artist` | `str` | No |  |
| `woman_astronaut` | `str` | No |  |
| `woman_beard` | `str` | No |  |
| `woman_cartwheeling` | `str` | No |  |
| `woman_cook` | `str` | No |  |
| `woman_dancing` | `str` | No |  |
| `woman_facepalming` | `str` | No |  |
| `woman_factory_worker` | `str` | No |  |
| `woman_farmer` | `str` | No |  |
| `woman_feeding_baby` | `str` | No |  |
| `woman_firefighter` | `str` | No |  |
| `woman_health_worker` | `str` | No |  |
| `woman_in_manual_wheelchair` | `str` | No |  |
| `woman_in_motorized_wheelchair` | `str` | No |  |
| `woman_in_tuxedo` | `str` | No |  |
| `woman_judge` | `str` | No |  |
| `woman_juggling` | `str` | No |  |
| `woman_mechanic` | `str` | No |  |
| `woman_office_worker` | `str` | No |  |
| `woman_pilot` | `str` | No |  |
| `woman_playing_handball` | `str` | No |  |
| `woman_playing_water_polo` | `str` | No |  |
| `woman_scientist` | `str` | No |  |
| `woman_shrugging` | `str` | No |  |
| `woman_singer` | `str` | No |  |
| `woman_student` | `str` | No |  |
| `woman_teacher` | `str` | No |  |
| `woman_technologist` | `str` | No |  |
| `woman_with_headscarf` | `str` | No |  |
| `woman_with_probing_cane` | `str` | No |  |
| `woman_with_turban` | `str` | No |  |
| `woman_with_veil` | `str` | No |  |
| `womans_clothes` | `str` | No |  |
| `womans_hat` | `str` | No |  |
| `women_wrestling` | `str` | No |  |
| `womens` | `str` | No |  |
| `wood` | `str` | No |  |
| `woozy_face` | `str` | No |  |
| `world_map` | `str` | No |  |
| `worm` | `str` | No |  |
| `worried` | `str` | No |  |
| `wrench` | `str` | No |  |
| `wrestling` | `str` | No |  |
| `writing_hand` | `str` | No |  |
| `x` | `str` | No |  |
| `yarn` | `str` | No |  |
| `yawning_face` | `str` | No |  |
| `yellow_circle` | `str` | No |  |
| `yellow_heart` | `str` | No |  |
| `yellow_square` | `str` | No |  |
| `yemen` | `str` | No |  |
| `yen` | `str` | No |  |
| `yin_yang` | `str` | No |  |
| `yo_yo` | `str` | No |  |
| `yum` | `str` | No |  |
| `zambia` | `str` | No |  |
| `zany_face` | `str` | No |  |
| `zap` | `str` | No |  |
| `zebra` | `str` | No |  |
| `zero` | `str` | No |  |
| `zimbabwe` | `str` | No |  |
| `zipper_mouth_face` | `str` | No |  |
| `zombie` | `str` | No |  |
| `zombie_man` | `str` | No |  |
| `zombie_woman` | `str` | No |  |
| `zzz` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Emoji().load({"id": "emoji_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmptyObjectEntity

```python
empty_object = client.EmptyObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attestations` | `list` | No |  |
| `enable_debug_logging` | `bool` | No | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `str` | Yes | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `list` | No | Array of unique strings. |
| `key_id` | `str` | Yes | ID of the key you used to encrypt the secret. |
| `languages` | `list` | No | CodeQL languages to be analyzed. |
| `name` | `str` | Yes | The name of the variable. |
| `query_suite` | `str` | No | CodeQL query suite to be used. |
| `runner_label` | `str` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `str` | No | Runner type to be used. |
| `selected_repository_ids` | `list` | No | An array of repository ids that can access the organization variable. |
| `state` | `str` | No | The desired state of code scanning default setup. |
| `threat_model` | `str` | No | Threat model to be used for code scanning analysis. |
| `use_default` | `bool` | Yes | Whether to use the default template or not. |
| `value` | `str` | Yes | The value of the variable. |
| `visibility` | `str` | Yes | The type of repositories in the organization that can access the variable. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EmptyObject().create({
    "org_id": "example_org_id",  # str
    "encrypted_value": "example_encrypted_value",  # str
    "key_id": "example_key_id",  # str
    "name": "example_name",  # str
    "use_default": True,  # bool
    "value": "example_value",  # str
    "visibility": "example_visibility",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmptyObject().load({"subject_digest": "subject_digest", "username": "username"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EmptyObject().update({
    "org_id": "org_id",
    "secret_name": "secret_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmptyObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseTeamEntity

```python
enterprise_team = client.EnterpriseTeam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No | A description of the team. |
| `group_id` | `str` | Yes | The ID of the IdP group to assign team membership with. |
| `group_name` | `str` | No | Retired: this field will not be returned with GHEC enterprise teams. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `members_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the team. |
| `organization_selection_type` | `str` | No |  |
| `slug` | `str` | Yes |  |
| `sync_to_organizations` | `str` | No | Retired: this field will not be returned with GHEC enterprise teams. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EnterpriseTeam().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnterpriseTeam().list({"enterprise": "example"})
for enterprise_team in results:
    print(enterprise_team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EnterpriseTeam().load({"id": "enterprise_team_id", "enterprise": "enterprise"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EnterpriseTeam().remove({"id": "enterprise_team_id", "enterprise": "enterprise"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EnterpriseTeam().update({
    "id": "enterprise_team_id",
    "enterprise": "enterprise",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseTeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseTeamMembershipEntity

```python
enterprise_team_membership = client.EnterpriseTeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EnterpriseTeamMembership().remove({"enterprise": "enterprise", "id": "id", "team_id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseTeamMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentEntity

```python
environment = client.Environment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `dict` | Yes | The type of deployment branch policy for this environment. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The id of the environment. |
| `name` | `str` | Yes | The name of the environment. |
| `node_id` | `str` | Yes |  |
| `prevent_self_review` | `bool` | No | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `list` | No | Built-in deployment protection rules for the environment. |
| `reviewers` | `list` | No | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `str` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `str` | Yes |  |
| `wait_timer` | `int` | No | The amount of time to delay a job after the job is initially triggered. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Environment().load({"id": "environment_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Environment().update({
    "id": "environment_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnvironmentApprovalEntity

```python
environment_approval = client.EnvironmentApproval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | Yes | The comment submitted with the deployment review |
| `environments` | `list` | Yes | The list of environments that were approved or rejected |
| `state` | `str` | Yes | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `dict` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnvironmentApproval().list({"owner": "example", "repo": "example", "run_id": 1})
for environment_approval in results:
    print(environment_approval)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnvironmentApprovalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | Yes | Actor |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `org` | `dict` | Yes | Actor |
| `payload` | `dict` | Yes |  |
| `public` | `bool` | Yes |  |
| `repo` | `dict` | Yes |  |
| `type` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list()
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load({"org": "org", "username": "username"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeedEntity

```python
feed = client.Feed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_actor_url` | `str` | No |  |
| `current_user_organization_url` | `str` | No |  |
| `current_user_organization_urls` | `list` | No |  |
| `current_user_public_url` | `str` | No |  |
| `current_user_url` | `str` | No |  |
| `links` | `dict` | Yes |  |
| `repository_discussions_category_url` | `str` | No | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `str` | No | A feed of discussions for a given repository. |
| `security_advisories_url` | `str` | No |  |
| `timeline_url` | `str` | Yes |  |
| `user_url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Feed().list()
for feed in results:
    print(feed)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FileCommitEntity

```python
file_commit = client.FileCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | Yes | The author of the file. |
| `branch` | `str` | No | The branch name. |
| `commit` | `dict` | Yes |  |
| `committer` | `dict` | Yes | The person that committed the file. |
| `content` | `dict` | Yes | The new file content, using Base64 encoding. |
| `message` | `str` | Yes | The commit message. |
| `sha` | `str` | No | **Required if you are updating a file**. |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FileCommit().remove({"owner": "owner", "path": "path", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FileCommit().update({
    "owner": "owner",
    "path": "path",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FollowerEntity

```python
follower = client.Follower()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Follower().list()
for follower in results:
    print(follower)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FollowingEntity

```python
following = client.Following()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Following().list()
for following in results:
    print(following)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FullRepositoryEntity

```python
full_repository = client.FullRepository()
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
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether to archive this repository. |
| `assignees_url` | `str` | Yes |  |
| `auto_init` | `bool` | No | Pass `true` to create an initial commit with empty README. |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | Yes |  |
| `code_of_conduct` | `dict` | Yes | Code of Conduct Simple |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | Yes | Updates the default branch for this repository. |
| `delete_branch_on_merge` | `bool` | No | Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes | A short description of the new repository. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `github_id` | `int` | Yes |  |
| `gitignore_template` | `str` | No | Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. |
| `has_discussions` | `bool` | Yes | Whether discussions are enabled. |
| `has_downloads` | `bool` | No | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Either `true` to enable issues for this repository or `false` to disable them. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Either `true` to enable projects for this repository or `false` to disable them. |
| `has_wiki` | `bool` | Yes | Either `true` to enable the wiki for this repository or `false` to disable it. |
| `homepage` | `str` | Yes | A URL with more information about the repository. |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `include_all_branches` | `bool` | No | Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. |
| `is_template` | `bool` | No | Either `true` to make this repo available as a template repository or `false` to prevent it. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `license_template` | `str` | No | Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license… |
| `master_branch` | `str` | No |  |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the new repository. |
| `network_count` | `int` | Yes |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `dict` | Yes | A GitHub user. |
| `owner` | `dict` | Yes | A GitHub user. |
| `parent` | `dict` | Yes | A repository on GitHub. |
| `permissions` | `dict` | Yes |  |
| `private` | `bool` | Yes | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `security_and_analysis` | `dict` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `dict` | Yes | A repository on GitHub. |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `team_id` | `int` | No | The id of the team that will be granted access to this repository. |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `template_repository` | `dict` | Yes | A repository on GitHub. |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FullRepository().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FullRepository().load({"owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FullRepository().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FullRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GistEntity

```python
gist = client.Gist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `str` | No |  |
| `commits_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No | Description of the gist |
| `files` | `dict` | No | Names and content for the files that make up the gist |
| `fork_of` | `dict` | Yes | Gist |
| `forks` | `list` | No |  |
| `forks_url` | `str` | No |  |
| `git_pull_url` | `str` | No |  |
| `git_push_url` | `str` | No |  |
| `history` | `list` | No |  |
| `html_url` | `str` | No |  |
| `id` | `str` | No |  |
| `node_id` | `str` | No |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `user` | `str` | No | A GitHub user. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Gist().create({
    "fork_of": {},  # dict
    "owner": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Gist().list()
for gist in results:
    print(gist)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Gist().load({"id": "gist_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Gist().remove({"id": "gist_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Gist().update({
    "id": "gist_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GistCommentEntity

```python
gist_comment = client.GistComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `avatar_url` | `str` | Yes |  |
| `body` | `str` | Yes | The comment text. |
| `created_at` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
| `user_view_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GistComment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GistComment().list({"id": "example_id"})
for gist_comment in results:
    print(gist_comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GistComment().load({"id": 1, "gist_id": "gist_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GistComment().update({
    "id": 1,
    "gist_id": "gist_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GistCommitEntity

```python
gist_commit = client.GistCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_status` | `dict` | Yes |  |
| `committed_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
| `version` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GistCommit().list({"id": "example"})
for gist_commit in results:
    print(gist_commit)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GistSimpleEntity

```python
gist_simple = client.GistSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `int` | No |  |
| `comments_enabled` | `bool` | No |  |
| `comments_url` | `str` | No |  |
| `commits_url` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `files` | `dict` | No |  |
| `fork_of` | `dict` | Yes | Gist |
| `forks` | `list` | No |  |
| `forks_url` | `str` | No |  |
| `git_pull_url` | `str` | No |  |
| `git_push_url` | `str` | No |  |
| `history` | `list` | No |  |
| `html_url` | `str` | No |  |
| `id` | `str` | No |  |
| `node_id` | `str` | No |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `user` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GistSimple().list({"id": "example"})
for gist_simple in results:
    print(gist_simple)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GistSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitEntity

```python
git = client.Git()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Git().remove({"owner": "owner", "ref": "ref", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitCommitEntity

```python
git_commit = client.GitCommit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `dict` | Yes | Identifying information for the git-user |
| `committer` | `dict` | Yes | Identifying information for the git-user |
| `html_url` | `str` | Yes |  |
| `id` | `str` | No |  |
| `message` | `str` | Yes | Message describing the purpose of the commit |
| `node_id` | `str` | Yes |  |
| `parents` | `list` | Yes | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `str` | Yes | SHA for the commit |
| `signature` | `str` | No | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `dict` | Yes | The SHA of the tree object this commit points to |
| `url` | `str` | Yes |  |
| `verification` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitCommit().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GitCommit().load({"id": "git_commit_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitCommitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitRefEntity

```python
git_ref = client.GitRef()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `force` | `bool` | No | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `object` | `dict` | Yes |  |
| `ref` | `str` | Yes | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `str` | Yes | SHA for the reference |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitRef().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GitRef().load({"id": "git_ref_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GitRef().update({
    "id": "git_ref_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitRefEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitTagEntity

```python
git_tag = client.GitTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `message` | `str` | Yes | Message describing the purpose of the tag |
| `node_id` | `str` | Yes |  |
| `object` | `dict` | Yes | The SHA of the git object this is tagging. |
| `sha` | `str` | Yes |  |
| `tag` | `str` | Yes | Name of the tag |
| `tagger` | `dict` | Yes | An object with information about the individual creating the tag. |
| `type` | `str` | Yes | The type of the object we're tagging. |
| `url` | `str` | Yes | URL for the tag |
| `verification` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitTag().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GitTag().load({"id": "git_tag_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitTreeEntity

```python
git_tree = client.GitTree()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_tree` | `str` | No | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `str` | No |  |
| `sha` | `str` | Yes |  |
| `tree` | `list` | Yes | Objects specifying a tree structure |
| `truncated` | `bool` | Yes |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GitTree().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "sha": "example_sha",  # str
    "tree": [],  # list
    "truncated": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GitTree().load({"id": "git_tree_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitTreeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitignoreEntity

```python
gitignore = client.Gitignore()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Gitignore().list()
for gitignore in results:
    print(gitignore)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitignoreEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GitignoreTemplateEntity

```python
gitignore_template = client.GitignoreTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | Yes |  |
| `source` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GitignoreTemplate().load({"id": "gitignore_template_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GitignoreTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GlobalAdvisoryEntity

```python
global_advisory = client.GlobalAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `list` | Yes | The users who contributed to the advisory. |
| `cve_id` | `str` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `dict` | Yes |  |
| `cvss_severities` | `dict` | No |  |
| `cwes` | `list` | Yes |  |
| `description` | `str` | Yes | A detailed description of what the advisory entails. |
| `epss` | `dict` | No | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `str` | Yes | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `str` | Yes | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `str` | Yes | The URL for the advisory. |
| `id` | `str` | No |  |
| `identifiers` | `list` | Yes |  |
| `nvd_published_at` | `str` | Yes | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `str` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `list` | Yes |  |
| `repository_advisory_url` | `str` | Yes | The API URL for the repository advisory. |
| `severity` | `str` | Yes | The severity of the advisory. |
| `source_code_location` | `str` | Yes | The URL of the advisory's source code. |
| `summary` | `str` | Yes | A short summary of the advisory. |
| `type` | `str` | Yes | The type of advisory. |
| `updated_at` | `str` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `str` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `list` | Yes | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `str` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GlobalAdvisory().list()
for global_advisory in results:
    print(global_advisory)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GlobalAdvisory().load({"id": "global_advisory_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GlobalAdvisoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GpgKeyEntity

```python
gpg_key = client.GpgKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `armored_public_key` | `str` | Yes | A GPG key in ASCII-armored format. |
| `can_certify` | `bool` | Yes |  |
| `can_encrypt_comms` | `bool` | Yes |  |
| `can_encrypt_storage` | `bool` | Yes |  |
| `can_sign` | `bool` | Yes |  |
| `created_at` | `str` | Yes |  |
| `emails` | `list` | Yes |  |
| `expires_at` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `key_id` | `str` | Yes |  |
| `name` | `str` | No | A descriptive name for the new key. |
| `primary_key_id` | `int` | Yes |  |
| `public_key` | `str` | Yes |  |
| `raw_key` | `str` | Yes |  |
| `revoked` | `bool` | Yes |  |
| `subkeys` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GpgKey().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GpgKey().list()
for gpg_key in results:
    print(gpg_key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GpgKey().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpgKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HookEntity

```python
hook = client.Hook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `list` | No | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `dict` | Yes | Configuration object of the webhook |
| `created_at` | `str` | Yes |  |
| `deliveries_url` | `str` | No |  |
| `events` | `list` | Yes | Determines what events the hook is triggered for. |
| `id` | `int` | Yes | Unique identifier of the webhook. |
| `last_response` | `dict` | Yes |  |
| `name` | `str` | Yes | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `str` | Yes |  |
| `remove_events` | `list` | No | Determines a list of events to be removed from the list of events that the Hook triggers for. |
| `test_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Hook().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Hook().list({"owner": "example", "repo": "example"})
for hook in results:
    print(hook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Hook().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Hook().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HookDeliveryEntity

```python
hook_delivery = client.HookDelivery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `str` | Yes | Time when the delivery was delivered. |
| `duration` | `float` | Yes | Time spent delivering. |
| `event` | `str` | Yes | The event that triggered the delivery. |
| `guid` | `str` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Yes | Unique identifier of the delivery. |
| `installation_id` | `int` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Yes | Whether the delivery is a redelivery. |
| `repository_id` | `int` | Yes | The id of the repository associated with this event. |
| `request` | `dict` | Yes |  |
| `response` | `dict` | Yes |  |
| `status` | `str` | Yes | Description of the status of the attempted delivery |
| `status_code` | `int` | Yes | Status code received when delivery was made. |
| `throttled_at` | `str` | No | Time when the webhook delivery was throttled. |
| `url` | `str` | No | The URL target of the delivery. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.HookDelivery().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookDeliveryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HookDeliveryItemEntity

```python
hook_delivery_item = client.HookDeliveryItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `str` | Yes | Time when the webhook delivery occurred. |
| `duration` | `float` | Yes | Time spent delivering. |
| `event` | `str` | Yes | The event that triggered the delivery. |
| `guid` | `str` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Yes | Unique identifier of the webhook delivery. |
| `installation_id` | `int` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Yes | Whether the webhook delivery is a redelivery. |
| `repository_id` | `int` | Yes | The id of the repository associated with this event. |
| `status` | `str` | Yes | Describes the response returned after attempting the delivery. |
| `status_code` | `int` | Yes | Status code received when delivery was made. |
| `throttled_at` | `str` | No | Time when the webhook delivery was throttled. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.HookDeliveryItem().list()
for hook_delivery_item in results:
    print(hook_delivery_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HookDeliveryItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HostedComputeEntity

```python
hosted_compute = client.HostedCompute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `str` | No | The hosted compute service the network configuration supports. |
| `created_on` | `str` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `str` | Yes | The unique identifier of the network configuration. |
| `name` | `str` | Yes | The name of the network configuration. |
| `network_settings_ids` | `list` | No | The unique identifier of each network settings in the configuration. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.HostedCompute().list({"org_id": "example"})
for hosted_compute in results:
    print(hosted_compute)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.HostedCompute().remove({"network_configuration_id": "network_configuration_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HostedComputeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HovercardEntity

```python
hovercard = client.Hovercard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | Yes |  |
| `octicon` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Hovercard().list({"username": "example"})
for hovercard in results:
    print(hovercard)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HovercardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImportEntity

```python
import_ = client.Import()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authors_count` | `int` | No |  |
| `authors_url` | `str` | Yes |  |
| `commit_count` | `int` | No |  |
| `error_message` | `str` | No |  |
| `failed_step` | `str` | No |  |
| `has_large_files` | `bool` | No |  |
| `html_url` | `str` | Yes |  |
| `human_name` | `str` | No |  |
| `import_percent` | `int` | No |  |
| `large_files_count` | `int` | No |  |
| `large_files_size` | `int` | No |  |
| `message` | `str` | No |  |
| `project_choices` | `list` | No |  |
| `push_percent` | `int` | No |  |
| `repository_url` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `status_text` | `str` | No |  |
| `svc_root` | `str` | No |  |
| `svn_root` | `str` | No |  |
| `tfvc_project` | `str` | No | For a tfvc import, the name of the project that is being imported. |
| `url` | `str` | Yes |  |
| `use_lfs` | `bool` | No | Whether to store large files during the import. |
| `vcs` | `str` | Yes | The originating VCS type. |
| `vcs_password` | `str` | No | If authentication is required, the password to provide to `vcs_url`. |
| `vcs_url` | `str` | Yes | The URL of the originating repository. |
| `vcs_username` | `str` | No | If authentication is required, the username to provide to `vcs_url`. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Import().list({"owner": "example", "repo": "example"})
for import_ in results:
    print(import_)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Import().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InstallationEntity

```python
installation = client.Installation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `str` | Yes |  |
| `account` | `Any` | Yes |  |
| `app_id` | `int` | Yes |  |
| `app_slug` | `str` | Yes |  |
| `client_id` | `str` | No |  |
| `contact_email` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `events` | `list` | Yes |  |
| `has_multiple_single_files` | `bool` | No |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the installation. |
| `permissions` | `dict` | Yes | The permissions granted to the user access token. |
| `repositories_url` | `str` | Yes |  |
| `repository_selection` | `str` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `str` | Yes |  |
| `single_file_paths` | `list` | No |  |
| `suspended_at` | `str` | Yes |  |
| `suspended_by` | `dict` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Installation().list()
for installation in results:
    print(installation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Installation().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Installation().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Installation().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InstallationTokenEntity

```python
installation_token = client.InstallationToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `permissions` | `dict` | No | The permissions granted to the user access token. |
| `repositories` | `list` | No | List of repository names that the token should have access to |
| `repository_ids` | `list` | No | List of repository IDs that the token should have access to |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.InstallationToken().create({
    "id": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InstallationTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationEntity

```python
integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `list` | Yes | The GitHub Apps that have push access to this branch. |
| `client_id` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `events` | `list` | Yes | The list of events for the GitHub app. |
| `external_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the GitHub app |
| `installations_count` | `int` | No | The number of installations associated with the GitHub app. |
| `name` | `str` | Yes | The name of the GitHub app |
| `node_id` | `str` | Yes |  |
| `owner` | `Any` | Yes |  |
| `permissions` | `dict` | Yes | The set of permissions for the GitHub app |
| `slug` | `str` | No | The slug name of the GitHub app |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Integration().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Integration().list()
for integration in results:
    print(integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Integration().load({"app_slug": "app_slug"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Integration().remove({"branch_id": "branch_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Integration().update({
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IntegrationInstallationEntity

```python
integration_installation = client.IntegrationInstallation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Any` | Yes |  |
| `created_at` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the request installation. |
| `node_id` | `str` | No |  |
| `requester` | `dict` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IntegrationInstallation().list()
for integration_installation in results:
    print(integration_installation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IntegrationInstallationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InteractionEntity

```python
interaction = client.Interaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `str` | No |  |
| `limit` | `str` | No |  |
| `origin` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Interaction().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Interaction().remove()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InteractionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InteractionLimitEntity

```python
interaction_limit = client.InteractionLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `str` | Yes |  |
| `expiry` | `str` | No | The duration of the interaction restriction. |
| `limit` | `str` | Yes | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `str` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.InteractionLimit().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InteractionLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueEntity

```python
issue = client.Issue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `str` | No |  |
| `actor` | `dict` | Yes | A GitHub user. |
| `after_id` | `int` | No | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `dict` | Yes | A GitHub user. |
| `assignees` | `list` | No | Usernames of people to assign this issue to. |
| `assigner` | `dict` | Yes | A GitHub user. |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `before_id` | `int` | No | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `str` | No | Contents of the issue comment |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `closed_at` | `str` | Yes |  |
| `closed_by` | `dict` | Yes | A GitHub user. |
| `color` | `str` | No | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commit_id` | `str` | Yes |  |
| `commit_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `default` | `bool` | No | Whether this label comes by default in a new repository. |
| `description` | `str` | No | Optional description of the label, such as its purpose. |
| `dismissed_review` | `dict` | Yes |  |
| `draft` | `bool` | No |  |
| `event` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the issue comment |
| `issue` | `dict` | Yes | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `dict` | Yes |  |
| `issue_field_values` | `list` | No |  |
| `issue_id` | `int` | Yes | The id of the issue that blocks the current issue |
| `issue_url` | `str` | Yes |  |
| `label` | `dict` | Yes | Issue Event Label |
| `labels` | `list` | Yes | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `str` | Yes |  |
| `lock_reason` | `str` | No | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` | Yes |  |
| `milestone` | `dict` | Yes | Issue Event Milestone |
| `name` | `str` | No | The name of the label. |
| `node_id` | `str` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `str` | No | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `project_card` | `dict` | Yes | Issue Event Project Card |
| `pull_request` | `dict` | Yes |  |
| `reactions` | `dict` | Yes |  |
| `rename` | `dict` | Yes | Issue Event Rename |
| `replace_parent` | `bool` | No | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `dict` | Yes | A repository on GitHub. |
| `repository_url` | `str` | Yes |  |
| `requested_reviewer` | `dict` | Yes | A GitHub user. |
| `requested_team` | `dict` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `dict` | Yes | A GitHub user. |
| `state` | `str` | Yes | State of the issue; either 'open' or 'closed' |
| `state_reason` | `str` | No | The reason for the current state |
| `sub_issue_id` | `int` | Yes | The id of the sub-issue to add. |
| `sub_issues_summary` | `dict` | Yes |  |
| `timeline_url` | `str` | No |  |
| `title` | `str` | Yes | Title of the issue |
| `type` | `dict` | Yes | The type of issue. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | URL for the issue comment |
| `user` | `dict` | Yes | A GitHub user. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Issue().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Issue().list()
for issue in results:
    print(issue)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Issue().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Issue().remove({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Issue().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IssueTypeEntity

```python
issue_type = client.IssueType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `str` | No | The color of the issue type. |
| `created_at` | `str` | No | The time the issue type created. |
| `description` | `str` | Yes | The description of the issue type. |
| `id` | `int` | Yes | The unique identifier of the issue type. |
| `is_enabled` | `bool` | No | The enabled state of the issue type. |
| `name` | `str` | Yes | The name of the issue type. |
| `node_id` | `str` | Yes | The node identifier of the issue type. |
| `updated_at` | `str` | No | The time the issue type last updated. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IssueType().create({
    "org_id": "example_org_id",  # str
    "description": "example_description",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "node_id": "example_node_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IssueType().list({"org_id": "example"})
for issue_type in results:
    print(issue_type)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IssueType().update({
    "id": 1,
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IssueTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobEntity

```python
job = client.Job()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `check_run_url` | `str` | Yes |  |
| `completed_at` | `str` | Yes | The time that the job finished, in ISO 8601 format. |
| `conclusion` | `str` | Yes | The outcome of the job. |
| `created_at` | `str` | Yes | The time that the job created, in ISO 8601 format. |
| `head_branch` | `str` | Yes | The name of the current branch. |
| `head_sha` | `str` | Yes | The SHA of the commit that is being run. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The id of the job. |
| `labels` | `list` | Yes | Labels for the workflow job. |
| `name` | `str` | Yes | The name of the job. |
| `node_id` | `str` | Yes |  |
| `run_attempt` | `int` | No | Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run. |
| `run_id` | `int` | Yes | The id of the associated workflow run. |
| `run_url` | `str` | Yes |  |
| `runner_group_id` | `int` | Yes | The ID of the runner group to which this job has been assigned. |
| `runner_group_name` | `str` | Yes | The name of the runner group to which this job has been assigned. |
| `runner_id` | `int` | Yes | The ID of the runner to which this job has been assigned. |
| `runner_name` | `str` | Yes | The name of the runner to which this job has been assigned. |
| `started_at` | `str` | Yes | The time that the job started, in ISO 8601 format. |
| `status` | `str` | Yes | The phase of the lifecycle that the job is currently in. |
| `steps` | `list` | No | Steps in this job. |
| `url` | `str` | Yes |  |
| `workflow_name` | `str` | Yes | The name of the workflow. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Job().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## KeyEntity

```python
key = client.Key()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `key` | `str` | Yes | The public SSH key to add to your GitHub account. |
| `last_used` | `str` | No |  |
| `read_only` | `bool` | Yes |  |
| `title` | `str` | Yes | A descriptive name for the new key. |
| `url` | `str` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Key().create({
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "read_only": True,  # bool
    "title": "example_title",  # str
    "url": "example_url",  # str
    "verified": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Key().list()
for key in results:
    print(key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Key().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `KeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LabelEntity

```python
label = client.Label()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `color` | `str` | Yes | 6-character hex code, without the leading #, identifying the color |
| `default` | `bool` | Yes | Whether this label comes by default in a new repository. |
| `description` | `str` | Yes | Optional description of the label, such as its purpose. |
| `id` | `int` | Yes | Unique identifier for the label. |
| `name` | `str` | Yes | The name of the label. |
| `new_name` | `str` | No | The new name of the label. |
| `node_id` | `str` | Yes |  |
| `url` | `str` | Yes | URL for the label |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Label().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Label().list({"owner": "example", "repo": "example"})
for label in results:
    print(label)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Label().load({"id": "label_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Label().update({
    "id": "label_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LanguageEntity

```python
language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `C` | `int` | No |  |
| `Python` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Language().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LicenseEntity

```python
license = client.License()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | Yes |  |
| `conditions` | `list` | Yes |  |
| `content` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `download_url` | `str` | Yes |  |
| `encoding` | `str` | Yes |  |
| `featured` | `bool` | Yes |  |
| `git_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `str` | No |  |
| `implementation` | `str` | Yes |  |
| `key` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `limitations` | `list` | Yes |  |
| `links` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `node_id` | `str` | Yes |  |
| `path` | `str` | Yes |  |
| `permissions` | `list` | Yes |  |
| `sha` | `str` | Yes |  |
| `size` | `int` | Yes |  |
| `spdx_id` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.License().list()
for license in results:
    print(license)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.License().load({"id": "license_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LicenseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MarkdownEntity

```python
markdown = client.Markdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `str` | No | The repository context to use when creating references in `gfm` mode. |
| `mode` | `str` | No | The rendering mode. |
| `text` | `str` | Yes | The Markdown text to render in HTML. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Markdown().create({
    "text": "example_text",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarkdownEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MarketplaceListingPlanEntity

```python
marketplace_listing_plan = client.MarketplaceListingPlan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts_url` | `str` | Yes |  |
| `bullets` | `list` | Yes |  |
| `description` | `str` | Yes |  |
| `has_free_trial` | `bool` | Yes |  |
| `id` | `int` | Yes |  |
| `monthly_price_in_cents` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `number` | `int` | Yes |  |
| `price_model` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `unit_name` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `yearly_price_in_cents` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MarketplaceListingPlan().list()
for marketplace_listing_plan in results:
    print(marketplace_listing_plan)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplaceListingPlanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MarketplacePurchaseEntity

```python
marketplace_purchase = client.MarketplacePurchase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `marketplace_pending_change` | `dict` | No |  |
| `marketplace_purchase` | `dict` | Yes |  |
| `organization_billing_email` | `str` | No |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MarketplacePurchase().list({"plan_id": 1})
for marketplace_purchase in results:
    print(marketplace_purchase)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MarketplacePurchase().load({"account_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MarketplacePurchaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Member().list({"org_id": "example"})
for member in results:
    print(member)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MembershipEntity

```python
membership = client.Membership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Membership().list({"enterprise": "example", "enterprise_team": "example"})
for membership in results:
    print(membership)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Membership().load({"id": "membership_id", "enterprise": "enterprise", "team_id": "team_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Membership().update({
    "id": "membership_id",
    "enterprise": "enterprise",
    "team_id": "team_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MergedUpstreamEntity

```python
merged_upstream = client.MergedUpstream()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_branch` | `str` | No |  |
| `branch` | `str` | Yes | The name of the branch which should be updated to match upstream. |
| `merge_type` | `str` | No |  |
| `message` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MergedUpstream().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "branch": "example_branch",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MergedUpstreamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetaEntity

```python
meta = client.Meta()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Meta().list()
for meta in results:
    print(meta)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Meta().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MetarootEntity

```python
metaroot = client.Metaroot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorizations_url` | `str` | Yes |  |
| `code_search_url` | `str` | Yes |  |
| `commit_search_url` | `str` | Yes |  |
| `current_user_authorizations_html_url` | `str` | Yes |  |
| `current_user_repositories_url` | `str` | Yes |  |
| `current_user_url` | `str` | Yes |  |
| `emails_url` | `str` | Yes |  |
| `emojis_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `feeds_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `hub_url` | `str` | No |  |
| `issue_search_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `label_search_url` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `organization_repositories_url` | `str` | Yes |  |
| `organization_teams_url` | `str` | Yes |  |
| `organization_url` | `str` | Yes |  |
| `public_gists_url` | `str` | Yes |  |
| `rate_limit_url` | `str` | Yes |  |
| `repository_search_url` | `str` | Yes |  |
| `repository_url` | `str` | Yes |  |
| `starred_gists_url` | `str` | Yes |  |
| `starred_url` | `str` | Yes |  |
| `topic_search_url` | `str` | No |  |
| `user_organizations_url` | `str` | Yes |  |
| `user_repositories_url` | `str` | Yes |  |
| `user_search_url` | `str` | Yes |  |
| `user_url` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Metaroot().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MetarootEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MigrationEntity

```python
migration = client.Migration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `str` | No |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | No |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | No |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `exclude` | `list` | No | Exclude related items from being returned in the response in order to improve performance of the request. |
| `exclude_attachments` | `bool` | Yes | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). |
| `exclude_git_data` | `bool` | Yes | Indicates whether the repository git data should be excluded from the migration. |
| `exclude_metadata` | `bool` | Yes | Indicates whether metadata should be excluded and only git source should be included for the migration. |
| `exclude_owner_projects` | `bool` | Yes | Indicates whether projects owned by the organization or users should be excluded. |
| `exclude_releases` | `bool` | Yes | Indicates whether releases should be excluded from the migration (to reduce migration archive file size). |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `guid` | `str` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | No |  |
| `lock_repositories` | `bool` | Yes | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | No |  |
| `name` | `str` | Yes |  |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `org_metadata_only` | `bool` | Yes | Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags). |
| `owner` | `dict` | Yes | A GitHub user. |
| `permissions` | `dict` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | No |  |
| `releases_url` | `str` | Yes |  |
| `repositories` | `list` | Yes | The repositories included in the migration. |
| `role_name` | `str` | No |  |
| `security_and_analysis` | `dict` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `str` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `visibility` | `str` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Migration().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Migration().list()
for migration in results:
    print(migration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Migration().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Migration().remove({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MigrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MilestoneEntity

```python
milestone = client.Milestone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `closed_at` | `str` | Yes |  |
| `closed_issues` | `int` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `description` | `str` | No | A description of the milestone. |
| `due_on` | `str` | No | The milestone due date. |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `number` | `int` | Yes | The number of the milestone. |
| `open_issues` | `int` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `state` | `str` | No | The state of the milestone. |
| `subscriptions_url` | `str` | Yes |  |
| `title` | `str` | Yes | The title of the milestone. |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Milestone().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Milestone().list({"owner": "example", "repo": "example"})
for milestone in results:
    print(milestone)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Milestone().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Milestone().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MilestoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MinimalRepositoryEntity

```python
minimal_repository = client.MinimalRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | No |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | No |  |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | No |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | No |  |
| `forks_count` | `int` | No |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | No |  |
| `has_issues` | `bool` | No |  |
| `has_pages` | `bool` | No |  |
| `has_projects` | `bool` | No |  |
| `has_wiki` | `bool` | No |  |
| `homepage` | `str` | No |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | No |  |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | No |  |
| `name` | `str` | Yes |  |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `permissions` | `dict` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | No |  |
| `releases_url` | `str` | Yes |  |
| `role_name` | `str` | No |  |
| `security_and_analysis` | `dict` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `ssh_url` | `str` | No |  |
| `stargazers_count` | `int` | No |  |
| `stargazers_url` | `str` | Yes |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | No |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | Yes |  |
| `visibility` | `str` | No |  |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MinimalRepository().list()
for minimal_repository in results:
    print(minimal_repository)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MinimalRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NetworkConfigurationEntity

```python
network_configuration = client.NetworkConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `str` | No | The hosted compute service the network configuration supports. |
| `created_on` | `str` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `str` | Yes | The unique identifier of the network configuration. |
| `name` | `str` | Yes | The name of the network configuration. |
| `network_settings_ids` | `list` | No | The unique identifier of each network settings in the configuration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `compute_service` | - | - | - |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `network_settings_ids` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NetworkConfiguration().create({
    "org_id": "example_org_id",  # str
    "created_on": "example_created_on",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NetworkConfiguration().load({"id": "network_configuration_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NetworkConfiguration().update({
    "id": "network_configuration_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NetworkSettingEntity

```python
network_setting = client.NetworkSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The unique identifier of the network settings resource. |
| `name` | `str` | Yes | The name of the network settings resource. |
| `network_configuration_id` | `str` | No | The identifier of the network configuration that is using this settings resource. |
| `region` | `str` | Yes | The location of the subnet this network settings resource is configured for. |
| `subnet_id` | `str` | Yes | The subnet this network settings resource is configured for. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NetworkSetting().load({"id": "network_setting_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NetworkSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OidcCustomSubEntity

```python
oidc_custom_sub = client.OidcCustomSub()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `list` | Yes | Array of unique strings. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OidcCustomSub().list({"org_id": "example"})
for oidc_custom_sub in results:
    print(oidc_custom_sub)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OidcCustomSubEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OidcCustomSubRepoEntity

```python
oidc_custom_sub_repo = client.OidcCustomSubRepo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `list` | No | Array of unique strings. |
| `use_default` | `bool` | Yes | Whether to use the default template or not. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OidcCustomSubRepo().list({"owner": "example", "repo": "example"})
for oidc_custom_sub_repo in results:
    print(oidc_custom_sub_repo)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OidcCustomSubRepoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgEntity

```python
org = client.Org()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `str` | Yes |  |
| `account` | `Any` | Yes |  |
| `action` | `str` | Yes | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` | Yes |  |
| `app_slug` | `str` | Yes |  |
| `artifact_url` | `str` | No | The URL where the artifact is stored. |
| `async` | `bool` | No | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `list` | No |  |
| `attestations_subject_digests` | `dict` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `str` | Yes |  |
| `base_role` | `str` | No | The system role from which this role inherits permissions. |
| `billing_email` | `str` | No | Billing email address. |
| `blog` | `str` | No |  |
| `client_id` | `str` | No |  |
| `company` | `str` | No | The company name. |
| `contact_email` | `str` | No |  |
| `created_at` | `str` | Yes | The date and time the role was created. |
| `default_repository_permission` | `str` | No | Default permission level members have for organization repositories. |
| `dependabot_alerts_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependabot_security_updates_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `dependency_graph_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `deploy_keys_enabled_for_repositories` | `bool` | No | Controls whether or not deploy keys may be added and used for repositories in the organization. |
| `description` | `str` | No | The description of the company. |
| `digest` | `str` | Yes | The digest of the artifact (algorithm:hex-encoded-digest). |
| `direct_membership` | `bool` | No | Whether the user has direct membership in the organization. |
| `email` | `str` | No | The publicly visible email address. |
| `enterprise_teams_providing_indirect_membership` | `list` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `list` | Yes |  |
| `events_url` | `str` | Yes |  |
| `filled_seats` | `int` | No |  |
| `has_multiple_single_files` | `bool` | No |  |
| `has_organization_projects` | `bool` | No | Whether an organization can use organization projects. |
| `has_repository_projects` | `bool` | No | Whether repositories that belong to the organization can use repository projects. |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the installation. |
| `issues_url` | `str` | Yes |  |
| `location` | `str` | No | The location. |
| `login` | `str` | Yes |  |
| `members_allowed_repository_creation_type` | `str` | No | Specifies which types of repositories non-admin organization members can create. |
| `members_can_create_internal_repositories` | `bool` | No | Whether organization members can create internal repositories, which are visible to all enterprise members. |
| `members_can_create_pages` | `bool` | No | Whether organization members can create GitHub Pages sites. |
| `members_can_create_private_pages` | `bool` | No | Whether organization members can create private GitHub Pages sites. |
| `members_can_create_private_repositories` | `bool` | No | Whether organization members can create private repositories, which are visible to organization members with permission. |
| `members_can_create_public_pages` | `bool` | No | Whether organization members can create public GitHub Pages sites. |
| `members_can_create_public_repositories` | `bool` | No | Whether organization members can create public repositories, which are visible to anyone. |
| `members_can_create_repositories` | `bool` | No | Whether of non-admin organization members can create repositories. |
| `members_can_fork_private_repositories` | `bool` | No | Whether organization members can fork private organization repositories. |
| `members_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the artifact. |
| `node_id` | `str` | Yes |  |
| `organization` | `dict` | Yes | A GitHub organization. |
| `organization_url` | `str` | Yes |  |
| `page_info` | `dict` | No | Information about the current page. |
| `pat_ids` | `list` | Yes | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `list` | No | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `str` | No | The path of the artifact. |
| `permissions` | `dict` | Yes | The permissions granted to the user access token. |
| `predicate_type` | `str` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` | Yes |  |
| `properties` | `list` | Yes | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `str` | Yes |  |
| `query_suite` | `str` | No | CodeQL query suite to be used. |
| `reason` | `str` | No | Reason for approving or denying the request. |
| `registry_url` | `str` | Yes | The base URL of the artifact registry. |
| `repos_url` | `str` | Yes |  |
| `repositories_url` | `str` | Yes |  |
| `repository` | `str` | No | The repository name within the registry. |
| `repository_names` | `list` | Yes | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `str` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `str` | Yes | The user's membership type in the organization. |
| `seats` | `int` | No |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `str` | No | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | No | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `str` | Yes |  |
| `single_file_paths` | `list` | No |  |
| `source` | `str` | No | Source answers the question, "where did this role come from?" |
| `space` | `int` | Yes |  |
| `state` | `str` | Yes | The state of the member in the organization. |
| `status` | `str` | No | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `list` | No |  |
| `subject_digests` | `list` | Yes | List of subject digests to fetch attestations for. |
| `suspended_at` | `str` | Yes |  |
| `suspended_by` | `dict` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `str` | Yes |  |
| `total_count` | `int` | No |  |
| `twitter_username` | `str` | No | The Twitter username of the company. |
| `updated_at` | `str` | Yes | The date and time the role was last updated. |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Org().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Org().list()
for org in results:
    print(org)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Org().load({"id": "org_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Org().remove({"id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Org().update({
    "id": "org_id",
    "username": "username",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgHookEntity

```python
org_hook = client.OrgHook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines if notifications are sent when the webhook is triggered. |
| `config` | `dict` | Yes | Key/value pairs to provide settings for this webhook. |
| `created_at` | `str` | Yes |  |
| `deliveries_url` | `str` | No |  |
| `events` | `list` | Yes | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes | Must be passed as "web". |
| `ping_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrgHook().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrgHook().list({"id": "example_id"})
for org_hook in results:
    print(org_hook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrgHook().load({"id": 1, "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrgHook().update({
    "id": 1,
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgHookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgMembershipEntity

```python
org_membership = client.OrgMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_membership` | `bool` | No | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `list` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `str` | No |  |
| `organization` | `dict` | Yes | A GitHub organization. |
| `organization_url` | `str` | Yes |  |
| `permissions` | `dict` | Yes |  |
| `role` | `str` | Yes | The user's membership type in the organization. |
| `state` | `str` | Yes | The state of the member in the organization. |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrgMembership().load({"id": "org_membership_id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OrgMembership().update({
    "id": "org_membership_id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgPrivateRegistryConfigurationEntity

```python
org_private_registry_configuration = client.OrgPrivateRegistryConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the private registry configuration. |
| `registry_type` | `str` | Yes | The registry type. |
| `updated_at` | `str` | Yes |  |
| `username` | `str` | No | The username to use when authenticating with the private registry. |
| `visibility` | `str` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrgPrivateRegistryConfiguration().load({"org_id": "org_id", "secret_name": "secret_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgPrivateRegistryConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity

```python
org_private_registry_configuration_with_selected_repository = client.OrgPrivateRegistryConfigurationWithSelectedRepository()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encrypted_value` | `str` | Yes | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `str` | No |  |
| `key_id` | `str` | Yes | The ID of the key you used to encrypt the secret. |
| `registry_type` | `str` | Yes | The registry type. |
| `selected_repository_ids` | `list` | No | An array of repository IDs that can access the organization private registry. |
| `url` | `str` | Yes | The URL of the private registry. |
| `username` | `str` | No | The username to use when authenticating with the private registry. |
| `visibility` | `str` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrgPrivateRegistryConfigurationWithSelectedRepository().create({
    "id": "example_id",  # str
    "encrypted_value": "example_encrypted_value",  # str
    "key_id": "example_key_id",  # str
    "registry_type": "example_registry_type",  # str
    "url": "example_url",  # str
    "visibility": "example_visibility",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgRepoCustomPropertyValueEntity

```python
org_repo_custom_property_value = client.OrgRepoCustomPropertyValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `properties` | `list` | Yes | List of custom property names and associated values |
| `repository_full_name` | `str` | Yes |  |
| `repository_id` | `int` | Yes |  |
| `repository_name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrgRepoCustomPropertyValue().list({"org_id": "example"})
for org_repo_custom_property_value in results:
    print(org_repo_custom_property_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgRepoCustomPropertyValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationActionsSecretEntity

```python
organization_actions_secret = client.OrganizationActionsSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the secret. |
| `selected_repositories_url` | `str` | No |  |
| `updated_at` | `str` | Yes |  |
| `visibility` | `str` | Yes | Visibility of a secret |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationActionsSecret().load({"id": "organization_actions_secret_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationActionsSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationActionsVariableEntity

```python
organization_actions_variable = client.OrganizationActionsVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the variable. |
| `selected_repositories_url` | `str` | No |  |
| `updated_at` | `str` | Yes | The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `value` | `str` | Yes | The value of the variable. |
| `visibility` | `str` | Yes | Visibility of a variable |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationActionsVariable().load({"id": "organization_actions_variable_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationActionsVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationDependabotSecretEntity

```python
organization_dependabot_secret = client.OrganizationDependabotSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the secret. |
| `selected_repositories_url` | `str` | No |  |
| `updated_at` | `str` | Yes |  |
| `visibility` | `str` | Yes | Visibility of a secret |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationDependabotSecret().load({"id": "organization_dependabot_secret_id", "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationDependabotSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationInvitationEntity

```python
organization_invitation = client.OrganizationInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `email` | `str` | No | **Required unless you provide `invitee_id`**. |
| `failed_at` | `str` | No |  |
| `failed_reason` | `str` | No |  |
| `id` | `int` | Yes |  |
| `invitation_source` | `str` | No |  |
| `invitation_teams_url` | `str` | Yes |  |
| `invitee_id` | `int` | No | **Required unless you provide `email`**. |
| `inviter` | `dict` | Yes | A GitHub user. |
| `login` | `str` | Yes |  |
| `node_id` | `str` | Yes |  |
| `role` | `str` | No | The role for the new member. |
| `team_count` | `int` | Yes |  |
| `team_ids` | `list` | No | Specify IDs for the teams you want to invite new members to. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationInvitation().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationInvitation().list({"org_id": "example"})
for organization_invitation in results:
    print(organization_invitation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInvitationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationProgrammaticAccessGrantEntity

```python
organization_programmatic_access_grant = client.OrganizationProgrammaticAccessGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_granted_at` | `str` | Yes | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `str` | Yes | Date and time when the request for access was created. |
| `id` | `int` | Yes | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `dict` | Yes | A GitHub user. |
| `permissions` | `dict` | Yes | Permissions requested, categorized by type of permission. |
| `reason` | `str` | Yes | Reason for requesting access. |
| `repositories_url` | `str` | Yes | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `str` | Yes | Type of repository selection requested. |
| `token_expired` | `bool` | Yes | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `str` | Yes | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Yes | Unique identifier of the user's token. |
| `token_last_used_at` | `str` | Yes | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `str` | Yes | The name given to the user's token. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationProgrammaticAccessGrant().list({"org_id": "example"})
for organization_programmatic_access_grant in results:
    print(organization_programmatic_access_grant)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationRoleEntity

```python
organization_role = client.OrganizationRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `str` | No | The system role from which this role inherits permissions. |
| `created_at` | `str` | Yes | The date and time the role was created. |
| `description` | `str` | No | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | Yes | The unique identifier of the role. |
| `name` | `str` | Yes | The name of the role. |
| `organization` | `dict` | Yes | A GitHub user. |
| `permissions` | `list` | Yes | A list of permissions included in this role. |
| `source` | `str` | No | Source answers the question, "where did this role come from?" |
| `updated_at` | `str` | Yes | The date and time the role was last updated. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationRole().load({"id": 1, "org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationSecretScanningAlertEntity

```python
organization_secret_scanning_alert = client.OrganizationSecretScanningAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `Any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `str` | No | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `str` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | No | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | No | The security alert number. |
| `publicly_leaked` | `bool` | No | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `str` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `str` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `dict` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `str` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `str` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `dict` | Yes | A GitHub user. |
| `repository` | `dict` | Yes | A GitHub repository. |
| `resolution` | `str` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `str` | No | The comment that was optionally added when this alert was closed |
| `resolved_at` | `str` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `dict` | Yes | A GitHub user. |
| `secret` | `str` | No | The secret that was detected. |
| `secret_type` | `str` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `str` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `str` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `str` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | No | The REST API URL of the alert resource. |
| `validity` | `str` | No | The token status as of the latest validity check. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationSecretScanningAlert().list({"org_id": "example"})
for organization_secret_scanning_alert in results:
    print(organization_secret_scanning_alert)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationSecretScanningAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OutsideCollaboratorEntity

```python
outside_collaborator = client.OutsideCollaborator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OutsideCollaborator().list({"org_id": "example"})
for outside_collaborator in results:
    print(outside_collaborator)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OutsideCollaboratorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PackageEntity

```python
package = client.Package()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deleted_at` | `str` | No |  |
| `description` | `str` | No |  |
| `docker` | `dict` | Yes |  |
| `github_id` | `int` | Yes | Unique identifier of the package. |
| `html_url` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Yes | Free storage space (GB) for GitHub Packages. |
| `license` | `str` | No |  |
| `metadata` | `dict` | Yes |  |
| `name` | `str` | Yes | The name of the package. |
| `owner` | `dict` | Yes | A GitHub user. |
| `package_html_url` | `str` | Yes |  |
| `package_type` | `str` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `total_gigabytes_bandwidth_used` | `int` | Yes | Sum of the free and paid storage space (GB) for GitHuub Packages. |
| `total_paid_gigabytes_bandwidth_used` | `int` | Yes | Total paid storage space (GB) for GitHuub Packages. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `version_count` | `int` | Yes | The number of versions of the package. |
| `visibility` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Package().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Package().list({"package_type": "example"})
for package in results:
    print(package)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Package().load({"package_name": "package_name", "package_type": "package_type"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Package().remove({"package_name": "package_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PageEntity

```python
page = client.Page()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_type` | `str` | No | The process in which the Page will be built. |
| `cname` | `str` | Yes | The Pages site's custom domain |
| `custom_404` | `bool` | Yes | Whether the Page has a custom 404 page. |
| `html_url` | `str` | No | The web address the Page can be accessed from. |
| `https_certificate` | `dict` | Yes |  |
| `https_enforced` | `bool` | No | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `str` | No | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `str` | No | The state if the domain is verified |
| `public` | `bool` | Yes | Whether the GitHub Pages site is publicly visible. |
| `source` | `dict` | Yes | The source branch and directory used to publish your Pages site. |
| `status` | `str` | Yes | The status of the most recent build of the Page. |
| `url` | `str` | Yes | The API address for accessing this Page resource. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Page().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Page().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PageBuildEntity

```python
page_build = client.PageBuild()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `duration` | `int` | Yes |  |
| `error` | `dict` | Yes |  |
| `id` | `str` | No |  |
| `pusher` | `dict` | Yes | A GitHub user. |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PageBuild().list({"owner": "example", "repo": "example"})
for page_build in results:
    print(page_build)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PageBuild().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageBuildEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PageBuildStatusEntity

```python
page_build_status = client.PageBuildStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PageBuildStatus().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageBuildStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PageDeploymentEntity

```python
page_deployment = client.PageDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact_id` | `float` | No | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `str` | No | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `str` | No | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `str` | Yes | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `str` | Yes | A unique string that represents the version of the build for this deployment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PageDeployment().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "oidc_token": "example_oidc_token",  # str
    "pages_build_version": "example_pages_build_version",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PageDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PagesDeploymentStatusEntity

```python
pages_deployment_status = client.PagesDeploymentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `str` | No | The current status of the deployment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PagesDeploymentStatus().create({
    "deployment_id": "example_deployment_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PagesDeploymentStatus().load({"owner": "owner", "pages_deployment_id": "pages_deployment_id", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PagesDeploymentStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PagesHealthCheckEntity

```python
pages_health_check = client.PagesHealthCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_domain` | `dict` | No |  |
| `domain` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PagesHealthCheck().load({"owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PagesHealthCheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ParticipationEntity

```python
participation = client.Participation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `list` | Yes |  |
| `owner` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Participation().list({"owner": "example", "repo": "example"})
for participation in results:
    print(participation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParticipationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PendingDeploymentEntity

```python
pending_deployment = client.PendingDeployment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_can_approve` | `bool` | Yes | Whether the currently authenticated user can approve the deployment |
| `environment` | `dict` | Yes |  |
| `reviewers` | `list` | Yes | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | Yes | The set duration of the wait timer |
| `wait_timer_started_at` | `str` | Yes | The time that the wait timer began. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PendingDeployment().list({"owner": "example", "repo": "example", "run_id": 1})
for pending_deployment in results:
    print(pending_deployment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PendingDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PorterAuthorEntity

```python
porter_author = client.PorterAuthor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | The new Git author email. |
| `id` | `int` | Yes |  |
| `import_url` | `str` | Yes |  |
| `name` | `str` | Yes | The new Git author name. |
| `remote_id` | `str` | Yes |  |
| `remote_name` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PorterAuthor().list({"owner": "example", "repo": "example"})
for porter_author in results:
    print(porter_author)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PorterAuthor().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PorterAuthorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PorterLargeFileEntity

```python
porter_large_file = client.PorterLargeFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oid` | `str` | Yes |  |
| `path` | `str` | Yes |  |
| `ref_name` | `str` | Yes |  |
| `size` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PorterLargeFile().list({"owner": "example", "repo": "example"})
for porter_large_file in results:
    print(porter_large_file)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PorterLargeFileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrivateRegistryEntity

```python
private_registry = client.PrivateRegistry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `encrypted_value` | `str` | No | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `str` | No |  |
| `key` | `str` | Yes | The Base64 encoded public key. |
| `key_id` | `str` | Yes | The identifier for the key. |
| `name` | `str` | Yes | The name of the private registry configuration. |
| `registry_type` | `str` | No | The registry type. |
| `selected_repository_ids` | `list` | No | An array of repository IDs that can access the organization private registry. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | No | The URL of the private registry. |
| `username` | `str` | No | The username to use when authenticating with the private registry. |
| `visibility` | `str` | No | Which type of organization repositories have access to the private registry. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PrivateRegistry().list({"org_id": "example"})
for private_registry in results:
    print(private_registry)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PrivateRegistry().load({"org_id": "org_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PrivateRegistry().remove({"id": "id", "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PrivateRegistry().update({
    "id": "id",
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateRegistryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrivateUserEntity

```python
private_user = client.PrivateUser()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivateUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `body` | `str` | No | The description of the project. |
| `columns_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No | The name of the project. |
| `node_id` | `str` | Yes |  |
| `number` | `int` | Yes |  |
| `organization_permission` | `str` | No | The baseline permission that all organization members have on this project |
| `organizations_url` | `str` | Yes |  |
| `owner_url` | `str` | Yes |  |
| `private` | `bool` | No | Whether or not this project can be seen by everyone. |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `state` | `str` | No | State of the project; either 'open' or 'closed' |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list({"org_id": "example"})
for project in results:
    print(project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectCollaboratorPermissionEntity

```python
project_collaborator_permission = client.ProjectCollaboratorPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectCollaboratorPermission().load({"project_id": 1, "username": "username"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectCollaboratorPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectColumnEntity

```python
project_column = client.ProjectColumn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cards_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `id` | `int` | Yes | The unique identifier of the project column |
| `name` | `str` | Yes | Name of the project column |
| `node_id` | `str` | Yes |  |
| `project_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectColumn().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectColumn().list({"id": 1})
for project_column in results:
    print(project_column)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectColumn().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectColumn().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectColumnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsClassicEntity

```python
projects_classic = client.ProjectsClassic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permission` | `str` | No | The permission to grant the collaborator. |
| `position` | `str` | Yes | The position of the column in a project. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectsClassic().create({
    "column_id": 1,  # int
    "position": "example_position",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectsClassic().remove({"column_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectsClassic().update({
    "project_id": 1,
    "username": "username",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsClassicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsV2Entity

```python
projects_v2 = client.ProjectsV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `str` | Yes | The time when the project was closed. |
| `created_at` | `str` | Yes | The time when the project was created. |
| `creator` | `dict` | Yes | A GitHub user. |
| `deleted_at` | `str` | Yes | The time when the project was deleted. |
| `deleted_by` | `dict` | Yes | A GitHub user. |
| `description` | `str` | Yes | A short description of the project. |
| `id` | `float` | Yes | The unique identifier of the project. |
| `is_template` | `bool` | No | Whether this project is a template |
| `latest_status_update` | `dict` | Yes | An status update belonging to a project |
| `node_id` | `str` | Yes | The node ID of the project. |
| `number` | `int` | Yes | The project number. |
| `owner` | `dict` | Yes | A GitHub user. |
| `public` | `bool` | Yes | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `str` | Yes | A concise summary of the project. |
| `state` | `str` | No | The current state of the project. |
| `title` | `str` | Yes | The project title. |
| `updated_at` | `str` | Yes | The time when the project was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectsV2().list({"org_id": "example"})
for projects_v2 in results:
    print(projects_v2)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectsV2().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsV2FieldEntity

```python
projects_v2_field = client.ProjectsV2Field()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `dict` | No | Configuration for iteration fields. |
| `created_at` | `str` | Yes | The time when the field was created. |
| `data_type` | `str` | Yes | The field's data type. |
| `id` | `int` | Yes | The unique identifier of the field. |
| `name` | `str` | Yes | The name of the field. |
| `node_id` | `str` | No | The node ID of the field. |
| `options` | `list` | No | The options available for single select fields. |
| `project_url` | `str` | Yes | The API URL of the project that contains the field. |
| `updated_at` | `str` | Yes | The time when the field was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectsV2Field().list({"project_number": 1})
for projects_v2_field in results:
    print(projects_v2_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectsV2Field().load({"id": 1, "projects_v2_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2FieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsV2ItemSimpleEntity

```python
projects_v2_item_simple = client.ProjectsV2ItemSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes | The numeric ID of the issue or pull request to add to the project. |
| `type` | `str` | Yes | The type of item to add to the project. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectsV2ItemSimple().create({
    "project_number": 1,  # int
    "id": 1,  # int
    "type": "example_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2ItemSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectsV2ItemWithContentEntity

```python
projects_v2_item_with_content = client.ProjectsV2ItemWithContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | Yes | The time when the item was archived. |
| `content` | `dict` | No | The content of the item, which varies by content type. |
| `content_type` | `str` | Yes | The type of content tracked in a project item |
| `created_at` | `str` | Yes | The time when the item was created. |
| `creator` | `dict` | Yes | A GitHub user. |
| `fields` | `list` | No | The fields and values associated with this item. |
| `id` | `float` | Yes | The unique identifier of the project item. |
| `item_url` | `str` | No | The API URL of this item. |
| `node_id` | `str` | No | The node ID of the project item. |
| `project_url` | `str` | No | The API URL of the project that contains this item. |
| `updated_at` | `str` | Yes | The time when the item was last updated. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectsV2ItemWithContent().list({"project_number": 1})
for projects_v2_item_with_content in results:
    print(projects_v2_item_with_content)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProjectsV2ItemWithContent().load({"item_id": 1, "projects_v2_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectsV2ItemWithContent().update({
    "item_id": 1,
    "projects_v2_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectsV2ItemWithContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProtectedBranchEntity

```python
protected_branch = client.ProtectedBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `dict` | Yes | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `dict` | Yes | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `dict` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `dict` | Yes | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `dict` | Yes | Enforce all configured restrictions for administrators. |
| `lock_branch` | `dict` | No | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `dict` | No | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `dict` | Yes | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `dict` | Yes | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `dict` | Yes |  |
| `required_status_checks` | `dict` | Yes | Status Check Policy |
| `restrictions` | `dict` | Yes | Branch Restriction Policy |
| `url` | `str` | Yes |  |

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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProtectedBranch().update({
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProtectedBranchAdminEnforcedEntity

```python
protected_branch_admin_enforced = client.ProtectedBranchAdminEnforced()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProtectedBranchAdminEnforced().create({
    "branch_id": "example_branch_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "enabled": True,  # bool
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProtectedBranchAdminEnforced().load({"branch_id": "branch_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchAdminEnforcedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProtectedBranchPullRequestReviewEntity

```python
protected_branch_pull_request_review = client.ProtectedBranchPullRequestReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_pull_request_allowances` | `dict` | No | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Yes | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `dict` | No | Specify which users, teams, and apps can dismiss pull request reviews. |
| `require_code_owner_reviews` | `bool` | Yes | Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed. |
| `require_last_push_approval` | `bool` | No | Whether the most recent push must be approved by someone other than the person who pushed it. |
| `required_approving_review_count` | `int` | No | Specifies the number of reviewers required to approve pull requests. |
| `url` | `str` | No |  |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProtectedBranchPullRequestReview().load({"branch_id": "branch_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProtectedBranchPullRequestReview().update({
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProtectedBranchPullRequestReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicMemberEntity

```python
public_member = client.PublicMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PublicMember().list({"org_id": "example"})
for public_member in results:
    print(public_member)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PullEntity

```python
pull = client.Pull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `str` | No |  |
| `additions` | `int` | Yes |  |
| `assignee` | `dict` | Yes | A GitHub user. |
| `assignees` | `list` | No |  |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `auto_merge` | `dict` | Yes | The status of auto merging a pull request. |
| `base` | `dict` | Yes | The name of the branch you want the changes pulled into. |
| `body` | `str` | Yes | The contents of the pull request. |
| `changed_files` | `int` | Yes |  |
| `closed_at` | `str` | Yes |  |
| `comments` | `int` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commit_message` | `str` | No | Extra detail to append to automatic commit message. |
| `commit_title` | `str` | No | Title for the automatic commit message. |
| `commits` | `int` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deletions` | `int` | Yes |  |
| `diff_url` | `str` | Yes |  |
| `draft` | `bool` | No | Indicates whether or not the pull request is a draft. |
| `expected_head_sha` | `str` | No | The expected SHA of the pull request's HEAD ref. |
| `head` | `dict` | Yes | The name of the branch where your changes are implemented. |
| `head_repo` | `str` | No | The name of the repository where the changes in the pull request were made. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `issue` | `int` | No | An issue in the repository to convert to a pull request. |
| `issue_url` | `str` | Yes |  |
| `labels` | `list` | Yes |  |
| `links` | `dict` | Yes |  |
| `locked` | `bool` | Yes |  |
| `maintainer_can_modify` | `bool` | Yes | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `str` | Yes |  |
| `merge_method` | `str` | No | The merge method to use. |
| `mergeable` | `bool` | Yes |  |
| `mergeable_state` | `str` | Yes |  |
| `merged` | `bool` | Yes |  |
| `merged_at` | `str` | Yes |  |
| `merged_by` | `dict` | Yes | A GitHub user. |
| `message` | `str` | Yes |  |
| `milestone` | `dict` | Yes | A collection of related issues and pull requests. |
| `node_id` | `str` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `str` | Yes |  |
| `rebaseable` | `bool` | No |  |
| `requested_reviewers` | `list` | No |  |
| `requested_teams` | `list` | No |  |
| `review_comment_url` | `str` | Yes |  |
| `review_comments` | `int` | Yes |  |
| `review_comments_url` | `str` | Yes |  |
| `sha` | `str` | Yes | SHA that pull request head must match to allow merge. |
| `state` | `str` | Yes | State of this Pull Request. |
| `statuses_url` | `str` | Yes |  |
| `title` | `str` | Yes | The title of the pull request. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Pull().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Pull().list({"owner": "example", "repo": "example"})
for pull in results:
    print(pull)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Pull().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Pull().remove({"comment_id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Pull().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PullRequestReviewEntity

```python
pull_request_review = client.PullRequestReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `body` | `str` | Yes | The text of the review. |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `comments` | `list` | No | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `str` | Yes | A commit SHA for the review. |
| `event` | `str` | Yes | The review action you want to perform. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the review |
| `links` | `dict` | Yes |  |
| `message` | `str` | Yes | The message for the pull request review dismissal |
| `node_id` | `str` | Yes |  |
| `pull_request_url` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `submitted_at` | `str` | No |  |
| `teams` | `list` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
| `users` | `list` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PullRequestReview().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PullRequestReview().list({"owner": "example", "pull_number": 1, "repo": "example"})
for pull_request_review in results:
    print(pull_request_review)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PullRequestReview().load({"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PullRequestReview().remove({"id": 1, "owner": "owner", "pull_id": 1, "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PullRequestReview().update({
    "id": 1,
    "owner": "owner",
    "pull_id": 1,
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PullRequestReviewCommentEntity

```python
pull_request_review_comment = client.PullRequestReviewComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `body` | `str` | Yes | The text of the comment. |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `commit_id` | `str` | Yes | The SHA of the commit to which the comment applies. |
| `created_at` | `str` | Yes |  |
| `diff_hunk` | `str` | Yes | The diff of the line that the comment refers to. |
| `html_url` | `str` | Yes | HTML URL for the pull request review comment. |
| `id` | `int` | Yes | The ID of the pull request review comment. |
| `in_reply_to` | `int` | No | The ID of the review comment to reply to. |
| `in_reply_to_id` | `int` | No | The comment ID to reply to. |
| `line` | `int` | No | The line of the blob to which the comment applies. |
| `links` | `dict` | Yes |  |
| `node_id` | `str` | Yes | The node ID of the pull request review comment. |
| `original_commit_id` | `str` | Yes | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | No | The line of the blob to which the comment applies. |
| `original_position` | `int` | No | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `path` | `str` | Yes | The relative path of the file to which the comment applies. |
| `position` | `int` | No | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | Yes | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `str` | Yes | URL for the pull request that the review comment belongs to. |
| `reactions` | `dict` | Yes |  |
| `side` | `str` | No | The side of the diff to which the comment applies. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `str` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `str` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | URL for the pull request review comment |
| `user` | `dict` | Yes | A GitHub user. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PullRequestReviewComment().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PullRequestReviewComment().list({"owner": "example", "repo": "example"})
for pull_request_review_comment in results:
    print(pull_request_review_comment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PullRequestReviewComment().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PullRequestReviewComment().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestReviewCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PullRequestSimpleEntity

```python
pull_request_simple = client.PullRequestSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewers` | `list` | No | An array of user `login`s that will be requested. |
| `team_reviewers` | `list` | No | An array of team `slug`s that will be requested. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PullRequestSimple().create({
    "owner": "example_owner",  # str
    "pull_number": 1,  # int
    "repo": "example_repo",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PullRequestSimple().remove({"owner": "owner", "pull_number": 1, "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PullRequestSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RateLimitEntity

```python
rate_limit = client.RateLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate` | `dict` | Yes |  |
| `resources` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RateLimit().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RateLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReactionEntity

```python
reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `content` | `str` | Yes | The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment. |
| `created_at` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
| `user_view_type` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Reaction().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Reaction().list({"discussion_number": 1, "team_id": 1})
for reaction in results:
    print(reaction)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Reaction().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReferrerEntity

```python
referrer = client.Referrer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `referrer` | `str` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Referrer().list({"owner": "example", "repo": "example"})
for referrer in results:
    print(referrer)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReferrerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseEntity

```python
release = client.Release()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `list` | Yes |  |
| `assets_url` | `str` | Yes |  |
| `author` | `dict` | Yes | A GitHub user. |
| `body` | `str` | No | Text describing the contents of the tag. |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `browser_download_url` | `str` | Yes |  |
| `content_type` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `digest` | `str` | Yes |  |
| `discussion_category_name` | `str` | No | If specified, a discussion of the specified category is created and linked to the release. |
| `discussion_url` | `str` | No | The URL of the release discussion. |
| `download_count` | `int` | Yes |  |
| `draft` | `bool` | Yes | true to create a draft (unpublished) release, false to create a published one. |
| `generate_release_notes` | `bool` | No | Whether to automatically generate the name and body for this release. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `immutable` | `bool` | No | Whether or not the release is immutable. |
| `label` | `str` | Yes |  |
| `make_latest` | `str` | No | Specifies whether this release should be set as the latest release for the repository. |
| `mentions_count` | `int` | No |  |
| `name` | `str` | Yes | The name of the release. |
| `node_id` | `str` | Yes |  |
| `prerelease` | `bool` | Yes | Whether to identify the release as a prerelease or a full release. |
| `published_at` | `str` | Yes |  |
| `reactions` | `dict` | Yes |  |
| `size` | `int` | Yes |  |
| `state` | `str` | Yes | State of the release asset. |
| `tag_name` | `str` | Yes | The name of the tag. |
| `tarball_url` | `str` | Yes |  |
| `target_commitish` | `str` | Yes | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `str` | No |  |
| `upload_url` | `str` | Yes |  |
| `uploader` | `dict` | Yes | A GitHub user. |
| `url` | `str` | Yes |  |
| `zipball_url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Release().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Release().list({"owner": "example", "repo": "example"})
for release in results:
    print(release)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Release().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Release().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseAssetEntity

```python
release_asset = client.ReleaseAsset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `browser_download_url` | `str` | No |  |
| `content_type` | `str` | No |  |
| `created_at` | `str` | No |  |
| `digest` | `str` | No |  |
| `download_count` | `int` | No |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `label` | `str` | No | An alternate short description of the asset. |
| `login` | `str` | Yes |  |
| `name` | `str` | No | The file name of the asset. |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | No |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `state` | `str` | No | State of the release asset. |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | No |  |
| `uploader` | `dict` | No | A GitHub user. |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReleaseAsset().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReleaseAsset().list({"id": 1, "owner": "example", "repo": "example"})
for release_asset in results:
    print(release_asset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReleaseAsset().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReleaseAsset().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseAssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReleaseNotesContentEntity

```python
release_notes_content = client.ReleaseNotesContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | Yes | The generated body describing the contents of the release supporting markdown formatting |
| `configuration_file_path` | `str` | No | Specifies a path to a file in the repository containing configuration settings used for generating the release notes. |
| `name` | `str` | Yes | The generated name of the release |
| `previous_tag_name` | `str` | No | The name of the previous tag to use as the starting point for the release notes. |
| `tag_name` | `str` | Yes | The tag name for the release. |
| `target_commitish` | `str` | No | Specifies the commitish value that will be the target for the release's tag. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReleaseNotesContent().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "body": "example_body",  # str
    "name": "example_name",  # str
    "tag_name": "example_tag_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReleaseNotesContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveEntity

```python
remove = client.Remove()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `list` | Yes | The GitHub user handles to be removed from the team. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Remove().create({
    "enterprise": "example_enterprise",  # str
    "team_id": "example_team_id",  # str
    "usernames": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepoEntity

```python
repo = client.Repo()
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
| `app` | `dict` | Yes | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `str` | Yes |  |
| `attestations` | `list` | No |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `build_type` | `str` | No | The process by which the GitHub Pages site will be built. |
| `bundle` | `dict` | Yes | The attestation's Sigstore Bundle. |
| `client_payload` | `dict` | No | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `str` | Yes |  |
| `cname` | `str` | No | Specify a custom domain for the repository. |
| `code_search_index_status` | `dict` | No | The status of the code search index for this repository |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `content` | `str` | No |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes | The time that the environment was created, in ISO 8601 format. |
| `default_branch` | `str` | Yes | The default branch of the repository. |
| `default_branch_only` | `bool` | No | When forking from an existing repository, fork with only the default branch. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployment_branch_policy` | `dict` | Yes | The type of deployment branch policy for this environment. |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `download_url` | `str` | No |  |
| `downloads_url` | `str` | Yes |  |
| `enabled` | `bool` | Yes | Whether or not private vulnerability reporting is enabled for the repository. |
| `encoding` | `str` | No |  |
| `event_type` | `str` | Yes | A custom webhook event name. |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | No |  |
| `github_id` | `int` | Yes | Unique identifier of the repository |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `str` | Yes |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | No |  |
| `https_enforced` | `bool` | No | Specify whether HTTPS should be enforced for the repository. |
| `id` | `str` | Yes | Unique identifier of the repository |
| `integration_url` | `str` | Yes | The URL for the endpoint to get details about the app. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `links` | `dict` | No |  |
| `master_branch` | `str` | No |  |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | No | When forking from an existing repository, a new name for the fork. |
| `new_name` | `str` | No | The new name to be given to the repository. |
| `new_owner` | `str` | Yes | The username or organization name the repository will be transferred to. |
| `node_id` | `str` | Yes | The node ID for the deployment protection rule integration. |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `str` | No | Optional parameter to specify the organization name if forking into an organization. |
| `owner` | `dict` | Yes | A GitHub user. |
| `path` | `str` | No |  |
| `permissions` | `dict` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `properties` | `list` | Yes | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `list` | No | Built-in deployment protection rules for the environment. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `sha` | `str` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `slug` | `str` | Yes | The slugified name of the deployment protection rule integration. |
| `source` | `Any` | No |  |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `team_ids` | `list` | No | ID of the team or teams to add to the repository. |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `type` | `str` | No | Whether this rule targets a branch or tag. |
| `updated_at` | `str` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `str` | No |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Repo().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Repo().list()
for repo in results:
    print(repo)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Repo().load({"owner": "owner", "repo": "repo"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Repo().remove({"owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Repo().update({
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryEntity

```python
repository = client.Repository()
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
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | Yes |  |
| `code_search_index_status` | `dict` | No | The status of the code search index for this repository |
| `collaborators_url` | `str` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `default_branch` | `str` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `downloads_url` | `str` | Yes |  |
| `events_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `has_discussions` | `bool` | No | Whether discussions are enabled. |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `str` | Yes |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `license` | `dict` | Yes | License Simple |
| `master_branch` | `str` | No |  |
| `merge_commit_message` | `str` | No | The default value for a merge commit message. |
| `merge_commit_title` | `str` | No | The default value for a merge commit title. |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the repository. |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `permissions` | `dict` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `squash_merge_commit_message` | `str` | No | The default value for a squash merge commit message: - `PR_BODY` - default to the pull request's body. |
| `squash_merge_commit_title` | `str` | No | The default value for a squash merge commit title: - `PR_TITLE` - default to the pull request's title. |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `statuses_url` | `str` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Repository().list()
for repository in results:
    print(repository)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryAdvisoryEntity

```python
repository_advisory = client.RepositoryAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Any` | Yes | The author of the advisory. |
| `closed_at` | `str` | Yes | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `list` | Yes | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `list` | Yes | A list of users that collaborate on the advisory. |
| `created_at` | `str` | Yes | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `list` | Yes | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `list` | Yes |  |
| `cve_id` | `str` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `dict` | Yes |  |
| `cvss_severities` | `dict` | No |  |
| `cvss_vector_string` | `str` | No | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `list` | Yes | A list of only the CWE IDs. |
| `cwes` | `list` | Yes |  |
| `description` | `str` | Yes | A detailed description of what the advisory entails. |
| `ghsa_id` | `str` | Yes | The GitHub Security Advisory ID. |
| `html_url` | `str` | Yes | The URL for the advisory. |
| `identifiers` | `list` | Yes |  |
| `private_fork` | `Any` | Yes | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `str` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `Any` | Yes | The publisher of the advisory. |
| `severity` | `str` | Yes | The severity of the advisory. |
| `start_private_fork` | `bool` | No | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `str` | Yes | The state of the advisory. |
| `submission` | `dict` | Yes |  |
| `summary` | `str` | Yes | A short summary of the advisory. |
| `updated_at` | `str` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `str` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `list` | Yes | A product affected by the vulnerability detailed in a repository security advisory. |
| `withdrawn_at` | `str` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryAdvisory().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryAdvisory().list({"org_id": "example"})
for repository_advisory in results:
    print(repository_advisory)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryAdvisory().load({"ghsa_id": "ghsa_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryAdvisory().update({
    "ghsa_id": "ghsa_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryAdvisoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryCollaboratorPermissionEntity

```python
repository_collaborator_permission = client.RepositoryCollaboratorPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `permissions` | `dict` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `role_name` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryCollaboratorPermission().load({"owner": "owner", "repo": "repo", "username": "username"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryCollaboratorPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryInvitationEntity

```python
repository_invitation = client.RepositoryInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `expired` | `bool` | No | Whether or not the invitation has expired |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository invitation. |
| `invitee` | `dict` | Yes | A GitHub user. |
| `inviter` | `dict` | Yes | A GitHub user. |
| `node_id` | `str` | Yes |  |
| `permission` | `str` | No | The permission to grant the collaborator. |
| `permissions` | `str` | Yes | The permission associated with the invitation. |
| `repository` | `dict` | Yes | Minimal Repository |
| `url` | `str` | Yes | URL for the repository invitation |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryInvitation().list()
for repository_invitation in results:
    print(repository_invitation)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryInvitation().update({
    "owner": "owner",
    "repo": "repo",
    "username": "username",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryInvitationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryRuleDetailedEntity

```python
repository_rule_detailed = client.RepositoryRuleDetailed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameters` | `dict` | No |  |
| `ruleset_id` | `int` | No |  |
| `ruleset_source` | `str` | No |  |
| `ruleset_source_type` | `str` | No |  |
| `type` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryRuleDetailed().load({"branch": "branch", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRuleDetailedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositoryRulesetEntity

```python
repository_ruleset = client.RepositoryRuleset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_actors` | `list` | No | The actors that can bypass the rules in this ruleset |
| `conditions` | `Any` | No | Parameters for a repository ruleset ref name condition |
| `created_at` | `str` | No |  |
| `current_user_can_bypass` | `str` | No | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `str` | Yes | The enforcement level of the ruleset. |
| `id` | `int` | Yes | The ID of the ruleset |
| `links` | `dict` | No |  |
| `name` | `str` | Yes | The name of the ruleset |
| `node_id` | `str` | No |  |
| `rules` | `list` | No | An array of rules within the ruleset. |
| `source` | `str` | Yes | The name of the source |
| `source_type` | `str` | No | The type of the source of the ruleset |
| `target` | `str` | No | The target of the ruleset |
| `updated_at` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RepositoryRuleset().create({
    "org_id": "example_org_id",  # str
    "enforcement": "example_enforcement",  # str
    "id": 1,  # int
    "name": "example_name",  # str
    "source": "example_source",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RepositoryRuleset().list({"org_id": "example"})
for repository_ruleset in results:
    print(repository_ruleset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositoryRuleset().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositoryRuleset().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRulesetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RepositorySubscriptionEntity

```python
repository_subscription = client.RepositorySubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `ignored` | `bool` | Yes | Determines if all notifications should be blocked from this repository. |
| `reason` | `str` | Yes |  |
| `repository_url` | `str` | Yes |  |
| `subscribed` | `bool` | Yes | Determines if notifications should be received from this repository. |
| `url` | `str` | Yes |  |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RepositorySubscription().load({"owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RepositorySubscription().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositorySubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReviewCommentEntity

```python
review_comment = client.ReviewComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `body` | `str` | Yes |  |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `commit_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `diff_hunk` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `in_reply_to_id` | `int` | No |  |
| `line` | `int` | No | The line of the blob to which the comment applies. |
| `links` | `dict` | Yes |  |
| `node_id` | `str` | Yes |  |
| `original_commit_id` | `str` | Yes |  |
| `original_line` | `int` | No | The original line of the blob to which the comment applies. |
| `original_position` | `int` | Yes |  |
| `original_start_line` | `int` | No | The original first line of the range for a multi-line comment. |
| `path` | `str` | Yes |  |
| `position` | `int` | Yes |  |
| `pull_request_review_id` | `int` | Yes |  |
| `pull_request_url` | `str` | Yes |  |
| `reactions` | `dict` | Yes |  |
| `side` | `str` | No | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `str` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `str` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReviewComment().list({"id": 1, "owner": "example", "pull_id": 1, "repo": "example"})
for review_comment in results:
    print(review_comment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewCommentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RuleSuiteEntity

```python
rule_suite = client.RuleSuite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor_id` | `int` | No | The number that identifies the user. |
| `actor_name` | `str` | No | The handle for the GitHub user account. |
| `after_sha` | `str` | No | The new commit SHA of the ref. |
| `before_sha` | `str` | No | The previous commit SHA of the ref. |
| `evaluation_result` | `str` | No | The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. |
| `id` | `int` | No | The unique identifier of the rule insight. |
| `pushed_at` | `str` | No |  |
| `ref` | `str` | No | The ref name that the evaluation ran on. |
| `repository_id` | `int` | No | The ID of the repository associated with the rule evaluation. |
| `repository_name` | `str` | No | The name of the repository without the `.git` extension. |
| `result` | `str` | No | The result of the rule evaluations for rules with the `active` enforcement status. |
| `rule_evaluations` | `list` | No | Details on the evaluated rules. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RuleSuite().list({"org_id": "example"})
for rule_suite in results:
    print(rule_suite)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RuleSuite().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RuleSuiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RulesetVersionEntity

```python
ruleset_version = client.RulesetVersion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | Yes | The actor who updated the ruleset |
| `id` | `str` | No |  |
| `updated_at` | `str` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RulesetVersion().list({"id": 1})
for ruleset_version in results:
    print(ruleset_version)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RulesetVersionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RulesetVersionWithStateEntity

```python
ruleset_version_with_state = client.RulesetVersionWithState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | Yes | The actor who updated the ruleset |
| `state` | `dict` | Yes | The state of the ruleset version |
| `updated_at` | `str` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RulesetVersionWithState().load({"ruleset_id": 1, "version_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RulesetVersionWithStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RunnerEntity

```python
runner = client.Runner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `busy` | `bool` | Yes |  |
| `ephemeral` | `bool` | No |  |
| `id` | `int` | Yes | The ID of the runner. |
| `labels` | `list` | Yes |  |
| `name` | `str` | Yes | The name of the runner. |
| `os` | `str` | Yes | The Operating System of the runner. |
| `runner_group_id` | `int` | No | The ID of the runner group. |
| `status` | `str` | Yes | The status of the runner. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Runner().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RunnerApplicationEntity

```python
runner_application = client.RunnerApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `str` | Yes |  |
| `download_url` | `str` | Yes |  |
| `filename` | `str` | Yes |  |
| `os` | `str` | Yes |  |
| `sha256_checksum` | `str` | No |  |
| `temp_download_token` | `str` | No | A short lived bearer token used to download the runner, if needed. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RunnerApplication().list({"org_id": "example"})
for runner_application in results:
    print(runner_application)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RunnerGroupEntity

```python
runner_group = client.RunnerGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_public_repositories` | `bool` | Yes | Whether the runner group can be used by `public` repositories. |
| `default` | `bool` | Yes |  |
| `hosted_runners_url` | `str` | No |  |
| `id` | `float` | Yes |  |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `name` | `str` | Yes | Name of the runner group. |
| `network_configuration_id` | `str` | No | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `list` | No | List of runner IDs to add to the runner group. |
| `runners_url` | `str` | Yes |  |
| `selected_repositories_url` | `str` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `list` | No | List of repository IDs that can access the runner group. |
| `selected_workflows` | `list` | No | List of workflows the runner group should be allowed to run. |
| `visibility` | `str` | Yes | Visibility of a runner group. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RunnerGroup().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RunnerGroup().load({"id": 1, "org_id": "org_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.RunnerGroup().update({
    "id": 1,
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RunnerGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `str` | No |  |
| `aliases` | `list` | No |  |
| `allow_auto_merge` | `bool` | No |  |
| `allow_forking` | `bool` | No |  |
| `allow_merge_commit` | `bool` | No |  |
| `allow_rebase_merge` | `bool` | No |  |
| `allow_squash_merge` | `bool` | No |  |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes |  |
| `assignee` | `dict` | Yes | A GitHub user. |
| `assignees` | `list` | No |  |
| `assignees_url` | `str` | Yes |  |
| `author` | `dict` | Yes | A GitHub user. |
| `author_association` | `str` | Yes | How the author is associated with the repository. |
| `avatar_url` | `str` | Yes |  |
| `bio` | `str` | No |  |
| `blobs_url` | `str` | Yes |  |
| `blog` | `str` | No |  |
| `body` | `str` | No |  |
| `body_html` | `str` | No |  |
| `body_text` | `str` | No |  |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | Yes |  |
| `closed_at` | `str` | Yes |  |
| `collaborators_url` | `str` | Yes |  |
| `color` | `str` | Yes |  |
| `comments` | `int` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commit` | `dict` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `committer` | `dict` | Yes | Metaproperties for Git author/committer information. |
| `company` | `str` | No |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `created_by` | `str` | Yes |  |
| `curated` | `bool` | Yes |  |
| `default` | `bool` | Yes |  |
| `default_branch` | `str` | Yes |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `display_name` | `str` | Yes |  |
| `downloads_url` | `str` | Yes |  |
| `draft` | `bool` | No |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `featured` | `bool` | Yes |  |
| `file_size` | `int` | No |  |
| `followers` | `int` | No |  |
| `followers_url` | `str` | Yes |  |
| `following` | `int` | No |  |
| `following_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | Yes |  |
| `has_issues` | `bool` | Yes |  |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes |  |
| `has_wiki` | `bool` | Yes |  |
| `hireable` | `bool` | No |  |
| `homepage` | `str` | Yes |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `is_template` | `bool` | No |  |
| `issue_comment_url` | `str` | Yes |  |
| `issue_dependencies_summary` | `dict` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issue_field_values` | `list` | No |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels` | `list` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | No |  |
| `languages_url` | `str` | Yes |  |
| `last_modified_at` | `str` | No |  |
| `license` | `dict` | Yes | License Simple |
| `line_numbers` | `list` | No |  |
| `location` | `str` | No |  |
| `locked` | `bool` | Yes |  |
| `login` | `str` | Yes |  |
| `logo_url` | `str` | No |  |
| `master_branch` | `str` | No |  |
| `merges_url` | `str` | Yes |  |
| `milestone` | `dict` | Yes | A collection of related issues and pull requests. |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `node_id` | `str` | Yes |  |
| `notifications_url` | `str` | Yes |  |
| `number` | `int` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `parents` | `list` | Yes |  |
| `path` | `str` | Yes |  |
| `performed_via_github_app` | `dict` | Yes | GitHub apps are a new way to extend GitHub. |
| `permissions` | `dict` | Yes |  |
| `private` | `bool` | Yes |  |
| `public_gists` | `int` | No |  |
| `public_repos` | `int` | No |  |
| `pull_request` | `dict` | Yes |  |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `reactions` | `dict` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `related` | `list` | No |  |
| `released` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `repository` | `dict` | Yes | A repository on GitHub. |
| `repository_count` | `int` | No |  |
| `repository_url` | `str` | Yes |  |
| `score` | `float` | Yes |  |
| `sha` | `str` | Yes |  |
| `short_description` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes |  |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_url` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `state_reason` | `str` | No |  |
| `statuses_url` | `str` | Yes |  |
| `sub_issues_summary` | `dict` | Yes |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `suspended_at` | `str` | No |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `text_matches` | `list` | No |  |
| `timeline_url` | `str` | No |  |
| `title` | `str` | Yes |  |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `type` | `dict` | Yes | The type of issue. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user` | `dict` | Yes | A GitHub user. |
| `user_view_type` | `str` | No |  |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list({"q": "example"})
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningEntity

```python
secret_scanning = client.SecretScanning()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_settings` | `list` | No | Pattern settings for custom patterns. |
| `pattern_config_version` | `str` | No | The updated pattern configuration version. |
| `provider_pattern_settings` | `list` | No | Pattern settings for provider patterns. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SecretScanning().update({
    "org_id": "org_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningAlertEntity

```python
secret_scanning_alert = client.SecretScanningAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `Any` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `str` | No | The GitHub URL of the alert resource. |
| `id` | `str` | No |  |
| `is_base64_encoded` | `bool` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `str` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | No | Whether the detected secret was found in multiple repositories under the same organization or enterprise. |
| `number` | `int` | No | The security alert number. |
| `publicly_leaked` | `bool` | No | Whether the detected secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `str` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `str` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `dict` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `str` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `str` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `dict` | Yes | A GitHub user. |
| `resolution` | `str` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `str` | No | An optional comment to resolve an alert. |
| `resolved_at` | `str` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `dict` | Yes | A GitHub user. |
| `secret` | `str` | No | The secret that was detected. |
| `secret_type` | `str` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `str` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `str` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `str` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `str` | No | The REST API URL of the alert resource. |
| `validity` | `str` | No | The token status as of the latest validity check. |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SecretScanningAlert().list({"owner": "example", "repo": "example"})
for secret_scanning_alert in results:
    print(secret_scanning_alert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SecretScanningAlert().load({"id": 1, "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SecretScanningAlert().update({
    "id": 1,
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningAlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningLocationEntity

```python
secret_scanning_location = client.SecretScanningLocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `Any` | No |  |
| `type` | `str` | No | The location type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SecretScanningLocation().list({"alert_number": 1, "owner": "example", "repo": "example"})
for secret_scanning_location in results:
    print(secret_scanning_location)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningLocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningPatternConfigurationEntity

```python
secret_scanning_pattern_configuration = client.SecretScanningPatternConfiguration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_overrides` | `list` | No | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `str` | No | The version of the entity. |
| `provider_pattern_overrides` | `list` | No | Overrides for partner patterns. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SecretScanningPatternConfiguration().list({"org_id": "example"})
for secret_scanning_pattern_configuration in results:
    print(secret_scanning_pattern_configuration)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningPatternConfigurationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningPushProtectionBypassEntity

```python
secret_scanning_push_protection_bypass = client.SecretScanningPushProtectionBypass()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expire_at` | `str` | No | The time that the bypass will expire in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `placeholder_id` | `str` | Yes | The ID of the push protection bypass placeholder. |
| `reason` | `str` | No | The reason for bypassing push protection. |
| `token_type` | `str` | No | The token type this bypass is for. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `expire_at` | - |
| `placeholder_id` | - |
| `reason` | Yes |
| `token_type` | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SecretScanningPushProtectionBypass().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "placeholder_id": "example_placeholder_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningPushProtectionBypassEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretScanningScanHistoryEntity

```python
secret_scanning_scan_history = client.SecretScanningScanHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backfill_scans` | `list` | No |  |
| `custom_pattern_backfill_scans` | `list` | No |  |
| `incremental_scans` | `list` | No |  |
| `pattern_update_scans` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SecretScanningScanHistory().list({"owner": "example", "repo": "example"})
for secret_scanning_scan_history in results:
    print(secret_scanning_scan_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretScanningScanHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecurityAdvisoryEntity

```python
security_advisory = client.SecurityAdvisory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SecurityAdvisory().create({
    "id": "example_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecurityAdvisoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SelectedActionEntity

```python
selected_action = client.SelectedAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `github_owned_allowed` | `bool` | No | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `list` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | No | Whether actions from GitHub Marketplace verified creators are allowed. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SelectedAction().list({"org_id": "example"})
for selected_action in results:
    print(selected_action)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelectedActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SelfHostedRunnerEntity

```python
self_hosted_runner = client.SelfHostedRunner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_repositories` | `str` | Yes | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `str` | No | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SelfHostedRunner().load({"org_id": "org_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfHostedRunnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShortBlobEntity

```python
short_blob = client.ShortBlob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | Yes | The new blob's content. |
| `encoding` | `str` | No | The encoding used for `content`. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ShortBlob().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "content": "example_content",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShortBlobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShortBranchEntity

```python
short_branch = client.ShortBranch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `protected` | `bool` | Yes |  |
| `protection` | `dict` | No | Branch Protection |
| `protection_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ShortBranch().list({"owner": "example", "repo": "example"})
for short_branch in results:
    print(short_branch)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShortBranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimpleClassroomEntity

```python
simple_classroom = client.SimpleClassroom()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimpleClassroomEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SimpleClassroomAssignmentEntity

```python
simple_classroom_assignment = client.SimpleClassroomAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `dict` | Yes | A GitHub Classroom classroom |
| `deadline` | `str` | Yes | The time at which the assignment is due. |
| `editor` | `str` | Yes | The selected editor for the assignment. |
| `feedback_pull_requests_enabled` | `bool` | Yes | Whether feedback pull request will be created on assignment acceptance. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `invitations_enabled` | `bool` | Yes | Whether the invitation link is enabled. |
| `invite_link` | `str` | Yes | The link that a student can use to accept the assignment. |
| `language` | `str` | Yes | The programming language used in the assignment. |
| `max_members` | `int` | No | The maximum allowable members per team. |
| `max_teams` | `int` | No | The maximum allowable teams for the assignment. |
| `passing` | `int` | Yes | The number of students that have passed the assignment. |
| `public_repo` | `bool` | Yes | Whether an accepted assignment creates a public repository. |
| `slug` | `str` | Yes | Sluggified name of the assignment. |
| `students_are_repo_admins` | `bool` | Yes | Whether students are admins on created repository on accepted assignment. |
| `submitted` | `int` | Yes | The number of students that have submitted the assignment. |
| `title` | `str` | Yes | Assignment title. |
| `type` | `str` | Yes | Whether it's a Group Assignment or Individual Assignment. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SimpleClassroomAssignment().list({"classroom_id": 1})
for simple_classroom_assignment in results:
    print(simple_classroom_assignment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SimpleClassroomAssignmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SocialAccountEntity

```python
social_account = client.SocialAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_urls` | `list` | Yes | Full URLs for the social media profiles to add. |
| `provider` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SocialAccount().create({
    "account_urls": [],  # list
    "provider": "example_provider",  # str
    "url": "example_url",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SocialAccount().list()
for social_account in results:
    print(social_account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SocialAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SshSigningKeyEntity

```python
ssh_signing_key = client.SshSigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `key` | `str` | Yes | The public SSH key to add to your GitHub account. |
| `title` | `str` | Yes | A descriptive name for the new key. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `key` | - | - | - |
| `title` | - | - | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SshSigningKey().create({
    "created_at": "example_created_at",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "title": "example_title",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SshSigningKey().list()
for ssh_signing_key in results:
    print(ssh_signing_key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SshSigningKey().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SshSigningKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusEntity

```python
status = client.Status()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `context` | `str` | No | A string label to differentiate this status from the status of other systems. |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `description` | `str` | No | A short description of the status. |
| `id` | `int` | Yes |  |
| `node_id` | `str` | Yes |  |
| `state` | `str` | Yes | The state of the status. |
| `target_url` | `str` | No | The target URL to associate with this status. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Status().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Status().list({"owner": "example", "ref": "example", "repo": "example"})
for status in results:
    print(status)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusCheckPolicyEntity

```python
status_check_policy = client.StatusCheckPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes |  |
| `checks` | `list` | Yes | The list of status checks to require in order to merge into this branch. |
| `context` | `str` | Yes |  |
| `contexts` | `list` | Yes | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
| `contexts_url` | `str` | Yes |  |
| `strict` | `bool` | Yes | Require branches to be up to date before merging. |
| `url` | `str` | Yes |  |

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StatusCheckPolicy().list({"branch_id": "example", "owner": "example", "repo": "example"})
for status_check_policy in results:
    print(status_check_policy)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.StatusCheckPolicy().update({
    "branch_id": "branch_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusCheckPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriberEntity

```python
subscriber = client.Subscriber()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `login` | `str` | Yes |  |
| `name` | `str` | No |  |
| `node_id` | `str` | Yes |  |
| `organizations_url` | `str` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `site_admin` | `bool` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `url` | `str` | Yes |  |
| `user_view_type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subscriber().list({"owner": "example", "repo": "example"})
for subscriber in results:
    print(subscriber)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `node_id` | `str` | Yes |  |
| `tarball_url` | `str` | Yes |  |
| `zipball_url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tag().list({"owner": "example", "repo": "example"})
for tag in results:
    print(tag)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagProtectionEntity

```python
tag_protection = client.TagProtection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `enabled` | `bool` | No |  |
| `id` | `int` | No |  |
| `pattern` | `str` | Yes | An optional glob pattern to match against when enforcing tag protection. |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TagProtection().create({
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "pattern": "example_pattern",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TagProtection().list({"owner": "example", "repo": "example"})
for tag_protection in results:
    print(tag_protection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagProtectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_auto_merge` | `bool` | No | Whether to allow Auto-merge to be used on pull requests. |
| `allow_forking` | `bool` | No | Whether to allow forking this repo |
| `allow_merge_commit` | `bool` | No | Whether to allow merge commits for pull requests. |
| `allow_rebase_merge` | `bool` | No | Whether to allow rebase merges for pull requests. |
| `allow_squash_merge` | `bool` | No | Whether to allow squash merges for pull requests. |
| `archive_url` | `str` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `str` | Yes |  |
| `assignment` | `str` | No | Determines if the team has a direct, indirect, or mixed relationship to a role |
| `author` | `dict` | Yes | A GitHub user. |
| `avatar_url` | `str` | Yes |  |
| `blobs_url` | `str` | Yes |  |
| `body` | `str` | Yes | The main text of the comment. |
| `body_html` | `str` | Yes |  |
| `body_version` | `str` | Yes | The current version of the body content. |
| `branches_url` | `str` | Yes |  |
| `clone_url` | `str` | Yes |  |
| `code_of_conduct` | `dict` | Yes | Code Of Conduct |
| `collaborators_url` | `str` | Yes |  |
| `columns_url` | `str` | Yes |  |
| `comments_count` | `int` | Yes |  |
| `comments_url` | `str` | Yes |  |
| `commits_url` | `str` | Yes |  |
| `compare_url` | `str` | Yes |  |
| `contents_url` | `str` | Yes |  |
| `contributors_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes | A GitHub user. |
| `custom_properties` | `dict` | No | The custom properties that were defined for the repository. |
| `default_branch` | `str` | Yes | The default branch of the repository. |
| `delete_branch_on_merge` | `bool` | No | Whether to delete head branches when pull requests are merged |
| `deployments_url` | `str` | Yes |  |
| `description` | `str` | Yes | The description of the team. |
| `disabled` | `bool` | Yes | Returns whether or not this repository disabled. |
| `discussion_url` | `str` | Yes |  |
| `downloads_url` | `str` | Yes |  |
| `email` | `str` | No |  |
| `events_url` | `str` | Yes |  |
| `failed_at` | `str` | No |  |
| `failed_reason` | `str` | No |  |
| `followers_url` | `str` | Yes |  |
| `following_url` | `str` | Yes |  |
| `fork` | `bool` | Yes |  |
| `forks` | `int` | Yes |  |
| `forks_count` | `int` | Yes |  |
| `forks_url` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `gists_url` | `str` | Yes |  |
| `git_commits_url` | `str` | Yes |  |
| `git_refs_url` | `str` | Yes |  |
| `git_tags_url` | `str` | Yes |  |
| `git_url` | `str` | Yes |  |
| `gravatar_id` | `str` | Yes |  |
| `has_discussions` | `bool` | No |  |
| `has_downloads` | `bool` | Yes | Whether downloads are enabled. |
| `has_issues` | `bool` | Yes | Whether issues are enabled. |
| `has_pages` | `bool` | Yes |  |
| `has_projects` | `bool` | Yes | Whether projects are enabled. |
| `has_wiki` | `bool` | Yes | Whether the wiki is enabled. |
| `homepage` | `str` | Yes |  |
| `hooks_url` | `str` | Yes |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository |
| `invitation_source` | `str` | No |  |
| `invitation_teams_url` | `str` | Yes |  |
| `inviter` | `dict` | Yes | A GitHub user. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `str` | Yes |  |
| `issue_events_url` | `str` | Yes |  |
| `issues_url` | `str` | Yes |  |
| `keys_url` | `str` | Yes |  |
| `labels_url` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `languages_url` | `str` | Yes |  |
| `last_edited_at` | `str` | Yes |  |
| `ldap_dn` | `str` | No | Distinguished Name (DN) that team maps to within LDAP environment |
| `license` | `dict` | Yes | License Simple |
| `login` | `str` | Yes |  |
| `maintainers` | `list` | No | List GitHub usernames for organization members who will become team maintainers. |
| `master_branch` | `str` | No |  |
| `members_count` | `int` | Yes |  |
| `members_url` | `str` | Yes |  |
| `merges_url` | `str` | Yes |  |
| `milestones_url` | `str` | Yes |  |
| `mirror_url` | `str` | Yes |  |
| `name` | `str` | Yes | The name of the repository. |
| `network_count` | `int` | No |  |
| `node_id` | `str` | Yes |  |
| `notification_setting` | `str` | No | The notification setting the team has set |
| `notifications_url` | `str` | Yes |  |
| `number` | `int` | Yes | The unique sequence number of a team discussion comment. |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organization` | `dict` | Yes | Team Organization |
| `organization_permission` | `str` | No | The organization permission for this project. |
| `organizations_url` | `str` | Yes |  |
| `owner` | `dict` | Yes | A GitHub user. |
| `owner_url` | `str` | Yes |  |
| `parent` | `dict` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | No | The ID of a team to set as the parent team. |
| `permission` | `str` | Yes | Permission that the team will have for its repositories |
| `permissions` | `dict` | Yes |  |
| `pinned` | `bool` | Yes | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `str` | No | The level of privacy this team should have |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `str` | Yes |  |
| `pushed_at` | `str` | Yes |  |
| `reactions` | `dict` | Yes |  |
| `received_events_url` | `str` | Yes |  |
| `releases_url` | `str` | Yes |  |
| `repo_names` | `list` | No | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` | Yes |  |
| `repos_url` | `str` | Yes |  |
| `repositories_url` | `str` | Yes |  |
| `role` | `str` | Yes | The role of the user in the team. |
| `role_name` | `str` | No |  |
| `security_and_analysis` | `dict` | No |  |
| `site_admin` | `bool` | Yes |  |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `slug` | `str` | Yes |  |
| `ssh_url` | `str` | Yes |  |
| `stargazers_count` | `int` | Yes |  |
| `stargazers_url` | `str` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | Yes |  |
| `state` | `str` | Yes | The state of the user's membership in the team. |
| `statuses_url` | `str` | Yes |  |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `str` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `subscriptions_url` | `str` | Yes |  |
| `svn_url` | `str` | Yes |  |
| `tags_url` | `str` | Yes |  |
| `team_count` | `int` | Yes |  |
| `team_url` | `str` | Yes |  |
| `teams_url` | `str` | Yes |  |
| `temp_clone_token` | `str` | No |  |
| `title` | `str` | Yes | The title of the discussion. |
| `topics` | `list` | No |  |
| `trees_url` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | URL for the team |
| `user_view_type` | `str` | No |  |
| `visibility` | `str` | No | The repository visibility: public, private, or internal. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Team().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Team().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Team().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Team().update({
    "id": 1,
    "project_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamSimpleEntity

```python
team_simple = client.TeamSimple()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Description of the team |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the team |
| `ldap_dn` | `str` | No | Distinguished Name (DN) that team maps to within LDAP environment |
| `members_url` | `str` | Yes |  |
| `name` | `str` | Yes | Name of the team |
| `node_id` | `str` | Yes |  |
| `notification_setting` | `str` | No | The notification setting the team has set |
| `permission` | `str` | Yes | Permission that the team will have for its repositories |
| `privacy` | `str` | No | The level of privacy this team should have |
| `repositories_url` | `str` | Yes |  |
| `slug` | `str` | Yes |  |
| `url` | `str` | Yes | URL for the team |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TeamSimple().list({"org_id": "example"})
for team_simple in results:
    print(team_simple)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamSimpleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreadEntity

```python
thread = client.Thread()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `last_read_at` | `str` | Yes |  |
| `reason` | `str` | Yes |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `subject` | `dict` | Yes |  |
| `subscription_url` | `str` | Yes |  |
| `unread` | `bool` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Thread().list()
for thread in results:
    print(thread)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Thread().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Thread().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ThreadSubscriptionEntity

```python
thread_subscription = client.ThreadSubscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `id` | `str` | No |  |
| `ignored` | `bool` | Yes | Whether to block all notifications from a thread. |
| `reason` | `str` | Yes |  |
| `repository_url` | `str` | No |  |
| `subscribed` | `bool` | Yes |  |
| `thread_url` | `str` | No |  |
| `url` | `str` | Yes |  |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ThreadSubscription().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ThreadSubscription().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ThreadSubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicEntity

```python
topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `names` | `list` | Yes | An array of topics to add to the repository. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Topic().list({"owner": "example", "repo": "example"})
for topic in results:
    print(topic)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Topic().update({
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `str` | No | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `dict` | No | Mapping of subject digest to bundles. |
| `avatar_url` | `str` | No |  |
| `bio` | `str` | No | The new short biography of the user. |
| `blog` | `str` | No | The new blog URL of the user. |
| `collaborators` | `int` | No |  |
| `company` | `str` | No | The new company of the user. |
| `created_at` | `str` | No |  |
| `disk_usage` | `int` | No |  |
| `email` | `str` | No | The publicly visible email address of the user. |
| `events_url` | `str` | No |  |
| `followers` | `int` | No |  |
| `followers_url` | `str` | No |  |
| `following` | `int` | No |  |
| `following_url` | `str` | No |  |
| `gists_url` | `str` | No |  |
| `gravatar_id` | `str` | No |  |
| `hireable` | `bool` | No | The new hiring availability of the user. |
| `html_url` | `str` | No |  |
| `id` | `int` | No |  |
| `inherited_from` | `list` | No | Team the user has gotten the role through |
| `location` | `str` | No | The new location of the user. |
| `login` | `str` | No |  |
| `name` | `str` | No | The new name of the user. |
| `node_id` | `str` | No |  |
| `organizations_url` | `str` | No |  |
| `owned_private_repos` | `int` | No |  |
| `page_info` | `dict` | No | Information about the current page. |
| `plan` | `dict` | No |  |
| `predicate_type` | `str` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_gists` | `int` | No |  |
| `private_repos` | `int` | Yes |  |
| `public_gists` | `int` | No |  |
| `public_repos` | `int` | No |  |
| `received_events_url` | `str` | No |  |
| `repos_url` | `str` | No |  |
| `site_admin` | `bool` | No |  |
| `space` | `int` | Yes |  |
| `starred_at` | `str` | No |  |
| `starred_url` | `str` | No |  |
| `subject_digests` | `list` | Yes | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `str` | No |  |
| `total_private_repos` | `int` | No |  |
| `twitter_username` | `str` | No | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` | No |  |
| `type` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `url` | `str` | No |  |
| `user_view_type` | `str` | No |  |
| `users` | `list` | Yes | The username for users |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.User().create({
    "branch_id": "example_branch_id",  # str
    "owner": "example_owner",  # str
    "repo": "example_repo",  # str
    "private_repos": 1,  # int
    "space": 1,  # int
    "subject_digests": [],  # list
    "users": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.User().remove({"gpg_key_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.User().update({
    "id": 1,
    "username": "username",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserMarketplacePurchaseEntity

```python
user_marketplace_purchase = client.UserMarketplacePurchase()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `dict` | Yes |  |
| `billing_cycle` | `str` | Yes |  |
| `free_trial_ends_on` | `str` | Yes |  |
| `next_billing_date` | `str` | Yes |  |
| `on_free_trial` | `bool` | Yes |  |
| `plan` | `dict` | Yes | Marketplace Listing Plan |
| `unit_count` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserMarketplacePurchase().list()
for user_marketplace_purchase in results:
    print(user_marketplace_purchase)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserMarketplacePurchaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ViewEntity

```python
view = client.View()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `str` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.View().list({"owner": "example", "repo": "example"})
for view in results:
    print(view)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ViewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookConfigEntity

```python
webhook_config = client.WebhookConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `str` | No | The media type used to serialize the payloads. |
| `insecure_ssl` | `str` | No |  |
| `secret` | `str` | No | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `str` | No | The URL to which the payloads will be delivered. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhookConfig().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.WebhookConfig().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badge_url` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deleted_at` | `str` | No |  |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `name` | `str` | Yes |  |
| `node_id` | `str` | Yes |  |
| `path` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id", "owner": "owner", "repo": "repo"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Workflow().update({
    "id": "workflow_id",
    "owner": "owner",
    "repo": "repo",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowRunEntity

```python
workflow_run = client.WorkflowRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `dict` | Yes | A GitHub user. |
| `artifacts_url` | `str` | Yes | The URL to the artifacts for the workflow run. |
| `cancel_url` | `str` | Yes | The URL to cancel the workflow run. |
| `check_suite_id` | `int` | No | The ID of the associated check suite. |
| `check_suite_node_id` | `str` | No | The node ID of the associated check suite. |
| `check_suite_url` | `str` | Yes | The URL to the associated check suite. |
| `conclusion` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `display_title` | `str` | Yes | The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. |
| `event` | `str` | Yes |  |
| `head_branch` | `str` | Yes |  |
| `head_commit` | `dict` | Yes | A commit. |
| `head_repository` | `dict` | Yes | Minimal Repository |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `str` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `html_url` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the workflow run. |
| `jobs_url` | `str` | Yes | The URL to the jobs for the workflow run. |
| `logs_url` | `str` | Yes | The URL to download the logs for the workflow run. |
| `name` | `str` | No | The name of the workflow run. |
| `node_id` | `str` | Yes |  |
| `path` | `str` | Yes | The full path of the workflow |
| `previous_attempt_url` | `str` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `pull_requests` | `list` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `list` | No |  |
| `repository` | `dict` | Yes | Minimal Repository |
| `rerun_url` | `str` | Yes | The URL to rerun the workflow run. |
| `run_attempt` | `int` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `str` | No | The start time of the latest run. |
| `status` | `str` | Yes |  |
| `triggering_actor` | `dict` | Yes | A GitHub user. |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | The URL to the workflow run. |
| `workflow_id` | `int` | Yes | The ID of the parent workflow. |
| `workflow_url` | `str` | Yes | The URL to the workflow. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WorkflowRun().create({
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkflowRun().load({"id": 1, "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowRunUsageEntity

```python
workflow_run_usage = client.WorkflowRunUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `dict` | Yes |  |
| `UBUNTU` | `dict` | Yes |  |
| `WINDOWS` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkflowRunUsage().load({"owner": "owner", "repo": "repo", "run_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowUsageEntity

```python
workflow_usage = client.WorkflowUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `dict` | No |  |
| `UBUNTU` | `dict` | No |  |
| `WINDOWS` | `dict` | No |  |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WorkflowUsage().load({"id": "workflow_usage_id", "owner": "owner", "repo": "repo"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = GithubSDK({
    "feature": {
        "test": {"active": True},
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

