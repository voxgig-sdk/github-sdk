# Github PHP SDK Reference

Complete API reference for the Github PHP SDK.


## GithubSDK

### Constructor

```php
require_once __DIR__ . '/github_sdk.php';

$client = new GithubSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GithubSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = GithubSDK::test();
```


### Instance Methods

#### `Action($data = null)`

Create a new `ActionEntity` instance. Pass `null` for no initial data.

#### `ActionsArtifactAndLogRetention($data = null)`

Create a new `ActionsArtifactAndLogRetentionEntity` instance. Pass `null` for no initial data.

#### `ActionsCacheList($data = null)`

Create a new `ActionsCacheListEntity` instance. Pass `null` for no initial data.

#### `ActionsCacheUsageByRepository($data = null)`

Create a new `ActionsCacheUsageByRepositoryEntity` instance. Pass `null` for no initial data.

#### `ActionsCacheUsageOrgEnterprise($data = null)`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance. Pass `null` for no initial data.

#### `ActionsForkPrContributorApproval($data = null)`

Create a new `ActionsForkPrContributorApprovalEntity` instance. Pass `null` for no initial data.

#### `ActionsForkPrWorkflowsPrivateRepo($data = null)`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance. Pass `null` for no initial data.

#### `ActionsGetDefaultWorkflowPermission($data = null)`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance. Pass `null` for no initial data.

#### `ActionsHostedRunner($data = null)`

Create a new `ActionsHostedRunnerEntity` instance. Pass `null` for no initial data.

#### `ActionsHostedRunnerLimit($data = null)`

Create a new `ActionsHostedRunnerLimitEntity` instance. Pass `null` for no initial data.

#### `ActionsOrganizationPermission($data = null)`

Create a new `ActionsOrganizationPermissionEntity` instance. Pass `null` for no initial data.

#### `ActionsPublicKey($data = null)`

Create a new `ActionsPublicKeyEntity` instance. Pass `null` for no initial data.

#### `ActionsRepositoryPermission($data = null)`

Create a new `ActionsRepositoryPermissionEntity` instance. Pass `null` for no initial data.

#### `ActionsSecret($data = null)`

Create a new `ActionsSecretEntity` instance. Pass `null` for no initial data.

#### `ActionsVariable($data = null)`

Create a new `ActionsVariableEntity` instance. Pass `null` for no initial data.

#### `ActionsWorkflowAccessToRepository($data = null)`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance. Pass `null` for no initial data.

#### `Activity($data = null)`

Create a new `ActivityEntity` instance. Pass `null` for no initial data.

#### `Add($data = null)`

Create a new `AddEntity` instance. Pass `null` for no initial data.

#### `ApiInsightsRouteStat($data = null)`

Create a new `ApiInsightsRouteStatEntity` instance. Pass `null` for no initial data.

#### `ApiInsightsSubjectStat($data = null)`

Create a new `ApiInsightsSubjectStatEntity` instance. Pass `null` for no initial data.

#### `ApiInsightsSummaryStat($data = null)`

Create a new `ApiInsightsSummaryStatEntity` instance. Pass `null` for no initial data.

#### `ApiInsightsTimeStat($data = null)`

Create a new `ApiInsightsTimeStatEntity` instance. Pass `null` for no initial data.

#### `ApiInsightsUserStat($data = null)`

Create a new `ApiInsightsUserStatEntity` instance. Pass `null` for no initial data.

#### `ApiOverview($data = null)`

Create a new `ApiOverviewEntity` instance. Pass `null` for no initial data.

#### `App($data = null)`

Create a new `AppEntity` instance. Pass `null` for no initial data.

#### `Artifact($data = null)`

Create a new `ArtifactEntity` instance. Pass `null` for no initial data.

#### `Assignee($data = null)`

Create a new `AssigneeEntity` instance. Pass `null` for no initial data.

#### `AuthenticationToken($data = null)`

Create a new `AuthenticationTokenEntity` instance. Pass `null` for no initial data.

#### `Authorization($data = null)`

Create a new `AuthorizationEntity` instance. Pass `null` for no initial data.

#### `Autolink($data = null)`

Create a new `AutolinkEntity` instance. Pass `null` for no initial data.

#### `BaseGist($data = null)`

Create a new `BaseGistEntity` instance. Pass `null` for no initial data.

#### `BillingUsageReport($data = null)`

Create a new `BillingUsageReportEntity` instance. Pass `null` for no initial data.

#### `BillingUsageReportUser($data = null)`

Create a new `BillingUsageReportUserEntity` instance. Pass `null` for no initial data.

#### `Blob($data = null)`

Create a new `BlobEntity` instance. Pass `null` for no initial data.

#### `Block($data = null)`

Create a new `BlockEntity` instance. Pass `null` for no initial data.

#### `Branch($data = null)`

Create a new `BranchEntity` instance. Pass `null` for no initial data.

#### `BranchProtection($data = null)`

Create a new `BranchProtectionEntity` instance. Pass `null` for no initial data.

#### `BranchRestrictionPolicy($data = null)`

Create a new `BranchRestrictionPolicyEntity` instance. Pass `null` for no initial data.

#### `BranchShort($data = null)`

Create a new `BranchShortEntity` instance. Pass `null` for no initial data.

#### `BranchWithProtection($data = null)`

Create a new `BranchWithProtectionEntity` instance. Pass `null` for no initial data.

#### `Campaign($data = null)`

Create a new `CampaignEntity` instance. Pass `null` for no initial data.

#### `Check($data = null)`

Create a new `CheckEntity` instance. Pass `null` for no initial data.

#### `CheckAnnotation($data = null)`

Create a new `CheckAnnotationEntity` instance. Pass `null` for no initial data.

#### `CheckAutomatedSecurityFix($data = null)`

Create a new `CheckAutomatedSecurityFixEntity` instance. Pass `null` for no initial data.

#### `CheckRun($data = null)`

Create a new `CheckRunEntity` instance. Pass `null` for no initial data.

#### `CheckSuite($data = null)`

Create a new `CheckSuiteEntity` instance. Pass `null` for no initial data.

#### `CheckSuitePreference($data = null)`

Create a new `CheckSuitePreferenceEntity` instance. Pass `null` for no initial data.

#### `Classroom($data = null)`

Create a new `ClassroomEntity` instance. Pass `null` for no initial data.

#### `ClassroomAcceptedAssignment($data = null)`

Create a new `ClassroomAcceptedAssignmentEntity` instance. Pass `null` for no initial data.

#### `ClassroomAssignment($data = null)`

Create a new `ClassroomAssignmentEntity` instance. Pass `null` for no initial data.

#### `ClassroomAssignmentGrade($data = null)`

Create a new `ClassroomAssignmentGradeEntity` instance. Pass `null` for no initial data.

#### `Clone($data = null)`

Create a new `CloneEntity` instance. Pass `null` for no initial data.

#### `CodeFrequency($data = null)`

Create a new `CodeFrequencyEntity` instance. Pass `null` for no initial data.

#### `CodeFrequencyStat($data = null)`

Create a new `CodeFrequencyStatEntity` instance. Pass `null` for no initial data.

#### `CodeOfConduct($data = null)`

Create a new `CodeOfConductEntity` instance. Pass `null` for no initial data.

#### `CodeScanning($data = null)`

Create a new `CodeScanningEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAlert($data = null)`

Create a new `CodeScanningAlertEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAlertInstance($data = null)`

Create a new `CodeScanningAlertInstanceEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAlertItem($data = null)`

Create a new `CodeScanningAlertItemEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAnalysi($data = null)`

Create a new `CodeScanningAnalysiEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAnalysisDeletion($data = null)`

Create a new `CodeScanningAnalysisDeletionEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAutofix($data = null)`

Create a new `CodeScanningAutofixEntity` instance. Pass `null` for no initial data.

#### `CodeScanningAutofixCommit($data = null)`

Create a new `CodeScanningAutofixCommitEntity` instance. Pass `null` for no initial data.

#### `CodeScanningCodeqlDatabase($data = null)`

Create a new `CodeScanningCodeqlDatabaseEntity` instance. Pass `null` for no initial data.

#### `CodeScanningDefaultSetup($data = null)`

Create a new `CodeScanningDefaultSetupEntity` instance. Pass `null` for no initial data.

#### `CodeScanningOrganizationAlertItem($data = null)`

Create a new `CodeScanningOrganizationAlertItemEntity` instance. Pass `null` for no initial data.

#### `CodeScanningSarifsStatus($data = null)`

Create a new `CodeScanningSarifsStatusEntity` instance. Pass `null` for no initial data.

#### `CodeScanningVariantAnalysi($data = null)`

Create a new `CodeScanningVariantAnalysiEntity` instance. Pass `null` for no initial data.

#### `CodeScanningVariantAnalysisRepoTask($data = null)`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance. Pass `null` for no initial data.

#### `CodeSecurity($data = null)`

Create a new `CodeSecurityEntity` instance. Pass `null` for no initial data.

#### `CodeSecurityConfiguration($data = null)`

Create a new `CodeSecurityConfigurationEntity` instance. Pass `null` for no initial data.

#### `CodeSecurityConfigurationRepository($data = null)`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance. Pass `null` for no initial data.

#### `CodeSecurityDefaultConfiguration($data = null)`

Create a new `CodeSecurityDefaultConfigurationEntity` instance. Pass `null` for no initial data.

#### `CodeownersError($data = null)`

Create a new `CodeownersErrorEntity` instance. Pass `null` for no initial data.

#### `Codespace($data = null)`

Create a new `CodespaceEntity` instance. Pass `null` for no initial data.

#### `Collaborator($data = null)`

Create a new `CollaboratorEntity` instance. Pass `null` for no initial data.

#### `CombinedBillingUsage($data = null)`

Create a new `CombinedBillingUsageEntity` instance. Pass `null` for no initial data.

#### `CombinedCommitStatus($data = null)`

Create a new `CombinedCommitStatusEntity` instance. Pass `null` for no initial data.

#### `Commit($data = null)`

Create a new `CommitEntity` instance. Pass `null` for no initial data.

#### `CommitActivity($data = null)`

Create a new `CommitActivityEntity` instance. Pass `null` for no initial data.

#### `CommitComment($data = null)`

Create a new `CommitCommentEntity` instance. Pass `null` for no initial data.

#### `CommitComparison($data = null)`

Create a new `CommitComparisonEntity` instance. Pass `null` for no initial data.

#### `CommunityProfile($data = null)`

Create a new `CommunityProfileEntity` instance. Pass `null` for no initial data.

#### `ContentFile($data = null)`

Create a new `ContentFileEntity` instance. Pass `null` for no initial data.

#### `ContentTraffic($data = null)`

Create a new `ContentTrafficEntity` instance. Pass `null` for no initial data.

#### `Contributor($data = null)`

Create a new `ContributorEntity` instance. Pass `null` for no initial data.

#### `Copilot($data = null)`

Create a new `CopilotEntity` instance. Pass `null` for no initial data.

#### `CopilotOrganizationDetail($data = null)`

Create a new `CopilotOrganizationDetailEntity` instance. Pass `null` for no initial data.

#### `CopilotUsageMetricsDay($data = null)`

Create a new `CopilotUsageMetricsDayEntity` instance. Pass `null` for no initial data.

#### `Credential($data = null)`

Create a new `CredentialEntity` instance. Pass `null` for no initial data.

#### `CustomProperty($data = null)`

Create a new `CustomPropertyEntity` instance. Pass `null` for no initial data.

#### `CustomPropertyValue($data = null)`

Create a new `CustomPropertyValueEntity` instance. Pass `null` for no initial data.

#### `Dependabot($data = null)`

Create a new `DependabotEntity` instance. Pass `null` for no initial data.

#### `DependabotAlert($data = null)`

Create a new `DependabotAlertEntity` instance. Pass `null` for no initial data.

#### `DependabotAlertWithRepository($data = null)`

Create a new `DependabotAlertWithRepositoryEntity` instance. Pass `null` for no initial data.

#### `DependabotPublicKey($data = null)`

Create a new `DependabotPublicKeyEntity` instance. Pass `null` for no initial data.

#### `DependabotRepositoryAccessDetail($data = null)`

Create a new `DependabotRepositoryAccessDetailEntity` instance. Pass `null` for no initial data.

#### `DependabotSecret($data = null)`

Create a new `DependabotSecretEntity` instance. Pass `null` for no initial data.

#### `DependencyGraph($data = null)`

Create a new `DependencyGraphEntity` instance. Pass `null` for no initial data.

#### `DependencyGraphDiff($data = null)`

Create a new `DependencyGraphDiffEntity` instance. Pass `null` for no initial data.

#### `DependencyGraphSpdxSbom($data = null)`

Create a new `DependencyGraphSpdxSbomEntity` instance. Pass `null` for no initial data.

#### `DeployKey($data = null)`

Create a new `DeployKeyEntity` instance. Pass `null` for no initial data.

#### `Deployment($data = null)`

Create a new `DeploymentEntity` instance. Pass `null` for no initial data.

#### `DeploymentBranchPolicy($data = null)`

Create a new `DeploymentBranchPolicyEntity` instance. Pass `null` for no initial data.

#### `DeploymentProtectionRule($data = null)`

Create a new `DeploymentProtectionRuleEntity` instance. Pass `null` for no initial data.

#### `DeploymentStatus($data = null)`

Create a new `DeploymentStatusEntity` instance. Pass `null` for no initial data.

#### `DiffEntry($data = null)`

Create a new `DiffEntryEntity` instance. Pass `null` for no initial data.

#### `Email($data = null)`

Create a new `EmailEntity` instance. Pass `null` for no initial data.

#### `Emoji($data = null)`

Create a new `EmojiEntity` instance. Pass `null` for no initial data.

#### `EmptyObject($data = null)`

Create a new `EmptyObjectEntity` instance. Pass `null` for no initial data.

#### `EnterpriseTeam($data = null)`

Create a new `EnterpriseTeamEntity` instance. Pass `null` for no initial data.

#### `EnterpriseTeamMembership($data = null)`

Create a new `EnterpriseTeamMembershipEntity` instance. Pass `null` for no initial data.

#### `Environment($data = null)`

Create a new `EnvironmentEntity` instance. Pass `null` for no initial data.

#### `EnvironmentApproval($data = null)`

Create a new `EnvironmentApprovalEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `Feed($data = null)`

Create a new `FeedEntity` instance. Pass `null` for no initial data.

#### `FileCommit($data = null)`

Create a new `FileCommitEntity` instance. Pass `null` for no initial data.

#### `Follower($data = null)`

Create a new `FollowerEntity` instance. Pass `null` for no initial data.

#### `Following($data = null)`

Create a new `FollowingEntity` instance. Pass `null` for no initial data.

#### `FullRepository($data = null)`

Create a new `FullRepositoryEntity` instance. Pass `null` for no initial data.

#### `Gist($data = null)`

Create a new `GistEntity` instance. Pass `null` for no initial data.

#### `GistComment($data = null)`

Create a new `GistCommentEntity` instance. Pass `null` for no initial data.

#### `GistCommit($data = null)`

Create a new `GistCommitEntity` instance. Pass `null` for no initial data.

#### `GistSimple($data = null)`

Create a new `GistSimpleEntity` instance. Pass `null` for no initial data.

#### `Git($data = null)`

Create a new `GitEntity` instance. Pass `null` for no initial data.

#### `GitCommit($data = null)`

Create a new `GitCommitEntity` instance. Pass `null` for no initial data.

#### `GitRef($data = null)`

Create a new `GitRefEntity` instance. Pass `null` for no initial data.

#### `GitTag($data = null)`

Create a new `GitTagEntity` instance. Pass `null` for no initial data.

#### `GitTree($data = null)`

Create a new `GitTreeEntity` instance. Pass `null` for no initial data.

#### `Gitignore($data = null)`

Create a new `GitignoreEntity` instance. Pass `null` for no initial data.

#### `GitignoreTemplate($data = null)`

Create a new `GitignoreTemplateEntity` instance. Pass `null` for no initial data.

#### `GlobalAdvisory($data = null)`

Create a new `GlobalAdvisoryEntity` instance. Pass `null` for no initial data.

#### `GpgKey($data = null)`

Create a new `GpgKeyEntity` instance. Pass `null` for no initial data.

#### `Hook($data = null)`

Create a new `HookEntity` instance. Pass `null` for no initial data.

#### `HookDelivery($data = null)`

Create a new `HookDeliveryEntity` instance. Pass `null` for no initial data.

#### `HookDeliveryItem($data = null)`

Create a new `HookDeliveryItemEntity` instance. Pass `null` for no initial data.

#### `HostedCompute($data = null)`

Create a new `HostedComputeEntity` instance. Pass `null` for no initial data.

#### `Hovercard($data = null)`

Create a new `HovercardEntity` instance. Pass `null` for no initial data.

#### `Import($data = null)`

Create a new `ImportEntity` instance. Pass `null` for no initial data.

#### `Installation($data = null)`

Create a new `InstallationEntity` instance. Pass `null` for no initial data.

#### `InstallationToken($data = null)`

Create a new `InstallationTokenEntity` instance. Pass `null` for no initial data.

#### `Integration($data = null)`

Create a new `IntegrationEntity` instance. Pass `null` for no initial data.

#### `IntegrationInstallation($data = null)`

Create a new `IntegrationInstallationEntity` instance. Pass `null` for no initial data.

#### `Interaction($data = null)`

Create a new `InteractionEntity` instance. Pass `null` for no initial data.

#### `InteractionLimit($data = null)`

Create a new `InteractionLimitEntity` instance. Pass `null` for no initial data.

#### `Issue($data = null)`

Create a new `IssueEntity` instance. Pass `null` for no initial data.

#### `IssueType($data = null)`

Create a new `IssueTypeEntity` instance. Pass `null` for no initial data.

#### `Job($data = null)`

Create a new `JobEntity` instance. Pass `null` for no initial data.

#### `Key($data = null)`

Create a new `KeyEntity` instance. Pass `null` for no initial data.

#### `Label($data = null)`

Create a new `LabelEntity` instance. Pass `null` for no initial data.

#### `Language($data = null)`

Create a new `LanguageEntity` instance. Pass `null` for no initial data.

#### `License($data = null)`

Create a new `LicenseEntity` instance. Pass `null` for no initial data.

#### `Markdown($data = null)`

Create a new `MarkdownEntity` instance. Pass `null` for no initial data.

#### `MarketplaceListingPlan($data = null)`

Create a new `MarketplaceListingPlanEntity` instance. Pass `null` for no initial data.

#### `MarketplacePurchase($data = null)`

Create a new `MarketplacePurchaseEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `Membership($data = null)`

Create a new `MembershipEntity` instance. Pass `null` for no initial data.

#### `MergedUpstream($data = null)`

Create a new `MergedUpstreamEntity` instance. Pass `null` for no initial data.

#### `Meta($data = null)`

Create a new `MetaEntity` instance. Pass `null` for no initial data.

#### `Metaroot($data = null)`

Create a new `MetarootEntity` instance. Pass `null` for no initial data.

#### `Migration($data = null)`

Create a new `MigrationEntity` instance. Pass `null` for no initial data.

#### `Milestone($data = null)`

Create a new `MilestoneEntity` instance. Pass `null` for no initial data.

#### `MinimalRepository($data = null)`

Create a new `MinimalRepositoryEntity` instance. Pass `null` for no initial data.

#### `NetworkConfiguration($data = null)`

Create a new `NetworkConfigurationEntity` instance. Pass `null` for no initial data.

#### `NetworkSetting($data = null)`

Create a new `NetworkSettingEntity` instance. Pass `null` for no initial data.

#### `OidcCustomSub($data = null)`

Create a new `OidcCustomSubEntity` instance. Pass `null` for no initial data.

#### `OidcCustomSubRepo($data = null)`

Create a new `OidcCustomSubRepoEntity` instance. Pass `null` for no initial data.

#### `Org($data = null)`

Create a new `OrgEntity` instance. Pass `null` for no initial data.

#### `OrgHook($data = null)`

Create a new `OrgHookEntity` instance. Pass `null` for no initial data.

#### `OrgMembership($data = null)`

Create a new `OrgMembershipEntity` instance. Pass `null` for no initial data.

#### `OrgPrivateRegistryConfiguration($data = null)`

Create a new `OrgPrivateRegistryConfigurationEntity` instance. Pass `null` for no initial data.

#### `OrgPrivateRegistryConfigurationWithSelectedRepository($data = null)`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance. Pass `null` for no initial data.

#### `OrgRepoCustomPropertyValue($data = null)`

Create a new `OrgRepoCustomPropertyValueEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `OrganizationActionsSecret($data = null)`

Create a new `OrganizationActionsSecretEntity` instance. Pass `null` for no initial data.

#### `OrganizationActionsVariable($data = null)`

Create a new `OrganizationActionsVariableEntity` instance. Pass `null` for no initial data.

#### `OrganizationDependabotSecret($data = null)`

Create a new `OrganizationDependabotSecretEntity` instance. Pass `null` for no initial data.

#### `OrganizationInvitation($data = null)`

Create a new `OrganizationInvitationEntity` instance. Pass `null` for no initial data.

#### `OrganizationProgrammaticAccessGrant($data = null)`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance. Pass `null` for no initial data.

#### `OrganizationRole($data = null)`

Create a new `OrganizationRoleEntity` instance. Pass `null` for no initial data.

#### `OrganizationSecretScanningAlert($data = null)`

Create a new `OrganizationSecretScanningAlertEntity` instance. Pass `null` for no initial data.

#### `OutsideCollaborator($data = null)`

Create a new `OutsideCollaboratorEntity` instance. Pass `null` for no initial data.

#### `Package($data = null)`

Create a new `PackageEntity` instance. Pass `null` for no initial data.

#### `Page($data = null)`

Create a new `PageEntity` instance. Pass `null` for no initial data.

#### `PageBuild($data = null)`

Create a new `PageBuildEntity` instance. Pass `null` for no initial data.

#### `PageBuildStatus($data = null)`

Create a new `PageBuildStatusEntity` instance. Pass `null` for no initial data.

#### `PageDeployment($data = null)`

Create a new `PageDeploymentEntity` instance. Pass `null` for no initial data.

#### `PagesDeploymentStatus($data = null)`

Create a new `PagesDeploymentStatusEntity` instance. Pass `null` for no initial data.

#### `PagesHealthCheck($data = null)`

Create a new `PagesHealthCheckEntity` instance. Pass `null` for no initial data.

#### `Participation($data = null)`

Create a new `ParticipationEntity` instance. Pass `null` for no initial data.

#### `PendingDeployment($data = null)`

Create a new `PendingDeploymentEntity` instance. Pass `null` for no initial data.

#### `PorterAuthor($data = null)`

Create a new `PorterAuthorEntity` instance. Pass `null` for no initial data.

#### `PorterLargeFile($data = null)`

Create a new `PorterLargeFileEntity` instance. Pass `null` for no initial data.

#### `PrivateRegistry($data = null)`

Create a new `PrivateRegistryEntity` instance. Pass `null` for no initial data.

#### `PrivateUser($data = null)`

Create a new `PrivateUserEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectCollaboratorPermission($data = null)`

Create a new `ProjectCollaboratorPermissionEntity` instance. Pass `null` for no initial data.

#### `ProjectColumn($data = null)`

Create a new `ProjectColumnEntity` instance. Pass `null` for no initial data.

#### `ProjectsClassic($data = null)`

Create a new `ProjectsClassicEntity` instance. Pass `null` for no initial data.

#### `ProjectsV2($data = null)`

Create a new `ProjectsV2Entity` instance. Pass `null` for no initial data.

#### `ProjectsV2Field($data = null)`

Create a new `ProjectsV2FieldEntity` instance. Pass `null` for no initial data.

#### `ProjectsV2ItemSimple($data = null)`

Create a new `ProjectsV2ItemSimpleEntity` instance. Pass `null` for no initial data.

#### `ProjectsV2ItemWithContent($data = null)`

Create a new `ProjectsV2ItemWithContentEntity` instance. Pass `null` for no initial data.

#### `ProtectedBranch($data = null)`

Create a new `ProtectedBranchEntity` instance. Pass `null` for no initial data.

#### `ProtectedBranchAdminEnforced($data = null)`

Create a new `ProtectedBranchAdminEnforcedEntity` instance. Pass `null` for no initial data.

#### `ProtectedBranchPullRequestReview($data = null)`

Create a new `ProtectedBranchPullRequestReviewEntity` instance. Pass `null` for no initial data.

#### `PublicMember($data = null)`

Create a new `PublicMemberEntity` instance. Pass `null` for no initial data.

#### `Pull($data = null)`

Create a new `PullEntity` instance. Pass `null` for no initial data.

#### `PullRequestReview($data = null)`

Create a new `PullRequestReviewEntity` instance. Pass `null` for no initial data.

#### `PullRequestReviewComment($data = null)`

Create a new `PullRequestReviewCommentEntity` instance. Pass `null` for no initial data.

#### `PullRequestSimple($data = null)`

Create a new `PullRequestSimpleEntity` instance. Pass `null` for no initial data.

#### `RateLimit($data = null)`

Create a new `RateLimitEntity` instance. Pass `null` for no initial data.

#### `Reaction($data = null)`

Create a new `ReactionEntity` instance. Pass `null` for no initial data.

#### `Referrer($data = null)`

Create a new `ReferrerEntity` instance. Pass `null` for no initial data.

#### `Release($data = null)`

Create a new `ReleaseEntity` instance. Pass `null` for no initial data.

#### `ReleaseAsset($data = null)`

Create a new `ReleaseAssetEntity` instance. Pass `null` for no initial data.

#### `ReleaseNotesContent($data = null)`

Create a new `ReleaseNotesContentEntity` instance. Pass `null` for no initial data.

#### `Remove($data = null)`

Create a new `RemoveEntity` instance. Pass `null` for no initial data.

#### `Repo($data = null)`

Create a new `RepoEntity` instance. Pass `null` for no initial data.

#### `Repository($data = null)`

Create a new `RepositoryEntity` instance. Pass `null` for no initial data.

#### `RepositoryAdvisory($data = null)`

Create a new `RepositoryAdvisoryEntity` instance. Pass `null` for no initial data.

#### `RepositoryCollaboratorPermission($data = null)`

Create a new `RepositoryCollaboratorPermissionEntity` instance. Pass `null` for no initial data.

#### `RepositoryInvitation($data = null)`

Create a new `RepositoryInvitationEntity` instance. Pass `null` for no initial data.

#### `RepositoryRuleDetailed($data = null)`

Create a new `RepositoryRuleDetailedEntity` instance. Pass `null` for no initial data.

#### `RepositoryRuleset($data = null)`

Create a new `RepositoryRulesetEntity` instance. Pass `null` for no initial data.

#### `RepositorySubscription($data = null)`

Create a new `RepositorySubscriptionEntity` instance. Pass `null` for no initial data.

#### `ReviewComment($data = null)`

Create a new `ReviewCommentEntity` instance. Pass `null` for no initial data.

#### `RuleSuite($data = null)`

Create a new `RuleSuiteEntity` instance. Pass `null` for no initial data.

#### `RulesetVersion($data = null)`

Create a new `RulesetVersionEntity` instance. Pass `null` for no initial data.

#### `RulesetVersionWithState($data = null)`

Create a new `RulesetVersionWithStateEntity` instance. Pass `null` for no initial data.

#### `Runner($data = null)`

Create a new `RunnerEntity` instance. Pass `null` for no initial data.

#### `RunnerApplication($data = null)`

Create a new `RunnerApplicationEntity` instance. Pass `null` for no initial data.

#### `RunnerGroup($data = null)`

Create a new `RunnerGroupEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `SecretScanning($data = null)`

Create a new `SecretScanningEntity` instance. Pass `null` for no initial data.

#### `SecretScanningAlert($data = null)`

Create a new `SecretScanningAlertEntity` instance. Pass `null` for no initial data.

#### `SecretScanningLocation($data = null)`

Create a new `SecretScanningLocationEntity` instance. Pass `null` for no initial data.

#### `SecretScanningPatternConfiguration($data = null)`

Create a new `SecretScanningPatternConfigurationEntity` instance. Pass `null` for no initial data.

#### `SecretScanningPushProtectionBypass($data = null)`

Create a new `SecretScanningPushProtectionBypassEntity` instance. Pass `null` for no initial data.

#### `SecretScanningScanHistory($data = null)`

Create a new `SecretScanningScanHistoryEntity` instance. Pass `null` for no initial data.

#### `SecurityAdvisory($data = null)`

Create a new `SecurityAdvisoryEntity` instance. Pass `null` for no initial data.

#### `SelectedAction($data = null)`

Create a new `SelectedActionEntity` instance. Pass `null` for no initial data.

#### `SelfHostedRunner($data = null)`

Create a new `SelfHostedRunnerEntity` instance. Pass `null` for no initial data.

#### `ShortBlob($data = null)`

Create a new `ShortBlobEntity` instance. Pass `null` for no initial data.

#### `ShortBranch($data = null)`

Create a new `ShortBranchEntity` instance. Pass `null` for no initial data.

#### `SimpleClassroom($data = null)`

Create a new `SimpleClassroomEntity` instance. Pass `null` for no initial data.

#### `SimpleClassroomAssignment($data = null)`

Create a new `SimpleClassroomAssignmentEntity` instance. Pass `null` for no initial data.

#### `SocialAccount($data = null)`

Create a new `SocialAccountEntity` instance. Pass `null` for no initial data.

#### `SshSigningKey($data = null)`

Create a new `SshSigningKeyEntity` instance. Pass `null` for no initial data.

#### `Status($data = null)`

Create a new `StatusEntity` instance. Pass `null` for no initial data.

#### `StatusCheckPolicy($data = null)`

Create a new `StatusCheckPolicyEntity` instance. Pass `null` for no initial data.

#### `Subscriber($data = null)`

Create a new `SubscriberEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `TagProtection($data = null)`

Create a new `TagProtectionEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `TeamSimple($data = null)`

Create a new `TeamSimpleEntity` instance. Pass `null` for no initial data.

#### `Thread($data = null)`

Create a new `ThreadEntity` instance. Pass `null` for no initial data.

#### `ThreadSubscription($data = null)`

Create a new `ThreadSubscriptionEntity` instance. Pass `null` for no initial data.

#### `Topic($data = null)`

Create a new `TopicEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserMarketplacePurchase($data = null)`

Create a new `UserMarketplacePurchaseEntity` instance. Pass `null` for no initial data.

#### `View($data = null)`

Create a new `ViewEntity` instance. Pass `null` for no initial data.

#### `WebhookConfig($data = null)`

Create a new `WebhookConfigEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `WorkflowRun($data = null)`

Create a new `WorkflowRunEntity` instance. Pass `null` for no initial data.

#### `WorkflowRunUsage($data = null)`

Create a new `WorkflowRunUsageEntity` instance. Pass `null` for no initial data.

#### `WorkflowUsage($data = null)`

Create a new `WorkflowUsageEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): GithubUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActionEntity

```php
$action = $client->Action();
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
| `actor` | `array` | Yes | A GitHub user. |
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
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `code_search_index_status` | `array` | No | The status of the code search index for this repository |
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
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
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
| `head_commit` | `array` | Yes | A commit. |
| `head_repository` | `array` | Yes | Minimal Repository |
| `head_repository_id` | `int` | No |  |
| `head_sha` | `string` | Yes | The SHA of the head commit that points to the version of the workflow being run. |
| `homepage` | `string` | No |  |
| `hooks_url` | `string` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the workflow run. |
| `image_details` | `array` | Yes | Provides details of a hosted runner image |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `inputs` | `array` | No | Input keys and values configured in the workflow file. |
| `is_template` | `bool` | No | Whether this repository acts as a template that can be used to generate new repositories. |
| `issue_comment_url` | `string` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issues_url` | `string` | Yes |  |
| `jobs_url` | `string` | Yes | The URL to the jobs for the workflow run. |
| `keys_url` | `string` | Yes |  |
| `labels` | `array` | Yes | The names of the custom labels to add to the runner. |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `license` | `array` | No | License Simple |
| `logs_url` | `string` | Yes | The URL to download the logs for the workflow run. |
| `machine_size_details` | `array` | Yes | Provides details of a particular machine spec. |
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
| `owner` | `array` | Yes | A GitHub user. |
| `path` | `string` | Yes | The full path of the workflow |
| `patterns_allowed` | `array` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `permissions` | `array` | No |  |
| `platform` | `string` | Yes | The operating system of the image. |
| `platforms` | `array` | Yes |  |
| `previous_attempt_url` | `string` | No | The URL to the previous attempted run of this workflow, if one exists. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `array` | No | The public IP ranges when public IP is enabled for the hosted runners. |
| `pull_requests` | `array` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `ref` | `string` | Yes | The git reference for the workflow. |
| `referenced_workflows` | `array` | No |  |
| `releases_url` | `string` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |
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
| `runners` | `array` | Yes | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `security_and_analysis` | `array` | No |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `array` | Yes | The IDs of the repositories that can access the organization variable. |
| `selected_workflows` | `array` | No | List of workflows the runner group should be allowed to run. |
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
| `steps` | `array` | No | Steps in this job. |
| `storage_gb` | `int` | Yes | The available SSD storage for the machine spec. |
| `subscribers_count` | `int` | No |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `svn_url` | `string` | No |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `array` | No |  |
| `total` | `int` | No | Total minutes used on all runner machines. |
| `total_count` | `int` | Yes |  |
| `trees_url` | `string` | Yes |  |
| `triggering_actor` | `array` | Yes | A GitHub user. |
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
| `workflow_run` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Action()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Action()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->load(["archive_format" => "archive_format", "artifact_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->remove(["hosted_runner_id" => 1, "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Action()->update([
  "org_id" => "org_id",
  "repository_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionEntity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsArtifactAndLogRetentionEntity

```php
$actions_artifact_and_log_retention = $client->ActionsArtifactAndLogRetention();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `int` | Yes | The number of days artifacts and logs are retained |
| `maximum_allowed_days` | `int` | Yes | The maximum number of days that can be configured |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsArtifactAndLogRetention()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsArtifactAndLogRetentionEntity`

Create a new `ActionsArtifactAndLogRetentionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsCacheListEntity

```php
$actions_cache_list = $client->ActionsCacheList();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActionsCacheList()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsCacheList()->remove(["owner" => "owner", "repo" => "repo", "key" => "key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsCacheListEntity`

Create a new `ActionsCacheListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsCacheUsageByRepositoryEntity

```php
$actions_cache_usage_by_repository = $client->ActionsCacheUsageByRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_caches_count` | `int` | Yes | The number of active caches in the repository. |
| `active_caches_size_in_bytes` | `int` | Yes | The sum of the size in bytes of all the active cache items in the repository. |
| `full_name` | `string` | Yes | The repository owner and name for the cache usage being shown. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsCacheUsageByRepository()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsCacheUsageByRepositoryEntity`

Create a new `ActionsCacheUsageByRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsCacheUsageOrgEnterpriseEntity

```php
$actions_cache_usage_org_enterprise = $client->ActionsCacheUsageOrgEnterprise();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_active_caches_count` | `int` | Yes | The count of active caches across all repositories of an enterprise or an organization. |
| `total_active_caches_size_in_bytes` | `int` | Yes | The total size in bytes of all active cache items across all repositories of an enterprise or an organization. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsCacheUsageOrgEnterprise()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsCacheUsageOrgEnterpriseEntity`

Create a new `ActionsCacheUsageOrgEnterpriseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsForkPrContributorApprovalEntity

```php
$actions_fork_pr_contributor_approval = $client->ActionsForkPrContributorApproval();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approval_policy` | `string` | Yes | The policy that controls when fork PR workflows require approval from a maintainer. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsForkPrContributorApproval()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsForkPrContributorApprovalEntity`

Create a new `ActionsForkPrContributorApprovalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsForkPrWorkflowsPrivateRepoEntity

```php
$actions_fork_pr_workflows_private_repo = $client->ActionsForkPrWorkflowsPrivateRepo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `require_approval_for_fork_pr_workflows` | `bool` | Yes | Whether workflows triggered by pull requests from forks require approval from a repository administrator to run. |
| `run_workflows_from_fork_pull_requests` | `bool` | Yes | Whether workflows triggered by pull requests from forks are allowed to run on private repositories. |
| `send_secrets_and_variables` | `bool` | Yes | Whether to make secrets and variables available to workflows triggered by pull requests from forks. |
| `send_write_tokens_to_workflows` | `bool` | Yes | Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsForkPrWorkflowsPrivateRepo()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsForkPrWorkflowsPrivateRepoEntity`

Create a new `ActionsForkPrWorkflowsPrivateRepoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsGetDefaultWorkflowPermissionEntity

```php
$actions_get_default_workflow_permission = $client->ActionsGetDefaultWorkflowPermission();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `can_approve_pull_request_reviews` | `bool` | Yes | Whether GitHub Actions can approve pull requests. |
| `default_workflow_permissions` | `string` | Yes | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsGetDefaultWorkflowPermission()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsGetDefaultWorkflowPermissionEntity`

Create a new `ActionsGetDefaultWorkflowPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsHostedRunnerEntity

```php
$actions_hosted_runner = $client->ActionsHostedRunner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enable_static_ip` | `bool` | No | Whether this runner should be created with a static public IP. |
| `id` | `int` | Yes | The unique identifier of the hosted runner. |
| `image` | `array` | Yes | The image of runner. |
| `image_details` | `array` | Yes | Provides details of a hosted runner image |
| `last_active_on` | `string` | No | The time at which the runner was last used, in ISO 8601 format. |
| `machine_size_details` | `array` | Yes | Provides details of a particular machine spec. |
| `maximum_runners` | `int` | No | The maximum amount of hosted runners. |
| `name` | `string` | Yes | The name of the hosted runner. |
| `platform` | `string` | Yes | The operating system of the image. |
| `public_ip_enabled` | `bool` | Yes | Whether public IP is enabled for the hosted runners. |
| `public_ips` | `array` | No | The public IP ranges when public IP is enabled for the hosted runners. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ActionsHostedRunner()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsHostedRunner()->load(["id" => 1, "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ActionsHostedRunner()->update([
  "id" => 1,
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsHostedRunnerEntity`

Create a new `ActionsHostedRunnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsHostedRunnerLimitEntity

```php
$actions_hosted_runner_limit = $client->ActionsHostedRunnerLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_usage` | `int` | Yes | The current number of static public IP addresses in use by Hosted Runners. |
| `maximum` | `int` | Yes | The maximum number of static public IP addresses that can be used for Hosted Runners. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsHostedRunnerLimit()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsHostedRunnerLimitEntity`

Create a new `ActionsHostedRunnerLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsOrganizationPermissionEntity

```php
$actions_organization_permission = $client->ActionsOrganizationPermission();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsOrganizationPermission()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsOrganizationPermissionEntity`

Create a new `ActionsOrganizationPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsPublicKeyEntity

```php
$actions_public_key = $client->ActionsPublicKey();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsPublicKey()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsPublicKeyEntity`

Create a new `ActionsPublicKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsRepositoryPermissionEntity

```php
$actions_repository_permission = $client->ActionsRepositoryPermission();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_actions` | `string` | No | The permissions policy that controls the actions and reusable workflows that are allowed to run. |
| `enabled` | `bool` | Yes | Whether GitHub Actions is enabled on the repository. |
| `selected_actions_url` | `string` | No | The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`. |
| `sha_pinning_required` | `bool` | No | Whether actions must be pinned to a full-length commit SHA. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsRepositoryPermission()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsRepositoryPermissionEntity`

Create a new `ActionsRepositoryPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsSecretEntity

```php
$actions_secret = $client->ActionsSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsSecret()->load(["id" => "actions_secret_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsSecretEntity`

Create a new `ActionsSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsVariableEntity

```php
$actions_variable = $client->ActionsVariable();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsVariable()->load(["id" => "actions_variable_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsVariableEntity`

Create a new `ActionsVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsWorkflowAccessToRepositoryEntity

```php
$actions_workflow_access_to_repository = $client->ActionsWorkflowAccessToRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | Yes | Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsWorkflowAccessToRepository()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsWorkflowAccessToRepositoryEntity`

Create a new `ActionsWorkflowAccessToRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActivityEntity

```php
$activity = $client->Activity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_type` | `string` | Yes | The type of the activity that was performed. |
| `actor` | `array` | Yes | A GitHub user. |
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
| `language` | `array` | No |  |
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
| `owner` | `array` | No |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Activity()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Activity()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Activity()->remove(["thread_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Activity()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActivityEntity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AddEntity

```php
$add = $client->Add();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `array` | Yes | The GitHub user handles to add to the team. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Add()->create([
  "enterprise" => null, // string
  "team_id" => null, // string
  "usernames" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AddEntity`

Create a new `AddEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiInsightsRouteStatEntity

```php
$api_insights_route_stat = $client->ApiInsightsRouteStat();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiInsightsRouteStat()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiInsightsRouteStatEntity`

Create a new `ApiInsightsRouteStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiInsightsSubjectStatEntity

```php
$api_insights_subject_stat = $client->ApiInsightsSubjectStat();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiInsightsSubjectStat()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiInsightsSubjectStatEntity`

Create a new `ApiInsightsSubjectStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiInsightsSummaryStatEntity

```php
$api_insights_summary_stat = $client->ApiInsightsSummaryStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `rate_limited_request_count` | `int` | No | The total number of requests that were rate limited within the queried time period |
| `total_request_count` | `int` | No | The total number of requests within the queried time period |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiInsightsSummaryStat()->load(["min_timestamp" => "min_timestamp"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiInsightsSummaryStatEntity`

Create a new `ApiInsightsSummaryStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiInsightsTimeStatEntity

```php
$api_insights_time_stat = $client->ApiInsightsTimeStat();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate_limited_request_count` | `int` | No |  |
| `timestamp` | `string` | No |  |
| `total_request_count` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiInsightsTimeStat()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiInsightsTimeStat()->load(["org_id" => "org_id", "user_id" => "user_id", "min_timestamp" => "min_timestamp", "timestamp_increment" => "timestamp_increment"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiInsightsTimeStatEntity`

Create a new `ApiInsightsTimeStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiInsightsUserStatEntity

```php
$api_insights_user_stat = $client->ApiInsightsUserStat();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiInsightsUserStat()->load(["id" => "api_insights_user_stat_id", "org_id" => "org_id", "min_timestamp" => "min_timestamp"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiInsightsUserStatEntity`

Create a new `ApiInsightsUserStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiOverviewEntity

```php
$api_overview = $client->ApiOverview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | No |  |
| `actions_macos` | `array` | No |  |
| `api` | `array` | No |  |
| `codespaces` | `array` | No |  |
| `copilot` | `array` | No |  |
| `dependabot` | `array` | No |  |
| `domains` | `array` | No |  |
| `git` | `array` | No |  |
| `github_enterprise_importer` | `array` | No |  |
| `hooks` | `array` | No |  |
| `importer` | `array` | No |  |
| `packages` | `array` | No |  |
| `pages` | `array` | No |  |
| `ssh_key_fingerprints` | `array` | No |  |
| `ssh_keys` | `array` | No |  |
| `verifiable_password_authentication` | `bool` | Yes |  |
| `web` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiOverview()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiOverviewEntity`

Create a new `ApiOverviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AppEntity

```php
$app = $client->App();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `mixed` | Yes |  |
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
| `code_search_index_status` | `array` | No | The status of the code search index for this repository |
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
| `events` | `array` | No |  |
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
| `license` | `array` | Yes | License Simple |
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
| `owner` | `array` | No | A GitHub user. |
| `pem` | `string` | No |  |
| `permissions` | `array` | No | The permissions granted to the user access token. |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `array` | No |  |
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
| `suspended_by` | `array` | Yes | A GitHub user. |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->App()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->App()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->App()->remove(["installation_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->App()->update([
  "installation_id" => 1,
  "repository_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AppEntity`

Create a new `AppEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ArtifactEntity

```php
$artifact = $client->Artifact();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Artifact()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArtifactEntity`

Create a new `ArtifactEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssigneeEntity

```php
$assignee = $client->Assignee();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Assignee()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssigneeEntity`

Create a new `AssigneeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthenticationTokenEntity

```php
$authentication_token = $client->AuthenticationToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `token` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AuthenticationToken()->create([
  "org_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthenticationTokenEntity`

Create a new `AuthenticationTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthorizationEntity

```php
$authorization = $client->Authorization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes | The access_token of the OAuth or GitHub application. |
| `app` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `fingerprint` | `string` | Yes |  |
| `hashed_token` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `installation` | `array` | Yes |  |
| `note` | `string` | Yes |  |
| `note_url` | `string` | Yes |  |
| `permissions` | `array` | No | The permissions granted to the user access token. |
| `repositories` | `array` | No | The list of repository names to scope the user access token to. |
| `repository_ids` | `array` | No | The list of repository IDs to scope the user access token to. |
| `scopes` | `array` | Yes | A list of scopes that this authorization is in. |
| `target` | `string` | No | The name of the user or organization to scope the user access token to. |
| `target_id` | `int` | No | The ID of the user or organization to scope the user access token to. |
| `token` | `string` | Yes |  |
| `token_last_eight` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Authorization()->create([
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Authorization()->update([
  "application_id" => "application_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthorizationEntity`

Create a new `AuthorizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutolinkEntity

```php
$autolink = $client->Autolink();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Autolink()->create([
  "owner" => null, // string
  "repo" => null, // string
  "id" => null, // int
  "is_alphanumeric" => null, // bool
  "key_prefix" => null, // string
  "url_template" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Autolink()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Autolink()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutolinkEntity`

Create a new `AutolinkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BaseGistEntity

```php
$base_gist = $client->BaseGist();
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
| `files` | `array` | No |  |
| `forks` | `array` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `array` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `array` | No | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BaseGist()->create([
  "gist_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BaseGist()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BaseGistEntity`

Create a new `BaseGistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingUsageReportEntity

```php
$billing_usage_report = $client->BillingUsageReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `float` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float` | Yes | Net amount of the usage line item. |
| `organizationName` | `string` | Yes | Name of the organization. |
| `pricePerUnit` | `float` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillingUsageReport()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingUsageReportEntity`

Create a new `BillingUsageReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingUsageReportUserEntity

```php
$billing_usage_report_user = $client->BillingUsageReportUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Date of the usage line item. |
| `discountAmount` | `float` | Yes | Discount amount of the usage line item. |
| `grossAmount` | `float` | Yes | Gross amount of the usage line item. |
| `netAmount` | `float` | Yes | Net amount of the usage line item. |
| `pricePerUnit` | `float` | Yes | Price per unit of the usage line item. |
| `product` | `string` | Yes | Product name. |
| `quantity` | `int` | Yes | Quantity of the usage line item. |
| `repositoryName` | `string` | No | Name of the repository. |
| `sku` | `string` | Yes | SKU name. |
| `unitType` | `string` | Yes | Unit type of the usage line item. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillingUsageReportUser()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingUsageReportUserEntity`

Create a new `BillingUsageReportUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BlobEntity

```php
$blob = $client->Blob();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Blob()->load(["id" => "blob_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BlobEntity`

Create a new `BlobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BlockEntity

```php
$block = $client->Block();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Block()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BlockEntity`

Create a new `BlockEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchEntity

```php
$branch = $client->Branch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | Yes | Commit |
| `id` | `string` | No |  |
| `links` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `protected` | `bool` | Yes |  |
| `protection` | `array` | Yes | Branch Protection |
| `protection_url` | `string` | Yes |  |
| `required_approving_review_count` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Branch()->load(["id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchEntity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchProtectionEntity

```php
$branch_protection = $client->BranchProtection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `array` | No |  |
| `allow_force_pushes` | `array` | No |  |
| `allow_fork_syncing` | `array` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `array` | No |  |
| `enabled` | `bool` | No |  |
| `enforce_admins` | `array` | Yes | Protected Branch Admin Enforced |
| `id` | `string` | No |  |
| `lock_branch` | `array` | No | Whether to set the branch as read-only. |
| `name` | `string` | No |  |
| `protection_url` | `string` | No |  |
| `required_conversation_resolution` | `array` | No |  |
| `required_linear_history` | `array` | No |  |
| `required_pull_request_reviews` | `array` | Yes | Protected Branch Pull Request Review |
| `required_signatures` | `array` | Yes |  |
| `required_status_checks` | `array` | Yes | Protected Branch Required Status Check |
| `restrictions` | `array` | Yes | Branch Restriction Policy |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BranchProtection()->load(["id" => "branch_protection_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchProtectionEntity`

Create a new `BranchProtectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchRestrictionPolicyEntity

```php
$branch_restriction_policy = $client->BranchRestrictionPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `array` | Yes |  |
| `apps_url` | `string` | Yes |  |
| `teams` | `array` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `users` | `array` | Yes |  |
| `users_url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BranchRestrictionPolicy()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchRestrictionPolicyEntity`

Create a new `BranchRestrictionPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchShortEntity

```php
$branch_short = $client->BranchShort();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BranchShort()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchShortEntity`

Create a new `BranchShortEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchWithProtectionEntity

```php
$branch_with_protection = $client->BranchWithProtection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `new_name` | `string` | Yes | The new name of the branch. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BranchWithProtection()->create([
  "id" => null, // string
  "owner" => null, // string
  "repo" => null, // string
  "new_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchWithProtectionEntity`

Create a new `BranchWithProtectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CampaignEntity

```php
$campaign = $client->Campaign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_stats` | `array` | Yes |  |
| `closed_at` | `string` | No | The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `code_scanning_alerts` | `array` | Yes | The code scanning alerts to include in this campaign |
| `contact_link` | `string` | Yes | The contact link of the campaign. |
| `created_at` | `string` | Yes | The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `description` | `string` | Yes | The campaign description |
| `ends_at` | `string` | Yes | The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `generate_issues` | `bool` | No | If true, will automatically generate issues for the campaign. |
| `id` | `string` | No |  |
| `managers` | `array` | Yes | The campaign managers |
| `name` | `string` | No | The campaign name |
| `number` | `int` | Yes | The number of the newly created campaign |
| `published_at` | `string` | No | The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `state` | `string` | Yes | Indicates whether a campaign is open or closed |
| `team_managers` | `array` | No | The campaign team managers |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Campaign()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Campaign()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Campaign()->load(["id" => 1, "org_id" => "org_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Campaign()->remove(["id" => 1, "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Campaign()->update([
  "id" => 1,
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CampaignEntity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckEntity

```php
$check = $client->Check();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `check_suite` | `array` | Yes |  |
| `completed_at` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deployment` | `array` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes |  |
| `external_id` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `array` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `latest_check_runs_count` | `int` | Yes |  |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `array` | Yes |  |
| `pull_requests` | `array` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
| `repository` | `array` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `started_at` | `string` | Yes |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Check()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckEntity`

Create a new `CheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckAnnotationEntity

```php
$check_annotation = $client->CheckAnnotation();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CheckAnnotation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckAnnotationEntity`

Create a new `CheckAnnotationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckAutomatedSecurityFixEntity

```php
$check_automated_security_fix = $client->CheckAutomatedSecurityFix();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether Dependabot security updates are enabled for the repository. |
| `paused` | `bool` | Yes | Whether Dependabot security updates are paused for the repository. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CheckAutomatedSecurityFix()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckAutomatedSecurityFixEntity`

Create a new `CheckAutomatedSecurityFixEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckRunEntity

```php
$check_run = $client->CheckRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | No | Displays a button on GitHub that can be clicked to alert your app to do additional tasks. |
| `app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `check_suite` | `array` | Yes |  |
| `completed_at` | `string` | Yes | The time the check completed. |
| `conclusion` | `string` | Yes | **Required if you provide `completed_at` or a `status` of `completed`**. |
| `deployment` | `array` | Yes | A deployment created as the result of an Actions check run from a workflow that references an environment |
| `details_url` | `string` | Yes | The URL of the integrator's site that has the full details of the check. |
| `external_id` | `string` | Yes | A reference for the run on the integrator's system. |
| `head_sha` | `string` | Yes | The SHA of the commit that is being checked. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the check. |
| `name` | `string` | Yes | The name of the check. |
| `node_id` | `string` | Yes |  |
| `output` | `array` | Yes | Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. |
| `pull_requests` | `array` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the check. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CheckRun()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CheckRun()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CheckRun()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckRunEntity`

Create a new `CheckRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckSuiteEntity

```php
$check_suite = $client->CheckSuite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `after` | `string` | Yes |  |
| `app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `before` | `string` | Yes |  |
| `check_runs_url` | `string` | Yes |  |
| `conclusion` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `head_branch` | `string` | Yes |  |
| `head_commit` | `array` | Yes | A commit. |
| `head_sha` | `string` | Yes | The SHA of the head commit that is being checked. |
| `id` | `int` | Yes |  |
| `latest_check_runs_count` | `int` | Yes |  |
| `node_id` | `string` | Yes |  |
| `pull_requests` | `array` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |
| `rerequestable` | `bool` | No |  |
| `runs_rerequestable` | `bool` | No |  |
| `status` | `string` | Yes | The phase of the lifecycle that the check suite is currently in. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CheckSuite()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CheckSuite()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckSuiteEntity`

Create a new `CheckSuiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckSuitePreferenceEntity

```php
$check_suite_preference = $client->CheckSuitePreference();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_trigger_checks` | `array` | No | Enables or disables automatic creation of CheckSuite events upon pushes to the repository. |
| `preferences` | `array` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CheckSuitePreference()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckSuitePreferenceEntity`

Create a new `CheckSuitePreferenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClassroomEntity

```php
$classroom = $client->Classroom();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Classroom()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Classroom()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClassroomEntity`

Create a new `ClassroomEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClassroomAcceptedAssignmentEntity

```php
$classroom_accepted_assignment = $client->ClassroomAcceptedAssignment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `array` | Yes | A GitHub Classroom assignment |
| `commit_count` | `int` | Yes | Count of student commits. |
| `grade` | `string` | Yes | Most recent grade. |
| `id` | `int` | Yes | Unique identifier of the repository. |
| `passing` | `bool` | Yes | Whether a submission passed. |
| `repository` | `array` | Yes | A GitHub repository view for Classroom |
| `students` | `array` | Yes |  |
| `submitted` | `bool` | Yes | Whether an accepted assignment has been submitted. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ClassroomAcceptedAssignment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClassroomAcceptedAssignmentEntity`

Create a new `ClassroomAcceptedAssignmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClassroomAssignmentEntity

```php
$classroom_assignment = $client->ClassroomAssignment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `array` | Yes | A GitHub Classroom classroom |
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
| `starter_code_repository` | `array` | Yes | A GitHub repository view for Classroom |
| `students_are_repo_admins` | `bool` | Yes | Whether students are admins on created repository when a student accepts the assignment. |
| `submitted` | `int` | Yes | The number of students that have submitted the assignment. |
| `title` | `string` | Yes | Assignment title. |
| `type` | `string` | Yes | Whether it's a group assignment or individual assignment. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ClassroomAssignment()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClassroomAssignmentEntity`

Create a new `ClassroomAssignmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClassroomAssignmentGradeEntity

```php
$classroom_assignment_grade = $client->ClassroomAssignmentGrade();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ClassroomAssignmentGrade()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClassroomAssignmentGradeEntity`

Create a new `ClassroomAssignmentGradeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CloneEntity

```php
$clone = $client->Clone();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Clone()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloneEntity`

Create a new `CloneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeFrequencyEntity

```php
$code_frequency = $client->CodeFrequency();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeFrequency()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeFrequencyEntity`

Create a new `CodeFrequencyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeFrequencyStatEntity

```php
$code_frequency_stat = $client->CodeFrequencyStat();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeFrequencyStat()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeFrequencyStatEntity`

Create a new `CodeFrequencyStatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeOfConductEntity

```php
$code_of_conduct = $client->CodeOfConduct();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeOfConduct()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeOfConduct()->load(["key" => "key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeOfConductEntity`

Create a new `CodeOfConductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningEntity

```php
$code_scanning = $client->CodeScanning();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CodeScanning()->create([
  "owner" => null, // string
  "repo" => null, // string
  "commit_sha" => null, // string
  "ref" => null, // string
  "sarif" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanning()->remove(["language" => "language", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningEntity`

Create a new `CodeScanningEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAlertEntity

```php
$code_scanning_alert = $client->CodeScanningAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_request` | `bool` | No | If `true`, attempt to create an alert dismissal request. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `array` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `array` | Yes |  |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CodeScanningAlert()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAlertEntity`

Create a new `CodeScanningAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAlertInstanceEntity

```php
$code_scanning_alert_instance = $client->CodeScanningAlertInstance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analysis_key` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `category` | `string` | No | Identifies the configuration under which the analysis was executed. |
| `classifications` | `array` | No | Classifications that have been applied to the file that triggered the alert. |
| `commit_sha` | `string` | No |  |
| `environment` | `string` | No | Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. |
| `html_url` | `string` | No |  |
| `location` | `array` | No | Describe a region within a file for the alert. |
| `message` | `array` | No |  |
| `ref` | `string` | No | The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`. |
| `state` | `string` | No | State of a code scanning alert. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningAlertInstance()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAlertInstanceEntity`

Create a new `CodeScanningAlertInstanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAlertItemEntity

```php
$code_scanning_alert_item = $client->CodeScanningAlertItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `rule` | `array` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `array` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningAlertItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAlertItemEntity`

Create a new `CodeScanningAlertItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAnalysiEntity

```php
$code_scanning_analysi = $client->CodeScanningAnalysi();
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
| `tool` | `array` | Yes |  |
| `url` | `string` | Yes | The REST API URL of the analysis resource. |
| `version` | `string` | No | The version of the tool used to generate the code scanning analysis. |
| `warning` | `string` | Yes | Warning generated when processing the analysis |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningAnalysi()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningAnalysi()->load(["analysis_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAnalysiEntity`

Create a new `CodeScanningAnalysiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAnalysisDeletionEntity

```php
$code_scanning_analysis_deletion = $client->CodeScanningAnalysisDeletion();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningAnalysisDeletion()->remove(["analysis_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAnalysisDeletionEntity`

Create a new `CodeScanningAnalysisDeletionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAutofixEntity

```php
$code_scanning_autofix = $client->CodeScanningAutofix();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | The description of an autofix. |
| `started_at` | `string` | Yes | The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `status` | `string` | Yes | The status of an autofix. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CodeScanningAutofix()->create([
  "alert_number" => null, // int
  "owner" => null, // string
  "repo" => null, // string
  "description" => null, // string
  "started_at" => null, // string
  "status" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningAutofix()->load(["alert_number" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAutofixEntity`

Create a new `CodeScanningAutofixEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningAutofixCommitEntity

```php
$code_scanning_autofix_commit = $client->CodeScanningAutofixCommit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No | Commit message to be used. |
| `target_ref` | `string` | No | The Git reference of target branch for the commit. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CodeScanningAutofixCommit()->create([
  "alert_id" => null, // int
  "owner" => null, // string
  "repo" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningAutofixCommitEntity`

Create a new `CodeScanningAutofixCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningCodeqlDatabaseEntity

```php
$code_scanning_codeql_database = $client->CodeScanningCodeqlDatabase();
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
| `uploader` | `array` | Yes | A GitHub user. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningCodeqlDatabase()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningCodeqlDatabase()->load(["language" => "language", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningCodeqlDatabaseEntity`

Create a new `CodeScanningCodeqlDatabaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningDefaultSetupEntity

```php
$code_scanning_default_setup = $client->CodeScanningDefaultSetup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `languages` | `array` | No | Languages to be analyzed. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `schedule` | `string` | No | The frequency of the periodic analysis. |
| `state` | `string` | No | Code scanning default setup has been configured or not. |
| `threat_model` | `string` | No | Threat model to be used for code scanning analysis. |
| `updated_at` | `string` | No | Timestamp of latest configuration update. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningDefaultSetup()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningDefaultSetupEntity`

Create a new `CodeScanningDefaultSetupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningOrganizationAlertItemEntity

```php
$code_scanning_organization_alert_item = $client->CodeScanningOrganizationAlertItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissal_approved_by` | `array` | Yes | A GitHub user. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | No | The dismissal comment associated with the dismissal of the alert. |
| `dismissed_reason` | `string` | Yes | **Required when the state is dismissed.** The reason for dismissing or closing the alert. |
| `fixed_at` | `string` | No | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `instances_url` | `string` | Yes | The REST API URL for fetching the list of instances for an alert. |
| `most_recent_instance` | `array` | Yes |  |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `array` | Yes | A GitHub repository. |
| `rule` | `array` | Yes |  |
| `state` | `string` | Yes | State of a code scanning alert. |
| `tool` | `array` | Yes |  |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeScanningOrganizationAlertItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningOrganizationAlertItemEntity`

Create a new `CodeScanningOrganizationAlertItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningSarifsStatusEntity

```php
$code_scanning_sarifs_status = $client->CodeScanningSarifsStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analyses_url` | `string` | No | The REST API URL for getting the analyses associated with the upload. |
| `errors` | `array` | No | Any errors that ocurred during processing of the delivery. |
| `processing_status` | `string` | No | `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningSarifsStatus()->load(["owner" => "owner", "repo" => "repo", "sarif_id" => "sarif_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningSarifsStatusEntity`

Create a new `CodeScanningSarifsStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningVariantAnalysiEntity

```php
$code_scanning_variant_analysi = $client->CodeScanningVariantAnalysi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions_workflow_run_id` | `int` | No | The GitHub Actions workflow run used to execute this variant analysis. |
| `actor` | `array` | Yes | A GitHub user. |
| `completed_at` | `string` | No | The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `controller_repo` | `array` | Yes | A GitHub repository. |
| `created_at` | `string` | No | The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `failure_reason` | `string` | No | The reason for a failure of the variant analysis. |
| `id` | `int` | Yes | The ID of the variant analysis. |
| `language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_language` | `string` | Yes | The language targeted by the CodeQL query |
| `query_pack` | `string` | Yes | A Base64-encoded tarball containing a CodeQL query and all its dependencies |
| `query_pack_url` | `string` | Yes | The download url for the query pack. |
| `repositories` | `array` | No | List of repository names (in the form `owner/repo-name`) to run the query against. |
| `repository_lists` | `array` | No | List of repository lists to run the query against. |
| `repository_owners` | `array` | No | List of organization or user names whose repositories the query should be run against. |
| `scanned_repositories` | `array` | No |  |
| `skipped_repositories` | `array` | Yes | Information about repositories that were skipped from processing. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | No | The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CodeScanningVariantAnalysi()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningVariantAnalysi()->load(["codeql_variant_analysis_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningVariantAnalysiEntity`

Create a new `CodeScanningVariantAnalysiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeScanningVariantAnalysisRepoTaskEntity

```php
$code_scanning_variant_analysis_repo_task = $client->CodeScanningVariantAnalysisRepoTask();
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
| `owner` | `array` | Yes | A GitHub user. |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeScanningVariantAnalysisRepoTask()->load(["codeql_variant_analysis_id" => 1, "owner" => "owner", "repo" => "repo", "repo_name" => "repo_name", "repo_owner" => "repo_owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeScanningVariantAnalysisRepoTaskEntity`

Create a new `CodeScanningVariantAnalysisRepoTaskEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeSecurityEntity

```php
$code_security = $client->CodeSecurity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `array` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `array` | No | Feature options for code scanning |
| `created_at` | `string` | No |  |
| `default_for_new_repos` | `string` | No | Specify which types of repository this security configuration should be applied to by default. |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `array` | No | Feature options for Automatic dependency submission |
| `description` | `string` | No | A description of the code security configuration |
| `enforcement` | `string` | No | The enforcement status for a security configuration |
| `html_url` | `string` | No | The URL of the configuration |
| `id` | `int` | No | The ID of the code security configuration |
| `name` | `string` | No | The name of the code security configuration. |
| `private_vulnerability_reporting` | `string` | No | The enablement status of private vulnerability reporting |
| `secret_scanning` | `string` | No | The enablement status of secret scanning |
| `secret_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of secret scanning delegated alert dismissal |
| `secret_scanning_delegated_bypass` | `string` | No | The enablement status of secret scanning delegated bypass |
| `secret_scanning_delegated_bypass_options` | `array` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `target_type` | `string` | No | The type of the code security configuration. |
| `updated_at` | `string` | No |  |
| `url` | `string` | No | The URL of the configuration |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CodeSecurity()->remove(["configuration_id" => 1, "enterprise" => "enterprise"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CodeSecurity()->update([
  "configuration_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeSecurityEntity`

Create a new `CodeSecurityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeSecurityConfigurationEntity

```php
$code_security_configuration = $client->CodeSecurityConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `advanced_security` | `string` | No | The enablement status of GitHub Advanced Security |
| `code_scanning_default_setup` | `string` | No | The enablement status of code scanning default setup |
| `code_scanning_default_setup_options` | `array` | No | Feature options for code scanning default setup |
| `code_scanning_delegated_alert_dismissal` | `string` | No | The enablement status of code scanning delegated alert dismissal |
| `code_scanning_options` | `array` | No | Feature options for code scanning |
| `code_security` | `string` | No | The enablement status of GitHub Code Security features. |
| `created_at` | `string` | No |  |
| `dependabot_alerts` | `string` | No | The enablement status of Dependabot alerts |
| `dependabot_security_updates` | `string` | No | The enablement status of Dependabot security updates |
| `dependency_graph` | `string` | No | The enablement status of Dependency Graph |
| `dependency_graph_autosubmit_action` | `string` | No | The enablement status of Automatic dependency submission |
| `dependency_graph_autosubmit_action_options` | `array` | No | Feature options for Automatic dependency submission |
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
| `secret_scanning_delegated_bypass_options` | `array` | No | Feature options for secret scanning delegated bypass |
| `secret_scanning_generic_secrets` | `string` | No | The enablement status of Copilot secret scanning |
| `secret_scanning_non_provider_patterns` | `string` | No | The enablement status of secret scanning non-provider patterns |
| `secret_scanning_push_protection` | `string` | No | The enablement status of secret scanning push protection |
| `secret_scanning_validity_checks` | `string` | No | The enablement status of secret scanning validity checks |
| `selected_repository_ids` | `array` | No | An array of repository IDs to attach the configuration to. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CodeSecurityConfiguration()->create([
  "enterprise" => null, // string
  "scope" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeSecurityConfiguration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CodeSecurityConfiguration()->load(["id" => 1, "enterprise" => "enterprise"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CodeSecurityConfiguration()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeSecurityConfigurationEntity`

Create a new `CodeSecurityConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeSecurityConfigurationRepositoryEntity

```php
$code_security_configuration_repository = $client->CodeSecurityConfigurationRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `repository` | `array` | Yes | A GitHub repository. |
| `status` | `string` | No | The attachment status of the code security configuration on the repository. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeSecurityConfigurationRepository()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeSecurityConfigurationRepositoryEntity`

Create a new `CodeSecurityConfigurationRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeSecurityDefaultConfigurationEntity

```php
$code_security_default_configuration = $client->CodeSecurityDefaultConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `array` | No | A code security configuration |
| `default_for_new_repos` | `mixed` | No | The visibility of newly created repositories for which the code security configuration will be applied to by default |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeSecurityDefaultConfiguration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeSecurityDefaultConfigurationEntity`

Create a new `CodeSecurityDefaultConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodeownersErrorEntity

```php
$codeowners_error = $client->CodeownersError();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CodeownersError()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodeownersErrorEntity`

Create a new `CodeownersErrorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CodespaceEntity

```php
$codespace = $client->Codespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `bool` | Yes | Whether the user has accepted the permissions defined by the devcontainer config |
| `allow_forking` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | No |  |
| `assignees_url` | `string` | Yes |  |
| `billable_owner` | `array` | Yes | A GitHub user. |
| `blobs_url` | `string` | Yes |  |
| `branch` | `string` | No | Name of the exported branch |
| `branches_url` | `string` | Yes |  |
| `client_ip` | `string` | No | IP for location auto-detection when proxying a request |
| `clone_url` | `string` | No |  |
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `completed_at` | `string` | No | Completion time of the last export operation |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `cpus` | `int` | Yes | How many cores are available to the codespace. |
| `created_at` | `string` | Yes | The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `defaults` | `array` | Yes |  |
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
| `git_status` | `array` | Yes | Details about the codespace's git repository. |
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
| `license` | `array` | No |  |
| `location` | `string` | Yes | The initally assigned location of a new codespace. |
| `machine` | `array` | Yes | A description of the machine powering a codespace. |
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
| `owner` | `array` | Yes | A GitHub user. |
| `path` | `string` | Yes |  |
| `pending_operation` | `bool` | No | Whether or not a codespace has a pending async operation. |
| `pending_operation_disabled_reason` | `string` | No | Text to show user when codespace is disabled by a pending operation |
| `permissions` | `array` | No |  |
| `prebuild` | `bool` | Yes | Whether the codespace was created from a prebuild. |
| `prebuild_availability` | `string` | Yes | Whether a prebuild is currently available when creating a codespace for this machine and repository. |
| `private` | `bool` | No | Whether the new repository should be private. |
| `publish_url` | `string` | No | API URL to publish this codespace to a new repository. |
| `pulls_url` | `string` | Yes | API URL for the Pull Request associated with this codespace, if any. |
| `pushed_at` | `string` | No |  |
| `recent_folders` | `array` | Yes | Recently opened folders inside the codespace. |
| `ref` | `string` | No | Git ref (typically a branch name) for this codespace |
| `releases_url` | `string` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |
| `retention_expires_at` | `string` | No | When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" |
| `retention_period_minutes` | `int` | No | Duration in minutes after codespace has gone idle in which it will be deleted. |
| `role_name` | `string` | No |  |
| `runtime_constraints` | `array` | No |  |
| `security_and_analysis` | `array` | No |  |
| `selected_repositories_url` | `string` | No | The API URL at which the list of repositories this secret is visible to can be retrieved |
| `selected_repository_ids` | `array` | No | An array of repository IDs that can access the organization secret. |
| `selected_usernames` | `array` | Yes | The usernames of the organization members whose codespaces be billed to the organization. |
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
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Codespace()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Codespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Codespace()->load(["id" => "codespace_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Codespace()->remove(["id" => "codespace_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Codespace()->update([
  "id" => "codespace_id",
  "secret_name" => "secret_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CodespaceEntity`

Create a new `CodespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CollaboratorEntity

```php
$collaborator = $client->Collaborator();
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
| `permissions` | `array` | Yes |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Collaborator()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CollaboratorEntity`

Create a new `CollaboratorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CombinedBillingUsageEntity

```php
$combined_billing_usage = $client->CombinedBillingUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days_left_in_billing_cycle` | `int` | Yes | Numbers of days left in billing cycle. |
| `estimated_paid_storage_for_month` | `int` | Yes | Estimated storage space (GB) used in billing cycle. |
| `estimated_storage_for_month` | `int` | Yes | Estimated sum of free and paid storage space (GB) used in billing cycle. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CombinedBillingUsage()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CombinedBillingUsageEntity`

Create a new `CombinedBillingUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CombinedCommitStatusEntity

```php
$combined_commit_status = $client->CombinedCommitStatus();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CombinedCommitStatus()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CombinedCommitStatusEntity`

Create a new `CombinedCommitStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommitEntity

```php
$commit = $client->Commit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `mixed` | Yes |  |
| `base` | `string` | Yes | The name of the base branch that the head will be merged into. |
| `comments_url` | `string` | Yes |  |
| `commit` | `array` | Yes |  |
| `commit_message` | `string` | No | Commit message to use for the merge commit. |
| `committer` | `mixed` | Yes |  |
| `files` | `array` | No |  |
| `head` | `string` | Yes | The head to merge. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `parents` | `array` | Yes |  |
| `sha` | `string` | Yes |  |
| `stats` | `array` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Commit()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Commit()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Commit()->load(["id" => "commit_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommitEntity`

Create a new `CommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommitActivityEntity

```php
$commit_activity = $client->CommitActivity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `days` | `array` | Yes |  |
| `total` | `int` | Yes |  |
| `week` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CommitActivity()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommitActivityEntity`

Create a new `CommitActivityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommitCommentEntity

```php
$commit_comment = $client->CommitComment();
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
| `reactions` | `array` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CommitComment()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CommitComment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CommitComment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CommitComment()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommitCommentEntity`

Create a new `CommitCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommitComparisonEntity

```php
$commit_comparison = $client->CommitComparison();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ahead_by` | `int` | Yes |  |
| `base_commit` | `array` | Yes | Commit |
| `behind_by` | `int` | Yes |  |
| `commits` | `array` | Yes |  |
| `diff_url` | `string` | Yes |  |
| `files` | `array` | No |  |
| `html_url` | `string` | Yes |  |
| `merge_base_commit` | `array` | Yes | Commit |
| `patch_url` | `string` | Yes |  |
| `permalink_url` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `total_commits` | `int` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CommitComparison()->load(["basehead" => "basehead", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommitComparisonEntity`

Create a new `CommitComparisonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommunityProfileEntity

```php
$community_profile = $client->CommunityProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code_of_conduct` | `array` | Yes | Code of Conduct Simple |
| `code_of_conduct_file` | `array` | Yes |  |
| `contributing` | `array` | Yes |  |
| `issue_template` | `array` | Yes |  |
| `license` | `array` | Yes | License Simple |
| `pull_request_template` | `array` | Yes |  |
| `readme` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CommunityProfile()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommunityProfileEntity`

Create a new `CommunityProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentFileEntity

```php
$content_file = $client->ContentFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `git` | `string` | Yes |  |
| `html` | `string` | Yes |  |
| `self` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContentFile()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentFileEntity`

Create a new `ContentFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContentTrafficEntity

```php
$content_traffic = $client->ContentTraffic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `path` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContentTraffic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContentTrafficEntity`

Create a new `ContentTrafficEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContributorEntity

```php
$contributor = $client->Contributor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | Yes | A GitHub user. |
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
| `weeks` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Contributor()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContributorEntity`

Create a new `ContributorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CopilotEntity

```php
$copilot = $client->Copilot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes | A GitHub user. |
| `assigning_team` | `mixed` | No | The team through which the assignee is granted access to GitHub Copilot, if applicable. |
| `created_at` | `string` | Yes | Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format. |
| `last_activity_at` | `string` | No | Timestamp of user's last GitHub Copilot activity, in ISO 8601 format. |
| `last_activity_editor` | `string` | No | Last editor that was used by the user for a GitHub Copilot completion. |
| `last_authenticated_at` | `string` | No | Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format. |
| `organization` | `array` | Yes | A GitHub organization. |
| `pending_cancellation_date` | `string` | No | The pending cancellation date for the seat, in `YYYY-MM-DD` format. |
| `plan_type` | `string` | No | The Copilot plan of the organization, or the parent enterprise, when applicable. |
| `selected_teams` | `array` | Yes | List of team names within the organization to which to grant access to GitHub Copilot. |
| `selected_usernames` | `array` | Yes | The usernames of the organization members to be granted access to GitHub Copilot. |
| `updated_at` | `string` | No | **Closing down notice:** This field is no longer relevant and is closing down. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Copilot()->create([
  "org_id" => null, // string
  "assignee" => null, // array
  "created_at" => null, // string
  "organization" => null, // array
  "selected_teams" => null, // array
  "selected_usernames" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Copilot()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Copilot()->load(["org_id" => "org_id", "username" => "username"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Copilot()->remove(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CopilotEntity`

Create a new `CopilotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CopilotOrganizationDetailEntity

```php
$copilot_organization_detail = $client->CopilotOrganizationDetail();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CopilotOrganizationDetail()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CopilotOrganizationDetailEntity`

Create a new `CopilotOrganizationDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CopilotUsageMetricsDayEntity

```php
$copilot_usage_metrics_day = $client->CopilotUsageMetricsDay();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `copilot_dotcom_chat` | `array` | No | Usage metrics for Copilot Chat in GitHub.com |
| `copilot_dotcom_pull_requests` | `array` | No | Usage metrics for Copilot for pull requests. |
| `copilot_ide_chat` | `array` | No | Usage metrics for Copilot Chat in the IDE. |
| `copilot_ide_code_completions` | `array` | No | Usage metrics for Copilot editor code completions in the IDE. |
| `date` | `string` | Yes | The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format. |
| `total_active_users` | `int` | No | The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. |
| `total_engaged_users` | `int` | No | The total number of Copilot users who engaged with any Copilot feature, for the given day. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CopilotUsageMetricsDay()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CopilotUsageMetricsDayEntity`

Create a new `CopilotUsageMetricsDayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CredentialEntity

```php
$credential = $client->Credential();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credentials` | `array` | Yes | A list of credentials to be revoked, up to 1000 per request. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Credential()->create([
  "credentials" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CredentialEntity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPropertyEntity

```php
$custom_property = $client->CustomProperty();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_values` | `array` | No | An ordered list of the allowed values of the property. |
| `default_value` | `mixed` | No | Default value of the property |
| `description` | `string` | No | Short description of the property |
| `properties` | `array` | Yes | The array of custom properties to create or update. |
| `property_name` | `string` | Yes | The name of the property |
| `required` | `bool` | No | Whether the property is required. |
| `source_type` | `string` | No | The source type of the property |
| `url` | `string` | No | The URL that can be used to fetch, update, or delete info about this property via the API. |
| `value_type` | `string` | Yes | The type of the value for the property |
| `values_editable_by` | `string` | No | Who can edit the values of the property |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomProperty()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomProperty()->load(["custom_property_name" => "custom_property_name", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomProperty()->update([
  "custom_property_name" => "custom_property_name",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPropertyEntity`

Create a new `CustomPropertyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPropertyValueEntity

```php
$custom_property_value = $client->CustomPropertyValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `property_name` | `string` | Yes | The name of the property |
| `value` | `mixed` | Yes | The value assigned to the property |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomPropertyValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPropertyValueEntity`

Create a new `CustomPropertyValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotEntity

```php
$dependabot = $client->Dependabot();
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
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
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
| `license` | `array` | No |  |
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
| `owner` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | No |  |
| `private` | `bool` | Yes |  |
| `public_members_url` | `string` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository_ids_to_add` | `array` | No | List of repository IDs to add. |
| `repository_ids_to_remove` | `array` | No | List of repository IDs to remove. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `array` | No |  |
| `selected_repositories_url` | `string` | No |  |
| `selected_repository_ids` | `array` | Yes | An array of repository ids that can access the organization secret. |
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
| `topics` | `array` | No |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dependabot()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Dependabot()->remove(["org_id" => "org_id", "secret_name" => "secret_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Dependabot()->update([
  "org_id" => "org_id",
  "repository_id" => 1,
  "secret_id" => "secret_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotEntity`

Create a new `DependabotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotAlertEntity

```php
$dependabot_alert = $client->DependabotAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `array` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `id` | `string` | No |  |
| `number` | `int` | Yes | The security alert number. |
| `security_advisory` | `array` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `array` | Yes | Details pertaining to one vulnerable version range for the advisory. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DependabotAlert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependabotAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DependabotAlert()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotAlertEntity`

Create a new `DependabotAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotAlertWithRepositoryEntity

```php
$dependabot_alert_with_repository = $client->DependabotAlertWithRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_dismissed_at` | `string` | No | The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `created_at` | `string` | Yes | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dependency` | `array` | Yes | Details for the vulnerable dependency. |
| `dismissed_at` | `string` | Yes | The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `dismissed_by` | `array` | Yes | A GitHub user. |
| `dismissed_comment` | `string` | Yes | An optional comment associated with the alert's dismissal. |
| `dismissed_reason` | `string` | Yes | The reason that the alert was dismissed. |
| `fixed_at` | `string` | Yes | The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `html_url` | `string` | Yes | The GitHub URL of the alert resource. |
| `number` | `int` | Yes | The security alert number. |
| `repository` | `array` | Yes | A GitHub repository. |
| `security_advisory` | `array` | Yes | Details for the GitHub Security Advisory. |
| `security_vulnerability` | `array` | Yes | Details pertaining to one vulnerable version range for the advisory. |
| `state` | `string` | Yes | The state of the Dependabot alert. |
| `updated_at` | `string` | Yes | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | Yes | The REST API URL of the alert resource. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DependabotAlertWithRepository()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotAlertWithRepositoryEntity`

Create a new `DependabotAlertWithRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotPublicKeyEntity

```php
$dependabot_public_key = $client->DependabotPublicKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | The Base64 encoded public key. |
| `key_id` | `string` | Yes | The identifier for the key. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependabotPublicKey()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotPublicKeyEntity`

Create a new `DependabotPublicKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotRepositoryAccessDetailEntity

```php
$dependabot_repository_access_detail = $client->DependabotRepositoryAccessDetail();
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
| `owner` | `array` | Yes | A GitHub user. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DependabotRepositoryAccessDetail()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotRepositoryAccessDetailEntity`

Create a new `DependabotRepositoryAccessDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependabotSecretEntity

```php
$dependabot_secret = $client->DependabotSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the secret. |
| `updated_at` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependabotSecret()->load(["id" => "dependabot_secret_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependabotSecretEntity`

Create a new `DependabotSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependencyGraphEntity

```php
$dependency_graph = $client->DependencyGraph();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detector` | `array` | Yes | A description of the detector used. |
| `job` | `array` | Yes |  |
| `manifests` | `array` | No | A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies. |
| `metadata` | `array` | No | User-defined metadata to store domain-specific information limited to 8 keys with scalar values. |
| `ref` | `string` | Yes | The repository branch that triggered this snapshot. |
| `scanned` | `string` | Yes | The time at which the snapshot was scanned. |
| `sha` | `string` | Yes | The commit SHA associated with this dependency snapshot. |
| `version` | `int` | Yes | The version of the repository snapshot submission. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DependencyGraph()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependencyGraphEntity`

Create a new `DependencyGraphEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependencyGraphDiffEntity

```php
$dependency_graph_diff = $client->DependencyGraphDiff();
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
| `vulnerabilities` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependencyGraphDiff()->load(["basehead" => "basehead", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependencyGraphDiffEntity`

Create a new `DependencyGraphDiffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependencyGraphSpdxSbomEntity

```php
$dependency_graph_spdx_sbom = $client->DependencyGraphSpdxSbom();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `SPDXID` | `string` | Yes | The SPDX identifier for the SPDX document. |
| `comment` | `string` | No | An optional comment about the SPDX document. |
| `creationInfo` | `array` | Yes |  |
| `dataLicense` | `string` | Yes | The license under which the SPDX document is licensed. |
| `documentNamespace` | `string` | Yes | The namespace for the SPDX document. |
| `name` | `string` | Yes | The name of the SPDX document. |
| `packages` | `array` | Yes |  |
| `relationships` | `array` | Yes |  |
| `spdxVersion` | `string` | Yes | The version of the SPDX specification that this document conforms to. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependencyGraphSpdxSbom()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependencyGraphSpdxSbomEntity`

Create a new `DependencyGraphSpdxSbomEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeployKeyEntity

```php
$deploy_key = $client->DeployKey();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeployKey()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DeployKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeployKey()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeployKeyEntity`

Create a new `DeployKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentEntity

```php
$deployment = $client->Deployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_merge` | `bool` | No | Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch. |
| `comment` | `string` | Yes | A comment to accompany the deployment review |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
| `description` | `string` | Yes | Short description of the deployment. |
| `environment` | `string` | Yes | Name for the target deployment environment. |
| `environment_ids` | `array` | Yes | The list of environment ids to approve or reject |
| `id` | `int` | Yes | Unique identifier of the deployment |
| `node_id` | `string` | Yes |  |
| `original_environment` | `string` | No |  |
| `payload` | `mixed` | Yes |  |
| `performed_via_github_app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `production_environment` | `bool` | No | Specifies if the given environment is one that end-users directly interact with. |
| `ref` | `string` | Yes | The ref to deploy. |
| `repository_url` | `string` | Yes |  |
| `required_contexts` | `array` | No | The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Deployment()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Deployment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Deployment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentEntity`

Create a new `DeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentBranchPolicyEntity

```php
$deployment_branch_policy = $client->DeploymentBranchPolicy();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeploymentBranchPolicy()->create([
  "environment_name" => null, // string
  "owner" => null, // string
  "repo" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeploymentBranchPolicy()->load(["id" => 1, "environment_id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DeploymentBranchPolicy()->update([
  "id" => 1,
  "environment_id" => "environment_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentBranchPolicyEntity`

Create a new `DeploymentBranchPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentProtectionRuleEntity

```php
$deployment_protection_rule = $client->DeploymentProtectionRule();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeploymentProtectionRule()->create([
  "environment_name" => null, // string
  "owner" => null, // string
  "repo" => null, // string
  "id" => null, // int
  "integration_url" => null, // string
  "node_id" => null, // string
  "slug" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeploymentProtectionRule()->load(["id" => 1, "environment_id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentProtectionRuleEntity`

Create a new `DeploymentProtectionRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DeploymentStatusEntity

```php
$deployment_status = $client->DeploymentStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_inactive` | `bool` | No | Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
| `deployment_url` | `string` | Yes |  |
| `description` | `string` | Yes | A short description of the status. |
| `environment` | `string` | No | The environment of the deployment that the status is for. |
| `environment_url` | `string` | No | The URL for accessing your environment. |
| `id` | `int` | Yes |  |
| `log_url` | `string` | No | The URL to associate with this status. |
| `node_id` | `string` | Yes |  |
| `performed_via_github_app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DeploymentStatus()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DeploymentStatus()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DeploymentStatus()->load(["id" => 1, "deployment_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DeploymentStatusEntity`

Create a new `DeploymentStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DiffEntryEntity

```php
$diff_entry = $client->DiffEntry();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DiffEntry()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DiffEntryEntity`

Create a new `DiffEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailEntity

```php
$email = $client->Email();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Email()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Email()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Email()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailEntity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmojiEntity

```php
$emoji = $client->Emoji();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Emoji()->load(["id" => "emoji_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmojiEntity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmptyObjectEntity

```php
$empty_object = $client->EmptyObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attestations` | `array` | No |  |
| `enable_debug_logging` | `bool` | No | Whether to enable debug logging for the re-run. |
| `encrypted_value` | `string` | Yes | Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-en… |
| `include_claim_keys` | `array` | No | Array of unique strings. |
| `key_id` | `string` | Yes | ID of the key you used to encrypt the secret. |
| `languages` | `array` | No | CodeQL languages to be analyzed. |
| `name` | `string` | Yes | The name of the variable. |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `runner_label` | `string` | No | Runner label to be used if the runner type is labeled. |
| `runner_type` | `string` | No | Runner type to be used. |
| `selected_repository_ids` | `array` | No | An array of repository ids that can access the organization variable. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EmptyObject()->create([
  "org_id" => null, // string
  "encrypted_value" => null, // string
  "key_id" => null, // string
  "name" => null, // string
  "use_default" => null, // bool
  "value" => null, // string
  "visibility" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmptyObject()->load(["subject_digest" => "subject_digest", "username" => "username"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EmptyObject()->update([
  "org_id" => "org_id",
  "secret_name" => "secret_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmptyObjectEntity`

Create a new `EmptyObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseTeamEntity

```php
$enterprise_team = $client->EnterpriseTeam();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EnterpriseTeam()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnterpriseTeam()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EnterpriseTeam()->load(["id" => "enterprise_team_id", "enterprise" => "enterprise"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EnterpriseTeam()->remove(["id" => "enterprise_team_id", "enterprise" => "enterprise"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EnterpriseTeam()->update([
  "id" => "enterprise_team_id",
  "enterprise" => "enterprise",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseTeamEntity`

Create a new `EnterpriseTeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseTeamMembershipEntity

```php
$enterprise_team_membership = $client->EnterpriseTeamMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EnterpriseTeamMembership()->remove(["enterprise" => "enterprise", "id" => "id", "team_id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseTeamMembershipEntity`

Create a new `EnterpriseTeamMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentEntity

```php
$environment = $client->Environment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The time that the environment was created, in ISO 8601 format. |
| `deployment_branch_policy` | `array` | Yes | The type of deployment branch policy for this environment. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The id of the environment. |
| `name` | `string` | Yes | The name of the environment. |
| `node_id` | `string` | Yes |  |
| `prevent_self_review` | `bool` | No | Whether or not a user who created the job is prevented from approving their own job. |
| `protection_rules` | `array` | No | Built-in deployment protection rules for the environment. |
| `reviewers` | `array` | No | The people or teams that may review jobs that reference the environment. |
| `updated_at` | `string` | Yes | The time that the environment was last updated, in ISO 8601 format. |
| `url` | `string` | Yes |  |
| `wait_timer` | `int` | No | The amount of time to delay a job after the job is initially triggered. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Environment()->load(["id" => "environment_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Environment()->update([
  "id" => "environment_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentEntity`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnvironmentApprovalEntity

```php
$environment_approval = $client->EnvironmentApproval();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | Yes | The comment submitted with the deployment review |
| `environments` | `array` | Yes | The list of environments that were approved or rejected |
| `state` | `string` | Yes | Whether deployment to the environment(s) was approved or rejected or pending (with comments) |
| `user` | `array` | Yes | A GitHub user. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnvironmentApproval()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnvironmentApprovalEntity`

Create a new `EnvironmentApprovalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | Yes | Actor |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `org` | `array` | Yes | Actor |
| `payload` | `array` | Yes |  |
| `public` | `bool` | Yes |  |
| `repo` | `array` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Event()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->load(["org" => "org", "username" => "username"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeedEntity

```php
$feed = $client->Feed();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_actor_url` | `string` | No |  |
| `current_user_organization_url` | `string` | No |  |
| `current_user_organization_urls` | `array` | No |  |
| `current_user_public_url` | `string` | No |  |
| `current_user_url` | `string` | No |  |
| `links` | `array` | Yes |  |
| `repository_discussions_category_url` | `string` | No | A feed of discussions for a given repository and category. |
| `repository_discussions_url` | `string` | No | A feed of discussions for a given repository. |
| `security_advisories_url` | `string` | No |  |
| `timeline_url` | `string` | Yes |  |
| `user_url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Feed()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeedEntity`

Create a new `FeedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileCommitEntity

```php
$file_commit = $client->FileCommit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | Yes | The author of the file. |
| `branch` | `string` | No | The branch name. |
| `commit` | `array` | Yes |  |
| `committer` | `array` | Yes | The person that committed the file. |
| `content` | `array` | Yes | The new file content, using Base64 encoding. |
| `message` | `string` | Yes | The commit message. |
| `sha` | `string` | No | **Required if you are updating a file**. |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FileCommit()->remove(["owner" => "owner", "path" => "path", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FileCommit()->update([
  "owner" => "owner",
  "path" => "path",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileCommitEntity`

Create a new `FileCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowerEntity

```php
$follower = $client->Follower();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Follower()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowerEntity`

Create a new `FollowerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowingEntity

```php
$following = $client->Following();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Following()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowingEntity`

Create a new `FollowingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FullRepositoryEntity

```php
$full_repository = $client->FullRepository();
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
| `code_of_conduct` | `array` | Yes | Code of Conduct Simple |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
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
| `license` | `array` | Yes | License Simple |
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
| `organization` | `array` | Yes | A GitHub user. |
| `owner` | `array` | Yes | A GitHub user. |
| `parent` | `array` | Yes | A repository on GitHub. |
| `permissions` | `array` | Yes |  |
| `private` | `bool` | Yes | Either `true` to create a new private repository or `false` to create a new public one. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `security_and_analysis` | `array` | No | Specify which security and analysis features to enable or disable for the repository. |
| `size` | `int` | Yes | The size of the repository, in kilobytes. |
| `source` | `array` | Yes | A repository on GitHub. |
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
| `template_repository` | `array` | Yes | A repository on GitHub. |
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FullRepository()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FullRepository()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FullRepository()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FullRepositoryEntity`

Create a new `FullRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GistEntity

```php
$gist = $client->Gist();
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
| `files` | `array` | No | Names and content for the files that make up the gist |
| `fork_of` | `array` | Yes | Gist |
| `forks` | `array` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `array` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Gist()->create([
  "fork_of" => null, // array
  "owner" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Gist()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Gist()->load(["id" => "gist_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Gist()->remove(["id" => "gist_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Gist()->update([
  "id" => "gist_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GistEntity`

Create a new `GistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GistCommentEntity

```php
$gist_comment = $client->GistComment();
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
| `user` | `array` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GistComment()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GistComment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GistComment()->load(["id" => 1, "gist_id" => "gist_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GistComment()->update([
  "id" => 1,
  "gist_id" => "gist_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GistCommentEntity`

Create a new `GistCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GistCommitEntity

```php
$gist_commit = $client->GistCommit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_status` | `array` | Yes |  |
| `committed_at` | `string` | Yes |  |
| `id` | `string` | No |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |
| `version` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GistCommit()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GistCommitEntity`

Create a new `GistCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GistSimpleEntity

```php
$gist_simple = $client->GistSimple();
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
| `files` | `array` | No |  |
| `fork_of` | `array` | Yes | Gist |
| `forks` | `array` | No |  |
| `forks_url` | `string` | No |  |
| `git_pull_url` | `string` | No |  |
| `git_push_url` | `string` | No |  |
| `history` | `array` | No |  |
| `html_url` | `string` | No |  |
| `id` | `string` | No |  |
| `node_id` | `string` | No |  |
| `owner` | `array` | Yes | A GitHub user. |
| `public` | `bool` | No |  |
| `truncated` | `bool` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GistSimple()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GistSimpleEntity`

Create a new `GistSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitEntity

```php
$git = $client->Git();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Git()->remove(["owner" => "owner", "ref" => "ref", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitEntity`

Create a new `GitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitCommitEntity

```php
$git_commit = $client->GitCommit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `array` | Yes | Identifying information for the git-user |
| `committer` | `array` | Yes | Identifying information for the git-user |
| `html_url` | `string` | Yes |  |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the commit |
| `node_id` | `string` | Yes |  |
| `parents` | `array` | Yes | The full SHAs of the commits that were the parents of this commit. |
| `sha` | `string` | Yes | SHA for the commit |
| `signature` | `string` | No | The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. |
| `tree` | `array` | Yes | The SHA of the tree object this commit points to |
| `url` | `string` | Yes |  |
| `verification` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitCommit()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GitCommit()->load(["id" => "git_commit_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitCommitEntity`

Create a new `GitCommitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitRefEntity

```php
$git_ref = $client->GitRef();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `force` | `bool` | No | Indicates whether to force the update or to make sure the update is a fast-forward update. |
| `id` | `string` | No |  |
| `node_id` | `string` | Yes |  |
| `object` | `array` | Yes |  |
| `ref` | `string` | Yes | The name of the fully qualified reference (ie: `refs/heads/master`). |
| `sha` | `string` | Yes | SHA for the reference |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitRef()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GitRef()->load(["id" => "git_ref_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GitRef()->update([
  "id" => "git_ref_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitRefEntity`

Create a new `GitRefEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitTagEntity

```php
$git_tag = $client->GitTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `message` | `string` | Yes | Message describing the purpose of the tag |
| `node_id` | `string` | Yes |  |
| `object` | `array` | Yes | The SHA of the git object this is tagging. |
| `sha` | `string` | Yes |  |
| `tag` | `string` | Yes | Name of the tag |
| `tagger` | `array` | Yes | An object with information about the individual creating the tag. |
| `type` | `string` | Yes | The type of the object we're tagging. |
| `url` | `string` | Yes | URL for the tag |
| `verification` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitTag()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GitTag()->load(["id" => "git_tag_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitTagEntity`

Create a new `GitTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitTreeEntity

```php
$git_tree = $client->GitTree();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_tree` | `string` | No | The SHA1 of an existing Git tree object which will be used as the base for the new tree. |
| `id` | `string` | No |  |
| `sha` | `string` | Yes |  |
| `tree` | `array` | Yes | Objects specifying a tree structure |
| `truncated` | `bool` | Yes |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GitTree()->create([
  "owner" => null, // string
  "repo" => null, // string
  "sha" => null, // string
  "tree" => null, // array
  "truncated" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GitTree()->load(["id" => "git_tree_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitTreeEntity`

Create a new `GitTreeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitignoreEntity

```php
$gitignore = $client->Gitignore();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Gitignore()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitignoreEntity`

Create a new `GitignoreEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GitignoreTemplateEntity

```php
$gitignore_template = $client->GitignoreTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes |  |
| `source` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GitignoreTemplate()->load(["id" => "gitignore_template_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GitignoreTemplateEntity`

Create a new `GitignoreTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GlobalAdvisoryEntity

```php
$global_advisory = $client->GlobalAdvisory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `array` | Yes | The users who contributed to the advisory. |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `array` | Yes |  |
| `cvss_severities` | `array` | No |  |
| `cwes` | `array` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `epss` | `array` | No | The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss). |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `github_reviewed_at` | `string` | Yes | The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `id` | `string` | No |  |
| `identifiers` | `array` | Yes |  |
| `nvd_published_at` | `string` | Yes | The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `references` | `array` | Yes |  |
| `repository_advisory_url` | `string` | Yes | The API URL for the repository advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `source_code_location` | `string` | Yes | The URL of the advisory's source code. |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `type` | `string` | Yes | The type of advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `array` | Yes | The products and respective version ranges affected by the advisory. |
| `withdrawn_at` | `string` | Yes | The date and time of when the advisory was withdrawn, in ISO 8601 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GlobalAdvisory()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GlobalAdvisory()->load(["id" => "global_advisory_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GlobalAdvisoryEntity`

Create a new `GlobalAdvisoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GpgKeyEntity

```php
$gpg_key = $client->GpgKey();
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
| `emails` | `array` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `key_id` | `string` | Yes |  |
| `name` | `string` | No | A descriptive name for the new key. |
| `primary_key_id` | `int` | Yes |  |
| `public_key` | `string` | Yes |  |
| `raw_key` | `string` | Yes |  |
| `revoked` | `bool` | Yes |  |
| `subkeys` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GpgKey()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GpgKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GpgKey()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GpgKeyEntity`

Create a new `GpgKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HookEntity

```php
$hook = $client->Hook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines whether the hook is actually triggered on pushes. |
| `add_events` | `array` | No | Determines a list of events to be added to the list of events that the Hook triggers for. |
| `config` | `array` | Yes | Configuration object of the webhook |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `array` | Yes | Determines what events the hook is triggered for. |
| `id` | `int` | Yes | Unique identifier of the webhook. |
| `last_response` | `array` | Yes |  |
| `name` | `string` | Yes | The name of a valid service, use 'web' for a webhook. |
| `ping_url` | `string` | Yes |  |
| `remove_events` | `array` | No | Determines a list of events to be removed from the list of events that the Hook triggers for. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Hook()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Hook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Hook()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Hook()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HookEntity`

Create a new `HookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HookDeliveryEntity

```php
$hook_delivery = $client->HookDelivery();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the delivery was delivered. |
| `duration` | `float` | Yes | Time spent delivering. |
| `event` | `string` | Yes | The event that triggered the delivery. |
| `guid` | `string` | Yes | Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). |
| `id` | `int` | Yes | Unique identifier of the delivery. |
| `installation_id` | `int` | Yes | The id of the GitHub App installation associated with this event. |
| `redelivery` | `bool` | Yes | Whether the delivery is a redelivery. |
| `repository_id` | `int` | Yes | The id of the repository associated with this event. |
| `request` | `array` | Yes |  |
| `response` | `array` | Yes |  |
| `status` | `string` | Yes | Description of the status of the attempted delivery |
| `status_code` | `int` | Yes | Status code received when delivery was made. |
| `throttled_at` | `string` | No | Time when the webhook delivery was throttled. |
| `url` | `string` | No | The URL target of the delivery. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->HookDelivery()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HookDeliveryEntity`

Create a new `HookDeliveryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HookDeliveryItemEntity

```php
$hook_delivery_item = $client->HookDeliveryItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The type of activity for the event that triggered the delivery. |
| `delivered_at` | `string` | Yes | Time when the webhook delivery occurred. |
| `duration` | `float` | Yes | Time spent delivering. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->HookDeliveryItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HookDeliveryItemEntity`

Create a new `HookDeliveryItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HostedComputeEntity

```php
$hosted_compute = $client->HostedCompute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `array` | No | The unique identifier of each network settings in the configuration. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->HostedCompute()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->HostedCompute()->remove(["network_configuration_id" => "network_configuration_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HostedComputeEntity`

Create a new `HostedComputeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HovercardEntity

```php
$hovercard = $client->Hovercard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `octicon` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Hovercard()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HovercardEntity`

Create a new `HovercardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImportEntity

```php
$import = $client->Import();
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
| `project_choices` | `array` | No |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Import()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Import()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImportEntity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InstallationEntity

```php
$installation = $client->Installation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `mixed` | Yes |  |
| `app_id` | `int` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `client_id` | `string` | No |  |
| `contact_email` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `events` | `array` | Yes |  |
| `has_multiple_single_files` | `bool` | No |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | The ID of the installation. |
| `permissions` | `array` | Yes | The permissions granted to the user access token. |
| `repositories_url` | `string` | Yes |  |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `array` | No |  |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `array` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Installation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Installation()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Installation()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Installation()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InstallationEntity`

Create a new `InstallationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InstallationTokenEntity

```php
$installation_token = $client->InstallationToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `permissions` | `array` | No | The permissions granted to the user access token. |
| `repositories` | `array` | No | List of repository names that the token should have access to |
| `repository_ids` | `array` | No | List of repository IDs that the token should have access to |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->InstallationToken()->create([
  "id" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InstallationTokenEntity`

Create a new `InstallationTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationEntity

```php
$integration = $client->Integration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apps` | `array` | Yes | The GitHub Apps that have push access to this branch. |
| `client_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `events` | `array` | Yes | The list of events for the GitHub app. |
| `external_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the GitHub app |
| `installations_count` | `int` | No | The number of installations associated with the GitHub app. |
| `name` | `string` | Yes | The name of the GitHub app |
| `node_id` | `string` | Yes |  |
| `owner` | `mixed` | Yes |  |
| `permissions` | `array` | Yes | The set of permissions for the GitHub app |
| `slug` | `string` | No | The slug name of the GitHub app |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Integration()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Integration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->load(["app_slug" => "app_slug"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Integration()->remove(["branch_id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Integration()->update([
  "branch_id" => "branch_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationEntity`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IntegrationInstallationEntity

```php
$integration_installation = $client->IntegrationInstallation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the request installation. |
| `node_id` | `string` | No |  |
| `requester` | `array` | Yes | A GitHub user. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IntegrationInstallation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IntegrationInstallationEntity`

Create a new `IntegrationInstallationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InteractionEntity

```php
$interaction = $client->Interaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | No |  |
| `limit` | `string` | No |  |
| `origin` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Interaction()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Interaction()->remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InteractionEntity`

Create a new `InteractionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InteractionLimitEntity

```php
$interaction_limit = $client->InteractionLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expires_at` | `string` | Yes |  |
| `expiry` | `string` | No | The duration of the interaction restriction. |
| `limit` | `string` | Yes | The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. |
| `origin` | `string` | Yes |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->InteractionLimit()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InteractionLimitEntity`

Create a new `InteractionLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueEntity

```php
$issue = $client->Issue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `actor` | `array` | Yes | A GitHub user. |
| `after_id` | `int` | No | The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified). |
| `assignee` | `array` | Yes | A GitHub user. |
| `assignees` | `array` | No | Usernames of people to assign this issue to. |
| `assigner` | `array` | Yes | A GitHub user. |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `before_id` | `int` | No | The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified). |
| `body` | `string` | No | Contents of the issue comment |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `closed_at` | `string` | Yes |  |
| `closed_by` | `array` | Yes | A GitHub user. |
| `color` | `string` | No | 6-character hex code, without the leading #, identifying the color |
| `comments` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commit_id` | `string` | Yes |  |
| `commit_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `default` | `bool` | No | Whether this label comes by default in a new repository. |
| `description` | `string` | No | Optional description of the label, such as its purpose. |
| `dismissed_review` | `array` | Yes |  |
| `draft` | `bool` | No |  |
| `event` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the issue comment |
| `issue` | `array` | Yes | Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. |
| `issue_dependencies_summary` | `array` | Yes |  |
| `issue_field_values` | `array` | No |  |
| `issue_id` | `int` | Yes | The id of the issue that blocks the current issue |
| `issue_url` | `string` | Yes |  |
| `label` | `array` | Yes | Issue Event Label |
| `labels` | `array` | Yes | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access t… |
| `labels_url` | `string` | Yes |  |
| `lock_reason` | `string` | No | The reason for locking the issue or pull request conversation. |
| `locked` | `bool` | Yes |  |
| `milestone` | `array` | Yes | Issue Event Milestone |
| `name` | `string` | No | The name of the label. |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the issue within its repository |
| `parent_issue_url` | `string` | No | URL to get the parent issue of this issue, if it is a sub-issue |
| `performed_via_github_app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `project_card` | `array` | Yes | Issue Event Project Card |
| `pull_request` | `array` | Yes |  |
| `reactions` | `array` | Yes |  |
| `rename` | `array` | Yes | Issue Event Rename |
| `replace_parent` | `bool` | No | Option that, when true, instructs the operation to replace the sub-issues current parent issue |
| `repository` | `array` | Yes | A repository on GitHub. |
| `repository_url` | `string` | Yes |  |
| `requested_reviewer` | `array` | Yes | A GitHub user. |
| `requested_team` | `array` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `review_requester` | `array` | Yes | A GitHub user. |
| `state` | `string` | Yes | State of the issue; either 'open' or 'closed' |
| `state_reason` | `string` | No | The reason for the current state |
| `sub_issue_id` | `int` | Yes | The id of the sub-issue to add. |
| `sub_issues_summary` | `array` | Yes |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes | Title of the issue |
| `type` | `array` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the issue comment |
| `user` | `array` | Yes | A GitHub user. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Issue()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Issue()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Issue()->remove(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Issue()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueEntity`

Create a new `IssueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IssueTypeEntity

```php
$issue_type = $client->IssueType();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IssueType()->create([
  "org_id" => null, // string
  "description" => null, // string
  "id" => null, // int
  "name" => null, // string
  "node_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IssueType()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IssueType()->update([
  "id" => 1,
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IssueTypeEntity`

Create a new `IssueTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobEntity

```php
$job = $client->Job();
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
| `labels` | `array` | Yes | Labels for the workflow job. |
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
| `steps` | `array` | No | Steps in this job. |
| `url` | `string` | Yes |  |
| `workflow_name` | `string` | Yes | The name of the workflow. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Job()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobEntity`

Create a new `JobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## KeyEntity

```php
$key = $client->Key();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Key()->create([
  "created_at" => null, // string
  "id" => null, // int
  "key" => null, // string
  "read_only" => null, // bool
  "title" => null, // string
  "url" => null, // string
  "verified" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Key()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Key()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): KeyEntity`

Create a new `KeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LabelEntity

```php
$label = $client->Label();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Label()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Label()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Label()->load(["id" => "label_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Label()->update([
  "id" => "label_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LabelEntity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LanguageEntity

```php
$language = $client->Language();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `C` | `int` | No |  |
| `Python` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Language()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LanguageEntity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LicenseEntity

```php
$license = $client->License();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes |  |
| `conditions` | `array` | Yes |  |
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
| `license` | `array` | Yes | License Simple |
| `limitations` | `array` | Yes |  |
| `links` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `permissions` | `array` | Yes |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->License()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->License()->load(["id" => "license_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LicenseEntity`

Create a new `LicenseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MarkdownEntity

```php
$markdown = $client->Markdown();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `context` | `string` | No | The repository context to use when creating references in `gfm` mode. |
| `mode` | `string` | No | The rendering mode. |
| `text` | `string` | Yes | The Markdown text to render in HTML. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Markdown()->create([
  "text" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MarkdownEntity`

Create a new `MarkdownEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MarketplaceListingPlanEntity

```php
$marketplace_listing_plan = $client->MarketplaceListingPlan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounts_url` | `string` | Yes |  |
| `bullets` | `array` | Yes |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MarketplaceListingPlan()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MarketplaceListingPlanEntity`

Create a new `MarketplaceListingPlanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MarketplacePurchaseEntity

```php
$marketplace_purchase = $client->MarketplacePurchase();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `id` | `int` | Yes |  |
| `login` | `string` | Yes |  |
| `marketplace_pending_change` | `array` | No |  |
| `marketplace_purchase` | `array` | Yes |  |
| `organization_billing_email` | `string` | No |  |
| `type` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MarketplacePurchase()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MarketplacePurchase()->load(["account_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MarketplacePurchaseEntity`

Create a new `MarketplacePurchaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Member()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MembershipEntity

```php
$membership = $client->Membership();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Membership()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Membership()->load(["id" => "membership_id", "enterprise" => "enterprise", "team_id" => "team_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Membership()->update([
  "id" => "membership_id",
  "enterprise" => "enterprise",
  "team_id" => "team_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MembershipEntity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MergedUpstreamEntity

```php
$merged_upstream = $client->MergedUpstream();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_branch` | `string` | No |  |
| `branch` | `string` | Yes | The name of the branch which should be updated to match upstream. |
| `merge_type` | `string` | No |  |
| `message` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MergedUpstream()->create([
  "owner" => null, // string
  "repo" => null, // string
  "branch" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MergedUpstreamEntity`

Create a new `MergedUpstreamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetaEntity

```php
$meta = $client->Meta();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Meta()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Meta()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetaEntity`

Create a new `MetaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MetarootEntity

```php
$metaroot = $client->Metaroot();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Metaroot()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MetarootEntity`

Create a new `MetarootEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MigrationEntity

```php
$migration = $client->Migration();
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
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
| `default_branch` | `string` | No |  |
| `delete_branch_on_merge` | `bool` | No |  |
| `deployments_url` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `disabled` | `bool` | No |  |
| `downloads_url` | `string` | Yes |  |
| `events_url` | `string` | Yes |  |
| `exclude` | `array` | No | Exclude related items from being returned in the response in order to improve performance of the request. |
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
| `license` | `array` | No |  |
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
| `owner` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `repositories` | `array` | Yes | The repositories included in the migration. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `array` | No |  |
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
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Migration()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Migration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Migration()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Migration()->remove(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MigrationEntity`

Create a new `MigrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MilestoneEntity

```php
$milestone = $client->Milestone();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `closed_at` | `string` | Yes |  |
| `closed_issues` | `int` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Milestone()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Milestone()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Milestone()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Milestone()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MilestoneEntity`

Create a new `MilestoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MinimalRepositoryEntity

```php
$minimal_repository = $client->MinimalRepository();
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
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
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
| `license` | `array` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `network_count` | `int` | No |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `open_issues` | `int` | No |  |
| `open_issues_count` | `int` | No |  |
| `owner` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | No |  |
| `private` | `bool` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | No |  |
| `releases_url` | `string` | Yes |  |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `array` | No |  |
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
| `topics` | `array` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | Yes |  |
| `visibility` | `string` | No |  |
| `watchers` | `int` | No |  |
| `watchers_count` | `int` | No |  |
| `web_commit_signoff_required` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MinimalRepository()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MinimalRepositoryEntity`

Create a new `MinimalRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NetworkConfigurationEntity

```php
$network_configuration = $client->NetworkConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `compute_service` | `string` | No | The hosted compute service the network configuration supports. |
| `created_on` | `string` | Yes | The time at which the network configuration was created, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier of the network configuration. |
| `name` | `string` | Yes | The name of the network configuration. |
| `network_settings_ids` | `array` | No | The unique identifier of each network settings in the configuration. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `compute_service` | - | - | - |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `network_settings_ids` | - | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NetworkConfiguration()->create([
  "org_id" => null, // string
  "created_on" => null, // string
  "id" => null, // string
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NetworkConfiguration()->load(["id" => "network_configuration_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NetworkConfiguration()->update([
  "id" => "network_configuration_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NetworkConfigurationEntity`

Create a new `NetworkConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NetworkSettingEntity

```php
$network_setting = $client->NetworkSetting();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NetworkSetting()->load(["id" => "network_setting_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NetworkSettingEntity`

Create a new `NetworkSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OidcCustomSubEntity

```php
$oidc_custom_sub = $client->OidcCustomSub();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `array` | Yes | Array of unique strings. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OidcCustomSub()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OidcCustomSubEntity`

Create a new `OidcCustomSubEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OidcCustomSubRepoEntity

```php
$oidc_custom_sub_repo = $client->OidcCustomSubRepo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `include_claim_keys` | `array` | No | Array of unique strings. |
| `use_default` | `bool` | Yes | Whether to use the default template or not. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OidcCustomSubRepo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OidcCustomSubRepoEntity`

Create a new `OidcCustomSubRepoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgEntity

```php
$org = $client->Org();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_tokens_url` | `string` | Yes |  |
| `account` | `mixed` | Yes |  |
| `action` | `string` | Yes | Action to apply to the fine-grained personal access token. |
| `advanced_security_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `app_id` | `int` | Yes |  |
| `app_slug` | `string` | Yes |  |
| `artifact_url` | `string` | No | The URL where the artifact is stored. |
| `async` | `bool` | No | When set to `true`, the request will be performed asynchronously. |
| `attestations` | `array` | No |  |
| `attestations_subject_digests` | `array` | No | Mapping of subject digest to bundles. |
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
| `enterprise_teams_providing_indirect_membership` | `array` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `events` | `array` | Yes |  |
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
| `organization` | `array` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `page_info` | `array` | No | Information about the current page. |
| `pat_ids` | `array` | Yes | The IDs of the fine-grained personal access tokens. |
| `pat_request_ids` | `array` | No | Unique identifiers of the requests for access via fine-grained personal access token. |
| `path` | `string` | No | The path of the artifact. |
| `permissions` | `array` | Yes | The permissions granted to the user access token. |
| `predicate_type` | `string` | No | Optional filter for fetching attestations with a given predicate type. |
| `private_repos` | `int` | Yes |  |
| `properties` | `array` | Yes | List of custom property names and associated values to apply to the repositories. |
| `public_members_url` | `string` | Yes |  |
| `query_suite` | `string` | No | CodeQL query suite to be used. |
| `reason` | `string` | No | Reason for approving or denying the request. |
| `registry_url` | `string` | Yes | The base URL of the artifact registry. |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `repository` | `string` | No | The repository name within the registry. |
| `repository_names` | `array` | Yes | The names of repositories that the custom property values will be applied to. |
| `repository_selection` | `string` | Yes | Describe whether all repositories have been selected or there's a selection involved |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `seats` | `int` | No |  |
| `secret_scanning_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `secret_scanning_push_protection_custom_link` | `string` | No | If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret. |
| `secret_scanning_push_protection_custom_link_enabled` | `bool` | No | Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection. |
| `secret_scanning_push_protection_enabled_for_new_repositories` | `bool` | No | **Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. |
| `single_file_name` | `string` | Yes |  |
| `single_file_paths` | `array` | No |  |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `space` | `int` | Yes |  |
| `state` | `string` | Yes | The state of the member in the organization. |
| `status` | `string` | No | The status of the artifact (e.g., active, inactive). |
| `storage_records` | `array` | No |  |
| `subject_digests` | `array` | Yes | List of subject digests to fetch attestations for. |
| `suspended_at` | `string` | Yes |  |
| `suspended_by` | `array` | Yes | A GitHub user. |
| `target_id` | `int` | Yes | The ID of the user or organization this token is being scoped to. |
| `target_type` | `string` | Yes |  |
| `total_count` | `int` | No |  |
| `twitter_username` | `string` | No | The Twitter username of the company. |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Org()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Org()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Org()->load(["id" => "org_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Org()->remove(["id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Org()->update([
  "id" => "org_id",
  "username" => "username",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgEntity`

Create a new `OrgEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgHookEntity

```php
$org_hook = $client->OrgHook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | Yes | Determines if notifications are sent when the webhook is triggered. |
| `config` | `array` | Yes | Key/value pairs to provide settings for this webhook. |
| `created_at` | `string` | Yes |  |
| `deliveries_url` | `string` | No |  |
| `events` | `array` | Yes | Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrgHook()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrgHook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrgHook()->load(["id" => 1, "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrgHook()->update([
  "id" => 1,
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgHookEntity`

Create a new `OrgHookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgMembershipEntity

```php
$org_membership = $client->OrgMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `direct_membership` | `bool` | No | Whether the user has direct membership in the organization. |
| `enterprise_teams_providing_indirect_membership` | `array` | No | The slugs of the enterprise teams providing the user with indirect membership in the organization. |
| `id` | `string` | No |  |
| `organization` | `array` | Yes | A GitHub organization. |
| `organization_url` | `string` | Yes |  |
| `permissions` | `array` | Yes |  |
| `role` | `string` | Yes | The user's membership type in the organization. |
| `state` | `string` | Yes | The state of the member in the organization. |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |

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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrgMembership()->load(["id" => "org_membership_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrgMembership()->update([
  "id" => "org_membership_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgMembershipEntity`

Create a new `OrgMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationEntity

```php
$org_private_registry_configuration = $client->OrgPrivateRegistryConfiguration();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrgPrivateRegistryConfiguration()->load(["org_id" => "org_id", "secret_name" => "secret_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgPrivateRegistryConfigurationEntity`

Create a new `OrgPrivateRegistryConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity

```php
$org_private_registry_configuration_with_selected_repository = $client->OrgPrivateRegistryConfigurationWithSelectedRepository();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encrypted_value` | `string` | Yes | The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/re… |
| `id` | `string` | No |  |
| `key_id` | `string` | Yes | The ID of the key you used to encrypt the secret. |
| `registry_type` | `string` | Yes | The registry type. |
| `selected_repository_ids` | `array` | No | An array of repository IDs that can access the organization private registry. |
| `url` | `string` | Yes | The URL of the private registry. |
| `username` | `string` | No | The username to use when authenticating with the private registry. |
| `visibility` | `string` | Yes | Which type of organization repositories have access to the private registry. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrgPrivateRegistryConfigurationWithSelectedRepository()->create([
  "id" => null, // string
  "encrypted_value" => null, // string
  "key_id" => null, // string
  "registry_type" => null, // string
  "url" => null, // string
  "visibility" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity`

Create a new `OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgRepoCustomPropertyValueEntity

```php
$org_repo_custom_property_value = $client->OrgRepoCustomPropertyValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `properties` | `array` | Yes | List of custom property names and associated values |
| `repository_full_name` | `string` | Yes |  |
| `repository_id` | `int` | Yes |  |
| `repository_name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrgRepoCustomPropertyValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgRepoCustomPropertyValueEntity`

Create a new `OrgRepoCustomPropertyValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationActionsSecretEntity

```php
$organization_actions_secret = $client->OrganizationActionsSecret();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationActionsSecret()->load(["id" => "organization_actions_secret_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationActionsSecretEntity`

Create a new `OrganizationActionsSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationActionsVariableEntity

```php
$organization_actions_variable = $client->OrganizationActionsVariable();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationActionsVariable()->load(["id" => "organization_actions_variable_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationActionsVariableEntity`

Create a new `OrganizationActionsVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationDependabotSecretEntity

```php
$organization_dependabot_secret = $client->OrganizationDependabotSecret();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationDependabotSecret()->load(["id" => "organization_dependabot_secret_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationDependabotSecretEntity`

Create a new `OrganizationDependabotSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationInvitationEntity

```php
$organization_invitation = $client->OrganizationInvitation();
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
| `inviter` | `array` | Yes | A GitHub user. |
| `login` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `role` | `string` | No | The role for the new member. |
| `team_count` | `int` | Yes |  |
| `team_ids` | `array` | No | Specify IDs for the teams you want to invite new members to. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationInvitation()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationInvitation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationInvitationEntity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationProgrammaticAccessGrantEntity

```php
$organization_programmatic_access_grant = $client->OrganizationProgrammaticAccessGrant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_granted_at` | `string` | Yes | Date and time when the fine-grained personal access token was approved to access the organization. |
| `created_at` | `string` | Yes | Date and time when the request for access was created. |
| `id` | `int` | Yes | Unique identifier of the request for access via fine-grained personal access token. |
| `owner` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | Yes | Permissions requested, categorized by type of permission. |
| `reason` | `string` | Yes | Reason for requesting access. |
| `repositories_url` | `string` | Yes | URL to the list of repositories requested to be accessed via fine-grained personal access token. |
| `repository_selection` | `string` | Yes | Type of repository selection requested. |
| `token_expired` | `bool` | Yes | Whether the associated fine-grained personal access token has expired. |
| `token_expires_at` | `string` | Yes | Date and time when the associated fine-grained personal access token expires. |
| `token_id` | `int` | Yes | Unique identifier of the user's token. |
| `token_last_used_at` | `string` | Yes | Date and time when the associated fine-grained personal access token was last used for authentication. |
| `token_name` | `string` | Yes | The name given to the user's token. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationProgrammaticAccessGrant()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationProgrammaticAccessGrantEntity`

Create a new `OrganizationProgrammaticAccessGrantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationRoleEntity

```php
$organization_role = $client->OrganizationRole();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `string` | No | The system role from which this role inherits permissions. |
| `created_at` | `string` | Yes | The date and time the role was created. |
| `description` | `string` | No | A short description about who this role is for or what permissions it grants. |
| `id` | `int` | Yes | The unique identifier of the role. |
| `name` | `string` | Yes | The name of the role. |
| `organization` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | Yes | A list of permissions included in this role. |
| `source` | `string` | No | Source answers the question, "where did this role come from?" |
| `updated_at` | `string` | Yes | The date and time the role was last updated. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationRole()->load(["id" => 1, "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationRoleEntity`

Create a new `OrganizationRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationSecretScanningAlertEntity

```php
$organization_secret_scanning_alert = $client->OrganizationSecretScanningAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `mixed` | No | Details on the location where the token was initially detected. |
| `has_more_locations` | `bool` | No | A boolean value representing whether or not the token in the alert was detected in more than one location. |
| `html_url` | `string` | No | The GitHub URL of the alert resource. |
| `is_base64_encoded` | `bool` | No | A boolean value representing whether or not alert is base64 encoded |
| `locations_url` | `string` | No | The REST API URL of the code locations for this alert. |
| `multi_repo` | `bool` | No | Whether the detected secret was found in multiple repositories in the same organization or enterprise. |
| `number` | `int` | No | The security alert number. |
| `publicly_leaked` | `bool` | No | Whether the secret was publicly leaked. |
| `push_protection_bypass_request_comment` | `string` | No | An optional comment when requesting a push protection bypass. |
| `push_protection_bypass_request_html_url` | `string` | No | The URL to a push protection bypass request. |
| `push_protection_bypass_request_reviewer` | `array` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `array` | Yes | A GitHub user. |
| `repository` | `array` | Yes | A GitHub repository. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | The comment that was optionally added when this alert was closed |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `array` | Yes | A GitHub user. |
| `secret` | `string` | No | The secret that was detected. |
| `secret_type` | `string` | No | The type of secret that secret scanning detected. |
| `secret_type_display_name` | `string` | No | User-friendly name for the detected secret, matching the `secret_type`. |
| `state` | `string` | No | Sets the state of the secret scanning alert. |
| `updated_at` | `string` | No | The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `url` | `string` | No | The REST API URL of the alert resource. |
| `validity` | `string` | No | The token status as of the latest validity check. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationSecretScanningAlert()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationSecretScanningAlertEntity`

Create a new `OrganizationSecretScanningAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OutsideCollaboratorEntity

```php
$outside_collaborator = $client->OutsideCollaborator();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OutsideCollaborator()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OutsideCollaboratorEntity`

Create a new `OutsideCollaboratorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageEntity

```php
$package = $client->Package();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `docker` | `array` | Yes |  |
| `github_id` | `int` | Yes | Unique identifier of the package. |
| `html_url` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the package. |
| `included_gigabytes_bandwidth` | `int` | Yes | Free storage space (GB) for GitHub Packages. |
| `license` | `string` | No |  |
| `metadata` | `array` | Yes |  |
| `name` | `string` | Yes | The name of the package. |
| `owner` | `array` | Yes | A GitHub user. |
| `package_html_url` | `string` | Yes |  |
| `package_type` | `string` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Package()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Package()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Package()->load(["package_name" => "package_name", "package_type" => "package_type"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Package()->remove(["package_name" => "package_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageEntity`

Create a new `PackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PageEntity

```php
$page = $client->Page();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_type` | `string` | No | The process in which the Page will be built. |
| `cname` | `string` | Yes | The Pages site's custom domain |
| `custom_404` | `bool` | Yes | Whether the Page has a custom 404 page. |
| `html_url` | `string` | No | The web address the Page can be accessed from. |
| `https_certificate` | `array` | Yes |  |
| `https_enforced` | `bool` | No | Whether https is enabled on the domain |
| `pending_domain_unverified_at` | `string` | No | The timestamp when a pending domain becomes unverified. |
| `protected_domain_state` | `string` | No | The state if the domain is verified |
| `public` | `bool` | Yes | Whether the GitHub Pages site is publicly visible. |
| `source` | `array` | Yes | The source branch and directory used to publish your Pages site. |
| `status` | `string` | Yes | The status of the most recent build of the Page. |
| `url` | `string` | Yes | The API address for accessing this Page resource. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Page()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Page()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PageEntity`

Create a new `PageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PageBuildEntity

```php
$page_build = $client->PageBuild();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `duration` | `int` | Yes |  |
| `error` | `array` | Yes |  |
| `id` | `string` | No |  |
| `pusher` | `array` | Yes | A GitHub user. |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PageBuild()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PageBuild()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PageBuildEntity`

Create a new `PageBuildEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PageBuildStatusEntity

```php
$page_build_status = $client->PageBuildStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PageBuildStatus()->create([
  "owner" => null, // string
  "repo" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PageBuildStatusEntity`

Create a new `PageBuildStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PageDeploymentEntity

```php
$page_deployment = $client->PageDeployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artifact_id` | `float` | No | The ID of an artifact that contains the .zip or .tar of static assets to deploy. |
| `artifact_url` | `string` | No | The URL of an artifact that contains the .zip or .tar of static assets to deploy. |
| `environment` | `string` | No | The target environment for this GitHub Pages deployment. |
| `oidc_token` | `string` | Yes | The OIDC token issued by GitHub Actions certifying the origin of the deployment. |
| `pages_build_version` | `string` | Yes | A unique string that represents the version of the build for this deployment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PageDeployment()->create([
  "owner" => null, // string
  "repo" => null, // string
  "oidc_token" => null, // string
  "pages_build_version" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PageDeploymentEntity`

Create a new `PageDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PagesDeploymentStatusEntity

```php
$pages_deployment_status = $client->PagesDeploymentStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No | The current status of the deployment. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PagesDeploymentStatus()->create([
  "deployment_id" => null, // string
  "owner" => null, // string
  "repo" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PagesDeploymentStatus()->load(["owner" => "owner", "pages_deployment_id" => "pages_deployment_id", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PagesDeploymentStatusEntity`

Create a new `PagesDeploymentStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PagesHealthCheckEntity

```php
$pages_health_check = $client->PagesHealthCheck();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alt_domain` | `array` | No |  |
| `domain` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PagesHealthCheck()->load(["owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PagesHealthCheckEntity`

Create a new `PagesHealthCheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ParticipationEntity

```php
$participation = $client->Participation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `array` | Yes |  |
| `owner` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Participation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ParticipationEntity`

Create a new `ParticipationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PendingDeploymentEntity

```php
$pending_deployment = $client->PendingDeployment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_user_can_approve` | `bool` | Yes | Whether the currently authenticated user can approve the deployment |
| `environment` | `array` | Yes |  |
| `reviewers` | `array` | Yes | The people or teams that may approve jobs that reference the environment. |
| `wait_timer` | `int` | Yes | The set duration of the wait timer |
| `wait_timer_started_at` | `string` | Yes | The time that the wait timer began. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PendingDeployment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PendingDeploymentEntity`

Create a new `PendingDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PorterAuthorEntity

```php
$porter_author = $client->PorterAuthor();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PorterAuthor()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PorterAuthor()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PorterAuthorEntity`

Create a new `PorterAuthorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PorterLargeFileEntity

```php
$porter_large_file = $client->PorterLargeFile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oid` | `string` | Yes |  |
| `path` | `string` | Yes |  |
| `ref_name` | `string` | Yes |  |
| `size` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PorterLargeFile()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PorterLargeFileEntity`

Create a new `PorterLargeFileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrivateRegistryEntity

```php
$private_registry = $client->PrivateRegistry();
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
| `selected_repository_ids` | `array` | No | An array of repository IDs that can access the organization private registry. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PrivateRegistry()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PrivateRegistry()->load(["org_id" => "org_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PrivateRegistry()->remove(["id" => "id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PrivateRegistry()->update([
  "id" => "id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrivateRegistryEntity`

Create a new `PrivateRegistryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrivateUserEntity

```php
$private_user = $client->PrivateUser();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrivateUserEntity`

Create a new `PrivateUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `body` | `string` | No | The description of the project. |
| `columns_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectCollaboratorPermissionEntity

```php
$project_collaborator_permission = $client->ProjectCollaboratorPermission();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectCollaboratorPermission()->load(["project_id" => 1, "username" => "username"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectCollaboratorPermissionEntity`

Create a new `ProjectCollaboratorPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectColumnEntity

```php
$project_column = $client->ProjectColumn();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectColumn()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectColumn()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectColumn()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectColumn()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectColumnEntity`

Create a new `ProjectColumnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsClassicEntity

```php
$projects_classic = $client->ProjectsClassic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `position` | `string` | Yes | The position of the column in a project. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectsClassic()->create([
  "column_id" => null, // int
  "position" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectsClassic()->remove(["column_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectsClassic()->update([
  "project_id" => 1,
  "username" => "username",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsClassicEntity`

Create a new `ProjectsClassicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsV2Entity

```php
$projects_v2 = $client->ProjectsV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes | The time when the project was closed. |
| `created_at` | `string` | Yes | The time when the project was created. |
| `creator` | `array` | Yes | A GitHub user. |
| `deleted_at` | `string` | Yes | The time when the project was deleted. |
| `deleted_by` | `array` | Yes | A GitHub user. |
| `description` | `string` | Yes | A short description of the project. |
| `id` | `float` | Yes | The unique identifier of the project. |
| `is_template` | `bool` | No | Whether this project is a template |
| `latest_status_update` | `array` | Yes | An status update belonging to a project |
| `node_id` | `string` | Yes | The node ID of the project. |
| `number` | `int` | Yes | The project number. |
| `owner` | `array` | Yes | A GitHub user. |
| `public` | `bool` | Yes | Whether the project is visible to anyone with access to the owner. |
| `short_description` | `string` | Yes | A concise summary of the project. |
| `state` | `string` | No | The current state of the project. |
| `title` | `string` | Yes | The project title. |
| `updated_at` | `string` | Yes | The time when the project was last updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectsV2()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectsV2()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsV2Entity`

Create a new `ProjectsV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsV2FieldEntity

```php
$projects_v2_field = $client->ProjectsV2Field();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `array` | No | Configuration for iteration fields. |
| `created_at` | `string` | Yes | The time when the field was created. |
| `data_type` | `string` | Yes | The field's data type. |
| `id` | `int` | Yes | The unique identifier of the field. |
| `name` | `string` | Yes | The name of the field. |
| `node_id` | `string` | No | The node ID of the field. |
| `options` | `array` | No | The options available for single select fields. |
| `project_url` | `string` | Yes | The API URL of the project that contains the field. |
| `updated_at` | `string` | Yes | The time when the field was last updated. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectsV2Field()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectsV2Field()->load(["id" => 1, "projects_v2_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsV2FieldEntity`

Create a new `ProjectsV2FieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsV2ItemSimpleEntity

```php
$projects_v2_item_simple = $client->ProjectsV2ItemSimple();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | Yes | The numeric ID of the issue or pull request to add to the project. |
| `type` | `string` | Yes | The type of item to add to the project. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectsV2ItemSimple()->create([
  "project_number" => null, // int
  "id" => null, // int
  "type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsV2ItemSimpleEntity`

Create a new `ProjectsV2ItemSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectsV2ItemWithContentEntity

```php
$projects_v2_item_with_content = $client->ProjectsV2ItemWithContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | Yes | The time when the item was archived. |
| `content` | `array` | No | The content of the item, which varies by content type. |
| `content_type` | `string` | Yes | The type of content tracked in a project item |
| `created_at` | `string` | Yes | The time when the item was created. |
| `creator` | `array` | Yes | A GitHub user. |
| `fields` | `array` | No | The fields and values associated with this item. |
| `id` | `float` | Yes | The unique identifier of the project item. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectsV2ItemWithContent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectsV2ItemWithContent()->load(["item_id" => 1, "projects_v2_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectsV2ItemWithContent()->update([
  "item_id" => 1,
  "projects_v2_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectsV2ItemWithContentEntity`

Create a new `ProjectsV2ItemWithContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProtectedBranchEntity

```php
$protected_branch = $client->ProtectedBranch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_deletions` | `array` | Yes | Allows deletion of the protected branch by anyone with write access to the repository. |
| `allow_force_pushes` | `array` | Yes | Permits force pushes to the protected branch by anyone with write access to the repository. |
| `allow_fork_syncing` | `array` | No | Whether users can pull changes from upstream when the branch is locked. |
| `block_creations` | `array` | Yes | If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. |
| `enforce_admins` | `array` | Yes | Enforce all configured restrictions for administrators. |
| `lock_branch` | `array` | No | Whether to set the branch as read-only. |
| `required_conversation_resolution` | `array` | No | Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. |
| `required_linear_history` | `array` | Yes | Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| `required_pull_request_reviews` | `array` | Yes | Require at least one approving review on a pull request, before merging. |
| `required_signatures` | `array` | Yes |  |
| `required_status_checks` | `array` | Yes | Status Check Policy |
| `restrictions` | `array` | Yes | Branch Restriction Policy |
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProtectedBranch()->update([
  "branch_id" => "branch_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProtectedBranchEntity`

Create a new `ProtectedBranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProtectedBranchAdminEnforcedEntity

```php
$protected_branch_admin_enforced = $client->ProtectedBranchAdminEnforced();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProtectedBranchAdminEnforced()->create([
  "branch_id" => null, // string
  "owner" => null, // string
  "repo" => null, // string
  "enabled" => null, // bool
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProtectedBranchAdminEnforced()->load(["branch_id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProtectedBranchAdminEnforcedEntity`

Create a new `ProtectedBranchAdminEnforcedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProtectedBranchPullRequestReviewEntity

```php
$protected_branch_pull_request_review = $client->ProtectedBranchPullRequestReview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_pull_request_allowances` | `array` | No | Allow specific users, teams, or apps to bypass pull request requirements. |
| `dismiss_stale_reviews` | `bool` | Yes | Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit. |
| `dismissal_restrictions` | `array` | No | Specify which users, teams, and apps can dismiss pull request reviews. |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProtectedBranchPullRequestReview()->load(["branch_id" => "branch_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProtectedBranchPullRequestReview()->update([
  "branch_id" => "branch_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProtectedBranchPullRequestReviewEntity`

Create a new `ProtectedBranchPullRequestReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicMemberEntity

```php
$public_member = $client->PublicMember();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PublicMember()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicMemberEntity`

Create a new `PublicMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PullEntity

```php
$pull = $client->Pull();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `additions` | `int` | Yes |  |
| `assignee` | `array` | Yes | A GitHub user. |
| `assignees` | `array` | No |  |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `auto_merge` | `array` | Yes | The status of auto merging a pull request. |
| `base` | `array` | Yes | The name of the branch you want the changes pulled into. |
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
| `head` | `array` | Yes | The name of the branch where your changes are implemented. |
| `head_repo` | `string` | No | The name of the repository where the changes in the pull request were made. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `issue` | `int` | No | An issue in the repository to convert to a pull request. |
| `issue_url` | `string` | Yes |  |
| `labels` | `array` | Yes |  |
| `links` | `array` | Yes |  |
| `locked` | `bool` | Yes |  |
| `maintainer_can_modify` | `bool` | Yes | Indicates whether maintainers can modify the pull request. |
| `merge_commit_sha` | `string` | Yes |  |
| `merge_method` | `string` | No | The merge method to use. |
| `mergeable` | `bool` | Yes |  |
| `mergeable_state` | `string` | Yes |  |
| `merged` | `bool` | Yes |  |
| `merged_at` | `string` | Yes |  |
| `merged_by` | `array` | Yes | A GitHub user. |
| `message` | `string` | Yes |  |
| `milestone` | `array` | Yes | A collection of related issues and pull requests. |
| `node_id` | `string` | Yes |  |
| `number` | `int` | Yes | Number uniquely identifying the pull request within its repository. |
| `patch_url` | `string` | Yes |  |
| `rebaseable` | `bool` | No |  |
| `requested_reviewers` | `array` | No |  |
| `requested_teams` | `array` | No |  |
| `review_comment_url` | `string` | Yes |  |
| `review_comments` | `int` | Yes |  |
| `review_comments_url` | `string` | Yes |  |
| `sha` | `string` | Yes | SHA that pull request head must match to allow merge. |
| `state` | `string` | Yes | State of this Pull Request. |
| `statuses_url` | `string` | Yes |  |
| `title` | `string` | Yes | The title of the pull request. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Pull()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Pull()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Pull()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Pull()->remove(["comment_id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Pull()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PullEntity`

Create a new `PullEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PullRequestReviewEntity

```php
$pull_request_review = $client->PullRequestReview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_association` | `string` | Yes | How the author is associated with the repository. |
| `body` | `string` | Yes | The text of the review. |
| `body_html` | `string` | No |  |
| `body_text` | `string` | No |  |
| `comments` | `array` | No | Use the following table to specify the location, destination, and contents of the draft review comment. |
| `commit_id` | `string` | Yes | A commit SHA for the review. |
| `event` | `string` | Yes | The review action you want to perform. |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the review |
| `links` | `array` | Yes |  |
| `message` | `string` | Yes | The message for the pull request review dismissal |
| `node_id` | `string` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `submitted_at` | `string` | No |  |
| `teams` | `array` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |
| `users` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PullRequestReview()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PullRequestReview()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PullRequestReview()->load(["id" => 1, "owner" => "owner", "pull_id" => 1, "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PullRequestReview()->remove(["id" => 1, "owner" => "owner", "pull_id" => 1, "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PullRequestReview()->update([
  "id" => 1,
  "owner" => "owner",
  "pull_id" => 1,
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PullRequestReviewEntity`

Create a new `PullRequestReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PullRequestReviewCommentEntity

```php
$pull_request_review_comment = $client->PullRequestReviewComment();
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
| `links` | `array` | Yes |  |
| `node_id` | `string` | Yes | The node ID of the pull request review comment. |
| `original_commit_id` | `string` | Yes | The SHA of the original commit to which the comment applies. |
| `original_line` | `int` | No | The line of the blob to which the comment applies. |
| `original_position` | `int` | No | The index of the original line in the diff to which the comment applies. |
| `original_start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `path` | `string` | Yes | The relative path of the file to which the comment applies. |
| `position` | `int` | No | The line index in the diff to which the comment applies. |
| `pull_request_review_id` | `int` | Yes | The ID of the pull request review to which the comment belongs. |
| `pull_request_url` | `string` | Yes | URL for the pull request that the review comment belongs to. |
| `reactions` | `array` | Yes |  |
| `side` | `string` | No | The side of the diff to which the comment applies. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | URL for the pull request review comment |
| `user` | `array` | Yes | A GitHub user. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PullRequestReviewComment()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PullRequestReviewComment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PullRequestReviewComment()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PullRequestReviewComment()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PullRequestReviewCommentEntity`

Create a new `PullRequestReviewCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PullRequestSimpleEntity

```php
$pull_request_simple = $client->PullRequestSimple();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reviewers` | `array` | No | An array of user `login`s that will be requested. |
| `team_reviewers` | `array` | No | An array of team `slug`s that will be requested. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PullRequestSimple()->create([
  "owner" => null, // string
  "pull_number" => null, // int
  "repo" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PullRequestSimple()->remove(["owner" => "owner", "pull_number" => 1, "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PullRequestSimpleEntity`

Create a new `PullRequestSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RateLimitEntity

```php
$rate_limit = $client->RateLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rate` | `array` | Yes |  |
| `resources` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RateLimit()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RateLimitEntity`

Create a new `RateLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReactionEntity

```php
$reaction = $client->Reaction();
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
| `user` | `array` | Yes | A GitHub user. |
| `user_view_type` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Reaction()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Reaction()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Reaction()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReactionEntity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReferrerEntity

```php
$referrer = $client->Referrer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `referrer` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Referrer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReferrerEntity`

Create a new `ReferrerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseEntity

```php
$release = $client->Release();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assets` | `array` | Yes |  |
| `assets_url` | `string` | Yes |  |
| `author` | `array` | Yes | A GitHub user. |
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
| `reactions` | `array` | Yes |  |
| `size` | `int` | Yes |  |
| `state` | `string` | Yes | State of the release asset. |
| `tag_name` | `string` | Yes | The name of the tag. |
| `tarball_url` | `string` | Yes |  |
| `target_commitish` | `string` | Yes | Specifies the commitish value that determines where the Git tag is created from. |
| `updated_at` | `string` | No |  |
| `upload_url` | `string` | Yes |  |
| `uploader` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Release()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Release()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Release()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Release()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseEntity`

Create a new `ReleaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseAssetEntity

```php
$release_asset = $client->ReleaseAsset();
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
| `uploader` | `array` | No | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReleaseAsset()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReleaseAsset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReleaseAsset()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ReleaseAsset()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseAssetEntity`

Create a new `ReleaseAssetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReleaseNotesContentEntity

```php
$release_notes_content = $client->ReleaseNotesContent();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReleaseNotesContent()->create([
  "owner" => null, // string
  "repo" => null, // string
  "body" => null, // string
  "name" => null, // string
  "tag_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReleaseNotesContentEntity`

Create a new `ReleaseNotesContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemoveEntity

```php
$remove = $client->Remove();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usernames` | `array` | Yes | The GitHub user handles to be removed from the team. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Remove()->create([
  "enterprise" => null, // string
  "team_id" => null, // string
  "usernames" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemoveEntity`

Create a new `RemoveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepoEntity

```php
$repo = $client->Repo();
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
| `app` | `array` | Yes | A GitHub App that is providing a custom deployment protection rule. |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes | Whether the repository is archived. |
| `assignees_url` | `string` | Yes |  |
| `attestations` | `array` | No |  |
| `blobs_url` | `string` | Yes |  |
| `branches_url` | `string` | Yes |  |
| `build_type` | `string` | No | The process by which the GitHub Pages site will be built. |
| `bundle` | `array` | Yes | The attestation's Sigstore Bundle. |
| `client_payload` | `array` | No | JSON payload with extra information about the webhook event that your action or workflow may use. |
| `clone_url` | `string` | Yes |  |
| `cname` | `string` | No | Specify a custom domain for the repository. |
| `code_search_index_status` | `array` | No | The status of the code search index for this repository |
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
| `deployment_branch_policy` | `array` | Yes | The type of deployment branch policy for this environment. |
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
| `license` | `array` | Yes | License Simple |
| `links` | `array` | No |  |
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
| `owner` | `array` | Yes | A GitHub user. |
| `path` | `string` | No |  |
| `permissions` | `array` | Yes |  |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `properties` | `array` | Yes | A list of custom property names and associated values to apply to the repositories. |
| `protection_rules` | `array` | No | Built-in deployment protection rules for the environment. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `sha` | `string` | No |  |
| `size` | `int` | No | The size of the repository, in kilobytes. |
| `slug` | `string` | Yes | The slugified name of the deployment protection rule integration. |
| `source` | `mixed` | No |  |
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
| `team_ids` | `array` | No | ID of the team or teams to add to the repository. |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Repo()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Repo()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->remove(["owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Repo()->update([
  "branch_id" => "branch_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepoEntity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryEntity

```php
$repository = $client->Repository();
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
| `code_search_index_status` | `array` | No | The status of the code search index for this repository |
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
| `license` | `array` | Yes | License Simple |
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
| `owner` | `array` | Yes | A GitHub user. |
| `permissions` | `array` | Yes |  |
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
| `topics` | `array` | No |  |
| `trees_url` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `use_squash_pr_title_as_default` | `bool` | No | Whether a squash merge commit can use the pull request title as default. |
| `visibility` | `string` | No | The repository visibility: public, private, or internal. |
| `watchers` | `int` | Yes |  |
| `watchers_count` | `int` | Yes |  |
| `web_commit_signoff_required` | `bool` | No | Whether to require contributors to sign off on web-based commits |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Repository()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryEntity`

Create a new `RepositoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryAdvisoryEntity

```php
$repository_advisory = $client->RepositoryAdvisory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `mixed` | Yes | The author of the advisory. |
| `closed_at` | `string` | Yes | The date and time of when the advisory was closed, in ISO 8601 format. |
| `collaborating_teams` | `array` | Yes | A list of teams that collaborate on the advisory. |
| `collaborating_users` | `array` | Yes | A list of users that collaborate on the advisory. |
| `created_at` | `string` | Yes | The date and time of when the advisory was created, in ISO 8601 format. |
| `credits` | `array` | Yes | A list of users receiving credit for their participation in the security advisory. |
| `credits_detailed` | `array` | Yes |  |
| `cve_id` | `string` | Yes | The Common Vulnerabilities and Exposures (CVE) ID. |
| `cvss` | `array` | Yes |  |
| `cvss_severities` | `array` | No |  |
| `cvss_vector_string` | `string` | No | The CVSS vector that calculates the severity of the advisory. |
| `cwe_ids` | `array` | Yes | A list of only the CWE IDs. |
| `cwes` | `array` | Yes |  |
| `description` | `string` | Yes | A detailed description of what the advisory entails. |
| `ghsa_id` | `string` | Yes | The GitHub Security Advisory ID. |
| `html_url` | `string` | Yes | The URL for the advisory. |
| `identifiers` | `array` | Yes |  |
| `private_fork` | `mixed` | Yes | A temporary private fork of the advisory's repository for collaborating on a fix. |
| `published_at` | `string` | Yes | The date and time of when the advisory was published, in ISO 8601 format. |
| `publisher` | `mixed` | Yes | The publisher of the advisory. |
| `severity` | `string` | Yes | The severity of the advisory. |
| `start_private_fork` | `bool` | No | Whether to create a temporary private fork of the repository to collaborate on a fix. |
| `state` | `string` | Yes | The state of the advisory. |
| `submission` | `array` | Yes |  |
| `summary` | `string` | Yes | A short summary of the advisory. |
| `updated_at` | `string` | Yes | The date and time of when the advisory was last updated, in ISO 8601 format. |
| `url` | `string` | Yes | The API URL for the advisory. |
| `vulnerabilities` | `array` | Yes | A product affected by the vulnerability detailed in a repository security advisory. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryAdvisory()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryAdvisory()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryAdvisory()->load(["ghsa_id" => "ghsa_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryAdvisory()->update([
  "ghsa_id" => "ghsa_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryAdvisoryEntity`

Create a new `RepositoryAdvisoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryCollaboratorPermissionEntity

```php
$repository_collaborator_permission = $client->RepositoryCollaboratorPermission();
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
| `permissions` | `array` | Yes |  |
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryCollaboratorPermission()->load(["owner" => "owner", "repo" => "repo", "username" => "username"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryCollaboratorPermissionEntity`

Create a new `RepositoryCollaboratorPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryInvitationEntity

```php
$repository_invitation = $client->RepositoryInvitation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `expired` | `bool` | No | Whether or not the invitation has expired |
| `html_url` | `string` | Yes |  |
| `id` | `int` | Yes | Unique identifier of the repository invitation. |
| `invitee` | `array` | Yes | A GitHub user. |
| `inviter` | `array` | Yes | A GitHub user. |
| `node_id` | `string` | Yes |  |
| `permission` | `string` | No | The permission to grant the collaborator. |
| `permissions` | `string` | Yes | The permission associated with the invitation. |
| `repository` | `array` | Yes | Minimal Repository |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryInvitation()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryInvitation()->update([
  "owner" => "owner",
  "repo" => "repo",
  "username" => "username",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryInvitationEntity`

Create a new `RepositoryInvitationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryRuleDetailedEntity

```php
$repository_rule_detailed = $client->RepositoryRuleDetailed();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameters` | `array` | No |  |
| `ruleset_id` | `int` | No |  |
| `ruleset_source` | `string` | No |  |
| `ruleset_source_type` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryRuleDetailed()->load(["branch" => "branch", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryRuleDetailedEntity`

Create a new `RepositoryRuleDetailedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryRulesetEntity

```php
$repository_ruleset = $client->RepositoryRuleset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bypass_actors` | `array` | No | The actors that can bypass the rules in this ruleset |
| `conditions` | `mixed` | No | Parameters for a repository ruleset ref name condition |
| `created_at` | `string` | No |  |
| `current_user_can_bypass` | `string` | No | The bypass type of the user making the API request for this ruleset. |
| `enforcement` | `string` | Yes | The enforcement level of the ruleset. |
| `id` | `int` | Yes | The ID of the ruleset |
| `links` | `array` | No |  |
| `name` | `string` | Yes | The name of the ruleset |
| `node_id` | `string` | No |  |
| `rules` | `array` | No | An array of rules within the ruleset. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryRuleset()->create([
  "org_id" => null, // string
  "enforcement" => null, // string
  "id" => null, // int
  "name" => null, // string
  "source" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryRuleset()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryRuleset()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryRuleset()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryRulesetEntity`

Create a new `RepositoryRulesetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositorySubscriptionEntity

```php
$repository_subscription = $client->RepositorySubscription();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositorySubscription()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositorySubscription()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositorySubscriptionEntity`

Create a new `RepositorySubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReviewCommentEntity

```php
$review_comment = $client->ReviewComment();
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
| `links` | `array` | Yes |  |
| `node_id` | `string` | Yes |  |
| `original_commit_id` | `string` | Yes |  |
| `original_line` | `int` | No | The original line of the blob to which the comment applies. |
| `original_position` | `int` | Yes |  |
| `original_start_line` | `int` | No | The original first line of the range for a multi-line comment. |
| `path` | `string` | Yes |  |
| `position` | `int` | Yes |  |
| `pull_request_review_id` | `int` | Yes |  |
| `pull_request_url` | `string` | Yes |  |
| `reactions` | `array` | Yes |  |
| `side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `start_line` | `int` | No | The first line of the range for a multi-line comment. |
| `start_side` | `string` | No | The side of the first line of the range for a multi-line comment. |
| `subject_type` | `string` | No | The level at which the comment is targeted, can be a diff line or a file. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReviewComment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReviewCommentEntity`

Create a new `ReviewCommentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RuleSuiteEntity

```php
$rule_suite = $client->RuleSuite();
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
| `rule_evaluations` | `array` | No | Details on the evaluated rules. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RuleSuite()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RuleSuite()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RuleSuiteEntity`

Create a new `RuleSuiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RulesetVersionEntity

```php
$ruleset_version = $client->RulesetVersion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | Yes | The actor who updated the ruleset |
| `id` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RulesetVersion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RulesetVersionEntity`

Create a new `RulesetVersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RulesetVersionWithStateEntity

```php
$ruleset_version_with_state = $client->RulesetVersionWithState();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | Yes | The actor who updated the ruleset |
| `state` | `array` | Yes | The state of the ruleset version |
| `updated_at` | `string` | Yes |  |
| `version_id` | `int` | Yes | The ID of the previous version of the ruleset |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RulesetVersionWithState()->load(["ruleset_id" => 1, "version_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RulesetVersionWithStateEntity`

Create a new `RulesetVersionWithStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RunnerEntity

```php
$runner = $client->Runner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `busy` | `bool` | Yes |  |
| `ephemeral` | `bool` | No |  |
| `id` | `int` | Yes | The ID of the runner. |
| `labels` | `array` | Yes |  |
| `name` | `string` | Yes | The name of the runner. |
| `os` | `string` | Yes | The Operating System of the runner. |
| `runner_group_id` | `int` | No | The ID of the runner group. |
| `status` | `string` | Yes | The status of the runner. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Runner()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RunnerEntity`

Create a new `RunnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RunnerApplicationEntity

```php
$runner_application = $client->RunnerApplication();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RunnerApplication()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RunnerApplicationEntity`

Create a new `RunnerApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RunnerGroupEntity

```php
$runner_group = $client->RunnerGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allows_public_repositories` | `bool` | Yes | Whether the runner group can be used by `public` repositories. |
| `default` | `bool` | Yes |  |
| `hosted_runners_url` | `string` | No |  |
| `id` | `float` | Yes |  |
| `inherited` | `bool` | Yes |  |
| `inherited_allows_public_repositories` | `bool` | No |  |
| `name` | `string` | Yes | Name of the runner group. |
| `network_configuration_id` | `string` | No | The identifier of a hosted compute network configuration. |
| `restricted_to_workflows` | `bool` | No | If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array. |
| `runners` | `array` | No | List of runner IDs to add to the runner group. |
| `runners_url` | `string` | Yes |  |
| `selected_repositories_url` | `string` | No | Link to the selected repositories resource for this runner group. |
| `selected_repository_ids` | `array` | No | List of repository IDs that can access the runner group. |
| `selected_workflows` | `array` | No | List of workflows the runner group should be allowed to run. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RunnerGroup()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RunnerGroup()->load(["id" => 1, "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RunnerGroup()->update([
  "id" => 1,
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RunnerGroupEntity`

Create a new `RunnerGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_lock_reason` | `string` | No |  |
| `aliases` | `array` | No |  |
| `allow_auto_merge` | `bool` | No |  |
| `allow_forking` | `bool` | No |  |
| `allow_merge_commit` | `bool` | No |  |
| `allow_rebase_merge` | `bool` | No |  |
| `allow_squash_merge` | `bool` | No |  |
| `archive_url` | `string` | Yes |  |
| `archived` | `bool` | Yes |  |
| `assignee` | `array` | Yes | A GitHub user. |
| `assignees` | `array` | No |  |
| `assignees_url` | `string` | Yes |  |
| `author` | `array` | Yes | A GitHub user. |
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
| `commit` | `array` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `committer` | `array` | Yes | Metaproperties for Git author/committer information. |
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
| `issue_dependencies_summary` | `array` | Yes |  |
| `issue_events_url` | `string` | Yes |  |
| `issue_field_values` | `array` | No |  |
| `issues_url` | `string` | Yes |  |
| `keys_url` | `string` | Yes |  |
| `labels` | `array` | Yes |  |
| `labels_url` | `string` | Yes |  |
| `language` | `string` | No |  |
| `languages_url` | `string` | Yes |  |
| `last_modified_at` | `string` | No |  |
| `license` | `array` | Yes | License Simple |
| `line_numbers` | `array` | No |  |
| `location` | `string` | No |  |
| `locked` | `bool` | Yes |  |
| `login` | `string` | Yes |  |
| `logo_url` | `string` | No |  |
| `master_branch` | `string` | No |  |
| `merges_url` | `string` | Yes |  |
| `milestone` | `array` | Yes | A collection of related issues and pull requests. |
| `milestones_url` | `string` | Yes |  |
| `mirror_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `notifications_url` | `string` | Yes |  |
| `number` | `int` | Yes |  |
| `open_issues` | `int` | Yes |  |
| `open_issues_count` | `int` | Yes |  |
| `organizations_url` | `string` | Yes |  |
| `owner` | `array` | Yes | A GitHub user. |
| `parents` | `array` | Yes |  |
| `path` | `string` | Yes |  |
| `performed_via_github_app` | `array` | Yes | GitHub apps are a new way to extend GitHub. |
| `permissions` | `array` | Yes |  |
| `private` | `bool` | Yes |  |
| `public_gists` | `int` | No |  |
| `public_repos` | `int` | No |  |
| `pull_request` | `array` | Yes |  |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `array` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `related` | `array` | No |  |
| `released` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repository` | `array` | Yes | A repository on GitHub. |
| `repository_count` | `int` | No |  |
| `repository_url` | `string` | Yes |  |
| `score` | `float` | Yes |  |
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
| `sub_issues_summary` | `array` | Yes |  |
| `subscribers_url` | `string` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `subscriptions_url` | `string` | Yes |  |
| `suspended_at` | `string` | No |  |
| `svn_url` | `string` | Yes |  |
| `tags_url` | `string` | Yes |  |
| `teams_url` | `string` | Yes |  |
| `temp_clone_token` | `string` | No |  |
| `text_matches` | `array` | No |  |
| `timeline_url` | `string` | No |  |
| `title` | `string` | Yes |  |
| `topics` | `array` | No |  |
| `trees_url` | `string` | Yes |  |
| `type` | `array` | Yes | The type of issue. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `user` | `array` | Yes | A GitHub user. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningEntity

```php
$secret_scanning = $client->SecretScanning();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_settings` | `array` | No | Pattern settings for custom patterns. |
| `pattern_config_version` | `string` | No | The updated pattern configuration version. |
| `provider_pattern_settings` | `array` | No | Pattern settings for provider patterns. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SecretScanning()->update([
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningEntity`

Create a new `SecretScanningEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningAlertEntity

```php
$secret_scanning_alert = $client->SecretScanningAlert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `first_location_detected` | `mixed` | No | Details on the location where the token was initially detected. |
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
| `push_protection_bypass_request_reviewer` | `array` | Yes | A GitHub user. |
| `push_protection_bypass_request_reviewer_comment` | `string` | No | An optional comment when reviewing a push protection bypass. |
| `push_protection_bypassed` | `bool` | No | Whether push protection was bypassed for the detected secret. |
| `push_protection_bypassed_at` | `string` | No | The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `push_protection_bypassed_by` | `array` | Yes | A GitHub user. |
| `resolution` | `string` | No | **Required when the `state` is `resolved`.** The reason for resolving the alert. |
| `resolution_comment` | `string` | No | An optional comment to resolve an alert. |
| `resolved_at` | `string` | No | The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. |
| `resolved_by` | `array` | Yes | A GitHub user. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SecretScanningAlert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SecretScanningAlert()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SecretScanningAlert()->update([
  "id" => 1,
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningAlertEntity`

Create a new `SecretScanningAlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningLocationEntity

```php
$secret_scanning_location = $client->SecretScanningLocation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `details` | `mixed` | No |  |
| `type` | `string` | No | The location type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SecretScanningLocation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningLocationEntity`

Create a new `SecretScanningLocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningPatternConfigurationEntity

```php
$secret_scanning_pattern_configuration = $client->SecretScanningPatternConfiguration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_pattern_overrides` | `array` | No | Overrides for custom patterns defined by the organization. |
| `pattern_config_version` | `string` | No | The version of the entity. |
| `provider_pattern_overrides` | `array` | No | Overrides for partner patterns. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SecretScanningPatternConfiguration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningPatternConfigurationEntity`

Create a new `SecretScanningPatternConfigurationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningPushProtectionBypassEntity

```php
$secret_scanning_push_protection_bypass = $client->SecretScanningPushProtectionBypass();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SecretScanningPushProtectionBypass()->create([
  "owner" => null, // string
  "repo" => null, // string
  "placeholder_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningPushProtectionBypassEntity`

Create a new `SecretScanningPushProtectionBypassEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretScanningScanHistoryEntity

```php
$secret_scanning_scan_history = $client->SecretScanningScanHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backfill_scans` | `array` | No |  |
| `custom_pattern_backfill_scans` | `array` | No |  |
| `incremental_scans` | `array` | No |  |
| `pattern_update_scans` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SecretScanningScanHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretScanningScanHistoryEntity`

Create a new `SecretScanningScanHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecurityAdvisoryEntity

```php
$security_advisory = $client->SecurityAdvisory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SecurityAdvisory()->create([
  "id" => null, // string
  "owner" => null, // string
  "repo" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecurityAdvisoryEntity`

Create a new `SecurityAdvisoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SelectedActionEntity

```php
$selected_action = $client->SelectedAction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `github_owned_allowed` | `bool` | No | Whether GitHub-owned actions are allowed. |
| `patterns_allowed` | `array` | No | Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). |
| `verified_allowed` | `bool` | No | Whether actions from GitHub Marketplace verified creators are allowed. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SelectedAction()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SelectedActionEntity`

Create a new `SelectedActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SelfHostedRunnerEntity

```php
$self_hosted_runner = $client->SelfHostedRunner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled_repositories` | `string` | Yes | The policy that controls whether self-hosted runners can be used by repositories in the organization |
| `selected_repositories_url` | `string` | No | The URL to the endpoint for managing selected repositories for self-hosted runners in the organization |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SelfHostedRunner()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SelfHostedRunnerEntity`

Create a new `SelfHostedRunnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShortBlobEntity

```php
$short_blob = $client->ShortBlob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The new blob's content. |
| `encoding` | `string` | No | The encoding used for `content`. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ShortBlob()->create([
  "owner" => null, // string
  "repo" => null, // string
  "content" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShortBlobEntity`

Create a new `ShortBlobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShortBranchEntity

```php
$short_branch = $client->ShortBranch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `protected` | `bool` | Yes |  |
| `protection` | `array` | No | Branch Protection |
| `protection_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ShortBranch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShortBranchEntity`

Create a new `ShortBranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimpleClassroomEntity

```php
$simple_classroom = $client->SimpleClassroom();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimpleClassroomEntity`

Create a new `SimpleClassroomEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SimpleClassroomAssignmentEntity

```php
$simple_classroom_assignment = $client->SimpleClassroomAssignment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accepted` | `int` | Yes | The number of students that have accepted the assignment. |
| `classroom` | `array` | Yes | A GitHub Classroom classroom |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SimpleClassroomAssignment()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SimpleClassroomAssignmentEntity`

Create a new `SimpleClassroomAssignmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SocialAccountEntity

```php
$social_account = $client->SocialAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_urls` | `array` | Yes | Full URLs for the social media profiles to add. |
| `provider` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SocialAccount()->create([
  "account_urls" => null, // array
  "provider" => null, // string
  "url" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SocialAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SocialAccountEntity`

Create a new `SocialAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SshSigningKeyEntity

```php
$ssh_signing_key = $client->SshSigningKey();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SshSigningKey()->create([
  "created_at" => null, // string
  "id" => null, // int
  "key" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SshSigningKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SshSigningKey()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SshSigningKeyEntity`

Create a new `SshSigningKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusEntity

```php
$status = $client->Status();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `context` | `string` | No | A string label to differentiate this status from the status of other systems. |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Status()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Status()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusEntity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusCheckPolicyEntity

```php
$status_check_policy = $client->StatusCheckPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_id` | `int` | Yes |  |
| `checks` | `array` | Yes | The list of status checks to require in order to merge into this branch. |
| `context` | `string` | Yes |  |
| `contexts` | `array` | Yes | **Closing down notice**: The list of status checks to require in order to merge into this branch. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->StatusCheckPolicy()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->StatusCheckPolicy()->update([
  "branch_id" => "branch_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusCheckPolicyEntity`

Create a new `StatusCheckPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriberEntity

```php
$subscriber = $client->Subscriber();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Subscriber()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriberEntity`

Create a new `SubscriberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `commit` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `node_id` | `string` | Yes |  |
| `tarball_url` | `string` | Yes |  |
| `zipball_url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tag()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagProtectionEntity

```php
$tag_protection = $client->TagProtection();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TagProtection()->create([
  "owner" => null, // string
  "repo" => null, // string
  "pattern" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TagProtection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagProtectionEntity`

Create a new `TagProtectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
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
| `author` | `array` | Yes | A GitHub user. |
| `avatar_url` | `string` | Yes |  |
| `blobs_url` | `string` | Yes |  |
| `body` | `string` | Yes | The main text of the comment. |
| `body_html` | `string` | Yes |  |
| `body_version` | `string` | Yes | The current version of the body content. |
| `branches_url` | `string` | Yes |  |
| `clone_url` | `string` | Yes |  |
| `code_of_conduct` | `array` | Yes | Code Of Conduct |
| `collaborators_url` | `string` | Yes |  |
| `columns_url` | `string` | Yes |  |
| `comments_count` | `int` | Yes |  |
| `comments_url` | `string` | Yes |  |
| `commits_url` | `string` | Yes |  |
| `compare_url` | `string` | Yes |  |
| `contents_url` | `string` | Yes |  |
| `contributors_url` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes | A GitHub user. |
| `custom_properties` | `array` | No | The custom properties that were defined for the repository. |
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
| `inviter` | `array` | Yes | A GitHub user. |
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
| `license` | `array` | Yes | License Simple |
| `login` | `string` | Yes |  |
| `maintainers` | `array` | No | List GitHub usernames for organization members who will become team maintainers. |
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
| `organization` | `array` | Yes | Team Organization |
| `organization_permission` | `string` | No | The organization permission for this project. |
| `organizations_url` | `string` | Yes |  |
| `owner` | `array` | Yes | A GitHub user. |
| `owner_url` | `string` | Yes |  |
| `parent` | `array` | Yes | Groups of organization members that gives permissions on specified repositories. |
| `parent_team_id` | `int` | No | The ID of a team to set as the parent team. |
| `permission` | `string` | Yes | Permission that the team will have for its repositories |
| `permissions` | `array` | Yes |  |
| `pinned` | `bool` | Yes | Whether or not this discussion should be pinned for easy retrieval. |
| `privacy` | `string` | No | The level of privacy this team should have |
| `private` | `bool` | Yes | Whether the repository is private or public. |
| `pulls_url` | `string` | Yes |  |
| `pushed_at` | `string` | Yes |  |
| `reactions` | `array` | Yes |  |
| `received_events_url` | `string` | Yes |  |
| `releases_url` | `string` | Yes |  |
| `repo_names` | `array` | No | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. |
| `repos_count` | `int` | Yes |  |
| `repos_url` | `string` | Yes |  |
| `repositories_url` | `string` | Yes |  |
| `role` | `string` | Yes | The role of the user in the team. |
| `role_name` | `string` | No |  |
| `security_and_analysis` | `array` | No |  |
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
| `topics` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Team()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Team()->update([
  "id" => 1,
  "project_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamSimpleEntity

```php
$team_simple = $client->TeamSimple();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TeamSimple()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamSimpleEntity`

Create a new `TeamSimpleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreadEntity

```php
$thread = $client->Thread();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `last_read_at` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `repository` | `array` | Yes | Minimal Repository |
| `subject` | `array` | Yes |  |
| `subscription_url` | `string` | Yes |  |
| `unread` | `bool` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Thread()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Thread()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Thread()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreadEntity`

Create a new `ThreadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ThreadSubscriptionEntity

```php
$thread_subscription = $client->ThreadSubscription();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ThreadSubscription()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ThreadSubscription()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ThreadSubscriptionEntity`

Create a new `ThreadSubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopicEntity

```php
$topic = $client->Topic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `names` | `array` | Yes | An array of topics to add to the repository. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Topic()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Topic()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopicEntity`

Create a new `TopicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment` | `string` | No | Determines if the user has a direct, indirect, or mixed relationship to a role |
| `attestations_subject_digests` | `array` | No | Mapping of subject digest to bundles. |
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
| `inherited_from` | `array` | No | Team the user has gotten the role through |
| `location` | `string` | No | The new location of the user. |
| `login` | `string` | No |  |
| `name` | `string` | No | The new name of the user. |
| `node_id` | `string` | No |  |
| `organizations_url` | `string` | No |  |
| `owned_private_repos` | `int` | No |  |
| `page_info` | `array` | No | Information about the current page. |
| `plan` | `array` | No |  |
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
| `subject_digests` | `array` | Yes | List of subject digests to fetch attestations for. |
| `subscriptions_url` | `string` | No |  |
| `total_private_repos` | `int` | No |  |
| `twitter_username` | `string` | No | The new Twitter username of the user. |
| `two_factor_authentication` | `bool` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |
| `user_view_type` | `string` | No |  |
| `users` | `array` | Yes | The username for users |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->User()->create([
  "branch_id" => null, // string
  "owner" => null, // string
  "repo" => null, // string
  "private_repos" => null, // int
  "space" => null, // int
  "subject_digests" => null, // array
  "users" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->User()->remove(["gpg_key_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->User()->update([
  "id" => 1,
  "username" => "username",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserMarketplacePurchaseEntity

```php
$user_marketplace_purchase = $client->UserMarketplacePurchase();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `array` | Yes |  |
| `billing_cycle` | `string` | Yes |  |
| `free_trial_ends_on` | `string` | Yes |  |
| `next_billing_date` | `string` | Yes |  |
| `on_free_trial` | `bool` | Yes |  |
| `plan` | `array` | Yes | Marketplace Listing Plan |
| `unit_count` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserMarketplacePurchase()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserMarketplacePurchaseEntity`

Create a new `UserMarketplacePurchaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ViewEntity

```php
$view = $client->View();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `uniques` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->View()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ViewEntity`

Create a new `ViewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookConfigEntity

```php
$webhook_config = $client->WebhookConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The media type used to serialize the payloads. |
| `insecure_ssl` | `string` | No |  |
| `secret` | `string` | No | If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). |
| `url` | `string` | No | The URL to which the payloads will be delivered. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhookConfig()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->WebhookConfig()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookConfigEntity`

Create a new `WebhookConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Workflow()->update([
  "id" => "workflow_id",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowRunEntity

```php
$workflow_run = $client->WorkflowRun();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `array` | Yes | A GitHub user. |
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
| `head_commit` | `array` | Yes | A commit. |
| `head_repository` | `array` | Yes | Minimal Repository |
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
| `pull_requests` | `array` | Yes | Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. |
| `referenced_workflows` | `array` | No |  |
| `repository` | `array` | Yes | Minimal Repository |
| `rerun_url` | `string` | Yes | The URL to rerun the workflow run. |
| `run_attempt` | `int` | No | Attempt number of the run, 1 for first attempt and higher if the workflow was re-run. |
| `run_number` | `int` | Yes | The auto incrementing run number for the workflow run. |
| `run_started_at` | `string` | No | The start time of the latest run. |
| `status` | `string` | Yes |  |
| `triggering_actor` | `array` | Yes | A GitHub user. |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | The URL to the workflow run. |
| `workflow_id` | `int` | Yes | The ID of the parent workflow. |
| `workflow_url` | `string` | Yes | The URL to the workflow. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->WorkflowRun()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkflowRun()->load(["id" => 1, "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowRunEntity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowRunUsageEntity

```php
$workflow_run_usage = $client->WorkflowRunUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `array` | Yes |  |
| `UBUNTU` | `array` | Yes |  |
| `WINDOWS` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkflowRunUsage()->load(["owner" => "owner", "repo" => "repo", "run_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowRunUsageEntity`

Create a new `WorkflowRunUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowUsageEntity

```php
$workflow_usage = $client->WorkflowUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `MACOS` | `array` | No |  |
| `UBUNTU` | `array` | No |  |
| `WINDOWS` | `array` | No |  |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkflowUsage()->load(["id" => "workflow_usage_id", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowUsageEntity`

Create a new `WorkflowUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new GithubSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

